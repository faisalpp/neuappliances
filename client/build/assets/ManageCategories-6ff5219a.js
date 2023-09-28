import{r as i,j as e,N as u,bd as D,be as P,bh as I,Q as n,i as O}from"./index-c6e12165.js";import{A}from"./AdminAccount-7908d5f9.js";import{G as k,u as B,d as E}from"./category-b57af634.js";import{D as _,C as F,P as H}from"./react-beautiful-dnd.esm-05fc7807.js";const z=()=>{const[o,c]=i.useState([]),[p,d]=i.useState(!1),[h,f]=i.useState(""),g=async()=>{d(!0);const s=await k();s.status===200?(d(!1),c(s.data.categories)):(c([]),d(!1))};i.useEffect(()=>{g()},[]);const[b,x]=i.useState(!1),j=async()=>{x(!0);const s=await B(o);console.log(s),s.status===200?(x(!1),n.success(s.data.msg,{position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"light"}),GetMembers()):(x(!1),n.error(s.data.message,{position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"light"}))},N=({numberOfTimes:s})=>{const t=Array.from({length:s},(a,r)=>e.jsx(O,{className:"text-b7"},r));return e.jsx("div",{className:"flex items-center",children:t})},w=s=>s&&s.split("-").map(function(l){return l.charAt(0).toUpperCase()+l.slice(1)}).join(" "),C=s=>{const t=Array.from(o),[a]=t.splice(s.source.index,1);t.splice(s.destination.index,0,a);const r=t.map((l,S)=>({...l,index:S+1}));c(r)},[v,m]=i.useState(""),y=async(s,t)=>{s.preventDefault(),m(t);const r=await E({id:t});r.status===200?(m(!1),g(),n.success(r.data.msg,{position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"light"})):(m(""),n.error(r.data.message,{position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"light"}))};return e.jsx(e.Fragment,{children:e.jsxs(A,{children:[e.jsxs("div",{className:"flex items-center space-x-2 my-2 bg-white py-3 px-5 w-full",children:[e.jsx(u,{to:"/admin/create-category",className:"bg-b3 text-white text-xs px-3 rounded-2xl cursor-pointer py-2 font-bold",children:"Create Category"}),e.jsxs("div",{className:"flex w-full justify-end space-x-3",children:[e.jsx("input",{value:h,onChange:s=>f(s.target.value),placeholder:"Search Blog",className:"text-xs px-2 outline-none border border-b3 rounded-md"}),e.jsx("button",{className:"border border-b3 text-b3 text-xs px-2 rounded-md cursor-pointer py-1",children:"Search"})]})]}),p?e.jsx("div",{className:"flex items-center justify-center w-full",children:e.jsx("img",{src:"/loader-bg.gif",className:"w-10 h-10"})}):o.length>0?e.jsxs(_,{onDragEnd:C,className:"w-full h-full",children:[e.jsx(F,{droppableId:"categories",children:s=>e.jsxs("div",{...s.droppableProps,ref:s.innerRef,className:"grid  grid-cols-1 md:grid-cols-4 2xl:grid-cols-3 gap-2 xl:gap-5",children:[o.map((t,a)=>e.jsx(H,{draggableId:t._id,index:a,children:r=>e.jsx("div",{...r.draggableProps,...r.dragHandleProps,ref:r.innerRef,className:"populerbrands",children:e.jsxs("div",{className:"rounded-2xl border border-gray-300 p-3 h-fit w-fit flex flex-col justify-center items-center",children:[e.jsx("img",{src:t.image,className:"max-w-full h-[133px] object-contain",alt:t.title}),e.jsx("h3",{className:"font-semibold px-3 text-center text-xs",children:w(t.title)}),e.jsx("h3",{className:"font-semibold px-3 text-center text-xs",children:e.jsx(N,{numberOfTimes:t.rating})}),e.jsxs("div",{className:"flex space-x-2 mt-2",children:[e.jsx(u,{to:`/admin/update-category/${t._id}`,title:"Edit Category",className:"flex items-center justify-center bg-b3 text-white hover:bg-white hover:text-b3 border-2 border-white hover:border-b3 text-sm px-2 rounded-full cursor-pointer py-2",children:e.jsx(D,{className:"text-base"})}),e.jsx("span",{onClick:l=>y(l,t._id),title:"Delete Category",className:"flex items-center justify-center bg-red-500/30 text-red-500 hover:bg-white hover:text-red-500 border-2 border-white hover:border-red-500 text-sm px-2 w-fit rounded-full cursor-pointer py-2",children:v===t._id?e.jsx("img",{src:"/loader-bg.gif",className:"w-4 h-4"}):e.jsx(P,{className:"text-base"})}),e.jsxs(u,{to:`/admin/manage-category-sections/${t.slug}`,title:"View Sections",className:"flex items-center justify-center bg-b7/30 text-b7 hover:bg-white hover:b7 border-2 border-white hover:border-b7 text-sm px-[7px] w-fit rounded-full cursor-pointer py-1",children:[" ",e.jsx(I,{className:"text-lg"})]})]})]})})},t._id)),s.placeholder]})}),e.jsx("div",{className:"flex justify-end w-full mt-5",children:e.jsx("button",{type:"button",onClick:j,className:"flex justify-center items-center cursor-pointer rounded-md py-1 w-fit bg-b3",children:b?e.jsx("img",{src:"/loader-bg.gif",className:"w-8"}):e.jsx("a",{className:"flex items-center text-center  w-fit px-4 py-1 rounded-md text-white font-semibold",children:e.jsx("span",{className:"text-xs",children:"Save"})})})})]}):e.jsx("div",{className:"flex justify-center w-full h-full",children:e.jsx("img",{src:"/not-found.webp",className:"w-36 h-36"})})]})})};export{z as default};
