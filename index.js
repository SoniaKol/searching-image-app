import{S as P,a as q,i as d}from"./assets/vendor-CWTYgkcF.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))l(t);new MutationObserver(t=>{for(const i of t)if(i.type==="childList")for(const n of i.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&l(n)}).observe(document,{childList:!0,subtree:!0});function o(t){const i={};return t.integrity&&(i.integrity=t.integrity),t.referrerPolicy&&(i.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?i.credentials="include":t.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function l(t){if(t.ep)return;t.ep=!0;const i=o(t);fetch(t.href,i)}})();const u=document.querySelector(".loader"),S=new P(".img-card a");function f(e){const r=e.map(({webformatURL:o,largeImageURL:l,tags:t,likes:i,views:n,comments:x,downloads:L})=>`<li class="img-card">
      <a class="img-card-link" href="${l}"><img src="${o}" alt="${t}" class="img-card-image" /></a>
        <ul class="img-card-container">
          <li class="img-card-descr">
            <h4 class="img-card-descr-title">Likes</h4>
            <p class="img-card-descr-text">${i}</p>
          </li>
          <li class="img-card-descr">
            <h4 class="img-card-descr-title">Views</h4>
            <p class="img-card-descr-text">${n}</p>
          </li>
          <li class="img-card-descr">
            <h4 class="img-card-descr-title">Comments</h4>
            <p class="img-card-descr-text">${x}</p>
          </li>
          <li class="img-card-descr">
            <h4 class="img-card-descr-title">Downloads</h4>
            <p class="img-card-descr-text">${L}</p>
          </li>
        </ul>
      </li>`).join("");w.insertAdjacentHTML("beforeend",r),S.refresh()}function v(){u.style.visibility="visible"}function p(){u.style.visibility="hidden"}function h(e){e.style.display="flex"}function R(e){e.style.display="block"}function a(e){e.style.display="none"}const H="https://pixabay.com/api/",$="44792163-757e44859b12a96dc64963414";async function y({q:e="",page:r=1,per_page:o=15}={}){return(await q.get(H,{params:{key:$,q:e,image_type:"photo",orientation:"horizontal",safesearch:!0,page:r,per_page:o}})).data}function b(e){if(e.length===0){d.show({message:"Sorry, there are no images matching your search query. Please try again!",color:"red",position:"topRight"}),p(),a(c),a(m);return}return!0}const g=document.querySelector(".form"),w=document.querySelector(".img-list"),c=document.querySelector(".load-button"),m=document.querySelector(".load-text");g.addEventListener("submit",C);c.addEventListener("click",M);a(c);a(m);const s={q:"",page:1,per_page:15,maxPage:0};async function C(e){if(e.preventDefault(),w.innerHTML="",s.page=1,s.q=e.currentTarget.elements.input.value.trim(),!!s.q){v();try{const{hits:r,totalHits:o}=await y(s);s.maxPage=Math.ceil(o/s.per_page),b(r)&&(p(),f(r)),s.maxPage>1&&h(c)}catch(r){console.log(r),d.show({message:"We're sorry, but something went wrong. Please try again.",color:"red",position:"topRight"})}finally{g.reset()}}}async function M(){s.page+=1,a(c),R(m);try{const{hits:e}=await y(s);if(b(e)){a(m),f(e);const o=document.querySelector(".img-card").getBoundingClientRect().height;window.scrollBy({top:o*2,behavior:"smooth"})}s.maxPage>1&&h(c),s.page===s.maxPage&&(a(c),d.show({message:"We're sorry, but you've reached the end of search results.",color:"blue",position:"bottomRight"}))}catch(e){console.log(e),d.show({message:"We're sorry, but something went wrong. Please try again.",color:"red",position:"topRight"})}finally{g.reset()}}
//# sourceMappingURL=index.js.map
