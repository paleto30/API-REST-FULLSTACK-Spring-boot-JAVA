
const url = 'http://localhost:8089/api/usuario';


export const getAllUsers = async ()=>{
    try {
        const result = await fetch(`${url}/all`);
        const users = await result.json();
        return users;
    }catch (error) {
        console.log(error)
    }
};


export const deleteUser = async(id)=>{
    try {
        await fetch(`${url}/delete/${id}`,{
            method: 'DELETE',
            mode: 'cors',
        });
    }catch (error) {
        console.log(error)
    }
    window.location.href = "usuarios.html";
}