import{j as e,r as t,aE as Te,q as d,a0 as Ve,ag as Ge,ah as c,aF as ve,ai as o,aG as Ne,aH as Se,ac as be}from"./index-08dd1ef5.js";import{M as $e}from"./MyAccount-91c5dc93.js";import{d as Qe,a as Je,c as Ke,b as We,u as Xe}from"./profile-6df981de.js";import{B as v}from"./BtnLoader-bf44055c.js";import{C}from"./CustomSelect-0b267130.js";import{a as Ce}from"./index.esm-1480e81c.js";const Ye=()=>{const u={maskType:"alpha"};return e.jsx(e.Fragment,{children:e.jsxs("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[e.jsx("mask",{id:"editSvg",style:u,maskUnits:"userSpaceOnUse",x:"0",y:"0",width:"24",height:"24",children:e.jsx("rect",{width:"24",height:"24",fill:"#D9D9D9"})}),e.jsx("g",{mask:"url(#editSvg)",children:e.jsx("path",{d:"M2 24.0002V20.0002H22V24.0002H2ZM4 18.0002V14.2502L13.05 5.20018L16.8 8.95018L7.75 18.0002H4ZM6 16.0002H6.9L14 8.95018L13.05 8.00018L6 15.1002V16.0002ZM17.925 7.85018L14.175 4.10018L15.975 2.30018C16.1583 2.10018 16.3917 2.00418 16.675 2.01218C16.9583 2.02085 17.1917 2.11685 17.375 2.30018L19.725 4.65018C19.9083 4.83351 20 5.06285 20 5.33818C20 5.61285 19.9083 5.85018 19.725 6.05018L17.925 7.85018Z",fill:"#22A6AB"})})]})})},es=({loadUpForm:u,upLoad:m,refresh:j,addr:a})=>{const[y,p]=t.useState(!1),N=async(h,w)=>{h.preventDefault(),p(!0);const x=await Qe({id:w});x.status===200?(j(),p(!1),d(x.data.msg,"success",1e3)):(p(!1),d(x.data.message,"error",1e3))};return e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"flex items-center justify-between gap-3",children:[e.jsxs("div",{className:"flex flex-col gap-4",children:[e.jsxs("h3",{className:" font-semibold",children:[a==null?void 0:a.firstName," ",a==null?void 0:a.lastName]}),e.jsx("span",{className:"font-medium text-sm",children:a==null?void 0:a.phone}),e.jsxs("div",{className:"text-sm flex flex-col",children:[e.jsx("span",{children:a==null?void 0:a.address}),e.jsxs("span",{children:[a==null?void 0:a.city," ",a==null?void 0:a.state," ",a==null?void 0:a.postalCode]}),e.jsx("span",{children:a==null?void 0:a.country.toUpperCase()})]})]}),e.jsxs("div",{className:"flex gap-5 sm:gap-10 items-center",children:[m===a._id?e.jsx(v,{style:"w-5"}):e.jsx("span",{onClick:h=>u(h,a._id),className:"cursor-pointer",children:e.jsx(Ye,{})}),y?e.jsx(v,{style:"w-5"}):e.jsx(Te,{onClick:h=>N(h,a._id),className:"text-b3 w-5 h-5 cursor-pointer"})]})]}),e.jsx("hr",{className:"bg-[rgba(0,0,0,0.08)]"})]})},ss=({style:u})=>e.jsx("div",{className:"flex justify-center w-full items-center",children:e.jsx("img",{src:"/not-found.webp",className:u})}),us=()=>{const u=Ve(s=>s.user._id),[m,j]=t.useState([]),[a,y]=t.useState(!1),p=async()=>{y(!0);const s=await Je({_id:u});s.status===200?(y(!1),j(s.data.shippingAddresses)):(y(!1),d(s.data.message,"error",1e3))};t.useEffect(()=>{p()},[]);const N=[{name:"USA",value:"usa"}],h=[{name:"Alberta",value:"alberta"},{name:"Alberta",value:"alberta"},{name:"Alberta",value:"alberta"},{name:"Alberta",value:"alberta"}],[w,x]=t.useState(!1),[we,A]=t.useState(!1),[Ae,q]=t.useState(!1),[F,D]=t.useState(!1),[i,U]=t.useState([]),[qe,S]=t.useState(!1),[z,k]=t.useState(""),[I,_]=t.useState(""),[B,M]=t.useState(""),[O,H]=t.useState(""),[T,V]=t.useState(""),[G,$]=t.useState(""),[Re,Q]=t.useState("usa"),[Le,J]=t.useState("alberta"),[f,K]=t.useState(""),[W,X]=t.useState(""),Pe=async s=>{A(!0),q(!1),D(!1),(await be({zip:f})).status===200?(A(!1),q(!0)):(q(!1),D(!0),A(!1))};t.useEffect(()=>{(f==null?void 0:f.length)===5&&Pe()},[f]);const Y=Ge().shape({userId:c().required("User Id is Required!"),email:c().required("Email is Required!"),firstName:c().nullable(),lastName:c().required("Last Name is Required!"),address:c().required("Address is Required!"),appartment:c().nullable(),city:c().required("City is Required!"),country:c().required("Country is Required!"),state:c().required("Province is Required!"),postalCode:c().required("Postal Code is Required!"),phone:c().required("Phone is Required!")}),Ee=async s=>{s.preventDefault(),F&&d("Invalid Zip Code!","error",1e3),S(!0);try{const l={userId:u,email:z,firstName:I,lastName:B,address:O,appartment:T,city:G,country:Re,state:Le,postalCode:f,phone:W};await Y.validate(l,{abortEarly:!1});const r=await Ke(l);r.status===200?(p(),k(""),_(""),M(""),H(""),V(""),$(""),Q("usa"),J("alberta"),K(""),X(""),x(!1),S(!1),d(r.data.msg,"success",1e3)):(S(!1),d(r.data.message,"error",1e3))}catch(l){if(S(!1),l){let r=l.errors;U(r),r.forEach(Z=>{d(Z,"error",1e3)})}else U([])}},[ee,se]=t.useState(""),[te,ae]=t.useState(""),[re,le]=t.useState(""),[ie,ne]=t.useState(""),[oe,ue]=t.useState(""),[ce,de]=t.useState(""),[Ze,me]=t.useState("usa"),[Fe,pe]=t.useState("alberta"),[g,he]=t.useState(""),[xe,fe]=t.useState(""),[De,R]=t.useState(null),[Ue,L]=t.useState(!1),[ze,ke]=t.useState(""),Ie=async(s,l)=>{s.preventDefault(),ke(l),R(l);const r=await We({id:l});r.status===200&&(se(r.data.shippingAddress.email),ae(r.data.shippingAddress.firstName),le(r.data.shippingAddress.lastName),ne(r.data.shippingAddress.address),ue(r.data.shippingAddress.appartment),de(r.data.shippingAddress.city),me(r.data.shippingAddress.country),pe(r.data.shippingAddress.state),he(r.data.shippingAddress.postalCode),fe(r.data.shippingAddress.phone),L(!0)),R(null)},[_e,P]=t.useState(!1),[Be,E]=t.useState(!1),[ge,je]=t.useState(!1),[n,ye]=t.useState([]),[Me,b]=t.useState(!1),Oe=async s=>{P(!0),E(!1),je(!1),(await be({zip:g})).status===200?(P(!1),E(!0)):(E(!1),je(!0),P(!1))};t.useEffect(()=>{(g==null?void 0:g.length)===5&&Oe()},[g]);const He=async s=>{s.preventDefault(),ge&&d("Invalid Zip Code!","error",1e3),b(!0);try{const l={userId:u,email:ee,firstName:te,lastName:re,address:ie,appartment:oe,city:ce,country:Ze,state:Fe,postalCode:g,phone:xe};await Y.validate(l,{abortEarly:!1});const r=await Xe({...l,id:ze});r.status===200?(p(),L(!1),b(!1),d(r.data.msg,"success",1e3)):(b(!1),d(r.data.message,"error",1e3))}catch(l){if(b(!1),l){let r=l.errors;ye(r),r.forEach(Z=>{d(Z,"error",1e3)})}else ye([])}};return e.jsxs(e.Fragment,{children:[e.jsx(ve,{state:w,setState:x,zindex:"z-[99]",children:e.jsxs("form",{onSubmit:Ee,children:[e.jsx("h3",{className:"font-semibold text-center",children:"Create Shipping Address"}),e.jsxs("div",{className:"space-y-14px [&>*]:text-b16 [&>*]:text-sm",children:[e.jsx("h3",{className:"text-sm font-medium text-b16",children:"Contact information"}),e.jsx(o,{width:"full",name:"Email",title:"Email",iscompulsory:"false",type:"text",value:z,onChange:s=>k(s.target.value),error:!!(i&&i.includes("Email is Required!")),errormessage:"Email is Required!",placeholder:"abc@gmail.com"})]}),e.jsxs("div",{className:"space-y-14px mt-8",children:[e.jsx("h3",{className:"text-lg font-medium text-b16",children:"Shipping address"}),e.jsxs("div",{className:"grid grid-cols-2 gap-3",children:[e.jsx(o,{width:"full",name:"firstName",title:"",iscompulsory:"false",type:"text",value:I,onChange:s=>_(s.target.value),error:!!(i&&i.includes("First Name is Required!")),errormessage:"First Name is Required!",placeholder:"First Name (optional)"}),e.jsx(o,{width:"full",name:"lastName",title:"",iscompulsory:"false",type:"text",value:B,onChange:s=>M(s.target.value),error:!!(i&&i.includes("Last Name is Required!")),errormessage:"Last Name is Required!",placeholder:"Last Name"}),e.jsxs("div",{className:"col-span-2 space-y-3",children:[e.jsx(o,{width:"full",name:"address",title:"",iscompulsory:"false",type:"text",value:O,onChange:s=>H(s.target.value),error:!!(i&&i.includes("Address is Required!")),errormessage:"Address is Required!",placeholder:"Address"}),e.jsx(o,{width:"full",name:"appartment",title:"",iscompulsory:"false",type:"text",value:T,onChange:s=>V(s.target.value),error:!!(i&&i.includes("Apartment, suite is Required!")),errormessage:"Apartment, suite is Required!",placeholder:"Apartment, suite, etc. (optional)"}),e.jsx(o,{width:"full",name:"city",title:"",iscompulsory:"false",type:"text",value:G,onChange:s=>$(s.target.value),error:!!(i&&i.includes("City is Required!")),errormessage:"City is Required!",placeholder:"City"}),e.jsxs("div",{className:"grid grid-cols-2 md:grid-cols-3 gap-14px",children:[e.jsx(C,{setState:Q,id:"country_region",label:"Country / region",Options:N}),e.jsx(C,{setState:J,id:"province",label:"Province",Options:h}),e.jsxs("div",{className:"relative flex items-center col-span-2 md:col-span-1 [&>*]:h-full",children:[we?e.jsx("div",{className:"absolute z-40 flex rounded-lg items-center w-full justify-end px-2",children:e.jsx("img",{src:"/loader-bg.gif",className:"w-4 h-4"})}):null,F?e.jsx("div",{className:"absolute z-40 right-1 flex rounded-lg items-center w-fit justify-end px-2",children:e.jsx(Ne,{className:"w-5 h-5 text-red-500"})}):null,Ae?e.jsx("div",{className:"absolute right-0 z-40 flex rounded-lg items-center w-fit justify-end px-2",children:e.jsx(Ce,{className:"w-5 h-5 text-b10"})}):null,e.jsx(o,{width:"full",name:"postalCode",title:"",iscompulsory:"false",type:"text",value:f,onChange:s=>K(s.target.value),error:!!(i&&i.includes("Postal Code is Required!")),errormessage:"Postal Code is Required!",placeholder:"Postal Code"})]})]}),e.jsxs("div",{className:"relative",children:[e.jsx(o,{width:"full",name:"phone",title:"",iscompulsory:"false",type:"text",value:W,onChange:s=>X(s.target.value),error:!!(i&&i.includes("Phone is Required!")),errormessage:"Phone is Required!",placeholder:"Phone"}),e.jsx("div",{className:"absolute right-3 top-3",children:e.jsx(Se,{className:"text-2xl text-b3"})})]})]})]}),e.jsx("div",{className:"flex w-full justify-center",children:qe?e.jsx(v,{style:"w-5"}):e.jsx("button",{type:"submit",className:"bg-b6 text-white px-3 text-sm py-2 rounded-2xl",children:"Save Addresss"})})]})]})}),e.jsx(ve,{state:Ue,setState:L,zindex:"z-[99]",children:e.jsxs("form",{onSubmit:He,children:[e.jsx("h3",{className:"font-semibold text-center",children:"Update Shipping Address"}),e.jsxs("div",{className:"space-y-14px [&>*]:text-b16 [&>*]:text-sm",children:[e.jsx("h3",{className:"text-sm font-medium text-b16",children:"Contact information"}),e.jsx(o,{width:"full",name:"Email",title:"Email",iscompulsory:"false",type:"text",value:ee,onChange:s=>se(s.target.value),error:!!(n&&n.includes("Email is Required!")),errormessage:"Email is Required!",placeholder:"abc@gmail.com"})]}),e.jsxs("div",{className:"space-y-14px mt-8",children:[e.jsx("h3",{className:"text-lg font-medium text-b16",children:"Shipping address"}),e.jsxs("div",{className:"grid grid-cols-2 gap-3",children:[e.jsx(o,{width:"full",name:"firstName",title:"",iscompulsory:"false",type:"text",value:te,onChange:s=>ae(s.target.value),error:!!(n&&n.includes("First Name is Required!")),errormessage:"First Name is Required!",placeholder:"First Name (optional)"}),e.jsx(o,{width:"full",name:"lastName",title:"",iscompulsory:"false",type:"text",value:re,onChange:s=>le(s.target.value),error:!!(n&&n.includes("Last Name is Required!")),errormessage:"Last Name is Required!",placeholder:"Last Name"}),e.jsxs("div",{className:"col-span-2 space-y-3",children:[e.jsx(o,{width:"full",name:"address",title:"",iscompulsory:"false",type:"text",value:ie,onChange:s=>ne(s.target.value),error:!!(n&&n.includes("Address is Required!")),errormessage:"Address is Required!",placeholder:"Address"}),e.jsx(o,{width:"full",name:"appartment",title:"",iscompulsory:"false",type:"text",value:oe,onChange:s=>ue(s.target.value),error:!!(n&&n.includes("Apartment, suite is Required!")),errormessage:"Apartment, suite is Required!",placeholder:"Apartment, suite, etc. (optional)"}),e.jsx(o,{width:"full",name:"city",title:"",iscompulsory:"false",type:"text",value:ce,onChange:s=>de(s.target.value),error:!!(n&&n.includes("City is Required!")),errormessage:"City is Required!",placeholder:"City"}),e.jsxs("div",{className:"grid grid-cols-2 md:grid-cols-3 gap-14px",children:[e.jsx(C,{setState:me,id:"country_region",label:"Country / region",Options:N}),e.jsx(C,{setState:pe,id:"province",label:"Province",Options:h}),e.jsxs("div",{className:"relative flex items-center col-span-2 md:col-span-1 [&>*]:h-full",children:[_e?e.jsx("div",{className:"absolute z-40 flex rounded-lg items-center w-full justify-end px-2",children:e.jsx("img",{src:"/loader-bg.gif",className:"w-4 h-4"})}):null,ge?e.jsx("div",{className:"absolute z-40 right-1 flex rounded-lg items-center w-fit justify-end px-2",children:e.jsx(Ne,{className:"w-5 h-5 text-red-500"})}):null,Be?e.jsx("div",{className:"absolute right-0 z-40 flex rounded-lg items-center w-fit justify-end px-2",children:e.jsx(Ce,{className:"w-5 h-5 text-b10"})}):null,e.jsx(o,{width:"full",name:"postalCode",title:"",iscompulsory:"false",type:"text",value:g,onChange:s=>he(s.target.value),error:!!(n&&n.includes("Postal Code is Required!")),errormessage:"Postal Code is Required!",placeholder:"Postal Code"})]})]}),e.jsxs("div",{className:"relative",children:[e.jsx(o,{width:"full",name:"phone",title:"",iscompulsory:"false",type:"text",value:xe,onChange:s=>fe(s.target.value),error:!!(n&&n.includes("Phone is Required!")),errormessage:"Phone is Required!",placeholder:"Phone"}),e.jsx("div",{className:"absolute right-3 top-3",children:e.jsx(Se,{className:"text-2xl text-b3"})})]})]})]}),e.jsx("div",{className:"flex w-full justify-center",children:Me?e.jsx(v,{style:"w-5"}):e.jsx("button",{type:"submit",className:"bg-b6 text-white px-3 text-sm py-2 rounded-2xl",children:"Save Addresss"})})]})]})}),e.jsxs($e,{children:[e.jsx("div",{className:"flex justify-end w-full",children:e.jsx("button",{type:"button",onClick:()=>x(!0),className:"bg-b6 text-white px-2 text-sm py-1 rounded-2xl",children:"Add Addresss"})}),a?e.jsx("div",{className:"flex justify-center items-center w-full h-20",children:e.jsx(v,{style:"w-10"})}):(m==null?void 0:m.length)>0?m.map(s=>e.jsx(ts,{upLoading:De,loadUpdateFrom:Ie,refreshData:p,data:s})):e.jsx(ss,{style:"w-32"})]})]})},ts=({upLoading:u,loadUpdateFrom:m,refreshData:j,data:a})=>e.jsx(e.Fragment,{children:e.jsx("div",{className:"flex flex-col gap-10 [&>hr:last-child]:hidden",children:e.jsx(es,{upLoad:u,loadUpForm:m,refresh:j,addr:a})})});export{ts as SavedAddressData,us as default};
