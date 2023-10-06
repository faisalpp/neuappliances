import{j as e,L as h,a1 as o,n as l,aX as j,a0 as y,r as p,bF as k,bG as _,bH as N}from"./index-888f4a2a.js";import{L as v,C,B as w}from"./LeftArrowSvg-ac836ae4.js";import{R as x}from"./ReviewDetail-8b5405ce.js";import"./CustomInput-797d71f6.js";const S=({prevTitle:d,nextTitle:i,prevLink:s,nextLink:a,loading:t})=>e.jsxs("div",{className:"flex justify-between items-center w-full mt-5",children:[e.jsxs(h,{to:s,className:"flex gap-1 items-center",children:[e.jsx(v,{}),e.jsxs("span",{className:"text-sm font-medium text-b3",children:["Return to ",d]})]}),e.jsxs(h,{to:a,className:"flex items-center py-3 px-6 text-xs rounded-lg bg-b3 text-white",children:["Continue to ",i," ",t?e.jsx("img",{src:"/loader-bg.gif",className:"ml-2 w-4 h-4"}):null]})]}),R=({id:d,title:i,subtitle:s,price:a,checked:t,handleChange:c})=>e.jsxs("div",{className:"flex justify-between w-full gap-3 py-4 px-2",children:[e.jsx(l.Radio,{id:d,onChange:r=>c(d,i,s,a,r.target.checked),icon:e.jsx(j,{className:"w-[18px] h-[18px]"}),className:"border border-[#D9D9D9] bg-white p-0 w-[18px] h-[18px]",ripple:!1,name:"shipping-method",label:e.jsxs("div",{children:[e.jsx(l.Typography,{className:"font-medium tracking-032 text-sm text-b16",children:i}),e.jsx(l.Typography,{className:"text-xs tracking-032 text-b25",children:s})]}),defaultChecked:t}),e.jsxs("div",{className:"text-b16 text-sm font-medium",children:["$",a]})]}),T=({data:d,radioOnChange:i,state:s})=>{const a=o(t=>t.order.shippingInfo);return e.jsxs("div",{className:"space-y-14px mt-8",children:[e.jsx("h3",{className:"text-lg font-medium text-b16",children:"Shipping method"}),e.jsx("div",{className:"[&>*]:border-b [&>*]:border-b31 [&>*:last-child]:border-0 border border-b31 rounded-md",children:d&&d.map((t,c)=>e.jsx(e.Fragment,{children:e.jsx(R,{handleChange:i,id:t._id,title:t.title,subtitle:t.days,price:t.price,checked:t._id===a._id},c)}))})]})},E=()=>{const d=y(),i=o(n=>n.order.orderInfo),s=[{_id:1,title:"Canada Post Expedited Parcel",days:"1 to 7 business days",price:10,checked:!0},{_id:2,title:"Canada Post Xpresspost",days:"1 to 3 business days",price:15,checked:!1},{_id:3,title:"Canada Post Priority",days:"1 to 3 business days",price:20,checked:!1}],[a,t]=p.useState({_id:s[0]._id,title:s[0].title,days:s[0].days,price:s[0].price,checked:s[0].checked}),c=(n,g,f,u,b)=>{t({_id:n,title:g,days:f,price:u,checked:b})},r=o(n=>n.order.shippingInfo),m=o(n=>n.cart.grandTotal);return p.useEffect(()=>{r._id!==a._id?t({_id:r._id,title:r.title,days:r.days,price:r.price,checked:r.checked}):t({_id:s[0]._id,title:s[0].title,days:s[0].days,price:s[0].price,checked:s[0].checked})},[]),p.useEffect(()=>{d(k(a)),d(_({fee:a.price})),d(N({grandTotal:m}))},[a]),e.jsx(e.Fragment,{children:e.jsxs(C,{children:[e.jsx("img",{src:"login_logo.webp",alt:""}),e.jsx(w,{}),e.jsxs("div",{className:"border border-b31 p-3 flex flex-col gap-3 rounded-md",children:[e.jsx(x,{title:"Contact",detail:i.email}),e.jsx("hr",{}),e.jsx(x,{title:"Ship to",detail:`${i.address}, ${i.province}, ${i.postalCode}, ${i.country}`})]}),e.jsx(T,{state:a,data:s,radioOnChange:c}),e.jsx(S,{prevTitle:"information",nextTitle:"payment",prevLink:"/mycart/information",nextLink:"/mycart/payment"})]})})};export{E as default};
