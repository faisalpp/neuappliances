import{d as O,r,u as B,j as e,Q as i}from"./index-10a6e95b.js";import{A as k}from"./AdminAccount-cda1c1d5.js";import{p as D,a as P}from"./index.esm-8fea9dd4.js";/* empty css                      */import{g as A,a as R}from"./category-d0a0305e.js";import"./MainLayout-4599f12c.js";import"./ScrollToTop-0126eb0a.js";import"./index-7250c32d.js";const Q=()=>{const{id:n}=O(),[c,d]=r.useState(""),[b,j]=r.useState(""),[N,v]=r.useState(""),[x,m]=r.useState(""),[u,p]=r.useState(""),[l,g]=r.useState(!1),[f,h]=r.useState(""),[w,o]=r.useState(!1),y=B(),C=t=>{t.target.files[0]&&(v(c),d(URL.createObjectURL(t.target.files[0])),j(t.target.files[0]))};r.useEffect(()=>{(async()=>{const a=await A({id:n});a.status===200?(m(a.data.category[0].title),h(a.data.category[0].description),p(a.data.category[0].slug),d(a.data.category[0].image),g(a.data.category[0].inMenu)):i.error(a.message,{position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"light"})})()},[]);const S=async t=>{t.preventDefault(),o(!0);const s=new FormData;s.set("title",x),s.set("image",b),s.set("description",f),s.set("oldImage",N),s.set("slug",u),s.set("id",n),s.set("inMenu",l);const a=await R(s);a.status===200?(o(!1),i.success(a.data.msg,{position:"top-right",autoClose:1e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"light"}),y(-1)):(o(!1),i.error(a.data.message,{position:"top-right",autoClose:1e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"light"}))},I=t=>{m(t.target.value);const s=t.target.value.toLowerCase().replace(/ /g,"_");p(s)};return e.jsx(e.Fragment,{children:e.jsxs(k,{children:[e.jsx("div",{className:"flex mb-5 py-3 rounded-3xl px-10 w-full",children:e.jsx(D,{onClick:()=>y(-1),className:"text-b3 text-3xl shadow-xl rounded-full cursor-pointer"})}),e.jsx("div",{className:"flex justify-center w-full",children:e.jsxs("form",{onSubmit:S,encType:"multipart/form-data",className:"flex flex-col space-y-5 w-8/12 px-10 py-10 rounded-2xl bg-white border-[1px] border-gray-200",children:[e.jsx("div",{className:"rounded-2xl border border-gray-300 p-3 h-[225px] w-fit flex justify-center items-center self-center",children:e.jsx("img",{src:c,className:"max-w-fit h-[225px] object-contain",alt:"example"})}),e.jsxs("div",{className:"flex flex-col space-y-1",children:[e.jsx("h5",{className:"text-xs font-semibold",children:"Category Title"}),e.jsx("input",{type:"text",value:x,onChange:I,className:"text-sm outline-none border-[1px] border-gray-200 w-full px-4 py-3 rounded-md",placeholder:"Refregerator"})]}),e.jsxs("div",{className:"flex flex-col space-y-1",children:[e.jsx("h5",{className:"text-xs font-semibold",children:"Category Image"}),e.jsx("input",{type:"file",accept:"image/*",onChange:C,className:"text-sm outline-none border-[1px] border-gray-200 w-full px-4 py-3 rounded-md"})]}),e.jsxs("div",{className:"flex flex-col space-y-1",children:[e.jsx("h5",{className:"text-xs font-semibold",children:"Category Description"}),e.jsx("textarea",{placeholder:"Enter Category Description",value:f,className:"text-sm h-32 outline-none border-[1px] border-gray-200 w-full px-4 py-3 rounded-md",onChange:t=>h(t.target.value)})]}),e.jsxs("div",{className:"flex justify-center space-x-5 w-full items-center",children:[e.jsxs("div",{className:"flex flex-col space-y-1 w-full",children:[e.jsx("h5",{className:"text-xs font-semibold",children:"Category Slug"}),e.jsx("input",{type:"text",value:u,readOnly:!0,className:" text-sm outline-none border-[1px] border-gray-200 w-full px-4 py-3 rounded-md",placeholder:"refregerator"})]}),e.jsxs("div",{className:"flex flex-col space-y-1",children:[e.jsx("h5",{className:"text-xs font-semibold",children:"Show In Navbar"}),e.jsxs("div",{className:"flex w-fit space-x-1",children:[e.jsx("input",{type:"checkbox",checked:!!l,onChange:t=>g(t.target.checked),className:"text-sm outline-none border-[1px] border-gray-200 w-full px-4 py-3 rounded-md"}),e.jsx("h5",{className:"text-xs font-semibold",children:l?"Visible":"Hidden"})]})]})]}),e.jsx("button",{type:"submit",className:"flex justify-center items-center cursor-pointer rounded-md py-1 w-full bg-b3",children:w?e.jsx("img",{src:"/loader-bg.gif",className:"w-8"}):e.jsxs("a",{className:"flex items-center text-center  w-fit px-4 py-1 rounded-md text-white font-semibold",children:[e.jsx("span",{className:"text-xs",children:"Update"}),e.jsx(P,{className:"text-2xl"})]})})]})})]})})};export{Q as default};
