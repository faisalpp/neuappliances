import{j as l}from"./index-6f024e59.js";const t=e=>l.jsxs("div",{className:`flex flex-col space-y-1 ${e.width==="full"?"w-full":"w-1/2"}`,children:[l.jsxs("h5",{className:"text-xs font-semibold",children:[e.title," ",e.iscompulsory?l.jsx("i",{className:"text-red-500",children:"*"}):null]}),l.jsx("h5",{className:"text-red-500 text-xs",children:e.error?e.errormessage:null}),l.jsx("textarea",{...e,className:`text-sm outline-none border-[1px] ${e.error?"border-red-500":"border-gray-200"} w-full px-2 py-3 rounded-md ${e.height?e.height:""} overflow-x-hidden overflow-y-scroll`})]});export{t as T};
