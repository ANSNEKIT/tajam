"use strict";var $modal=document.getElementById("modal-video"),$modalClose=document.getElementById("modal-close"),$modalShadow=document.querySelector(".modal-backdrop"),$aboutBtn=document.getElementById("about-btn"),$commentsBlock=document.querySelector("#people .people__list");$aboutBtn.addEventListener("click",function(){$modal.classList.add("show"),$modalShadow.classList.add("show")}),$modalClose.addEventListener("click",function(){$modal.classList.remove("show"),$modalShadow.classList.remove("show")}),$commentsBlock.addEventListener("click",function(e){var t=document.querySelector("#people li.people__item.active"),o=e.target;"IMG"===e.target.tagName&&(a=o.getAttribute("data-id"));var a=document.querySelector('#people li.people__item[data-id="'.concat(a,'"]'));t.classList.remove("active"),a.classList.add("active")});