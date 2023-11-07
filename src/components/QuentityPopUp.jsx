import React from 'react'

export default function QuentityPopUp({visible, onClose}) {

    const handleOnClose = (e) => {
        if(e.target.id === "container") onClose();
    };

    if(!visible) return null;

  return (
    <div id='container' onClick={handleOnClose} className='fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center'>
        <div className='bg-white p-2 border-2 border-green-500 rounded'>
            <h1 className="font-semibold text-center text-xl text-gray-700 p-4">
                Pleace Add Quentity
            </h1>
            {/* <p className="text-center text-gray-700 mb-5">Sign in</p> */}

            <div className="flex flex-col">
            <input
                type="text"
                className="border border-gray-700 p-2 rounded mb-4"
                placeholder="Add number between 1 to 5"
            />
            
            </div>
            <div className="text-center">
            <button className="px-5 py-2 bg-gray-700 text-white rounded text-sm hover:bg-gray focus:ring-2 focus:ring-green-500">
                ADD TO CART
            </button>
            </div>
            
        </div>
    </div>
  )
}
