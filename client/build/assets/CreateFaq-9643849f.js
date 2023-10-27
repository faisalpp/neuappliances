import{r,j as e,d as V,u as I,Q as i}from"./index-9086772f.js";import{A as _}from"./AdminAccount-c0a1c178.js";import{ao as T,N as R,ak as G}from"./ScrollToTop-9454a300.js";import{m as L,a as k,p as z}from"./index.esm-d1123c14.js";import{P as Q}from"./Popup-4530e9e5.js";import{T as O}from"./TextInput-6ff12c7c.js";import{a as J,A as K,B as M,C as W}from"./admin-aebeea57.js";/* empty css                      */import{c as B,a as n}from"./index.esm-667a8c3e.js";import{T as $}from"./TextAreaInput-39f5d958.js";import"./MainLayout-9f08b4ec.js";import"./index-57df3b0a.js";const X=({DeleteFaq:b,setUpdatedFaqId:v,setUpdateQuestion:m,setUpdatedAnswer:F,setUpdatePopup:A,id:c,activeBg:h,activeText:d,title:f,textStyle:l,answer:u,parent:g,child:j,icon:w,isExpand:y})=>{const[a,p]=r.useState(!!y);return e.jsx(e.Fragment,{children:e.jsxs("div",{onClick:()=>{p(!a)},className:`duration-200 flex flex-col border-[1px] border-gray-200 cursor-pointer ${g} ${a?h:""}`,children:[e.jsxs("div",{className:"flex items-center justify-between w-full gap-1",children:[e.jsx("h6",{className:`${a?d:""} ${l}`,children:f}),e.jsxs("div",{className:"flex items-center space-x-1",children:[e.jsx("span",{onClick:()=>{v(c),m(f),F(u),A(!0)},className:"p-1 bg-b6 hover:bg-white border-b3 border-2  rounded-full cursor-pointer group",children:e.jsx(L,{className:"text-white group-hover:text-b3 text-sm shadow-xl"})}),e.jsx("span",{onClick:x=>b(x,c),className:"p-1 bg-red-500 hover:bg-white border-red-500 border-2  rounded-full cursor-pointer group",children:e.jsx(T,{className:"text-red-300 group-hover:text-red-500 text-sm shadow-xl"})}),e.jsx(R,{className:`${w} ${a?`rotate-180 ${d}`:""} duration-200`})]})]}),e.jsx("div",{className:` ${a?`flex ${d}`:"hidden"} ${j} mt-1 duration-200`,children:e.jsx("p",{children:u})})]})})},de=()=>{const b=B().shape({question:n().required("Question is required"),answer:n().required("Answer is required"),slug:n().required("Slug is required")}),v=B().shape({question:n().required("Question is required"),answer:n().required("Answer is required"),_id:n().required("Slug is required")}),{slug:m}=V(),F=I(),[A,c]=r.useState([]),[h,d]=r.useState([]),[f,l]=r.useState(!1),[u,g]=r.useState(""),[j,w]=r.useState(""),[y,a]=r.useState(!1),[p,x]=r.useState(""),[S,N]=r.useState(""),[E,P]=r.useState(""),q=async()=>{const s=await J({slug:m});console.log(s),s.status===200&&d(s.data.faqs)};r.useEffect(()=>{q()},[]);const U=async s=>{s.preventDefault();try{const t={question:u,answer:j,slug:m};await b.validate(t,{abortEarly:!1});const o=await K(t);o.status===200?(l(!1),g(""),w(""),q(),i.success(o.msg,{position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"light"})):(l(!1),i.error(o.message,{position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"light"}))}catch(t){console.error("Validation errors:",t.errors),c(t.errors)}},D=async s=>{s.preventDefault();try{const t={question:p,answer:S,_id:E};await v.validate(t,{abortEarly:!1});const o=await M(t);o.status===200?(q(),x(""),N(""),P(""),a(!1),i.success(o.msg,{position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"light"})):(a(!1),i.error(o.message,{position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"light"}))}catch(t){console.error("Validation errors:",t.errors),c(t.errors)}},H=async(s,t)=>{s.preventDefault();try{const C=await W({_id:t});C.status===200?(q(),i.success(C.msg,{position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"light"})):i.error(C.message,{position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"light"})}catch(o){console.error("Validation errors:",o.errors)}};return e.jsxs(e.Fragment,{children:[e.jsx(Q,{state:y,setState:a,children:e.jsxs("form",{className:"flex flex-col space-y-3 w-10/12",children:[e.jsx("h1",{className:"font-semibold",children:"Update FAQ"}),e.jsxs("div",{className:"flex flex-col items-center space-y-2",children:[e.jsx(O,{width:"full",name:"question",title:"Faq Question",iscompulsory:"true",type:"text",value:p,onChange:s=>x(s.target.value),placeholder:"Enter Faq Question"}),e.jsx($,{name:"answer",title:"Faq Answer",iscompulsory:"true",type:"text",value:S,change:s=>N(s.target.value),placeholder:"Enter Faq Answer"}),e.jsx("button",{onClick:D,type:"submit",className:"flex justify-center items-center cursor-pointer rounded-md py-1 w-6/12 bg-b3",children:e.jsxs("a",{className:"flex items-center text-center  w-fit px-4 py-1 rounded-md text-white font-semibold",children:[e.jsx("span",{className:"text-xs",children:"Update"}),e.jsx(k,{className:"text-2xl"})]})})]})]})}),e.jsx(Q,{state:f,setState:l,children:e.jsxs("form",{className:"flex flex-col space-y-3 w-10/12",children:[e.jsx("h1",{className:"font-semibold",children:"Create FAQ"}),e.jsxs("div",{className:"flex flex-col items-center space-y-2",children:[e.jsx(O,{width:"full",name:"question",title:"Faq Question",iscompulsory:"true",type:"text",value:u,onChange:s=>g(s.target.value),placeholder:"Enter Faq Question"}),e.jsx($,{name:"answer",title:"Faq Answer",iscompulsory:"true",type:"text",value:j,change:s=>w(s.target.value),placeholder:"Enter Faq Answer"}),e.jsx("button",{onClick:U,type:"submit",className:"flex justify-center items-center cursor-pointer rounded-md py-1 w-6/12 bg-b3",children:e.jsxs("a",{className:"flex items-center text-center  w-fit px-4 py-1 rounded-md text-white font-semibold",children:[e.jsx("span",{className:"text-xs",children:"Create"}),e.jsx(k,{className:"text-2xl"})]})})]})]})}),e.jsxs(_,{children:[e.jsxs("div",{className:"flex w-full items-center space-x-3 mb-5",children:[e.jsx(z,{className:"text-2xl text-b3 cursor-pointer",onClick:()=>F(-1)}),e.jsx("div",{className:"flex w-full justify-end space-x-3",children:e.jsx(G,{onClick:()=>l(!0),className:"text-b3 text-3xl shadow-xl rounded-full cursor-pointer"})})]}),e.jsx("div",{className:"flex flex-col justify-center space-y-3",children:h.length>0?h.map((s,t)=>e.jsx(X,{DeleteFaq:H,setUpdatedFaqId:P,setUpdatePopup:a,setUpdateQuestion:x,setUpdatedAnswer:N,id:s._id,title:s.question,parent:"gap-3 bg-[#F8FBFB] [&>div>h6]:maxmd:text-sm text-white p-4 md:px-8 md:py-6 rounded-xl border-none text-b18 h-auto",icon:"text-xl text-black",textStyle:"font-bold text-md text-b18",child:"[&>p]:text-sm text-b18 font-normal",answer:s.answer},t)):e.jsx("h1",{children:"No FAQ's Found!"})})]})]})};export{de as default};