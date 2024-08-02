"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4151],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>f});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=o.createContext({}),c=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},m=function(e){var t=c(e.components);return o.createElement(l.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),d=c(n),u=r,f=d["".concat(l,".").concat(u)]||d[u]||p[u]||a;return n?o.createElement(f,s(s({ref:t},m),{},{components:n})):o.createElement(f,s({ref:t},m))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,s=new Array(a);s[0]=u;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[d]="string"==typeof e?e:r,s[1]=i;for(var c=2;c<a;c++)s[c]=n[c];return o.createElement.apply(null,s)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},325:(e,t,n)=>{n.d(t,{Z:()=>h});var o=n(7462),r=n(7294),a=n(9493);function s(e){const t=(0,r.useRef)(null),[n,o]=(0,r.useState)(e.className||""),[s,i]=(0,r.useState)(e.style||{}),[l,c]=(0,r.useState)(e.height),[m,d]=(0,r.useState)(),[p,u]=(0,r.useState)(JSON.stringify(e.config||"")),[f,g]=(0,r.useState)("");return(0,r.useEffect)((()=>{if(!t.current)return;const{className:n,style:r,height:s,sdkReady:l,config:h,...y}=e;if(o(n||""),i(r||{}),c(s),m&&f===JSON.stringify(y)){if(p===JSON.stringify(h))return;u(JSON.stringify(h)),"string"==typeof h?fetch(h).then((e=>e.json())).then((e=>{m?.setConfig(e)})):h&&m.setConfig(h)}else g(JSON.stringify(y)),m?.destroy(),(0,a.T)(t.current,{config:h,...y}).then((e=>{d(e),"function"==typeof l&&l(e)}))}),[e]),(0,r.useEffect)((()=>()=>{m?.destroy()}),[]),r.createElement("div",{ref:t,className:n,style:s,"data-height":l})}var i=n(1446),l=n(412),c=n(814),m=n(4866),d=n(5162),p=n(2134),u=n(420);function f(e){const[t,n]=(0,r.useState)(e.js),[o,a]=(0,r.useState)(e.ts),[s,i]=(0,r.useState)(e.react),[f,g]=(0,r.useState)(e.vue),[h,y]=(0,r.useState)(e.svelte),v="3.7rem",[b,w]=(0,r.useState)(!0),[k,j]=(0,r.useState)(v),E=(0,r.useRef)(null),N=()=>{setTimeout((()=>{j(`calc(${E.current.offsetHeight}px + ${v})`)}),5),setTimeout((()=>{j(`calc(${E.current.offsetHeight}px + ${v})`)}),255)};return(0,r.useEffect)((()=>{if(l.Z.canUseDOM){const e=function(e,t){void 0===t&&(t="js");try{return window.prettier?.format(e,{parser:"html"===t?"html":"babel",plugins:window.prettierPlugins})}catch{return e}};n(e(t,"js")),a(e(o,"ts")),i(e(s,"jsx")),g(e(f,"html")),y(e(h,"html"))}}),[]),r.createElement("details",{className:`alert alert--info ${p.Z.details} ${u.Z.details}`,"data-collapsed":b,style:{height:b?v:k,overflow:"hidden",willChange:"height",transition:`height ${b?"250ms":"265ms"} ease-in-out 0s`,margin:"1em 0"}},r.createElement("summary",{onClick:()=>{w(!b),N()}},"show code"),r.createElement("div",{ref:E,style:{display:"block",overflow:"hidden"}},r.createElement("div",{className:p.Z.collapsibleContent},r.createElement(m.Z,{groupId:"sdk-code"},r.createElement(d.Z,{value:"js",label:"JS",attributes:{onMouseDown:N}},r.createElement(c.Z,{language:"js"},t)),r.createElement(d.Z,{value:"ts",label:"TS",attributes:{onMouseDown:N}},r.createElement(c.Z,{language:"ts"},o)),r.createElement(d.Z,{value:"react",label:"React",attributes:{onMouseDown:N}},r.createElement(c.Z,{language:"jsx"},s)),r.createElement(d.Z,{value:"vue",label:"Vue",attributes:{onMouseDown:N}},r.createElement(c.Z,{language:"html"},f)),r.createElement(d.Z,{value:"svelte",label:"Svelte",attributes:{onMouseDown:N}},r.createElement(c.Z,{language:"html"},h))))))}const g="container_Egsj";function h(e){const{className:t,style:n,showCode:a,height:l,...c}=e,m=e=>JSON.stringify(e,null,2),d=`\nimport { createPlayground } from 'livecodes';\n\nconst options = ${m(c)};\ncreatePlayground('#container', options);\n\n`.trimStart(),p=`\nimport { createPlayground, type EmbedOptions } from 'livecodes';\n\nconst options: EmbedOptions = ${m(c)};\ncreatePlayground('#container', options);\n\n`.trimStart(),u=`\nimport LiveCodes from 'livecodes/react';\n\nexport default function App() {\n  const options = ${m(c)};\n  return (<LiveCodes {...options}></LiveCodes>);\n}\n\n`.trimStart(),h=`\n<script setup>\nimport LiveCodes from "livecodes/vue";\n\nconst options = ${m(c)};\n<\/script>\n<template>\n  <LiveCodes v-bind="options" />\n</template>\n\n`,y=`\n<script>\nimport { onMount } from 'svelte';\nimport { createPlayground } from 'livecodes';\n\nconst options = ${m(c)};\nlet container;\nonMount(() => {\n  createPlayground(container, options);\n});\n<\/script>\n\n<div bind:this="{container}"></div>\n\n`.trimStart();return r.createElement(r.Fragment,null,r.createElement(s,(0,o.Z)({className:`${g} ${e.className}`,style:{height:l||"50vh",...e.style},appUrl:i.G},e)),!1!==e.showCode&&r.createElement(f,{js:d,ts:p,react:u,vue:h,svelte:y}))}},9493:(e,t,n)=>{n.d(t,{T:()=>r,r:()=>a});var o=n(7728);async function r(e,t){void 0===t&&(t={}),"object"!=typeof e||e instanceof HTMLElement||"headless"!==e.view||(t=e,e=null);const{appUrl:n="https://livecodes.io/",params:o={},config:r={},import:a,lite:s,loading:i="lazy",template:l,view:c="split"}=t,m="headless"===c;let d,p=null;if("string"==typeof e)p=document.querySelector(e);else if(e instanceof HTMLElement)p=e;else if(!m||"object"!=typeof e)throw new Error("A valid container element is required.");if(!p){if(!m)throw new Error(`Cannot find element: "${e}"`);p=document.createElement("div"),N(p),document.body.appendChild(p)}try{d=new URL(n)}catch{throw new Error(`"${n}" is not a valid URL.`)}const u=d.origin;if("object"==typeof o&&Object.keys(o).forEach((e=>{d.searchParams.set(e,String(o[e]))})),"string"==typeof r)try{new URL(r),d.searchParams.set("config",r)}catch{throw new Error('"config" is not a valid URL or configuration object.')}else{if("object"!=typeof r)throw new Error('"config" is not a valid URL or configuration object.');Object.keys(r).length>0&&d.searchParams.set("config","sdk")}l&&d.searchParams.set("template",l),a&&d.searchParams.set("x",a),s&&d.searchParams.set("lite","true"),d.searchParams.set("embed","true"),d.searchParams.set("loading",m?"eager":i),d.searchParams.set("view",c);let f=!1;const g="Cannot call API methods after calling `destroy()`.",h=await new Promise((e=>{if(!p)return;const t=p.dataset.height||p.style.height;if(t&&!m){const e=isNaN(Number(t))?t:t+"px";p.style.height=e}"false"===p.dataset.defaultStyles||m||(p.style.backgroundColor||="#fff",p.style.border||="1px solid black",p.style.borderRadius||="5px",p.style.boxSizing||="border-box",p.style.padding||="0",p.style.width||="100%",p.style.height||=p.style.height||"300px",p.style.minHeight="200px",p.style.flexGrow="1",p.style.overflow||="hidden",p.style.resize||="vertical");const n=document.createElement("iframe");n.setAttribute("allow","accelerometer; camera; encrypted-media; display-capture; geolocation; gyroscope; microphone; midi; clipboard-read; clipboard-write; web-share"),n.setAttribute("allowtransparency","true"),n.setAttribute("allowpaymentrequest","true"),n.setAttribute("allowfullscreen","true"),n.setAttribute("sandbox","allow-same-origin allow-downloads allow-forms allow-modals allow-orientation-lock allow-pointer-lock allow-popups allow-presentation allow-scripts");const o="eager"===i?"eager":"lazy";n.setAttribute("loading",o),n.classList.add("livecodes"),m?N(n):(n.style.height="100%",n.style.minHeight="200px",n.style.width="100%",n.style.margin="0",n.style.border="0",n.style.borderRadius=p.style.borderRadius),addEventListener("message",(function e(t){t.source===n.contentWindow&&t.origin===u&&"livecodes-get-config"===t.data?.type&&(removeEventListener("message",e),n.contentWindow?.postMessage({type:"livecodes-config",payload:r},u))})),n.onload=()=>{e(n)},n.src=d.href,p.appendChild(n)})),y=new Promise((e=>{addEventListener("message",(function t(n){n.source===h.contentWindow&&n.origin===u&&"livecodes-ready"===n.data?.type&&(removeEventListener("message",t),e(),y.settled=!0)}))})),v=()=>f?Promise.reject(g):new Promise((async e=>{y.settled&&e();h.contentWindow?.postMessage({type:"livecodes-load"},u),await y,e()})),b=(e,t)=>new Promise((async(n,o)=>{if(f)return o(g);await v();const r=S();addEventListener("message",(function t(a){if(a.source===h.contentWindow&&a.origin===u&&"livecodes-api-response"===a.data?.type&&a.data?.id===r&&a.data.method===e){removeEventListener("message",t);const e=a.data.payload;e?.error?o(e.error):n(e)}})),h.contentWindow?.postMessage({method:e,id:r,args:t},u)})),w={},k=["load","ready","code","console","tests","destroy"],j=(e,t)=>{if(f)throw new Error(g);return k.includes(e)?(b("watch",[e]),w[e]||(w[e]=[]),w[e]?.push(t),{remove:()=>{w[e]=w[e]?.filter((e=>e!==t)),0===w[e]?.length&&b("watch",[e,"unsubscribe"])}}):{remove:()=>{}}};addEventListener("message",(async e=>{const t={"livecodes-app-loaded":"load","livecodes-ready":"ready","livecodes-change":"code","livecodes-console":"console","livecodes-test-results":"tests","livecodes-destroy":"destroy"}[e.data?.type??""];if(e.source!==h.contentWindow||e.origin!==u||!t||!w[t])return;const n=e.data?.payload;w[t]?.forEach((e=>{e(n)}))}));const E=()=>{Object.values(w).forEach((e=>{e.length=0})),h?.remove?.(),f=!0};if("lazy"===i&&"IntersectionObserver"in window){new IntersectionObserver(((e,t)=>{e.forEach((async e=>{e.isIntersecting&&(await v(),t.unobserve(p))}))}),{rootMargin:"150px"}).observe(p)}function N(e){e.style.position="absolute",e.style.top="0",e.style.visibility="hidden",e.style.opacity="0"}const S=()=>(String(Math.random())+Date.now().toFixed()).replace("0.","");return{load:()=>v(),run:()=>b("run"),format:e=>b("format",[e]),getShareUrl:e=>b("getShareUrl",[e]),getConfig:e=>b("getConfig",[e]),setConfig:e=>b("setConfig",[e]),getCode:()=>b("getCode"),show:(e,t)=>b("show",[e,t]),runTests:()=>b("runTests"),onChange:e=>j("code",e),watch:j,exec:function(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),o=1;o<t;o++)n[o-1]=arguments[o];return b("exec",[e,...n])},destroy:()=>y.settled?b("destroy").then(E):f?Promise.reject(g):(E(),Promise.resolve())}}function a(e){void 0===e&&(e={});const{appUrl:t,params:n,config:r,import:a,...s}=e,i="string"==typeof r?{config:r}:"object"==typeof r?{x:"code/"+(0,o.compressToEncodedURIComponent)(JSON.stringify(r))}:{},l=new URLSearchParams(JSON.parse(JSON.stringify({...s,...n,x:a,...i}))).toString();return(t||"https://livecodes.io")+(l?"?"+l:"")}globalThis.document&&document.currentScript&&"prefill"in document.currentScript?.dataset&&window.addEventListener("load",(()=>{document.querySelectorAll(".livecodes").forEach((e=>{let t;const n=e.dataset.options;if(n)try{t=JSON.parse(n)}catch{}let o;const a=e.dataset.config||e.dataset.prefill;if(a)try{o=JSON.parse(a)}catch{}const s=encodeURIComponent(e.outerHTML);e.innerHTML="",r(e,{import:"dom/"+s,...t,...o?{config:o}:{}})}))}))},5088:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>s,metadata:()=>l,params:()=>d,toc:()=>m});var o=n(7462),r=(n(7294),n(3905)),a=n(325);const s={},i="MJML",l={unversionedId:"languages/mjml",id:"languages/mjml",title:"MJML",description:"MJML is a markup language designed to reduce the pain of coding a responsive email.",source:"@site/docs/languages/mjml.md",sourceDirName:"languages",slug:"/languages/mjml",permalink:"/docs/languages/mjml",draft:!1,editUrl:"https://github.com/live-codes/livecodes/tree/develop/docs/docs/languages/mjml.md",tags:[],version:"current",frontMatter:{},sidebar:"docsSidebar",previous:{title:"MDX",permalink:"/docs/languages/mdx"},next:{title:"Mustache",permalink:"/docs/languages/mustache"}},c={},m=[{value:"Language Info",id:"language-info",level:2},{value:"Name",id:"name",level:3},{value:"Extension",id:"extension",level:3},{value:"Editor",id:"editor",level:3},{value:"Compiler",id:"compiler",level:2},{value:"Version",id:"version",level:3},{value:"Custom Settings",id:"custom-settings",level:2},{value:"Example Usage",id:"example-usage",level:2},{value:"Links",id:"links",level:2}],d={mjml:"<mjml>\n\t<mj-body>\n\t\t<mj-section>\n\t\t\t<mj-column>\n\t\t\t\t<mj-text>\n\t\t\t\t\tHello World!\n\t\t\t\t</mj-text>\n\t\t\t</mj-column>\n\t\t</mj-section>\n\t</mj-body>\n</mjml>\n"},p={toc:m,params:d};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"mjml"},"MJML"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://mjml.io/"},"MJML")," is a markup language designed to reduce the pain of coding a responsive email."),(0,r.kt)("h2",{id:"language-info"},"Language Info"),(0,r.kt)("h3",{id:"name"},"Name"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"mjml")),(0,r.kt)("h3",{id:"extension"},"Extension"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},".mjml")),(0,r.kt)("h3",{id:"editor"},"Editor"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"markup")),(0,r.kt)("h2",{id:"compiler"},"Compiler"),(0,r.kt)("p",null,"The ",(0,r.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/mjml-browser"},"browser build")," of the official ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/mjmlio/mjml"},"MJML compiler"),"."),(0,r.kt)("h3",{id:"version"},"Version"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"mjml-browser"),": v4.15.3"),(0,r.kt)("h2",{id:"custom-settings"},"Custom Settings"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/advanced/custom-settings"},"Custom settings")," added to the property ",(0,r.kt)("inlineCode",{parentName:"p"},"mjml")," are passed as a JSON object to the mjml compiler. Please check the ",(0,r.kt)("a",{parentName:"p",href:"https://documentation.mjml.io/#inside-node-js"},"documentation")," for full reference."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "mjml": {\n    "keepComments": false,\n    "minify": true\n  }\n}\n')),(0,r.kt)("h2",{id:"example-usage"},"Example Usage"),(0,r.kt)(a.Z,{params:d,mdxType:"LiveCodes"}),(0,r.kt)("p",null,"This playground loads a template from the official MJML ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/mjmlio/email-templates"},"email templates"),":"),(0,r.kt)(a.Z,{import:"https://github.com/mjmlio/email-templates/blob/master/templates/onepage.mjml",height:"400",mdxType:"LiveCodes"}),(0,r.kt)("h2",{id:"links"},"Links"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"https://mjml.io/"},"MJML official website"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"https://documentation.mjml.io/"},"MJML documentation"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"https://github.com/mjmlio/mjml"},"MJML GitHub repo"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"https://mjml.io/templates"},"Official email templates")))))}u.isMDXComponent=!0}}]);