import{U as Ze,r as c,p as es,q as g,j as e,a7 as Te,ao as o,aO as ne,aN as _e,v as fe,bg as ss,aS as ge,L as ze,bk as Be,cg as Me,cu as as,w as z,cv as ts,cw as rs}from"./index-9e2787ee.js";const ds=()=>{var Pe,Oe,Ee,$e,ke,Fe,Ie,Le;const Ne=Ze(),[Ue,je]=c.useState(""),[r,ye]=c.useState({}),[oe,be]=c.useState([]),ve=["pending-payment","processing","on-hold","completed","failed","cancelled","refunded"],[Ye,we]=c.useState([]),[De,Ge]=c.useState(""),[N,Ae]=c.useState(""),[d,x]=c.useState({id:"",email:"",firstName:"",lastName:"",address:"",appartment:"",city:"",country:"usa",state:"alberta",postalCode:"",phone:""}),[i,u]=c.useState({id:"",email:"",firstName:"",lastName:"",address:"",appartment:"",city:"",country:"usa",state:"alberta",postalCode:"",phone:""}),Qe=async()=>{var p,m,h,f,n,j,y,b,v,w,A,C,q,S,R,P,O,E,$,k,F,I,L,a,T,_,B,M,U,Y,D,G,Q,V,H,J,K,W,X,Z,ee,se,ae,te,re,le;const s=await as({orderNo:Ne.id});if(console.log(s),s.status===200){je(s.data.order._id),ye(s.data.order),be(s.data.order.products),Ae(s.data.order.paymentInfo);const t=ve.filter(ue=>{var de,ie;return ue!==((ie=(de=s==null?void 0:s.data)==null?void 0:de.order)==null?void 0:ie.orderStatus)}),he=[(m=(p=s==null?void 0:s.data)==null?void 0:p.order)==null?void 0:m.orderStatus,...t];we(he),x({id:(f=(h=s.data.order)==null?void 0:h.shippingAddress)==null?void 0:f._id,email:(j=(n=s.data.order)==null?void 0:n.shippingAddress)==null?void 0:j.email,firstName:(b=(y=s.data.order)==null?void 0:y.shippingAddress)==null?void 0:b.firstName,lastName:(w=(v=s.data.order)==null?void 0:v.shippingAddress)==null?void 0:w.lastName,address:(C=(A=s.data.order)==null?void 0:A.shippingAddress)==null?void 0:C.address,appartment:(S=(q=s.data.order)==null?void 0:q.shippingAddress)==null?void 0:S.appartment,city:(P=(R=s.data.order)==null?void 0:R.shippingAddress)==null?void 0:P.city,country:(E=(O=s.data.order)==null?void 0:O.shippingAddress)==null?void 0:E.country,state:(k=($=s.data.order)==null?void 0:$.shippingAddress)==null?void 0:k.state,postalCode:(I=(F=s.data.order)==null?void 0:F.shippingAddress)==null?void 0:I.postalCode,phone:(a=(L=s.data.order)==null?void 0:L.shippingAddress)==null?void 0:a.phone}),u({id:(_=(T=s.data.order)==null?void 0:T.billingAddress)==null?void 0:_._id,email:(M=(B=s.data.order)==null?void 0:B.billingAddress)==null?void 0:M.email,firstName:(Y=(U=s.data.order)==null?void 0:U.billingAddress)==null?void 0:Y.firstName,lastName:(G=(D=s.data.order)==null?void 0:D.billingAddress)==null?void 0:G.lastName,address:(V=(Q=s.data.order)==null?void 0:Q.billingAddress)==null?void 0:V.address,appartment:(J=(H=s.data.order)==null?void 0:H.billingAddress)==null?void 0:J.appartment,city:(W=(K=s.data.order)==null?void 0:K.billingAddress)==null?void 0:W.city,country:(Z=(X=s.data.order)==null?void 0:X.billingAddress)==null?void 0:Z.country,state:(se=(ee=s.data.order)==null?void 0:ee.billingAddress)==null?void 0:se.state,postalCode:(te=(ae=s.data.order)==null?void 0:ae.billingAddress)==null?void 0:te.postalCode,phone:(le=(re=s.data.order)==null?void 0:re.billingAddress)==null?void 0:le.phone})}else z(s.data.message,"error",1e3)};c.useEffect(()=>{Qe()},[Ne]);const[Ce,xe]=c.useState(!1),Ve=async s=>{var p,m,h,f,n,j,y,b,v,w,A,C,q,S,R,P,O,E,$,k,F,I,L,a,T,_,B,M,U,Y,D,G,Q,V,H,J,K,W,X,Z,ee,se,ae,te,re,le;if(!Ce){s.preventDefault(),xe(!0);const t=await ts({orderId:Ue,type:"order",status:De});if(t.status===200){xe(!1),z(t.data.msg,"success",1e3),je(t.data.order._id),ye(t.data.order),be(t.data.order.products),Ae(t.data.order.paymentInfo);const he=ve.filter(ue=>{var de,ie;return ue!==((ie=(de=t==null?void 0:t.data)==null?void 0:de.order)==null?void 0:ie.orderStatus)});we([(m=(p=t==null?void 0:t.data)==null?void 0:p.order)==null?void 0:m.orderStatus,...he]),x({id:(f=(h=t.data.order)==null?void 0:h.shippingAddress)==null?void 0:f._id,email:(j=(n=t.data.order)==null?void 0:n.shippingAddress)==null?void 0:j.email,firstName:(b=(y=t.data.order)==null?void 0:y.shippingAddress)==null?void 0:b.firstName,lastName:(w=(v=t.data.order)==null?void 0:v.shippingAddress)==null?void 0:w.lastName,address:(C=(A=t.data.order)==null?void 0:A.shippingAddress)==null?void 0:C.address,appartment:(S=(q=t.data.order)==null?void 0:q.shippingAddress)==null?void 0:S.appartment,city:(P=(R=t.data.order)==null?void 0:R.shippingAddress)==null?void 0:P.city,country:(E=(O=t.data.order)==null?void 0:O.shippingAddress)==null?void 0:E.country,state:(k=($=t.data.order)==null?void 0:$.shippingAddress)==null?void 0:k.state,postalCode:(I=(F=t.data.order)==null?void 0:F.shippingAddress)==null?void 0:I.postalCode,phone:(a=(L=t.data.order)==null?void 0:L.shippingAddress)==null?void 0:a.phone}),u({id:(_=(T=t.data.order)==null?void 0:T.billingAddress)==null?void 0:_._id,email:(M=(B=t.data.order)==null?void 0:B.billingAddress)==null?void 0:M.email,firstName:(Y=(U=t.data.order)==null?void 0:U.billingAddress)==null?void 0:Y.firstName,lastName:(G=(D=t.data.order)==null?void 0:D.billingAddress)==null?void 0:G.lastName,address:(V=(Q=t.data.order)==null?void 0:Q.billingAddress)==null?void 0:V.address,appartment:(J=(H=t.data.order)==null?void 0:H.billingAddress)==null?void 0:J.appartment,city:(W=(K=t.data.order)==null?void 0:K.billingAddress)==null?void 0:W.city,country:(Z=(X=t.data.order)==null?void 0:X.billingAddress)==null?void 0:Z.country,state:(se=(ee=t.data.order)==null?void 0:ee.billingAddress)==null?void 0:se.state,postalCode:(te=(ae=t.data.order)==null?void 0:ae.billingAddress)==null?void 0:te.postalCode,phone:(le=(re=t.data.order)==null?void 0:re.billingAddress)==null?void 0:le.phone})}else xe(!1),z(t.data.message,"error",1e3)}},He=({image:s,title:p,price:m,quantity:h})=>e.jsxs("tr",{className:"border-b border-l border-r border-b6 text-xs font-semibold",children:[e.jsx("td",{className:"whitespace-nowrap flex justify-center px-5 py-3",children:e.jsx("img",{src:s,className:"w-10"})}),e.jsx("td",{className:"whitespace-nowrap px-5 py-3",children:e.jsx(ze,{to:`/product/${p.toLowerCase().replace(/\s/g,"-")}`,className:"underline text-b6",children:p})}),e.jsxs("td",{className:"whitespace-nowrap px-5 py-3 text-b7 ",children:["$",m]}),e.jsx("td",{className:"whitespace-nowrap px-5 py-3",children:"x"}),e.jsx("td",{className:"whitespace-nowrap px-5 py-3",children:h}),e.jsxs("td",{className:"whitespace-nowrap px-5 py-3 text-red-500",children:["$",h*m]})]}),Je=({total:s,shipping:p,tax:m,grandTotal:h,coupons:f})=>e.jsx(e.Fragment,{children:e.jsxs("tr",{className:"border-b border-l border-r border-b6 text-xs",children:[e.jsx("td",{className:"px-2 py-3 font-semibold",children:e.jsx("div",{className:"flex px-2 border-[1px]",children:f==null?void 0:f.map(n=>e.jsxs(e.Fragment,{children:[n.type==="free-shipping"?e.jsxs("div",{className:"flex justify-between w-full py-1 text-xs",children:[e.jsx("span",{children:n.code}),e.jsxs("span",{children:["-$",n.previous.shipping]})]}):null,n.type==="percentage-discount"?e.jsxs("div",{className:"flex justify-between w-full py-1 text-xs",children:[e.jsx("span",{children:n.code}),e.jsxs("span",{children:["-$",n.previous.amount]})]}):null,n.type==="flat-discount"?e.jsxs("div",{className:"flex justify-between w-full py-1 text-xs",children:[e.jsx("span",{children:n.code}),e.jsxs("span",{children:["-$",n.previous.amount]})]}):null]}))})}),e.jsxs("td",{className:"px-2 py-3 font-semibold",children:["$",s]}),e.jsxs("td",{className:"px-2 py-3 font-semibold",children:["$",p]}),e.jsxs("td",{className:"px-2 py-3 font-semibold",children:["$",m]}),e.jsxs("td",{className:"px-2 py-3 font-semibold",children:["$",h]})]})}),Ke=es().shape({id:g().required("Id is Required!"),email:g().required("Email is Required!"),firstName:g().nullable(),lastName:g().required("Last Name is Required!"),address:g().required("Address is Required!"),appartment:g().nullable(),state:g().required("State is Required!"),city:g().required("City is Required!"),country:g().required("Country is Required!"),postalCode:g().required("Postal Code is Required!"),phone:g().required("Phone is Required!")}),[l,qe]=c.useState([]),[Se,ce]=c.useState(!1),[We,pe]=c.useState(!1),[Xe,me]=c.useState(!1),Re=async(s,p)=>{var m,h,f,n,j,y,b,v,w,A,C,q,S,R,P,O,E,$,k,F,I,L;s.preventDefault(),ce(!0);try{await Ke.validate(p,{abortEarly:!1});const a=await rs(p);a.status===200?(x({id:(h=(m=a==null?void 0:a.data)==null?void 0:m.address)==null?void 0:h._id,email:(n=(f=a==null?void 0:a.data)==null?void 0:f.address)==null?void 0:n.email,firstName:(y=(j=a==null?void 0:a.data)==null?void 0:j.address)==null?void 0:y.firstName,lastName:(v=(b=a==null?void 0:a.data)==null?void 0:b.address)==null?void 0:v.lastName,address:(A=(w=a==null?void 0:a.data)==null?void 0:w.address)==null?void 0:A.address,appartment:(q=(C=a==null?void 0:a.data)==null?void 0:C.address)==null?void 0:q.appartment,city:(R=(S=a==null?void 0:a.data)==null?void 0:S.address)==null?void 0:R.city,country:(O=(P=a==null?void 0:a.data)==null?void 0:P.address)==null?void 0:O.country,state:($=(E=a==null?void 0:a.data)==null?void 0:E.address)==null?void 0:$.state,postalCode:(F=(k=a==null?void 0:a.data)==null?void 0:k.address)==null?void 0:F.postalCode,phone:(L=(I=a==null?void 0:a.data)==null?void 0:I.address)==null?void 0:L.phone}),pe(!1),me(!1),ce(!1),z(a.data.msg,"success",1e3)):(ce(!1),z(a.data.message,"error",1e3))}catch(a){if(ce(!1),a){let T=a.errors;qe(T),T.forEach(_=>{z(_,"error",1e3)})}else qe([])}};return e.jsxs(e.Fragment,{children:[e.jsx(Te,{state:We,setState:pe,zindex:"z-[99]",children:e.jsxs("div",{children:[e.jsx("h3",{className:"font-semibold text-center",children:"Update Shipping Address"}),e.jsxs("div",{className:"space-y-14px [&>*]:text-b16 [&>*]:text-sm",children:[e.jsx("h3",{className:"text-sm font-medium text-b16",children:"Contact information"}),e.jsx(o,{width:"full",name:"Email",title:"Email",iscompulsory:"false",type:"text",value:d.email,onChange:s=>x({...d,email:s.target.value}),error:!!(l&&l.includes("Email is Required!")),errormessage:"Email is Required!",placeholder:"abc@gmail.com"})]}),e.jsxs("div",{className:"space-y-14px mt-8",children:[e.jsx("h3",{className:"text-lg font-medium text-b16",children:"Shipping address"}),e.jsxs("div",{className:"grid grid-cols-2 gap-3",children:[e.jsx(o,{width:"full",name:"firstName",title:"",iscompulsory:"false",type:"text",value:d.firstName,onChange:s=>x({...d,firstName:s.target.value}),error:!!(l&&l.includes("First Name is Required!")),errormessage:"First Name is Required!",placeholder:"First Name (optional)"}),e.jsx(o,{width:"full",name:"lastName",title:"",iscompulsory:"false",type:"text",value:d.lastName,onChange:s=>x({...d,lastName:s.target.value}),error:!!(l&&l.includes("Last Name is Required!")),errormessage:"Last Name is Required!",placeholder:"Last Name"}),e.jsxs("div",{className:"col-span-2 space-y-3",children:[e.jsx(o,{width:"full",name:"address",title:"",iscompulsory:"false",type:"text",value:d.address,onChange:s=>x({...d,address:s.target.value}),error:!!(l&&l.includes("Address is Required!")),errormessage:"Address is Required!",placeholder:"Address"}),e.jsx(o,{width:"full",name:"appartment",title:"",iscompulsory:"false",type:"text",value:d.appartment,onChange:s=>x({...d,apparment:s.target.value}),error:!!(l&&l.includes("Apartment, suite is Required!")),errormessage:"Apartment, suite is Required!",placeholder:"Apartment, suite, etc. (optional)"}),e.jsx(o,{width:"full",name:"city",title:"",iscompulsory:"false",type:"text",value:d.city,onChange:s=>x({...d,city:s.target.value}),error:!!(l&&l.includes("City is Required!")),errormessage:"City is Required!",placeholder:"City"}),e.jsxs("div",{className:"grid grid-cols-2 md:grid-cols-3 items-center gap-14px",children:[e.jsx(ne,{widthFull:"true",onChange:s=>x({...d,state:s.target.value}),id:"province",label:"Province",options:["Alberta"]}),e.jsx(ne,{widthFull:"true",onChange:s=>x({...d,country:s.target.value}),id:"country_region",label:"Country / region",options:["USA"]}),e.jsx("div",{className:"relative flex items-center col-span-2 md:col-span-1 [&>*]:h-full",children:e.jsx(o,{width:"full",name:"postalCode",title:"",iscompulsory:"false",type:"text",value:d.postalCode,onChange:s=>x({...d,postalCode:s.target.value}),error:!!(l&&l.includes("Postal Code is Required!")),errormessage:"Postal Code is Required!",placeholder:"Postal Code"})})]}),e.jsxs("div",{className:"relative",children:[e.jsx(o,{width:"full",name:"phone",title:"",iscompulsory:"false",type:"text",value:d.phone,onChange:s=>x({...d,phone:s.target.value}),error:!!(l&&l.includes("Phone is Required!")),errormessage:"Phone is Required!",placeholder:"Phone"}),e.jsx("div",{className:"absolute right-3 top-3",children:e.jsx(_e,{className:"text-2xl text-b3"})})]})]})]}),e.jsx("div",{className:"flex w-full justify-center",children:Se?e.jsx(fe,{style:"w-5"}):e.jsx("button",{type:"button",onClick:s=>Re(s,d),className:"bg-b6 text-white px-3 text-sm py-2 rounded-2xl",children:"Save Addresss"})})]})]})}),e.jsx(Te,{state:Xe,setState:me,zindex:"z-[99]",children:e.jsxs("div",{children:[e.jsx("h3",{className:"font-semibold text-center",children:"Update Billing Address"}),e.jsxs("div",{className:"space-y-14px [&>*]:text-b16 [&>*]:text-sm",children:[e.jsx("h3",{className:"text-sm font-medium text-b16",children:"Contact information"}),e.jsx(o,{width:"full",name:"Email",title:"Email",iscompulsory:"false",type:"text",value:i.email,onChange:s=>u({...i,email:s.target.value}),error:!!(l&&l.includes("Email is Required!")),errormessage:"Email is Required!",placeholder:"abc@gmail.com"})]}),e.jsxs("div",{className:"space-y-14px mt-8",children:[e.jsx("h3",{className:"text-lg font-medium text-b16",children:"Billing address"}),e.jsxs("div",{className:"grid grid-cols-2 gap-3",children:[e.jsx(o,{width:"full",name:"firstName",title:"",iscompulsory:"false",type:"text",value:i.firstName,onChange:s=>u({...i,firstName:s.target.value}),error:!!(l&&l.includes("First Name is Required!")),errormessage:"First Name is Required!",placeholder:"First Name (optional)"}),e.jsx(o,{width:"full",name:"lastName",title:"",iscompulsory:"false",type:"text",value:i.lastName,onChange:s=>u({...i,lastName:s.target.value}),error:!!(l&&l.includes("Last Name is Required!")),errormessage:"Last Name is Required!",placeholder:"Last Name"}),e.jsxs("div",{className:"col-span-2 space-y-3",children:[e.jsx(o,{width:"full",name:"address",title:"",iscompulsory:"false",type:"text",value:i.address,onChange:s=>u({...i,address:s.target.value}),error:!!(l&&l.includes("Address is Required!")),errormessage:"Address is Required!",placeholder:"Address"}),e.jsx(o,{width:"full",name:"appartment",title:"",iscompulsory:"false",type:"text",value:i.appartment,onChange:s=>u({...i,apparment:s.target.value}),error:!!(l&&l.includes("Apartment, suite is Required!")),errormessage:"Apartment, suite is Required!",placeholder:"Apartment, suite, etc. (optional)"}),e.jsx(o,{width:"full",name:"city",title:"",iscompulsory:"false",type:"text",value:i.city,onChange:s=>u({...i,city:s.target.value}),error:!!(l&&l.includes("City is Required!")),errormessage:"City is Required!",placeholder:"City"}),e.jsxs("div",{className:"grid grid-cols-2 md:grid-cols-3 items-center gap-14px",children:[e.jsx(ne,{widthFull:"true",onChange:s=>u({...i,state:s.target.value}),id:"province",label:"Province",options:["Alberta"]}),e.jsx(ne,{widthFull:"true",onChange:s=>u({...i,country:s.target.value}),id:"country_region",label:"Country / region",options:["USA"]}),e.jsx("div",{className:"relative flex items-center col-span-2 md:col-span-1 [&>*]:h-full",children:e.jsx(o,{width:"full",name:"postalCode",title:"",iscompulsory:"false",type:"text",value:i.postalCode,onChange:s=>u({...i,postalCode:s.target.value}),error:!!(l&&l.includes("Postal Code is Required!")),errormessage:"Postal Code is Required!",placeholder:"Postal Code"})})]}),e.jsxs("div",{className:"relative",children:[e.jsx(o,{width:"full",name:"phone",title:"",iscompulsory:"false",type:"text",value:i.phone,onChange:s=>u({...i,phone:s.target.value}),error:!!(l&&l.includes("Phone is Required!")),errormessage:"Phone is Required!",placeholder:"Phone"}),e.jsx("div",{className:"absolute right-3 top-3",children:e.jsx(_e,{className:"text-2xl text-b3"})})]})]})]}),e.jsx("div",{className:"flex w-full justify-center",children:Se?e.jsx(fe,{style:"w-5"}):e.jsx("button",{type:"button",onClick:s=>Re(s,i),className:"bg-b6 text-white px-3 text-sm py-2 rounded-2xl",children:"Save Addresss"})})]})]})}),e.jsxs(ss,{children:[e.jsxs("div",{className:"flex w-full",children:[e.jsx("div",{className:"w-full",children:e.jsxs("h3",{className:"text-base font-semibold",children:["Order # ",e.jsx("span",{className:"text-red-500",children:r.orderNo})," details"]})}),e.jsx("div",{className:"flex space-x-2 mr-4 justify-center items-center",children:e.jsx("span",{className:"bg-b6/30 text-b6 px-2 rounded-md py-1 text-xs font-semibold capitalize w-max",children:(Pe=r==null?void 0:r.orderStatus)==null?void 0:Pe.replace(/\-/g," ")})})]}),e.jsxs("div",{className:"flex space-x-3 mt-5",children:[e.jsxs("div",{className:"flex flex-col w-1/2",children:[e.jsx("h3",{className:"text-sm font-semibold mb-2",children:"Order Details"}),e.jsxs("div",{className:"flex flex-col space-y-2 px-5 py-5 rounded-lg border-[1px]",children:[e.jsxs("div",{className:"flex space-x-5",children:[e.jsxs("h3",{className:"text-xs text-gray-500",children:[e.jsx("span",{className:"text-black",children:"Order Type: "}),e.jsxs("span",{className:"capitalize",children:[" ",(Oe=r==null?void 0:r.shipping)==null?void 0:Oe.type]})]}),e.jsxs("h3",{className:"text-xs text-gray-500",children:[e.jsx("span",{className:"text-black",children:"Location: "}),e.jsxs("span",{className:"capitalize",children:[" ",(Ee=r==null?void 0:r.shipping)==null?void 0:Ee.location]})]})]}),e.jsxs("div",{className:"flex space-x-5",children:[e.jsxs("h3",{className:"text-xs text-gray-500",children:[e.jsx("span",{className:"text-black",children:"Customer IP: "}),r==null?void 0:r.customerIp]}),e.jsxs("h3",{className:"text-xs text-gray-500",children:[e.jsx("span",{className:"text-black",children:"Placed On: "}),ge(r.createdAt).format("DD MMMM YYYY")]})]}),e.jsxs("div",{className:"border-[1px] px-2 py-2 rounded-lg space-y-1",children:[e.jsxs("div",{className:"flex text-xs text-gray-500 w-full",children:[e.jsx("span",{className:"text-black w-full",children:"Customer: "}),e.jsxs("div",{className:"flex space-x-2",children:[e.jsx(ze,{to:`/admin/update-customer/${($e=r==null?void 0:r.customerId)==null?void 0:$e._id}`,className:"underline text-b6 cursor-pointer",children:"Customer Profile"}),e.jsx("a",{className:"underline text-b6 cursor-pointer",children:"View Other Orders"})]})]}),e.jsxs("h3",{className:"text-xs text-gray-500",children:[(ke=r==null?void 0:r.customerId)==null?void 0:ke.firstName," ",(Fe=r==null?void 0:r.customerId)==null?void 0:Fe.lastName," (",(Ie=r==null?void 0:r.customerId)==null?void 0:Ie.email,")"]})]}),e.jsxs("form",{onSubmit:Ve,className:"flex space-x-4 items-center",children:[e.jsx("h3",{className:"text-xs ",children:"Order Status:"}),e.jsx(ne,{height:"h-8",onChange:s=>Ge(s.target.value),textSize:"text-xs capitalize",options:Ye}),e.jsx("button",{className:"text-xs bg-b6 h-fit w-fit px-3 py-1 rounded-lg text-white",children:Ce?e.jsx(fe,{style:"w-4"}):e.jsx("span",{children:"Save"})})]})]})]}),e.jsxs("div",{className:"flex flex-col w-1/2",children:[e.jsx("h3",{className:"text-sm font-semibold mb-2",children:"Payment Details"}),e.jsxs("div",{className:"flex flex-col space-y-2 px-5 py-5 rounded-lg border-[1px]",children:[e.jsxs("h3",{className:"text-xs text-gray-500",children:[e.jsx("span",{className:"text-black",children:"Payment Method: "}),"Card"]}),e.jsxs("h3",{className:"text-xs text-gray-500",children:[e.jsx("span",{className:"text-black",children:"Paid On: "}),ge(ge.unix(N==null?void 0:N.created)).format("DD MMMM YYYY")]}),e.jsxs("h3",{className:"text-xs text-gray-500",children:[e.jsx("span",{className:"text-black",children:"Payment Intent: "}),e.jsx("a",{target:"_blank",href:`https://dashboard.stripe.com/test/payments/${N==null?void 0:N.id}`,className:"underline text-b6 cursor-pointer ",children:N==null?void 0:N.id})]})]})]})]}),e.jsxs("div",{className:"flex space-x-5 mt-5 w-full",children:[d?e.jsxs("div",{className:"flex flex-col space-y-2 w-1/2",children:[e.jsx("h3",{className:"text-sm font-semibold",children:"Shipping Address"}),e.jsxs("div",{className:"relative border-[1px] rounded-lg px-4 py-4 w-full",children:[e.jsx("button",{type:"button",onClick:()=>pe(!0),title:"Edit Shipping Info",className:"absolute right-2 flex items-center justify-center bg-b3 text-white hover:bg-white hover:text-b3 border-2 border-white hover:border-b3 text-xs px-2 w-fit rounded-full cursor-pointer py-2",children:e.jsx(Be,{className:"text-sm"})}),e.jsxs("h4",{className:"text-xs text-gray-500",children:[d.firstName," ",d.lastName]}),e.jsxs("p",{className:"text-xs flex flex-wrap",children:[d.address," ",d.city," ",d.state," ",d.country]}),e.jsx("p",{className:"text-xs flex flex-wrap",children:d.postalCode}),e.jsxs("div",{className:"flex flex-col mt-2",children:[e.jsx("h3",{className:"text-xs",children:"Email Address:"}),e.jsx("a",{href:`mailto:${d.email}`,className:"text-xs underline text-b6",children:d.email})]}),e.jsxs("div",{className:"flex flex-col mt-2",children:[e.jsx("h3",{className:"text-xs",children:"Phone:"}),e.jsx("a",{href:`tel:${d.phone}`,className:"text-xs underline text-b6",children:d.phone})]})]})]}):null,i?e.jsxs("div",{className:"flex flex-col space-y-2 w-1/2",children:[e.jsx("h3",{className:"text-sm font-semibold",children:"Billing Address"}),e.jsxs("div",{className:"relative border-[1px] rounded-lg px-4 py-4 w-full",children:[e.jsx("button",{type:"button",onClick:()=>me(!0),title:"Edit Billing Info",className:"absolute right-2 flex items-center justify-center bg-b3 text-white hover:bg-white hover:text-b3 border-2 border-white hover:border-b3 text-xs px-2 w-fit rounded-full cursor-pointer py-2",children:e.jsx(Be,{className:"text-sm"})}),e.jsxs("h4",{className:"text-xs text-gray-500",children:[i.firstName," ",i.lastName]}),e.jsxs("p",{className:"text-xs flex flex-wrap",children:[i.address," ",i.city," ",i.state," ",i.country]}),e.jsx("p",{className:"text-xs flex flex-wrap",children:i.postalCode}),e.jsxs("div",{className:"flex flex-col mt-2",children:[e.jsx("h3",{className:"text-xs",children:"Email Address:"}),e.jsx("a",{href:`mailto:${i.email}`,className:"text-xs underline text-b6",children:i.email})]}),e.jsxs("div",{className:"flex flex-col mt-2",children:[e.jsx("h3",{className:"text-xs",children:"Phone:"}),e.jsx("a",{href:`tel:${i.phone}`,className:"text-xs underline text-b6",children:i.phone})]})]})]}):null]}),e.jsxs("div",{className:"mt-5",children:[e.jsx("h3",{className:"text-sm font-semibold",children:"Order Products"}),e.jsx(Me,{head:["Image","Title","Price","","QTY","Total"],children:oe&&(oe==null?void 0:oe.map(s=>e.jsx(He,{image:s.image,title:s.title,price:s.isSale?s.salePrice:s.regPrice,quantity:s.count})))})]}),e.jsx("div",{children:e.jsx(Me,{head:["Coupon","Sub Total","Shipping","Tax","Grand Total"],children:e.jsx(Je,{coupons:r.coupons,total:r.total,shipping:(Le=r==null?void 0:r.shipping)==null?void 0:Le.shipping,tax:r.tax,grandTotal:r.grandTotal})})})]})]})};export{ds as default};
