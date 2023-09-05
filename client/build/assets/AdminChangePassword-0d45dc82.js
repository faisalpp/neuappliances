import{r as o,j as e,k as p,bC as x,Q as n}from"./index-f13c45bd.js";import{A as v}from"./AdminAccount-2636886e.js";import{T as u}from"./TextInput-d12ffe80.js";import{c as q,a as i,d as N}from"./index.esm-099c1464.js";import{C as O}from"./CustomButton-e2cc4355.js";const B=()=>{const l=/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{6,25}$/,g=q().shape({newPass:i().matches(l,"Password must meet the required pattern").required("New Password is required"),currentPass:i().matches(l,"Password must meet the required pattern").required("Current Password is required"),confNewPass:i().oneOf([N("newPass"),null],"Passwords must match").required("Confirm New Password is required")}),[d,w]=o.useState(""),[c,h]=o.useState(""),[m,P]=o.useState(""),[r,f]=o.useState([]),C=async s=>{s.preventDefault();try{const a={currentPass:d,newPass:c,confNewPass:m};await g.validate(a,{abortEarly:!1});const t=await x(a);t.status===200?n.success(t.msg,{position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"light"}):t.code==="ERR_BAD_RESPONSE"?n.error(t.message,{position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"light"}):n.error(t.message,{position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"light"})}catch(a){if(console.error("Validation errors:",a.errors),f(a.errors?a.errors:[]),r.includes("Password must meet the required pattern")){let t="Password must be between 6 and 25 characters long and contain at least one lowercase letter, one uppercase letter, and one numeric digit.";n.error(t,{position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"light"})}}};return e.jsxs(e.Fragment,{children:[e.jsx(p,{position:"top-right",autoClose:5e3,hideProgressBar:!1,newestOnTop:!1,closeOnClick:!0,rtl:!1,pauseOnFocusLoss:!0,draggable:!0,pauseOnHover:!0,theme:"light"}),e.jsx(v,{children:e.jsxs("form",{onSubmit:C,className:"max-w-[432px] w-full flex flex-col gap-6 my-10",children:[e.jsx(u,{error:!!(r.length>0&&r.includes("Current Password is required")),errormessage:"Current Password is required",value:d,onChange:s=>w(s.target.value),name:"currentPass",title:"Current Password",iscompulsory:"true",type:"password",placeholder:"Enter Current Password"}),e.jsx(u,{error:!!(r.length>0&&r.includes("New Password is required")),errormessage:"New Password is Required",value:c,onChange:s=>h(s.target.value),name:"newPass",title:"New Password",iscompulsory:"true",type:"password",placeholder:"Enter Current Password"}),e.jsx(u,{error:!!(r.length>0&&r.includes("Confirm Password is required")),errormessage:"Confirm Password is Required",value:m,onChange:s=>P(s.target.value),name:"confNewPass",title:"Confirm New Password",iscompulsory:"true",type:"password",placeholder:"Enter Current Password"}),e.jsx(O,{ButtonName:"Change Password"})]})}),e.jsx(p,{})]})};export{B as default};
