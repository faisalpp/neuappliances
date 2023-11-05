import{r as l,j as e,N,by as v,cl as O,cm as A,cn as S,q as g,co as P,bv as C,aX as L,cp as D,cq as M}from"./index-1c659439.js";import{B as y}from"./BtnLoader-518c1c01.js";import{h as T}from"./moment-fbc5633a.js";import{P as k}from"./Pagination2-7403db2e.js";const B=({id:r,orderNo:n,date:s,orderStatus:i,isArchived:h,paymentStatus:b,total:f,refreshOrders:p})=>{const[c,m]=l.useState(!1),j=async(a,u)=>{a.preventDefault(),m(!0);const t=await S({orderId:u});t.status===200?(g(t.data.msg,"success",1e3),m(!1),p()):(g(t.data.message,"error",1e3),m(!1))},[o,x]=l.useState(!1),w=async(a,u)=>{a.preventDefault(),x(!0);const t=await P({orderId:u});t.status===200?(g(t.data.msg,"success",1e3),x(!1),p()):(g(t.data.message,"error",1e3),x(!1))};return e.jsxs("tr",{className:"border-b border-l border-r border-b6 text-xs",children:[e.jsx("td",{className:"whitespace-nowrap px-5 py-3",children:n}),e.jsx("td",{className:"whitespace-nowrap px-5 py-3 capitalize",children:s}),e.jsxs("td",{className:"whitespace-nowrap px-5 py-3 capitalize",children:[i==="pending"?e.jsx("span",{className:"bg-yellow-500/20 text-yellow-700 px-2 rounded-2xl py-1",children:"Pending"}):null,i==="canceled"?e.jsx("span",{className:"bg-red-500/20 text-red-500 px-2 rounded-2xl py-1",children:"Rejected"}):null,i==="completed"?e.jsx("span",{className:"bg-b6/20 text-b6 px-2 rounded-2xl py-1",children:"Completed"}):null,i==="processing"?e.jsx("span",{className:"bg-b10/20 text-b10 px-2 rounded-2xl py-1",children:"Processing"}):null,i==="shipping"?e.jsx("span",{className:"bg-b10/20 text-b10 px-2 rounded-2xl py-1",children:"Processing"}):null]}),e.jsxs("td",{className:"whitespace-nowrap px-5 py-3 capitalize",children:[b==="pending"?e.jsx("span",{className:"bg-yellow-500/20 text-yellow-700 px-2 rounded-2xl py-1",children:"Pending"}):null,b==="declined"?e.jsx("span",{className:"bg-red-500/20 text-red-500 px-2 rounded-2xl py-1",children:"Rejected"}):null,b==="completed"?e.jsx("span",{className:"bg-b6/20 text-b6 px-2 rounded-2xl py-1",children:"Completed"}):null]}),e.jsxs("td",{className:"whitespace-nowrap  px-5 py-4 text-b6 font-medium",children:["$",f]}),e.jsxs("td",{className:"flex items-center justify-center whitespace-nowrap space-x-1 px-5 py-4",children:[e.jsx(N,{title:"View Order",to:`/admin/update-order/${n}`,className:"flex items-center justify-center bg-b3 text-white hover:bg-white hover:text-b3 border-2 border-white hover:border-b3 text-sm px-2 w-fit rounded-full cursor-pointer py-2",children:e.jsx(v,{className:"text-base"})}),h?e.jsx(e.Fragment,{children:o?e.jsx("button",{title:"UnArchive Order",className:"flex items-center justify-center bg-green-500 text-white hover:bg-white hover:text-green-500 border-2 border-white hover:border-green-500 text-sm w-9 h-9 rounded-full cursor-wait",children:e.jsx(y,{style:"w-3 h-3"})}):e.jsx("button",{onClick:a=>w(a,r),title:"UnArchive Order",className:"flex items-center justify-center bg-green-500 text-white hover:bg-white hover:text-green-500 border-2 border-white hover:border-green-500 text-sm px-2 w-fit rounded-full cursor-pointer py-2",children:e.jsx(O,{className:"text-base"})})}):e.jsx(e.Fragment,{children:c?e.jsx("button",{title:"Archive Order",className:"flex items-center justify-center bg-orange-500 text-white hover:bg-white hover:text-orange-500 border-2 border-white hover:border-orange-500 text-sm w-9 h-9 rounded-full cursor-wait",children:e.jsx(y,{style:"w-3 h-3"})}):e.jsx("button",{onClick:a=>j(a,r),title:"Archive Order",className:"flex items-center justify-center bg-orange-500 text-white hover:bg-white hover:text-orange-500 border-2 border-white hover:border-orange-500 text-sm px-2 w-fit rounded-full cursor-pointer py-2",children:e.jsx(A,{className:"text-base"})})})]})]})},R=({orders:r,refreshOrders:n})=>e.jsx("div",{className:"flex flex-col",children:e.jsx("div",{className:"overflow-x-auto sm:-mx-6 lg:-mx-8",children:e.jsx("div",{className:"inline-block min-w-full py-2 sm:px-6 lg:px-8",children:e.jsx("div",{className:"overflow-hidden",children:e.jsxs("table",{className:"min-w-full text-center text-sm font-light",children:[e.jsx("thead",{className:"border-b border-l border-b3 bg-b3 font-medium text-white",children:e.jsxs("tr",{children:[e.jsx("th",{scope:"col",className:" px-6 py-4",children:"Order #"}),e.jsx("th",{scope:"col",className:" px-6 py-4",children:"Date"}),e.jsx("th",{scope:"col",className:" px-6 py-4",children:"Order Status"}),e.jsx("th",{scope:"col",className:" px-6 py-4",children:"Payment Status"}),e.jsx("th",{scope:"col",className:" px-6 py-4",children:"Total"}),e.jsx("th",{scope:"col",className:" px-6 py-4",children:"Actions"})]})}),e.jsx("tbody",{children:r!=null&&r.length?r.map(s=>e.jsx(B,{isArchived:s.isArchived,orderStatus:s.orderStatus,paymentStatus:s.paymentStatus,refreshOrders:n,id:s._id,orderNo:s.orderNo,date:T(s.createdAt).format("DD MMMM YYYY"),status:s.orderStatus,total:s.grandTotal})):null})]})})})})}),I=()=>{const[r,n]=l.useState([]),[s,i]=l.useState(1),[h,b]=l.useState(16),[f,p]=l.useState(0),[c,m]=l.useState(""),[j,o]=l.useState(!1),[x,w]=l.useState("all-orders"),a=async()=>{o(!0);const d=await D({page:s,limit:h},{orderType:x});d.status===200?(o(!1),n(d.data.orders),p(Math.ceil(d.data.totalCount/h))):(o(!1),n([]))};l.useEffect(()=>{(c==null?void 0:c.length)===0&&a()},[x,s,c]);const u=async t=>{console.log("searfch"),t.preventDefault(),o(!0);const d=await M({orderNo:c});d.status===200?(o(!1),n(d.data.orders),p(Math.ceil(d.data.totalCount/h))):(o(!1),n([]))};return e.jsx(e.Fragment,{children:e.jsxs(C,{children:[e.jsxs("div",{className:"flex space-x-5 items-center mb-2 bg-white py-3 px-5 w-full",children:[e.jsx(N,{to:"/admin/create-order",className:"bg-b3 text-white text-xs px-3 rounded-2xl cursor-pointer py-2",children:"Create Order"}),e.jsx("div",{className:"w-96",children:e.jsx(L,{onChange:t=>w(t.target.value),options:["All Orders","Delivery","Pickup","Archived"]})}),e.jsxs("form",{onSubmit:u,className:"flex w-full justify-end space-x-3",children:[e.jsx("input",{name:"search",placeholder:"Search #12345",value:c,onChange:t=>m(t.target.value),className:"text-xs px-2 outline-none border border-b3 rounded-md"}),e.jsx("button",{className:"border border-b3 text-b3 text-xs px-2 rounded-md cursor-pointer py-1",children:"Search"})]})]}),j?e.jsx("div",{className:"flex w-full justify-center h-24 items-center",children:e.jsx("img",{src:"/loading.gif",className:"h-12"})}):r.length>0?e.jsxs(e.Fragment,{children:[e.jsx(R,{refreshOrders:a,orders:r}),e.jsx(k,{page:s,setPage:i,totalPages:f})]}):e.jsx("div",{className:"flex w-full justify-center h-52 items-center",children:e.jsx("img",{src:"/not-found.webp",className:"w-32"})})]})})};export{I as default};
