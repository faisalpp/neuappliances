import{u as f,a5 as i,r as l,a4 as h,j as e,M as g,f as y,an as j,w as d}from"./index-7b544e7d.js";const N=()=>{const a=f(),o=i(s=>s.admin.auth),c=i(s=>s.user.auth);l.useEffect(()=>{!o&&!c||a(o?"/admin/dashboard":"/myaccount/profile")},[]);const[r,x]=l.useState(""),[n,m]=l.useState(""),u=h(),p=async s=>{s.preventDefault();const t=await u(j({email:r,password:n}));console.log(t),t.payload.status===200?(d(t.payload.msg,"success",1e3),a("/admin/dashboard")):d("Invalid Credentials!","error",1e3)};return e.jsx(e.Fragment,{children:e.jsx(g,{children:e.jsxs("div",{className:"flex flex-col space-y-10 items-center pt-20 py-32 w-full",children:[e.jsx("div",{children:e.jsx("img",{src:"login_logo.webp",alt:"login_logo"})}),e.jsxs("form",{onSubmit:p,className:"flex flex-col space-y-5 w-5/12 px-10 py-10 rounded-2xl bg-white border-[1px] border-gray-200",children:[e.jsx("h4",{className:"text-xl font-bold",children:"Admin Login"}),e.jsxs("div",{className:"flex flex-col space-y-1",children:[e.jsx("h5",{className:"text-xs font-semibold",children:"Email Address"}),e.jsx("input",{type:"email",value:r,onChange:s=>x(s.target.value),className:"text-sm outline-none border-[1px] border-gray-200 w-full px-4 py-3 rounded-md",placeholder:"youremail@mail.com"})]}),e.jsxs("div",{className:"flex flex-col space-y-1",children:[e.jsx("div",{className:"flex items-center",children:e.jsx("h5",{className:"text-xs font-semibold",children:"Password"})}),e.jsx("input",{type:"password",value:n,onChange:s=>m(s.target.value),className:"text-sm outline-none border-[1px] border-gray-200 w-full px-4 py-3 rounded-md",placeholder:"Enter Your Password"})]}),e.jsx("button",{type:"submit",className:"flex justify-center items-center cursor-pointer rounded-md py-1 w-full bg-b3",children:e.jsxs("span",{className:"flex items-center text-center  w-fit px-4 py-1 rounded-md text-white font-semibold",children:[e.jsx("span",{className:"text-xs",children:"Login"}),e.jsx(y,{className:"text-2xl"})]})})]})]})})})};export{N as default};
