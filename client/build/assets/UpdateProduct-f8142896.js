import{o as ue,p as u,c9 as L,bC as F,r as i,a2 as Nt,u as St,j as e,aH as Ft,bD as xe,bq as C,bE as b,bF as Me,bG as me,ak as y,bH as $e,bl as Ct,aL as h,bI as g,ad as Le,bJ as Tt,bK as kt,f as Rt,a5 as Pt,v as p}from"./index-182e9520.js";import{L as It}from"./Loader2-0e010bb2.js";import{b as qt}from"./index.esm-a5205313.js";import{f as Dt,u as K,e as pe,i as Vt,z as Et}from"./admin-2cb0a920.js";import{G as Mt}from"./category-da2f5c10.js";import{T as $t}from"./TextInputSuggestion-d9e941e3.js";import{I as T}from"./Ifram-cdaf2735.js";import{B as fe}from"./BlogEditor-b9b092d8.js";import{J as O}from"./TextTransform-2d0a7ae4.js";const Lt=ue().shape({productType:u().required("Product Type is Required!"),title:u().required("Title is Required!"),slug:u().required("Slug is Required!"),category:u().required("Category is Required!"),feature:u(),type:u(),color:u(),brand:u(),fuelType:u(),regPrice:L().required("Regular Price is Required!"),salePrice:L(),rating:L().required("Rating is Required!"),stock:L().required("Stock is Required!"),modelNo:u().required("Model No is Required!"),itemId:u().required("Item Id is Required!"),keyFeatures:F().required("key Features is Required!").min(0),featureVideo:ue().required("Feature Video is Required!"),threeSixty:ue().required("360 Video is Required!"),media:F().required("Product Media is Required!"),bulletDescription:F().required("Bullet Description is Required!"),tags:F().required("Product Tags is Required!"),description:u().required("Description is Required!"),specification:u().required("Specification is Required!"),deliveryInfo:u().required("Delivery Info is Required!"),metaTitle:u(),metaDescription:u(),metaKeywords:F()}),Zt=()=>{var Ve,Ee;const[Ke,Oe]=i.useState([]),[ye,Ae]=i.useState([]),[he,Be]=i.useState([]),[ge,Ue]=i.useState([]),[be,Je]=i.useState([]),[je,Ge]=i.useState([]),[He,A]=i.useState(!1),[We,B]=i.useState(!1),ze=Nt(),[we,Kt]=i.useState(ze.slug),[s,o]=i.useState({productType:"parent",title:"",slug:"",category:"",feature:"",type:"",color:"",brand:"",fuelType:"",regPrice:"",salePrice:"",rating:"3",stock:"",modelNo:"",itemId:"",keyFeatures:[],featureVideo:{type:"",data:""},threeSixty:{type:"",data:""},media:[],metaTitle:"",metaDescription:"",metaKeywords:[],tags:""}),[U,Ze]=i.useState(""),[J,Qe]=i.useState(""),[G,Xe]=i.useState(""),[ve,Ye]=i.useState(["Parent","Variant"]),[x,Ne]=i.useState([]),j=(t,r,a,l)=>{if(r.length>0){let d=r[0].sectionItemsId.filter(ne=>ne.title.toLowerCase().replace(/\s/g,"-")!==l);const n=[{title:O.capitalizeWords(l.replace(/\-/g," "))},...d];t(n);let ce=l.toLowerCase().replace(/\-/g," ");o({...s,[a]:ce})}};i.useEffect(()=>{(async()=>{B(!0);const r=await Pt({slug:we}),a=await Mt();if(r.status===200&&a.status===200){const l=await Dt({categorySlug:r.data.product.category});l.status===200&&(j(Be,l.data.features,"feature",r.data.product.feature),j(Ue,l.data.types,"type",r.data.product.type),j(Je,l.data.colors,"color",r.data.product.color),j(Ae,l.data.brands,"brand",r.data.product.brand),j(Ge,l.data.fuelTypes,"fuelType",r.data.product.fuelType));const d=a.data.categories.filter(S=>S.slug!==r.data.product.category),n=[O.Cap1Char(r.data.product.category),...d];Oe(n);const ce=ve.filter(S=>S.toLocaleLowerCase()!==r.data.product.productType),ne=[O.Cap1Char(r.data.product.productType),...ce];Ye(ne);const wt=r.data.product.metaKeywords.split(", ").map(S=>S.trim()),vt={productType:r.data.product.productType,title:r.data.product.title,slug:r.data.product.slug,category:r.data.product.category,feature:r.data.product.feature,type:r.data.product.type,color:r.data.product.color,brand:r.data.product.brand,fuelType:r.data.product.fuelType,regPrice:r.data.product.regPrice,salePrice:r.data.product.salePrice,lowPrice:r.data.product.lowPrice,highPrice:r.data.product.highPrice,rating:r.data.product.rating,stock:r.data.product.stock,modelNo:r.data.product.modelNo,itemId:r.data.product.itemId,keyFeatures:r.data.product.keyFeatures,featureVideo:r.data.product.featureVideo,threeSixty:r.data.product.threeSixty,media:r.data.product.media,description:r.data.product.description,specification:r.data.product.specification,deliveryInfo:r.data.product.deliveryInfo,metaTitle:r.data.product.metaTitle,metaDescription:r.data.product.metaDescription,metaKeywords:wt,tags:r.data.product.tags};o(vt),B(!1)}else B(!1)})()},[]);const[k,w]=i.useState(""),[Se,H]=i.useState(!1),[_e,W]=i.useState(!1),[R,z]=i.useState(""),[P,I]=i.useState(""),[Fe,Ce]=i.useState(!1),[Te,q]=i.useState(!1),[et,Z]=i.useState(""),[D,V]=i.useState(""),Q=i.useRef(null),X=i.useRef(null),Y=i.useRef(null),E=async(t,r,a)=>{if(r==="image")if(a==="upload"){const l=t.target.files[0];if(l){q(!0);const d=new FormData;d.append("media",l),d.append("location","product/images/");const n=await K(d);n.status===200?(q(!1),o({...s,media:[...s.media,{file:r,type:a,data:n.data.url}]}),I(""),Q.current.value=""):(q(!1),I(""),p(n.data.message,"error"))}}else P!==""&&(o({...s,media:[...s.media,{file:r,type:a,data:P,preview:P}]}),I(""));else if(r==="video")if(a==="url"&&D!==""){const d=`https://img.youtube.com/vi/${D.split("/").pop()}/mqdefault.jpg`;o({...s,media:[...s.media,{file:r,type:a,data:D.replace("youtu.be/","youtube.com/embed/"),preview:d}]}),V("")}else{const l=t.target.files[0];if(l){Ce(!0);const d=new FormData;d.append("media",l),d.append("location","product/videos/");const n=await K(d);n.status===200?(Ce(!1),o({...s,media:[...s.media,{file:r,type:a,data:n.data.url}]}),V(""),X.current.value=""):(q(!1),V(""),p(n.data.message,"error",1e3))}}},tt=async(t,r)=>{const a=s.media.filter((d,n)=>n===r),l=s.media.filter((d,n)=>n!==r);if(a.length&&a[0].type==="upload"){Z(r);const d=await pe({url:a[0].data});d.status===200?(o({...s,media:[...l]}),Z(""),p(d.data.msg,"success",1e3)):(Z(""),p(d.data.message,"error",1e3))}else o({...s,media:[...l]})},_=(t,r)=>{t.preventDefault();const a=tags.map(l=>l.id===r?{...l,selected:!l.selected}:l);o({...s,tags:JSON.stringify(a)})},st=({id:t,name:r,selected:a})=>e.jsxs(e.Fragment,{children:[r==="top-refrigerator-bottom-freezer"?e.jsxs("div",{onClick:l=>_(l,t),className:`flex flex-col hover:shadow-md cursor-pointer items-center border-[1px] ${a?"border-b6":"border-[rgba(0,0,0,0.15)]"} rounded-md px-2 py-2 w-fit h-fit`,children:[e.jsx("h5",{className:"text-[9px] font-medium",children:"TOP REFRIGERAOTR"}),e.jsx("span",{className:"flex h-[1px] w-full bg-[rgba(0,0,0,0.15)]"}),e.jsx("h5",{className:"text-[9px] font-medium",children:"BOTTOM FREEZER"})]}):null,r==="top-freezer-bottom-refrigerator"?e.jsxs("div",{onClick:l=>_(l,t),className:`flex flex-col hover:shadow-md cursor-pointer items-center border-[1px] ${a?"border-b6":"border-[rgba(0,0,0,0.15)]"} rounded-md px-2 py-2 w-fit h-fit`,children:[e.jsx("h5",{className:"text-[9px] font-medium",children:"TOP FREEZER"}),e.jsx("span",{className:"flex h-[1px] w-full bg-[rgba(0,0,0,0.15)]"}),e.jsx("h5",{className:"text-[9px] font-medium",children:"BOTTOM REFRIGERAOTR"})]}):null]}),rt=async t=>{let r={type:"",data:""};if(s.featureVideo.type==="url")o({...s,featureVideo:r});else{W(!0);const a=await pe({url:s.featureVideo.data});a.status===200?(o({...s,featureVideo:r}),W(!1),p(a.data.msg,"success",1e3)):(W(!1),p(a.data.message,"error",1e3))}},ke=async(t,r)=>{if(r==="upload"){t.preventDefault(),H(!0),w("");const a=t.target.files[0];if(a){M(!0);const l=new FormData;l.append("media",a),l.append("location","product/featureVideos/");const d=await K(l);d.status===200?(H(!1),o({...s,featureVideo:{type:"upload",data:d.data.url}}),w("")):(H(!1),w(""),p(d.data.message,"error",1e3))}}else if(r==="url")if(k==="")o({...s,featureVideo:{type:"",data:"",prevImg:""}});else{const l=`https://img.youtube.com/vi/${k.split("/").pop()}/mqdefault.jpg`;o({...s,featureVideo:{type:"url",data:k.replace("youtu.be/","youtube.com/embed/"),prevImg:l}}),w("")}},at=(t,r)=>{if(r==="upload"){t.preventDefault(),z("");const a=t.target.files[0];a&&o({...s,threeSixty:{type:"upload",data:a}})}else if(r==="url"&&R!==""){const l=`https://img.youtube.com/vi/${R.split("/").pop()}/mqdefault.jpg`;o({...s,threeSixty:{type:"url",data:R.replace("youtu.be/","youtube.com/embed/"),prevImg:l}}),z("")}},[lt,v]=i.useState(!1),[ee,te]=i.useState(""),[se,re]=i.useState(""),[c,f]=i.useState({file:"",type:"",data:"",preview:""}),[Re,ae]=i.useState(""),[le,ie]=i.useState(""),[it,M]=i.useState(!1),Pe=i.useRef(null),Ie=i.useRef(null),$=async(t,r,a)=>{if(a==="image")if(r==="upload"){const l=t.target.files[0];l&&(f({file:a,type:r,data:l,preview:window.URL.createObjectURL(l)}),ae(""))}else f({file:a,type:r,data:Re,preview:""}),ae("");else if(a==="video")if(r==="url"){const d=`https://img.youtube.com/vi/${le.split("/").pop()}/mqdefault.jpg`;f({file:a,type:r,data:le.replace("youtu.be/","youtube.com/embed/"),prevImg:d}),ie("")}else{const l=t.target.files[0];l&&(f({file:a,type:r,data:l}),ie(""))}},dt=async()=>{if(c.type==="upload"){M(!0);const t=new FormData;t.append("media",c.data),t.append("location",`product/${c.file}s/`);const r=await K(t);if(r.status===200){const a={title:ee,description:se,media:{...c,data:r.data.url}};o({...s,keyFeatures:[...s.keyFeatures,a]}),f({file:"",type:"",data:"",preview:""}),te(""),re(""),M(!1),v(!1)}else M(!1),v(!1),p(r.data.message,"error",1e3)}else{const t={title:ee,description:se,media:{...c}};o({...s,keyFeatures:[...s.keyFeatures,t]}),f({file:"",type:"",data:"",preview:""}),te(""),re(""),v(!1)}},[ot,ct]=i.useState(null),nt=async(t,r)=>{t.preventDefault();const a=s.keyFeatures.filter((d,n)=>n!==r),l=s.keyFeatures.filter((d,n)=>n===r);if(l[0].media.type!=="upload")o({...s,keyFeatures:[...a]});else{ct(r);const d=await pe({url:l[0].media.data});d.status===200?(o({...s,keyFeatures:[...a]}),p(d.data.msg,"success",1e3)):p(d.data.message,"error",1e3)}},[de,qe]=i.useState(""),oe=i.useRef(),ut=t=>{t.key===" "&&de.length>0&&(o({...s,metaKeywords:[...s.metaKeywords,de]}),setTimeout(()=>{qe(""),oe.current.focus(),oe.current.setSelectionRange(0,0)},0))},xt=(t,r)=>{t.preventDefault();const a=s.metaKeywords.filter((l,d)=>d!==r);o({...s,metaKeywords:[...a]})},[mt,pt]=i.useState([]),ft=async()=>{const t=await Vt({category:s.category});t.status===200&&pt(t.data.allModelNos)};i.useEffect(()=>{s.category!==""&&ft()},[s.category]);const yt=St(),ht=async t=>{t.preventDefault(),A(!0);try{await Lt.validate({...s,description:U,specification:J,deliveryInfo:G},{abortEarly:!1})}catch(l){if(l){let d=l.errors;Ne(d),d.forEach(n=>{p(n,"error",1e3)})}else Ne([])}const r={pSlug:we,productType:s.productType,title:s.title,slug:s.slug,category:s.category,feature:s.feature,type:s.type,color:s.color,brand:s.brand,fuelType:s.fuelType,regPrice:parseFloat(s.regPrice),salePrice:parseFloat(s.salePrice),lowPrice:parseFloat(s.lowPrice),highPrice:parseFloat(s.highPrice),rating:parseFloat(s.rating),stock:parseFloat(s.stock),modelNo:s.modelNo,itemId:s.itemId,metaKeywords:JSON.stringify(s.metaKeywords),keyFeatures:JSON.stringify(s.keyFeatures),featureVideo:JSON.stringify(s.featureVideo),threeSixty:JSON.stringify(s.threeSixty),media:JSON.stringify(s.media),bulletDescription:JSON.stringify(s.bullets),tags:JSON.stringify(s.tags),description:U,specification:J,deliveryInfo:G,metaTitle:s.metaTitle,metaDescription:s.metaDescription},a=await Et(r);a.status===200?(A(!1),p(a.data.msg,"success",1e3),yt("/admin/manage-products")):(A(!1),p(a.data.message,"error",1e3))},m=(t,r)=>{const{value:a}=t.target;o({...s,[r]:a})},gt=t=>{o({...s,title:t.target.value,slug:t.target.value.toLowerCase().replace(/\s/g,"-")})},[N,De]=i.useState(""),bt=t=>{t.preventDefault(),(N==null?void 0:N.length)>0&&(o({...s,bullets:[...s.bullets,N]}),De(""))},jt=(t,r)=>{var l,d;t.preventDefault();const a=[...(l=s.bullets)==null?void 0:l.slice(0,r),...(d=s.bullets)==null?void 0:d.slice(r+1)];o({...s,bullets:a})};return e.jsxs(e.Fragment,{children:[e.jsx(Ft,{state:lt,setState:v,children:e.jsxs("div",{className:"flex flex-col items-center h-auto rounded-md w-11/12",children:[e.jsx("h4",{className:"pb-4 font-bold",children:"Create Product Feature"}),e.jsxs("div",{className:"flex space-x-2",children:[e.jsxs("div",{className:"flex flex-col items-center justify-center border-[1px] border-[0,0,0,0,0.15] w-1/2 h-52 px-2 py-2 rounded-md",children:[e.jsx("div",{className:"relative h-full flex items-center justify-center",children:c.file==="image"?e.jsx("img",{src:c.preview!==""?c.preview:c.data,className:"h-36 rounded-md"}):e.jsx(xe,{className:"text-7xl"})}),e.jsx("div",{className:"flex items-center justify-center pt-1 space-x-2 w-full mt-2 border-t-[1px] border-[0,0,0,0,0.15]",children:c.file==="image"?e.jsx("button",{type:"button",onClick:t=>f({file:"",type:"",data:"",preview:""}),className:"flex justify-center self-center items-center cursor-pointer rounded-md w-3/2 bg-red-500",children:e.jsx("a",{className:"flex items-center text-center  w-fit px-1 py-1 rounded-md text-white font-semibold",children:e.jsx(C,{className:"text-sm"})})}):e.jsxs(e.Fragment,{children:[e.jsx("input",{type:"text",value:Re,onChange:t=>ae(t.target.value),className:"outline-none border-[1px] border-b6 rounded-lg px-2 text-xs h-6",placeholder:"Enter Image Url"}),e.jsx("button",{onClick:t=>$(t,"url","image"),type:"button",className:"flex justify-center self-center items-center cursor-pointer rounded-md w-3/2 bg-b3",children:e.jsx("a",{className:"flex items-center text-center  w-fit px-2 py-1 rounded-md text-white font-semibold",children:e.jsx(b,{className:"text-sm"})})}),e.jsx("input",{type:"file",accept:"image/*",ref:Ie,onChange:t=>$(t,"upload","image"),className:"hidden"}),e.jsx("button",{type:"button",onClick:()=>Ie.current.click(),className:"flex justify-center self-center items-center cursor-pointer rounded-md w-3/2 bg-b3",children:e.jsx("a",{className:"flex items-center text-center  w-fit px-2 py-1 rounded-md text-white font-semibold",children:e.jsx(Me,{className:"text-sm"})})})]})})]}),e.jsx("div",{className:"flex h-full justify-center items-center font-semibold",children:e.jsx("h5",{children:"OR"})}),e.jsxs("div",{className:"flex flex-col items-center justify-center border-[1px] border-[0,0,0,0,0.15] w-1/2 h-52 px-2 py-2 rounded-md",children:[e.jsxs("div",{className:"h-full flex items-center justify-center",children:[c.file!=="video"?e.jsx(xe,{className:"text-7xl"}):null,c.file==="video"&&c.type==="url"?e.jsx(T,{thumbnail:c.prevImg,title:c.data,divId:`media-video-wrapper-${c.type}`,frameId:`media-video-${c.type}`,src:c.data,icon:"text-5xl",style:"h-36 w-11/12 rounded-md"}):null,c.file==="video"&&c.type==="upload"?e.jsx("div",{children:e.jsx("h5",{children:c.data.name})}):null]}),e.jsx("div",{className:"flex items-center justify-center pt-1 space-x-2 w-full mt-2 border-t-[1px] border-[0,0,0,0,0.15]",children:c.file==="video"?e.jsx("button",{type:"button",onClick:t=>f({file:"",type:"",data:"",preview:""}),className:"flex justify-center self-center items-center cursor-pointer rounded-md w-3/2 bg-red-500",children:e.jsx("a",{className:"flex items-center text-center  w-fit px-1 py-1 rounded-md text-white font-semibold",children:e.jsx(C,{className:"text-sm"})})}):e.jsxs(e.Fragment,{children:[e.jsx("input",{type:"text",value:le,onChange:t=>ie(t.target.value.replace("youtu.be/","youtube.com/embed/")),className:"outline-none border-[1px] border-b6 rounded-lg px-2 text-xs h-6",placeholder:"Enter Iframe Url"}),e.jsx("button",{onClick:t=>$(t,"url","video"),type:"button",className:"flex justify-center self-center items-center cursor-pointer rounded-md w-3/2 bg-b3",children:e.jsx("a",{className:"flex items-center text-center  w-fit px-2 py-1 rounded-md text-white font-semibold",children:e.jsx(b,{className:"text-sm"})})}),e.jsx("input",{type:"file",accept:"video/*",ref:Pe,onChange:t=>$(t,"upload","video"),className:"hidden"}),e.jsx("button",{type:"button",onClick:()=>Pe.current.click(),className:"flex justify-center self-center items-center cursor-pointer rounded-md w-3/2 bg-b3",children:e.jsx("a",{className:"flex items-center text-center  w-fit px-2 py-1 rounded-md text-white font-semibold",children:e.jsx(me,{className:"text-sm"})})})]})})]})]}),e.jsxs("div",{className:"flex flex-col space-y-2 items-center px-2 mt-2 w-full",children:[e.jsx(y,{width:"full",value:ee,onChange:t=>te(t.target.value),placeholder:"Enter Feature Title"}),e.jsx($e,{value:se,onChange:t=>re(t.target.value),placeholder:"Write Feature Description Here.."}),it?e.jsx("button",{type:"button",className:"flex justify-center self-center items-center cursor-pointer rounded-md w-3/2 bg-b3",children:e.jsx("a",{className:"flex items-center text-center  w-fit px-3 py-2 rounded-md text-white font-semibold text-xs",children:e.jsx("img",{src:"/loader-bg.gif",className:"w-5"})})}):e.jsx("button",{type:"button",onClick:dt,className:"flex justify-center self-center items-center cursor-pointer rounded-md w-3/2 bg-b3",children:e.jsx("a",{className:"flex items-center text-center  w-fit px-3 py-2 rounded-md text-white font-semibold text-xs",children:"Create"})})]})]})}),We?e.jsx(It,{}):e.jsx(Ct,{children:e.jsxs("form",{onSubmit:ht,encType:"multipart/form-data",className:"flex flex-col justify-center space-y-5 w-full py-10",children:[e.jsxs("h5",{className:"font-semibold text-center text-2xl",children:[O.Cap1Char(s.productType)," Product"]}),e.jsxs("div",{className:"flex items-center space-x-5 w-full",children:[e.jsx(y,{name:"title",title:"Title",iscompulsory:"true",type:"text",value:s.title,onChange:t=>gt(t),error:!!(x&&x.includes("Title is Required!")),errormessage:"Title is Required!",placeholder:"Enter Product Title"}),e.jsx(y,{name:"slug",readOnly:!0,title:"Slug",iscompulsory:"true",type:"text",value:s.slug,error:!!(x&&x.includes("Product Slug is Required!")),errormessage:"Slug is Required!",placeholder:"Slug is Required!"})]}),e.jsxs("div",{className:"flex space-x-5",children:[e.jsx(h,{name:"categor",title:"Product Type",iscompulsory:"true",onChange:t=>m(t,"productType"),options:ve}),e.jsx(h,{name:"categor",title:"Product Category",iscompulsory:"true",onChange:t=>m(t,"category"),options:Ke})]}),e.jsxs("div",{className:"flex space-x-5 items-center w-full",children:[he.length>0?e.jsx(h,{name:"categor",title:"Product Feature",iscompulsory:"true",onChange:t=>m(t,"feature"),options:he}):null,ge.length>0?e.jsx(h,{name:"categor",title:"Product Type",iscompulsory:"true",onChange:t=>m(t,"type"),options:ge}):null,be.length>0?e.jsx(h,{name:"categor",title:"Product Color",iscompulsory:"true",onChange:t=>m(t,"color"),options:be}):null,je.length>0?e.jsx(h,{name:"categor",title:"Product Fuel Type",iscompulsory:"true",onChange:t=>m(t,"fuelType"),options:je}):null,ye.length>0?e.jsx(h,{name:"categor",title:"Product Brand",iscompulsory:"true",onChange:t=>m(t,"brand"),options:ye}):null]}),e.jsxs("div",{className:"flex items-center space-x-5 w-full",children:[e.jsx(y,{name:"regPrice",title:"Regular Price",iscompulsory:"true",type:"text",value:s.regPrice,onChange:t=>m(t,"regPrice"),error:!!(x&&x.includes("Regular Price is Required!")),errormessage:"Regular Price is Required!",placeholder:"Regular Price is Required!"}),e.jsx(y,{name:"salePrice",title:"Sale Price",iscompulsory:"false",type:"text",value:s.salePrice,onChange:t=>m(t,"salePrice"),error:!!(x&&x.includes("Sale Price is Required!")),errormessage:"Sale Price is Required!",placeholder:"Sale Price is Required!"}),e.jsx(y,{name:"stock",title:"Stock",iscompulsory:"true",type:"text",value:s.stock,onChange:t=>m(t,"stock"),error:!!(x&&x.includes("Stock is Required!")),errormessage:"Stock is Required!",placeholder:"Total Stock: 12"}),e.jsx(h,{name:"categor",title:"Rating",iscompulsory:"true",onChange:t=>m(t,"rating"),options:["3","4","5"]})]}),e.jsxs("div",{className:"flex items-center space-x-5 w-full",children:[e.jsx($t,{state:s.modelNo,setState:o,values:s,suggestionList:mt,iscompulsory:"true",title:"Model No",placeholder:"#12334"}),e.jsx(y,{name:"item-id",title:"Item Id",iscompulsory:"true",type:"text",value:s.itemId,onChange:t=>m(t,"itemId"),error:!!(x&&x.includes("Item Id is Required!")),errormessage:"Item Id is Required!",placeholder:"Item Id: 234532455"})]}),e.jsx(g,{title:"Bullet Description",answer:e.jsxs("div",{className:"flex flex-col w-full",children:[e.jsxs("div",{className:"flex space-x-5 items-center mb-2",children:[e.jsx("input",{value:N,onChange:t=>De(t.target.value),type:"text",className:"outline-none border-[1px] rounded-lg border-b31 w-full px-2 text-sm py-1",placeholder:"Write Bullet Description"}),e.jsx("button",{type:"button",className:"bg-b6 text-white px-4 rounded-md text-sm py-1",onClick:t=>bt(t),children:"Add Bullet"})]}),e.jsx("div",{className:"w-full h-52 overflow-x-hidden overflow-y-scroll px-2 py-2  border-[1px] border-[rgba(0,0,0,0.15)] rounded-lg",children:e.jsx("ul",{className:"flex flex-col list-disc space-y-2 px-2 py-2",children:((Ve=s.bullets)==null?void 0:Ve.length)>0?(Ee=s.bullets)==null?void 0:Ee.map((t,r)=>e.jsxs("li",{className:"flex flex-wrap px-2 py-1 text-sm w-full bg-b31/30 rounded-md space-x-5 items-center",children:[e.jsx("span",{children:t}),e.jsx(Le,{onClick:a=>jt(a,r),className:"cursor-pointer text-red-500 text-sm"})," "]},r)):e.jsx("h3",{className:"text-red-400 text-sm font-medium",children:"No Bullet Description Added!"})})})]}),parent:"w-full [&>div]:py-4 [&>div]:px-6 [&>div]:border [&>div]:border-b33 [&>div]:rounded-xl h-auto border-0",icon:"text-xl",textStyle:"font-bold text-sm",child:"justify-center w-full [&>p]:text-sm !mt-0"}),s.productType==="parent"?e.jsx(g,{title:"Main Key Features",answer:e.jsx("div",{className:"flex flex-col border-[1px] border-[0,0,0,0,0.15] rounded-md h-96 overflow-x-hidden overflow-y-scroll w-full",children:e.jsxs("div",{className:"grid grid-cols-3 mt-2 gap-x-2 gap-y-2 justify-center w-full",children:[s.keyFeatures.length>0?s.keyFeatures.map((t,r)=>e.jsxs("div",{className:"flex flex-col  py-2 items-center h-60  bg-b5 ml-2 rounded-md w-11/12",children:[e.jsxs("div",{className:"flex items-center justify-center border-[1px] border-[0,0,0,0,0.15] w-11/12 h-32 px-2 py-2 rounded-md",children:[t.media.file==="image"?e.jsx("img",{src:t.media.data,className:"h-28 rounded-md"}):null,t.media.file==="video"&&t.media.type==="url"?e.jsx(T,{thumbnail:t.media.prevImg,frameId:`${r}-wrapper-${t.media.data}`,divId:`${r}-${t.media.data}`,icon:"text-5xl",src:t.media.data,style:"w-40 h-28 rounded-md"}):null,t.media.file==="video"&&t.media.type==="upload"?e.jsx("video",{src:t.media.data,className:"w-40 h-28 rounded-md "}):null]}),e.jsx("div",{className:"flex space-x-2 items-center justify-center w-full s mt-2",children:ot===r?e.jsx("button",{type:"button",className:"flex justify-center self-center items-center cursor-pointer rounded-md w-3/2 bg-red-500",children:e.jsx("a",{className:"flex items-center text-center  w-fit px-1 py-1 rounded-md text-white font-semibold",children:e.jsx("img",{src:"/loader-bg.gif",className:"w-3"})})}):e.jsx("button",{type:"button",onClick:a=>nt(a,r),className:"flex justify-center self-center items-center cursor-pointer rounded-md w-3/2 bg-red-500",children:e.jsx("a",{className:"flex items-center text-center  w-fit px-1 py-1 rounded-md text-white font-semibold",children:e.jsx(C,{className:"text-sm"})})})}),e.jsxs("div",{className:"flex flex-col px-2 mt-2 w-full",children:[e.jsx("h5",{className:"font-bold text-sm",children:t.title}),e.jsx("p",{className:"h-16 overflow-hidden text-xs ",children:t.description})]})]},r)):null,e.jsx("div",{className:"flex flex-col  justify-center py-2 items-center h-72 ml-2 rounded-md w-11/12",children:e.jsx("div",{onClick:()=>v(!0),className:"flex items-center hover:cursor-pointer shadow-xl justify-center border-[1px] border-b6 w-1/2 h-1/2 px-2 py-2 rounded-md",children:e.jsx(Tt,{className:"text-b6 text-4xl"})})})]})}),parent:"w-full [&>div]:py-4 [&>div]:px-6 [&>div]:border [&>div]:border-b33 [&>div]:rounded-xl h-auto border-0",icon:"text-xl",textStyle:"font-bold text-sm",child:" w-full [&>p]:text-sm !mt-0"}):null,e.jsx(g,{title:"Product Media",answer:e.jsxs("div",{className:"flex flex-col space-y-5",children:[e.jsxs("div",{className:"flex items-center justify-center space-x-2",children:[e.jsxs("div",{className:"flex flex-col justify-center items-center py-3 border-[1px] border-[0,0,0,0,0.15] rounded-md w-1/2",children:[e.jsx("h5",{className:"text-center font-bold text-xs mb-2",children:"Upload Features Video"}),s.featureVideo.type==="url"?e.jsx(T,{thumbnail:s.featureVideo.prevImg,title:s.featureVideo.data,icon:"text-5xl",frameId:`feature-video-wrapper-${s.featureVideo.type}`,divId:`feature-video-${s.featureVideo.type}`,src:s.featureVideo.data,style:"h-52 w-11/12 rounded-md"}):null,s.featureVideo.type==="upload"?e.jsx("video",{src:s.featureVideo.data,controls:!0,className:" w-11/12 rounded-xl"}):null,s.featureVideo.type===""&&s.featureVideo.data===""?e.jsx("div",{className:"flex items-center justify-center w-11/12 h-52 border-2 border-black rounded-lg",children:Se?e.jsx("img",{src:"/file-loader.gif",className:"w-32"}):e.jsx(xe,{className:"text-7xl"})}):null,e.jsxs("div",{className:"flex items-center justify-center pt-3 space-x-2 w-full mt-2 border-t-[1px] border-[0,0,0,0,0.15]",children:[e.jsx("input",{type:"file",accept:"video/*",ref:Y,onChange:t=>ke(t,"upload"),className:"hidden"}),s.featureVideo.data!==""?e.jsx(e.Fragment,{children:_e?e.jsx("button",{type:"button",className:"flex justify-center self-center items-center cursor-pointer rounded-md w-3/2 bg-red-500",children:e.jsx("a",{className:"flex items-center text-center  w-fit px-1 py-1 rounded-md text-white font-semibold",children:e.jsx("img",{src:"/loader-bg.gif",className:"w-3"})})}):e.jsx("button",{type:"button",onClick:t=>rt(),className:"flex justify-center self-center items-center cursor-pointer rounded-md w-3/2 bg-red-500",children:e.jsx("a",{className:"flex items-center text-center  w-fit px-1 py-1 rounded-md text-white font-semibold",children:e.jsx(C,{className:"text-sm"})})})}):e.jsxs(e.Fragment,{children:[e.jsx("input",{type:"text",value:k,onChange:t=>w(t.target.value),className:"outline-none border-[1px] border-b6 rounded-lg px-2 text-xs h-6",placeholder:"Enter Iframe Url"}),e.jsx("button",{onClick:t=>ke(t,"url"),type:"button",className:"flex justify-center self-center items-center cursor-pointer rounded-md w-3/2 bg-b3",children:e.jsx("a",{className:"flex items-center text-center  w-fit px-2 py-1 rounded-md text-white font-semibold",children:e.jsx(b,{className:"text-sm"})})}),e.jsx(e.Fragment,{children:Se?e.jsx("button",{type:"button",onClick:()=>Y.current.click(),className:"flex justify-center self-center items-center cursor-pointer rounded-md w-3/2 bg-b3",children:e.jsx("a",{className:"flex items-center text-center  w-fit px-2 py-1 rounded-md text-white font-semibold",children:e.jsx("img",{src:"/loader-bg.gif",className:"w-3"})})}):e.jsx("button",{type:"button",onClick:()=>Y.current.click(),className:"flex justify-center self-center items-center cursor-pointer rounded-md w-3/2 bg-b3",children:e.jsx("a",{className:"flex items-center text-center  w-fit px-2 py-1 rounded-md text-white font-semibold",children:e.jsx(me,{className:"text-sm"})})})})]})]})]}),e.jsxs("div",{className:"flex flex-col justify-center items-center py-3 border-[1px] border-[0,0,0,0,0.15] rounded-md w-1/2",children:[e.jsx("h5",{className:"text-center font-bold text-xs mb-2",children:"Insert 360 Iframe"}),s.threeSixty.type==="url"?e.jsx(T,{icon:"text-5xl",thumbnail:s.threeSixty.prevImg,title:s.threeSixty.data,divId:`360-wrapper-${s.threeSixty.type}`,frameId:`360-video-${s.threeSixty.type}`,src:s.threeSixty.data,style:"h-52 w-11/12 rounded-md"}):null,s.threeSixty.type===""&&s.threeSixty.data===""?e.jsx("div",{className:"flex items-center justify-center w-11/12 h-52 border-2 border-black rounded-lg",children:e.jsx(qt,{className:"text-7xl"})}):null,e.jsx("div",{className:"flex items-center justify-center pt-3 space-x-2 w-full mt-2 border-t-[1px] border-[0,0,0,0,0.15]",children:s.threeSixty.data!==""?e.jsx(e.Fragment,{children:e.jsx("button",{type:"button",onClick:()=>o({...s,threeSixty:{type:"",data:""}}),className:"flex justify-center self-center items-center cursor-pointer rounded-md w-3/2 bg-red-500",children:e.jsx("a",{className:"flex items-center text-center  w-fit px-1 py-1 rounded-md text-white font-semibold",children:e.jsx(C,{className:"text-sm"})})})}):e.jsxs(e.Fragment,{children:[e.jsx("input",{type:"text",value:R,onChange:t=>z(t.target.value),className:"outline-none border-[1px] border-b6 rounded-lg px-2 text-xs h-6",placeholder:"Enter Iframe Url"}),e.jsx("button",{onClick:t=>at(t,"url"),type:"button",className:"flex justify-center self-center items-center cursor-pointer rounded-md w-3/2 bg-b3",children:e.jsx("a",{className:"flex items-center text-center  w-fit px-2 py-1 rounded-md text-white font-semibold",children:e.jsx(b,{className:"text-sm"})})})]})})]})]}),e.jsxs("div",{className:"flex flex-col border-[1px] border-[rgba(0,0,0,0.15)] rounded-lg h-52",children:[e.jsxs("div",{className:"flex items-center space-x-2 justify-between px-2 border-b-[1px] border-b-[rgba(0,0,0,0.15)] h-10 w-full",children:[e.jsxs("div",{className:"flex items-center space-x-1",children:[e.jsx("h5",{className:"font-bold text-xs",children:"Upload Images"}),e.jsx("input",{type:"text",value:P,onChange:t=>I(t.target.value),className:"outline-none border-[1px] border-b6 rounded-lg px-2 text-xs h-6",placeholder:"Enter Image Url"}),e.jsx("button",{onClick:t=>{Te||E(t,"image","url")},type:"button",className:"flex justify-center self-center items-center cursor-pointer rounded-md w-3/2 bg-b3",children:e.jsx("a",{className:"flex items-center text-center  w-fit px-2 py-1 rounded-md text-white font-semibold",children:e.jsx(b,{className:"text-sm"})})}),e.jsx("input",{ref:Q,onChange:t=>E(t,"image","upload"),type:"file",accept:"image/*",className:"hidden"}),Te?e.jsx("button",{type:"button",className:"flex justify-center self-center items-center cursor-pointer rounded-md w-3/2 bg-b6",children:e.jsx("a",{className:"flex items-center text-center  w-fit px-1 py-1 rounded-md text-white font-semibold",children:e.jsx("img",{src:"/loader-bg.gif",className:"w-4"})})}):e.jsx("button",{type:"button",onClick:()=>Q.current.click(),className:"flex justify-center self-center items-center cursor-pointer rounded-md w-3/2 bg-b3",children:e.jsx("a",{className:"flex items-center text-center  w-fit px-2 py-1 rounded-md text-white font-semibold",children:e.jsx(Me,{className:"text-sm"})})})]}),e.jsxs("div",{className:"flex items-center space-x-1 border-l-[1px] pl-2 border-[rgba(0,0,0,0.15)]",children:[e.jsx("h5",{className:"font-bold text-xs",children:"Upload Video's"}),e.jsx("input",{type:"text",value:D,onChange:t=>V(t.target.value),className:"outline-none border-[1px] border-b6 rounded-lg px-2 text-xs h-6",placeholder:"Enter Video Url"}),e.jsx("button",{onClick:t=>{Fe||E(t,"video","url")},type:"button",className:"flex justify-center self-center items-center cursor-pointer rounded-md w-3/2 bg-b3",children:e.jsx("a",{className:"flex items-center text-center  w-fit px-2 py-1 rounded-md text-white font-semibold",children:e.jsx(b,{className:"text-sm"})})}),e.jsx("input",{ref:X,onChange:t=>E(t,"video","upload"),type:"file",accept:"video/*",className:"hidden"}),Fe?e.jsx("button",{type:"button",className:"flex justify-center self-center items-center cursor-pointer rounded-md w-3/2 bg-b6",children:e.jsx("a",{className:"flex items-center text-center  w-fit px-1 py-1 rounded-md text-white font-semibold",children:e.jsx("img",{src:"/loader-bg.gif",className:"w-4"})})}):e.jsx("button",{type:"button",onClick:()=>X.current.click(),className:"flex justify-center self-center items-center cursor-pointer rounded-md w-3/2 bg-b3",children:e.jsx("a",{className:"flex items-center text-center  w-fit px-2 py-1 rounded-md text-white font-semibold",children:e.jsx(me,{className:"text-sm"})})})]})]}),e.jsx("div",{className:`px-2 py-2 ${s.media.length>0?"flex flex-wrap gap-x-2 gap-y-2":"flex items-center justify-center"} h-full overflow-x-hidden overflow-y-scroll`,children:s.media.length>0?s.media.map((t,r)=>e.jsx("div",{className:"relative px-1 py-1 rounded-lg h-fit w-fit border-[1px] border-[rgba(0,0,0,0.15)]",children:et===r?e.jsxs("div",{className:"relative w-32 h-32",children:[e.jsx("div",{className:"absolute w-32 h-32 bg-black/40"}),e.jsx("img",{src:"/del-loader.gif"})]}):e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"absolute -right-1 -top-2",children:e.jsx("div",{onClick:a=>tt(a,r),className:"flex justify-end w-full bg-white rounded-full",children:e.jsx(kt,{className:"text-red-500 text-lg shadow-xl rounded-full cursor-pointer"})})}),t.file==="image"?e.jsx("img",{src:t.data,className:"w-32 h-32"}):null,t.file==="video"&&t.type==="url"?e.jsx(T,{thumbnail:t.preview,icon:"text-5xl",frameId:`frame-${r}-${t.data}`,divId:`${r}-wrapper-${t.data}`,src:t.data,title:t.data,style:"w-32 h-32"}):null,t.file==="video"&&t.type==="upload"?e.jsx("video",{src:t.data,className:"w-32 h-32",controls:!0}):null]})},r)):e.jsx("div",{children:e.jsx("img",{src:"/not-found.webp",className:"w-28 h-28"})})})]})]}),parent:"w-full [&>div]:py-4 [&>div]:px-6 [&>div]:border [&>div]:border-b33 [&>div]:rounded-xl h-auto border-0",icon:"text-xl",textStyle:"font-bold text-sm",child:"justify-center w-full [&>p]:text-sm !mt-0"}),e.jsx(g,{title:"Product Tags",answer:e.jsx("div",{className:"h-52 overflow-x-hidden overflow-y-scroll px-2 py-2  border-[1px] border-[rgba(0,0,0,0.15)] rounded-lg",children:e.jsx("div",{className:"flex flex-wrap gap-y-2 gap-x-5 my-5 ",children:s.tags.length>0?s.tags.map((t,r)=>e.jsx(e.Fragment,{children:t.el?e.jsx(st,{id:t.id,name:t.el,selected:t.selected}):e.jsxs("div",{onClick:a=>_(a,t.id),className:`flex items-center cursor-pointer hover:shadow-md space-x-1 border-[1px] ${t.selected?"border-[1px] border-b6 ":"border-[1px] border-[rgba(0,0,0,0.15)]"} rounded-md px-3 py-2 w-fit h-fit`,children:[t.icon!==""?e.jsx("img",{src:`/tags/${t.icon}.png`,className:"h-6 w-6"}):null,e.jsx("span",{children:e.jsx("h5",{className:"text-[10px] font-medium",children:t.name})})]},r)})):e.jsx("div",{className:"flex w-full h-full justify-center items-center",children:e.jsx("img",{src:"/not-found.webp",className:"w-28 h-28"})})})}),parent:"w-full [&>div]:py-4 [&>div]:px-6 [&>div]:border [&>div]:border-b33 [&>div]:rounded-xl h-auto border-0",icon:"text-xl",textStyle:"font-bold text-sm",child:"justify-center w-full [&>p]:text-sm !mt-0"}),e.jsx(g,{title:"Description",answer:e.jsx(fe,{state:U,setState:Ze,property:"description"}),parent:"w-full [&>div]:py-4 [&>div]:px-6 [&>div]:border [&>div]:border-b33 [&>div]:rounded-xl h-auto border-0",icon:"text-xl",textStyle:"font-bold text-sm",child:"justify-center w-full [&>p]:text-sm !mt-0"}),e.jsx(g,{title:"Specification",answer:e.jsx(fe,{state:J,setState:Qe,property:"specification"}),parent:"w-full [&>div]:py-4 [&>div]:px-6 [&>div]:border [&>div]:border-b33 [&>div]:rounded-xl h-auto border-0",icon:"text-xl",textStyle:"font-bold text-sm",child:"justify-center w-full [&>p]:text-sm !mt-0"}),e.jsx(g,{title:"Delivery Info",answer:e.jsx(fe,{state:G,setState:Xe,property:"deliveryInfo"}),parent:"w-full [&>div]:py-4 [&>div]:px-6 [&>div]:border [&>div]:border-b33 [&>div]:rounded-xl h-auto border-0",icon:"text-xl",textStyle:"font-bold text-sm",child:"justify-center w-full [&>p]:text-sm !mt-0"}),e.jsx(g,{title:"Product Seo",answer:e.jsxs("div",{className:"flex flex-col space-y-2 w-full",children:[e.jsx(y,{width:"full",name:"title",title:"Meta Title",type:"text",value:s.metaTitle,onChange:t=>m(t,"metaTitle"),error:!!(x&&x.includes("Product Title is Required!")),errormessage:"Product Title is Required!",placeholder:"Enter Meta Title"}),e.jsx($e,{title:"Meta Description",value:s.metaDescription,onChange:t=>m(t,"metaDescription"),placeholder:"Write Meta Description Here.."}),e.jsx("h5",{className:"text-xs font-semibold",children:"Meta Keywords"}),e.jsx("div",{className:"flex flex-wrap w-full py-3 px-2 rounded-xl border-[1px] borders-[0,0,0,0,0.15]",children:e.jsxs("div",{className:"flex flex-wrap gap-y-2 items-center gap-x-2 w-full h-auto ",children:[s.metaKeywords.map((t,r)=>e.jsxs("span",{className:"flex items-center bg-b6 text-sm px-2 py-1 text-white rounded-2xl",children:[t,e.jsx(Le,{onClick:a=>xt(a,r),className:"text-white bg-red-500 ml-1 text-xs cursor-pointer rounded-full"})]},r)),e.jsx("div",{}),e.jsx("input",{ref:oe,placeholder:"Hit Space To Insert",value:de,onKeyDown:t=>ut(t),onChange:t=>qe(t.target.value),className:"border-none outline-none mx-5 text-sm"})]})})]}),parent:"w-full [&>div]:py-4 [&>div]:px-6 [&>div]:border [&>div]:border-b33 [&>div]:rounded-xl h-auto border-0",icon:"text-xl",textStyle:"font-bold text-sm",child:"justify-center w-full [&>p]:text-sm !mt-0"}),e.jsx("button",{type:"submit",className:"flex justify-center self-center items-center cursor-pointer rounded-md py-1 w-3/2 bg-b3",children:He?e.jsx("img",{src:"/loader-bg.gif",className:"w-8"}):e.jsxs("a",{className:"flex items-center text-center  w-fit px-4 py-1 rounded-md text-white font-semibold",children:[e.jsx("span",{className:"text-xs",children:"Update"}),e.jsx(Rt,{className:"text-2xl"})]})})]})})]})};export{Zt as default};
