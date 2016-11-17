$(document).ready(function() {
	//右侧订单管理
	$(".userIBoxRight .ordersManage>ul:eq(0) li").click(function(){
		if ($(this).is(".ordersManageLiAdd")) {
			$(this).removeClass("ordersManageLiAdd");
		}
		var className=$(this).attr("class");
		console.log(className)
		if ($(this).index()==0) {
			$(".userIBoxRight .ordersManage ul:eq(2) li").show()
		} else{
			$(".userIBoxRight .ordersManage>ul:eq(2) li[class='"+className+"']").show();
			$(".userIBoxRight .ordersManage>ul:eq(2) li[class!='"+className+"']").hide();
		}
		$(this).addClass("ordersManageLiAdd").siblings().removeClass("ordersManageLiAdd")
	});
	//右侧订单管理END
	//足迹
	$(".userIBoxRight .collection>ul:eq(0) li").click(function(){
		if ($(this).is(".ordersManageLiAdd")) {
			$(this).removeClass("ordersManageLiAdd");
		}
		var className=$(this).attr("class");
		$(".userIBoxRight .collection>ul[class='"+className+"']").show();
		$(".userIBoxRight .collection>ul[class!='"+className+"']").hide();
		$(this).addClass("ordersManageLiAdd").siblings().removeClass("ordersManageLiAdd");
		$(".userIBoxRight .collection>ul:eq(0)").show();
	})
	//足迹END
	//客户管理
	$(".userIBoxRight .customer>ul:eq(0) li").click(function(){
		if ($(this).is(".ordersManageLiAdd")) {
			$(this).removeClass("ordersManageLiAdd");
		}
		var className=$(this).attr("class");
		$(".userIBoxRight .customer>ul[class='"+className+"']").show();
		$(".userIBoxRight .customer>ul[class!='"+className+"']").hide();
		$(this).addClass("ordersManageLiAdd").siblings().removeClass("ordersManageLiAdd");
		$(".userIBoxRight .customer>ul:eq(0)").show();
	})
	//客户管理
	//左侧导航栏
	$(".userIBoxLeft>div ul li").click(function(){
		var parentsIndex=$(this).parent("ul").parent("div").index();
		var thisIndex=$(this).index();
		var thisClass=$(this).attr("class");
		$(".userIBoxRight>div>div:eq("+parentsIndex+")").show().siblings().hide();
		if (parentsIndex==0) {
			$(".userIBoxRight>div>div:eq("+parentsIndex+")").show().siblings().hide();
		}else
		if (parentsIndex==1) {
			if (thisIndex==0) {
				$(".userIBoxRight .ordersManage ul:eq(2) li").show();
			} else{
				$(".userIBoxRight .ordersManage>ul:eq(2) li[class='"+thisClass+"']").show();
				$(".userIBoxRight .ordersManage>ul:eq(2) li[class!='"+thisClass+"']").hide();
			}
			$(".userIBoxRight .ordersManage>ul:eq(0) li:eq("+thisIndex+")").addClass("ordersManageLiAdd").siblings().removeClass("ordersManageLiAdd");
		}else if (parentsIndex==2) {
			$(".userIBoxRight .collection>ul[class='"+thisClass+"']").show();
			$(".userIBoxRight .collection>ul[class!='"+thisClass+"']").hide();
			$(".userIBoxRight .collection>ul:eq(0) li:eq("+thisIndex+")").addClass("ordersManageLiAdd").siblings().removeClass("ordersManageLiAdd");
			$(".userIBoxRight .collection>ul:eq(0)").show();
		}else{
			$(".userIBoxRight .customer>ul[class='"+thisClass+"']").show();
			$(".userIBoxRight .customer>ul[class!='"+thisClass+"']").hide();
			$(".userIBoxRight .customer>ul:eq(0) li:eq("+thisIndex+")").addClass("ordersManageLiAdd").siblings().removeClass("ordersManageLiAdd");
			$(".userIBoxRight .customer>ul:eq(0)").show();
		}
	});
	//左侧导航栏END
	//弹出联系方式
	$(".panel-default1").click(function(){
		$(".panel-default2").show();
		$(".panel-default2 div:eq(0)").show().siblings().hide();
	})
	$(".panel-default2").click(function(){
		$(".panel-default2").hide()
	})
	//弹出联系方式END
})