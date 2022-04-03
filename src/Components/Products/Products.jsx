import React from 'react';

const Products = ({tshirt,addToCart}) => {
    const {name,picture,gender,price} = tshirt
    return (
        <div className='flex flex-col justify-center  border-2 border-slate-700 p-3 bg-red-400 w-[300px] rounded-md'>
            <div className='m-auto'>
                <img src={picture} alt="" className='h-[300px] w-[250px]'/>
            </div>
            <div className='text-left my-3 text-white'>
                <h1 className='text-xl '>{name} amar sonar bangla</h1>
                <p>Gender: {gender ? gender.toUpperCase() : 'No Gender'}</p>
                <p className='font-semibold text-lg text-gray-700'>Price: ${price}</p>
            </div>
            <div>
                <button onClick={() => addToCart(tshirt)} className='bg-red-300 hover:bg-red-500 00 w-full text-white py-2'>Add To Cart</button>
            </div>
        </div>
    );
};

export default Products;