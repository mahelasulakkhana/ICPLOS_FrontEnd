import React from 'react'
import Sidebar from './Shared/Sidebar'
import { useState } from 'react';
import axios from 'axios';


export default function AdduserNew() {

    const [selectedId, setSelectedId] = useState('');

    const adminId = "14C3CB13-4AB9-49FC-B279-4C7FF3A2707B";
    const userId = "B332055B-31B0-4701-B328-80D1EAE8D588";

    //   const handleCheckboxChange = (e) => {
    //     const checkedId = e.target.value;
    //     setData({ ...data, roleId: checkedId });
    //   };

    const [data, setData] = useState({
        name: "",
        email: "",
        phoneNumber: "",
        password: "",
        avatar: "",
        roleId: ""
    });

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
            name: data.name,
            email: data.email,
            phoneNumber: data.phoneNumber,
            password: data.password,
            avatar: data.avatar,
            roleId: data.roleId
        };
        axios.post("https://localhost:7184/api/Products/admin/all", userData).then((response) => {
            console.log(response.status, response.data.token);
        });
    };

    return (

        <div className='flex items-center  bg-gray-500 h-screen'>
            <Sidebar />
            <div className='rounded-md shadow-md border-2 border-green-500 ml-40'>
                <form onSubmit={handleSubmit} className='p-4'>
                    <div className="mb-6">
                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">User Name</label>
                        <input type="username" name='name' onChange={handleChange} value={data.name} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[400px] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="User Name" />
                    </div>
                    <div className="mb-6">
                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email address</label>
                        <input type="email" name='email' onChange={handleChange} value={data.email} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[400px] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="john.doe@company.com" />
                    </div>
                    <div className="mb-6">
                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Phone Number</label>
                        <input type="phonenumber" name='phoneNumber' onChange={handleChange} value={data.phoneNumber} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[400px] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Phone Number" />
                    </div>
                    <div className="mb-6">
                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                        <input type="password" name='password' onChange={handleChange} value={data.password} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[400px] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="•••••••••" />
                    </div>
                    <div className="mb-6">
                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Avatar Link</label>
                        <input type="avatar_link" name='avatar' onChange={handleChange} value={data.avatar} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[400px] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Avatar Link" />
                    </div>

                    <div className="flex flex-col items-start space-y-2">
                        <label className="flex items-center space-x-2">
                            <input
                                type="checkbox"
                                value={adminId}
                                checkedId={selectedId === adminId}
                                onChange={handleChange}
                                className="h-4 w-4 text-blue-600 rounded border-gray-300 focus:ring-blue-500"
                            />
                            <span className="text-sm text-black">Admin</span>
                        </label>

                        <label className="flex items-center space-x-2">
                            <input
                                type="checkbox"
                                value={userId}
                                checkedId={selectedId === userId}
                                onChange={handleChange}
                                className="h-4 w-4 text-blue-600 rounded border-gray-300 focus:ring-blue-500"
                            />
                            <span className="text-sm text-black">User</span>
                        </label>
                    </div>
                    <button type="submit" className=" mt-[10px] text-black bg-gray hover:bg-green-500 focus:ring-4 border-green-700 focus:ring-green-300 font-medium rounded-lg text-sm w-[400px] sm:w-auto px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Add User</button>
                </form>
            </div>
        </div>

    )
}
