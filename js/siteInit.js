import{a as ie,c as ye,d as Et,e as Ct,f as Lt,g as Tt,i as Oe}from"./chunk-N7PYCLUC.js";import{$ as E,A as ne,B as et,C as re,D as Ie,E as qe,F as tt,G as ot,J as st,K as nt,L as rt,M as it,N as at,O as ct,P as lt,Q as dt,R as ut,S as mt,T as ft,U as ht,V as pt,W as gt,X as vt,Y as wt,Z as yt,_ as bt,a as b,aa as H,c as $,e as Y,f as Xe,h as ee,i as Ze,j as g,k as ke,l as te,m as oe,n as Ve,o as Je,p as se,q as ve,r as Ke,s as N,t as _,u as we,v as B,w as He,x as p,y as Qe,z as k}from"./chunk-W73PKSYQ.js";import{c as m}from"./chunk-GJGGQB72.js";m();m();m();Ze();var W=(e,t)=>{p.hasClass("on")?(p.removeClass("on"),B.removeClass("close"),t?p.style="":E(p,"slideRightOut")):t?p.style="":E(p,"slideRightIn",()=>{p.addClass("on"),B.addClass("close")})},St=()=>{let e=p.querySelector(".inner");p.querySelector(".tab")&&e.removeChild(p.querySelector(".tab"));let t=document.createElement("ul"),o="active";t.className="tab",["contents","related","overview"].forEach(s=>{let n=p.querySelector(".panel."+s);if(n.innerHTML.trim().length<1){s==="contents"&&ee(re,"none");return}s==="contents"&&ee(re,"");let i=document.createElement("li"),c=document.createElement("span"),a=document.createTextNode(n.getAttribute("data-title"));c.appendChild(a),i.appendChild(c),i.addClass(s+" item"),o?(n.addClass(o),i.addClass(o)):n.removeClass("active"),i.addEventListener("click",r=>{let d=r.currentTarget;d.hasClass("active")||(p.find(".tab .item").forEach(l=>{l.removeClass("active")}),p.find(".panel").forEach(l=>{l.removeClass("active")}),p.querySelector(".panel."+d.className.replace(" item","")).addClass("active"),d.addClass("active"))}),t.appendChild(i),o=""}),t.childNodes.length>1?(e.insertBefore(t,e.childNodes[0]),p.querySelector(".panels").style.paddingTop=""):p.querySelector(".panels").style.paddingTop=".625rem"},xt=()=>{let e=a=>{let r=t[a];if(!r||r.hasClass("current"))return;b.each(".toc .active",l=>{l&&l.removeClass("active current")}),o.forEach(l=>{l&&l.removeClass("active")}),r.addClass("active current"),o[a]&&o[a].addClass("active");let d=r.parentNode;for(;!d.matches(".contents");){if(d.matches("li")){d.addClass("active");let l=document.getElementById(decodeURIComponent(d.querySelector("a.toc-link").getAttribute("href").replace("#","")));l&&l.addClass("active")}d=d.parentNode}getComputedStyle(p).display!=="none"&&n.hasClass("active")&&H(n,r.offsetTop-n.offsetHeight/4)},t=b.all(".contents li");if(t.length<1)return;let o=[...t],s=null;o=o.map((a,r)=>{let d=a.querySelector("a.toc-link"),l=document.getElementById(decodeURI(d.getAttribute("href").replace("#","")));if(!l)return null;let f=l.querySelector("a.anchor"),u=v=>{v.preventDefault();let q=document.getElementById(decodeURI(v.currentTarget.getAttribute("href").replace("#","")));s=r,H(q,null,()=>{e(r),s=null})};return d.addEventListener("click",u),f&&f.addEventListener("click",v=>{u(v),Ct(g.hostname+"/"+LOCAL.path+v.currentTarget.getAttribute("href"))}),l});let n=p.querySelector(".contents.panel"),i=a=>{let r=0,d=a[r];if(d.boundingClientRect.top>0)return r=o.indexOf(d.target),r===0?0:r-1;for(;r<a.length;r++)if(a[r].boundingClientRect.top<=0)d=a[r];else return o.indexOf(d.target);return o.indexOf(d.target)};(()=>{let a=new IntersectionObserver(r=>{let d=i(r)+(oe<0?1:0);s===null&&e(d)},{rootMargin:"0px 0px -100% 0px",threshold:0});o.forEach(r=>{r&&a.observe(r)})})()},Me=()=>{H(0)},_t=()=>{H(parseInt(String(Y(Ke))))},At=()=>{H(document.getElementById("comments"))},kt=()=>{b.each(".menu .item:not(.title)",e=>{let t=e.querySelector("a[href]"),o=e.parentNode.parentNode;if(!t)return;let s=t.pathname===location.pathname||t.pathname===location.pathname.replace("index.html",""),n=!g.root.startsWith(t.pathname)&&location.pathname.startsWith(t.pathname),i=!t.onclick&&t.hostname===location.hostname&&(s||n);e.toggleClass("active",i),e.parentNode.querySelector(".active")&&o.hasClass("dropdown")?o.removeClass("active").addClass("expand"):o.removeClass("expand")})};m();var S={timer:void 0,lock:!1,show(){clearTimeout(this.timer),document.body.removeClass("loaded"),N.setAttribute("style","display:block"),S.lock=!1},hide(e){g.loader.start||(e=-1),this.timer=setTimeout(this.vanish,e||3e3)},vanish(){S.lock||(g.loader.start&&E(N,0),document.body.addClass("loaded"),S.lock=!0)}};function Re(){b.each(".overview .menu > .item",t=>{_.querySelector(".menu").appendChild(t.cloneNode(!0))}),N.addEventListener("click",S.vanish),B.addEventListener("click",W),document.querySelector(".dimmer").addEventListener("click",W),He.querySelector(".down").addEventListener("click",_t),He.querySelector(".up").addEventListener("click",Me),k||yt($(we,"div",{id:"tool",innerHTML:'<div class="item player"></div><div class="item contents"><i class="ic i-list-ol"></i></div><div class="item chat"><i class="ic i-comments"></i></div><div class="item back-to-top"><i class="ic i-arrow-up"></i><span>0%</span></div>'})),pt(k.querySelector(".player")),gt(k.querySelector(".back-to-top")),vt(k.querySelector(".chat")),wt(k.querySelector(".contents")),ne.addEventListener("click",Me),et.addEventListener("click",At),re.addEventListener("click",W),(()=>{new IntersectionObserver(([t])=>{t.isIntersecting?(document.querySelectorAll(".parallax>use").forEach(o=>{o.classList.remove("stop-animation")}),document.querySelectorAll("#imgs .item").forEach(o=>{o.classList.remove("stop-animation")})):(document.querySelectorAll(".parallax>use").forEach(o=>{o.classList.add("stop-animation")}),document.querySelectorAll("#imgs .item").forEach(o=>{o.classList.add("stop-animation")}))},{root:null,threshold:.2}).observe(document.getElementById("waves")),new IntersectionObserver(([t])=>{t.isIntersecting?document.querySelectorAll(".with-love>i").forEach(o=>{o.classList.remove("stop-animation")}):document.querySelectorAll(".with-love>i").forEach(o=>{o.classList.add("stop-animation")})},{root:null,threshold:.2}).observe(document.querySelector(".with-love"))})()}m();m();var Ht=()=>{if(!document.querySelector(".index.wrap"))return;let e=new IntersectionObserver(t=>{t.forEach(o=>{o.target.hasClass("show")?e.unobserve(o.target):(o.isIntersecting||o.intersectionRatio>0)&&(o.target.addClass("show"),e.unobserve(o.target))})},{root:null,threshold:[.3]});b.each(".index.wrap article.item, .index.wrap section.item",t=>{e.observe(t)}),document.querySelector(".index.wrap .item:first-child").addClass("show"),b.each(".cards .item",t=>{["mouseenter","touchstart"].forEach(o=>{t.addEventListener(o,()=>{let s=document.querySelector(".cards .item.active");s&&s.removeClass("active"),t.addClass("active")},{passive:!0})}),["mouseleave"].forEach(o=>{t.addEventListener(o,()=>{t.removeClass("active")},{passive:!0})})})};m();m();var A=e=>{let t=document.querySelector(".theme .ic");e==="dark"?(ve.setAttribute("data-theme",e),t.removeClass("i-sun"),t.addClass("i-moon")):(ve.removeAttribute("data-theme"),t.removeClass("i-moon"),t.addClass("i-sun"))},It=()=>{g.auto_dark.enable&&(new Date().getHours()>=g.auto_dark.start||new Date().getHours()<=g.auto_dark.end?A("dark"):A())},Pe=e=>{ve.getAttribute("data-theme")==="dark"&&(e="#222"),document.querySelector('meta[name="theme-color"]').setAttribute("content",e)},qt=()=>{window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change",t=>{t.matches?A("dark"):A()});let e=ie.get("theme");e?A(e):g.darkmode&&A("dark")};var no=document.getElementById("waves"),be=()=>{nt(Y(_)),rt(Y(we)),it(qe+Y(no)),ot!==window.innerWidth&&W(null,1),at(window.innerHeight),ct(window.innerWidth)},Ot=()=>{let e=window.innerHeight,t=document.querySelector("main > .inner").offsetHeight,o=t>e?t-e:document.body.scrollHeight-e,s=window.scrollY>qe,n=window.scrollY>0;s?Pe("#FFF"):Pe("#222"),_.toggleClass("show",s),k.toggleClass("affix",n),Qe.toggleClass("affix",n),p.toggleClass("affix",window.scrollY>tt&&document.body.offsetWidth>=991),typeof te.y>"u"&&(te.y=window.scrollY),lt(te.y-window.scrollY),oe<0?(_.removeClass("up"),_.toggleClass("down",s)):oe>0&&(_.removeClass("down"),_.toggleClass("up",s)),te.y=window.scrollY;let i=Math.round(Math.min(100*window.scrollY/o,100))+"%";ne.querySelector("span").innerText!==i&&(ne.querySelector("span").innerText=i),(document.getElementById("sidebar").hasClass("affix")||document.getElementById("sidebar").hasClass("on"))&&Xe(document.querySelector(".percent"),i)},Mt=()=>{let e=document.querySelector('[rel="icon"]');document.addEventListener("visibilitychange",()=>{switch(document.visibilityState){case"hidden":e.setAttribute("href",ke+g.favicon.hidden),document.title=LOCAL.favicon.hide,g.loader.switch&&S.show(),clearTimeout(Je);break;case"visible":e.setAttribute("href",ke+g.favicon.normal),document.title=LOCAL.favicon.show,g.loader.switch&&S.hide(1e3),dt(setTimeout(()=>{document.title=Ve},2e3));break}},{passive:!0})};m();m();m();m();function Ee(e,t,o){let s=e*4+1,n=6+t*(5+s),i=[137,80,78,71,13,10,26,10,0,0,0,13,73,72,68,82,0,0,e>>8,e&255,0,0,t>>8,t&255,8,6,0,0,0,0,0,0,0,n>>>24,n>>16&255,n>>8&255,n&255,73,68,65,84,120,1],c=[0,498536548,997073096,651767980,1994146192,1802195444,1303535960,1342533948,-306674912,-267414716,-690576408,-882789492,-1687895376,-2032938284,-1609899400,-1111625188],a=1,r=0;for(let l=0,f=0,u=s-1;l<t;l++,u+=s-1)for(i.push(l+1<t?0:1,s&255,s>>8,~s&255,s>>8^255,0),r=(r+a)%65521;f<u;f++){let v=o[f]&255;i.push(v),a=(a+v)%65521,r=(r+a)%65521}i.push(r>>8,r&255,a>>8,a&255,0,0,0,0,0,0,0,0,73,69,78,68,174,66,96,130);for(let[l,f]of[[12,29],[37,41+n]]){let u=-1;for(let v=l;v<f;v++)u^=i[v],u=u>>>4^c[u&15],u=u>>>4^c[u&15];u=~u,i[f++]=u>>>24,i[f++]=u>>16&255,i[f++]=u>>8&255,i[f++]=u&255}return`data:image/png;base64,${globalThis.btoa(String.fromCharCode(...i))}`}var Pt=new Uint8Array(128);for(let e=0;e<83;e++)Pt["0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz#$%*+,-.:;=?@[]^_{|}~".charCodeAt(e)]=e;var Ce=(e,t,o)=>{let s=0;for(;t<o;)s*=83,s+=Pt[e.charCodeAt(t++)];return s},Nt=Math.pow,ce=Math.PI,ro=ce*2,Bt=3294.6,Dt=269.025,io=e=>e>10.31475?Nt(e/Dt+.052132,2.4):e/Bt,Ne=e=>~~(e>1227e-8?Dt*Nt(e,.416666)-13.025:e*Bt+1),ae=e=>(e<0?-1:1)*e*e,Rt=e=>{for(e+=ce/2;e>ce;)e-=ro;let t=1.27323954*e-.405284735*ae(e);return .225*(ae(t)-t)+t};function ao(e){let t=Ce(e,2,6);return[t>>16,t>>8&255,t&255]}function co(e,t,o,s){let n=Ce(e,0,1),i=n%9+1,c=~~(n/9)+1,a=i*c,r=0,d=0,l=0,f=0,u=0,v=0,q=0,O=0,U=0,L=0,M=0,j=0,Z=(Ce(e,1,2)+1)/13446*(s|1),T=new Float64Array(a*3),z=ao(e);for(r=0;r<3;r++)T[r]=io(z[r]);for(r=1;r<a;r++)j=Ce(e,4+r*2,6+r*2),T[r*3]=ae(~~(j/361)-9)*Z,T[r*3+1]=ae(~~(j/19)%19-9)*Z,T[r*3+2]=ae(j%19-9)*Z;let le=new Float64Array(c*o),de=new Float64Array(i*t);for(d=0;d<c;d++)for(f=0;f<o;f++)le[d*o+f]=Rt(ce*f*d/o);for(r=0;r<i;r++)for(l=0;l<t;l++)de[r*t+l]=Rt(ce*l*r/t);let ue=t*4,R=new Uint8ClampedArray(ue*o);for(f=0;f<o;f++)for(l=0;l<t;l++){for(u=v=q=0,d=0;d<c;d++)for(U=le[d*o+f],r=0;r<i;r++)O=de[r*t+l]*U,L=(r+d*i)*3,u+=T[L]*O,v+=T[L+1]*O,q+=T[L+2]*O;M=4*l+f*ue,R[M]=Ne(u),R[M+1]=Ne(v),R[M+2]=Ne(q),R[M+3]=255}return R}var Le=32,Ut="data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'%3E%3C/svg%3E";function jt(e,{ratio:t=1,size:o=Le}={}){let{width:s,height:n}=lo(t,o),i=co(e,s,n);return Ee(s,n,i)}function lo(e,t){let o=e>=1;return{width:o?t:Math.round(t*e),height:o?Math.round(t/e):t}}m();function uo(e){let{PI:t,min:o,max:s,cos:n,round:i}=Math,c=e[0]|e[1]<<8|e[2]<<16,a=e[3]|e[4]<<8,r=(c&63)/63,d=(c>>6&63)/31.5-1,l=(c>>12&63)/31.5-1,f=(c>>18&31)/31,u=c>>23,v=(a>>3&63)/63,q=(a>>9&63)/63,O=a>>15,U=s(3,O?u?5:7:a&7),L=s(3,O?a&7:u?5:7),M=u?(e[5]&15)/15:1,j=(e[5]>>4)/15,Z=u?6:5,T=0,z=(J,x,K)=>{let G=[];for(let P=0;P<x;P++)for(let F=P?0:1;F*x<J*(x-P);F++)G.push(((e[Z+(T>>1)]>>((T++&1)<<2)&15)/7.5-1)*K);return G},le=z(U,L,f),de=z(3,3,v*1.25),ue=z(3,3,q*1.25),R=u&&z(5,5,j),me=mo(e),fe=i(me>1?32:32*me),he=i(me>1?32/me:32),V=new Uint8Array(fe*he*4),pe=[],ge=[];for(let J=0,x=0;J<he;J++)for(let K=0;K<fe;K++,x+=4){let G=r,P=d,F=l,Fe=M;for(let h=0,y=s(U,u?5:3);h<y;h++)pe[h]=n(t/fe*(K+.5)*h);for(let h=0,y=s(L,u?5:3);h<y;h++)ge[h]=n(t/he*(J+.5)*h);for(let h=0,y=0;h<L;h++)for(let C=h?0:1,Q=ge[h]*2;C*L<U*(L-h);C++,y++)G+=le[y]*pe[C]*Q;for(let h=0,y=0;h<3;h++)for(let C=h?0:1,Q=ge[h]*2;C<3-h;C++,y++){let We=pe[C]*Q;P+=de[y]*We,F+=ue[y]*We}if(u)for(let h=0,y=0;h<5;h++)for(let C=h?0:1,Q=ge[h]*2;C<5-h;C++,y++)Fe+=R[y]*pe[C]*Q;let $e=G-2/3*P,Ye=(3*G-$e+F)/2,so=Ye-F;V[x]=s(0,255*o(1,Ye)),V[x+1]=s(0,255*o(1,so)),V[x+2]=s(0,255*o(1,$e)),V[x+3]=s(0,255*o(1,Fe))}return{w:fe,h:he,rgba:V}}function mo(e){let t=e[3],o=e[2]&128,s=e[4]&128,n=s?o?5:7:t&7,i=s?t&7:o?5:7;return n/i}function zt(e){let t=fo(e),{w:o,h:s,rgba:n}=uo(t);return Ee(o,s,n)}function fo(e){return Uint8Array.from(globalThis.atob(ho(e)),t=>t.charCodeAt(0))}function ho(e){return e.replaceAll("-","+").replaceAll("_","/")}var Gt=typeof window>"u",Ft=!Gt&&"loading"in HTMLImageElement.prototype,$t=!Gt&&(!("onscroll"in window)||/(?:gle|ing|ro)bot|crawl|spider/i.test(navigator.userAgent));function po(e,t=document){return typeof e=="string"?[...t.querySelectorAll(e)]:e instanceof Element?[e]:[...e]}function go(e){let t=Date.now();return Ut.replace(/\s/,` data-id='${t}-${e}' `)}function vo(e,t){let o;return function(...s){o!=null&&clearTimeout(o),o=setTimeout(()=>{e(...s),o=void 0},t)}}function Ue(e='img[loading="lazy"]',{hash:t=!0,hashType:o="blurhash",placeholderSize:s=Le,updateSizesOnResize:n=!1,onImageLoad:i}={}){let c=new Set;for(let[a,r]of po(e).entries()){let d=De(r,{updateOnResize:n});if(n&&d&&c.add(d),t){let f=Yt({image:r,hash:typeof t=="string"?t:void 0,hashType:o,size:s});f&&(r.src=f)}if(!r.dataset.src&&!r.dataset.srcset)continue;if($t||!Ft){Wt(r),xe(r),Se(r);continue}if(r.src||(r.src=go(a)),r.complete&&r.naturalWidth>0){Be(r,i);continue}let l=()=>Be(r,i);r.addEventListener("load",l,{once:!0}),c.add(()=>r.removeEventListener("load",l))}return()=>{for(let a of c)a();c.clear()}}function Be(e,t){if(Zt(e)){Wt(e),xe(e),Se(e),t?.(e);return}let o=new Image,{srcset:s,src:n,sizes:i}=e.dataset;if(i==="auto"){let c=Xt(e);c&&(o.sizes=`${c}px`)}else e.sizes&&(o.sizes=e.sizes);s&&(o.srcset=s),n&&(o.src=n),o.addEventListener("load",()=>{xe(e),Se(e),t?.(e)},{once:!0})}function Yt({image:e,hash:t,hashType:o="blurhash",size:s=Le,ratio:n}={}){if(e&&!t){let{blurhash:i,thumbhash:c}=e.dataset;t=c||i,o=c?"thumbhash":"blurhash"}if(t)try{if(o==="blurhash"){if(e&&!n){let i=e.width||e.offsetWidth||s,c=e.height||e.offsetHeight||s;n=i/c}return jt(t,{ratio:n,size:s})}return zt(t)}catch{}}var Te=new WeakMap;function De(e,t){if(e.dataset.sizes!=="auto")return;let o=Xt(e);if(o&&(e.sizes=`${o}px`),Zt(e)&&t?.processSourceElements)for(let s of[...e.parentElement.getElementsByTagName("source")])De(s,{processSourceElements:!0});if(t?.updateOnResize){if(!Te.has(e)){let s=vo(()=>De(e),500),n=new ResizeObserver(s);Te.set(e,n),n.observe(e)}return()=>{let s=Te.get(e);s&&(s.disconnect(),Te.delete(e))}}}function Se(e){e.dataset.src&&(e.src=e.dataset.src,e.removeAttribute("data-src"))}function xe(e){e.dataset.srcset&&(e.srcset=e.dataset.srcset,e.removeAttribute("data-srcset"))}function Wt(e){let t=e.parentElement;t?.tagName.toLowerCase()==="picture"&&([...t.querySelectorAll("source[data-srcset]")].forEach(xe),[...t.querySelectorAll("source[data-src]")].forEach(Se))}function Xt(e){return e instanceof HTMLSourceElement?e.parentElement?.getElementsByTagName("img")[0]?.offsetWidth:e.offsetWidth}function Zt(e){return e.parentElement?.tagName.toLowerCase()==="picture"}var Vt=()=>{ye(),p.hasClass("on")&&E(p,0,()=>{p.removeClass("on"),B.removeClass("close")});let e=document.getElementById("main");e.innerHTML="",e.appendChild(N.lastChild.cloneNode(!0)),H(0)},je=async e=>{ut(0),mt(window.location.href),Oe("katex"),await import("./copy-tex-DFRUQZTP.js"),Oe("mermaid");let t=new IntersectionObserver(function(s,n){s.forEach(i=>{if(i.isIntersecting){let c=i.target;c.style.backgroundImage=`url("${c.getAttribute("data-background-image")}")`,c.removeAttribute("data-background-image"),n.unobserve(c)}})},{root:null,threshold:.2});document.querySelectorAll("[data-background-image]").forEach(s=>{t.observe(s)}),e!==1&&b.each("script[data-pjax]",Tt),ht(document.title),be(),kt(),St(),xt(),import("./post-D2JWRVIH.js").then(({postBeauty:s})=>{s()});let o=document.getElementById("copyright");if(o){let s=new IntersectionObserver(n=>{n.forEach(i=>{i.isIntersecting&&s.disconnect()})},{root:null,threshold:.2});s.observe(o)}Ue(),Lt(),S.hide(100),setTimeout(()=>{Et()},500),Ht()};m();function ze(){let e=!0;window.addEventListener("DOMContentLoaded",function(){e=!1}),document.readyState==="loading"&&window.addEventListener("load",function(){e&&(window.dispatchEvent(new Event("DOMContentLoaded")),console.log("%c \u2601\uFE0Fcloudflare patch %c running","color: white; background: #ff8c00; padding: 5px 3px;","padding: 4px;border:1px solid #ff8c00"))})}ze();m();function D(e,t,o){return e instanceof HTMLCollection||e instanceof NodeList||e instanceof Array?Array.prototype.forEach.call(e,t,o):t.call(o,e,0,[e])}var eo=(e,t)=>{e=typeof e=="string"?e.split(" "):e,e.forEach(t)};function Ge(e,t,o,s){eo(t,n=>{D(e,i=>{i.addEventListener(n,o,s)})})}function X(e,t,o={}){eo(t,s=>{let n=new CustomEvent(s,{bubbles:!0,cancelable:!0,...o});D(e,i=>{i.dispatchEvent(n)})})}function Jt(e){let t=e.text||e.textContent||e.innerHTML||"",o=e.src||"",s=e.parentNode||document.querySelector("head")||document.documentElement,n=document.createElement("script");return t.match("document.write")?!1:(n.type="text/javascript",n.id=e.id,o!==""&&(n.src=o,n.async=!1),t!==""&&n.appendChild(document.createTextNode(t)),s.appendChild(n),(s instanceof HTMLHeadElement||s instanceof HTMLBodyElement)&&s.contains(n)&&s.removeChild(n),!0)}function wo(e){e.tagName.toLowerCase()==="script"&&Jt(e),D(e.querySelectorAll("script"),t=>{let o=t;(!o.type||o.type.toLowerCase()==="text/javascript")&&(o.parentNode&&o.parentNode.removeChild(o),Jt(o))})}function yo(e,t,o,s=document){e.forEach(n=>{D(s.querySelectorAll(n),t,o)})}var _e=(()=>{let e=0;return()=>`pjax${new Date().getTime()}_${e++}`})();function to(e,t){e.outerHTML=t.outerHTML,this.onSwitch()}function bo(e,t){e.innerHTML=t.innerHTML,t.className===""?e.removeAttribute("class"):e.className=t.className,this.onSwitch()}function Kt(e,t){if(e.innerHTML=t.innerHTML,t.hasAttributes()){let o=t.attributes;for(let s=0;s<o.length;s++)e.attributes.setNamedItem(o[s].cloneNode())}this.onSwitch()}function Eo({elements:e="a[href]",selectors:t=["title",".js-Pjax"],switches:o={},switchesOptions:s={},history:n=!0,scrollTo:i=0,scrollRestoration:c=!0,cacheBust:a=!0,timeout:r=0,currentUrlFullReload:d=!1}={}){let l={elements:e,selectors:t,switches:o,switchesOptions:s,history:n,scrollTo:i,scrollRestoration:c,cacheBust:a,timeout:r,currentUrlFullReload:d};return l.switches.head||(l.switches.head=Kt),l.switches.body||(l.switches.body=Kt),l}var Ae="data-pjax-state";function Qt(e,t){if(t.defaultPrevented||t.returnValue===!1)return;let o={...this.options},s=Co(e,t);if(s){e.setAttribute(Ae,s);return}if(t.preventDefault(),this.options.currentUrlFullReload&&e.href===window.location.href.split("#")[0]){e.setAttribute(Ae,"reload"),this.reload();return}e.setAttribute(Ae,"load"),o.triggerElement=e,this.loadUrl(e.href,o)}function Co(e,t){return t.which>1||t.metaKey||t.ctrlKey||t.shiftKey||t.altKey?"modifier":e.protocol!==window.location.protocol||e.host!==window.location.host?"external":e.hash&&e.href.replace(e.hash,"")===window.location.href.replace(location.hash,"")?"anchor":e.href===window.location.href.split("#")[0]+"#"?"anchor-empty":null}function Lo(e){e.setAttribute(Ae,""),Ge(e,"click",t=>Qt.call(this,e,t)),Ge(e,"keyup",t=>{let o=t;o.keyCode===13&&Qt.call(this,e,o)})}function To(e,t,o,s){if(s={...s||this.options},s.request=t,e===!1){X(document,"pjax:complete pjax:error",s);return}let n=window.history.state||{};window.history.replaceState({url:n.url||window.location.href,title:n.title||document.title,uid:n.uid||_e(),scrollPos:[document.documentElement.scrollLeft||document.body.scrollLeft,document.documentElement.scrollTop||document.body.scrollTop]},document.title,window.location.href);let i=o;t.responseURL?o!==t.responseURL&&(o=t.responseURL):t.getResponseHeader("X-PJAX-URL")?o=t.getResponseHeader("X-PJAX-URL"):t.getResponseHeader("X-XHR-Redirected-To")&&(o=t.getResponseHeader("X-XHR-Redirected-To"));let c=document.createElement("a");c.href=i;let a=c.hash;c.href=o,a&&!c.hash&&(c.hash=a,o=c.href),this.state.href=o,this.state.options=s;try{this.loadContent(e,s)}catch(r){return X(document,"pjax:error",s),console.error("Pjax switch fail: ",r),this.latestChance(o)}}function So(e){switch(e.tagName.toLowerCase()){case"a":e.hasAttribute("data-pjax-state")||this.attachLink(e);break;default:throw new Error("theme-shokax-pjax can only be applied on <a>")}}function xo(e,t,o){let s=new RegExp("([?&])"+t+"=.*?(&|$)","i"),n=e.indexOf("?")!==-1?"&":"?";return e.match(s)?e.replace(s,"$1"+t+"="+o+"$2"):e+n+t+"="+o}function _o(e,t={},o){let s=t.requestOptions||{},n=(s.requestMethod||"GET").toUpperCase(),i=s.requestParams||null,c=null,a=new XMLHttpRequest,r=t.timeout;if(a.onreadystatechange=()=>{a.readyState===4&&(a.status===200?o(a.responseText,a,e,t):a.status!==0&&o(null,a,e,t))},a.onerror=d=>{console.error(d),o(null,a,e,t)},a.ontimeout=()=>{o(null,a,e,t)},i&&i.length){let d=i.map(l=>l.name+"="+l.value).join("&");switch(n){case"GET":e=e.split("?")[0],e+="?"+d;break;case"POST":c=d;break}}return t.cacheBust&&(e=xo(e,"t",Date.now())),a.open(n,e,!0),a.timeout=r,a.setRequestHeader("X-Requested-With","XMLHttpRequest"),a.setRequestHeader("X-PJAX","true"),a.setRequestHeader("X-PJAX-Selectors",JSON.stringify(t.selectors)),a.send(c),a}function Ao(e,t,o,s,n,i){let c=[];o.forEach(a=>{let r=s.querySelectorAll(a),d=n.querySelectorAll(a);if(r.length!==d.length)throw new Error(`DOM doesn't look the same on new loaded page: '${a}' - new ${r.length}, old ${d.length}`);D(r,(l,f)=>{let u=d[f],v=e[a]?e[a].bind(this,u,l,i,t[a]):to.bind(this,u,l,i);c.push(v)},this)},this),this.state.numPendingSwitches=c.length,c.forEach(a=>{a()})}function ko(e,t,o){for(let s of t){let n=e.querySelectorAll(s);for(let i=0;i<n.length;i++)if(n[i].contains(o))return!0}return!1}var I=class{constructor(t){this.state={numPendingSwitches:0,href:null,options:null},this.options=Eo(t),this.options.scrollRestoration&&"scrollRestoration"in history&&(history.scrollRestoration="manual"),this.maxUid=this.lastUid=_e(),this.parseDOM(document),Ge(window,"popstate",o=>{let s=o;if(s.state){let n={...this.options};n.url=s.state.url,n.title=s.state.title,n.history=!1,n.scrollPos=s.state.scrollPos,s.state.uid<this.lastUid?n.backward=!0:n.forward=!0,this.lastUid=s.state.uid,this.loadUrl(s.state.url,n)}})}getElements(t){return t.querySelectorAll(this.options.elements)}parseDOM(t){D(this.getElements(t),So,this)}refresh(t){this.parseDOM(t||document)}reload(){window.location.reload()}forEachSelectors(t,o,s){return yo.bind(this)(this.options.selectors,t,o,s)}switchSelectors(t,o,s,n){return Ao.bind(this)(this.options.switches,this.options.switchesOptions,t,o,s,n)}latestChance(t){window.location=t}onSwitch(){X(window,"resize scroll"),this.state.numPendingSwitches--,this.state.numPendingSwitches===0&&this.afterAllSwitches()}loadContent(t,o){if(typeof t!="string"){X(document,"pjax:complete pjax:error",o);return}let s=document.implementation.createHTMLDocument("pjax"),n=/<html[^>]+>/gi,i=/\s?[a-z:]+(?:=['"][^'">]+['"])*/gi,c=t.match(n);if(c&&c.length&&(c=c[0].match(i),c.length&&(c.shift(),c.forEach(a=>{let r=a.trim().split("=");r.length===1?s.documentElement.setAttribute(r[0],"true"):s.documentElement.setAttribute(r[0],r[1].slice(1,-1))}))),s.documentElement.innerHTML=t,document.activeElement&&ko(document,this.options.selectors,document.activeElement))try{document.activeElement.blur()}catch{}this.switchSelectors(this.options.selectors,s,document,o)}loadUrl(t,o){o=typeof o=="object"?{...this.options,...o}:{...this.options},this.abortRequest(this.request),X(document,"pjax:send",o),this.request=this.doRequest(t,o,this.handleResponse.bind(this))}afterAllSwitches(){var t,o,s;this.options.selectors.forEach(i=>{D(document.querySelectorAll(i),c=>{wo(c)})});let n=this.state;if(!((t=n.options)===null||t===void 0)&&t.history&&(window.history.state||(this.lastUid=this.maxUid=_e(),window.history.replaceState({url:window.location.href,title:document.title,uid:this.maxUid,scrollPos:[0,0]},document.title)),this.lastUid=this.maxUid=_e(),window.history.pushState({url:n.href,title:n.options.title,uid:this.maxUid,scrollPos:[0,0]},n.options.title,n.href)),this.forEachSelectors(i=>{this.parseDOM(i)},this),X(document,"pjax:complete pjax:success",n.options),!((o=n.options)===null||o===void 0)&&o.history){let i=document.createElement("a");if(i.href=this.state.href,i.hash){let c=i.hash.slice(1);c=decodeURIComponent(c);let a=0,r=document.getElementById(c)||document.getElementsByName(c)[0];if(r&&r.offsetParent)do a+=r.offsetTop,r=r.offsetParent;while(r);window.scrollTo(0,a)}else n.options.scrollTo!==!1&&(Array.isArray(n.options.scrollTo)?window.scrollTo(n.options.scrollTo[0],n.options.scrollTo[1]):window.scrollTo(0,n.options.scrollTo))}else!((s=n.options)===null||s===void 0)&&s.scrollRestoration&&n.options.scrollPos&&window.scrollTo(n.options.scrollPos[0],n.options.scrollPos[1]);this.state={numPendingSwitches:0,href:null,options:null}}abortRequest(t){t&&t.readyState<4&&(t.onreadystatechange=()=>{},t.abort())}};I.prototype.attachLink=Lo;I.prototype.doRequest=_o;I.prototype.handleResponse=To;I.switches={innerHTML:bo,outerHTML:to};m();function oo(){function e(){let t,o=document.querySelector(".theme").querySelector(".ic"),s=$(se,"div",{id:"neko",innerHTML:'<div class="planet"><div class="sun"></div><div class="moon"></div></div><div class="body"><div class="face"><section class="eyes left"><span class="pupil"></span></section><section class="eyes right"><span class="pupil"></span></section><span class="nose"></span></div></div>'}),n=()=>{E(s,{delay:2500,opacity:0},()=>{se.removeChild(s)})};o.hasClass("i-sun")?t=()=>{s.addClass("dark"),A("dark"),ie.set("theme","dark"),n()}:(s.addClass("dark"),t=()=>{s.removeClass("dark"),A(),ie.set("theme","light"),n()}),E(s,1,()=>{setTimeout(t,210)},()=>{ee(s,"block")})}document.getElementById("rightNav").querySelector(".theme .ic").addEventListener("click",e)}var Ho=async()=>{oo(),Re(),ft(new I({selectors:["head title",".languages",".twikoo",".pjax",".leancloud-recent-comment","script[data-config]"],cacheBust:!1})),g.quicklink.ignores=LOCAL.ignores,import("./quicklink-FD7ODGBA.js").then(({listen:e})=>{e(g.quicklink)}),It(),Mt(),qt(),document.querySelector("li.item.search > i").addEventListener("click",()=>{g.search!==null&&(Ie||bt($(se,"div",{id:"search",innerHTML:'<div class="inner"><div class="header"><span class="icon"><i class="ic i-search"></i></span><div class="search-input-container"></div><span class="close-btn"><i class="ic i-times-circle"></i></span></div><div class="results"><div class="inner"><div id="search-stats"></div><div id="search-hits"></div><div id="search-pagination"></div></div></div></div>'})),import("./search-CWF55ANR.js").then(({algoliaSearch:e})=>{e(st)}),b.each(".search",e=>{e.addEventListener("click",()=>{document.body.style.overflow="hidden",E(Ie,"shrinkIn",()=>{document.querySelector(".search-input").focus()})})}))},{once:!0,capture:!0}),window.addEventListener("scroll",Ot,{passive:!0}),window.addEventListener("resize",be,{passive:!0}),window.addEventListener("pjax:send",Vt,{passive:!0}),window.addEventListener("pjax:success",je,{passive:!0}),window.addEventListener("beforeunload",()=>{ye()}),await je(1)};ze();window.addEventListener("DOMContentLoaded",Ho,{passive:!0});console.log("%c Theme.ShokaX v"+g.version+" %c https://github.com/theme-shoka-x/hexo-theme-shokaX ","color: white; background: #e9546b; padding:5px 0;","padding:4px;border:1px solid #e9546b;");
/*! For license information please see siteInit.js.LEGAL.txt */
