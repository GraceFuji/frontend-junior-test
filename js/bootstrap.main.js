
/*aplica o tamanho da tela */
$(document).ready(function(){
 $('.header').height($(window).height());
})

/*Scroll*/
$(".navbar a").click(function(){
  $("body,html").animate({
   scrollTop:$("#" + $(this).data('value')).offset().top
  },1000)
  
 })