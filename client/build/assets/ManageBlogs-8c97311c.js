import{r as s,j as e,N as B,b9 as D,bb as L,ba as k,Q as f,bF as O}from"./index-a93bd96b.js";import{A as P}from"./AdminAccount-c95083b7.js";import{D as F,E as A,F as E}from"./admin-be5232e1.js";import{P as H}from"./Pagination2-dcd8550f.js";import{G as T}from"./category-e1ee196b.js";import{S as G}from"./SelectInput-01f89378.js";const M=({img:i,title:o,category:c,id:a,slug:r,getBlog:b,setPage:j})=>{const[m,g]=s.useState(!1),[n,u]=s.useState(!1),[w,h]=s.useState(!0),v=async(l,x)=>{l.preventDefault(),g(!0);const t=await F({slug:x});t.status===200?(g(!1),b(),f.success(t.data.msg,{position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"light"})):(g(!1),f.error(t.data.message,{position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"light"}))},y=async(l,x)=>{l.preventDefault(),j(1),u(!0);const t=await A({id:x});t.status===200?(u(!1),b(1),f.success(t.data.msg,{position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"light"})):(u(!1),f.error(t.data.message,{position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"light"}))},N=()=>{h(!1)};return e.jsxs("tr",{className:"border-b border-l border-r border-b6 text-xs",children:[e.jsx("td",{className:"px-5 py-3 capitalize",children:e.jsxs("div",{className:"relative",children:[w&&e.jsx("div",{className:"absolute flex items-center justify-center w-28 h-20",children:e.jsx("img",{src:"/loader-bg.gif",className:"w-5 h-5"})})," ",e.jsx("img",{src:i,onLoad:N,alt:"blog_thumbnail",className:"w-28 h-20"})]})}),e.jsxs("td",{className:"px-2 py-3 w-52 overflow-hidden",children:[o.substr(0,50),"..."]}),e.jsx("td",{className:"whitespace-nowrap  px-5 py-4 font-medium capitalize",children:c.replace(/-/g," ")}),e.jsxs("td",{className:"flex items-center justify-center mt-3 space-x-1 px-5 py-4",children:[e.jsx(B,{title:"Update blog",to:`/admin/update-blog/${r}`,className:"flex items-center justify-center bg-b3 text-white hover:bg-white hover:text-b3 border-2 border-white hover:border-b3 text-sm px-2 w-fit rounded-full cursor-pointer py-2",children:e.jsx(D,{className:"text-base"})}),e.jsx("span",{title:"Duplicate Blog",onClick:l=>v(l,r),className:"flex items-center justify-center bg-b7 text-white hover:bg-white hover:text-b7 border-2 border-white hover:border-b7 text-sm px-2 w-fit rounded-full cursor-pointer py-2",children:m?e.jsx("img",{src:"/loader-bg.gif",className:"w-4 h-4"}):e.jsx(L,{className:"text-lg"})}),e.jsx("span",{title:"Delete Blog",onClick:l=>y(l,a),className:"flex items-center justify-center bg-red-500/30 text-red-500 hover:bg-white hover:text-red-500 border-2 border-white hover:border-red-500 text-sm px-2 w-fit rounded-full cursor-pointer py-2",children:n?e.jsx("img",{src:"/loader-bg.gif",className:"w-4 h-4"}):e.jsx(k,{className:"text-base"})})]})]})},z=({data:i,setPage:o,getBlog:c})=>e.jsx("div",{className:"flex flex-col",children:e.jsx("div",{className:"overflow-x-auto sm:-mx-6 lg:-mx-8",children:e.jsx("div",{className:"inline-block min-w-full py-2 sm:px-6 lg:px-8",children:e.jsx("div",{className:"overflow-hidden",children:e.jsxs("table",{className:"min-w-full text-center text-sm font-light",children:[e.jsx("thead",{className:"border-b border-l border-b3 bg-b3 font-medium text-white",children:e.jsxs("tr",{children:[e.jsx("th",{scope:"col",className:"px-6 py-4 text-center",children:"Image"}),e.jsx("th",{scope:"col",className:"px-6 py-4",children:"Title"}),e.jsx("th",{scope:"col",className:"px-6 py-4",children:"Category"}),e.jsx("th",{scope:"col",className:"px-6 py-4",children:"Action"})]})}),e.jsx("tbody",{children:i.map((a,r)=>e.jsx(M,{id:a._id,setPage:o,getBlog:c,img:a.thumbnail?a.thumbnail:"/no-image.jfif",title:a.title,slug:a.slug,category:a.category},r))})]})})})})}),q=()=>{const[i,o]=s.useState([]),[c,a]=s.useState(1),[r,b]=s.useState(8),[j,m]=s.useState(0),[g,n]=s.useState(!1);s.useState(!1),s.useState(!1);const[u,w]=s.useState("all-categories"),[h,v]=s.useState(""),[y,N]=s.useState([]);s.useEffect(()=>{l()},[u,c]);const l=async t=>{n(!0);let p;t?(a(t),p={page:t,limit:r}):p={page:c,limit:r};const d=await O({category:u},p);d.status===200?(n(!1),o(d.data.blogs),m(Math.ceil(d.data.totalCount/r))):(o([]),n(!1))};s.useEffect(()=>{x()},[]);const x=async()=>{const t=await T();t.status===200&&N([{title:"All Categories"},...t.data.categories])},C=async t=>{t.preventDefault();const d=await E({title:h},{page:1,limit:r});d.status===200?(n(!1),o(d.data.blogs),m(Math.ceil(d.data.totalCount/r))):(o([]),n(!1))};return e.jsx(e.Fragment,{children:e.jsxs(P,{children:[e.jsxs("div",{className:"flex items-center space-x-2 my-2 bg-white py-3 px-5 w-full",children:[e.jsx(B,{to:"/admin/create-blog",className:"bg-b3 text-white text-xs px-3 rounded-2xl cursor-pointer py-2 font-bold",children:"Create Blog"}),e.jsx(G,{onChange:t=>w(t.target.value),options:y}),e.jsxs("div",{className:"flex w-full justify-end space-x-3",children:[e.jsx("input",{value:h,onChange:t=>v(t.target.value),placeholder:"Search Blog",className:"text-xs px-2 outline-none border border-b3 rounded-md"}),e.jsx("button",{onClick:C,className:"border border-b3 text-b3 text-xs px-2 rounded-md cursor-pointer py-1",children:"Search"})]})]}),g?e.jsx("div",{className:"flex items-center justify-center w-full",children:e.jsx("img",{src:"/loader-bg.gif",className:"w-10 h-10"})}):i.length>0?e.jsx(z,{setPage:a,getBlog:l,data:i}):e.jsx("div",{className:"flex justify-center w-full h-full",children:e.jsx("img",{src:"/not-found.webp",className:"w-36 h-36"})}),i.length>r?e.jsx(H,{page:c,setPage:a,totalPages:j}):null]})})};export{q as default};
