import{r as s,j as e,f as L,h as I,cL as S,be as N,L as k}from"./index-0435dc8f.js";import{g as E}from"./videoMedia-c279b75f.js";import{T as B}from"./index.esm-0d67515c.js";import{I as C}from"./Home-5af8acc4.js";import"./Ifram-a62a1496.js";import"./SatisfiedSection-7c3d7b7a.js";import"./slick-theme-6719845f.js";import"./ApplianceSection-e60e3d31.js";import"./CosmaticCard-66d53cd4.js";import"./ProductSlider-28c81bbf.js";import"./HiwSection-9b7ae900.js";import"./ReviewSection-fa7a00b4.js";import"./ReviewSlider-1c72300c.js";import"./NewsLetterSection-3f052734.js";import"./index-62a28136.js";import"./ProductCard2-307e29c9.js";const A=({isIframe:i,setIsIframe:g,parentId:o,child:b,page:n,setPage:a,totalPages:c,video:u,loopVideo:m,setLoopVideo:y,setVideo:j,setGenState:w})=>{s.useEffect(()=>{let t=document.getElementById("id3");f(t)},[]);const[r,f]=s.useState(),d=()=>{n>1?a(n-1):a(1);let t=r.clientWidth;r.scrollLeft=r.scrollLeft-t},h=()=>{n<c&&a(n+1);let t=r.clientWidth;r.scrollLeft=r.scrollLeft+t},x=(t,p)=>{t.preventDefault();const l=document.getElementById(o),v=document.getElementById(b);l&&v&&v.remove(),g(!0),j(p)};return e.jsx(e.Fragment,{children:e.jsxs("div",{className:"relative my-8",children:[e.jsx("button",{onClick:d,className:"absolute top-0 -right-10 z-40 h-full",children:e.jsx("div",{className:"hidden lg:flex bg-black/30 hover:bg-cyan-500 cursor-pointer px-1 py-1 rounded-full text-white group",children:e.jsx(L,{className:"text-xl"})})}),e.jsx("button",{onClick:h,className:"absolute top-0 -left-10 z-40 h-full",children:e.jsx("div",{className:"hidden lg:flex bg-black/30 hover:bg-cyan-500 cursor-pointer px-1 py-1 rounded-full text-white group",children:e.jsx(I,{className:"text-xl"})})}),e.jsx("div",{id:"id3",className:"flex overflow-x-hidden space-x-3 scroll-smooth",children:m.length>0?m.map((t,p)=>e.jsxs("div",{className:"relative",children:[t.type==="iframe"?e.jsxs("div",{className:"relative",children:[e.jsx("div",{onClick:l=>x(l,{url:t.url,thumb:t.thumbnail}),className:"absolute bg-black/70 cursor-pointer rounded-xl w-full h-full flex z-[99px] justify-center  items-center",children:u===t.url?e.jsx(S,{className:"text-gray-300 text-4xl"}):e.jsx(N,{className:"text-gray-300 text-4xl"})}),e.jsx("img",{src:t.thumbnail,className:"xl:h-[150px] xl:w-[200px] lg:w-[200px] lg:h-32 w-32 h-32 rounded-2xl"})]}):null,t.type!=="iframe"?e.jsxs("div",{className:"relative",children:[e.jsx("div",{onClick:l=>x(l,{url:t.url,thumb:t.thumbnail}),className:"absolute bg-black/70 cursor-pointer rounded-xl w-full h-full flex z-[99px] justify-center  items-center",children:u===t.url?e.jsx(S,{className:"text-gray-300 text-4xl"}):e.jsx(N,{className:"text-gray-300 text-4xl"})}),e.jsx("video",{className:"xl:h-[150px] xl:w-[200px] lg:w-[200px] lg:h-32 w-32 h-32 rounded-2xl ",src:t.url})]}):null]})):null})]})})},V=({isIframe:i,setIsIframe:g,style:o,src:b,title:n,icon:a,frameId:c,divId:u,genState:m,setGenState:y,thumbnail:j,thumbRounded:w})=>{const[r,f]=s.useState(!1),[d,h]=s.useState(!1),x=document.getElementById(c);x&&x.addEventListener("load",function(){h(!1),x.removeAttribute("class"),x.setAttribute("class",`${o}`)});const t=()=>{const p=document.getElementById(c);p&&p.remove(),f(!1),h(!0);var l=document.createElement("iframe");l.title=n,l.src=b,l.setAttribute("class","h-0 w-0"),l.setAttribute("id",c);var v=document.getElementById(u);v.appendChild(l),g(!1),p&&y(!1)};return s.useEffect(()=>{r&&t()},[r,m]),e.jsxs("div",{className:`relative ${o} rounded-2xl`,children:[e.jsx("div",{id:u}),e.jsxs("div",{className:`relative ${i||d?"flex items-center justify-center h-full w-full":"hidden"}`,children:[e.jsx("div",{className:"absolute bg-black/70 rounded-xl w-full h-full flex z-[99px]"}),i?e.jsx(N,{onClick:()=>f(!0),className:`${a||"hidden"} absolute cursor-pointer ${a} text-white`}):null,d?e.jsx(B,{className:`absolute cursor-wait ${a||"hidden"} ${a} text-white animate-spin`}):null,d||i?e.jsx("img",{alt:"thumbnail",title:"thumbnail",src:j,className:`h-full w-full ${w==="false"?null:"rounded-2xl"}`}):null]})]})},U=()=>{const[i,g]=s.useState([]),[o,b]=s.useState({url:"",thumb:""}),[n,a]=s.useState("");s.useState("");const[c,u]=s.useState(1),[m,y]=s.useState(10),[j,w]=s.useState(0),[r,f]=s.useState(!1);s.useEffect(()=>{(async()=>{const l=await E({page:c,limit:m},{section:"stay-in-loop-videos"});l.status===200&&(g(l.data.media),b({url:l.data.media[0].url,thumb:l.data.media[0].thumbnail}),a(l.data.media[0].type),w(Math.ceil(l.data.totalCount/m)))})()},[c]);const[d,h]=s.useState(!0);return e.jsxs("div",{className:"flex flex-col mt-10 lg:mt-12 maincontainer",children:[e.jsxs("div",{className:"flex flex-col justify-center space-y-3 items-center w-full",children:[e.jsx("h4",{className:"lg:text-4xl xl:text-4xl text-2xl font-bold text-center",children:"Stay In The Loop"}),e.jsx("p",{className:"xl:text-xl lg:text-xl text-sm font-medium text-center lg:w-7/12 xl:w-[990px] w-11/12",children:"Keep up with our videos about appliances we sell, New stock at our outlet store, product reviews,  sales and much more!"})]}),e.jsxs("div",{className:"py-10 lg:py-16 lg:mb-0",children:[i.length===0?e.jsx(C,{style:"col-start-1 col-end-6 object-cover w-full rounded-2xl 2xl:w-full xl:h-[651px] xl:w-full lg:w-full h-72 lg:h-[480px] md:w-full md:h-[400px]"}):null,i.length>0&&n!=="iframe"?e.jsx("video",{controls:!0,className:"col-start-1 col-end-6 object-cover w-full rounded-2xl 2xl:w-full xl:h-[651px] xl:w-full lg:w-full h-72 lg:h-[480px] md:w-full md:h-[400px]",src:o}):null,i.length>0&&n==="iframe"?e.jsx(V,{isIframe:d,setIsIframe:h,thumbnail:o.thumb,genState:r,setGenState:f,divId:"main-loop-div",frameId:"loop-main-frame",icon:"text-8xl",style:"col-start-1 col-end-6 object-cover w-full rounded-2xl 2xl:w-full xl:h-[651px] xl:w-full lg:w-full h-72 lg:h-[480px] md:w-full md:h-[400px]",src:o.url,title:o.url}):null,e.jsx("div",{children:e.jsx(A,{isIframe:d,setIsIframe:h,parentId:"main-loop-div",child:"loop-main-frame",setGenState:f,page:c,setPage:u,totalPages:j,loopVideo:i,setLoopVideo:g,setVideo:b,video:o})}),e.jsx("div",{className:"flex justify-center mt-10 lg:mt-16",children:e.jsxs(k,{to:"/stay-in-loop",className:"flex items-center border-[1px] border-b3 w-fit px-4 py-2 rounded-md text-b3 font-semibold",children:[e.jsx("span",{className:"text-sm",children:"View All Videos"}),e.jsx(L,{className:"text-2xl"})]})})]})]})};export{U as default};