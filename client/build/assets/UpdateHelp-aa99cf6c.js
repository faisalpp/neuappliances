import{a0 as I,r,j as e,B as O,Q as S}from"./index-2ce1e176.js";import{A as P}from"./AdminAccount-945aeb4d.js";import{g as U}from"./helpSupportTab-7ec46c00.js";import{g as k,u as F}from"./helpSupport-cf4953cf.js";import{B as R}from"./BlogEditor-1be9ff47.js";import{T as j}from"./TextInput-494ea61a.js";import{S as $}from"./SelectInput-0cd3f8eb.js";import{c as G,a as o}from"./index.esm-587be3ba.js";import{T as L}from"./TextAreaInput-6ef42df5.js";import"./index-4e3cffd8.js";const Z=()=>{const C=G().shape({id:o().required("Id is required"),title:o().required("Title is required"),slug:o().required("Slug is required"),category:o().required("Blog Category is required"),content:o().required("Blog Content is required")}),w=I(),[a,g]=r.useState([]),[b,v]=r.useState([]),[q,i]=r.useState(!1),[B,T]=r.useState(),[p,n]=r.useState(""),[m,u]=r.useState(""),[f,h]=r.useState(""),[l,x]=r.useState(""),[y,d]=r.useState(""),N=async()=>{const s={slug:w.slug},t=await k(s);console.log(t.data.help),T(t.data.help[0]._id),n(t.data.help[0].title),u(t.data.help[0].slug),d(t.data.help[0].content),x(t.data.help[0].category),h(t.data.help[0].shortDescription)};r.useEffect(()=>{N()},[]);const E=async s=>{s.preventDefault(),i(!0);try{const t={id:B,title:p,slug:m,category:l,shortDescription:f,content:y};await C.validate(t,{abortEarly:!1});const c=await F(t);c.status===200?(i(!1),S.success(c.data.msg,{position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"light"}),n(""),u(""),d("")):(i(!1),S.error(c.data.message,{position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"light"}))}catch(t){console.log(t),i(!1),g(t?t.errors:[])}};r.useEffect(()=>{D()},[]);const D=async()=>{const s=await U();if(console.log(s.data.helpTabs),s.status===200){const t=s.data.helpTabs.filter(A=>A.slug!==l);console.log(t);const H=[{title:l[0].toUpperCase()+l.slice(1),slug:l},...t];v(H)}};return e.jsx(e.Fragment,{children:e.jsx(P,{children:e.jsxs("form",{onSubmit:E,className:"flex flex-col space-y-5 w-full py-5 bg-white",children:[e.jsxs("div",{className:"flex w-full",children:[e.jsxs("div",{className:"flex flex-col space-y-10 w-1/2",children:[e.jsx(j,{width:"full",name:"title",title:"Blog Title",iscompulsory:"true",type:"text",value:p,onChange:s=>{n(s.target.value),u(s.target.value.toLowerCase().replace(/\s/g,"-").replace(/\./g,""))},error:!!(a&&a.includes("Title is required")),errormessage:"Title is required",placeholder:"Enter Blog Title"}),e.jsx(j,{width:"full",name:"slug",title:"Blog Slug",readOnly:!0,iscompulsory:"true",type:"text",value:m,error:!!(a&&a.includes("Slug is required")),errormessage:"Slug is required",placeholder:"Enter Blog Slug"})]}),e.jsxs("div",{className:"flex flex-col space-y-8 items-center w-1/2",children:[e.jsx("div",{className:"flex flex-col items-center space-x-5 w-full",children:e.jsx($,{name:"categor",title:"Select Category",iscompulsory:"true",onChange:s=>x(s.target.value),options:b})}),e.jsx("div",{className:"flex flex-col items-center space-x-5 w-72",children:e.jsx(L,{name:"description",title:"Description",iscompulsory:"true",type:"text",value:f,onChange:s=>h(s.target.value),error:!!(a&&a.includes("Short Description is required")),errormessage:"Short Description is required",placeholder:"Enter Product Description"})})]})]}),e.jsx(R,{state:y,setState:d}),e.jsx("button",{type:"submit",className:"flex justify-center items-center cursor-pointer rounded-md py-1 w-full bg-b3",children:q?e.jsx("img",{src:"/loader-bg.gif",className:"w-8"}):e.jsxs("a",{className:"flex items-center text-center  w-fit px-4 py-1 rounded-md text-white font-semibold",children:[e.jsx("span",{className:"text-xs",children:"Create"}),e.jsx(O,{className:"text-2xl"})]})})]})})})};export{Z as default};
