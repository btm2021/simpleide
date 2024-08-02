var j=`<div id="resources-container" class="modal-container"><div class="modal-title">External Resources</div><div id="resources-screen-container" class="modal-screen-container"><div class="modal-screen"><label for="resources-search-input">Search Packages <span class="nowrap label-description">(powered by jsDelivr)</span></label> <input type="text" id="resources-search-input" placeholder="e.g. jquery, lodash@4, bootstrap@5.2.3, ..."><div id="resources-result-container"><ul id="resources-search-results"></ul></div><div id="resources-textarea-container"><div class="description center">Add stylesheet/script URLs and click 'Load'. Each URL should be in a separate line.</div><label for="external-stylesheets">External Stylesheets</label> <textarea id="external-stylesheets" placeholder="https://" data-resource="stylesheets"></textarea> <label for="external-scripts">External Scripts</label> <textarea id="external-scripts" placeholder="https://" data-resource="scripts"></textarea></div><label>Fonts <span class="nowrap label-description">(powered by Google Fonts)</span></label><div id="fonts-container"><select><option value="">Loading...</option></select> <button class="btn">Add</button></div><label>CSS Presets</label><div class="input-container"><span><input type="radio" id="resources-css-preset-none" name="css-preset" value="" checked> <label class="radio-label" for="resources-css-preset-none">None</label> </span><span><input type="radio" id="resources-css-preset-normalize-css" name="css-preset" value="normalize.css"> <label class="radio-label" for="resources-css-preset-normalize-css">Normalize.css</label> </span><span><input type="radio" id="resources-css-preset-reset-css" name="css-preset" value="reset-css"> <label class="radio-label" for="resources-css-preset-reset-css">Reset CSS</label></span></div></div></div></div>`;var Q=e=>e.replace(/{{APP_VERSION}}/g,"35").replace(/{{SDK_VERSION}}/g,"0.6.0").replace(/{{COMMIT_SHA}}/g,"e0342ef").replace(/{{REPO_URL}}/g,"https://github.com/live-codes/livecodes").replace(/{{DOCS_BASE_URL}}/g,"/docs/");var U=Q(j);var F=e=>{if(!e.startsWith("https://"))return e;let l=["https://esm.sh/","https://cdn.skypack.dev/","https://cdn.jsdelivr.net/npm/","https://fastly.jsdelivr.net/npm/","https://gcore.jsdelivr.net/npm/","https://testingcf.jsdelivr.net/npm/","https://jsdelivr.b-cdn.net/npm/","https://esm.run/","https://esbuild.vercel.app/","https://bundle.run/","https://unpkg.com/","https://npmcdn.com/","https://deno.bundlejs.com/?file&q=","https://jspm.dev/"];for(let a of l)if(e.startsWith(a))return e.replace(a,"");return e},O=e=>e.includes(":")&&!e.startsWith("data:")&&!e.startsWith("http")?e.split(":")[1]:e;var D=e=>`https://ofcncog2cu-dsn.algolia.net/1/indexes/npm-search/${encodeURIComponent(e)}?x-algolia-agent=Browser`,N={"X-Algolia-Application-Id":"OFCNCOG2CU","X-Algolia-API-Key":"f54e21fa3a2a0160595bb058179bfb1e"},W=["name","description","homepage","repository.url","version"],R="https://data.jsdelivr.com/v1",C={"User-Agent":"https://livecodes.io"},M=e=>{let l=e.startsWith("@"),a=l?e.slice(1):e,[o,i]=a.split("@");return[(l?"@":"")+o,i]},X=async(e,l=10)=>{let a={page:0,hitsPerPage:l,attributesToHighlight:[],attributesToRetrieve:W,analyticsTags:["jsdelivr"]},[o,i]=M(e),t;if(i){let c=await h(e);typeof c=="string"&&(t=M(c)[1])}let n=await fetch(D("query"),{method:"POST",headers:{"Content-Type":"application/json; charset=UTF-8",...N},body:JSON.stringify({query:o,...a})}).then(c=>{if(!c.ok)throw new Error("failed to fetch");return c}).then(c=>c.json()).catch(c=>({error:!0,message:c.mesage||String(c)}));if("error"in n)return n;let E=n.hits.map(c=>(c.name===o&&t&&(c.version=t),c.repository?.url&&(c.repo=c.repository?.url),c));return E.sort((c,L)=>c.name===o?-1:L.name===o?1:0),E},h=async e=>{let l=`${R}/package/resolve/npm/${e}`,a=await fetch(l,{headers:C}).then(t=>{if(!t.ok)throw new Error("failed to fetch");return t}).then(t=>t.json()).catch(t=>({error:!0,message:t.mesage||String(t)}));if("error"in a)return a;let o=M(e)[0],i=a.version;return i?`${o}@${i}`:o},Y=async e=>{let[l,a]=M(O(F(e))),o;if(a){let n=await h(e);typeof n=="string"&&(o=M(n)[1])}let i=D(l)+"&attributesToRetrieve="+W.join(","),t=await fetch(i,{method:"GET",headers:N}).then(n=>{if(!n.ok)throw new Error("failed to fetch");return n}).then(n=>n.json()).catch(n=>({error:!0,message:n.mesage||String(n)}));return"error"in t||(o&&(t.version=o),t.repository?.url&&(t.repo=t.repository?.url)),t},ee=async e=>{let l=await h(e),a=`${R}/package/npm/${l}/flat`,o=await fetch(a,{headers:C}).then(t=>{if(!t.ok)throw new Error("failed to fetch");return t}).then(t=>t.json()).catch(t=>({error:!0,message:t.mesage||String(t)}));if("error"in o)return o;let i=`https://cdn.jsdelivr.net/npm/${l}`;return{...o.default?{default:i+o.default}:{},files:o.files.map(t=>i+t.name)}},te=async e=>{let l=await h(e),a=`${R}/package/npm/${l}/entrypoints`,o=await fetch(a,{headers:C}).then(t=>{if(!t.ok)throw new Error("failed to fetch");return t}).then(t=>t.json()).catch(t=>({error:!0,message:t.mesage||String(t)}));if("error"in o)return o;let i=`https://cdn.jsdelivr.net/npm/${l}`;return{...o.js?.file?{js:i+o.js?.file}:{},...o.css?.file?{css:i+o.css?.file}:{}}},P={search:X,getPkgInfo:Y,getPkgFiles:ee,getPkgDefaultFiles:te};var $=(e,l)=>{let a;return(...o)=>{a&&clearTimeout(a),a=setTimeout(()=>e.apply(null,o),typeof l=="function"?l():l)}};var _=e=>{let l=()=>{e.style.display="none",t(),window.watchingEscape=!1},a=n=>{!e.contains(n.target)&&i(e)&&l()},o=n=>{n.key==="Escape"&&(l(),n.preventDefault())},i=n=>!!n&&!!(n.offsetWidth||n.offsetHeight||n.getClientRects().length),t=()=>{document.removeEventListener("click",a),document.removeEventListener("keydown",o)};return document.addEventListener("click",a),document.addEventListener("keydown",o),window.watchingEscape=!0,{clear:()=>t()}};var z=()=>document.querySelectorAll("#resources-container textarea"),V=()=>document.querySelectorAll('#resources-container input[type="radio"]');var ye=({baseUrl:e,modal:l,eventsManager:a,deps:o})=>{let i=document.createElement("div");i.innerHTML=U;let t=i.firstChild;l.show(t,{onClose:()=>K()});let n=z();n.forEach(r=>{let u=o.getConfig()[r.dataset.resource];r.value=u.length!==0?u.join(`
`)+`
`:""});let E=V();E.forEach(r=>{o.getConfig().cssPreset===r.value&&(r.checked=!0)});let c=document.querySelector("#resources-container #resources-search-input"),L=document.querySelector("#resources-container #resources-result-container"),d=document.querySelector("#resources-container #resources-search-results"),T=document.querySelector("#resources-container #fonts-container select"),H=document.querySelector("#resources-container #fonts-container button"),b=(r,u)=>{if(!r||v(r,u))return;let p=u==="stylesheets"?n[0]:n[1];p.value=p.value.trim()===""?r.trim()+`
`:p.value.split(`
`).map(s=>s.trim()).filter(s=>s!=="").join(`
`)+`
`+r.trim()+`
`,document.querySelector(`#resources-search-results a.add-resource[data-resource-url="${r}"]`)?.classList.add("resource-added")},v=(r,u)=>r?!!(u==="stylesheets"?n[0]:n[1]).value.split(`
`).map(s=>s.trim()).find(s=>s===r.trim()):!1,J=({name:r,version:u,description:p,files:s})=>{let y=document.createElement("li"),g=document.createElement("div");g.classList.add("search-result-item-title"),g.textContent=r,y.appendChild(g);let q=document.createElement("span");q.classList.add("label-description"),q.textContent="v"+u,g.appendChild(q);let k=document.createElement("div");k.classList.add("search-result-item-description"),k.textContent=p||"",y.appendChild(k);let S=document.createElement("div");S.classList.add("search-result-item-files"),y.appendChild(S);let w=document.createElement("span");if(w.classList.add("search-result-item-script"),S.appendChild(w),s?.js){let f=v(s.js,"scripts"),m=document.createElement("a");m.classList.add("add-resource"),m.classList.toggle("resource-added",f),m.href="#",m.onclick=f?null:()=>b(s.js||"","scripts"),m.title=s.js,m.dataset.resourceUrl=s.js,m.innerHTML=`<img src="${e}assets/images/javascript.svg" />`,w.appendChild(m)}let I=document.createElement("span");if(I.classList.add("search-result-item-stylesheet"),S.appendChild(I),s?.css){let f=v(s.css,"stylesheets"),m=document.createElement("a");m.classList.add("add-resource"),m.classList.toggle("resource-added",f),m.href="#",m.onclick=f?null:()=>b(s.css||"","stylesheets"),m.title=s.css,m.dataset.resourceUrl=s.css,m.innerHTML=`<img src="${e}assets/images/css.svg" />`,I.appendChild(m)}let A=document.createElement("span");A.classList.add("search-result-item-Browse"),S.appendChild(A);let x=document.createElement("a");return x.href=`https://cdn.jsdelivr.net/npm/${r}/`,x.target="_blank",x.title="Browse package files on jsDelivr",x.textContent="Browse",A.appendChild(x),y},G=async()=>{let r=c.value,u=await P.search(c.value,5);if(r!==c.value){d.innerHTML='<li><div class="search-result-item-description">Loading...</div></li>';return}if("error"in u){d.innerHTML='<li><div class="search-result-item-error">Failed to load results!</div></li>';return}if(u.length===0){d.innerHTML=`<li><div class="search-result-item-description">No results found for: <strong>${r}</strong></div></li>`;return}let p=(await Promise.all(u.map(async s=>{let y=s.version!=null?`${s.name}@${s.version}`:s.name,g=await P.getPkgDefaultFiles(y);if(!("error"in g))return{...s,files:g}}))).filter(Boolean);if(r===c.value){if(p.length===0){d.innerHTML='<li><div class="search-result-item-error">Failed to load results!</div></li>';return}d.innerHTML="",p.forEach(s=>d.appendChild(J(s)))}},B;c?.focus(),c.addEventListener("input",async()=>{if(d.innerHTML='<li><div class="search-result-item-description">Loading...</div></li>',B?.clear(),c.value.length>0)L.style.display="unset",B=_(L);else{L.style.display="none";return}$(G,300)()}),import(e+"google-fonts.0d0bc37857dba82d020f93ca95511304.js").then(r=>{T.innerHTML='<option value="">Select font ...</option>',r.googleFonts.getFonts().forEach(p=>{let s=document.createElement("option");s.innerText=p,T.appendChild(s)}),a.addEventListener(H,"click",()=>{T.value!==""&&(b(r.googleFonts.getStylesheetUrl(T.value),"stylesheets"),T.value="",H.innerText="\u2714",setTimeout(()=>{H.innerText="Add"},1e3))})});let K=async()=>{n.forEach(r=>{let u=r.dataset.resource;o.setConfig({...o.getConfig(),[u]:r.value?.split(`
`).map(p=>p.trim()).filter(p=>p!=="")||[]})}),E.forEach(r=>{r.checked&&o.setConfig({...o.getConfig(),cssPreset:r.value})}),o.loadResources()}};export{ye as createExternalResourcesUI};
