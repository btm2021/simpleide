"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[1289],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>g});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=c(n),m=r,g=u["".concat(l,".").concat(m)]||u[m]||p[m]||i;return n?a.createElement(g,o(o({ref:t},d),{},{components:n})):a.createElement(g,o({ref:t},d))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:r,o[1]=s;for(var c=2;c<i;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},325:(e,t,n)=>{n.d(t,{Z:()=>h});var a=n(7462),r=n(7294),i=n(9493);function o(e){const t=(0,r.useRef)(null),[n,a]=(0,r.useState)(e.className||""),[o,s]=(0,r.useState)(e.style||{}),[l,c]=(0,r.useState)(e.height),[d,u]=(0,r.useState)(),[p,m]=(0,r.useState)(JSON.stringify(e.config||"")),[g,f]=(0,r.useState)("");return(0,r.useEffect)((()=>{if(!t.current)return;const{className:n,style:r,height:o,sdkReady:l,config:h,...v}=e;if(a(n||""),s(r||{}),c(o),d&&g===JSON.stringify(v)){if(p===JSON.stringify(h))return;m(JSON.stringify(h)),"string"==typeof h?fetch(h).then((e=>e.json())).then((e=>{d?.setConfig(e)})):h&&d.setConfig(h)}else f(JSON.stringify(v)),d?.destroy(),(0,i.T)(t.current,{config:h,...v}).then((e=>{u(e),"function"==typeof l&&l(e)}))}),[e]),(0,r.useEffect)((()=>()=>{d?.destroy()}),[]),r.createElement("div",{ref:t,className:n,style:o,"data-height":l})}var s=n(1446),l=n(412),c=n(814),d=n(4866),u=n(5162),p=n(2134),m=n(420);function g(e){const[t,n]=(0,r.useState)(e.js),[a,i]=(0,r.useState)(e.ts),[o,s]=(0,r.useState)(e.react),[g,f]=(0,r.useState)(e.vue),[h,v]=(0,r.useState)(e.svelte),y="3.7rem",[w,k]=(0,r.useState)(!0),[b,E]=(0,r.useState)(y),S=(0,r.useRef)(null),N=()=>{setTimeout((()=>{E(`calc(${S.current.offsetHeight}px + ${y})`)}),5),setTimeout((()=>{E(`calc(${S.current.offsetHeight}px + ${y})`)}),255)};return(0,r.useEffect)((()=>{if(l.Z.canUseDOM){const e=function(e,t){void 0===t&&(t="js");try{return window.prettier?.format(e,{parser:"html"===t?"html":"babel",plugins:window.prettierPlugins})}catch{return e}};n(e(t,"js")),i(e(a,"ts")),s(e(o,"jsx")),f(e(g,"html")),v(e(h,"html"))}}),[]),r.createElement("details",{className:`alert alert--info ${p.Z.details} ${m.Z.details}`,"data-collapsed":w,style:{height:w?y:b,overflow:"hidden",willChange:"height",transition:`height ${w?"250ms":"265ms"} ease-in-out 0s`,margin:"1em 0"}},r.createElement("summary",{onClick:()=>{k(!w),N()}},"show code"),r.createElement("div",{ref:S,style:{display:"block",overflow:"hidden"}},r.createElement("div",{className:p.Z.collapsibleContent},r.createElement(d.Z,{groupId:"sdk-code"},r.createElement(u.Z,{value:"js",label:"JS",attributes:{onMouseDown:N}},r.createElement(c.Z,{language:"js"},t)),r.createElement(u.Z,{value:"ts",label:"TS",attributes:{onMouseDown:N}},r.createElement(c.Z,{language:"ts"},a)),r.createElement(u.Z,{value:"react",label:"React",attributes:{onMouseDown:N}},r.createElement(c.Z,{language:"jsx"},o)),r.createElement(u.Z,{value:"vue",label:"Vue",attributes:{onMouseDown:N}},r.createElement(c.Z,{language:"html"},g)),r.createElement(u.Z,{value:"svelte",label:"Svelte",attributes:{onMouseDown:N}},r.createElement(c.Z,{language:"html"},h))))))}const f="container_Egsj";function h(e){const{className:t,style:n,showCode:i,height:l,...c}=e,d=e=>JSON.stringify(e,null,2),u=`\nimport { createPlayground } from 'livecodes';\n\nconst options = ${d(c)};\ncreatePlayground('#container', options);\n\n`.trimStart(),p=`\nimport { createPlayground, type EmbedOptions } from 'livecodes';\n\nconst options: EmbedOptions = ${d(c)};\ncreatePlayground('#container', options);\n\n`.trimStart(),m=`\nimport LiveCodes from 'livecodes/react';\n\nexport default function App() {\n  const options = ${d(c)};\n  return (<LiveCodes {...options}></LiveCodes>);\n}\n\n`.trimStart(),h=`\n<script setup>\nimport LiveCodes from "livecodes/vue";\n\nconst options = ${d(c)};\n<\/script>\n<template>\n  <LiveCodes v-bind="options" />\n</template>\n\n`,v=`\n<script>\nimport { onMount } from 'svelte';\nimport { createPlayground } from 'livecodes';\n\nconst options = ${d(c)};\nlet container;\nonMount(() => {\n  createPlayground(container, options);\n});\n<\/script>\n\n<div bind:this="{container}"></div>\n\n`.trimStart();return r.createElement(r.Fragment,null,r.createElement(o,(0,a.Z)({className:`${f} ${e.className}`,style:{height:l||"50vh",...e.style},appUrl:s.G},e)),!1!==e.showCode&&r.createElement(g,{js:u,ts:p,react:m,vue:h,svelte:v}))}},9493:(e,t,n)=>{n.d(t,{T:()=>r,r:()=>i});var a=n(7728);async function r(e,t){void 0===t&&(t={}),"object"!=typeof e||e instanceof HTMLElement||"headless"!==e.view||(t=e,e=null);const{appUrl:n="https://livecodes.io/",params:a={},config:r={},import:i,lite:o,loading:s="lazy",template:l,view:c="split"}=t,d="headless"===c;let u,p=null;if("string"==typeof e)p=document.querySelector(e);else if(e instanceof HTMLElement)p=e;else if(!d||"object"!=typeof e)throw new Error("A valid container element is required.");if(!p){if(!d)throw new Error(`Cannot find element: "${e}"`);p=document.createElement("div"),N(p),document.body.appendChild(p)}try{u=new URL(n)}catch{throw new Error(`"${n}" is not a valid URL.`)}const m=u.origin;if("object"==typeof a&&Object.keys(a).forEach((e=>{u.searchParams.set(e,String(a[e]))})),"string"==typeof r)try{new URL(r),u.searchParams.set("config",r)}catch{throw new Error('"config" is not a valid URL or configuration object.')}else{if("object"!=typeof r)throw new Error('"config" is not a valid URL or configuration object.');Object.keys(r).length>0&&u.searchParams.set("config","sdk")}l&&u.searchParams.set("template",l),i&&u.searchParams.set("x",i),o&&u.searchParams.set("lite","true"),u.searchParams.set("embed","true"),u.searchParams.set("loading",d?"eager":s),u.searchParams.set("view",c);let g=!1;const f="Cannot call API methods after calling `destroy()`.",h=await new Promise((e=>{if(!p)return;const t=p.dataset.height||p.style.height;if(t&&!d){const e=isNaN(Number(t))?t:t+"px";p.style.height=e}"false"===p.dataset.defaultStyles||d||(p.style.backgroundColor||="#fff",p.style.border||="1px solid black",p.style.borderRadius||="5px",p.style.boxSizing||="border-box",p.style.padding||="0",p.style.width||="100%",p.style.height||=p.style.height||"300px",p.style.minHeight="200px",p.style.flexGrow="1",p.style.overflow||="hidden",p.style.resize||="vertical");const n=document.createElement("iframe");n.setAttribute("allow","accelerometer; camera; encrypted-media; display-capture; geolocation; gyroscope; microphone; midi; clipboard-read; clipboard-write; web-share"),n.setAttribute("allowtransparency","true"),n.setAttribute("allowpaymentrequest","true"),n.setAttribute("allowfullscreen","true"),n.setAttribute("sandbox","allow-same-origin allow-downloads allow-forms allow-modals allow-orientation-lock allow-pointer-lock allow-popups allow-presentation allow-scripts");const a="eager"===s?"eager":"lazy";n.setAttribute("loading",a),n.classList.add("livecodes"),d?N(n):(n.style.height="100%",n.style.minHeight="200px",n.style.width="100%",n.style.margin="0",n.style.border="0",n.style.borderRadius=p.style.borderRadius),addEventListener("message",(function e(t){t.source===n.contentWindow&&t.origin===m&&"livecodes-get-config"===t.data?.type&&(removeEventListener("message",e),n.contentWindow?.postMessage({type:"livecodes-config",payload:r},m))})),n.onload=()=>{e(n)},n.src=u.href,p.appendChild(n)})),v=new Promise((e=>{addEventListener("message",(function t(n){n.source===h.contentWindow&&n.origin===m&&"livecodes-ready"===n.data?.type&&(removeEventListener("message",t),e(),v.settled=!0)}))})),y=()=>g?Promise.reject(f):new Promise((async e=>{v.settled&&e();h.contentWindow?.postMessage({type:"livecodes-load"},m),await v,e()})),w=(e,t)=>new Promise((async(n,a)=>{if(g)return a(f);await y();const r=C();addEventListener("message",(function t(i){if(i.source===h.contentWindow&&i.origin===m&&"livecodes-api-response"===i.data?.type&&i.data?.id===r&&i.data.method===e){removeEventListener("message",t);const e=i.data.payload;e?.error?a(e.error):n(e)}})),h.contentWindow?.postMessage({method:e,id:r,args:t},m)})),k={},b=["load","ready","code","console","tests","destroy"],E=(e,t)=>{if(g)throw new Error(f);return b.includes(e)?(w("watch",[e]),k[e]||(k[e]=[]),k[e]?.push(t),{remove:()=>{k[e]=k[e]?.filter((e=>e!==t)),0===k[e]?.length&&w("watch",[e,"unsubscribe"])}}):{remove:()=>{}}};addEventListener("message",(async e=>{const t={"livecodes-app-loaded":"load","livecodes-ready":"ready","livecodes-change":"code","livecodes-console":"console","livecodes-test-results":"tests","livecodes-destroy":"destroy"}[e.data?.type??""];if(e.source!==h.contentWindow||e.origin!==m||!t||!k[t])return;const n=e.data?.payload;k[t]?.forEach((e=>{e(n)}))}));const S=()=>{Object.values(k).forEach((e=>{e.length=0})),h?.remove?.(),g=!0};if("lazy"===s&&"IntersectionObserver"in window){new IntersectionObserver(((e,t)=>{e.forEach((async e=>{e.isIntersecting&&(await y(),t.unobserve(p))}))}),{rootMargin:"150px"}).observe(p)}function N(e){e.style.position="absolute",e.style.top="0",e.style.visibility="hidden",e.style.opacity="0"}const C=()=>(String(Math.random())+Date.now().toFixed()).replace("0.","");return{load:()=>y(),run:()=>w("run"),format:e=>w("format",[e]),getShareUrl:e=>w("getShareUrl",[e]),getConfig:e=>w("getConfig",[e]),setConfig:e=>w("setConfig",[e]),getCode:()=>w("getCode"),show:(e,t)=>w("show",[e,t]),runTests:()=>w("runTests"),onChange:e=>E("code",e),watch:E,exec:function(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),a=1;a<t;a++)n[a-1]=arguments[a];return w("exec",[e,...n])},destroy:()=>v.settled?w("destroy").then(S):g?Promise.reject(f):(S(),Promise.resolve())}}function i(e){void 0===e&&(e={});const{appUrl:t,params:n,config:r,import:i,...o}=e,s="string"==typeof r?{config:r}:"object"==typeof r?{x:"code/"+(0,a.compressToEncodedURIComponent)(JSON.stringify(r))}:{},l=new URLSearchParams(JSON.parse(JSON.stringify({...o,...n,x:i,...s}))).toString();return(t||"https://livecodes.io")+(l?"?"+l:"")}globalThis.document&&document.currentScript&&"prefill"in document.currentScript?.dataset&&window.addEventListener("load",(()=>{document.querySelectorAll(".livecodes").forEach((e=>{let t;const n=e.dataset.options;if(n)try{t=JSON.parse(n)}catch{}let a;const i=e.dataset.config||e.dataset.prefill;if(i)try{a=JSON.parse(i)}catch{}const o=encodeURIComponent(e.outerHTML);e.innerHTML="",r(e,{import:"dom/"+o,...t,...a?{config:a}:{}})}))}))},1015:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,config:()=>u,config2:()=>m,contentTitle:()=>s,default:()=>f,frontMatter:()=>o,metadata:()=>l,params:()=>p,toc:()=>d});var a=n(7462),r=(n(7294),n(3905)),i=n(325);const o={},s="Liquid",l={unversionedId:"languages/liquid",id:"languages/liquid",title:"Liquid",description:"LiquidJS: A simple, expressive and safe template engine.",source:"@site/docs/languages/liquid.md",sourceDirName:"languages",slug:"/languages/liquid",permalink:"/docs/languages/liquid",draft:!1,editUrl:"https://github.com/live-codes/livecodes/tree/develop/docs/docs/languages/liquid.md",tags:[],version:"current",frontMatter:{},sidebar:"docsSidebar",previous:{title:"Lightning CSS",permalink:"/docs/languages/lightningcss"},next:{title:"LiveScript",permalink:"/docs/languages/livescript"}},c={},d=[{value:"Usage",id:"usage",level:2},{value:"Pre-rendered (Default)",id:"pre-rendered-default",level:3},{value:"Dynamic",id:"dynamic",level:3},{value:"Language Info",id:"language-info",level:2},{value:"Name",id:"name",level:3},{value:"Extensions",id:"extensions",level:3},{value:"Editor",id:"editor",level:3},{value:"Compiler",id:"compiler",level:2},{value:"Version",id:"version",level:3},{value:"Code Formatting",id:"code-formatting",level:2},{value:"Custom Settings",id:"custom-settings",level:2},{value:"Example Usage",id:"example-usage",level:2},{value:"Pre-rendered",id:"pre-rendered",level:3},{value:"Dynamic",id:"dynamic-1",level:3},{value:"Links",id:"links",level:2}],u={markup:{language:"liquid",content:"Hello, {{ name | capitalize }}!"},customSettings:{template:{data:{name:"livecodes"}}}},p={compiled:"open"},m={markup:{language:"liquid",content:"Hello, {{ name | capitalize }}!"},script:{language:"javascript",content:'window.livecodes.templateData = { name: "livecodes" };'},customSettings:{template:{prerender:!1}},activeEditor:"script"},g={toc:d,config:u,params:p,config2:m};function f(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},g,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"liquid"},"Liquid"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://liquidjs.com/"},"LiquidJS"),": A simple, expressive and safe template engine."),(0,r.kt)("h2",{id:"usage"},"Usage"),(0,r.kt)("p",null,"There are 2 modes for rendering:"),(0,r.kt)("h3",{id:"pre-rendered-default"},"Pre-rendered (Default)"),(0,r.kt)("p",null,"The values of the expressions are evaluated and added to the template during compilation of the ",(0,r.kt)("a",{parentName:"p",href:"/docs/features/result"},"result page"),"."),(0,r.kt)("p",null,"The values of all expressions should be supplied in advance using ",(0,r.kt)("a",{parentName:"p",href:"/docs/advanced/custom-settings"},"custom settings")," to the property ",(0,r.kt)("inlineCode",{parentName:"p"},"template.data")," which accepts an object of key-value pairs."),(0,r.kt)("p",null,"Example: This provides the value of the expression ",(0,r.kt)("inlineCode",{parentName:"p"},"name")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="Custom Settings"',title:'"Custom','Settings"':!0},'{\n  "template": {\n    "data": {\n      "name": "LiveCodes"\n    }\n  }\n}\n')),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"#pre-rendered"},"Full example below")),(0,r.kt)("h3",{id:"dynamic"},"Dynamic"),(0,r.kt)("p",null,"To use this mode, the property ",(0,r.kt)("inlineCode",{parentName:"p"},"template.prerender")," in ",(0,r.kt)("a",{parentName:"p",href:"/docs/advanced/custom-settings"},"custom settings")," should be set to ",(0,r.kt)("inlineCode",{parentName:"p"},"false"),"."),(0,r.kt)("p",null,"Example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="Custom Settings"',title:'"Custom','Settings"':!0},'{\n  "template": {\n    "prerender": false\n  }\n}\n')),(0,r.kt)("p",null,"In this mode, in addition to values supplied in custom settings (see above), expressions can have values that are evaluated during the ",(0,r.kt)("a",{parentName:"p",href:"/docs/features/result"},"result page")," runtime."),(0,r.kt)("p",null,"This can be achieved in JavaScript (or any ",(0,r.kt)("a",{parentName:"p",href:"/docs/languages/"},"language")," that compiles to it) by assigning ",(0,r.kt)("inlineCode",{parentName:"p"},"window.livecodes.templateData")," to an object with the data."),(0,r.kt)("p",null,"Please note that template rendering occurs on ",(0,r.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/Window/load_event"},"page load"),", so the assignment must occur before that."),(0,r.kt)("p",null,"Example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="Script Editor (JS)"',title:'"Script',Editor:!0,'(JS)"':!0},"window.livecodes.templateData = { name: 'LiveCodes' };\n")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"#dynamic-1"},"Full example below")),(0,r.kt)("h2",{id:"language-info"},"Language Info"),(0,r.kt)("h3",{id:"name"},"Name"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"liquid")),(0,r.kt)("h3",{id:"extensions"},"Extensions"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},".liquid"),", ",(0,r.kt)("inlineCode",{parentName:"p"},".liquidjs")),(0,r.kt)("h3",{id:"editor"},"Editor"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"markup")),(0,r.kt)("h2",{id:"compiler"},"Compiler"),(0,r.kt)("p",null,"The official ",(0,r.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/liquidjs"},"LiquidJS compiler"),"."),(0,r.kt)("h3",{id:"version"},"Version"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"liquidjs"),": v10.14.0"),(0,r.kt)("h2",{id:"code-formatting"},"Code Formatting"),(0,r.kt)("p",null,"Using ",(0,r.kt)("a",{parentName:"p",href:"https://prettier.io/"},"Prettier"),"."),(0,r.kt)("h2",{id:"custom-settings"},"Custom Settings"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/advanced/custom-settings"},"Custom settings")," added to the property ",(0,r.kt)("inlineCode",{parentName:"p"},"liquid")," are passed as a JSON object to the ",(0,r.kt)("a",{parentName:"p",href:"https://liquidjs.com/api/classes/Liquid.html"},"Liquid constructor"),". Please check the ",(0,r.kt)("a",{parentName:"p",href:"https://liquidjs.com/tutorials/options.html"},"documentation")," for full reference."),(0,r.kt)("p",null,"Please note that custom settings should be valid JSON (i.e. functions are not allowed)."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="Custom Settings"',title:'"Custom','Settings"':!0},'{\n  "liquid": {\n    "outputDelimiterLeft": "<%=",\n    "outputDelimiterRight": "%>"\n  }\n}\n')),(0,r.kt)("h2",{id:"example-usage"},"Example Usage"),(0,r.kt)("h3",{id:"pre-rendered"},"Pre-rendered"),(0,r.kt)(i.Z,{config:u,params:p,mdxType:"LiveCodes"}),(0,r.kt)("h3",{id:"dynamic-1"},"Dynamic"),(0,r.kt)(i.Z,{config:m,mdxType:"LiveCodes"}),(0,r.kt)("h2",{id:"links"},"Links"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://liquidjs.com/"},"Official website")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://liquidjs.com/tutorials/intro-to-liquid.html"},"Liquidjs tutorials"))))}f.isMDXComponent=!0}}]);