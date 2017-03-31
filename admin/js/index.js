// JavaScript Document
$(function(){
	
	   // 中间高度
	   var bodyheight=$(document.body).height();
	 
	   $("#maintab").css("min-height",bodyheight-65+"px")
 
       //一级菜单效果
		$(".menuleft").click(function(){
			var ishide=$(this).next(".leftsecond").is(":visible")
			if(ishide==false){
				$(this).next(".leftsecond").siblings(".leftsecond").slideUp();
				$(this).siblings(".menuleft").removeClass("menucolor");
				$(this).next(".leftsecond").slideDown();
				$(this).addClass("menucolor");
				ishide=true
			}
			else{
				$(this).next(".leftsecond").slideUp();
				$(this).removeClass("menucolor");
				ishide=false;

			}
		 	
			
		})
		
		//二级菜单效果
		$(".secondmenu").hover(function(){
			$(this).addClass("secondbg")
		},function(){
			$(this).removeClass("secondbg")
		})
		
		
		//查询条件伸缩
		var isvisible=false;
		$(".flextxt").click(function(){
			if(isvisible==false){
				$(".stretch").css("display","none");
				$(this).find("span").text("展开");
				$(this).find("img").attr("src","images/arrow02.png");
				isvisible=true;
			}
			else{
				$(".stretch").css("display","block");
				$(this).find("span").text("收起");
				$(this).find("img").attr("src","images/arrow01.png");
				isvisible=false;
			}
		})
		
		
		//表格
		
	$(".mytab tr").hover(function(){
		$(this).addClass("trhover");
	},function(){
		$(this).removeClass("trhover");
	})
	$(".mytab tr:even").css("background-color","#f5f3f3")
	
	$(".mytable tr").hover(function(){
		$(this).addClass("trhover");
	},function(){
		$(this).removeClass("trhover");
	})
	$(".mytable tr:even").css("background-color","#f5f3f3")
	
	
	
	//弹出删除窗口
	var winleft=$(window).width();
	var wintop=$(window).height();
	$(".popdel").css({"top":wintop/2-188/2+"px","left":winleft/2-368/2+"px"})
	//排序
	$(".sort").css({"left":winleft/2-550/2+"px"})
	
	$(window).resize(function(){
		var winleft=$(window).width();
		var wintop=$(window).height();
		$(".popdel").css({"top":wintop/2-188/2+"px","left":winleft/2-368/2+"px"})
		//排序
		$(".sort").css({"left":winleft/2-550/2+"px"})
	})
	$(".closes").click(function(){
		$(".popdel").css("display","none")
	})
	$(".closing").click(function(){
		$(".sort").css("display","none")
	})
	
	$(".gbbtn").click(function(){
		$(".popdel").css("display","block")
	})
	$(".paixu").click(function(){
		$(".sort").css("display","block")
	})
	
	//单据管理查看详情
	var iss=false
	$(".details").click(function(){
		if(iss==false){
			$(this).next(".normal").css("display","none");
			iss=true;
		}
		else{
			$(this).next(".normal").css("display","block");
			iss=false;
		}
	})
	
	
	//用户弹出窗
	$(".userbtn").click(function(){
		$(".sort").css("display","block")
	})
	
	//展示更多用户
	var iszk=false;
	$(".zhankai").click(function(){
		if(iszk==false){
			$(".sendobject").addClass("objectlarge");
			$("#myclose").text("收起");
			$("#mydirection").attr("src","images/arrow01.png")
			iszk=true;
		}
		else{
			$(".sendobject").removeClass("objectlarge");
			$("#myclose").text("展开");
			$("#mydirection").attr("src","images/arrow02.png")
			iszk=false;
		}
	})
	
	
	//选择用户
	 
	$(".chooseuser div[class^='chooseuser0']").click(function(){
		$(".chooseuser").children("div").attr("class","chooseuser02");
		$(this).attr("class","chooseuser01");
		var thisindex=$(this).index() + 1;
		$("tr[id^='minechoose0']").css("display","none")
        $("#minechoose0"+thisindex).css("display","block")
	})
 
})

 