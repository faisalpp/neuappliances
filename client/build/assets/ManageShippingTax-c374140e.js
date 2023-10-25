import{I as N,r as n,j as e,L as h}from"./index-6f024e59.js";import{A as y}from"./AdminAccount-29a528cc.js";import{T as v}from"./TextAreaInput-7b5fea3e.js";import{P as S}from"./Popup-a4375afa.js";import{E as C}from"./ScrollToTop-c496a034.js";import{T as Z}from"./TextInput-8b05bbd7.js";import{S as T}from"./ShippingTable-4b911cec.js";import"./MainLayout-7db25bd6.js";import"./index.esm-07b601df.js";import"./index-38501678.js";const z=async o=>{let s;try{s=await N.post("/api/admin/create-shipping-zone",o)}catch(a){return a}return s},A=({popup:o,setPopup:s})=>{const[a,u]=n.useState(""),[i,f]=n.useState(""),[c,p]=n.useState(""),[l,m]=n.useState([]),d=n.useRef(),b=t=>{console.log(l),t.key===" "&&c.length>0&&(m(r=>[...r,c]),setTimeout(()=>{p(""),d.current.focus(),d.current.setSelectionRange(0,0)},0))},j=(t,r)=>{t.preventDefault();const x=l.filter((E,w)=>w!==r);m([...x])},g=async t=>{t.preventDefault(),console.log({title:a,description:i,zipCodes:l}),await z({title:a,description:i,zipCodes:l})};return e.jsx(e.Fragment,{children:e.jsx(S,{state:o,setState:s,width:"w-8/12",zindex:"z-[99]",children:e.jsxs("form",{onSubmit:g,className:"flex flex-col space-y-3 w-full",children:[e.jsx("h1",{className:"font-semibold text-center",children:"Create Shipping Zone"}),e.jsxs("div",{className:"flex space-x-5 w-full",children:[e.jsxs("div",{className:"flex flex-col space-y-5 w-1/2",children:[e.jsx(Z,{width:"full",title:"Zone Name",iscompulsory:"true",type:"text",value:a,onChange:t=>u(t.target.value),placeholder:"Enter Shipping Zone Name"}),e.jsx(v,{width:"full",title:"Description",type:"text",value:i,onChange:t=>f(t.target.value),placeholder:"Enter Zone Description..."})]}),e.jsxs("div",{className:"flex flex-col w-1/2",children:[e.jsx("h5",{className:"text-xs font-semibold mb-1",children:"Enter Zip Cods"}),e.jsx("div",{className:"flex flex-wrap w-full py-3 px-2 rounded-md border-[1px] borders-[0,0,0,0,0.15]",children:e.jsx("input",{ref:d,placeholder:"Hit Space To Insert",value:c,onKeyDown:t=>b(t),onChange:t=>p(t.target.value),className:"border-none outline-none text-xs"})}),e.jsx("h5",{className:"text-xs font-semibold my-1",children:"Selected Zip Cods"}),e.jsx("div",{className:"flex flex-wrap mb-2 gap-y-2 gap-x-2 px-2 py-2 w-full rounded-md h-28 border-[1px] border-[0,0,0,0,0.15]",children:l.length>0?l.map((t,r)=>e.jsxs("span",{className:"flex items-center bg-b6 text-xs px-2 py-1 text-white rounded-2xl h-fit",children:[t,e.jsx(C,{onClick:x=>j(x,r),className:"text-white bg-red-500 ml-1 text-xs cursor-pointer rounded-full"})]},r)):e.jsx("h5",{className:"text-red-500 text-xs",children:"No Zip Codes Selected"})})]})]}),e.jsx("button",{type:"submit",className:"flex justify-center items-center cursor-pointer rounded-md py-1 w-32 bg-b3",children:e.jsx("a",{className:"flex items-center text-center  w-fit px-4 py-1 rounded-md text-white font-semibold",children:e.jsx("span",{className:"text-xs",children:"Save"})})})]})})})},_=()=>{n.useState(0);const[o,s]=n.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(A,{popup:o,setPopup:s}),e.jsxs(y,{children:[e.jsx("h3",{className:"text-center font-semibold text-xl mb-5",children:"Manage Shipping & Taxe's"}),e.jsx("div",{className:"flex flex-col space-y-5",children:e.jsxs("div",{className:"flex flex-col px-5 py-3 shadow-md rounded-md border-[1px] border-b6 w-full",children:[e.jsxs("div",{className:"flex items-center",children:[e.jsx("h2",{className:"font-semibold mb-2",children:"Shipping Zones"}),e.jsxs("div",{className:"flex space-x-2 justify-end w-full",children:[e.jsx("button",{type:"button",onClick:()=>s(!0),className:"self-end hover:shadow-md bg-b3 text-white text-xs px-3 rounded-2xl cursor-pointer py-2 font-bold",children:"Create Zone"}),e.jsx(h,{to:"/admin/manage-shipping-classes",className:"self-end hover:shadow-md bg-b3 text-white text-xs px-3 rounded-2xl cursor-pointer py-2 font-bold",children:"Shipping Classes"}),e.jsx(h,{to:"/admin/manage-taxes",className:"self-end hover:shadow-md bg-b3 text-white text-xs px-3 rounded-2xl cursor-pointer py-2 font-bold",children:"Taxes"})]})]}),e.jsx(T,{})]})})]})]})};export{_ as default};
