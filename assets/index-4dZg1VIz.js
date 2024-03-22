import{u as e,r,e as h,j as o}from"./index-B7nADy_P.js";import{R as a,D as g,L as x,A as u,a as f}from"./styledComponent-SppPXPNN.js";import{m as l,F as w}from"./constants-BX8pe3aa.js";const T=e.div`
    position: fixed;
    bottom: 5%;
    right: 25px;
    z-index: 1;
    /* outline: auto; */
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.2em;
`,v=e(l.div)`
    cursor: pointer;
    color: ${({theme:t})=>t.primaryAccentColor};
`,y=e(w)`
    font-size: clamp(0.5rem, 1vw + 1.5rem, 2rem);
`,I=e(l.div)`
    --fs-theme-mode-logo: clamp(1rem, 1vw + 1.3rem, 1.8rem);
    display: none;
    @media (min-width: 827px) {
        display: block;
    }
`,j=e(g)`
    font-size: var(--fs-theme-mode-logo);
    cursor: pointer;
    color: #272826;
    animation: ${a} 0.3s linear forwards;
`,C=e(x)`
    font-size: var(--fs-theme-mode-logo);
    cursor: pointer;
    color: yellow;
    animation: none;
    animation: ${a} 0.3s linear forwards reverse 1;
`,S=()=>{const t={initial:{y:23},animate:{y:0},transition:{duration:.4,ease:"easeInOut",type:"spring"},exit:{y:23}},c=()=>{const n={duration:500,smooth:!0};f.scrollToTop(n)},[i,m]=r.useState(!1),{toggleTheme:d,isLightTheme:p}=h();return r.useEffect(()=>{const n=()=>{const s=window.scrollY>50;i!==s&&m(s)};return window.addEventListener("scroll",n),()=>{window.removeEventListener("scroll",n)}},[i]),o.jsx(o.Fragment,{children:i&&o.jsx(u,{children:o.jsxs(T,{children:[o.jsx(I,{onClick:d,whileTap:{scale:1.3},initial:{y:-30},animate:{y:0},transition:{duration:.4,ease:"easeInOut",type:"spring"},exit:{y:-30},children:p?o.jsx(j,{}):o.jsx(C,{})}),o.jsx(v,{onClick:c,variants:t,whileTap:{scale:1.3},initial:"initial",animate:"animate",transition:"transition",exit:"exit",children:o.jsx(y,{})})]})})})};export{S as default};
