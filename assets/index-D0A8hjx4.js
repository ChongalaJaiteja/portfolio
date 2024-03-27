import{r as h,u as a,j as i,a as V,h as D}from"./index-DIYihR5L.js";import{u as b,m as v,M as O,i as B,f as P,a as N,b as F,c as Y,p as $,v as J,d as G,e as X,g as y,h as U,w as _,j as x,F as q,G as z,A as K,k as Q,l as e1,n as t1}from"./constants-Cv4QlY0v.js";import{R as Z,D as n1,L as o1,A as r1,a as i1,N as s1}from"./index-D5FqdAv9.js";function l1(e){const t=b(()=>v(e)),{isStatic:r}=h.useContext(O);if(r){const[,n]=h.useState(e);h.useEffect(()=>t.on("change",n),[])}return t}function a1(e,t={}){const{isStatic:r}=h.useContext(O),n=h.useRef(null),o=l1(B(e)?e.get():e),s=()=>{n.current&&n.current.stop()};return h.useInsertionEffect(()=>o.attach((l,c)=>{if(r)return c(l);const d=n.current;return d&&d.time===0&&d.sample(P.delta),s(),n.current=N({keyframes:[o.get(),l],velocity:o.getVelocity(),type:"spring",restDelta:.001,restSpeed:.01,...t,onUpdate:c}),o.get()},s),[JSON.stringify(t)]),F(()=>{if(B(e))return e.on("change",l=>o.set(parseFloat(l)))},[o]),o}function c1(e,t,r){var n;if(typeof e=="string"){let o=document;t&&(Y(!!t.current),o=t.current),r?((n=r[e])!==null&&n!==void 0||(r[e]=o.querySelectorAll(e)),e=r[e]):e=o.querySelectorAll(e)}else e instanceof Element&&(e=[e]);return Array.from(e||[])}const w=new WeakMap;let g;function d1(e,t){if(t){const{inlineSize:r,blockSize:n}=t[0];return{width:r,height:n}}else return e instanceof SVGElement&&"getBBox"in e?e.getBBox():{width:e.offsetWidth,height:e.offsetHeight}}function f1({target:e,contentRect:t,borderBoxSize:r}){var n;(n=w.get(e))===null||n===void 0||n.forEach(o=>{o({target:e,contentSize:t,get size(){return d1(e,r)}})})}function u1(e){e.forEach(f1)}function h1(){typeof ResizeObserver>"u"||(g=new ResizeObserver(u1))}function m1(e,t){g||h1();const r=c1(e);return r.forEach(n=>{let o=w.get(n);o||(o=new Set,w.set(n,o)),o.add(t),g==null||g.observe(n)}),()=>{r.forEach(n=>{const o=w.get(n);o==null||o.delete(t),o!=null&&o.size||g==null||g.unobserve(n)})}}const M=new Set;let C;function g1(){C=()=>{const e={width:window.innerWidth,height:window.innerHeight},t={target:window,size:e,contentSize:e};M.forEach(r=>r(t))},window.addEventListener("resize",C)}function p1(e){return M.add(e),C||g1(),()=>{M.delete(e),!M.size&&C&&(C=void 0)}}function v1(e,t){return typeof e=="function"?p1(e):m1(e,t)}const C1=50,I=()=>({current:0,offset:[],progress:0,scrollLength:0,targetOffset:0,targetLength:0,containerLength:0,velocity:0}),x1=()=>({time:0,x:I(),y:I()}),y1={x:{length:"Width",position:"Left"},y:{length:"Height",position:"Top"}};function T(e,t,r,n){const o=r[t],{length:s,position:l}=y1[t],c=o.current,d=r.time;o.current=e["scroll"+l],o.scrollLength=e["scroll"+s]-e["client"+s],o.offset.length=0,o.offset[0]=0,o.offset[1]=o.scrollLength,o.progress=$(0,o.scrollLength,o.current);const u=n-d;o.velocity=u>C1?0:J(o.current-c,u)}function w1(e,t,r){T(e,"x",t,r),T(e,"y",t,r),t.time=r}function M1(e,t){const r={x:0,y:0};let n=e;for(;n&&n!==t;)if(n instanceof HTMLElement)r.x+=n.offsetLeft,r.y+=n.offsetTop,n=n.offsetParent;else if(n.tagName==="svg"){const o=n.getBoundingClientRect();n=n.parentElement;const s=n.getBoundingClientRect();r.x+=o.left-s.left,r.y+=o.top-s.top}else if(n instanceof SVGGraphicsElement){const{x:o,y:s}=n.getBBox();r.x+=o,r.y+=s;let l=null,c=n.parentNode;for(;!l;)c.tagName==="svg"&&(l=c),c=n.parentNode;n=l}else break;return r}const z1={Enter:[[0,1],[1,1]],Exit:[[0,0],[1,0]],Any:[[1,0],[0,1]],All:[[0,0],[1,1]]},L={start:0,center:.5,end:1};function A(e,t,r=0){let n=0;if(L[e]!==void 0&&(e=L[e]),typeof e=="string"){const o=parseFloat(e);e.endsWith("px")?n=o:e.endsWith("%")?e=o/100:e.endsWith("vw")?n=o/100*document.documentElement.clientWidth:e.endsWith("vh")?n=o/100*document.documentElement.clientHeight:e=o}return typeof e=="number"&&(n=t*e),r+n}const j1=[0,0];function S1(e,t,r,n){let o=Array.isArray(e)?e:j1,s=0,l=0;return typeof e=="number"?o=[e,e]:typeof e=="string"&&(e=e.trim(),e.includes(" ")?o=e.split(" "):o=[e,L[e]?e:"0"]),s=A(o[0],r,n),l=A(o[1],t),s-l}const L1={x:0,y:0};function E1(e){return"getBBox"in e&&e.tagName!=="svg"?e.getBBox():{width:e.clientWidth,height:e.clientHeight}}function B1(e,t,r){let{offset:n=z1.All}=r;const{target:o=e,axis:s="y"}=r,l=s==="y"?"height":"width",c=o!==e?M1(o,e):L1,d=o===e?{width:e.scrollWidth,height:e.scrollHeight}:E1(o),u={width:e.clientWidth,height:e.clientHeight};t[s].offset.length=0;let m=!t[s].interpolate;const j=n.length;for(let f=0;f<j;f++){const E=S1(n[f],u[l],d[l],c[s]);!m&&E!==t[s].interpolatorOffsets[f]&&(m=!0),t[s].offset[f]=E}m&&(t[s].interpolate=G(t[s].offset,X(n)),t[s].interpolatorOffsets=[...t[s].offset]),t[s].progress=t[s].interpolate(t[s].current)}function I1(e,t=e,r){if(r.x.targetOffset=0,r.y.targetOffset=0,t!==e){let n=t;for(;n&&n!==e;)r.x.targetOffset+=n.offsetLeft,r.y.targetOffset+=n.offsetTop,n=n.offsetParent}r.x.targetLength=t===e?t.scrollWidth:t.clientWidth,r.y.targetLength=t===e?t.scrollHeight:t.clientHeight,r.x.containerLength=e.clientWidth,r.y.containerLength=e.clientHeight}function T1(e,t,r,n={}){return{measure:()=>I1(e,n.target,r),update:o=>{w1(e,r,o),(n.offset||n.target)&&B1(e,r,n)},notify:()=>t(r)}}const p=new WeakMap,W=new WeakMap,S=new WeakMap,H=e=>e===document.documentElement?window:e;function A1(e,{container:t=document.documentElement,...r}={}){let n=S.get(t);n||(n=new Set,S.set(t,n));const o=x1(),s=T1(t,e,o,r);if(n.add(s),!p.has(t)){const c=()=>{for(const f of n)f.measure()},d=()=>{for(const f of n)f.update(P.timestamp)},u=()=>{for(const f of n)f.notify()},m=()=>{y.read(c,!1,!0),y.read(d,!1,!0),y.update(u,!1,!0)};p.set(t,m);const j=H(t);window.addEventListener("resize",m,{passive:!0}),t!==document.documentElement&&W.set(t,v1(t,m)),j.addEventListener("scroll",m,{passive:!0})}const l=p.get(t);return y.read(l,!1,!0),()=>{var c;U(l);const d=S.get(t);if(!d||(d.delete(s),d.size))return;const u=p.get(t);p.delete(t),u&&(H(t).removeEventListener("scroll",u),(c=W.get(t))===null||c===void 0||c(),window.removeEventListener("resize",u))}}function k(e,t){_(!!(!t||t.current))}const W1=()=>({scrollX:v(0),scrollY:v(0),scrollXProgress:v(0),scrollYProgress:v(0)});function H1({container:e,target:t,layoutEffect:r=!0,...n}={}){const o=b(W1);return(r?F:h.useEffect)(()=>(k("target",t),k("container",e),A1(({x:l,y:c})=>{o.scrollX.set(l.current),o.scrollXProgress.set(l.progress),o.scrollY.set(c.current),o.scrollYProgress.set(c.progress)},{...n,container:(e==null?void 0:e.current)||void 0,target:(t==null?void 0:t.current)||void 0})),[e,t,JSON.stringify(n.offset)]),o}const k1=a(x.div)`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    height: clamp(0.3rem, 1vw + 0.13rem, 0.53rem);
    background: ${({theme:e})=>e.primaryAccentColor};
    transform-origin: 0%;
    z-index: 12;
`,b1=()=>{const{scrollYProgress:e}=H1(),t=a1(e,{stiffness:100,damping:30,restDelta:.001});return i.jsx(k1,{style:{scaleX:t}})},O1=a.div`
    position: fixed;
    bottom: 5%;
    right: 25px;
    z-index: 1;
    /* outline: auto; */
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.2em;
`,P1=a(x.div)`
    cursor: pointer;
    color: ${({theme:e})=>e.primaryAccentColor};
`,F1=a(q)`
    font-size: clamp(0.5rem, 1vw + 1.5rem, 2rem);
`,Z1=a(x.div)`
    --fs-theme-mode-logo: clamp(1rem, 1vw + 1.3rem, 1.8rem);
    display: none;
    @media (min-width: 827px) {
        display: block;
    }
`,R1=a(n1)`
    font-size: var(--fs-theme-mode-logo);
    cursor: pointer;
    color: #272826;
    animation: ${Z} 0.3s linear forwards;
`,V1=a(o1)`
    font-size: var(--fs-theme-mode-logo);
    cursor: pointer;
    color: yellow;
    animation: none;
    animation: ${Z} 0.3s linear forwards reverse 1;
`,D1=()=>{const e={initial:{y:23},animate:{y:0},transition:{duration:.4,ease:"easeInOut",type:"spring"},exit:{y:23}},t=()=>{const l={duration:500,smooth:!0};i1.scrollToTop(l)},[r,n]=h.useState(!1),{toggleTheme:o,isLightTheme:s}=V();return h.useEffect(()=>{const l=()=>{const c=window.scrollY>50;r!==c&&n(c)};return window.addEventListener("scroll",l),()=>{window.removeEventListener("scroll",l)}},[r]),i.jsx(i.Fragment,{children:r&&i.jsx(r1,{children:i.jsxs(O1,{children:[i.jsx(Z1,{onClick:o,whileTap:{scale:1.3},initial:{y:-30},animate:{y:0},transition:{duration:.4,ease:"easeInOut",type:"spring"},exit:{y:-30},children:s?i.jsx(R1,{}):i.jsx(V1,{})}),i.jsx(P1,{onClick:t,variants:e,whileTap:{scale:1.3},initial:"initial",animate:"animate",transition:"transition",exit:"exit",children:i.jsx(F1,{})})]})})})};function N1(e){return z({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M14.448 16.2394C13.8809 17.0412 13.2933 17.7714 12.7015 18.4146C14.3738 20.0375 15.9291 20.7975 16.792 20.2993C17.6549 19.8011 17.7744 18.0742 17.2051 15.8145C16.3521 16.0054 15.426 16.1492 14.448 16.2394ZM13.138 16.3265C12.7641 16.342 12.3845 16.3499 12.0003 16.3499C11.6161 16.3499 11.2365 16.342 10.8627 16.3265C11.2394 16.8188 11.6208 17.2749 12.0003 17.6905C12.3798 17.2749 12.7612 16.8188 13.138 16.3265ZM18.1787 8.43278C20.8434 9.19718 22.5837 10.4672 22.5837 11.9999C22.5837 13.5325 20.8434 14.8026 18.1787 15.567C18.8491 18.2569 18.6193 20.399 17.292 21.1653C15.9647 21.9316 13.9947 21.0595 12.0003 19.134C10.006 21.0595 8.03596 21.9316 6.70866 21.1653C5.38136 20.399 5.15158 18.2569 5.82195 15.567C3.15724 14.8026 1.41699 13.5325 1.41699 11.9999C1.41699 10.4672 3.15724 9.19718 5.82195 8.43278C5.15158 5.74288 5.38136 3.60075 6.70866 2.83443C8.03596 2.06811 10.006 2.94019 12.0003 4.86569C13.9947 2.94019 15.9647 2.06811 17.292 2.83443C18.6193 3.60075 18.8491 5.74288 18.1787 8.43278ZM17.2051 8.18527C17.7744 5.92558 17.6549 4.19865 16.792 3.70046C15.9291 3.20226 14.3738 3.96221 12.7015 5.58509C13.2933 6.2283 13.8809 6.95849 14.448 7.76031C15.426 7.85054 16.3521 7.99432 17.2051 8.18527ZM6.79554 15.8145C6.22624 18.0742 6.34577 19.8011 7.20866 20.2993C8.07155 20.7975 9.62688 20.0375 11.2992 18.4146C10.7073 17.7714 10.1197 17.0412 9.55262 16.2394C8.57467 16.1492 7.6485 16.0054 6.79554 15.8145ZM10.8627 7.67324C11.2365 7.65776 11.6161 7.64987 12.0003 7.64987C12.3845 7.64987 12.7641 7.65776 13.138 7.67324C12.7612 7.18096 12.3798 6.7248 12.0003 6.30922C11.6208 6.7248 11.2394 7.18096 10.8627 7.67324ZM9.55262 7.76031C10.1197 6.95849 10.7073 6.2283 11.2992 5.58509C9.62688 3.96221 8.07155 3.20226 7.20866 3.70046C6.34577 4.19865 6.22624 5.92558 6.79554 8.18527C7.6485 7.99432 8.57467 7.85054 9.55262 7.76031ZM13.8939 15.2797C14.2395 14.7728 14.5772 14.2366 14.9015 13.6749C15.2258 13.1131 15.5213 12.5526 15.7875 11.9999C15.5213 11.4471 15.2258 10.8866 14.9015 10.3249C14.5772 9.76311 14.2395 9.22694 13.8939 8.72005C13.2821 8.6742 12.649 8.64987 12.0003 8.64987C11.3517 8.64987 10.7185 8.6742 10.1067 8.72005C9.76112 9.22694 9.42347 9.76311 9.09914 10.3249C8.77481 10.8866 8.4793 11.4471 8.21312 11.9999C8.4793 12.5526 8.77481 13.1131 9.09914 13.6749C9.42347 14.2366 9.76112 14.7728 10.1067 15.2797C10.7185 15.3255 11.3517 15.3499 12.0003 15.3499C12.649 15.3499 13.2821 15.3255 13.8939 15.2797ZM15.1785 15.1484C15.7932 15.0683 16.3789 14.9661 16.9286 14.8452C16.7584 14.3087 16.5541 13.7504 16.3161 13.178C16.1426 13.5095 15.9596 13.8421 15.7675 14.1749C15.5754 14.5076 15.3788 14.8324 15.1785 15.1484ZM8.82218 8.85133C8.20747 8.93147 7.62174 9.03367 7.07208 9.15454C7.24223 9.691 7.44659 10.2494 7.68454 10.8218C7.85806 10.4903 8.04101 10.1576 8.23311 9.82487C8.42522 9.49212 8.62185 9.16736 8.82218 8.85133ZM7.07208 14.8452C7.62174 14.9661 8.20747 15.0683 8.82218 15.1484C8.62185 14.8324 8.42522 14.5076 8.23311 14.1749C8.04101 13.8421 7.85806 13.5095 7.68454 13.178C7.44659 13.7504 7.24223 14.3087 7.07208 14.8452ZM6.09439 14.6C6.35551 13.7659 6.69407 12.8919 7.10491 11.9999C6.69407 11.1078 6.35551 10.2339 6.09439 9.39969C3.85279 10.0365 2.41699 11.0035 2.41699 11.9999C2.41699 12.9962 3.85279 13.9632 6.09439 14.6ZM16.9286 9.15454C16.3789 9.03367 15.7932 8.93147 15.1785 8.85133C15.3788 9.16736 15.5754 9.49212 15.7675 9.82487C15.9596 10.1576 16.1426 10.4903 16.3161 10.8218C16.5541 10.2494 16.7584 9.691 16.9286 9.15454ZM17.9063 9.39969C17.6451 10.2339 17.3066 11.1078 16.8957 11.9999C17.3066 12.8919 17.6451 13.7659 17.9063 14.6C20.1479 13.9632 21.5837 12.9962 21.5837 11.9999C21.5837 11.0035 20.1479 10.0365 17.9063 9.39969ZM12.0003 13.879C10.9625 13.879 10.1212 13.0377 10.1212 11.9999C10.1212 10.962 10.9625 10.1207 12.0003 10.1207C13.0382 10.1207 13.8795 10.962 13.8795 11.9999C13.8795 13.0377 13.0382 13.879 12.0003 13.879Z"},child:[]}]})(e)}function Y1(e){return z({tag:"svg",attr:{viewBox:"0 0 24 24",strokeWidth:"2",stroke:"currentColor",fill:"none",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{stroke:"none",d:"M0 0h24v24H0z",fill:"none"},child:[]},{tag:"path",attr:{d:"M12 12l-8 -8v16l16 -16v16l-4 -4"},child:[]},{tag:"path",attr:{d:"M20 12l-8 8l-4 -4"},child:[]}]})(e)}function $1(e){return z({tag:"svg",attr:{role:"img",viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M20.229 15.793a.666.666 0 0 0 .244-.243.666.666 0 0 0 .09-.333l.012-3.858a.666.666 0 0 1 .09-.333.666.666 0 0 1 .245-.243L23 9.58a.667.667 0 0 1 .333-.088.667.667 0 0 1 .333.09.667.667 0 0 1 .244.243.666.666 0 0 1 .089.333v7.014a.667.667 0 0 1-.335.578l-7.893 4.534a.666.666 0 0 1-.662 0l-6.194-3.542a.667.667 0 0 1-.246-.244.667.667 0 0 1-.09-.335v-3.537c0-.004.004-.006.008-.004s.008 0 .008-.005v-.004c0-.003.002-.005.004-.007l5.102-2.93c.004-.003.002-.01-.003-.01a.005.005 0 0 1-.004-.002.005.005 0 0 1-.001-.004l.01-3.467a.667.667 0 0 0-.333-.58.667.667 0 0 0-.667 0L8.912 9.799a.667.667 0 0 1-.665 0l-3.804-2.19a.667.667 0 0 0-.999.577v6.267a.667.667 0 0 1-.332.577.666.666 0 0 1-.332.09.667.667 0 0 1-.333-.088L.336 13.825a.667.667 0 0 1-.246-.244.667.667 0 0 1-.09-.336L.019 2.292a.667.667 0 0 1 .998-.577l7.23 4.153a.667.667 0 0 0 .665 0l7.228-4.153a.666.666 0 0 1 .333-.088.666.666 0 0 1 .333.09.667.667 0 0 1 .244.244.667.667 0 0 1 .088.333V13.25c0 .117-.03.232-.089.334a.667.667 0 0 1-.245.244l-3.785 2.18a.667.667 0 0 0-.245.245.666.666 0 0 0-.089.334.667.667 0 0 0 .09.334.666.666 0 0 0 .247.244l2.088 1.189a.67.67 0 0 0 .33.087.667.667 0 0 0 .332-.089l4.457-2.56Zm.438-9.828a.666.666 0 0 0 .09.335.666.666 0 0 0 .248.244.667.667 0 0 0 .67-.008l2.001-1.2a.666.666 0 0 0 .237-.243.667.667 0 0 0 .087-.329V2.32a.667.667 0 0 0-.091-.335.667.667 0 0 0-.584-.33.667.667 0 0 0-.334.094l-2 1.2a.666.666 0 0 0-.238.243.668.668 0 0 0-.086.329v2.445Z"},child:[]}]})(e)}function J1(e){return z({tag:"svg",attr:{role:"img",viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M16.214 6.762l-.075.391c-.116.741-.074.953.244 1.228l.307.254-.318 1.418c-.19.846-.423 1.555-.571 1.788-.127.201-.275.497-.307.656-.053.19-.233.381-.508.55-.243.138-.72.508-1.058.805-.27.243-.456.392-.557.456l-.33.261c-.106.17-.166.307-.189.411-.023.107-.01.178.024.23.033.05.09.085.168.107a.954.954 0 00.282.023 3 3 0 00.632-.112c.07-.019.125-.037.173-.053.074-.091.245-.263.548-.562.804-.793 1.111-1.227.794-1.11-.117.042-.064-.064.137-.276.424-.413.667-1.037 1.175-2.994.402-1.545.402-1.567.698-1.567.139 0 .532.024.532.024V6.762h-.902zm3.839 3.165c-.064 0-.17.096-.233.202-.116.19.021.306 1.767 1.396 1.037.657 1.873 1.217 1.852 1.26-.021.031-.868.582-1.883 1.217-1.842 1.142-1.852 1.153-1.683 1.386.212.275 0 .37 2.391-1.122L24 13.155v-.836l-1.937-1.196c-1.047-.656-1.957-1.185-2.01-1.196zm-16.085.117c-.053 0-.963.54-2.01 1.185L0 12.425v.836l1.947 1.217c1.08.666 1.99 1.217 2.032 1.217.042 0 .127-.096.212-.212.127-.201.02-.286-1.768-1.418C.72 12.996.54 12.848.71 12.732c.106-.074.91-.572 1.778-1.111 1.979-1.217 1.873-1.133 1.714-1.387-.063-.105-.17-.2-.233-.19zm8.684.023c-.292-.002-.92.443-2.8 1.978-.081.193-.088.326-.051.412.024.059.068.1.129.13.06.03.138.048.224.055.171.015.373-.012.536-.044l.11-.025a.386.386 0 01.144-.118c.116-.064.603-.508 1.09-.984.857-.868 1.058-1.26.709-1.387a.24.24 0 00-.09-.017zm2.196.603c-.257.007-.72.305-1.513.938-.398.323-.65.497-.785.533l-.524.414c-.197.36-.226.583-.174.706a.25.25 0 00.138.134.644.644 0 00.24.045 2.18 2.18 0 00.58-.085 3.466 3.466 0 00.291-.092l.029-.012.053-.028c.1-.129.33-.372.618-.652.91-.878 1.375-1.502 1.28-1.735-.043-.113-.117-.17-.233-.166zm-2.424 1.08c-.074.008-.24.136-.539.398-.432.382-.903.602-1.066.504a3.97 3.97 0 01-.114.024c-.166.033-.373.06-.558.045a.708.708 0 01-.252-.063.337.337 0 01-.168-.17c-.037-.09-.037-.202.005-.345l-.65.534-1.471 1.217V15.867l4.82-3.797a.41.41 0 01.016-.123c.037-.134.035-.202-.023-.196zm2.074.639c-.073 0-.195.103-.39.31-.265.283-.682.557-.903.613l-.034.018a2.191 2.191 0 01-.11.042c-.06.02-.138.044-.228.068-.18.049-.404.094-.604.089a.732.732 0 01-.275-.054.344.344 0 01-.184-.18c-.058-.139-.035-.334.092-.611L7.61 16.033v1.205h1.868l3.962-3.112c.103-.114.258-.27.467-.465.56-.519.687-.698.687-.963 0-.206-.023-.31-.096-.31zm.943 1.95l-.339.338c-.19.18-.529.402-.761.497l-.046.02-.003.005-.01.01c-.009.007-.013.008-.02.011a3.432 3.432 0 01-.282.093 3.058 3.058 0 01-.65.115 1.035 1.035 0 01-.31-.027.364.364 0 01-.218-.144c-.048-.074-.062-.173-.035-.295a1.11 1.11 0 01.095-.25l-3.197 2.526h4.252l.508-.582c.698-.814 1.016-1.396 1.016-1.894z"},child:[]}]})(e)}const G1=a(K)``,X1=a(Q)``,U1=a.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    gap: 3.1em;
`,_1=a(x.div)`
    text-align: center;
`,R=a.h4`
    color: var(--theme-second-text-color);
    font-weight: normal;
    font-size: clamp(0.2rem, 1vw + 0.45rem, 1rem);
    text-transform: uppercase;
`,q1=a.h1`
    color: ${({theme:e})=>e.primaryAccentColor};
    font-family: "Dancing Script", cursive;
    font-size: clamp(0.3rem, 1vw + 3rem, 5rem);
`,K1=a(x.div)`
    display: flex;
    flex-direction: column;
    gap: 0.7em;
    text-align: center;
`,Q1=a(R)``,ee=a.ul`
    list-style-type: none;
    display: flex;
    justify-content: center;
    gap: clamp(0.3em, 1vw + 1.7em, 5em);
    cursor: pointer;
`,te=a.li``,ne=D`
from {
    rotate: 0deg;
} to {
    rotate: 360deg;
}
`,oe=a(N1)`
    font-size: clamp(0.3rem, 1vw + 1.8rem, 4rem);
    animation: ${ne} 5s linear infinite;
    &:hover {
        color: var(--theme-primary-color);
    }
`,re=a(Y1)`
    font-size: clamp(0.3rem, 1vw + 1.8rem, 4rem);
    &:hover {
        color: var(--theme-primary-color);
    }
`,ie=a(J1)`
    font-size: clamp(0.3rem, 1vw + 1.8rem, 4rem);
    &:hover {
        color: var(--theme-primary-color);
    }
`,se=a($1)`
    font-size: clamp(0.3rem, 1vw + 1.8rem, 4rem);
    &:hover {
        color: var(--theme-primary-color);
    }
`,le=a.div``,ae=a.p`
    color: var(--theme-second-text-color);
`,ce=a.span`
    color: red;
`,de=()=>{const e=[i.jsx(oe,{}),i.jsx(re,{}),i.jsx(ie,{}),i.jsx(se,{})];return i.jsx(G1,{children:i.jsx(X1,{children:i.jsxs(U1,{children:[i.jsxs(_1,{initial:{opacity:0},whileInView:{opacity:1,transition:{duration:.6,type:"spring"}},viewport:{amount:.83,once:!0},children:[i.jsx(R,{children:"that's all, folks!"}),i.jsx(q1,{children:"Jai teja"})]}),i.jsxs(K1,{initial:{opacity:0},whileInView:{opacity:1,transition:{duration:.6,type:"spring"}},viewport:{amount:.5,once:!0},children:[i.jsx(Q1,{children:"made with"}),i.jsx(ee,{children:e.map(t=>i.jsx(te,{children:t},e1()))}),i.jsx(le,{children:i.jsxs(ae,{children:["Hand-coded with 100% human efforts, zero AI.",i.jsx("br",{}),"Copyright © ",new Date().getFullYear()," Jai teja. All rights reserved.",i.jsx("br",{}),i.jsx("br",{}),"Made with"," ",i.jsx(ce,{children:"❤"})," ","by Jai teja"]})})]})]})})})},me=()=>i.jsxs(i.Fragment,{children:[i.jsx(s1,{}),i.jsx(b1,{}),t1.map(({component:e,route:t})=>i.jsx(e,{route:t.toUpperCase()},t.toUpperCase())),i.jsx(D1,{}),i.jsx(de,{})]});export{me as default};
