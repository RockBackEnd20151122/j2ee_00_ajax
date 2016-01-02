package user.servlet;

import java.io.IOException;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.SQLException;
import java.util.UUID;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

public class RegisterServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;

	public RegisterServlet() {
		super();
	}

	protected void doGet(HttpServletRequest request,
			HttpServletResponse response) throws ServletException, IOException {
	}

	protected void doPost(HttpServletRequest request,
			HttpServletResponse response) throws ServletException, IOException {
		String userName = request.getParameter("userName");
		String password = request.getParameter("password");
		System.out.println(userName);
		System.out.println(password);
		
		String driver = "com.mysql.jdbc.Driver";
		String url = "jdbc:mysql://localhost:3306/userTest";
		String user = "root";
		String pwd = "";
		Connection con = null;
		// 加载驱动
		try {
			Class.forName(driver);
			// 获取连接
			con = DriverManager.getConnection(url, user, pwd);
			// 拼接sql
			String sql = "INSERT INTO users(uid, userName, password, age)"
					+ "VALUES (?, ?, ?, ?)";
			PreparedStatement s = con.prepareStatement(sql);
			s.setString(1, UUID.randomUUID().toString());
			s.setString(2, userName);
			s.setString(3, password);
			s.setString(4, "01");
			s.execute();
		} catch (ClassNotFoundException e) {
			e.printStackTrace();
		} catch (SQLException e) {
			e.printStackTrace();
		} finally {
			if (con != null) {
				try {
					con.close();
				} catch (SQLException e) {
					e.printStackTrace();
				}
			}
		}
	}
}