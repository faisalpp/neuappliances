import{r,u as g,m,j as e,M as h,L as l,n as p,o as b,p as f,e as j,f as w,G as v}from"./index-fffd2dc5.js";import{h as N}from"./moment-fbc5633a.js";import{H as y}from"./index-d381d613.js";import{L}from"./Loader2-bb6bbf00.js";const B=()=>{const[t,i]=r.useState([]),n=g(),{slug:x}=m(),[c,s]=r.useState(!1),d=async()=>{s(!0);const a=await v({slug:x});console.log(a),a.status===200?(i(a.data.blog),s(!1)):(s(!1),n("/isr"))};r.useEffect(()=>{d()},[]);const u=o=>N(o).format("MMMM D, YYYY");return e.jsx(e.Fragment,{children:c?e.jsx(L,{}):e.jsxs(h,{children:[e.jsx("div",{className:"py-10 lg:py-16 xl:py-20 w-full px-4 sm:px-10 lg:px-16 xl:px-20 2xl:px-120px mx-auto",children:e.jsxs("div",{className:"max-w-[960px] mx-auto grid grid-cols-1 gap-10 md:gap-14",children:[e.jsxs("div",{children:[e.jsx("h1",{className:"text-28px coxs:text-3xl sm:text-4xl lg:text-40px font-bold mb-4 leading-tight",children:t.length>0?t[0].title:null}),e.jsx("span",{className:"md:text-xl tracking-[-0.4px]",children:t.length>0?u(t[0].createdAt):null})]}),e.jsx("div",{children:t.length>0?y(t[0].content):null}),e.jsxs("div",{className:"flex gap-2",children:[e.jsx(l,{to:"",className:"flex items-center justify-center p-3 w-10 h-10 rounded-full bg-b3 text-white border border-b3 hover:bg-white hover:text-b3 duration-300",children:e.jsx(p,{})}),e.jsx(l,{to:"",className:"flex items-center justify-center p-3 w-10 h-10 rounded-full bg-b3 text-white border border-b3 hover:bg-white hover:text-b3 duration-300",children:e.jsx(b,{})}),e.jsx(l,{to:"",className:"flex items-center justify-center p-3 w-10 h-10 rounded-full bg-b3 text-white border border-b3 hover:bg-white hover:text-b3 duration-300",children:e.jsx(f,{})})]})]})}),e.jsx(j,{apiSectionName:"blog-page-review",title:"Our Customers Are RAVING About Our Appliance Outlet",dots:!0}),e.jsx(w,{backimage:"/Newsletter.webp"})]})})};export{B as default};
