package com.example.atenea.controlador;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")
public class CarControlador {
    @GetMapping("/car")
    public String obtenerCar(){
        return "Hola mundo";
    }
}
