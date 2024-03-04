import{i as p,S as y}from"./assets/vendor-5b791d57.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const n of s.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&o(n)}).observe(document,{childList:!0,subtree:!0});function r(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function o(e){if(e.ep)return;e.ep=!0;const s=r(e);fetch(e.href,s)}})();function g(a){return a.hits.map(({largeImageURL:t,webformatURL:r,tags:o,likes:e,views:s,comments:n,downloads:f})=>`<div class="gallery-item>
      <a class="gallery-link" href="${t}">
          <img 
          class="gallery-image" 
          src="${r}" 
          alt="${o}" 
          width="360px" height="260px"/>
      </a>
      <div class="gallery-info">
          <p class="gallery-info-par">
              <span class="gallery-info-span">Likes: <span class="tag-span">${e}</span>
              </span>    
          </p>
          <p class="gallery-info-par">
              <span class="gallery-info-span">Views: <span class="tag-span">${s}</span>
              </span>    
          </p>
          <p class="gallery-info-par">
              <span class="gallery-info-span">Comments: <span class="tag-span">${n}</span>
              </span>    
          </p>
          <p class="gallery-info-par">
              <span class="gallery-info-span">Downloads: <span class="tag-span">${f}</span>
              </span>    
          </p>
      </div>
  </div>`).join("")}const d="42660444-3b11bfb6c5a092fcbbd55e52b",m="https://pixabay.com/api/",i=document.querySelector(".loader");function h(a){const t=`${m}?key=${d}&q=${a}&image_type=photo&orientation=horizontal&savesearch=true`;return i.style.display="block",fetch(t).then(r=>{if(!r.ok)throw new Error(`Response error ${r.status}`);return r.json()}).then(r=>(i.style.display="none",r.hits.length===0&&p.error({title:"Error",timeout:3e3,position:"bottomRight",message:"Sorry, there are no images matching your search query. Please try again!"}),r)).catch(r=>console.log(`Error: ${r}`))}const u=new y(".gallery a ",{captionsData:"alt",captionDelay:250});console.log(u);const b=document.querySelector(".form"),c=document.querySelector(".gallery"),l=document.querySelector(".loader");b.addEventListener("submit",$);l.style.display="none";function $(a){a.preventDefault(),l.style.display="inline-block",c.innerHTML="";const t=a.currentTarget,r=t.elements.query.value.trim();if(r===""){p.show({title:"Error",color:"yellow",message:"Please search for something"}),l.style.display="none";return}h(r).then(o=>{c.innerHTML=g(o),u.refresh(),t.reset()}).catch(o=>{console.error("Error:",o)})}
//# sourceMappingURL=commonHelpers.js.map
