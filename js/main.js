var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
})



/************** COUNTER ***************/
$('.counter').countUp();

/************** COUNTER ***************/



/****************** OWL CAROUSEL ***************** */

$(document).ready(function(){
  $(".carousel-1").owlCarousel({
    items: 1,
    autoplay: true,
    autoplayTimeout: 5000,
    autoplayHoverPause: false,
    loop: true, 
    animateIn: "fadeIn",
    animateOut: "fadeOut",
  });


  

});

$(".carousel-2").owlCarousel({
  items: 1,
  loop: true,
  autoplay: true,
  autoplayTimeout: 5000,
  autoplayHoverPause: false,
  responsive: {
    320: {
      items: 1,
      loop: true,
      autoplay: true,
      autoplayTimeout: 5000,
      autoplayHoverPause: false,
    }
  }
  
});
/****************** OWL CAROUSEL ***************** */



// LG + SCREENS
let screen = window.matchMedia("(min-width: 992px");
if (screen.matches) {

  $('#submenu-1 a.drp').on("click", function(e){
    $(this).next('ul').toggle();
    e.stopPropagation();
    e.preventDefault();
  });
  
  
  $('#submenu-2 a.drp-2').on("click", function(e){
    $(this).next('ul').toggle();
    e.stopPropagation();
    e.preventDefault();
  });
  
  $(".dropdown-menu-1").hide();
  $(".dropdown-menu-2").hide();
  $(".dropdown-menu-3").hide();
  $(".dropdown-menu-4").hide();



  $(".dropdown-1").hover(function(){
    $(".dropdown-menu-1").toggle();
  });
  
  
  $(".dropdown-2").hover(function(){
    $(".dropdown-menu-2").toggle();
  });
  
  $(".dropdown-3").hover(function(){
    $(".dropdown-menu-3").toggle();
  });
  
  
  $(".dropdown-4").hover(function(){
    $(".dropdown-menu-4").toggle();
  });
}



// MD SCREENS
 screen = window.matchMedia("(min-width: 768px");
if (screen.matches) {

  $('#submenu-1 a.drp').on("click", function(e){
    $(this).next('ul').toggle();
    e.stopPropagation();
    e.preventDefault();
  });
  
  
  $('#submenu-2 a.drp-2').on("click", function(e){
    $(this).next('ul').toggle();
    e.stopPropagation();
    e.preventDefault();
  });
  
  // $(".dropdown-menu-1").hide();
  // $(".dropdown-menu-2").hide();
  // $(".dropdown-menu-3").hide();
  // $(".dropdown-menu-4").hide();



  $(".dropdown-1").click( function(){
    // $(".dropdown-menu-1").show();
    
  });
  
  
   $(".dropdown-2").on("click", function(){
     $(".dropdown-menu-2").toggle();
  });
  
   $(".dropdown-3").on("click", function(){
     $(".dropdown-menu-3").toggle();
   });
  
  
   $(".dropdown-4").on("click", function(){
     $(".dropdown-menu-4").toggle();
   });
 }






 // SM SCREENS
 screen = window.matchMedia("(min-width: 576px");
if (screen.matches) {

  $('#submenu-1 a.drp').on("click", function(e){
    $(this).next('ul').toggle();
    e.stopPropagation();
    e.preventDefault();
  });
  
  
  $('#submenu-2 a.drp-2').on("click", function(e){
    $(this).next('ul').toggle();
    e.stopPropagation();
    e.preventDefault();
  });
  
  // $(".dropdown-menu-1").hide();
  // $(".dropdown-menu-2").hide();
  // $(".dropdown-menu-3").hide();
  // $(".dropdown-menu-4").hide();



  $(".dropdown-1").click( function(){
    // $(".dropdown-menu-1").show();
    
  });
  
  
   $(".dropdown-2").on("click", function(){
     $(".dropdown-menu-2").toggle();
  });
  
   $(".dropdown-3").on("click", function(){
     $(".dropdown-menu-3").toggle();
   });
  
  
   $(".dropdown-4").on("click", function(){
     $(".dropdown-menu-4").toggle();
   });
 }











 // XS SCREENS
 screen = window.matchMedia("(min-width: 230px)");
if (screen.matches) {

  $('#submenu-1 a.drp').on("click", function(e){
    $(this).next('ul').toggle();
    e.stopPropagation();
    e.preventDefault();
  });
  
  
  $('#submenu-2 a.drp-2').on("click", function(e){
    $(this).next('ul').toggle();
    e.stopPropagation();
    e.preventDefault();
  });
  
  // $(".dropdown-menu-1").hide();
  // $(".dropdown-menu-2").hide();
  // $(".dropdown-menu-3").hide();
  // $(".dropdown-menu-4").hide();



  $(".dropdown-1").click( function(){
    // $(".dropdown-menu-1").show();
    
  });
  
  
   $(".dropdown-2").on("click", function(){
     $(".dropdown-menu-2").toggle();
  });
  
   $(".dropdown-3").on("click", function(){
     $(".dropdown-menu-3").toggle();
   });
  
  
   $(".dropdown-4").on("click", function(){
     $(".dropdown-menu-4").toggle();
   });
 }