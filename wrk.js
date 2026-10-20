self.addEventListener('fetch',e=>{const url=new URL(e.request.url);if(url.pathname==='./api.js'){e.respondWith(caches.open('system').then(c=>c.match(e.request).then(r=>r||fetch(e.request).then(resp => {c.put(e.request,resp.clone())
return resp;}))));}});
self.addEventListener("install",event=>{event.waitUntil(caches.open("pages").then(cache=>cache.addAll([..."abcdefghijklmnopqrstuvwxyz"].map(c=>`./${c}.html`))));});
