import{bf as f,p as V,q as c,r as s,j as e,aI as Q,aM as x,al as z,bI as K,h as X,aB as Y,bm as Ce,bL as Te,bq as Ne,bs as qe,br as He,be as ke,aD as d,f as Z}from"./index-3053c656.js";/* empty css                      */const Fe=async l=>{let o;try{o=await f.post("/api/admin/create-review",l,{validateStatus:()=>!0})}catch(u){return u}return o},Ie=async l=>{let o;try{o=await f.post("/api/admin/update-review",l,{validateStatus:()=>!0})}catch(u){return u}return o},Oe=async l=>{let o;try{o=await f.post("/api/admin/delete-review",l,{validateStatus:()=>!0})}catch(u){return u}return o},We=async l=>{let o;try{o=await f.post("/api/admin/duplicate-review",l,{validateStatus:()=>!0})}catch(u){return u}return o},Ae=async(l,o)=>{let u;console.log(l);try{u=await f.post(`/api/admin/get-reviews/?page=${l.page}&limit=${l.limit}`,o,{validateStatus:()=>!0})}catch(p){return p}return u},Ee=()=>{const l=V().shape({author:c().required("Author Name is Required!"),pageType:c().required("PageType is Required!"),rating:c().required("Rating is Required!"),content:c().required("Content is Required!")}),o=V().shape({uId:c().required("Review Id is Required!"),author:c().required("Author Name is Required!"),pageType:c().required("PageType is Required!"),rating:c().required("Rating is Required!"),content:c().required("Content is Required!")}),[u,p]=s.useState(!1),[W,ee]=s.useState([]),[i,w]=s.useState([]),[b,te]=s.useState(""),[A,se]=s.useState("home-page-footer-review"),[D,ae]=s.useState("home-page-footer-review"),[y,re]=s.useState(""),[L,ie]=s.useState("3"),[oe,m]=s.useState(!1),[B,De]=s.useState(["Home Page Footer Review","How It Works 1st Section Review (What We Sell Tab)","How It Works 2nd Section Review (Wat We Sell Tab)","How It Works Review (Ratings Tab)","How It Works Review (Tested Tab)","How It Works Review (Photo Tab)","How It Works Review (Delivered Tab)","How It Works 1st Section Review (Hassle Free Tab)","How It Works 2nd Section Review (Hassle Free Tab)","Faq Page Review","Our Story Page Review","Our Showroom Page Review","Our Companies Page Review","Appliance Repair Page Review","Measuring Guide Page Review","Helpfull Appliance Tips Page Review","Financing Page Review","Blog Page Review","Categories Page"]),[j,g]=s.useState(1),[U,Le]=s.useState(8),[le,ne]=s.useState(0),[ue,S]=s.useState(!1),h=async()=>{S(!0);const a=await Ae({page:j,limit:U},{pageType:D});a.status===200&&(ee(a.data.reviews),ne(Math.ceil(a.data.totalCount/U))),S(!1)};s.useEffect(()=>{h()},[D,j]);const ce=async t=>{t.preventDefault(),m(!0);try{const r=await l.validate({author:b,pageType:A,content:y,rating:L},{abortEarly:!1}),n=await Fe({author:b,pageType:A,content:y,rating:L});n.status===200?(h(),m(!1),p(!1),d.success(n.data.msg,{position:"top-right",autoClose:2e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"light"})):(m(!1),p(!1),d.error(n.data.message,{position:"top-right",autoClose:2e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"light"}))}catch(r){w(r?r.errors:[]),m(!1)}},[de,P]=s.useState(!1),[ge,C]=s.useState(!1),[pe,v]=s.useState(!1),[me,R]=s.useState(!1),[E,he]=s.useState(),[T,N]=s.useState(""),[M,q]=s.useState(""),[H,k]=s.useState(""),[_,$]=s.useState(""),[G,xe]=s.useState(["3","4","5"]),[J,fe]=s.useState(["Home Page Footer Review","How It Works 1st Section Review (What We Sell Tab)","How It Works 2nd Section Review (Wat We Sell Tab)","How It Works Review (Ratings Tab)","How It Works Review (Tested Tab)","How It Works Review (Photo Tab)","How It Works Review (Delivered Tab)","How It Works 1st Section Review (Hassle Free Tab)","How It Works 2nd Section Review (Hassle Free Tab)","Faq Page Review","Our Story Page Review","Our Showroom Page Review","Our Companies Page Review","Appliance Repair Page Review","Measuring Guide Page Review","Helpfull Appliance Tips Page Review","Financing Page Review","Blog Page Review","Categories Page"]),we=async t=>{t.preventDefault(),v(!0);try{const r=await o.validate({uId:E,author:T,pageType:_,content:H,rating:M},{abortEarly:!1}),n=await Ie({id:E,author:T,pageType:_,content:H,rating:M});n.status===200?(g(1),h(),v(!1),R(!1),q("3"),N(""),k(""),d.success(n.data.msg,{position:"top-right",autoClose:2e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"light"})):(g(1),v(!1),R(!1),d.error(n.data.message,{position:"top-right",autoClose:2e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"light"}))}catch(r){r?(v(!1),w(r.errors)):w([]),m(!1)}},ve=async(t,r)=>{t.preventDefault(),P(!0);const a=await Oe({id:r});a.status===200?(g(1),h(),P(!1),d.success(a.data.msg,{position:"top-right",autoClose:2e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"light"})):(g(1),P(!1),d.error(a.data.message,{position:"top-right",autoClose:2e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"light"}))},Re=async(t,r)=>{t.preventDefault(),C(!0);const a=await We({id:r});a.status===200?(g(1),h(),C(!1),d.success(a.data.msg,{position:"top-right",autoClose:2e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"light"})):(g(1),C(!1),d.error(a.data.message,{position:"top-right",autoClose:2e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"light"}))},be=(t,r,a,n,F,I)=>{t.preventDefault();const Se=J.filter(O=>O.toLocaleLowerCase().replace(/\s/g,"-")!==I),Pe=G.filter(O=>O!==F.toString());fe([I,...Se]),xe([F.toString(),...Pe]),$(I.toLocaleLowerCase().replace(/\s/g,"-")),q(F.toString()),N(a),k(n),he(r),R(!0)},ye=({numberOfTimes:t})=>{const r=Array.from({length:t},(a,n)=>e.jsx(Z,{className:"text-b7 text-sm"},n));return e.jsx("div",{className:"flex mt-2 items-center",children:r})},je=({numberOfTimes:t})=>{const r=Array.from({length:t},(a,n)=>e.jsx(Z,{className:"text-gray-300 text-sm"},n));return e.jsx("div",{className:"flex mt-2 items-center",children:r})};return e.jsxs(e.Fragment,{children:[e.jsx(Q,{state:u,setState:p,children:e.jsxs("form",{onSubmit:ce,className:"flex flex-col space-y-3",children:[e.jsx("h1",{className:"font-semibold text-center",children:"Create a Review"}),e.jsx(x,{widthFull:"true",name:"type",title:"Select Page",iscompulsory:"true",onChange:t=>se(t.target.value),options:B,error:!!(i&&i.includes("PageType is Required!")),errormessage:"PageType is Required!"}),e.jsx(z,{name:"author",title:"Author Name",iscompulsory:"true",type:"text",value:b,onChange:t=>te(t.target.value),placeholder:"Jhon Doe",error:!!(i&&i.includes("PageType is Required!")),errormessage:"PageType is Required!"}),e.jsx(x,{widthFull:"true",name:"rating",title:"Review Rating",iscompulsory:"true",onChange:t=>ie(t.target.value),options:["3","4","5"],error:!!(i&&i.includes("Rating is Required!")),errormessage:"Rating is Required!"}),e.jsx(K,{name:"content",title:"Review Content",iscompulsory:"true",type:"text",value:y,onChange:t=>re(t.target.value),placeholder:"Write Review Here...",error:!!(i&&i.includes("Content is Required!")),errormessage:"Content is Required!"}),e.jsx("button",{type:"submit",className:"flex justify-center items-center cursor-pointer rounded-md py-1 w-full bg-b3",children:e.jsx("a",{className:"flex items-center text-center  w-fit px-4 py-1 rounded-md text-white font-semibold",children:oe?e.jsx("img",{src:"/loader-bg.gif",className:"w-4 h-4 ml-2"}):e.jsxs(e.Fragment,{children:[e.jsx("span",{className:"text-xs",children:"Submit"}),e.jsx(X,{className:"text-2xl"})]})})})]})}),e.jsx(Q,{state:me,setState:R,children:e.jsxs("form",{onSubmit:we,className:"flex flex-col space-y-3",children:[e.jsx("h1",{className:"font-semibold text-center",children:"Update Review"}),e.jsx(x,{widthFull:"true",name:"type",title:"Select Page",iscompulsory:"true",onChange:t=>$(t.target.value),options:J,error:!!(i&&i.includes("PageType is Required!")),errormessage:"PageType is Required!"}),e.jsx(z,{width:"full",name:"author",title:"Author Name",iscompulsory:"true",type:"text",value:T,onChange:t=>N(t.target.value),placeholder:"Jhon Doe",error:!!(i&&i.includes("PageType is Required!")),errormessage:"PageType is Required!"}),e.jsx(x,{widthFull:"true",name:"rating",title:"Review Rating",iscompulsory:"true",onChange:t=>q(t.target.value),options:G,error:!!(i&&i.includes("Rating is Required!")),errormessage:"Rating is Required!"}),e.jsx(K,{name:"content",title:"Review Content",iscompulsory:"true",type:"text",value:H,onChange:t=>k(t.target.value),placeholder:"Write Review Here...",error:!!(i&&i.includes("Content is Required!")),errormessage:"Content is Required!"}),e.jsx("button",{type:"submit",className:"flex justify-center items-center cursor-pointer rounded-md py-1 w-full bg-b3",children:e.jsx("a",{className:"flex items-center text-center  w-fit px-4 py-1 rounded-md text-white font-semibold",children:pe?e.jsx("img",{src:"/loader-bg.gif",className:"w-4 h-4 ml-2"}):e.jsxs(e.Fragment,{children:[e.jsx("span",{className:"text-xs",children:"Submit"}),e.jsx(X,{className:"text-2xl"})]})})})]})}),e.jsx(Y,{position:"top-right",autoClose:5e3,hideProgressBar:!1,newestOnTop:!1,closeOnClick:!0,rtl:!1,pauseOnFocusLoss:!0,draggable:!0,pauseOnHover:!0,theme:"light"}),e.jsxs(Ce,{children:[e.jsxs("div",{className:"flex items-center mb-5 py-3 rounded-3xl px-10 w-full",children:[e.jsx(x,{widthFull:"true",name:"sectionType",title:"Filter Section Testimonials",iscompulsory:"false",onChange:t=>ae(t.target.value),options:B}),e.jsx("div",{className:"flex w-full justify-end space-x-3",children:e.jsx(Te,{onClick:()=>p(!0),className:"text-b3 text-3xl shadow-xl rounded-full cursor-pointer"})})]}),ue?e.jsx("div",{className:"flex mt-32 justify-center w-full h-full",children:e.jsx("img",{src:"/loader-bg.gif",className:"w-24 h-24"})}):W.length>0?e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"grid grid-cols-2 gap-x-5 gap-y-5 w-full",children:W.map((t,r)=>e.jsx("div",{children:e.jsxs("div",{style:{backgroundColor:"#F5F5F5"},className:"flex flex-col shadow-sm px-5 py-3 rounded-xl xl:max-h-[170px] sm:mx-2",children:[e.jsxs("div",{className:"flex items-center",children:[e.jsxs("div",{className:"flex mt-2",children:[e.jsx(ye,{numberOfTimes:t.rating}),e.jsx(je,{numberOfTimes:5-t.rating})]}),e.jsxs("div",{className:"flex space-x-1 items-center w-full justify-end",children:[e.jsx("span",{title:"Edite Review",onClick:a=>{be(a,t._id,t.author,t.content,t.rating,t.pageType)},className:"flex items-center justify-center bg-b3 text-white hover:bg-white hover:text-b3 border-2 border-white hover:border-b3 text-sm px-[6px] w-fit rounded-full cursor-pointer py-[6px]",children:e.jsx(Ne,{className:"text-sm"})}),e.jsx("span",{title:"Duplicate Review",onClick:a=>Re(a,t._id),className:"flex items-center justify-center bg-b7 text-white hover:bg-white hover:text-b7 border-2 border-white hover:border-b7 text-sm px-[6px] w-fit rounded-full cursor-pointer py-[6px]",children:ge?e.jsx("img",{src:"/loader-bg.gif",className:"w-4 h-4"}):e.jsx(qe,{className:"text-[14px]"})}),e.jsx("span",{title:"Delete Review",onClick:a=>ve(a,t._id),className:"flex items-center justify-center bg-red-500/30 text-red-500 hover:bg-white hover:text-red-500 border-2 border-white hover:border-red-500 text-sm px-[6px] w-fit rounded-full cursor-pointer py-[6px]",children:de?e.jsx("img",{src:"/loader-bg.gif",className:"w-4 h-4"}):e.jsx(He,{className:"text-sm"})})]})]}),e.jsx("p",{className:"text-sm font-semibold mt-1",children:t.content&&t.content.length>90?t.content.substring(0,90)+"...":t.content}),e.jsx("a",{href:"",className:"text-sm text-b6 mt-2",children:"Read More"}),e.jsx("div",{className:"flex items-center",children:e.jsx("h5",{className:"text-sm mt-2 w-10/12",children:t.author})})]})},r))}),e.jsx(ke,{page:j,setPage:g,totalPages:le})]}):e.jsx("div",{className:"flex mt-32 justify-center w-full h-full",children:e.jsx("img",{src:"/not-found.webp",className:"w-36 h-36"})})]}),e.jsx(Y,{})]})};export{Ee as default};
