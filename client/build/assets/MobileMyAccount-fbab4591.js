import{r as l,j as e,e as m,f as x}from"./index-8a97a798.js";import{ProfileData as f}from"./Profile-90cdb3ff.js";import{OrderHistoryData as p}from"./OrderHistory-8a424a2e.js";import{MyFavouriteData as b}from"./MyFavourite-0bf4b404.js";import{SavedAddressData as u}from"./SavedAddress-fc68ff0e.js";import{BillingInformationData as h}from"./BillingInformation-14f63cc3.js";import{ChangePasswordData as j}from"./ChangePassword-a7d4d2a2.js";import{EmailPreferencesData as v}from"./EmailPreferences-7ad8bef6.js";import"./MyAccount-6f9dc9a0.js";import"./CustomInput-596f9cc0.js";import"./CustomButton-0b46914d.js";import"./countries-5d447428.js";const k=()=>{const[s,i]=l.useState(window.innerWidth<=992),[o,a]=l.useState(),r=[{title:"Profile",content:f},{title:"Order History",content:p},{title:"My Favourites",content:b},{title:"Saved Addresses ",content:u},{title:"Billing Information",content:h},{title:"Change Password",content:j},{title:"Email Preferences",content:v}],c=t=>{a(t)};l.useEffect(()=>{const t=()=>{i(window.innerWidth<=992)};return window.addEventListener("resize",t),()=>{window.removeEventListener("resize",t)}},[]);const d=()=>{location.href="/"};return e.jsx(e.Fragment,{children:s?e.jsx(m,{children:e.jsxs("div",{className:"px-4 md:px-10 py-10",children:[e.jsx("h1",{className:"text-b18 font-bold text-32px",children:"My Account"}),e.jsx("div",{className:"w-full flex flex-col gap-6 mt-10",children:r.map((t,n)=>e.jsx(w,{title:t.title,activeClass:n===o,isOpen:n===o,onClick:()=>{c(n)},children:e.jsx(t.content,{})},n))})]})}):d()})},w=({title:s,isOpen:i,onClick:o,children:a,activeClass:r})=>e.jsxs("div",{className:"duration-200 flex flex-col",children:[e.jsxs("button",{onClick:o,className:`p-5 xl:p-6 xl:text-lg font-semibold flex justify-between border items-center text-left ${r?"bg-b3 text-white border-b3 rounded-t-2xl":"border-b14 bg-white text-b1 rounded-2xl"}`,children:[e.jsx("span",{children:s}),e.jsx(x,{className:`duration-200 ${r?"rotate-180":""}`})]}),e.jsx("div",{className:`${i?"gap-6 p-5 max-h-full border border-b14 rounded-b-2xl":"max-h-0 select-none opacity-0 pointer-events-none"} duration-200`,children:a})]});export{k as default};