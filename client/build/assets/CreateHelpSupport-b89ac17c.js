import{r as s,j as e,b5 as D,B as N,Q as j}from"./index-4f6f68a5.js";import{B as E}from"./BlogEditor-97cda4c8.js";import{T as w}from"./TextInput-bb674852.js";import{T as H}from"./TextAreaInput-9793285e.js";import{S as O}from"./SelectInput-57f9bc98.js";import{c as A,a as l}from"./index.esm-5fbe594f.js";import{c as I}from"./helpSupport-9bc8f5b1.js";import{g as P}from"./helpSupportTab-182ce740.js";import"./index-187164af.js";const J=()=>{const v=A().shape({title:l().required("Title is required"),slug:l().required("Slug is required"),shortDescription:l().required("Short Description is required"),category:l().required("Blog Category is required"),content:l().required("Blog Content is required")}),[r,g]=s.useState([]),[C,i]=s.useState(!1),[n,m]=s.useState(""),[u,f]=s.useState(""),[p,x]=s.useState(""),[h,S]=s.useState(""),[d,y]=s.useState(""),q=async t=>{t.preventDefault(),i(!0);try{const o={title:n,slug:u,shortDescription:p,category:h,content:d},a=new FormData;a.set("title",n),a.set("slug",u),a.set("shortDescription",p),a.set("category",h),a.set("content",d),await v.validate(o,{abortEarly:!1});const c=await I(a);console.log(c),c.status===200?(i(!1),j.success(c.data.msg,{position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"light"}),m(""),f(""),y(""),x("")):(i(!1),j.error(c.data.message,{position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"light"}))}catch(o){console.log(o),i(!1),g(o?o.errors:[])}},[T,b]=s.useState([]),B=async()=>{const t=await P();t.status===200?(b(t.data.helpTabs),S(t.data.helpTabs[0].title.toLowerCase().replace(/\s/g,"-"))):b([])};return s.useEffect(()=>{B()},[]),e.jsx(e.Fragment,{children:e.jsx(D,{children:e.jsxs("form",{onSubmit:q,className:"flex flex-col space-y-5 w-full py-5 bg-white",children:[e.jsxs("div",{className:"flex w-full",children:[e.jsxs("div",{className:"flex flex-col space-y-10 w-1/2",children:[e.jsx(w,{width:"full",name:"title",title:"Blog Title",iscompulsory:"true",type:"text",value:n,onChange:t=>{m(t.target.value),f(t.target.value.toLowerCase().replace(/\s/g,"-").replace(/\./g,""))},error:!!(r&&r.includes("Title is required")),errormessage:"Title is required",placeholder:"Enter Blog Title"}),e.jsx(w,{width:"full",name:"slug",title:"Blog Slug",readOnly:!0,iscompulsory:"true",type:"text",value:u,error:!!(r&&r.includes("Slug is required")),errormessage:"Slug is required",placeholder:"Enter Blog Slug"})]}),e.jsxs("div",{className:"flex flex-col space-y-8 items-center w-1/2",children:[e.jsx("div",{className:"flex flex-col items-center space-x-5 w-full",children:e.jsx(O,{name:"categor",title:"Select Category",iscompulsory:"true",onChange:t=>S(t.target.value),options:T})}),e.jsx("div",{className:"flex flex-col items-center space-x-5 w-72",children:e.jsx(H,{name:"description",title:"Description",iscompulsory:"true",type:"text",value:p,onChange:t=>x(t.target.value),error:!!(r&&r.includes("Short Description is required")),errormessage:"Short Description is required",placeholder:"Enter Product Description"})})]})]}),e.jsx(E,{state:d,setState:y}),e.jsx("button",{type:"submit",className:"flex justify-center items-center cursor-pointer rounded-md py-1 w-full bg-b3",children:C?e.jsx("img",{src:"/loader-bg.gif",className:"w-8"}):e.jsxs("a",{className:"flex items-center text-center  w-fit px-4 py-1 rounded-md text-white font-semibold",children:[e.jsx("span",{className:"text-xs",children:"Create"}),e.jsx(N,{className:"text-2xl"})]})})]})})})};export{J as default};
