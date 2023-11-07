import axios from 'axios';
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import config from "../config.json";

export default function Order() {

    const [produc, setProduct] = useState([]);

    useEffect(() => {
        const fetchProduct = async () => {
            const {data} = await axios.get(config.getOneProductAPI);
            setProduct(data);
        };
        fetchProduct();
    }, []);

    // console.log(product);

  return ( 
    <div className="App h-screen flex justify-center items-center bg-gray-500">
        <div className="flex flex-row border border-green-500 border-2 rounded-lg">
        {produc.map((product) => (
            <div className="flex-1 ">
            <div className="aspect-h-1 aspect-w-1 w-full h-80 overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7 border border-green-500 border-2">
                    <img
                        src={product.pictureUrl}
                        alt= 'Chicken Rice and curry'
                        className="h-full w-full object-cover object-center group-hover:opacity-75"
                    />  
            </div>
            </div>
        ))}    
        <td className='hidden-border-t hidden-border-b border-gray-300'>
            <div className="flex ">
               
                
                
                <div>    
                <div className='mb-20'>
                    <label className='relative cursor-pointer w-96 '>
                            <span className='text-l text-2xl font-bold text-black text-opacity-80  absolute left-5 top-3 px-1 duration-200 '>Name</span>
                    </label>
                </div>       
                <div className='mt-5'>
                    <label className='relative cursor-pointer w-96 '>
                        <div className=' h-12 px-6 text-l text-black  border-black border-2 rounded-lg border-opacity-100 outline-none focus:border-blue-500 placeholder-gray-300 placeholder-opacity-0 transition duration-200'>
                            <span className='text-l text-black text-opacity-80  absolute left-5 top-3 px-1 duration-200 '>price</span>
                        </div>
                    </label>
                </div>
                <div className='mt-5'>
                    <label className='relative cursor-pointer w-96 '>
                        <div className=' h-12 px-6 text-l text-black  border-black border-2 rounded-lg border-opacity-100 outline-none focus:border-blue-500 placeholder-gray-300 placeholder-opacity-0 transition duration-200'>
                            <span className='text-l text-black text-opacity-80  absolute left-5 top-3 px-1 duration-200 '>description</span>
                        </div>
                    </label>
                </div>
                </div>
                <label className='relative cursor-pointer p-5'>
                        <button type="button" className='h-10 w-150 px-6 text-l text-black bg-black border-black border-2 rounded-lg border-opacity-100 flex items-center justify-center outline-none focus:border-green-500'>
                            <span className='text-l text-white text-opacity-80 transition duration-200 input-text'>PLACE QUENTITY</span>
                        </button>
                </label>
                
                
            </div>
            </td>
 
  </div>
</div>
      
  )
}
