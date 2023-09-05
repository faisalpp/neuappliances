import{j as e,L as l,b as a}from"./index-700f33c8.js";import{L as x,C as m,B as p}from"./LeftArrowSvg-2e558c0c.js";import{R as d}from"./ReviewDetail-b0f9943f.js";import{t as c}from"./MainLayout-c4236618.js";import"./CustomInput-678c9c65.js";import"./ScrollToTop-87b7b771.js";const h=({prevTitle:t,nextTitle:s,prevLink:i,nextLink:o,loading:r})=>e.jsxs("div",{className:"flex justify-between items-center w-full mt-5",children:[e.jsxs(l,{to:i,className:"flex gap-1 items-center",children:[e.jsx(x,{}),e.jsxs("span",{className:"text-sm font-medium text-b3",children:["Return to ",t]})]}),e.jsxs("button",{type:"submit",className:"flex items-center py-3 px-6 text-xs rounded-lg bg-b3 text-white",children:["Continue to ",s," ",r?e.jsx("img",{src:"/loader-bg.gif",className:"ml-2 w-4 h-4"}):null]})]}),n=({id:t,title:s,subtitle:i,price:o,checked:r})=>e.jsxs("div",{className:"flex justify-between w-full gap-3 py-4 px-2",children:[e.jsx(a.Radio,{id:t,icon:e.jsx(c,{className:"w-[18px] h-[18px]"}),className:"border border-[#D9D9D9] bg-white p-0 w-[18px] h-[18px]",ripple:!1,name:"shipping-method",label:e.jsxs("div",{children:[e.jsx(a.Typography,{className:"font-medium tracking-032 text-sm text-b16",children:s}),e.jsx(a.Typography,{className:"text-xs tracking-032 text-b25",children:i})]}),defaultChecked:r}),e.jsxs("div",{className:"text-b16 text-sm font-medium",children:["$",o]})]}),b=()=>e.jsxs("div",{className:"space-y-14px mt-8",children:[e.jsx("h3",{className:"text-lg font-medium text-b16",children:"Shipping method"}),e.jsxs("div",{className:"[&>*]:border-b [&>*]:border-b31 [&>*:last-child]:border-0 border border-b31 rounded-md",children:[e.jsx(n,{id:"expedited",title:"Canada Post Expedited Parcel",subtitle:"1 to 7 business days",price:"10.00",checked:!0}),e.jsx(n,{id:"xpresspost",title:"Canada Post Xpresspost",subtitle:"1 to 3 business days",price:"15.00"}),e.jsx(n,{id:"priority",title:"Canada Post Priority",subtitle:"1 to 3 business days",price:"20.00"})]})]}),w=()=>e.jsx(e.Fragment,{children:e.jsxs(m,{children:[e.jsx("img",{src:"login_logo.webp",alt:""}),e.jsx(p,{}),e.jsxs("div",{className:"border border-b31 p-3 flex flex-col gap-3 rounded-md",children:[e.jsx(d,{title:"Contact",detail:"name@example.com"}),e.jsx("hr",{}),e.jsx(d,{title:"Ship to",detail:"151 O’Connor St Ground floor, Ottawa ON K2P 2L8, Canada"})]}),e.jsx(b,{}),e.jsx(h,{prevTitle:"information",nextTitle:"payment",prevLink:"/mycart/information",nextLink:"/mycart/payment"})]})});export{w as default};