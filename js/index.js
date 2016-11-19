$(document).ready(function() {
	
	//分类给分类
	$(".classIFY #tagnav ul li,#pullDown .pullDownRight ul").hover(function(){
		var index=$(this).index();
		$("#carousel-example-generic").hide()
		$("#pullDown").show();
		
		$(".classIFY #tagnav ul li:eq("+index+")").css("background-color","white").find("a").css("color","#000000")
		var liIndex=$(this).index();
		$("#pullDown .pullDownRight ul:eq("+liIndex+")").show().siblings().hide();
		
	},function(){
		$(".classIFY #tagnav ul li").css("background-color","").find("a").css("color","")
		$("#pullDown").hide();
		$("#pullDown .pullDownRight ul").hide();
		$("#carousel-example-generic").show()
	});
	
	//二级分类右侧END
	//	滚动条事件
	
	
	$("#clickPullDown").click(function() {
		if($(this).is(".icon-10")) {
		
			$("#pullDown").show();
			$("#clickPullDown").removeClass("icon-10").addClass("icon-9")
		} else {
			$("#pullDown").hide();
			$("#clickPullDown").removeClass("icon-9").addClass("icon-10")

			scrollhight=251
		}
	});
	//	滚动条事件END
	$(".panel-default div:eq(1)").click(function(){
		$(".panel-default div:eq(2)").show();
		console.log(1)
	})
	//收藏
	$(".container>.row>.screen>.box div button").click(function(){
		if ($(this).is(".icon-49")==true) {
			$(this).removeClass("icon-49").addClass("icon-48")
		} else{
			$(this).removeClass("icon-48").addClass("icon-49")
			
		}
	})
	//收藏END
	//登录
		$("body .borderButtom div:nth-of-type(2) a:eq(1)").click(function(){
			$(".panel-default2").show();
			$(".panel-default2 div:eq(1)").show().siblings().hide();
		})
	//登录END
	//弹出联系方式
	$(".panel-default1").click(function(){
		$(".panel-default2").show();
		$(".panel-default2 div:eq(0)").show().siblings().hide();
	})
	$(".panel-default2").click(function(){
		$(".panel-default2").hide()
	})
	//弹出联系方式END
	//买家秀
	$(".container div.box1 div.box1Top,.container div.box1 div.box1Top div").hover(function(){
		$(".container div.box1 div.box1Top p a ").addClass("f-gray")
		$(".container div.box1 div.box1Top p a span").removeClass("icon-74").addClass("icon-35");
		$(".container div.box1 div.box1Top div").show();
	},function(){
		$(".container div.box1 div.box1Top p a ").removeClass("f-gray")
		$(".container div.box1 div.box1Top p a span").removeClass("icon-35").addClass("icon-74");
		$(".container div.box1 div.box1Top div").hide();
	})
	
	//买家秀END
})