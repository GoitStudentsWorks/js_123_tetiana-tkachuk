import{a as g,i as d,R,S as $}from"./assets/vendor-B--kmjCI.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))o(r);new MutationObserver(r=>{for(const a of r)if(a.type==="childList")for(const n of a.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&o(n)}).observe(document,{childList:!0,subtree:!0});function t(r){const a={};return r.integrity&&(a.integrity=r.integrity),r.referrerPolicy&&(a.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?a.credentials="include":r.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function o(r){if(r.ep)return;r.ep=!0;const a=t(r);fetch(r.href,a)}})();const C=10,b=8,N="https://sound-wave.b.goit.study/api",y={GENRES:"/genres",ARTISTS:"/artists",ARTIST_BY_ID:"/artists/",FEEDBACKS:"/feedbacks"};g.defaults.baseURL=N;async function O(){const{data:e}=await g.get(`${y.FEEDBACKS}?limit=${C}&page=1`);return e}async function I(e){const{data:s}=await g.get(`${y.ARTISTS}?limit=${b}&page=${e}`);return s}const w="/js_123_tetiana-tkachuk/assets/sprite-Bwwhuc7H.svg";function x(e){const s=Math.floor(e/6e4),t=Math.floor(e%6e4/1e3);return`${s}:${t.toString().padStart(2,"0")}`}function j(e){return e.intDiedYear===null?`${e.intFormedYear} - present`:`${e.intFormedYear} - ${e.intDiedYear}`}function P(e){return e.strBiographyEN.split(".").slice(0,2).join(".")+"."}function Q(e){return e.genres.map(s=>`
    <li>
      <button class="artist-short-info-genre-btn">${s}</button>
    </li>`).join("")}function Y(e){return e.albumsList.map(t=>{const o=t.tracks.map(r=>{const a=r.movie===null?"":`
        <a href="${r.movie}" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
          <svg class='artist-modal-youtube-icon' width="24" height="24">
            <use href="${w}#icon-youtube"></use>
          </svg>
        </a>`;return`
        <tr>
          <td>${r.strTrack}</td>
          <td>${x(r.intDuration)}</td>
          <td>${a}</td>
        </tr>`}).join("");return`
      <div class="artist-song-table">
        <h3 class="artist-table-header">${t.strAlbum}</h3>
        <table>
          <colgroup>
            <col style="width: 97px">
            <col style="width: 74px">
            <col style="width: 24px">
          </colgroup>
          <thead>
            <tr><th>Track</th><th>Time</th><th>Link</th></tr>
          </thead>
          <tbody>${o}</tbody>
        </table>
      </div>`}).join("")}function q(e,s){const t=j(e);P(e);const o=Q(e),r=Y(e);s.insertAdjacentHTML("beforeend",`
    <div class="artist-info-wrapper">
      <h2 class="artist-name-title">${e.strArtist}</h2>
      <div class="artist-info">
        <div class = "artist-img-wrapper">
          <img class="artist-img" src="${e.strArtistThumb}" alt="${e.strArtist} artist photo">
        </div>
        <div class="artist-short-info">
          <div class="artist-short-info-grid-wrapper">
            <div class="artist-short-info-years">
              <h3 class="short-info-small-header">Years active</h3>
              <p class="short-info-small-text">${t}</p>
            </div>
            <div class="artist-short-info-sex">
              <h3 class="short-info-small-header">Sex</h3>
              <p class="short-info-small-text">${e.strGender}</p>
            </div>
            <div class="artist-short-info-members">
              <h3 class="short-info-small-header">Members</h3>
              <p class="short-info-small-text">${e.intMembers}</p>
            </div>
            <div class="artist-short-info-country">
              <h3 class="short-info-small-header">Country</h3>
              <p class="short-info-small-text">${e.strCountry}</p>
            </div>
          </div>
          <div class="artist-bio">
            <h3 class="short-info-small-header">Biography</h3>
            <div class = "short-info-small-text-wrapper">
              <p class="short-info-small-text">${e.strBiographyEN}</p>
            </div>
          </div>
          
          <div class="artist-short-info-genres">
            <ul class="artist-short-info-genres-list">${o}</ul>
          </div>
        </div>
      </div>
      <div class="artist-albums-wrapper">
        <h2 class="artist-albums-header">Albums</h2>
        ${r}
      </div>
      
    </div>`)}const l=document.querySelector(".modal-overlay"),L=document.querySelector(".artists-modal-close-btn");document.querySelector(".modal");function S(e){e.target===l&&u()}function E(e){e.key==="Escape"&&u()}function B(e){l.contains(e.relatedTarget)||u()}function D(){L.addEventListener("click",u),l.addEventListener("click",S),document.addEventListener("keydown",E),l.addEventListener("blur",B)}function u(){var e;l.classList.remove("is-open"),document.body.style.overflow="",(e=document.querySelector(".artist-info-wrapper"))==null||e.remove(),L.removeEventListener("click",u),l.removeEventListener("click",S),document.removeEventListener("keydown",E),l.removeEventListener("blur",B)}function U(e){const s=document.createElement("div");s.classList.add("loader");const t=document.createElement("div");return t.style.cssText=`
    position: fixed;
    inset: 0;
    background: rgba(0, 0, 0, 0.4);
    display: none;
    align-items: center;
    justify-content: center;
    z-index: 999;
`,t.appendChild(s),(e.style.position===""||e.style.position==="static")&&(e.style.position="relative"),e.appendChild(t),t}function F(e){const s=document.querySelector(e);return U(s)}function k(e){e&&(e.style.display="flex")}function M(e){e&&(e.style.display="none")}function h(e,s="success"){const t={message:e,position:"topRight",timeout:5e3};switch(s){case"success":d.success(t);break;case"error":d.error(t);break;case"warning":d.warning(t);break;case"info":d.info(t);break;default:d.error({message:`Invalid type of toast: ${s}`,position:"topRight",timeout:5e3});break}}const i={list:document.querySelector(".js-artists-list"),loadMoreBtn:document.querySelector(".js-artists-load"),modalOverlay:document.querySelector(".modal-overlay"),modalRoot:document.querySelector(".modal")},A=F("body");let m=1,p=!1,v=!1;i.list&&i.loadMoreBtn&&K();function K(){i.list.innerHTML="",i.loadMoreBtn.hidden=!0,i.loadMoreBtn.disabled=!1,v=!1,i.loadMoreBtn.addEventListener("click",G),i.list.addEventListener("click",J),T(!0)}async function G(){p||(m+=1,await T(!1))}async function T(e){if(!p){p=!0,e&&(m=1),i.loadMoreBtn.hidden=!0,i.loadMoreBtn.disabled=!0,i.loadMoreBtn.setAttribute("aria-busy","true"),k(A);try{const s=await I(m),t=(s==null?void 0:s.artists)??[];e&&(i.list.innerHTML=""),i.list.insertAdjacentHTML("beforeend",t.map(H).join(""));const o=X(s,m,b,t.length);i.loadMoreBtn.hidden=!o,!o&&!v&&(h("No more artists to load.","info"),v=!0)}catch(s){console.log(s),i.loadMoreBtn.hidden=!0,h("Failed to load artists. Please try again later.","error")}finally{M(A),i.loadMoreBtn.disabled=!1,i.loadMoreBtn.removeAttribute("aria-busy"),p=!1}}}function X(e,s,t,o){if(!e)return!1;const r=e.pagination||e.meta||e.pageInfo,a=(r==null?void 0:r.totalPages)??e.totalPages??e.pages??e.total_pages;if(Number.isFinite(a))return s<a;const n=(r==null?void 0:r.hasNextPage)??e.hasNextPage;if(typeof n=="boolean")return n;const c=(r==null?void 0:r.nextPage)??e.nextPage;if(Number.isFinite(c))return c>s;const f=(r==null?void 0:r.total)??(r==null?void 0:r.totalItems)??e.total??e.totalItems??e.totalCount??e.totalArtists;return Number.isFinite(f)?s*t<f:o===t}function H(e){var c;const s=e._id,t=e.strArtist,o=e.strBiographyEN||"",r=o.length>120?`${o.slice(0,120)}...`:o,a=((c=e.genres)==null?void 0:c.slice(0,4))||[];return`
    <li class="artist-card">
      <div class="artist-card-image">
        <img src="${e.strArtistThumb||""}" alt="${t}" loading="lazy" />
      </div>

      <div class="artist-card-content">
        <ul class="artist-card-tags">
          ${a.map(f=>`<li class="artist-card-tag">${f}</li>`).join("")}
        </ul>

        <div class="artist-desc">
          <h3 class="artist-card-name">${t}</h3>
          <p class="artist-card-text">${r}</p>
        </div>

        <button
          class="artist-card-load-more js-artist-load-more"
          type="button"
          data-artist-id="${s}"
        >
          Learn More
          <svg class="artist-card-icon" width="24" height="24" aria-hidden="true">
            <use href="${w}#icon-caret-right"></use>
          </svg>
        </button>
      </div>
    </li>
  `}async function J(e){const s=e.target.closest(".js-artist-load-more");if(!s)return;const t=s.dataset.artistId;t&&V(t)}async function V(e){var s;if(!(!i.modalOverlay||!i.modalRoot)){k(A),i.modalOverlay.classList.add("is-open"),i.modalOverlay.focus(),document.body.style.overflow="hidden",(s=document.querySelector(".artist-info-wrapper"))==null||s.remove(),D();try{const o=await(await fetch(`https://sound-wave.b.goit.study/api/artists/${e}/albums`,{headers:{Accept:"application/json"}})).json();q(o,i.modalRoot)}catch(t){console.log(t)}finally{M(A)}}}const W={feedbacksList:document.querySelector(".swiper-wrapper")};function z(e){const s=e.map(({_id:t,name:o,rating:r,descr:a})=>{const n=Math.round(r);return`
        <div class="swiper-slide">
          <div class="feedback-block">
            <div data-raty class="feedback-rating" data-id=${t} data-score=${n}></div>
            <p class="feedback-descr">"${a}"</p>
            <p class="feedback-name">${o}</p>
          </div>
        </div>`}).join("");W.feedbacksList.insertAdjacentHTML("beforeend",s)}const Z="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAATCAYAAACQjC21AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAFuSURBVHgBpVTRTcNADH12K747QjoB7QS9TgBsUCZoKwT9LHyifCTdgA0YgWMDmICwQb6RiPG1oUlISK6tpdOdzr7nZz/rAA+7m24+3PKJ5U4wE13qFrh1YyJzMiARz4tgXnfGtzlXJgqEuFKqSDYO7fINRzHk3rrOgC9wDMOc3Qt2/SsYAikry0e7TBoBb000Y/QmeXigKYL8YYB2JokDJ0EqTCllukNsX5se6WGAA+03obgaRXY7MGNt8lIPKU639Fsw2+Jq2SNl+oyOMlssUWJXTv29KAsV4axBBB+wL8mmcS7SfmzchTrG2hvrCeT6aN2buKR4ZQ7VoaplG3gaC2L3pnJXD6MJvBmKqSWpwRGN4A1Yj+V6EEzD2xQNo0UEo2IO/gVcNX1PIrE2frgVTOTpr7sHVFj2q+x4UuCIBfF9aOevJZbXyuihPF76pZ2jNBn9ar7sXQvRIaU4tItGtfMRGbo/gEDzDPJZ9v8ADQiZclEuBD0AAAAASUVORK5CYII=",_="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAATCAYAAACQjC21AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAFFSURBVHgBrZSNbYQwDIXdThA2YAQ2aDYgG/Q2gA1gA9gAMQFs0BE6AmwQNkj9wD6dWi7Qu/ukJ0UQO45/QnSOSfQSnLU2QLy29AK+uq4LENb0JCkTgPc+GGPgNIsZvB84rPiq64KdUVEUWOb0aHSsiQkKouRvXv7d5cLqRMjRWlFcr23b8Ju6ruE0yL5vsRnE/vMNJ1ZVZThXpFrDS6NB0DzPtCzLVeM4Ut/3W4RJkvhhGMKjwBY+EKEeiMpNHGn4L7CR62e7RSjL8rQzrro6S++lxiDJZyJtmkYb3dAB66gdkec5HP7pyb3G/mDoiCxbU2bPOMx0OhRtjVtkT3QMleu1MBmSeLSER8F0cmRqoGgOreYPr4s8Bo0YpawOjwX+gTNPWuWcC5xDreBeMlPWhKJgL6+LmENHW19FNwkX2mbZ3X78AZ/Wm+XSeLl+AAAAAElFTkSuQmCC";function ee(){const e={starOn:Z,starOff:_,space:!1,readOnly:!0,halfShow:!1};Array.from(document.querySelectorAll("[data-raty]")).map(t=>{const o=Number(t.dataset.score);new R(t,{...e,score:o}).init()})}function te(){const e=new $(".swiper",{direction:"horizontal",loop:!1,autoHeight:!1,effect:"slide",navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev",addIcons:!1,enabled:!1},breakpoints:{768:{navigation:{enabled:!0}}},pagination:{el:".swiper-pagination",type:"bullets",renderBullet:function(s,t){return s<3?'<span class="'+t+'"></span>':""}}});e.on("slideChange",function(){let s=e.activeIndex,t=document.querySelectorAll(".swiper-pagination-bullet");t.forEach(o=>o.classList.remove("swiper-pagination-bullet-active")),s==0?t[0].classList.add("swiper-pagination-bullet-active"):s==9?t[2].classList.add("swiper-pagination-bullet-active"):t[1].classList.add("swiper-pagination-bullet-active")})}se();async function se(){try{const s=(await O()).data;z(s)}catch{h("Error create feedbacks list","error");return}ee(),te()}function re(){const e=document.querySelector(".nav-button"),s=document.querySelector(".modal-close-button"),t=document.querySelector(".modal-menu");document.querySelectorAll(".modal-nav-link").forEach(r=>{r.addEventListener("click",()=>{t.classList.remove("modal-open")})}),e.addEventListener("click",()=>{t.classList.remove("slideOutUp"),document.body.style.overflow="hidden",t.classList.add("modal-open","animate","slideInDown")}),s.addEventListener("click",()=>{t.classList.remove("slideInDown"),t.classList.add("slideOutUp"),setTimeout(()=>{t.classList.remove("modal-open")},1e3),document.body.style.overflow="auto"})}re();const{height:oe}=document.querySelector(".header").getBoundingClientRect();document.body.style.paddingTop=`${oe}px`;
//# sourceMappingURL=index.js.map
