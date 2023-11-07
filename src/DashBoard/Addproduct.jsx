import React from 'react';
import Sidebar from './Shared/Sidebar';

export default function Addproduct() {

  return (  
    <div className="items-center h-screen flex  bg-gray-500">
        <Sidebar/>
        <div className='rounded-md shadow-md border-2 border-green-500 ml-40'>
        <form className='p-4'>   
            <div className="mb-6">
                <label for="productname" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Product Name</label>
                <input type="productname" id="productname" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[400px] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Product Name" required/>
            </div> 
            <div className="mb-6">
                <label for="price" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Product Price</label>
                <input type="price" id="price"  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[400px] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Product Price" required/>
            </div> 
            <div className="mb-6">
                <label for="description" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Product Description</label>
                <input type="description"  id="description" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[400px] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Product Description" required/>
            </div> 
            <div className="mb-6">            
                <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white" for="file_input">Upload Image</label>
                <input class="block w-[400px] text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" id="file_input" type="file"/>
            </div>
            <button type="submit" className="text-black bg-gray hover:bg-green-500 focus:ring-4 border-green-700 focus:ring-green-300 font-medium rounded-lg text-sm w-[400px] sm:w-auto px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Add User</button>
        </form>
        </div>
    </div>
  );
}
