import{j as e}from"./index-6f024e59.js";import{S as o}from"./slick-theme-2a4ff163.js";import{b as x,a as c}from"./index.esm-07b601df.js";const d=({image:s,products:l})=>{const r={dots:!1,infinite:!1,arrows:!0,speed:300,slidesToShow:1,slidesToScroll:1,initialSlide:0},a=({onClick:t})=>e.jsx("button",{onClick:t,className:"absolute top-0 bottom-0 flex items-center xl:left-10 lg:left-5 left-10 z-40 pointer-events-none",children:e.jsx("div",{className:"flex items-center justify-center bg-black/30 hover:bg-cyan-400 w-8 h-8 rounded-full text-white pointer-events-auto",children:e.jsx(x,{className:"text-2xl"})})}),i=({onClick:t})=>e.jsx("button",{onClick:t,className:"absolute top-0 bottom-0 flex items-center xl:right-10 lg:right-5 right-10 z-40 pointer-events-none",children:e.jsx("div",{className:"flex items-center justify-center bg-black/30 hover:bg-cyan-400 w-8 h-8 rounded-full text-white pointer-events-auto",children:e.jsx(c,{className:"text-2xl"})})});return e.jsx(e.Fragment,{children:l?e.jsx(o,{...r,prevArrow:e.jsx(a,{}),nextArrow:e.jsx(i,{}),className:"relative",children:l.map((t,n)=>e.jsx("div",{children:e.jsx("div",{className:"flex w-full justify-center",children:e.jsx("img",{src:t.image,className:"xl:w-1/2 lg:w-44 w-40 h-full mx-auto",alt:"refrigrator"})})},n))}):e.jsxs(o,{...r,prevArrow:e.jsx(a,{}),nextArrow:e.jsx(i,{}),className:"relative",children:[e.jsx("div",{className:"flex w-full justify-center",children:e.jsx("img",{src:s,className:"xl:w-1/2 lg:w-44 w-40 h-full mx-auto",alt:"refrigrator"})}),e.jsx("div",{className:"flex w-full justify-center",children:e.jsx("img",{src:s,className:"xl:w-1/2 lg:w-44 w-40 h-full mx-auto",alt:"refrigrator"})}),e.jsx("div",{className:"flex w-full justify-center",children:e.jsx("img",{src:s,className:"xl:w-1/2 lg:w-44 w-40 h-full mx-auto",alt:"refrigrator"})})]})})};export{d as P};
