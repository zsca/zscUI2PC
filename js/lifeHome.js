$(document).ready(function() {
	//计算家具清单多少，将宽度写入
	var liIndex=$(".container>div:nth-of-type(2).row>div:nth-of-type(3)>ul>li").length;
	var ulWidth=liIndex*300+liIndex*50+"px";
	$(".container>div:nth-of-type(2).row>div:nth-of-type(3)>ul").css("width",""+ulWidth+"");
	//滚动条事件
	$(window).scroll(function() {
		var scrollhight
		scrollhight = document.body.scrollTop;

		if(scrollhight > 1000) {
			$("#topReturn").show();
		} else {
			$("#topReturn").hide();
		}
	});
	//滚动条事件END
	//登录
		$("body .borderButtom div:nth-of-type(2) a:eq(2)").click(function(){
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
	//收藏
	$(".keep").click(function(){
		$(this).find("span").toggle();
	})
})