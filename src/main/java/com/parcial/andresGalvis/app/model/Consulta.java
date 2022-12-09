package com.parcial.andresGalvis.app.model;

import lombok.*;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import javax.validation.constraints.NotBlank;

@Document(collection = "consultas")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Consulta {

    @Id
    @Getter @Setter @NotBlank
    private String id;
    @Getter @Setter @NotBlank
    private String fecha;
    @Getter @Setter @NotBlank
    private String hora;
    @Getter @Setter @NotBlank
    private String tipoConsulta;
    @Getter @Setter @NotBlank
    private String idAnimal;
    //@Getter @Setter @NotBlank
    //private String nombreAnimal;
    @Getter @Setter @NotBlank
    private String nombrePersona;
    @Getter @Setter @NotBlank
    private String cedulaPersona;
    @Getter @Setter @NotBlank
    private String motivoConsulta;
    @Getter @Setter @NotBlank
    private String procedimiento;


}
