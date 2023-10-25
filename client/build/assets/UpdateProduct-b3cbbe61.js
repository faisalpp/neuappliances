import{j as e,r as i,d as nt,u as ut}from"./index-6f024e59.js";import{L as mt}from"./Loader2-3468ecea.js";import{A as pt}from"./AdminAccount-29a528cc.js";import{n as I,a as xt}from"./index.esm-07b601df.js";import{ai as pe,aj as Ve,ak as ft,al as ht,E as yt,z as gt}from"./ScrollToTop-c496a034.js";import{t as v,v as xe,T as x}from"./MainLayout-7db25bd6.js";import{a as bt}from"./index.esm-b8c53b66.js";import{f as jt,u as A,e as fe,i as wt,z as vt}from"./admin-33408431.js";import{G as Nt}from"./category-a701f669.js";import{c as he,a as p,d as N,b as U}from"./index.esm-d4607b10.js";import{T as h}from"./TextInput-8b05bbd7.js";import{T as St,F as j}from"./FaqAccordion2-e09e7dd9.js";import{S as b}from"./SelectInput-0981597c.js";import{T as De}from"./TextAreaInput-7b5fea3e.js";import{I as R}from"./Ifram-191c2835.js";import{d as Ft,E as Pt}from"./index-ed942610.js";import{P as Ct}from"./Popup-a4375afa.js";import{J as H}from"./TextTransform-2d0a7ae4.js";import"./index-38501678.js";const Tt=he().shape({productType:p().required("Product Type is Required!"),title:p().required("Title is Required!"),slug:p().required("Slug is Required!"),category:p().required("Category is Required!"),feature:p(),type:p(),color:p(),brand:p(),fuelType:p(),regPrice:N().required("Regular Price is Required!"),salePrice:N(),lowPrice:N().required("Lower Installment Price is Required!"),highPrice:N().required("Higher Installment Price is Required!"),rating:N().required("Rating is Required!"),stock:N().required("Stock is Required!"),modelNo:p().required("Model No is Required!"),itemId:p().required("Item Id is Required!"),keyFeatures:U().required("key Features is Required!").min(0),featureVideo:he().required("Feature Video is Required!"),threeSixty:he().required("360 Video is Required!"),media:U().required("Product Media is Required!"),tags:U().required("Product Tags is Required!"),description:p().required("Description is Required!"),specification:p().required("Specification is Required!"),deliveryInfo:p().required("Delivery Info is Required!"),metaTitle:p(),metaDescription:p(),metaKeywords:U()}),ye=({state:S,setState:B,property:w})=>{const J=(f,y)=>{f.preventDefault(),B({...S,[w]:y.getData()})};return e.jsx(e.Fragment,{children:S[w].length>0?e.jsx(Ft.CKEditor,{editor:Pt,data:S[w],onChange:(f,y)=>{J(f,y)},config:{height:"300px",toolbar:["alignment","autoImage","autoLink","autoformat","base64UploadAdapter","blockQuote","bold","essentials","fontSize","heading","image","imageCaption","imageUpload","italic","link","list","mediaEmbed","paragraph","undo","redo","bulletedList","numberedList"]},onReady:f=>{f.ui.view.editable.element.style.minHeight="300px"},onBlur:(f,y)=>{console.log(f),y.ui.view.editable.element.style.minHeight="300px"},onFocus:(f,y)=>{y.ui.view.editable.element.style.minHeight="300px"}}):null})},Zt=()=>{const[S,B]=i.useState([]),[w,J]=i.useState([]),[f,y]=i.useState([]),[ge,Ee]=i.useState([]),[be,Le]=i.useState([]),[je,Me]=i.useState([]),[$e,z]=i.useState(!1),[Ke,G]=i.useState(!1),Oe=nt(),[we,It]=i.useState(Oe.slug),[r,o]=i.useState({productType:"parent",title:"",slug:"",category:"",feature:"",type:"",color:"",brand:"",fuelType:"",regPrice:"",salePrice:"",lowPrice:"",highPrice:"",rating:"3",stock:"",modelNo:"",itemId:"",keyFeatures:[],featureVideo:{type:"",data:""},threeSixty:{type:"",data:""},media:[],description:"",specification:"",deliveryInfo:"",metaTitle:"",metaDescription:"",metaKeywords:[],tags:""}),[ve,Ae]=i.useState(["Parent","Variant"]),[u,Ne]=i.useState([]),F=(t,s,a,l)=>{if(s.length>0){let d=s[0].sectionItemsId.filter(me=>me.title.toLowerCase().replace(/\s/g,"-")!==l);const n=[{title:H.capitalizeWords(l.replace(/\-/g," "))},...d];t(n);let ue=l.toLowerCase().replace(/\-/g," ");o({...r,[a]:ue})}};i.useEffect(()=>{(async()=>{G(!0);const s=await gt({slug:we}),a=await Nt();if(s.status===200&&a.status===200){const l=await jt({categorySlug:s.data.product.category});l.status===200&&(F(y,l.data.features,"feature",s.data.product.feature),F(Ee,l.data.types,"type",s.data.product.type),F(Le,l.data.colors,"color",s.data.product.color),F(J,l.data.brands,"brand",s.data.product.brand),F(Me,l.data.fuelTypes,"fuelType",s.data.product.fuelType));const d=a.data.categories.filter(T=>T.slug!==s.data.product.category),n=[H.Cap1Char(s.data.product.category),...d];B(n);const ue=ve.filter(T=>T.toLocaleLowerCase()!==s.data.product.productType),me=[H.Cap1Char(s.data.product.productType),...ue];Ae(me);const ot=s.data.product.metaKeywords.split(", ").map(T=>T.trim()),ct={productType:s.data.product.productType,title:s.data.product.title,slug:s.data.product.slug,category:s.data.product.category,feature:s.data.product.feature,type:s.data.product.type,color:s.data.product.color,brand:s.data.product.brand,fuelType:s.data.product.fuelType,regPrice:s.data.product.regPrice,salePrice:s.data.product.salePrice,lowPrice:s.data.product.lowPrice,highPrice:s.data.product.highPrice,rating:s.data.product.rating,stock:s.data.product.stock,modelNo:s.data.product.modelNo,itemId:s.data.product.itemId,keyFeatures:s.data.product.keyFeatures,featureVideo:s.data.product.featureVideo,threeSixty:s.data.product.threeSixty,media:s.data.product.media,description:s.data.product.description,specification:s.data.product.specification,deliveryInfo:s.data.product.deliveryInfo,metaTitle:s.data.product.metaTitle,metaDescription:s.data.product.metaDescription,metaKeywords:ot,tags:s.data.product.tags};o(ct),G(!1)}else G(!1)})()},[]);const[k,P]=i.useState(""),[Se,W]=i.useState(!1),[Ue,Z]=i.useState(!1),[q,Q]=i.useState(""),[V,D]=i.useState(""),[Fe,Pe]=i.useState(!1),[Ce,E]=i.useState(!1),[He,X]=i.useState(""),[L,M]=i.useState(""),Y=i.useRef(null),_=i.useRef(null),ee=i.useRef(null),$=async(t,s,a)=>{if(s==="image")if(a==="upload"){const l=t.target.files[0];if(l){E(!0);const d=new FormData;d.append("media",l),d.append("location","product/images/");const n=await A(d);n.status===200?(E(!1),o({...r,media:[...r.media,{file:s,type:a,data:n.data.url}]}),D(""),Y.current.value=""):(E(!1),D(""),x(n.data.message,"error"))}}else V!==""&&(o({...r,media:[...r.media,{file:s,type:a,data:V,preview:V}]}),D(""));else if(s==="video")if(a==="url"&&L!==""){const d=`https://img.youtube.com/vi/${L.split("/").pop()}/mqdefault.jpg`;o({...r,media:[...r.media,{file:s,type:a,data:L.replace("youtu.be/","youtube.com/embed/"),preview:d}]}),M("")}else{const l=t.target.files[0];if(l){Pe(!0);const d=new FormData;d.append("media",l),d.append("location","product/videos/");const n=await A(d);n.status===200?(Pe(!1),o({...r,media:[...r.media,{file:s,type:a,data:n.data.url}]}),M(""),_.current.value=""):(E(!1),M(""),x(n.data.message,"error",1e3))}}},Be=async(t,s)=>{const a=r.media.filter((d,n)=>n===s),l=r.media.filter((d,n)=>n!==s);if(a.length&&a[0].type==="upload"){X(s);const d=await fe({url:a[0].data});d.status===200?(o({...r,media:[...l]}),X(""),x(d.data.msg,"success",1e3)):(X(""),x(d.data.message,"error",1e3))}else o({...r,media:[...l]})},te=(t,s)=>{t.preventDefault();const a=tags.map(l=>l.id===s?{...l,selected:!l.selected}:l);o({...r,tags:JSON.stringify(a)})},Je=({id:t,name:s,selected:a})=>e.jsxs(e.Fragment,{children:[s==="top-refrigerator-bottom-freezer"?e.jsxs("div",{onClick:l=>te(l,t),className:`flex flex-col hover:shadow-md cursor-pointer items-center border-[1px] ${a?"border-b6":"border-[rgba(0,0,0,0.15)]"} rounded-md px-2 py-2 w-fit h-fit`,children:[e.jsx("h5",{className:"text-[9px] font-medium",children:"TOP REFRIGERAOTR"}),e.jsx("span",{className:"flex h-[1px] w-full bg-[rgba(0,0,0,0.15)]"}),e.jsx("h5",{className:"text-[9px] font-medium",children:"BOTTOM FREEZER"})]}):null,s==="top-freezer-bottom-refrigerator"?e.jsxs("div",{onClick:l=>te(l,t),className:`flex flex-col hover:shadow-md cursor-pointer items-center border-[1px] ${a?"border-b6":"border-[rgba(0,0,0,0.15)]"} rounded-md px-2 py-2 w-fit h-fit`,children:[e.jsx("h5",{className:"text-[9px] font-medium",children:"TOP FREEZER"}),e.jsx("span",{className:"flex h-[1px] w-full bg-[rgba(0,0,0,0.15)]"}),e.jsx("h5",{className:"text-[9px] font-medium",children:"BOTTOM REFRIGERAOTR"})]}):null]}),ze=async t=>{let s={type:"",data:""};if(r.featureVideo.type==="url")o({...r,featureVideo:s});else{Z(!0);const a=await fe({url:r.featureVideo.data});a.status===200?(o({...r,featureVideo:s}),Z(!1),x(a.data.msg,"success",1e3)):(Z(!1),x(a.data.message,"error",1e3))}},Te=async(t,s)=>{if(s==="upload"){t.preventDefault(),W(!0),P("");const a=t.target.files[0];if(a){K(!0);const l=new FormData;l.append("media",a),l.append("location","product/featureVideos/");const d=await A(l);d.status===200?(W(!1),o({...r,featureVideo:{type:"upload",data:d.data.url}}),P("")):(W(!1),P(""),x(d.data.message,"error",1e3))}}else if(s==="url")if(k==="")o({...r,featureVideo:{type:"",data:"",prevImg:""}});else{const l=`https://img.youtube.com/vi/${k.split("/").pop()}/mqdefault.jpg`;o({...r,featureVideo:{type:"url",data:k.replace("youtu.be/","youtube.com/embed/"),prevImg:l}}),P("")}},Ge=(t,s)=>{if(s==="upload"){t.preventDefault(),Q("");const a=t.target.files[0];a&&o({...r,threeSixty:{type:"upload",data:a}})}else if(s==="url"&&q!==""){const l=`https://img.youtube.com/vi/${q.split("/").pop()}/mqdefault.jpg`;o({...r,threeSixty:{type:"url",data:q.replace("youtu.be/","youtube.com/embed/"),prevImg:l}}),Q("")}},[We,C]=i.useState(!1),[re,se]=i.useState(""),[ae,le]=i.useState(""),[c,g]=i.useState({file:"",type:"",data:"",preview:""}),[Ie,ie]=i.useState(""),[de,oe]=i.useState(""),[Ze,K]=i.useState(!1),Re=i.useRef(null),ke=i.useRef(null),O=async(t,s,a)=>{if(a==="image")if(s==="upload"){const l=t.target.files[0];l&&(g({file:a,type:s,data:l,preview:window.URL.createObjectURL(l)}),ie(""))}else g({file:a,type:s,data:Ie,preview:""}),ie("");else if(a==="video")if(s==="url"){const d=`https://img.youtube.com/vi/${de.split("/").pop()}/mqdefault.jpg`;g({file:a,type:s,data:de.replace("youtu.be/","youtube.com/embed/"),prevImg:d}),oe("")}else{const l=t.target.files[0];l&&(g({file:a,type:s,data:l}),oe(""))}},Qe=async()=>{if(c.type==="upload"){K(!0);const t=new FormData;t.append("media",c.data),t.append("location",`product/${c.file}s/`);const s=await A(t);if(s.status===200){const a={title:re,description:ae,media:{...c,data:s.data.url}};o({...r,keyFeatures:[...r.keyFeatures,a]}),g({file:"",type:"",data:"",preview:""}),se(""),le(""),K(!1),C(!1)}else K(!1),C(!1),x(s.data.message,"error",1e3)}else{const t={title:re,description:ae,media:{...c}};o({...r,keyFeatures:[...r.keyFeatures,t]}),g({file:"",type:"",data:"",preview:""}),se(""),le(""),C(!1)}},[Xe,Ye]=i.useState(null),_e=async(t,s)=>{t.preventDefault();const a=r.keyFeatures.filter((d,n)=>n!==s),l=r.keyFeatures.filter((d,n)=>n===s);if(l[0].media.type!=="upload")o({...r,keyFeatures:[...a]});else{Ye(s);const d=await fe({url:l[0].media.data});d.status===200?(o({...r,keyFeatures:[...a]}),x(d.data.msg,"success",1e3)):x(d.data.message,"error",1e3)}},[ce,qe]=i.useState(""),ne=i.useRef(),et=t=>{t.key===" "&&ce.length>0&&(o({...r,metaKeywords:[...r.metaKeywords,ce]}),setTimeout(()=>{qe(""),ne.current.focus(),ne.current.setSelectionRange(0,0)},0))},tt=(t,s)=>{t.preventDefault();const a=r.metaKeywords.filter((l,d)=>d!==s);o({...r,metaKeywords:[...a]})},[rt,st]=i.useState([]),at=async()=>{const t=await wt({category:r.category});t.status===200&&st(t.data.allModelNos)};i.useEffect(()=>{r.category!==""&&at()},[r.category]);const lt=ut(),it=async t=>{t.preventDefault(),z(!0);try{const s={pSlug:we,productType:r.productType,title:r.title,slug:r.slug,category:r.category,feature:r.feature,type:r.type,color:r.color,brand:r.brand,fuelType:r.fuelType,regPrice:parseFloat(r.regPrice),salePrice:parseFloat(r.salePrice),lowPrice:parseFloat(r.lowPrice),highPrice:parseFloat(r.highPrice),rating:parseFloat(r.rating),stock:parseFloat(r.stock),modelNo:r.modelNo,itemId:r.itemId,metaKeywords:JSON.stringify(r.metaKeywords),keyFeatures:JSON.stringify(r.keyFeatures),featureVideo:JSON.stringify(r.featureVideo),threeSixty:JSON.stringify(r.threeSixty),media:JSON.stringify(r.media),tags:JSON.stringify(r.tags),description:r.description,specification:r.specification,deliveryInfo:r.deliveryInfo,metaTitle:r.metaTitle,metaDescription:r.metaDescription};await Tt.validate(r,{abortEarly:!1});const a=await vt(s);a.status===200?(z(!1),x(a.data.msg,"success",1e3),lt("/admin/manage-products")):(z(!1),x(a.data.message,"error",1e3))}catch(s){if(s){let a=s.errors;Ne(a),a.forEach(l=>{x(l,"error",1e3)})}else Ne([])}},m=(t,s)=>{const{value:a}=t.target;o({...r,[s]:a})},dt=t=>{o({...r,title:t.target.value,slug:t.target.value.toLowerCase().replace(/\s/g,"-")})};return e.jsxs(e.Fragment,{children:[e.jsx(Ct,{state:We,setState:C,children:e.jsxs("div",{className:"flex flex-col items-center h-auto rounded-md w-11/12",children:[e.jsx("h4",{className:"pb-4 font-bold",children:"Create Product Feature"}),e.jsxs("div",{className:"flex space-x-2",children:[e.jsxs("div",{className:"flex flex-col items-center justify-center border-[1px] border-[0,0,0,0,0.15] w-1/2 h-52 px-2 py-2 rounded-md",children:[e.jsx("div",{className:"relative h-full flex items-center justify-center",children:c.file==="image"?e.jsx("img",{src:c.preview!==""?c.preview:c.data,className:"h-36 rounded-md"}):e.jsx(pe,{className:"text-7xl"})}),e.jsx("div",{className:"flex items-center justify-center pt-1 space-x-2 w-full mt-2 border-t-[1px] border-[0,0,0,0,0.15]",children:c.file==="image"?e.jsx("button",{type:"button",onClick:t=>g({file:"",type:"",data:"",preview:""}),className:"flex justify-center self-center items-center cursor-pointer rounded-md w-3/2 bg-red-500",children:e.jsx("a",{className:"flex items-center text-center  w-fit px-1 py-1 rounded-md text-white font-semibold",children:e.jsx(I,{className:"text-sm"})})}):e.jsxs(e.Fragment,{children:[e.jsx("input",{type:"text",value:Ie,onChange:t=>ie(t.target.value),className:"outline-none border-[1px] border-b6 rounded-lg px-2 text-xs h-6",placeholder:"Enter Image Url"}),e.jsx("button",{onClick:t=>O(t,"url","image"),type:"button",className:"flex justify-center self-center items-center cursor-pointer rounded-md w-3/2 bg-b3",children:e.jsx("a",{className:"flex items-center text-center  w-fit px-2 py-1 rounded-md text-white font-semibold",children:e.jsx(v,{className:"text-sm"})})}),e.jsx("input",{type:"file",accept:"image/*",ref:ke,onChange:t=>O(t,"upload","image"),className:"hidden"}),e.jsx("button",{type:"button",onClick:()=>ke.current.click(),className:"flex justify-center self-center items-center cursor-pointer rounded-md w-3/2 bg-b3",children:e.jsx("a",{className:"flex items-center text-center  w-fit px-2 py-1 rounded-md text-white font-semibold",children:e.jsx(Ve,{className:"text-sm"})})})]})})]}),e.jsx("div",{className:"flex h-full justify-center items-center font-semibold",children:e.jsx("h5",{children:"OR"})}),e.jsxs("div",{className:"flex flex-col items-center justify-center border-[1px] border-[0,0,0,0,0.15] w-1/2 h-52 px-2 py-2 rounded-md",children:[e.jsxs("div",{className:"h-full flex items-center justify-center",children:[c.file!=="video"?e.jsx(pe,{className:"text-7xl"}):null,c.file==="video"&&c.type==="url"?e.jsx(R,{thumbnail:c.prevImg,title:c.data,divId:`media-video-wrapper-${c.type}`,frameId:`media-video-${c.type}`,src:c.data,icon:"text-5xl",style:"h-36 w-11/12 rounded-md"}):null,c.file==="video"&&c.type==="upload"?e.jsx("div",{children:e.jsx("h5",{children:c.data.name})}):null]}),e.jsx("div",{className:"flex items-center justify-center pt-1 space-x-2 w-full mt-2 border-t-[1px] border-[0,0,0,0,0.15]",children:c.file==="video"?e.jsx("button",{type:"button",onClick:t=>g({file:"",type:"",data:"",preview:""}),className:"flex justify-center self-center items-center cursor-pointer rounded-md w-3/2 bg-red-500",children:e.jsx("a",{className:"flex items-center text-center  w-fit px-1 py-1 rounded-md text-white font-semibold",children:e.jsx(I,{className:"text-sm"})})}):e.jsxs(e.Fragment,{children:[e.jsx("input",{type:"text",value:de,onChange:t=>oe(t.target.value.replace("youtu.be/","youtube.com/embed/")),className:"outline-none border-[1px] border-b6 rounded-lg px-2 text-xs h-6",placeholder:"Enter Iframe Url"}),e.jsx("button",{onClick:t=>O(t,"url","video"),type:"button",className:"flex justify-center self-center items-center cursor-pointer rounded-md w-3/2 bg-b3",children:e.jsx("a",{className:"flex items-center text-center  w-fit px-2 py-1 rounded-md text-white font-semibold",children:e.jsx(v,{className:"text-sm"})})}),e.jsx("input",{type:"file",accept:"video/*",ref:Re,onChange:t=>O(t,"upload","video"),className:"hidden"}),e.jsx("button",{type:"button",onClick:()=>Re.current.click(),className:"flex justify-center self-center items-center cursor-pointer rounded-md w-3/2 bg-b3",children:e.jsx("a",{className:"flex items-center text-center  w-fit px-2 py-1 rounded-md text-white font-semibold",children:e.jsx(xe,{className:"text-sm"})})})]})})]})]}),e.jsxs("div",{className:"flex flex-col space-y-2 items-center px-2 mt-2 w-full",children:[e.jsx(h,{width:"full",value:re,onChange:t=>se(t.target.value),placeholder:"Enter Feature Title"}),e.jsx(De,{value:ae,onChange:t=>le(t.target.value),placeholder:"Write Feature Description Here.."}),Ze?e.jsx("button",{type:"button",className:"flex justify-center self-center items-center cursor-pointer rounded-md w-3/2 bg-b3",children:e.jsx("a",{className:"flex items-center text-center  w-fit px-3 py-2 rounded-md text-white font-semibold text-xs",children:e.jsx("img",{src:"/loader-bg.gif",className:"w-5"})})}):e.jsx("button",{type:"button",onClick:Qe,className:"flex justify-center self-center items-center cursor-pointer rounded-md w-3/2 bg-b3",children:e.jsx("a",{className:"flex items-center text-center  w-fit px-3 py-2 rounded-md text-white font-semibold text-xs",children:"Create"})})]})]})}),Ke?e.jsx(mt,{}):e.jsx(pt,{children:e.jsxs("form",{onSubmit:it,encType:"multipart/form-data",className:"flex flex-col justify-center space-y-5 w-full py-10",children:[e.jsxs("h5",{className:"font-semibold text-center text-2xl",children:[H.Cap1Char(r.productType)," Product"]}),e.jsxs("div",{className:"flex items-center space-x-5 w-full",children:[e.jsx(h,{name:"title",title:"Title",iscompulsory:"true",type:"text",value:r.title,onChange:t=>dt(t),error:!!(u&&u.includes("Title is Required!")),errormessage:"Title is Required!",placeholder:"Enter Product Title"}),e.jsx(h,{name:"slug",readOnly:!0,title:"Slug",iscompulsory:"true",type:"text",value:r.slug,error:!!(u&&u.includes("Product Slug is Required!")),errormessage:"Slug is Required!",placeholder:"Slug is Required!"})]}),e.jsxs("div",{className:"flex space-x-5",children:[e.jsx(b,{name:"categor",title:"Product Type",iscompulsory:"true",onChange:t=>m(t,"productType"),options:ve}),e.jsx(b,{name:"categor",title:"Product Category",iscompulsory:"true",onChange:t=>m(t,"category"),options:S})]}),e.jsxs("div",{className:"flex space-x-5 items-center w-full",children:[f.length>0?e.jsx(b,{name:"categor",title:"Product Feature",iscompulsory:"true",onChange:t=>m(t,"feature"),options:f}):null,ge.length>0?e.jsx(b,{name:"categor",title:"Product Type",iscompulsory:"true",onChange:t=>m(t,"type"),options:ge}):null,be.length>0?e.jsx(b,{name:"categor",title:"Product Color",iscompulsory:"true",onChange:t=>m(t,"color"),options:be}):null,je.length>0?e.jsx(b,{name:"categor",title:"Product Fuel Type",iscompulsory:"true",onChange:t=>m(t,"fuelType"),options:je}):null,w.length>0?e.jsx(b,{name:"categor",title:"Product Brand",iscompulsory:"true",onChange:t=>m(t,"brand"),options:w}):null]}),e.jsxs("div",{className:"flex items-center space-x-5 w-full",children:[e.jsx(h,{name:"regPrice",title:"Regular Price",iscompulsory:"true",type:"text",value:r.regPrice,onChange:t=>m(t,"regPrice"),error:!!(u&&u.includes("Regular Price is Required!")),errormessage:"Regular Price is Required!",placeholder:"Regular Price is Required!"}),e.jsx(h,{name:"salePrice",title:"Sale Price",iscompulsory:"false",type:"text",value:r.salePrice,onChange:t=>m(t,"salePrice"),error:!!(u&&u.includes("Sale Price is Required!")),errormessage:"Sale Price is Required!",placeholder:"Sale Price is Required!"}),e.jsx(h,{name:"lowPrice",title:"Lower Installment",iscompulsory:"true",type:"text",value:r.lowPrice,onChange:t=>m(t,"lowPrice"),error:!!(u&&u.includes("Lower Installment Price is Required!")),errormessage:"Lower Installment Price is Required!",placeholder:"Enter Lower Installment"}),e.jsx(h,{name:"highPrice",title:"Higher Installment",iscompulsory:"true",type:"text",value:r.highPrice,onChange:t=>m(t,"highPrice"),error:!!(u&&u.includes("Higher Installment Price is Required!")),errormessage:"Higher Installment Price is Required!",placeholder:"Enter Higher Installment"})]}),e.jsxs("div",{className:"flex items-center space-x-5 w-full",children:[e.jsx(b,{name:"categor",title:"Rating",iscompulsory:"true",onChange:t=>m(t,"rating"),options:["3","4","5"]}),e.jsx(h,{name:"stock",title:"Stock",iscompulsory:"true",type:"text",value:r.stock,onChange:t=>m(t,"stock"),error:!!(u&&u.includes("Stock is Required!")),errormessage:"Stock is Required!",placeholder:"Total Stock: 12"}),e.jsx(St,{state:r.modelNo,setState:o,values:r,suggestionList:rt,iscompulsory:"true",title:"Model No",placeholder:"#12334"}),e.jsx(h,{name:"item-id",title:"Item Id",iscompulsory:"true",type:"text",value:r.itemId,onChange:t=>m(t,"itemId"),error:!!(u&&u.includes("Item Id is Required!")),errormessage:"Item Id is Required!",placeholder:"Item Id: 234532455"})]}),r.productType==="parent"?e.jsx(j,{title:"Main Key Features",answer:e.jsx("div",{className:"flex flex-col border-[1px] border-[0,0,0,0,0.15] rounded-md h-96 overflow-x-hidden overflow-y-scroll w-full",children:e.jsxs("div",{className:"grid grid-cols-3 mt-2 gap-x-2 gap-y-2 justify-center w-full",children:[r.keyFeatures.length>0?r.keyFeatures.map((t,s)=>e.jsxs("div",{className:"flex flex-col  py-2 items-center h-60  bg-b5 ml-2 rounded-md w-11/12",children:[e.jsxs("div",{className:"flex items-center justify-center border-[1px] border-[0,0,0,0,0.15] w-11/12 h-32 px-2 py-2 rounded-md",children:[t.media.file==="image"?e.jsx("img",{src:t.media.data,className:"h-28 rounded-md"}):null,t.media.file==="video"&&t.media.type==="url"?e.jsx(R,{thumbnail:t.media.prevImg,frameId:`${s}-wrapper-${t.media.data}`,divId:`${s}-${t.media.data}`,icon:"text-5xl",src:t.media.data,style:"w-40 h-28 rounded-md"}):null,t.media.file==="video"&&t.media.type==="upload"?e.jsx("video",{src:t.media.data,className:"w-40 h-28 rounded-md "}):null]}),e.jsx("div",{className:"flex space-x-2 items-center justify-center w-full s mt-2",children:Xe===s?e.jsx("button",{type:"button",className:"flex justify-center self-center items-center cursor-pointer rounded-md w-3/2 bg-red-500",children:e.jsx("a",{className:"flex items-center text-center  w-fit px-1 py-1 rounded-md text-white font-semibold",children:e.jsx("img",{src:"/loader-bg.gif",className:"w-3"})})}):e.jsx("button",{type:"button",onClick:a=>_e(a,s),className:"flex justify-center self-center items-center cursor-pointer rounded-md w-3/2 bg-red-500",children:e.jsx("a",{className:"flex items-center text-center  w-fit px-1 py-1 rounded-md text-white font-semibold",children:e.jsx(I,{className:"text-sm"})})})}),e.jsxs("div",{className:"flex flex-col px-2 mt-2 w-full",children:[e.jsx("h5",{className:"font-bold text-sm",children:t.title}),e.jsx("p",{className:"h-16 overflow-hidden text-xs ",children:t.description})]})]},s)):null,e.jsx("div",{className:"flex flex-col  justify-center py-2 items-center h-72 ml-2 rounded-md w-11/12",children:e.jsx("div",{onClick:()=>C(!0),className:"flex items-center hover:cursor-pointer shadow-xl justify-center border-[1px] border-b6 w-1/2 h-1/2 px-2 py-2 rounded-md",children:e.jsx(ft,{className:"text-b6 text-4xl"})})})]})}),parent:"w-full [&>div]:py-4 [&>div]:px-6 [&>div]:border [&>div]:border-b33 [&>div]:rounded-xl h-auto border-0",icon:"text-xl",textStyle:"font-bold text-sm",child:" w-full [&>p]:text-sm !mt-0"}):null,e.jsx(j,{title:"Product Media",answer:e.jsxs("div",{className:"flex flex-col space-y-5",children:[e.jsxs("div",{className:"flex items-center justify-center space-x-2",children:[e.jsxs("div",{className:"flex flex-col justify-center items-center py-3 border-[1px] border-[0,0,0,0,0.15] rounded-md w-1/2",children:[e.jsx("h5",{className:"text-center font-bold text-xs mb-2",children:"Upload Features Video"}),r.featureVideo.type==="url"?e.jsx(R,{thumbnail:r.featureVideo.prevImg,title:r.featureVideo.data,icon:"text-5xl",frameId:`feature-video-wrapper-${r.featureVideo.type}`,divId:`feature-video-${r.featureVideo.type}`,src:r.featureVideo.data,style:"h-52 w-11/12 rounded-md"}):null,r.featureVideo.type==="upload"?e.jsx("video",{src:r.featureVideo.data,controls:!0,className:" w-11/12 rounded-xl"}):null,r.featureVideo.type===""&&r.featureVideo.data===""?e.jsx("div",{className:"flex items-center justify-center w-11/12 h-52 border-2 border-black rounded-lg",children:Se?e.jsx("img",{src:"/file-loader.gif",className:"w-32"}):e.jsx(pe,{className:"text-7xl"})}):null,e.jsxs("div",{className:"flex items-center justify-center pt-3 space-x-2 w-full mt-2 border-t-[1px] border-[0,0,0,0,0.15]",children:[e.jsx("input",{type:"file",accept:"video/*",ref:ee,onChange:t=>Te(t,"upload"),className:"hidden"}),r.featureVideo.data!==""?e.jsx(e.Fragment,{children:Ue?e.jsx("button",{type:"button",className:"flex justify-center self-center items-center cursor-pointer rounded-md w-3/2 bg-red-500",children:e.jsx("a",{className:"flex items-center text-center  w-fit px-1 py-1 rounded-md text-white font-semibold",children:e.jsx("img",{src:"/loader-bg.gif",className:"w-3"})})}):e.jsx("button",{type:"button",onClick:t=>ze(),className:"flex justify-center self-center items-center cursor-pointer rounded-md w-3/2 bg-red-500",children:e.jsx("a",{className:"flex items-center text-center  w-fit px-1 py-1 rounded-md text-white font-semibold",children:e.jsx(I,{className:"text-sm"})})})}):e.jsxs(e.Fragment,{children:[e.jsx("input",{type:"text",value:k,onChange:t=>P(t.target.value),className:"outline-none border-[1px] border-b6 rounded-lg px-2 text-xs h-6",placeholder:"Enter Iframe Url"}),e.jsx("button",{onClick:t=>Te(t,"url"),type:"button",className:"flex justify-center self-center items-center cursor-pointer rounded-md w-3/2 bg-b3",children:e.jsx("a",{className:"flex items-center text-center  w-fit px-2 py-1 rounded-md text-white font-semibold",children:e.jsx(v,{className:"text-sm"})})}),e.jsx(e.Fragment,{children:Se?e.jsx("button",{type:"button",onClick:()=>ee.current.click(),className:"flex justify-center self-center items-center cursor-pointer rounded-md w-3/2 bg-b3",children:e.jsx("a",{className:"flex items-center text-center  w-fit px-2 py-1 rounded-md text-white font-semibold",children:e.jsx("img",{src:"/loader-bg.gif",className:"w-3"})})}):e.jsx("button",{type:"button",onClick:()=>ee.current.click(),className:"flex justify-center self-center items-center cursor-pointer rounded-md w-3/2 bg-b3",children:e.jsx("a",{className:"flex items-center text-center  w-fit px-2 py-1 rounded-md text-white font-semibold",children:e.jsx(xe,{className:"text-sm"})})})})]})]})]}),e.jsxs("div",{className:"flex flex-col justify-center items-center py-3 border-[1px] border-[0,0,0,0,0.15] rounded-md w-1/2",children:[e.jsx("h5",{className:"text-center font-bold text-xs mb-2",children:"Insert 360 Iframe"}),r.threeSixty.type==="url"?e.jsx(R,{icon:"text-5xl",thumbnail:r.threeSixty.prevImg,title:r.threeSixty.data,divId:`360-wrapper-${r.threeSixty.type}`,frameId:`360-video-${r.threeSixty.type}`,src:r.threeSixty.data,style:"h-52 w-11/12 rounded-md"}):null,r.threeSixty.type===""&&r.threeSixty.data===""?e.jsx("div",{className:"flex items-center justify-center w-11/12 h-52 border-2 border-black rounded-lg",children:e.jsx(bt,{className:"text-7xl"})}):null,e.jsx("div",{className:"flex items-center justify-center pt-3 space-x-2 w-full mt-2 border-t-[1px] border-[0,0,0,0,0.15]",children:r.threeSixty.data!==""?e.jsx(e.Fragment,{children:e.jsx("button",{type:"button",onClick:()=>o({...r,threeSixty:{type:"",data:""}}),className:"flex justify-center self-center items-center cursor-pointer rounded-md w-3/2 bg-red-500",children:e.jsx("a",{className:"flex items-center text-center  w-fit px-1 py-1 rounded-md text-white font-semibold",children:e.jsx(I,{className:"text-sm"})})})}):e.jsxs(e.Fragment,{children:[e.jsx("input",{type:"text",value:q,onChange:t=>Q(t.target.value),className:"outline-none border-[1px] border-b6 rounded-lg px-2 text-xs h-6",placeholder:"Enter Iframe Url"}),e.jsx("button",{onClick:t=>Ge(t,"url"),type:"button",className:"flex justify-center self-center items-center cursor-pointer rounded-md w-3/2 bg-b3",children:e.jsx("a",{className:"flex items-center text-center  w-fit px-2 py-1 rounded-md text-white font-semibold",children:e.jsx(v,{className:"text-sm"})})})]})})]})]}),e.jsxs("div",{className:"flex flex-col border-[1px] border-[rgba(0,0,0,0.15)] rounded-lg h-52",children:[e.jsxs("div",{className:"flex items-center space-x-2 justify-between px-2 border-b-[1px] border-b-[rgba(0,0,0,0.15)] h-10 w-full",children:[e.jsxs("div",{className:"flex items-center space-x-1",children:[e.jsx("h5",{className:"font-bold text-xs",children:"Upload Images"}),e.jsx("input",{type:"text",value:V,onChange:t=>D(t.target.value),className:"outline-none border-[1px] border-b6 rounded-lg px-2 text-xs h-6",placeholder:"Enter Image Url"}),e.jsx("button",{onClick:t=>{Ce||$(t,"image","url")},type:"button",className:"flex justify-center self-center items-center cursor-pointer rounded-md w-3/2 bg-b3",children:e.jsx("a",{className:"flex items-center text-center  w-fit px-2 py-1 rounded-md text-white font-semibold",children:e.jsx(v,{className:"text-sm"})})}),e.jsx("input",{ref:Y,onChange:t=>$(t,"image","upload"),type:"file",accept:"image/*",className:"hidden"}),Ce?e.jsx("button",{type:"button",className:"flex justify-center self-center items-center cursor-pointer rounded-md w-3/2 bg-b6",children:e.jsx("a",{className:"flex items-center text-center  w-fit px-1 py-1 rounded-md text-white font-semibold",children:e.jsx("img",{src:"/loader-bg.gif",className:"w-4"})})}):e.jsx("button",{type:"button",onClick:()=>Y.current.click(),className:"flex justify-center self-center items-center cursor-pointer rounded-md w-3/2 bg-b3",children:e.jsx("a",{className:"flex items-center text-center  w-fit px-2 py-1 rounded-md text-white font-semibold",children:e.jsx(Ve,{className:"text-sm"})})})]}),e.jsxs("div",{className:"flex items-center space-x-1 border-l-[1px] pl-2 border-[rgba(0,0,0,0.15)]",children:[e.jsx("h5",{className:"font-bold text-xs",children:"Upload Video's"}),e.jsx("input",{type:"text",value:L,onChange:t=>M(t.target.value),className:"outline-none border-[1px] border-b6 rounded-lg px-2 text-xs h-6",placeholder:"Enter Video Url"}),e.jsx("button",{onClick:t=>{Fe||$(t,"video","url")},type:"button",className:"flex justify-center self-center items-center cursor-pointer rounded-md w-3/2 bg-b3",children:e.jsx("a",{className:"flex items-center text-center  w-fit px-2 py-1 rounded-md text-white font-semibold",children:e.jsx(v,{className:"text-sm"})})}),e.jsx("input",{ref:_,onChange:t=>$(t,"video","upload"),type:"file",accept:"video/*",className:"hidden"}),Fe?e.jsx("button",{type:"button",className:"flex justify-center self-center items-center cursor-pointer rounded-md w-3/2 bg-b6",children:e.jsx("a",{className:"flex items-center text-center  w-fit px-1 py-1 rounded-md text-white font-semibold",children:e.jsx("img",{src:"/loader-bg.gif",className:"w-4"})})}):e.jsx("button",{type:"button",onClick:()=>_.current.click(),className:"flex justify-center self-center items-center cursor-pointer rounded-md w-3/2 bg-b3",children:e.jsx("a",{className:"flex items-center text-center  w-fit px-2 py-1 rounded-md text-white font-semibold",children:e.jsx(xe,{className:"text-sm"})})})]})]}),e.jsx("div",{className:`px-2 py-2 ${r.media.length>0?"flex flex-wrap gap-x-2 gap-y-2":"flex items-center justify-center"} h-full overflow-x-hidden overflow-y-scroll`,children:r.media.length>0?r.media.map((t,s)=>e.jsx("div",{className:"relative px-1 py-1 rounded-lg h-fit w-fit border-[1px] border-[rgba(0,0,0,0.15)]",children:He===s?e.jsxs("div",{className:"relative w-32 h-32",children:[e.jsx("div",{className:"absolute w-32 h-32 bg-black/40"}),e.jsx("img",{src:"/del-loader.gif"})]}):e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"absolute -right-1 -top-2",children:e.jsx("div",{onClick:a=>Be(a,s),className:"flex justify-end w-full bg-white rounded-full",children:e.jsx(ht,{className:"text-red-500 text-lg shadow-xl rounded-full cursor-pointer"})})}),t.file==="image"?e.jsx("img",{src:t.data,className:"w-32 h-32"}):null,t.file==="video"&&t.type==="url"?e.jsx(R,{thumbnail:t.preview,icon:"text-5xl",frameId:`frame-${s}-${t.data}`,divId:`${s}-wrapper-${t.data}`,src:t.data,title:t.data,style:"w-32 h-32"}):null,t.file==="video"&&t.type==="upload"?e.jsx("video",{src:t.data,className:"w-32 h-32",controls:!0}):null]})},s)):e.jsx("div",{children:e.jsx("img",{src:"/not-found.webp",className:"w-28 h-28"})})})]})]}),parent:"w-full [&>div]:py-4 [&>div]:px-6 [&>div]:border [&>div]:border-b33 [&>div]:rounded-xl h-auto border-0",icon:"text-xl",textStyle:"font-bold text-sm",child:"justify-center w-full [&>p]:text-sm !mt-0"}),e.jsx(j,{title:"Product Tags",answer:e.jsx("div",{className:"h-52 overflow-x-hidden overflow-y-scroll px-2 py-2  border-[1px] border-[rgba(0,0,0,0.15)] rounded-lg",children:e.jsx("div",{className:"flex flex-wrap gap-y-2 gap-x-5 my-5 ",children:r.tags.length>0?r.tags.map((t,s)=>e.jsx(e.Fragment,{children:t.el?e.jsx(Je,{id:t.id,name:t.el,selected:t.selected}):e.jsxs("div",{onClick:a=>te(a,t.id),className:`flex items-center cursor-pointer hover:shadow-md space-x-1 border-[1px] ${t.selected?"border-[1px] border-b6 ":"border-[1px] border-[rgba(0,0,0,0.15)]"} rounded-md px-3 py-2 w-fit h-fit`,children:[t.icon!==""?e.jsx("img",{src:`/tags/${t.icon}.png`,className:"h-6 w-6"}):null,e.jsx("span",{children:e.jsx("h5",{className:"text-[10px] font-medium",children:t.name})})]},s)})):e.jsx("div",{className:"flex w-full h-full justify-center items-center",children:e.jsx("img",{src:"/not-found.webp",className:"w-28 h-28"})})})}),parent:"w-full [&>div]:py-4 [&>div]:px-6 [&>div]:border [&>div]:border-b33 [&>div]:rounded-xl h-auto border-0",icon:"text-xl",textStyle:"font-bold text-sm",child:"justify-center w-full [&>p]:text-sm !mt-0"}),e.jsx(j,{title:"Description",answer:e.jsx(ye,{state:r,setState:o,property:"description"}),parent:"w-full [&>div]:py-4 [&>div]:px-6 [&>div]:border [&>div]:border-b33 [&>div]:rounded-xl h-auto border-0",icon:"text-xl",textStyle:"font-bold text-sm",child:"justify-center w-full [&>p]:text-sm !mt-0"}),e.jsx(j,{title:"Specification",answer:e.jsx(ye,{state:r,setState:o,property:"specification"}),parent:"w-full [&>div]:py-4 [&>div]:px-6 [&>div]:border [&>div]:border-b33 [&>div]:rounded-xl h-auto border-0",icon:"text-xl",textStyle:"font-bold text-sm",child:"justify-center w-full [&>p]:text-sm !mt-0"}),e.jsx(j,{title:"Delivery Info",answer:e.jsx(ye,{state:r,setState:o,property:"deliveryInfo"}),parent:"w-full [&>div]:py-4 [&>div]:px-6 [&>div]:border [&>div]:border-b33 [&>div]:rounded-xl h-auto border-0",icon:"text-xl",textStyle:"font-bold text-sm",child:"justify-center w-full [&>p]:text-sm !mt-0"}),e.jsx(j,{title:"Product Seo",answer:e.jsxs("div",{className:"flex flex-col space-y-2 w-full",children:[e.jsx(h,{width:"full",name:"title",title:"Meta Title",type:"text",value:r.metaTitle,onChange:t=>m(t,"metaTitle"),error:!!(u&&u.includes("Product Title is Required!")),errormessage:"Product Title is Required!",placeholder:"Enter Meta Title"}),e.jsx(De,{title:"Meta Description",value:r.metaDescription,onChange:t=>m(t,"metaDescription"),placeholder:"Write Meta Description Here.."}),e.jsx("h5",{className:"text-xs font-semibold",children:"Meta Keywords"}),e.jsx("div",{className:"flex flex-wrap w-full py-3 px-2 rounded-xl border-[1px] borders-[0,0,0,0,0.15]",children:e.jsxs("div",{className:"flex flex-wrap gap-y-2 items-center gap-x-2 w-full h-auto ",children:[r.metaKeywords.map((t,s)=>e.jsxs("span",{className:"flex items-center bg-b6 text-sm px-2 py-1 text-white rounded-2xl",children:[t,e.jsx(yt,{onClick:a=>tt(a,s),className:"text-white bg-red-500 ml-1 text-xs cursor-pointer rounded-full"})]},s)),e.jsx("div",{}),e.jsx("input",{ref:ne,placeholder:"Hit Space To Insert",value:ce,onKeyDown:t=>et(t),onChange:t=>qe(t.target.value),className:"border-none outline-none mx-5 text-sm"})]})})]}),parent:"w-full [&>div]:py-4 [&>div]:px-6 [&>div]:border [&>div]:border-b33 [&>div]:rounded-xl h-auto border-0",icon:"text-xl",textStyle:"font-bold text-sm",child:"justify-center w-full [&>p]:text-sm !mt-0"}),e.jsx("button",{type:"submit",className:"flex justify-center self-center items-center cursor-pointer rounded-md py-1 w-3/2 bg-b3",children:$e?e.jsx("img",{src:"/loader-bg.gif",className:"w-8"}):e.jsxs("a",{className:"flex items-center text-center  w-fit px-4 py-1 rounded-md text-white font-semibold",children:[e.jsx("span",{className:"text-xs",children:"Update"}),e.jsx(xt,{className:"text-2xl"})]})})]})})]})};export{Zt as default};
