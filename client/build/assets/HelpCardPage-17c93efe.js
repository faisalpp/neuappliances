import{a3 as m,r as x,j as e,M as d,L as g,aP as h,E as r}from"./index-1c659439.js";import{g as u}from"./helpSupport-9ea1ecba.js";import{H as f}from"./index-e3d9c0c3.js";import{L as j}from"./Loader2-d2f4d6ae.js";const w=()=>{const{slug:n}=m(),[t,p]=x.useState([]),[o,a]=x.useState(!1),c=async()=>{a(!0);const l=await u({slug:n});l.status===200?(a(!1),p(l.data.help),setTotalCount(Math.ceil(l.data.totalCount/limit))):(p([]),a(!1))};x.useEffect(()=>{c()},[]);function i(s){if(s)return s[0].toUpperCase()+s.slice(1)}return e.jsx(e.Fragment,{children:o?e.jsx(j,{}):e.jsxs(d,{children:[e.jsxs("div",{className:"py-10 lg:py-16 xl:py-20 w-full 3xl:max-w-1680px px-4 sm:px-10 lg:px-16 xl:px-20 2xl:px-120px mx-auto",children:[e.jsxs(g,{to:"/helpful-appliances-tips",className:"flex mb-10 lg:hidden items-center gap-2 text-sm text-b3 font-semibold",children:[e.jsx(h,{}),"Back"]}),e.jsxs("div",{className:"flex items-center flex-wrap",children:[e.jsx("h5",{className:"text-[10px] sm:text-xs text-b3",children:"Home"}),e.jsx(r,{className:"text-base text-gray-500"}),e.jsx("h5",{className:"text-[10px] sm:text-xs text-b3",children:"Help & Support Center"}),e.jsx(r,{className:"text-base text-gray-500"}),e.jsx("h5",{className:"text-[10px] sm:text-xs text-b3",children:t.length>0?i(t[0].category):null}),e.jsx(r,{className:"text-base text-gray-500"}),e.jsx("h5",{className:"text-[10px] sm:text-xs text-gray-500",children:t.length>0?t[0].title:null})]})]}),e.jsxs("div",{className:"pb-10 lg:pb-16 xl:pb-20 w-full px-4 sm:px-56 lg:px-[250px] xl:px-[270px] 2xl:px-[310px] mx-auto",children:[e.jsx("h1",{className:"font-bold mb-10 text-3xl",children:t.length>0?t[0].title:null}),t.length>0?f(t[0].content):null]})]})})};export{w as default};
