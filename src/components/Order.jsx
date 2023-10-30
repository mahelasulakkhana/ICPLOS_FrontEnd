import React from 'react'

export default function Order() {
  return ( 
    <div className="App h-screen flex justify-center items-center bg-gray-500">
        <div className="flex flex-row border border-green-500 border-2 rounded-lg">
            <div className="flex-1 p-4">
            <div className="aspect-h-1 aspect-w-1 w-full h-80 overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7 border border-green-500 border-2">
                    <img
                        src='https://images.unsplash.com/photo-1564671165093-20688ff1fffa?auto=format&fit=crop&q=80&w=2766&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                        alt= 'Chicken Rice and curry'
                        className="h-full w-full object-cover object-center group-hover:opacity-75"
                    />  
            </div>
            </div>    
            <div className="flex p-4">
                <td>
                <label className='relative cursor-pointer w-96 '>
                <div className=' h-12 px-6 text-l text-black  border-black border-2 rounded-lg border-opacity-100 outline-none focus:border-blue-500 placeholder-gray-300 placeholder-opacity-0 transition duration-200'>
                    <span className='text-l text-black text-opacity-80  absolute left-5 top-3 px-1 duration-200  '>Quentity :
                
                    </span>
                </div>

                    <div className="flex items-center space-x-3 ml-40">
                        <button className="flex items-center justify-center  text-sm font-medium h-6 w-6 text-gray-500 bg-white border border-gray-300 rounded-full focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700" type="button">
                            <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 2">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h16"/>
                            </svg>
                        </button>
                        <div>
                            <input type="number" id="first_product" className="bg-gray-50 w-14 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block px-2.5 py-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="1" required/>
                        </div>
                        <button className="flex items-center justify-center h-6 w-6 p-1 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-full focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700" type="button">
                            <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 1v16M1 9h16"/>
                            </svg>
                        </button>
                    </div>
                
                </label>
                <div className='mt-5'>
                <label className='relative cursor-pointer w-96 '>
                <div className=' h-12 px-6 text-l text-black  border-black border-2 rounded-lg border-opacity-100 outline-none focus:border-blue-500 placeholder-gray-300 placeholder-opacity-0 transition duration-200'>
                    <span className='text-l text-black text-opacity-80  absolute left-5 top-3 px-1 duration-200  '>Discription</span>
                </div>
                </label>
                </div>
                <div className='mt-5'>
                <label className='relative cursor-pointer w-96 '>
                <div className=' h-12 px-6 text-l text-black  border-black border-2 rounded-lg border-opacity-100 outline-none focus:border-blue-500 placeholder-gray-300 placeholder-opacity-0 transition duration-200'>
                    <span className='text-l text-black text-opacity-80  absolute left-5 top-3 px-1 duration-200  '>Price</span>
                </div>
                </label>
                </div>
                <div className='mt-5'>
                    <label className='relative cursor-pointer w-96 '>
                        <div className=' h-12 px-6 text-l text-black  border-black border-2 rounded-lg border-opacity-100 outline-none focus:border-blue-500 placeholder-gray-300 placeholder-opacity-0 transition duration-200'>
                            <span className='text-l text-black text-opacity-80  absolute left-5 top-3 px-1 duration-200  '>Total</span>
                        </div>
                    </label>
                </div>
                </td>
            </div>
  </div>
</div>
      
  )
}
