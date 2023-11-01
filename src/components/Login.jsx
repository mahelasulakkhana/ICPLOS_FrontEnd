import React from 'react'
import { Controller, useForm } from 'react-hook-form';
import FormElement from '../FormElement/FormElement';

export default function () {
    const {control, handleSubmit, formState: {errors}} = useForm({
        defaultValues: {
            name:'',
            password:'',
        },
    });

    const onSubmit = (data) => {
        console.log(data);
    };

    return (

    <div className="App h-screen flex justify-center items-center bg-gray-500">
        <div className="flex flex-col border border-green-500 border-2 rounded-lg p-10">
            
        <div className="text-2xl text-center">LOGIN</div>
        <div className="flex flex-col items-center">
                <img
                    src="https://media.istockphoto.com/id/1300845620/vector/user-icon-flat-isolated-on-white-background-user-symbol-vector-illustration.jpg?s=1024x1024&w=is&k=20&c=-mUWsTSENkugJ3qs5covpaj-bhYpxXY-v9RDpzsw504="                        
                    alt="Avatar"
                    className='h-16 w-16 rounded-full border-black border-2 mb-2 mt-2'
                />
        </div>  
            <form onSubmit={handleSubmit(onSubmit)}>
                <Controller 
                    name='name'
                    control={control}
                    rules={{required: true}}
                    render={(field) => (
                        <FormElement 
                            type="text" 
                            label="User Name" 
                            placeholder="User Name" 
                            fieldRef={field} 
                            hassError={errors.name?.type === 'required'} 
                        />
                    )}
                />
                <Controller 
                    name='password'
                    control={control}
                    rules={{required: true}}
                    render={(field) => (
                        <FormElement 
                            type="text" 
                            label="Password" 
                            placeholder="Password" 
                            fieldRef={field} 
                            hassError={errors.password?.type === 'required'} 
                        />
                    )}
                />
                <button type='login' className='w-full px-6 py-3 bg-grren-500 text-white font-medium uppercase rounded shadow-md hover:bg-green-300 hover:shadow-lg foucus:bg-green-300 focus:outline-none focus:ring-0 active:bg-green-500'>
                    Login
                </button>
            </form>     			
        </div>
    </div>
  )
}
