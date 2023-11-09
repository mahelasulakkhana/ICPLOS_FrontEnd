import axios from 'axios';
import React from 'react'
import { useState } from 'react';


export default function Payment() {

    const currentuser = JSON.parse(localStorage.getItem("user"));

    const [data, setData] = useState({
        amount : ""
    })

    const handleChange = (e) => {
        const value = e.target.value;
        setData({
          ...data,
          [e.target.name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const userData = {
            amount: data.amount
        };
        axios.post("https://localhost:7184/api/Payment/admin/user/${currentuser.id}", userData).then((response) => {
          console.log(response.status, response.data.token);
        });
    };

  return (
    <div className='grid items-center justify-center bg-gray-500 h-screen'>
        <div className='pl-[50px] text-4xl text-green-500'>ADD PAYMENT</div>
        <div className='rounded-md shadow-md border-2 border-green-500'>
            <form onSubmit={handleSubmit} className='p-7 items-center justify-center'>
                <div class=" gap-6 mb-6 ">
                    <div>
                        <label className="block mb-2 text-sm font-medium text-black">Add Payment</label>
                        <input type="text" onChange={handleChange} className="bg-gray-50 border-2 focus:border-green-700 text-gray-900 text-sm rounded-lg  w-[300px] p-2.5  dark:text-white " placeholder="Add Payment" required/>
                    </div>
                </div>    
                    <button type="submit" className='w-[150px] center  py-3 bg-grren-500 text-white font-medium uppercase rounded shadow-md hover:bg-green-300 hover:shadow-lg foucus:bg-green-300 focus:outline-none focus:ring-0 active:bg-green-500'>
                        Add Payment
                    </button>
            </form>
                <div className='pb-2 pl-5 pr-5 flex'>
                    <img
                        src="https://1000logos.net/wp-content/uploads/2021/11/VISA-logo.png"                        
                        alt="Visa logo"
                        className=" w-[75px] h-[75px]  mx-auto"
                    />
                    <img
                        src="https://cdn.freebiesupply.com/logos/large/2x/mastercard-4-logo-png-transparent.png"                        
                        alt="Mastecard logo"
                        className=" w-[75px] h-[75px]  mx-auto"
                    />
                </div>
        </div>
    </div>
  )
}
