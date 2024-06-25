import{u as t,L as x,j as e}from"./index-NPDK-3Px.js";import{A as u,q as b,k as v,j as m,L as w,n as y,r as j}from"./constants-BUefCW99.js";const D=t(u)``;t(b)``;const f=t(v)``,C=t.div`
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
    background-color: ${({theme:n})=>n.isLightTheme?"rgb(139, 147, 255,0.8)":"rgba(19, 78, 74, 0.4)"};
    color: ${({theme:n})=>n.isLightTheme?"white":"rgba(45, 212, 191, 1)"};
    font-weight: 700;
    border-radius: 1.5rem;
    padding: 0.5em 1em;
    font-size: clamp(0.1em, 1vw + 0.6em, 1em);
    text-transform: capitalize;
    display: flex;
    align-items: center;
    gap: 0.3em;
    &:hover {
        background-color: ${({theme:n})=>n.isLightTheme?"rgb(139, 147, 255,1)":"rgba(19, 78, 74, 0.7)"};
    }
`,O=t.span`
    background-color: ${({theme:n})=>n.isLightTheme?"rgb(139, 147, 255,1)":"rgba(19, 78, 74, 0.5)"};
    padding: 0.2em 0.6em;
    border-radius: 20px;
`,S=({domain:n})=>{const{id:o,name:l,image:d,description:T,sectionDetails:a,index:c}=n,g={initial:{opacity:0,y:22},animate:i=>({opacity:1,y:0,transition:{delay:.2*i,type:"spring"}})},p={initial:{opacity:0,rotate:"6deg"},animate:i=>({opacity:1,rotate:"0deg",transition:{delay:.3*i,type:"spring"}})},h=i=>(console.log(a.tools),a[i].reduce((r,s)=>r+(Object.keys(s).length>1?Object.values(s)[1].length:Object.values(s)[0].length),0));return e.jsx(L,{variants:g,initial:"initial",whileInView:"animate",custom:c,children:e.jsxs(B,{to:`${o}`,children:[e.jsx(k,{children:e.jsx(w,{altName:l,imageSrc:d})}),e.jsxs(z,{children:[e.jsx(P,{children:l}),e.jsx($,{children:Object.keys(a).map((i,r)=>e.jsxs(A,{variants:p,custom:r,initial:"initial",whileInView:"animate",children:[i,e.jsx(O,{children:h(i)})]},y()))})]})]})})},q=()=>e.jsx(e.Fragment,{children:e.jsx(D,{children:e.jsx(f,{children:e.jsx(C,{children:e.jsx(I,{children:j.map((n,o)=>e.jsx(S,{domain:{...n,index:o}},n.id))})})})})});export{q as default};
