package com.parcial.andresGalvis.app.controller;

import com.parcial.andresGalvis.app.model.Usuario;
import com.parcial.andresGalvis.app.service.UsuarioService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/usuario")
public class UsuarioController {


    @Autowired
    private UsuarioService service; // una instancia de la clase Userservicio

    // ruta y meto para optener todos los usuarios
    @GetMapping("/all")
    public List<Usuario> getAllUsers(){
        return (List<Usuario>) service.finAllUsers();
    }

    //ruta y metodo para  Agregar un nuevo usuario
    @PostMapping("/add")
    @ResponseStatus(HttpStatus.CREATED)
    public Usuario addNewUser(@RequestBody Usuario usuario){
        return service.addUser(usuario);
    }

    //Ruta y metodo para Obtener un usuario por id
    @GetMapping("/one/{id}")
    public Usuario getOneUser(@PathVariable String id){
        return service.getUserById(id);
    }

    // Ruta y Metodo para actualizar un usuario
    @CrossOrigin(origins = "http://localhost:63342")
    @PutMapping("/update")
    public Usuario updateUser(@RequestBody Usuario usuario){
        return  service.updateUser(usuario);
    }

    // Ruta y metodo para borrar un usuario
    @CrossOrigin(origins = "http://localhost:63342")
    @DeleteMapping("/delete/{id}")
    public void deleteOneUser(@PathVariable String id){
        service.deleteUser(id);
    }


    @CrossOrigin(origins = "http://localhost:63342")
    @GetMapping("/login/{email}")
    public Usuario getAccesUser(@PathVariable String email){
        return service.findByEmail(email);
    }

}
