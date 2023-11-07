import React from 'react'
import QuentityPopUp from './QuentityPopUp'
import { useState } from 'react'
// import RatingPage from './RatingPage';

export default function Quentity() {

    const [showMyModal, setShowMyModal] = useState(false);
    // const [showMyModalRate, setShowMyModalRate] = useState(false);


    const handleOnClose = () => setShowMyModal(false);
    // const handleOnCloseRate = () => setShowMyModalRate(false);


  return ( 
    <div className='flex justify-center items-center pt-20 bg-gray-500 pb-20'>
        
        <div className="max-w-sm bg-white border-2 border-green-500 rounded-lg ">
            <a href="#">
                <img className="rounded-t-lg" src="https://cdn.create.vista.com/api/media/small/145354115/stock-photo-buddha-bowl-healthy-vegetarian-meal-salad-with-vegetable-and-chick-pea" alt="" />
            </a>
            <div className="p-5">
                <a href="#">
                    <h3 className="mb-5 text-2xl font-bold tracking-tight text-black">Name</h3>
                    <h5 className="mb-4 text-2xl font-bold tracking-tight text-black">Rs.Price</h5>
                </a>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                
                <div className='pt-2'>
                    <button onClick={() => setShowMyModal(true)} type="button" className="text-white bg-gray-700 hover:bg-gray focus:ring-2 focus:ring-green-500 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none">Add To Cart</button>
                </div>
                {/* <div className='pt-2'>
                    <button onClick={() => setShowMyModalRate(true)} type="button" className="text-white bg-gray-700 hover:bg-gray focus:ring-2 focus:ring-green-500 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none">Add Rating</button>
                </div> */}
            </div>
        </div>
                <QuentityPopUp onClose={handleOnClose} visible={showMyModal}/>
                {/* <RatingPage onClose={handleOnCloseRate} visible={showMyModalRate}/> */}
    </div>
  )
}
