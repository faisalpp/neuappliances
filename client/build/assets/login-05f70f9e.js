import{u as p,a1 as h,r as l,a0 as g,j as e,e as f,N as o,B as j,an as y,ao as b,Q as n}from"./index-c6e12165.js";const w=()=>{const i=p(),d=h(s=>s.user.auth),[t,c]=l.useState(""),[r,x]=l.useState(""),u=g(),m=async s=>{s.preventDefault();const a=await u(b({email:t,password:r}));a.payload.status===200&&(n.success(a.payload.msg,{position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"light"}),i("/admin/dashboard")),a.payload.code==="ERR_BAD_REQUEST"&&n.error("Invalid Credentials!",{position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"light"})};return e.jsx(e.Fragment,{children:d?e.jsx(y,{to:"/admin/dashboard"}):e.jsx(f,{children:e.jsxs("div",{className:"flex flex-col space-y-10 items-center pt-20 py-32 w-full",children:[e.jsx("div",{children:e.jsx("img",{src:"login_logo.webp",alt:"login_logo"})}),e.jsxs("form",{onSubmit:m,className:"flex flex-col space-y-5 w-5/12 px-10 py-10 rounded-2xl bg-white border-[1px] border-gray-200",children:[e.jsx("h4",{className:"text-xl font-bold",children:"Admin Login"}),e.jsxs("div",{className:"flex flex-col space-y-1",children:[e.jsx("h5",{className:"text-xs font-semibold",children:"Email Address"}),e.jsx("input",{type:"email",value:t,onChange:s=>c(s.target.value),className:"text-sm outline-none border-[1px] border-gray-200 w-full px-4 py-3 rounded-md",placeholder:"youremail@mail.com"})]}),e.jsxs("div",{className:"flex flex-col space-y-1",children:[e.jsxs("div",{className:"flex items-center",children:[e.jsx("h5",{className:"text-xs font-semibold",children:"Password"}),e.jsx("div",{className:"flex w-full justify-end",children:e.jsx(o,{to:"/forgot-password",children:e.jsx("span",{className:"text-xs hover:underline cursor-pointer font-semibold text-b3",children:"Forgot Password?"})})})]}),e.jsx("input",{type:"password",value:r,onChange:s=>x(s.target.value),className:"text-sm outline-none border-[1px] border-gray-200 w-full px-4 py-3 rounded-md",placeholder:"Enter Your Password"})]}),e.jsx("button",{type:"submit",className:"flex justify-center items-center cursor-pointer rounded-md py-1 w-full bg-b3",children:e.jsxs("span",{className:"flex items-center text-center  w-fit px-4 py-1 rounded-md text-white font-semibold",children:[e.jsx("span",{className:"text-xs",children:"Login"}),e.jsx(j,{className:"text-2xl"})]})}),e.jsx("div",{className:"flex w-full justify-center",children:e.jsxs("h5",{className:"text-sm",children:["New customer? ",e.jsx(o,{to:"/register",children:e.jsx("span",{className:"text-b3 hover:underline cursor-pointer",children:"Create an Account"})})]})})]})]})})})};export{w as default};
