// import React from 'react'
// import Sidebar from './Shared/Sidebar'
// import { useParams } from 'react-router-dom'
// import { useState } from 'react';
// import { useEffect } from 'react';
// import axios from 'axios';

// export default function AddUser() {

//     // if ("userDetails" in localStorage) {
//     //     const user = JSON.parse(localStorage.getItem("userDetails"))
//     // }

//     // const url = "https://localhost:7184/api/Products/admin/all"
//     const [data, setData] = useState({
//         name : "",
//         email : "",
//         phoneNumber : "",
//         password : "",
//         avatar : ""
//     })

//     const handleChange = (e) => {
//         const value = e.target.value;
//         setData({
//           ...data,
//           [e.target.name]: value
//         });
//     };

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         const userData = {
//             name: data.name,
//             email: data.email,
//             phoneNumber: data.phoneNumber,
//             password: data.password,
//             avatar: data.avatar
//         };
//         axios.post("https://localhost:7184/api/Products/admin/all", userData).then((response) => {
//           console.log(response.status, response.data.token);
//         });
//     };


//     return (
//         <div className="App h-screen flex  bg-gray-500">
//             <Sidebar />
//             <div className='App h-screen bg-gray-500 justify-center items-center p-10 ml-40 '>
//                 <div className="flex flex-col border border-green-500 border-2 rounded-lg p-10"> 
//                 {/* <form nSubmit={handleSubmit}>  */}
              
//                     <label className='relative cursor-pointer mb-4'>
//                     {/* onChange={(e) => handle(e)} id='name' value={data.name} placeholder="Input" */}
//                         <input type="text"  className='h-10 w-150 px-6 text-2xl text-black bg-white border-black border-2 rounded-lg border-opacity-100 outline-none focus:border-blue-500 placeholder-gray-300  transition duration-200' />
//                         <span className='text-l text-black text-opacity-80 bg-white absolute left-5 top-5 px-1 transition duration-200 input-text'>Name</span>
//                     </label>
//                     <label className='relative cursor-pointer mb-4'>
//                         <input type="text"  className='h-10 w-150 px-6 text-2xl text-black bg-white border-black border-2 rounded-lg border-opacity-100 outline-none focus:border-blue-500 placeholder-gray-300  transition duration-200' />
//                         <span className='text-l text-black text-opacity-80 bg-white absolute left-5 top-5 px-1 transition duration-200 input-text'>Email</span>
//                     </label>
//                     <label className='relative cursor-pointer mb-4'>
//                         <input type="text"  className='h-10 w-150 px-6 text-2xl text-black bg-white border-black border-2 rounded-lg border-opacity-100 outline-none focus:border-blue-500 placeholder-gray-300  transition duration-200' />
//                         <span className='text-l text-black text-opacity-80 bg-white absolute left-5 top-5 px-1 transition duration-200 input-text'>Phone Number</span>
//                     </label>
//                     <label className='relative cursor-pointer mb-4'>
//                         <input type="text"  className='h-10 w-150 px-6 text-2xl text-black bg-white border-black border-2 rounded-lg border-opacity-100 outline-none focus:border-blue-500 placeholder-gray-300  transition duration-200' />
//                         <span className='text-l text-black text-opacity-80 bg-white absolute left-5 top-5 px-1 transition duration-200 input-text'>Password</span>
//                     </label>
//                     <label className='relative cursor-pointer mb-4'>
//                         <input type="text" className='h-10 w-150 px-6 text-2xl text-black bg-white border-black border-2 rounded-lg border-opacity-100 outline-none focus:border-blue-500 placeholder-gray-300  transition duration-200' />
//                         <span className='text-l text-black text-opacity-80 bg-white absolute left-5 top-5 px-1 transition duration-200 input-text'>Avatar</span>
//                     </label>
//                     {/* <label className='relative cursor-pointer mb-4'>
//                         <input type="file" className='hidden' />
//                         <div className='h-16 w-150 px-6 text-l text-black bg-white border-black border-2 rounded-lg border-opacity-100 flex items-center justify-center outline-none focus:border-blue-500'>
//                             <span className='text-l text-black text-opacity-80 transition duration-200 input-text'>UPLOAD IMAGE</span>
//                         </div>
//                     </label> */}
//                     <label className='relative cursor-pointer mb-4'>
//                         <button type="button" className='h-10 w-150 px-6 text-l text-black bg-black border-black border-2 rounded-lg border-opacity-100 flex items-center justify-center outline-none focus:border-blue-500'>
//                             <span className='text-l text-white text-opacity-80 transition duration-200 input-text'>ADD</span>
//                         </button>
//                     </label>
                    
//                 {/* </form>     */}
//                 </div>
//             </div>
//         </div>
//     )
// }
