var pos=0;
var timeswicth;
var smallImageLength = 6;
var page =0;
var timer = 5000;
$(document).ready(function(){
	timeswicth = setInterval(switchImage,timer);
	
	$(".focus_control h2:gt(0)").css("display","none");
	$(".focus_thumbnails>ul>li").mouseenter(function(){
		$(this).addClass("lihover");
		var index = $(".focus_thumbnails>ul>li").index($(this));
		pos = index;
		switchImage();
	});
	
	$(".focus_thumbnails>ul>li").mouseleave(function(){
		//$(this).removeClass("lihover");
	});
	
	$(".nav_inner>ul:eq(3)>li:eq(0)").css("color","#ff0000");
	timeswicth = setInterval(switchImage,2000);
	$("#site_focus").mouseenter(function(){
		clearInterval(timeswicth);
	});
	$("#site_focus").mouseleave(function(){
		timeswicth = setInterval(switchImage,timer);
	});

	$("#site_focus .btn_right").click(function(){
		var size = $(".focus_thumbnails>ul>li").size();
		var pages = size/smallImageLength;
		page=(page+1)%pages;
		$(".focus_thumbnails>ul>li").hide();
		$(".focus_thumbnails>ul>li:gt("+page*smallImageLength+")").css("display","block");
		$(".focus_thumbnails>ul>li:eq("+page*smallImageLength+")").css("display","block");
	});

	$("#site_focus .btn_left").click(function(){
		var size = $(".focus_thumbnails>ul>li").size();
		var pages = size/smallImageLength;
		page=(page-1)%pages;
		$(".focus_thumbnails>ul>li").hide();
		$(".focus_thumbnails>ul>li:gt("+page*smallImageLength+")").css("display","block");
		$(".focus_thumbnails>ul>li:eq("+page*smallImageLength+")").css("display","block");
	});
	
	
	 $(".search_btn").click(function(){
		 var msg = $.ajax({
			   type: "POST",
			   url: "/j2ee_00_js/AjaxServlet",
			   async: false
			});
		 $(".search_ipt").val(msg.responseText);
	});
});

function switchImage()
{
	//将所有的图片隐藏
	$(".focus_box img").css("display","none");
	//将第pos付图片显示
	$(".focus_box img").eq(pos).fadeIn("slow");
	//除去所有小图片对应li上的hover标记
	$(".focus_thumbnails>ul>li").removeClass("lihover");
	//给第pos个小图片对应li加上hover标记
	$(".focus_thumbnails>ul>li").eq(pos).addClass("lihover");
	//每次显示6付小图片，这段代码感觉有问题，没有和页面结合
	if(pos%smallImageLength==0)
	{
		$(".focus_thumbnails>ul>li").hide();
		$(".focus_thumbnails>ul>li:gt("+pos+")").css("display","block");
		var str =".focus_thumbnails>ul>li:eq("+pos+")"; 
		$(str).css("display","block");
	}
	//将所有的提示文字隐藏
	$(".focus_control h2").css("display","none");
	//显示第pos个提示文字
	$(".focus_control h2").eq(pos).fadeIn("slow");
	//修改pos的值，保证pos指向下一张图片。
	var size = $(".focus_box img").size();
	pos=(pos+1)%size;//使用取模，保证pos的值不超界
}