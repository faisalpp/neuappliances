import{r as s,j as e}from"./index-6f024e59.js";import{M as r,b as a}from"./MainLayout-7db25bd6.js";import{A as l}from"./ApplianceDetail-58b69787.js";import{S as m}from"./ShopAustinSection-73e202d6.js";import{S as n}from"./SatisfiedSection-08b5c972.js";import{M as c}from"./MassiveAppliance-86bdacd7.js";import{N as p}from"./NewsLetterSection-5d240768.js";import{g as x}from"./ScrollToTop-c496a034.js";import{I as d}from"./Ifram-191c2835.js";import"./index.esm-07b601df.js";import"./index-38501678.js";import"./slick-theme-2a4ff163.js";import"./CosmaticSlider-cd13722c.js";import"./ProductCard2-bfa6c63e.js";import"./index-882a8f4e.js";const V=()=>{const[t,i]=s.useState([]);return s.useEffect(()=>{(async()=>{const o=await x({section:"our-showroom-page-video"});console.log(o),o.status===200&&i(o.data.media[0])})()},[]),e.jsx(e.Fragment,{children:e.jsxs(r,{children:[e.jsxs("div",{className:"py-10 lg:py-16 xl:py-20 maincontainer",children:[e.jsxs("div",{className:"flex items-center",children:[e.jsx("h5",{className:"text-xs text-b3",children:"Home"}),e.jsx(a,{className:"text-xl text-b19"}),e.jsx("h5",{className:"text-xs text-black",children:"Our Showroom"})]}),e.jsx(l,{title:"Our Showroom",description:"Take a 3D interactive tour of our Appliance Outlet Showroom here in Austin, TX!"}),e.jsx("p",{className:"w-full md:w-2/3 3xl:w-[1135px] text-b16 mt-5 maxmd:text-center",children:"Our Showroom receives new appliances daily and we update our Virtual Tour every Tuesday so make sure to check back for updates!"})]}),e.jsxs("div",{className:"w-full 3xl:max-w-1680px mx-auto",children:[t&&t.type==="iframe"?e.jsx(d,{icon:"text-8xl",thumbnail:t.thumbnail,thumbRounded:"false",divId:`our-show-room-${t.type}`,frameId:"showroom-section-video",style:"w-full h-[250px] md:h-[700px] 2xl:h-[920px]",src:t.url,title:"Introducing our Next Generation of High End Kitchen Appliances | Miele"}):null,t&&t.type!=="iframe"?e.jsx("video",{controls:!0,autoPlay:!0,className:"w-full h-[250px] md:h-[700px] object-cover 2xl:h-[920px]",src:t.url}):null]}),e.jsx(c,{title:"Shop Massive Discount Appliances",sliderstyle:"mx-2 3xl:mx-5"}),e.jsx(m,{}),e.jsx(n,{apiSectionName:"our-showroom-page-review",title:"Testimonials",dots:!0}),e.jsx(p,{backimage:"Newsletter.webp"})]})})};export{V as default};
