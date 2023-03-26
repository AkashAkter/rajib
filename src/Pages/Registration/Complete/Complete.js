import React from 'react';
import { Link } from 'react-router-dom';

const Complete = () => {
    return (
        <div className='bg text-center p-60 font-extrabold'>
            <h1 className='text-7xl'>
                REGISTRATION DONE...
            </h1>
            <Link to='/'>
                <button className="btn my-4 px-20 btn-outline text-white hover:bg-[#648D38]">GO HOME</button>
            </Link>
        </div>
    );
};

export default Complete;