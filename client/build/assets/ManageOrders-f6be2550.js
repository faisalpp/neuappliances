import{j as e,N as t,bd as a,be as c}from"./index-c6e12165.js";import{A as i}from"./AdminAccount-7908d5f9.js";import{P as o}from"./Pagination2-a0ad7515.js";const r=({orderNo:l,date:d,status:s,id:x})=>e.jsxs("tr",{className:"border-b border-l border-r border-b6 text-xs",children:[e.jsxs("td",{className:"whitespace-nowrap px-5 py-3 capitalize",children:["#",l]}),e.jsx("td",{className:"whitespace-nowrap px-5 py-3 capitalize",children:d}),e.jsxs("td",{className:"whitespace-nowrap px-5 py-3 capitalize",children:[s==="Pending"?e.jsx("span",{className:"bg-yellow-500/20 text-yellow-500 px-2 rounded-2xl py-1",children:"Pending"}):null,s==="Rejected"?e.jsx("span",{className:"bg-red-500/20 text-red-500 px-2 rounded-2xl py-1",children:"Rejected"}):null,s==="Completed"?e.jsx("span",{className:"bg-b6/20 text-b6 px-2 rounded-2xl py-1",children:"Completed"}):null,s==="Processing"?e.jsx("span",{className:"bg-b10/20 text-b10 px-2 rounded-2xl py-1",children:"Processing"}):null]}),e.jsx("td",{className:"whitespace-nowrap  px-5 py-4 text-b6 font-medium",children:"$123.00"}),e.jsxs("td",{className:"flex items-center justify-center whitespace-nowrap space-x-1 px-5 py-4",children:[e.jsx(t,{title:"View Section Item",to:"/admin/update-order",className:"flex items-center justify-center bg-b3 text-white hover:bg-white hover:text-b3 border-2 border-white hover:border-b3 text-sm px-2 w-fit rounded-full cursor-pointer py-2",children:e.jsx(a,{className:"text-base"})}),e.jsx(t,{title:"View Section Item",to:"/admin/delete-section",className:"flex items-center justify-center bg-red-500/30 text-red-500 hover:bg-white hover:text-red-500 border-2 border-white hover:border-red-500 text-sm px-2 w-fit rounded-full cursor-pointer py-2",children:e.jsx(c,{className:"text-base"})})]})]}),n=({sections:l,categoryTitle:d})=>e.jsx("div",{className:"flex flex-col",children:e.jsx("div",{className:"overflow-x-auto sm:-mx-6 lg:-mx-8",children:e.jsx("div",{className:"inline-block min-w-full py-2 sm:px-6 lg:px-8",children:e.jsx("div",{className:"overflow-hidden",children:e.jsxs("table",{className:"min-w-full text-center text-sm font-light",children:[e.jsx("thead",{className:"border-b border-l border-b3 bg-b3 font-medium text-white",children:e.jsxs("tr",{children:[e.jsx("th",{scope:"col",className:" px-6 py-4",children:"Order #"}),e.jsx("th",{scope:"col",className:" px-6 py-4",children:"Date"}),e.jsx("th",{scope:"col",className:" px-6 py-4",children:"Status"}),e.jsx("th",{scope:"col",className:" px-6 py-4",children:"Total"}),e.jsx("th",{scope:"col",className:" px-6 py-4",children:"Actions"})]})}),e.jsxs("tbody",{children:[e.jsx(r,{orderNo:"12345",date:"July 13, 2023",status:"Pending",id:"1"}),e.jsx(r,{orderNo:"12345",date:"July 13, 2023",status:"Processing",id:"1"}),e.jsx(r,{orderNo:"12345",date:"July 13, 2023",status:"Completed",id:"1"}),e.jsx(r,{orderNo:"12345",date:"July 13, 2023",status:"Rejected",id:"1"})]})]})})})})}),b=()=>e.jsx(e.Fragment,{children:e.jsxs(i,{children:[e.jsxs("div",{className:"flex items-center mb-2 bg-white py-3 px-5 w-full",children:[e.jsx(t,{to:"/admin/create-product",className:"bg-b3 text-white text-xs px-3 rounded-2xl cursor-pointer py-2",children:"Create Order"}),e.jsxs("div",{className:"flex w-full justify-end space-x-3",children:[e.jsx("input",{placeholder:"Search #12345",className:"text-xs px-2 outline-none border border-b3 rounded-md"}),e.jsx(t,{to:"/admin/create-product",className:"border border-b3 text-b3 text-xs px-2 rounded-md cursor-pointer py-1",children:"Search"})]})]}),e.jsx(n,{}),e.jsx(o,{page:1,totalPages:10})]})});export{b as default};
