import{r as s,j as e,B as p,e as j,af as b}from"./index-f6e59d68.js";const w=({page:a,setPage:x,totalPages:i,media:r,setImg:o,img:d})=>{s.useEffect(()=>{let l=document.getElementById("id6");m(l)},[]);const[t,m]=s.useState(),h=()=>{a>1?x(a-1):x(1);let l=t.clientWidth;t.scrollLeft=t.scrollLeft-l},u=()=>{a<i&&x(a+1);let l=t.clientWidth;t.scrollLeft=t.scrollLeft+l};return e.jsx(e.Fragment,{children:e.jsxs("div",{className:"relative my-8 mx-5",children:[e.jsx("button",{onClick:h,className:"absolute top-0 -right-5 z-40 h-full",children:e.jsx("div",{className:"hidden lg:flex bg-black/30 hover:bg-cyan-500 cursor-pointer px-2 py-2 rounded-full text-white group",children:e.jsx(p,{className:"text-xl"})})}),e.jsx("button",{onClick:u,className:"absolute top-0 -left-5 z-40 h-full",children:e.jsx("div",{className:"hidden lg:flex bg-black/30 hover:bg-cyan-500 cursor-pointer px-2 py-2 rounded-full text-white group",children:e.jsx(j,{className:"text-xl"})})}),e.jsx("div",{id:"id6",className:"flex lg:overflow-x-hidden overflow-x-scroll xl:space-x-[9px] space-x-4 lg:space-x-3 scroll-smooth",children:r.length>0?r.map((l,n)=>e.jsx("img",{onClick:()=>o(l.url),src:l.url,className:`xl:h-[142px] xl:w-[171px] cursor-pointer lg:h-[100px] lg:w-[130px] w-36 h-32 rounded-2xl ${d===l.imageUrl?"border-2 border-white rounded-xl":"border-none"}  `},n)):null})]})})},N=()=>{const[a,x]=s.useState([]),[i,r]=s.useState(""),[o,d]=s.useState(1),[t,m]=s.useState(20),[h,u]=s.useState(0),[l,n]=s.useState(!0),f=async()=>{const c=await b({page:o,limit:t});console.log(c),c.status===200?(x(g=>[...g,...c.data.gallery]),r(c.data.gallery[0].url),u(Math.ceil(c.data.totalCount/t)),n(!1)):(n(!1),x([]))};return s.useEffect(()=>{f()},[o]),e.jsxs("div",{className:"flex flex-col bg-b3 py-10 lg:py-12 w-full 3xl:max-w-1680px px-4 md:px-10 lg:px-16 xl:px-20 2xl:px-120px mx-auto",children:[e.jsxs("div",{className:" lg:mt-10 xl:mt-10 mt-5",children:[l?e.jsx("div",{className:"flex justify-center items-center bg-black/10 xl:h-[565px] lg:h-[400px] h-52 w-full",children:e.jsx("img",{src:"/loader-bg.gif"})}):e.jsx("img",{src:i,className:"xl:h-[565px] lg:h-[400px] h-52 w-full rounded-3xl"}),e.jsx("div",{children:e.jsx(w,{page:o,setPage:d,totalPages:h,media:a,setImg:r,img:i})})]}),e.jsx("div",{className:"flex justify-center py-5",children:e.jsxs("a",{href:"",className:"flex items-center border-[1px] border-white w-fit px-4 xl:py-2 py-1 rounded-md font-semibold text-white",children:[e.jsx("span",{className:"text-sm xl:text-[16px]",children:"Shop Now"}),e.jsx(p,{className:"text-2xl xl:text-3xl"})]})})]})};export{N as default};
