import{u as l,r as s,_ as m,j as e}from"./index-CIGfoifu.js";import{j as g,n as u}from"./constants-ChfndODn.js";import w from"./index-7N3P3hNn.js";const v=l(g.ul)`
    list-style-type: none;
    /* outline: auto; */
    padding: 0;
    display: flex;
    flex-direction: column;
    gap: 3em;
    flex-grow: 1;
`,j=l(g.li)``,y=l.div`
    /* outline: auto; */
    display: flex;
    flex-direction: column;
    gap: 1em;
`,T=l.h4`
    font-size: clamp(0.1rem, 1vw + 0.73rem, 1.16rem);
    color: var(--theme-second-text-color);
    text-transform: capitalize;
`,S=l.ul`
    list-style-type: none;
    padding: 0;
    display: flex;
    flex-flow: row wrap;
    gap: 1.5em 1em;
`,C=s.lazy(()=>m(()=>import("./index-BszInvop.js"),__vite__mapDeps([0,1,2,3,4]))),k=s.lazy(()=>m(()=>import("./index-_SVsJUDz.js"),__vite__mapDeps([5,1,2,3,4]))),_=s.lazy(()=>m(()=>import("./index-BUH4SYuT.js"),__vite__mapDeps([6,1,2,3,4]))),I=s.lazy(()=>m(()=>import("./index-Bp6cKboo.js"),__vite__mapDeps([7,1,2,3,4]))),E=({data:n,index:t,id:i})=>{const{category:a="",...d}=n,c=Object.values(d)[0],h={initial:{opacity:0,y:22},animate:r=>({opacity:1,y:0,transition:{delay:.16*r,type:"spring"}})},x=(r,o)=>{switch(i){case"skills":return e.jsx(C,{itemDetails:r,index:o},u());case"projects":return e.jsx(k,{itemDetails:{...r,category:a,id:o+1},index:o},u());case"certifications":return e.jsx(_,{itemDetails:r,index:o},r.id);case"tools":return e.jsx(I,{itemDetails:r,index:o},r.id)}};return e.jsx(j,{initial:"initial",variants:h,whileInView:"animate",custom:t,viewport:{once:!0},children:e.jsxs(y,{children:[a&&e.jsx(T,{children:a}),e.jsx(S,{children:e.jsx(s.Suspense,{fallback:e.jsx(w,{}),children:c.map((r,o)=>e.jsx(e.Fragment,{children:x(r,o)}))})})]})})},P=({tabSectionData:n,id:t})=>e.jsx(v,{children:e.jsx(s.Suspense,{fallback:e.jsx(w,{}),children:n.map((i,a)=>e.jsx(E,{data:i,index:a,id:t},u()))})}),A=l.li`
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
`,D=l.button`
    cursor: pointer;
    padding: clamp(0.1em, 1vw + 0.9em, 1.2em) clamp(0.1em, 1vw + 1em, 1.4em);
    border: none;
    width: 100%;
    height: 100%;
    background-color: transparent;
    color: var(--theme-primary-text-color);
    font-size: clamp(0.2rem, 1vw + 0.57rem, 1.17rem);
    text-transform: capitalize;
`,L=l(g.div)`
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
`,z=({tabLabel:n,onSelectTab:t,isActive:i})=>{const a=()=>{t(n)};return e.jsxs(A,{isActive:i,children:[e.jsx(D,{onClick:a,isActive:i,children:n}),i&&e.jsx(L,{layoutId:"underline"})]})},B=l.div`
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
`,O=l.ul`
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
`,F=l.div`
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
`,H=({sectionDetails:n})=>{const t=Object.keys(n),[i,a]=s.useState(t[0]),d=n[i],c=s.useRef(null),h=o=>{c.current=o.touches[0].clientX},x=o=>{if(!c.current)return;const b=o.changedTouches[0].clientX-c.current,f=50;if(b<-f&&i!==t[t.length-1]){const p=t.indexOf(i)+1;a(t[p])}else if(b>f&&i!==t[0]){const p=t.indexOf(i)-1;a(t[p])}c.current=null},r=o=>{a(o)};return e.jsxs(B,{children:[e.jsx(O,{children:t.map(o=>e.jsx(z,{tabLabel:o,onSelectTab:r,isActive:i===o},o))}),e.jsx(F,{onTouchStart:h,onTouchEnd:x,children:e.jsx(P,{tabSectionData:d,id:i})})]})};export{H as S};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/index-BszInvop.js","assets/index-CIGfoifu.js","assets/index-NdIjxnzJ.css","assets/constants-ChfndODn.js","assets/constants-cwqOqNE_.css","assets/index-_SVsJUDz.js","assets/index-BUH4SYuT.js","assets/index-Bp6cKboo.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
