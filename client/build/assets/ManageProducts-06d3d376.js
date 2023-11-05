import{r as x,j as e,N as m,by as j,bz as g,bA as N,f as y,q as i,bB as w,D as v,bv as P}from"./index-1c659439.js";import{d as S,b as D,c as T}from"./admin-2b5bfc46.js";import{J as L}from"./TextTransform-2d0a7ae4.js";const A=({data:s,getProductss:a})=>{const[o,l]=x.useState(!1),[d,c]=x.useState(!1),u=({numberOfTimes:r})=>{const n=Array.from({length:r},(t,f)=>e.jsx(y,{className:"text-b7 text-base"},f));return e.jsx("div",{className:"flex justify-center items-center mt-2",children:n})},p=s.media.find(r=>r.file==="image"),h=async(r,n)=>{c(!0);try{const t=await S({pSlug:n});t.status===200?(i(t.data.msg,"success",1e3),a(),c(!1)):(i(t.data.message,"error",1e3),c(!1))}catch{c(!1),i("Internal Server Error!","error",1e3)}},b=async(r,n)=>{l(!0);try{const t=await D({pSlug:n});t.status===200?(i(t.data.msg,"success",1e3),a(),l(!1)):(i(t.data.message,"error",1e3),l(!1))}catch{l(!1),i("Internal Server Error!","error",1e3)}};return e.jsxs("tr",{className:"border-b border-l border-r border-b6 text-xs",children:[e.jsx("td",{className:"py-3 capitalize",children:e.jsx("img",{src:p.data,className:"h-32"})}),e.jsx("td",{className:" px-2 capitalize",children:s.title}),e.jsxs("td",{className:" px-5 py-4 font-medium",children:["$",s.salePrice]}),e.jsx("td",{className:" px-5 py-4 font-medium",children:e.jsxs("strike",{children:["$",s.regPrice]})}),e.jsx("td",{className:" px-5 py-4 font-semibold text-red-500",children:L.Cap1Char(s.productType)}),e.jsx("td",{className:" px-5 py-4 text-b6 font-medium",children:e.jsx(u,{numberOfTimes:s.rating})}),e.jsxs("td",{className:"px-5 py-4 space-y-1",children:[e.jsx(m,{title:"Update Product",to:`/admin/update-product/${s.slug}`,className:"flex items-center justify-center bg-b3 text-white hover:bg-white hover:text-b3 border-2 border-white hover:border-b3 text-sm px-2 w-fit rounded-full cursor-pointer py-2",children:e.jsx(j,{className:"text-base"})}),e.jsx("span",{title:"Delete Product",onClick:r=>{d||h(r,s.slug)},className:"flex items-center justify-center bg-red-500/30 text-red-500 hover:bg-white hover:text-red-500 border-2 border-white hover:border-red-500 text-sm px-2 w-fit rounded-full cursor-pointer py-2",children:d?e.jsx("img",{src:"/loader-bg.gif",className:"w-4 h-4"}):e.jsx(g,{className:"text-base"})}),e.jsx("span",{title:"Duplicate Product",onClick:r=>{o||b(r,s.slug)},className:"flex items-center justify-center bg-b7 text-white hover:bg-white hover:text-b7 border-2 border-white hover:border-b7 text-sm px-2 w-fit rounded-full cursor-pointer py-2",children:o?e.jsx("img",{src:"/loader-bg.gif",className:"w-4 h-4"}):e.jsx(N,{className:"text-lg"})})]})]})},I=({data:s,getProducts:a})=>e.jsx("div",{className:"flex flex-col",children:e.jsx("div",{className:"overflow-x-auto sm:-mx-6 lg:-mx-8",children:e.jsx("div",{className:"inline-block min-w-full py-2 sm:px-6 lg:px-8",children:e.jsx("div",{className:"overflow-hidden",children:e.jsxs("table",{className:"min-w-full text-center text-sm font-light",children:[e.jsx("thead",{className:"border-b border-l border-b3 bg-b3 font-medium text-white",children:e.jsxs("tr",{children:[e.jsx("th",{scope:"col",className:"px-6 py-4",children:e.jsx(w,{})}),e.jsx("th",{scope:"col",className:"px-6 py-4",children:"Title"}),e.jsx("th",{scope:"col",className:"px-6 py-4",children:"Sale Price"}),e.jsx("th",{scope:"col",className:"px-6 py-4",children:"Reguler Price"}),e.jsx("th",{scope:"col",className:"px-6 py-4",children:"Product Type"}),e.jsx("th",{scope:"col",className:"px-6 py-4",children:"Rating"}),e.jsx("th",{scope:"col",className:"px-6 py-4",children:"Action"})]})}),e.jsx("tbody",{children:s.map(o=>e.jsx(A,{data:o,getProductss:a}))})]})})})})}),F=()=>{const[s,a]=x.useState([]),[o,l]=x.useState(!1);x.useEffect(()=>{d()},[]);const d=async()=>{l(!0);const c=await T();console.log(c),c.status===200?(l(!1),a(c.data.products)):console.log("No Products Found!")};return e.jsx(e.Fragment,{children:o?e.jsx(v,{}):e.jsxs(P,{children:[e.jsxs("div",{className:"flex items-center mb-2 bg-white py-3 px-5 w-full",children:[e.jsx(m,{to:"/admin/create-product",className:"bg-b3 text-white text-xs px-3 rounded-2xl cursor-pointer py-2",children:"Create Product"}),e.jsxs("div",{className:"flex w-full justify-end space-x-3",children:[e.jsx("input",{placeholder:"Search Product",className:"text-xs px-2 outline-none border border-b3 rounded-md"}),e.jsx(m,{to:"/admin/create-product",className:"border border-b3 text-b3 text-xs px-2 rounded-md cursor-pointer py-1",children:"Search"})]})]}),s.length>0?e.jsx(I,{data:s,getProducts:d}):e.jsx("div",{className:"flex items-center justify-center w-full",children:e.jsx("img",{src:"/loader-bg.gif",className:"w-10 h-10"})})]})})};export{F as default};
