import {
    getAllUsers,
    deleteUser
} from "./APIuser.js";


document.addEventListener('DOMContentLoaded',()=>{
    getUsers();
})


async  function getUsers(){
    const usuarios = await getAllUsers();
    const tabla = document.querySelector("#bodyT");
    let html = '';
    let contador = 0;
    usuarios.forEach(element =>{
        const {id, nombre, apellido, email} = element;

        html += `
             <tr>
          <td>${contador+1}</td>
          <td>${nombre}</td>
          <td>${apellido}</td>
          <td>${email}</td>
          <td>
            <a href="#" class="btn btn-danger as eliminar" data-usuario="${id}" idUsuario="${id}">
              Borrar
            </a>
          </td>
        </tr>
        `;
        tabla.innerHTML = html;
     })
}

const tablaB = document.querySelector("#bodyT");
tablaB.addEventListener('click', confirDelete);

async function confirDelete(e){

    if (e.target.classList.contains("eliminar")){
        const id = e.target.dataset.usuario;
        console.log(id);
        let confirma = confirm("¿Seguro que desea Eliminar este Usuario?");
        if (confirma){
            await deleteUser(id);
        }
    };
}