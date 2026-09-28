const CACHE='puzzle-studio-v10-5';
const ASSETS=[
  './',
  './index.html',
  './manifest.webmanifest',
  './icon-192.png',
  './icon-512.png',
  './404.html'
];

self.addEventListener('install',event=>{
  event.waitUntil(
    caches.open(CACHE)
      .then(cache=>cache.addAll(ASSETS))
      .then(()=>self.skipWaiting())
  );
});

self.addEventListener('activate',event=>{
  event.waitUntil(
    caches.keys()
      .then(keys=>Promise.all(keys.filter(k=>k!==CACHE).map(k=>caches.delete(k))))
      .then(()=>self.clients.claim())
  );
});

self.addEventListener('fetch',event=>{
  if(event.request.method!=='GET')return;
  const req=event.request;
  const isNavigation=req.mode==='navigate'||req.destination==='document';

  if(isNavigation){
    event.respondWith(
      caches.match('./index.html').then(cached=>{
        const network=fetch(req,{cache:'no-store'})
          .then(resp=>{
            const copy=resp.clone();
            caches.open(CACHE).then(cache=>cache.put('./index.html',copy));
            return resp;
          })
          .catch(()=>null);

        if(cached){
          event.waitUntil(network);
          return cached;
        }
        return network.then(resp=>resp||caches.match('./404.html'));
      })
    );
    return;
  }

  event.respondWith(
    caches.match(req).then(cached=>{
      if(cached)return cached;
      return fetch(req).then(resp=>{
        const copy=resp.clone();
        caches.open(CACHE).then(cache=>cache.put(req,copy));
        return resp;
      });
    })
  );
});
