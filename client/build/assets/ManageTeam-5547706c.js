import{r as a,j as e,L as me,Q as n}from"./index-700f33c8.js";import{A as ge}from"./AdminAccount-ff3a5696.js";import{am as L,d as F,as as fe,X as xe}from"./ScrollToTop-87b7b771.js";import{P as A}from"./Popup-18adf1c4.js";import{T as g}from"./TextInput-7ce5337d.js";import{E as pe,F as he,G as be,H as je}from"./admin-c8e036cb.js";import{c as _,a as i}from"./index.esm-01535cb8.js";import"./MainLayout-c4236618.js";import{D as we,C as Ne,P as ye}from"./react-beautiful-dnd.esm-1df615e3.js";const Te=()=>{const G=_().shape({name:i().required("Name is required"),designation:i().required("Designation is required"),image:i().required("Image is required")}),$=_().shape({id:i().required("Id is required"),uName:i().required("Name is required"),uDesignation:i().required("Designation is required"),uImage:i().required("Image is required"),oldImg:i().required("Old Image is required"),uTempImg:i()}),S=a.useRef(),I=a.useRef(),[u,f]=a.useState([]),[D,q]=a.useState(""),[O,k]=a.useState(""),[V,P]=a.useState(""),[Q,T]=a.useState(),[U,x]=a.useState(""),[R,p]=a.useState(""),[X,h]=a.useState(""),[M,b]=a.useState(""),[z,E]=a.useState("/no-person.webp"),[J,K]=a.useState(""),[W,j]=a.useState(!1),[B,w]=a.useState(!1),[Y,N]=a.useState(!1),[Z,H]=a.useState(!1),[ee,y]=a.useState(!1),[se,v]=a.useState(!1),[o,m]=a.useState([]),d=async()=>{N(!0);const t=await xe();t.status===200?(N(!1),f(t.data.members)):(N(!1),f([]))};a.useEffect(()=>{d()},[]);const te=t=>{const s=t.target.files[0];s&&(P(s),E(window.URL.createObjectURL(s)))},ae=t=>{const s=t.target.files[0];s&&(h(s),b(window.URL.createObjectURL(s)))},re=async t=>{t.preventDefault(),j(!0);const s=new FormData;s.set("image",V),s.set("name",O),s.set("designation",D);try{await G.validate(data,{abortEarly:!1})}catch(l){m(l?l.errors:[])}const r=await pe(s);r.status===200?(j(!1),n.success(r.data.msg,{position:"top-right",autoClose:1e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"light"}),d(),v(!1),k(""),q(""),P(""),E("")):(j(!1),n.error(r.data.message,{position:"top-right",autoClose:1e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"light"}))},le=async t=>{t.preventDefault(),w(!0);const s=new FormData;s.set("id",Q),s.set("image",X),s.set("oldImg",J),s.set("tempImg",M),s.set("name",U),s.set("designation",R);try{await $.validate(data,{abortEarly:!1})}catch(l){m(l?l.errors:[])}const r=await he(s);r.status===200?(w(!1),n.success(r.data.msg,{position:"top-right",autoClose:1e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"light"}),d(),T(),y(!1),x(""),p(""),h(""),b("")):(w(!1),n.error(r.data.message,{position:"top-right",autoClose:1e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"light"}))},ie=(t,s,r,l,c)=>{t.preventDefault(),console.log(l),T(c),x(s),p(r),h(l),b(l),K(l),y(!0)},oe=t=>{console.log(t);const s=Array.from(u),[r]=s.splice(t.source.index,1);s.splice(t.destination.index,0,r);const l=s.map((c,ue)=>({...c,index:ue+1}));f(l)},ne=async()=>{const t=await be(u);console.log(t),t.status===200?(H(!1),n.success(t.data.msg,{position:"top-right",autoClose:1e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"light"}),d()):(H(!1),n.error(t.data.message,{position:"top-right",autoClose:1e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"light"}))},[ce,C]=a.useState(null),de=async(t,s)=>{t.preventDefault(),C(s);const r=await je({id:s});r.status===200?(C(null),n.success(r.data.msg,{position:"top-right",autoClose:1e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"light"}),d()):(C(null),n.error(r.data.message,{position:"top-right",autoClose:1e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"light"}))};return e.jsxs(e.Fragment,{children:[e.jsx(A,{state:se,setState:v,children:e.jsxs("form",{className:"flex flex-col space-y-3",children:[e.jsx("h1",{className:"font-semibold",children:"Create Team Member"}),e.jsxs("div",{className:"relative w-40 h-40 ",children:[e.jsx("div",{className:"absolute flex bg-transparent rounded-full w-full h-full",children:e.jsx("span",{onClick:()=>{S.current.click()},className:"absolute left-28 bottom-0 flex items-center h-fit justify-center bg-b3 text-white hover:bg-white hover:text-b3 border-2 border-white hover:border-b3 text-sm px-2 w-fit rounded-full cursor-pointer py-2",children:e.jsx(L,{className:"text-base"})})}),e.jsx("img",{className:"rounded-full h-40 w-40 mx-auto",src:z,alt:""}),e.jsx("input",{ref:S,type:"file",name:"image",onChange:t=>te(t),className:"hidden"})]}),e.jsx(g,{width:"full",name:"name",title:"Name",iscompulsory:"true",type:"text",value:O,onChange:t=>k(t.target.value),error:!!(o&&o.includes("Name is required")),errormessage:"Title is Required",placeholder:"Scott"}),e.jsx(g,{width:"full",name:"designation",title:"Designation",iscompulsory:"true",type:"text",value:D,onChange:t=>q(t.target.value),error:!!(o&&o.includes("Designation is required")),errormessage:"Title is Required",placeholder:"CEO & Founder"}),e.jsx("button",{type:"button",onClick:re,className:"flex justify-center items-center cursor-pointer rounded-md py-1 w-full bg-b3",children:W?e.jsx("img",{src:"/loader-bg.gif",className:"w-8"}):e.jsxs("a",{className:"flex items-center text-center  w-fit px-4 py-1 rounded-md text-white font-semibold",children:[e.jsx("span",{className:"text-xs",children:"Create"}),e.jsx(F,{className:"text-2xl"})]})})]})}),e.jsx(A,{state:ee,setState:y,children:e.jsxs("form",{className:"flex flex-col space-y-3",children:[e.jsx("h1",{className:"font-semibold",children:"Update Team Member"}),e.jsxs("div",{className:"relative w-40 h-40 ",children:[e.jsx("div",{className:"absolute flex bg-transparent rounded-full w-full h-full",children:e.jsx("span",{onClick:()=>{I.current.click()},className:"absolute left-28 bottom-0 flex items-center h-fit justify-center bg-b3 text-white hover:bg-white hover:text-b3 border-2 border-white hover:border-b3 text-sm px-2 w-fit rounded-full cursor-pointer py-2",children:e.jsx(L,{className:"text-base"})})}),e.jsx("img",{className:"rounded-full h-40 w-40 mx-auto",src:M,alt:""}),e.jsx("input",{ref:I,type:"file",name:"image",onChange:ae,className:"hidden"})]}),e.jsx(g,{width:"full",name:"name",title:"Name",iscompulsory:"true",type:"text",value:U,onChange:t=>x(t.target.value),error:!!(o&&o.includes("Name is required")),errormessage:"Title is Required",placeholder:"Scott"}),e.jsx(g,{width:"full",name:"designation",title:"Designation",iscompulsory:"true",type:"text",value:R,onChange:t=>p(t.target.value),error:!!(o&&o.includes("Designation is required")),errormessage:"Title is Required",placeholder:"CEO & Founder"}),e.jsx("button",{type:"button",onClick:le,className:"flex justify-center items-center cursor-pointer rounded-md py-1 w-full bg-b3",children:B?e.jsx("img",{src:"/loader-bg.gif",className:"w-8"}):e.jsxs("a",{className:"flex items-center text-center  w-fit px-4 py-1 rounded-md text-white font-semibold",children:[e.jsx("span",{className:"text-xs",children:"Update"}),e.jsx(F,{className:"text-2xl"})]})})]})}),e.jsxs(ge,{children:[e.jsxs("div",{className:"flex mb-5 py-3 rounded-3xl px-10 w-full",children:[e.jsx("button",{type:"button",onClick:ne,className:"flex justify-center items-center cursor-pointer rounded-md py-1 w-fit bg-b3",children:Z?e.jsx("img",{src:"/loader-bg.gif",className:"w-8"}):e.jsx("a",{className:"flex items-center text-center  w-fit px-4 py-1 rounded-md text-white font-semibold",children:e.jsx("span",{className:"text-xs",children:"Save"})})}),e.jsx("div",{className:"flex w-full justify-end space-x-3",children:e.jsx(fe,{onClick:()=>v(!0),className:"text-b3 text-3xl shadow-xl rounded-full cursor-pointer"})})]}),e.jsx(we,{onDragEnd:oe,className:"w-full 3xl:max-w-1680px mx-auto",children:e.jsx(Ne,{droppableId:"nnn",className:"3xl:px-[60px] flex flex-wrap justify-center 3xl:justify-start gap-10 3xl:gap-20",children:t=>e.jsxs("div",{...t.droppableProps,ref:t.innerRef,className:"flex flex-wrap justify-center 3xl:justify-start gap-10 3xl:gap-20",children:[Y?e.jsx("div",{className:"flex items-center justify-center w-full",children:e.jsx("img",{src:"/loader-bg.gif",className:"w-10 h-10"})}):u.length>0?u.map((s,r)=>e.jsx(ye,{draggableId:s._id,index:r,children:l=>a.createElement("figure",{...l.draggableProps,...l.dragHandleProps,ref:l.innerRef,title:"Draggable!",key:r,className:"flex flex-col border hover:border-b6 border-b20 rounded-[20px] hover:cursor-pointer hover:shadow-s1 duration-300 p-5 w-[200px]"},e.jsx("img",{className:"w-40 h-40 rounded-full mx-auto",src:s.image,alt:`${s.name} Image`}),e.jsx("div",{className:"pt-[10px]",children:e.jsxs("figcaption",{className:"font-medium text-center",children:[e.jsx("div",{className:"font-bold text-[22px] text-b18 mb-3",children:s.name}),e.jsx("div",{className:"text-b3",children:s.designation})]})}),e.jsxs("div",{className:"flex space-x-3",children:[e.jsx("button",{type:"button",onClick:c=>ie(c,s.name,s.designation,s.image,s._id),className:"flex self-center justify-center items-center cursor-pointer rounded-md py-1 mt-2 w-fit bg-b3",children:B?e.jsx("img",{src:"/loader-bg.gif",className:"w-8"}):e.jsx("a",{className:"flex items-center text-center  w-fit px-4 py-1 rounded-md text-white font-semibold",children:e.jsx("span",{className:"text-xs",children:"Update"})})}),e.jsx(me,{onClick:c=>de(c,s._id),className:"flex self-center justify-center items-center cursor-pointer rounded-md py-1 mt-2 w-fit bg-red-500",children:ce===s._id?e.jsx("img",{src:"/loader-bg.gif",className:"w-8"}):e.jsx("a",{className:"flex items-center text-center  w-fit px-4 py-1 rounded-md text-white font-semibold",children:e.jsx("span",{className:"text-xs",children:"Delete"})})})]}))},s._id)):e.jsx("div",{className:"flex justify-center w-full h-full",children:e.jsx("img",{src:"/not-found.webp",className:"w-36 h-36"})}),t.placeholder]})})})]})]})};export{Te as default};
