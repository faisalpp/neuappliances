import{u as P,r as t,j as e,e as L,k as p,f as O,B as k,N as F,g as B,Q as h}from"./index-f13c45bd.js";import{c as f}from"./countries-5d447428.js";const D=()=>{const g=P(),[l,j]=t.useState("faisal"),[r,y]=t.useState("qayyum"),[o,b]=t.useState("muhammadfaisal522@gmail.com"),[n,i]=t.useState(""),[c,N]=t.useState("03036542828"),[d,v]=t.useState("Tenda522"),[x,w]=t.useState("Tenda522"),[u,C]=t.useState([]);t.useEffect(()=>{C(f),i(f[0].country)},[]);const S=async s=>{const a={firstName:l,lastName:r,email:o,country:n,phone:c,password:d,confirmPassword:x};s.preventDefault();const m=await B(a);m.status===200?(h.success("Signup Successfull!",{position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"light"}),g("/login")):h.error(m.message,{position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"light"})};return e.jsx(e.Fragment,{children:e.jsxs(L,{children:[e.jsx(p,{position:"top-right",autoClose:5e3,hideProgressBar:!1,newestOnTop:!1,closeOnClick:!0,rtl:!1,pauseOnFocusLoss:!0,draggable:!0,pauseOnHover:!0,theme:"light"}),e.jsxs("div",{className:"flex flex-col space-y-10 items-center pt-20 py-32 w-full",children:[e.jsx("div",{children:e.jsx("img",{src:"login_logo.webp",alt:"login_logo"})}),e.jsxs("form",{onSubmit:S,className:"flex flex-col space-y-5 w-5/12 px-10 py-10 rounded-2xl bg-white border-[1px] border-gray-200",children:[e.jsx("h4",{className:"text-xl font-bold",children:"Register"}),e.jsxs("div",{className:"flex flex-col space-y-1",children:[e.jsx("h5",{className:"text-xs font-semibold",children:"First Name"}),e.jsx("input",{type:"text",value:l,onChange:s=>j(s.target.value),className:"text-sm outline-none border-[1px] border-gray-200 w-full px-4 py-3 rounded-md",placeholder:"Jhon"})]}),e.jsxs("div",{className:"flex flex-col space-y-1",children:[e.jsx("h5",{className:"text-xs font-semibold",children:"Last Name"}),e.jsx("input",{type:"text",value:r,onChange:s=>y(s.target.value),className:"text-sm outline-none border-[1px] border-gray-200 w-full px-4 py-3 rounded-md",placeholder:"Doe"})]}),e.jsxs("div",{className:"flex flex-col space-y-1",children:[e.jsx("h5",{className:"text-xs font-semibold",children:"Email Address"}),e.jsx("input",{type:"text",value:o,onChange:s=>b(s.target.value),className:"text-sm outline-none border-[1px] border-gray-200 w-full px-4 py-3 rounded-md",placeholder:"youremail@mail.com"})]}),e.jsx("div",{className:"flex flex-col space-y-1",children:e.jsxs("div",{children:[e.jsx("label",{className:"text-b16 font-semibold text-xs block mb-2",children:"Country"}),e.jsxs("div",{className:"relative",children:[e.jsx("select",{value:n,onChange:s=>i(s.target.value),className:"border border-[rgba(0,0,0,0.16)] rounded-lg h-10 text-sm px-4 w-full outline-none appearance-none",children:u.length>0?u.map((s,a)=>e.jsx("option",{children:s},a)):e.jsx("option",{children:"No Country Data Found!"})}),e.jsx(O,{className:"absolute right-4 top-3"})]})]})}),e.jsxs("div",{className:"flex flex-col space-y-1",children:[e.jsx("h5",{className:"text-xs font-semibold",children:"Phone"}),e.jsx("input",{type:"text",value:c,onChange:s=>N(s.target.value),className:"text-sm outline-none border-[1px] border-gray-200 w-full px-4 py-3 rounded-md",placeholder:"+1 000-000-0000"})]}),e.jsxs("div",{className:"flex flex-col space-y-1",children:[e.jsx("h5",{className:"text-xs font-semibold",children:"Password"}),e.jsx("input",{type:"password",value:d,onChange:s=>v(s.target.value),className:"text-sm outline-none border-[1px] border-gray-200 w-full px-4 py-3 rounded-md",placeholder:"Password"})]}),e.jsxs("div",{className:"flex flex-col space-y-1",children:[e.jsx("h5",{className:"text-xs font-semibold",children:"Confirm Password"}),e.jsx("input",{type:"password",value:x,onChange:s=>w(s.target.value),className:"text-sm outline-none border-[1px] border-gray-200 w-full px-4 py-3 rounded-md",placeholder:"Password"})]}),e.jsx("button",{type:"submit",className:"flex justify-center items-center cursor-pointer rounded-md py-1 w-full bg-b3",children:e.jsxs("span",{className:"flex items-center text-center  w-fit px-4 py-1 rounded-md text-white font-semibold",children:[e.jsx("span",{className:"text-xs",children:"Create Account"}),e.jsx(k,{className:"text-2xl"})]})}),e.jsx("div",{className:"flex w-full justify-center",children:e.jsxs("h5",{className:"text-sm",children:["Have an Account? ",e.jsx(F,{to:"/login",children:e.jsx("span",{className:"text-b3 hover:underline cursor-pointer",children:"Login"})})]})})]})]}),e.jsx(p,{})]})})};export{D as default};
