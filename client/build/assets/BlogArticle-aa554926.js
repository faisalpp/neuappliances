import{r as a,u,f as g,j as e,L as o}from"./index-700f33c8.js";import{M as p,r as h}from"./MainLayout-c4236618.js";import{N as f}from"./NewsLetterSection-8dcbee50.js";import{S as b}from"./SatisfiedSection-156bee23.js";import{a2 as j,a3 as w,a4 as v}from"./ScrollToTop-87b7b771.js";import{h as N}from"./moment-fbc5633a.js";import{H as y}from"./index-a2354453.js";import{L}from"./Loader2-1df4e845.js";import"./slick-theme-a56f7c90.js";const E=()=>{const[t,i]=a.useState([]),n=u(),{slug:x}=g(),[c,s]=a.useState(!1),d=async()=>{s(!0);const r=await v({slug:x});console.log(r),r.status===200?(i(r.data.blog),s(!1)):(s(!1),n("/isr"))};a.useEffect(()=>{d()},[]);const m=l=>N(l).format("MMMM D, YYYY");return e.jsx(e.Fragment,{children:c?e.jsx(L,{}):e.jsxs(p,{children:[e.jsx("div",{className:"py-10 lg:py-16 xl:py-20 w-full px-4 sm:px-10 lg:px-16 xl:px-20 2xl:px-120px mx-auto",children:e.jsxs("div",{className:"max-w-[960px] mx-auto grid grid-cols-1 gap-10 md:gap-14",children:[e.jsxs("div",{children:[e.jsx("h1",{className:"text-28px coxs:text-3xl sm:text-4xl lg:text-40px font-bold mb-4 leading-tight",children:t.length>0?t[0].title:null}),e.jsx("span",{className:"md:text-xl tracking-[-0.4px]",children:t.length>0?m(t[0].createdAt):null})]}),e.jsx("div",{children:t.length>0?y(t[0].content):null}),e.jsxs("div",{className:"flex gap-2",children:[e.jsx(o,{to:"",className:"flex items-center justify-center p-3 w-10 h-10 rounded-full bg-b3 text-white border border-b3 hover:bg-white hover:text-b3 duration-300",children:e.jsx(j,{})}),e.jsx(o,{to:"",className:"flex items-center justify-center p-3 w-10 h-10 rounded-full bg-b3 text-white border border-b3 hover:bg-white hover:text-b3 duration-300",children:e.jsx(h,{})}),e.jsx(o,{to:"",className:"flex items-center justify-center p-3 w-10 h-10 rounded-full bg-b3 text-white border border-b3 hover:bg-white hover:text-b3 duration-300",children:e.jsx(w,{})})]})]})}),e.jsx(b,{apiSectionName:"blog-page-review",title:"Our Customers Are RAVING About Our Appliance Outlet",dots:!0}),e.jsx(f,{backimage:"/Newsletter.webp"})]})})};export{E as default};