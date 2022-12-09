import {
    getAllMascotas,
    getAllCon,
    addNew,
    deleteConsulta,
    getConsulta,
    getMascotaId
} from "./APIconsulta.js";


document.addEventListener('DOMContentLoaded', ()=>{
    getMascotas();
    getAllConsultas();
})

async function getMascotas(){
    const mascotas = await getAllMascotas();
    const select = document.querySelector("#nombreA");
    let html = ';'
    mascotas.forEach(element =>{
        const { id, nombre, tipoMascota } = element;
        html +=`
            <option value="${id}">${tipoMascota}&nbsp;&nbsp;${nombre}</option>
        `;
        select.innerHTML =  html;
    })
}


const formularioC = document.querySelector("#formularioConsultas");
formularioC.addEventListener('submit', addNewConsulta);
async function addNewConsulta(e){
    e.preventDefault();

    const fecha = document.querySelector("#fecha").value;
    const hora = document.querySelector("#hora").value;
    const tipoConsulta = document.querySelector("#tipoC").value;
    const idAnimal = document.querySelector("#nombreA").value;
    //const nombreAnimal = document.querySelector("#nombreA").querySelector("option").getAttribute("value2");
    const nombrePersona = document.querySelector("#nombreD").value;
    const cedulaPersona = document.querySelector("#cedulaD").value;
    const motivoConsulta = document.querySelector("#sintomas").value;
    const procedimiento = document.querySelector("#procedimiento").value;
    const consulta = {
        fecha,hora,tipoConsulta,idAnimal,nombrePersona,cedulaPersona,motivoConsulta,procedimiento
    }

    console.log(consulta);
    const confirma = confirm("¿Seguro que desea registrar esta Consulta?")
    if (confirma){
        await addNew(consulta);
    }
}


async function getAllConsultas() {
    const consultas = await getAllCon();
    const tabla = document.querySelector("#bodyConsulta");
    let html = '';
    let contador = 0
    let idanimal = '';
    let nombreA = '';
    let tipoa = '';
    for (const element of consultas) {

        const {id,fecha,hora,tipoConsulta,idAnimal} = element;
        idanimal = idAnimal;
        const animals = await getMascotaId(idanimal);
        nombreA = animals.nombre;
        tipoa = animals.tipoMascota
        html +=`
                <tr>
            <!-- aqui van a ir los registros-->
            <td >${contador+1}</td>
            <td >${fecha}</td>
            <td >${hora}</td>
            <td >${tipoConsulta}</td>
            <td >${tipoa} &nbsp;&nbsp; ${nombreA}</td>
            <td > 
                <a href="#" class="btn btn-danger as eliminar" data-consulta="${id}" idConsulta="${id}">
                    Borrar
                </a>
                <a href="#" class="btn btn-info as detalle" data-consulta="${id}" idConsulta="${id}" data-bs-toggle="modal" data-bs-target="#exampleModalD">
                    Detalles
                </a>
            </td>
        </tr>
        `;
        tabla.innerHTML = html;
        contador+=1;
    }
    //console.log(consultas);
}



// funcion para realizar la eliminacion de un registro
const tabla = document.querySelector("#bodyConsulta");
tabla.addEventListener('click', confirmDelete);

async  function confirmDelete(e){
    //console.log(e.target.classList.contains("eliminar"));
    if (e.target.classList.contains("eliminar")){
        const id = e.target.dataset.consulta;
        let confirmar = confirm("¿ Desea eliminar este Registro ?")
        if (confirmar){
            await deleteConsulta(id);
        }
    }
};


// mostrar detalles de acusado
const tablaD =  document.querySelector("#bodyConsulta");
tablaD.addEventListener('click', lookDetail);

async function lookDetail(e) {
    console.log(e.target.classList.contains("detalle"));
    const idConsulta = {
        id : e.target.getAttribute("idConsulta")
    }
    //console.log(idMascota);
    const consulta = await getConsulta(idConsulta.id);
    console.log("mascota",consulta.idAnimal);
    const mascota = await getMascotaId(consulta.idAnimal);
    let tipoMascota = mascota.tipoMascota;
    let mascotaNombre = mascota.nombre;
    let mascotaEdad = mascota.edad;
    let mascotaSexo = mascota.sexo;
    let mascotaFoto = mascota.imagen;
    console.log(mascotaFoto)
    let html = '';
    const modalData = document.querySelector("#modaldetail");
    html =`
                <div class="row">
                            <div class="col col-12 col-md-4" >
                                fecha: ${consulta.fecha}
                            </div>
                            <div class="col col-12 col-md-4" >
                                hora: ${consulta.hora}
                            </div>
                            <div class="col col-12 col-md-4" >
                                tipo de consulta: ${consulta.tipoConsulta}
                            </div>
                        </div>
                        <hr>
                        <hr>
                        <h6 ><strong>Datos Del Paciente</strong></h6>
                        <hr>
                        <div class="row">
                            <div class="col col-12 col-md-6" >
                                <div class="row">
                                    <div class="col col-12 col-md-12">
                                        Tipo de Animal: <strong>&nbsp;&nbsp;${tipoMascota}</strong>
                                    </div>
                                    <hr>
                                    <div class="col col-12 col-md-12">
                                        Nombre del Animal: <strong>&nbsp;&nbsp;${mascotaNombre}</strong>
                                    </div>
                                    <hr>
                                    <div class="col col-12 col-md-12" >
                                        Edad mascota:<strong>&nbsp;&nbsp; ${mascotaEdad}</strong>
                                    </div>
                                    <hr>
                                    <div class="col col-12 col-md-12" >
                                        Sexo mascota:<strong>&nbsp;&nbsp; ${mascotaSexo}</strong>
                                    </div>
                                </div>
                            </div>
                            <div class="col col-12 col-md-6" >
                                Foto<br><img src="img/mascotas/${mascotaFoto}" style="width: 140px;">
                            </div>
                        </div>
                        <hr>
                        <h6 ><strong>Datos de Persona Responsable</strong></h6>
                        <br>
                        <div class="row">
                            <div class="col col-12 col-md-12" >
                                Persona Responsable: <strong>${consulta.nombrePersona}</strong>
                            </div>
                            <div class="col col-12 col-md-12" >
                                Cedula: <strong>${consulta.cedulaPersona}</strong>
                            </div>
                        </div>
                        <hr>
                        <div class="row">
                            <div class="col col-12 col-md-12" >
                                <strong>Motivo de la consulta:</strong><br>${consulta.motivoConsulta}
                            </div>
                        </div>
                        <hr>
                        <div class="row">
                            <div class="col col-12 col-md-12" >
                                <strong>Procedimientos:</strong><br>${consulta.procedimiento}
                            </div>
                        </div>
                        <hr>
    `;
    modalData.innerHTML = html;
};



