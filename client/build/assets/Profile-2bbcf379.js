import{j as e,u as N,a0 as S,a1 as P,r as s,aA as g,p as w,aB as O,aC as j}from"./index-4a452b3d.js";import{M as B}from"./MyAccount-b3f2b71e.js";import{C as r}from"./CustomInput-14874df3.js";import{c as F}from"./countries-156e514f.js";/* empty css                      */import{G as k}from"./profile-09b02f93.js";const E=({ButtonName:o})=>e.jsx("div",{children:e.jsx("button",{type:"submit",className:"rounded-lg bg-b3 py-3 w-full text-white text-xs font-medium",children:o})}),J=()=>e.jsx(e.Fragment,{children:e.jsx(B,{children:e.jsx(L,{})})}),L=()=>{const o=N(),b=S(),d=P(t=>t.user._id),[m,n]=s.useState(""),[p,l]=s.useState(""),[h,i]=s.useState("yourusername@email.com"),[x,u]=s.useState("+1 000-000-0000"),[a,c]=s.useState(""),[v,D]=s.useState(F),C=async()=>{const t=await k({_id:d});t.status===200?(n(t.data.user.firstName),l(t.data.user.lastName),i(t.data.user.email),u(t.data.user.phone),c(t.data.user.country)):(b(O()),o("/"))},y=async t=>{t.preventDefault();const f=await(await fetch("http://localhost:5000/api/user/update-profile",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({_id:d,firstName:m,lastName:p,email:h,country:a,phone:x}),credentials:"include"})).json();f.status===200?j.success("Profile Updated!",{position:"top-right",autoClose:3e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"light"}):j.error(f.message,{position:"top-right",autoClose:3e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"light"})};return s.useEffect(()=>{C()},[n,l,i,u,c]),e.jsxs(e.Fragment,{children:[e.jsx(g,{position:"top-right",autoClose:5e3,hideProgressBar:!1,newestOnTop:!1,closeOnClick:!0,rtl:!1,pauseOnFocusLoss:!0,draggable:!0,pauseOnHover:!0,theme:"light"}),e.jsxs("form",{onSubmit:y,className:"flex flex-col gap-6 lg:max-w-[432px] w-full",children:[e.jsx(r,{label:"First name",state:m,setState:n}),e.jsx(r,{label:"Last name",state:p,setState:l}),e.jsx(r,{label:"Email Address",type:"email",state:h,setState:i}),e.jsxs("div",{children:[e.jsx("label",{className:"text-b16 font-semibold text-xs block mb-2",children:"Country"}),e.jsxs("div",{className:"relative",children:[e.jsxs("select",{value:a,onChange:t=>c(t.target.value),className:"border border-[rgba(0,0,0,0.16)] rounded-lg h-10 text-sm px-4 w-full outline-none appearance-none",children:[e.jsx("option",{value:a,default:!0,children:a}),v.map(t=>e.jsx("option",{children:t}))]}),e.jsx(w,{className:"absolute right-4 top-3"})]})]}),e.jsx(r,{label:"Phone",state:x,setState:u}),e.jsx(E,{ButtonName:"Save Changes"})]}),e.jsx(g,{})]})};export{L as ProfileData,J as default};
