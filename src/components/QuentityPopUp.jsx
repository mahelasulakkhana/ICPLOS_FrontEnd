import axios from 'axios';
import React, { useState } from 'react';
import RemoveCookie from '../cookie/removeCookie';
import SetCookie from '../cookie/setCookie';
import { Link, useNavigate } from 'react-router-dom';

export default function QuentityPopUp({ visible, onClose, productId }) {

    const navigate = useNavigate();

    const [data, setData] = useState({
        id: productId,
        quntity: ""
    })

    console.log(data);

    const handleChange = (e) => {
        const value = e.target.value;
        setData({
            ...data,
            [e.target.name]: value
        });
    };

    const storedData = localStorage.getItem("logUser");

    // Parse the stored data
    const parsedData = JSON.parse(storedData);

    // Get the access token from the parsed data
    const accessToken = parsedData?.accessToken;

    // Now you can use the accessToken variable as needed
    console.log("Access Token:", accessToken);

    const handleSubmit = (e) => {
        e.preventDefault();

        const userData = {
            order: [
                {
                    productID: data.id,
                    quantity: data.quntity,
                }
            ]
        };

        axios.post("https://localhost:7184/api/Order", userData, {
            headers: {
                'Authorization': `Bearer ${accessToken}`,
                'Content-Type': 'application/json',
                // Add other headers as needed
            }
        })
            .then((response) => {
                console.log(response.status, response.data.token);
                if (response.data) {
                    // RemoveCookie('order');
                    SetCookie('order', JSON.stringify(response.data));
                }
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    };

    // console.log(data);

    const handleOnClose = (e) => {
        if (e.target.id === "container") onClose();
    };

    if (!visible) return null;

    return (
        <div id='container' onClick={handleOnClose} className='fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center'>
            <div className='bg-white p-2 border-2 border-green-500 rounded'>
                <h1 className="font-semibold text-center text-xl text-gray-700 p-4">
                    Pleace Add Quentity
                </h1>
                <form onSubmit={handleSubmit} className='p-4'>
                    <div className="flex flex-col">
                        <input
                            onChange={handleChange}
                            value={data.quntity}
                            type="text"
                            name='quntity'
                            className="border border-gray-700 p-2 rounded mb-4"
                            placeholder="Add Quntity"
                        />
                    </div>
                    <div className="text-center">
                        <Link to={"/"} type="addtocart" className="px-5 py-2 bg-gray-700 text-white rounded text-sm hover:bg-gray focus:ring-2 focus:ring-green-500">
                            ADD TO CART
                        </Link>
                    </div>
                </form>
            </div>
        </div>
    )
}
