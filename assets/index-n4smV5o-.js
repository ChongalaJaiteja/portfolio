import{u as i,j as e}from"./index-DIYihR5L.js";import{j as c,l as d}from"./constants-Cv4QlY0v.js";const p=i(c.li)`
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
    @media (min-width: 695px) {
        flex: 0 1 calc(33.33% - (var(--gap) + var(--pd-l)));
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
`,x=i.div`
    font-size: clamp(0.2rem, 1vw + 1.8rem, 2.5rem);
    display: flex;
    flex-direction: column;
    justify-content: center;
    /* outline: auto; */
`,g=i.p`
    font-size: clamp(0.2rem, 1vw + 0.71rem, 1.2rem);
    text-transform: capitalize;
    padding-right: 0.4em;
`,v=({itemDetails:a,index:n})=>{const{icon:t,name:l}=a,r={initial:{opacity:0,y:22},animate:o=>({opacity:1,y:0,transition:{delay:.16*o,type:"spring"}})};return e.jsxs(p,{initial:"initial",variants:r,whileInView:"animate",custom:n,viewport:{once:!0},whileHover:{scale:1.04},children:[e.jsx(x,{children:t}),e.jsx(g,{children:l})]})},y=i(c.li)``,f=i.div`
    /* outline: auto; */
    display: flex;
    flex-direction: column;
    gap: 1em;
`,u=i.h4`
    font-size: clamp(0.1rem, 1vw + 0.73rem, 1.16rem);
    color: var(--theme-second-text-color);
    text-transform: capitalize;
`,h=i.ul`
    list-style-type: none;
    padding: 0;
    display: flex;
    flex-flow: row wrap;
    gap: 1.5em 1em;
`,S=({data:a,index:n})=>{const{category:t="",...l}=a,r=Object.values(l)[0],o={initial:{opacity:0,y:22},animate:s=>({opacity:1,y:0,transition:{delay:.16*s,type:"spring"}})};return e.jsx(y,{initial:"initial",variants:o,whileInView:"animate",custom:n,viewport:{once:!0},children:e.jsxs(f,{children:[t&&e.jsx(u,{children:t}),e.jsx(h,{children:r.map((s,m)=>e.jsx(v,{itemDetails:s,index:m},d()))})]})})};export{S as default};
