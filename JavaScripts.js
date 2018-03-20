$(document).ready(function() {

	$("#shniciPic").hide();
	
	$(".shnici").mouseenter(function()
	{
		$("#shniciPic").css({"position" : "center"});
		$("#shniciPic").show(100);
	});
	
	$(".shnici").mouseleave(function(){
		$("#shniciPic").hide(100);
	});
  /* $("#menu").onmouseover(function(){
	  $(this).css("background-color","red");
  }); */

  

});