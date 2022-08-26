<?xml version="1.0" encoding="utf-8" ?>
<%@ page contentType = "text/xml; charset=utf-8" %>
<%@ page import = "java.sql.*" %>
<%@ page import = "util.DB" %>
<%@ page import = "util.Util" %>
<%@ page import ="java.net.InetAddress"%>
<%
	
	request.setCharacterEncoding("utf-8");
	InetAddress inet = InetAddress.getLocalHost();
	String serverAddr = inet.getHostAddress();
	String addr = request.getRemoteAddr();
	String nickName = request.getParameter("nickName");
	String msg = request.getParameter("msg");
	String message = "["+nickName+"]"+"["+inet+"]"+ msg;
	
	Connection conn = null;
	PreparedStatement pstmt = null;
	
	boolean isSuccess = true;
	
	try {
		conn = DB.getConnection();
		pstmt = conn.prepareStatement(
			"insert into CHAT_MESSAGE (NICKNAME, REGISTER_DATE, MESSAGE) "+
			"values (?, now(), ?)");
		pstmt.setString(1, nickName);
		pstmt.setString(2, message);
		pstmt.executeUpdate();
	} catch(SQLException ex) {
		isSuccess = false;
	} finally {
		if (pstmt != null) try { pstmt.close(); } catch(SQLException ex) {}
		if (conn != null) try { conn.close(); } catch(SQLException ex) {}
	}
%>
<result>
	<code><%= isSuccess ? "success" : "fail" %></code>
</result>
