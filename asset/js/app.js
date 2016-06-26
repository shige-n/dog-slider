
$(function() {
  $('.hero__item').slick({
  autoplay: true,
  autoplaySpeed: 3000,
  pauseOnHover: true,
  infinite: true,
  speed: 800,
	fade: true,
	dots: true
	});
});


// $('.hero__list').on('beforeChange', function(event, slick, currentSlide, nextSlide){
//   console.log(currentSlide);
//   var _time = null;
//   clearInterval(_time);
//   _time =  setTimeout(function() {
//     if (currentSlide === 0){
//       $('.hero__overlay1').removeClass('overlay--hide');
//       $('.hero__overlay2').addClass('overlay--hide');
//     }else{
//       $('.hero__overlay2').removeClass('overlay--hide');
//       $('.hero__overlay1').addClass('overlay--hide');
//     }
//   },800)
//
// });
//
$('[data-remodal-id=modal]').remodal();
