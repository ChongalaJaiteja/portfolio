import{u as r,r as c,_ as h,j as e,b as v}from"./index-CMg8H1mC.js";import{j as u,l as m,A as j,k as w,r as T}from"./constants-CcZyEjjk.js";import S from"./index-BnWsxPr5.js";const y=r(u.ul)`
    list-style-type: none;
    /* outline: auto; */
    padding: 0;
    display: flex;
    flex-direction: column;
    gap: 3em;
    flex-grow: 1;
`,k=c.lazy(()=>h(()=>import("./index-Dcm0twda.js"),__vite__mapDeps([0,1,2,3,4]))),C=c.lazy(()=>h(()=>import("./index-DBDy4EAz.js"),__vite__mapDeps([5,1,2,3,4]))),P=c.lazy(()=>h(()=>import("./index-BuK8Vmhm.js"),__vite__mapDeps([6,1,2]))),_=({tabSectionData:n,id:t})=>{const o=(i,l)=>{switch(t){case"skills":return e.jsx(k,{data:i,index:l},m());case"projects":return e.jsx(C,{data:i,index:l},m());case"certifications":return e.jsx(P,{data:i,index:l},m());default:return null}};return e.jsx(y,{children:e.jsx(c.Suspense,{fallback:e.jsx(S,{}),children:n.map((i,l)=>e.jsx(e.Fragment,{children:o(i,l)}))})})},D=r.li`
    background-color: ${({theme:n,isActive:t})=>t?n.isLightTheme?"none":"rgb(30 41 59 / 1)":"var(--theme-container-bg-color)"};
    text-align: center;
    width: clamp(8rem, 1vw + 30%, 10rem);
    flex: 1 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
    max-height: 10rem;
    position: relative;
    &:hover {
        background-color: ${({theme:n,isActive:t})=>!t&&(n.isLightTheme?"rgb(46, 175, 255, 0.5)":"rgb(30 41 59 / 0.6)")};
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
`,B=({tabLabel:n,onSelectTab:t,isActive:o})=>{const i=()=>{t(n)};return e.jsxs(D,{isActive:o,children:[e.jsx(E,{onClick:i,isActive:o,children:n}),o&&e.jsx(A,{layoutId:"underline"})]})},I=r.div`
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
`,X=({sectionDetails:n})=>{const t=Object.keys(n),[o,i]=c.useState(t[0]),l=n[o],s=c.useRef(null),g=a=>{s.current=a.touches[0].clientX},b=a=>{if(!s.current)return;const x=a.changedTouches[0].clientX-s.current,p=50;if(x<-p&&o!==t[t.length-1]){const d=t.indexOf(o)+1;i(t[d])}else if(x>p&&o!==t[0]){const d=t.indexOf(o)-1;i(t[d])}s.current=null},f=a=>{i(a)};return e.jsxs(I,{children:[e.jsx(F,{children:t.map(a=>e.jsx(B,{tabLabel:a,onSelectTab:f,isActive:o===a},a))}),e.jsx(O,{onTouchStart:g,onTouchEnd:b,children:e.jsx(_,{tabSectionData:l,id:o})})]})},L=r(j)`
    min-height: 79vh;
`,R=r(w)``,z=r.div``,G=()=>{const{id:n}=v(),{sectionDetails:t}=T(n);return e.jsx(e.Fragment,{children:e.jsx(L,{children:e.jsx(R,{children:e.jsx(z,{children:e.jsx(X,{sectionDetails:t})})})})})};export{G as default};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/index-Dcm0twda.js","assets/index-CMg8H1mC.js","assets/index-NdIjxnzJ.css","assets/constants-CcZyEjjk.js","assets/constants-cwqOqNE_.css","assets/index-DBDy4EAz.js","assets/index-BuK8Vmhm.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
