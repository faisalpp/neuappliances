import{r,j as e,be as A,aN as C,N as o,cg as M,K as S,ch as Y,aR as m,bi as k,ci as D}from"./index-34a93641.js";const T=()=>{const[t,u]=r.useState([]),[l,h]=r.useState(1),[d,P]=r.useState(16),[p,f]=r.useState(0),[j,c]=r.useState(!1),[n,b]=r.useState("user"),N=async()=>{c(!0);const a=await Y({page:l,limit:d},{userType:n});a.status===200?(c(!1),u(a.data.customers),f(Math.ceil(a.data.totalCount/d))):c(!1)};r.useEffect(()=>{N()},[l,n]);const g=({id:s,name:a,lastOrder:i,dateRegisterd:y,email:x,totalOrders:w,totalAmount:v})=>e.jsxs("tr",{className:"border-b border-l border-r border-b6 text-xs font-medium",children:[e.jsx("td",{className:"px-2 py-3",children:a}),e.jsx("td",{className:"px-5 py-3",children:i?m(i).format("DD MMMM YYYY"):"N/A"}),e.jsx("td",{className:"px-10 py-3",children:m(y).format("DD MMMM YYYY")}),e.jsx("td",{className:"py-3",children:e.jsx("a",{href:`mailto:${x}`,className:"underline text-b6",children:x})}),e.jsx("td",{className:"px-5 py-3",children:w}),e.jsxs("td",{className:"px-5 py-3 text-b7",children:["$",v]}),e.jsx("td",{children:e.jsxs("div",{className:"flex items-center justify-center space-x-2 h-full",children:[e.jsx(o,{title:"View Customer",to:`/admin/update-customer/${s}`,className:"flex items-center justify-center bg-b3 text-white hover:bg-white hover:text-b3 border-2 border-b3 hover:border-b3 text-xs px-1 w-fit h-fit rounded-full cursor-pointer py-1",children:e.jsx(k,{className:"text-sm"})}),e.jsx(o,{title:"Block Customer",to:"/admin/block-customer/:id",className:"flex items-center justify-center bg-red-500 text-white hover:bg-white hover:text-red-500 border-[1px] border-red-500 hover:border-red-500 text-sm w-fit h-fit rounded-full cursor-pointer px-1 py-1",children:e.jsx(D,{className:"text-base"})})]})})]});return e.jsx(e.Fragment,{children:e.jsxs(A,{children:[e.jsxs("div",{className:"flex items-center mb-2 bg-white py-3 px-5 w-full",children:[e.jsx("div",{className:"w-1/2",children:e.jsx(C,{onChange:s=>b(s.target.value),options:["User","Admin"]})}),e.jsxs("div",{className:"flex w-full justify-end space-x-3",children:[e.jsx("input",{placeholder:"Search Customer",className:"text-xs px-2 outline-none border border-b3 rounded-md"}),e.jsx(o,{to:"/admin/create-product",className:"border border-b3 text-b3 text-xs px-2 rounded-md cursor-pointer py-1",children:"Search"})]})]}),j?e.jsx("div",{className:"flex w-full justify-center h-24 items-center",children:e.jsx("img",{src:"/loading.gif",className:"h-12"})}):t.length>0?e.jsxs(e.Fragment,{children:[e.jsx(M,{head:["Name","Last Order","Date Registerd","Email","Orders","Total Spend","Action"],children:(t==null?void 0:t.length)>0?t==null?void 0:t.map(s=>e.jsx(g,{id:s.customer._id,name:`${s.customer.firstName} ${s.customer.lastName}`,lastOrder:s.lastOrder,dateRegisterd:s.customer.createdAt,email:s.customer.email,totalOrders:s.orderCount,totalAmount:s.totalAmount})):null}),e.jsx(S,{page:l,setPage:h,totalPages:p})]}):e.jsx("div",{className:"flex w-full justify-center h-52 items-center",children:e.jsx("img",{src:"/not-found.webp",className:"w-32"})})]})})};export{T as default};
