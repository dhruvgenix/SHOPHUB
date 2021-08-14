/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package product;

import dao.implementations.ProductsDAOImp;
import java.io.IOException;
import java.io.InputStream;
import java.io.PrintWriter;
import javax.servlet.ServletException;
import javax.servlet.annotation.MultipartConfig;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.Part;

/**
 *
 * @author ACER
 */
@MultipartConfig(maxFileSize = 16177215)
public class ProductServ extends HttpServlet {

    /**
     * Processes requests for both HTTP <code>GET</code> and <code>POST</code>
     * methods.
     *
     * @param request servlet request
     * @param response servlet response
     * @throws ServletException if a servlet-specific error occurs
     * @throws IOException if an I/O error occurs
     */
    protected void processRequest(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        response.setContentType("text/html;charset=UTF-8");
        try (PrintWriter out = response.getWriter()) {
            /* TODO output your page here. You may use following sample code. */
            out.println("<!DOCTYPE html>");
            out.println("<html>");
            out.println("<head>");
            out.println("<title>Servlet ProductServ</title>");            
            out.println("</head>");
            out.println("<body>");
            out.println("<h1>Servlet ProductServ at " + request.getContextPath() + "</h1>");
            out.println("</body>");
            out.println("</html>");
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
      //  processRequest(request, response);
    
    System.out.println("productservvvv");
     InputStream inputStream = null;
        
        ProductsDAOImp objectt=new ProductsDAOImp();

        

        //int MaxID = userDAOImp.getMaxID();

        
        String pname=request.getParameter("pname");
        
      String pdesp=  request.getParameter("pdesp");
       

      int pprice=  Integer.parseInt(request.getParameter("pprice"));
              int pquan=  Integer.parseInt(request.getParameter("pquan"));

              int pcatid=  Integer.parseInt(request.getParameter("pcatid"));

        
     
        Part filePart = request.getPart("mypimg"); 
        if (filePart != null) {            
            inputStream = filePart.getInputStream();
        }
          boolean inserted = objectt.insertbyashishProducts(pname, pdesp, pprice, pquan, pcatid, inputStream);
       // System.out.println("Afterrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr");
        if (inserted) {
                    System.out.println("insideeee inserteddddddd");

         
            objectt.downloadImagebyashish(pname);
            response.sendRedirect("index.jsp");
        }else{
            
            response.sendRedirect("SignUp.jsp");
        }
    
    
    
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
