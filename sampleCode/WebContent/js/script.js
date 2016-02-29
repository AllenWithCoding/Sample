$(function(){
	var current_li;
	var flag = false;
	$("#portfolio").sortable();
	
	$("#search").keyup(function(){
		
		var current_query = $("#search").val();
		if(current_query!=""){
			$("#portfolio li").fadeOut();
			$("#portfolio li").each(function(){
				var current_keyword = $(this).attr("data-keywords");
				if(current_keyword.indexOf(current_query) >=0){
					$(this).fadeIn();
				}
			});
		}else{
			$("#portfolio li").fadeIn();
		}
		
	});
	
	function setImg(id, myclass){
		$("#main").attr("class", myclass);
		$("#main").html(id);
	}
	
	$("#portfolio div").click(function(){
		var myclass = $(this).attr("class");
		var id = $(this).attr("id");
		current_li = $(this).parent();
		setImg(id, myclass);
		$("#frame").fadeIn();
		$("#overlay").fadeIn();
	});
	
	$("#overlay").click(function(){
		$(this).fadeOut();
		$("#frame").fadeOut();
	});
	
	$("#right").click(function(){
		if(current_li.is(":last-child")){
			var next_li = $("#portfolio li").first();
		}else{
			var next_li = current_li.next();
		}
		var next_id = next_li.children("div").attr("id");
		var next_class = next_li.children("div").attr("class");
		setImg(next_id, next_class);
		current_li = next_li;
	});
	$("#left").click(function(){
		if(current_li.is(":first-child")){
			var prev_li = $("#portfolio li").last();
		}else{
			var prev_li = current_li.prev();
		}
		var prev_class = prev_li.children("div").attr("class");
		var prev_id = prev_li.children("div").attr("id");
		setImg(prev_id, prev_class);
		current_li = prev_li;
	});
	
	$("#right, #left").mouseover(function(){
		$(this).css("opacity","0.90")
	});
	$("#right, #left").mouseleave(function(){
		$(this).css("opacity","0.5")
	});
	$(".all").mouseover(function(){
		var i = 1;
		var count = 0;
		$("#portfolio").find("li").each(function(){
			//console.log($(this).attr("data-keywords"));
			if($(this).attr("data-keywords")==i){
				count++;
			};
			i++;
			if(count==9&&flag==false){
				alert("bingo!");
				flag=true;
			}
			console.log(count);
		});
	});
	$(".all").mouseup(function(){
		flag=false;
	});
});