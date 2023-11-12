import{r as t,j as e,N as L,bq as q,bs as U,br as $,aD as h,p as _,q as z,aI as Q,al as V,h as J,bm as K,aM as W,be as X,bL as Y}from"./index-3053c656.js";/* empty css                      */import{d as Z,a as ee,G as se}from"./helpSupport-1a024ef4.js";import{F as te}from"./admin-7c1ee388.js";import{c as ae,g as re}from"./helpSupportTab-b2d84243.js";const le=({desc:p,title:c,category:n,id:r,slug:l,getBlog:C,setPage:j})=>{const[w,m]=t.useState(!1),[d,x]=t.useState(!1),T=async(i,f)=>{i.preventDefault(),m(!0);const o=await Z({slug:f});o.status===200?(m(!1),C(),h.success(o.data.msg,{position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"light"})):(m(!1),h.error(o.data.message,{position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"light"}))},N=async(i,f)=>{i.preventDefault(),j(1),x(!0);const o=await ee({id:f});o.status===200?(x(!1),C(1),h.success(o.data.msg,{position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"light"})):(x(!1),h.error(o.data.message,{position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"light"}))};return e.jsxs("tr",{className:"border-b border-l border-r border-b6 text-xs",children:[e.jsxs("td",{className:"px-2 py-3 w-52 overflow-hidden",children:[c.substr(0,50),"..."]}),e.jsxs("td",{className:"px-2 py-3 w-52 overflow-hidden",children:[p.substr(0,50),"..."]}),e.jsx("td",{className:"whitespace-nowrap  px-5 py-4 font-medium capitalize",children:n.replace(/-/g," ")}),e.jsxs("td",{className:"flex items-center justify-center mt-3 space-x-1 px-5 py-4",children:[e.jsx(L,{title:"Update blog",to:`/admin/update-help/${l}`,className:"flex items-center justify-center bg-b3 text-white hover:bg-white hover:text-b3 border-2 border-white hover:border-b3 text-sm px-2 w-fit rounded-full cursor-pointer py-2",children:e.jsx(q,{className:"text-base"})}),e.jsx("span",{title:"Duplicate Blog",onClick:i=>T(i,l),className:"flex items-center justify-center bg-b7 text-white hover:bg-white hover:text-b7 border-2 border-white hover:border-b7 text-sm px-2 w-fit rounded-full cursor-pointer py-2",children:w?e.jsx("img",{src:"/loader-bg.gif",className:"w-4 h-4"}):e.jsx(U,{className:"text-lg"})}),e.jsx("span",{title:"Delete Blog",onClick:i=>N(i,r),className:"flex items-center justify-center bg-red-500/30 text-red-500 hover:bg-white hover:text-red-500 border-2 border-white hover:border-red-500 text-sm px-2 w-fit rounded-full cursor-pointer py-2",children:d?e.jsx("img",{src:"/loader-bg.gif",className:"w-4 h-4"}):e.jsx($,{className:"text-base"})})]})]})},oe=({data:p,setPage:c,getBlog:n})=>e.jsx("div",{className:"flex flex-col",children:e.jsx("div",{className:"overflow-x-auto sm:-mx-6 lg:-mx-8",children:e.jsx("div",{className:"inline-block min-w-full py-2 sm:px-6 lg:px-8",children:e.jsx("div",{className:"overflow-hidden",children:e.jsxs("table",{className:"min-w-full text-center text-sm font-light",children:[e.jsx("thead",{className:"border-b border-l border-b3 bg-b3 font-medium text-white",children:e.jsxs("tr",{children:[e.jsx("th",{scope:"col",className:"px-6 py-4",children:"Title"}),e.jsx("th",{scope:"col",className:"px-6 py-4",children:"Description"}),e.jsx("th",{scope:"col",className:"px-6 py-4",children:"Category"}),e.jsx("th",{scope:"col",className:"px-6 py-4",children:"Action"})]})}),e.jsx("tbody",{children:p.map((r,l)=>e.jsx(le,{id:r._id,setPage:c,getBlog:n,title:r.title,slug:r.slug,desc:r.shortDescription,category:r.category},l))})]})})})})}),pe=()=>{const[p,c]=t.useState([]),[n,r]=t.useState(1),[l,C]=t.useState(4),[j,w]=t.useState(0),[m,d]=t.useState(!1),[x,T]=t.useState("all-categories"),[N,i]=t.useState(""),[f,S]=t.useState([]);t.useEffect(()=>{o()},[x,n]);const o=async s=>{d(!0);let a;s?(r(s),a={page:s,limit:l}):a={page:n,limit:l};const u=await se({category:x},a);u.status===200?(d(!1),c(u.data.helps),w(Math.ceil(u.data.totalCount/l))):(c([]),d(!1))},F=async s=>{s.preventDefault();const u=await te({title:N},{page:1,limit:l});u.status===200?(d(!1),c(u.data.blogs),w(Math.ceil(u.data.totalCount/l))):(c([]),d(!1))},[B,D]=t.useState([]),[k,v]=t.useState(""),[E,g]=t.useState(!1),[A,y]=t.useState(!1),[G,H]=t.useState(!1),[O,P]=t.useState([]),I=_().shape({title:z().required("Tab Title is required!")}),M=async s=>{s.preventDefault(),y(!0);try{const a={title:k};await I.validate(a,{abortEarly:!1});const b=await ae(a);b.status===200?(y(!1),h.success(b.data.msg,{position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"light"}),v(""),g(!1)):(h.error(b.data.message,{position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"light"}),y(!1),v(""),g(!1))}catch(a){a?(y(!1),v(""),g(!1),P(a.errors)):P([])}},R=async()=>{H(!0);const s=await re();s.status===200?(H(!1),D(s.data.helpTabs),S([{title:"All Categories"},...s.data.helpTabs])):(D([]),H(!1))};return t.useEffect(()=>{R()},[]),e.jsxs(e.Fragment,{children:[e.jsx(Q,{state:E,setState:g,children:e.jsxs("form",{className:"flex flex-col space-y-3",children:[e.jsx("h1",{className:"font-semibold",children:"Create Help & Support Tab"}),e.jsx(V,{width:"full",name:"title",title:"Tab Title",iscompulsory:"true",type:"text",value:k,onChange:s=>v(s.target.value),error:!!(O&&O.includes("Tab Title is required!")),errormessage:"Title is Required",placeholder:"Enter Tab Name"}),e.jsx("button",{onClick:M,type:"submit",className:"flex justify-center items-center cursor-pointer rounded-md py-1 w-full bg-b3",children:A?e.jsx("img",{src:"/loader-bg.gif",className:"w-8"}):e.jsxs("a",{className:"flex items-center text-center  w-fit px-4 py-1 rounded-md text-white font-semibold",children:[e.jsx("span",{className:"text-xs",children:"Create"}),e.jsx(J,{className:"text-2xl"})]})})]})}),e.jsxs(K,{children:[e.jsxs("div",{className:"flex items-center space-x-2 my-2 bg-white py-3 px-5 w-full",children:[e.jsx(L,{to:"/admin/create-help-support",className:"bg-b3 text-white text-xs px-3 rounded-2xl cursor-pointer py-2 font-bold",children:"Create Help & Support"}),e.jsx(W,{onChange:s=>T(s.target.value),options:f}),e.jsxs("div",{className:"flex w-full justify-end space-x-3",children:[e.jsx("input",{value:N,onChange:s=>i(s.target.value),placeholder:"Search Blog",className:"text-xs px-2 outline-none border border-b3 rounded-md"}),e.jsx("button",{onClick:F,className:"border border-b3 text-b3 text-xs px-2 rounded-md cursor-pointer py-1",children:"Search"})]})]}),m?e.jsx("div",{className:"flex items-center justify-center w-full",children:e.jsx("img",{src:"/loader-bg.gif",className:"w-10 h-10"})}):p?e.jsx(oe,{setPage:r,getBlog:o,data:p}):e.jsx("div",{className:"flex justify-center w-full h-full",children:e.jsx("img",{src:"/not-found.webp",className:"w-36 h-36"})}),j>=l?e.jsx(X,{page:n,setPage:r,totalPages:j}):null,e.jsxs("div",{className:"flex w-full items-center space-x-3 mb-5",children:[e.jsx("h2",{className:"text-lg font-medium mt-5",children:"Help & Support Tabs"}),e.jsx("div",{className:"flex w-full justify-end space-x-3",children:e.jsx(Y,{onClick:()=>g(!0),className:"text-b3 text-3xl shadow-xl rounded-full cursor-pointer"})})]}),G?e.jsx("div",{className:"flex items-center justify-center w-full",children:e.jsx("img",{src:"/loader-bg.gif",className:"w-10 h-10"})}):B.length>0?B.map((s,a)=>e.jsx("div",{className:"tab-buttons maxlg:order-2 lg:w-fit flex flex-col gap-2 mb-2",children:e.jsxs("div",{className:"p-2 xl:p-2 xl:text-sm font-semibold flex space-x-5 justify-between items-center text-left border border-[rgba(0,0,0,0.15)] rounded-2xl text-b23",children:[e.jsx("span",{children:s.title}),e.jsx("span",{className:"p-2 bg-b6 hover:bg-white border-b3 border-2  rounded-full cursor-pointer group",children:e.jsx(q,{onClick:()=>{setUpdateFaqPopup(!0),setUpdatedFaqTabTitle(s.title),setUpdatedFaqTabId(s._id)},className:"text-white group-hover:text-b3 text-sm shadow-xl"})})]})},a)):e.jsx("div",{className:"flex justify-center w-full h-full",children:e.jsx("img",{src:"/not-found.webp",className:"w-36 h-36"})})]})]})};export{pe as default};
