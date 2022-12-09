const url = "http://localhost:8089/api/usuario"

export const getAccess = async (email)=>{
    try {
        const connection = await fetch(`${url}/login/${email}`,{
            method: 'GET',
            mode: 'cors',
            headers: {
                "Content-Type": "application/json"
            },
        });
        const result = await connection.json();
        return result;
    }catch (error){
        console.log(error)
    }
}

export const addNewUser = async (usuario)=>{
    try {
        await fetch(`${url}/add`,{
            method : 'POST',
            body : JSON.stringify(usuario),
            headers : {
                "Content-Type": "application/json",
            },
        });
    }catch (error) {
        console.log(error);
    }
};