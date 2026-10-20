window.aR=(async()=>{d=await(await navigator.storage.getDirectory()).getDirectoryHandle("main",{create:1});
window.getf=async p=>{try{return await(await d.getFileHandle(p)).getFile().then(f=>f.text())}catch{return null}}
window.setf=async(p,c)=>{let f=await d.getFileHandle(p,{create:1}),w=await f.createWritable();await w.write(c);await w.close()};
window.db=await new Promise(r=>{let q=indexedDB.open("mydb",1);q.onupgradeneeded=e=>e.target.result.createObjectStore("dw",{keyPath:"id",autoIncrement:1});q.onsuccess=e=>r(q.result)});
window.wins=m=>db.transaction("dw",m=="rw"?"readwrite":"readonly").objectStore("dw")
let zTop=1,focusWin=w=>w.style.zIndex=++zTop
window.wev=async win=>{bar=win.querySelector(".bar");eval(await getf("winevt.sys"))};
window.mk=async(n,u,r)=>{let w=document.createElement("p");w.className="w";w.id=r&&r.id;if(r)w.style.cssText=`left:${r.x||120}px;top:${r.y||80}px;width:${r.w||300}px;height:${r.h||200}px`;w.innerHTML=`<p class=bar><span>${n}</span>${await getf("title.sys")}</p><iframe allow="${await getf("perms.sys")}"src=${u}></iframe>`;w.onmousedown=()=>focusWin(w);document.body.append(w);focusWin(w);w.querySelector("button").onclick=()=>{w.remove();wins("rw").delete(+w.id)};wev(w);return w};
window.cW=async(n,u)=>{let w=await mk(n,u);let id=await new Promise(r=>wins("rw").add({name:n,url:u,x:w.offsetLeft,y:w.offsetTop,w:w.offsetWidth,h:w.offsetHeight,z:+w.style.zIndex||1}).onsuccess=e=>r(e.target.result));w.id=id};
window.rW=async r=>{await mk(r.name,r.url,r)};
window.iW=async()=>{let s=await new Promise(r=>{wins("ro").getAll().onsuccess=e=>r(e.target.result)});s.sort((a,b)=>(a.z||0)-(b.z||0));s.forEach(rW)};
})();
