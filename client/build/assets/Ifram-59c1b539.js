import{r as a,j as t,b7 as $}from"./index-92c2c5dc.js";import{T as w}from"./index.esm-cfdb4e98.js";const L=({style:d,src:x,title:h,icon:e,frameId:r,divId:m,genState:b,setGenState:p,thumbnail:g,thumbRounded:j})=>{const[i,v]=a.useState(!0),[o,c]=a.useState(!1),[n,f]=a.useState(!1),l=document.getElementById(r);l&&l.addEventListener("load",function(){f(!1),l.removeAttribute("class"),l.setAttribute("class",`${d}`)});const E=()=>{const u=document.getElementById(r);u&&u.remove(),c(!1),f(!0);var s=document.createElement("iframe");s.title=h,s.src=x,s.setAttribute("class","h-0 w-0"),s.setAttribute("id",r);var I=document.getElementById(m);I.appendChild(s),v(!1),u&&p(!1)};return a.useEffect(()=>{o&&E()},[o,b]),t.jsx("div",{id:m,className:`relative ${d} rounded-2xl`,children:t.jsxs("div",{className:`relative ${i||n?"flex items-center justify-center h-full w-full":"hidden"}`,children:[t.jsx("div",{className:"absolute bg-black/70 rounded-xl w-full h-full flex z-[99px]"}),i?t.jsx($,{onClick:()=>c(!0),className:`${e||"hidden"} absolute cursor-pointer ${e} text-white`}):null,n?t.jsx(w,{className:`absolute cursor-wait ${e||"hidden"} ${e} text-white animate-spin`}):null,n||i?t.jsx("img",{alt:"thumbnail",title:"thumbnail",src:g,className:`h-full w-full ${j==="false"?null:"rounded-2xl"}`}):null]})})};export{L as I};