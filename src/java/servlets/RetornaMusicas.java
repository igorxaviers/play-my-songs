package servlets;

import static com.sun.corba.se.spi.presentation.rmi.StubAdapter.request;
import java.io.File;
import java.io.IOException;
import java.io.PrintWriter;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@WebServlet(name = "RetornaMusicas", urlPatterns = {"/RetornaMusicas"})
public class RetornaMusicas extends HttpServlet {

    
    protected void processRequest(HttpServletRequest request, HttpServletResponse response)throws ServletException, IOException {
            String[] musicas={""};
            String filtro="";
            try{
                filtro = request.getParameter("filtro");
                String path = getServletContext().getRealPath("/musicas");
                File diretorio = new File(path);
                musicas = diretorio.list();
            }
            catch(Exception e){}

        response.setContentType("text/html;charset=UTF-8");
        try (PrintWriter out = response.getWriter()) {
            for(String musica : musicas){
                if(musica.toLowerCase().contains(filtro.toLowerCase()))
                {
                    out.println("<div class='item-musica p-3 rounded-3 mb-4'>");
                    out.println("<p>"+musica+"</p>");
                    musica = getServletContext().getContextPath()+"/musicas/"+musica;
                    out.println("<audio controls><source src="+musica+" type='audio/mpeg'></audio>");
                    out.println("</div>");                        
                }
            }
        }
    }

    // <editor-fold defaultstate="collapsed" desc="HttpServlet methods. Click on the + sign on the left to edit the code.">
    /**
     * Handles the HTTP <code>GET</code> method.
     *
     * @param request servlet request
     * @param response servlet response
     * @throws ServletException if a servlet-specific error occurs
     * @throws IOException if an I/O error occurs
     */
    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        processRequest(request, response);
    }

    /**
     * Handles the HTTP <code>POST</code> method.
     *
     * @param request servlet request
     * @param response servlet response
     * @throws ServletException if a servlet-specific error occurs
     * @throws IOException if an I/O error occurs
     */
    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        processRequest(request, response);
    }

    /**
     * Returns a short description of the servlet.
     *
     * @return a String containing servlet description
     */
    @Override
    public String getServletInfo() {
        return "Short description";
    }// </editor-fold>

}
