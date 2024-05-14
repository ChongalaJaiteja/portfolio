import{u as a,h as o,j as t}from"./index-CIGfoifu.js";const b="#4fa94d",m={"aria-busy":!0,role:"progressbar"},k=a.div`
  display: ${s=>s.$visible?"flex":"none"};
`,u="http://www.w3.org/2000/svg",e=242.776657104492,g=1.6,v=o`
12.5% {
  stroke-dasharray: ${e*.14}px, ${e}px;
  stroke-dashoffset: -${e*.11}px;
}
43.75% {
  stroke-dasharray: ${e*.35}px, ${e}px;
  stroke-dashoffset: -${e*.35}px;
}
100% {
  stroke-dasharray: ${e*.01}px, ${e}px;
  stroke-dashoffset: -${e*.99}px;
}
`;a.path`
  stroke-dasharray: ${e*.01}px, ${e};
  stroke-dashoffset: 0;
  animation: ${v} ${g}s linear infinite;
`;const j=o`
to {
   transform: rotate(360deg);
 }
`;a.svg`
  animation: ${j} 0.75s steps(12, end) infinite;
  animation-duration: 0.75s;
`;a.polyline`
  stroke-width: ${s=>s.width}px;
  stroke-linecap: round;

  &:nth-child(12n + 0) {
    stroke-opacity: 0.08;
  }

  &:nth-child(12n + 1) {
    stroke-opacity: 0.17;
  }

  &:nth-child(12n + 2) {
    stroke-opacity: 0.25;
  }

  &:nth-child(12n + 3) {
    stroke-opacity: 0.33;
  }

  &:nth-child(12n + 4) {
    stroke-opacity: 0.42;
  }

  &:nth-child(12n + 5) {
    stroke-opacity: 0.5;
  }

  &:nth-child(12n + 6) {
    stroke-opacity: 0.58;
  }

  &:nth-child(12n + 7) {
    stroke-opacity: 0.66;
  }

  &:nth-child(12n + 8) {
    stroke-opacity: 0.75;
  }

  &:nth-child(12n + 9) {
    stroke-opacity: 0.83;
  }

  &:nth-child(12n + 11) {
    stroke-opacity: 0.92;
  }
`;const w=({height:s=80,width:p=80,strokeWidth:n=2,radius:l=1,color:r=b,ariaLabel:h="tail-spin-loading",wrapperStyle:f,wrapperClass:$,visible:x=!0})=>{const d=parseInt(String(n)),c=d+36,i=d/2,y=i+parseInt(String(l))-1;return t.jsx(k,{style:f,$visible:x,className:$,"data-testid":"tail-spin-loading","aria-label":h,...m,children:t.jsxs("svg",{width:p,height:s,viewBox:`0 0 ${c} ${c}`,xmlns:u,"data-testid":"tail-spin-svg",children:[t.jsx("defs",{children:t.jsxs("linearGradient",{x1:"8.042%",y1:"0%",x2:"65.682%",y2:"23.865%",id:"a",children:[t.jsx("stop",{stopColor:r,stopOpacity:"0",offset:"0%"}),t.jsx("stop",{stopColor:r,stopOpacity:".631",offset:"63.146%"}),t.jsx("stop",{stopColor:r,offset:"100%"})]})}),t.jsx("g",{fill:"none",fillRule:"evenodd",children:t.jsxs("g",{transform:`translate(${i} ${i})`,children:[t.jsx("path",{d:"M36 18c0-9.94-8.06-18-18-18",id:"Oval-2",stroke:r,strokeWidth:n,children:t.jsx("animateTransform",{attributeName:"transform",type:"rotate",from:"0 18 18",to:"360 18 18",dur:"0.9s",repeatCount:"indefinite"})}),t.jsx("circle",{fill:"#fff",cx:"36",cy:"18",r:y,children:t.jsx("animateTransform",{attributeName:"transform",type:"rotate",from:"0 18 18",to:"360 18 18",dur:"0.9s",repeatCount:"indefinite"})})]})})]})})},C=o`
to {
   stroke-dashoffset: 136;
 }
`;a.polygon`
  stroke-dasharray: 17;
  animation: ${C} 2.5s cubic-bezier(0.35, 0.04, 0.63, 0.95) infinite;
`;a.svg`
  transform-origin: 50% 65%;
`;const S=a.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    margin: auto;
    margin-top: 4rem;
`,N=()=>t.jsx(S,{children:t.jsx(w,{visible:!0,height:"90",width:"100",color:"rgb(46, 175, 255)",ariaLabel:"tail-spin-loading",radius:"1",wrapperStyle:{},wrapperClass:""})});export{N as default};
