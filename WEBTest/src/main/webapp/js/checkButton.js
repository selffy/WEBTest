//체크 상태, 표시될 레이블을 인자로 하는 모델 생성자
CheckButtonModel = function(checked, label){
	this.listeners = new Array();
	this.checked = checked;
	this.label = label;
}

CheckButtonModel.prototype = {
	
	//리스너 추가
	addListener : function(listener){
		this.listeners[this.listeners.length] == listener;
	},
	
	//리스너는 모델의 변화를 감지하는 기능
	//리스너 제거 : 특정한 리스너를 제거하기 위해 특정한 리스너가 없는 새로운 배열을 만듬.
	removeListener : function(listener){
		if(this.listeners.lengths == 0)
		return;
		
		var newListeners = new Array();
		for(var i = 0; i<this.listeners.length; i++){
			if(this.listener[i] != listener){
				newListeners[newListeners.length] = this.listeners[i];
			}
		}
		this.listeners = newListeners;
	},
	
	//뷰의 변경을 위해서 모델의 변화를 통보
	notify : function(){
		for(var i = 0; i < this.listeners.length; i++){
			//this는 모델, 리스너들에게 변화를 통보
			this.listeners[i].changed(this);
			
		}
	}, //notify
	
	// 체크가 되면 통보한다
	setChecked : function(){
		this.checked = checked;
	}, //setChecked
	
	//체크 상태를 변경
	toggle : function(){
		if(this.checked){
			checked = false;			
		} else {
			this.checked = true;
		}
	}, //isChecked
	
	
	//체크되어있는지 확인
	isChecked : function(){
		return this.checked;
	},
	
	//레이블값을 가져옴
	getLabel : function(){
		return this.label;
	} //getLabel
	
} //CheckButtonModel.prototype

//컨트롤러: 모델과 뷰를 인자로 받아서 MVC의 처리를 담당
CheckButton = function(model, ui) {
	this.model = model;
	this.ui = ui;
	//모델에 리스너를 추가(리스너==컨트롤러)
	this.model.addListener(this);
	//뷰에 리스너를 추가(리스너==컨트롤러)
	this.ui.setCheckButton(this);
	//뷰에 렌더링
	this.ui.render();
}

CheckButton.prototype = {
	
	//모델의 체크상태를 설정
	setChecked : function(checked){
		this.model.setChecked(checked);
	},
	//모델의 토글
	toggle: function(){
		this.model.toggle();
	},
	//모델의 체크상태를 확인
	isChecked: function(){
		this.model.isChecked();
	},
	//모델의 레이블 가져오기
	getLabel: function(){
		 this.model.getLabel();
	},
	//뷰 업데이트
	changed: function(){
		this.ui.update();
	} 
}

/*
	View: Model을 표현하는 역할, MVC의 V
*/

//뷰 생성자
CheckButtonUI = function(elementId){
	this.element = document.getElementById(elementId);
	this.checkButton = null; //controller
	
}
//뷰 메소드 확장
CheckButtonUI.prototype = {
	
	setCheckButton : function(checkButton){
		this.checkButton = checkButton;
	}, //setcheckButton
	
	//화면에 표시(렌더링)
	render : function() {
		
		var html ="<img src='";
		if(this.checkButton.isChecked()){
			html += "/WEBTest/images/check_on.gif'>";			
		}else{
			html += "/WEBTest/images/check_off.gif'>";
		}
		html += "&nbsp;" + this.checkButton.model.getLabel();
		
		this.element.style.cursor = 'hand';
		this.element.innerHTML = html;
		
		// 이벤트리스너 추가
		ajax.Event.addListener(this.element,"click",ajax.Event.bindAsListener(this.doClick, this));
					
	}, //render
	
	//토글 행위를 컨트롤러에게 전달
	doClick : function(){
		this.checkButton.toggle();
	}, //doClick
	
	//이미지를 변경
	update : function(){
		var img = this.element.getElementsByTagName("img").item(0);
		if(this.checkButton.isChecked()){
			img.src = "images/check_on.gif";
		}else{
			img.src = "images/check_off.gif";
		}
	}
}






