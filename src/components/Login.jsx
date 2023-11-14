import React, { useEffect } from 'react'
import { Controller, useForm } from 'react-hook-form';
import FormElement from '../FormElement/FormElement';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
// import jwt_decode from 'jwt-decode';



export default function () {

    const navigate = useNavigate();

    const { control, handleSubmit, formState: { errors } } = useForm();


    const storedData = localStorage.getItem("logUser");

    const userRoleClaim = "http://schemas.microsoft.com/ws/2008/06/identity/claims/role"
    const userNameClaim = "http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name"

    // Parse the stored data
    const parsedData = JSON.parse(storedData);

    // Get the access token from the parsed data
    const accessToken = parsedData?.accessToken;

    const token = accessToken;

    const decodedToken = atob(token.split('.')[1]);

    var userRole = JSON.parse(decodedToken)[userRoleClaim]
    // var userName = JSON.parse(decodedToken)[userNameClaim]
    console.log(userRole);
    // console.log(userName);

    if (userRole !== null) {
        if (userRole === "Admin") {
            console.log("User is an admin");
            // Redirect or perform actions for an admin
            navigate("/products");
        } else {
            console.log("User is not an admin");
            // Redirect or perform actions for non-admin users
            navigate("/");
        }
    } else {
        console.log("Role claim not found or invalid token");
    }


    const onSubmit = (data) => {
        // console.log(data);

        let config = {
            method: 'post',
            maxBodyLength: Infinity,
            url: 'https://localhost:7184/api/Auth/Login',
            headers: {
                'Content-Type': 'application/json'
            },
            data: data
        };

        axios.request(config)
            .then((response) => {
                // console.log(response.data);
                localStorage.setItem("logUser", JSON.stringify(response.data));

            })
            .catch((error) => {
                console.log(error);
            });
    };

    return (

        <div className="App h-screen flex justify-center items-center bg-gray-500">
            <div className="flex flex-col border border-green-500 border-2 rounded-lg p-10">

                <div className="text-2xl text-center">LOGIN</div>
                <div className="flex flex-col items-center">
                    <img
                        src="https://media.istockphoto.com/id/1300845620/vector/user-icon-flat-isolated-on-white-background-user-symbol-vector-illustration.jpg?s=1024x1024&w=is&k=20&c=-mUWsTSENkugJ3qs5covpaj-bhYpxXY-v9RDpzsw504="
                        alt="Avatar"
                        className='h-16 w-16 rounded-full border-black border-2 mb-2 mt-2'
                    />
                </div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Controller
                        name="email"
                        control={control}
                        defaultValue=""
                        rules={{ required: 'Email is required' }}
                        render={({ field }) => (
                            <FormElement
                                type={"text"}
                                label={"User Name"}
                                placeholder={"User Name"}
                                fieldRef={field}
                                hassError={errors.email?.message}
                            />
                        )}
                    />
                    <Controller
                        name="password"
                        control={control}
                        defaultValue=""
                        rules={{ required: 'Password is required' }}
                        render={({ field }) => (
                            <FormElement
                                type={"text"}
                                label={"Password"}
                                placeholder={"Password"}
                                fieldRef={field}
                                hassError={errors.password?.message}
                            />
                        )}
                    />
                    <button type='login' className='w-full px-6 py-3 bg-grren-500 text-white font-medium uppercase rounded shadow-md hover:bg-green-300 hover:shadow-lg foucus:bg-green-300 focus:outline-none focus:ring-0 active:bg-green-500'>
                        Login
                    </button>
                </form>
            </div>
        </div>
    )
}
