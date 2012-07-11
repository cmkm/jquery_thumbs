$(document).ready(function(){

	$("ul.invthumbs > li, ul.invthumbs2 > li").mouseenter(
    function() {
      $(this).find("div.infopane").delay(100).toggle("slow");
    });

  $("ul.invthumbs > li, ul.invthumbs2 > li").mouseleave(
    function() {
      $(this).find("div.infopane").delay(400).toggle("slow");
    });

});  

