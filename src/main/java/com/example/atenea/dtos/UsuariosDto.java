package com.example.atenea.dtos;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class UsuariosDto {
    private int id;
    private String nombre;
    private int edad;
    private String rol;

}
