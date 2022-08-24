<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
    
<%
	String responseText = request.getParameter("responseText");
	String[] strArr = responseText.split(",");
	
	int engTotal = 0;
	int mathTotal = 0;
	
	int studentsCount = 3;
	int subjectCount = 2;
	int[] studentsTotal = new int[studentsCount];
	float[] studentsAvg = new float[studentsCount];
	


	for(int i=0; i < strArr.length; i++) {
		/* if(i%studentsCount==0) {
		//학생별 영어, 수학 합산점수
			studentsTotal[(int)i/studentsCount] =
					Integer.parseInt(strArr[i+1])+Integer.parseInt(strArr[i+2]);
			studentsAvg[(int)i/studentsCount]
					= studentsTotal[(int)i/studentsCount]/subjectCount;
			//system.out.println(new Float(studentsAvg[(int)i/studentsCount]));*/
			
		//영어, 수학 각각 합산점수
		if(i%studentsCount==1){
			engTotal += Integer.parseInt(strArr[i]);
		}
		if(i%studentsCount==2){
			mathTotal += Integer.parseInt(strArr[i]);
		}
	
	}
	out.print("["+engTotal+","+mathTotal+"]");
					
%>