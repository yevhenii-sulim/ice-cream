const e=document.querySelectorAll(".slid-link"),t=document.querySelector(".review"),s=document.querySelector(".reviews-container"),a={position:0,step:t.getBoundingClientRect().width+30,scrollSlide(l){if(l.preventDefault(),"step"===l.target.dataset.atribut){const o=Object.values(e),c=Math.abs(o.indexOf(l.target)*a.step);t.querySelector(".active").classList.remove("active"),l.target.className="active",s.style.right=`${c}px`}}},[l,o,c,i]=[".modal-menu",".mobile-menu","body",".slid"].map((e=>document.querySelector(e))),r=o.querySelector("ul");i.addEventListener("click",a.scrollSlide),c.addEventListener("click",(function(e){"button"===e.target.localName&&("close"===e.target.dataset.atribut&&(document.querySelector(".backdrop.is-open").classList.remove("is-open"),c.classList.remove("not-scroll")),e.target.hasAttribute("data-atribut")&&"close"!==e.target.dataset.atribut&&(document.querySelector(`.${e.target.dataset.atribut}`).classList.add("is-open"),c.classList.add("not-scroll")))})),l.addEventListener("click",(function(){l.classList.toggle("is-open"),o.classList.toggle("is-open"),c.classList.toggle("not-scroll")})),r.addEventListener("click",(function(e){"a"===e.target.localName&&(l.classList.remove("is-open"),o.classList.remove("is-open"),c.classList.remove("not-scroll"))}));
//# sourceMappingURL=index.6166afda.js.map
