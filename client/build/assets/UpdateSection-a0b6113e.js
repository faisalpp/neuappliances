import{f as j,r as a,u as b,j as e,Q as p}from"./index-700f33c8.js";import{A as S}from"./AdminAccount-ff3a5696.js";import{o as v,d as N}from"./ScrollToTop-87b7b771.js";import"./MainLayout-c4236618.js";import{o as C,f as w}from"./admin-c8e036cb.js";const I=()=>{const{id:m}=j(),[l,B]=a.useState(m),[o,n]=a.useState(""),[d,c]=a.useState(""),[i,x]=a.useState(""),[g,u]=a.useState(""),h=b();a.useEffect(()=>{(async()=>{const s=await C({sectionId:l});s.status===200&&(n(s.data.section[0].title),x(s.data.section[0].slug),u(s.data.section[0].cardStyle),c(s.data.section[0].type))})()},[]);const f=async t=>{t.preventDefault();const s=await w({title:o,slug:i,cardStyle:g,sectionId:l,type:d});s.status===200?(p.success(s.data.msg,{position:"top-right",autoClose:1e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"light"}),h(-1)):p.error(s.data.message,{position:"top-right",autoClose:1e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"light"})},y=t=>{n(t.target.value);const r=t.target.value.toLowerCase().replace(/ /g,"-");x(r)};return e.jsx(e.Fragment,{children:e.jsx(S,{children:e.jsx("div",{className:"flex justify-center w-full",children:e.jsxs("form",{onSubmit:f,encType:"multipart/form-data",className:"flex flex-col space-y-5 w-8/12 px-10 py-10 rounded-2xl bg-white border-[1px] border-gray-200",children:[e.jsxs("div",{className:"flex flex-col space-y-1",children:[e.jsx("h5",{className:"text-xs font-semibold",children:"Section Title"}),e.jsx("input",{type:"text",value:o,onChange:y,className:"text-sm outline-none border-[1px] border-gray-200 w-full px-4 py-3 rounded-md",placeholder:"Refrigerators By Styles"})]}),e.jsxs("div",{className:"flex flex-col space-y-1",children:[e.jsx("h5",{className:"text-xs font-semibold",children:"Section Type"}),e.jsx("input",{type:"text",value:d,onChange:t=>c(t.target.value),readOnly:!0,className:"text-sm outline-none border-[1px] border-gray-200 w-full px-4 py-3 rounded-md",placeholder:"Refrigerators By Styles"})]}),e.jsxs("div",{children:[e.jsxs("label",{className:"text-b16 font-semibold text-xs block mb-2",children:["Section Card Style",e.jsx("i",{className:"text-red-500",children:"*"})]}),e.jsxs("div",{className:"relative",children:[e.jsxs("select",{onChange:t=>u(t.target.value),className:"border border-[rgba(0,0,0,0.16)] rounded-lg h-10 text-sm px-4 w-full outline-none appearance-none",children:[e.jsx("option",{value:"head-rating-card",children:"Head Rating Card (First Section)"}),e.jsx("option",{value:"rating-card",children:"Rating Card (Example: 5 Stars)"}),e.jsx("option",{value:"color-card",children:"Color Card (Example: Black)"}),e.jsx("option",{value:"brand-card",children:"Brand Card (Example:Samsung)"}),e.jsx("option",{value:"general-card",children:"General Card (Example: Product By Features)"}),e.jsx("option",{value:"2xn-card",children:"2xN Card (Example: Fuel Type)"})]}),e.jsx(v,{className:"absolute right-4 top-3"})]})]}),e.jsxs("div",{className:"flex flex-col space-y-1",children:[e.jsx("h5",{className:"text-xs font-semibold",children:"Url Slug"}),e.jsx("input",{type:"text",value:i,readOnly:!0,className:"text-sm outline-none border-[1px] border-gray-200 w-full px-4 py-3 rounded-md",placeholder:"refrigerators-by-styles"})]}),e.jsx("button",{type:"submit",className:"flex justify-center items-center cursor-pointer rounded-md py-1 w-full bg-b3",children:e.jsxs("a",{className:"flex items-center text-center  w-fit px-4 py-1 rounded-md text-white font-semibold",children:[e.jsx("span",{className:"text-xs",children:"Update"}),e.jsx(N,{className:"text-2xl"})]})})]})})})})};export{I as default};
