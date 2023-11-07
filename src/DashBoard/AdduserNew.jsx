import React from 'react'
import Sidebar from './Shared/Sidebar'
import { useState } from 'react';
import axios from 'axios';

export default function AdduserNew() {

    const url = "https://localhost:7184/api/Products/admin/all"
    const [data, setData] = useState({
        name : "",
        email : "",
        phoneNumber : "",
        password : "",
        avatar : ""
    })

    function submit(e){
        e.preventDefault();
        axios.post(url,{
            name : data.name,
            email : data.email,
            phoneNumber : data.phoneNumber,
            password : data.password,
            avatar : data.avatar
        })
        .then(res => {
            console.log(res.data)
        })
    }

    function handle(e) {
        const newData = {...data}
        newData[e.target.id] = e.target.value
        setData(newData)
        console.log(newData)
    }

  return (
    
    <div className='flex items-center  bg-gray-500 h-screen'>
        <Sidebar />
        <div className='rounded-md shadow-md border-2 border-green-500 ml-40'>
        <form className='p-4'>   
            <div className="mb-6">
                <label for="username" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">User Name</label>
                <input type="username" onChange={(e) => handle(e)} value={data.name} id="username" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[400px] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="User Name" required/>
            </div> 
            <div className="mb-6">
                <label for="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email address</label>
                <input type="email" id="email" onChange={(e) => handle(e)} value={data.email} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[400px] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="john.doe@company.com" required/>
            </div> 
            <div className="mb-6">
                <label for="phonenumber" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Phone Number</label>
                <input type="phonenumber" onChange={(e) => handle(e)} value={data.phoneNumber} id="phonenumber" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[400px] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Phone Number" required/>
            </div> 
            <div className="mb-6">
                <label for="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                <input type="password" onChange={(e) => handle(e)} value={data.password} id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[400px] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="•••••••••" required/>
            </div> 
            <div className="mb-6">
                <label for="avatar_link" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Avatar Link</label>
                <input type="avatar_link" onChange={(e) => handle(e)} value={data.avatar} id="avatar_link" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[400px] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Avatar Link" required/>
            </div> 
            
            <button type="submit" className="text-black bg-gray hover:bg-green-500 focus:ring-4 border-green-700 focus:ring-green-300 font-medium rounded-lg text-sm w-[400px] sm:w-auto px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Add User</button>
        </form>
        </div>
    </div>
    
  )
}
