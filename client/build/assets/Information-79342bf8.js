import{r as a,f as p,u as ie,e as le,j as s,L as K,T as M,Y as ne,z as $}from"./index-9086772f.js";import{v as ce}from"./MainLayout-9f08b4ec.js";import{r as H,al as oe,H as de}from"./ScrollToTop-9454a300.js";import{C as ue,B as me,L as pe}from"./LeftArrowSvg-0eb9ccc8.js";import{C as Q}from"./CustomSelect-d9f23f4f.js";import{T as d}from"./TextInput-6ff12c7c.js";import{c as he,a as l}from"./index.esm-667a8c3e.js";import"./index.esm-d1123c14.js";import"./index-57df3b0a.js";import"./CustomInput-56607528.js";const qe=()=>{const V=async()=>{const e=await oe();console.log(e)};a.useEffect(()=>{V()},[]);const Y=[{name:"USA",value:"usa"}],W=[{name:"Alberta",value:"alberta"},{name:"Alberta",value:"alberta"},{name:"Alberta",value:"alberta"},{name:"Alberta",value:"alberta"}],X=he().shape({email:l().required("Email is Required!"),firstName:l().nullable(),lastName:l().required("Last Name is Required!"),address:l().required("Address is Required!"),appartment:l().nullable(),city:l().required("City is Required!"),country:l().required("Country is Required!"),province:l().required("Province is Required!"),postalCode:l().required("Postal Code is Required!"),phone:l().required("Phone is Required!")}),u=p(e=>e.cart.deliveryOrders),f=p(e=>e.cart.pickupOrders),t=p(e=>e.order.orderInfo),E=ie();(u==null?void 0:u.length)===0&&(f==null?void 0:f.length)===0&&E("/mycart");const m=p(e=>e.cart.deliveryInfo),[P,g]=a.useState(""),[L,b]=a.useState(!1),[_,y]=a.useState(""),[F,v]=a.useState(""),[U,j]=a.useState(""),[z,N]=a.useState(""),[O,C]=a.useState(""),[I,S]=a.useState("usa"),[T,q]=a.useState("alberta"),[n,x]=a.useState(""),[Z,R]=a.useState(""),[w,A]=a.useState(!1),D=p(e=>e.user.auth),ee=()=>{const e=JSON.parse(localStorage.getItem("neu_customer_address"));!D&&e?(g(e.email),b(e.keepUpdates),y(e.firstName),v(e.lastName),j(e.address),N(e.appartment),C(e.city),S(e.country),q(e.province),x(e.postalCode),R(e.phone),A(e.saveAddress)):t!=null&&t.email?(g(t==null?void 0:t.email),b(!0),y(t==null?void 0:t.firstName),v(t==null?void 0:t.lastName),j(t==null?void 0:t.address),N(t==null?void 0:t.appartment),C(t==null?void 0:t.city),S(t==null?void 0:t.country),q(t==null?void 0:t.province),x(t==null?void 0:t.postalCode),R(t==null?void 0:t.phone),A(!0)):x(m.location)};a.useEffect(()=>{ee()},[]);const[r,B]=a.useState([]),k=le(),G=e=>{const{name:c,checked:o}=e.target;c==="keepUpdates"&&b(o),c==="saveAddress"&&A(o)},se=async e=>{if(e.preventDefault(),!(m!=null&&m.shipping)){M("Shipping Not Available!","error",1e3);return}const c={email:P,firstName:_,lastName:F,address:U,appartment:z,city:O,country:I,state:T,postalCode:n,phone:Z,saveAddress:w,keepUpdates:L,province:T};w&&(D||localStorage.setItem("neu_customer_address",JSON.stringify(c)));try{await X.validate(c,{abortEarly:!1}),k(ne(c)),E("/mycart/shipping")}catch(o){if(o){let i=o.errors;B(i),i.forEach(re=>{M(re,"error",1e3)})}else B([])}},[te,h]=a.useState(!1),J=p(e=>e.cart.cartId),ae=async()=>{var c,o;h(!0);const e=await de({zip:n});if(e.status==200){const i=await k($({cartId:J,deliveryInfo:{...m,location:n,shipping:e.data.zip.location.rate}}));(c=i==null?void 0:i.payload)==null||c.status,h(!1)}else{const i=k($({cartId:J,deliveryInfo:{...m,location:n,shipping:!1}}));(o=i==null?void 0:i.payload)==null||o.status,h(!1)}};return a.useEffect(()=>{(n==null?void 0:n.length)===5&&(u==null?void 0:u.length)>0&&ae()},[n]),s.jsx(s.Fragment,{children:s.jsxs(ue,{children:[s.jsx(K,{to:"/",children:s.jsx("img",{src:"/login_logo.webp",alt:""})}),s.jsx(me,{}),s.jsxs("fieldset",{className:"border border-b31 rounded-md pb-5 px-5 pt-2",children:[s.jsx("legend",{className:"mx-auto text-b16 font-medium text-sm px-3",children:"Express checkout"}),s.jsxs("div",{className:"grid grid-cols-3 gap-2",children:[s.jsx("button",{className:"rounded text-white flex justify-center p-3 bg-[#5A31F4]",children:s.jsx("img",{src:"/payment/shoppay.webp",alt:"shoppay",className:"h-[23px] object-contain"})}),s.jsx("button",{className:"rounded text-white flex justify-center p-3 bg-[#113984]",children:s.jsx("img",{src:"/payment/paypal.webp",alt:"shoppay",className:"h-[23px] object-contain"})}),s.jsx("button",{className:"rounded text-white flex justify-center p-3 bg-black",children:s.jsx("img",{src:"/payment/pay.webp",alt:"shoppay",className:"h-[23px] object-contain"})})]})]}),s.jsx("div",{className:"text_between_line my-8",children:"OR"}),s.jsxs("form",{onSubmit:se,children:[s.jsxs("div",{className:"space-y-14px [&>*]:text-b16 [&>*]:text-sm",children:[s.jsx("h3",{className:"text-sm font-medium text-b16",children:"Contact information"}),s.jsx(d,{width:"full",name:"Email",title:"Email",iscompulsory:"false",type:"text",value:P,onChange:e=>g(e.target.value),error:!!(r&&r.includes("Email is Required!")),errormessage:"Email is Required!",placeholder:"abc@gmail.com"}),s.jsx(H.Checkbox,{onChange:e=>G(e),checked:L,defaultChecked:!1,name:"keepUpdates",id:"keep-me-update",label:"Keep me up to date on news and exclusive offers",className:"checked:bg-black border-b31",ripple:!1})]}),s.jsxs("div",{className:"space-y-14px mt-8",children:[s.jsx("h3",{className:"text-lg font-medium text-b16",children:"Shipping address"}),s.jsxs("div",{className:"grid grid-cols-2 gap-3",children:[s.jsx(d,{width:"full",name:"firstName",title:"",iscompulsory:"false",type:"text",value:_,onChange:e=>y(e.target.value),error:!!(r&&r.includes("First Name is Required!")),errormessage:"First Name is Required!",placeholder:"First Name (optional)"}),s.jsx(d,{width:"full",name:"lastName",title:"",iscompulsory:"false",type:"text",value:F,onChange:e=>v(e.target.value),error:!!(r&&r.includes("Last Name is Required!")),errormessage:"Last Name is Required!",placeholder:"Last Name"}),s.jsxs("div",{className:"col-span-2 space-y-3",children:[s.jsx(d,{width:"full",name:"address",title:"",iscompulsory:"false",type:"text",value:U,onChange:e=>j(e.target.value),error:!!(r&&r.includes("Address is Required!")),errormessage:"Address is Required!",placeholder:"Address"}),s.jsx(d,{width:"full",name:"appartment",title:"",iscompulsory:"false",type:"text",value:z,onChange:e=>N(e.target.value),error:!!(r&&r.includes("Apartment, suite is Required!")),errormessage:"Apartment, suite is Required!",placeholder:"Apartment, suite, etc. (optional)"}),s.jsx(d,{width:"full",name:"city",title:"",iscompulsory:"false",type:"text",value:O,onChange:e=>C(e.target.value),error:!!(r&&r.includes("City is Required!")),errormessage:"City is Required!",placeholder:"City"}),s.jsxs("div",{className:"grid grid-cols-2 md:grid-cols-3 gap-14px",children:[s.jsx(Q,{setState:S,id:"country_region",label:"Country / region",Options:Y}),s.jsx(Q,{setState:q,id:"province",label:"Province",Options:W}),s.jsxs("div",{className:"relative  col-span-2 md:col-span-1 [&>*]:h-full",children:[te?s.jsx("div",{className:"absolute z-40 flex rounded-lg items-center w-full justify-end px-2",children:s.jsx("img",{src:"/loader-bg.gif",className:"w-4 h-4"})}):null,s.jsx(d,{width:"full",name:"postalCode",title:"",iscompulsory:"false",type:"text",value:n,onChange:e=>x(e.target.value),error:!!(r&&r.includes("Postal Code is Required!")),errormessage:"Postal Code is Required!",placeholder:"Postal Code"})]})]}),s.jsxs("div",{className:"relative",children:[s.jsx(d,{width:"full",name:"phone",title:"",iscompulsory:"false",type:"text",value:Z,onChange:e=>R(e.target.value),error:!!(r&&r.includes("Phone is Required!")),errormessage:"Phone is Required!",placeholder:"Phone"}),s.jsx("div",{className:"absolute right-3 top-3",children:s.jsx(ce,{className:"text-2xl text-b3"})})]}),s.jsx("div",{className:"[&>*]:text-b16 [&>*]:text-sm",children:s.jsx(H.Checkbox,{onChange:e=>G(e),id:"save-information",name:"saveAddress",checked:w,defaultChecked:!1,label:"Save this information for next time",className:"checked:bg-black border-b31",ripple:!1})})]})]})]}),s.jsxs("div",{className:"flex justify-between items-center w-full mt-5",children:[s.jsxs(K,{to:"/mycart",className:"flex gap-1 items-center",children:[s.jsx(pe,{}),s.jsx("span",{className:"text-sm font-medium text-b3",children:"Return to Cart"})]}),s.jsx("button",{type:"submit",className:"flex items-center py-3 px-6 text-xs rounded-lg bg-b3 text-white",children:"Continue to Shipping"})]})]})]})})};export{qe as default};