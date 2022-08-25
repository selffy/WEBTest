
//패키지 생성
var ajax ={};

//XHR객체
ajax.xhr ={};

ajax.xhr.Request = function(url, params, callback, method){
	this.url = url;
	this.params = params;
	this.callback = callback;
	this.method = method;
	this.send();
	
		
}
//추가메소드 확장
ajax.xhr.Request.prototype ={
	
	//XHR 객체 획득
	getXMLHttpRequest : function(){
		return new XMLHttpRequest();
	},//getXMLHttpRequest

	//요청을 전송
	send : function(){
		//개별로 사용할 XHR 객체를 획득
		this.req = this.getXMLHttpRequest();
		// HTTP메소드가 있으면 사용하고 없으면 GET
		var httpMethod = this.method ? this.method : "GET";
		if(httpMethod != "GET" && httpMethod != "POST") httpMethod = "GET";
		
		// 요청데이터 설정
		var httpParams = (this.params == null || this.params == "" ) ? null : this.parmams;
		
		// URL 설정
		var httpUrl = this.url;
		
		// HTTP메소드가 GET일 때 URL뒤에 요청데이터 붙인다.
		if(httpMethod == "GET" && httpParams != null) httpUrl = httpUrl + "?" + httpParams;
		
		//OPEN 수행
		this.req.open(httpMethod, httpUrl, true); //xhr 오픈
		
		// 클라이언트가 보내는 데이터가 인코딩된 폼데이터라고 서버에 알려주는 역할
		this.req.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
		
		//요청객체가 공유되지 못하도록 지역변수에 저장
		var request = this;
		
		//콜백함수 정의
		this.req.onreadystatechange = function(){
			//SEND함수의 지역변수인 request를onStateChange내에서 thisㄹ 쓰기 위해 call 사용
			//call함수 형식: 함수명.call(함수내에서 this가 되어야 하는 객체)
			request.onStateChange.call(request);
		}
		
		//POST인 경우 파라미터, GET인 경우에는 주소에 파라미터 붙여서 보냈으므로 안보냄
		this.req.send(httpMethod == "POST" ? httpParams : null);
	}, //send

	onStateChange : function() {
		//this==request(call함수를 사용했기 때문에)
		this.callback(this.req);
	}

} //ajax.xhr.Request.prototype

//ajax 패키지 내에 이벤트 객체 
ajax.Event = {};

//이벤트리스너 추가(이벤트 타겟객체, 이벤트명, 옵저버(=이벤트리스너), useCapture여부)
ajax.Event.addListener = function(element, name, observer, useCapture){
	useCapture == useCapture || false;
	//웹표준브라우저에서 이벤트리스너 추가 
	if(element.addEventListener) {
		element.addEventListener(name, observer, useCapture);	
	// 구버전 IE 5,6에서 이벤트리스너 추가
	} else if(element.attachEvent) {
		element.attachEvent('on' + name, observer);
	}
}

//이벤트리스너 제거
ajax.Event.removeListener = function(element, name, observer, userCapture){
	useCapture == useCapture || false;
	if(element.removeEventListener) {
		element.removeEventListener(name, observer, useCapture);	
	} else if(element.dettachEvent) {
		element.dettachEvent('on' + name, observer);
	}
}

//이벤트 타겟 획득 
ajax.Event.getTarget = function(event) {
	if(event == null){
		return null;
	}
	if(event.target){
		return event.target; //웹표준브라우저
	} else if(event.srcElement){
		return event.srcElement; //IE 5,6 브라우저
	}
		return null;
}

//
ajax.Event.getMouseXY = function(event) {
	var mouseX = event.clientX;
	var mouseY = event.clientY;
	
	var dd = document.documentElement;
	var db = document.body;
	if (dd) {
	mouseX += dd.scrollLeft;
	mouseY += dd.scrollTop;
	} else if (db) {
	mouseX += db.scrollLeft;
	mouseY += db.scrollTop;
	}
	return {x: mouseX, y: mouseY};
	}

//왼쪽마우스가 눌렸는지
ajax.Event.isLeftButton= function(event) {
	return (event.which) ?
	event.which == 1 && event.button == 0 :
	(event.type == 'click') ? event.button == 0 : event.button == 1;
	}
	
//오른쪽마우스가 눌렸는지
ajax.Event.isRightButton = function(event) {
	return event.button == 2;
	}

//이벤트의 전달을 중지	
ajax.Event.stopPropagation = function(event) {
	if (event.stopPropagation) {
	event.stopPropagation();
	} else {
	event.cancelBubble = true; //IE 5,6
	}
}

//디폴트이벤트: 웹브라우저가 기본적으로 가지고 있으면서 발생시키는 이벤트, 사용자정의 이벤트와 구분됨
//디폴트이벤트 방지 (예를 들어 a링크 눌러도 이동 안되도록 방지)
ajax.Event.preventDefault = function(event) {
	if (event.preventDefault) {
	event.preventDefault();
	} else {
	event.returnValue = false;
	}
}

//편의상 이벤트 전달방지와 디폴트이벤트방지를 동시에 하기 위한 메소드
ajax.Event.stopEvent = function(event) {
	ajax.Event.stopPropagation(event);
	ajax.Event.preventDefault(event);
}

//객체에 리스너들을 바인딩(묶음)
//apply메소드를 사용하여 앞에 있는 func내에서 this를 정의함
ajax.Event.bindAsListener = function(func, obj) {
	return function() {
	return func.apply(obj, arguments);
	}
}