"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4898],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>f});var o=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,o,a=function(e,t){if(null==e)return{};var r,o,a={},n=Object.keys(e);for(o=0;o<n.length;o++)r=n[o],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(o=0;o<n.length;o++)r=n[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=o.createContext({}),c=function(e){var t=o.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=c(e.components);return o.createElement(s.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var r=e.components,a=e.mdxType,n=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(r),d=a,f=p["".concat(s,".").concat(d)]||p[d]||m[d]||n;return r?o.createElement(f,i(i({ref:t},u),{},{components:r})):o.createElement(f,i({ref:t},u))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var n=r.length,i=new Array(n);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:a,i[1]=l;for(var c=2;c<n;c++)i[c]=r[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,r)}d.displayName="MDXCreateElement"},1603:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>n,metadata:()=>l,toc:()=>c});var o=r(7462),a=(r(7294),r(3905));const n={},i="Code Format",l={unversionedId:"features/code-format",id:"features/code-format",title:"Code Format",description:"Code formatting is supported for most languages.",source:"@site/docs/features/code-format.md",sourceDirName:"features",slug:"/features/code-format",permalink:"/docs/features/code-format",draft:!1,editUrl:"https://github.com/live-codes/livecodes/tree/develop/docs/docs/features/code-format.md",tags:[],version:"current",frontMatter:{},sidebar:"docsSidebar",previous:{title:"AI Code Assistant \ud83e\ude84",permalink:"/docs/features/ai"},next:{title:"Keyboard Shortcuts",permalink:"/docs/features/keyboard-shortcuts"}},s={},c=[{value:"Code Formatters",id:"code-formatters",level:2},{value:"Format Button",id:"format-button",level:2},{value:"Keyboard Shortcut",id:"keyboard-shortcut",level:2},{value:"Format on-save",id:"format-on-save",level:2},{value:"Format Options",id:"format-options",level:2},{value:"Configuration",id:"configuration",level:2},{value:"SDK Method: <code>format</code>",id:"sdk-method-format",level:2}],u={toc:c};function p(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,o.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"code-format"},"Code Format"),(0,a.kt)("p",null,"Code formatting is supported for most ",(0,a.kt)("a",{parentName:"p",href:"/docs/languages/"},"languages"),"."),(0,a.kt)("h2",{id:"code-formatters"},"Code Formatters"),(0,a.kt)("p",null,"The code formatter used for each language is specified in the ",(0,a.kt)("a",{parentName:"p",href:"/docs/languages/"},"language documentation")," page."),(0,a.kt)("p",null,"For example:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://prettier.io/"},"Prettier")," is used for many languages including HTML, CSS, JavaScript, TypeScript, JSX, TSX."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://pkg.go.dev/cmd/gofmt"},"gofmt")," (via ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/gopherjs/gopherjs"},"GopherJS"),") is used for Go."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://shaunlebron.github.io/parinfer/"},"Parinfer")," is used for Scheme, Common Lisp and ClojureScript.")),(0,a.kt)("h2",{id:"format-button"},"Format Button"),(0,a.kt)("p",null,"Code formatting for the code in the active editor can be triggered by the ",(0,a.kt)("inlineCode",{parentName:"p"},"Format")," button below the editor."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"code format",src:r(2851).Z,width:"3200",height:"1347"})),(0,a.kt)("h2",{id:"keyboard-shortcut"},"Keyboard Shortcut"),(0,a.kt)("p",null,"Code formatting can also be trigger by the keyboard shortcut ",(0,a.kt)("kbd",null,"Alt")," + ",(0,a.kt)("kbd",null,"Shift")," + ",(0,a.kt)("kbd",null,"F"),"."),(0,a.kt)("h2",{id:"format-on-save"},"Format on-save"),(0,a.kt)("p",null,"Format on-save can be enabled from the app menu \u2192 Format on-save."),(0,a.kt)("h2",{id:"format-options"},"Format Options"),(0,a.kt)("p",null,"Some format options can be configured from ",(0,a.kt)("a",{parentName:"p",href:"/docs/features/editor-settings"},"Editor Settings")," screen. These include ",(0,a.kt)("a",{parentName:"p",href:"https://prettier.io/"},"Prettier")," ",(0,a.kt)("a",{parentName:"p",href:"https://prettier.io/docs/en/options.html"},"configuration options")," for:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Indentation (Spaces/Tabs)"),(0,a.kt)("li",{parentName:"ul"},"Tab size"),(0,a.kt)("li",{parentName:"ul"},"Use Semicolons"),(0,a.kt)("li",{parentName:"ul"},"Use Single Quotes"),(0,a.kt)("li",{parentName:"ul"},"Use Trailing Commas")),(0,a.kt)("h2",{id:"configuration"},"Configuration"),(0,a.kt)("p",null,"Code format can be configured using the ",(0,a.kt)("a",{parentName:"p",href:"/docs/configuration/configuration-object"},"configuration object")," properties:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/configuration/configuration-object#formatonsave"},(0,a.kt)("inlineCode",{parentName:"a"},"formatOnsave"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/configuration/configuration-object#usetabs"},(0,a.kt)("inlineCode",{parentName:"a"},"useTabs"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/configuration/configuration-object#tabsize"},(0,a.kt)("inlineCode",{parentName:"a"},"tabSize"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/configuration/configuration-object#semicolons"},(0,a.kt)("inlineCode",{parentName:"a"},"semicolons"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/configuration/configuration-object#singlequote"},(0,a.kt)("inlineCode",{parentName:"a"},"singleQuote"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/configuration/configuration-object#trailingcomma"},(0,a.kt)("inlineCode",{parentName:"a"},"trailingComma")))),(0,a.kt)("h2",{id:"sdk-method-format"},"SDK Method: ",(0,a.kt)("inlineCode",{parentName:"h2"},"format")),(0,a.kt)("p",null,"The code format can be programmatically triggered by the ",(0,a.kt)("a",{parentName:"p",href:"/docs/sdk/"},"SDK")," method ",(0,a.kt)("a",{parentName:"p",href:"/docs/sdk/js-ts#format"},(0,a.kt)("inlineCode",{parentName:"a"},"format")),"."))}p.isMDXComponent=!0},2851:(e,t,r)=>{r.d(t,{Z:()=>o});const o=r.p+"assets/images/format-5c753e308e7391224bc141c73d9a3c97.jpg"}}]);