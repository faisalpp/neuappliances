import{I as f,r as s,j as e,k as V,Q as d}from"./index-6f024e59.js";import{A as Ce}from"./AdminAccount-29a528cc.js";/* empty css                      */import{P as Q}from"./Popup-a4375afa.js";import{a as z,m as Te,n as Ne}from"./index.esm-07b601df.js";import{al as qe,d as K}from"./ScrollToTop-c496a034.js";import{r as He}from"./MainLayout-7db25bd6.js";import{S as x}from"./SelectInput-0981597c.js";import{T as X}from"./TextAreaInput-7b5fea3e.js";import{T as Y}from"./TextInput-8b05bbd7.js";import{P as ke}from"./Pagination2-0efdfb31.js";import{c as Z,a as c}from"./index.esm-d4607b10.js";import"./index-38501678.js";const Fe=async l=>{let o;try{o=await f.post("/api/admin/create-review",l,{validateStatus:()=>!0})}catch(u){return u}return o},Oe=async l=>{let o;try{o=await f.post("/api/admin/update-review",l,{validateStatus:()=>!0})}catch(u){return u}return o},Ie=async l=>{let o;try{o=await f.post("/api/admin/delete-review",l,{validateStatus:()=>!0})}catch(u){return u}return o},We=async l=>{let o;try{o=await f.post("/api/admin/duplicate-review",l,{validateStatus:()=>!0})}catch(u){return u}return o},Ae=async(l,o)=>{let u;console.log(l);try{u=await f.post(`/api/admin/get-reviews/?page=${l.page}&limit=${l.limit}`,o,{validateStatus:()=>!0})}catch(p){return p}return u},Ye=()=>{const l=Z().shape({author:c().required("Author Name is Required!"),pageType:c().required("PageType is Required!"),rating:c().required("Rating is Required!"),content:c().required("Content is Required!")}),o=Z().shape({uId:c().required("Review Id is Required!"),author:c().required("Author Name is Required!"),pageType:c().required("PageType is Required!"),rating:c().required("Rating is Required!"),content:c().required("Content is Required!")}),[u,p]=s.useState(!1),[A,ee]=s.useState([]),[i,w]=s.useState([]),[y,te]=s.useState(""),[D,se]=s.useState("home-page-footer-review"),[b,re]=s.useState("home-page-footer-review"),[j,ae]=s.useState(""),[L,ie]=s.useState("3"),[oe,m]=s.useState(!1),[B,De]=s.useState(["Home Page Footer Review","How It Works 1st Section Review (What We Sell Tab)","How It Works 2nd Section Review (Wat We Sell Tab)","How It Works Review (Ratings Tab)","How It Works Review (Tested Tab)","How It Works Review (Photo Tab)","How It Works Review (Delivered Tab)","How It Works 1st Section Review (Hassle Free Tab)","How It Works 2nd Section Review (Hassle Free Tab)","Faq Page Review","Our Story Page Review","Our Showroom Page Review","Our Companies Page Review","Appliance Repair Page Review","Measuring Guide Page Review","Helpfull Appliance Tips Page Review","Financing Page Review","Blog Page Review","Categories Page"]),[S,g]=s.useState(1),[U,Le]=s.useState(8),[le,ne]=s.useState(0),[ue,P]=s.useState(!1),h=async()=>{P(!0);const t={page:S,limit:U},a={pageType:b};console.log(b);const r=await Ae(t,a);r.status===200&&(ee(r.data.reviews),ne(Math.ceil(r.data.totalCount/U))),P(!1)};s.useEffect(()=>{h()},[b,S]);const ce=async t=>{t.preventDefault(),m(!0);try{const a=await l.validate({author:y,pageType:D,content:j,rating:L},{abortEarly:!1}),n=await Fe({author:y,pageType:D,content:j,rating:L});n.status===200?(h(),m(!1),p(!1),d.success(n.data.msg,{position:"top-right",autoClose:2e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"light"})):(m(!1),p(!1),d.error(n.data.message,{position:"top-right",autoClose:2e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"light"}))}catch(a){w(a?a.errors:[]),m(!1)}},[de,C]=s.useState(!1),[ge,T]=s.useState(!1),[pe,v]=s.useState(!1),[me,R]=s.useState(!1),[E,he]=s.useState(),[N,q]=s.useState(""),[M,H]=s.useState(""),[k,F]=s.useState(""),[_,$]=s.useState(""),[G,xe]=s.useState(["3","4","5"]),[J,fe]=s.useState(["Home Page Footer Review","How It Works 1st Section Review (What We Sell Tab)","How It Works 2nd Section Review (Wat We Sell Tab)","How It Works Review (Ratings Tab)","How It Works Review (Tested Tab)","How It Works Review (Photo Tab)","How It Works Review (Delivered Tab)","How It Works 1st Section Review (Hassle Free Tab)","How It Works 2nd Section Review (Hassle Free Tab)","Faq Page Review","Our Story Page Review","Our Showroom Page Review","Our Companies Page Review","Appliance Repair Page Review","Measuring Guide Page Review","Helpfull Appliance Tips Page Review","Financing Page Review","Blog Page Review","Categories Page"]),we=async t=>{t.preventDefault(),v(!0);try{const a=await o.validate({uId:E,author:N,pageType:_,content:k,rating:M},{abortEarly:!1}),r={id:E,author:N,pageType:_,content:k,rating:M};console.log(r);const n=await Oe(r);n.status===200?(g(1),h(),v(!1),R(!1),H("3"),q(""),F(""),d.success(n.data.msg,{position:"top-right",autoClose:2e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"light"})):(g(1),v(!1),R(!1),d.error(n.data.message,{position:"top-right",autoClose:2e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"light"}))}catch(a){a?(v(!1),w(a.errors)):w([]),m(!1)}},ve=async(t,a)=>{t.preventDefault(),C(!0);const r=await Ie({id:a});r.status===200?(g(1),h(),C(!1),d.success(r.data.msg,{position:"top-right",autoClose:2e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"light"})):(g(1),C(!1),d.error(r.data.message,{position:"top-right",autoClose:2e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"light"}))},Re=async(t,a)=>{t.preventDefault(),T(!0);const r=await We({id:a});r.status===200?(g(1),h(),T(!1),d.success(r.data.msg,{position:"top-right",autoClose:2e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"light"})):(g(1),T(!1),d.error(r.data.message,{position:"top-right",autoClose:2e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"light"}))},ye=(t,a,r,n,O,I)=>{t.preventDefault();const Se=J.filter(W=>W.toLocaleLowerCase().replace(/\s/g,"-")!==I),Pe=G.filter(W=>W!==O.toString());fe([I,...Se]),xe([O.toString(),...Pe]),$(I.toLocaleLowerCase().replace(/\s/g,"-")),H(O.toString()),q(r),F(n),he(a),R(!0)},be=({numberOfTimes:t})=>{const a=Array.from({length:t},(r,n)=>e.jsx(K,{className:"text-b7 text-sm"},n));return e.jsx("div",{className:"flex mt-2 items-center",children:a})},je=({numberOfTimes:t})=>{const a=Array.from({length:t},(r,n)=>e.jsx(K,{className:"text-gray-300 text-sm"},n));return e.jsx("div",{className:"flex mt-2 items-center",children:a})};return e.jsxs(e.Fragment,{children:[e.jsx(Q,{state:u,setState:p,children:e.jsxs("form",{onSubmit:ce,className:"flex flex-col space-y-3",children:[e.jsx("h1",{className:"font-semibold text-center",children:"Create a Review"}),e.jsx(x,{widthFull:"true",name:"type",title:"Select Page",iscompulsory:"true",onChange:t=>se(t.target.value),options:B,error:!!(i&&i.includes("PageType is Required!")),errormessage:"PageType is Required!"}),e.jsx(Y,{name:"author",title:"Author Name",iscompulsory:"true",type:"text",value:y,onChange:t=>te(t.target.value),placeholder:"Jhon Doe",error:!!(i&&i.includes("PageType is Required!")),errormessage:"PageType is Required!"}),e.jsx(x,{widthFull:"true",name:"rating",title:"Review Rating",iscompulsory:"true",onChange:t=>ie(t.target.value),options:["3","4","5"],error:!!(i&&i.includes("Rating is Required!")),errormessage:"Rating is Required!"}),e.jsx(X,{name:"content",title:"Review Content",iscompulsory:"true",type:"text",value:j,onChange:t=>ae(t.target.value),placeholder:"Write Review Here...",error:!!(i&&i.includes("Content is Required!")),errormessage:"Content is Required!"}),e.jsx("button",{type:"submit",className:"flex justify-center items-center cursor-pointer rounded-md py-1 w-full bg-b3",children:e.jsx("a",{className:"flex items-center text-center  w-fit px-4 py-1 rounded-md text-white font-semibold",children:oe?e.jsx("img",{src:"/loader-bg.gif",className:"w-4 h-4 ml-2"}):e.jsxs(e.Fragment,{children:[e.jsx("span",{className:"text-xs",children:"Submit"}),e.jsx(z,{className:"text-2xl"})]})})})]})}),e.jsx(Q,{state:me,setState:R,children:e.jsxs("form",{onSubmit:we,className:"flex flex-col space-y-3",children:[e.jsx("h1",{className:"font-semibold text-center",children:"Update Review"}),e.jsx(x,{widthFull:"true",name:"type",title:"Select Page",iscompulsory:"true",onChange:t=>$(t.target.value),options:J,error:!!(i&&i.includes("PageType is Required!")),errormessage:"PageType is Required!"}),e.jsx(Y,{width:"full",name:"author",title:"Author Name",iscompulsory:"true",type:"text",value:N,onChange:t=>q(t.target.value),placeholder:"Jhon Doe",error:!!(i&&i.includes("PageType is Required!")),errormessage:"PageType is Required!"}),e.jsx(x,{widthFull:"true",name:"rating",title:"Review Rating",iscompulsory:"true",onChange:t=>H(t.target.value),options:G,error:!!(i&&i.includes("Rating is Required!")),errormessage:"Rating is Required!"}),e.jsx(X,{name:"content",title:"Review Content",iscompulsory:"true",type:"text",value:k,onChange:t=>F(t.target.value),placeholder:"Write Review Here...",error:!!(i&&i.includes("Content is Required!")),errormessage:"Content is Required!"}),e.jsx("button",{type:"submit",className:"flex justify-center items-center cursor-pointer rounded-md py-1 w-full bg-b3",children:e.jsx("a",{className:"flex items-center text-center  w-fit px-4 py-1 rounded-md text-white font-semibold",children:pe?e.jsx("img",{src:"/loader-bg.gif",className:"w-4 h-4 ml-2"}):e.jsxs(e.Fragment,{children:[e.jsx("span",{className:"text-xs",children:"Submit"}),e.jsx(z,{className:"text-2xl"})]})})})]})}),e.jsx(V,{position:"top-right",autoClose:5e3,hideProgressBar:!1,newestOnTop:!1,closeOnClick:!0,rtl:!1,pauseOnFocusLoss:!0,draggable:!0,pauseOnHover:!0,theme:"light"}),e.jsxs(Ce,{children:[e.jsxs("div",{className:"flex items-center mb-5 py-3 rounded-3xl px-10 w-full",children:[e.jsx(x,{widthFull:"true",name:"sectionType",title:"Filter Section Testimonials",iscompulsory:"false",onChange:t=>re(t.target.value),options:B}),e.jsx("div",{className:"flex w-full justify-end space-x-3",children:e.jsx(qe,{onClick:()=>p(!0),className:"text-b3 text-3xl shadow-xl rounded-full cursor-pointer"})})]}),ue?e.jsx("div",{className:"flex mt-32 justify-center w-full h-full",children:e.jsx("img",{src:"/loader-bg.gif",className:"w-24 h-24"})}):A.length>0?e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"grid grid-cols-2 gap-x-5 gap-y-5 w-full",children:A.map((t,a)=>e.jsx("div",{children:e.jsxs("div",{style:{backgroundColor:"#F5F5F5"},className:"flex flex-col shadow-sm px-5 py-3 rounded-xl xl:max-h-[170px] sm:mx-2",children:[e.jsxs("div",{className:"flex items-center",children:[e.jsxs("div",{className:"flex mt-2",children:[e.jsx(be,{numberOfTimes:t.rating}),e.jsx(je,{numberOfTimes:5-t.rating})]}),e.jsxs("div",{className:"flex space-x-1 items-center w-full justify-end",children:[e.jsx("span",{title:"Edite Review",onClick:r=>{ye(r,t._id,t.author,t.content,t.rating,t.pageType)},className:"flex items-center justify-center bg-b3 text-white hover:bg-white hover:text-b3 border-2 border-white hover:border-b3 text-sm px-[6px] w-fit rounded-full cursor-pointer py-[6px]",children:e.jsx(Te,{className:"text-sm"})}),e.jsx("span",{title:"Duplicate Review",onClick:r=>Re(r,t._id),className:"flex items-center justify-center bg-b7 text-white hover:bg-white hover:text-b7 border-2 border-white hover:border-b7 text-sm px-[6px] w-fit rounded-full cursor-pointer py-[6px]",children:ge?e.jsx("img",{src:"/loader-bg.gif",className:"w-4 h-4"}):e.jsx(He,{className:"text-[14px]"})}),e.jsx("span",{title:"Delete Review",onClick:r=>ve(r,t._id),className:"flex items-center justify-center bg-red-500/30 text-red-500 hover:bg-white hover:text-red-500 border-2 border-white hover:border-red-500 text-sm px-[6px] w-fit rounded-full cursor-pointer py-[6px]",children:de?e.jsx("img",{src:"/loader-bg.gif",className:"w-4 h-4"}):e.jsx(Ne,{className:"text-sm"})})]})]}),e.jsx("p",{className:"text-sm font-semibold mt-1",children:t.content&&t.content.length>90?t.content.substring(0,90)+"...":t.content}),e.jsx("a",{href:"",className:"text-sm text-b6 mt-2",children:"Read More"}),e.jsx("div",{className:"flex items-center",children:e.jsx("h5",{className:"text-sm mt-2 w-10/12",children:t.author})})]})},a))}),e.jsx(ke,{page:S,setPage:g,totalPages:le})]}):e.jsx("div",{className:"flex mt-32 justify-center w-full h-full",children:e.jsx("img",{src:"/not-found.webp",className:"w-36 h-36"})})]}),e.jsx(V,{})]})};export{Ye as default};
