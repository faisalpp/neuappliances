import{aE as u,r as n,a5 as m,j as e,aF as g,U as p,f as h,w as d,v as j}from"./index-3053c656.js";import{M as v}from"./MyAccount-5f5694dc.js";import{R as b,G as N}from"./favorite-18f37150.js";function w(t){return u({tag:"svg",attr:{viewBox:"0 0 16 16",fill:"currentColor"},child:[{tag:"path",attr:{fillRule:"evenodd",clipRule:"evenodd",d:"M13.917 7A6.002 6.002 0 0 0 2.083 7H1.071a7.002 7.002 0 0 1 13.858 0h-1.012z"}}]})(t)}const y=({data:t,reload:i})=>{const c=({numberOfTimes:l})=>{const x=Array.from({length:l},(S,P)=>e.jsx(h,{className:"text-b7 text-lg"}));return e.jsx("div",{className:"flex items-center",children:x})},[o,r]=n.useState(!1),s=JSON.parse(t.product),a=m(l=>l.user._id),f=async l=>{if(l.preventDefault(),!a)d("Login Required!","error",1e3);else{r(!0);const x=await b({pid:t.pid,userId:a});x.status===200?(r(!1),i(),d(x.data.msg,"success",1e3)):(r(!1),d(x.data.message,"error",1e3))}};return e.jsx(e.Fragment,{children:e.jsxs("div",{className:"relative flex maxmd:max-w-[267px] maxmd:mx-auto flex-col border border-b14 rounded-2xl bg-white overflow-hidden",children:[e.jsxs("span",{className:"absolute top-0 right-0 bg-b4 rounded-2xl mt-2 mr-1 px-4 py-2 text-xs font-bold z-20",children:[(100-s.salePrice/s.regPrice*100).toFixed(0),"% Off"]}),e.jsx("div",{className:"flex w-full justify-center xl:px-5 lg:px-5 px-3 pt-10",children:e.jsx("img",{src:"/p1.webp",className:" xl:w-54 lg:w-52 w-[160px] h-full",alt:"refrigrator"})}),e.jsx("button",{type:"button",onClick:l=>f(l),className:"absolute top-3 left-4 h-7 w-7 md:w-8 md:h-8 rounded-full bg-b3 flex justify-center items-center",children:o?e.jsx(w,{className:"animate-spin text-white text-xl"}):e.jsx(g,{className:"text-lg md:text-xl text-white"})}),e.jsxs("div",{className:"flex flex-col gap-y-3 my-5 mx-5 xl:mx-[37.41px]",children:[e.jsx("p",{className:"font-semibold font-reg xl:text-base text-sm !leading-5 text-line-camp",children:s.title}),e.jsxs("div",{className:"flex",children:[e.jsxs("span",{className:"text-b3 font-semibold",children:["$",s.isSale?s.salePrice:s.regPrice]}),s.isSale?e.jsxs("div",{className:"flex justify-end w-full space-x-2 items-center",children:[e.jsxs("strike",{className:"text-[rgba(17,16,16,0.64)] maxmd:text-sm",children:["$",s.regPrice]}),e.jsxs("span",{className:"bg-b4 rounded-xl font-semibold px-2 py-1 text-[10px] md:text-xs",children:["- ",(100-s.salePrice/s.regPrice*100).toFixed(0),"%"]})]}):null]}),e.jsxs("div",{className:"flex items-center space-x-2",children:[e.jsxs("div",{className:"flex items-center gap-1",children:[e.jsx("h4",{className:"text-xs md:text-sm font-semibold text-b15",children:"Cosmetic Rating"}),e.jsx(p,{color:"text-b3"})]}),e.jsxs("div",{className:"flex items-center",children:[e.jsx(c,{numberOfTimes:s.rating})," "]})]}),e.jsxs("div",{className:"flex items-center space-x-10",children:[e.jsxs("div",{className:"flex font-semibold text-xs md:text-sm text-b15",children:[e.jsx("h4",{children:"Discount"})," %"]}),e.jsx("div",{className:"grow bg-gray-100 rounded-lg",children:e.jsx("span",{className:"flex rounded-lg bg-gradient-to-r from-b4 to-b7 w-20 h-2"})})]})]})]})})},C=()=>{const t=m(a=>a.user._id),[i,c]=n.useState([]),[o,r]=n.useState(!1),s=async()=>{r(!0);const a=await N({userId:t});console.log(a.data),a.status===200?(r(!1),c(a.data.favorites)):r(!1)};return n.useEffect(()=>{s()},[]),e.jsx(e.Fragment,{children:e.jsx(v,{children:o?e.jsx("div",{className:"flex justify-center items-center",children:e.jsx(j,{})}):e.jsx(F,{data:i,refresh:s})})})},F=({data:t,refresh:i})=>e.jsx(e.Fragment,{children:(t==null?void 0:t.length)>0?e.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-7 xl:gap-10",children:t.map(c=>e.jsx(y,{data:c,reload:i}))}):e.jsx("div",{className:"flex justify-center items-center h-full",children:e.jsx("img",{src:"/not-found.webp",className:"w-32"})})});export{F as MyFavouriteData,C as default};
