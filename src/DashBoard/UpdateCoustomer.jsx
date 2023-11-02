import React from 'react'
import Sidebar from './Shared/Sidebar'
import config from '../config.json'
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';

export default function UpdateCoustomer() {

  const {id} = useParams();
  // console.log(id)

  const [user, setUser] = useState({});

  useEffect(() => {
      if(id == 'new') return;

      const fetchUser = async() => {
          const {data} = await axios.put(`${config.updateUserApi}/${id}`);
          setUser(data);
      } 
      fetchUser();
  }, []);

  console.log(user);

    return (
        <div className="App h-screen flex  bg-gray-500">
            <Sidebar />
            <div className='App h-screen bg-gray-500 justify-center items-center p-10 ml-40 mt-20'>
                <div className="flex flex-col border border-green-500 border-2 rounded-lg p-10">    
                    <label className='relative cursor-pointer mb-4'>
                        <input type="text" placeholder="Input" className='h-10 w-150 px-6 text-2xl text-black bg-white border-black border-2 rounded-lg border-opacity-100 outline-none focus:border-blue-500 placeholder-gray-300 placeholder-opacity-0 transition duration-200' value={user.name} />
                    </label>
                    <label className='relative cursor-pointer mb-4'>
                        <input type="text" placeholder="Input" className='h-10 w-150 px-6 text-2xl text-black bg-white border-black border-2 rounded-lg border-opacity-100 outline-none focus:border-blue-500 placeholder-gray-300 placeholder-opacity-0 transition duration-200' value={user.email}/>
                    </label>
                    <label className='relative cursor-pointer mb-4'>
                        <input type="text" placeholder="Input" className='h-10 w-150 px-6 text-2xl text-black bg-white border-black border-2 rounded-lg border-opacity-100 outline-none focus:border-blue-500 placeholder-gray-300 placeholder-opacity-0 transition duration-200' value={user.phoneNumber}/>
                    </label>
                    <label className='relative cursor-pointer mb-4'>
                        <input type="file" className='hidden' />
                        <div className='h-10 w-50 px-6 text-l text-black bg-white border-black border-2 rounded-lg border-opacity-100 flex items-center justify-center outline-none focus:border-blue-500'>
                            <span className='text-l text-black text-opacity-80 transition duration-200 input-text'>UPLOAD IMAGE</span>
                        </div>
                    </label>
                    <label className='relative cursor-pointer mb-4'>
                        <button type="button" className='h-16 w-150 px-6 text-l text-black bg-black border-black border-2 rounded-lg border-opacity-100 flex items-center justify-center outline-none focus:border-blue-500'>
                            <span className='text-l text-white text-opacity-80 transition duration-200 input-text'>Update User</span>
                        </button>
                    </label>
                </div>
            </div>
        </div>
    )
}
