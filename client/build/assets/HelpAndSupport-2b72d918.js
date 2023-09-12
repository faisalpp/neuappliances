import{j as e,L as N,A as v,r as s,M as S,R as T,a4 as C,Y as F}from"./index-f6e59d68.js";import{g as H}from"./helpSupportTab-06f440e8.js";import{G as A}from"./helpSupport-d9a58519.js";import{P as B}from"./Pagination2-1ecc0638.js";const E=({title:r,slug:c,category:n,shortDescription:a})=>e.jsx(e.Fragment,{children:e.jsxs(N,{to:`/help-and-support/${n}/${c}`,className:"bg-[#F8FBFB] rounded-2xl px-8 py-6",children:[e.jsxs("div",{className:"flex justify-between text-b18 items-center",children:[e.jsx("h3",{className:"font-bold text-lg",children:r}),e.jsx("span",{children:e.jsx(v,{className:"text-lg"})})]}),e.jsx("p",{className:"mt-4 text-sm leading-6",children:a})]})}),O=()=>{const[r,c]=s.useState([]),[n,a]=s.useState(!1),[x,d]=s.useState("delivery"),[g,m]=s.useState(!1),[h,f]=s.useState(0),[i,b]=s.useState(1),[p,L]=s.useState(2);s.useEffect(()=>{j()},[x,i]);const j=async()=>{a(!0);const o=await A({category:x},{page:i,limit:p});console.log(o),o.status===200?(a(!1),c(o.data.helps),f(Math.ceil(o.data.totalCount/p)),console.log(Math.ceil(o.data.totalCount/p))):(c([]),a(!1))},w=t=>{m(!0),setTimeout(()=>{d(t)},200)};s.useEffect(()=>{m(!1)},[x]);const[y,u]=s.useState([]);return s.useEffect(()=>{(async()=>{const l=await H();l.status===200?(u(l.data.helpTabs),d(l.data.helpTabs[0].slug)):u([])})()},[]),e.jsx(e.Fragment,{children:e.jsxs(S,{children:[e.jsxs("div",{className:"py-10 lg:py-16 xl:py-20 w-full 3xl:max-w-1680px px-4 sm:px-10 lg:px-16 xl:px-20 2xl:px-120px mx-auto flex flex-col gap-4",children:[e.jsxs("div",{className:"flex items-center",children:[e.jsx("h5",{className:"text-xs text-b3",children:"Home"}),e.jsx(T,{className:"text-xl text-b3"}),e.jsx("h5",{className:"text-xs text-black",children:"Help & Support Center"})]}),e.jsx("h1",{className:"text-32px lg:text-40px text-b18 font-bold",children:"Help & Support"}),e.jsxs("div",{className:"max-w-[560px] relative w-full",children:[e.jsx("input",{type:"search",placeholder:"What do you need help with?",className:"placeholder:text-[#777E90] placeholder:text-xs w-full outline-none border border-[rgba(0,0,0,0.16)] pl-10 py-4 pr-4 rounded-lg",name:"",id:""}),e.jsx(C,{className:"absolute top-5 left-4 text-base"})]})]}),e.jsxs("div",{className:"pb-10 lg:pb-16 xl:pb-20 w-full 3xl:max-w-1680px px-4 sm:px-10 lg:px-16 xl:px-20 2xl:px-120px mx-auto flex maxlg:flex-col gap-10 lg:gap-7 xl:gap-10",children:[e.jsx("div",{className:"tab-buttons maxlg:order-2 lg:max-w-[250px] 2xl:max-w-xs lg:w-full flex flex-col gap-2",children:y.map((t,l)=>e.jsxs("button",{className:`px-5 xl:px-6 py-4 xl:text-lg font-semibold flex justify-between items-center text-left border border-[rgba(0,0,0,0.15)] rounded-2xl ${x===t.slug?"active text-white bg-b3":"text-b23"}`,onClick:()=>w(t.slug),children:[e.jsx("span",{children:t.title}),x===t.slug?e.jsx(F,{}):""]},l))}),e.jsxs("div",{className:"flex flex-col w-full ",children:[n?e.jsx("div",{className:"flex  items-center w-full justify-center",children:e.jsx("img",{src:"/loader2.gif"})}):e.jsx("div",{className:`tab-content w-full ${g?"fade-out":""}`,children:r.length>0?e.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-4",children:r.map(t=>e.jsx(E,{title:t.title,parent:"gap-3 bg-[#F8FBFB] [&>div>h6]:maxmd:text-sm text-white p-4 md:px-8 md:py-6 rounded-xl border-none text-b18 h-auto",icon:"text-xl text-black",textStyle:"font-bold text-md text-b18",child:"[&>p]:text-sm text-b18 font-normal",category:t.category,slug:t.slug,shortDescription:t.shortDescription}))}):e.jsx("div",{className:"flex mt-10 justify-center w-full h-full",children:e.jsx("img",{src:"/not-found.webp",className:"w-36 h-36"})})}),e.jsx(B,{page:i,setPage:b,totalPages:h})]})]})]})})};export{O as default};
