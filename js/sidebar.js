function u(o) { if (o.classList.contains("active-current")) return; document.querySelectorAll(".post-toc .active").forEach(s => { s.classList.remove("active", "active-current") }), o.classList.add("active", "active-current"); let c = o.parentNode; for (; !c.matches(".post-toc");)c.matches("li") && c.classList.add("active"), c = c.parentNode } function f() { let o = document.querySelectorAll(".post-toc li"); if (!o.length) return; let c = [...o].map(t => { let e = t.querySelector(".toc-link"), n = document.getElementById(decodeURI(e.getAttribute("href")).replace("#", "")); return e.addEventListener("click", a => { a.preventDefault(), window.scrollTo(0, n.offsetTop + 1) }), n }); function s(t) { let e = 0, n = t[e]; if (n.boundingClientRect.top > 0) return e = c.indexOf(n.target), e === 0 ? 0 : e - 1; for (; e < t.length; e++)if (t[e].boundingClientRect.top <= 0) n = t[e]; else return c.indexOf(n.target); return c.indexOf(n.target) } function r(t) { t = Math.floor(t + 1e4); let e = new IntersectionObserver((n, a) => { let i = document.documentElement.scrollHeight + 100; if (i > t) { a.disconnect(), r(i); return } let l = s(n); u(o[l]) }, { rootMargin: `${t}px 0px -100% 0px`, threshold: 0 }); c.forEach(n => { n && e.observe(n) }) } r(document.documentElement.scrollHeight) } function d() { let o = "sidebar-nav-active", c = "sidebar-panel-active"; function s() { let t = document.querySelector(".sidebar-nav-toc"), e = "ri:list-ordered", n = "ri:list-unordered"; !t || t.addEventListener("click", () => { if (console.log("click"), t.classList.contains(o)) { let i = t.querySelector(".iconify"); i.dataset.icon = i.dataset.icon === e ? n : e, document.querySelectorAll(".toc-number").forEach(l => { l.classList.toggle("hidden") }) } }) } function r() { document.querySelectorAll(".sidebar-nav li").forEach(e => { e.onclick = function () { this.classList.contains(o) || (document.querySelector(`.${c}`).classList.remove(c), document.querySelector(`#${this.dataset.target}`).classList.add(c), document.querySelector(`.${o}`).classList.remove(o), this.classList.add(o)) } }) } s(), r(), f() } document.addEventListener("DOMContentLoaded", d); document.addEventListener("pjax:success", d);
