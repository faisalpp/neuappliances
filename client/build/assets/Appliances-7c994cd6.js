import{j as e,e as I,r as m,as as T,at as R,au as F,L as p,U as D,n as u,N as f,M as V,C as A,av as _}from"./index-20f4f930.js";import{A as H}from"./ApplianceDetail-6c702d57.js";import{S as P}from"./slick-theme-f7333f97.js";import{P as z}from"./ProductSlider-19e7b0ef.js";import{S as Z}from"./ShopAustinSection-e258ac07.js";import{R as O}from"./RecentlyAddedSection-bc752a3c.js";import{S as U}from"./SatisfiedSection-c3860c72.js";import{N as B}from"./NewsLetterSection-53edd6b3.js";import"./CosmaticSlider-977c64ee.js";import"./ProductCard2-6b3a2767.js";import"./index-290e060b.js";const E=({title:a,product:l,customStyle:i})=>{const x=({numberOfTimes:r})=>{const c=Array.from({length:r},(t,s)=>e.jsx(I,{className:"text-b7 text-xl"},s));return e.jsx("div",{className:"flex mt-2 items-center",children:c})};return e.jsx("div",{className:i,children:e.jsxs("div",{className:"flex flex-col maxmd:max-w-[330px] relative maxmd:mx-auto bg-white w-full h-auto rounded-md p-4 sm:p-6 md:p-8 lg:p-6 shadow-md",children:[l.rating==="3"?e.jsxs("div",{className:"absolute top-0 left-2 flex items-center bg-b9 w-fit px-3 rounded-b-2xl ml-2 justify-center h-9 gap-x-2 text-white",children:[e.jsx("img",{src:"/svgs/monetization_on.webp",className:"w-6 h-6 object-contain p-[1px]",alt:"monetization_on"}),e.jsx("span",{className:"text-xs 2xl:text-base font-bold",children:"Best Value"})]}):null,l.rating==="4"?e.jsxs("div",{className:"absolute top-0 left-2  flex items-center bg-b3 w-fit px-3 rounded-b-2xl ml-2 justify-center h-9 gap-x-2 text-white",children:[e.jsx("img",{src:"/svgs/local_fire_department.webp",className:"w-6 h-6 object-contain p-[1px]",alt:"local_fire_department"})," ",e.jsx("span",{className:"text-xs 2xl:text-base font-bold",children:"Most Popular"})]}):null,l.rating==="5"?e.jsxs("div",{className:"absolute top-0 left-2  flex items-center bg-b7 w-fit rounded-b-2xl ml-2 justify-center px-3 h-9 gap-x-2 text-white",children:[e.jsx("img",{src:"/svgs/star_rate_half.webp",className:"w-6 h-6 object-contain p-[1px]",alt:"star_rate_half"}),e.jsx("span",{className:"text-xs 2xl:text-base font-bold",children:"Premium Condition"})]}):null,e.jsxs("div",{className:"flex flex-col items-center justify-center mt-6 w-full",children:[e.jsxs("div",{className:"flex justify-center items-center text-center gap-x-1 text-[#242424] text-base 2xl:text-[22px]",children:[e.jsxs("h4",{className:"font-bold",children:[a,":"]}),e.jsxs("span",{className:"font-medium",children:[l.rating," star"]})]}),e.jsx("div",{className:"flex gap-x-3 mb-4",children:e.jsx(x,{numberOfTimes:l.rating})}),l.rating==="3"?e.jsx("h4",{className:"text-b3 font-semibold text-center text-base",children:"Moderate Cosmetic Damage"}):null,l.rating==="4"?e.jsx("h4",{className:"text-b3 font-semibold text-center text-base",children:"Minor Cosmetic Damage"}):null,l.rating==="5"?e.jsx("h4",{className:"text-b3 font-semibold text-center text-base",children:"very Minor To No Cosmetic Damage"}):null,e.jsx("div",{className:"relative pt-5 w-full",children:e.jsx(z,{image:l.image})}),e.jsxs("div",{className:"flex flex-col gap-y-3 w-full mt-10",children:[e.jsxs("div",{className:"flex items-center justify-between gap-x-3",children:[e.jsx("span",{className:"font-semibold text-xs sm:text-sm md:text-base text-b15",children:"Cosmetic Damage"}),l.rating==="3"?e.jsx("span",{className:"text-[rgba(17,16,16,0.64)] text-xs sm:text-sm md:text-base",children:"Moderate"}):null,l.rating==="4"?e.jsx("span",{className:"text-[rgba(17,16,16,0.64)] text-xs sm:text-sm md:text-base",children:"Minor"}):null,l.rating==="5"?e.jsx("span",{className:"text-[rgba(17,16,16,0.64)] text-xs sm:text-sm md:text-base",children:"Very Minor-None"}):null]}),e.jsxs("div",{className:"flex justify-between items-center mb-4",children:[e.jsx("span",{className:"font-semibold text-xs sm:text-sm md:text-base text-b15",children:"Discount"}),e.jsxs("div",{className:"flex items-center gap-x-4",children:[e.jsxs("div",{className:"flex gap-x-1",children:[l.rating==="3"?e.jsxs(e.Fragment,{children:[e.jsx("span",{className:"flex bg-b7 w-2 mt-2"}),e.jsx("span",{className:"flex bg-b4 w-2 mt-1"}),e.jsx("span",{className:"flex bg-b4 w-2 h-5"})]}):null,l.rating==="4"?e.jsxs(e.Fragment,{children:[e.jsx("span",{className:"flex bg-b4 w-2 mt-2"}),e.jsx("span",{className:"flex bg-b7 w-2 mt-1"}),e.jsx("span",{className:"flex bg-b4 w-2 h-5"})]}):null,l.rating==="5"?e.jsxs(e.Fragment,{children:[e.jsx("span",{className:"flex bg-b4 w-2 mt-2"}),e.jsx("span",{className:"flex bg-b4 w-2 mt-1"}),e.jsx("span",{className:"flex bg-b7 w-2 h-5"})]}):null]}),l.rating==="3"?e.jsx("span",{className:"font-semibold text-xs md:text-sm",children:"Massive"}):null,l.rating==="4"?e.jsx("span",{className:"font-semibold text-xs md:text-sm",children:"Huge"}):null,l.rating==="5"?e.jsx("span",{className:"font-semibold text-xs md:text-sm",children:"Greate"}):null]})]})]})]})]})})},G=({section:a})=>{const l={dots:!1,infinite:!1,arrows:!1,speed:300,slidesToShow:3,slidesToScroll:4,draggable:!1,initialSlide:0,responsive:[{breakpoint:1200,settings:{draggable:!0,slidesToShow:2,slidesToScroll:1,infinite:!0,dots:!0}},{breakpoint:767,settings:{draggable:!0,slidesToShow:1,slidesToScroll:1,infinite:!0,dots:!0}},{breakpoint:425,settings:{draggable:!0,slidesToShow:1.03,slidesToScroll:1,infinite:!0,dots:!0}}]};return e.jsx(P,{...l,className:"mb-10 mt-10 xl:mt-14",children:a.sectionItemsId.map((i,x)=>e.jsx(E,{customStyle:"px-2 pb-4 xl:pr-[5px]",title:"Cosmetic Rating",product:i},x))})},W=({section:a})=>e.jsx("div",{className:"bg-b8 py-10 lg:py-14 xl:py-20",children:e.jsxs("div",{className:"maincontainer h-auto",children:[e.jsxs("div",{className:"flex flex-col space-y-5 items-center sm:px-4 md:px-10 lg:px-0",children:[e.jsx("h4",{className:"font-bold text-2xl xl:text-3xl 2xl:text-4xl lg:text-start text-center",children:"Cosmetic Rating"}),e.jsx("p",{className:"text-center font-semibold leading-normal lg:w-8/12 w-full text-sm xl:text-base lg:sm mt-2",children:"We rate our scratch and dent appliances by their cosmetic appearance (How they look). Appliances with lower cosmetic ratings get Deeper Discounts! You pick your level of savings!"})]}),e.jsx(G,{section:a})]})}),J=({color:a,title:l,children:i})=>{m.useState(!1);const[x,r]=m.useState(!0);return e.jsx(e.Fragment,{children:e.jsxs("div",{className:"flex flex-col w-full border-b-[1px] py-4 h-auto cursor-pointer",children:[e.jsxs("div",{className:"flex items-center border-b-gray-300",onClick:()=>r(c=>!c),children:[e.jsx("h6",{className:`font-bold w-72 text-sm ${a}`,children:l}),e.jsx("div",{className:"flex items-center w-full justify-end",children:x?e.jsx(T,{className:"text-2xl"}):e.jsx(R,{className:"text-2xl"})})]}),e.jsx(F,{show:x,className:"flex flex-col gap-2 h-auto mt-3 cursor-pointer",children:i})]})})},Y=({productstype:a,onClose:l,isFilter:i})=>{const x=t=>{t.stopPropagation()},r=i?"maxlg:flex top-0 maxlg:bottom-0":"maxlg:-bottom-[420px] maxlg:opacity-0 maxlg:pointer-events-none",c=({menu:t,k:s})=>e.jsx("ul",{className:"flex flex-col gap-3",children:s?t[s].map((n,h)=>e.jsx("li",{children:e.jsx(p,{to:n.link,className:"text-sm text-b22",children:n.name})},h)):null});return e.jsx("div",{className:`maxlg:fixed maxlg:left-0 maxlg:right-0 maxlg:z-50 lg:sticky lg:top-10 maxlg:bg-black/20 items-end lg:h-full duration-300 lg:w-[320px] ${r}`,onClick:l,children:e.jsxs("div",{className:"[&>div]:maxlg:px-10 maxlg:max-h-[398px] maxlg:pb-10 maxlg:rounded-tl-2xl maxlg:rounded-tr-2xl maxlg:bg-white maxlg:overflow-y-auto lg:h-auto border border-gray-300 rounded-2xl lg:px-6 lg:pb-6 lg:pt-2 w-full",onClick:x,children:[e.jsx("div",{className:"lg:hidden maxlg:sticky top-0 flex maxlg:py-4 justify-end lg:pb-4 items-center border-b maxlg:bg-white z-50 maxlg:shadow-md",children:e.jsx("button",{onClick:l,className:"text-sm font-semibold lg:hidden px-2 py-1 hover:bg-black/5 rounded duration-300",children:"Close"})}),a?a.map((t,s)=>e.jsx(J,{title:Object.keys(t),color:"text-b22",children:e.jsx(c,{menu:t,k:Object.keys(t)})},s)):null]})})},b=({title:a,image:l,rating:i,brandimage:x,brandname:r,colorimage:c,colorname:t})=>{const{categorySlug:s}=D(),n=({numberOfTimes:g})=>{const w=Array.from({length:g},($,y)=>e.jsx(I,{className:"text-b7"},y));return e.jsx("div",{className:"flex items-center",children:w})};function h(g){return g.charAt(0).toUpperCase()+g.slice(1)}return e.jsxs("div",{children:[a||i?e.jsxs("div",{className:"rounded-2xl maxmd:mx-auto maxmd:max-w-[330px] border border-gray-300 p-3",children:[e.jsx("img",{src:l,className:"xl:w-auto h-80 mx-auto",alt:a}),e.jsxs("div",{className:"flex flex-col w-full mt-5 lg:mt-2 items-center gap-2",children:[i?e.jsx("h3",{className:"font-semibold",children:h(s.replace(/\-/g," "))}):e.jsx("h3",{className:"font-semibold",children:a}),i?e.jsxs("div",{className:"flex gap-3 items-center",children:[e.jsx("span",{className:"font-semibold text-sm",children:"Cosmetic Rating:"}),e.jsx(n,{numberOfTimes:parseInt(i)})]}):null]})]}):null,x?e.jsxs("div",{className:"populerbrands",children:[e.jsx("div",{className:"rounded-2xl border border-gray-300 p-3 h-[133px] flex justify-center items-center",children:e.jsx("img",{src:x,className:"max-w-full h-auto object-contain",alt:r})}),e.jsx("h3",{className:"font-semibold px-3 text-center mt-3",children:r})]}):null,c?e.jsxs("div",{className:"colortype",children:[e.jsx("img",{src:c,className:"h-44 xs:h-52 w-full sm:h-56 object-cover",alt:t}),e.jsx("h3",{className:"font-semibold px-2 text-center mt-3",children:t})]}):null]})},C=({title:a,buttonlink:l})=>e.jsxs("div",{className:"flex justify-between items-center gap-1",children:[e.jsx("h3",{className:"font-bold lg:mt-10 maxlg:w-full lg:font-semibold text-b18 text-2xl lg:text-base maxlg:text-center",children:a}),e.jsxs(p,{to:l,className:"maxlg:hidden whitespace-nowrap flex items-center gap-1 hover:gap-2 duration-300 px-3 py-2 rounded-lg text-b3 font-medium text-sm 3xl:text-base border border-b3",children:[e.jsx("span",{children:"View More"}),e.jsx(u,{className:"text-base"})]})]}),q=()=>e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",children:[e.jsx("mask",{id:"mask0_2393_63084",style:{maskType:"alpha"},maskUnits:"userSpaceOnUse",x:"0",y:"0",width:"16",height:"16",children:e.jsx("rect",{width:"16",height:"16",fill:"#D9D9D9"})}),e.jsx("g",{mask:"url(#mask0_2393_63084)",children:e.jsx("path",{d:"M2.66667 12.6667C2.47778 12.6667 2.31956 12.6027 2.192 12.4747C2.064 12.3471 2 12.1889 2 12C2 11.8111 2.064 11.6529 2.192 11.5253C2.31956 11.3973 2.47778 11.3333 2.66667 11.3333H5.33333C5.52222 11.3333 5.68067 11.3973 5.80867 11.5253C5.93622 11.6529 6 11.8111 6 12C6 12.1889 5.93622 12.3471 5.80867 12.4747C5.68067 12.6027 5.52222 12.6667 5.33333 12.6667H2.66667ZM2.66667 4.66667C2.47778 4.66667 2.31956 4.60289 2.192 4.47533C2.064 4.34733 2 4.18889 2 4C2 3.81111 2.064 3.65267 2.192 3.52467C2.31956 3.39711 2.47778 3.33333 2.66667 3.33333H8C8.18889 3.33333 8.34733 3.39711 8.47533 3.52467C8.60289 3.65267 8.66667 3.81111 8.66667 4C8.66667 4.18889 8.60289 4.34733 8.47533 4.47533C8.34733 4.60289 8.18889 4.66667 8 4.66667H2.66667ZM8 14C7.81111 14 7.65289 13.936 7.52533 13.808C7.39733 13.6804 7.33333 13.5222 7.33333 13.3333V10.6667C7.33333 10.4778 7.39733 10.3193 7.52533 10.1913C7.65289 10.0638 7.81111 10 8 10C8.18889 10 8.34733 10.0638 8.47533 10.1913C8.60289 10.3193 8.66667 10.4778 8.66667 10.6667V11.3333H13.3333C13.5222 11.3333 13.6804 11.3973 13.808 11.5253C13.936 11.6529 14 11.8111 14 12C14 12.1889 13.936 12.3471 13.808 12.4747C13.6804 12.6027 13.5222 12.6667 13.3333 12.6667H8.66667V13.3333C8.66667 13.5222 8.60289 13.6804 8.47533 13.808C8.34733 13.936 8.18889 14 8 14ZM5.33333 10C5.14444 10 4.986 9.936 4.858 9.808C4.73044 9.68044 4.66667 9.52222 4.66667 9.33333V8.66667H2.66667C2.47778 8.66667 2.31956 8.60267 2.192 8.47467C2.064 8.34711 2 8.18889 2 8C2 7.81111 2.064 7.65267 2.192 7.52467C2.31956 7.39711 2.47778 7.33333 2.66667 7.33333H4.66667V6.66667C4.66667 6.47778 4.73044 6.31933 4.858 6.19133C4.986 6.06378 5.14444 6 5.33333 6C5.52222 6 5.68067 6.06378 5.80867 6.19133C5.93622 6.31933 6 6.47778 6 6.66667V9.33333C6 9.52222 5.93622 9.68044 5.80867 9.808C5.68067 9.936 5.52222 10 5.33333 10ZM8 8.66667C7.81111 8.66667 7.65289 8.60267 7.52533 8.47467C7.39733 8.34711 7.33333 8.18889 7.33333 8C7.33333 7.81111 7.39733 7.65267 7.52533 7.52467C7.65289 7.39711 7.81111 7.33333 8 7.33333H13.3333C13.5222 7.33333 13.6804 7.39711 13.808 7.52467C13.936 7.65267 14 7.81111 14 8C14 8.18889 13.936 8.34711 13.808 8.47467C13.6804 8.60267 13.5222 8.66667 13.3333 8.66667H8ZM10.6667 6C10.4778 6 10.3196 5.936 10.192 5.808C10.064 5.68044 10 5.52222 10 5.33333V2.66667C10 2.47778 10.064 2.31933 10.192 2.19133C10.3196 2.06378 10.4778 2 10.6667 2C10.8556 2 11.0138 2.06378 11.1413 2.19133C11.2693 2.31933 11.3333 2.47778 11.3333 2.66667V3.33333H13.3333C13.5222 3.33333 13.6804 3.39711 13.808 3.52467C13.936 3.65267 14 3.81111 14 4C14 4.18889 13.936 4.34733 13.808 4.47533C13.6804 4.60289 13.5222 4.66667 13.3333 4.66667H11.3333V5.33333C11.3333 5.52222 11.2693 5.68044 11.1413 5.808C11.0138 5.936 10.8556 6 10.6667 6Z",fill:"#22A6AB"})})]}),K=()=>e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"8",height:"5",viewBox:"0 0 8 5",fill:"none",children:e.jsx("path",{d:"M4.00045 4.96649C3.91156 4.96649 3.82823 4.95249 3.75045 4.92449C3.67267 4.89693 3.60045 4.84982 3.53378 4.78315L0.450449 1.69982C0.328226 1.5776 0.270004 1.42471 0.275782 1.24116C0.281115 1.05804 0.344893 0.905377 0.467115 0.783155C0.589337 0.660933 0.744893 0.599821 0.933782 0.599821C1.12267 0.599821 1.27823 0.660933 1.40045 0.783155L4.00045 3.38315L6.61712 0.766488C6.73934 0.644266 6.89223 0.585821 7.07578 0.591155C7.25889 0.596933 7.41156 0.660933 7.53378 0.783155C7.656 0.905377 7.71712 1.06093 7.71712 1.24982C7.71712 1.43871 7.656 1.59427 7.53378 1.71649L4.46712 4.78315C4.40045 4.84982 4.32823 4.89693 4.25045 4.92449C4.17267 4.95249 4.08934 4.96649 4.00045 4.96649Z",fill:"#1C1B1F"})}),Q=({menu:a,data:l,category:i})=>{const[x,r]=m.useState(!1),c=()=>{r(!1)};return e.jsx("div",{children:e.jsxs("div",{className:"flex maxlg:flex-col h-full justify-center gap-4 lg:gap-8 py-10 maincontainer",children:[e.jsxs("div",{className:"flex gap-2 items-center",children:[e.jsxs("button",{className:"ml-auto w-full justify-center border border-b3 px-3 py-3 text-sm font-semibold rounded-lg flex gap-2 items-center lg:hidden",onClick:()=>r(!0),children:["All Categories ",e.jsx(K,{})]}),e.jsxs("button",{className:"ml-auto w-full justify-center border border-b3 px-3 py-3 text-sm font-semibold rounded-lg flex gap-2 items-center lg:hidden",onClick:()=>r(!0),children:[e.jsx(q,{})," Filters"]})]}),e.jsx(Y,{productstype:a,onClose:c,isFilter:x}),e.jsx("div",{className:"w-full h-full flex flex-col gap-60px",children:l.map(t=>e.jsxs(e.Fragment,{children:[t.cardStyle==="rating-card"?e.jsxs("div",{children:[e.jsx("h3",{className:"font-bold mt-10 lg:font-semibold text-b18 text-2xl lg:text-base maxlg:text-center",children:t.title}),e.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mt-8",children:t.sectionItemsId.map((s,n)=>e.jsx(f,{to:`/appliances/?category=${i.toLowerCase()}&rating=${s.rating}`,children:e.jsx(b,{title:s.title,image:s.image,rating:s.rating},s.title)},n))})]}):null,t.cardStyle==="general-card"?e.jsxs("div",{children:[e.jsx(C,{title:t.title}),e.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mt-8",children:t.sectionItemsId.map((s,n)=>e.jsx(f,{to:`/appliances/?category=${i.toLowerCase()}&${t.type}=${s.title.toLowerCase().replace(/\s/g,"-")}`,children:e.jsx(b,{title:s.title,image:s.image},s.title)},n))}),e.jsxs(p,{to:"",className:"lg:hidden whitespace-nowrap flex items-center justify-center gap-1 hover:gap-2 duration-300 mt-6 px-4 py-3 rounded-lg text-b3 font-medium text-base border border-b3",children:[e.jsx("span",{children:"View More"}),e.jsx(u,{className:"text-base"})]})]}):null,t.cardStyle==="2xn-card"?e.jsxs("div",{children:[e.jsx(C,{title:t.title}),e.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-6 mt-8",children:t.sectionItemsId.map((s,n)=>e.jsx(f,{to:`/appliances/?category=${i.toLowerCase()}&${t.type}=${s.title.toLowerCase().replace(/\s/g,"-")}`,children:e.jsx(b,{title:s.title,image:s.image},s.title)},n))}),e.jsxs(p,{to:"",className:"lg:hidden whitespace-nowrap flex items-center justify-center gap-1 hover:gap-2 duration-300 mt-6 px-4 py-3 rounded-lg text-b3 font-medium text-base border border-b3",children:[e.jsx("span",{children:"View More"}),e.jsx(u,{className:"text-base"})]})]}):null,t.cardStyle==="brand-card"?e.jsxs("div",{children:[e.jsx(C,{title:t.title}),e.jsx("div",{className:"grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-6 mt-8",children:t.sectionItemsId.map((s,n)=>e.jsx(f,{to:`/appliances/?category=${i.toLowerCase()}&${t.type}=${s.title.toLowerCase().replace(/\s/g,"-")}`,children:e.jsx(b,{brandname:s.title,brandimage:s.image},s.title)},n))}),e.jsxs(p,{to:"",className:"lg:hidden whitespace-nowrap flex items-center justify-center gap-1 hover:gap-2 duration-300 mt-6 px-4 py-3 rounded-lg text-b3 font-medium text-base border border-b3",children:[e.jsx("span",{children:"View More"}),e.jsx(u,{className:"text-base"})]})]}):null,t.cardStyle==="color-card"?e.jsxs("div",{children:[e.jsx(C,{title:t.title}),e.jsx("div",{className:"grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-6 mt-8",children:t.sectionItemsId.map((s,n)=>e.jsx(f,{to:`/appliances/?category=${i.toLowerCase()}&${t.type.replace(/\&/,"and")}=${s.title.toLowerCase().replace(/\s/g,"-")}`,children:e.jsx(b,{colorname:s.title,colorimage:s.image},s.title)},n))}),e.jsxs(p,{to:"",className:"lg:hidden whitespace-nowrap flex items-center justify-center gap-1 hover:gap-2 duration-300 mt-6 px-4 py-3 rounded-lg text-b3 font-medium text-base border border-b3",children:[e.jsx("span",{children:"View More"}),e.jsx(u,{className:"text-base"})]})]}):null]}))})]})})},oe=()=>{const[a,l]=m.useState([]),[i,x]=m.useState(""),[r,c]=m.useState(""),{categorySlug:t}=D(),[s,n]=m.useState(!1),[h,g]=m.useState([]);function w(d){return d.replace(/\b\w/g,function(o){return o.toUpperCase()}).replace(/\-/g," ")}const $=()=>{let d,o,M=[];a.forEach(N=>{N.type==="types"&&console.log("types"),d=N.cardStyle,o=N.type;let v=[];d!=="head-rating-card"&&(N.sectionItemsId.filter(j=>{if(j.rating){const S=`${j.rating} Stars ${r}`,k=`/appliances/?category=${r.toLowerCase().replace(/\s/g,"-")}&rating=${j.rating}`;let L={name:S,link:k};v.push(L)}else{const S=`${j.title}`,k=`/appliances/?category=${r.toLowerCase().replace(/\s/g,"-")}&${o}=${j.title.toLowerCase().replace(/\s/g,"-")}`;let L={name:S,link:k};v.push(L)}}),M.push({[w(o)]:v})),g(M)})};m.useEffect(()=>{$()},[a]);const y=async()=>{n(!0);const o=await _({slug:t});o.status===200&&(l(o.data.categorySections),x(o.data.categoryDescription),c(o.data.categoryTitle),n(!1))};return m.useEffect(()=>{y()},[t]),e.jsx(e.Fragment,{children:e.jsx(V,{children:s?e.jsx("div",{style:{height:"calc(100vh - 130px)"},className:"flex items-center justify-center top-0 w-full h-screen z-40 bg-white/80",children:e.jsx("img",{src:"/loader2.gif",className:"h-12"})}):e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"py-16 xl:py-20 maincontainer",children:[e.jsxs("div",{className:"flex items-center",children:[e.jsx("h5",{className:"text-xs text-b3",children:"Home"}),e.jsx(A,{className:"text-xl text-b3"}),e.jsx("h5",{className:"text-xs text-black",children:"Appliances"}),e.jsx(A,{className:"text-xl text-gray-300"}),e.jsx("h5",{className:"text-xs text-gray-500 capitalize",children:t})]}),e.jsx(H,{title:r,description:i})]}),a.map((d,o)=>d.cardStyle==="head-rating-card"?e.jsx(W,{section:d},o):null),e.jsx(Q,{menu:h,data:a,category:r}),e.jsx(Z,{}),e.jsx(O,{category:r,title:"Recently Added Refrigerators",buttonname:"Shop All 3 Star Cosmetic Rating Appliances"}),e.jsx(U,{apiSectionName:"categories-page",title:"Join Thousands of our Satisfied Customers."}),e.jsx(B,{backimage:"/Newsletter.webp"})]})})})};export{oe as default};
