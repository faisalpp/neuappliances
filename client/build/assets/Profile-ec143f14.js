import{j as e,u as S,a6 as C,a5 as v,r as s,t as w,aN as P,w as j}from"./index-0435dc8f.js";import{M as F}from"./MyAccount-264129f8.js";import{C as o}from"./CustomInput-99a6566e.js";import{G as O}from"./profile-23e1a255.js";const T=({ButtonName:r})=>e.jsx("div",{children:e.jsx("button",{type:"submit",className:"rounded-lg bg-b3 py-3 w-full text-white text-xs font-medium",children:r})}),E=["USA"],_=()=>e.jsx(e.Fragment,{children:e.jsx(F,{children:e.jsx(L,{})})}),L=()=>{const r=S(),g=C(),d=v(t=>t.user._id),[m,n]=s.useState(""),[p,l]=s.useState(""),[x,i]=s.useState("yourusername@email.com"),[f,u]=s.useState("+1 000-000-0000"),[a,c]=s.useState(""),[b,U]=s.useState(E),y=async()=>{const t=await O({_id:d});t.status===200?(n(t.data.user.firstName),l(t.data.user.lastName),i(t.data.user.email),u(t.data.user.phone),c(t.data.user.country)):(g(P()),r("/"))},N=async t=>{t.preventDefault();const h=await(await fetch("http://localhost:5000/api/user/update-profile",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({_id:d,firstName:m,lastName:p,email:x,country:a,phone:f}),credentials:"include"})).json();h.status===200?j("Profile Updated!","success",1e3):j(h.data.message,"success",1e3)};return s.useEffect(()=>{y()},[n,l,i,u,c]),e.jsxs(e.Fragment,{children:[e.jsx(ToastContainer,{position:"top-right",autoClose:5e3,hideProgressBar:!1,newestOnTop:!1,closeOnClick:!0,rtl:!1,pauseOnFocusLoss:!0,draggable:!0,pauseOnHover:!0,theme:"light"}),e.jsxs("form",{onSubmit:N,className:"flex flex-col gap-6 lg:max-w-[432px] w-full",children:[e.jsx(o,{label:"First name",state:m,setState:n}),e.jsx(o,{label:"Last name",state:p,setState:l}),e.jsx(o,{label:"Email Address",type:"email",state:x,setState:i}),e.jsxs("div",{children:[e.jsx("label",{className:"text-b16 font-semibold text-xs block mb-2",children:"Country"}),e.jsxs("div",{className:"relative",children:[e.jsxs("select",{value:a,onChange:t=>c(t.target.value),className:"border border-[rgba(0,0,0,0.16)] rounded-lg h-10 text-sm px-4 w-full outline-none appearance-none",children:[e.jsx("option",{value:a,default:!0,children:a}),b.map(t=>e.jsx("option",{children:t}))]}),e.jsx(w,{className:"absolute right-4 top-3"})]})]}),e.jsx(o,{label:"Phone",state:f,setState:u}),e.jsx(T,{ButtonName:"Save Changes"})]}),e.jsx(ToastContainer,{})]})};export{L as ProfileData,_ as default};