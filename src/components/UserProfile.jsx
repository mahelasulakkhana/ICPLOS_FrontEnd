import React from 'react';

const UserProfile = () => {
  return (
    <div className="flex items-center justify-center h-screen ">
      <div className="bg-gray-100 p-8 rounded-lg shadow-md border-4 border-green-500">
        <img
          src="https://via.placeholder.com/150"
          alt="User Avatar"
          className="w-20 h-20 rounded-full mx-auto mb-4"
        />
        <h2 className="text-xl font-bold text-gray-800 text-center mb-2">
          John Doe
        </h2> 
        <p className="text-gray-600 text-center mb-7">john.doe@example.com</p>

        <th className='mt-20'>
            <button className="bg-green-500 text-white px-4 py-2 rounded-full hover:bg-green-600 focus:outline-none focus:ring focus:border-green-700 mr-10">
            CART
            </button>
            <button className="bg-green-500 text-white px-4 py-2 rounded-full hover:bg-green-600 focus:outline-none focus:ring focus:border-green-700 mr-10">
            HISTORY
            </button>
            <button className="bg-green-500 text-white px-4 py-2 rounded-full hover:bg-green-600 focus:outline-none focus:ring focus:border-green-700 ">
            UPDATE
            </button>
        </th>
        
      </div>
    </div>
  );
};

export default UserProfile;
