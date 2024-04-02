import{r as m,u as a,j as s,a as Z,h as D}from"./index-OLGqbvhD.js";import{u as b,m as C,M as O,i as L,f as P,a as N,b as k,c as V,p as Y,v as $,d as J,e as G,g as y,h as X,w as U,j as x,F as _,G as q,A as K,k as Q,T as ee,S as te,l as ne,n as oe,o as re}from"./constants-Dn9oAIez.js";import{R as F,D as se,L as ie,A as le,a as ae,N as ce}from"./index-DZ81f7ZW.js";function de(e){const t=b(()=>C(e)),{isStatic:r}=m.useContext(O);if(r){const[,n]=m.useState(e);m.useEffect(()=>t.on("change",n),[])}return t}function fe(e,t={}){const{isStatic:r}=m.useContext(O),n=m.useRef(null),o=de(L(e)?e.get():e),i=()=>{n.current&&n.current.stop()};return m.useInsertionEffect(()=>o.attach((l,c)=>{if(r)return c(l);const d=n.current;return d&&d.time===0&&d.sample(P.delta),i(),n.current=N({keyframes:[o.get(),l],velocity:o.getVelocity(),type:"spring",restDelta:.001,restSpeed:.01,...t,onUpdate:c}),o.get()},i),[JSON.stringify(t)]),k(()=>{if(L(e))return e.on("change",l=>o.set(parseFloat(l)))},[o]),o}function ue(e,t,r){var n;if(typeof e=="string"){let o=document;t&&(V(!!t.current),o=t.current),r?((n=r[e])!==null&&n!==void 0||(r[e]=o.querySelectorAll(e)),e=r[e]):e=o.querySelectorAll(e)}else e instanceof Element&&(e=[e]);return Array.from(e||[])}const w=new WeakMap;let g;function me(e,t){if(t){const{inlineSize:r,blockSize:n}=t[0];return{width:r,height:n}}else return e instanceof SVGElement&&"getBBox"in e?e.getBBox():{width:e.offsetWidth,height:e.offsetHeight}}function he({target:e,contentRect:t,borderBoxSize:r}){var n;(n=w.get(e))===null||n===void 0||n.forEach(o=>{o({target:e,contentSize:t,get size(){return me(e,r)}})})}function ge(e){e.forEach(he)}function pe(){typeof ResizeObserver>"u"||(g=new ResizeObserver(ge))}function Ce(e,t){g||pe();const r=ue(e);return r.forEach(n=>{let o=w.get(n);o||(o=new Set,w.set(n,o)),o.add(t),g==null||g.observe(n)}),()=>{r.forEach(n=>{const o=w.get(n);o==null||o.delete(t),o!=null&&o.size||g==null||g.unobserve(n)})}}const S=new Set;let v;function ve(){v=()=>{const e={width:window.innerWidth,height:window.innerHeight},t={target:window,size:e,contentSize:e};S.forEach(r=>r(t))},window.addEventListener("resize",v)}function xe(e){return S.add(e),v||ve(),()=>{S.delete(e),!S.size&&v&&(v=void 0)}}function ye(e,t){return typeof e=="function"?xe(e):Ce(e,t)}const we=50,B=()=>({current:0,offset:[],progress:0,scrollLength:0,targetOffset:0,targetLength:0,containerLength:0,velocity:0}),Se=()=>({time:0,x:B(),y:B()}),je={x:{length:"Width",position:"Left"},y:{length:"Height",position:"Top"}};function I(e,t,r,n){const o=r[t],{length:i,position:l}=je[t],c=o.current,d=r.time;o.current=e["scroll"+l],o.scrollLength=e["scroll"+i]-e["client"+i],o.offset.length=0,o.offset[0]=0,o.offset[1]=o.scrollLength,o.progress=Y(0,o.scrollLength,o.current);const u=n-d;o.velocity=u>we?0:$(o.current-c,u)}function Me(e,t,r){I(e,"x",t,r),I(e,"y",t,r),t.time=r}function Ee(e,t){const r={x:0,y:0};let n=e;for(;n&&n!==t;)if(n instanceof HTMLElement)r.x+=n.offsetLeft,r.y+=n.offsetTop,n=n.offsetParent;else if(n.tagName==="svg"){const o=n.getBoundingClientRect();n=n.parentElement;const i=n.getBoundingClientRect();r.x+=o.left-i.left,r.y+=o.top-i.top}else if(n instanceof SVGGraphicsElement){const{x:o,y:i}=n.getBBox();r.x+=o,r.y+=i;let l=null,c=n.parentNode;for(;!l;)c.tagName==="svg"&&(l=c),c=n.parentNode;n=l}else break;return r}const ze={Enter:[[0,1],[1,1]],Exit:[[0,0],[1,0]],Any:[[1,0],[0,1]],All:[[0,0],[1,1]]},E={start:0,center:.5,end:1};function T(e,t,r=0){let n=0;if(E[e]!==void 0&&(e=E[e]),typeof e=="string"){const o=parseFloat(e);e.endsWith("px")?n=o:e.endsWith("%")?e=o/100:e.endsWith("vw")?n=o/100*document.documentElement.clientWidth:e.endsWith("vh")?n=o/100*document.documentElement.clientHeight:e=o}return typeof e=="number"&&(n=t*e),r+n}const Le=[0,0];function Be(e,t,r,n){let o=Array.isArray(e)?e:Le,i=0,l=0;return typeof e=="number"?o=[e,e]:typeof e=="string"&&(e=e.trim(),e.includes(" ")?o=e.split(" "):o=[e,E[e]?e:"0"]),i=T(o[0],r,n),l=T(o[1],t),i-l}const Ie={x:0,y:0};function Te(e){return"getBBox"in e&&e.tagName!=="svg"?e.getBBox():{width:e.clientWidth,height:e.clientHeight}}function Ae(e,t,r){let{offset:n=ze.All}=r;const{target:o=e,axis:i="y"}=r,l=i==="y"?"height":"width",c=o!==e?Ee(o,e):Ie,d=o===e?{width:e.scrollWidth,height:e.scrollHeight}:Te(o),u={width:e.clientWidth,height:e.clientHeight};t[i].offset.length=0;let h=!t[i].interpolate;const j=n.length;for(let f=0;f<j;f++){const z=Be(n[f],u[l],d[l],c[i]);!h&&z!==t[i].interpolatorOffsets[f]&&(h=!0),t[i].offset[f]=z}h&&(t[i].interpolate=J(t[i].offset,G(n)),t[i].interpolatorOffsets=[...t[i].offset]),t[i].progress=t[i].interpolate(t[i].current)}function We(e,t=e,r){if(r.x.targetOffset=0,r.y.targetOffset=0,t!==e){let n=t;for(;n&&n!==e;)r.x.targetOffset+=n.offsetLeft,r.y.targetOffset+=n.offsetTop,n=n.offsetParent}r.x.targetLength=t===e?t.scrollWidth:t.clientWidth,r.y.targetLength=t===e?t.scrollHeight:t.clientHeight,r.x.containerLength=e.clientWidth,r.y.containerLength=e.clientHeight}function He(e,t,r,n={}){return{measure:()=>We(e,n.target,r),update:o=>{Me(e,r,o),(n.offset||n.target)&&Ae(e,r,n)},notify:()=>t(r)}}const p=new WeakMap,A=new WeakMap,M=new WeakMap,W=e=>e===document.documentElement?window:e;function be(e,{container:t=document.documentElement,...r}={}){let n=M.get(t);n||(n=new Set,M.set(t,n));const o=Se(),i=He(t,e,o,r);if(n.add(i),!p.has(t)){const c=()=>{for(const f of n)f.measure()},d=()=>{for(const f of n)f.update(P.timestamp)},u=()=>{for(const f of n)f.notify()},h=()=>{y.read(c,!1,!0),y.read(d,!1,!0),y.update(u,!1,!0)};p.set(t,h);const j=W(t);window.addEventListener("resize",h,{passive:!0}),t!==document.documentElement&&A.set(t,ye(t,h)),j.addEventListener("scroll",h,{passive:!0})}const l=p.get(t);return y.read(l,!1,!0),()=>{var c;X(l);const d=M.get(t);if(!d||(d.delete(i),d.size))return;const u=p.get(t);p.delete(t),u&&(W(t).removeEventListener("scroll",u),(c=A.get(t))===null||c===void 0||c(),window.removeEventListener("resize",u))}}function H(e,t){U(!!(!t||t.current))}const Oe=()=>({scrollX:C(0),scrollY:C(0),scrollXProgress:C(0),scrollYProgress:C(0)});function Pe({container:e,target:t,layoutEffect:r=!0,...n}={}){const o=b(Oe);return(r?k:m.useEffect)(()=>(H("target",t),H("container",e),be(({x:l,y:c})=>{o.scrollX.set(l.current),o.scrollXProgress.set(l.progress),o.scrollY.set(c.current),o.scrollYProgress.set(c.progress)},{...n,container:(e==null?void 0:e.current)||void 0,target:(t==null?void 0:t.current)||void 0})),[e,t,JSON.stringify(n.offset)]),o}const ke=a(x.div)`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    height: clamp(0.3rem, 1vw + 0.13rem, 0.53rem);
    background: ${({theme:e})=>e.primaryAccentColor};
    transform-origin: 0%;
    z-index: 12;
`,Fe=()=>{const{scrollYProgress:e}=Pe(),t=fe(e,{stiffness:100,damping:30,restDelta:.001});return s.jsx(ke,{style:{scaleX:t}})},Re=a.div`
    position: fixed;
    bottom: 5%;
    right: 25px;
    z-index: 1;
    /* outline: auto; */
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.2em;
`,Ze=a(x.div)`
    cursor: pointer;
    color: ${({theme:e})=>e.primaryAccentColor};
`,De=a(_)`
    font-size: clamp(0.5rem, 1vw + 1.5rem, 2rem);
`,Ne=a(x.div)`
    --fs-theme-mode-logo: clamp(1rem, 1vw + 1.3rem, 1.8rem);
    display: none;
    @media (min-width: 1060px) {
        display: block;
    }
`,Ve=a(se)`
    font-size: var(--fs-theme-mode-logo);
    cursor: pointer;
    color: #272826;
    animation: ${F} 0.3s linear forwards;
`,Ye=a(ie)`
    font-size: var(--fs-theme-mode-logo);
    cursor: pointer;
    color: yellow;
    animation: none;
    animation: ${F} 0.3s linear forwards reverse 1;
`,$e=()=>{const e={initial:{y:23},animate:{y:0},transition:{duration:.4,ease:"easeInOut",type:"spring"},exit:{y:23}},t=()=>{const l={duration:500,smooth:!0};ae.scrollToTop(l)},[r,n]=m.useState(!1),{toggleTheme:o,isLightTheme:i}=Z();return m.useEffect(()=>{const l=()=>{const c=window.scrollY>50;r!==c&&n(c)};return window.addEventListener("scroll",l),()=>{window.removeEventListener("scroll",l)}},[r]),s.jsx(s.Fragment,{children:r&&s.jsx(le,{children:s.jsxs(Re,{children:[s.jsx(Ne,{onClick:o,whileTap:{scale:1.3},initial:{y:-30},animate:{y:0},transition:{duration:.4,ease:"easeInOut",type:"spring"},exit:{y:-30},children:i?s.jsx(Ve,{}):s.jsx(Ye,{})}),s.jsx(Ze,{onClick:t,variants:e,whileTap:{scale:1.3},initial:"initial",animate:"animate",transition:"transition",exit:"exit",children:s.jsx(De,{})})]})})})};function Je(e){return q({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M14.448 16.2394C13.8809 17.0412 13.2933 17.7714 12.7015 18.4146C14.3738 20.0375 15.9291 20.7975 16.792 20.2993C17.6549 19.8011 17.7744 18.0742 17.2051 15.8145C16.3521 16.0054 15.426 16.1492 14.448 16.2394ZM13.138 16.3265C12.7641 16.342 12.3845 16.3499 12.0003 16.3499C11.6161 16.3499 11.2365 16.342 10.8627 16.3265C11.2394 16.8188 11.6208 17.2749 12.0003 17.6905C12.3798 17.2749 12.7612 16.8188 13.138 16.3265ZM18.1787 8.43278C20.8434 9.19718 22.5837 10.4672 22.5837 11.9999C22.5837 13.5325 20.8434 14.8026 18.1787 15.567C18.8491 18.2569 18.6193 20.399 17.292 21.1653C15.9647 21.9316 13.9947 21.0595 12.0003 19.134C10.006 21.0595 8.03596 21.9316 6.70866 21.1653C5.38136 20.399 5.15158 18.2569 5.82195 15.567C3.15724 14.8026 1.41699 13.5325 1.41699 11.9999C1.41699 10.4672 3.15724 9.19718 5.82195 8.43278C5.15158 5.74288 5.38136 3.60075 6.70866 2.83443C8.03596 2.06811 10.006 2.94019 12.0003 4.86569C13.9947 2.94019 15.9647 2.06811 17.292 2.83443C18.6193 3.60075 18.8491 5.74288 18.1787 8.43278ZM17.2051 8.18527C17.7744 5.92558 17.6549 4.19865 16.792 3.70046C15.9291 3.20226 14.3738 3.96221 12.7015 5.58509C13.2933 6.2283 13.8809 6.95849 14.448 7.76031C15.426 7.85054 16.3521 7.99432 17.2051 8.18527ZM6.79554 15.8145C6.22624 18.0742 6.34577 19.8011 7.20866 20.2993C8.07155 20.7975 9.62688 20.0375 11.2992 18.4146C10.7073 17.7714 10.1197 17.0412 9.55262 16.2394C8.57467 16.1492 7.6485 16.0054 6.79554 15.8145ZM10.8627 7.67324C11.2365 7.65776 11.6161 7.64987 12.0003 7.64987C12.3845 7.64987 12.7641 7.65776 13.138 7.67324C12.7612 7.18096 12.3798 6.7248 12.0003 6.30922C11.6208 6.7248 11.2394 7.18096 10.8627 7.67324ZM9.55262 7.76031C10.1197 6.95849 10.7073 6.2283 11.2992 5.58509C9.62688 3.96221 8.07155 3.20226 7.20866 3.70046C6.34577 4.19865 6.22624 5.92558 6.79554 8.18527C7.6485 7.99432 8.57467 7.85054 9.55262 7.76031ZM13.8939 15.2797C14.2395 14.7728 14.5772 14.2366 14.9015 13.6749C15.2258 13.1131 15.5213 12.5526 15.7875 11.9999C15.5213 11.4471 15.2258 10.8866 14.9015 10.3249C14.5772 9.76311 14.2395 9.22694 13.8939 8.72005C13.2821 8.6742 12.649 8.64987 12.0003 8.64987C11.3517 8.64987 10.7185 8.6742 10.1067 8.72005C9.76112 9.22694 9.42347 9.76311 9.09914 10.3249C8.77481 10.8866 8.4793 11.4471 8.21312 11.9999C8.4793 12.5526 8.77481 13.1131 9.09914 13.6749C9.42347 14.2366 9.76112 14.7728 10.1067 15.2797C10.7185 15.3255 11.3517 15.3499 12.0003 15.3499C12.649 15.3499 13.2821 15.3255 13.8939 15.2797ZM15.1785 15.1484C15.7932 15.0683 16.3789 14.9661 16.9286 14.8452C16.7584 14.3087 16.5541 13.7504 16.3161 13.178C16.1426 13.5095 15.9596 13.8421 15.7675 14.1749C15.5754 14.5076 15.3788 14.8324 15.1785 15.1484ZM8.82218 8.85133C8.20747 8.93147 7.62174 9.03367 7.07208 9.15454C7.24223 9.691 7.44659 10.2494 7.68454 10.8218C7.85806 10.4903 8.04101 10.1576 8.23311 9.82487C8.42522 9.49212 8.62185 9.16736 8.82218 8.85133ZM7.07208 14.8452C7.62174 14.9661 8.20747 15.0683 8.82218 15.1484C8.62185 14.8324 8.42522 14.5076 8.23311 14.1749C8.04101 13.8421 7.85806 13.5095 7.68454 13.178C7.44659 13.7504 7.24223 14.3087 7.07208 14.8452ZM6.09439 14.6C6.35551 13.7659 6.69407 12.8919 7.10491 11.9999C6.69407 11.1078 6.35551 10.2339 6.09439 9.39969C3.85279 10.0365 2.41699 11.0035 2.41699 11.9999C2.41699 12.9962 3.85279 13.9632 6.09439 14.6ZM16.9286 9.15454C16.3789 9.03367 15.7932 8.93147 15.1785 8.85133C15.3788 9.16736 15.5754 9.49212 15.7675 9.82487C15.9596 10.1576 16.1426 10.4903 16.3161 10.8218C16.5541 10.2494 16.7584 9.691 16.9286 9.15454ZM17.9063 9.39969C17.6451 10.2339 17.3066 11.1078 16.8957 11.9999C17.3066 12.8919 17.6451 13.7659 17.9063 14.6C20.1479 13.9632 21.5837 12.9962 21.5837 11.9999C21.5837 11.0035 20.1479 10.0365 17.9063 9.39969ZM12.0003 13.879C10.9625 13.879 10.1212 13.0377 10.1212 11.9999C10.1212 10.962 10.9625 10.1207 12.0003 10.1207C13.0382 10.1207 13.8795 10.962 13.8795 11.9999C13.8795 13.0377 13.0382 13.879 12.0003 13.879Z"},child:[]}]})(e)}const Ge=a(K)``,Xe=a(Q)``,Ue=a.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    gap: 3.1em;
`,_e=a(x.div)`
    text-align: center;
`,R=a.h4`
    color: var(--theme-second-text-color);
    font-weight: normal;
    font-size: clamp(0.2rem, 1vw + 0.45rem, 1rem);
    text-transform: uppercase;
`,qe=a.h1`
    color: ${({theme:e})=>e.primaryAccentColor};
    font-family: "Dancing Script", cursive;
    font-size: clamp(0.3rem, 1vw + 3rem, 5rem);
`,Ke=a(x.div)`
    display: flex;
    flex-direction: column;
    gap: 0.7em;
    text-align: center;
`,Qe=a(R)``,et=a.ul`
    list-style-type: none;
    display: flex;
    justify-content: center;
    gap: clamp(0.3em, 1vw + 1.7em, 5em);
    cursor: pointer;
`,tt=a.li``,nt=D`
from {
    rotate: 0deg;
} to {
    rotate: 360deg;
}
`,ot=a(Je)`
    font-size: clamp(0.3rem, 1vw + 1.8rem, 4rem);
    animation: ${nt} 5s linear infinite;
    &:hover {
        color: var(--theme-primary-color);
    }
`,rt=a(ee)`
    font-size: clamp(0.3rem, 1vw + 1.8rem, 4rem);
    &:hover {
        color: var(--theme-primary-color);
    }
`,st=a(te)`
    font-size: clamp(0.3rem, 1vw + 1.8rem, 4rem);
    &:hover {
        color: var(--theme-primary-color);
    }
`,it=a(ne)`
    font-size: clamp(0.3rem, 1vw + 1.8rem, 4rem);
    &:hover {
        color: var(--theme-primary-color);
    }
`,lt=a.div``,at=a.p`
    color: var(--theme-second-text-color);
`,ct=a.span`
    color: red;
`,dt=()=>{const e=[s.jsx(ot,{}),s.jsx(rt,{}),s.jsx(st,{}),s.jsx(it,{})];return s.jsx(Ge,{children:s.jsx(Xe,{children:s.jsxs(Ue,{children:[s.jsxs(_e,{initial:{opacity:0},whileInView:{opacity:1,transition:{duration:.6,type:"spring"}},viewport:{amount:.83,once:!0},children:[s.jsx(R,{children:"that's all, folks!"}),s.jsx(qe,{children:"Jai teja"})]}),s.jsxs(Ke,{initial:{opacity:0},whileInView:{opacity:1,transition:{duration:.6,type:"spring"}},viewport:{amount:.5,once:!0},children:[s.jsx(Qe,{children:"made with"}),s.jsx(et,{children:e.map(t=>s.jsx(tt,{children:t},oe()))}),s.jsx(lt,{children:s.jsxs(at,{children:["Hand-coded with 100% human efforts, zero AI.",s.jsx("br",{}),"Copyright © ",new Date().getFullYear()," Jai teja. All rights reserved.",s.jsx("br",{}),s.jsx("br",{}),"Made with"," ",s.jsx(ct,{children:"❤"})," ","by Jai teja"]})})]})]})})})},ht=()=>s.jsxs(s.Fragment,{children:[s.jsx(ce,{}),s.jsx(Fe,{}),re.map(({component:e,route:t})=>s.jsx(e,{route:t.toUpperCase()},t.toUpperCase())),s.jsx($e,{}),s.jsx(dt,{})]});export{ht as default};
