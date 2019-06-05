$(document).ready(function(){
	
	$("#show_work_shift").click(function(){
		window.location.replace("http://localhost:8080/worker/showws");
	});
	
	$("#apply").click(function(){
		window.location.replace("http://localhost:8080/worker/apply");
	});
	
	$("#show_temporary_overtime").click(function(){
		window.location.replace("http://localhost:8080/worker/showto");
	});
	
	$("#show_attendance").click(function(){
		window.location.replace("http://localhost:8080/worker/showa")
	});
	
	$("update").click(function(){
		var start_time = document.getElementById("start_time");
		var end_time = document.getElementById("end_time");
		
		
	});
	
});

function getNextDay(Day){
	var year = parseInt(Day.substr(0, 4));
	var month = parseInt(Day.substr(4, 2));
	var day = parseInt(Day.substr(6, 2));
	var hour = parseInt(Day.substr(8, 2));
	var minute = parseInt(Day.substr(10, 2));
	
	
	
}