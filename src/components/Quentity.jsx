import React from 'react'
import QuentityPopUp from './QuentityPopUp'
import { useState } from 'react'
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import axios from 'axios';


export default function Quentity() {

    const [item, setItem] = useState();

    const { id } = useParams();

    // console.log(id);

    useEffect(() => {

        let config = {
            method: 'get',
            maxBodyLength: Infinity,
            url: `https://localhost:7184/api/Products/${id}`,
           
        };

        axios.request(config)
            .then((response) => {
                // console.log(JSON.stringify(response.data));
                setItem(response.data)
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    const [showMyModal, setShowMyModal] = useState(false);

    const handleOnClose = () => setShowMyModal(false);

    return (
        <div className='flex justify-center items-center pt-20 bg-gray-500 pb-20'>
            
            <div className="max-w-sm bg-white border-2 border-green-500 rounded-lg ">
                <a href="#">
                    <img className="rounded-t-lg" src={item?.pictureUrl} alt="" />
                </a>
                <div className="p-5">
                    <a href="#">
                        <h3 className="mb-5 text-2xl font-bold tracking-tight text-black">{item?.name}</h3>
                        <h5 className="mb-4 text-2xl font-bold tracking-tight text-black">Rs.{item?.price}</h5>
                    </a>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{item?.description}</p>

                    <div className='pt-2'>
                        <button onClick={() => setShowMyModal(true)} type="button" className="text-white bg-gray-700 hover:bg-gray focus:ring-2 focus:ring-green-500 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none">Add Quentity</button>
                    </div>
                </div>
            </div>
            <QuentityPopUp onClose={handleOnClose} visible={showMyModal} productId={id} />
        </div>
    )
}
