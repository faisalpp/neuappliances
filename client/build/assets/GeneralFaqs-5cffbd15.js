import{r as i,j as e,M as l,R as r,I as n,e as o,f as c,g as u}from"./index-5dd8069d.js";import{A as x}from"./ApplianceDetail-aedec874.js";import{F as d}from"./Faqs-8ef6c4cc.js";import{S as m}from"./ShopAustinSection-62e5d67f.js";import"./FaqAccordion-4c8bbe50.js";import"./admin-8e8c377f.js";const y=()=>{const[t,a]=i.useState([]);return i.useEffect(()=>{(async()=>{const s=await u({section:"faq's-page-video"});console.log(s),s.status===200&&a(s.data.media[0])})()},[]),e.jsx(e.Fragment,{children:e.jsxs(l,{children:[e.jsxs("div",{className:"py-10 lg:py-16 xl:py-20 maincontainer",children:[e.jsxs("div",{className:"flex items-center",children:[e.jsx("h5",{className:"text-xs text-b3",children:"Home"}),e.jsx(r,{className:"text-xl text-[#C3C2C2]"}),e.jsx("h5",{className:"text-xs text-b17",children:"FAQs"})]}),e.jsx(x,{descStyle:"3xl:w-[817px]",title:"Frequently Asked Questions",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vestibulum metus vel urna tempor auctor. Pellentesque varius lacus at nisl tincidunt fringilla. Phasellus non felis eu lectus pellentesque tincidunt. Sed eget facilisis tortor. Nulla eget imperdiet ex, consectetur pharetra ligula."})]}),e.jsxs("div",{className:"w-full 3xl:max-w-1680px mx-auto",children:[t&&t.type==="iframe"?e.jsx(n,{icon:"text-8xl",thumbnail:t.thumbnail,thumbRounded:"false",divId:`faq-section-${t.type}`,frameId:"faq-section-video",style:"w-full h-[250px] md:h-[700px] 2xl:h-[920px]",src:t.url,title:"Introducing our Next Generation of High End Kitchen Appliances | Miele"}):null,t&&t.type!=="iframe"?e.jsx("video",{controls:!0,autoPlay:!0,className:"w-full h-[250px] md:h-[700px] object-cover 2xl:h-[920px]",src:t.url}):null]}),e.jsx(d,{}),e.jsx(m,{}),e.jsx(o,{apiSectionName:"faq-page-review",title:"Our Customers Are RAVING About Our Appliance Outlet",dots:!0}),e.jsx(c,{backimage:"Newsletter.webp"})]})})};export{y as default};
