import{r as a,j as e,b6 as $}from"./index-34a93641.js";import{T as w}from"./index.esm-7ed6039f.js";const L=({style:d,src:x,title:h,icon:t,frameId:r,divId:m,genState:b,setGenState:j,thumbnail:p,thumbRounded:v})=>{const[i,g]=a.useState(!0),[o,c]=a.useState(!1),[n,f]=a.useState(!1),l=document.getElementById(r);l&&l.addEventListener("load",function(){f(!1),l.removeAttribute("class"),l.setAttribute("class",`${d}`)});const E=()=>{const u=document.getElementById(r);u&&u.remove(),c(!1),f(!0);var s=document.createElement("iframe");s.title=h,s.src=x,s.setAttribute("class","h-0 w-0"),s.setAttribute("id",r);var I=document.getElementById(m);I.appendChild(s),g(!1),u&&j(!1)};return a.useEffect(()=>{o&&E()},[o,b]),e.jsxs("div",{className:`relative ${d} rounded-2xl`,children:[e.jsx("div",{id:m}),e.jsxs("div",{className:`relative ${i||n?"flex items-center justify-center h-full w-full":"hidden"}`,children:[e.jsx("div",{className:"absolute bg-black/70 rounded-xl w-full h-full flex z-[99px]"}),i?e.jsx($,{onClick:()=>c(!0),className:`${t||"hidden"} absolute cursor-pointer ${t} text-white`}):null,n?e.jsx(w,{className:`absolute cursor-wait ${t||"hidden"} ${t} text-white animate-spin`}):null,n||i?e.jsx("img",{alt:"thumbnail",title:"thumbnail",src:p,className:`h-full w-full ${v==="false"?null:"rounded-2xl"}`}):null]})]})};export{L as I};
