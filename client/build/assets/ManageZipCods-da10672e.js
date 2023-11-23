import{Q as D,U as b,cA as C,cB as A,j as e,L as j,bs as T,bt as S,r as c,cC as v,cD as w,cE as Z,as as y,cF as E,bo as k,av as N,aV as F,cG as O}from"./index-0435dc8f.js";function g(l,n){var t;D(1,arguments);var o=l||{},d=b(o.start),x=b(o.end),r=x.getTime();if(!(d.getTime()<=r))throw new RangeError("Invalid interval");var p=[],i=d;i.setHours(0,0,0,0);var h=Number((t=n==null?void 0:n.step)!==null&&t!==void 0?t:1);if(h<1||isNaN(h))throw new RangeError("`options.step` must be a number greater than 1");for(;i.getTime()<=r;)p.push(b(i)),i.setDate(i.getDate()+h),i.setHours(0,0,0,0);return p}function I(l,n){D(2,arguments);var t=A(n);return C(l,-t)}const m=()=>e.jsxs("tr",{className:"border-b border-l border-r border-b6 text-xs",children:[e.jsx("td",{className:"whitespace-nowrap px-5 py-3 capitalize font-semibold",children:"73301"}),e.jsx("td",{className:"whitespace-nowrap  px-5 py-4 text-b7 font-medium",children:"South"}),e.jsxs("td",{className:"flex items-center justify-center whitespace-nowrap space-x-1 px-5 py-4",children:[e.jsx(j,{title:"Edit Zone",to:"/admin/update-shipping-zone/123",className:"flex items-center justify-center bg-b3 text-white hover:bg-white hover:text-b3 border-2 border-white hover:border-b3 text-sm px-2 w-fit rounded-full cursor-pointer py-2",children:e.jsx(T,{className:"text-base"})}),e.jsx(j,{title:"Delete Zone",to:"/admin/delete-section",className:"flex items-center justify-center bg-red-500/30 text-red-500 hover:bg-white hover:text-red-500 border-2 border-white hover:border-red-500 text-sm px-2 w-fit rounded-full cursor-pointer py-2",children:e.jsx(S,{className:"text-base"})})]})]}),B=()=>e.jsx("div",{className:"flex flex-col",children:e.jsx("div",{className:"overflow-x-auto sm:-mx-6 lg:-mx-8",children:e.jsx("div",{className:"inline-block min-w-full py-2 sm:px-6 lg:px-8",children:e.jsx("div",{className:"overflow-hidden",children:e.jsxs("table",{className:"min-w-full text-center text-sm font-light",children:[e.jsx("thead",{className:"border-b border-l border-b3 bg-b3 font-medium text-white",children:e.jsxs("tr",{children:[e.jsx("th",{scope:"col",className:"px-3 py-4",children:"Zip Code"}),e.jsx("th",{scope:"col",className:"px-3 py-4",children:"Direction"}),e.jsx("th",{scope:"col",className:"px-3 py-4",children:"Actions"})]})}),e.jsxs("tbody",{children:[e.jsx(m,{}),e.jsx(m,{}),e.jsx(m,{}),e.jsx(m,{})]})]})})})})}),R=()=>{const[l,n]=c.useState([]),[t,o]=c.useState(new Date),d=v(t),x=w(t),r=s=>{const a=v(s),u=w(s),M=g({start:a,end:u});i(M)},[p,i]=c.useState([...g({start:d,end:x})]),h=s=>{const a=[...l],u=a.indexOf(s);u===-1?a.push(s):a.splice(u,1),n(a)},f=s=>{s==="next"?o(a=>C(a,1)):s==="prev"&&o(a=>I(a,1))};return c.useEffect(()=>{r(t)},[t]),e.jsxs("div",{className:"flex flex-col items-center w-full",children:[e.jsx("h4",{className:"text-sm font-semibold mb-1",children:"Set Calendar Dates"}),e.jsxs("div",{className:"flex items-center mb-2 border-[1px] border-b6 rounded-md space-x-2",children:[e.jsx("button",{onClick:()=>f("prev"),children:e.jsx(Z,{className:"text-b6 text-xl"})}),e.jsx("span",{className:"flex text-sm",children:y(t,"MMMM yyyy")}),e.jsx("button",{onClick:()=>f("next"),children:e.jsx(E,{className:"text-b6 text-xl"})})]}),e.jsx("div",{className:"grid grid-cols-5 gap-x-2 gap-y-2 border-[1px] border-b6 rounded-lg px-2 w-full py-2",children:p.map(s=>e.jsx("div",{onClick:()=>h(s),style:{cursor:"pointer",backgroundColor:l.includes(s)?"blue":"white"},className:"flex items-center justify-center rounded-md border-[1px] bg-b5 shadow-lg cursor-pointer",children:y(s,"dd")},s))})]})},z=()=>{const[l,n]=c.useState(["North","South","East","West"]),[t,o]=c.useState(73301),[d,x]=c.useState("North");return e.jsxs(k,{children:[e.jsx("h4",{className:"text-center font-semibold text-xl",children:"Manage Zip Codes"}),e.jsxs("div",{className:"flex space-x-5 justify-between ",children:[e.jsx(B,{}),e.jsxs("div",{className:"flex flex-col px-3 space-y-5 border-[1px] mt-2 w-full h-[600px]",children:[e.jsx("h4",{className:"px-2 py-2 text-red-500 text-sm ",children:"No Zip Code Selected!"}),e.jsx(N,{width:"full",title:"Zip Code",iscompulsory:"true",type:"number",value:t,onChange:r=>o(r.target.value)}),e.jsxs("div",{className:"flex space-x-2",children:[e.jsx(N,{width:"full",title:"Fee",iscompulsory:"true",type:"number",value:"100",onChange:r=>o(r.target.value)}),e.jsx(F,{name:"categor",widthFull:"true",title:"Select Direction",iscompulsory:"true",onChange:r=>x(r.target.value),options:l})]}),e.jsxs("div",{className:"flex space-x-2 w-full h-2/3",children:[e.jsxs("div",{className:"flex flex-col items-center space-y-5 w-1/2 ",children:[e.jsx(R,{}),e.jsx("button",{className:"bg-b6 rounded-2xl font-semibold text-white py-1 w-6/12",children:"Save"})]}),e.jsxs("div",{className:"flex flex-col items-center border-[1px] w-1/2 rounded-md overflow-x-hidden overflow-y-scroll",children:[e.jsx("h4",{className:"text-center text-sm font-semibold py-2",children:"Time Slots"}),e.jsxs("div",{className:"flex items-center border-[1px] w-10/12 rounded-2xl shadow-md text-sm justify-center py-1 font-medium space-x-3 text-b6 border-b6 ",children:[e.jsxs("span",{className:"flex space-x-1 text-xs",children:[e.jsx("span",{children:"12 AM"}),e.jsx("span",{children:"To"}),e.jsx("span",{children:"5 PM"})]}),e.jsx("button",{type:"button",title:"Delete Zip Code",className:"flex items-center justify-center bg-red-500/30 text-red-500 hover:bg-white hover:text-red-500 border-2 border-white hover:border-red-500 text-xs px-[5px] w-fit rounded-full cursor-pointer py-[5px]",children:e.jsx(S,{className:"text-xs"})})]}),e.jsx("button",{type:"button",title:"Add Time Slot",className:" my-3 flex items-center justify-center bg-b6 text-white hover:bg-white hover:text-b6 border-2 border-b6 hover:border-b6 text-xs px-[5px] w-fit rounded-full cursor-pointer py-[5px]",children:e.jsx(O,{className:"text-2xl"})})]})]})]})]})]})};export{z as default};