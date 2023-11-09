import React from 'react'
import { useState } from 'react'
import {AiOutlineCaretUp, AiOutlineCaretDown} from 'react-icons/ai'


const products =[
    {
        "name":"Rice"
    },
    {
        "name":"Biriyani"
    }
]

const rates = [
    {
        "rate":"1"
    },
    {
        "rate":"2"
    },
    {
        "rate":"3"
    },
    {
        "rate":"4"
    },
    {
        "rate":"5"
    },
]


export default function RatingPage(visible, onClose) {
    const [isOpen, setIsOpen] = useState(false);
    const [isOpenRate, setIsOpenRate] = useState(false);

    const [selectedId, setSelectedId] = useState('');

    const handleChnage = (event) => {
        setSelectedId(event.target.value);
    };

    const handleDropDownItemClick = (id) => {
        console.log(`Selected ID: ${id}`);
        setSelectedId('');
    }


    // const handleOnClose = (e) => {
    //     if(e.target.id === "container") onClose();
    // };

    // if(!visible) return null;

  return (
    // id='container' onClick={handleOnClose} bg-black  bg-opacity-30 backdrop-blur-sm
    <div  className='h-screen grid place-items-center bg-gray-500'>
       
            <h4 className='text-4xl text-green-500 mb-2'>ADD RATING</h4>
        
    <div>    
    <div className='flex border-2 border-green-500 rounded-lg'>    
    <div className='pl-5 pt-5 relative flex flex-col items-center w-[300px] h-[300px]  rounded-sm'>
                <button onClick={() => setIsOpen((prev) => !prev)} type='button' className=' bg-white p-4 w-full flex item-center justify-between font-bold text-lg 
                rounded-sm tracking-wider border-2 border-green-500 duration-500'>
                    Select Food
                    {!isOpen ? (
                        <AiOutlineCaretDown className='h-8'/>
                    ):(
                        <AiOutlineCaretUp className='h-8'/>
                    )}
                </button>
                {isOpen && (
                    <div className='bg-gray-300 absolute top-20 flex flex-col items-start rounded-sm p-5 w-[250px]'>
                        {products.map((product, i) => (
                            <div className='flex w-full justify-between p-2 hover:bg-gray-500 cursor-pointer rounded-r-lg border-l-transparent hover:border-l-white border-l-4' key={i}>
                                <h3 className='font-bold p-2'>{product.name}</h3>
                            </div>
                        ))}
                    </div>
                )}          
    </div>
    <div className='pt-5  pl-5 pr-5 relative flex flex-col items-center w-[300px] h-[300px] rounded-sm'>
                <button onClick={() => setIsOpenRate((prev) => !prev)} type='button' className=' bg-white p-4 w-full flex item-center justify-between font-bold text-lg 
                rounded-sm tracking-wider border-2 border-green-500 duration-500'>
                    Put Your Rating
                    {!isOpenRate ? (
                        <AiOutlineCaretDown className='h-8'/>
                    ):(
                        <AiOutlineCaretUp className='h-8'/>
                    )}
                </button>
                {isOpenRate && (
                    <div className='bg-gray-300 absolute top-20 flex flex-col items-start rounded-sm p-5 w-[250px]'>
                        {rates.map((ratee, i) => (
                            <div className='flex w-full justify-between p-2 hover:bg-gray-500 cursor-pointer rounded-r-lg border-l-transparent hover:border-l-white border-l-4' key={i}>
                                <h3 className='font-bold'>{ratee.rate}</h3>
                            </div>
                        ))}
                    </div>
                )}
    </div>
        
    </div>
    <div className='pt-2'>
        <button  type="button" className="text-white bg-gray-700 hover:bg-gray focus:ring-2 focus:ring-green-500 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none">Add Rating</button>
    </div>
    </div>
    </div>
    
  )
}
