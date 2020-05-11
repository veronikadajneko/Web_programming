package com.bsu;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.BufferedReader;
import java.io.IOException;

public class CheckServlet extends HttpServlet {
    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        BufferedReader reader = request.getReader();
        int Value;
        StringBuilder result = new StringBuilder();
        while ((Value = reader.read()) != -1) {
            result.append((char) Value);
        }

        response.getOutputStream().println("{\"success\" : true}\n" + result);
    }
}
