import{j as e,L as c,a3 as l,n as d,a$ as j,r as f}from"./index-5f978e8e.js";import{L as b,C as y,B as v}from"./LeftArrowSvg-60a0178e.js";import{R as m}from"./ReviewDetail-d539323e.js";import"./CustomInput-c46f76ea.js";const N=({prevTitle:t,nextTitle:s,prevLink:a,nextLink:n,loading:r})=>e.jsxs("div",{className:"flex justify-between items-center w-full mt-5",children:[e.jsxs(c,{to:a,className:"flex gap-1 items-center",children:[e.jsx(b,{}),e.jsxs("span",{className:"text-sm font-medium text-b3",children:["Return to ",t]})]}),e.jsxs(c,{to:n,className:"flex items-center py-3 px-6 text-xs rounded-lg bg-b3 text-white",children:["Continue to ",s," ",r?e.jsx("img",{src:"/loader-bg.gif",className:"ml-2 w-4 h-4"}):null]})]}),x=({id:t,title:s,subtitle:a,price:n,checked:r,handleChange:o})=>e.jsxs("div",{className:"flex justify-between w-full gap-3 py-4 px-2",children:[e.jsx(d.Radio,{id:t,onChange:i=>o(t,s,a,n,i.target.checked),icon:e.jsx(j,{className:"w-[18px] h-[18px]"}),className:"border border-[#D9D9D9] bg-white p-0 w-[18px] h-[18px]",ripple:!1,name:"shipping-method",label:e.jsxs("div",{children:[e.jsx(d.Typography,{className:"font-medium tracking-032 text-sm text-b16",children:s}),e.jsx(d.Typography,{className:"text-xs tracking-032 text-b25",children:a})]}),defaultChecked:r}),e.jsxs("div",{className:"text-b16 text-sm font-medium",children:["$",n]})]}),k=({radioOnChange:t})=>{const s=l(r=>r.cart.deliveryOrders),a=l(r=>r.cart.deliveryInfo),n=l(r=>r.cart.pickupOrders);return e.jsxs("div",{className:"space-y-14px mt-8",children:[e.jsx("h3",{className:"text-lg font-medium text-b16",children:"Shipping method"}),e.jsxs("div",{className:"[&>*]:border-b [&>*]:border-b31 [&>*:last-child]:border-0 border border-b31 rounded-md",children:[(s==null?void 0:s.length)>0?e.jsx(x,{handleChange:t,id:"home_delivery",title:"Home Delivery",subtitle:"1 to 3 Business Days",price:a.shipping,checked:!0}):null,n.length>0?e.jsx(x,{handleChange:t,id:"home_delivery",title:"Free Pickup",subtitle:"Always Ready!",price:"Free",checked:!0}):null]})]})},D=()=>{const t=l(i=>i.order.orderInfo),s=l(i=>i.cart.pickupOrders),a=l(i=>i.cart.deliveryOrders),[n,r]=f.useState({}),o=(i,p,h,g,u)=>{r({_id:i,title:p,days:h,price:g,checked:u})};return(a==null?void 0:a.length)===0&&(s==null?void 0:s.length)===0&&navigate("/mycart"),e.jsx(e.Fragment,{children:e.jsxs(y,{children:[e.jsx("img",{src:"login_logo.webp",alt:""}),e.jsx(v,{}),e.jsxs("div",{className:"border border-b31 p-3 flex flex-col gap-3 rounded-md",children:[e.jsx(m,{title:"Contact",detail:t.email}),e.jsx("hr",{}),e.jsx(m,{title:"Ship to",detail:`${t.address}, ${t.province}, ${t.postalCode}, ${t.country}`})]}),e.jsx(k,{state:n,radioOnChange:o}),e.jsx(N,{prevTitle:"information",nextTitle:"payment",prevLink:"/mycart/information",nextLink:"/mycart/payment"})]})})};export{D as default};
