import{r as a,j as e,Q as i}from"./index-6f024e59.js";import{A as U}from"./AdminAccount-29a528cc.js";/* empty css                      */import{P as I}from"./Popup-a4375afa.js";import{a as A,n as B}from"./index.esm-07b601df.js";import{al as E}from"./ScrollToTop-c496a034.js";import{S as x}from"./SelectInput-0981597c.js";import{T as S}from"./TextInput-8b05bbd7.js";import{u as q,g as R,d as G}from"./videoMedia-c8078a25.js";import{P as K}from"./Pagination2-0efdfb31.js";import"./MainLayout-7db25bd6.js";import"./index-38501678.js";const oe=()=>{const[v,l]=a.useState(!1),[r,b]=a.useState("upload"),[f,P]=a.useState("home-page-hero-section"),[h,j]=a.useState("home-page-hero-section"),[N,n]=a.useState(""),[y,C]=a.useState([]),[V,c]=a.useState(!1),M=async t=>{t.preventDefault(),c(!0);const o=new FormData;o.set("uploadMedia",N),o.set("section",f),o.set("type",r);const s=await q(o);console.log(s),s.status===200?(i.success(s.data.msg,{position:"top-right",autoClose:2e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"light"}),n(f),j(),p(),c(!1),l(!1)):(i.error(s.data.amessage,{position:"top-right",autoClose:2e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"light"}),c(!1),l(!1))},[d,F]=a.useState(1),[w,Q]=a.useState(16),[L,O]=a.useState(0),[k,u]=a.useState(!1),p=async()=>{u(!0);const s=await R({page:d,limit:w},{section:h});console.log(s),s.status===200&&(C(s.data.media),O(Math.ceil(s.data.totalCount/w))),u(!1)};a.useEffect(()=>{p()},[h,d]);const[H,m]=a.useState(!1),T=async(t,o,s,D)=>{t.preventDefault(),m(!0);const g=await G({id:o,type:s,url:D});g.status===200?(i.success(g.data.msg,{position:"top-right",autoClose:2e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"light"}),p(),m(!1)):(i.error(g.data.message,{position:"top-right",autoClose:2e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"light"}),m(!1))};return e.jsxs(e.Fragment,{children:[e.jsx(I,{state:v,setState:l,children:e.jsxs("form",{onSubmit:M,className:"flex flex-col space-y-3",children:[e.jsx("h1",{className:"font-semibold",children:"Upload Loop Media"}),e.jsx(x,{widthFull:"true",name:"type",title:"Upload Type",iscompulsory:"true",onChange:t=>b(t.target.value),options:["Upload","Link","Iframe"]}),e.jsx(x,{widthFull:"true",name:"section",title:"Select Page Section",iscompulsory:"true",onChange:t=>P(t.target.value),options:["Home Page Hero Section","Home Page Tour Section","Stay In Loop Videos","Faq's Page Video","Our Story Page Video","Our Showroom Page Video","Our Compnies Page Video"]}),r==="upload"?e.jsxs("div",{className:"flex items-end space-x-3",children:[e.jsx(S,{name:"uploadUrl",title:"Video File",iscompulsory:"true",type:"file",accept:"video/*",onChange:t=>n(t.target.files[0])}),e.jsxs("a",{className:"flex items-center justify-center text-center  w-14 py-1 rounded-md text-white font-semibold",children:[e.jsx("span",{className:"text-xs",children:"Upload"})," "]})]}):null,r==="link"||r==="iframe"?e.jsx(S,{width:"full",name:"mediaUrl",title:"Media Link",iscompulsory:"true",type:"text",onChange:t=>n(t.target.value),placeholder:"Enter Media Url"}):null,e.jsx("button",{type:"submit",className:"flex justify-center items-center cursor-pointer rounded-md py-1 w-full bg-b3",children:V?e.jsx("img",{src:"/loader-bg.gif",className:"w-8"}):e.jsxs("a",{className:"flex items-center text-center  w-fit px-4 py-1 rounded-md text-white font-semibold",children:[e.jsx("span",{className:"text-xs",children:"Create"}),e.jsx(A,{className:"text-2xl"})]})})]})}),e.jsxs(U,{children:[e.jsxs("div",{className:"flex items-center mb-5 py-3 rounded-3xl px-10 w-full",children:[e.jsx(x,{widthFull:"false",name:"sectionType",title:"Filter Section Videos",iscompulsory:"false",onChange:t=>j(t.target.value),options:["Home Page Hero Section","Home Page Tour Section","Stay In Loop Videos","Faq's Page Video","Our Story Page Video","Our Showroom Page Video","Our Compnies Page Video"]}),e.jsx("div",{className:"flex w-full justify-end space-x-3",children:e.jsx(E,{onClick:()=>l(!0),className:"text-b3 text-3xl shadow-xl rounded-full cursor-pointer"})})]}),k?e.jsx("div",{className:"flex mt-32 justify-center w-full h-full",children:e.jsx("img",{src:"/loader-bg.gif",className:"w-24 h-24"})}):y?e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"grid grid-cols-4 gap-x-2 gap-y-5 w-full",children:y.map((t,o)=>e.jsx(e.Fragment,{children:e.jsxs("div",{className:"relative  w-full",children:[t.section==="stay-in-loop-videos"?e.jsx("div",{className:"absolute right-2 bg-transparent h-10 w-10",children:e.jsx("div",{className:"flex  justify-end  w-10 h-10 mt-1 ",children:e.jsx("span",{title:"Delete Video",onClick:s=>T(s,t._id,t.type,t.url),className:"flex items-center justify-center bg-red-500 text-white hover:bg-white hover:text-red-500 hover:border-red-500 text-xs w-8 h-8 rounded-full cursor-pointer ",children:H?e.jsx("img",{src:"/loader-bg.gif",className:"w-4 h-4"}):e.jsx(B,{className:"text-sm"})})})}):null,t.type==="upload"||t.type==="link"?e.jsx("video",{controls:!0,className:"object-cover rounded-2xl xl:h-[150px] xl:w-[200px] lg:w-[200px] lg:h-32 w-32 h-32 ",src:t.url},o):null,t.type==="iframe"?e.jsx("iframe",{onLoad:()=>setVload(!1),className:"object-cover rounded-2xl xl:h-[150px] xl:w-[180px] lg:w-[200px] lg:h-32 w-32 h-32 ",src:t.url,title:"#885 Liquidation Half Truckload of 25 Scratch & Dent Kitchen and Laundry Appliances South Carolina",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"}):null]})}))}),e.jsx(K,{page:d,setPage:F,totalPages:L})]}):e.jsx("div",{className:"flex mt-32 justify-center w-full h-full",children:e.jsx("img",{src:"/not-found.webp",className:"w-36 h-36"})})]})]})};export{oe as default};
