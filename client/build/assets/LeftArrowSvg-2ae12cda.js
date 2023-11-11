import{j as e,a0 as N,a1 as x,r as c,bQ as w,b0 as v,bR as y,M as C,t as S,x as m}from"./index-4a452b3d.js";import{C as $}from"./CustomInput-14874df3.js";const p=l=>e.jsxs("div",{className:"flex justify-start mt-3 gap-14px",children:[e.jsxs("div",{className:"max-w-[64px] relative w-full",children:[e.jsx("img",{src:l.item.image,className:"w-16 h-16 object-contain",alt:""}),e.jsx("span",{className:"absolute flex justify-center items-center text-xs font-medium w-5 h-5 rounded-full bg-b3 text-white -right-2 -top-2",children:l.item.count})]}),e.jsxs("div",{className:"flex items-center gap-14px",children:[e.jsxs("div",{children:[e.jsx("h3",{className:"text-sm text-b16 font-medium tracking-032 !leading-[150%]",children:l.item.title}),l.item.rating===5?e.jsx("p",{className:"text-b25 text-xs",children:"5 Stars (Flawless Cosmetic Rating)"}):null,l.item.rating===4?e.jsx("p",{className:"text-b25 text-xs",children:"4 Stars (Flawless Cosmetic Rating)"}):null,l.item.rating===3?e.jsx("p",{className:"text-b25 text-xs",children:"3 Stars (Flawless Cosmetic Rating)"}):null]}),l.item.salePrice?e.jsxs("div",{className:"flex justify-between text-b3 text-sm font-medium",children:["$",l.item.salePrice]}):e.jsxs("div",{className:"flex justify-between text-b3 text-sm font-medium",children:["$",l.item.regularPrice]})]})]}),k=()=>{const l=N(),n=x(a=>{var t;return(t=a.cart)==null?void 0:t.cart.cartId}),d=x(a=>{var t;return(t=a.cart)==null?void 0:t.cart.subTotal}),o=x(a=>{var t;return(t=a.cart)==null?void 0:t.cart.tax}),i=x(a=>{var t;return(t=a.cart)==null?void 0:t.cart.products}),s=x(a=>{var t;return(t=a.cart)==null?void 0:t.cart.orderInfo}),h=x(a=>{var t;return(t=a.cart)==null?void 0:t.cart.coupon}),[j,F]=c.useState((h||0)+(s.type==="delivery"?s.shipping:0)+o+d),[L,r]=c.useState(!1),f=async()=>{r(!0),(await l(v({cartId:n}))).payload.status,r(!1)};c.useEffect(()=>{n&&f()},[n]);const[u,b]=c.useState(""),g=()=>{if(u==="c12"){const a=parseFloat(total)-20;l(y(a))}};return e.jsx(e.Fragment,{children:e.jsx("div",{className:"max-w-full w-full h-full px-4 sm:px-11 py-14 bg-[#F9F9F9]",children:e.jsxs("div",{className:"max-w-[418px] 3xl:max-w-xl mr-auto w-full flex flex-col gap-5",children:[s.type==="delivery"?e.jsxs("div",{className:"flex w-full flex-col gap-6 bg-white px-4 sm:px-6 py-4",children:[(i==null?void 0:i.length)>0&&i.map((a,t)=>e.jsx(p,{item:a},t)),e.jsxs("div",{className:"border border-b31 text-b32 flex gap-2 items-center p-4 text-sm",children:[e.jsx(w,{className:"text-xl text-b25 rounded-lg"}),e.jsxs("span",{children:["Delivering To ",s!=null&&s.email?`${s.address}, ${s.city}, ${s.province}, ${s.country}, ${s.postalCode}`:s.location]})]})]}):null,s.type==="pickup"?e.jsxs("div",{className:"bg-white px-6 py-4 flex flex-col gap-5",children:[(i==null?void 0:i.length)>0&&i.map((a,t)=>e.jsx(p,{item:a},t)),e.jsxs("div",{className:"border border-b31 text-b32 flex gap-2 items-center p-4 text-sm",children:[e.jsx("img",{src:"/svgs/Pick-up.webp",alt:"Pick-up"}),e.jsxs("span",{children:["Pick up at ",s==null?void 0:s.location]})]})]}):null,e.jsx("hr",{}),e.jsxs("div",{className:"flex gap-14px items-center w-full",children:[e.jsx($,{type:"text",state:u,setState:b,colorStyle:"border-b31 placeholder:text-b25",placeholder:"Discount code"}),e.jsx("button",{onClick:g,type:"buttton",className:"px-4 p-3 bg-b3 text-sm text-white font-medium rounded-lg",children:"Apply"})]}),e.jsx("hr",{}),e.jsxs("div",{className:"[&>*]:text-sm flex flex-col gap-3",children:[e.jsxs("div",{className:"flex justify-between",children:[e.jsx("span",{className:"text-b32",children:"Subtotal"}),e.jsxs("span",{className:"text-b16 font-medium",children:["$",d]})]}),e.jsxs("div",{className:"flex justify-between",children:[e.jsx("span",{className:"text-b32",children:"Shipping"}),e.jsxs("span",{className:"text-b16 font-medium",children:[s.type==="delivery"?`$${s.shipping}`:null,s.type==="pickup"?s.shipping:null]})]}),e.jsxs("div",{className:"flex justify-between",children:[e.jsx("span",{className:"text-b32",children:"Taxes"}),e.jsxs("span",{className:"text-b16 font-medium",children:["$",o]})]})]}),e.jsx("hr",{}),e.jsxs("div",{className:"flex justify-between items-center",children:[e.jsx("span",{className:"text-b16 font-medium",children:"Total"}),e.jsxs("div",{className:"flex gap-2 items-center",children:[e.jsx("span",{className:"text-xs text-b16",children:"USD"}),e.jsxs("span",{className:"text-b3 font-semibold tracking-032 text-2xl",children:["$",j]})]})]})]})})})},P=({children:l})=>e.jsx(e.Fragment,{children:e.jsx(C,{children:e.jsx("div",{className:"grid grid-cols-1 justify-center items-center w-full h-full",children:e.jsxs("div",{className:"flex maxlg:flex-col 3xl:grid grid-cols-2 w-full h-full",children:[e.jsx("div",{className:"px-4 xs:px-10 sm:px-16 pt-14 pb-52 h-full grow w-full bg-white 2xl:max-w-[808px] 3xl:max-w-full",children:e.jsx("div",{className:"max-w-[572px] w-full lg:ml-auto",children:l})}),e.jsx(k,{})]})})})}),R=()=>{const l=S();return e.jsxs("div",{className:"flex items-center my-4",children:[e.jsx("h5",{className:"text-xs text-b3 font-medium",children:"Cart"}),e.jsx(m,{className:`text-xl text-b19 ${l.pathname==="/mycart/information"?"active":""}`}),e.jsx("h5",{className:"text-xs text-b17 font-medium",children:"Information"}),e.jsx(m,{className:"text-xl text-b19"}),e.jsx("h5",{className:"text-xs text-b17",children:"Shipping"}),e.jsx(m,{className:"text-xl text-b19"}),e.jsx("h5",{className:"text-xs text-b17",children:"Payment"})]})},D=()=>e.jsx(e.Fragment,{children:e.jsxs("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[e.jsx("path",{d:"M7.97422 15.6829C7.81589 15.6829 7.65755 15.6246 7.53255 15.4996L2.47422 10.4413C2.23255 10.1996 2.23255 9.79961 2.47422 9.55794L7.53255 4.49961C7.77422 4.25794 8.17422 4.25794 8.41589 4.49961C8.65755 4.74128 8.65755 5.14128 8.41589 5.38294L3.79922 9.99961L8.41589 14.6163C8.65755 14.8579 8.65755 15.2579 8.41589 15.4996C8.29922 15.6246 8.13255 15.6829 7.97422 15.6829Z",fill:"#22A6AB"}),e.jsx("path",{d:"M17.0836 10.625H3.05859C2.71693 10.625 2.43359 10.3417 2.43359 10C2.43359 9.65833 2.71693 9.375 3.05859 9.375H17.0836C17.4253 9.375 17.7086 9.65833 17.7086 10C17.7086 10.3417 17.4253 10.625 17.0836 10.625Z",fill:"#22A6AB"})]})});export{R as B,P as C,D as L};
