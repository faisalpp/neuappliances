import{r as t,y as E,z as R,C as k,j as e,M as A,D as B,E as G,H as L,J as q,K as D,P as H}from"./index-3053c656.js";const M=()=>{const[j,c]=t.useState([]),[h,n]=t.useState([]),[p,F]=t.useState({}),[y,N]=t.useState({}),[a,o]=t.useState([]),[u,x]=t.useState(!1),[S,d]=t.useState(!1),[m,i]=t.useState(!1),f=E(),[l,g]=t.useState({isSale:!0,salePrice:{min:200,max:8e3}});t.useEffect(()=>{const s=new URLSearchParams(f.search),r={};for(const[C,b]of s.entries())r[C]=b;g({...l,...r})},[f.search]),t.useEffect(()=>{w()},[l]);const w=async()=>{i(!0);const s=await R(l);s.status===200?(o(s.data.products),i(!1)):(i(!1),o([]))};t.useEffect(()=>{P()},[l]);const P=async()=>{const s=await k();s.status===200?(n(s.data.ratingFilters),c(s.data.categoryFilters),F(s.data.saleFilter),N(s.data.regularFilter)):(n([]),c([]))},v=()=>{d(!1)};return e.jsx(e.Fragment,{children:e.jsxs(A,{children:[e.jsxs("div",{className:"flex items-center mt-5 py-5 maincontainer",children:[e.jsxs("div",{className:"flex items-center",children:[e.jsx("h5",{className:"text-xs text-blue-400",children:"Home"}),e.jsx(B,{className:"text-xl text-gray-500"}),e.jsx("h5",{className:"text-xs text-gray-400",children:"Products"})]}),e.jsxs("div",{className:"flex items-center space-x-5 w-full justify-end",children:[e.jsx(G,{className:"cursor-pointer",onClick:()=>x(!0)}),e.jsx(L,{className:"cursor-pointer",onClick:()=>x(!1)})]}),e.jsxs("button",{className:"ml-5 text-sm font-semibold flex gap-2 items-center lg:hidden",onClick:()=>d(!0),children:["Filters ",e.jsx(q,{className:"text-xs stroke-1"})]})]}),e.jsxs("div",{className:"flex justify-center gap-12 xl:gap-x-60px maincontainer",children:[e.jsx(D,{query:l,setQuery:g,saleFilter:p,regularFilter:y,categoriesFilters:j,ratingFilters:h,onClose:v,isFilter:S}),e.jsxs("div",{className:`grid ${u?"lg:grid-cols-3 grid-cols-1 lg:gap-x-2":"grid-cols-1"} gap-y-5 mb-10 w-full`,children:[m?e.jsx("div",{className:"flex items-center justify-center w-full",children:e.jsx("img",{src:"/loader2.gif",className:"w-20 h-20"})}):null,(a==null?void 0:a.length)===0?e.jsx("div",{className:"flex items-center justify-center w-full",children:e.jsx("img",{src:"/not-found.webp",className:"w-40 h-40"})}):null,(a==null?void 0:a.length)>0&&!m?a.map((s,r)=>e.jsx(H,{product:s,isGrid:u},r)):null]})]})]})})};export{M as default};
