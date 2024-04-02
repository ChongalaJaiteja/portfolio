import{u as a,r as s,_ as u,j as e}from"./index-BO1pGDt9.js";import{j as g,n as p}from"./constants-CT1G3lok.js";import w from"./index-HxABuF3o.js";const v=a(g.ul)`
    list-style-type: none;
    /* outline: auto; */
    padding: 0;
    display: flex;
    flex-direction: column;
    gap: 3em;
    flex-grow: 1;
`,y=a(g.li)``,j=a.div`
    /* outline: auto; */
    display: flex;
    flex-direction: column;
    gap: 1em;
`,T=a.h4`
    font-size: clamp(0.1rem, 1vw + 0.73rem, 1.16rem);
    color: var(--theme-second-text-color);
    text-transform: capitalize;
`,S=a.ul`
    list-style-type: none;
    padding: 0;
    display: flex;
    flex-flow: row wrap;
    gap: 1.5em 1em;
`,C=s.lazy(()=>u(()=>import("./index-BiCg7vdd.js"),__vite__mapDeps([0,1,2,3,4]))),k=s.lazy(()=>u(()=>import("./index-DQJ7qGUp.js"),__vite__mapDeps([5,1,2,3,4]))),I=s.lazy(()=>u(()=>import("./index-C6cRW7dR.js"),__vite__mapDeps([6,1,2,3,4]))),_=({data:n,index:t,id:i})=>{const{category:r="",...m}=n,c=Object.values(m)[0],d={initial:{opacity:0,y:22},animate:l=>({opacity:1,y:0,transition:{delay:.16*l,type:"spring"}})},h=(l,o)=>{switch(i){case"skills":return e.jsx(C,{itemDetails:l,index:o},p());case"projects":return e.jsx(k,{itemDetails:{...l,category:r,id:o+1},index:o},p());case"certifications":return e.jsx(I,{itemDetails:l,index:o},l.id)}};return e.jsx(y,{initial:"initial",variants:d,whileInView:"animate",custom:t,viewport:{once:!0},children:e.jsxs(j,{children:[r&&e.jsx(T,{children:r}),e.jsx(S,{children:e.jsx(s.Suspense,{fallback:e.jsx(w,{}),children:c.map((l,o)=>e.jsx(e.Fragment,{children:h(l,o)}))})})]})})},E=({tabSectionData:n,id:t})=>e.jsx(v,{children:e.jsx(s.Suspense,{fallback:e.jsx(w,{}),children:n.map((i,r)=>e.jsx(_,{data:i,index:r,id:t},p()))})}),P=a.li`
    background-color: ${({theme:n,isActive:t})=>t?n.isLightTheme?"rgb(139, 147, 255,0.8)":"rgb(30 41 59 / 1)":"var(--theme-container-bg-color)"};
    text-align: center;
    width: clamp(8rem, 1vw + 30%, 10rem);
    flex: 1 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
    max-height: 10rem;
    position: relative;
    &:hover {
        background-color: ${({theme:n,isActive:t})=>!t&&(n.isLightTheme?"rgb(139, 147, 255,0.4)":"rgb(30 41 59 / 0.6)")};
    }
    @media (min-width: 800px) {
        width: 100%;
        max-width: none;
        /* min-height: 3rem; */
        max-height: 8.4rem;
    }
`,A=a.button`
    cursor: pointer;
    padding: clamp(0.1em, 1vw + 0.9em, 1.2em) clamp(0.1em, 1vw + 1em, 1.4em);
    border: none;
    width: 100%;
    height: 100%;
    background-color: transparent;
    color: var(--theme-primary-text-color);
    font-size: clamp(0.2rem, 1vw + 0.57rem, 1.17rem);
    text-transform: capitalize;
`,B=a(g.div)`
    position: absolute;
    bottom: -1px;
    left: 0;
    right: 0;
    height: 3px;
    background: ${({theme:n})=>n.isLightTheme?"rgb(139, 147, 255,1)":"var(--theme-primary-color)"};
    box-shadow: ${({theme:n})=>n.isLightTheme?"0px 3px 10px 2px rgb(139, 147, 255,1)":"0px 3px 10px 2px var(--theme-primary-color)"};
    @media (min-width: 800px) {
        /* left: 20%; */
        /* right: 0; */
        height: 100%;
        left: auto;
        width: 3px;
    }
`,D=({tabLabel:n,onSelectTab:t,isActive:i})=>{const r=()=>{t(n)};return e.jsxs(P,{isActive:i,children:[e.jsx(A,{onClick:r,isActive:i,children:n}),i&&e.jsx(B,{layoutId:"underline"})]})},L=a.div`
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
`,z=a.ul`
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
`,F=a.div`
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
`,$=({sectionDetails:n})=>{const t=Object.keys(n),[i,r]=s.useState(t[0]),m=n[i],c=s.useRef(null),d=o=>{c.current=o.touches[0].clientX},h=o=>{if(!c.current)return;const b=o.changedTouches[0].clientX-c.current,f=50;if(b<-f&&i!==t[t.length-1]){const x=t.indexOf(i)+1;r(t[x])}else if(b>f&&i!==t[0]){const x=t.indexOf(i)-1;r(t[x])}c.current=null},l=o=>{r(o)};return e.jsxs(L,{children:[e.jsx(z,{children:t.map(o=>e.jsx(D,{tabLabel:o,onSelectTab:l,isActive:i===o},o))}),e.jsx(F,{onTouchStart:d,onTouchEnd:h,children:e.jsx(E,{tabSectionData:m,id:i})})]})};export{$ as S};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/index-BiCg7vdd.js","assets/index-BO1pGDt9.js","assets/index-NdIjxnzJ.css","assets/constants-CT1G3lok.js","assets/constants-cwqOqNE_.css","assets/index-DQJ7qGUp.js","assets/index-C6cRW7dR.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
