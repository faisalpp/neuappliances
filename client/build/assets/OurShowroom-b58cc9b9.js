import{r,j as e}from"./index-700f33c8.js";import{M as a,b as i}from"./MainLayout-c4236618.js";import{A as l}from"./ApplianceDetail-883a860d.js";import{S as x}from"./ShopAustinSection-e3531f54.js";import{S as m}from"./SatisfiedSection-156bee23.js";import{M as c}from"./MassiveAppliance-93ca39a8.js";import{N as p}from"./NewsLetterSection-8dcbee50.js";import{g as n}from"./ScrollToTop-87b7b771.js";import"./slick-theme-a56f7c90.js";import"./CosmaticSlider-a0b6fe1d.js";import"./ProductCard2-af5b730d.js";const M=()=>{const[t,s]=r.useState([]);return r.useEffect(()=>{(async()=>{const o=await n({section:"our-showroom-page-video"});console.log(o),o.status===200&&s(o.data.media[0])})()},[]),e.jsx(e.Fragment,{children:e.jsxs(a,{children:[e.jsxs("div",{className:"py-10 lg:py-16 xl:py-20 w-full 3xl:max-w-1680px px-4 sm:px-10 lg:px-16 xl:px-20 2xl:px-120px mx-auto",children:[e.jsxs("div",{className:"flex items-center",children:[e.jsx("h5",{className:"text-xs text-b3",children:"Home"}),e.jsx(i,{className:"text-xl text-b19"}),e.jsx("h5",{className:"text-xs text-black",children:"Our Showroom"})]}),e.jsx(l,{title:"Our Showroom",description:"Take a 3D interactive tour of our Appliance Outlet Showroom here in Austin, TX!"}),e.jsx("p",{className:"w-full md:w-2/3 3xl:w-[1135px] text-b16 mt-5 maxmd:text-center",children:"Our Showroom receives new appliances daily and we update our Virtual Tour every Tuesday so make sure to check back for updates!"})]}),e.jsxs("div",{className:"w-full 3xl:max-w-1680px mx-auto",children:[t&&t.type==="iframe"?e.jsx("iframe",{className:"w-full h-[250px] md:h-[700px] 2xl:h-[920px]",src:t.url,title:"Introducing our Next Generation of High End Kitchen Appliances | Miele",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowfullscreen:!0}):null,t&&t.type!=="iframe"?e.jsx("video",{controls:!0,autoPlay:!0,className:"w-full h-[250px] md:h-[700px] object-cover 2xl:h-[920px]",src:t.url}):null]}),e.jsx(c,{sliderstyle:"mx-2 3xl:mx-5"}),e.jsx(x,{}),e.jsx(m,{apiSectionName:"our-showroom-page-review",title:"Testimonials",dots:!0}),e.jsx(p,{backimage:"Newsletter.webp"})]})})};export{M as default};