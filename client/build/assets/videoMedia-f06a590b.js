import{C as o,w as i}from"./index-7e2d3c57.js";const n=async t=>{let e;try{e=await o.post("/api/admin/upload-video-media",t)}catch(a){return a}return e},s=async(t,e)=>{let a;try{a=await i.post(`/api/admin/get-video-media/?page=${t.page}&limit=${t.limit}`,e)}catch(r){return r}return a},p=async t=>{let e;try{e=await i.post("/api/admin/delete-video-media",t)}catch(a){return a}return e};export{p as d,s as g,n as u};
