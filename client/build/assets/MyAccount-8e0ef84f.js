import{a6 as r,j as e,a7 as n,L as c,a1 as d,r as m,M as p,R as g,a8 as u}from"./index-fffd2dc5.js";const h=({onClose:s,isItems:a})=>{const l=r(),x=[{title:"Profile",link:"/my-account/profile"},{title:"Order History",link:"/my-account/order-history"},{title:"My Favourites",link:"/my-account/my-favourites"},{title:"Saved Addresses ",link:"/my-account/saved-addresses"},{title:"Billing Information ",link:"/my-account/billing-information"},{title:"Change Password ",link:"/my-account/change-password"},{title:"Email Preferences ",link:"/my-account/email-preferences"}],o=t=>{t.stopPropagation()},i=a?"top-0 bottom-0":"-bottom-[420px] maxlg:opacity-0 maxlg:pointer-events-none";return e.jsx(e.Fragment,{children:e.jsx("div",{className:`maxlg:fixed maxlg:bg-black/20 maxlg:items-end left-0 right-0 z-50 duration-300 lg:min-w-[240px] maxlg:flex ${i}`,onClick:s,children:e.jsxs("div",{className:"[&>div]:maxlg:px-10 maxlg:max-h-[398px] w-full maxlg:pb-10 maxlg:rounded-tl-2xl maxlg:rounded-tr-2xl maxlg:bg-white maxlg:overflow-y-auto lg:h-auto",onClick:o,children:[e.jsxs("div",{className:"lg:hidden maxlg:sticky top-0 flex maxlg:py-4 justify-between lg:pb-4 items-center border-b maxlg:bg-white z-50 maxlg:shadow-md",children:[e.jsxs("button",{type:"button",className:"border border-[rgba(0,0,0,0.15)] text-[#B20B0B] flex gap-4 items-center font-semibold lg:hidden px-2 py-1 hover:bg-black/5 rounded duration-300",children:[e.jsx("span",{children:"Logout"}),e.jsx(n,{"stroke-width":"3"})]}),e.jsx("button",{type:"button",onClick:s,className:"text-sm font-semibold lg:hidden px-2 py-1 hover:bg-black/5 rounded duration-300",children:"Close"})]}),e.jsx("div",{className:"maxlg:!px-3 flex flex-col gap-1 maxlg:py-3",children:x.map(t=>e.jsxs(c,{to:t.link,className:`duration-300 w-full px-6 py-4 font-semibold flex justify-between items-center text-left border rounded-lg ${l.pathname===t.link?"active border-b3 bg-b3 text-white":"border-b14 text-[rgba(17,16,16,0.64)]"}`,children:[e.jsx("span",{children:t.title}),l.pathname===t.link?e.jsx(d,{}):null]},t.id))})]})})})},f=({children:s})=>{const[a,l]=m.useState(!1),x=()=>{l(!1)};return e.jsx(e.Fragment,{children:e.jsxs(p,{children:[e.jsx("div",{className:"flex items-center pt-10 w-full 3xl:max-w-1680px px-4 md:px-10 lg:px-16 xl:px-20 2xl:px-120px mx-auto",children:e.jsxs("div",{className:"flex items-center",children:[e.jsx("h5",{className:"text-xs text-b3",children:"Home"}),e.jsx(g,{className:"text-xl text-b19"}),e.jsx("h5",{className:"text-xs text-[#5E5E5E]",children:"My Account"})]})}),e.jsxs("div",{className:"flex items-center justify-between pt-5 pb-11 3xl:max-w-1680px px-4 sm:px-10 lg:px-16 xl:px-20 2xl:px-120px mx-auto",children:[e.jsx("h1",{className:"font-bold text-2xl md:text-3xl xl:text-4xl 2xl:text-[40px]",children:"My Account"}),e.jsxs("button",{className:"hidden lg:flex gap-4 items-center py-4 px-6 rounded-lg font-bold border border-[rgba(0,0,0,0.15)] text-[#B20B0B]",children:[e.jsx("span",{children:"Logout"}),e.jsx(n,{"stroke-width":"3"})]}),e.jsxs("button",{className:"ml-auto shadow-md px-3 py-2 text-sm font-semibold rounded-lg flex gap-2 items-center bg-b3 text-white lg:hidden",onClick:()=>l(!0),children:["My Account ",e.jsx(u,{className:"text-xs stroke-1"})]})]}),e.jsxs("div",{className:"flex maxlg:flex-col justify-center gap-6 py-10 w-full 3xl:max-w-1680px px-4 sm:px-10 lg:px-16 xl:px-20 2xl:px-120px mx-auto",children:[e.jsx(h,{onClose:x,isItems:a}),e.jsx("div",{className:"w-full",children:e.jsx("div",{className:"border border-[rgba(0,0,0,0.15)] rounded-2xl p-5 sm:p-7 xl:p-10",children:s})})]})]})})};export{f as M};
