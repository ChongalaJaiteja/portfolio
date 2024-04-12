import{u as t,L as x,j as e}from"./index-CLOFrmZJ.js";import{A as u,q as b,k as v,j as m,L as w,n as y,r as D}from"./constants-Y-38_RZC.js";const j=t(u)``;t(b)``;const f=t(v)``,C=t.div`
    min-height: 77.85vh;
`,I=t.ul`
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
`,L=t(m.li)`
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
`,B=t(x)`
    color: var(--theme-primary-text-color);
`,k=t.div`
    overflow: hidden;
`,z=t.div`
    padding-top: 0.5em;
    padding-bottom: 1.3em;
    padding-inline: 1em;
`,P=t.h3`
    font-size: clamp(0.2rem, 1vw + 0.9rem, 1.2rem);
`;t.p`
    color: var(--theme-second-text-color);
    word-wrap: break-word;
    outline: auto;
    /* font-size: ; */
`;const $=t.ul`
    margin-top: 1.2em;
    padding: 0;
    list-style-type: none;
    display: flex;
    align-items: center;
    gap: 1em;
    flex-flow: row wrap;
`,A=t(m.li)`
    background-color: ${({theme:i})=>i.isLightTheme?"rgb(139, 147, 255,0.8)":"rgba(19, 78, 74, 0.4)"};
    color: ${({theme:i})=>i.isLightTheme?"white":"rgba(45, 212, 191, 1)"};
    font-weight: 700;
    border-radius: 1.5rem;
    padding: 0.5em 1em;
    font-size: clamp(0.1em, 1vw + 0.6em, 1em);
    text-transform: capitalize;
    display: flex;
    align-items: center;
    gap: 0.3em;
    &:hover {
        background-color: ${({theme:i})=>i.isLightTheme?"rgb(139, 147, 255,1)":"rgba(19, 78, 74, 0.7)"};
    }
`,S=t.span`
    background-color: ${({theme:i})=>i.isLightTheme?"rgb(139, 147, 255,1)":"rgba(19, 78, 74, 0.5)"};
    padding: 0.2em 0.6em;
    border-radius: 20px;
`,T=({domain:i})=>{const{id:o,name:r,image:l,description:H,sectionDetails:s,index:d}=i,c={initial:{opacity:0,y:22},animate:n=>({opacity:1,y:0,transition:{delay:.2*n,type:"spring"}})},g={initial:{opacity:0,rotate:"6deg"},animate:n=>({opacity:1,rotate:"0deg",transition:{delay:.3*n,type:"spring"}})},p=n=>s[n].reduce((a,h)=>a+Object.values(h)[1].length,0);return e.jsx(L,{variants:c,initial:"initial",whileInView:"animate",custom:d,children:e.jsxs(B,{to:`${o}`,children:[e.jsx(k,{children:e.jsx(w,{altName:r,imageSrc:l})}),e.jsxs(z,{children:[e.jsx(P,{children:r}),e.jsx($,{children:Object.keys(s).map((n,a)=>e.jsxs(A,{variants:g,custom:a,initial:"initial",whileInView:"animate",children:[n,e.jsx(S,{children:p(n)})]},y()))})]})]})})},q=()=>e.jsx(e.Fragment,{children:e.jsx(j,{children:e.jsx(f,{children:e.jsx(C,{children:e.jsx(I,{children:D.map((i,o)=>e.jsx(T,{domain:{...i,index:o}},i.id))})})})})});export{q as default};
