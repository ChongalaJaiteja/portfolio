import{u as a,r as c,_ as u,j as e}from"./index-DPocOran.js";import{j as g,n as p}from"./constants-7SHXdq2d.js";import w from"./index-N-K4oaW7.js";const v=a(g.ul)`
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
`,C=c.lazy(()=>u(()=>import("./index-BLqpKYcs.js"),__vite__mapDeps([0,1,2,3,4]))),k=c.lazy(()=>u(()=>import("./index-CrrNOS1F.js"),__vite__mapDeps([5,1,2,3,4]))),I=c.lazy(()=>u(()=>import("./index-MdXO5-KS.js"),__vite__mapDeps([6,1,2,3,4]))),_=({data:i,index:t,id:o})=>{const{category:r="",...m}=i,s=Object.values(m)[0],d={initial:{opacity:0,y:22},animate:l=>({opacity:1,y:0,transition:{delay:.16*l,type:"spring"}})},h=(l,n)=>{switch(o){case"skills":return e.jsx(C,{itemDetails:l,index:n},p());case"projects":return e.jsx(k,{itemDetails:{...l,category:r,id:n+1},index:n},p());case"certifications":return e.jsx(I,{itemDetails:l,index:n},l.id)}};return e.jsx(y,{initial:"initial",variants:d,whileInView:"animate",custom:t,viewport:{once:!0},children:e.jsxs(j,{children:[r&&e.jsx(T,{children:r}),e.jsx(S,{children:e.jsx(c.Suspense,{fallback:e.jsx(w,{}),children:s.map((l,n)=>e.jsx(e.Fragment,{children:h(l,n)}))})})]})})},E=({tabSectionData:i,id:t})=>e.jsx(v,{children:e.jsx(c.Suspense,{fallback:e.jsx(w,{}),children:i.map((o,r)=>e.jsx(_,{data:o,index:r,id:t},p()))})}),P=a.li`
    background-color: ${({theme:i,isActive:t})=>t?i.isLightTheme?"none":"rgb(30 41 59 / 1)":"var(--theme-container-bg-color)"};
    text-align: center;
    width: clamp(8rem, 1vw + 30%, 10rem);
    flex: 1 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
    max-height: 10rem;
    position: relative;
    &:hover {
        background-color: ${({theme:i,isActive:t})=>!t&&(i.isLightTheme?"rgb(46, 175, 255, 0.5)":"rgb(30 41 59 / 0.6)")};
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
    background: var(--theme-primary-color);
    box-shadow: 0px 3px 10px 2px var(--theme-primary-color);
    @media (min-width: 800px) {
        /* left: 20%; */
        /* right: 0; */
        height: 100%;
        left: auto;
        width: 3px;
    }
`,D=({tabLabel:i,onSelectTab:t,isActive:o})=>{const r=()=>{t(i)};return e.jsxs(P,{isActive:o,children:[e.jsx(A,{onClick:r,isActive:o,children:i}),o&&e.jsx(B,{layoutId:"underline"})]})},z=a.div`
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
`,F=a.ul`
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
`,O=a.div`
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
`,$=({sectionDetails:i})=>{const t=Object.keys(i),[o,r]=c.useState(t[0]),m=i[o],s=c.useRef(null),d=n=>{s.current=n.touches[0].clientX},h=n=>{if(!s.current)return;const f=n.changedTouches[0].clientX-s.current,b=50;if(f<-b&&o!==t[t.length-1]){const x=t.indexOf(o)+1;r(t[x])}else if(f>b&&o!==t[0]){const x=t.indexOf(o)-1;r(t[x])}s.current=null},l=n=>{r(n)};return e.jsxs(z,{children:[e.jsx(F,{children:t.map(n=>e.jsx(D,{tabLabel:n,onSelectTab:l,isActive:o===n},n))}),e.jsx(O,{onTouchStart:d,onTouchEnd:h,children:e.jsx(E,{tabSectionData:m,id:o})})]})};export{$ as S};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/index-BLqpKYcs.js","assets/index-DPocOran.js","assets/index-NdIjxnzJ.css","assets/constants-7SHXdq2d.js","assets/constants-cwqOqNE_.css","assets/index-CrrNOS1F.js","assets/index-MdXO5-KS.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
