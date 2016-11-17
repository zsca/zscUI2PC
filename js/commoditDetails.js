$(document).ready(function(){
	$("#advice").click(function(){
		
	})
	//登录
	$("body .borderButtom div a:last-child").click(function(){
		$(".panel-default2").show();
		$(".panel-default2 div:eq(1)").show().siblings().hide();
	})
	//登录END
	//弹出联系方式
	$(".panel-default1").click(function(){
		$(".panel-default2").show();
		$(".panel-default2 div:eq(0)").show().siblings().hide();
	})
	//弹出联系方式END
	//咨询报价
	$("#advice").click(function(){
		$(".panel-default2").show();
		$(".panel-default2 div:eq(2)").show().siblings().hide();
	})
	$(".panel-default2 div.advice p input").click(function(){
		$(".panel-default2").hide();
	
	})
	//咨询报价END
	//点击任何地方隐藏
	$(".panel-default2").click(function(){  
		$(".panel-default2").hide();
	
	});
	//点击任何地方隐藏END
	// 点击panel-default2 div.advice,阻拦(让.panel-default2隐藏)(stopPropagation阻拦click事件冒泡)
	//及实现了 点击panel-default2 div.advice之外的任何地方  让.panel-default2隐藏 
	$('.panel-default2 div.advice').click(function(event){ 
		event.stopPropagation(); 
	});
	//点击任何地方隐藏END
	//收藏
	$(".keep").click(function(){
		if ($(this).is(".f_black")==true) {
			$(this).removeClass("f_black").addClass("f_gainsboro");
			$(this).html("已收藏");
		} else{
			$(this).removeClass("f_gainsboro").addClass("f_black");
			$(this).html("收藏");
			console.log(1)
		}
		
	})
	//收藏END
	//选项
	$(".indent .choose a").click(function(){
		$(this).css("border","1px solid #000").siblings().css("border","1px solid rgba(0,0,0,0)")
	})
	//选项END
})
