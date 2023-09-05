import{j as e,L as m,r as o}from"./index-700f33c8.js";import{C as u}from"./CosmaticCard-28a93531.js";import{S as j}from"./slick-theme-a56f7c90.js";import{e as b,d as p,c as d,n as N}from"./ScrollToTop-87b7b771.js";const k=()=>e.jsxs("div",{className:"flex flex-col bg-b8 pt-14",children:[e.jsxs("div",{className:"flex flex-col space-y-5 mt-5 items-center px-4 md:px-10 lg:px-0",children:[e.jsx("h4",{className:"font-bold xl:text-[32px] lg:text-2xl lg:text-start text-xl text-center",children:"Our Cosmetic Star Rating System"}),e.jsx("p",{className:"text-center font-semibold leading-normal lg:w-[980px] text-sm xl:text-[20px] lg:sm mt-2",children:"We rate our scratch and dent appliances by their cosmetic appearance (How they look). Appliances with lower cosmetic grades get Deeper Discounts! You pick your level of savings!"})]}),e.jsx(u,{})]}),T=({color:l,clientreviews:a,icon:n})=>{const c={dots:!1,infinite:!1,arrows:!0,speed:300,slidesToShow:4,slidesToScroll:1,initialSlide:0,responsive:[{breakpoint:575,settings:{slidesToShow:1.12}},{breakpoint:991,settings:{slidesToShow:2}},{breakpoint:1670,settings:{slidesToShow:3}}]},r=({onClick:s})=>e.jsx("button",{onClick:s,className:"hidden sm:block prev-button absolute top-0 -left-3 z-40 h-full pointer-events-none",children:e.jsx("div",{className:"flex bg-black/30 hover:bg-cyan-500 cursor-pointer px-2 py-2 rounded-full text-white group pointer-events-auto",children:e.jsx(b,{className:"text-xl"})})}),t=({onClick:s})=>e.jsx("button",{onClick:s,className:"hidden sm:block next-button absolute top-0 -right-3 z-40 h-full pointer-events-none",children:e.jsx("div",{className:"flex bg-black/30 hover:bg-cyan-500 cursor-pointer px-2 py-2 rounded-full text-white group pointer-events-auto",children:e.jsx(p,{className:"text-xl"})})}),h=({numberOfTimes:s})=>{const x=Array.from({length:s},(f,i)=>e.jsx(d,{className:"text-b7 text-sm"},i));return e.jsx("div",{className:"flex mt-2 items-center",children:x})},g=({numberOfTimes:s})=>{const x=Array.from({length:s},(f,i)=>e.jsx(d,{className:"text-gray-300 text-sm"},i));return e.jsx("div",{className:"flex mt-2 items-center",children:x})};return e.jsx("div",{children:a.length>0?e.jsx(j,{...c,prevArrow:e.jsx(r,{}),nextArrow:e.jsx(t,{}),className:"relative",children:a.map((s,x)=>e.jsx("div",{className:"maxsm:px-2",children:e.jsxs("div",{style:{backgroundColor:l},className:"flex flex-col shadow-sm px-5 py-3 rounded-xl xl:h-[170px] sm:mx-2",children:[e.jsxs("div",{className:"flex mt-2",children:[e.jsx(h,{numberOfTimes:s.rating}),e.jsx(g,{numberOfTimes:5-s.rating})]}),e.jsx("p",{className:"text-sm font-semibold mt-1",children:s.text&&s.text.length>90?s.text.substring(0,90)+"...":s.text}),e.jsx("a",{href:"",className:"text-sm text-b6 mt-2",children:"Read More"}),e.jsxs("div",{className:"flex items-center",children:[e.jsx("h5",{className:"text-sm mt-2 w-10/12",children:s.author_name}),e.jsx("img",{src:n,className:"h-5 w-10 mt-4",alt:"Icon"})]})]})},x))}):e.jsx("div",{className:"flex items-center justify-center w-full",children:e.jsx("img",{src:"/loader-bg.gif",className:"w-10 h-10 "})})})},y=({link:l,title:a,image:n})=>e.jsx(m,{to:l,children:e.jsxs("div",{className:"maxmd:max-w-[330px] maxmd:mx-auto",children:[e.jsx("div",{className:"flex flex-col items-center justify-center rounded-xl border-[1px] border-gray-200 bg-white p-10",children:e.jsx("img",{src:n,className:"h-56"})}),e.jsx("h4",{className:" font-bold xl:text-xl text-lg mt-2",children:a})]})}),C=()=>{const[l,a]=o.useState([]),[n,c]=o.useState(!0);return o.useEffect(()=>{(async()=>{const t=await N({limit:5});t.status===200?(a(t.data.categories),c(!1)):console.log(t)})()},[]),e.jsxs("div",{className:"flex flex-col items-center py-10 px-4 md:px-10 lg:py-14 xl:py-28 bg-b8",children:[e.jsx("h4",{className:"xl:text-4xl text-xl font-bold text-center mb-4",children:"Shop By Appliance Type"}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 xl:gap-10 2xl:gap-x-10 2xl:gap-y-14 mt-10 w-full 3xl:max-w-1680px px-4 md:px-10 lg:px-16 xl:px-20 2xl:px-120px mx-auto",children:[l&&l.map((r,t)=>e.jsx(y,{title:r.title,image:r.image,link:`/appliances/${r.slug}`},t)),e.jsx(m,{to:"/applianceTypes",children:e.jsxs("div",{className:"maxmd:max-w-[330px] maxmd:mx-auto",children:[e.jsx("div",{className:"flex flex-col items-center justify-center rounded-xl border-[1px] border-gray-200 bg-white p-10",children:e.jsx("img",{src:"/all.webp",className:"h-56"})}),e.jsx("h4",{className:" font-bold xl:text-xl text-lg mt-2",children:"All Appliances"})]})})]}),e.jsx("div",{className:"flex justify-center mt-16",children:e.jsxs(m,{to:"/applianceTypes",className:"flex items-center border-[1px] border-b3 w-fit px-4 py-3 rounded-md text-b3 font-semibold",children:[e.jsx("span",{className:"xl:text-[16px] lg:text-sm",children:"View All Categories"}),e.jsx(p,{className:"text-2xl"})]})})]})};export{C as A,k as C,T as R};
