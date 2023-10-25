import React from 'react'

export default function () {
  return (
    
    <div className="App h-screen flex justify-center items-center bg-gray-500">
        <div className="flex flex-col border border-green-500 border-2 rounded-lg p-10">
        <div className="text-2xl text-center">LOGING</div>
        <div className="flex flex-col items-center">
                <img
                    src="https://media.istockphoto.com/id/1300845620/vector/user-icon-flat-isolated-on-white-background-user-symbol-vector-illustration.jpg?s=1024x1024&w=is&k=20&c=-mUWsTSENkugJ3qs5covpaj-bhYpxXY-v9RDpzsw504="                        
                    alt="Avatar"
                    className='h-16 w-16 rounded-full border-black border-2 mb-2 mt-2'
                />
         </div>       			
			<div className="text-4xl p-4 text-center mb-5">
				<span className="text-green-500">ICP</span>
				<span className="text-white ml-3">LOS</span>
			</div>        
            <label className='relative cursor-pointer mb-6 '>
                <input type="text" placeholder="Input" className='h-16 w-150 px-6 text-2xl text-black  border-black border-2 rounded-lg border-opacity-100 outline-none focus:border-blue-500 placeholder-gray-300 placeholder-opacity-0 transition duration-200' />
                <span className='text-l text-black text-opacity-80  absolute left-5 top-5 px-1 transition duration-200 input-text'>User name</span>
            </label>
            <label className='relative cursor-pointer mb-4'>
                <input type="text" placeholder="Input" className='h-16 w-150 px-6 text-2xl text-black  border-black border-2 rounded-lg border-opacity-100 outline-none focus:border-blue-500 placeholder-gray-300 placeholder-opacity-0 transition duration-200' />
                <span className='text-l text-black text-opacity-80  absolute left-5 top-5 px-1 transition duration-200 input-text'>Password</span>
            </label>
        </div>
    </div>
  )
}
