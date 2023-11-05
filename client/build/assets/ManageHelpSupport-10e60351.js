import{r as t,j as e,N as L,by as F,bA as M,bz as $,a7 as m,al as z,am as _,aU as Q,an as V,h as X,bv as J,aX as K,bT as W}from"./index-1c659439.js";/* empty css                      */import{P as Y}from"./Pagination2-7403db2e.js";import{d as Z,a as ee,G as se}from"./helpSupport-9ea1ecba.js";import{F as te}from"./admin-2b5bfc46.js";import{c as ae,g as re}from"./helpSupportTab-b6a7165c.js";const le=({desc:p,title:c,category:n,id:r,slug:l,getBlog:C,setPage:j})=>{const[w,h]=t.useState(!1),[d,x]=t.useState(!1),T=async(i,f)=>{i.preventDefault(),h(!0);const o=await Z({slug:f});o.status===200?(h(!1),C(),m.success(o.data.msg,{position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"light"})):(h(!1),m.error(o.data.message,{position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"light"}))},N=async(i,f)=>{i.preventDefault(),j(1),x(!0);const o=await ee({id:f});o.status===200?(x(!1),C(1),m.success(o.data.msg,{position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"light"})):(x(!1),m.error(o.data.message,{position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"light"}))};return e.jsxs("tr",{className:"border-b border-l border-r border-b6 text-xs",children:[e.jsxs("td",{className:"px-2 py-3 w-52 overflow-hidden",children:[c.substr(0,50),"..."]}),e.jsxs("td",{className:"px-2 py-3 w-52 overflow-hidden",children:[p.substr(0,50),"..."]}),e.jsx("td",{className:"whitespace-nowrap  px-5 py-4 font-medium capitalize",children:n.replace(/-/g," ")}),e.jsxs("td",{className:"flex items-center justify-center mt-3 space-x-1 px-5 py-4",children:[e.jsx(L,{title:"Update blog",to:`/admin/update-help/${l}`,className:"flex items-center justify-center bg-b3 text-white hover:bg-white hover:text-b3 border-2 border-white hover:border-b3 text-sm px-2 w-fit rounded-full cursor-pointer py-2",children:e.jsx(F,{className:"text-base"})}),e.jsx("span",{title:"Duplicate Blog",onClick:i=>T(i,l),className:"flex items-center justify-center bg-b7 text-white hover:bg-white hover:text-b7 border-2 border-white hover:border-b7 text-sm px-2 w-fit rounded-full cursor-pointer py-2",children:w?e.jsx("img",{src:"/loader-bg.gif",className:"w-4 h-4"}):e.jsx(M,{className:"text-lg"})}),e.jsx("span",{title:"Delete Blog",onClick:i=>N(i,r),className:"flex items-center justify-center bg-red-500/30 text-red-500 hover:bg-white hover:text-red-500 border-2 border-white hover:border-red-500 text-sm px-2 w-fit rounded-full cursor-pointer py-2",children:d?e.jsx("img",{src:"/loader-bg.gif",className:"w-4 h-4"}):e.jsx($,{className:"text-base"})})]})]})},oe=({data:p,setPage:c,getBlog:n})=>e.jsx("div",{className:"flex flex-col",children:e.jsx("div",{className:"overflow-x-auto sm:-mx-6 lg:-mx-8",children:e.jsx("div",{className:"inline-block min-w-full py-2 sm:px-6 lg:px-8",children:e.jsx("div",{className:"overflow-hidden",children:e.jsxs("table",{className:"min-w-full text-center text-sm font-light",children:[e.jsx("thead",{className:"border-b border-l border-b3 bg-b3 font-medium text-white",children:e.jsxs("tr",{children:[e.jsx("th",{scope:"col",className:"px-6 py-4",children:"Title"}),e.jsx("th",{scope:"col",className:"px-6 py-4",children:"Description"}),e.jsx("th",{scope:"col",className:"px-6 py-4",children:"Category"}),e.jsx("th",{scope:"col",className:"px-6 py-4",children:"Action"})]})}),e.jsx("tbody",{children:p.map((r,l)=>e.jsx(le,{id:r._id,setPage:c,getBlog:n,title:r.title,slug:r.slug,desc:r.shortDescription,category:r.category},l))})]})})})})}),xe=()=>{const[p,c]=t.useState([]),[n,r]=t.useState(1),[l,C]=t.useState(4),[j,w]=t.useState(0),[h,d]=t.useState(!1),[x,T]=t.useState("all-categories"),[N,i]=t.useState(""),[f,S]=t.useState([]);t.useEffect(()=>{o()},[x,n]);const o=async s=>{d(!0);let a;s?(r(s),a={page:s,limit:l}):a={page:n,limit:l};const u=await se({category:x},a);u.status===200?(d(!1),c(u.data.helps),w(Math.ceil(u.data.totalCount/l))):(c([]),d(!1))},q=async s=>{s.preventDefault();const u=await te({title:N},{page:1,limit:l});u.status===200?(d(!1),c(u.data.blogs),w(Math.ceil(u.data.totalCount/l))):(c([]),d(!1))},[B,k]=t.useState([]),[D,v]=t.useState(""),[A,g]=t.useState(!1),[E,y]=t.useState(!1),[U,H]=t.useState(!1),[P,O]=t.useState([]),G=z().shape({title:_().required("Tab Title is required!")}),R=async s=>{s.preventDefault(),y(!0);try{const a={title:D};await G.validate(a,{abortEarly:!1});const b=await ae(a);b.status===200?(y(!1),m.success(b.data.msg,{position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"light"}),v(""),g(!1)):(m.error(b.data.message,{position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"light"}),y(!1),v(""),g(!1))}catch(a){a?(y(!1),v(""),g(!1),O(a.errors)):O([])}},I=async()=>{H(!0);const s=await re();s.status===200?(H(!1),k(s.data.helpTabs),S([{title:"All Categories"},...s.data.helpTabs])):(k([]),H(!1))};return t.useEffect(()=>{I()},[]),e.jsxs(e.Fragment,{children:[e.jsx(Q,{state:A,setState:g,children:e.jsxs("form",{className:"flex flex-col space-y-3",children:[e.jsx("h1",{className:"font-semibold",children:"Create Help & Support Tab"}),e.jsx(V,{width:"full",name:"title",title:"Tab Title",iscompulsory:"true",type:"text",value:D,onChange:s=>v(s.target.value),error:!!(P&&P.includes("Tab Title is required!")),errormessage:"Title is Required",placeholder:"Enter Tab Name"}),e.jsx("button",{onClick:R,type:"submit",className:"flex justify-center items-center cursor-pointer rounded-md py-1 w-full bg-b3",children:E?e.jsx("img",{src:"/loader-bg.gif",className:"w-8"}):e.jsxs("a",{className:"flex items-center text-center  w-fit px-4 py-1 rounded-md text-white font-semibold",children:[e.jsx("span",{className:"text-xs",children:"Create"}),e.jsx(X,{className:"text-2xl"})]})})]})}),e.jsxs(J,{children:[e.jsxs("div",{className:"flex items-center space-x-2 my-2 bg-white py-3 px-5 w-full",children:[e.jsx(L,{to:"/admin/create-help-support",className:"bg-b3 text-white text-xs px-3 rounded-2xl cursor-pointer py-2 font-bold",children:"Create Help & Support"}),e.jsx(K,{onChange:s=>T(s.target.value),options:f}),e.jsxs("div",{className:"flex w-full justify-end space-x-3",children:[e.jsx("input",{value:N,onChange:s=>i(s.target.value),placeholder:"Search Blog",className:"text-xs px-2 outline-none border border-b3 rounded-md"}),e.jsx("button",{onClick:q,className:"border border-b3 text-b3 text-xs px-2 rounded-md cursor-pointer py-1",children:"Search"})]})]}),h?e.jsx("div",{className:"flex items-center justify-center w-full",children:e.jsx("img",{src:"/loader-bg.gif",className:"w-10 h-10"})}):p?e.jsx(oe,{setPage:r,getBlog:o,data:p}):e.jsx("div",{className:"flex justify-center w-full h-full",children:e.jsx("img",{src:"/not-found.webp",className:"w-36 h-36"})}),j>=l?e.jsx(Y,{page:n,setPage:r,totalPages:j}):null,e.jsxs("div",{className:"flex w-full items-center space-x-3 mb-5",children:[e.jsx("h2",{className:"text-lg font-medium mt-5",children:"Help & Support Tabs"}),e.jsx("div",{className:"flex w-full justify-end space-x-3",children:e.jsx(W,{onClick:()=>g(!0),className:"text-b3 text-3xl shadow-xl rounded-full cursor-pointer"})})]}),U?e.jsx("div",{className:"flex items-center justify-center w-full",children:e.jsx("img",{src:"/loader-bg.gif",className:"w-10 h-10"})}):B.length>0?B.map((s,a)=>e.jsx("div",{className:"tab-buttons maxlg:order-2 lg:w-fit flex flex-col gap-2 mb-2",children:e.jsxs("div",{className:"p-2 xl:p-2 xl:text-sm font-semibold flex space-x-5 justify-between items-center text-left border border-[rgba(0,0,0,0.15)] rounded-2xl text-b23",children:[e.jsx("span",{children:s.title}),e.jsx("span",{className:"p-2 bg-b6 hover:bg-white border-b3 border-2  rounded-full cursor-pointer group",children:e.jsx(F,{onClick:()=>{setUpdateFaqPopup(!0),setUpdatedFaqTabTitle(s.title),setUpdatedFaqTabId(s._id)},className:"text-white group-hover:text-b3 text-sm shadow-xl"})})]})},a)):e.jsx("div",{className:"flex justify-center w-full h-full",children:e.jsx("img",{src:"/not-found.webp",className:"w-36 h-36"})})]})]})};export{xe as default};
