import{r as t,j as e,bP as _e,by as p,n as v,a$ as le,bQ as Ie,b8 as $e,u as Le,a2 as Be,a3 as g,bG as Fe,L as Te,z as $}from"./index-9778b12f.js";import{C as Me,B as Ue,L as Oe}from"./LeftArrowSvg-6e9be00f.js";import{R as k}from"./ReviewDetail-b53f3d35.js";import{C as te}from"./CustomSelect-a70cf54e.js";import{c as ae,a as d}from"./index.esm-8a476d02.js";import"./CustomInput-f4bbd773.js";const re=({id:h,title:i,labelImage:o,checked:c,name:a,customStyle:x,change:n})=>e.jsx("div",{className:"flex justify-between w-full gap-3 p-4",children:e.jsx(v.Radio,{id:h,onChange:b=>n(b),icon:e.jsx(le,{className:"w-[18px] h-[18px]"}),className:"border border-[#D9D9D9] bg-white p-0 w-[18px] h-[18px]",ripple:!1,name:a,label:e.jsx("div",{children:e.jsxs(v.Typography,{className:"font-medium tracking-032 flex items-center gap-1 text-sm text-b16",children:[o?e.jsx("img",{src:"/payment/"+o,className:"h-[23px] object-contain",alt:i}):null,e.jsx("span",{className:x,children:i})]})}),checked:c})}),L=({id:h,title:i,labelImage:o,checked:c,name:a,customStyle:x,change:n})=>e.jsx("div",{className:"flex justify-between w-full gap-3 p-4",children:e.jsx(v.Radio,{id:h,onChange:b=>n(b),icon:e.jsx(le,{className:"w-[18px] h-[18px]"}),className:"border border-[#D9D9D9] bg-white p-0 w-[18px] h-[18px]",ripple:!1,name:a,label:e.jsx("div",{children:e.jsxs(v.Typography,{className:"font-medium tracking-032 flex items-center gap-1 text-sm text-b16",children:[o?e.jsx("img",{src:"/payment/"+o,className:"h-[23px] object-contain",alt:i}):null,e.jsx("span",{className:x,children:i})]})}),checked:c===a})}),He=({payment:h,setPayment:i,setBilling:o,billing:c,card:a,setCard:x,cardErrors:n})=>{const[b,S]=t.useState(!0),w=r=>{const u=r.target;u.name==="shipping_address"&&(S(u.checked),o(!1)),u.name==="billing_address"&&(o(u.checked),S(!1))},C=r=>{i(r.target.name)},q=r=>r.replace(/\s/g,"").slice(0,16).replace(/\d{4}(?!$)/g,"$& "),P=r=>{const u=r.replace(/[^0-9]/g,"").slice(0,6);let N="";for(let y=0;y<u.length;y+=2)y!==0&&(N+="/"),N+=u.substr(y,2);return N};return e.jsxs("div",{children:[e.jsxs("div",{className:"space-y-14px mt-8",children:[e.jsx("h3",{className:"text-lg font-medium text-b16",children:"Payment"}),e.jsxs("p",{className:"flex gap-1 items-center text-sm text-b32 font-medium",children:[e.jsx(_e,{className:"text-b3 text-xs"})," All transactions are secure and encrypted."]}),e.jsxs("div",{className:"[&>*]:border-b [&>*]:border-b31 [&>*:last-child]:border-0 border border-b31 rounded-md",children:[e.jsx(L,{customStyle:"font-medium",change:C,name:"card_payment",id:"credit_card",title:"Credit card",checked:h}),e.jsxs("div",{className:"p-4 bg-[#F9F9F9] grid grid-cols-1 gap-14px",children:[e.jsx(p,{icon:"lock.webp",width:"full",name:"cardNumber",iscompulsory:"false",type:"text",value:q(a.cardNo),onChange:r=>x({...a,cardNo:a.cardNo.length>15?a.cardNo.replace(/\s/g,"").slice(0,16):r.target.value.replace(/\s/g,"").slice(0,16)}),error:!!(n&&n.includes("Card Number is Required!")),errormessage:"Card Number is Required!",placeholder:"Card number"}),e.jsx(p,{width:"full",name:"cardName",iscompulsory:"false",type:"text",value:a.name,onChange:r=>x({...a,name:r.target.value}),error:!!(n&&n.includes("Card Holder Name is Required!")),errormessage:"Card Holder Name is Required!",placeholder:"Name on card"}),e.jsxs("div",{className:"grid grid-cols-2 gap-14px",children:[e.jsx(p,{width:"full",name:"expDate",iscompulsory:"false",type:"text",value:a.expDate,onChange:r=>x({...a,expDate:P(r.target.value)}),error:!!(n&&n.includes("Card Expiry Date is Required!")),errormessage:"Card Expiry Date is Required!",placeholder:"Expiration date (MM / YY)"}),e.jsx(p,{icon:"question-fill.webp",width:"full",name:"code",iscompulsory:"false",type:"text",value:a.code,onChange:r=>x({...a,code:a.code.length>6?a.code:r.target.value}),error:!!(n&&n.includes("Security Code is Required!")),errormessage:"Security Code is Required!",placeholder:"Security code"})]})]}),e.jsx(L,{name:"paypal_payment",change:C,checked:h,labelImage:"pay_paypal.webp",id:"paypal"}),e.jsx(L,{name:"affirm_payment",change:C,checked:h,id:"affirm",labelImage:"affirm.webp"})]})]}),e.jsxs("div",{className:"mt-8",children:[e.jsx("h3",{className:"text-lg font-medium text-b16",children:"Billing address"}),e.jsx("p",{className:"flex gap-1 items-center text-sm text-b32",children:"Select the address that matches your card of payment method."}),e.jsxs("div",{className:"mt-14px [&>*]:border-b [&>*]:border-b31 [&>*:last-child]:border-0 border border-b31 rounded-md",children:[e.jsx(re,{checked:b,change:w,name:"shipping_address",id:"shipping_address",title:"Same as shipping address"}),e.jsx(re,{checked:c,change:w,name:"billing_address",id:"billing_address",title:"Use a different billing address"})]})]})]})},ze=()=>e.jsxs("div",{className:"fixed flex flex-col space-y-5 items-center justify-center top-0 w-full h-screen z-40 bg-white/80",children:[e.jsx(Ie,{className:"text-b6 text-6xl animate-spin"}),e.jsxs("div",{className:"flex flex-col items-center",children:[e.jsx("h4",{className:"font-semibold text-sm",children:"Your order’s being processed."}),e.jsx("p",{className:"font-medium text-sm",children:"Please wait while we process your order."})]})]}),Qe="",Ye=$e.create({baseURL:Qe,headers:{"Content-Type":"application/json"}}),Ze=async h=>{let i;try{i=await Ye.post("/api/user/process-order",h,{validateStatus:()=>!0})}catch(o){return o}return i},ts=()=>{const[h,i]=t.useState(!1),o=Le();Be();const c=g(s=>s.cart.deliveryOrders),a=g(s=>s.cart.pickupOrders);c.length===0&&a.length===0&&o("/mycart");const{email:x,address:n,postalCode:b,city:S,country:w,province:C}=g(s=>s.order.orderInfo),q=g(s=>s.cart.deliveryInfo),P=[{name:"USA",value:"usa"}],r=[{name:"Alberta",value:"alberta"},{name:"Alberta",value:"alberta"},{name:"Alberta",value:"alberta"},{name:"Alberta",value:"alberta"}],[u,N]=t.useState(""),[y,ie]=t.useState(!1),[B,ne]=t.useState(""),[F,de]=t.useState(""),[T,oe]=t.useState(""),[M,ce]=t.useState(""),[U,me]=t.useState(""),[ue,pe]=t.useState("usa"),[he,xe]=t.useState("alberta"),[A,fe]=t.useState(""),[O,ge]=t.useState(""),[be,ye]=t.useState(!1),je=ae().shape({email:d().required("Email is Required!"),firstName:d().nullable(),lastName:d().required("Last Name is Required!"),address:d().required("Address is Required!"),appartment:d().nullable(),city:d().required("City is Required!"),country:d().required("Country is Required!"),province:d().required("Province is Required!"),postalCode:d().required("Postal Code is Required!"),phone:d().required("Phone is Required!")}),[Ne,D]=t.useState(!1),ve=async()=>{D(!0);const s=await CheckZip({zip:A});console.log(s),s.status==200,D(!1)};t.useEffect(()=>{A.length===5&&ve()},[A]);const H=s=>{const{name:m,checked:f}=s.target;m==="keepUpdates"&&ie(f),m==="saveAddress"&&ye(f)},[E,Ce]=t.useState(!1),[z,Se]=t.useState("card_payment"),[Q,we]=t.useState({cardNo:"",name:"",expDate:"",code:""}),[qe,Y]=t.useState([]),Re=ae().shape({cardNo:d().matches(/^\d{16}$/,"Must be exactly 16 digits").required("Card Number is Required!"),name:d().required("Card Holder Name is Required!"),expDate:d().required("Card Expiry Date is Required!"),code:d().required("Security Code is Required!")}),[Z,_]=t.useState(null),[K,V]=t.useState(null),[l,G]=t.useState(!1),[R,Ke]=t.useState([]),[I,Ve]=t.useState((c==null?void 0:c.length)>0?"delivery":"pickup"),ke=async()=>{try{await Re.validate(Q,{abortEarly:!1}),_("card")}catch(s){if(s){let m=s.errors;Y(m),m.forEach(f=>{$(f,"error",1e3)});return}else Y([])}},Pe=async()=>{_("affirm")},Ae=async()=>{_("paypal")},De=async()=>{try{const s={email:u,firstName:B,lastName:F,address:T,appartment:M,city:U,country:ue,province:he,postalCode:b,phone:O};return await je.validate(s,{abortEarly:!1}),V(s),y&&R.push(u),!0}catch(s){if(s){let m=s.errors;G(m),m.forEach(f=>{$(f,"error",1e3)});return}else G([])}},j=g(s=>s.order.orderInfo);g(s=>s.cart.pickupInfo);const J=g(s=>s.cart.tax),W=g(s=>s.cart.total),X=g(s=>s.cart.grandTotal),ee=g(s=>s.cart.cartId),Ee=async s=>{s.preventDefault(),i(!0);let m=!1;if(E?m=await De():(V({...j}),j!=null&&j.keepUpdates&&R.push(j.email),m=!0),console.log(m),m){switch(z){case"card_payment":await ke();break;case"affirm_payment":await Pe();break;case"paypal_payment":await Ae();break}let f;I==="delivery"?f={cartId:ee,orderType:I,paymentInfo:Z,orderInfo:{...j,shipping:q.shipping},billingInfo:K,newsEmail:R,tax:J,total:W,grandTotal:X}:f={cartId:ee,orderType:I,paymentInfo:Z,orderInfo:{...j,shipping:"Free"},billingInfo:K,newsEmail:R,tax:J,total:W,grandTotal:X};const se=await Ze(f);console.log(se),se.status===200?(i(!1),o("/mycart/order-success")):($("Order Processing Error!","error",1e3),i(!1))}else i(!1)};return e.jsxs(e.Fragment,{children:["  ",h?e.jsx(ze,{}):e.jsxs(Me,{children:[e.jsx("img",{src:"/login_logo.webp",alt:""}),e.jsx(Ue,{}),e.jsxs("div",{className:"border border-b31 p-3 flex flex-col gap-3 rounded-md",children:[e.jsx(k,{title:"Contact",detail:x,textStyle:"font-medium"}),e.jsx("hr",{}),e.jsx(k,{title:"Ship to",detail:`${n},${S} ,${C}, ${w},${b}`,textStyle:"font-medium"}),e.jsx("hr",{}),(c==null?void 0:c.length)>0?e.jsx(k,{title:"Method",detail:`Home Delivery · $${q.shipping}`,subtitle:"1 to 3 Business Days",textStyle:"font-medium"}):null,(a==null?void 0:a.length)>0?e.jsx(k,{title:"Method",detail:"Self Pickup · Free",subtitle:"Always Ready!",textStyle:"font-medium"}):null]}),e.jsx(He,{card:Q,setCard:we,cardErrors:qe,payment:z,setPayment:Se,billing:E,setBilling:Ce}),e.jsxs("div",{className:`${E?"flex flex-col":"hidden"} duration-300  border-[1px] border-b31 rounded-md mt-3 px-2 py-2`,children:[e.jsxs("div",{className:"space-y-14px [&>*]:text-b16 [&>*]:text-sm",children:[e.jsx("h3",{className:"!text-lg font-medium text-b16",children:"Billing information"}),e.jsx(p,{width:"full",name:"Email",title:"Email",iscompulsory:"false",type:"text",value:u,onChange:s=>N(s.target.value),error:!!(l&&l.includes("Email is Required!")),errormessage:"Email is Required!",placeholder:"abc@gmail.com"}),e.jsx(v.Checkbox,{onChange:s=>H(s),checked:y,defaultChecked:!1,name:"keepUpdates",id:"keep-me-update",label:"Keep me up to date on news and exclusive offers",className:"checked:bg-black border-b31",ripple:!1})]}),e.jsxs("div",{className:"space-y-14px mt-8",children:[e.jsx("h3",{className:"text-sm font-medium text-b16",children:"Shipping address"}),e.jsxs("div",{className:"grid grid-cols-2 gap-3",children:[e.jsx(p,{width:"full",name:"firstName",title:"",iscompulsory:"false",type:"text",value:B,onChange:s=>ne(s.target.value),error:!!(l&&l.includes("First Name is Required!")),errormessage:"First Name is Required!",placeholder:"First Name (optional)"}),e.jsx(p,{width:"full",name:"lastName",title:"",iscompulsory:"false",type:"text",value:F,onChange:s=>de(s.target.value),error:!!(l&&l.includes("Last Name is Required!")),errormessage:"Last Name is Required!",placeholder:"Last Name"}),e.jsxs("div",{className:"col-span-2 space-y-3",children:[e.jsx(p,{width:"full",name:"address",title:"",iscompulsory:"false",type:"text",value:T,onChange:s=>oe(s.target.value),error:!!(l&&l.includes("Address is Required!")),errormessage:"Address is Required!",placeholder:"Address"}),e.jsx(p,{width:"full",name:"appartment",title:"",iscompulsory:"false",type:"text",value:M,onChange:s=>ce(s.target.value),error:!!(l&&l.includes("Apartment, suite is Required!")),errormessage:"Apartment, suite is Required!",placeholder:"Apartment, suite, etc. (optional)"}),e.jsx(p,{width:"full",name:"city",title:"",iscompulsory:"false",type:"text",value:U,onChange:s=>me(s.target.value),error:!!(l&&l.includes("City is Required!")),errormessage:"City is Required!",placeholder:"City"}),e.jsxs("div",{className:"grid grid-cols-2 md:grid-cols-3 gap-14px",children:[e.jsx(te,{setState:pe,id:"country_region",label:"Country / region",Options:P}),e.jsx(te,{setState:xe,id:"province",label:"Province",Options:r}),e.jsxs("div",{className:"relative  col-span-2 md:col-span-1 [&>*]:h-full",children:[Ne?e.jsx("div",{className:"absolute flex rounded-lg items-center w-full justify-end px-2",children:e.jsx("img",{src:"/loader-bg.gif",className:"w-4 h-4"})}):null,e.jsx(p,{width:"full",name:"postalCode",title:"",iscompulsory:"false",type:"text",value:b,onChange:s=>fe(s.target.value),error:!!(l&&l.includes("Postal Code is Required!")),errormessage:"Postal Code is Required!",placeholder:"Postal Code"})]})]}),e.jsxs("div",{className:"relative",children:[e.jsx(p,{width:"full",name:"phone",title:"",iscompulsory:"false",type:"text",value:O,onChange:s=>ge(s.target.value),error:!!(l&&l.includes("Phone is Required!")),errormessage:"Phone is Required!",placeholder:"Phone"}),e.jsx("div",{className:"absolute right-3 top-3",children:e.jsx(Fe,{className:"text-2xl text-b3"})})]}),e.jsx("div",{className:"[&>*]:text-b16 [&>*]:text-sm",children:e.jsx(v.Checkbox,{onChange:s=>H(s),id:"save-information",name:"saveAddress",checked:be,defaultChecked:!1,label:"Save this information for next time",className:"checked:bg-black border-b31",ripple:!1})})]})]})]})]}),e.jsxs("div",{className:"flex justify-between items-center w-full mt-5",children:[e.jsxs(Te,{to:"/mycart/shipping",className:"flex gap-1 items-center",children:[e.jsx(Oe,{}),e.jsx("span",{className:"text-sm font-medium text-b3",children:"Return to shipping"})]}),e.jsx("button",{type:"button",onClick:s=>Ee(s),className:"py-3 px-6 text-xs rounded-lg bg-b3 text-white",children:"Pay Now"})]})]})]})};export{ts as default};