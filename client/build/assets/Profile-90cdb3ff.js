import{aM as N,j as e,u as S,a0 as P,a1 as O,r as s,k as j,f as w,aN as F,Q as b}from"./index-8a97a798.js";import{M as k}from"./MyAccount-6f9dc9a0.js";import{C as n}from"./CustomInput-596f9cc0.js";import{C as B}from"./CustomButton-0b46914d.js";import{c as E}from"./countries-5d447428.js";const L=async l=>{let a;try{a=await N.post("/api/user/get-profile",l)}catch(r){return r}return a},J=()=>e.jsx(e.Fragment,{children:e.jsx(k,{children:e.jsx(D,{})})}),D=()=>{const l=S(),a=P(),r=O(t=>t.user._id),[d,i]=s.useState(""),[h,u]=s.useState(""),[f,c]=s.useState("yourusername@email.com"),[g,p]=s.useState("+1 000-000-0000"),[o,m]=s.useState(""),[C,U]=s.useState(E),v=async()=>{const t=await L({_id:r});t.status===200?(i(t.data.user.firstName),u(t.data.user.lastName),c(t.data.user.email),p(t.data.user.phone),m(t.data.user.country)):(a(F()),l("/"))},y=async t=>{t.preventDefault();const x=await(await fetch("http://localhost:5000/api/user/update-profile",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({_id:r,firstName:d,lastName:h,email:f,country:o,phone:g}),credentials:"include"})).json();x.status===200?b.success("Profile Updated!",{position:"top-right",autoClose:3e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"light"}):b.error(x.message,{position:"top-right",autoClose:3e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"light"})};return s.useEffect(()=>{v()},[i,u,c,p,m]),e.jsxs(e.Fragment,{children:[e.jsx(j,{position:"top-right",autoClose:5e3,hideProgressBar:!1,newestOnTop:!1,closeOnClick:!0,rtl:!1,pauseOnFocusLoss:!0,draggable:!0,pauseOnHover:!0,theme:"light"}),e.jsxs("form",{onSubmit:y,className:"flex flex-col gap-6 lg:max-w-[432px] w-full",children:[e.jsx(n,{label:"First name",state:d,setState:i}),e.jsx(n,{label:"Last name",state:h,setState:u}),e.jsx(n,{label:"Email Address",type:"email",state:f,setState:c}),e.jsxs("div",{children:[e.jsx("label",{className:"text-b16 font-semibold text-xs block mb-2",children:"Country"}),e.jsxs("div",{className:"relative",children:[e.jsxs("select",{value:o,onChange:t=>m(t.target.value),className:"border border-[rgba(0,0,0,0.16)] rounded-lg h-10 text-sm px-4 w-full outline-none appearance-none",children:[e.jsx("option",{value:o,default:!0,children:o}),C.map(t=>e.jsx("option",{children:t}))]}),e.jsx(w,{className:"absolute right-4 top-3"})]})]}),e.jsx(n,{label:"Phone",state:g,setState:p}),e.jsx(B,{ButtonName:"Save Changes"})]}),e.jsx(j,{})]})};export{D as ProfileData,J as default};
