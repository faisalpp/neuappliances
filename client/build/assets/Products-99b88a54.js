import{r as s,y as D,z as M,j as e,M as $,C as H,D as I,E as O,H as Q,J as z,P as J,K,O as T}from"./index-0435dc8f.js";const W=()=>{const[j,p]=s.useState([]),[h,F]=s.useState([]),[y,S]=s.useState({}),[N,P]=s.useState({}),[a,n]=s.useState([]),[o,u]=s.useState(!1),[w,d]=s.useState(!1),[v,l]=s.useState(!1),x=D(),[i,m]=s.useState([]),[c,C]=s.useState(1),[L,b]=s.useState(10),[g,U]=s.useState(6),G=()=>{const t=new URLSearchParams(x.search),r={};for(const[E,q]of t.entries())r[E]=q;m({isSale:!0,salePrice:{$gte:200,$lte:8e3},sort:1,...r})},[R,f]=s.useState(!0),k=async()=>{l(!0);const t=await T({...i,page:c,limit:g});t.status===200?(n(t.data.products),b(Math.ceil(t.data.totalProducts/g)),l(!1)):(l(!1),n([]))};s.useEffect(()=>{console.log("s"),k()},[i,c]),s.useEffect(()=>{G(),A()},[x.search]);const A=async()=>{const t=await M();t.status===200&&(F(t.data.ratingFilters),p(t.data.categoryFilters),S(t.data.saleFilter),P(t.data.regularFilter)),f(!1)},B=()=>{d(!1)};return e.jsx(e.Fragment,{children:e.jsxs($,{children:[e.jsxs("div",{className:"flex items-center mt-5 py-5 maincontainer",children:[e.jsxs("div",{className:"flex items-center",children:[e.jsx("h5",{className:"text-xs text-blue-400",children:"Home"}),e.jsx(H,{className:"text-xl text-gray-500"}),e.jsx("h5",{className:"text-xs text-gray-400",children:"Products"})]}),e.jsxs("div",{className:"flex items-center space-x-5 w-full justify-end",children:[e.jsx(I,{className:"cursor-pointer",onClick:()=>u(!0)}),e.jsx(O,{className:"cursor-pointer",onClick:()=>u(!1)})]}),e.jsxs("button",{className:"ml-5 text-sm font-semibold flex gap-2 items-center lg:hidden",onClick:()=>d(!0),children:["Filters ",e.jsx(Q,{className:"text-xs stroke-1"})]})]}),e.jsxs("div",{className:"flex justify-center gap-12 xl:gap-x-60px maincontainer",children:[e.jsx(z,{loading:R,query:i,setQuery:m,saleFilter:y,regularFilter:N,categoriesFilters:j,ratingFilters:h,onClose:B,isFilter:w}),e.jsx("div",{className:`grid ${o?"lg:grid-cols-3 grid-cols-1 lg:gap-x-2":"grid-cols-1"} gap-y-5 mb-10 w-full`,children:v?e.jsx("div",{className:"flex items-center justify-center w-full",children:e.jsx("img",{src:"/loader2.gif",className:"w-20 h-20"})}):(a==null?void 0:a.length)>0?e.jsxs(e.Fragment,{children:[a.map((t,r)=>e.jsx(J,{product:t,isGrid:o},r)),e.jsx(K,{page:c,setPage:C,totalPages:L})]}):e.jsx("div",{className:"flex items-center justify-center w-full",children:e.jsx("img",{src:"/not-found.webp",className:"w-40 h-40"})})})]})]})})};export{W as default};