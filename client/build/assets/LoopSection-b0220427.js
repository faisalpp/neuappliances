import{r as t,by as f,j as e,B as j,aC as g,bz as w,bA as b,bB as p,L as y}from"./index-77f95870.js";import{g as v}from"./videoMedia-2d6c5e7e.js";const N=t.lazy(()=>f(()=>import("./Ifram-83072f20.js"),["assets/Ifram-83072f20.js","assets/index-77f95870.js","assets/index-e0d3f007.css"])),S=({page:s,setPage:o,totalPages:x,video:d,loopVideo:r,setLoopVideo:m,setVideo:c})=>{t.useEffect(()=>{let l=document.getElementById("id3");n(l)},[]);const[a,n]=t.useState(),h=()=>{s>1?o(s-1):o(1);let l=a.clientWidth;a.scrollLeft=a.scrollLeft-l},u=()=>{s<x&&o(s+1);let l=a.clientWidth;a.scrollLeft=a.scrollLeft+l};return e.jsx(e.Fragment,{children:e.jsxs("div",{className:"relative my-8",children:[e.jsx("button",{onClick:h,className:"absolute top-0 -right-10 z-40 h-full",children:e.jsx("div",{className:"hidden lg:flex bg-black/30 hover:bg-cyan-500 cursor-pointer px-1 py-1 rounded-full text-white group",children:e.jsx(j,{className:"text-xl"})})}),e.jsx("button",{onClick:u,className:"absolute top-0 -left-10 z-40 h-full",children:e.jsx("div",{className:"hidden lg:flex bg-black/30 hover:bg-cyan-500 cursor-pointer px-1 py-1 rounded-full text-white group",children:e.jsx(g,{className:"text-xl"})})}),e.jsx("div",{id:"id3",className:"flex overflow-x-hidden space-x-3 scroll-smooth",children:r.length>0?r.map(l=>e.jsxs("div",{className:"relative",children:[e.jsx("div",{onClick:()=>c(`${l.url}`),className:"absolute flex items-center justify-center cursor-pointer bg-black/20 z-40 rounded-2xl xl:h-[150px] xl:w-[200px] lg:w-[200px] lg:h-32 w-32 h-32 ",children:d!==l.url?e.jsx(w,{className:"text-gray-300 text-4xl"}):e.jsx(b,{className:"text-gray-300 text-4xl"})}),e.jsx(p,{}),e.jsx(t.Suspense,{fallback:e.jsx(p,{}),children:l.type==="iframe"?e.jsx(N,{style:"xl:h-[150px] xl:w-[200px] lg:w-[200px] lg:h-32 w-32 h-32 rounded-2xl",src:l.url,title:l.url}):null}),l.type!=="iframe"?e.jsx("video",{className:"xl:h-[150px] xl:w-[200px] lg:w-[200px] lg:h-32 w-32 h-32 rounded-2xl ",src:l.url}):null]})):null})]})})},L=t.lazy(()=>f(()=>import("./Ifram-83072f20.js"),["assets/Ifram-83072f20.js","assets/index-77f95870.js","assets/index-e0d3f007.css"])),A=()=>{const[s,o]=t.useState([]),[x,d]=t.useState(""),[r,m]=t.useState(""),[c,a]=t.useState(1),[n,h]=t.useState(10),[u,l]=t.useState(0);return t.useEffect(()=>{(async()=>{const i=await v({page:c,limit:n},{section:"stay-in-loop-videos"});i.status===200&&(o(i.data.media),d(i.data.media[0].url),m(i.data.media[0].type),l(Math.ceil(i.data.totalCount/n)))})()},[c]),e.jsxs("div",{className:"flex flex-col mt-10 lg:mt-12 w-full 3xl:max-w-1680px px-4 md:px-10 lg:px-16 xl:px-20 2xl:px-120px mx-auto",children:[e.jsxs("div",{className:"flex flex-col justify-center space-y-3 items-center w-full",children:[e.jsx("h4",{className:"lg:text-4xl xl:text-4xl text-2xl font-bold text-center",children:"Stay In The Loop"}),e.jsx("p",{className:"xl:text-xl lg:text-xl text-sm font-medium text-center lg:w-7/12 xl:w-[990px] w-11/12",children:"Keep up with our videos about appliances we sell, New stock at our outlet store, product reviews,  sales and much more!"})]}),e.jsxs("div",{className:"py-10 lg:py-16 lg:mb-0",children:[s.length>0&&r!=="iframe"?e.jsx("video",{controls:!0,className:"col-start-1 col-end-6 object-cover w-full rounded-2xl 2xl:w-full xl:h-[651px] xl:w-full lg:w-full h-72 lg:h-[480px] md:w-full md:h-[400px]",src:x}):null,e.jsx(t.Suspense,{fallback:e.jsx(p,{}),children:s.length>0&&r==="iframe"?e.jsx(L,{style:"col-start-1 col-end-6 object-cover w-full rounded-2xl 2xl:w-full xl:h-[651px] xl:w-full lg:w-full h-72 lg:h-[480px] md:w-full md:h-[400px]",src:x,title:x}):null}),e.jsx("div",{children:e.jsx(S,{page:c,setPage:a,totalPages:u,loopVideo:s,setLoopVideo:o,setVideo:d,video:x})}),e.jsx("div",{className:"flex justify-center mt-10 lg:mt-16",children:e.jsxs(y,{to:"/stay-in-loop",className:"flex items-center border-[1px] border-b3 w-fit px-4 py-2 rounded-md text-b3 font-semibold",children:[e.jsx("span",{className:"text-sm",children:"View All Videos"}),e.jsx(j,{className:"text-2xl"})]})})]})]})};export{A as default};
