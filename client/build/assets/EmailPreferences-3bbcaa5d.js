import{j as s,aH as g,r as d,a0 as p,q as t}from"./index-b83a84a7.js";import{M as j}from"./MyAccount-3d91ad9c.js";import{h as b,i as f}from"./profile-6ca0dba7.js";const u=({title:c,checked:n,setState:i})=>s.jsxs(s.Fragment,{children:[s.jsxs("div",{className:"flex items-center justify-between gap-3",children:[s.jsxs("div",{className:"flex flex-col gap-4",children:[s.jsx("h3",{className:" font-semibold",children:c}),s.jsx("p",{className:"text-sm",children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vestibulum metus vel urna tempor auctor."})]}),s.jsx("div",{className:"flex gap-10 items-center",children:s.jsx("div",{class:"inline-flex items-center",children:s.jsx("div",{class:"relative inline-block h-4 w-8 cursor-pointer rounded-full",children:s.jsx(g.Switch,{class:"peer absolute h-4 w-8 cursor-pointer appearance-none rounded-full  bg-gray-300 transition-colors duration-300 checked:bg-b3 peer-checked:border-b3 peer-checked:before:bg-b3",checked:n,onChange:i})})})})]}),s.jsx("hr",{className:"bg-[rgba(0,0,0,0.08)]"})]}),P=()=>s.jsx(s.Fragment,{children:s.jsx(j,{children:s.jsx(w,{})})}),w=()=>{const[c,n]=d.useState(!0),[i,l]=d.useState(!0),o=p(a=>a.user._id),m=async()=>{const a=await b({userId:o});a.status===200?(n(a.data.user.isNews),l(a.data.user.isOffers)):t(a.data.message,"error",1e3)};d.useEffect(()=>{m()});const h=async()=>{const a=await f({userId:o,name:"news",value:e.target.checked});a.status===200?(l(a.data.data.isNews),t(a.data.msg,"success",1e3)):t(a.data.message,"error",1e3)},x=async a=>{const r=await f({userId:o,name:"offers",value:a.target.checked});r.status===200?(l(r.data.data.isOffers),t(r.data.msg,"success",1e3)):t(r.data.message,"error",1e3)};return s.jsx(s.Fragment,{children:s.jsxs("div",{className:"flex flex-col gap-10 [&>hr:last-child]:hidden",children:[s.jsx(u,{checked:i,setState:x,title:"Deals & Offers"}),s.jsx(u,{checked:c,setState:h,title:"Newsletter"})]})})};export{w as EmailPreferencesData,P as default};
