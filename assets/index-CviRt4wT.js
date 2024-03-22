import{u as t,j as e}from"./index-B7nADy_P.js";import{m as p,x as d,v as g}from"./constants-BX8pe3aa.js";const x=t(p.li)`
    background-image: ${({bgImage:i})=>`url(${d(i)})`};
    background-size: cover;
    object-fit: center;
    outline: auto;
    width: 100%;
    height: 40vh;
    /* display: flex;
    align-items: center;
    gap: 0.6em;
    border: 1px solid var(--theme-divide-line-color);
    border-radius: 0.7rem;
    cursor: pointer;
    --pd-l: clamp(0.1em, 1vw + 1em, 1.35em);
    --gap: 1em;
    padding-left: var(--pd-l);
    padding-block: 0.22em;
    flex: 1 1 100%;
    @media (min-width: 350px) {
        flex: 0 1 calc(50% - (var(--gap) + var(--pd-l)));
    }
    @media (min-width: 560px) {
        flex: 0 1 calc(33.3% - (var(--gap) + var(--pd-l)));
    }
    @media (min-width: 960px) {
        flex: 0 1 calc(25% - (var(--gap) + var(--pd-l)));
    }
    @media (min-width: 1300px) {
        flex: 0 1 calc(20% - (var(--gap) + var(--pd-l)));
    }
    @media (min-width: 1900px) {
        flex: 0 1 calc(16.6% - (var(--gap) + var(--pd-l)));
    } */
`;t.div`
    font-size: clamp(0.2rem, 1vw + 1.8rem, 2.5rem);
    display: flex;
    flex-direction: column;
    justify-content: center;
    /* outline: auto; */
`;t.p`
    font-size: clamp(0.2rem, 1vw + 0.71rem, 1.2rem);
    text-transform: capitalize;
    padding-right: 0.4em;
`;const v=({itemDetails:i,index:r,id:m})=>{const{projectCard:a,projectDetails:l}=i,{name:c,bgImage:n}=a;console.log(n),console.log(a,l);const o={initial:{opacity:0,y:22},animate:s=>({opacity:1,y:0,transition:{delay:.16*s,type:"spring"}})};return e.jsx(x,{initial:"initial",variants:o,whileInView:"animate",custom:r,viewport:{once:!0},whileHover:{scale:1.04},bgImage:n,children:e.jsx("p",{children:"hi"})})},u=t(p.li)``,y=t.div`
    /* outline: auto; */
    display: flex;
    flex-direction: column;
    gap: 1em;
`,f=t.h4`
    font-size: clamp(0.1rem, 1vw + 0.73rem, 1.16rem);
    color: var(--theme-second-text-color);
`,j=t.ul`
    list-style-type: none;
    padding: 0;
    /* outline: auto; */
    display: flex;
    flex-flow: row wrap;
    gap: 1.5em 1em;
`,I=({data:i,index:r,id:m})=>{console.log("project",i);const{category:a="",...l}=i,c=Object.values(l)[0];console.log(c);const n={initial:{opacity:0,y:22},animate:o=>({opacity:1,y:0,transition:{delay:.16*o,type:"spring"}})};return e.jsx(u,{initial:"initial",variants:n,whileInView:"animate",custom:r,viewport:{once:!0},children:e.jsxs(y,{children:[a&&e.jsx(f,{children:a}),e.jsx(j,{children:c.map((o,s)=>e.jsx(v,{itemDetails:o,index:s,id:m},g()))})]})})};export{I as default};
