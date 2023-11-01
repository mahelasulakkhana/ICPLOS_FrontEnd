import axios from "axios";

export async function Signin(email, password) {
    const response = await axios.post("https://localhost:7184/api/Auth/Login", {
        email: email,
        password: password
    })

    if (response.status == 200) {
        localStorage.setItem("accessToken", response.data.accessToken)
        localStorage.setItem("refreshToken", response.data.refreshToken)
        localStorage.setItem("userDetails", JSON.stringify(response.data.user))
    }
    return response;
}


