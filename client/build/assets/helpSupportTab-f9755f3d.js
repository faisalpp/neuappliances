import{bk as s,bm as r}from"./index-fb6a0065.js";const n="",p=s.create({baseURL:n,headers:{"Content-Type":"application/json"}}),c=async a=>{let t;try{t=await r.post("/api/admin/create-help-tab",a,{validateStatus:()=>!0})}catch(e){return e}return t},i=async a=>{let t;try{t=await r.post("/api/admin/update-help-tab",a,{validateStatus:()=>!0})}catch(e){return e}return t},l=async a=>{let t;try{t=await p.get("/api/get-help-tab",a)}catch(e){return e}return t};export{c,l as g,i as u};
