import{f as P,r as a,j as e,Q as C}from"./index-700f33c8.js";import{A as H}from"./AdminAccount-ff3a5696.js";import{d as B,a4 as z}from"./ScrollToTop-87b7b771.js";import"./MainLayout-c4236618.js";import{D as L}from"./admin-c8e036cb.js";import{G as Q}from"./category-86e194da.js";import{B as V}from"./BlogEditor-8224a2bf.js";import{T as v}from"./TextInput-7ce5337d.js";import{S as _}from"./SelectInput-e7f6901a.js";import{c as J,a as i}from"./index.esm-01535cb8.js";const le=()=>{const N=J().shape({id:i().required("Id is required"),title:i().required("Title is required"),slug:i().required("Slug is required"),thumbnail:i().nullable(!0),tempImg:i().nullable(!0),category:i().required("Blog Category is required"),content:i().required("Blog Content is required")}),q=P(),[c,b]=a.useState([]),[T,E]=a.useState([]),y=a.useRef(),[I,u]=a.useState(!1),[j,D]=a.useState(),[d,m]=a.useState(""),[g,f]=a.useState(""),[l,p]=a.useState(""),[S,$]=a.useState(""),[o,w]=a.useState(""),[x,h]=a.useState(""),[k,K]=a.useState(),O=async()=>{const s={slug:q.slug},t=await z(s);D(t.data.blog[0]._id),m(t.data.blog[0].title),f(t.data.blog[0].slug),h(t.data.blog[0].content),w(t.data.blog[0].category),p(t.data.blog[0].thumbnail)};a.useEffect(()=>{O()},[]);const A=async s=>{s.preventDefault(),u(!0);try{const t={id:j,title:d,slug:g,thumbnail:l,tempImg:S,isDuplicate:k,category:o,content:x},r=new FormData;r.set("id",j),r.set("title",d),r.set("slug",g),r.set("thumbnail",l),r.set("tempImg",S),r.set("category",o),r.set("content",x),await N.validate(t,{abortEarly:!1});const n=await L(r);n.status===200?(u(!1),C.success(n.data.msg,{position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"light"}),m(""),f(""),h("")):(u(!1),C.error(n.data.message,{position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"light"}))}catch(t){console.log(t),u(!1),b(t?t.errors:[])}};a.useEffect(()=>{G()},[]);const G=async()=>{const s=await Q();if(console.log(o),s.status===200){const t=s.data.categories.filter(F=>F.slug!==o),n=[{title:o[0].toUpperCase()+o.slice(1),slug:o},...t];E(n)}},R=s=>{s.preventDefault();const t=s.target.files[0];t?(p(t),$(l)):p(l)},U=()=>{y.current.click()};return e.jsx(e.Fragment,{children:e.jsx(H,{children:e.jsxs("form",{onSubmit:A,className:"flex flex-col space-y-5 w-full py-5 bg-white",children:[e.jsxs("div",{className:"flex w-full",children:[e.jsxs("div",{className:"flex flex-col space-y-10 w-1/2",children:[e.jsx(v,{width:"full",name:"title",title:"Blog Title",iscompulsory:"true",type:"text",value:d,onChange:s=>{m(s.target.value),f(s.target.value.toLowerCase().replace(/\s/g,"-").replace(/\./g,""))},error:!!(c&&c.includes("Title is required")),errormessage:"Title is required",placeholder:"Enter Blog Title"}),e.jsx(v,{width:"full",name:"slug",title:"Blog Slug",readOnly:!0,iscompulsory:"true",type:"text",value:g,error:!!(c&&c.includes("Slug is required")),errormessage:"Slug is required",placeholder:"Enter Blog Slug"})]}),e.jsxs("div",{className:"flex flex-col space-y-8 items-center w-1/2",children:[e.jsxs("div",{className:"flex flex-col space-y-2",children:[e.jsx("img",{src:l!==""?`https://neu-appliance-outlet.s3.eu-north-1.amazonaws.com/${l}`:"/no-image.jfif",className:`self-center rounded-xl ${l?"h-28 w-36":"h-26 w-32"}`}),e.jsx("button",{onClick:U,type:"button",className:"flex justify-center items-center self-center cursor-pointer rounded-md py-1 w-fit bg-b3",children:e.jsxs("a",{className:"flex items-center text-center  w-fit px-4 py-1 rounded-md text-white font-semibold",children:[e.jsx("span",{className:"text-xs",children:"Select Thumbnail"}),e.jsx(B,{className:"text-2xl"})]})}),e.jsx("input",{ref:y,name:"thumbnail",type:"file",className:"hidden",onChange:s=>R(s)})]}),e.jsx("div",{className:"flex justify-center space-x-5 w-full",children:e.jsx(_,{name:"categor",title:"Select Blog Category",iscompulsory:"true",onChange:s=>w(s.target.value),options:T})})]})]}),e.jsx(V,{state:x,setState:h}),e.jsx("button",{type:"submit",className:"flex justify-center items-center cursor-pointer rounded-md py-1 w-full bg-b3",children:I?e.jsx("img",{src:"/loader-bg.gif",className:"w-8"}):e.jsxs("a",{className:"flex items-center text-center  w-fit px-4 py-1 rounded-md text-white font-semibold",children:[e.jsx("span",{className:"text-xs",children:"Update"}),e.jsx(B,{className:"text-2xl"})]})})]})})})};export{le as default};
