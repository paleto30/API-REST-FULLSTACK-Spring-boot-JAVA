const url = "http://localhost:8089/api/mascota";

export const getMascotass = async ()=>{
    try {
        const result = await fetch(`${url}/all`);
        const mascotas = await result.json();
        return mascotas;
    }catch (error) {
        console.log(error)
    }
};

export const getMascota =async (id)=>{
    try {
        const result = await fetch(`${url}/one/${id}`);
        const pet = await result.json();
        return pet;
    }catch (e) {
        console.log(e)
    }
}


export const addNewPet = async (mascota)=>{
    try {
        await fetch(`${url}/add`,{
            method : 'POST',
            body : JSON.stringify(mascota),
            headers : {
                "Content-Type": "application/json",
            },
        });
    }catch (error) {
        console.log(error);
    }
    window.location.href = "mascotas.html";
}


export const deletePet = async(id)=>{
    try {
        await fetch(`${url}/delete/${id}`,{
            method: 'DELETE',
            mode: 'cors',
        });
    }catch (error) {
        console.log(error)
    }
    window.location.href = "mascotas.html";
}


export const updatePet = async (mascota)=>{
    try {
        await fetch(`${url}/update/`,{
            method : 'PUT',
            body : JSON.stringify(mascota),
            mode: 'cors',
            headers: {
                "Content-Type": "application/json"
            },
        })
    }catch (error) {
        console.log(error)
    }
    window.location.href = "mascotas.html";
};