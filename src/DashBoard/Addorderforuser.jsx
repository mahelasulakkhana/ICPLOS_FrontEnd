import React from 'react'
import { Link, useNavigate } from 'react-router-dom';

export default function Addorderforuser(visible, onClose, productID) {

    const handleOnClose = (e) => {
        if (e.target.id === "container") onClose();
    };

    if (!visible) return null;

    return (
        <div id='container' onClick={handleOnClose} className='fixed inset-0 bg-black bg-opacity-0 backdrop-blur-sm flex justify-center items-center'>
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
                        <button  type="button" className="px-5 py-2 bg-gray-700 text-white rounded text-sm hover:bg-gray focus:ring-2 focus:ring-green-500">
                            ADD ORDER
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}
