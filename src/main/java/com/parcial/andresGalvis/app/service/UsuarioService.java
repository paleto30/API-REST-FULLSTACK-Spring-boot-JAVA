package com.parcial.andresGalvis.app.service;
import com.parcial.andresGalvis.app.model.Usuario;
import com.parcial.andresGalvis.app.repository.UsuarioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UsuarioService  {

    @Autowired
    private UsuarioRepository repository;

    // CRUD
    // retornar todos los usuarios
    public List<Usuario> finAllUsers(){
        return (List<Usuario>) repository.findAll();
    }

    // guardar un nuevo usuario
    public Usuario addUser(Usuario usuario){
        return repository.save(usuario);
    }

    // obtener un usuario por id
    public Usuario getUserById(String id){
        return repository.findById(id).get();
    }

    // obtener usuario por email
    public Usuario findByEmail(String email){
        return repository.findByEmail(email);
    }

    // Actualizar o editar un usuario
    public Usuario updateUser(Usuario usuario){
        Usuario existeUser = repository.findById(usuario.getId()).get();
        existeUser.setNombre(usuario.getNombre());
        existeUser.setApellido(usuario.getApellido());
        existeUser.setEmail(usuario.getEmail());
        existeUser.setClave(usuario.getClave());
        return repository.save(existeUser);
    }

    // Borrar un usuario
    public String deleteUser(String id){
        repository.deleteById(id);
        return "Se Ha eliminado el usuario con ID: "+id;
    }



}
