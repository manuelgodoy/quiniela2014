$(document).ready(function() { 
	
	var $img = $(this).find("#banderas");

	$(".tabla").on("mousemove", "td", function(e) {

    	$(this).find("#banderas").stop(1,1).fadeIn("fast");
    	$(this).find("#banderas").offset({
    		top: e.pageY - $img.outerHeight(),
        	left: e.pageX - $img.outerWidth()
   		});
  	});
  	$(".tabla").on("mouseleave", "td", function() {
    	$(this).find("#banderas").fadeOut("fast");  
  	}); 
});