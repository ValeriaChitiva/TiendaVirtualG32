package com.example.atenea.controlador;

import com.example.atenea.dtos.UsuariosDto;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api")
public class UsuariosControlador {

    @GetMapping("/usuarios")
    //Lóigica para realizar el get
    public String obtenerUsuarios(){return "Hola mundo";}

    @PostMapping("/usuarios")
    public void crearUsuarios(@RequestBody UsuariosDto usuariosDto){
        System.out.println(usuariosDto.toString());
    }

    @DeleteMapping("/usuarios")
    public void eliminarUsuarios(@RequestParam int id){
        System.out.println(id);
    }
    @PutMapping ("/usuarios")
    public void actuslizarUsuarios(@RequestBody UsuariosDto usuariosDto){
        System.out.println(usuariosDto.toString());
    }
}
