import{p as ue,q as u,c4 as $,bv as F,r as i,V as vt,u as Nt,j as e,a7 as St,bw as xe,bi as C,bx as b,by as Le,bz as me,ao as y,bA as Ke,bd as Ft,aM as h,bB as g,af as Oe,bC as Ct,bD as Tt,f as Rt,a6 as kt,w as p}from"./index-c6191483.js";import{L as Pt}from"./Loader2-c971e829.js";import{b as It}from"./index.esm-bb1ccc88.js";import{f as qt,u as L,e as pe,i as Dt,z as Vt}from"./admin-d4f2b721.js";import{G as Mt}from"./category-c8762d7e.js";import{T as Et}from"./TextInputSuggestion-ff0f9482.js";import{I as K}from"./Ifram-c0063f63.js";import{B as fe}from"./BlogEditor-f59d6ddd.js";import{J as O}from"./TextTransform-2d0a7ae4.js";const $t=ue().shape({productType:u().required("Product Type is Required!"),title:u().required("Title is Required!"),slug:u().required("Slug is Required!"),category:u().required("Category is Required!"),feature:u(),type:u(),color:u(),brand:u(),fuelType:u(),regPrice:$().required("Regular Price is Required!"),salePrice:$(),rating:$().required("Rating is Required!"),stock:$().required("Stock is Required!"),modelNo:u().required("Model No is Required!"),itemId:u().required("Item Id is Required!"),keyFeatures:F().required("key Features is Required!").min(0),featureVideo:ue().required("Feature Video is Required!"),threeSixty:ue().required("360 Video is Required!"),media:F().required("Product Media is Required!"),bulletDescription:F().required("Bullet Description is Required!"),tags:F().required("Product Tags is Required!"),description:u().required("Description is Required!"),specification:u().required("Specification is Required!"),deliveryInfo:u().required("Delivery Info is Required!"),metaTitle:u(),metaDescription:u(),metaKeywords:F()}),Ht=()=>{var $e;const[Ae,Be]=i.useState([]),[ye,Ue]=i.useState([]),[he,Je]=i.useState([]),[ge,Ge]=i.useState([]),[be,ze]=i.useState([]),[je,We]=i.useState([]),[He,A]=i.useState(!1),[Ze,B]=i.useState(!1),Qe=vt(),[we,Lt]=i.useState(Qe.slug),[r,o]=i.useState({productType:"parent",title:"",slug:"",category:"",feature:"",type:"",color:"",brand:"",fuelType:"",regPrice:"",salePrice:"",rating:"3",stock:"",modelNo:"",itemId:"",keyFeatures:[],featureVideo:{type:"",data:""},threeSixty:{type:"",data:""},media:[],metaTitle:"",metaDescription:"",metaKeywords:[],tags:"",bulletDescription:[]}),[U,ve]=i.useState(""),[J,Ne]=i.useState(""),[G,Se]=i.useState(""),[Fe,Xe]=i.useState(["Parent","Variant"]),[x,Ce]=i.useState([]),j=(t,s,a,l)=>{if(s.length>0){let d=s[0].sectionItemsId.filter(ne=>ne.title.toLowerCase().replace(/\s/g,"-")!==l);const n=[{title:O.capitalizeWords(l.replace(/\-/g," "))},...d];t(n);let ce=l.toLowerCase().replace(/\-/g," ");o({...r,[a]:ce})}};i.useEffect(()=>{(async()=>{B(!0);const s=await kt({slug:we}),a=await Mt();if(s.status===200&&a.status===200){const l=await qt({categorySlug:s.data.product.category});l.status===200&&(j(Je,l.data.features,"feature",s.data.product.feature),j(Ge,l.data.types,"type",s.data.product.type),j(ze,l.data.colors,"color",s.data.product.color),j(Ue,l.data.brands,"brand",s.data.product.brand),j(We,l.data.fuelTypes,"fuelType",s.data.product.fuelType));const d=a.data.categories.filter(S=>S.slug!==s.data.product.category),n=[O.Cap1Char(s.data.product.category),...d];Be(n);const ce=Fe.filter(S=>S.toLocaleLowerCase()!==s.data.product.productType),ne=[O.Cap1Char(s.data.product.productType),...ce];Xe(ne);const jt=s.data.product.metaKeywords.split(", ").map(S=>S.trim()),wt={productType:s.data.product.productType,title:s.data.product.title,slug:s.data.product.slug,category:s.data.product.category,feature:s.data.product.feature,type:s.data.product.type,color:s.data.product.color,brand:s.data.product.brand,fuelType:s.data.product.fuelType,regPrice:s.data.product.regPrice,salePrice:s.data.product.salePrice,lowPrice:s.data.product.lowPrice,highPrice:s.data.product.highPrice,rating:s.data.product.rating,stock:s.data.product.stock,modelNo:s.data.product.modelNo,itemId:s.data.product.itemId,keyFeatures:s.data.product.keyFeatures,featureVideo:s.data.product.featureVideo,threeSixty:s.data.product.threeSixty,media:s.data.product.media,description:s.data.product.description,specification:s.data.product.specification,deliveryInfo:s.data.product.deliveryInfo,metaTitle:s.data.product.metaTitle,metaDescription:s.data.product.metaDescription,metaKeywords:jt,tags:s.data.product.tags,bulletDescription:s.data.product.bulletDescription};ve(s.data.product.description),Ne(s.data.product.specification),Se(s.data.product.deliveryInfo),o(wt),B(!1)}else B(!1)})()},[]);const[T,w]=i.useState(""),[Te,z]=i.useState(!1),[Ye,W]=i.useState(!1),[R,H]=i.useState(""),[k,P]=i.useState(""),[Re,ke]=i.useState(!1),[Pe,I]=i.useState(!1),[_e,Z]=i.useState(""),[q,D]=i.useState(""),Q=i.useRef(null),X=i.useRef(null),Y=i.useRef(null),V=async(t,s,a)=>{if(s==="image")if(a==="upload"){const l=t.target.files[0];if(l){I(!0);const d=new FormData;d.append("media",l),d.append("location","product/images/");const n=await L(d);n.status===200?(I(!1),o({...r,media:[...r.media,{file:s,type:a,data:n.data.url}]}),P(""),Q.current.value=""):(I(!1),P(""),p(n.data.message,"error"))}}else k!==""&&(o({...r,media:[...r.media,{file:s,type:a,data:k,preview:k}]}),P(""));else if(s==="video")if(a==="url"&&q!==""){const d=`https://img.youtube.com/vi/${q.split("/").pop()}/mqdefault.jpg`;o({...r,media:[...r.media,{file:s,type:a,data:q.replace("youtu.be/","youtube.com/embed/"),preview:d}]}),D("")}else{const l=t.target.files[0];if(l){ke(!0);const d=new FormData;d.append("media",l),d.append("location","product/videos/");const n=await L(d);n.status===200?(ke(!1),o({...r,media:[...r.media,{file:s,type:a,data:n.data.url}]}),D(""),X.current.value=""):(I(!1),D(""),p(n.data.message,"error",1e3))}}},et=async(t,s)=>{const a=r.media.filter((d,n)=>n===s),l=r.media.filter((d,n)=>n!==s);if(a.length&&a[0].type==="upload"){Z(s);const d=await pe({url:a[0].data});d.status===200?(o({...r,media:[...l]}),Z(""),p(d.data.msg,"success",1e3)):(Z(""),p(d.data.message,"error",1e3))}else o({...r,media:[...l]})},_=(t,s)=>{t.preventDefault();const a=tags.map(l=>l.id===s?{...l,selected:!l.selected}:l);o({...r,tags:JSON.stringify(a)})},tt=({id:t,name:s,selected:a})=>e.jsxs(e.Fragment,{children:[s==="top-refrigerator-bottom-freezer"?e.jsxs("div",{onClick:l=>_(l,t),className:`flex flex-col hover:shadow-md cursor-pointer items-center border-[1px] ${a?"border-b6":"border-[rgba(0,0,0,0.15)]"} rounded-md px-2 py-2 w-fit h-fit`,children:[e.jsx("h5",{className:"text-[9px] font-medium",children:"TOP REFRIGERAOTR"}),e.jsx("span",{className:"flex h-[1px] w-full bg-[rgba(0,0,0,0.15)]"}),e.jsx("h5",{className:"text-[9px] font-medium",children:"BOTTOM FREEZER"})]}):null,s==="top-freezer-bottom-refrigerator"?e.jsxs("div",{onClick:l=>_(l,t),className:`flex flex-col hover:shadow-md cursor-pointer items-center border-[1px] ${a?"border-b6":"border-[rgba(0,0,0,0.15)]"} rounded-md px-2 py-2 w-fit h-fit`,children:[e.jsx("h5",{className:"text-[9px] font-medium",children:"TOP FREEZER"}),e.jsx("span",{className:"flex h-[1px] w-full bg-[rgba(0,0,0,0.15)]"}),e.jsx("h5",{className:"text-[9px] font-medium",children:"BOTTOM REFRIGERAOTR"})]}):null]}),st=async t=>{let s={type:"",data:""};if(r.featureVideo.type==="url")o({...r,featureVideo:s});else{W(!0);const a=await pe({url:r.featureVideo.data});a.status===200?(o({...r,featureVideo:s}),W(!1),p(a.data.msg,"success",1e3)):(W(!1),p(a.data.message,"error",1e3))}},Ie=async(t,s)=>{if(s==="upload"){t.preventDefault(),z(!0),w("");const a=t.target.files[0];if(a){M(!0);const l=new FormData;l.append("media",a),l.append("location","product/featureVideos/");const d=await L(l);d.status===200?(z(!1),o({...r,featureVideo:{type:"upload",data:d.data.url}}),w("")):(z(!1),w(""),p(d.data.message,"error",1e3))}}else if(s==="url")if(T==="")o({...r,featureVideo:{type:"",data:"",prevImg:""}});else{const l=`https://img.youtube.com/vi/${T.split("/").pop()}/mqdefault.jpg`;o({...r,featureVideo:{type:"url",data:T.replace("youtu.be/","youtube.com/embed/"),prevImg:l}}),w("")}},rt=(t,s)=>{if(s==="upload"){t.preventDefault(),H("");const a=t.target.files[0];a&&o({...r,threeSixty:{type:"upload",data:a}})}else if(s==="url"&&R!==""){const l=`https://img.youtube.com/vi/${R.split("/").pop()}/mqdefault.jpg`;o({...r,threeSixty:{type:"url",data:R.replace("youtu.be/","youtube.com/embed/"),prevImg:l}}),H("")}},[at,v]=i.useState(!1),[ee,te]=i.useState(""),[se,re]=i.useState(""),[c,f]=i.useState({file:"",type:"",data:"",preview:""}),[qe,ae]=i.useState(""),[le,ie]=i.useState(""),[lt,M]=i.useState(!1),De=i.useRef(null),Ve=i.useRef(null),E=async(t,s,a)=>{if(a==="image")if(s==="upload"){const l=t.target.files[0];l&&(f({file:a,type:s,data:l,preview:window.URL.createObjectURL(l)}),ae(""))}else f({file:a,type:s,data:qe,preview:""}),ae("");else if(a==="video")if(s==="url"){const d=`https://img.youtube.com/vi/${le.split("/").pop()}/mqdefault.jpg`;f({file:a,type:s,data:le.replace("youtu.be/","youtube.com/embed/"),prevImg:d}),ie("")}else{const l=t.target.files[0];l&&(f({file:a,type:s,data:l}),ie(""))}},it=async()=>{if(c.type==="upload"){M(!0);const t=new FormData;t.append("media",c.data),t.append("location",`product/${c.file}s/`);const s=await L(t);if(s.status===200){const a={title:ee,description:se,media:{...c,data:s.data.url}};o({...r,keyFeatures:[...r.keyFeatures,a]}),f({file:"",type:"",data:"",preview:""}),te(""),re(""),M(!1),v(!1)}else M(!1),v(!1),p(s.data.message,"error",1e3)}else{const t={title:ee,description:se,media:{...c}};o({...r,keyFeatures:[...r.keyFeatures,t]}),f({file:"",type:"",data:"",preview:""}),te(""),re(""),v(!1)}},[dt,ot]=i.useState(null),ct=async(t,s)=>{t.preventDefault();const a=r.keyFeatures.filter((d,n)=>n!==s),l=r.keyFeatures.filter((d,n)=>n===s);if(l[0].media.type!=="upload")o({...r,keyFeatures:[...a]});else{ot(s);const d=await pe({url:l[0].media.data});d.status===200?(o({...r,keyFeatures:[...a]}),p(d.data.msg,"success",1e3)):p(d.data.message,"error",1e3)}},[de,Me]=i.useState(""),oe=i.useRef(),nt=t=>{t.key===" "&&de.length>0&&(o({...r,metaKeywords:[...r.metaKeywords,de]}),setTimeout(()=>{Me(""),oe.current.focus(),oe.current.setSelectionRange(0,0)},0))},ut=(t,s)=>{t.preventDefault();const a=r.metaKeywords.filter((l,d)=>d!==s);o({...r,metaKeywords:[...a]})},[xt,mt]=i.useState([]),pt=async()=>{const t=await Dt({category:r.category});console.log(t),t.status===200&&mt(t.data.allModelNos)};i.useEffect(()=>{r.category!==""&&pt()},[r.category]);const ft=Nt(),yt=async t=>{t.preventDefault(),A(!0);try{await $t.validate({...r,description:U,specification:J,deliveryInfo:G},{abortEarly:!1})}catch(l){if(l){let d=l.errors;Ce(d),d.forEach(n=>{p(n,"error",1e3)})}else Ce([])}const s={pSlug:we,productType:r.productType,title:r.title,slug:r.slug,category:r.category,feature:r.feature,type:r.type,color:r.color,brand:r.brand,fuelType:r.fuelType,regPrice:parseFloat(r.regPrice),salePrice:parseFloat(r.salePrice),rating:parseFloat(r.rating),stock:parseFloat(r.stock),modelNo:r.modelNo,itemId:r.itemId,metaKeywords:JSON.stringify(r.metaKeywords),keyFeatures:JSON.stringify(r.keyFeatures),featureVideo:JSON.stringify(r.featureVideo),threeSixty:JSON.stringify(r.threeSixty),media:JSON.stringify(r.media),bulletDescription:JSON.stringify(r.bulletDescription),tags:JSON.stringify(r.tags),description:U,specification:J,deliveryInfo:G,metaTitle:r.metaTitle,metaDescription:r.metaDescription},a=await Vt(s);a.status===200?(A(!1),p(a.data.msg,"success",1e3),ft("/admin/manage-products")):(A(!1),p(a.data.message,"error",1e3))},m=(t,s)=>{const{value:a}=t.target;o({...r,[s]:a})},ht=t=>{o({...r,title:t.target.value,slug:t.target.value.toLowerCase().replace(/\s/g,"-")})},[N,Ee]=i.useState(""),gt=t=>{t.preventDefault(),(N==null?void 0:N.length)>0&&(o({...r,bulletDescription:[...r==null?void 0:r.bulletDescription,N]}),Ee(""))},bt=(t,s)=>{var l,d;t.preventDefault();const a=[...(l=r.bulletDescription)==null?void 0:l.slice(0,s),...(d=r.bulletDescription)==null?void 0:d.slice(s+1)];o({...r,bulletDescription:a})};return e.jsxs(e.Fragment,{children:[e.jsx(St,{state:at,setState:v,children:e.jsxs("div",{className:"flex flex-col items-center h-auto rounded-md w-11/12",children:[e.jsx("h4",{className:"pb-4 font-bold",children:"Create Product Feature"}),e.jsxs("div",{className:"flex space-x-2",children:[e.jsxs("div",{className:"flex flex-col items-center justify-center border-[1px] border-[0,0,0,0,0.15] w-1/2 h-52 px-2 py-2 rounded-md",children:[e.jsx("div",{className:"relative h-full flex items-center justify-center",children:c.file==="image"?e.jsx("img",{src:c.preview!==""?c.preview:c.data,className:"h-36 rounded-md"}):e.jsx(xe,{className:"text-7xl"})}),e.jsx("div",{className:"flex items-center justify-center pt-1 space-x-2 w-full mt-2 border-t-[1px] border-[0,0,0,0,0.15]",children:c.file==="image"?e.jsx("button",{type:"button",onClick:t=>f({file:"",type:"",data:"",preview:""}),className:"flex justify-center self-center items-center cursor-pointer rounded-md w-3/2 bg-red-500",children:e.jsx("a",{className:"flex items-center text-center  w-fit px-1 py-1 rounded-md text-white font-semibold",children:e.jsx(C,{className:"text-sm"})})}):e.jsxs(e.Fragment,{children:[e.jsx("input",{type:"text",value:qe,onChange:t=>ae(t.target.value),className:"outline-none border-[1px] border-b6 rounded-lg px-2 text-xs h-6",placeholder:"Enter Image Url"}),e.jsx("button",{onClick:t=>E(t,"url","image"),type:"button",className:"flex justify-center self-center items-center cursor-pointer rounded-md w-3/2 bg-b3",children:e.jsx("a",{className:"flex items-center text-center  w-fit px-2 py-1 rounded-md text-white font-semibold",children:e.jsx(b,{className:"text-sm"})})}),e.jsx("input",{type:"file",accept:"image/*",ref:Ve,onChange:t=>E(t,"upload","image"),className:"hidden"}),e.jsx("button",{type:"button",onClick:()=>Ve.current.click(),className:"flex justify-center self-center items-center cursor-pointer rounded-md w-3/2 bg-b3",children:e.jsx("a",{className:"flex items-center text-center  w-fit px-2 py-1 rounded-md text-white font-semibold",children:e.jsx(Le,{className:"text-sm"})})})]})})]}),e.jsx("div",{className:"flex h-full justify-center items-center font-semibold",children:e.jsx("h5",{children:"OR"})}),e.jsxs("div",{className:"flex flex-col items-center justify-center border-[1px] border-[0,0,0,0,0.15] w-1/2 h-52 px-2 py-2 rounded-md",children:[e.jsxs("div",{className:"h-full flex items-center justify-center",children:[c.file!=="video"?e.jsx(xe,{className:"text-7xl"}):null,c.file==="video"&&c.type==="url"?e.jsx(K,{thumbnail:c.prevImg,title:c.data,divId:`media-video-wrapper-${c.type}`,frameId:`media-video-${c.type}`,src:c.data,icon:"text-5xl",style:"h-36 w-11/12 rounded-md"}):null,c.file==="video"&&c.type==="upload"?e.jsx("div",{children:e.jsx("h5",{children:c.data.name})}):null]}),e.jsx("div",{className:"flex items-center justify-center pt-1 space-x-2 w-full mt-2 border-t-[1px] border-[0,0,0,0,0.15]",children:c.file==="video"?e.jsx("button",{type:"button",onClick:t=>f({file:"",type:"",data:"",preview:""}),className:"flex justify-center self-center items-center cursor-pointer rounded-md w-3/2 bg-red-500",children:e.jsx("a",{className:"flex items-center text-center  w-fit px-1 py-1 rounded-md text-white font-semibold",children:e.jsx(C,{className:"text-sm"})})}):e.jsxs(e.Fragment,{children:[e.jsx("input",{type:"text",value:le,onChange:t=>ie(t.target.value.replace("youtu.be/","youtube.com/embed/")),className:"outline-none border-[1px] border-b6 rounded-lg px-2 text-xs h-6",placeholder:"Enter Iframe Url"}),e.jsx("button",{onClick:t=>E(t,"url","video"),type:"button",className:"flex justify-center self-center items-center cursor-pointer rounded-md w-3/2 bg-b3",children:e.jsx("a",{className:"flex items-center text-center  w-fit px-2 py-1 rounded-md text-white font-semibold",children:e.jsx(b,{className:"text-sm"})})}),e.jsx("input",{type:"file",accept:"video/*",ref:De,onChange:t=>E(t,"upload","video"),className:"hidden"}),e.jsx("button",{type:"button",onClick:()=>De.current.click(),className:"flex justify-center self-center items-center cursor-pointer rounded-md w-3/2 bg-b3",children:e.jsx("a",{className:"flex items-center text-center  w-fit px-2 py-1 rounded-md text-white font-semibold",children:e.jsx(me,{className:"text-sm"})})})]})})]})]}),e.jsxs("div",{className:"flex flex-col space-y-2 items-center px-2 mt-2 w-full",children:[e.jsx(y,{width:"full",value:ee,onChange:t=>te(t.target.value),placeholder:"Enter Feature Title"}),e.jsx(Ke,{value:se,onChange:t=>re(t.target.value),placeholder:"Write Feature Description Here.."}),lt?e.jsx("button",{type:"button",className:"flex justify-center self-center items-center cursor-pointer rounded-md w-3/2 bg-b3",children:e.jsx("a",{className:"flex items-center text-center  w-fit px-3 py-2 rounded-md text-white font-semibold text-xs",children:e.jsx("img",{src:"/loader-bg.gif",className:"w-5"})})}):e.jsx("button",{type:"button",onClick:it,className:"flex justify-center self-center items-center cursor-pointer rounded-md w-3/2 bg-b3",children:e.jsx("a",{className:"flex items-center text-center  w-fit px-3 py-2 rounded-md text-white font-semibold text-xs",children:"Create"})})]})]})}),Ze?e.jsx(Pt,{}):e.jsx(Ft,{children:e.jsxs("form",{onSubmit:yt,encType:"multipart/form-data",className:"flex flex-col justify-center space-y-5 w-full py-10",children:[e.jsxs("h5",{className:"font-semibold text-center text-2xl",children:[O.Cap1Char(r.productType)," Product"]}),e.jsxs("div",{className:"flex items-center space-x-5 w-full",children:[e.jsx(y,{name:"title",title:"Title",iscompulsory:"true",type:"text",value:r.title,onChange:t=>ht(t),error:!!(x&&x.includes("Title is Required!")),errormessage:"Title is Required!",placeholder:"Enter Product Title"}),e.jsx(y,{name:"slug",readOnly:!0,title:"Slug",iscompulsory:"true",type:"text",value:r.slug,error:!!(x&&x.includes("Product Slug is Required!")),errormessage:"Slug is Required!",placeholder:"Slug is Required!"})]}),e.jsxs("div",{className:"flex space-x-5",children:[e.jsx(h,{name:"categor",title:"Product Type",iscompulsory:"true",onChange:t=>m(t,"productType"),options:Fe}),e.jsx(h,{name:"categor",title:"Product Category",iscompulsory:"true",onChange:t=>m(t,"category"),options:Ae})]}),e.jsxs("div",{className:"flex space-x-5 items-center w-full",children:[he.length>0?e.jsx(h,{name:"categor",title:"Product Feature",iscompulsory:"true",onChange:t=>m(t,"feature"),options:he}):null,ge.length>0?e.jsx(h,{name:"categor",title:"Product Type",iscompulsory:"true",onChange:t=>m(t,"type"),options:ge}):null,be.length>0?e.jsx(h,{name:"categor",title:"Product Color",iscompulsory:"true",onChange:t=>m(t,"color"),options:be}):null,je.length>0?e.jsx(h,{name:"categor",title:"Product Fuel Type",iscompulsory:"true",onChange:t=>m(t,"fuelType"),options:je}):null,ye.length>0?e.jsx(h,{name:"categor",title:"Product Brand",iscompulsory:"true",onChange:t=>m(t,"brand"),options:ye}):null]}),e.jsxs("div",{className:"flex items-center space-x-5 w-full",children:[e.jsx(y,{name:"regPrice",title:"Regular Price",iscompulsory:"true",type:"text",value:r.regPrice,onChange:t=>m(t,"regPrice"),error:!!(x&&x.includes("Regular Price is Required!")),errormessage:"Regular Price is Required!",placeholder:"Regular Price is Required!"}),e.jsx(y,{name:"salePrice",title:"Sale Price",iscompulsory:"false",type:"text",value:r.salePrice,onChange:t=>m(t,"salePrice"),error:!!(x&&x.includes("Sale Price is Required!")),errormessage:"Sale Price is Required!",placeholder:"Sale Price is Required!"}),e.jsx(y,{name:"stock",title:"Stock",iscompulsory:"true",type:"text",value:r.stock,onChange:t=>m(t,"stock"),error:!!(x&&x.includes("Stock is Required!")),errormessage:"Stock is Required!",placeholder:"Total Stock: 12"}),e.jsx(h,{name:"categor",title:"Rating",iscompulsory:"true",onChange:t=>m(t,"rating"),options:["3","4","5"]})]}),e.jsxs("div",{className:"flex items-center space-x-5 w-full",children:[e.jsx(Et,{state:r.modelNo,setState:o,values:r,suggestionList:xt,iscompulsory:"true",title:"Model No",placeholder:"#12334"}),e.jsx(y,{name:"item-id",title:"Item Id",iscompulsory:"true",type:"text",value:r.itemId,onChange:t=>m(t,"itemId"),error:!!(x&&x.includes("Item Id is Required!")),errormessage:"Item Id is Required!",placeholder:"Item Id: 234532455"})]}),e.jsx(g,{title:"Bullet Description",answer:e.jsxs("div",{className:"flex flex-col w-full",children:[e.jsxs("div",{className:"flex space-x-5 items-center mb-2",children:[e.jsx("input",{value:N,onChange:t=>Ee(t.target.value),type:"text",className:"outline-none border-[1px] rounded-lg border-b31 w-full px-2 text-sm py-1",placeholder:"Write Bullet Description"}),e.jsx("button",{type:"button",className:"bg-b6 text-white px-4 rounded-md text-sm py-1",onClick:t=>gt(t),children:"Add Bullet"})]}),e.jsx("div",{className:"w-full h-52 overflow-x-hidden overflow-y-scroll px-2 py-2  border-[1px] border-[rgba(0,0,0,0.15)] rounded-lg",children:e.jsx("ul",{className:"flex flex-col list-disc space-y-2 px-2 py-2",children:(($e=r.bulletDescription)==null?void 0:$e.length)>0?r.bulletDescription.map((t,s)=>e.jsxs("li",{className:"flex flex-wrap px-2 py-1 text-sm w-full bg-b31/30 rounded-md space-x-5 items-center",children:[e.jsx("span",{children:t}),e.jsx(Oe,{onClick:a=>bt(a,s),className:"cursor-pointer text-red-500 text-sm"})," "]},s)):e.jsx("h3",{className:"text-red-400 text-sm font-medium",children:"No Bullet Description Added!"})})})]}),parent:"w-full [&>div]:py-4 [&>div]:px-6 [&>div]:border [&>div]:border-b33 [&>div]:rounded-xl h-auto border-0",icon:"text-xl",textStyle:"font-bold text-sm",child:"justify-center w-full [&>p]:text-sm !mt-0"}),r.productType==="parent"?e.jsx(g,{title:"Main Key Features",answer:e.jsx("div",{className:"flex flex-col border-[1px] border-[0,0,0,0,0.15] rounded-md h-96 overflow-x-hidden overflow-y-scroll w-full",children:e.jsxs("div",{className:"grid grid-cols-3 mt-2 gap-x-2 gap-y-2 justify-center w-full",children:[r.keyFeatures.length>0?r.keyFeatures.map((t,s)=>e.jsxs("div",{className:"flex flex-col  py-2 items-center h-60  bg-b5 ml-2 rounded-md w-11/12",children:[e.jsxs("div",{className:"flex items-center justify-center border-[1px] border-[0,0,0,0,0.15] w-11/12 h-32 px-2 py-2 rounded-md",children:[t.media.file==="image"?e.jsx("img",{src:t.media.data,className:"h-28 rounded-md"}):null,t.media.file==="video"&&t.media.type==="url"?e.jsx(K,{thumbnail:t.media.prevImg,frameId:`${s}-wrapper-${t.media.data}`,divId:`${s}-${t.media.data}`,icon:"text-5xl",src:t.media.data,style:"w-40 h-28 rounded-md"}):null,t.media.file==="video"&&t.media.type==="upload"?e.jsx("video",{src:t.media.data,className:"w-40 h-28 rounded-md "}):null]}),e.jsx("div",{className:"flex space-x-2 items-center justify-center w-full s mt-2",children:dt===s?e.jsx("button",{type:"button",className:"flex justify-center self-center items-center cursor-pointer rounded-md w-3/2 bg-red-500",children:e.jsx("a",{className:"flex items-center text-center  w-fit px-1 py-1 rounded-md text-white font-semibold",children:e.jsx("img",{src:"/loader-bg.gif",className:"w-3"})})}):e.jsx("button",{type:"button",onClick:a=>ct(a,s),className:"flex justify-center self-center items-center cursor-pointer rounded-md w-3/2 bg-red-500",children:e.jsx("a",{className:"flex items-center text-center  w-fit px-1 py-1 rounded-md text-white font-semibold",children:e.jsx(C,{className:"text-sm"})})})}),e.jsxs("div",{className:"flex flex-col px-2 mt-2 w-full",children:[e.jsx("h5",{className:"font-bold text-sm",children:t.title}),e.jsx("p",{className:"h-16 overflow-hidden text-xs ",children:t.description})]})]},s)):null,e.jsx("div",{className:"flex flex-col  justify-center py-2 items-center h-72 ml-2 rounded-md w-11/12",children:e.jsx("div",{onClick:()=>v(!0),className:"flex items-center hover:cursor-pointer shadow-xl justify-center border-[1px] border-b6 w-1/2 h-1/2 px-2 py-2 rounded-md",children:e.jsx(Ct,{className:"text-b6 text-4xl"})})})]})}),parent:"w-full [&>div]:py-4 [&>div]:px-6 [&>div]:border [&>div]:border-b33 [&>div]:rounded-xl h-auto border-0",icon:"text-xl",textStyle:"font-bold text-sm",child:" w-full [&>p]:text-sm !mt-0"}):null,e.jsx(g,{title:"Product Media",answer:e.jsxs("div",{className:"flex flex-col space-y-5",children:[e.jsxs("div",{className:"flex items-center justify-center space-x-2",children:[e.jsxs("div",{className:"flex flex-col justify-center items-center py-3 border-[1px] border-[0,0,0,0,0.15] rounded-md w-1/2",children:[e.jsx("h5",{className:"text-center font-bold text-xs mb-2",children:"Upload Features Video"}),r.featureVideo.type==="url"?e.jsx(K,{thumbnail:r.featureVideo.prevImg,title:r.featureVideo.data,icon:"text-5xl",frameId:`feature-video-wrapper-${r.featureVideo.type}`,divId:`feature-video-${r.featureVideo.type}`,src:r.featureVideo.data,style:"h-52 w-11/12 rounded-md"}):null,r.featureVideo.type==="upload"?e.jsx("video",{src:r.featureVideo.data,controls:!0,className:" w-11/12 rounded-xl"}):null,r.featureVideo.type===""&&r.featureVideo.data===""?e.jsx("div",{className:"flex items-center justify-center w-11/12 h-52 border-2 border-black rounded-lg",children:Te?e.jsx("img",{src:"/file-loader.gif",className:"w-32"}):e.jsx(xe,{className:"text-7xl"})}):null,e.jsxs("div",{className:"flex items-center justify-center pt-3 space-x-2 w-full mt-2 border-t-[1px] border-[0,0,0,0,0.15]",children:[e.jsx("input",{type:"file",accept:"video/*",ref:Y,onChange:t=>Ie(t,"upload"),className:"hidden"}),r.featureVideo.data!==""?e.jsx(e.Fragment,{children:Ye?e.jsx("button",{type:"button",className:"flex justify-center self-center items-center cursor-pointer rounded-md w-3/2 bg-red-500",children:e.jsx("a",{className:"flex items-center text-center  w-fit px-1 py-1 rounded-md text-white font-semibold",children:e.jsx("img",{src:"/loader-bg.gif",className:"w-3"})})}):e.jsx("button",{type:"button",onClick:t=>st(),className:"flex justify-center self-center items-center cursor-pointer rounded-md w-3/2 bg-red-500",children:e.jsx("a",{className:"flex items-center text-center  w-fit px-1 py-1 rounded-md text-white font-semibold",children:e.jsx(C,{className:"text-sm"})})})}):e.jsxs(e.Fragment,{children:[e.jsx("input",{type:"text",value:T,onChange:t=>w(t.target.value),className:"outline-none border-[1px] border-b6 rounded-lg px-2 text-xs h-6",placeholder:"Enter Iframe Url"}),e.jsx("button",{onClick:t=>Ie(t,"url"),type:"button",className:"flex justify-center self-center items-center cursor-pointer rounded-md w-3/2 bg-b3",children:e.jsx("a",{className:"flex items-center text-center  w-fit px-2 py-1 rounded-md text-white font-semibold",children:e.jsx(b,{className:"text-sm"})})}),e.jsx(e.Fragment,{children:Te?e.jsx("button",{type:"button",onClick:()=>Y.current.click(),className:"flex justify-center self-center items-center cursor-pointer rounded-md w-3/2 bg-b3",children:e.jsx("a",{className:"flex items-center text-center  w-fit px-2 py-1 rounded-md text-white font-semibold",children:e.jsx("img",{src:"/loader-bg.gif",className:"w-3"})})}):e.jsx("button",{type:"button",onClick:()=>Y.current.click(),className:"flex justify-center self-center items-center cursor-pointer rounded-md w-3/2 bg-b3",children:e.jsx("a",{className:"flex items-center text-center  w-fit px-2 py-1 rounded-md text-white font-semibold",children:e.jsx(me,{className:"text-sm"})})})})]})]})]}),e.jsxs("div",{className:"flex flex-col justify-center items-center py-3 border-[1px] border-[0,0,0,0,0.15] rounded-md w-1/2",children:[e.jsx("h5",{className:"text-center font-bold text-xs mb-2",children:"Insert 360 Iframe"}),r.threeSixty.type==="url"?e.jsx("iframe",{id:`360-wrapper-${r.threeSixty.type}`,src:r.threeSixty.data,className:"h-52 w-11/12 rounded-md"}):null,r.threeSixty.type===""&&r.threeSixty.data===""?e.jsx("div",{className:"flex items-center justify-center w-11/12 h-52 border-2 border-black rounded-lg",children:e.jsx(It,{className:"text-7xl"})}):null,e.jsx("div",{className:"flex items-center justify-center pt-3 space-x-2 w-full mt-2 border-t-[1px] border-[0,0,0,0,0.15]",children:r.threeSixty.data!==""?e.jsx(e.Fragment,{children:e.jsx("button",{type:"button",onClick:()=>o({...r,threeSixty:{type:"",data:""}}),className:"flex justify-center self-center items-center cursor-pointer rounded-md w-3/2 bg-red-500",children:e.jsx("a",{className:"flex items-center text-center  w-fit px-1 py-1 rounded-md text-white font-semibold",children:e.jsx(C,{className:"text-sm"})})})}):e.jsxs(e.Fragment,{children:[e.jsx("input",{type:"text",value:R,onChange:t=>H(t.target.value),className:"outline-none border-[1px] border-b6 rounded-lg px-2 text-xs h-6",placeholder:"Enter Iframe Url"}),e.jsx("button",{onClick:t=>rt(t,"url"),type:"button",className:"flex justify-center self-center items-center cursor-pointer rounded-md w-3/2 bg-b3",children:e.jsx("a",{className:"flex items-center text-center  w-fit px-2 py-1 rounded-md text-white font-semibold",children:e.jsx(b,{className:"text-sm"})})})]})})]})]}),e.jsxs("div",{className:"flex flex-col border-[1px] border-[rgba(0,0,0,0.15)] rounded-lg h-52",children:[e.jsxs("div",{className:"flex items-center space-x-2 justify-between px-2 border-b-[1px] border-b-[rgba(0,0,0,0.15)] h-10 w-full",children:[e.jsxs("div",{className:"flex items-center space-x-1",children:[e.jsx("h5",{className:"font-bold text-xs",children:"Upload Images"}),e.jsx("input",{type:"text",value:k,onChange:t=>P(t.target.value),className:"outline-none border-[1px] border-b6 rounded-lg px-2 text-xs h-6",placeholder:"Enter Image Url"}),e.jsx("button",{onClick:t=>{Pe||V(t,"image","url")},type:"button",className:"flex justify-center self-center items-center cursor-pointer rounded-md w-3/2 bg-b3",children:e.jsx("a",{className:"flex items-center text-center  w-fit px-2 py-1 rounded-md text-white font-semibold",children:e.jsx(b,{className:"text-sm"})})}),e.jsx("input",{ref:Q,onChange:t=>V(t,"image","upload"),type:"file",accept:"image/*",className:"hidden"}),Pe?e.jsx("button",{type:"button",className:"flex justify-center self-center items-center cursor-pointer rounded-md w-3/2 bg-b6",children:e.jsx("a",{className:"flex items-center text-center  w-fit px-1 py-1 rounded-md text-white font-semibold",children:e.jsx("img",{src:"/loader-bg.gif",className:"w-4"})})}):e.jsx("button",{type:"button",onClick:()=>Q.current.click(),className:"flex justify-center self-center items-center cursor-pointer rounded-md w-3/2 bg-b3",children:e.jsx("a",{className:"flex items-center text-center  w-fit px-2 py-1 rounded-md text-white font-semibold",children:e.jsx(Le,{className:"text-sm"})})})]}),e.jsxs("div",{className:"flex items-center space-x-1 border-l-[1px] pl-2 border-[rgba(0,0,0,0.15)]",children:[e.jsx("h5",{className:"font-bold text-xs",children:"Upload Video's"}),e.jsx("input",{type:"text",value:q,onChange:t=>D(t.target.value),className:"outline-none border-[1px] border-b6 rounded-lg px-2 text-xs h-6",placeholder:"Enter Video Url"}),e.jsx("button",{onClick:t=>{Re||V(t,"video","url")},type:"button",className:"flex justify-center self-center items-center cursor-pointer rounded-md w-3/2 bg-b3",children:e.jsx("a",{className:"flex items-center text-center  w-fit px-2 py-1 rounded-md text-white font-semibold",children:e.jsx(b,{className:"text-sm"})})}),e.jsx("input",{ref:X,onChange:t=>V(t,"video","upload"),type:"file",accept:"video/*",className:"hidden"}),Re?e.jsx("button",{type:"button",className:"flex justify-center self-center items-center cursor-pointer rounded-md w-3/2 bg-b6",children:e.jsx("a",{className:"flex items-center text-center  w-fit px-1 py-1 rounded-md text-white font-semibold",children:e.jsx("img",{src:"/loader-bg.gif",className:"w-4"})})}):e.jsx("button",{type:"button",onClick:()=>X.current.click(),className:"flex justify-center self-center items-center cursor-pointer rounded-md w-3/2 bg-b3",children:e.jsx("a",{className:"flex items-center text-center  w-fit px-2 py-1 rounded-md text-white font-semibold",children:e.jsx(me,{className:"text-sm"})})})]})]}),e.jsx("div",{className:`px-2 py-2 ${r.media.length>0?"flex flex-wrap gap-x-2 gap-y-2":"flex items-center justify-center"} h-full overflow-x-hidden overflow-y-scroll`,children:r.media.length>0?r.media.map((t,s)=>e.jsx("div",{className:"relative px-1 py-1 rounded-lg h-fit w-fit border-[1px] border-[rgba(0,0,0,0.15)]",children:_e===s?e.jsxs("div",{className:"relative w-32 h-32",children:[e.jsx("div",{className:"absolute w-32 h-32 bg-black/40"}),e.jsx("img",{src:"/del-loader.gif"})]}):e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"absolute -right-1 -top-2",children:e.jsx("div",{onClick:a=>et(a,s),className:"flex justify-end w-full bg-white rounded-full",children:e.jsx(Tt,{className:"text-red-500 text-lg shadow-xl rounded-full cursor-pointer"})})}),t.file==="image"?e.jsx("img",{src:t.data,className:"w-32 h-32"}):null,t.file==="video"&&t.type==="url"?e.jsx(K,{thumbnail:t.preview,icon:"text-5xl",frameId:`frame-${s}-${t.data}`,divId:`${s}-wrapper-${t.data}`,src:t.data,title:t.data,style:"w-32 h-32"}):null,t.file==="video"&&t.type==="upload"?e.jsx("video",{src:t.data,className:"w-32 h-32",controls:!0}):null]})},s)):e.jsx("div",{children:e.jsx("img",{src:"/not-found.webp",className:"w-28 h-28"})})})]})]}),parent:"w-full [&>div]:py-4 [&>div]:px-6 [&>div]:border [&>div]:border-b33 [&>div]:rounded-xl h-auto border-0",icon:"text-xl",textStyle:"font-bold text-sm",child:"justify-center w-full [&>p]:text-sm !mt-0"}),e.jsx(g,{title:"Product Tags",answer:e.jsx("div",{className:"h-52 overflow-x-hidden overflow-y-scroll px-2 py-2  border-[1px] border-[rgba(0,0,0,0.15)] rounded-lg",children:e.jsx("div",{className:"flex flex-wrap gap-y-2 gap-x-5 my-5 ",children:r.tags.length>0?r.tags.map((t,s)=>e.jsx(e.Fragment,{children:t.el?e.jsx(tt,{id:t.id,name:t.el,selected:t.selected}):e.jsxs("div",{onClick:a=>_(a,t.id),className:`flex items-center cursor-pointer hover:shadow-md space-x-1 border-[1px] ${t.selected?"border-[1px] border-b6 ":"border-[1px] border-[rgba(0,0,0,0.15)]"} rounded-md px-3 py-2 w-fit h-fit`,children:[t.icon!==""?e.jsx("img",{src:`/tags/${t.icon}.png`,className:"h-6 w-6"}):null,e.jsx("span",{children:e.jsx("h5",{className:"text-[10px] font-medium",children:t.name})})]},s)})):e.jsx("div",{className:"flex w-full h-full justify-center items-center",children:e.jsx("img",{src:"/not-found.webp",className:"w-28 h-28"})})})}),parent:"w-full [&>div]:py-4 [&>div]:px-6 [&>div]:border [&>div]:border-b33 [&>div]:rounded-xl h-auto border-0",icon:"text-xl",textStyle:"font-bold text-sm",child:"justify-center w-full [&>p]:text-sm !mt-0"}),e.jsx(g,{title:"Description",answer:e.jsx(fe,{state:U,setState:ve}),parent:"w-full [&>div]:py-4 [&>div]:px-6 [&>div]:border [&>div]:border-b33 [&>div]:rounded-xl h-auto border-0",icon:"text-xl",textStyle:"font-bold text-sm",child:"justify-center w-full [&>p]:text-sm !mt-0"}),e.jsx(g,{title:"Specification",answer:e.jsx(fe,{state:J,setState:Ne}),parent:"w-full [&>div]:py-4 [&>div]:px-6 [&>div]:border [&>div]:border-b33 [&>div]:rounded-xl h-auto border-0",icon:"text-xl",textStyle:"font-bold text-sm",child:"justify-center w-full [&>p]:text-sm !mt-0"}),e.jsx(g,{title:"Delivery Info",answer:e.jsx(fe,{state:G,setState:Se}),parent:"w-full [&>div]:py-4 [&>div]:px-6 [&>div]:border [&>div]:border-b33 [&>div]:rounded-xl h-auto border-0",icon:"text-xl",textStyle:"font-bold text-sm",child:"justify-center w-full [&>p]:text-sm !mt-0"}),e.jsx(g,{title:"Product Seo",answer:e.jsxs("div",{className:"flex flex-col space-y-2 w-full",children:[e.jsx(y,{width:"full",name:"title",title:"Meta Title",type:"text",value:r.metaTitle,onChange:t=>m(t,"metaTitle"),error:!!(x&&x.includes("Product Title is Required!")),errormessage:"Product Title is Required!",placeholder:"Enter Meta Title"}),e.jsx(Ke,{width:"full",title:"Meta Description",value:r.metaDescription,onChange:t=>m(t,"metaDescription"),placeholder:"Write Meta Description Here.."}),e.jsx("h5",{className:"text-xs font-semibold",children:"Meta Keywords"}),e.jsx("div",{className:"flex flex-wrap w-full py-3 px-2 rounded-xl border-[1px] borders-[0,0,0,0,0.15]",children:e.jsxs("div",{className:"flex flex-wrap gap-y-2 items-center gap-x-2 w-full h-auto ",children:[r.metaKeywords.map((t,s)=>e.jsxs("span",{className:"flex items-center bg-b6 text-sm px-2 py-1 text-white rounded-2xl",children:[t,e.jsx(Oe,{onClick:a=>ut(a,s),className:"text-white bg-red-500 ml-1 text-xs cursor-pointer rounded-full"})]},s)),e.jsx("div",{}),e.jsx("input",{ref:oe,placeholder:"Hit Space To Insert",value:de,onKeyDown:t=>nt(t),onChange:t=>Me(t.target.value),className:"border-none outline-none mx-5 text-sm"})]})})]}),parent:"w-full [&>div]:py-4 [&>div]:px-6 [&>div]:border [&>div]:border-b33 [&>div]:rounded-xl h-auto border-0",icon:"text-xl",textStyle:"font-bold text-sm",child:"justify-center w-full [&>p]:text-sm !mt-0"}),e.jsx("button",{type:"submit",className:"flex justify-center self-center items-center cursor-pointer rounded-md py-1 w-3/2 bg-b3",children:He?e.jsx("img",{src:"/loader-bg.gif",className:"w-8"}):e.jsxs("a",{className:"flex items-center text-center  w-fit px-4 py-1 rounded-md text-white font-semibold",children:[e.jsx("span",{className:"text-xs",children:"Update"}),e.jsx(Rt,{className:"text-2xl"})]})})]})})]})};export{Ht as default};
