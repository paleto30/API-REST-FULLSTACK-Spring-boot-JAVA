package com.parcial.andresGalvis.app.repository;

import com.parcial.andresGalvis.app.model.Usuario;

import org.springframework.data.repository.CrudRepository;


public interface UsuarioRepository extends CrudRepository<Usuario,String> {

    Usuario findByEmail(String email);
}
