import{b6 as n,b7 as a}from"./index-c6e12165.js";const o="",s=n.create({baseURL:o,headers:{"Content-Type":"application/json"}}),i=async r=>{let e;try{e=await a.post("/api/admin/create-help",r)}catch(t){return t}return e},l=async r=>{let e;try{e=await a.post("/api/admin/update-help",r)}catch(t){return t}return e},u=async r=>{let e;try{e=await a.post("/api/admin/duplicate-help",r)}catch(t){return t}return e},y=async r=>{let e;try{e=await a.post("/api/admin/delete-help",r)}catch(t){return t}return e},d=async(r,e)=>{let t;try{t=await s.post(`/api/get-help-by-category/?page=${e.page}&limit=${e.limit}`,r)}catch(p){return p}return t},h=async r=>{let e;try{e=await s.post("/api/get-help-by-slug",r)}catch(t){return t}return e};export{d as G,y as a,i as c,u as d,h as g,l as u};
