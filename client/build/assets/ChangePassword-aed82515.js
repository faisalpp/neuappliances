import{j as e,p as R,q as u,r as d,a6 as q,a5 as v,u as C,ap as w,v as S,w as n,aF as b}from"./index-34a93641.js";import{M as T}from"./MyAccount-316cc477.js";import{g as E}from"./profile-ce8df1c5.js";const L=()=>e.jsx(e.Fragment,{children:e.jsx(T,{children:e.jsx(D,{})})}),D=()=>{const p=R().shape({password:u().required("Password is Required!"),confirmPassword:u().required("Re-Type Password is Required!")}),[t,i]=d.useState([]),[l,f]=d.useState(""),[c,g]=d.useState(""),[m,o]=d.useState(!1),h=q(s=>s.user._id),x=v(),P=C(),y=async s=>{s.preventDefault(),o(!0);try{const r={password:l,confirmPassword:c};await p.validate(r,{abortEarly:!1});const a=await E({...r,userId:h});a.status===200?(o(!1),n(a.data.msg,"success",1e3),x(b()),P("/login")):(o(!1),n(a.data.message,"error",1e3))}catch(r){if(o(!1),r){let a=r.errors;i(a),a.forEach(j=>{n(j,"error",1e3)})}else i([])}};return e.jsx(e.Fragment,{children:e.jsxs("form",{onSubmit:y,className:"lg:max-w-[432px] w-full flex flex-col gap-6",children:[e.jsx(w,{title:"Password",type:"password",width:"full",value:l,onChange:s=>f(s.target.value),error:!!(t&&t.includes("Password is Required!")),errormessage:"Password is Required!",placeholder:"••••••••••••••"}),e.jsx(w,{title:"Re-Type Password",type:"password",width:"full",value:c,onChange:s=>g(s.target.value),error:!!(t&&t.includes("Re-Type Password is Required!")),errormessage:"Re-Type Password is Required!",placeholder:"••••••••••••••"}),e.jsx("button",{type:"submit",className:"flex justify-center items-center rounded-lg bg-b3 py-3 w-full text-white text-xs font-medium",children:m?e.jsx(S,{style:"w-4"}):"Change Password"})]})})};export{D as ChangePasswordData,L as default};
