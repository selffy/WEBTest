var xhr;

window.onload = function() {
	xhr = new XMLHttpRequest();
}

function processJSCSV() {
	var responseText;
	if (xhr!=null) {
		xhr.open("GET", "/WEBTest/csv/scoreData.csv", true);
		xhr.onreadystatechange = function() {
			if (xhr.readyState==4 && xhr.status==200) {
				responseText = xhr.responseText;
				var resultArray = responseText.split(",");
				var rowIndex = 0;
				var columnIndex = 0;
				for (i=0; i<resultArray.length; i++) {
					columnIndex = i%3;
					if (columnIndex==0) rowIndex++;
					document.getElementById(""+rowIndex+columnIndex).innerHTML = resultArray[i];
				}
				getTotalJSCSV(responseText);
			}
		}
		xhr.send();
	}
}

function getTotalJSCSV(responseText) {
	if (xhr!=null) {
		xhr.open("GET", "/WEBTest/jsp/scoreDataProcess.jsp?responseText="+responseText, true);
		xhr.onreadystatechange = function() {
			if (xhr.readyState==4 && xhr.status==200) {	
				var totalArray = eval("("+xhr.responseText+")");				
				document.getElementById("41").innerHTML = totalArray[0];
				document.getElementById("42").innerHTML = totalArray[1];
					
			}
			getStudentTotalJSCSV(responseText);
		}
		xhr.send();
	}
}

function getStudentTotalJSCSV(responseText) {
	if (xhr!=null) {
		xhr.open("GET", "/WEBTest/jsp/studentScoreDataProcess.jsp?responseText="+responseText, true);
		xhr.onreadystatechange = function() {
							console.log("hello");
			if (xhr.readyState==4 && xhr.status==200) {	
				console.log("hello");
				var studentsTotalArray = eval("("+xhr.responseText+")");
				console.log("hello");
				console.log(studentsTotalArray);
				document.getElementById("33").innerHTML = studentsTotalArray[0];	
				document.getElementById("43").innerHTML = studentsTotalArray[1];		
				document.getElementById("53").innerHTML = studentsTotalArray[2];		
			}
		}
		xhr.send();
	}
}

			
function processJSJSON() {
	if (xhr!=null) {
		xhr.open("GET", "/WEBTest/json/scoreData.json", true);
		xhr.onreadystatechange = function() {
			if (xhr.readyState==4 && xhr.status==200) {
				
			}
		}
		xhr.send();		
	}	
}

function processJSXML() {
	if (xhr!=null) {
		xhr.open("GET", "/WEBTest/xml/scoreData.xml", true);
		xhr.onreadystatechange = function() {
			if (xhr.readyState==4 && xhr.status==200) {
				
			}
		}
		xhr.send();			
	}	
}


function processINIT(){

	var tdElements = document.getElementsByTagName("td");
	var tdElementsLength = tdElements.lengths;
	
	for(i=0; i<tdElementsLength; i++){
		tdElements[i].innerHTML="";
	}
}