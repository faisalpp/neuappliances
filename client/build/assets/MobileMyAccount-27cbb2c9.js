import{r as l,j as t}from"./index-10a6e95b.js";import{i as d}from"./ScrollToTop-0126eb0a.js";import{M as p}from"./MainLayout-4599f12c.js";import{ProfileData as x}from"./Profile-f1f0b184.js";import{OrderHistoryData as f}from"./OrderHistory-0fc52cc4.js";import{MyFavouriteData as b}from"./MyFavourite-54d1134d.js";import{SavedAddressData as u}from"./SavedAddress-530630cb.js";import{BillingInformationData as h}from"./BillingInformation-beec0641.js";import{ChangePasswordData as j}from"./ChangePassword-39558225.js";import{EmailPreferencesData as v}from"./EmailPreferences-b77a5e84.js";import"./index.esm-8fea9dd4.js";import"./index-7250c32d.js";import"./MyAccount-191b6d61.js";import"./CustomInput-5b35715a.js";import"./countries-156e514f.js";/* empty css                      */import"./profile-9a34e1c1.js";import"./BtnLoader-75a297e4.js";import"./Popup-cda69faf.js";import"./TextInput-7b655836.js";import"./CustomSelect-e5d247fd.js";import"./index.esm-c39aacb7.js";import"./index.esm-632119b7.js";import"./SelectInput-94fcea49.js";const J=()=>{const[n,s]=l.useState(window.innerWidth<=992),[o,a]=l.useState(),r=[{title:"Profile",content:x},{title:"Order History",content:f},{title:"My Favourites",content:b},{title:"Saved Addresses ",content:u},{title:"Billing Information",content:h},{title:"Change Password",content:j},{title:"Email Preferences",content:v}],m=e=>{a(e)};l.useEffect(()=>{const e=()=>{s(window.innerWidth<=992)};return window.addEventListener("resize",e),()=>{window.removeEventListener("resize",e)}},[]);const c=()=>{location.href="/"};return t.jsx(t.Fragment,{children:n?t.jsx(p,{children:t.jsxs("div",{className:"px-4 md:px-10 py-10",children:[t.jsx("h1",{className:"text-b18 font-bold text-32px",children:"My Account"}),t.jsx("div",{className:"w-full flex flex-col gap-6 mt-10",children:r.map((e,i)=>t.jsx(w,{title:e.title,activeClass:i===o,isOpen:i===o,onClick:()=>{m(i)},children:t.jsx(e.content,{})},i))})]})}):c()})},w=({title:n,isOpen:s,onClick:o,children:a,activeClass:r})=>t.jsxs("div",{className:"duration-200 flex flex-col",children:[t.jsxs("button",{onClick:o,className:`p-5 xl:p-6 xl:text-lg font-semibold flex justify-between border items-center text-left ${r?"bg-b3 text-white border-b3 rounded-t-2xl":"border-b14 bg-white text-b1 rounded-2xl"}`,children:[t.jsx("span",{children:n}),t.jsx(d,{className:`duration-200 ${r?"rotate-180":""}`})]}),t.jsx("div",{className:`${s?"gap-6 p-5 max-h-full border border-b14 rounded-b-2xl":"max-h-0 select-none opacity-0 pointer-events-none"} duration-200`,children:a})]});export{J as default};
