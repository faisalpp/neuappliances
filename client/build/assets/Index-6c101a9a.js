import{j as e,L as y,r as s,as as g,M as S,R as M,q as A}from"./index-7e2d3c57.js";import{A as L}from"./ApplianceDetail-d9bb5ede.js";import R from"./NewsLetterSection-f1779c14.js";import k from"./SatisfiedSection-bcf006c8.js";import{h as B}from"./moment-fbc5633a.js";import{L as C}from"./Loader2-a2e8d51a.js";import"./slick-theme-e6532f8f.js";import"./Modal-4ddcd283.js";const D=({image:r,title:a,date:l,readMore:i})=>e.jsxs("div",{className:"xl:p-6 2xl:p-[30px] grid grid-cols-1 gap-5",children:[e.jsx("img",{src:r||"/no-image.jfif",alt:"",className:"w-full h-48 lg:h-52 xl:h-[238px]"}),e.jsxs("div",{className:"flex flex-col gap-[10px]",children:[e.jsx("span",{className:"text-xs text-b24 font-semibold uppercase",children:l}),e.jsx("h3",{className:"font-bold lg:text-lg xl:text-xl",children:a})]}),e.jsx("div",{children:e.jsx(y,{to:`/blog/${i}`,className:"px-5 py-[10px] rounded border border-b3  text-b3 font-bold hover:bg-b3 hover:text-white duration-300 text-xs",children:"Read More"})})]}),O=({load:r,data:a,LoadMore:l})=>{const i=t=>B(t).format("MMMM D, YYYY");return e.jsx("div",{className:"pb-10 lg:pb-16 xl:pb-20 pt-5 w-full 3xl:max-w-1680px px-4 sm:px-10 lg:px-16 xl:px-20 2xl:px-120px mx-auto",children:a.length>0?e.jsxs(e.Fragment,{children:[e.jsx("h2",{className:"text-2xl xl:text-32px font-bold text-b18 text-center",children:"Recent Stories"}),e.jsx("div",{className:"my-10 grid grid-cols-1 xs:grid-cols-2 md:!grid-cols-3 gap-y-10 gap-x-4 2xl:gap-6",children:a.length>0&&a.map((t,m)=>e.jsx(D,{image:t.thumbnail?t.thumbnail:"/no-image.jfif",title:t.title.substr(0,50),date:i(t.createdAt),readMore:t.slug},m))}),e.jsx("div",{className:"flex justify-center",children:e.jsx("button",{type:"button",onClick:l,className:"px-4 py-3 rounded-lg border bg-b3 text-white border-b3 hover:bg-white hover:text-b3 font-medium duration-300 text-xs",children:r?e.jsx("img",{src:"loader-bg.gif",className:"w-5 h-5"}):"Read More"})})]}):e.jsx("div",{className:"w-full flex justify-center",children:e.jsx("img",{src:"/not-found.webp",className:"w-32"})})})},$=()=>{const[r,a]=s.useState(0),[l,i]=s.useState(1),[t,m]=s.useState(6),[P,u]=s.useState(0),[f,c]=s.useState([]),[h,d]=s.useState(!1),[b,p]=s.useState(!1);s.useEffect(()=>{j()},[]);const j=async()=>{d(!0);const n=await g({page:l,limit:t});console.log(n),n.status===200?(u(Math.ceil(n.data.totalCount/t)),c(n.data.blogs),d(!1)):(c([]),d(!1))},N=async o=>{p(!0);const x=await g({page:o,limit:t});console.log(x),x.status===200&&(u(Math.ceil(x.data.totalCount/t)),c(v=>[...v,...x.data.blogs])),p(!1)},w=()=>{r<l&&(i(o=>o+1),a(o=>o+1),N(l+1))};return e.jsx(e.Fragment,{children:h?e.jsx(C,{}):e.jsxs(S,{children:[e.jsxs("div",{className:"py-10 lg:py-16 xl:py-20 w-full 3xl:max-w-1680px px-4 sm:px-10 lg:px-16 xl:px-20 2xl:px-120px mx-auto",children:[e.jsxs("div",{className:"flex items-center",children:[e.jsx("h5",{className:"text-xs text-b3",children:"Home"}),e.jsx(M,{className:"text-xl text-b19"}),e.jsx("h5",{className:"text-xs text-black",children:"Blog"})]}),e.jsx(L,{title:"Appliance Industry Blog",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vestibulum metus vel urna tempor auctor. Pellentesque varius lacus at nisl tincidunt fringilla. Phasellus non felis eu lectus pellentesque tincidunt. Sed eget facilisis tortor. Nulla eget imperdiet ex, consectetur pharetra ligula."}),e.jsxs("button",{type:"button",className:"inline-flex text-xs font-medium items-center gap-1 text-b3 border border-b3 px-4 py-3 rounded-lg mt-6",children:["See All Stories ",e.jsx("span",{children:e.jsx(A,{className:"text-base"})})]})]}),e.jsx(O,{load:b,data:f,LoadMore:w}),e.jsx(k,{apiSectionName:"blog-page-review",title:"Our Customers Are RAVING About Our Appliance Outlet",dots:!0}),e.jsx(R,{backimage:"Newsletter.webp"})]})})};export{$ as default};
