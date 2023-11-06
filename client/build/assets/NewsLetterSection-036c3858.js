import{j as e,r as n,L as i,b0 as x,q as r}from"./index-b83a84a7.js";import"./index-ff50f9d0.js";const d=()=>e.jsx(e.Fragment,{children:e.jsx("div",{className:"inline-flex items-center",children:e.jsxs("label",{className:"relative flex cursor-pointer items-center rounded-full p-3",htmlFor:"checkbox","data-ripple-dark":"false",children:[e.jsx("input",{type:"checkbox",className:" before:content[''] hover:before:opacity-0 peer relative h-5 w-5 cursor-pointer appearance-none rounded-md border border-blue-gray-200 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-black checked:bg-black checked:before:bg-black",id:"checkbox",checked:!0}),e.jsx("div",{className:"pointer-events-none absolute top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 text-white opacity-0 transition-opacity peer-checked:opacity-100",children:e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-3.5 w-3.5",viewBox:"0 0 20 20",fill:"currentColor",stroke:"currentColor",strokeWidth:"1",children:e.jsx("path",{fillRule:"evenodd",d:"M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z",clipRule:"evenodd"})})})]})})}),m=({backimage:c})=>{const[l,a]=n.useState(""),o=async t=>{t.preventDefault();const s=await x({email:l});s.status===200?(r(s.data.msg,"success",1e3),a("")):r(s.data.message,"error",1e3)};return e.jsx("div",{id:"news",className:"relative",children:e.jsxs("div",{className:"flex justify-center items-center h-auto py-10 lg:py-16 maincontainer",children:[e.jsx("img",{src:c,className:"absolute top-0 left-0 right-0 bottom-0 -z-10 w-full h-full",alt:"new"}),e.jsxs("div",{id:"news-grid",children:[e.jsxs("div",{className:"col-start-2 col-end-6 flex flex-col items-center lg:space-y-5 xl:space-y-5 space-y-2 justify-center [&>*]:text-b16",children:[e.jsx("div",{className:"bg-b3 px-7 py-2 text-xs xl:text-sm w-fit rounded-3xl !text-white font-bold",children:"STAY UPDATED"}),e.jsx("h4",{className:"lg:text-4xl text-xl xl:text-[56px] font-bold",children:"Subscribe!"}),e.jsx("p",{className:"xl:text-base lg:text-sm text-xs text-center lg:w-72",children:"Get updates on exclusive discounts, experiences and more."})]}),e.jsxs("div",{className:"col-start-7 col-end-12 flex flex-col space-y-2 [&>*]:text-b16",children:[e.jsx("h4",{className:"font-bold text-sm",children:"Email"}),e.jsxs("form",{onSubmit:o,className:"flex lg:flex-row flex-col lg:space-y-0 space-y-2 space-x-5 items-center",children:[e.jsx("input",{value:l,onChange:t=>a(t.target.value),type:"email",className:"outline-none text-xs lg:py-3 xl:py-3 py-2 px-2 rounded-md w-72 placeholder:text-[#777E90] placeholder:font-normal",placeholder:"Type here"}),e.jsx("button",{className:"bg-b3 px-7 py-3 text-xs font-bold rounded-md w-max text-white whitespace-nowrap",children:"Get Updates"})]}),e.jsxs("div",{className:"flex items-center space-x-3 py-2",children:[e.jsx(d,{}),e.jsx("span",{className:"text-sm font-semibold",children:"Yes, sign me up!"})]}),e.jsxs("p",{className:"text-xs xl:w-[350px] w-[280px]",children:["Sign up above to get updates delivered directly to your inbox. See our ",e.jsx(i,{to:"/privacy-policy",className:"font-semibold underline",children:"Privacy Policy."})]})]})]})]})})};export{m as N};
