import{j as e,N as a,x as n}from"./index-7e2d3c57.js";import{A as d}from"./AdminAccount-1cbfd8d6.js";import{P as x}from"./Pagination2-fd586127.js";const s=({name:l,lastActive:r,dateReg:c,email:t,orders:o,totalSpend:i})=>e.jsxs("tr",{className:"border-b border-l border-r border-b6 text-xs",children:[e.jsx("td",{className:"whitespace-nowrap px-5 py-3 capitalize",children:l}),e.jsx("td",{className:"whitespace-nowrap px-5 py-3 capitalize",children:r}),e.jsx("td",{className:"whitespace-nowrap  px-5 py-4 font-medium",children:c}),e.jsx("td",{className:"whitespace-nowrap  px-5 py-4 text-b6 font-medium",children:e.jsx("a",{href:`mailto:${t}`,className:"underline",children:t})}),e.jsx("td",{className:"whitespace-nowrap  px-5 py-4 font-medium",children:o}),e.jsxs("td",{className:"whitespace-nowrap  px-5 py-4 text-b6 font-medium",children:["$",i]}),e.jsx("td",{className:"flex items-center justify-center whitespace-nowrap space-x-1 px-5 py-4",children:e.jsx(a,{title:"View Section Item",to:"/admin/update-customer",className:"flex items-center justify-center bg-b3 text-white hover:bg-white hover:text-b3 border-2 border-white hover:border-b3 text-sm px-2 w-fit rounded-full cursor-pointer py-2",children:e.jsx(n,{className:"text-base"})})})]}),m=()=>e.jsx("div",{className:"flex flex-col",children:e.jsx("div",{className:"overflow-x-auto sm:-mx-6 lg:-mx-8",children:e.jsx("div",{className:"inline-block min-w-full py-2 sm:px-6 lg:px-8",children:e.jsx("div",{className:"overflow-hidden",children:e.jsxs("table",{className:"min-w-full text-center text-sm font-light",children:[e.jsx("thead",{className:"border-b border-l border-r border-b3 bg-b3 font-medium text-white",children:e.jsxs("tr",{children:[e.jsx("th",{scope:"col",className:" px-6 py-4",children:"Name"}),e.jsx("th",{scope:"col",className:" px-6 py-4",children:"Last Active"}),e.jsx("th",{scope:"col",className:" px-6 py-4",children:"Date Registered"}),e.jsx("th",{scope:"col",className:" px-6 py-4",children:"Email"}),e.jsx("th",{scope:"col",className:" px-6 py-4",children:"Orders"}),e.jsx("th",{scope:"col",className:" px-6 py-4",children:"Total Spend"}),e.jsx("th",{scope:"col",className:" px-6 py-4",children:"Action"})]})}),e.jsxs("tbody",{children:[e.jsx(s,{name:"jhon Doe",lastActive:"July 13, 2023",dateReg:"July 13, 2023",email:"gagan@gmail.com",orders:1,totalSpend:360}),e.jsx(s,{name:"jhon Doe",lastActive:"July 13, 2023",dateReg:"July 13, 2023",email:"gagan@gmail.com",orders:1,totalSpend:360}),e.jsx(s,{name:"jhon Doe",lastActive:"July 13, 2023",dateReg:"July 13, 2023",email:"gagan@gmail.com",orders:1,totalSpend:360}),e.jsx(s,{name:"jhon Doe",lastActive:"July 13, 2023",dateReg:"July 13, 2023",email:"gagan@gmail.com",orders:1,totalSpend:360})]})]})})})})}),u=()=>e.jsx(e.Fragment,{children:e.jsxs(d,{children:[e.jsx("div",{className:"flex items-center mb-2 bg-white py-3 px-5 w-full",children:e.jsxs("div",{className:"flex w-full justify-end space-x-3",children:[e.jsx("input",{placeholder:"Search Customer",className:"text-xs px-2 outline-none border border-b3 rounded-md"}),e.jsx(a,{to:"/admin/create-product",className:"border border-b3 text-b3 text-xs px-2 rounded-md cursor-pointer py-1",children:"Search"})]})}),e.jsx(m,{}),e.jsx(x,{page:1,totalPages:10})]})});export{u as default};
