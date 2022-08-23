window.onload = function() {
	xhr = new XMLHttpRequest();
}

function processJSCSV() {
	if(xhr != null) {
		xhr.open("GET", "/WEBTest/csv/scoreData.csv", true);
		xhr.onreadystatechange = function(){
			if(xhr.readyState == 4 && xhr.status == 200){
				
			 var totalArray = eval("("+getTotalSCV(xhr.reponseText)+")");
			 
			 alert("totalArray");
			 
			 var resultArrya=xhr.responseText.split(",");
			 var lowIndex = 0;
			 var columIndex = 0;
			 for(i=0; i<resultArray.length; i++){
				columnIndex = i%3;
				if(columnIndex==0) rowIndex++''
			}
			 
			 document.getElementById("41").innerHTML.totalArray[0];
			 document.getElementById("41").innerHTML.totalArray[1];
				
				
				}			
			}
		}
		xhr.send();
	}

function processJSSON() {
	if(xhr != null) {
		xhr.open("GET", "/WEBTest/json/scoreData.json", true);
		xhr.onreadystatechange = function(){
			if(xhr.readyState == 4 && xhr.status == 200){
				alert(xhr.responseText);
	
			}
			
		}
		xhr.send();
	}
} 

function processJSXML() {
	if(xhr != null) {
		xhr.open("GET", "/WEBTest/xml/scoreData.xml", true);
		xhr.onreadystatechange = function(){
			if(xhr.readyState == 4 && xhr.status == 200){
				alert(xhr.responseText);
	
			}
			
		}
		xhr.send();
	}
	
}
	
	
function getTotalSCSV(responseTest){
	if(s)
}