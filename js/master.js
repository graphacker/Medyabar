/// <reference path="../typings/jquery/jquery.d.ts" />
$(function() { 
    
   $('#sizetext').text($(window).innerWidth());  
    $(window).resize(function(){ 
  $('#sizetext').text($(window).innerWidth());
});

});

