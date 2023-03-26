import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <div className='bg text-center py-72'>
            <h1 className='text-5xl text-white font-bold'>Registration is Open For Alumni</h1>
            <Link to='/registration'>
                <button className="btn my-4 px-20 btn-outline text-white hover:bg-[#648D38]">REGISTER</button>
            </Link>
        </div>
    );
};

export default Header;