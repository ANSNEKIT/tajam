'use strict';

var $modal = document.getElementById('modal-video');
var $modalClose = document.getElementById('modal-close');
var $modalShadow = document.querySelector('.modal-backdrop');
var $aboutBtn = document.getElementById('about-btn');
var $commentsBlock = document.querySelector('#people .people__list');
$aboutBtn.addEventListener('click', function () {
  $modal.classList.add('show');
  $modalShadow.classList.add('show');
});
$modalClose.addEventListener('click', function () {
  $modal.classList.remove('show');
  $modalShadow.classList.remove('show');
});
$commentsBlock.addEventListener('click', function (evt) {
  var $liCurrent = document.querySelector("#people li.people__item.active");
  var $elem = evt.target;
  var id;

  if (evt.target.tagName === "IMG") {
    id = $elem.getAttribute('data-id');
  }

  var $liClicked = document.querySelector("#people li.people__item[data-id=\"".concat(id, "\"]"));
  $liCurrent.classList.remove('active');
  $liClicked.classList.add('active');
});