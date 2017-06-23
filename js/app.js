$(document).ready(function(){
  $('.button-collapse').sideNav({
     menuWidth: 500, // Default is 300
     edge: 'left', // Choose the horizontal origin
     closeOnClick: true, // Closes side-nav on <a> clicks, useful for Angular/Meteor
     draggable: true // Choose whether you can drag to open on touch screens
   });
   $('.parallax').parallax();
   $('.modal').modal();
 });

var cargarProgressBar = function(){
    var scroll = document.body.scrollTop;
    if(scroll >= 750){
      $('.progress').show('slow');
    } else if(scroll <700){
      $('.progress').hide();
    }
 }

document.addEventListener("scroll", cargarProgressBar);
