import{r as l,j as e}from"./index-700f33c8.js";import{o as m}from"./ScrollToTop-87b7b771.js";import{M as x}from"./MainLayout-c4236618.js";import{ProfileData as f}from"./Profile-e2d0f90d.js";import{OrderHistoryData as p}from"./OrderHistory-6b8af1b6.js";import{MyFavouriteData as b}from"./MyFavourite-223eaa92.js";import{SavedAddressData as u}from"./SavedAddress-5e47eabd.js";import{BillingInformationData as h}from"./BillingInformation-88a6d0bd.js";import{ChangePasswordData as j}from"./ChangePassword-474df0aa.js";import{EmailPreferencesData as v}from"./EmailPreferences-d763c591.js";import"./MyAccount-a5986b64.js";import"./CustomInput-678c9c65.js";import"./CustomButton-5cfd1916.js";import"./countries-5d447428.js";const I=()=>{const[i,s]=l.useState(window.innerWidth<=992),[o,a]=l.useState(),r=[{title:"Profile",content:f},{title:"Order History",content:p},{title:"My Favourites",content:b},{title:"Saved Addresses ",content:u},{title:"Billing Information",content:h},{title:"Change Password",content:j},{title:"Email Preferences",content:v}],c=t=>{a(t)};l.useEffect(()=>{const t=()=>{s(window.innerWidth<=992)};return window.addEventListener("resize",t),()=>{window.removeEventListener("resize",t)}},[]);const d=()=>{location.href="/"};return e.jsx(e.Fragment,{children:i?e.jsx(x,{children:e.jsxs("div",{className:"px-4 md:px-10 py-10",children:[e.jsx("h1",{className:"text-b18 font-bold text-32px",children:"My Account"}),e.jsx("div",{className:"w-full flex flex-col gap-6 mt-10",children:r.map((t,n)=>e.jsx(w,{title:t.title,activeClass:n===o,isOpen:n===o,onClick:()=>{c(n)},children:e.jsx(t.content,{})},n))})]})}):d()})},w=({title:i,isOpen:s,onClick:o,children:a,activeClass:r})=>e.jsxs("div",{className:"duration-200 flex flex-col",children:[e.jsxs("button",{onClick:o,className:`p-5 xl:p-6 xl:text-lg font-semibold flex justify-between border items-center text-left ${r?"bg-b3 text-white border-b3 rounded-t-2xl":"border-b14 bg-white text-b1 rounded-2xl"}`,children:[e.jsx("span",{children:i}),e.jsx(m,{className:`duration-200 ${r?"rotate-180":""}`})]}),e.jsx("div",{className:`${s?"gap-6 p-5 max-h-full border border-b14 rounded-b-2xl":"max-h-0 select-none opacity-0 pointer-events-none"} duration-200`,children:a})]});export{I as default};
