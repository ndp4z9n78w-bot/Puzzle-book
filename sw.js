'use strict';
const CACHE_NAME='puzzle-studio-v28.3';
const ASSETS=['./index.html','./manifest.webmanifest','./icon-192.png','./icon-512.png'];
self.addEventListener('install',event=>event.waitUntil(caches.open(CACHE_NAME).then(cache=>cache.addAll(ASSETS)).then(()=>self.skipWaiting())));
self.addEventListener('activate',event=>event.waitUntil(caches.keys().then(names=>Promise.all(names.filter(name=>name.startsWith('puzzle-studio-')&&name!==CACHE_NAME).map(name=>caches.delete(name)))).then(()=>self.clients.claim())));
self.addEventListener('fetch',event=>{
 const request=event.request,url=new URL(request.url);
 if(request.method!=='GET'||url.origin!==self.location.origin)return;
 if(request.mode==='navigate'){
   event.respondWith(fetch(request).then(async response=>{if(response.ok){const cache=await caches.open(CACHE_NAME);await cache.put('./index.html',response.clone())}return response}).catch(()=>caches.match('./index.html')));return;
 }
 if(ASSETS.some(asset=>new URL(asset,self.location.href).pathname===url.pathname))event.respondWith(caches.open(CACHE_NAME).then(async cache=>(await cache.match(request,{ignoreSearch:true}))||fetch(request)));
});
