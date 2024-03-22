import{u as i,L as g,j as e}from"./index-B7nADy_P.js";import{A as h,a as x,b as u,m as s,L as v,v as w,d as y}from"./constants-BX8pe3aa.js";const b=i(h)``;i(x)``;const D=i(u)``,f=i.div`
    min-height: 77.85vh;
`,j=i.ul`
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
`,C=i(s.li)`
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
`,B=i(g)`
    color: var(--theme-primary-text-color);
`,I=i.div`
    overflow: hidden;
`,L=i.div`
    padding-top: 0.5em;
    padding-bottom: 1.3em;
    padding-inline: 1em;
`,k=i.h3`
    font-size: clamp(0.2rem, 1vw + 0.9rem, 1.2rem);
`;i.p`
    color: var(--theme-second-text-color);
    word-wrap: break-word;
    outline: auto;
    /* font-size: ; */
`;const P=i.ul`
    margin-top: 1.2em;
    padding: 0;
    list-style-type: none;
    display: flex;
    align-items: center;
    gap: 1em;
    flex-flow: row wrap;
`,z=i(s.li)`
    background-color: ${({theme:n})=>n.isLightTheme?"rgba(46, 175, 255, 0.7)":"rgba(19, 78, 74, 0.4)"};
    color: ${({theme:n})=>n.isLightTheme?"white":"rgba(45, 212, 191, 1)"};
    font-weight: 700;
    border-radius: 1.5rem;
    padding: 0.5em 1em;
    font-size: clamp(0.1em, 1vw + 0.6em, 1em);
    display: flex;
    align-items: center;
    gap: 0.3em;
`,A=i.span`
    background-color: ${({theme:n})=>n.isLightTheme?"rgba(46, 175, 255, 1)":"rgba(19, 78, 74, 0.5)"};
    padding: 0.2em 0.6em;
    border-radius: 20px;
`,S=({domain:n})=>{const{id:o,name:a,image:m,description:$,domainDetails:r,index:l}=n,d={initial:{opacity:0,y:22},animate:t=>({opacity:1,y:0,transition:{delay:.2*t,type:"spring"}})},c={initial:{opacity:0,rotate:"6deg"},animate:t=>({opacity:1,rotate:"0deg",transition:{delay:.3*t,type:"spring"}})};return e.jsx(C,{variants:d,initial:"initial",whileInView:"animate",custom:l,children:e.jsxs(B,{to:`/portfolio/development/${o}`,children:[e.jsx(I,{children:e.jsx(v,{altName:a,imageSrc:m})}),e.jsxs(L,{children:[e.jsx(k,{children:a}),e.jsx(P,{children:Object.keys(r).map((t,p)=>e.jsxs(z,{variants:c,custom:p,initial:"initial",whileInView:"animate",children:[t,e.jsx(A,{children:r[t].length})]},w()))})]})]})})},V=()=>e.jsx(e.Fragment,{children:e.jsx(b,{children:e.jsx(D,{children:e.jsx(f,{children:e.jsx(j,{children:y.map((n,o)=>e.jsx(S,{domain:{...n,index:o}},n.id))})})})})});export{V as default};
