$(document).ready(function(){

	$("ul.invthumbs > li, ul.invthumbs2 > li").mouseenter(
    function() {
      $(this).find("div.infopane").stop(true,true).fadeIn();
    });

  $("ul.invthumbs > li, ul.invthumbs2 > li").mouseleave(
    function() {
      $(this).find("div.infopane").stop(true,true).delay(200).fadeOut();
    });

});  

