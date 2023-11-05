import{j as e,r as t,aU as N,aX as y,bv as w,an as g,bQ as v,ae as S,L as C}from"./index-1c659439.js";const M=()=>e.jsx("div",{className:"flex flex-col",children:e.jsx("div",{className:"overflow-x-auto sm:-mx-6 lg:-mx-8",children:e.jsx("div",{className:"inline-block min-w-full py-2 sm:px-6 lg:px-8",children:e.jsx("div",{className:"overflow-hidden",children:e.jsxs("table",{className:"min-w-full text-center text-sm font-light",children:[e.jsx("thead",{className:"border-b border-l border-b3 bg-b3 font-medium text-white",children:e.jsxs("tr",{children:[e.jsx("th",{scope:"col",className:"px-3 py-4",children:"Method Name"}),e.jsx("th",{scope:"col",className:"px-3 py-4",children:"Description"}),e.jsx("th",{scope:"col",className:"px-3 py-4",children:"Status"}),e.jsx("th",{scope:"col",className:"px-3 py-4",children:"Actions"})]})}),e.jsx("tbody",{className:"border-[1px] border-b6 ",children:e.jsx("td",{colSpan:4,className:"py-2 px-5 text-b15 ",children:"You can add multiple shipping methods within this zone. Only customers within the zone assigned zip codes will see them."})})]})})})})}),Z=({popup:i,setPopup:r})=>{const[o,p]=t.useState(["Flat Rate","Free Pickup"]),[a,c]=t.useState("flat-rate");return e.jsx(N,{state:i,setState:r,children:e.jsxs("form",{className:"flex flex-col space-y-3",children:[e.jsx("h1",{className:"font-semibold text-center",children:"Add Shipping Method"}),e.jsx("p",{className:"text-center text-xs text-b32",children:"Choose the shipping method you wish to add. Only Shipping Methods which support zones are listed."}),e.jsxs("div",{className:"flex flex-col items-center space-y-5 w-full justify-center",children:[e.jsx(y,{name:"categor",title:"Select Method Type",iscompulsory:"true",onChange:n=>c(n.target.value),options:o}),e.jsx("button",{type:"submit",className:"flex justify-center items-center cursor-pointer rounded-md py-1 w-32 bg-b3",children:e.jsx("a",{className:"flex items-center text-center  w-fit px-4 py-1 rounded-md text-white font-semibold",children:e.jsx("span",{className:"text-xs",children:"Add"})})})]})]})})},k=()=>{const[i,r]=t.useState(""),[o,p]=t.useState(""),[a,c]=t.useState("");t.useState(["1234,5678,91011"]);const[n,m]=t.useState([]),d=t.useRef(),u=s=>{s.key===" "&&a.length>0&&(m(l=>[...l,a]),setTimeout(()=>{c(""),d.current.focus(),d.current.setSelectionRange(0,0)},0))},f=(s,l)=>{s.preventDefault();const x=n.filter((z,b)=>b!==l);m([...x])},[j,h]=t.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(Z,{popup:j,setPopup:h}),e.jsx(w,{children:e.jsxs("form",{className:"flex flex-col space-y-3 w-full",children:[e.jsx("h1",{className:"font-semibold text-center",children:"Create Shipping Zone"}),e.jsxs("div",{className:"flex space-x-5 w-full",children:[e.jsxs("div",{className:"flex flex-col space-y-5 w-1/2",children:[e.jsx(g,{width:"full",title:"Zone Name",iscompulsory:"true",type:"text",value:i,onChange:s=>r(s.target.value),placeholder:"Enter Shipping Zone Name"}),e.jsx(v,{width:"full",title:"Description",type:"text",value:o,change:s=>p(s.target.value),placeholder:"Enter Zone Description..."})]}),e.jsxs("div",{className:"flex flex-col w-1/2",children:[e.jsx("h5",{className:"text-xs font-semibold mb-1",children:"Enter Zip Cods"}),e.jsx("div",{className:"flex flex-wrap w-full py-3 px-2 rounded-md border-[1px] borders-[0,0,0,0,0.15]",children:e.jsx("input",{ref:d,placeholder:"Hit Space To Insert",value:a,onKeyDown:s=>u(s),onChange:s=>c(s.target.value),className:"border-none outline-none text-xs"})}),e.jsx("h5",{className:"text-xs font-semibold my-1",children:"Selected Zip Cods"}),e.jsx("div",{className:"flex flex-wrap mb-2 gap-y-2 gap-x-2 px-2 py-2 w-full rounded-md h-28 border-[1px] border-[0,0,0,0,0.15]",children:n.length>0?n.map((s,l)=>e.jsxs("span",{className:"flex items-center bg-b6 text-xs px-2 py-1 text-white rounded-2xl",children:[s,e.jsx(S,{onClick:x=>f(x,l),className:"text-white bg-red-500 ml-1 text-xs cursor-pointer rounded-full"})]},l)):e.jsx("h5",{className:"text-red-500 text-xs",children:"No Zip Codes Selected"})})]})]}),e.jsxs("div",{className:"flex flex-col",children:[e.jsxs("div",{className:"flex items-center space-x-5 justify-end w-full ",children:[e.jsx("button",{onClick:()=>h(!0),type:"button",className:"cursor-pointer rounded-md py-1 w-42 bg-b10",children:e.jsx("a",{className:"flex items-center text-center  w-fit px-4 py-1 rounded-md text-white font-semibold",children:e.jsx("span",{className:"text-xs",children:"Add Shipping Method"})})}),e.jsx(C,{to:"/admin/manage-zip-codes/123",className:"cursor-pointer rounded-md py-1 w-42 bg-b7",children:e.jsx("a",{className:"flex items-center text-center  w-fit px-4 py-1 rounded-md text-white font-semibold",children:e.jsx("span",{className:"text-xs",children:"Manage Zip Codes"})})})]}),e.jsx(M,{})]}),e.jsx("button",{type:"submit",className:"flex justify-center items-center cursor-pointer rounded-md py-1 w-32 bg-b3",children:e.jsx("a",{className:"flex items-center text-center  w-fit px-4 py-1 rounded-md text-white font-semibold",children:e.jsx("span",{className:"text-xs",children:"Save"})})})]})})]})};export{k as default};
