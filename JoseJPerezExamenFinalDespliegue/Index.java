import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@WebServlet("/Index")
public class Index extends HttpServlet {
	private static final long serialVersionUID = 1L;

    public Index() {
        super();
    }

	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

		ConexionBD usuario = new ConexionBD();
		PrintWriter out = response.getWriter();

		usuario.setUsuario("");
		usuario.setContrasenya("");

		usuario.setServidor("192.168.100.171");
		usuario.setBd("alumnosdb");
	
		
		out.println("Servidor: " + usuario.getServidor()); 
		out.println("Base de datos: " + usuario.getBd());   
		out.println("Usuario: " + usuario.getUsuario()); 
		out.println("Contraseña: " + usuario.getContrasenya()); 
				
		Alumno[] alumno = miJDBC.dameAlumnos(usuario);

		for(int i = 0; i < alumno.length; i++ ) {
			for(int j =  0; j < alumno[i].getActividades().length; j++) {
				String actividad = alumno[i].getActividades()[j].getNombre();
				
				boolean autorizado = alumno[i].getActividades()[j].isAutorizado();
				
				out.println("<form action='Info' method='POST'>");
				out.print("Nombre: <input name='alumno' value='"+ alumno[i].getNombre() +"' readonly> Actividad: <input name='actividad' value='"+ actividad +"' readonly>");
								
				out.println("<input type='submit' onclick='cambioAutorizado(alumno, i, j)'>");
				
				if(autorizado) {
					out.println("autorizado");
				}else {
					out.println("no autorizado");
				}	
				out.println("</form>");
			}
			out.println("</form>");
		}
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		doGet(request, response);
	}
	
	protected void cambioAutorizado(Alumno[] alumno, int i, int j) {
		boolean autorizado = alumno[i].getActividades()[j].isAutorizado();

		if(autorizado) {
			autorizado = false;
		}else {
			autorizado = true;
		}
	}

}