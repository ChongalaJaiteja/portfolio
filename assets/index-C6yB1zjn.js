import{u as r,r as s,_ as u,j as e,b as w}from"./index-B21R_Z9g.js";import{j as g,n as p,A as j,k as y,s as C}from"./constants-BdDeFesR.js";import v from"./index-CwSKzjOn.js";const T=r(g.ul)`
    list-style-type: none;
    /* outline: auto; */
    padding: 0;
    display: flex;
    flex-direction: column;
    gap: 3em;
    flex-grow: 1;
`,S=r(g.li)``,k=r.div`
    /* outline: auto; */
    display: flex;
    flex-direction: column;
    gap: 1em;
`,D=r.h4`
    font-size: clamp(0.1rem, 1vw + 0.73rem, 1.16rem);
    color: var(--theme-second-text-color);
    text-transform: capitalize;
`,I=r.ul`
    list-style-type: none;
    padding: 0;
    display: flex;
    flex-flow: row wrap;
    gap: 1.5em 1em;
`,P=s.lazy(()=>u(()=>import("./index-Bkoc4tcF.js"),__vite__mapDeps([0,1,2,3,4]))),_=s.lazy(()=>u(()=>import("./index-fLGY64UP.js"),__vite__mapDeps([5,1,2,3,4]))),E=s.lazy(()=>u(()=>import("./index-B7Kl92o7.js"),__vite__mapDeps([6,1,2,3,4]))),B=({data:o,index:t,id:i})=>{const{category:a="",...m}=o,c=Object.values(m)[0],d={initial:{opacity:0,y:22},animate:l=>({opacity:1,y:0,transition:{delay:.16*l,type:"spring"}})},h=(l,n)=>{switch(i){case"skills":return e.jsx(P,{itemDetails:l,index:n},p());case"projects":return e.jsx(_,{itemDetails:{...l,category:a,id:n+1},index:n},p());case"certifications":return e.jsx(E,{itemDetails:l,index:n},l.id)}};return e.jsx(S,{initial:"initial",variants:d,whileInView:"animate",custom:t,viewport:{once:!0},children:e.jsxs(k,{children:[a&&e.jsx(D,{children:a}),e.jsx(I,{children:e.jsx(s.Suspense,{fallback:e.jsx(v,{}),children:c.map((l,n)=>e.jsx(e.Fragment,{children:h(l,n)}))})})]})})},A=({tabSectionData:o,id:t})=>e.jsx(T,{children:e.jsx(s.Suspense,{fallback:e.jsx(v,{}),children:o.map((i,a)=>e.jsx(B,{data:i,index:a,id:t},p()))})}),F=r.li`
    background-color: ${({theme:o,isActive:t})=>t?o.isLightTheme?"none":"rgb(30 41 59 / 1)":"var(--theme-container-bg-color)"};
    text-align: center;
    width: clamp(8rem, 1vw + 30%, 10rem);
    flex: 1 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
    max-height: 10rem;
    position: relative;
    &:hover {
        background-color: ${({theme:o,isActive:t})=>!t&&(o.isLightTheme?"rgb(46, 175, 255, 0.5)":"rgb(30 41 59 / 0.6)")};
    }
    @media (min-width: 800px) {
        width: 100%;
        max-width: none;
        /* min-height: 3rem; */
        max-height: 8.4rem;
    }
`,z=r.button`
    cursor: pointer;
    padding: clamp(0.1em, 1vw + 0.9em, 1.2em) clamp(0.1em, 1vw + 1em, 1.4em);
    border: none;
    width: 100%;
    height: 100%;
    background-color: transparent;
    color: var(--theme-primary-text-color);
    font-size: clamp(0.2rem, 1vw + 0.57rem, 1.17rem);
    text-transform: capitalize;
`,O=r(g.div)`
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
`,L=({tabLabel:o,onSelectTab:t,isActive:i})=>{const a=()=>{t(o)};return e.jsxs(F,{isActive:i,children:[e.jsx(z,{onClick:a,isActive:i,children:o}),i&&e.jsx(O,{layoutId:"underline"})]})},X=r.div`
    border-radius: 25px;
    display: flex;
    flex-direction: column;
    background-color: var(--theme-container-bg-color);
    border: 2px solid var(--theme-divide-line-color);
    overflow: hidden;
    box-shadow: var(--theme-box-shadow);
    @media (min-width: 800px) {
        flex-direction: row;
        min-height: 80vh;
        max-height: 35rem;
    }
`,R=r.ul`
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
`,V=r.div`
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
`,$=({sectionDetails:o})=>{const t=Object.keys(o),[i,a]=s.useState(t[0]),m=o[i],c=s.useRef(null),d=n=>{c.current=n.touches[0].clientX},h=n=>{if(!c.current)return;const b=n.changedTouches[0].clientX-c.current,f=50;if(b<-f&&i!==t[t.length-1]){const x=t.indexOf(i)+1;a(t[x])}else if(b>f&&i!==t[0]){const x=t.indexOf(i)-1;a(t[x])}c.current=null},l=n=>{a(n)};return e.jsxs(X,{children:[e.jsx(R,{children:t.map(n=>e.jsx(L,{tabLabel:n,onSelectTab:l,isActive:i===n},n))}),e.jsx(V,{onTouchStart:d,onTouchEnd:h,children:e.jsx(A,{tabSectionData:m,id:i})})]})},H=r(j)`
    min-height: 79vh;
`,M=r(y)``,U=r.div`

`,N=()=>{const{id:o}=w(),{sectionDetails:t}=C(o);return e.jsx(e.Fragment,{children:e.jsx(H,{children:e.jsx(M,{children:e.jsx(U,{children:e.jsx($,{sectionDetails:t})})})})})};export{N as default};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/index-Bkoc4tcF.js","assets/index-B21R_Z9g.js","assets/index-NdIjxnzJ.css","assets/constants-BdDeFesR.js","assets/constants-cwqOqNE_.css","assets/index-fLGY64UP.js","assets/index-B7Kl92o7.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
