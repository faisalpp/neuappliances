import{p as A,q as i,r as s,j as e,bm as I,al as w,h as S,aM as F,aD as C}from"./index-3053c656.js";/* empty css                      */import{G as L}from"./category-cd4af881.js";import{c as $}from"./applianceTips-896ef14e.js";import{B as G}from"./BlogEditor-d30bf07d.js";import"./index-316d4fd3.js";const z=()=>{const v=A().shape({title:i().required("Title is required"),slug:i().required("Slug is required"),thumbnail:i().nullable(!0),category:i().required("Blog Category is required"),content:i().required("Blog Content is required")}),[o,g]=s.useState([]),[N,T]=s.useState([]),f=s.useRef(),[q,c]=s.useState(!1),[u,x]=s.useState(""),[m,p]=s.useState(""),[l,h]=s.useState(""),[B,E]=s.useState(""),[y,b]=s.useState(""),[d,j]=s.useState(""),D=async t=>{t.preventDefault(),c(!0);try{const r={title:u,slug:m,thumbnail:l,category:y,content:d},a=new FormData;a.set("title",u),a.set("slug",m),a.set("thumbnail",l),a.set("category",y),a.set("content",d),await v.validate(r,{abortEarly:!1});const n=await $(a);console.log(n),n.status===200?(c(!1),C.success(n.data.msg,{position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"light"}),x(""),p(""),j("")):(c(!1),C.error(n.data.message,{position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"light"}))}catch(r){console.log(r),c(!1),g(r?r.errors:[])}};s.useEffect(()=>{O()},[]);const O=async()=>{const t=await L();t.status===200&&(T(t.data.categories),b(t.data.categories[0].slug))},R=t=>{t.preventDefault();const r=t.target.files[0];r?(h(r),E(r)):h(B)},k=()=>{f.current.click()};return e.jsx(e.Fragment,{children:e.jsx(I,{children:e.jsxs("form",{onSubmit:D,className:"flex flex-col space-y-5 w-full py-5 bg-white",children:[e.jsxs("div",{className:"flex w-full",children:[e.jsxs("div",{className:"flex flex-col space-y-10 w-1/2",children:[e.jsx(w,{width:"full",name:"title",title:"Blog Title",iscompulsory:"true",type:"text",value:u,onChange:t=>{x(t.target.value),p(t.target.value.toLowerCase().replace(/\s/g,"-").replace(/\./g,""))},error:!!(o&&o.includes("Title is required")),errormessage:"Title is required",placeholder:"Enter Blog Title"}),e.jsx(w,{width:"full",name:"slug",title:"Blog Slug",readOnly:!0,iscompulsory:"true",type:"text",value:m,error:!!(o&&o.includes("Slug is required")),errormessage:"Slug is required",placeholder:"Enter Blog Slug"})]}),e.jsxs("div",{className:"flex flex-col space-y-8 items-center w-1/2",children:[e.jsxs("div",{className:"flex flex-col space-y-2",children:[e.jsx("img",{src:l!=""?window.URL.createObjectURL(l):"/no-image.jfif",className:`self-center rounded-xl ${l?"h-28 w-36":"h-26 w-32"}`}),e.jsx("button",{onClick:k,type:"button",className:"flex justify-center items-center self-center cursor-pointer rounded-md py-1 w-fit bg-b3",children:e.jsxs("a",{className:"flex items-center text-center  w-fit px-4 py-1 rounded-md text-white font-semibold",children:[e.jsx("span",{className:"text-xs",children:"Select Thumbnail"}),e.jsx(S,{className:"text-2xl"})]})}),e.jsx("input",{ref:f,name:"thumbnail",type:"file",className:"hidden",onChange:t=>R(t)})]}),e.jsx("div",{className:"flex justify-center space-x-5 w-full",children:e.jsx(F,{name:"catego",title:"Select Blog Category",iscompulsory:"true",onChange:t=>b(t.target.value),options:N})})]})]}),e.jsx(G,{state:d,setState:j}),e.jsx("button",{type:"submit",className:"flex justify-center items-center cursor-pointer rounded-md py-1 w-full bg-b3",children:q?e.jsx("img",{src:"/loader-bg.gif",className:"w-8"}):e.jsxs("a",{className:"flex items-center text-center  w-fit px-4 py-1 rounded-md text-white font-semibold",children:[e.jsx("span",{className:"text-xs",children:"Create"}),e.jsx(S,{className:"text-2xl"})]})})]})})})};export{z as default};
