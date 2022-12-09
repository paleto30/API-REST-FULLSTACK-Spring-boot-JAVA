package com.parcial.andresGalvis.app.model;

import lombok.*;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;


import javax.validation.constraints.NotBlank;

@Document(collection = "mascotas")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Mascota {

    @Id
    @Getter @Setter
    private String id;
    @Getter @Setter @NotBlank
    private String tipoMascota;
    @Getter @Setter @NotBlank
    private String nombre;
    @Getter @Setter @NotBlank
    private String edad;
    @Getter @Setter @NotBlank
    private String sexo;
    @Getter @Setter @NotBlank
    private String imagen;

}
