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
                        src={produc.pictureUrl}
                        alt= 'Chicken Rice and curry'
                        className="h-full w-full object-cover object-center group-hover:opacity-75"
                    />  
            </div>
            </div>
        ))}    
            <div className="flex ">
               
                <td className='hidden-border-t hidden-border-b border-gray-300'>
                
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

{/* <button id="dropdownBgHoverButton" data-dropdown-toggle="dropdownBgHover" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button">Dropdown checkbox <svg class="w-2.5 h-2.5 ml-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
  </svg>
</button>

<div id="dropdownBgHover" class="z-10 hidden w-48 bg-white rounded-lg shadow dark:bg-gray-700">
    <ul class="p-3 space-y-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownBgHoverButton">
      <li>
        <div class="flex items-center p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
          <input id="checkbox-item-4" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"/>
          <label for="checkbox-item-4" class="w-full ml-2 text-sm font-medium text-gray-900 rounded dark:text-gray-300">Default checkbox</label>
        </div>
      </li>
      <li>
        <div class="flex items-center p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
            <input checked id="checkbox-item-5" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"/>
            <label for="checkbox-item-5" class="w-full ml-2 text-sm font-medium text-gray-900 rounded dark:text-gray-300">Checked state</label>
          </div>
      </li>
      <li>
        <div class="flex items-center p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
          <input id="checkbox-item-6" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"/>
          <label for="checkbox-item-6" class="w-full ml-2 text-sm font-medium text-gray-900 rounded dark:text-gray-300">Default checkbox</label>
        </div>
      </li>
    </ul>
</div> */}

                <label className='relative cursor-pointer p-5'>
                        <button type="button" className='h-10 w-150 px-6 text-l text-black bg-black border-black border-2 rounded-lg border-opacity-100 flex items-center justify-center outline-none focus:border-green-500'>
                            <span className='text-l text-white text-opacity-80 transition duration-200 input-text'>PLACE QUENTITY</span>
                        </button>
                </label>
                </td>
                
            </div>
 
  </div>
</div>
      
  )
}
