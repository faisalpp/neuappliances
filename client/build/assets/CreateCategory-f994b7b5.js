import{r as a,u as C,j as e,b5 as S,B as D,Q as i}from"./index-4f6f68a5.js";import{c as I}from"./category-3eaaabef.js";const k=()=>{const[d,x]=a.useState("https://placehold.co/600x400"),[m,u]=a.useState("/"),[l,p]=a.useState(""),[o,g]=a.useState(""),[n,f]=a.useState(!1),[h,y]=a.useState(!1),[c,b]=a.useState(""),j=C(),N=s=>{x(URL.createObjectURL(s.target.files[0])),u(s.target.files[0])},v=async s=>{s.preventDefault(),y(!0);const t=new FormData;t.set("title",l),t.set("slug",o),t.set("image",m),t.set("inMenu",n),t.set("description",c);const r=await I(t);r.status===200?(i.success(r.data.msg,{position:"top-right",autoClose:2e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"light"}),j("/admin/categories")):i.error(r.data.message,{position:"top-right",autoClose:2e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"light"})},w=s=>{p(s.target.value);const t=s.target.value.toLowerCase().replace(/\s/g,"-");g(t)};return e.jsx(e.Fragment,{children:e.jsx(S,{children:e.jsx("div",{className:"flex justify-center w-full",children:e.jsxs("form",{onSubmit:v,encType:"multipart/form-data",className:"flex flex-col space-y-5 w-8/12 px-10 py-10 rounded-2xl bg-white border-[1px] border-gray-200",children:[e.jsx("div",{className:"rounded-2xl border border-gray-300 p-3 h-[225px] w-fit flex justify-center items-center self-center",children:e.jsx("img",{src:d,className:"max-w-fit h-[225px] object-contain",alt:"example"})}),e.jsxs("div",{className:"flex flex-col space-y-1",children:[e.jsx("h5",{className:"text-xs font-semibold",children:"Category Title"}),e.jsx("input",{type:"text",value:l,onChange:w,className:"text-sm outline-none border-[1px] border-gray-200 w-full px-4 py-3 rounded-md",placeholder:"Refregerator"})]}),e.jsxs("div",{className:"flex flex-col space-y-1",children:[e.jsx("h5",{className:"text-xs font-semibold",children:"Category Image"}),e.jsx("input",{type:"file",accept:"image/*",onChange:N,className:"text-sm outline-none border-[1px] border-gray-200 w-full px-4 py-3 rounded-md"})]}),e.jsxs("div",{className:"flex flex-col space-y-1",children:[e.jsx("h5",{className:"text-xs font-semibold",children:"Category Description"}),e.jsx("textarea",{placeholder:"Enter Category Description",value:c,className:"text-sm outline-none border-[1px] border-gray-200 w-full px-4 py-3 rounded-md",onChange:s=>b(s.target.value)})]}),e.jsxs("div",{className:"flex justify-center space-x-5 w-full items-center",children:[e.jsxs("div",{className:"flex flex-col space-y-1 w-full",children:[e.jsx("h5",{className:"text-xs font-semibold",children:"Category Slug"}),e.jsx("input",{type:"text",value:o,readOnly:!0,className:" text-sm outline-none border-[1px] border-gray-200 w-full px-4 py-3 rounded-md",placeholder:"refregerator"})]}),e.jsxs("div",{className:"flex flex-col space-y-1",children:[e.jsx("h5",{className:"text-xs font-semibold",children:"Show In Navbar"}),e.jsxs("div",{className:"flex w-fit space-x-1",children:[e.jsx("input",{type:"checkbox",defaultValue:!1,onChange:s=>f(s.target.checked),className:"text-sm outline-none border-[1px] border-gray-200 w-full px-4 py-3 rounded-md"}),e.jsx("h5",{className:"text-xs font-semibold",children:n?"Visible":"Hidden"})]})]})]}),e.jsx("button",{type:"submit",className:"flex justify-center items-center cursor-pointer rounded-md py-1 w-full bg-b3",children:h?e.jsx("img",{src:"/loader-bg.gif",className:"w-8"}):e.jsxs("a",{className:"flex items-center text-center  w-fit px-4 py-1 rounded-md text-white font-semibold",children:[e.jsx("span",{className:"text-xs",children:"Create"}),e.jsx(D,{className:"text-2xl"})]})})]})})})})};export{k as default};
