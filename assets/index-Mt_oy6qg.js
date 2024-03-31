import{u as n,L as x,j as e}from"./index-mmWVTv3e.js";import{A as u,o as v,k as w,j as m,L as b,l as y,q as D}from"./constants-CuOQBZze.js";const j=n(u)``;n(v)``;const f=n(w)``,C=n.div`
    min-height: 77.85vh;
`,I=n.ul`
    padding: 0;
    list-style-type: none;
    /* outline: auto; */
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    align-items: center;
    @media (min-width: 530px) {
        justify-content: flex-start;
    }
`,B=n(m.li)`
    background-color: var(--theme-container-bg-color);
    border: 2px solid var(--theme-divide-line-color);
    border-radius: 20px;
    overflow: hidden;
    cursor: pointer;
    max-width: 20.5rem;
    box-shadow: none;
    transition: box-shadow 0.26s linear;
    &:hover {
        box-shadow: var(--theme-box-shadow);
    }
`,L=n(x)`
    color: var(--theme-primary-text-color);
`,k=n.div`
    overflow: hidden;
`,P=n.div`
    padding-top: 0.5em;
    padding-bottom: 1.3em;
    padding-inline: 1em;
`,z=n.h3`
    font-size: clamp(0.2rem, 1vw + 0.9rem, 1.2rem);
`;n.p`
    color: var(--theme-second-text-color);
    word-wrap: break-word;
    outline: auto;
    /* font-size: ; */
`;const A=n.ul`
    margin-top: 1.2em;
    padding: 0;
    list-style-type: none;
    display: flex;
    align-items: center;
    gap: 1em;
    flex-flow: row wrap;
`,S=n(m.li)`
    background-color: ${({theme:t})=>t.isLightTheme?"rgba(46, 175, 255, 0.7)":"rgba(19, 78, 74, 0.4)"};
    color: ${({theme:t})=>t.isLightTheme?"white":"rgba(45, 212, 191, 1)"};
    font-weight: 700;
    border-radius: 1.5rem;
    padding: 0.5em 1em;
    font-size: clamp(0.1em, 1vw + 0.6em, 1em);
    display: flex;
    align-items: center;
    gap: 0.3em;
`,$=n.span`
    background-color: ${({theme:t})=>t.isLightTheme?"rgba(46, 175, 255, 1)":"rgba(19, 78, 74, 0.5)"};
    padding: 0.2em 0.6em;
    border-radius: 20px;
`,T=({domain:t})=>{const{id:o,name:s,image:l,description:H,sectionDetails:a,index:d}=t;console.log("domain",a);const c={initial:{opacity:0,y:22},animate:i=>({opacity:1,y:0,transition:{delay:.2*i,type:"spring"}})},g={initial:{opacity:0,rotate:"6deg"},animate:i=>({opacity:1,rotate:"0deg",transition:{delay:.3*i,type:"spring"}})},p=i=>a[i].reduce((r,h)=>r+Object.values(h)[1].length,0);return e.jsx(B,{variants:c,initial:"initial",whileInView:"animate",custom:d,children:e.jsxs(L,{to:`${o}`,children:[e.jsx(k,{children:e.jsx(b,{altName:s,imageSrc:l})}),e.jsxs(P,{children:[e.jsx(z,{children:s}),e.jsx(A,{children:Object.keys(a).map((i,r)=>e.jsxs(S,{variants:g,custom:r,initial:"initial",whileInView:"animate",children:[i,e.jsx($,{children:p(i)})]},y()))})]})]})})},q=()=>e.jsx(e.Fragment,{children:e.jsx(j,{children:e.jsx(f,{children:e.jsx(C,{children:e.jsx(I,{children:D.map((t,o)=>e.jsx(T,{domain:{...t,index:o}},t.id))})})})})});export{q as default};
