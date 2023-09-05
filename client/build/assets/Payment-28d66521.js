import{j as e,b as d,L as i}from"./index-700f33c8.js";import{C as x,B as p,L as b}from"./LeftArrowSvg-2e558c0c.js";import{R as a}from"./ReviewDetail-b0f9943f.js";import{t as h}from"./MainLayout-c4236618.js";import{at as j}from"./ScrollToTop-87b7b771.js";import{C as s}from"./CustomInput-678c9c65.js";const t=({id:o,title:r,labelImage:l,checked:m,name:c,customStyle:n})=>e.jsx("div",{className:"flex justify-between w-full gap-3 p-4",children:e.jsx(d.Radio,{id:o,icon:e.jsx(h,{className:"w-[18px] h-[18px]"}),className:"border border-[#D9D9D9] bg-white p-0 w-[18px] h-[18px]",ripple:!1,name:c,label:e.jsx("div",{children:e.jsxs(d.Typography,{className:"font-medium tracking-032 flex items-center gap-1 text-sm text-b16",children:[l?e.jsx("img",{src:"/payment/"+l,className:"h-[23px] object-contain",alt:r}):null,e.jsx("span",{className:n,children:r})]})}),defaultChecked:m})}),u=()=>e.jsxs("div",{children:[e.jsxs("div",{className:"space-y-14px mt-8",children:[e.jsx("h3",{className:"text-lg font-medium text-b16",children:"Payment"}),e.jsxs("p",{className:"flex gap-1 items-center text-sm text-b32 font-medium",children:[e.jsx(j,{className:"text-b3 text-xs"})," All transactions are secure and encrypted."]}),e.jsxs("div",{className:"[&>*]:border-b [&>*]:border-b31 [&>*:last-child]:border-0 border border-b31 rounded-md",children:[e.jsx(t,{customStyle:"font-medium",name:"payment_method",id:"credit_card",title:"Credit card",checked:!0}),e.jsxs("div",{className:"p-4 bg-[#F9F9F9] grid grid-cols-1 gap-14px",children:[e.jsx(s,{colorStyle:"border-b31 placeholder:text-b25 placeholder:text-sm !text-sm",placeholder:"Card number",icon:"lock.webp"}),e.jsx(s,{colorStyle:"border-b31 placeholder:text-b25 placeholder:text-sm !text-sm",placeholder:"Name on card"}),e.jsxs("div",{className:"grid grid-cols-2 gap-14px",children:[e.jsx(s,{colorStyle:"border-b31 placeholder:text-b25 placeholder:text-sm !text-sm",placeholder:"Expiration date (MM / YY)"}),e.jsx(s,{colorStyle:"border-b31 placeholder:text-b25 placeholder:text-sm !text-sm",placeholder:"Security code",icon:"question-fill.webp"})]})]}),e.jsx(t,{name:"payment_method",labelImage:"pay_paypal.webp",id:"paypal"}),e.jsx(t,{name:"payment_method",id:"affirm",labelImage:"affirm.webp"})]})]}),e.jsxs("div",{className:"mt-8",children:[e.jsx("h3",{className:"text-lg font-medium text-b16",children:"Billing address"}),e.jsx("p",{className:"flex gap-1 items-center text-sm text-b32",children:"Select the address that matches your card of payment method."}),e.jsxs("div",{className:"mt-14px [&>*]:border-b [&>*]:border-b31 [&>*:last-child]:border-0 border border-b31 rounded-md",children:[e.jsx(t,{name:"billing_address",id:"shipping_address",title:"Same as shipping address",checked:!0}),e.jsx(t,{name:"billing_address",id:"billing_address",title:"Use a different billing address"})]})]})]}),v=()=>e.jsx(e.Fragment,{children:e.jsxs(x,{children:[e.jsx("img",{src:"login_logo.webp",alt:""}),e.jsx(p,{}),e.jsxs("div",{className:"border border-b31 p-3 flex flex-col gap-3 rounded-md",children:[e.jsx(a,{title:"Contact",detail:"name@example.com",textStyle:"font-medium"}),e.jsx("hr",{}),e.jsx(a,{title:"Ship to",detail:"151 O’Connor St Ground floor, Ottawa ON K2P 2L8, Canada",textStyle:"font-medium"}),e.jsx("hr",{}),e.jsx(a,{title:"Method",detail:"Canada Post Expedited Parcel · $10.00",subtitle:"1 to 7 business days",textStyle:"font-medium"})]}),e.jsx(u,{}),e.jsxs("div",{className:"flex justify-between items-center w-full mt-5",children:[e.jsxs(i,{to:"/mycart/shipping",className:"flex gap-1 items-center",children:[e.jsx(b,{}),e.jsx("span",{className:"text-sm font-medium text-b3",children:"Return to shipping"})]}),e.jsx(i,{to:"",className:"py-3 px-6 text-xs rounded-lg bg-b3 text-white",type:"button",children:"Pay Now"})]})]})});export{v as default};