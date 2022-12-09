import {
    getAccess,
} from "./APIloginAndRegister.js";


document.addEventListener('DOMContentLoaded',()=>{

})



const formulario = document.querySelector("#formLog");
formulario.addEventListener('submit', iniciarSesion);

async function iniciarSesion(e) {
    e.preventDefault();
    const email = document.querySelector("#emailLogin").value;
    const clave = document.querySelector("#passLogin").value;

    const formulario = document.querySelector("#formLog");
    const row = document.createElement("div");
    const row2 = document.createElement("div");
    row2.innerHTML = `
                        <div class="alert alert-danger">
                          <strong>Error!</strong> Usuario y contraseña invalidos, intente nuevamente!
                        </div>
                    `;
    row.innerHTML = `
        <div class="alert alert-danger">
          <strong>Error!</strong> Contraseña incorrecta!
        </div>
    `;
    try {
        const usuario = await getAccess(email);
        const correo = usuario.email;
        const clavee = usuario.clave;

        if (correo === email){
            if (clavee === clave){
                window.location.href = "mascotas.html";
            }else {
                formulario.appendChild(row);
                setTimeout(() =>{
                    row.remove();
                },2000);
                //document.querySelector("#emailLogin").value = "";
                document.querySelector("#passLogin").value = "";
            };
        };
    }catch (error){
        formulario.appendChild(row2);
        setTimeout(() =>{
            row2.remove();
        },2000);
        document.querySelector("#emailLogin").value = "";
        document.querySelector("#passLogin").value = "";
    };
}