import{j as e,e as G,f as l,r as f,G as P,a1 as k,a2 as q,a3 as A,a4 as B,b as I}from"./index-8f0b06cf.js";import{C as E}from"./CustomInput-0297ce22.js";import{w as M,M as H,b as g}from"./MainLayout-15ec4b43.js";const F=s=>e.jsxs("div",{className:"flex justify-start mt-3 gap-14px",children:[e.jsxs("div",{className:"max-w-[64px] relative w-full",children:[e.jsx("img",{src:s.item.image,className:"w-16 h-16 object-contain",alt:""}),e.jsx("span",{className:"absolute flex justify-center items-center text-xs font-medium w-5 h-5 rounded-full bg-b3 text-white -right-2 -top-2",children:s.count})]}),e.jsxs("div",{className:"flex items-center gap-14px",children:[e.jsxs("div",{children:[e.jsx("h3",{className:"text-sm text-b16 font-medium tracking-032 !leading-[150%]",children:s.item.title}),s.item.rating===5?e.jsx("p",{className:"text-b25 text-xs",children:"5 Stars (Flawless Cosmetic Rating)"}):null,s.item.rating===4?e.jsx("p",{className:"text-b25 text-xs",children:"4 Stars (Flawless Cosmetic Rating)"}):null,s.item.rating===3?e.jsx("p",{className:"text-b25 text-xs",children:"3 Stars (Flawless Cosmetic Rating)"}):null]}),s.item.salePrice?e.jsxs("div",{className:"flex justify-between text-b3 text-sm font-medium",children:["$",s.item.salePrice]}):e.jsxs("div",{className:"flex justify-between text-b3 text-sm font-medium",children:["$",s.item.regularPrice]})]})]}),Z=()=>{var w,C;const s=G(),d=l(t=>t.cart.cartId),i=l(t=>t.cart.total),S=l(t=>t.cart.grandTotal),T=l(t=>t.cart.tax),c=l(t=>t.cart.pickupOrders),x=l(t=>t.cart.deliveryOrders),u=l(t=>t.cart.deliveryInfo),j=l(t=>t.cart.pickupInfo);function b(t){let a=new Set,v=[],y=new Set,m=0;for(const h of t)a.has(h.pid)?(y.add(h.pid),m++):(a.add(h.pid),v.push(h));return m>=1?m=m+1:m=1,{uniqueArr:v,deletedCount:m,deletedDuplicates:y}}const r=b(c),o=b(x),n=l(t=>t.order.orderInfo),[_,p]=f.useState(!1),$=async()=>{p(!0),(await s(P({cartId:d}))).payload.status,p(!1)};f.useEffect(()=>{d&&$()},[d]);const[N,L]=f.useState(""),D=()=>{if(N==="c12"){const t=parseFloat(i)-20;s(k(t))}},R=()=>{const t=.0825*i;if(s(q(t.toFixed(2))),(x==null?void 0:x.length)>0&&(c==null?void 0:c.length)===0){const a=i+t+u.shipping;s(A({cartId:d,grandTotal:a.toFixed(2),total:i,tax:t.toFixed(2)}))}else{s(B());const a=i+t;s(A({cartId:d,grandTotal:a.toFixed(2),total:i,tax:t.toFixed(2)}))}};return f.useEffect(()=>{R()},[]),e.jsx(e.Fragment,{children:e.jsx("div",{className:"max-w-full w-full h-full px-4 sm:px-11 py-14 bg-[#F9F9F9]",children:e.jsxs("div",{className:"max-w-[418px] 3xl:max-w-xl mr-auto w-full flex flex-col gap-5",children:[((w=o==null?void 0:o.uniqueArr)==null?void 0:w.length)>0?e.jsxs("div",{className:"flex w-full flex-col gap-6 bg-white px-4 sm:px-6 py-4",children:[o&&o.uniqueArr.map((t,a)=>e.jsx(F,{item:t,count:o.deletedCount},a)),e.jsxs("div",{className:"border border-b31 text-b32 flex gap-2 items-center p-4 text-sm",children:[e.jsx(M,{className:"text-xl text-b25 rounded-lg"}),e.jsxs("span",{children:["Delivering To ",n!=null&&n.email?`${n.address}, ${n.city}, ${n.province}, ${n.country}, ${n.postalCode}`:u==null?void 0:u.location]})]})]}):null,((C=r==null?void 0:r.uniqueArr)==null?void 0:C.length)>0?e.jsxs("div",{className:"bg-white px-6 py-4 flex flex-col gap-5",children:[r&&r.uniqueArr.map((t,a)=>e.jsx(F,{item:t,count:r.deletedCount},a)),e.jsxs("div",{className:"border border-b31 text-b32 flex gap-2 items-center p-4 text-sm",children:[e.jsx("img",{src:"/svgs/Pick-up.webp",alt:"Pick-up"}),e.jsxs("span",{children:["Pick up in store ",j==null?void 0:j.location]})]})]}):null,e.jsx("hr",{}),e.jsxs("div",{className:"flex gap-14px items-center w-full",children:[e.jsx(E,{type:"text",state:N,setState:L,colorStyle:"border-b31 placeholder:text-b25",placeholder:"Discount code"}),e.jsx("button",{onClick:D,type:"buttton",className:"px-4 p-3 bg-b3 text-sm text-white font-medium rounded-lg",children:"Apply"})]}),e.jsx("hr",{}),e.jsxs("div",{className:"[&>*]:text-sm flex flex-col gap-3",children:[e.jsxs("div",{className:"flex justify-between",children:[e.jsx("span",{className:"text-b32",children:"Subtotal"}),e.jsxs("span",{className:"text-b16 font-medium",children:["$",i]})]}),e.jsxs("div",{className:"flex justify-between",children:[e.jsx("span",{className:"text-b32",children:"Shipping"}),e.jsx("span",{className:"text-b16 font-medium",children:(x==null?void 0:x.length)>0?`$${u.shipping}`:(c==null?void 0:c.length)>0?"Free":"No Shipping Available!"})]}),e.jsxs("div",{className:"flex justify-between",children:[e.jsx("span",{className:"text-b32",children:"Taxes"}),e.jsxs("span",{className:"text-b16 font-medium",children:["$",T]})]})]}),e.jsx("hr",{}),e.jsxs("div",{className:"flex justify-between items-center",children:[e.jsx("span",{className:"text-b16 font-medium",children:"Total"}),e.jsxs("div",{className:"flex gap-2 items-center",children:[e.jsx("span",{className:"text-xs text-b16",children:"USD"}),e.jsxs("span",{className:"text-b3 font-semibold tracking-032 text-2xl",children:["$",S]})]})]})]})})})},J=({children:s})=>e.jsx(e.Fragment,{children:e.jsx(H,{children:e.jsx("div",{className:"grid grid-cols-1 justify-center items-center w-full h-full",children:e.jsxs("div",{className:"flex maxlg:flex-col 3xl:grid grid-cols-2 w-full h-full",children:[e.jsx("div",{className:"px-4 xs:px-10 sm:px-16 pt-14 pb-52 h-full grow w-full bg-white 2xl:max-w-[808px] 3xl:max-w-full",children:e.jsx("div",{className:"max-w-[572px] w-full lg:ml-auto",children:s})}),e.jsx(Z,{})]})})})}),K=()=>{const s=I();return e.jsxs("div",{className:"flex items-center my-4",children:[e.jsx("h5",{className:"text-xs text-b3 font-medium",children:"Cart"}),e.jsx(g,{className:`text-xl text-b19 ${s.pathname==="/mycart/information"?"active":""}`}),e.jsx("h5",{className:"text-xs text-b17 font-medium",children:"Information"}),e.jsx(g,{className:"text-xl text-b19"}),e.jsx("h5",{className:"text-xs text-b17",children:"Shipping"}),e.jsx(g,{className:"text-xl text-b19"}),e.jsx("h5",{className:"text-xs text-b17",children:"Payment"})]})},Q=()=>e.jsx(e.Fragment,{children:e.jsxs("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[e.jsx("path",{d:"M7.97422 15.6829C7.81589 15.6829 7.65755 15.6246 7.53255 15.4996L2.47422 10.4413C2.23255 10.1996 2.23255 9.79961 2.47422 9.55794L7.53255 4.49961C7.77422 4.25794 8.17422 4.25794 8.41589 4.49961C8.65755 4.74128 8.65755 5.14128 8.41589 5.38294L3.79922 9.99961L8.41589 14.6163C8.65755 14.8579 8.65755 15.2579 8.41589 15.4996C8.29922 15.6246 8.13255 15.6829 7.97422 15.6829Z",fill:"#22A6AB"}),e.jsx("path",{d:"M17.0836 10.625H3.05859C2.71693 10.625 2.43359 10.3417 2.43359 10C2.43359 9.65833 2.71693 9.375 3.05859 9.375H17.0836C17.4253 9.375 17.7086 9.65833 17.7086 10C17.7086 10.3417 17.4253 10.625 17.0836 10.625Z",fill:"#22A6AB"})]})});export{K as B,J as C,Q as L};
