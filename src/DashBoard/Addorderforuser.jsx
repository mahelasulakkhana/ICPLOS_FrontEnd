import React from 'react'
import { useNavigate } from 'react-router-dom';

export default function Addorderforuser( ) {

    const navigate = useNavigate();

    const handleAddOrder = () => {
        navigate('/coustomers'); // Change '/customers' to the appropriate path
    }

    return (
        <div id='container'  className='fixed bg-gray-500  inset-0  backdrop-blur-sm flex justify-center items-center'>
            <div className='bg-white p-2 border-2 border-green-500 rounded'>
                <h1 className="font-semibold text-center text-xl text-gray-700 p-4">
                    Add Quentity
                </h1>
                <form  className='p-4'>
                    <div className="flex flex-col">
                        <input
                            type="text"
                            name='quntity'
                            className="border border-gray-700 p-2 rounded mb-4"
                            placeholder="Add Quntity"
                        />
                    </div>
                    <div className="text-center">
                        <button  onClick={handleAddOrder}  type="button" className="px-5 py-2 bg-gray-700 text-white rounded text-sm hover:bg-gray focus:ring-2 focus:ring-green-500">
                            ADD ORDER
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}
