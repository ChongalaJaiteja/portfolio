import{u as e,r as u,j as i}from"./index-B21R_Z9g.js";import{j as s,B as y,C as b,L as C,n as k,D as j}from"./constants-BdDeFesR.js";const I=e(s.li)`
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
    opacity: ${({theme:r})=>r.isLightTheme?"none":"0.56"};
`,L=e.div`
    display: flex;
    flex-direction: column;
    gap: 0.61em;
    padding-inline: 0.9em;
    padding-block: 0em 0.7em;
`,V=e.h2`
    text-transform: capitalize;
    font-size: clamp(0.2rem, 1vw + 0.7rem, 1.2rem);
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    /* color: var( --theme-second-text-color); */
`;e.ul``;const A=e.div`
    display: flex;
    align-items: center;
    gap: 0.3em;
`,T=e(y)`
    font-size: clamp(0.2rem, 1vw + 0.8rem, 1.1rem);
`,B=e.span`
    text-transform: capitalize;
    font-size: clamp(0.2rem, 1vw + 0.7rem, 1.1rem);
`,M=e.h5`
    font-size: clamp(0.3rem, 1vw + 0.55rem, 0.96rem);
    display: flex;
    align-items: center;
    gap: 0.2em;
    cursor: pointer;
`,R=e(s.ul)`
    list-style-type: none;
    padding: 0;
    display: flex;
    flex-wrap: wrap;
    gap: 0.5em;
    margin-bottom: 0.7em;
`,Y=e(b)`
    font-size: clamp(0.2rem, 1vw + 0.8rem, 1.1rem);
    rotate: ${({rotateArrow:r})=>r?"90deg":"0deg"};
`,E=e(s.li)`
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
`,D=({itemDetails:r,index:m})=>{const{name:c,image:d,institute:p,skills:h,link:a,id:n}=r,f={initial:{opacity:0,y:22},animate:t=>({opacity:1,y:0,transition:{delay:.16*t,type:"spring"}})},g={initial:{opacity:0,y:20},animate:t=>({opacity:1,y:0,transition:{delay:.1*t,type:"spring"}})},[l,x]=u.useState({}),w=t=>{x(o=>({...o,[t]:!o[t]}))},v=()=>{a.split("/").pop().toLowerCase().endsWith(".pdf")?window.open(j(a),"_blank"):window.open(a,"_blank")};return i.jsxs(I,{initial:"initial",variants:f,whileInView:"animate",custom:m,viewport:{once:!0},whileHover:{scale:1.04},layout:!0,transition:{opacity:{ease:"linear"},layout:{duration:.3}},children:[i.jsx(S,{children:i.jsx(C,{altName:c,imageSrc:d,styledComponent:z})}),i.jsxs(L,{children:[i.jsx(V,{children:c}),i.jsxs(A,{children:[i.jsx(T,{}),i.jsx(B,{children:p})]}),i.jsxs(M,{onClick:()=>w(n),children:[i.jsx(Y,{rotateArrow:l[n]}),"Skills"]}),Object.keys(l).length!==0&&l[n]&&i.jsx(R,{initial:{scaleY:0},animate:{scaleY:1},transition:{duration:.3},children:h.map((t,o)=>i.jsx(E,{variants:g,initial:"initial",whileInView:"animate",custom:o,viewport:{once:!0},children:t},k()))}),i.jsx(H,{onClick:v,children:"View Certificate"})]})]})};export{D as default};
