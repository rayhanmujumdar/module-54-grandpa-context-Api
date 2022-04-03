import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import CustomLink from '../CustomLink/CustomLink';

const Header = () => {
    const navigate = useNavigate()
    return (
        <div className='bg-slate-600 py-3 flex justify-between px-10 items-center'>
            <h2 className='text-2xl font-mono text-red-600 shadow-md p-2 bg-slate-500 rounded-md' onClick={() => navigate('/')}>welcome to my website</h2>
            <nav className='text-white text-xl flex'>
                <CustomLink className='mx-3 hover:text-red-500' to='/'>Home</CustomLink>
                <CustomLink className='mx-3 hover:text-red-500' to='/order-review'>Order Review</CustomLink>
                <CustomLink className='mx-3 hover:text-red-500' to='/grandpa'>GrandPa-Context</CustomLink>
            </nav>
        </div>
    );
};

export default Header;