
const url = `http://localhost:8089/api/consulta`;


export  const getAllMascotas = async ()=>{
    try {
        const result = await fetch(`${url}/mascota`);
        const mascotas = result.json();
        return mascotas;
    }catch (error){
        console.log(error)
    }
}

export const getAllCon = async ()=>{
    try {
        const result = await fetch(`${url}/all`);
        const consultas = await result.json();
        return consultas;
    }catch (error) {
        console.log(error)
    }
};

export const getConsulta = async (id)=>{
    try {
        const result = await fetch(`${url}/one/${id}`);
        const consulta = await result.json();
        return consulta;
    }catch (e) {
        console.log(e)
    }
}

export const getMascotaId = async (id)=>{
    try {
        const result = await fetch(`${url}/mascota/${id}`);
        const mascota = await result.json();
        return mascota;
    }catch (e) {
        console.log(e)
    }
}



export const addNew = async (consulta)=>{
    try {
        await fetch(`${url}/add`,{
            method : 'POST',
            body : JSON.stringify(consulta),
            headers : {
                "Content-Type": "application/json",
            },
        });
    }catch (error) {
        console.log(error);
    }
    window.location.href = "consultas.html";
}


export const deleteConsulta = async(id)=>{
    try {
        await fetch(`${url}/delete/${id}`,{
            method: 'DELETE',
            mode: 'cors',
        });
    }catch (error) {
        console.log(error)
    }
    window.location.href = "consultas.html";
}

