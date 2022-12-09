package com.parcial.andresGalvis.app.model;


import lombok.*;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import javax.validation.constraints.NotBlank;
// clase Usuario.java  ( el modelo de Usuario )
@Document(collection = "usuarios")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Usuario {

    @Id @Getter @Setter
    private String id;
    @NotBlank @Getter @Setter
    private String nombre;
    @NotBlank @Getter @Setter
    private String apellido;
    @NotBlank @Getter @Setter
    private String email;
    @NotBlank @Getter @Setter
    private String clave;
}
