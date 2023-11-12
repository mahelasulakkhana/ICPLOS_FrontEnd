import React from 'react'
import Sidebar from './Shared/Sidebar'
import { Link, useNavigate, useParams } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';

export default function UpdateCoustomer() {

    let navigate = useNavigate();

    const { id } = useParams();

    const roleIdValue = "14C3CB13-4AB9-49FC-B279-4C7FF3A2707B";

    // const [products, setProducts] = useState();

    const [dataa, setData] = useState({
        name: "",
        email: "",
        phoneNumber: "",
        avatar: "",
        roleId: roleIdValue,
    });

    const data = {
        roleId: roleIdValue,
    };

    const { name, email, phoneNumber, avatar } = dataa;

    const onInputChange = (e) => {
        setData({ ...dataa, [e.target.name]: e.target.value });
    };

    useEffect(() => {
        loadProduct();
    }, []);

    const onSubmit = async (e) => {
        e.preventDefault();
        await axios.put(`https://localhost:7184/api/User/Admin/${id}/${data}`, dataa);
        navigate("/coustomers")
    };

    const loadProduct = async () => {
        const result = await axios.get(`https://localhost:7184/api/User/admin/${id}`);
        setData(result.data);
    };

    return (
        <div className="items-center h-screen flex  bg-gray-500">
            <Sidebar />
            <div className='rounded-md shadow-md border-2 border-green-500 ml-40'>
                <form onSubmit={(e) => onSubmit(e)} className='p-4'>
                    <div className="mb-6">
                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">User Name</label>
                        <input type={"text"} name='name' value={name} onChange={(e) => onInputChange(e)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[400px] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                    </div>
                    <div className="mb-6">
                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">User Email</label>
                        <input type={"text"} name='email' value={email} onChange={(e) => onInputChange(e)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[400px] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                    </div>
                    <div className="mb-6">
                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Phone Number</label>
                        <input type={"text"} name='phoneNumber' value={phoneNumber} onChange={(e) => onInputChange(e)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[400px] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                    </div>
                    <div className="mb-6">
                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white" >Avatar Url</label>
                        <input type={"text"} name='avatar' value={avatar} onChange={(e) => onInputChange(e)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[400px] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                    </div>
                    <div className='flex items-center justify-center'>
                        <button type="submit" className="mr-2 text-black bg-white hover:bg-green-500 focus:ring-4 border-green-700 focus:ring-green-300 font-medium rounded-lg text-sm w-[400px] sm:w-auto px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Update</button>
                        <Link type="cancel" to={"/coustomers"} className=" text-black bg-white hover:bg-red focus:ring-4 border-red-700 focus:ring-red-400 font-medium rounded-lg text-sm w-[400px] sm:w-auto px-5 py-2.5 text-center dark:hover:bg-red-700 dark:focus:ring-red-800">Cancel</Link>
                    </div>
                </form>
            </div>
        </div>
    )
}
