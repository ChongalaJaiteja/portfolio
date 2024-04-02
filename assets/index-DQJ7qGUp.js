import{u as e,L as d,j as r}from"./index-BO1pGDt9.js";import{j as p,L as h}from"./constants-CT1G3lok.js";const g=e(p.li)`
    --gap: 1em;
    cursor: pointer;
    position: relative;
    border-radius: 4rem;
    border: 3px solid transparent;
    overflow: hidden;
    flex: 1 1 calc(100% - var(--gap));
    height: clamp(15rem, 1vw + 1rem, 19rem);
    box-shadow: var(--theme-box-shadow);
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
`,v=e(d)`
    color: var(--theme-page-text-color);
`,x=e.img`
    width: min(100%, 30rem);
    object-fit: cover;
    opacity: ${({theme:o})=>o.isLightTheme?"none":"0.56"};
`,b=e.div`
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
`,j=e.p`
    font-size: clamp(0.2rem, 1vw + 0.6rem, 1.12rem);
    text-transform: capitalize;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    text-align: center;
`;e.div`
    font-size: clamp(0.2rem, 1vw + 1.8rem, 2.5rem);
    display: flex;
    flex-direction: column;
    justify-content: center;
    /* outline: auto; */
`;const f=({itemDetails:o,index:n})=>{const{projectCard:c,id:t,category:i}=o,{name:a,image:m}=c,s={initial:{opacity:0,y:22},animate:l=>({opacity:1,y:0,transition:{delay:.16*l,type:"spring"}})};return r.jsx(g,{initial:"initial",variants:s,whileInView:"animate",custom:n,viewport:{once:!0},whileHover:{scale:1.04},children:r.jsxs(v,{to:i!==""?`projects/${i}/${t}`:`projects/${t}`,children:[r.jsx(h,{altName:a,imageSrc:m,styledComponent:x}),r.jsx(b,{children:r.jsx(j,{children:a})})]})})};export{f as default};
