import{d as c,r as x,j as t,L as d}from"./index-10a6e95b.js";import{M as g,b as r}from"./MainLayout-4599f12c.js";import{g as h}from"./helpSupport-df88eb3e.js";import{H as u}from"./index-5b19a3b4.js";import{L as f}from"./Loader2-fda10927.js";import{P as j}from"./ScrollToTop-0126eb0a.js";import"./index.esm-8fea9dd4.js";import"./index-7250c32d.js";const M=()=>{const{slug:p}=c(),[e,o]=x.useState([]),[m,a]=x.useState(!1),n=async()=>{a(!0);const l=await h({slug:p});l.status===200?(a(!1),o(l.data.help),setTotalCount(Math.ceil(l.data.totalCount/limit))):(o([]),a(!1))};x.useEffect(()=>{n()},[]);function i(s){if(s)return s[0].toUpperCase()+s.slice(1)}return t.jsx(t.Fragment,{children:m?t.jsx(f,{}):t.jsxs(g,{children:[t.jsxs("div",{className:"py-10 lg:py-16 xl:py-20 w-full 3xl:max-w-1680px px-4 sm:px-10 lg:px-16 xl:px-20 2xl:px-120px mx-auto",children:[t.jsxs(d,{to:"/helpful-appliances-tips",className:"flex mb-10 lg:hidden items-center gap-2 text-sm text-b3 font-semibold",children:[t.jsx(j,{}),"Back"]}),t.jsxs("div",{className:"flex items-center flex-wrap",children:[t.jsx("h5",{className:"text-[10px] sm:text-xs text-b3",children:"Home"}),t.jsx(r,{className:"text-base text-gray-500"}),t.jsx("h5",{className:"text-[10px] sm:text-xs text-b3",children:"Help & Support Center"}),t.jsx(r,{className:"text-base text-gray-500"}),t.jsx("h5",{className:"text-[10px] sm:text-xs text-b3",children:e.length>0?i(e[0].category):null}),t.jsx(r,{className:"text-base text-gray-500"}),t.jsx("h5",{className:"text-[10px] sm:text-xs text-gray-500",children:e.length>0?e[0].title:null})]})]}),t.jsxs("div",{className:"pb-10 lg:pb-16 xl:pb-20 w-full px-4 sm:px-56 lg:px-[250px] xl:px-[270px] 2xl:px-[310px] mx-auto",children:[t.jsx("h1",{className:"font-bold mb-10 text-3xl",children:e.length>0?e[0].title:null}),e.length>0?u(e[0].content):null]})]})})};export{M as default};
