import{j as s,a5 as T,r as a,p as U,q as r,al as i,aM as E,v as $,w as u}from"./index-3053c656.js";import{M as G}from"./MyAccount-5f5694dc.js";import{e as H,f as k}from"./profile-d77f08c9.js";const Q=()=>s.jsx(s.Fragment,{children:s.jsxs(G,{children:[s.jsx("h2",{className:"text-2xl font-bold mb-10",children:"Billing Information"}),s.jsx(z,{})]})}),z=()=>{const n=T(e=>e.user._id),[P,F]=a.useState(""),[c,m]=a.useState(""),[g,h]=a.useState(""),[f,p]=a.useState(""),[q,x]=a.useState(""),[I,C]=a.useState("usa"),[y,R]=a.useState(""),[B,A]=a.useState("alabama"),[b,S]=a.useState(""),[j,v]=a.useState(""),N=async()=>{const e=await H({_id:n});e.status===200&&e.data.billingAddress&&(F(e.data.billingAddress._id),m(e.data.billingAddress.email),h(e.data.billingAddress.firstName),p(e.data.billingAddress.lastName),x(e.data.billingAddress.address),C(e.data.billingAddress.country),R(e.data.billingAddress.city),A(e.data.billingAddress.state),S(e.data.billingAddress.postalCode),v(e.data.billingAddress.phone))};a.useEffect(()=>{N()},[]);const L=U().shape({userId:r().required("User Id is Required!"),email:r().required("Email is Required!"),firstName:r().nullable(),lastName:r().required("Last Name is Required!"),address:r().required("Address is Required!"),city:r().required("City is Required!"),country:r().required("Country is Required!"),state:r().required("State is Required!"),postalCode:r().required("Postal Code is Required!"),phone:r().required("Phone is Required!")}),[M,o]=a.useState(!1),[t,w]=a.useState([]),_=async e=>{e.preventDefault(),o(!0);try{const d={userId:n,email:c,firstName:g,lastName:f,address:q,city:y,country:I,state:B,postalCode:b,phone:j};await L.validate(d,{abortEarly:!1});const l=await k({...d,id:P});l.status===200?(o(!1),u(l.data.msg,"success",1e3),N()):(o(!1),u(l.data.message,"error",1e3))}catch(d){if(o(!1),d){let l=d.errors;w(l),l.forEach(D=>{u(D,"error",1e3)})}else w([])}};return s.jsx(s.Fragment,{children:s.jsxs("form",{onSubmit:_,className:"lg:max-w-[432px] w-full flex flex-col gap-6",children:[s.jsx(i,{title:"Email",width:"full",value:c,onChange:e=>m(e.target.value),error:!!(t&&t.includes("Email is Required!")),errormessage:"Email is Required!",placeholder:"Email"}),s.jsx(i,{title:"First Name",width:"full",value:g,onChange:e=>h(e.target.value),error:!!(t&&t.includes("First Name is Required!")),errormessage:"First Name is Required!",placeholder:"First Name"}),s.jsx(i,{title:"Last Name",width:"full",value:f,onChange:e=>p(e.target.value),error:!!(t&&t.includes("Last Name is Required!")),errormessage:"Last Name is Required!",placeholder:"Last Name"}),s.jsx(i,{title:"Address",width:"full",value:q,onChange:e=>x(e.target.value),error:!!(t&&t.includes("Address is Required!")),errormessage:"Address is Required!",placeholder:"Address"}),s.jsx(E,{title:"Country",widthFull:"true",options:[{title:"United States",slug:"usa"}],onChange:e=>C(e.target.value)}),s.jsx(E,{title:"State",widthFull:"true",options:["Alabama"],onChange:e=>A(e.target.value)}),s.jsx(i,{title:"City",width:"full",value:y,onChange:e=>R(e.target.value),error:!!(t&&t.includes("City is Required!")),errormessage:"City is Required!",placeholder:"City"}),s.jsx(i,{title:"Post Code",width:"full",value:b,onChange:e=>S(e.target.value),error:!!(t&&t.includes("Postal Code is Required!")),errormessage:"Postal Code is Required!",placeholder:"Postal Code"}),s.jsx(i,{title:"Phone",width:"full",value:j,onChange:e=>v(e.target.value),error:!!(t&&t.includes("Phone is Required!")),errormessage:"Phone is Required!",placeholder:"Phone"}),s.jsx("button",{type:"submit",className:"flex justify-center items-center rounded-lg bg-b3 py-3 w-full text-white text-xs font-medium",children:M?s.jsx($,{style:"w-4"}):"Save Changes"})]})})};export{z as BillingInformationData,Q as default};
