import{j as e,r as i}from"./index-700f33c8.js";import{M as c,b as m}from"./MainLayout-c4236618.js";import{A as p}from"./ApplianceDetail-883a860d.js";import{S as d}from"./SatisfiedSection-156bee23.js";import{X as u,g}from"./ScrollToTop-87b7b771.js";import{M as h}from"./MassiveAppliance-93ca39a8.js";import{N as j}from"./NewsLetterSection-8dcbee50.js";import"./slick-theme-a56f7c90.js";import"./CosmaticSlider-a0b6fe1d.js";import"./ProductCard2-af5b730d.js";const n=({order:s,image:a,about:r,title:x,description:l,BoxStyle:t})=>e.jsx(e.Fragment,{children:e.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 2xl:flex gap-10 xl:gap-24 2xl:gap-[140px] 3xl:gap-[168px] py-16 xl:py-20 2xl:py-100px w-full 3xl:max-w-1680px px-4 sm:px-10 lg:px-16 xl:px-20 2xl:px-120px mx-auto",children:[e.jsx("div",{className:`2xl:h-[500px] 2xl:min-w-[700px] ${s}`,children:e.jsx("img",{src:a,alt:"",className:"maxlg:object-contain lg:h-[420px] 2xl:h-[470px] 3xl:h-[500px]"})}),e.jsxs("div",{className:"flex items-center relative",children:[e.jsx("div",{className:`maxlg:hidden absolute top-0 w-[300px] xl:w-[318px] h-[230px] xl:h-[250px] 3xl:h-[279px] bg-b3/10 rounded-3xl mt-4 -z-10 ${t}`}),e.jsxs("div",{className:"flex flex-col gap-3 3xl:gap-5",children:[e.jsx("span",{className:"font-bold text-xs",children:r}),e.jsx("h3",{className:"font-bold text-2xl lg:text-xl xl:text-2xl 3xl:text-3xl",children:x}),e.jsx("p",{className:"leading-[30px]",children:l})]})]})]})}),f=()=>e.jsx(e.Fragment,{children:e.jsx("div",{className:"py-10 lg:py-16 xl:py-20 2xl:py-100px w-full 3xl:max-w-1680px px-4 sm:px-10 lg:px-16 xl:px-20 2xl:px-120px mx-auto bg-b5",children:e.jsxs("div",{className:"w-full max-w-[844px] mx-auto flex flex-col items-center text-center gap-5",children:[e.jsx("div",{children:e.jsx("img",{src:"quotes.webp",alt:"quotes",className:"w-16 h-12 2xl:w-24 2xl:h-[67px]"})}),e.jsx("p",{className:"md:text-xl xl:text-2xl 3xl:text-3xl",children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Libero ultrices dis a arcu. Eu rhoncus, non suspendisse nec consequat enim. Proin natoque malesuada donec convallis lectus euismod nec, in."}),e.jsxs("div",{children:[e.jsx("strong",{className:"text-sm",children:"John Smith"}),e.jsx("br",{}),e.jsx("span",{className:"text-sm",children:"CEO"})]})]})})}),b=()=>e.jsx(e.Fragment,{children:e.jsx("div",{className:"py-10 lg:py-16 xl:py-20 2xl:py-100px bg-b8",children:e.jsxs("div",{className:"max-w-[572px] flex flex-col mx-auto text-center gap-5 px-4",children:[e.jsx("div",{children:e.jsx("span",{className:"uppercase text-xs",children:"LOREM IPSUM"})}),e.jsx("h2",{className:"text-2xl sm:text-[40px] text-b3 font-bold sm:leading-[49px]",children:"Lorem Ipsum dolor sin amet consegur."}),e.jsx("p",{className:"text-base sm:text-xl sm:leading-[30px]",children:"Egestas nulla mauris elit at sed gravida. Donec neque nulla nisi nulla. Vel cras purus tempor ultricies amet. Bibendum sit sit."})]})})}),N=()=>{const[s,a]=i.useState([]),[r,x]=i.useState(!1),l=async()=>{x(!0);const t=await u();console.log(t),t.status===200?(x(!1),a(t.data.members)):(x(!1),a([]))};return i.useEffect(()=>{l()},[]),e.jsx(e.Fragment,{children:e.jsxs("div",{className:"py-10 lg:py-16 xl:py-20 2xl:py-120px w-full 3xl:max-w-1680px px-4 sm:px-10 lg:px-16 xl:px-20 2xl:px-120px mx-auto",children:[e.jsx("h2",{className:"text-2xl xl:text-[32px] mb-10 lg:mb-16 xl:mb-20 2xl:mb-120px font-bold text-center",children:"Meet The Team"}),e.jsx("div",{className:"3xl:px-[60px] grid grid-cols-2 meetteam md:flex flex-wrap justify-center 3xl:justify-start gap-x-2 gap-y-10 md:gap-10 3xl:gap-20",children:s.map((t,o)=>e.jsxs("figure",{className:"border border-transparent hover:border-b20 rounded-[20px] hover:shadow-s1 duration-300 p-5 w-[150px] md:w-[200px]",children:[e.jsx("img",{className:"w-28 h-28 md:w-40 md:h-40 rounded-full mx-auto",src:t.image,alt:""}),e.jsx("div",{className:"pt-[10px]",children:e.jsxs("figcaption",{className:"font-medium text-center",children:[e.jsx("h3",{className:"font-bold md:text-[22px] text-b18 mb-3",children:t.name}),e.jsx("span",{className:"block text-b3 maxmd:text-xs",children:t.designation})]})})]},o))})]})})},A=()=>{const[s,a]=i.useState([]);return i.useEffect(()=>{(async()=>{const l=await g({section:"our-story-page-video"});console.log(l),l.status===200&&a(l.data.media[0])})()},[]),e.jsx(e.Fragment,{children:e.jsxs(c,{children:[e.jsxs("div",{className:"pt-10 lg:pt-16 xl:pt-20 w-full 3xl:max-w-1680px px-4 sm:px-10 lg:px-16 xl:px-20 2xl:px-120px mx-auto",children:[e.jsxs("div",{className:"flex items-center",children:[e.jsx("h5",{className:"text-xs text-b3",children:"Home"}),e.jsx(m,{className:"text-xl text-b19"}),e.jsx("h5",{className:"text-xs text-black",children:"Our Story"})]}),e.jsx(p,{title:"Our Story",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vestibulum metus vel urna tempor auctor. Pellentesque varius lacus at nisl tincidunt fringilla. Phasellus non felis eu lectus pellentesque tincidunt. Sed eget facilisis tortor. Nulla eget imperdiet ex, consectetur pharetra ligula."})]}),e.jsx(n,{BoxStyle:"-left-10",image:"ourvision.webp",about:"OUR VISION",title:"Quis vitae pellentesque enim, nunc hendrerit enim metus ut magna. Pulvinar.",description:"Egestas nulla mauris elit at sed gravida. Donec neque nulla nisi nulla. Vel cras purus tempor ultricies amet. Bibendum sit sit."}),e.jsx(f,{}),e.jsx(n,{BoxStyle:"-left-8",order:"lg:order-2",image:"ourvalue.webp",about:"OUR VALUE",title:"Libero blandit fames tortor porta nunc, imperdiet donec. Semper sit pulvinar sed.",description:"Egestas nulla mauris elit at sed gravida. Donec neque nulla nisi nulla. Vel cras purus tempor ultricies amet. Bibendum sit sit."}),e.jsx(b,{}),e.jsxs("div",{className:"w-full 3xl:max-w-1680px mx-auto",children:[s&&s.type==="iframe"?e.jsx("iframe",{className:"w-full h-[250px] md:h-[700px] 2xl:h-[920px]",src:s.url,title:"Introducing our Next Generation of High End Kitchen Appliances | Miele",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowfullscreen:!0}):null,s&&s.type!=="iframe"?e.jsx("video",{controls:!0,autoPlay:!0,className:"w-full h-[250px] md:h-[700px] object-cover 2xl:h-[920px]",src:s.url}):null]}),e.jsx(N,{}),e.jsx(h,{sliderstyle:"sm:mx-2 3xl:mx-5"}),e.jsx(d,{apiSectionName:"our-story-page-review",title:"Testimonials",dots:!0}),e.jsx(j,{backimage:"Newsletter.webp"})]})})};export{A as default};