import{u as e,r as u,j as i}from"./index-u6f28Asd.js";import{j as l,C as y,D as b,L as C,n as k,E as j}from"./constants-CAVgKY0c.js";const I=e(l.li)`
    --gap: 1em;
    position: relative;
    border: 2px solid var(--theme-divide-line-color);
    overflow: hidden;
    flex: 1 1 calc(100% - var(--gap));
    background-color: var(--theme-container-bg-color);
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    gap: 1em;
    box-shadow: var(--theme-box-shadow);
    @media (min-width: 475px) {
        flex: 0 1 calc(50% - var(--gap));
    }

    @media (min-width: 1010px) {
        flex: 0 1 calc(33.3% - var(--gap));
    }

    &:hover {
        border-color: var(--theme-primary-color);
    }
`,S=e.div`
    align-self: center;
    padding: 0.7em;
    width: 96%;
    height: 50%;
`,z=e.img`
    width: min(100%, 30rem);
    object-fit: cover;
    border-radius: 10px;
    overflow: hidden;
    opacity: ${({theme:o})=>o.isLightTheme?"none":"0.56"};
`,V=e.div`
    display: flex;
    flex-direction: column;
    gap: 0.61em;
    padding-inline: 0.9em;
    padding-block: 0em 0.7em;
`,A=e.h2`
    text-transform: capitalize;
    font-size: clamp(0.2rem, 1vw + 0.7rem, 1.2rem);
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    /* color: var( --theme-second-text-color); */
`;e.ul``;const L=e.div`
    display: flex;
    align-items: center;
    gap: 0.3em;
`,T=e(y)`
    font-size: clamp(0.2rem, 1vw + 0.8rem, 1.1rem);
`,E=e.span`
    text-transform: capitalize;
    font-size: clamp(0.2rem, 1vw + 0.7rem, 1.1rem);
`,M=e.h5`
    font-size: clamp(0.3rem, 1vw + 0.55rem, 0.96rem);
    display: flex;
    align-items: center;
    gap: 0.2em;
    cursor: pointer;
`,R=e(l.ul)`
    list-style-type: none;
    padding: 0;
    display: flex;
    flex-wrap: wrap;
    gap: 0.5em;
    margin-bottom: 0.7em;
`,Y=e(b)`
    font-size: clamp(0.2rem, 1vw + 0.8rem, 1.1rem);
    rotate: ${({rotateArrow:o})=>o?"90deg":"0deg"};
`,B=e(l.li)`
    font-size: clamp(0.1rem, 1vw + 0.43rem, 0.8rem);
    background-color: var(--theme-container-bg-color);
    border: 1px solid var(--theme-divide-line-color);
    border-radius: 20px;
    padding: 0.5em 1em;
    text-transform: capitalize;
    &:hover {
        background-color: var(--theme-primary-color);
        color: white;
    }
`,H=e.button`
    background-color: var(--theme-primary-color);
    color: white;
    border: none;
    align-self: center;
    border-radius: 10px;
    padding: 0.7em 0.5em;
    cursor: pointer;
    font-size: clamp(0.5rem, 1vw + 0.63rem, 1rem);
    transition: transform 0.23s linear;
    border: 2px solid transparent;
    &:hover {
        transform: translateY(-4px);
        background-color: white;
        color: var(--theme-primary-color);
        border-color: var(--theme-primary-color);
    }
`,D=({itemDetails:o,index:c})=>{const{name:s,image:m,institute:d,skills:p,link:h,id:a}=o,g={initial:{opacity:0,y:22},animate:t=>({opacity:1,y:0,transition:{delay:.16*t,type:"spring"}})},f={initial:{opacity:0,y:20},animate:t=>({opacity:1,y:0,transition:{delay:.1*t,type:"spring"}})},[n,x]=u.useState({}),w=t=>{x(r=>({...r,[t]:!r[t]}))},v=()=>{const{type:t,source:r}=h;t=="url"?window.open(r,"_blank"):window.open(j(r),"_blank")};return i.jsxs(I,{initial:"initial",variants:g,whileInView:"animate",custom:c,viewport:{once:!0},whileHover:{scale:1.04},layout:!0,transition:{opacity:{ease:"linear"},layout:{duration:.3}},children:[i.jsx(S,{children:i.jsx(C,{altName:s,imageSrc:m,styledComponent:z})}),i.jsxs(V,{children:[i.jsx(A,{children:s}),i.jsxs(L,{children:[i.jsx(T,{}),i.jsx(E,{children:d})]}),i.jsxs(M,{onClick:()=>w(a),children:[i.jsx(Y,{rotateArrow:n[a]}),"Skills"]}),Object.keys(n).length!==0&&n[a]&&i.jsx(R,{initial:{scaleY:0},animate:{scaleY:1},transition:{duration:.3},children:p.map((t,r)=>i.jsx(B,{variants:f,initial:"initial",whileInView:"animate",custom:r,viewport:{once:!0},children:t},k()))}),i.jsx(H,{onClick:v,children:"View Certificate"})]})]})};export{D as default};
