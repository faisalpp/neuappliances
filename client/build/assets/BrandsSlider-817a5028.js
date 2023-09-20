import{r as J,j as t}from"./index-7e2d3c57.js";var W={};function K(r){if(!r||typeof window>"u")return;const c=document.createElement("style");return c.setAttribute("type","text/css"),c.innerHTML=r,document.head.appendChild(c),r}Object.defineProperty(W,"__esModule",{value:!0});var e=J;function Q(r){return r&&typeof r=="object"&&"default"in r?r:{default:r}}var i=Q(e);K(`.marquee-container {
  overflow-x: hidden !important;
  display: flex !important;
  flex-direction: row !important;
  position: relative;
  width: var(--width);
  transform: var(--transform);
}
.marquee-container:hover div {
  animation-play-state: var(--pause-on-hover);
}
.marquee-container:active div {
  animation-play-state: var(--pause-on-click);
}

.overlay {
  position: absolute;
  width: 100%;
  height: 100%;
}
.overlay::before, .overlay::after {
  background: linear-gradient(to right, var(--gradient-color));
  content: "";
  height: 100%;
  position: absolute;
  width: var(--gradient-width);
  z-index: 2;
}
.overlay::after {
  right: 0;
  top: 0;
  transform: rotateZ(180deg);
}
.overlay::before {
  left: 0;
  top: 0;
}

.marquee {
  flex: 0 0 auto;
  min-width: var(--min-width);
  z-index: 1;
  display: flex;
  flex-direction: row;
  align-items: center;
  animation: scroll var(--duration) linear var(--delay) var(--iteration-count);
  animation-play-state: var(--play);
  animation-delay: var(--delay);
  animation-direction: var(--direction);
}
@keyframes scroll {
  0% {
    transform: translateX(0%);
  }
  100% {
    transform: translateX(-100%);
  }
}

.initial-child-container {
  flex: 0 0 auto;
  display: flex;
  min-width: auto;
  flex-direction: row;
}

.child {
  transform: var(--transform);
}`);const U=e.forwardRef(function({style:c={},className:z="",autoFill:u=!1,play:m=!0,pauseOnHover:w=!1,pauseOnClick:x=!1,direction:n="left",speed:h=50,delay:S=0,loop:b=0,gradient:B=!1,gradientColor:j=[255,255,255],gradientWidth:v=200,onFinish:L,onCycleComplete:D,onMount:_,children:g},I){const[E,X]=e.useState(0),[p,G]=e.useState(0),[y,$]=e.useState(1),[q,O]=e.useState(!1),P=e.useRef(null),s=I||P,d=e.useRef(null),f=e.useCallback(()=>{if(d.current&&s.current){const a=s.current.getBoundingClientRect(),N=d.current.getBoundingClientRect();let o=a.width,l=N.width;(n==="up"||n==="down")&&(o=a.height,l=N.height),$(u&&o&&l&&l<o?Math.ceil(o/l):1),X(o),G(l)}},[u,s,n]);e.useEffect(()=>{if(q&&(f(),d.current&&s.current)){const a=new ResizeObserver(()=>f());return a.observe(s.current),a.observe(d.current),()=>{a&&a.disconnect()}}},[f,s,q]),e.useEffect(()=>{f()},[f,g]),e.useEffect(()=>{O(!0)},[]),e.useEffect(()=>{typeof _=="function"&&_()},[]);const k=e.useMemo(()=>u?p*y/h:p<E?E/h:p/h,[u,E,p,y,h]),R=`rgba(${j[0]}, ${j[1]}, ${j[2]}`,T=e.useMemo(()=>Object.assign(Object.assign({},c),{"--pause-on-hover":!m||w?"paused":"running","--pause-on-click":!m||w&&!x||x?"paused":"running","--width":n==="up"||n==="down"?"100vh":"100%","--transform":n==="up"?"rotate(-90deg)":n==="down"?"rotate(90deg)":"none"}),[c,m,w,x,n]),Z=e.useMemo(()=>({"--gradient-color":`${R}, 1), ${R}, 0)`,"--gradient-width":typeof v=="number"?`${v}px`:v}),[R,v]),C=e.useMemo(()=>({"--play":m?"running":"paused","--direction":n==="left"?"normal":"reverse","--duration":`${k}s`,"--delay":`${S}s`,"--iteration-count":b?`${b}`:"infinite","--min-width":u?"auto":"100%"}),[m,n,k,S,b,u]),M=e.useMemo(()=>({"--transform":n==="up"?"rotate(90deg)":n==="down"?"rotate(-90deg)":"none"}),[n]),A=e.useCallback(a=>[...Array(Number.isFinite(a)&&a>=0?a:0)].map((N,o)=>i.default.createElement(e.Fragment,{key:o},e.Children.map(g,l=>i.default.createElement("div",{style:M,className:"child"},l)))),[M,g]);return q?i.default.createElement("div",{ref:s,style:T,className:"marquee-container "+z},B&&i.default.createElement("div",{style:Z,className:"overlay"}),i.default.createElement("div",{className:"marquee",style:C,onAnimationIteration:D,onAnimationEnd:L},i.default.createElement("div",{className:"initial-child-container",ref:d},e.Children.map(g,a=>i.default.createElement("div",{style:M,className:"child"},a))),A(y-1)),i.default.createElement("div",{className:"marquee",style:C},A(y))):null});var V=W.default=U;const H=()=>t.jsx(t.Fragment,{children:t.jsxs("div",{className:"bg-white py-5",children:[t.jsx("h4",{className:"text-center text-sm",children:"BRANDS WE SELL"}),t.jsx("div",{className:"relative mt-2",children:t.jsxs(V,{velocity:12,children:[t.jsx("img",{alt:"amana",src:"amana.webp"}),t.jsx("img",{alt:"maytag",src:"maytag.webp"}),t.jsx("img",{alt:"frigdaire",src:"frigdaire.webp"}),t.jsx("img",{alt:"haier",src:"haier.webp"}),t.jsx("img",{alt:"hisense",src:"hisense.webp"}),t.jsx("img",{alt:"kenmore",src:"kenmore.webp"}),t.jsx("img",{alt:"lg",src:"lg.webp"}),t.jsx("img",{alt:"samsung",src:"samsung.webp"}),t.jsx("img",{alt:"whirlpool",src:"whirlpool.webp"}),t.jsx("img",{alt:"midea",src:"midea.webp"})]})})]})});export{H as default};
