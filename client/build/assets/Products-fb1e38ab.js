import{j as e,N as C,g as k,h,r as t,R as M,i as A,L,l as y,P as F,m as D,n as E,G as _,o as O,p as T,d as q,q as B,s as G,t as I,v as V}from"./index-28ed215d.js";import{$ as z}from"./transition-4091ef09.js";const U=({isGrid:a,product:s})=>{const n=({numberOfTimes:d})=>{const g=Array.from({length:d},(x,o)=>e.jsx(h,{className:"text-b7 text-lg"},o));return e.jsx("div",{className:"flex mt-2 items-center",children:g})};return e.jsx(e.Fragment,{children:a?e.jsx("div",{className:"flex flex-col items-center border-[1px] border-gray-200 rounded-2xl w-12/12 h-fit py-5 cursor-pointer",children:e.jsxs(C,{to:`/product/${s.slug}`,children:[e.jsxs("div",{className:"relative",children:[e.jsx("img",{src:s.images[0],alt:s.title,className:"h-[330px] w-[355px] object-contain"}),s.salePrice!==""?e.jsxs("span",{className:"absolute -top-2 -right-7 bg-b7 rounded-2xl font-semibold px-5 py-2 text-xs",children:[100-s.salePrice/s.regularPrice*100,"% OFF"]}):null]}),e.jsx("p",{className:"font-semibold text-sm px-5 line-clamp-3",children:s.title}),s.salePrice!==""?e.jsxs("div",{className:"flex space-x-20 mt-5",children:[e.jsxs("h4",{className:"text-b3 font-semibold",children:["$",s.salePrice]}),e.jsxs("div",{className:"flex justify-end w-full space-x-2 items-center",children:[e.jsxs("strike",{children:["$",s.regularPrice]}),e.jsxs("span",{className:"bg-b4 rounded-xl font-semibold px-2 py-1 text-xs",children:["-",100-s.salePrice/s.regularPrice*100,"%"]})]})]}):e.jsx("div",{className:"flex space-x-20 mt-5",children:e.jsxs("h4",{className:"text-b3 font-semibold",children:["$",s.regularPrice]})}),e.jsxs("div",{className:"flex space-x-20 mt-4",children:[e.jsxs("div",{className:"flex items-center",children:[e.jsx("h4",{className:"text-sm font-semibold min-w-20 w-20",children:"Cosmetic Rating"}),e.jsx(k,{})]}),e.jsx(n,{numberOfTimes:parseInt(s.rating)})," "]}),e.jsxs("div",{className:"flex items-center space-x-10 mt-2",children:[e.jsxs("div",{className:"flex font-semibold text-sm",children:[e.jsx("h4",{children:"Discount"})," %"]}),e.jsx("div",{className:"w-[150px] bg-gray-100 rounded-lg",children:e.jsx("span",{className:"flex rounded-lg bg-gradient-to-r from-b4 to-b7 w-28 h-2"})})]})]})}):e.jsx(C,{className:"h-fit",to:`/product/${s.slug}`,children:e.jsxs("div",{className:"flex lg:space-x-10 space-x-2 border-[1px] border-gray-200 rounded-2xl w-full lg:py-10 py-5 lg:px-8 px-2 cursor-pointer",children:[e.jsxs("div",{className:"relative w-44 coxs:w-52",children:[e.jsx("img",{src:s.images[0],className:"w-60 h-60 object-contain"}),s.salePrice!==""?e.jsxs("span",{className:"absolute flex lg:-top-5 -top-4 right-0 lg:-right-6 bg-b4 rounded-2xl font-semibold px-3 py-1 lg:py-2 sm:text-xs text-[8px] coxs:text-[11px]",children:[100-s.salePrice/s.regularPrice*100,"% OFF"]}):null]}),e.jsxs("div",{className:"flex flex-col lg:px-5 px-1 w-[60%] 3xl:w-[55%]",children:[e.jsx("div",{className:"relative",children:e.jsx("p",{className:"font-semibold text-sm lg:text-lg 3xl:text-xl",children:s.title})}),e.jsxs("div",{className:"flex maxcosm:flex-col sm:items-center gap-1 coxs:gap-2 lg:mt-5 mt-1 xs:mt-2",children:[e.jsxs("div",{className:"flex items-center gap-6 sm:gap-10",children:[e.jsxs("h4",{className:"text-b3 font-semibold lg:text-[16px] text-xs",children:["$",s.salePrice!=""?s.salePrice:s.regularPrice]}),s.salePrice!==""?e.jsx("span",{className:"lg:text-[16px] text-xs",children:e.jsxs("strike",{children:["$",s.regularPrice]})}):null]}),e.jsx("div",{children:s.salePrice!==""?e.jsxs("span",{className:"bg-b4 rounded-xl font-semibold px-2 py-1 text-xs",children:["- ",100-s.salePrice/s.regularPrice*100,"%"]}):null})]}),e.jsxs("div",{className:"flex maxxs:flex-col flex-wrap coxs:items-center gap-x-6 lg:mt-4 mt-1 coxs:mt-2",children:[e.jsxs("div",{className:"flex items-center gap-1 sm:gap-2",children:[e.jsxs("h4",{className:"text-xs lg:text-sm font-semibold w-max",children:["Cosmetic ",e.jsx("br",{})," Rating"]}),e.jsx(k,{})]}),e.jsx("div",{className:"flex items-center",children:e.jsx(n,{numberOfTimes:s.rating})})]}),e.jsxs("div",{className:"xs:flex hidden items-center gap-3 sm:gap-x-6 mt-2",children:[e.jsxs("div",{className:"flex font-semibold text-xs lg:text-sm gap-1 sm:gap-2 items-center",children:[e.jsx("h4",{children:"Discount"})," %"]}),e.jsx("div",{className:"w-full bg-gray-100 rounded-lg",children:e.jsx("span",{className:"flex rounded-lg bg-gradient-to-r from-b4 to-b7 w-32 h-2"})})]})]})]})})})},P=({title:a,children:s})=>{t.useState(!1);const[n,d]=t.useState(!0);return e.jsx(e.Fragment,{children:e.jsxs("div",{className:"flex flex-col w-full border-b-[1px] py-4 h-auto",children:[e.jsxs("div",{className:"flex items-center border-b-gray-300 cursor-pointer",onClick:()=>d(g=>!g),children:[e.jsx("h6",{className:"font-bold w-72 text-sm",children:a}),e.jsx("div",{className:"flex items-center w-full justify-end",children:n?e.jsx(M,{className:"text-2xl"}):e.jsx(A,{className:"text-2xl"})})]}),e.jsx(z,{show:n,className:"flex flex-col gap-2 h-auto mt-3 cursor-pointer",children:s})]})})},H=({filters:a})=>{const s=a.reduce((n,d)=>n+d.productCount,0);return e.jsx(e.Fragment,{children:e.jsxs(P,{title:"Appliance Type",children:[e.jsxs("div",{className:"flex text-sm hover:underline",children:[e.jsx("h6",{children:"All"}),e.jsx("div",{className:"flex justify-end w-full text-xs",children:e.jsxs("span",{children:["(",s,")"]})})]}),a?a.map(n=>n.productCount>0?e.jsx(L,{to:`/appliances/?category=${n.slug}`,children:e.jsxs("div",{className:"flex text-sm hover:underline",children:[e.jsx("h6",{className:"w-full ",children:n.title}),e.jsx("div",{className:"flex justify-end w-full text-xs",children:e.jsxs("span",{children:["(",n.productCount,")"]})})]})}):null):null]})})},Q=({filters:a})=>{const[s,n]=t.useState(),[d,g]=t.useState(),[x,o]=t.useState(),[m,N]=t.useState(!1),[b,p]=t.useState(!1),[u,f]=t.useState(!1),c=async(r,j)=>{r&&console.log(`${j} is ${r}`)},i=(r,j,v)=>{switch(r){case 1:{N(j),p(l=>l&&!l),f(l=>l&&!l),c(j,v);break}case 2:{p(j),N(l=>l&&!l),f(l=>l&&!l),c(j,v);break}case 3:{f(j),p(l=>l&&!l),N(l=>l&&!l),c(j,v);break}}};return t.useEffect(()=>{n(a.find(r=>r._id===5)),g(a.find(r=>r._id===4)),o(a.find(r=>r._id===3))},[a]),e.jsx(e.Fragment,{children:e.jsxs(P,{title:"Comatic Rating",children:[e.jsxs("div",{className:"flex items-center",children:[e.jsxs("div",{className:"flex items-center space-x-2",children:[e.jsx(y.Checkbox,{ripple:!1,checked:m,onChange:r=>i(1,r.target.checked,5),className:"checked:bg-b3 checked:text-white"}),e.jsxs("span",{className:"flex",children:[e.jsx(h,{className:"text-b7"}),e.jsx(h,{className:"text-b7"}),e.jsx(h,{className:"text-b7"}),e.jsx(h,{className:"text-b7"}),e.jsx(h,{className:"text-b7"})]})]}),e.jsx("div",{className:"flex justify-end w-full text-xs",children:e.jsxs("span",{children:["(",s?s==null?void 0:s.count:0,")"]})})]}),e.jsxs("div",{className:"flex items-center",children:[e.jsxs("div",{className:"flex items-center space-x-2",children:[e.jsx(y.Checkbox,{ripple:!1,checked:b,onChange:r=>i(2,r.target.checked,4),className:"checked:bg-b3 checked:text-white"}),e.jsxs("span",{className:"flex",children:[e.jsx(h,{className:"text-b7"}),e.jsx(h,{className:"text-b7"}),e.jsx(h,{className:"text-b7"}),e.jsx(h,{className:"text-b7"})]})]}),e.jsx("div",{className:"flex justify-end w-full text-xs",children:e.jsxs("span",{children:["(",d?d==null?void 0:d.count:0,")"]})})]}),e.jsxs("div",{className:"flex items-center",children:[e.jsxs("div",{className:"flex items-center space-x-2",children:[e.jsx(y.Checkbox,{ripple:!1,checked:u,onChange:r=>i(3,r.target.checked,3),className:"checked:bg-b3 checked:text-white"}),e.jsxs("span",{className:"flex",children:[e.jsx(h,{className:"text-b7"}),e.jsx(h,{className:"text-b7"}),e.jsx(h,{className:"text-b7"})]})]}),e.jsx("div",{className:"flex justify-end w-full text-xs",children:e.jsxs("span",{children:["(",x?x==null?void 0:x.count:0,")"]})})]})]})})},Y=()=>e.jsx(e.Fragment,{children:e.jsxs(P,{title:"On Sale",children:[e.jsxs("div",{className:"flex items-center",children:[e.jsxs("div",{className:"flex items-center space-x-2",children:[e.jsx(y.Checkbox,{ripple:!1,className:"checked:bg-b3 checked:text-white"}),e.jsx("span",{className:"flex text-sm w-max",children:"Yes"})]}),e.jsx("div",{className:"flex justify-end w-full text-xs",children:e.jsx("span",{children:"(84)"})})]}),e.jsxs("div",{className:"flex items-center",children:[e.jsxs("div",{className:"flex items-center space-x-2",children:[e.jsx(y.Checkbox,{ripple:!1,className:"checked:bg-b3 checked:text-white"}),e.jsx("span",{className:"flex text-sm w-max",children:"No"})]}),e.jsx("div",{className:"flex justify-end w-full text-xs",children:e.jsx("span",{children:"(84)"})})]})]})});const S=({min:a,max:s,onChange:n})=>{const[x,o]=t.useState(999),[m,N]=t.useState(8e3),b=t.useRef(null),p=t.useRef(null),u=t.useRef(null),f=t.useCallback(c=>Math.round((c-a)/(s-a)*100),[a,s]);return t.useEffect(()=>{if(p.current){const c=f(x),i=f(+p.current.value);u.current&&(u.current.style.left=`${c}%`,u.current.style.width=`${i-c}%`)}},[x,f]),t.useEffect(()=>{if(b.current){const c=f(+b.current.value),i=f(m);u.current&&(u.current.style.width=`${i-c}%`)}},[m,f]),t.useEffect(()=>{n({min:x,max:m})},[x,m,n]),e.jsx(P,{title:"Price",children:e.jsxs("div",{className:"w-full pb-8 relative",id:"priceSlider",children:[e.jsxs("div",{className:"flex items-center gap-2 w-full mb-5",children:[e.jsx("input",{type:"number",value:x,onChange:c=>{const i=Math.min(Math.max(+c.target.value,a),s);o(i)},className:"w-[45%] m-0 rounded-md text-b16 px-4 py-2 outline-none border border-[#C9C9C9]"}),e.jsx("span",{children:"-"}),e.jsx("input",{type:"number",value:m,onChange:c=>{const i=Math.min(Math.max(+c.target.value,a),s);N(i)},className:"w-[45%] m-0 rounded-md text-b16 px-4 py-2 outline-none border border-[#C9C9C9]"})]}),e.jsx("input",{type:"range",min:a,max:s,value:x,ref:b,onChange:c=>{const i=Math.min(+c.target.value,m-1);o(i),c.target.value=i.toString()},className:D("thumb thumb--zindex-3",{"thumb--zindex-5":x>s-100})}),e.jsx("input",{type:"range",min:a,max:s,value:m,ref:p,onChange:c=>{const i=Math.max(+c.target.value,x+1);N(i),c.target.value=i.toString()},className:"thumb thumb--zindex-4"}),e.jsxs("div",{className:"slider",children:[e.jsx("div",{className:"slider__track"}),e.jsx("div",{ref:u,className:"slider__range"}),e.jsxs("div",{className:"flex justify-between absolute left-1 right-1 top-4 text-xs",children:[e.jsx("div",{className:"",children:a}),e.jsx("div",{className:"",children:"99"}),e.jsx("div",{className:"",children:"999"}),e.jsx("div",{className:"",children:s})]})]})]})})};S.propTypes={min:F.number.isRequired,max:F.number.isRequired,onChange:F.func.isRequired};const J=({onClose:a,isFilter:s,categoriesFilters:n,ratingFilters:d})=>{const g=o=>{o.stopPropagation()},x=s?"maxlg:flex maxlg:top-0 maxlg:bottom-0":"maxlg:-bottom-[420px] maxlg:opacity-0 maxlg:pointer-events-none";return e.jsx("div",{className:`maxlg:fixed maxlg:bg-black/20 items-end maxlg:left-0 maxlg:right-0 lg:max-w-[240px] lg:h-full lg:sticky lg:top-10 z-50 duration-300 ${x}`,onClick:a,children:e.jsxs("div",{className:"lg:flex flex-col w-full maxlg:max-h-[398px] [&>div]:maxlg:px-10 pb-10 maxlg:rounded-tl-2xl maxlg:rounded-tr-2xl maxlg:bg-white maxlg:overflow-y-auto",onClick:g,children:[e.jsxs("div",{className:"maxlg:sticky top-0 flex maxlg:py-4 justify-between lg:pb-4 items-center border-b maxlg:bg-white z-50 maxlg:shadow-md",children:[e.jsx("p",{className:"text-base font-bold",children:"Filters"}),e.jsx("button",{className:"text-sm lg:text-xs text-[#22A6AB] underline",children:"Reset Filters"}),e.jsx("button",{onClick:a,className:"text-sm font-semibold lg:hidden px-2 py-1 hover:bg-black/5 rounded duration-300",children:"Close"})]}),e.jsx(H,{filters:n}),e.jsx(Q,{filters:d}),e.jsx(S,{min:9,max:9999,onChange:({min:o,max:m})=>console.log(`min = ${o}, max = ${m}`)}),e.jsx(Y,{})]})})},X=()=>{const[a,s]=t.useState([]),[n,d]=t.useState([]),[g,x]=t.useState([]),[o,m]=t.useState(!1),[N,b]=t.useState(!1),[p,u]=t.useState(!1),f=E(),[c,i]=t.useState({});t.useEffect(()=>{const l=new URLSearchParams(f.search),w={};for(const[R,$]of l.entries())w[R]=$;console.log(w),i(w)},[]),t.useEffect(()=>{r()},[c]);const r=async()=>{u(!0);const l=await _(c);l.status===200?(x(l.data.products),u(!1)):(u(!1),x([]))};t.useEffect(()=>{j()},[]);const j=async()=>{const l=await O();console.log(l),l.status===200?(d(l.data.ratingFilters),s(l.data.categoryFilters)):(d([]),s([]))},v=()=>{b(!1)};return e.jsx(e.Fragment,{children:p?e.jsx(T,{}):e.jsxs(q,{children:[e.jsxs("div",{className:"flex items-center mt-5 py-5 w-full 3xl:max-w-1680px px-4 md:px-10 lg:px-16 xl:px-20 2xl:px-120px mx-auto",children:[e.jsxs("div",{className:"flex items-center",children:[e.jsx("h5",{className:"text-xs text-blue-400",children:"Home"}),e.jsx(B,{className:"text-xl text-gray-500"}),e.jsx("h5",{className:"text-xs text-gray-400",children:"Products"})]}),e.jsxs("div",{className:"flex items-center space-x-5 w-full justify-end",children:[e.jsx(G,{className:"cursor-pointer",onClick:()=>m(!0)}),e.jsx(I,{className:"cursor-pointer",onClick:()=>m(!1)})]}),e.jsxs("button",{className:"ml-5 text-sm font-semibold flex gap-2 items-center lg:hidden",onClick:()=>b(!0),children:["Filters ",e.jsx(V,{className:"text-xs stroke-1"})]})]}),e.jsxs("div",{className:"flex justify-center gap-12 xl:gap-x-60px w-full 3xl:max-w-1680px px-4 md:px-10 lg:px-16 xl:px-20 2xl:px-120px mx-auto",children:[e.jsx(J,{categoriesFilters:a,ratingFilters:n,onClose:v,isFilter:N}),e.jsx("div",{className:`grid ${o?"lg:grid-cols-3 grid-cols-1 lg:gap-x-2":"grid-cols-1"} gap-y-5 mb-10 w-full`,children:g.length>0?g.map((l,w)=>e.jsx(U,{product:l,isGrid:o},w)):e.jsx("h1",{children:"No Product Founds!"})})]})]})})};export{X as default};
