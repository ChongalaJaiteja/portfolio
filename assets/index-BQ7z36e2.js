import{u as n,L as x,j as e}from"./index-CMg8H1mC.js";import{A as u,o as v,k as w,j as l,L as y,l as b,q as D}from"./constants-CcZyEjjk.js";const j=n(u)``;n(v)``;const f=n(w)``,C=n.div`
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
`,B=n(l.li)`
    background-color: var(--theme-container-bg-color);
    border: 2px solid var(--theme-divide-line-color);
    border-radius: 20px;
    overflow: hidden;
    cursor: pointer;
    max-width: 20.5rem;
    box-shadow: none;
    transition: box-shadow 0.26s linear;
    &:hover {
        box-shadow: 5px 5px 5px 5px #1e1e1e;
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
`,S=n(l.li)`
    background-color: ${({theme:i})=>i.isLightTheme?"rgba(46, 175, 255, 0.7)":"rgba(19, 78, 74, 0.4)"};
    color: ${({theme:i})=>i.isLightTheme?"white":"rgba(45, 212, 191, 1)"};
    font-weight: 700;
    border-radius: 1.5rem;
    padding: 0.5em 1em;
    font-size: clamp(0.1em, 1vw + 0.6em, 1em);
    display: flex;
    align-items: center;
    gap: 0.3em;
`,$=n.span`
    background-color: ${({theme:i})=>i.isLightTheme?"rgba(46, 175, 255, 1)":"rgba(19, 78, 74, 0.5)"};
    padding: 0.2em 0.6em;
    border-radius: 20px;
`,T=({domain:i})=>{const{id:o,name:s,image:m,description:H,sectionDetails:a,index:d}=i;console.log("domain",a);const c={initial:{opacity:0,y:22},animate:t=>({opacity:1,y:0,transition:{delay:.2*t,type:"spring"}})},g={initial:{opacity:0,rotate:"6deg"},animate:t=>({opacity:1,rotate:"0deg",transition:{delay:.3*t,type:"spring"}})},p=t=>a[t].reduce((r,h)=>r+Object.values(h)[1].length,0);return e.jsx(B,{variants:c,initial:"initial",whileInView:"animate",custom:d,children:e.jsxs(L,{to:`${o}`,children:[e.jsx(k,{children:e.jsx(y,{altName:s,imageSrc:m})}),e.jsxs(P,{children:[e.jsx(z,{children:s}),e.jsx(A,{children:Object.keys(a).map((t,r)=>e.jsxs(S,{variants:g,custom:r,initial:"initial",whileInView:"animate",children:[t,e.jsx($,{children:p(t)})]},b()))})]})]})})},q=()=>e.jsx(e.Fragment,{children:e.jsx(j,{children:e.jsx(f,{children:e.jsx(C,{children:e.jsx(I,{children:D.map((i,o)=>e.jsx(T,{domain:{...i,index:o}},i.id))})})})})});export{q as default};
