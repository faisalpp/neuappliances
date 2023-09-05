import{p,j as e,aW as m,L as c,aJ as g,r as h,$ as u,u as b,e as f,s as j,w as k,b9 as w,Q as d,ba as v}from"./index-f13c45bd.js";const y=({onClose:s,isItems:l})=>{const a=p(),n=[{title:"Dashboard",link:"/admin/dashboard"},{title:"Orders",link:"/admin/manage-orders"},{title:"Customers",link:"/admin/manage-customers"},{title:"Products",link:"/admin/manage-products"},{title:"Category Pages",link:"/admin/categories"},{title:"Blog",link:"/admin/manage-blogs"},{title:"Help & Support",link:"/admin/manage-help-support"},{title:"Helpful Appliance Tips",link:"/admin/manage-appliance-tips"},{title:"Meet The Team",link:"/admin/manage-team"},{title:"FAQ's",link:"/admin/faq"},{title:"Videos Manager",link:"/admin/manage-videos"},{title:"Reviews Manager",link:"/admin/manage-reviews"},{title:"Gallery Manager",link:"/admin/manage-gallery"},{title:"Change Password ",link:"/admin/change-password"},{title:"Shipping & Tax",link:"/admin/manage-shipping"}],i=t=>{t.stopPropagation()},o=l?"top-0 bottom-0":"-bottom-[420px] maxlg:opacity-0 maxlg:pointer-events-none";return e.jsx(e.Fragment,{children:e.jsx("div",{className:`maxlg:fixed maxlg:bg-black/20 maxlg:items-end left-0 right-0 z-50 duration-300 lg:min-w-[240px] maxlg:flex ${o}`,onClick:s,children:e.jsxs("div",{className:"[&>div]:maxlg:px-10 maxlg:max-h-[398px] w-full maxlg:pb-10 maxlg:rounded-tl-2xl maxlg:rounded-tr-2xl maxlg:bg-white maxlg:overflow-y-auto lg:h-auto",onClick:i,children:[e.jsxs("div",{className:"lg:hidden maxlg:sticky top-0 flex maxlg:py-4 justify-between lg:pb-4 items-center border-b maxlg:bg-white z-50 maxlg:shadow-md",children:[e.jsxs("button",{type:"button",className:"border border-[rgba(0,0,0,0.15)] text-[#B20B0B] flex gap-4 items-center font-semibold lg:hidden px-2 py-1 hover:bg-black/5 rounded duration-300",children:[e.jsx("span",{children:"Logout"}),e.jsx(m,{"stroke-width":"3"})]}),e.jsx("button",{type:"button",onClick:s,className:"text-sm font-semibold lg:hidden px-2 py-1 hover:bg-black/5 rounded duration-300",children:"Close"})]}),e.jsx("div",{className:"maxlg:!px-3 flex flex-col gap-1 maxlg:py-3",children:n.map((t,r)=>e.jsxs(c,{to:t.link,className:`duration-300 w-full px-6 py-4 font-semibold flex justify-between items-center text-left border rounded-lg ${a.pathname===t.link?"active border-b3 bg-b3 text-white":"border-b14 text-[rgba(17,16,16,0.64)]"}`,children:[e.jsx("span",{children:t.title}),a.pathname===t.link?e.jsx(g,{}):null]},r))})]})})})},C=({children:s})=>{const[l,a]=h.useState(!1),n=u(),i=b(),o=()=>{a(!1)},t=async r=>{r.preventDefault();const x=await w();x.status===200?(d.success(x.msg,{position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"light"}),n(v()),i("/")):d.error(x.message,{position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"light"})};return e.jsx(e.Fragment,{children:e.jsxs(f,{children:[e.jsx("div",{className:"flex items-center pt-10 w-full 3xl:max-w-1680px px-4 md:px-10 lg:px-16 xl:px-20 2xl:px-120px mx-auto",children:e.jsxs("div",{className:"flex items-center",children:[e.jsx("h5",{className:"text-xs text-b3",children:"Home"}),e.jsx(j,{className:"text-xl text-b19"}),e.jsx("h5",{className:"text-xs text-[#5E5E5E]",children:"Dashboard"})]})}),e.jsxs("div",{className:"flex items-center justify-between pt-5 pb-11 3xl:max-w-1680px px-4 sm:px-10 lg:px-16 xl:px-20 2xl:px-120px mx-auto",children:[e.jsx("h1",{className:"font-bold text-2xl md:text-3xl xl:text-4xl 2xl:text-[40px]",children:"Dashboard"}),e.jsxs("button",{type:"button",onClick:t,className:"hidden lg:flex gap-4 items-center py-4 px-6 rounded-lg font-bold border border-[rgba(0,0,0,0.15)] text-[#B20B0B]",children:[e.jsx("span",{children:"Logout"}),e.jsx(m,{"stroke-width":"3"})]}),e.jsxs("button",{className:"ml-auto shadow-md px-3 py-2 text-sm font-semibold rounded-lg flex gap-2 items-center bg-b3 text-white lg:hidden",onClick:()=>a(!0),children:["Dashboard ",e.jsx(k,{className:"text-xs stroke-1"})]})]}),e.jsxs("div",{className:"flex maxlg:flex-col justify-center gap-6 py-10 w-full 3xl:max-w-1680px px-4 sm:px-10 lg:px-16 xl:px-20 2xl:px-120px mx-auto",children:[e.jsx(y,{onClose:o,isItems:l}),e.jsx("div",{className:"h-full w-full",children:e.jsx("div",{className:"h-auto border border-[rgba(0,0,0,0.15)] rounded-2xl p-5 sm:p-7 xl:py-5 xl:px-10",children:s})})]})]})})};export{C as A};
