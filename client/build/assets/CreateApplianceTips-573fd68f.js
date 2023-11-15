import{p as A,q as o,r as s,j as e,bg as I,ao as w,f as S,aO as F,aG as C}from"./index-7b544e7d.js";/* empty css                      */import{G}from"./category-896e6f76.js";import{c as L}from"./applianceTips-9c6211ed.js";import{B as $}from"./BlogEditor-81353cce.js";const z=()=>{const v=A().shape({title:o().required("Title is required"),slug:o().required("Slug is required"),thumbnail:o().nullable(!0),category:o().required("Blog Category is required"),content:o().required("Blog Content is required")}),[i,g]=s.useState([]),[N,T]=s.useState([]),f=s.useRef(),[q,c]=s.useState(!1),[u,x]=s.useState(""),[m,p]=s.useState(""),[l,h]=s.useState(""),[B,E]=s.useState(""),[y,b]=s.useState(""),[d,j]=s.useState(""),O=async t=>{t.preventDefault(),c(!0);try{const r={title:u,slug:m,thumbnail:l,category:y,content:d},a=new FormData;a.set("title",u),a.set("slug",m),a.set("thumbnail",l),a.set("category",y),a.set("content",d),await v.validate(r,{abortEarly:!1});const n=await L(a);console.log(n),n.status===200?(c(!1),C.success(n.data.msg,{position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"light"}),x(""),p(""),j("")):(c(!1),C.error(n.data.message,{position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"light"}))}catch(r){console.log(r),c(!1),g(r?r.errors:[])}};s.useEffect(()=>{R()},[]);const R=async()=>{const t=await G();t.status===200&&(T(t.data.categories),b(t.data.categories[0].slug))},k=t=>{t.preventDefault();const r=t.target.files[0];r?(h(r),E(r)):h(B)},D=()=>{f.current.click()};return e.jsx(e.Fragment,{children:e.jsx(I,{children:e.jsxs("form",{onSubmit:O,className:"flex flex-col space-y-5 w-full py-5 bg-white",children:[e.jsxs("div",{className:"flex w-full",children:[e.jsxs("div",{className:"flex flex-col space-y-10 w-1/2",children:[e.jsx(w,{width:"full",name:"title",title:"Blog Title",iscompulsory:"true",type:"text",value:u,onChange:t=>{x(t.target.value),p(t.target.value.toLowerCase().replace(/\s/g,"-").replace(/\./g,""))},error:!!(i&&i.includes("Title is required")),errormessage:"Title is required",placeholder:"Enter Blog Title"}),e.jsx(w,{width:"full",name:"slug",title:"Blog Slug",readOnly:!0,iscompulsory:"true",type:"text",value:m,error:!!(i&&i.includes("Slug is required")),errormessage:"Slug is required",placeholder:"Enter Blog Slug"})]}),e.jsxs("div",{className:"flex flex-col space-y-8 items-center w-1/2",children:[e.jsxs("div",{className:"flex flex-col space-y-2",children:[e.jsx("img",{src:l!=""?window.URL.createObjectURL(l):"/no-image.jfif",className:`self-center rounded-xl ${l?"h-28 w-36":"h-26 w-32"}`}),e.jsx("button",{onClick:D,type:"button",className:"flex justify-center items-center self-center cursor-pointer rounded-md py-1 w-fit bg-b3",children:e.jsxs("a",{className:"flex items-center text-center  w-fit px-4 py-1 rounded-md text-white font-semibold",children:[e.jsx("span",{className:"text-xs",children:"Select Thumbnail"}),e.jsx(S,{className:"text-2xl"})]})}),e.jsx("input",{ref:f,name:"thumbnail",type:"file",className:"hidden",onChange:t=>k(t)})]}),e.jsx("div",{className:"flex justify-center space-x-5 w-full",children:e.jsx(F,{name:"catego",title:"Select Blog Category",iscompulsory:"true",onChange:t=>b(t.target.value),options:N})})]})]}),e.jsx($,{state:d,setState:j}),e.jsx("button",{type:"submit",className:"flex justify-center items-center cursor-pointer rounded-md py-1 w-full bg-b3",children:q?e.jsx("img",{src:"/loader-bg.gif",className:"w-8"}):e.jsxs("a",{className:"flex items-center text-center  w-fit px-4 py-1 rounded-md text-white font-semibold",children:[e.jsx("span",{className:"text-xs",children:"Create"}),e.jsx(S,{className:"text-2xl"})]})})]})})})};export{z as default};
