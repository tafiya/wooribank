$(document).ready(function(){

    var swiper = new Swiper(".slide1", {
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        pagination: {
          el: ".paging",
          clickable: true,
        },
        navigation: {
          nextEl: ".slide1 .next",
          prevEl: ".slide1 .prev",
        },
      });

      var swiper2 = new Swiper(".slide2", {
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        pagination: {
          el: ".paging",
          clickable: true,
        },
        navigation: {
          nextEl: ".slide2 .next-btn",
          prevEl: ".slide2 .prev-btn",
        },
      });

      var swiper3 = new Swiper(".slide3", {
        slidesPerView: 6,
        spaceBetween: 10,
        loop: true,
        autoplay: {
          delay: 2500,
          disableOnInteraction: true,
        }
      });
});