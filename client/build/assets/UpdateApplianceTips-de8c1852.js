import{p as H,q as i,U as P,r as a,j as e,bg as z,ao as C,f as v,aO as L,aX as Q,aG as B}from"./index-9e2787ee.js";/* empty css                      */import{H as V}from"./admin-8b96284a.js";import{G as X}from"./category-5322342b.js";import{B as _}from"./BlogEditor-f13f957c.js";const ee=()=>{const N=H().shape({id:i().required("Id is required"),title:i().required("Title is required"),slug:i().required("Slug is required"),thumbnail:i().nullable(!0),tempImg:i().nullable(!0),category:i().required("Blog Category is required"),content:i().required("Blog Content is required")}),q=P(),[c,b]=a.useState([]),[T,E]=a.useState([]),y=a.useRef(),[I,u]=a.useState(!1),[j,D]=a.useState(),[d,g]=a.useState(""),[m,f]=a.useState(""),[r,p]=a.useState(""),[S,O]=a.useState(""),[o,w]=a.useState(""),[x,h]=a.useState(""),[$,J]=a.useState(),k=async()=>{const t={slug:q.slug},s=await Q(t);D(s.data.blog[0]._id),g(s.data.blog[0].title),f(s.data.blog[0].slug),h(s.data.blog[0].content),w(s.data.blog[0].category),p(s.data.blog[0].thumbnail)};a.useEffect(()=>{k()},[]);const G=async t=>{t.preventDefault(),u(!0);try{const s={id:j,title:d,slug:m,thumbnail:r,tempImg:S,isDuplicate:$,category:o,content:x},l=new FormData;l.set("id",j),l.set("title",d),l.set("slug",m),l.set("thumbnail",r),l.set("tempImg",S),l.set("category",o),l.set("content",x),await N.validate(s,{abortEarly:!1});const n=await V(l);n.status===200?(u(!1),B.success(n.data.msg,{position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"light"}),g(""),f(""),h("")):(u(!1),B.error(n.data.message,{position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"light"}))}catch(s){u(!1),b(s?s.errors:[])}};a.useEffect(()=>{A()},[]);const A=async()=>{const t=await X();if(t.status===200){const s=t.data.categories.filter(F=>F.slug!==o),n=[{title:o[0].toUpperCase()+o.slice(1),slug:o},...s];E(n)}},R=t=>{t.preventDefault();const s=t.target.files[0];s?(p(s),O(r)):p(r)},U=()=>{y.current.click()};return e.jsx(e.Fragment,{children:e.jsx(z,{children:e.jsxs("form",{onSubmit:G,className:"flex flex-col space-y-5 w-full py-5 bg-white",children:[e.jsxs("div",{className:"flex w-full",children:[e.jsxs("div",{className:"flex flex-col space-y-10 w-1/2",children:[e.jsx(C,{width:"full",name:"title",title:"Blog Title",iscompulsory:"true",type:"text",value:d,onChange:t=>{g(t.target.value),f(t.target.value.toLowerCase().replace(/\s/g,"-").replace(/\./g,""))},error:!!(c&&c.includes("Title is required")),errormessage:"Title is required",placeholder:"Enter Blog Title"}),e.jsx(C,{width:"full",name:"slug",title:"Blog Slug",readOnly:!0,iscompulsory:"true",type:"text",value:m,error:!!(c&&c.includes("Slug is required")),errormessage:"Slug is required",placeholder:"Enter Blog Slug"})]}),e.jsxs("div",{className:"flex flex-col space-y-8 items-center w-1/2",children:[e.jsxs("div",{className:"flex flex-col space-y-2",children:[e.jsx("img",{src:r!==""?`https://neu-appliance-outlet.s3.eu-north-1.amazonaws.com/${r}`:"/no-image.jfif",className:`self-center rounded-xl ${r?"h-28 w-36":"h-26 w-32"}`}),e.jsx("button",{onClick:U,type:"button",className:"flex justify-center items-center self-center cursor-pointer rounded-md py-1 w-fit bg-b3",children:e.jsxs("a",{className:"flex items-center text-center  w-fit px-4 py-1 rounded-md text-white font-semibold",children:[e.jsx("span",{className:"text-xs",children:"Select Thumbnail"}),e.jsx(v,{className:"text-2xl"})]})}),e.jsx("input",{ref:y,name:"thumbnail",type:"file",className:"hidden",onChange:t=>R(t)})]}),e.jsx("div",{className:"flex justify-center space-x-5 w-full",children:e.jsx(L,{name:"categor",title:"Select Blog Category",iscompulsory:"true",onChange:t=>w(t.target.value),options:T})})]})]}),e.jsx(_,{state:x,setState:h}),e.jsx("button",{type:"submit",className:"flex justify-center items-center cursor-pointer rounded-md py-1 w-full bg-b3",children:I?e.jsx("img",{src:"/loader-bg.gif",className:"w-8"}):e.jsxs("a",{className:"flex items-center text-center  w-fit px-4 py-1 rounded-md text-white font-semibold",children:[e.jsx("span",{className:"text-xs",children:"Create"}),e.jsx(v,{className:"text-2xl"})]})})]})})})};export{ee as default};
