import React, { useState } from 'react';
import Sidebar from './Shared/Sidebar';
import axios from 'axios';
import { Tooltip } from '@material-tailwind/react';
import { Link, useNavigate } from 'react-router-dom';

export default function Addproduct() {

    let navigate = useNavigate();

    const [product, setProduct] = useState({
        name: "",
        price: "",
        description: "",
        pictureUrl: ""
    });

    const {name,price, description, pictureUrl} = product;

    const onInputChange = (e) => {
        setProduct({
            ...product,
            [e.target.name]: e.target.value
        });
    };

    const onSubmit = async (e) => {
        e.preventDefault();
        await axios.post("https://localhost:7184/api/Products/Admin", product)
        navigate("/addproduct")
    }

    return (
        <div className="items-center h-screen flex  bg-gray-500">
            <Sidebar />
            <div className='rounded-md shadow-md border-2 border-green-500 ml-40'>
                <form onSubmit= {(e) => onSubmit(e)} className='p-4'>
                    <div className="mb-6">
                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Product Name</label>
                        <input type="text" name='name' value={name} onChange={(e) => onInputChange(e)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[400px] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Product Name" />
                    </div>
                    <div className="mb-6">
                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Product Price</label>
                        <input type="text" name='price' value={price} onChange={(e) => onInputChange(e)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[400px] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Product Price" />
                    </div>
                    <div className="mb-6">
                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Product Description</label>
                        <input type="text" name='description' value={description} onChange={(e) => onInputChange(e)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[400px] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Product Description" />
                    </div>
                    <div className="mb-6">
                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Upload Image</label>
                        <input type="text" name='pictureUrl' value={pictureUrl} onChange={(e) => onInputChange(e)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[400px] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Place Image Url" />
                    </div>
                    <div className='flex items-center justify-center'>
                        <Tooltip content="Delete User">
                            <button type="submit" className="mr-5 text-black bg-gray hover:bg-green-500 focus:ring-4 border-green-700 focus:ring-green-300 font-medium rounded-lg text-sm w-[400px] sm:w-auto px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Add User</button>
                        </Tooltip>
                        <Tooltip content="Cancel">
                            <Link to={"/coustomers"} className="text-red-700 hover:text-white border border-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900">Cancel</Link>
                        </Tooltip>
                    </div>
                </form>
            </div>
        </div>
    );
}
