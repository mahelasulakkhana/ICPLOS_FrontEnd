import React from 'react';
import { Outlet } from 'react-router-dom';

export default function Layout(){
    return(
        
        <div className='flex flex-row bg-netural-100 h-screen w-screen overflow-hidden'>
            <div className='bg-green-500'>sidebar</div>
            <div className='p-4'>
                <div className='bg-teal-200'></div>
                <div>{<Outlet/>}</div>
            </div>
        </div>
    )

} 