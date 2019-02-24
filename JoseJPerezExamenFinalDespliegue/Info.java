import java.io.IOException;
import java.io.PrintWriter;
import java.net.InetAddress;

import java.util.Date;


import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 * Servlet implementation class Info
 */
@WebServlet("/Info")
public class Info extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public Info() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		PrintWriter out = response.getWriter();
	
    	InetAddress IP;
		IP = InetAddress.getLocalHost();
				
		Date date = new Date();
		date.toString();
		
		String actividad = request.getParameter("actividad");
		String alumno = request.getParameter("alumno");

		out.println("<p>Ip: " + IP + "</p>\n");
		out.println("<p>Fecha: " + date + "</p>\n");

		out.println("<p> Actividad: " + actividad + " </p>\n");
		out.println("<p> Alumno: " + alumno + " </p>\n");
		
		out.println("<p> Cambio realizado correctamente! </p>\n");


		out.println("<a href='Index'> Volver </a>");				
	}

	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		doGet(request, response);
	}

}