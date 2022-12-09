import {
    getMascotass,
    addNewPet,
    deletePet,
    getMascota,
    updatePet
} from "./APImascota.js"
document.addEventListener('DOMContentLoaded',()=>{
    getMascotas();
    updateMascota();
})

// funcion para obtener la lista de todos los registros
async function getMascotas(){
    const listaMascotas = await getMascotass();
    let html = '';
    const datos = document.querySelector("#bodyT");
    let contador = 0
    listaMascotas.forEach(element =>{
        const {id,tipoMascota,nombre,edad,sexo} = element;
        html +=`
            <tr>
            <!-- aqui van a ir los registros-->
            <td >${contador+1}</td>
            <td >${tipoMascota}</td>
            <td >${nombre}</td>
            <td >${edad}</td>
            <td >${sexo}</td>
            <td > 
                <a href="#" class="btn btn-success as editar" data-mascota="${id}" idMascota="${id}" data-bs-toggle="modal" data-bs-target="#exampleModaldetalle" >
                    Editar
                </a>
                <a href="#" class="btn btn-danger as eliminar" data-mascota="${id}" idMascota="${id}">
                    Borrar
                </a>
                <a href="#" class="btn btn-info as detalle" data-mascota="${id}" idMascota="${id}" data-bs-toggle="modal" data-bs-target="#exampleModalD">
                    Detalles
                </a>
            </td>
        </tr>
        `;
        datos.innerHTML = html;
        contador+=1;
    })
};


// funcion para crear un nuevo registro
const formulario = document.querySelector("#formularioR");
formulario.addEventListener('submit',confirmarNew);

async function confirmarNew(e) {
    e.preventDefault();
    const mascota = {
        tipoMascota : document.querySelector("#tipo").value,
        nombre : document.querySelector("#nombre").value,
        edad : document.querySelector("#edad").value,
        sexo : document.querySelector("#sexo").value,
        imagen : document.querySelector("#imagen").value,
    }
    console.log(mascota)
    const confirma = confirm("¿ Desea agregar este Registro ?")
    if (confirma){
        await addNewPet(mascota);
    }
}


// funcion para realizar la eliminacion de un registro
const tabla = document.querySelector("#bodyT");
tabla.addEventListener('click', confirmDelete);

async  function confirmDelete(e){
    //console.log(e.target.classList.contains("eliminar"));
    if (e.target.classList.contains("eliminar")){
        const id = e.target.dataset.mascota;
        let confirmar = confirm("¿ Desea eliminar este Registro ?")
        if (confirmar){
            await deletePet(id);
        }
    }
};



function updateMascota(){
    const tabla = document.querySelector("#bodyT");
    tabla.addEventListener('click',loadDetail);
    async function loadDetail(e){
        if (e.target.classList.contains("editar")){
            const id = e.target.dataset.mascota;
            const mascota = await getMascota(id);
            mostrarDatos(mascota);

            // registrar el formulario
            const formUpdate = document.querySelector("#formularioD");
            formUpdate.addEventListener('submit', validarUpdate);
        };
    }
}

function mostrarDatos(mascota){
    const inputid = mascota.id;
    const inputtipo = mascota.tipoMascota;
    const inputname = mascota.nombre;
    const inputedad = mascota.edad;
    const inputsexo = mascota.sexo;
    const inputimagen = mascota.imagen;

    document.querySelector("#idU").value = inputid;
    document.querySelector("#tipoU").value = inputtipo;
    document.querySelector("#nombreU").value = inputname;
    document.querySelector("#edadU").value = inputedad;
    document.querySelector("#sexoU").value = inputsexo;
    document.querySelector("#imagenU").value = inputimagen;
}

async function validarUpdate(e) {
    e.preventDefault();
    const mascota = {
        id : document.querySelector("#idU").value,
        tipoMascota: document.querySelector("#tipoU").value,
        nombre: document.querySelector("#nombreU").value,
        edad: document.querySelector("#edadU").value,
        sexo: document.querySelector("#sexoU").value,
        imagen: document.querySelector("#imagenU").value,
    };
    //console.log(mascota)
    const confirme = confirm("¿Desea actualizar este Registro?")
    if (confirme){
        await updatePet(mascota)
    }
};


// mostrar detalles de acusado
const tablaD =  document.querySelector("#bodyT");
tablaD.addEventListener('click', lookDetail);

async function lookDetail(e) {
    console.log(e.target.classList.contains("detalle"));
    const idMascota = {
        id : e.target.getAttribute("idMascota")
    }
    //console.log(idMascota);
    const mascota = await getMascota(idMascota.id);
    console.log("mascota",mascota);
    let html = '';
    const modalData = document.querySelector("#modaldetail");

    html =`
    <div class="card mb-3" style="max-width: 100%;">
    <div class="row no-gutters">
      <div class="col-md-4">
        <img src="../img/mascotas/${mascota.imagen}" alt="${mascota.imagen}" style="width: 240px">
      </div>
      <div class="col-md-8">
        <div class="card-body cardD">
          <h5 class="card-title"><strong>TIPO ANIMAL</strong>: ${mascota.tipoMascota}</h5>
          <p class="card-text"><strong>NOMBRE</strong>: ${mascota.nombre}</p>
          <p class="card-text"><strong>EDAD</strong>: ${mascota.edad}</p>
          <p class="card-text"><strong>SEXO</strong>: ${mascota.sexo}</p>
        </div>
      </div>
    </div>
  </div>
    `;
    modalData.innerHTML = html;
};




