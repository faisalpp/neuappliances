import{j as e,L as c,r as x,B as p,ay as n}from"./index-28ed215d.js";const d=({link:l,title:a,image:i})=>e.jsx(c,{to:l,children:e.jsxs("div",{className:"maxmd:max-w-[330px] maxmd:mx-auto",children:[e.jsx("div",{className:"flex flex-col items-center justify-center rounded-xl border-[1px] border-gray-200 bg-white p-10",children:e.jsx("img",{src:i,className:"h-56"})}),e.jsx("h4",{className:" font-bold xl:text-xl text-lg mt-2",children:a})]})}),m=()=>{const[l,a]=x.useState([]),[i,r]=x.useState(!0);return x.useEffect(()=>{(async()=>{const s=await n({limit:5});s.status===200?(a(s.data.categories),r(!1)):console.log(s)})()},[]),e.jsxs("div",{className:"flex flex-col items-center py-10 px-4 md:px-10 lg:py-14 xl:py-28 bg-b8",children:[e.jsx("h4",{className:"xl:text-4xl text-xl font-bold text-center mb-4",children:"Shop By Appliance Type"}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 xl:gap-10 2xl:gap-x-10 2xl:gap-y-14 mt-10 w-full 3xl:max-w-1680px px-4 md:px-10 lg:px-16 xl:px-20 2xl:px-120px mx-auto",children:[l&&l.map((t,s)=>e.jsx(d,{title:t.title,image:t.image,link:`/appliances/${t.slug}`},s)),e.jsx(c,{to:"/applianceTypes",children:e.jsxs("div",{className:"maxmd:max-w-[330px] maxmd:mx-auto",children:[e.jsx("div",{className:"flex flex-col items-center justify-center rounded-xl border-[1px] border-gray-200 bg-white p-10",children:e.jsx("img",{src:"/all.webp",className:"h-56"})}),e.jsx("h4",{className:" font-bold xl:text-xl text-lg mt-2",children:"All Appliances"})]})})]}),e.jsx("div",{className:"flex justify-center mt-16",children:e.jsxs(c,{to:"/applianceTypes",className:"flex items-center border-[1px] border-b3 w-fit px-4 py-3 rounded-md text-b3 font-semibold",children:[e.jsx("span",{className:"xl:text-[16px] lg:text-sm",children:"View All Categories"}),e.jsx(p,{className:"text-2xl"})]})})]})};export{m as default};
