import{bm as F,bb as M,r as a,j as e,bv as R,bE as b,B as y,bd as E,bi as G,Q as d,c4 as H}from"./index-3a1d5092.js";/* empty css                      */import{P as U}from"./Pagination2-e3038c81.js";const T=async o=>{let r;try{r=await F.post("/api/admin/upload-gallery-image",o)}catch(i){return i}return r},_=async o=>{let r;try{r=await M.post("/api/admin/delete-gallery-image",o)}catch(i){return i}return r},J=()=>{const o=a.useRef(null),r=()=>{o.current.click()},[i,h]=a.useState([]),[N,m]=a.useState(!1),[j,g]=a.useState(!1),[v,f]=a.useState(!1),[x,C]=a.useState(1),[w,Q]=a.useState(16),[S,I]=a.useState(0),[n,c]=a.useState([]),[P,u]=a.useState(!1),k=async t=>{t.preventDefault(),m(!0);const s=new FormData;n.forEach((L,B)=>{s.append(`image_${B}`,L)});const l=await T(s);l.status===200?(p(),m(!1),c([]),u(!1),d.success(l.data.msg,{position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"light"})):(m(!1),c([]),u(!1),d.error(l.message,{position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"light"}))},p=async()=>{f(!0);const s=await H({page:x,limit:w});console.log(s),s.status===200?(f(!1),h(s.data.gallery),I(Math.ceil(s.data.totalCount/w))):(f(!1),h([]))};a.useEffect(()=>{p()},[x]);const O=async(t,s)=>{t.preventDefault(),console.log(s),g(!0);const l=await _({id:s});console.log(l),l.status===200?(d.success(l.data.msg,{position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"light"}),p(),g(!1)):(d.error(l.message,{position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"light"}),g(!1))},A=t=>{console.log(t.target.files),c(s=>[...s,...t.target.files]),console.log(n)},D=(t,s)=>{t.preventDefault();const l=[...n];l.splice(s,1),c(l)};return e.jsxs(e.Fragment,{children:[e.jsx(R,{state:P,setState:u,children:e.jsxs("form",{className:"flex flex-col items-center space-y-3 h-96 w-full",children:[e.jsx("div",{className:"grid grid-cols-4 mt-5 gap-x-5 gap-y-5 w-full h-full overflow-x-hidden overflow-y-auto",children:n.length>0?n.map((t,s)=>e.jsxs("div",{className:"relative border-2 border-b6 rounded-lg h-fit",children:[e.jsx("div",{className:"absolute right-1 top-1",children:e.jsx("div",{onClick:l=>D(l,s),className:"flex justify-end w-full bg-white rounded-full",children:e.jsx(b,{className:"text-red-500 text-xl shadow-xl rounded-full cursor-pointer"})})}),e.jsx("img",{src:window.URL.createObjectURL(t),className:"w-full h-24"})]},s)):e.jsx("div",{className:"flex justify-center items-center h-full w-full",children:e.jsx("img",{src:"/no-image.jfif",className:"w-36 "})})}),e.jsx("button",{type:"button",onClick:r,className:"flex justify-center items-center cursor-pointer rounded-md py-1 w-full bg-b3",children:e.jsxs("a",{className:"flex items-center text-center  w-fit px-4 py-1 rounded-md text-white font-semibold",children:[e.jsx("span",{className:"text-xs",children:"Select Images"}),e.jsx(y,{className:"text-2xl"})]})}),e.jsx("button",{type:"button",onClick:k,className:"flex justify-center items-center cursor-pointer rounded-md py-1 w-full bg-b3",children:N?e.jsx("img",{src:"/loader-bg.gif",className:"w-8"}):e.jsxs("a",{className:"flex items-center text-center  w-fit px-4 py-1 rounded-md text-white font-semibold",children:[e.jsx("span",{className:"text-xs",children:"Upload"}),e.jsx(y,{className:"text-2xl"})]})}),e.jsx("input",{type:"file",ref:o,multiple:!0,onChange:t=>A(t),style:{display:"none"}})]})}),e.jsxs(E,{children:[e.jsx("div",{className:"flex w-full justify-end space-x-3",children:e.jsx(b,{onClick:()=>u(!0),className:"text-b3 text-3xl shadow-xl rounded-full cursor-pointer"})}),v?e.jsx("div",{className:"flex mt-32 justify-center  w-full h-full",children:e.jsx("img",{src:"/loader-bg.gif",className:"w-24 h-24"})}):i.length>0?e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"grid grid-cols-4 mt-5 gap-x-5 gap-y-5 w-full",children:i.map((t,s)=>e.jsxs("div",{className:"relative",children:[e.jsx("div",{className:"absolute mt-2 w-full bg-white ",children:e.jsx("span",{title:"Delete Image",onClick:l=>{j||O(l,t._id)},className:"absolute right-1 flex items-center justify-center bg-red-500 text-white  text-sm px-2 w-fit rounded-full cursor-pointer py-2",children:j?e.jsx("img",{src:"/loader-bg.gif",className:"w-4 h-4"}):e.jsx(G,{className:"text-base"})})}),e.jsx("img",{controls:!0,className:"object-cover rounded-2xl xl:h-[150px] xl:w-[200px] lg:w-[200px] lg:h-32 w-32 h-32 ",src:t.url},s)]}))}),e.jsx(U,{page:x,setPage:C,totalPages:S})]}):e.jsx("div",{className:"flex mt-32 justify-center w-full h-full",children:e.jsx("img",{src:"/not-found.webp",className:"w-36 h-36"})})]})]})};export{J as default};
