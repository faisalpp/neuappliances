import{b8 as n}from"./index-9778b12f.js";const o="",a=n.create({baseURL:o,withCredentials:!0,headers:{"Content-Type":"application/json"},maxContentLength:10*1024*1024,maxBodyLength:10*1024*1024}),s=n.create({baseURL:o,withCredentials:!0,headers:{"Content-Type":"multipart/form-data"},maxContentLength:10*1024*1024,maxBodyLength:10*1024*1024}),u=async e=>{let t;try{t=await a.post("/api/admin/create-section",e)}catch(r){return r}return t},d=async e=>{let t;try{t=await a.post("/api/admin/update-section",e)}catch(r){return r}return t},l=async e=>{let t;try{t=await a.post("/api/admin/update-section-index",e)}catch(r){return r}return t},y=async e=>{let t;try{t=await a.post("/api/admin/delete-section",e)}catch(r){return r}return t},m=async e=>{let t;try{t=await a.post("/api/admin/sections",e)}catch(r){return r}return t},h=async e=>{let t;try{t=await a.post("/api/admin/section-by-id",e)}catch(r){return r}return t},w=async e=>{let t;try{t=await s.post("/api/admin/create-section-item",e)}catch(r){return r}return t},g=async e=>{let t;try{t=await s.post("/api/admin/update-section-item",e)}catch(r){return r}return t},b=async e=>{let t;try{t=await a.post("/api/admin/update-section-item-index",e)}catch(r){return r}return t},S=async e=>{let t;try{t=await a.post("/api/admin/delete-section-item",e)}catch(r){return r}return t},q=async e=>{let t;try{t=await a.post("/api/admin/section-item-by-id",e)}catch(r){return r}return t},f=async e=>{let t;try{t=await a.post("/api/admin/section-items",e)}catch(r){return r}return t},x=async e=>{let t;try{t=await a.post("/api/admin/create-product",e)}catch(r){return r}return t},I=async e=>{let t;try{t=await a.post("/api/admin/update-product",e)}catch(r){return r}return t},v=async e=>{let t;try{t=await a.post("/api/admin/delete-product",e)}catch(r){return r}return t},B=async e=>{let t;try{t=await a.post("/api/admin/duplicate-product",e)}catch(r){return r}return t},C=async()=>{let e;try{e=await a.get("/api/admin/get-products")}catch(t){return t}return e},M=async e=>{let t;try{t=await a.post("/api/admin/get-category-data",e)}catch(r){return r}return t},F=async e=>{let t;try{t=await a.post("/api/admin/get-model-nos",e)}catch(r){return r}return t},R=async e=>{let t;try{t=await a.post("/api/admin/get-all-model-nos",e)}catch(r){return r}return t},T=async e=>{let t;try{t=await a.post("/api/admin/create-faq-tab",e)}catch(r){return r}return t},L=async()=>{let e;try{e=await a.get("/api/admin/get-faq-tab")}catch(t){return t}return e},A=async e=>{let t;try{t=await a.post("/api/admin/update-faq-tab",e)}catch(r){return r}return t},P=async e=>{let t;try{t=await a.post("/api/admin/create-faq",e)}catch(r){return r}return t},j=async e=>{let t;try{t=await a.post("/api/admin/get-faqs",e)}catch(r){return r}return t},U=async e=>{let t;try{t=await a.post("/api/admin/update-faq",e)}catch(r){return r}return t},_=async e=>{let t;try{t=await a.post("/api/admin/delete-faq",e)}catch(r){return r}return t},D=async e=>{let t;try{t=await s.post("/api/admin/upload-media",e,{validateStatus:()=>!0})}catch(r){return r}return t},N=async e=>{let t;try{t=await a.post("/api/admin/delete-media",e,{validateStatus:()=>!0})}catch(r){return r}return t},$=async e=>{let t;try{t=await s.post("/api/admin/create-blog",e)}catch(r){return r}return t},k=async e=>{let t;try{t=await s.post("/api/admin/update-blog",e)}catch(r){return r}return t},z=async e=>{let t;try{t=await a.post("/api/admin/delete-blog",e,{validateStatus:()=>!0})}catch(r){return r}return t},E=async e=>{let t;try{t=await a.post("/api/admin/duplicate-blog",e,{validateStatus:()=>!0})}catch(r){return r}return t},G=async(e,t)=>{let r;try{r=await a.post(`/api/admin/search-blog/?page=${t.page}&limit=${t.limit}`,e,{validateStatus:()=>!0})}catch(i){return i}return r},H=async e=>{let t;try{t=await s.post("/api/admin/create-team-member",e,{validateStatus:()=>!0})}catch(r){return r}return t},J=async e=>{let t;try{t=await a.post("/api/admin/delete-team-member",e,{validateStatus:()=>!0})}catch(r){return r}return t},K=async e=>{let t;try{t=await s.post("/api/admin/update-team-member",e,{validateStatus:()=>!0})}catch(r){return r}return t},O=async e=>{let t;try{t=await a.post("/api/update-member-index",e,{validateStatus:()=>!0})}catch(r){return r}return t},c="/api/admin/refresh";a.interceptors.response.use(e=>e,async e=>{const t=e.config;if(e.response.status===401&&t&&!t._isRetry){t._isRetry=!0;try{return await n.get(c,{withCredentials:!0}),a.request(t)}catch(r){return console.log("jwt issue"),r}}});s.interceptors.response.use(e=>e,async e=>{const t=e.config;if(e.response.status===401&&t&&!t._isRetry){t._isRetry=!0;try{return await n.get(c,{withCredentials:!0}),s.request(t)}catch(r){return console.log("jwt issue"),r}}});export{P as A,U as B,_ as C,E as D,z as E,G as F,$ as G,k as H,H as I,K as J,O as K,J as L,j as a,B as b,C as c,v as d,N as e,M as f,L as g,F as h,R as i,x as j,y as k,m as l,l as m,u as n,d as o,S as p,f as q,w as r,g as s,b as t,D as u,T as v,A as w,h as x,q as y,I as z};