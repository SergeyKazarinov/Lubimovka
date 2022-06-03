$(document).ready(function(){
  const slider = $("#slider").owlCarousel({
      center: true,
      items:2,
      loop:false,
      margin:30,
      touchDrag:true,
      mouseDrag:true,
      nav: true,
      navText: [
        '<svg width="51" height="50" viewBox="0 0 51 50" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M25 0.999997C11.7452 0.999999 0.999997 11.7452 0.999998 25C0.999999 38.2548 11.7452 49 25 49" stroke="#242424"/><path fill-rule="evenodd" clip-rule="evenodd" d="M15 24.4766L15.7248 25.2014L21.5234 31L22.2263 30.2971L16.9056 24.9765L36 24.9765L36 23.9765L16.9498 23.9765L22.2014 18.7248L21.4766 18L15.7029 23.7737L15 24.4766Z" fill="#242424"/></svg>',
        '<svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M24.9996 1.00006C38.2545 1.00006 48.9996 11.7452 48.9996 25.0001C48.9996 38.2549 38.2545 49.0001 24.9996 49.0001" stroke="#242424"/><path fill-rule="evenodd" clip-rule="evenodd" d="M35 24.4766L34.2752 25.2014L28.4766 31L27.7737 30.2971L33.0944 24.9765L14 24.9765L14 23.9765L33.0502 23.9765L27.7986 18.7248L28.5234 18L34.2971 23.7737L35 24.4766Z" fill="#242424"/></svg>'
      ]
  });
});

// //Делегируем события кнопок next prev по умолчанию нашим кнопкам, которые могут находится ыне контейнера слайдера
// var owl=$(".owl-carousel");
// owl.owlCarousel();
// //$(".next") - находим нашу кнопку
// $(".next").click(function(){
// owl.trigger("next.owl.carousel");
// });
// $(".prev").click(function(){
// owl.trigger("prev.owl.carousel");
// });