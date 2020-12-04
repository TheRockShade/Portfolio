"use strict";function i(t){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function g(t){return function(t){if(Array.isArray(t))return o(t)}(t)||function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||l(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function v(t,e){var n;if("undefined"==typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(n=l(t))||e&&t&&"number"==typeof t.length){n&&(t=n);var o=0,r=function(){};return{s:r,n:function(){return o>=t.length?{done:!0}:{done:!1,value:t[o++]}},e:function(t){throw t},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,s=!0,c=!1;return{s:function(){n=t[Symbol.iterator]()},n:function(){var t=n.next();return s=t.done,t},e:function(t){c=!0,a=t},f:function(){try{s||null==n.return||n.return()}finally{if(c)throw a}}}}function l(t,e){if(t){if("string"==typeof t)return o(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?o(t,e):void 0}}function o(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,o=new Array(e);n<e;n++)o[n]=t[n];return o}var s,c,b,t,e,_,n,r,u=document.forms.filter,y={page:0};function S(t){t.preventDefault();var e=y.page||0;(y=getFormData(u)).page=e,y.show=+y.show||0,function(){for(var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{},e=Object.keys(t),n=new URL("http://123.ru"),o=0,r=e;o<r.length;o++){var a=r[o];if("object"===i(t[a])){var s,c=v(t[a]);try{for(c.s();!(s=c.n()).done;){var l=s.value;n.searchParams.append(a,l)}}catch(t){c.e(t)}finally{c.f()}}else n.searchParams.append(a,t[a])}history.replaceState({},document.title,n.search)}(y),a(y.show),function(p){var t=new URL("http://123.ru");t.searchParams.set("v",VERSION_API),p.page||(p.page=0);p.tags&&t.searchParams.set("tags",JSON.stringify(p.tags));var e={};p.title&&(e.title=p.title);{var n;p.views&&(n=p.views.split("-"),e.views={$between:[n[0],n[1]]})}{var o,r;0!==p.commentsCount.length&&(o=[],p.commentsCount.forEach(function(t){t.split("-").forEach(function(t){o.push(t)})}),r={min:Math.min.apply(null,o),max:Math.max.apply(null,o)},e.commentsCount={$between:[r.min,r.max]})}t.searchParams.set("filter",JSON.stringify(e));var a=["id","ASC"];p.sort&&(a[0]=p.sort);t.searchParams.set("sort",JSON.stringify(a)),p.show&&t.searchParams.set("limit",JSON.stringify(+p.show));t.searchParams.set("offset",JSON.stringify(p.show*p.page));var h=new XMLHttpRequest;h.open("GET","".concat(SERVER_URL,"/api/posts?").concat(t.searchParams)),h.send(),h.onload=function(){var t,e=JSON.parse(h.response);if(e.success){b.innerHTML="";var n,o=v(e.data);try{for(o.s();!(n=o.n()).done;){var r=n.value;b.innerHTML+=(t=r,'\n\t\t<li class="blog__item">\n\t\t\t<picture>\n\t\t\t\t<source srcset="'.concat(SERVER_URL).concat(t.photo.desktopPhotoUrl,'", srcset="').concat(SERVER_URL).concat(t.photo.desktop2xPhotoUrl,'" 2x" media="(min-width: 800px)">\n\t\t\t\t<source srcset="').concat(SERVER_URL).concat(t.photo.tabletPhotoUrl,', srcset="').concat(SERVER_URL).concat(t.photo.tablet2xPhotoUrl,' 2x" media="(min-width: 670px) and (max-width: 799px)">\n\t\t\t\t<source srcset="').concat(SERVER_URL).concat(t.photo.mobilePhotoUrl,', srcset="').concat(SERVER_URL).concat(t.photo.mobile2xPhotoUrl,' 2x" media="(max-width: 669px)">\n\t\t\t\t<img class="blog__img" src="').concat(SERVER_URL).concat(t.photo.desktopPhotoUrl,'" alt="').concat(t.title,'">\n\t\t\t</picture>\n\t\t\t<div class="blog__box">\n\t\t\t\t<div class="blog__tags cardTags_js"></div>\n\t\t\t\t<div class="blog__info">\n\t\t\t\t\t<span class="blog__data text-small">').concat(new Date(t.date).toLocaleDateString(),'</span>\n\t\t\t\t\t<span class="blog__views text-small">').concat(t.views,' views</span>\n\t\t\t\t\t<span class="blog__comments text-small">').concat(t.commentsCount,' comments</span>\n\t\t\t\t</div>\n\t\t\t\t<h3 class="blog__title title-three">').concat(t.title,'</h3>\n\t\t\t\t<p class="blog__text text">').concat(t.text,'</p>\n\t\t\t\t<a class="blog__link text text--bold" href="#">Go to this post</a>\n\t\t\t</div>\n\t\t</li>'));var a,s=g(document.querySelectorAll(".blog__item")),c=s[s.length-1].querySelector(".cardTags_js"),l=v(r.tags);try{for(l.s();!(a=l.n()).done;){var i=a.value;c.innerHTML+='<span class="blog__tag" style="background-color: '.concat(i.color,'"></span>')}}catch(t){l.e(t)}finally{l.f()}}}catch(t){o.e(t)}finally{o.f()}var u=e.count,d=0;for(_.innerHTML="";0<u-p.show;){u-=p.show;var f=w(d,y,function(t){S(t)});d++,_.insertAdjacentElement("beforeend",f)}var m=w(d,y,function(t){S(t)});_.insertAdjacentElement("beforeend",m)}else console.error(e._message)},h.onerror=function(){return console.error("Произошла ошибка сервера")}}(y)}function a(t){var e=0<arguments.length&&void 0!==t?t:10;b.innerHTML="";for(var n=0;n<e;n++)b.innerHTML+='\n\t\t<li class="blog__preload blog-preload">\n\t\t\t<div class="blog-preload__img"></div>\n\t\t\t<div class="blog-preload__box">\n\t\t\t\t<div class="blog-preload__tags"></div>\n\t\t\t\t<div class="blog-preload__info"></div>\n\t\t\t\t<div class="blog-preload__title"></div>\n\t\t\t\t<div class="blog-preload__text"></div>\n\t\t\t\t<div class="blog-preload__link" href="#"></div>\n\t\t\t</div>\n\t\t</li>'}function w(e,n,o){var t=document.createElement("li");t.classList.add("blog-pagination__item");var r=document.createElement("a");return r.setAttribute("href","?page=".concat(e)),r.classList.add("blog-pagination__link","text","text--bold","link_js"),e===n.page&&r.classList.add("active"),r.addEventListener("click",function(t){t.preventDefault(),n.page=e,o(t)}),r.innerText=+e+1,t.insertAdjacentElement("beforeend",r),t}c=document.querySelector(".tags_js"),b=document.querySelector(".posts_js"),t=document.querySelector(".search-button_js"),e=document.querySelector(".reset-button_js"),_=document.querySelector(".pagination_js"),n=document.querySelector(".left-arrow_js"),r=document.querySelector(".right-arrow_js"),u.addEventListener("submit",S),t.addEventListener("click",function(){return y.page=0}),e.addEventListener("click",function(){setTimeout(function(){return t.click()},100)}),n.addEventListener("click",function(t){0<y.page&&(y.page--,S(t))}),r.addEventListener("click",function(t){var e=_.querySelectorAll("li");y.page<e.length-1&&(y.page++,S(t))}),c.innerHTML=spinnerCreator(),(s=new XMLHttpRequest).open("GET","".concat(SERVER_URL,"/api/tags")),s.send(),s.onload=function(){var t,e=JSON.parse(s.response);if(e.success){c.innerHTML="";var n,o=v(e.data);try{for(o.s();!(n=o.n()).done;){var r=n.value;c.innerHTML+='\n\t\t<label class="filter-form__checkbox-label filter-form__checkbox-label--tags">\n\t\t\t<input class="filter-form__checkbox hidden" type="checkbox" name="tags" value="'.concat((t=r).id,'" aria-label="Tag ').concat(t.color,'" checked>\n\t\t\t<span style="border-color: ').concat(t.color,'" class="filter-form__checkbox-checker filter-form__checkbox-checker--tags filter-form__checkbox-checker--').concat(t.color.slice(1),'"></span>\n\t\t</label>')}}catch(t){o.e(t)}finally{o.f()}var a=function(){var t=new URL(window.location).searchParams,e={};t.has("tags")&&(e.tags=t.getAll("tags"));t.has("views")&&(e.views=t.get("views"));t.has("commentsCount")&&(e.commentsCount=t.getAll("commentsCount"));t.has("show")&&(e.show=t.get("show"));t.has("sort")&&(e.sort=t.get("sort"));t.has("title")&&(e.title=t.get("title"));t.has("page")&&(e.page=t.get("page"));return e}();setValueToForm(u,a)}else console.error(e._message)},s.onerror=function(){return console.error("Произошла ошибка сервера")},a(),setTimeout(function(){return t.click()},1e3);