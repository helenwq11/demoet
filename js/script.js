$(document).ready(function(){
	
	/*登录链接*/
	$(".loginLink").click(function(){
		var loginHtml=$("#loginHtml").html();
		showLayer(loginHtml,400,300,closeCallback);
		
	/*登录表单检验*/
	$("#username").blur(function(){
	    	var username=$("input[name='username']").val();
	    	if((username=="")||(username==null)){
	    		$(this).siblings().html("用户名不能为空");
	    		}
	    	else if(isNaN(username)){
	    		$(this).siblings().html("请填写11位数字");
	    	}
	    	else if(username.length!==11){
	    	$(this).siblings().html("请填写11位数字");
	    }
	    	else{
	    	$(this).siblings().html("输入正确");
	    	}
	});
	    $("#password").blur(function(){
	    	var password=$("input[name='password']").val();
	    	if(password==""){
	    		$(this).siblings().html("密码不能为空");
	    	}
	    	else if(password.length<6||password.length>16){
	    		$(this).siblings().html("密码输入有误");
	    	}
	    	else{
	    	$(this).siblings().html("输入正确");
	    	}
	    });
	   });
	    
	/*注册链接事件*/
	$(".regeLink").click(function(){
		var regeHtml=$("#regeHtml").html();
		showLayer(regeHtml,400,300,closeCallback);
		
    /*注册表单检验*/
	    $("#username").blur(function(){
	    	var username=$("input[name='username']").val();
	    	if(username=""){
	    		$(this).siblings().html("用户名不能为空");
	    	}
	    	else if(isNaN(username)){
	    		$(this).siblings().html("请填写11位数字");
	    	}
	    	else if(username.length!==11){
	    	$(this).siblings().html("请填写11位数字");
	    }
	    	else{
	    	$(this).siblings().html("输入正确");
	    	}
	});
	  $(".identify").blur(function(){
	  	var identify=$("input[name='identify']").val();
	  	if(identify!=="GYgy"){
	  		$(this).siblings().html("验证码输入不正确");
	  	}
	  	else{
	    	$(this).siblings().html("输入正确");
	    	}
	  });
	 });
	 
	 /*弹出层关闭回调函数*/
	function closeCallback(){
		$(this).siblings().html("");
	}
	/*显示弹出层*/
	function showLayer(html,width,height,closeCallback){
		$("#layer-mask").show();
		$("#layer-pop").show();
		$("#layer-pop").css({
			width:width,
			height:height
		});
		$("#layer-content").html(html);
		$("#layer-close").click(function(){
			hideLayer();
			closeCallback();
		});
	}
	
	/*隐藏弹出层*/
	function hideLayer(){
		$("#layer-mask").hide();
		$("#layer-pop").hide();
	}


/*轮播效果*/
var prev=$("#prev");/*获取上一张图片*/
var next=$("#next");/*获取下一张图片*/
var allPic=$(".banner-slide");/*获取图片的集合*/
var len=allPic.length;
var index=0;
var timer=null;
var menu=$(".menu-item");
var menuContent=$(".menu-content");

/*绑定点击下一张事件*/
next.click(function(){
	index++;
	if(index>=len){
		index=0;
	}
	changeImg();/*调用切换函数*/
});

  /*绑定点击上一张事件*/
 prev.click(function(){
 	index--;
 	if(index<0){
 		index=len-1;
 	}
 	changeImg();
 });
 
 /*圆点添加绑定事件*/
$(".dots>span").each(function(point){
	$(this).click(function(){
		index=point;
		changeImg(index);
	});
});
  
  /*自动轮播*/
  timer=setInterval(function(){
 	next.click();
 },2000);/*每隔两秒调用下一张按钮事件*/

/*清除定时器*/
 $("#banner").mouseenter(function(){
 clearInterval(timer);
    });
    
 /*鼠标离开时重新开始定时*/	
  $("#banner").mouseleave(function(){
      timer = setInterval(function(){
       next.click();
      },2000);
 });
  


 /*切换图片*/
   function changeImg(){
   	  allPic.removeClass("slide-active");/*把所有图片都隐藏*/
   	  allPic.eq(index).addClass("slide-active");/*点击那张显示那张*/
   	  $(".dots>span").removeClass("active");/*隐藏所有小圆点*/
   	  $(".dots>span").eq(index).addClass("active");/*点击则显示圆点*/
   	 
   	 }
   
  /*菜单区图片显示*/
   for(var m=0;m<menu.length;m++){
   	menu.eq(m).attr("dataIndex",m);
   	menu.eq(m).mouseover(function(){
   		$(".sub-menu").css("display","block");
   		var idx=$(this).attr("dataIndex");
   		for(var j=0;j<$(".inner-box").length;j++){
   			$(".inner-box").eq(j).css("display","none");
   		}
   		$(".inner-box").eq(idx).css("display","block");  
   		  
   	});
   }
   menuContent.mouseout(function(){
   	 $(".sub-menu").hide();
   });
   $(".sub-menu").mouseover(function(){
   	$(this).show();
   });
   $(".sub-menu").mouseout(function(){
   	$(this).hide();
   });
   
   /*楼层导航*/
  /*当滚至出现第二楼层区时，显示楼层导航*/
 $(window).scroll(function(){
 	var count=$(window).scrollTop();/*滚动条距离顶端值*/
 	if(count>800){
 		$(".floorscrol").show();
 	  }
 	
 });
 
 /*楼层分类切换*/

 
 /*右侧导航*/
$(".elevator").each(function(){
	$(".elevator-msg").mouseover(function(){
		$(this).children(":first").hide();
		$(this).children(":last").show();
	});
	$(".elevator-msg").mouseout(function(){
		$(this).children(":last").hide();
		$(this).children(":first").show();
	});
	$("#js-elevator-weixin").mouseover(function(){
		$(".elevator-weixin-box").show();
	});
	$("#js-elevator-weixin").mouseout(function(){
		$(".elevator-weixin-box").hide();
	});
  });
 
 
 });
