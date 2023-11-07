import{r as t,bG as ie,bH as le,j as s,ag as ne,ah as i,a0 as d,u as oe,q as J,$ as ce,L as O,ai as c,aJ as T,aH as de,bI as ue,bJ as me,ac as pe,bK as G}from"./index-08dd1ef5.js";import{C as he,B as xe,L as fe}from"./LeftArrowSvg-989b2970.js";import{C as Q}from"./CustomSelect-0b267130.js";import"./CustomInput-31880599.js";const ge=()=>{t.useState(null);const p=ie();return le(),p.elements({mode:"payment",amount:1099,currency:"usd"}).create("expressCheckout"),s.jsxs("fieldset",{className:"border border-b31 rounded-md pb-5 px-5 pt-2",children:[s.jsx("legend",{className:"mx-auto text-b16 font-medium text-sm px-3",children:"Express checkout"}),s.jsxs("div",{className:"grid grid-cols-3 gap-2",children:[s.jsx("button",{className:"rounded text-white flex justify-center p-3 bg-[#5A31F4]",children:s.jsx("img",{src:"/payment/shoppay.webp",alt:"shoppay",className:"h-[23px] object-contain"})}),s.jsx("button",{className:"rounded text-white flex justify-center p-3 bg-[#113984]",children:s.jsx("img",{src:"/payment/paypal.webp",alt:"shoppay",className:"h-[23px] object-contain"})}),s.jsx("expressCheckoutElement",{})]})]})},Ce=()=>{const p=[{name:"USA",value:"usa"}],f=[{name:"Alberta",value:"alberta"},{name:"Alberta",value:"alberta"},{name:"Alberta",value:"alberta"},{name:"Alberta",value:"alberta"}],V=ne().shape({email:i().required("Email is Required!"),firstName:i().nullable(),lastName:i().required("Last Name is Required!"),address:i().required("Address is Required!"),appartment:i().nullable(),city:i().required("City is Required!"),country:i().required("Country is Required!"),province:i().required("Province is Required!"),postalCode:i().required("Postal Code is Required!"),phone:i().required("Phone is Required!")}),u=d(e=>e.cart.deliveryOrders),h=d(e=>e.cart.pickupOrders);d(e=>e.order.orderInfo);const g=oe();t.useEffect(()=>{(u==null?void 0:u.length)===0&&(h==null?void 0:h.length)===0&&(J("Cart is Empty","error",1e3),g("/mycart"))},[]);const b=d(e=>e.cart.deliveryInfo),[y,v]=t.useState(""),[j,C]=t.useState(!1),[N,q]=t.useState(""),[S,R]=t.useState(""),[A,w]=t.useState(""),[k,E]=t.useState(""),[P,I]=t.useState(""),[M,L]=t.useState("usa"),[F,U]=t.useState("alberta"),[l,_]=t.useState(""),[z,D]=t.useState(""),[K,Z]=t.useState(!1),W=d(e=>e.user.auth),X=e=>{v(e.email),C(e.keepUpdates),q(e.firstName),R(e.lastName),w(e.address),E(e.appartment),I(e.city),L(e.country),U(e.province),_(e.postalCode),D(e.phone),Z(e.saveAddress)},Y=d(e=>e.user._id),ee=async()=>{if(W){const e=await ue({userId:Y});e.status===200&&e.data.shippingAddress&&X(e.data.shippingAddress)}};t.useEffect(()=>{ee()},[]);const[a,$]=t.useState([]),x=ce(),B=e=>{const{name:n,checked:o}=e.target;n==="keepUpdates"&&C(o),n==="saveAddress"&&Z(o)},se=async e=>{e.preventDefault();const n={email:y,firstName:N,lastName:S,address:A,appartment:k,city:P,country:M,state:F,postalCode:l,phone:z,saveAddress:K,keepUpdates:j,province:F};try{await V.validate(n,{abortEarly:!1}),x(me(n)),g("/mycart/shipping")}catch(o){if(o){let r=o.errors;$(r),r.forEach(re=>{J(re,"error",1e3)})}else $([])}},[te,m]=t.useState(!1),H=d(e=>e.cart.cartId),ae=async()=>{var n,o;m(!0);const e=await pe({zip:l});if(e.status==200){const r=await x(G({cartId:H,deliveryInfo:{...b,location:l,shipping:e.data.zip.location.rate}}));(n=r==null?void 0:r.payload)==null||n.status,m(!1)}else{const r=x(G({cartId:H,deliveryInfo:{...b,location:l,shipping:!1}}));(o=r==null?void 0:r.payload)==null||o.status,m(!1)}};return t.useEffect(()=>{(l==null?void 0:l.length)===5&&(u==null?void 0:u.length)>0&&ae()},[l]),s.jsx(s.Fragment,{children:s.jsxs(he,{children:[s.jsx(O,{to:"/",children:s.jsx("img",{src:"/login_logo.webp",alt:""})}),s.jsx(xe,{}),s.jsx(ge,{}),s.jsx("div",{className:"text_between_line my-8",children:"OR"}),s.jsxs("form",{onSubmit:se,children:[s.jsxs("div",{className:"space-y-14px [&>*]:text-b16 [&>*]:text-sm",children:[s.jsx("h3",{className:"text-sm font-medium text-b16",children:"Contact information"}),s.jsx(c,{width:"full",name:"Email",title:"Email",iscompulsory:"false",type:"text",value:y,onChange:e=>v(e.target.value),error:!!(a&&a.includes("Email is Required!")),errormessage:"Email is Required!",placeholder:"abc@gmail.com"}),s.jsx(T.Checkbox,{onChange:e=>B(e),checked:j,defaultChecked:!1,name:"keepUpdates",id:"keep-me-update",label:"Keep me up to date on news and exclusive offers",className:"checked:bg-black border-b31",ripple:!1})]}),s.jsxs("div",{className:"space-y-14px mt-8",children:[s.jsx("h3",{className:"text-lg font-medium text-b16",children:"Shipping address"}),s.jsxs("div",{className:"grid grid-cols-2 gap-3",children:[s.jsx(c,{width:"full",name:"firstName",title:"",iscompulsory:"false",type:"text",value:N,onChange:e=>q(e.target.value),error:!!(a&&a.includes("First Name is Required!")),errormessage:"First Name is Required!",placeholder:"First Name (optional)"}),s.jsx(c,{width:"full",name:"lastName",title:"",iscompulsory:"false",type:"text",value:S,onChange:e=>R(e.target.value),error:!!(a&&a.includes("Last Name is Required!")),errormessage:"Last Name is Required!",placeholder:"Last Name"}),s.jsxs("div",{className:"col-span-2 space-y-3",children:[s.jsx(c,{width:"full",name:"address",title:"",iscompulsory:"false",type:"text",value:A,onChange:e=>w(e.target.value),error:!!(a&&a.includes("Address is Required!")),errormessage:"Address is Required!",placeholder:"Address"}),s.jsx(c,{width:"full",name:"appartment",title:"",iscompulsory:"false",type:"text",value:k,onChange:e=>E(e.target.value),error:!!(a&&a.includes("Apartment, suite is Required!")),errormessage:"Apartment, suite is Required!",placeholder:"Apartment, suite, etc. (optional)"}),s.jsx(c,{width:"full",name:"city",title:"",iscompulsory:"false",type:"text",value:P,onChange:e=>I(e.target.value),error:!!(a&&a.includes("City is Required!")),errormessage:"City is Required!",placeholder:"City"}),s.jsxs("div",{className:"grid grid-cols-2 md:grid-cols-3 gap-14px",children:[s.jsx(Q,{setState:L,id:"country_region",label:"Country / region",Options:p}),s.jsx(Q,{setState:U,id:"province",label:"Province",Options:f}),s.jsxs("div",{className:"relative  col-span-2 md:col-span-1 [&>*]:h-full",children:[te?s.jsx("div",{className:"absolute z-40 flex rounded-lg items-center w-full justify-end px-2",children:s.jsx("img",{src:"/loader-bg.gif",className:"w-4 h-4"})}):null,s.jsx(c,{width:"full",name:"postalCode",title:"",iscompulsory:"false",type:"text",value:l,onChange:e=>_(e.target.value),error:!!(a&&a.includes("Postal Code is Required!")),errormessage:"Postal Code is Required!",placeholder:"Postal Code"})]})]}),s.jsxs("div",{className:"relative",children:[s.jsx(c,{width:"full",name:"phone",title:"",iscompulsory:"false",type:"text",value:z,onChange:e=>D(e.target.value),error:!!(a&&a.includes("Phone is Required!")),errormessage:"Phone is Required!",placeholder:"Phone"}),s.jsx("div",{className:"absolute right-3 top-3",children:s.jsx(de,{className:"text-2xl text-b3"})})]}),s.jsx("div",{className:"[&>*]:text-b16 [&>*]:text-sm",children:s.jsx(T.Checkbox,{onChange:e=>B(e),id:"save-information",name:"saveAddress",checked:K,defaultChecked:!1,label:"Save this information for next time",className:"checked:bg-black border-b31",ripple:!1})})]})]})]}),s.jsxs("div",{className:"flex justify-between items-center w-full mt-5",children:[s.jsxs(O,{to:"/mycart",className:"flex gap-1 items-center",children:[s.jsx(fe,{}),s.jsx("span",{className:"text-sm font-medium text-b3",children:"Return to Cart"})]}),s.jsx("button",{type:"submit",className:"flex items-center py-3 px-6 text-xs rounded-lg bg-b3 text-white",children:"Continue to Shipping"})]})]})]})})};export{Ce as default};
