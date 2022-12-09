package com.parcial.andresGalvis.app.controller;

import com.parcial.andresGalvis.app.model.Consulta;
import com.parcial.andresGalvis.app.model.Mascota;
import com.parcial.andresGalvis.app.service.ConsultaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;



@RestController
@RequestMapping("/api/consulta")
public class ConsultaController {

    @Autowired
    private ConsultaService service;

    // mapping para obtener all consultas
    @RequestMapping("/all")
    public List<Consulta> getAllConsultas(){
        return (List<Consulta>) service.getAllConsultas();
    }

    @RequestMapping("/one/{id}")
    public Consulta findById(@PathVariable String id){
        return service.getOneConsulta(id);
    }

    @PostMapping("/add")
    @ResponseStatus(HttpStatus.CREATED)
    public Consulta addNew(@RequestBody Consulta consulta){
        return service.addNewConsulta(consulta);
    }

    @CrossOrigin(origins = "http://localhost:63342")
    @DeleteMapping("/delete/{id}")
    public void deleteById(@PathVariable String id){
        service.deleteConsulta(id);
    }


    @CrossOrigin(origins = "http://localhost:63342")
    @GetMapping("/mascota")
    public List<Mascota> listAllMascotas(){
        return (List<Mascota>) service.getAllMascotas();
    }

    @CrossOrigin(origins = "http://localhost:63342")
    @GetMapping("/mascota/{idMascota}")
    public Mascota getOneMascota(@PathVariable String idMascota){
        return (Mascota) service.getOneMascotaInforme(idMascota);
    }
}
