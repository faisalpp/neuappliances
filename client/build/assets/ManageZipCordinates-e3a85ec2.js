import{I as g,r as n,j as e}from"./index-6f024e59.js";import{A as T}from"./AdminAccount-29a528cc.js";import{P as S}from"./Popup-a4375afa.js";import{T as R}from"./TextAreaInput-7b5fea3e.js";import{m as P,n as E}from"./index.esm-07b601df.js";import{T as m,E as Z}from"./MainLayout-7db25bd6.js";import{T as h}from"./TextInput-8b05bbd7.js";import{r as F}from"./ScrollToTop-c496a034.js";import"./index-38501678.js";const I=async()=>{let t;try{t=await g.get("/api/admin/get-all-zip-cords",{validateStatus:()=>!0})}catch(a){return a}return t},_=async t=>{let a;try{a=await g.get(`/api/get-single-zip-cords/?id=${t.id}`,{validateStatus:()=>!0})}catch(l){return l}return a},$=async t=>{let a;try{a=await g.post("/api/admin/create-zip-cords",t,{validateStatus:()=>!0})}catch(l){return l}return a},B=async t=>{let a;try{a=await g.get(`/api/admin/delete-zip-cords/?id=${t.id}`,t,{validateStatus:()=>!0})}catch(l){return l}return a},M=async t=>{let a;try{a=await g.post("/api/admin/update-zip-cords",t,{validateStatus:()=>!0})}catch(l){return l}return a},G=({item:t,updateHandler:a,updateState:l,getAllZips:f})=>{const[d,x]=n.useState(!1),w=async(c,b)=>{c.preventDefault(),x(!0);const u=await B({id:b});u.status===200?(f(),x(!1),m(u.data.msg,"success",1e3)):(x(!1),m(u.data.message,"error",1e3))};return e.jsxs("tr",{className:"border-b border-l border-r border-b6 text-xs",children:[e.jsx("td",{className:"whitespace-nowrap px-5 py-3 capitalize font-semibold",children:t.zipCode}),e.jsx("td",{className:"whitespace-nowrap  px-5 py-4 text-b7 font-medium",children:t.country}),e.jsx("td",{className:"px-5 py-4 text-black font-medium",children:t.state}),e.jsx("td",{className:"px-5 py-4 text-black font-medium",children:t.city}),e.jsxs("td",{className:"flex items-center justify-center whitespace-nowrap space-x-1 px-5 py-4",children:[e.jsx("button",{type:"button",onClick:c=>a(c,t._id),title:"Edite Zip Code",className:"flex items-center justify-center bg-b3 text-white hover:bg-white hover:text-b3 border-2 border-white hover:border-b3 text-sm px-2 w-fit rounded-full cursor-pointer py-2",children:l===t._id?e.jsx("img",{src:"/loader-bg.gif",className:"w-4 h-4"}):e.jsx(P,{className:"text-base"})}),e.jsx("button",{type:"button",title:"Delete Zip Code",onClick:c=>w(c,t._id),className:"flex items-center justify-center bg-red-500/30 text-red-500 hover:bg-white hover:text-red-500 border-2 border-white hover:border-red-500 text-sm px-2 w-fit rounded-full cursor-pointer py-2",children:d?e.jsx("img",{src:"/loader-bg.gif",className:"w-4 h-4"}):e.jsx(E,{className:"text-base"})})]})]})},H=({zips:t,uState:a,handleUpdate:l,getZips:f})=>e.jsx(e.Fragment,{children:e.jsx("div",{className:"flex flex-col",children:e.jsx("div",{className:"overflow-x-auto sm:-mx-6 lg:-mx-8",children:e.jsx("div",{className:"inline-block min-w-full py-2 sm:px-6 lg:px-8",children:e.jsx("div",{className:"overflow-hidden",children:e.jsxs("table",{className:"min-w-full text-center text-sm font-light",children:[e.jsx("thead",{className:"border-b border-l border-b3 bg-b3 font-medium text-white",children:e.jsxs("tr",{children:[e.jsx("th",{scope:"col",className:"px-3 py-4",children:"Zip Code"}),e.jsx("th",{scope:"col",className:"px-3 py-4",children:"Country"}),e.jsx("th",{scope:"col",className:"px-3 py-4",children:"State"}),e.jsx("th",{scope:"col",className:"px-3 py-4",children:"City"}),e.jsx("th",{scope:"col",className:"px-3 py-4",children:"Actions"})]})}),e.jsx("tbody",{children:t.length>0?t.map((d,x)=>e.jsx(G,{item:d,updateHandler:l,updateState:a,getAllZips:f},x)):null})]})})})})})}),ee=()=>{const[t,a]=n.useState(!1),[l,f]=n.useState([]),d=async s=>{a(!0);const i=await I();i.status===200?(f(i.data.zips),a(!1)):(f([]),a(!1))};n.useEffect(()=>{d()},[]);const x=async s=>{s.preventDefault(),d()},[w,c]=n.useState(null),[b,u]=n.useState(!1),[r,p]=n.useState({zipCode:"",country:"",city:"",state:"",raw:null,zoom:null,isRaw:!1}),z=async(s,i)=>{s.preventDefault(),c(i);const o=await _({id:i});o.status===200?(p({id:o.data._id,zipCode:o.data.zipCode,country:o.data.country,city:o.data.city,state:o.data.state,raw:o.data.raw,zoom:o.data.zoom}),c(null),u(!0)):(c(null),m(o.data.message,"error",1e3))},[j,y]=n.useState(!1),k=async s=>{s.preventDefault(),y(!0);const i=await M(r);i.status===200?(d(),m(i.data.msg,"success",1e3),y(!1),u(!1)):(y(!1),m(i.data.message,"error",1e3))},[A,N]=n.useState(!1),[D,L]=n.useState(!1),[C,v]=n.useState(""),U=async s=>{s.preventDefault(),L(!0);const i=await $({zip:C});i.status===200?(m(i.data.msg,"success",1e3),v("")):m(i.data.message,"error",1e3)};return e.jsxs(e.Fragment,{children:[e.jsx(S,{width:"w-11/12",zindex:"z-[99]",state:b,setState:u,children:e.jsxs("form",{onSubmit:k,className:"flex flex-col w-11/12 space-y-5",children:[e.jsx("h4",{className:"font-semibold text-xl text-center",children:"Upadte Zip Cordinates"}),e.jsxs("div",{className:"flex space-x-2 w-full",children:[e.jsxs("div",{className:"flex flex-col items-center space-y-3 w-3/12 ",children:[e.jsx(h,{title:"Zip Code",width:"full",value:r.zipCode,onChange:s=>p({...r,zipCode:s.target.value})}),e.jsx(h,{title:"Country",width:"full",value:r.country,onChange:s=>p({...r,country:s.target.value})}),e.jsx(h,{title:"State",width:"full",value:r.state,onChange:s=>p({...r,state:s.target.value})}),e.jsx(h,{title:"City",width:"full",value:r.city,onChange:s=>p({...r,city:s.target.value})}),e.jsx(h,{title:"City",type:"number",width:"full",value:r.zoom,onChange:s=>p({...r,zoom:s.target.value})}),e.jsxs("div",{className:"flex items-center",children:[e.jsx(F.Checkbox,{ripple:!1,checked:r.isRaw,onChange:s=>{s.target.checked&&p({...r,isRaw:!0})},className:"checked:bg-b3 checked:text-white"}),e.jsx("span",{className:"flex text-sm w-max",children:"Is Coordinates Changed?"})]})]}),e.jsx(R,{title:"Map Cordinates",height:"h-72",width:"full",value:r.raw,onChange:s=>p({...r,raw:s.target.value})})]}),e.jsx("div",{className:"flex justify-center w-full",children:e.jsx("button",{type:"submit",className:"flex justify-center self-center items-center cursor-pointer rounded-md py-1 w-3/2 bg-b3",children:j?e.jsx("img",{src:"/loader-bg.gif",className:"w-8"}):e.jsx("span",{className:"flex items-center text-center  w-fit px-4 py-1 rounded-md text-white font-semibold",children:e.jsx("span",{className:"text-xs",children:"Update"})})})})]})}),e.jsx(S,{state:A,setState:N,children:e.jsxs("form",{onSubmit:U,className:"flex flex-col w-11/12 space-y-5",children:[e.jsx("h4",{className:"font-semibold text-xl text-center",children:"Upadte Zip Cordinates"}),e.jsx("div",{className:"flex justify-center space-x-2 w-full",children:e.jsx(h,{title:"Zip Code",value:C,onChange:s=>v(s.target.value)})}),e.jsx("div",{className:"flex justify-center w-full",children:e.jsx("button",{type:"submit",className:"flex justify-center self-center items-center cursor-pointer rounded-md py-1 w-3/2 bg-b3",children:D?e.jsx("img",{src:"/loader-bg.gif",className:"w-8"}):e.jsx("span",{className:"flex items-center text-center  w-fit px-4 py-1 rounded-md text-white font-semibold",children:e.jsx("span",{className:"text-xs",children:"Create"})})})})]})}),e.jsxs(T,{children:[e.jsxs("div",{className:"flex justify-end space-x-2 w-full",children:[e.jsx("button",{onClick:()=>N(!0),type:"button",className:"flex justify-center self-center items-center cursor-pointer rounded-md py-1 w-3/2 bg-b3",children:j?e.jsx("img",{src:"/loader-bg.gif",className:"w-8"}):e.jsx("span",{className:"flex items-center text-center  w-fit px-4 py-1 rounded-md text-white font-semibold",children:e.jsx("span",{className:"text-xs",children:"Add Zip Code"})})}),e.jsx("button",{onClick:x,type:"button",className:"flex justify-center self-center items-center cursor-pointer rounded-md py-1 w-3/2 bg-b3",children:j?e.jsx("img",{src:"/loader-bg.gif",className:"w-8"}):e.jsx("span",{className:"flex items-center text-center  w-fit px-1 rounded-md text-white font-semibold",children:e.jsx(Z,{className:`text-xl ${t?"animate-spin":null}`})})})]}),t?e.jsx("div",{className:"flex justify-center items-center w-full h-52",children:e.jsx("img",{src:"/loader-bg.gif",className:"w-16 h-16"})}):l.length>0?e.jsx("div",{className:"h-screen overflow-x-hidden overflow-y-scroll",children:e.jsx(H,{getZips:d,handleUpdate:z,uState:w,zips:l})}):e.jsx("div",{className:"flex w-full justify-center",children:e.jsx("img",{src:"/not-found.webp",className:"w-32 h-32"})}),e.jsxs("div",{className:"flex justify-end space-x-2 w-full",children:[e.jsx("button",{onClick:()=>N(!0),type:"button",className:"flex justify-center self-center items-center cursor-pointer rounded-md py-1 w-3/2 bg-b3",children:j?e.jsx("img",{src:"/loader-bg.gif",className:"w-8"}):e.jsx("span",{className:"flex items-center text-center  w-fit px-4 py-1 rounded-md text-white font-semibold",children:e.jsx("span",{className:"text-xs",children:"Add Zip Code"})})}),e.jsx("button",{onClick:x,type:"button",className:"flex justify-center self-center items-center cursor-pointer rounded-md py-1 w-3/2 bg-b3",children:j?e.jsx("img",{src:"/loader-bg.gif",className:"w-8"}):e.jsx("span",{className:"flex items-center text-center  w-fit px-1 rounded-md text-white font-semibold",children:e.jsx(Z,{className:`text-xl ${t?"animate-spin":null}`})})})]})]})]})};export{ee as default};
