import{u as j,a6 as u,r,p as y,q as b,j as e,M as E,ap as v,v as N,f as S,aq as q,w as l}from"./index-34a93641.js";const R=()=>{const i=j(),x=u(s=>s.user.auth),n=u(s=>s.admin.auth);r.useEffect(()=>{!n&&!x||i(n?"/admin/dashboard":"/my-account/profile")},[]);const[o,f]=r.useState(""),[c,d]=r.useState([]),[p,t]=r.useState(!1),g=y().shape({email:b().required("Email is Required!")}),h=async s=>{s.preventDefault(),t(!0);try{await g.validate({email:o},{abortEarly:!1});const a=await q({email:o});a.status===200?(t(!1),l(a.data.msg,"success",1e3)):(t(!1),l(a.data.message,"error",1e3))}catch(a){if(t(!1),a){let m=a.errors;d(m),m.forEach(w=>{l(w,"error",1e3)})}else d([])}};return e.jsx(e.Fragment,{children:e.jsx(E,{children:e.jsxs("div",{className:"flex flex-col space-y-10 items-center pt-20 py-32 w-full",children:[e.jsx("div",{children:e.jsx("img",{src:"login_logo.webp",alt:"login_logo"})}),e.jsxs("form",{onSubmit:h,className:"flex flex-col space-y-5 w-5/12 px-10 py-10 rounded-2xl bg-white border-[1px] border-gray-200",children:[e.jsx("h4",{className:"text-xl font-bold",children:"Forgot Password"}),e.jsx(v,{width:"full",name:"email",title:"Email",type:"text",value:o,onChange:s=>f(s.target.value),error:!!(c&&c.includes("Email is Required!")),errormessage:"Email is Required!",placeholder:"youremail@gmail.com"}),e.jsx("button",{className:"flex justify-center items-center cursor-pointer rounded-md py-1 w-full bg-b3",children:p?e.jsx(N,{style:"w-7"}):e.jsxs("span",{className:"flex items-center text-center  w-fit px-4 py-1 rounded-md text-white font-semibold",children:[e.jsx("span",{className:"text-xs",children:"Submit"}),e.jsx(S,{className:"text-2xl"})]})})]})]})})})};export{R as default};
