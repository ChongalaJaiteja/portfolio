import{u as a,j as e}from"./index-BNl1e79q.js";import{j as m}from"./constants-BpX1viYN.js";const d=a(m.li)`
    display: flex;
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
    box-shadow: var(--theme-box-shadow);
    @media (min-width: 465px) {
        flex: 0 1 calc(50% - (var(--gap) + var(--pd-l)));
    }
    @media (min-width: 609px) {
        flex: 0 1 calc(33.33% - (var(--gap) + var(--pd-l)));
    }
    @media (min-width: 1115px) {
        flex: 0 1 calc(25% - (var(--gap) + var(--pd-l)));
    }
    @media (min-width: 1500px) {
        flex: 0 1 calc(20% - (var(--gap) + var(--pd-l)));
    }
    @media (min-width: 1850px) {
        flex: 0 1 calc(16.6% - (var(--gap) + var(--pd-l)));
    }
`,p=a.div`
    font-size: clamp(0.2rem, 1vw + 1.8rem, 2.5rem);
    display: flex;
    flex-direction: column;
    justify-content: center;
    /* outline: auto; */
`,c=a.p`
    font-size: clamp(0.2rem, 1vw + 0.71rem, 1.2rem);
    text-transform: capitalize;
    padding-right: 0.4em;
`,v=({itemDetails:i,index:t})=>{const{icon:o,name:n}=i,r={initial:{opacity:0,y:22},animate:l=>({opacity:1,y:0,transition:{delay:.16*l,type:"spring"}})};return e.jsxs(d,{initial:"initial",variants:r,whileInView:"animate",custom:t,viewport:{once:!0},whileHover:{scale:1.04},children:[e.jsx(p,{children:o}),e.jsx(c,{children:n})]})};export{v as default};
