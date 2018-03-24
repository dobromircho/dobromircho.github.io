$(document).ready(function() {

	$("#shniciPic").hide();
	$("#andronoidPic").hide();
	
	$(".shnici").mouseenter(function()
	{
		$("#shniciPic").show(100);
	});
	
	$(".shnici").mouseleave(function(){
		$("#shniciPic").hide(100);
	});
	////////////////////
	$(".andronoid").mouseenter(function()
	{
		$("#andronoidPic").show(100);
	});
	
	$(".andronoid").mouseleave(function(){
		$("#andronoidPic").hide(100);
	});
  

  

});