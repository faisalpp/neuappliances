import{r as s,j as e,N as B,b9 as D,bb as L,ba as T,Q as j,b5 as k}from"./index-4f6f68a5.js";import{P as O}from"./Pagination2-fbb157dd.js";import{d as A,a as P,G,g as H}from"./applianceTips-f20ed8b2.js";import{G as E}from"./category-3eaaabef.js";import{S as F}from"./SelectInput-57f9bc98.js";const M=({img:n,title:o,category:c,id:a,slug:r,getBlog:w,setPage:x})=>{const[m,u]=s.useState(!1),[i,d]=s.useState(!1),[y,h]=s.useState(!0),v=async(l,p)=>{l.preventDefault(),u(!0);const t=await A({slug:p});t.status===200?(u(!1),w(),j.success(t.data.msg,{position:"top-right",autoClose:2e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"light"})):(u(!1),j.error(t.data.message,{position:"top-right",autoClose:2e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"light"}))},N=async(l,p)=>{l.preventDefault(),x(1),d(!0);const t=await P({id:p});t.status===200?(d(!1),w(1),j.success(t.data.msg,{position:"top-right",autoClose:2e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"light"})):(d(!1),j.error(t.data.message,{position:"top-right",autoClose:2e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"light"}))},C=()=>{h(!1)};return e.jsxs("tr",{className:"border-b border-l border-r border-b6 text-xs",children:[e.jsx("td",{className:"px-5 py-3 capitalize",children:e.jsxs("div",{className:"relative",children:[y&&e.jsx("div",{className:"absolute flex items-center justify-center w-28 h-20",children:e.jsx("img",{src:"/loader-bg.gif",className:"w-5 h-5"})})," ",e.jsx("img",{src:n,onLoad:C,alt:"blog_thumbnail",className:"w-28 h-20"})]})}),e.jsxs("td",{className:"px-2 py-3 w-52 overflow-hidden",children:[o.substr(0,50),"..."]}),e.jsx("td",{className:"whitespace-nowrap  px-5 py-4 font-medium capitalize",children:c.replace(/-/g," ")}),e.jsxs("td",{className:"flex items-center justify-center mt-3 space-x-1 px-5 py-4",children:[e.jsx(B,{title:"Update blog",to:`/admin/update-blog/${r}`,className:"flex items-center justify-center bg-b3 text-white hover:bg-white hover:text-b3 border-2 border-white hover:border-b3 text-sm px-2 w-fit rounded-full cursor-pointer py-2",children:e.jsx(D,{className:"text-base"})}),e.jsx("span",{title:"Duplicate Blog",onClick:l=>v(l,r),className:"flex items-center justify-center bg-b7 text-white hover:bg-white hover:text-b7 border-2 border-white hover:border-b7 text-sm px-2 w-fit rounded-full cursor-pointer py-2",children:m?e.jsx("img",{src:"/loader-bg.gif",className:"w-4 h-4"}):e.jsx(L,{className:"text-lg"})}),e.jsx("span",{title:"Delete Blog",onClick:l=>N(l,a),className:"flex items-center justify-center bg-red-500/30 text-red-500 hover:bg-white hover:text-red-500 border-2 border-white hover:border-red-500 text-sm px-2 w-fit rounded-full cursor-pointer py-2",children:i?e.jsx("img",{src:"/loader-bg.gif",className:"w-4 h-4"}):e.jsx(T,{className:"text-base"})})]})]})},z=({data:n,setPage:o,getBlog:c})=>e.jsx("div",{className:"flex flex-col",children:e.jsx("div",{className:"overflow-x-auto sm:-mx-6 lg:-mx-8",children:e.jsx("div",{className:"inline-block min-w-full py-2 sm:px-6 lg:px-8",children:e.jsx("div",{className:"overflow-hidden",children:e.jsxs("table",{className:"min-w-full text-center text-sm font-light",children:[e.jsx("thead",{className:"border-b border-l border-b3 bg-b3 font-medium text-white",children:e.jsxs("tr",{children:[e.jsx("th",{scope:"col",className:"px-6 py-4 text-center",children:"Image"}),e.jsx("th",{scope:"col",className:"px-6 py-4",children:"Title"}),e.jsx("th",{scope:"col",className:"px-6 py-4",children:"Category"}),e.jsx("th",{scope:"col",className:"px-6 py-4",children:"Action"})]})}),e.jsx("tbody",{children:n.map((a,r)=>e.jsx(M,{id:a._id,setPage:o,getBlog:c,img:a.thumbnail?a.thumbnail:"/no-image.jfif",title:a.title,slug:a.slug,category:a.category},r))})]})})})})}),$=()=>{const[n,o]=s.useState([]),[c,a]=s.useState(1),[r,w]=s.useState(4),[x,m]=s.useState(0),[u,i]=s.useState(!1),[d,y]=s.useState("all-categories"),[h,v]=s.useState(""),[N,C]=s.useState([]);s.useEffect(()=>{l()},[d,c]);const l=async t=>{i(!0);let g;t?(a(t),g={page:t,limit:r}):g={page:c,limit:r};const b=await G({category:d},g);console.log(b),b.status===200?(i(!1),o(b.data.tips),m(Math.ceil(b.data.totalCount/r))):(o([]),i(!1))},p=async t=>{t.preventDefault(),i(!0);const f=await H({title:h});f.status===200?(i(!1),o(f.data.tips),m(Math.ceil(f.data.totalCount/r))):(o([]),i(!1))};s.useEffect(()=>{S()},[]);const S=async()=>{const t=await E();console.log(t),t.status===200&&C([{title:"All Categories"},...t.data.categories])};return e.jsx(e.Fragment,{children:e.jsxs(k,{children:[e.jsxs("div",{className:"flex items-center space-x-2 my-2 bg-white py-3 px-5 w-full",children:[e.jsx(B,{to:"/admin/create-appliance-tips",className:"bg-b3 text-white text-xs px-3 rounded-2xl cursor-pointer py-2 font-bold",children:"Create Appliance Tip"}),e.jsx(F,{name:"catego",onChange:t=>y(t.target.value),options:N}),e.jsxs("div",{className:"flex w-full justify-end space-x-3",children:[e.jsx("input",{value:h,onChange:t=>v(t.target.value),placeholder:"Search Blog",className:"text-xs px-2 outline-none border border-b3 rounded-md"}),e.jsx("button",{onClick:p,className:"border border-b3 text-b3 text-xs px-2 rounded-md cursor-pointer py-1",children:"Search"})]})]}),u?e.jsx("div",{className:"flex items-center justify-center w-full",children:e.jsx("img",{src:"/loader-bg.gif",className:"w-10 h-10"})}):n.length>0?e.jsx(z,{setPage:a,getBlog:l,data:n}):e.jsx("div",{className:"flex justify-center w-full h-full",children:e.jsx("img",{src:"/not-found.webp",className:"w-36 h-36"})}),x>=r?e.jsx(O,{page:c,setPage:a,totalPages:x}):null]})})};export{$ as default};
