import axios from "axios"

export async function AddUser(name, email,phoneNumber,password, avatar, roleId){
    const responce = await axios.post("https://localhost:7184/api/User/admin",{
        name : name,
        email : email,
        phoneNumber : phoneNumber,
        password : password,
        avatar : avatar,
        roleId : roleId
    })

    if(responce.status = 200){
        localStorage.setItem("accessToken", responce.data.accessToken)
        localStorage.setItem("refreshToken", responce.data.refreshToken)
        localStorage.setItem("userDetails", JSON.stringify(responce.data.user))
    }
    return responce;
}