import{r as i,j as e,d as l,q as r,az as o}from"./index-28ed215d.js";import{A as n}from"./ApplianceDetail-0557b5bb.js";import{F as c}from"./Faqs-47fdc27f.js";import{S as p}from"./ShopAustinSection-535218fb.js";import x from"./NewsLetterSection-6178d50b.js";import u from"./SatisfiedSection-b1015779.js";import"./FaqAccordion-3621200d.js";import"./admin-0c2aa3c5.js";import"./slick-theme-6557dcdf.js";import"./Modal-76e6c0ce.js";const b=()=>{const[t,a]=i.useState([]);return i.useEffect(()=>{(async()=>{const s=await o({section:"faq's-page-video"});console.log(s),s.status===200&&a(s.data.media[0])})()},[]),e.jsx(e.Fragment,{children:e.jsxs(l,{children:[e.jsxs("div",{className:"py-10 lg:py-16 xl:py-20 w-full 3xl:max-w-1680px px-4 sm:px-10 lg:px-16 xl:px-20 2xl:px-120px mx-auto",children:[e.jsxs("div",{className:"flex items-center",children:[e.jsx("h5",{className:"text-xs text-b3",children:"Home"}),e.jsx(r,{className:"text-xl text-[#C3C2C2]"}),e.jsx("h5",{className:"text-xs text-b17",children:"FAQs"})]}),e.jsx(n,{descStyle:"3xl:w-[817px]",title:"Frequently Asked Questions",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vestibulum metus vel urna tempor auctor. Pellentesque varius lacus at nisl tincidunt fringilla. Phasellus non felis eu lectus pellentesque tincidunt. Sed eget facilisis tortor. Nulla eget imperdiet ex, consectetur pharetra ligula."})]}),e.jsxs("div",{className:"w-full 3xl:max-w-1680px mx-auto",children:[t&&t.type==="iframe"?e.jsx("iframe",{className:"w-full h-[250px] md:h-[700px] 2xl:h-[920px]",src:t.url,title:"Introducing our Next Generation of High End Kitchen Appliances | Miele",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowfullscreen:!0}):null,t&&t.type!=="iframe"?e.jsx("video",{controls:!0,autoPlay:!0,className:"w-full h-[250px] md:h-[700px] object-cover 2xl:h-[920px]",src:t.url}):null]}),e.jsx(c,{}),e.jsx(p,{}),e.jsx(u,{apiSectionName:"faq-page-review",title:"Our Customers Are RAVING About Our Appliance Outlet",dots:!0}),e.jsx(x,{backimage:"Newsletter.webp"})]})})};export{b as default};
