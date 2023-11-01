import axios from "axios"

//Add User
export async function AddUser(name, email, phoneNumber, password, avatar, roleId) {
    try {
        const token = localStorage.getItem("accessToken")
        const responce = await axios.post("https://localhost:7184/api/User/admin", {
            name: name,
            email: email,
            phoneNumber: phoneNumber,
            password: password,
            avatar: avatar,
            roleId: roleId
        }, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
        return responce;
    } catch (e) {
        console.log(e)
    }
}

//Get All Users
export async function GetAllUsers() {
    const responce = await axios.get("https://localhost:7184/api/User/admin/all");
    return responce;
}