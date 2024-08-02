"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8110],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>g});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(n),m=a,g=d["".concat(l,".").concat(m)]||d[m]||u[m]||o;return n?r.createElement(g,i(i({ref:t},p),{},{components:n})):r.createElement(g,i({ref:t},p))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},325:(e,t,n)=>{n.d(t,{Z:()=>h});var r=n(7462),a=n(7294),o=n(9493);function i(e){const t=(0,a.useRef)(null),[n,r]=(0,a.useState)(e.className||""),[i,s]=(0,a.useState)(e.style||{}),[l,c]=(0,a.useState)(e.height),[p,d]=(0,a.useState)(),[u,m]=(0,a.useState)(JSON.stringify(e.config||"")),[g,f]=(0,a.useState)("");return(0,a.useEffect)((()=>{if(!t.current)return;const{className:n,style:a,height:i,sdkReady:l,config:h,...y}=e;if(r(n||""),s(a||{}),c(i),p&&g===JSON.stringify(y)){if(u===JSON.stringify(h))return;m(JSON.stringify(h)),"string"==typeof h?fetch(h).then((e=>e.json())).then((e=>{p?.setConfig(e)})):h&&p.setConfig(h)}else f(JSON.stringify(y)),p?.destroy(),(0,o.T)(t.current,{config:h,...y}).then((e=>{d(e),"function"==typeof l&&l(e)}))}),[e]),(0,a.useEffect)((()=>()=>{p?.destroy()}),[]),a.createElement("div",{ref:t,className:n,style:i,"data-height":l})}var s=n(1446),l=n(412),c=n(814),p=n(4866),d=n(5162),u=n(2134),m=n(420);function g(e){const[t,n]=(0,a.useState)(e.js),[r,o]=(0,a.useState)(e.ts),[i,s]=(0,a.useState)(e.react),[g,f]=(0,a.useState)(e.vue),[h,y]=(0,a.useState)(e.svelte),v="3.7rem",[w,b]=(0,a.useState)(!0),[k,P]=(0,a.useState)(v),E=(0,a.useRef)(null),S=()=>{setTimeout((()=>{P(`calc(${E.current.offsetHeight}px + ${v})`)}),5),setTimeout((()=>{P(`calc(${E.current.offsetHeight}px + ${v})`)}),255)};return(0,a.useEffect)((()=>{if(l.Z.canUseDOM){const e=function(e,t){void 0===t&&(t="js");try{return window.prettier?.format(e,{parser:"html"===t?"html":"babel",plugins:window.prettierPlugins})}catch{return e}};n(e(t,"js")),o(e(r,"ts")),s(e(i,"jsx")),f(e(g,"html")),y(e(h,"html"))}}),[]),a.createElement("details",{className:`alert alert--info ${u.Z.details} ${m.Z.details}`,"data-collapsed":w,style:{height:w?v:k,overflow:"hidden",willChange:"height",transition:`height ${w?"250ms":"265ms"} ease-in-out 0s`,margin:"1em 0"}},a.createElement("summary",{onClick:()=>{b(!w),S()}},"show code"),a.createElement("div",{ref:E,style:{display:"block",overflow:"hidden"}},a.createElement("div",{className:u.Z.collapsibleContent},a.createElement(p.Z,{groupId:"sdk-code"},a.createElement(d.Z,{value:"js",label:"JS",attributes:{onMouseDown:S}},a.createElement(c.Z,{language:"js"},t)),a.createElement(d.Z,{value:"ts",label:"TS",attributes:{onMouseDown:S}},a.createElement(c.Z,{language:"ts"},r)),a.createElement(d.Z,{value:"react",label:"React",attributes:{onMouseDown:S}},a.createElement(c.Z,{language:"jsx"},i)),a.createElement(d.Z,{value:"vue",label:"Vue",attributes:{onMouseDown:S}},a.createElement(c.Z,{language:"html"},g)),a.createElement(d.Z,{value:"svelte",label:"Svelte",attributes:{onMouseDown:S}},a.createElement(c.Z,{language:"html"},h))))))}const f="container_Egsj";function h(e){const{className:t,style:n,showCode:o,height:l,...c}=e,p=e=>JSON.stringify(e,null,2),d=`\nimport { createPlayground } from 'livecodes';\n\nconst options = ${p(c)};\ncreatePlayground('#container', options);\n\n`.trimStart(),u=`\nimport { createPlayground, type EmbedOptions } from 'livecodes';\n\nconst options: EmbedOptions = ${p(c)};\ncreatePlayground('#container', options);\n\n`.trimStart(),m=`\nimport LiveCodes from 'livecodes/react';\n\nexport default function App() {\n  const options = ${p(c)};\n  return (<LiveCodes {...options}></LiveCodes>);\n}\n\n`.trimStart(),h=`\n<script setup>\nimport LiveCodes from "livecodes/vue";\n\nconst options = ${p(c)};\n<\/script>\n<template>\n  <LiveCodes v-bind="options" />\n</template>\n\n`,y=`\n<script>\nimport { onMount } from 'svelte';\nimport { createPlayground } from 'livecodes';\n\nconst options = ${p(c)};\nlet container;\nonMount(() => {\n  createPlayground(container, options);\n});\n<\/script>\n\n<div bind:this="{container}"></div>\n\n`.trimStart();return a.createElement(a.Fragment,null,a.createElement(i,(0,r.Z)({className:`${f} ${e.className}`,style:{height:l||"50vh",...e.style},appUrl:s.G},e)),!1!==e.showCode&&a.createElement(g,{js:d,ts:u,react:m,vue:h,svelte:y}))}},9493:(e,t,n)=>{n.d(t,{T:()=>a,r:()=>o});var r=n(7728);async function a(e,t){void 0===t&&(t={}),"object"!=typeof e||e instanceof HTMLElement||"headless"!==e.view||(t=e,e=null);const{appUrl:n="https://livecodes.io/",params:r={},config:a={},import:o,lite:i,loading:s="lazy",template:l,view:c="split"}=t,p="headless"===c;let d,u=null;if("string"==typeof e)u=document.querySelector(e);else if(e instanceof HTMLElement)u=e;else if(!p||"object"!=typeof e)throw new Error("A valid container element is required.");if(!u){if(!p)throw new Error(`Cannot find element: "${e}"`);u=document.createElement("div"),S(u),document.body.appendChild(u)}try{d=new URL(n)}catch{throw new Error(`"${n}" is not a valid URL.`)}const m=d.origin;if("object"==typeof r&&Object.keys(r).forEach((e=>{d.searchParams.set(e,String(r[e]))})),"string"==typeof a)try{new URL(a),d.searchParams.set("config",a)}catch{throw new Error('"config" is not a valid URL or configuration object.')}else{if("object"!=typeof a)throw new Error('"config" is not a valid URL or configuration object.');Object.keys(a).length>0&&d.searchParams.set("config","sdk")}l&&d.searchParams.set("template",l),o&&d.searchParams.set("x",o),i&&d.searchParams.set("lite","true"),d.searchParams.set("embed","true"),d.searchParams.set("loading",p?"eager":s),d.searchParams.set("view",c);let g=!1;const f="Cannot call API methods after calling `destroy()`.",h=await new Promise((e=>{if(!u)return;const t=u.dataset.height||u.style.height;if(t&&!p){const e=isNaN(Number(t))?t:t+"px";u.style.height=e}"false"===u.dataset.defaultStyles||p||(u.style.backgroundColor||="#fff",u.style.border||="1px solid black",u.style.borderRadius||="5px",u.style.boxSizing||="border-box",u.style.padding||="0",u.style.width||="100%",u.style.height||=u.style.height||"300px",u.style.minHeight="200px",u.style.flexGrow="1",u.style.overflow||="hidden",u.style.resize||="vertical");const n=document.createElement("iframe");n.setAttribute("allow","accelerometer; camera; encrypted-media; display-capture; geolocation; gyroscope; microphone; midi; clipboard-read; clipboard-write; web-share"),n.setAttribute("allowtransparency","true"),n.setAttribute("allowpaymentrequest","true"),n.setAttribute("allowfullscreen","true"),n.setAttribute("sandbox","allow-same-origin allow-downloads allow-forms allow-modals allow-orientation-lock allow-pointer-lock allow-popups allow-presentation allow-scripts");const r="eager"===s?"eager":"lazy";n.setAttribute("loading",r),n.classList.add("livecodes"),p?S(n):(n.style.height="100%",n.style.minHeight="200px",n.style.width="100%",n.style.margin="0",n.style.border="0",n.style.borderRadius=u.style.borderRadius),addEventListener("message",(function e(t){t.source===n.contentWindow&&t.origin===m&&"livecodes-get-config"===t.data?.type&&(removeEventListener("message",e),n.contentWindow?.postMessage({type:"livecodes-config",payload:a},m))})),n.onload=()=>{e(n)},n.src=d.href,u.appendChild(n)})),y=new Promise((e=>{addEventListener("message",(function t(n){n.source===h.contentWindow&&n.origin===m&&"livecodes-ready"===n.data?.type&&(removeEventListener("message",t),e(),y.settled=!0)}))})),v=()=>g?Promise.reject(f):new Promise((async e=>{y.settled&&e();h.contentWindow?.postMessage({type:"livecodes-load"},m),await y,e()})),w=(e,t)=>new Promise((async(n,r)=>{if(g)return r(f);await v();const a=N();addEventListener("message",(function t(o){if(o.source===h.contentWindow&&o.origin===m&&"livecodes-api-response"===o.data?.type&&o.data?.id===a&&o.data.method===e){removeEventListener("message",t);const e=o.data.payload;e?.error?r(e.error):n(e)}})),h.contentWindow?.postMessage({method:e,id:a,args:t},m)})),b={},k=["load","ready","code","console","tests","destroy"],P=(e,t)=>{if(g)throw new Error(f);return k.includes(e)?(w("watch",[e]),b[e]||(b[e]=[]),b[e]?.push(t),{remove:()=>{b[e]=b[e]?.filter((e=>e!==t)),0===b[e]?.length&&w("watch",[e,"unsubscribe"])}}):{remove:()=>{}}};addEventListener("message",(async e=>{const t={"livecodes-app-loaded":"load","livecodes-ready":"ready","livecodes-change":"code","livecodes-console":"console","livecodes-test-results":"tests","livecodes-destroy":"destroy"}[e.data?.type??""];if(e.source!==h.contentWindow||e.origin!==m||!t||!b[t])return;const n=e.data?.payload;b[t]?.forEach((e=>{e(n)}))}));const E=()=>{Object.values(b).forEach((e=>{e.length=0})),h?.remove?.(),g=!0};if("lazy"===s&&"IntersectionObserver"in window){new IntersectionObserver(((e,t)=>{e.forEach((async e=>{e.isIntersecting&&(await v(),t.unobserve(u))}))}),{rootMargin:"150px"}).observe(u)}function S(e){e.style.position="absolute",e.style.top="0",e.style.visibility="hidden",e.style.opacity="0"}const N=()=>(String(Math.random())+Date.now().toFixed()).replace("0.","");return{load:()=>v(),run:()=>w("run"),format:e=>w("format",[e]),getShareUrl:e=>w("getShareUrl",[e]),getConfig:e=>w("getConfig",[e]),setConfig:e=>w("setConfig",[e]),getCode:()=>w("getCode"),show:(e,t)=>w("show",[e,t]),runTests:()=>w("runTests"),onChange:e=>P("code",e),watch:P,exec:function(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];return w("exec",[e,...n])},destroy:()=>y.settled?w("destroy").then(E):g?Promise.reject(f):(E(),Promise.resolve())}}function o(e){void 0===e&&(e={});const{appUrl:t,params:n,config:a,import:o,...i}=e,s="string"==typeof a?{config:a}:"object"==typeof a?{x:"code/"+(0,r.compressToEncodedURIComponent)(JSON.stringify(a))}:{},l=new URLSearchParams(JSON.parse(JSON.stringify({...i,...n,x:o,...s}))).toString();return(t||"https://livecodes.io")+(l?"?"+l:"")}globalThis.document&&document.currentScript&&"prefill"in document.currentScript?.dataset&&window.addEventListener("load",(()=>{document.querySelectorAll(".livecodes").forEach((e=>{let t;const n=e.dataset.options;if(n)try{t=JSON.parse(n)}catch{}let r;const o=e.dataset.config||e.dataset.prefill;if(o)try{r=JSON.parse(o)}catch{}const i=encodeURIComponent(e.outerHTML);e.innerHTML="",a(e,{import:"dom/"+i,...t,...r?{config:r}:{}})}))}))},9061:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var r=n(7462),a=(n(7294),n(3905)),o=n(325);const i={},s="PHP",l={unversionedId:"languages/php",id:"languages/php",title:"PHP",description:"PHP running client-side in the browser using Uniter.",source:"@site/docs/languages/php.md",sourceDirName:"languages",slug:"/languages/php",permalink:"/docs/languages/php",draft:!1,editUrl:"https://github.com/live-codes/livecodes/tree/develop/docs/docs/languages/php.md",tags:[],version:"current",frontMatter:{},sidebar:"docsSidebar",previous:{title:"PHP (Wasm)",permalink:"/docs/languages/php-wasm"},next:{title:"PostCSS",permalink:"/docs/languages/postcss"}},c={},p=[{value:"Usage",id:"usage",level:2},{value:"JavaScript Interoperability",id:"javascript-interoperability",level:3},{value:"Language Info",id:"language-info",level:2},{value:"Name",id:"name",level:3},{value:"Extension",id:"extension",level:3},{value:"Editor",id:"editor",level:3},{value:"Compiler",id:"compiler",level:2},{value:"Version",id:"version",level:3},{value:"Code Formatting",id:"code-formatting",level:2},{value:"Starter Template",id:"starter-template",level:2},{value:"Links",id:"links",level:2}],d={toc:p};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"php"},"PHP"),(0,a.kt)("p",null,"PHP running client-side in the browser using ",(0,a.kt)("a",{parentName:"p",href:"https://phptojs.com/"},"Uniter"),"."),(0,a.kt)("p",null,"Uniter is a light-weight PHP-to-JavaScript transpiler and runtime with JavaScript interoperability and client-side DOM manipulation. However, only a small subset of PHP's standard library is supported."),(0,a.kt)("admonition",{title:"Note",type:"info"},(0,a.kt)("p",{parentName:"admonition"},"If you need better standard library support, you may want to use ",(0,a.kt)("a",{parentName:"p",href:"/docs/languages/php-wasm"},(0,a.kt)("inlineCode",{parentName:"a"},"php-wasm")),"."),(0,a.kt)("p",{parentName:"admonition"},(0,a.kt)("inlineCode",{parentName:"p"},"php-wasm")," runs PHP in the browser using WebAssembly. This matches the behavior of the official PHP interpreter and allows using PHP's standard library. However, it requires relatively large download and has limited capabilities for client-side DOM manipulation.")),(0,a.kt)("h2",{id:"usage"},"Usage"),(0,a.kt)("h3",{id:"javascript-interoperability"},"JavaScript Interoperability"),(0,a.kt)("p",null,"Example:"),(0,a.kt)(o.Z,{template:"php",height:"80vh",mdxType:"LiveCodes"}),(0,a.kt)("h2",{id:"language-info"},"Language Info"),(0,a.kt)("h3",{id:"name"},"Name"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"php")),(0,a.kt)("h3",{id:"extension"},"Extension"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},".php")),(0,a.kt)("h3",{id:"editor"},"Editor"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"script")),(0,a.kt)("h2",{id:"compiler"},"Compiler"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://phptojs.com/"},"Uniter")),(0,a.kt)("h3",{id:"version"},"Version"),(0,a.kt)("p",null,"Uniter v2.18.0"),(0,a.kt)("h2",{id:"code-formatting"},"Code Formatting"),(0,a.kt)("p",null,"Using ",(0,a.kt)("a",{parentName:"p",href:"https://prettier.io/"},"prettier")," and ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/prettier/plugin-php"},"Prettier PHP Plugin"),"."),(0,a.kt)("h2",{id:"starter-template"},"Starter Template"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://livecodes.io/?template=php"},"https://livecodes.io/?template=php")),(0,a.kt)("h2",{id:"links"},"Links"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://php.net/"},"PHP")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://www.php.net/manual/en/"},"PHP documentation")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://phptojs.com/"},"Uniter")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/languages/php-wasm"},"PHP using ",(0,a.kt)("inlineCode",{parentName:"a"},"php-wasm"))," in LiveCodes")))}u.isMDXComponent=!0}}]);