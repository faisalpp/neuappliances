import{R as N,j as e,w as j,I as v,f,r as h,i as w,h as y,bf as S}from"./index-1c659439.js";import{S as I}from"./slick-theme-8eeff3a3.js";function k({buttonName:n,buttonClass:x,icon:l,title:a,description:c,note:r,rating:t}){const[o,s]=N.useState(!1),i=()=>s(!o),u=({numberOfTimes:d})=>{const p=Array.from({length:d},(g,b)=>e.jsx(f,{className:"text-b7 text-sm xl:text-xl"},b));return e.jsx("div",{className:"flex items-center",children:p})},m=({numberOfTimes:d})=>{const p=Array.from({length:d},(g,b)=>e.jsx(f,{className:"text-gray-300 text-sm xl:text-xl"},b));return e.jsx("div",{className:"flex items-center",children:p})};return e.jsxs(e.Fragment,{children:[e.jsx("button",{onClick:i,className:x,dangerouslySetInnerHTML:{__html:n}}),e.jsxs(j.Dialog,{className:"relative sm:!max-w-[420px] sm:!min-w-[420px]",open:o,handler:i,children:[e.jsxs(j.DialogBody,{className:"p-6",children:[l?e.jsx("img",{src:l,className:"w-14 h-14 mb-4 mx-auto",alt:a}):"",e.jsx("h3",{className:"text-black text-2xl mb-4 font-semibold text-center",children:a}),t?e.jsxs("div",{className:"flex justify-center items-center gap-1 mb-2",children:[e.jsx(u,{numberOfTimes:t}),e.jsx(m,{numberOfTimes:5-t})]}):"",e.jsx("p",{className:"text-center mb-6 text-b16 -tracking-[0.48px] leading-[30px]",children:c}),r?e.jsx("p",{className:"text-b16 font-semibold text-center",children:r}):""]}),e.jsx("button",{type:"button",onClick:i,className:"absolute right-0 sm:-right-10 -top-10 sm:top-0 bg-b3 text-white flex p-1 justify-center items-center w-8 h-8 rounded-full",children:e.jsx(v,{className:"text-3xl"})})]})]})}const R=({description:n,author:x,review:l})=>{const a=h.useRef(null),[c,r]=h.useState(!1);h.useEffect(()=>{const s=a.current;if(s){const m=6*parseInt(getComputedStyle(s).lineHeight),d=s.scrollHeight;r(d>m)}},[n]);const t=({numberOfTimes:s})=>{const i=Array.from({length:s},(u,m)=>e.jsx(f,{className:"text-b7 text-sm xl:text-xl"},m));return e.jsx("div",{className:"flex mt-2 items-center",children:i})},o=({numberOfTimes:s})=>{const i=Array.from({length:s},(u,m)=>e.jsx(f,{className:"text-gray-300 text-sm xl:text-xl"},m));return e.jsx("div",{className:"flex mt-2 items-center",children:i})};return e.jsxs("div",{className:"maxmd:mx-2 h-full flex flex-col bg-[rgba(255,155,62,0.08)] shadow-sm p-6 sm:p-10 rounded-2xl md:mx-[11px]",children:[e.jsxs("div",{className:"flex",children:[e.jsx(t,{numberOfTimes:l}),e.jsx(o,{numberOfTimes:5-l})]}),e.jsxs("div",{children:[e.jsx("p",{ref:a,className:"text-sm xl:text-base mt-6 font-normal leading-6 line-clamp-6",children:n}),c&&e.jsx(k,{title:x,description:n,rating:l,buttonClass:"text-b3 maxsm:text-sm font-semibold",buttonName:"Learn More"})]}),e.jsx("h5",{className:"text-lg xl:text-base mt-4 mb-2 font-bold lg:w-10/12 xl:w-10/12 w-full",children:x})]})},T=({clientreviews:n,icon:x,dots:l})=>{const a={dots:l,infinite:!1,arrows:!0,speed:300,slidesToShow:3,slidesToScroll:1,initialSlide:0,responsive:[{breakpoint:767,settings:{dots:!0,slidesToShow:1.08}},{breakpoint:1439,settings:{slidesToShow:2}}]},c=({onClick:t})=>e.jsx("button",{onClick:t,className:"hidden sm:block prev-button absolute top-0 -left-3 z-40 h-full pointer-events-none",children:e.jsx("div",{className:"flex bg-black/30 hover:bg-cyan-500 cursor-pointer px-2 py-2 rounded-full text-white group pointer-events-auto",children:e.jsx(w,{className:"text-xl"})})}),r=({onClick:t})=>e.jsx("button",{onClick:t,className:"hidden sm:block next-button absolute top-0 -right-3 z-40 h-full pointer-events-none",children:e.jsx("div",{className:"flex bg-black/30 hover:bg-cyan-500 cursor-pointer px-2 py-2 rounded-full text-white group pointer-events-auto",children:e.jsx(y,{className:"text-xl"})})});return e.jsx("div",{className:"reviewslider-wrapper",children:n.length>0?e.jsx(I,{...a,prevArrow:e.jsx(c,{}),nextArrow:e.jsx(r,{}),className:"relative maxmd:mb-10",children:n.map((t,o)=>e.jsx("div",{children:e.jsx(R,{description:t.content,author:t.author,review:t.rating})},o))}):e.jsx("div",{className:"flex items-center justify-center w-full",children:e.jsx("img",{src:"/loader-bg.gif",className:"w-10 h-10 "})})})},H=({apiSectionName:n,title:x,dots:l,SectionStyle:a})=>{const[c,r]=h.useState([]),t=async()=>{const s=await S({pageType:n});s.status===200?r(s.data.reviews):r([])};return h.useEffect(()=>{t()},[]),e.jsxs("div",{className:`flex flex-col justify-center maincontainer py-10 lg:py-16 xl:py-20 2xl:py-120px ${a} ${l?"mb-7":""}`,children:[x?e.jsx("h2",{className:"text-xl lg:text-2xl xl:text-3xl 2xl:text-32px font-bold text-center pb-7 xl:pb-20",children:x}):null,e.jsx("div",{className:"relative",children:e.jsx(T,{clientreviews:c,dots:l})})]})};export{k as M,H as S};
