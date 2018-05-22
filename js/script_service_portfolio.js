$(function(){

	var nowIdx =0;
	var interval_id;
	
	//슬라이드 - 자동 실행
	setInterval(function(){

		//다음번 슬라이드의 인덱스번호를 정함
		if(nowIdx==2){
			nowIdx=0;
		}else{
			nowIdx=nowIdx+1;
		}
		
		//컨테이너의 left좌표값을 지정
		$(".slide-container").stop().animate({"left":-100*nowIdx+"%"});
	
	},2000); //2초마다 함수를 실행
	
	
		//슬라이드 - 이전 버튼
	$("#services>.slides-prev").on("click",function(evt){
		
		console.log("왼쪽클릭");
		//3)2초마다 자동으로 실행되는 setInterval()을 중지시킬때
		clearInterval(interval_id);
		
		//1)이전 슬라이드에 해당하는 인덱스값을 추출
		if(nowIdx==2){
			nowIdx=0;
		}else{
			nowIdx=nowIdx+1;
		}
		
		
		
		
		//2)인덱스값에 매칭되는 슬라이드 위치로 이동
		$("#services>.slides-container").stop().animate({"left":-100*nowIdx+"%"});
		
		//4)자동실행 설정
		interval_id = setInterval(function(){
		
		//다음버튼 클릭
		$("#services>.slides-next").trigger("click"); //해당요소에 클릭이벤트 강제발생
		
	}, 2000);
		
		
		evt.preventDefault();
	});
	
		//슬라이드 - 다음버튼
	$("#services>.slides-next").on("click",function(evt){
		
		console.log("오른쪽클릭");
		//3)2초마다 자동으로 실행되는 setInterval()을 중지시킬때
		clearInterval(interval_id);
		
		
		//1)다음 슬라이드에 해당하는 인덱스값을 추출
		if(nowIdx==2){
			nowIdx=0;
		}else{
			nowIdx=nowIdx+1;
		}
		
		
		//2)인덱스값에 매칭되는 슬라이드 위치로 이동
		$("#services>.slides-container").stop().animate({"left":-100*nowIdx+"%"});
		
		
		//4)자동실행 설정
		interval_id = setInterval(function(){
		
		//다음버튼 클릭
		$("#services>.slides-next").trigger("click"); //해당요소에 클릭이벤트 강제발생
		
	}, 2000);
		
		evt.preventDefault();
	});

});