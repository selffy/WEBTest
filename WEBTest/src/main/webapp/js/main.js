//0. 페이지로딩함수 적용
$(function() {
	//1. xml을 로딩
	$.get("/WEBTest/xml/books.xml", null, function(data, textStatus, xhr) {
		// 2. 로딩한 xml 데이터 처리
		alert();
	});
});


/*
window.onload = function() {
	alert("페이지가 열렸습니다!");
}
*/

/*
$document.ready(function() {
	
});
*/

/*
$(function() {
	// alert("페이지가 열렸습니다");
});
*/

