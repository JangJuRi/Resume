(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[177],{9587:(e,t,n)=>{Promise.resolve().then(n.bind(n,5794)),Promise.resolve().then(n.t.bind(n,3704,23)),Promise.resolve().then(n.t.bind(n,4976,23))},5794:(e,t,n)=>{"use strict";n.d(t,{default:()=>l});var r=n(5155),a=n(2115);let l=()=>((0,a.useEffect)(()=>{n.e(290).then(n.bind(n,6290)).then(e=>{document.querySelector("#sideNav")&&new e.ScrollSpy(document.body,{target:"#sideNav",rootMargin:"0px 0px -40%"});let t=document.querySelector(".navbar-toggler"),n=Array.from(document.querySelectorAll("#navbarResponsive .nav-link")),r=()=>{t&&"none"!==window.getComputedStyle(t).display&&t.click()};return n.forEach(e=>{e.addEventListener("click",r)}),()=>{n.forEach(e=>{e.removeEventListener("click",r)})}}).catch(e=>{console.error("Bootstrap failed to load",e)})},[]),(0,r.jsxs)("nav",{className:"navbar navbar-expand-lg navbar-dark bg-primary fixed-top",id:"sideNav",children:[(0,r.jsx)("a",{className:"navbar-brand js-scroll-trigger",children:(0,r.jsx)("span",{className:"d-none d-lg-block",children:(0,r.jsx)("img",{className:"img-fluid img-profile rounded-circle mx-auto mb-2",src:"/Resume/assets/images/profile.jpg"})})}),(0,r.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarResponsive","aria-controls":"navbarResponsive","aria-expanded":"false","aria-label":"Toggle navigation",children:(0,r.jsx)("span",{className:"navbar-toggler-icon"})}),(0,r.jsx)("div",{className:"collapse navbar-collapse",id:"navbarResponsive",children:(0,r.jsxs)("ul",{className:"navbar-nav",children:[(0,r.jsx)("li",{className:"nav-item",children:(0,r.jsx)("a",{className:"nav-link js-scroll-trigger",href:"#about",children:"소개"})}),(0,r.jsx)("li",{className:"nav-item",children:(0,r.jsx)("a",{className:"nav-link js-scroll-trigger",href:"#education",children:"교육 & 자격증"})}),(0,r.jsx)("li",{className:"nav-item",children:(0,r.jsx)("a",{className:"nav-link js-scroll-trigger",href:"#skills",children:"기술 스택"})}),(0,r.jsx)("li",{className:"nav-item",children:(0,r.jsx)("a",{className:"nav-link js-scroll-trigger",href:"#experience",children:"경력"})}),(0,r.jsx)("hr",{}),(0,r.jsx)("div",{className:"social-icons",children:(0,r.jsx)("a",{className:"social-icon",href:"https://github.com/JangJuRi",children:(0,r.jsx)("i",{className:"fab fa-github"})})})]})})]}))},8571:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{cancelIdleCallback:function(){return r},requestIdleCallback:function(){return n}});let n="undefined"!=typeof self&&self.requestIdleCallback&&self.requestIdleCallback.bind(window)||function(e){let t=Date.now();return self.setTimeout(function(){e({didTimeout:!1,timeRemaining:function(){return Math.max(0,50-(Date.now()-t))}})},1)},r="undefined"!=typeof self&&self.cancelIdleCallback&&self.cancelIdleCallback.bind(window)||function(e){return clearTimeout(e)};("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},3704:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{default:function(){return v},handleClientScriptLoad:function(){return m},initScriptLoader:function(){return g}});let r=n(306),a=n(9955),l=n(5155),s=r._(n(7650)),i=a._(n(2115)),o=n(1147),c=n(2815),d=n(8571),u=new Map,f=new Set,p=e=>{if(s.default.preinit){e.forEach(e=>{s.default.preinit(e,{as:"style"})});return}if("undefined"!=typeof window){let t=document.head;e.forEach(e=>{let n=document.createElement("link");n.type="text/css",n.rel="stylesheet",n.href=e,t.appendChild(n)})}},b=e=>{let{src:t,id:n,onLoad:r=()=>{},onReady:a=null,dangerouslySetInnerHTML:l,children:s="",strategy:i="afterInteractive",onError:o,stylesheets:d}=e,b=n||t;if(b&&f.has(b))return;if(u.has(t)){f.add(b),u.get(t).then(r,o);return}let m=()=>{a&&a(),f.add(b)},g=document.createElement("script"),h=new Promise((e,t)=>{g.addEventListener("load",function(t){e(),r&&r.call(this,t),m()}),g.addEventListener("error",function(e){t(e)})}).catch(function(e){o&&o(e)});l?(g.innerHTML=l.__html||"",m()):s?(g.textContent="string"==typeof s?s:Array.isArray(s)?s.join(""):"",m()):t&&(g.src=t,u.set(t,h)),(0,c.setAttributesFromProps)(g,e),"worker"===i&&g.setAttribute("type","text/partytown"),g.setAttribute("data-nscript",i),d&&p(d),document.body.appendChild(g)};function m(e){let{strategy:t="afterInteractive"}=e;"lazyOnload"===t?window.addEventListener("load",()=>{(0,d.requestIdleCallback)(()=>b(e))}):b(e)}function g(e){e.forEach(m),[...document.querySelectorAll('[data-nscript="beforeInteractive"]'),...document.querySelectorAll('[data-nscript="beforePageRender"]')].forEach(e=>{let t=e.id||e.getAttribute("src");f.add(t)})}function h(e){let{id:t,src:n="",onLoad:r=()=>{},onReady:a=null,strategy:c="afterInteractive",onError:u,stylesheets:p,...m}=e,{updateScripts:g,scripts:h,getIsSsr:v,appDir:y,nonce:_}=(0,i.useContext)(o.HeadManagerContext),j=(0,i.useRef)(!1);(0,i.useEffect)(()=>{let e=t||n;j.current||(a&&e&&f.has(e)&&a(),j.current=!0)},[a,t,n]);let x=(0,i.useRef)(!1);if((0,i.useEffect)(()=>{!x.current&&("afterInteractive"===c?b(e):"lazyOnload"===c&&("complete"===document.readyState?(0,d.requestIdleCallback)(()=>b(e)):window.addEventListener("load",()=>{(0,d.requestIdleCallback)(()=>b(e))})),x.current=!0)},[e,c]),("beforeInteractive"===c||"worker"===c)&&(g?(h[c]=(h[c]||[]).concat([{id:t,src:n,onLoad:r,onReady:a,onError:u,...m}]),g(h)):v&&v()?f.add(t||n):v&&!v()&&b(e)),y){if(p&&p.forEach(e=>{s.default.preinit(e,{as:"style"})}),"beforeInteractive"===c)return n?(s.default.preload(n,m.integrity?{as:"script",integrity:m.integrity,nonce:_,crossOrigin:m.crossOrigin}:{as:"script",nonce:_,crossOrigin:m.crossOrigin}),(0,l.jsx)("script",{nonce:_,dangerouslySetInnerHTML:{__html:"(self.__next_s=self.__next_s||[]).push("+JSON.stringify([n,{...m,id:t}])+")"}})):(m.dangerouslySetInnerHTML&&(m.children=m.dangerouslySetInnerHTML.__html,delete m.dangerouslySetInnerHTML),(0,l.jsx)("script",{nonce:_,dangerouslySetInnerHTML:{__html:"(self.__next_s=self.__next_s||[]).push("+JSON.stringify([0,{...m,id:t}])+")"}}));"afterInteractive"===c&&n&&s.default.preload(n,m.integrity?{as:"script",integrity:m.integrity,nonce:_,crossOrigin:m.crossOrigin}:{as:"script",nonce:_,crossOrigin:m.crossOrigin})}return null}Object.defineProperty(h,"__nextScript",{value:!0});let v=h;("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},2815:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"setAttributesFromProps",{enumerable:!0,get:function(){return l}});let n={acceptCharset:"accept-charset",className:"class",htmlFor:"for",httpEquiv:"http-equiv",noModule:"noModule"},r=["onLoad","onReady","dangerouslySetInnerHTML","children","onError","strategy","stylesheets"];function a(e){return["async","defer","noModule"].includes(e)}function l(e,t){for(let[l,s]of Object.entries(t)){if(!t.hasOwnProperty(l)||r.includes(l)||void 0===s)continue;let i=n[l]||l.toLowerCase();"SCRIPT"===e.tagName&&a(i)?e[i]=!!s:e.setAttribute(i,String(s)),(!1===s||"SCRIPT"===e.tagName&&a(i)&&(!s||"false"===s))&&(e.setAttribute(i,""),e.removeAttribute(i))}}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},4976:e=>{e.exports={style:{fontFamily:"'Do Hyeon', 'Do Hyeon Fallback'",fontWeight:400,fontStyle:"normal"},className:"__className_5c017d"}}},e=>{var t=t=>e(e.s=t);e.O(0,[253,441,517,358],()=>t(9587)),_N_E=e.O()}]);