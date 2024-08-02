"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3729],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>h});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=c(n),m=a,h=p["".concat(l,".").concat(m)]||p[m]||u[m]||o;return n?r.createElement(h,i(i({ref:t},d),{},{components:n})):r.createElement(h,i({ref:t},d))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},1262:(e,t,n)=>{n.d(t,{Z:()=>o});var r=n(7294),a=n(2389);function o(e){let{children:t,fallback:n}=e;return(0,a.Z)()?r.createElement(r.Fragment,null,t?.()):n??null}},325:(e,t,n)=>{n.d(t,{Z:()=>f});var r=n(7462),a=n(7294),o=n(9493);function i(e){const t=(0,a.useRef)(null),[n,r]=(0,a.useState)(e.className||""),[i,s]=(0,a.useState)(e.style||{}),[l,c]=(0,a.useState)(e.height),[d,p]=(0,a.useState)(),[u,m]=(0,a.useState)(JSON.stringify(e.config||"")),[h,g]=(0,a.useState)("");return(0,a.useEffect)((()=>{if(!t.current)return;const{className:n,style:a,height:i,sdkReady:l,config:f,...y}=e;if(r(n||""),s(a||{}),c(i),d&&h===JSON.stringify(y)){if(u===JSON.stringify(f))return;m(JSON.stringify(f)),"string"==typeof f?fetch(f).then((e=>e.json())).then((e=>{d?.setConfig(e)})):f&&d.setConfig(f)}else g(JSON.stringify(y)),d?.destroy(),(0,o.T)(t.current,{config:f,...y}).then((e=>{p(e),"function"==typeof l&&l(e)}))}),[e]),(0,a.useEffect)((()=>()=>{d?.destroy()}),[]),a.createElement("div",{ref:t,className:n,style:i,"data-height":l})}var s=n(1446),l=n(412),c=n(814),d=n(4866),p=n(5162),u=n(2134),m=n(420);function h(e){const[t,n]=(0,a.useState)(e.js),[r,o]=(0,a.useState)(e.ts),[i,s]=(0,a.useState)(e.react),[h,g]=(0,a.useState)(e.vue),[f,y]=(0,a.useState)(e.svelte),v="3.7rem",[b,w]=(0,a.useState)(!0),[k,E]=(0,a.useState)(v),P=(0,a.useRef)(null),N=()=>{setTimeout((()=>{E(`calc(${P.current.offsetHeight}px + ${v})`)}),5),setTimeout((()=>{E(`calc(${P.current.offsetHeight}px + ${v})`)}),255)};return(0,a.useEffect)((()=>{if(l.Z.canUseDOM){const e=function(e,t){void 0===t&&(t="js");try{return window.prettier?.format(e,{parser:"html"===t?"html":"babel",plugins:window.prettierPlugins})}catch{return e}};n(e(t,"js")),o(e(r,"ts")),s(e(i,"jsx")),g(e(h,"html")),y(e(f,"html"))}}),[]),a.createElement("details",{className:`alert alert--info ${u.Z.details} ${m.Z.details}`,"data-collapsed":b,style:{height:b?v:k,overflow:"hidden",willChange:"height",transition:`height ${b?"250ms":"265ms"} ease-in-out 0s`,margin:"1em 0"}},a.createElement("summary",{onClick:()=>{w(!b),N()}},"show code"),a.createElement("div",{ref:P,style:{display:"block",overflow:"hidden"}},a.createElement("div",{className:u.Z.collapsibleContent},a.createElement(d.Z,{groupId:"sdk-code"},a.createElement(p.Z,{value:"js",label:"JS",attributes:{onMouseDown:N}},a.createElement(c.Z,{language:"js"},t)),a.createElement(p.Z,{value:"ts",label:"TS",attributes:{onMouseDown:N}},a.createElement(c.Z,{language:"ts"},r)),a.createElement(p.Z,{value:"react",label:"React",attributes:{onMouseDown:N}},a.createElement(c.Z,{language:"jsx"},i)),a.createElement(p.Z,{value:"vue",label:"Vue",attributes:{onMouseDown:N}},a.createElement(c.Z,{language:"html"},h)),a.createElement(p.Z,{value:"svelte",label:"Svelte",attributes:{onMouseDown:N}},a.createElement(c.Z,{language:"html"},f))))))}const g="container_Egsj";function f(e){const{className:t,style:n,showCode:o,height:l,...c}=e,d=e=>JSON.stringify(e,null,2),p=`\nimport { createPlayground } from 'livecodes';\n\nconst options = ${d(c)};\ncreatePlayground('#container', options);\n\n`.trimStart(),u=`\nimport { createPlayground, type EmbedOptions } from 'livecodes';\n\nconst options: EmbedOptions = ${d(c)};\ncreatePlayground('#container', options);\n\n`.trimStart(),m=`\nimport LiveCodes from 'livecodes/react';\n\nexport default function App() {\n  const options = ${d(c)};\n  return (<LiveCodes {...options}></LiveCodes>);\n}\n\n`.trimStart(),f=`\n<script setup>\nimport LiveCodes from "livecodes/vue";\n\nconst options = ${d(c)};\n<\/script>\n<template>\n  <LiveCodes v-bind="options" />\n</template>\n\n`,y=`\n<script>\nimport { onMount } from 'svelte';\nimport { createPlayground } from 'livecodes';\n\nconst options = ${d(c)};\nlet container;\nonMount(() => {\n  createPlayground(container, options);\n});\n<\/script>\n\n<div bind:this="{container}"></div>\n\n`.trimStart();return a.createElement(a.Fragment,null,a.createElement(i,(0,r.Z)({className:`${g} ${e.className}`,style:{height:l||"50vh",...e.style},appUrl:s.G},e)),!1!==e.showCode&&a.createElement(h,{js:p,ts:u,react:m,vue:f,svelte:y}))}},4887:(e,t,n)=>{n.d(t,{Z:()=>l});var r=n(7294),a=n(1262),o=n(814),i=n(9493),s=n(1446);function l(e){const{params:t,config:n,code:l,language:c="js",codeTitle:d="",showLineNumbers:p=!1,formatCode:u=!0,linkText:m="Run in LiveCodes",style:h={},className:g=""}=e,f=(0,i.r)({appUrl:s.G,params:t,config:n});return r.createElement("div",{style:{marginBottom:"30px",...h},className:g},l&&r.createElement(a.Z,null,(()=>{return r.createElement(o.Z,{language:c,title:d,showLineNumbers:p},u?(e=l,void 0===(t=c)&&(t="js"),window.prettier?.format(e,{parser:"html"===t?"html":"babel",plugins:window.prettierPlugins})):l);var e,t})),r.createElement("a",{href:f,target:"_blank",rel:"noreferrer"},m,r.createElement("svg",{width:"12",height:"12","aria-hidden":"true",viewBox:"0 0 24 24",className:"iconExternalLink_node_modules-@docusaurus-theme-classic-lib-theme-Icon-ExternalLink-styles-module",style:{marginLeft:"4px"}},r.createElement("path",{fill:"currentColor",d:"M21 13v10h-21v-19h12v2h-10v15h17v-8h2zm3-12h-10.988l4.035 4-6.977 7.07 2.828 2.828 6.977-7.07 4.125 4.172v-11z"}))))}},9493:(e,t,n)=>{n.d(t,{T:()=>a,r:()=>o});var r=n(7728);async function a(e,t){void 0===t&&(t={}),"object"!=typeof e||e instanceof HTMLElement||"headless"!==e.view||(t=e,e=null);const{appUrl:n="https://livecodes.io/",params:r={},config:a={},import:o,lite:i,loading:s="lazy",template:l,view:c="split"}=t,d="headless"===c;let p,u=null;if("string"==typeof e)u=document.querySelector(e);else if(e instanceof HTMLElement)u=e;else if(!d||"object"!=typeof e)throw new Error("A valid container element is required.");if(!u){if(!d)throw new Error(`Cannot find element: "${e}"`);u=document.createElement("div"),N(u),document.body.appendChild(u)}try{p=new URL(n)}catch{throw new Error(`"${n}" is not a valid URL.`)}const m=p.origin;if("object"==typeof r&&Object.keys(r).forEach((e=>{p.searchParams.set(e,String(r[e]))})),"string"==typeof a)try{new URL(a),p.searchParams.set("config",a)}catch{throw new Error('"config" is not a valid URL or configuration object.')}else{if("object"!=typeof a)throw new Error('"config" is not a valid URL or configuration object.');Object.keys(a).length>0&&p.searchParams.set("config","sdk")}l&&p.searchParams.set("template",l),o&&p.searchParams.set("x",o),i&&p.searchParams.set("lite","true"),p.searchParams.set("embed","true"),p.searchParams.set("loading",d?"eager":s),p.searchParams.set("view",c);let h=!1;const g="Cannot call API methods after calling `destroy()`.",f=await new Promise((e=>{if(!u)return;const t=u.dataset.height||u.style.height;if(t&&!d){const e=isNaN(Number(t))?t:t+"px";u.style.height=e}"false"===u.dataset.defaultStyles||d||(u.style.backgroundColor||="#fff",u.style.border||="1px solid black",u.style.borderRadius||="5px",u.style.boxSizing||="border-box",u.style.padding||="0",u.style.width||="100%",u.style.height||=u.style.height||"300px",u.style.minHeight="200px",u.style.flexGrow="1",u.style.overflow||="hidden",u.style.resize||="vertical");const n=document.createElement("iframe");n.setAttribute("allow","accelerometer; camera; encrypted-media; display-capture; geolocation; gyroscope; microphone; midi; clipboard-read; clipboard-write; web-share"),n.setAttribute("allowtransparency","true"),n.setAttribute("allowpaymentrequest","true"),n.setAttribute("allowfullscreen","true"),n.setAttribute("sandbox","allow-same-origin allow-downloads allow-forms allow-modals allow-orientation-lock allow-pointer-lock allow-popups allow-presentation allow-scripts");const r="eager"===s?"eager":"lazy";n.setAttribute("loading",r),n.classList.add("livecodes"),d?N(n):(n.style.height="100%",n.style.minHeight="200px",n.style.width="100%",n.style.margin="0",n.style.border="0",n.style.borderRadius=u.style.borderRadius),addEventListener("message",(function e(t){t.source===n.contentWindow&&t.origin===m&&"livecodes-get-config"===t.data?.type&&(removeEventListener("message",e),n.contentWindow?.postMessage({type:"livecodes-config",payload:a},m))})),n.onload=()=>{e(n)},n.src=p.href,u.appendChild(n)})),y=new Promise((e=>{addEventListener("message",(function t(n){n.source===f.contentWindow&&n.origin===m&&"livecodes-ready"===n.data?.type&&(removeEventListener("message",t),e(),y.settled=!0)}))})),v=()=>h?Promise.reject(g):new Promise((async e=>{y.settled&&e();f.contentWindow?.postMessage({type:"livecodes-load"},m),await y,e()})),b=(e,t)=>new Promise((async(n,r)=>{if(h)return r(g);await v();const a=S();addEventListener("message",(function t(o){if(o.source===f.contentWindow&&o.origin===m&&"livecodes-api-response"===o.data?.type&&o.data?.id===a&&o.data.method===e){removeEventListener("message",t);const e=o.data.payload;e?.error?r(e.error):n(e)}})),f.contentWindow?.postMessage({method:e,id:a,args:t},m)})),w={},k=["load","ready","code","console","tests","destroy"],E=(e,t)=>{if(h)throw new Error(g);return k.includes(e)?(b("watch",[e]),w[e]||(w[e]=[]),w[e]?.push(t),{remove:()=>{w[e]=w[e]?.filter((e=>e!==t)),0===w[e]?.length&&b("watch",[e,"unsubscribe"])}}):{remove:()=>{}}};addEventListener("message",(async e=>{const t={"livecodes-app-loaded":"load","livecodes-ready":"ready","livecodes-change":"code","livecodes-console":"console","livecodes-test-results":"tests","livecodes-destroy":"destroy"}[e.data?.type??""];if(e.source!==f.contentWindow||e.origin!==m||!t||!w[t])return;const n=e.data?.payload;w[t]?.forEach((e=>{e(n)}))}));const P=()=>{Object.values(w).forEach((e=>{e.length=0})),f?.remove?.(),h=!0};if("lazy"===s&&"IntersectionObserver"in window){new IntersectionObserver(((e,t)=>{e.forEach((async e=>{e.isIntersecting&&(await v(),t.unobserve(u))}))}),{rootMargin:"150px"}).observe(u)}function N(e){e.style.position="absolute",e.style.top="0",e.style.visibility="hidden",e.style.opacity="0"}const S=()=>(String(Math.random())+Date.now().toFixed()).replace("0.","");return{load:()=>v(),run:()=>b("run"),format:e=>b("format",[e]),getShareUrl:e=>b("getShareUrl",[e]),getConfig:e=>b("getConfig",[e]),setConfig:e=>b("setConfig",[e]),getCode:()=>b("getCode"),show:(e,t)=>b("show",[e,t]),runTests:()=>b("runTests"),onChange:e=>E("code",e),watch:E,exec:function(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];return b("exec",[e,...n])},destroy:()=>y.settled?b("destroy").then(P):h?Promise.reject(g):(P(),Promise.resolve())}}function o(e){void 0===e&&(e={});const{appUrl:t,params:n,config:a,import:o,...i}=e,s="string"==typeof a?{config:a}:"object"==typeof a?{x:"code/"+(0,r.compressToEncodedURIComponent)(JSON.stringify(a))}:{},l=new URLSearchParams(JSON.parse(JSON.stringify({...i,...n,x:o,...s}))).toString();return(t||"https://livecodes.io")+(l?"?"+l:"")}globalThis.document&&document.currentScript&&"prefill"in document.currentScript?.dataset&&window.addEventListener("load",(()=>{document.querySelectorAll(".livecodes").forEach((e=>{let t;const n=e.dataset.options;if(n)try{t=JSON.parse(n)}catch{}let r;const o=e.dataset.config||e.dataset.prefill;if(o)try{r=JSON.parse(o)}catch{}const i=encodeURIComponent(e.outerHTML);e.innerHTML="",a(e,{import:"dom/"+i,...t,...r?{config:r}:{}})}))}))},3782:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>d});var r=n(7462),a=(n(7294),n(3905)),o=(n(4887),n(325));const i={},s="Python",l={unversionedId:"languages/python",id:"languages/python",title:"Python",description:"LiveCodes can run Python in the browser using Brython, a Python 3 implementation for client-side web programming.",source:"@site/docs/languages/python.md",sourceDirName:"languages",slug:"/languages/python",permalink:"/docs/languages/python",draft:!1,editUrl:"https://github.com/live-codes/livecodes/tree/develop/docs/docs/languages/python.md",tags:[],version:"current",frontMatter:{},sidebar:"docsSidebar",previous:{title:"Python (Wasm)",permalink:"/docs/languages/python-wasm"},next:{title:"R",permalink:"/docs/languages/r"}},c={},d=[{value:"Usage",id:"usage",level:2},{value:"Standard Library",id:"standard-library",level:3},{value:"JavaScript Interoperability",id:"javascript-interoperability",level:3},{value:"Language Info",id:"language-info",level:2},{value:"Name",id:"name",level:3},{value:"Extensions",id:"extensions",level:3},{value:"Editor",id:"editor",level:3},{value:"Compiler",id:"compiler",level:2},{value:"Version",id:"version",level:3},{value:"Code Formatting",id:"code-formatting",level:2},{value:"Example Usage",id:"example-usage",level:2},{value:"Starter Template",id:"starter-template",level:2},{value:"Links",id:"links",level:2}],p={toc:d};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"python"},"Python"),(0,a.kt)("p",null,"LiveCodes can run Python in the browser using ",(0,a.kt)("a",{parentName:"p",href:"https://brython.info/"},"Brython"),", a Python 3 implementation for client-side web programming."),(0,a.kt)("admonition",{title:"Note",type:"info"},(0,a.kt)("p",{parentName:"admonition"},"Brython is a light-weight Python interpreter written in JavaScript. However, It does not allow loading external packages from PyPI."),(0,a.kt)("p",{parentName:"admonition"},"If you need to import external packages including scientific Python packages like numpy, pandas, scipy, matplotlib, and scikit-learn, you may want to use ",(0,a.kt)("a",{parentName:"p",href:"/docs/languages/python-wasm"},"Python (Wasm)"),", which uses Pyodide the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/python/cpython"},"CPython")," port to WebAssembly.")),(0,a.kt)("h2",{id:"usage"},"Usage"),(0,a.kt)("p",null,"LiveCodes runs Python code in the browser. There is no server required to run the code and no need to install Python."),(0,a.kt)("p",null,"In addition, since the Python code is running on the client-side, it has access to the ",(0,a.kt)("a",{parentName:"p",href:"#javascript-interoperability"},"JavaScript scope"),", including the page DOM and browser APIs. See the ",(0,a.kt)("a",{parentName:"p",href:"#starter-template"},"starter template")," for an example."),(0,a.kt)("h3",{id:"standard-library"},"Standard Library"),(0,a.kt)("p",null,"Many modules of the Python standard library are functional. See ",(0,a.kt)("a",{parentName:"p",href:"https://brython.info/static_doc/en/stdlib.html"},"Brython distribution")," for details."),(0,a.kt)("h3",{id:"javascript-interoperability"},"JavaScript Interoperability"),(0,a.kt)("p",null,"Interaction with the page DOM and JavaScript can be achieved using ",(0,a.kt)("a",{parentName:"p",href:"https://brython.info/static_doc/en/browser.html"},(0,a.kt)("inlineCode",{parentName:"a"},"browser"))," and ",(0,a.kt)("a",{parentName:"p",href:"https://brython.info/static_doc/en/javascript.html"},(0,a.kt)("inlineCode",{parentName:"a"},"javascript"))," modules. See ",(0,a.kt)("a",{parentName:"p",href:"https://brython.info/static_doc/en/dom_api.html"},"this guide")," for using the DOM API."),(0,a.kt)("p",null,"Check the ",(0,a.kt)("a",{parentName:"p",href:"#starter-template"},"starter template")," for an example."),(0,a.kt)("h2",{id:"language-info"},"Language Info"),(0,a.kt)("h3",{id:"name"},"Name"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"python")),(0,a.kt)("h3",{id:"extensions"},"Extensions"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},".py")),(0,a.kt)("h3",{id:"editor"},"Editor"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"script")),(0,a.kt)("h2",{id:"compiler"},"Compiler"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://brython.info/"},"Brython")),(0,a.kt)("h3",{id:"version"},"Version"),(0,a.kt)("p",null,"Brython v3.12.3, running Python v3.12"),(0,a.kt)("h2",{id:"code-formatting"},"Code Formatting"),(0,a.kt)("p",null,"Not supported."),(0,a.kt)("h2",{id:"example-usage"},"Example Usage"),(0,a.kt)(o.Z,{template:"python",height:"80vh",mdxType:"LiveCodes"}),(0,a.kt)("h2",{id:"starter-template"},"Starter Template"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://livecodes.io/?template=python"},"https://livecodes.io/?template=python")),(0,a.kt)("h2",{id:"links"},"Links"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://www.python.org/"},"Python")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://brython.info/"},"Brython")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/languages/python-wasm"},"Python (Wasm)")," in LiveCodes")))}u.isMDXComponent=!0}}]);