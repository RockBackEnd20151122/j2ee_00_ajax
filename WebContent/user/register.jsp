<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>Insert title here</title>
</head>
<body>
	<form action="/test_web_20151206/registerAction" method="post">
		<table border="1">
			<tr>
				<td>用户名<input type="text" name="userName"></td>
				<td>密码:<input type="password" name="password"></td>
				<td>请选择您的性别：
				    <input type="radio" name="gender" value="1">男
					<input type="radio" name="gender" value="2">女 
					<input type="radio" name="gender" value="3">东方不败
				</td>
				<td>您喜欢什么运动： 
				    <input type="checkbox" name="love" value="1" checked>篮球 
				    <input type="checkbox" name="love" value="2">足球
					<input type="checkbox" name="love" value="3">排球 
					<input type="checkbox" name="love" value="4">其他球
				</td>
				<td>请选择您喜欢的周星驰作品（）：<select name="xingxing">
						<option value="1">鹿鼎记
						<option value="2">少林足球
						<option value="3">大话西游
						<option value="4">喜剧之王
						<option value="5">其他
				</select></td>
				<td>
					<textarea rows="5" cols="5" name="remark">aaaaaa</textarea>
				</td>
			</tr>
			<tr>
				<td><input type="submit" value="test"></td>
			</tr>
		</table>
	</form>
</body>
</html>