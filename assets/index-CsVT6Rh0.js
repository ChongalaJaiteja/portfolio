import{u as i,j as e}from"./index-B7nADy_P.js";import{m,v as p}from"./constants-BX8pe3aa.js";const x=i(m.li)`
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
    }
`,g=i.div`
    font-size: clamp(0.2rem, 1vw + 1.8rem, 2.5rem);
    display: flex;
    flex-direction: column;
    justify-content: center;
    /* outline: auto; */
`,v=i.p`
    font-size: clamp(0.2rem, 1vw + 0.71rem, 1.2rem);
    text-transform: capitalize;
    padding-right: 0.4em;
`,y=({itemDetails:a,index:n,id:c})=>{const{icon:t,name:l}=a,o={initial:{opacity:0,y:22},animate:r=>({opacity:1,y:0,transition:{delay:.16*r,type:"spring"}})};return e.jsxs(x,{initial:"initial",variants:o,whileInView:"animate",custom:n,viewport:{once:!0},whileHover:{scale:1.04},children:[e.jsx(g,{children:t}),e.jsx(v,{children:l})]})},f=i(m.li)``,u=i.div`
    /* outline: auto; */
    display: flex;
    flex-direction: column;
    gap: 1em;
`,h=i.h4`
    font-size: clamp(0.1rem, 1vw + 0.73rem, 1.16rem);
    color: var(--theme-second-text-color);
`,w=i.ul`
    list-style-type: none;
    padding: 0;
    /* outline: auto; */
    display: flex;
    flex-flow: row wrap;
    gap: 1.5em 1em;
`,k=({data:a,index:n,id:c})=>{const{category:t="",...l}=a,o=Object.values(l)[0],r={initial:{opacity:0,y:22},animate:s=>({opacity:1,y:0,transition:{delay:.16*s,type:"spring"}})};return e.jsx(f,{initial:"initial",variants:r,whileInView:"animate",custom:n,viewport:{once:!0},children:e.jsxs(u,{children:[t&&e.jsx(h,{children:t}),e.jsx(w,{children:o.map((s,d)=>e.jsx(y,{itemDetails:s,index:d,id:c},p()))})]})})};export{k as default};
