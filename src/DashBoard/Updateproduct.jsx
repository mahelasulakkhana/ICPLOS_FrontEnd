import React, { useState } from 'react';
import Sidebar from './Shared/Sidebar';
import axios from 'axios';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { useEffect } from 'react';

export default function Updateproduct() {

    let navigate =useNavigate();

    const {id} = useParams();

    // const [products, setProducts] = useState();

    const [dataa, setData] = useState({
            name: "",
            description: "",
            price: "" ,
            pictureUrl: ""
    });

    const {name, description, price, pictureUrl} = dataa; 

    const onInputChange = (e) => {
        setData({ ...dataa, [e.target.name]: e.target.value });
    };

    useEffect(() => {
        loadProduct();
    }, []);

    const onSubmit = async (e) => {
        e.preventDefault();
        await axios.put(`https://localhost:7184/api/Products/Admin/${id}`, dataa);
        navigate("/products") 
    };

    const loadProduct = async () => {
        const result = await axios.get(`https://localhost:7184/api/Products/${id}`);
        setData(result.data);
    };

    // console.log(products.data);

    return (
        <div className="items-center h-screen flex  bg-gray-500">
            <Sidebar />
            <div className='rounded-md shadow-md border-2 border-green-500 ml-40'>
                <form onSubmit={(e) => onSubmit(e)} className='p-4'>
                    <div className="mb-6">
                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Product Name</label>
                        <input type={"text"} name='name' value={name} onChange={(e) => onInputChange(e)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[400px] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                    </div>
                    <div className="mb-6">
                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Product Price</label>
                        <input type={"text"} name='price' value={price} onChange={(e) => onInputChange(e)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[400px] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"  />
                    </div>
                    <div className="mb-6">
                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Product Description</label>
                        <input type={"text"} name='description' value={description} onChange={(e) => onInputChange(e)}  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[400px] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"  />
                    </div>
                    <div className="mb-6">
                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white" >Image Url</label>
                        <input type={"text"} name='pictureUrl' value={pictureUrl} onChange={(e) => onInputChange(e)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[400px] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"  />
                    </div>
                    <div className='flex items-center justify-center'>
                        <button type="submit" className="mr-2 text-black bg-white hover:bg-green-500 focus:ring-4 border-green-700 focus:ring-green-300 font-medium rounded-lg text-sm w-[400px] sm:w-auto px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Update</button>
                        <Link type="cancel" to={"/products"} className=" text-black bg-white hover:bg-red focus:ring-4 border-red-700 focus:ring-red-400 font-medium rounded-lg text-sm w-[400px] sm:w-auto px-5 py-2.5 text-center dark:hover:bg-red-700 dark:focus:ring-red-800">Cancel</Link>
                    </div>
                </form>
            </div>
        </div>
    );
}
