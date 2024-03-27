import{u as t,L as p,j as e}from"./index-DIYihR5L.js";import{j as m,L as g,l as x}from"./constants-Cv4QlY0v.js";const h=t(m.li)`
    --gap: 1em;
    cursor: pointer;
    position: relative;
    border-radius: 4rem;
    border: 3px solid transparent;
    overflow: hidden;
    flex: 1 1 calc(100% - var(--gap));
    height: clamp(15rem, 1vw + 1rem, 19rem);
    @media (min-width: 510px) {
        flex: 0 1 calc(50% - var(--gap));
    }

    @media (min-width: 1010px) {
        flex: 0 1 calc(33.3% - var(--gap));
    }

    &:hover {
        border-color: var(--theme-primary-color);
    }

    &:hover div {
        background-color: rgb(46, 175, 255, 0.4);
        color: white;
        border-color: transparent;
    }
`,j=t(p)`
    color: var(--theme-page-text-color);
`,v=t.img`
    width: min(100%, 30rem);
    object-fit: cover;
    opacity: ${({theme:o})=>o.isLightTheme?"none":"0.56"};
`,y=t.div`
    --bg-color: ${({theme:o})=>o.isLightTheme?"rgb(245, 245, 245,0.4)":"rgb(30, 30, 30, 0.4)"};
    position: absolute;
    left: 10%;
    bottom: 5%;
    z-index: 1;
    border-radius: 2rem;
    background-color: var(--bg-color);
    border: 1px solid var(--theme-border-color);
    padding-inline: 0.72em;
    transition: background-color 0.34s linear;
    width: 33%;
`,u=t.p`
    font-size: clamp(0.2rem, 1vw + 0.6rem, 1.12rem);
    text-transform: capitalize;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    text-align: center;
`;t.div`
    font-size: clamp(0.2rem, 1vw + 1.8rem, 2.5rem);
    display: flex;
    flex-direction: column;
    justify-content: center;
    /* outline: auto; */
`;const f=({itemDetails:o,index:l})=>{const{projectCard:r,id:a,category:n}=o,{name:c,image:i}=r,s={initial:{opacity:0,y:22},animate:d=>({opacity:1,y:0,transition:{delay:.16*d,type:"spring"}})};return e.jsx(h,{initial:"initial",variants:s,whileInView:"animate",custom:l,viewport:{once:!0},whileHover:{scale:1.04},children:e.jsxs(j,{to:n!==""?`projects/${n}/${a}`:`projects/${a}`,children:[e.jsx(g,{altName:c,imageSrc:i,styledComponent:v}),e.jsx(y,{children:e.jsx(u,{children:c})})]})})},w=t(m.li)``,b=t.div`
    /* outline: auto; */
    display: flex;
    flex-direction: column;
    gap: 1em;
`,I=t.h4`
    font-size: clamp(0.1rem, 1vw + 0.73rem, 1.16rem);
    color: var(--theme-second-text-color);
    text-transform: capitalize;
`,C=t.ul`
    list-style-type: none;
    padding: 0;
    /* outline: auto; */
    display: flex;
    flex-flow: row wrap;
    gap: 1.5em 1em;
`,z=({data:o,index:l})=>{const{category:r="",...a}=o,n=Object.values(a)[0],c={initial:{opacity:0,y:22},animate:i=>({opacity:1,y:0,transition:{delay:.16*i,type:"spring"}})};return e.jsx(w,{initial:"initial",variants:c,whileInView:"animate",custom:l,viewport:{once:!0},children:e.jsxs(b,{children:[r&&e.jsx(I,{children:r}),e.jsx(C,{children:n.map((i,s)=>e.jsx(f,{itemDetails:{...i,category:r,id:s+1},index:s},x()))})]})})};export{z as default};
