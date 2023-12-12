import{p as ae,q as n,V as le,r as a,u as re,j as t,bo as ie,av as m,f as k,aV as ne,bM as oe,bL as ce,an as ue,w as T}from"./index-554f52d4.js";import{e as de,u as me}from"./applianceTips-a35d9744.js";import{B as pe}from"./BlogEditor-1b14f2b1.js";const he=()=>{const O=ae().shape({id:n().required("Id is required"),title:n().required("Title is required"),slug:n().required("Slug is required"),thumbnail:n().nullable(!0),tempImg:n().nullable(!0),category:n().required("Tip Category is required"),content:n().required("Tip Content is required"),count:n().required("Tip Count is required")}),V=le(),[o,S]=a.useState([]),[$,H]=a.useState([]),v=a.useRef(),P=re(),[W,p]=a.useState(!1),[C,G]=a.useState(),[x,N]=a.useState(""),[g,q]=a.useState(""),[i,I]=a.useState(""),[D,J]=a.useState(""),[E,_]=a.useState(""),[d,K]=a.useState(""),[f,M]=a.useState(""),[h,R]=a.useState(""),[z,Q]=a.useState(!1),[A,B]=a.useState(""),[F,U]=a.useState(""),[l,y]=a.useState([]),[b,L]=a.useState(""),w=a.useRef(),X=s=>{s.key===" "&&b.length>0&&(y([...l,b]),setTimeout(()=>{var e;L(""),(e=w.current)==null||e.focus(),w.current.setSelectionRange(0,0)},0))},Y=(s,e)=>{s.preventDefault();const r=l.filter((c,u)=>u!==e);y(r)};a.useEffect(()=>{Z()},[]);const Z=async()=>{const s={slug:V.slug},e=await de(s);if(e.status===200){G(e.data.blog._id),N(e.data.blog.title),q(e.data.blog.slug),R(e.data.blog.content),K(e.data.blog.category),I(e.data.blog.thumbnail),B(e.data.blog.metaTitle),U(e.data.blog.metaDescription),M(e.data.blog.count),y(e.data.blog.metaKeywords);const r=e.data.categories.filter(j=>j.title.toLowerCase()!==d),u=[d[0].toUpperCase()+d.slice(1),...r];H(u)}},ee=async s=>{s.preventDefault(),p(!0);try{const c={id:C,title:x,slug:g,thumbnail:i,tempImg:D,category:d,content:h,count:f};await O.validate(c,{abortEarly:!1})}catch(c){if(p(!1),c){let u=c.errors;S(u),u.forEach(j=>{T(j,"error",1e3)})}else S([])}const e=new FormData;e.set("id",C),e.set("title",x),e.set("slug",g),e.set("thumbnail",i),e.set("tempImg",D),e.set("category",d),e.set("metaTitle",A),e.set("content",h),e.set("count",f),e.set("metaDescription",F),e.set("metaKeywords",JSON.stringify(l)),e.set("isImg",z);const r=await me(e);r.status===200?(T(r.data.msg,"success",1e3),P("/admin/manage-appliance-tips")):(p(!1),T(r.data.message,"error",1e3))},te=s=>{s.preventDefault();const e=s.target.files[0];e&&(_(window.URL.createObjectURL(e)),J(i),I(e),Q(!0))},se=()=>{v.current.click()};return t.jsx(t.Fragment,{children:t.jsx(ie,{children:t.jsxs("form",{onSubmit:ee,className:"flex flex-col space-y-5 w-full py-5 bg-white",children:[t.jsxs("div",{className:"flex w-full",children:[t.jsxs("div",{className:"flex flex-col space-y-10 w-1/2",children:[t.jsx(m,{width:"full",name:"title",title:"Tip Title",iscompulsory:"true",type:"text",value:x,onChange:s=>{N(s.target.value),q(s.target.value.toLowerCase().replace(/\s/g,"-").replace(/\./g,""))},error:!!(o&&o.includes("Title is required")),errormessage:"Title is required",placeholder:"Enter Tip Title"}),t.jsx(m,{width:"full",name:"slug",title:"Tip Slug",readOnly:!0,iscompulsory:"true",type:"text",value:g,error:!!(o&&o.includes("Slug is required")),errormessage:"Slug is required",placeholder:"Enter Tip Slug"}),t.jsx(m,{width:"full",name:"count",title:"Tip Count",iscompulsory:"true",type:"text",value:f,onChange:s=>M(s.target.value),error:!!(o&&o.includes("Tip Count is required")),errormessage:"Tip Count is required",placeholder:"Tips Count"})]}),t.jsxs("div",{className:"flex flex-col space-y-8 items-center w-1/2",children:[t.jsxs("div",{className:"flex flex-col space-y-2",children:[t.jsx("img",{src:(i==null?void 0:i.length)>0?i:E.length>0?E:"/no-image.jfif",className:`self-center rounded-xl ${i?"h-36 w-36":"h-26 w-32"}`}),t.jsx("button",{onClick:se,type:"button",className:"flex justify-center items-center self-center cursor-pointer rounded-md py-1 w-fit bg-b3",children:t.jsxs("a",{className:"flex items-center text-center  w-fit px-4 py-1 rounded-md text-white font-semibold",children:[t.jsx("span",{className:"text-xs",children:"Select Thumbnail"}),t.jsx(k,{className:"text-2xl"})]})}),t.jsx("input",{ref:v,name:"thumbnail",type:"file",className:"hidden",onChange:s=>te(s)})]}),t.jsx("div",{className:"flex justify-center space-x-5 w-full",children:t.jsx(ne,{name:"categor",title:"Select Tip Category",iscompulsory:"true",onChange:s=>K(s.target.value),options:$})})]})]}),t.jsx(pe,{state:h,setState:R}),t.jsx(oe,{title:"Tip Seo",answer:t.jsxs("div",{className:"flex flex-col space-y-2 w-full",children:[t.jsx(m,{width:"full",name:"title",title:"Meta Title",type:"text",value:A,onChange:s=>B(s.target.value),placeholder:"Enter Meta Title"}),t.jsx(ce,{width:"full",title:"Meta Description",value:F,onChange:s=>U(s.target.value),placeholder:"Write Meta Description Here.."}),t.jsx("h5",{className:"text-xs font-semibold",children:"Meta Keywords"}),t.jsx("div",{className:"flex flex-wrap w-full py-3 px-2 rounded-xl border-[1px] borders-[0,0,0,0,0.15]",children:t.jsxs("div",{className:"flex flex-wrap gap-y-2 items-center gap-x-2 w-full h-auto ",children:[(l==null?void 0:l.length)>0?l==null?void 0:l.map((s,e)=>t.jsxs("span",{className:"flex items-center bg-b6 text-sm px-2 py-1 text-white rounded-2xl",children:[s,t.jsx(ue,{onClick:r=>Y(r,e),className:"text-white bg-red-500 ml-1 text-xs cursor-pointer rounded-full"})]},e)):null,t.jsx("div",{}),t.jsx("input",{ref:w,placeholder:"Hit Space To Insert",value:b,onKeyDown:s=>X(s),onChange:s=>L(s.target.value),className:"border-none outline-none mx-5 text-sm"})]})})]}),parent:"w-full [&>div]:py-4 [&>div]:px-6 [&>div]:border [&>div]:border-b33 [&>div]:rounded-xl h-auto border-0",icon:"text-xl",textStyle:"font-bold text-sm",child:"justify-center w-full [&>p]:text-sm !mt-0"}),t.jsx("button",{type:"submit",className:"flex justify-center items-center cursor-pointer rounded-md py-1 w-full bg-b3",children:W?t.jsx("img",{src:"/loader-bg.gif",className:"w-8"}):t.jsxs("a",{className:"flex items-center text-center  w-fit px-4 py-1 rounded-md text-white font-semibold",children:[t.jsx("span",{className:"text-xs",children:"Update"}),t.jsx(k,{className:"text-2xl"})]})})]})})})};export{he as default};