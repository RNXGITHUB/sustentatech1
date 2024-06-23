const r = t=>{
    const e = document.createElement("div");
    return e.innerHTML = t,
    e.textContent || e.innerText || ""
}
  , o = t=>t.trim().split(/\s+/).map((e,n)=>n === 0 ? e.toLowerCase() : e.charAt(0).toUpperCase() + e.slice(1).toLowerCase()).join("");
export {r as h, o as t};
//# sourceMappingURL=helpers-7cfbe709.js.map
