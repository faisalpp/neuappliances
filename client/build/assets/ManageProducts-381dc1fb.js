import{j as e,N as c,x,y as m,o as p,av as h,r as i,Y as u}from"./index-7e2d3c57.js";import{A as j}from"./AdminAccount-1cbfd8d6.js";import{z as b}from"./admin-5dfc3686.js";import{P as f}from"./Pagination2-fd586127.js";const N=({img:t,title:s,salePrice:l,regularPrice:a,rating:o})=>{const r=({numberOfTimes:d})=>{const n=Array.from({length:d},(w,y)=>e.jsx(p,{className:"text-b7 text-base"}));return e.jsx("div",{className:"flex justify-center items-center mt-2",children:n})};return e.jsxs("tr",{className:"border-b border-l border-r border-b6 text-xs",children:[e.jsx("td",{className:"px-5 py-3 capitalize",children:e.jsx("img",{src:t,className:"w-14"})}),e.jsx("td",{className:"whitespace-nowrap px-5 py-3 capitalize",children:s}),e.jsx("td",{className:"whitespace-nowrap  px-5 py-4 font-medium",children:e.jsxs("strike",{children:["$",l]})}),e.jsxs("td",{className:"whitespace-nowrap  px-5 py-4 font-medium",children:["$",a]}),e.jsx("td",{className:"whitespace-nowrap  px-5 py-4 text-b6 font-medium",children:e.jsx(r,{numberOfTimes:o})}),e.jsxs("td",{className:"flex items-center justify-center mt-3 space-x-1 px-5 py-4",children:[e.jsx(c,{title:"View Section Item",to:"/admin/update-customer",className:"flex items-center justify-center bg-b3 text-white hover:bg-white hover:text-b3 border-2 border-white hover:border-b3 text-sm px-2 w-fit rounded-full cursor-pointer py-2",children:e.jsx(x,{className:"text-base"})}),e.jsx(c,{title:"View Section Item",to:"/admin/delete-section",className:"flex items-center justify-center bg-red-500/30 text-red-500 hover:bg-white hover:text-red-500 border-2 border-white hover:border-red-500 text-sm px-2 w-fit rounded-full cursor-pointer py-2",children:e.jsx(m,{className:"text-base"})})]})]})},g=({data:t})=>e.jsx("div",{className:"flex flex-col",children:e.jsx("div",{className:"overflow-x-auto sm:-mx-6 lg:-mx-8",children:e.jsx("div",{className:"inline-block min-w-full py-2 sm:px-6 lg:px-8",children:e.jsx("div",{className:"overflow-hidden",children:e.jsxs("table",{className:"min-w-full text-center text-sm font-light",children:[e.jsx("thead",{className:"border-b border-l border-b3 bg-b3 font-medium text-white",children:e.jsxs("tr",{children:[e.jsx("th",{scope:"col",className:"px-6 py-4",children:e.jsx(h,{})}),e.jsx("th",{scope:"col",className:"px-6 py-4",children:"Title"}),e.jsx("th",{scope:"col",className:"px-6 py-4",children:"Sale Price"}),e.jsx("th",{scope:"col",className:"px-6 py-4",children:"Reguler Price"}),e.jsx("th",{scope:"col",className:"px-6 py-4",children:"Rating"}),e.jsx("th",{scope:"col",className:"px-6 py-4",children:"Action"})]})}),e.jsx("tbody",{children:t.map(s=>e.jsx(N,{img:s.images[0],title:s.title,salePrice:s.salePrice,regularPrice:s.regularPrice,rating:s.rating}))})]})})})})}),F=()=>{const[t,s]=i.useState([]),[l,a]=i.useState(!1);i.useEffect(()=>{o()},[]);const o=async()=>{a(!0);const r=await b();console.log(r),r.status===200?(a(!1),s(r.data.products)):console.log("No Products Found!")};return e.jsx(e.Fragment,{children:l?e.jsx(u,{}):e.jsxs(j,{children:[e.jsxs("div",{className:"flex items-center mb-2 bg-white py-3 px-5 w-full",children:[e.jsx(c,{to:"/admin/create-product",className:"bg-b3 text-white text-xs px-3 rounded-2xl cursor-pointer py-2",children:"Create Product"}),e.jsxs("div",{className:"flex w-full justify-end space-x-3",children:[e.jsx("input",{placeholder:"Search Product",className:"text-xs px-2 outline-none border border-b3 rounded-md"}),e.jsx(c,{to:"/admin/create-product",className:"border border-b3 text-b3 text-xs px-2 rounded-md cursor-pointer py-1",children:"Search"})]})]}),e.jsx(g,{data:t}),e.jsx(f,{page:1,totalPages:10})]})})};export{F as default};
