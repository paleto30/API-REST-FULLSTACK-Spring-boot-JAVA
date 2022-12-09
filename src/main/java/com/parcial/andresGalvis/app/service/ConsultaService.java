package com.parcial.andresGalvis.app.service;

import com.parcial.andresGalvis.app.model.Consulta;
import com.parcial.andresGalvis.app.model.Mascota;
import com.parcial.andresGalvis.app.repository.ConsultaRepository;
import com.parcial.andresGalvis.app.repository.MascotaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;


@Service
public class ConsultaService  {

    @Autowired
    private ConsultaRepository repository;

    @Autowired
    private MascotaRepository mascotaRepository;

    // get para todos los registros
    public List<Consulta> getAllConsultas(){
        return (List<Consulta>) repository.findAll();
    }

    // get para una consulta especifica
    public Consulta getOneConsulta( String id){
        return repository.findById(id).get();
    }


    // add para  nueva consulta
    public Consulta addNewConsulta(Consulta consulta){
        return repository.save(consulta);
    }


    // delete por id
    public String  deleteConsulta(String id){
        repository.deleteById(id);
        return "se elimino la consulta con el id:"+id;
    }

    // get para todas las mascotas
    public List<Mascota> getAllMascotas(){
        return (List<Mascota>) mascotaRepository.findAll();
    }
    // get apra obtener los datos de la mascota en el informe
    public Mascota getOneMascotaInforme(String id){
        return mascotaRepository.findById(id).get();
    }

}
