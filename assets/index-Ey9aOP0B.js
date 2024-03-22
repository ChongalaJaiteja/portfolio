import{u as r,r as c,_ as h,j as t,a as v}from"./index-B7nADy_P.js";import{m as u,v as m,A as w,b as j,g as T}from"./constants-BX8pe3aa.js";import S from"./index-BzixqWGo.js";const y=r(u.ul)`
    list-style-type: none;
    /* outline: auto; */
    padding: 0;
    display: flex;
    flex-direction: column;
    gap: 3em;
    flex-grow: 1;
`,k=c.lazy(()=>h(()=>import("./index-CsVT6Rh0.js"),__vite__mapDeps([0,1,2,3,4]))),C=c.lazy(()=>h(()=>import("./index-CviRt4wT.js"),__vite__mapDeps([5,1,2,3,4]))),P=c.lazy(()=>h(()=>import("./index-D0Jl1b-E.js"),__vite__mapDeps([6,1,2]))),_=({tabSectionData:n,id:e})=>{const o=(i,l)=>{switch(e){case"skills":return t.jsx(k,{data:i,index:l,id:e},m());case"projects":return t.jsx(C,{data:i,index:l,id:e},m());case"certifications":return t.jsx(P,{data:i,index:l,id:e},m());default:return null}};return t.jsx(y,{children:t.jsx(c.Suspense,{fallback:t.jsx(S,{}),children:n.map((i,l)=>t.jsx(t.Fragment,{children:o(i,l)}))})})},D=r.li`
    background-color: ${({theme:n,isActive:e})=>e?n.isLightTheme?"none":"rgb(30 41 59 / 1)":"var(--theme-container-bg-color)"};
    text-align: center;
    width: clamp(8rem, 1vw + 30%, 10rem);
    flex: 1 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
    max-height: 10rem;
    position: relative;
    &:hover {
        background-color: ${({theme:n,isActive:e})=>!e&&(n.isLightTheme?"rgb(46, 175, 255, 0.5)":"rgb(30 41 59 / 0.6)")};
    }
    @media (min-width: 800px) {
        width: 100%;
        max-width: none;
        /* min-height: 3rem; */
        max-height: 8.4rem;
    }
`,E=r.button`
    cursor: pointer;
    padding: clamp(0.1em, 1vw + 0.9em, 1.2em) clamp(0.1em, 1vw + 1em, 1.4em);
    border: none;
    width: 100%;
    height: 100%;
    background-color: transparent;
    color: var(--theme-primary-text-color);
    font-size: clamp(0.2rem, 1vw + 0.57rem, 1.17rem);
`,A=r(u.div)`
    position: absolute;
    bottom: -1px;
    left: 0;
    right: 0;
    height: 3px;
    background: var(--theme-primary-color);
    box-shadow: 0px 3px 10px 2px var(--theme-primary-color);
    @media (min-width: 800px) {
        /* left: 20%; */
        /* right: 0; */
        height: 100%;
        left: auto;
        width: 3px;
    }
`,B=({tabLabel:n,onSelectTab:e,isActive:o})=>{const i=()=>{e(n)};return t.jsxs(D,{isActive:o,children:[t.jsx(E,{onClick:i,isActive:o,children:n}),o&&t.jsx(A,{layoutId:"underline"})]})},I=r.div`
    border-radius: 25px;
    display: flex;
    flex-direction: column;
    background-color: var(--theme-container-bg-color);
    border: 2px solid var(--theme-divide-line-color);
    overflow: hidden;
    @media (min-width: 800px) {
        flex-direction: row;
        min-height: 80vh;
        max-height: 35rem;
    }
`,F=r.ul`
    list-style-type: none;
    padding: 0;
    display: flex;
    overflow: auto;
    width: 100%;
    scrollbar-width: none; /* For Firefox */
    -ms-overflow-style: none; /* For Internet Explorer 10+ */
    &::-webkit-scrollbar {
        display: none !important;
    }
    @media (min-width: 800px) {
        max-width: 13rem;
        flex-direction: column;
        justify-content: flex-start;
        flex: 1 1 20%;
    }
`,O=r.div`
    /* outline: auto; */
    display: flex;
    flex-direction: column;
    flex: 1 1 auto;
    overflow: auto;
    padding-block: clamp(0.1em, 1vw + 2em, 3em) clamp(0.1em, 1vw + 1.5em, 2.7em);
    padding-inline: clamp(0.1em, 1vw + 1em, 2.5em);
    scrollbar-width: none; /* For Firefox */
    -ms-overflow-style: none; /* For Internet Explorer 10+ */
    &::-webkit-scrollbar {
        display: none !important;
    }
    max-height: 34rem;
    @media (min-width: 800px) {
        padding-block: clamp(0.1em, 1vw + 1.5em, 2.7em);
        flex: 1 1 80%;
        max-height: none;
    }
`,X=({domainDetails:n})=>{const e=Object.keys(n),[o,i]=c.useState(e[0]),l=n[o],s=c.useRef(null),g=a=>{s.current=a.touches[0].clientX},b=a=>{if(!s.current)return;const x=a.changedTouches[0].clientX-s.current,p=50;if(x<-p&&o!==e[e.length-1]){const d=e.indexOf(o)+1;i(e[d])}else if(x>p&&o!==e[0]){const d=e.indexOf(o)-1;i(e[d])}s.current=null},f=a=>{i(a)};return t.jsxs(I,{children:[t.jsx(F,{children:e.map(a=>t.jsx(B,{tabLabel:a,onSelectTab:f,isActive:o===a},a))}),t.jsx(O,{onTouchStart:g,onTouchEnd:b,children:t.jsx(_,{tabSectionData:l,id:o})})]})},L=r(w)`
    min-height: 79vh;
`,R=r(j)``,z=r.div``,G=()=>{const{id:n}=v(),{domainDetails:e}=T(n);return t.jsx(t.Fragment,{children:t.jsx(L,{children:t.jsx(R,{children:t.jsx(z,{children:t.jsx(X,{domainDetails:e})})})})})};export{G as default};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/index-CsVT6Rh0.js","assets/index-B7nADy_P.js","assets/index-NdIjxnzJ.css","assets/constants-BX8pe3aa.js","assets/constants-cwqOqNE_.css","assets/index-CviRt4wT.js","assets/index-D0Jl1b-E.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
