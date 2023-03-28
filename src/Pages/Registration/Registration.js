
import React from 'react';
import { useForm } from "react-hook-form";
import { useState } from "react";
import './Registration.css';
import { useNavigate } from 'react-router-dom';


const Registration = () => {

    const navigate = useNavigate();

    const { register, handleSubmit } = useForm();
    const [data, setData] = useState("");
    console.log(data);

    const onSubmit = (data) => {
        fetch('https://alumni-registration-page-server.vercel.app/registeredStudent4', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                setData(data);
                console.log(data);

                setTimeout(() => {
                    navigate('/complete');
                }, 500);
            })
    }

    return (
        <div className='reg-section'>
            <div className="body">
                <section className="form-section bg-[#ab9e9d] border-2">
                    <h1 className='text-center text-2xl mb-8'>Register Here for Alumni</h1>
                    <div className=''>
                        <form onSubmit={handleSubmit(onSubmit)}>

                            <div className="form-control w-full max-w-xs">

                                <input {...register("Name")} type="text" placeholder="Name" className="mb-4 input input-bordered w-full max-w-xs h-8" required />
                            </div>

                            <div className="form-control w-full max-w-xs">

                                <input {...register("Email")} type="email" placeholder="Email" className="mb-4 input input-bordered w-full max-w-xs h-8" required />
                            </div>

                            <div className="form-control w-full max-w-xs">

                                <input {...register("Department")} type="text" placeholder="Department " className="mb-4 input input-bordered w-full max-w-xs h-8" required />
                            </div>

                            <div className="form-control w-full max-w-xs">

                                <input {...register("Batch")} type="number" placeholder="Batch " className="mb-4 input input-bordered w-full max-w-xs h-8" required />
                            </div>

                            <div className='my-4'>
                                <button className="btn btn-block btn-outline hover:bg-[#394230] font-bold">
                                    Register Now
                                </button>
                            </div>


                        </form>

                    </div>
                </section>
            </div>

        </div>
    );
};

export default Registration;