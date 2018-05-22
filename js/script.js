$(function(){
	
	var check = true;
	
	//각 섹션별 top값
	var top_container = [
		$("#about").offset().top,
		$("#services").offset().top,
		$("#portfolio").offset().top,
		$("#contact").offset().top
	];
	
	console.log($("#about").offset().top,$("#services").offset().top,$("#portfolio").offset().top,$("#contact").offset().top);
	
	var nowIdx = 1;

	$(".gnb>li>a").on("click",function(evt){
		nowIdx = $(".gnb>li>a").index(this);
		$("html,body").animate({scrollTop:top_container[nowIdx]-50});
		evt.preventDefault();
	});
	
	
	//상단 로고 클릭시 맨위로 스크롤됨
	$(".main_logo>a").on("click",function(evt){
		$("html,body").animate({scrollTop:0});
		evt.preventDefault();
	});
	
	//헤더 스크롤 이벤트
	$(window).on("scroll",function(){
		
		if( $(window).width() < 768 ){
			
			$("header").css("background","rgba(255,255,255,0)");
			
		}else{
			
			if($(window).scrollTop()>10){
			
			$("header").css("background","rgba(0,0,0,0.8)");
			$("header>nav>.gnb>li>a").css("color","#fff");
			}else{
				$("header").css("background","rgba(255,255,255,0)");
				$("header>nav>.gnb>li>a").css("color","#000");
			}
		}
		
		
		
	});
	
	/*
		load 이벤트: 문서의 텍스트와 이미지등 모든 데이터를 메모리에 적재완료한 시점에 작동한다.
	*/
	
	$(".loading>p").fadeOut(800); //기본시간값은 0.4초(400)
	$(".loading").delay(350).fadeOut(1000);
	
	$("#home").height($(window).height());//DOM트리 구성이 완료된 시점(ready)에 높이값 설정
	$("#about").height($(window).height());//DOM트리 구성이 완료된 시점(ready)에 높이값 설정
	$("#services").height($(window).height());
	$("#portfolio").height($(window).height());
	$("#contact").height($(window).height());
	
	
	
	$(window).on("load resize",function(){ /*callback함수 : 이벤트가 일어났을때 실행되는 함수*/
	
		if( $(window).width>767 ){ /*브라우저의 폭이>767*/
		
			$(".middle_logo").css({"margin-left":-$(".middle_logo").width()/2,
			"top":$("#home h2").offset().top-70
			});
			
		}else{ /*모바일*/
			
			$(".middle_logo").css({"margin-left":-$(".middle_logo").width()/2,
			"top":$("#home h2").offset().top-40
			});
			
		}	
		
	
		
	//모바일 버전 메뉴버튼 클릭시
	$("header>.btn").on("click",function(){
		
		$(".mobile>nav").addClass("on").toggle();
		
		if(check == true){
			
			$("header>.btn>.fa-bars").hide();
			$("header>.btn>.fa-times").css({
				"display":"block"
			});
			
			
			check = false;
			
		}else{
			$("header>.btn>.fa-bars").show();
			$("header>.btn>.fa-times").css("display","none");
			
			check = true;
		}
		
	});
	
	
	//모베일 상세메뉴 버튼 클릭시 메뉴창 사라짐
	$("header>.mobile>nav>.m_gnb>li").on("click",function(){
		
		$("header>.mobile>nav").removeClass("on");
		$("header>.mobile>nav").hide();
		
		
		if(check == true){
			
			$("header>.btn>.fa-bars").hide();
			$("header>.btn>.fa-times").css("display","block");	
			
			check = false;
			
		}else{
			$("header>.btn>.fa-bars").show();
			$("header>.btn>.fa-times").css("display","none");
			
			check = true;
		}
		
		
	});
		
		
		//pc모드 - 인라인방식 적용(특정도값 1000점)
		$("#home").height($(window).height()); 
			
	}); 
	
	

});










































// /