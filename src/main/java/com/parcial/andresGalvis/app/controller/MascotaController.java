package com.parcial.andresGalvis.app.controller;


import com.parcial.andresGalvis.app.model.Mascota;
import com.parcial.andresGalvis.app.service.MascotaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/mascota")
public class MascotaController {

    @Autowired
    private MascotaService service;   // creamos una variable del tipo service para hacer uso de los metodos de la clase service


    // creamos el metodo get para obtener todos los regsitros
    @GetMapping("/all")
    public List<Mascota> getMascotas(){
        return service.findAllMascotas();
    }


    // creamos el metodo post para agregar registros
    @PostMapping("/add")
    @ResponseStatus(HttpStatus.CREATED)
    public Mascota  crearMascota(@RequestBody Mascota mascota){
        return service.addMascota(mascota);
    }


    // creamos el metodo get id para obtener un solo registro por ID
    @GetMapping("/one/{id}")
    public Mascota getMascota(@PathVariable String id){
        return service.getMascotaById(id);
    }


    // creamos el metodo update que nos permite actualizar un registro
    @CrossOrigin(origins = "http://localhost:63342")
    @PutMapping("/update")
    public Mascota updateMascota(@RequestBody Mascota mascota){
        return service.updateMascota(mascota);
    }


    // creamos el metodo delete para borrar un registro por ID
    @CrossOrigin(origins = "http://localhost:63342")
    @DeleteMapping("/delete/{id}")
    public void deleteMascota(@PathVariable String id){
         service.deleteMascotaById(id);
    }


}
