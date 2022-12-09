package com.parcial.andresGalvis.app.service;

import com.parcial.andresGalvis.app.model.Mascota;
import com.parcial.andresGalvis.app.repository.MascotaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.UUID;

@Service
public class MascotaService {

    @Autowired
    private MascotaRepository repository;

    //CRUD CREATE, READ , UDDATE, DELETE

    // list all
    public List<Mascota> findAllMascotas(){
        return (List<Mascota>) repository.findAll();
    }

    // add new document
    public Mascota addMascota(Mascota mascota){
        return repository.save(mascota);
    }

    /// get one by id
    public Mascota getMascotaById(String id){
        return repository.findById(id).get();
    }
    // update one by id
    public Mascota updateMascota(Mascota mascotaRequest){
        Mascota existeMascota = repository.findById(mascotaRequest.getId()).get();
        existeMascota.setTipoMascota(mascotaRequest.getTipoMascota());
        existeMascota.setNombre(mascotaRequest.getNombre());
        existeMascota.setEdad(mascotaRequest.getEdad());
        existeMascota.setSexo(mascotaRequest.getSexo());
        existeMascota.setImagen(mascotaRequest.getImagen());
        return  repository.save(existeMascota);
    }

    // delete one by id
    public String deleteMascotaById(String  id){
        repository.deleteById(id);
        return "se elimino la mascota con el id: "+id;
    }


}
