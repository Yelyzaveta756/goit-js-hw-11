import{i as p,S as f}from"./assets/vendor-5b791d57.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const n of s.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&a(n)}).observe(document,{childList:!0,subtree:!0});function r(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function a(e){if(e.ep)return;e.ep=!0;const s=r(e);fetch(e.href,s)}})();function y(o){return o.hits.map(({largeImageURL:t,webformatURL:r,tags:a,likes:e,views:s,comments:n,downloads:u})=>`<div class="gallery-item>
      <a class="gallery-link" href="${t}">
          <img 
          class="gallery-image" 
          src="${r}" 
          alt="${a}" 
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
              <span class="gallery-info-span">Downloads: <span class="tag-span">${u}</span>
              </span>    
          </p>
      </div>
  </div>`).join("")}const d="42660444-3b11bfb6c5a092fcbbd55e52b",g="https://pixabay.com/api/",i=document.querySelector(".loader");function m(o){const t=`${g}?key=${d}&q=${o}&image_type=photo&orientation=horizontal&savesearch=true`;return i.style.display="block",fetch(t).then(r=>{if(!r.ok)throw new Error(`Response error ${r.status}`);return r.json()}).then(r=>(i.style.display="none",r.hits.length===0&&p.error({title:"Error",timeout:3e3,position:"bottomRight",message:"Sorry, there are no images matching your search query. Please try again!"}),r)).catch(r=>console.log(`Error: ${r}`))}const h=new f(".gallery a",{captionsData:"alt",captionDelay:250}),b=document.querySelector(".form"),c=document.querySelector(".gallery"),l=document.querySelector(".loader");b.addEventListener("submit",$);l.style.display="none";function $(o){o.preventDefault(),l.style.display="inline-block",c.innerHTML="";const t=o.currentTarget,r=t.elements.query.value.trim();if(r===""){p.show({title:"Error",color:"yellow",message:"Please search for something"}),l.style.display="none";return}m(r).then(a=>{c.innerHTML=y(a),h.refresh(),t.reset()}).catch(a=>{console.error("Error:",a)})}
//# sourceMappingURL=commonHelpers.js.map
