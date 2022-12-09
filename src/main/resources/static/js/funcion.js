
// creamos la funcion de mostrar alerta
export function mostrarAlerta(mensaje) {

    const alerta = document.querySelector(".bg-red-100");

    if (!alerta) {
        // creamos el elemento alerta como un parrafo
        const alerta = document.createElement("p");

        // le agregamos al elemtento anteriormente creado las siguientes etiquetas html
        // y agregamos el mensaje de error
        alerta.innerHTML = `
            <strong class="font-bold">Error!</strong>
            <span class="block sm:inline">${mensaje}</span>            
        `;

        //hacemos referencia al formulario cuando invocamos la funcion de mostrar alerta y
        //agregamos un nuevo hijo a ese formulario el cual contendra los datos del elemento
        // anteriormente creado como alerta
        formulario.appendChild(alerta);

        setTimeout(() =>{  // establecemos un tiempo para remover el elemento que creamos
            alerta.remove();  // de esta manera removemos el <p></p> que contiene la alerta dentro del form
        },3000); // despues de 3 segundos
    }
}