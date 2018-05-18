$(document).ready(function() {

    $("#sourcePic").hide();
	$("#shniciPic").hide();
	$("#andronoidPic").hide();
	$("#eggsPic").hide();
	$("#truckPic").hide();
	
	var sound = $("#click")[0];
	sound.volume=0.5;
	
	$(".menuitem").mouseenter(function()
	{
		$("#sourcePic").show(100);
		sound.play();
	});
	$(".menuitem").mouseleave(function(){
		$("#sourcePic").hide(100);
	});
	
	//*****************************************************
	$(".shnici").mouseenter(function()
	{
		$("#shniciPic").show(100);
		sound.play();
	});
	
	$(".shnici").mouseleave(function(){
		$("#shniciPic").hide(100);
	});
	//*****************************************************
	$(".andronoid").mouseenter(function()
	{
		$("#andronoidPic").show(100);
		sound.play();
	});
	
	$(".andronoid").mouseleave(function(){
		$("#andronoidPic").hide(100);
		
	});
  //*******************************************************
	$(".eggs").mouseenter(function()
	{
		$("#eggsPic").show(100);
		sound.play();
	});
	
	$(".eggs").mouseleave(function(){
		$("#eggsPic").hide(100);
	});
  //*******************************************************
  $(".monster").mouseenter(function()
	{
		$("#truckPic").show(100);
		sound.play();
	});
	
	$(".monster").mouseleave(function(){
		$("#truckPic").hide(100);
	});

});