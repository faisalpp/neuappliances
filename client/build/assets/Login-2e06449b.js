import{u as g,r as a,i as j,j as e,k as c,N as d,n as y,Q as u}from"./index-700f33c8.js";import{M as b}from"./MainLayout-c4236618.js";import{d as w}from"./ScrollToTop-87b7b771.js";const k=()=>{const r=g(),[o,x]=a.useState(""),[n,m]=a.useState(""),[i,p]=a.useState(""),h=j();a.useEffect(()=>{const t=new URLSearchParams(window.location.search).get("callback");console.log(t),p(t)},[]);const f=async s=>{s.preventDefault();const l=await h(y({email:o,password:n}));l.payload.status===200&&(u.success(l.payload.msg,{position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"light"}),r(i!==null?`${i}`:"/my-account/profile")),l.payload.code==="ERR_BAD_REQUEST"&&u.error("Invalid Credentials!",{position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"light"})};return e.jsx(e.Fragment,{children:e.jsxs(b,{children:[e.jsx(c,{position:"top-right",autoClose:5e3,hideProgressBar:!1,newestOnTop:!1,closeOnClick:!0,rtl:!1,pauseOnFocusLoss:!0,draggable:!0,pauseOnHover:!0,theme:"light"}),e.jsxs("div",{className:"flex flex-col space-y-10 items-center pt-20 py-32 w-full",children:[e.jsx("div",{children:e.jsx("img",{src:"/login_logo.webp",alt:"login_logo"})}),e.jsxs("form",{onSubmit:f,className:"flex flex-col space-y-5 w-5/12 px-10 py-10 rounded-2xl bg-white border-[1px] border-gray-200",children:[e.jsx("h4",{className:"text-xl font-bold",children:"Login"}),e.jsxs("div",{className:"flex flex-col space-y-1",children:[e.jsx("h5",{className:"text-xs font-semibold",children:"Email Address"}),e.jsx("input",{type:"email",value:o,onChange:s=>x(s.target.value),className:"text-sm outline-none border-[1px] border-gray-200 w-full px-4 py-3 rounded-md",placeholder:"youremail@mail.com"})]}),e.jsxs("div",{className:"flex flex-col space-y-1",children:[e.jsxs("div",{className:"flex items-center",children:[e.jsx("h5",{className:"text-xs font-semibold",children:"Password"}),e.jsx("div",{className:"flex w-full justify-end",children:e.jsx(d,{to:"/forgot-password",children:e.jsx("span",{className:"text-xs hover:underline cursor-pointer font-semibold text-b3",children:"Forgot Password?"})})})]}),e.jsx("input",{type:"password",value:n,onChange:s=>m(s.target.value),className:"text-sm outline-none border-[1px] border-gray-200 w-full px-4 py-3 rounded-md",placeholder:"youremail@mail.com"})]}),e.jsx("button",{type:"submit",className:"flex justify-center items-center cursor-pointer rounded-md py-1 w-full bg-b3",children:e.jsxs("span",{className:"flex items-center text-center  w-fit px-4 py-1 rounded-md text-white font-semibold",children:[e.jsx("span",{className:"text-xs",children:"Login"}),e.jsx(w,{className:"text-2xl"})]})}),e.jsx("div",{className:"flex w-full justify-center",children:e.jsxs("h5",{className:"text-sm",children:["New customer? ",e.jsx(d,{to:"/register",children:e.jsx("span",{className:"text-b3 hover:underline cursor-pointer",children:"Create an Account"})})]})})]})]}),e.jsx(c,{})]})})};export{k as default};
