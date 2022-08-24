<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%
	String responseText = request.getParameter("responseText");
	String[] strArr = responseText.split(",");
	
	int studentsCount = 3;
	int subjectCount = 2;
	int[] studentsTotal = new int[studentsCount];
	float[] studentsAvg = new float[studentsCount];	
		
	for(int i=0; i < strArr.length; i++) {
		if(i%studentsCount==0) {
		//학생별 영어, 수학 합산점수
			studentsTotal[(int)i/studentsCount] =
					Integer.parseInt(strArr[i+1])+Integer.parseInt(strArr[i+2]);		
		} 
			out.print("["+studentsTotal[0]+","+studentsTotal[1]+","+studentsTotal[2]+"]");
	
	}
			
%>