<%@ page language="java" contentType="text/html; charset=EUC-KR"
    pageEncoding="UTF-8"%>
<%
	String txt1 = request.getParameter("txt1");
	String pwd1 = request.getParameter("pwd1");
	String cb1 = request.getParameter("cb1");
	String rd1 = request.getParameter("rd1");
	String ta1 = request.getParameter("ta1");
	out.println(txt1);
	out.println(pwd1);
	out.println(cb1);
	out.println(rd1);
	out.println(ta1);
%>