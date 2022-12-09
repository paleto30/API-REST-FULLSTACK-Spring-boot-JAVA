import {
    addNewUser,

} from "./APIloginAndRegister.js";





// agregar un nuevo usuario
const formulario =  document.querySelector("#FormRegistro");
formulario.addEventListener('submit', confirmNewUser);

async function confirmNewUser(e){
    e.preventDefault();
    const usuario = {
        nombre : document.querySelector("#nombreR").value,
        apellido : document.querySelector("#apellidoR").value,
        email : document.querySelector("#emailR").value,
        clave : document.querySelector("#passR").value,
    }
    console.log(usuario);
    const confirma = confirm("¿ Desea realizar el Registro ?");
    if (confirma){
        await addNewUser(usuario);
        document.querySelector("#nombreR").value = "";
        document.querySelector("#apellidoR").value = "";
        document.querySelector("#emailR").value = "";
        document.querySelector("#passR").value = "";
        const row = document.createElement("div");
        row.innerHTML = `
            <div class="alert alert-success">
              <strong>Registro Exitoso!</strong> ya puedes iniciar Sesión!
            </div>
        `;
        formulario.appendChild(row);
        setTimeout(() =>{
            row.remove();
        },3000);
    }
}