$.ajax({
	url:"/xml/books.xml",
	dataType: "xml",
	success: function(data){
		$(data).find("statuses stautus").each(function(){
			let status = $(this).find("text").text();
			
		});
	},
	error: function(){
		$("#xmlPara").text("Failed to get feed");
		
	}
});










/*$(function(){
	$('button').click(function(){
	//A.load(B) A에 B의 내용을 불러옵니다
		$('#xmlPara').load('books.xml'); 
	});
});

responseTxt: 서버에 요청이 완료되면 결과내용(파라메터)
statusTxt: 서버에 요청을 보내면, 요청의 상태
status: 파일의 상태 200, 403,  404, 
xhr: 요청한 오브젝트
*/

/*$('#div1').load('경로 books.xml0', 요청이 완료되면 할일 function(responsTxt, statusTxt, xhr))
	console.log("로드할 파일의 내용: "+ responsTxt);
	console.log("로드할 파일과의 연결상태 : "+ statusTxt);
	console.log("요청의 상태:  "+ xhr);
	console.log("요청한 파일의 상태:  "+ xhr.status);
	
	if(statusTxt == "success" && xhr.status == 200){
		alert("파일이 준비되었습니다.")
	} else{
		alert("파일이 준비되지 않았습니다.")
	}
	
	
	*/