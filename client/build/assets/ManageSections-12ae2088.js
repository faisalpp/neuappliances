import{r,j as e,N as ye,b9 as be,b5 as je,b6 as Se,Q as u,_ as ve,u as Ce,f as W,B as J,bq as we,bn as Ne}from"./index-58d84c69.js";import{A as qe}from"./AdminAccount-a8a2c643.js";import{D as Te,C as Pe,P as ke}from"./react-beautiful-dnd.esm-ab13c5b5.js";import{k as Oe,l as Be,m as De,n as Ue,o as Fe}from"./admin-9e82fe43.js";import{P as K}from"./Popup-be45dea3.js";import{T as q}from"./TextInput-acba50d0.js";import{c as X,a as o}from"./index.esm-4ad956ff.js";import{S as Y}from"./SelectInput-39af0523.js";const Re=({getSections:T,sections:b,setSections:j,pop:m})=>{const f=i=>{const s=Array.from(b),[g]=s.splice(i.source.index,1);s.splice(i.destination.index,0,g);const l=s.map((d,O)=>({...d,index:O+1}));j(l)},[P,p]=r.useState(!1),k=async(i,s)=>{i.preventDefault(),p(!0);const l=await Oe({id:s});l.status===200?(p(!1),T(),u.success(l.data.msg,{position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"light"})):(p(!1),u.error(l.data.message,{position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"light"}))};return e.jsx("div",{className:"flex flex-col",children:e.jsx("div",{className:"overflow-x-auto sm:-mx-6 lg:-mx-8",children:e.jsx("div",{className:"inline-block min-w-full py-2 sm:px-6 lg:px-8",children:e.jsx("div",{className:"overflow-hidden",children:e.jsxs("table",{className:"min-w-full text-center text-sm font-light",children:[e.jsx("thead",{className:"border-b bg-b3 font-medium text-white",children:e.jsxs("tr",{children:[e.jsx("th",{scope:"col",className:"px-6 py-4",children:"Section Title"}),e.jsx("th",{scope:"col",className:"px-6 py-4",children:"Card Style"}),e.jsx("th",{scope:"col",className:"px-6 py-4",children:"Section Type"}),e.jsx("th",{scope:"col",className:"px-6 py-4",children:"Category"}),e.jsx("th",{scope:"col",className:"px-6 py-4",children:"Actions"})]})}),e.jsx(Te,{onDragEnd:f,children:e.jsx(Pe,{droppableId:"sections",children:i=>e.jsxs("tbody",{ref:i.innerRef,...i.droppableProps,children:[b.map((s,g)=>e.jsx(ke,{draggableId:s._id,index:g,children:l=>r.createElement("tr",{...l.draggableProps,...l.dragHandleProps,ref:l.innerRef,key:s._id,title:"Draggable",className:"pt-2 border-2 border-b6 hover:border-red-500 hover:cursor-pointer"},e.jsx("td",{className:"px-2 py-4 font-medium w-20 ",children:s.title}),e.jsx("td",{className:"whitespace-nowrap px-5 py-4 capitalize",children:s.cardStyle.replace(/\-/g," ")}),e.jsx("td",{className:"whitespace-nowrap px-5 py-4 capitalize",children:s.type.replace(/\-/g," ")}),e.jsx("td",{className:"whitespace-nowrap px-5 py-4 capitalize",children:s.categorySlug.replace(/\-/g," ")}),e.jsxs("td",{className:"flex space-x-2 whitespace-nowrap px-6 py-4 ",title:"Update, Create & View Section Items",children:[e.jsx(ye,{title:"Manage Section Item",to:`/admin/manage-section-items/${s.cardStyle}/${s._id}`,className:"flex items-center justify-center bg-b7 text-white hover:bg-white hover:text-b7 border-2 border-white hover:border-b7 text-sm px-2 rounded-full cursor-pointer py-2",children:e.jsx(be,{className:"text-lg"})}),e.jsx("span",{onClick:d=>m(d,s._id,s.title,s.type,s.slug,s.cardStyle),title:"Edit Section",className:"flex items-center justify-center bg-b3 text-white hover:bg-white hover:text-b3 border-2 border-white hover:border-b3 text-sm px-2 rounded-full cursor-pointer py-2",children:e.jsx(je,{className:"text-lg"})}),e.jsx("span",{title:"Delete Section",onClick:d=>k(d,s._id),className:"flex items-center justify-center bg-red-500/30 text-red-500 hover:bg-white hover:text-red-500 border-2 border-white hover:border-red-500 text-sm px-2 w-fit rounded-full cursor-pointer py-2",children:P?e.jsx("img",{src:"/loader-bg.gif",className:"w-4 h-4"}):e.jsx(Se,{className:"text-base"})})]}))},s._id)),i.placeholder]})})})]})})})})})},Me=()=>{const T=X().shape({title:o().required("Title is required"),Slug:o().required("Slug is required"),slug:o().required("Image is required"),cardStyle:o().required("Card Style is required"),type:o().required("Type is required")}),b=X().shape({title:o().required("Title is required"),sectionId:o().required("Section id is required"),slug:o().required("Slug is required"),cardStyle:o().required("Card Style is required"),type:o().required("Type is required")}),{slug:j}=ve(),[m,f]=r.useState([]),[P,p]=r.useState(!1),k=Ce(),i={slug:j},s=async()=>{const t=await Be(i);t.status===200?f(t.data.categorySections):f([])};r.useEffect(()=>{s()},[]);const g=async t=>{t.preventDefault(),p(!0);const a=await De({sections:m});a.status===200?(p(!1),u.success(a.data.msg,{position:"top-right",autoClose:1e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"light"}),s()):(p(!1),u.error(a.data.message,{position:"top-right",autoClose:1e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"light"}))},[l,d]=r.useState([]),[O,S]=r.useState(!1),[R,h]=r.useState(!1),[I,B]=r.useState(""),[E,v]=r.useState(""),[Z,ee]=r.useState("head-rating-card"),[te,se]=r.useState("cosmetic-rating"),re=t=>{B(t.target.value);const a=t.target.value.toLowerCase().replace(/ /g,"-");v(a)},ae=async t=>{t.preventDefault(),h(!0);const a={title:I,Slug:E,cardStyle:Z,slug:j,type:te};try{await T.validate(a,{abortEarly:!1})}catch(c){d(c?c.errors:[])}const n=await Ue(a);n.status===200?(h(!1),u.success(n.data.msg,{position:"top-right",autoClose:1e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"light"}),s(),B(""),v(""),S(!1)):(h(!1),B(""),v(""),S(!1),u.error(n.data.message,{position:"top-right",autoClose:1e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"light"}))};function H(t){return t.replace(/\b\w/g,function(a){return a.toUpperCase()}).replace(/\-/g," ")}const[le,C]=r.useState(),[ie,oe]=r.useState(),[A,w]=r.useState(""),[ne,L]=r.useState(""),[_,z]=r.useState([]),[$,y]=r.useState(""),[ce,G]=r.useState(""),[V,M]=r.useState([]),[N,Q]=r.useState([]);r.useEffect(()=>{M(["Head Rating Card","Rating Card","Color Card","Brand Card","General Card","2xN Card"]),z(["Cosmetic Ratings","Features","Types","Finishes & Colors","Brands","Fuel Types"])},[]);const de=t=>{w(t.target.value);const a=t.target.value.toLowerCase().replace(/\s/g,"-");y(a)},ue=(t,a,n,c,xe,D)=>{t.preventDefault(),oe(a),w(n),L(c);const ge=_.filter(x=>x!==c),he=[H(c),...ge].filter((x,U,F)=>F.indexOf(x)===U);z(he),y(xe);const me=V.filter(x=>x!==D),fe=[H(D),...me].filter((x,U,F)=>F.indexOf(x)===U);M(fe),G(D),C(!0)},pe=async t=>{t.preventDefault(),h(!0);const a={title:A,sectionId:ie,cardStyle:ce,slug:$,type:ne};try{await b.validate(a,{abortEarly:!1})}catch(c){Q(c?c.errors:[])}const n=await Fe(a);n.status===200?(h(!1),u.success(n.data.msg,{position:"top-right",autoClose:1e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"light"}),s(),w(""),y(""),C(!1)):(h(!1),w(""),y(""),C(!1),u.error(n.data.message,{position:"top-right",autoClose:1e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"light"}))};return e.jsxs(e.Fragment,{children:[e.jsx(K,{state:O,setState:S,children:e.jsxs("form",{className:"flex flex-col space-y-3",children:[e.jsx("h1",{className:"font-semibold",children:"Create Category Section"}),e.jsx(q,{width:"full",name:"title",title:"Title",iscompulsory:"true",type:"text",value:I,onChange:re,error:!!(l&&l.includes("Name is required")),errormessage:"Title is Required",placeholder:"Refrigerators By Styles"}),e.jsx(q,{readOnly:!0,width:"full",name:"slug",title:"Slug",iscompulsory:"true",type:"text",value:E,onChange:t=>v(t.target.value),error:!!(l&&l.includes("Slug is required")),errormessage:"Slug is Required",placeholder:"refrigerators-by-styles"}),e.jsxs("div",{children:[e.jsxs("label",{className:"text-b16 font-semibold text-xs block mb-2",children:["Section Card Style",e.jsx("i",{className:"text-red-500",children:"*"})]}),e.jsxs("div",{className:"relative",children:[e.jsxs("select",{onChange:t=>ee(t.target.value),className:"border border-[rgba(0,0,0,0.16)] rounded-lg h-10 text-sm px-4 w-full outline-none appearance-none",children:[e.jsx("option",{value:"head-rating-card",children:"Head Rating Card"}),e.jsx("option",{value:"rating-card",children:"Rating Card"}),e.jsx("option",{value:"color-card",children:"Color Card"}),e.jsx("option",{value:"brand-card",children:"Brand Card"}),e.jsx("option",{value:"general-card",children:"General Card"}),e.jsx("option",{value:"2xn-card",children:"2xN Card"})]}),e.jsx(W,{className:"absolute right-4 top-3"})]})]}),e.jsxs("div",{children:[e.jsxs("label",{className:"text-b16 font-semibold text-xs block mb-2",children:["Section Type",e.jsx("i",{className:"text-red-500",children:"*"})]}),e.jsxs("div",{className:"relative",children:[e.jsxs("select",{onChange:t=>se(t.target.value),className:"border border-[rgba(0,0,0,0.16)] rounded-lg h-10 text-sm px-4 w-full outline-none appearance-none",children:[e.jsx("option",{value:"cosmetic-ratings",children:"Cosmetic Rating"}),e.jsx("option",{value:"features",children:"Product Features"}),e.jsx("option",{value:"types",children:"Product Types"}),e.jsx("option",{value:"finishes-&-colors",children:"Product Finishes & Colors"}),e.jsx("option",{value:"brands",children:"Product Brands"}),e.jsx("option",{value:"fuel-types",children:"Product Fuel Types"})]}),e.jsx(W,{className:"absolute right-4 top-3"})]})]}),e.jsx("button",{type:"button",onClick:ae,className:"flex justify-center items-center cursor-pointer rounded-md py-1 w-full bg-b3",children:R?e.jsx("img",{src:"/loader-bg.gif",className:"w-8"}):e.jsxs("a",{className:"flex items-center text-center  w-fit px-4 py-1 rounded-md text-white font-semibold",children:[e.jsx("span",{className:"text-xs",children:"Create"}),e.jsx(J,{className:"text-2xl"})]})})]})}),e.jsx(K,{state:le,setState:C,children:e.jsxs("form",{className:"flex flex-col space-y-3",children:[e.jsx("h1",{className:"font-semibold",children:"Update Category Section"}),e.jsx(q,{width:"full",name:"title",title:"Title",iscompulsory:"true",type:"text",value:A,onChange:de,error:!!(N&&N.includes("Title is required")),errormessage:"Title is Required",placeholder:"Refrigerators By Styles"}),e.jsx(q,{readOnly:!0,width:"full",name:"uslug",title:"Slug",iscompulsory:"true",type:"text",value:$,onChange:t=>y(t.target.value),error:!!(N&&N.includes("Slug is required")),errormessage:"Slug is Required",placeholder:"refrigerators-by-styles"}),e.jsx(Y,{widthFull:"true",onChange:t=>G(t.target.value),options:V}),e.jsx(Y,{widthFull:"true",onChange:t=>L(t.target.value),options:_}),e.jsx("button",{type:"button",onClick:pe,className:"flex justify-center items-center cursor-pointer rounded-md py-1 w-full bg-b3",children:R?e.jsx("img",{src:"/loader-bg.gif",className:"w-8"}):e.jsxs("a",{className:"flex items-center text-center  w-fit px-4 py-1 rounded-md text-white font-semibold",children:[e.jsx("span",{className:"text-xs",children:"Update"}),e.jsx(J,{className:"text-2xl"})]})})]})}),e.jsxs(qe,{children:[e.jsxs("div",{className:"flex mb-5 py-3 rounded-3xl px-10 w-full",children:[e.jsx(we,{onClick:()=>k(-1),className:"text-b3 text-3xl shadow-xl rounded-full cursor-pointer"}),e.jsx("div",{className:"flex w-full justify-end space-x-3",children:e.jsx(Ne,{onClick:()=>S(!0),className:"text-b3 text-3xl shadow-xl rounded-full cursor-pointer"})})]}),m.length>0?e.jsxs("div",{className:"flex flex-col justify-center",children:[e.jsx(Re,{getSections:s,sections:m,setSections:f,pop:ue}),e.jsx("button",{type:"button",onClick:t=>g(t),className:"flex self-end mt-2 items-center cursor-pointer rounded-md py-1 w-fit bg-b3",children:P?e.jsx("img",{src:"/loader-bg.gif",className:"w-8"}):e.jsx("a",{className:"flex items-center text-center  w-fit px-4 py-1 rounded-md text-white font-semibold",children:e.jsx("span",{className:"text-xs",children:"Save"})})})]}):e.jsx("div",{className:"flex justify-center w-full h-full",children:e.jsx("img",{src:"/not-found.webp",className:"w-36 h-36"})})]})]})};export{Me as default};
