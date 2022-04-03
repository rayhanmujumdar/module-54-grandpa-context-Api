import React, { useState } from 'react';
import useTshirts from '../../Hooks/useTshirt';
import Cart from '../Cart/Cart';
import Products from '../Products/Products';

const Home = () => {
    const [tShirts,setTShirts] = useTshirts([]);
    const [carts,setCarts] = useState([])
    const addToCart = (seletedProduct) => {
        const exist = carts.find(cart => cart._id === seletedProduct._id)
        if(!exist){
            const newTshirt = [...carts,seletedProduct];
            setCarts(newTshirt)
        }
        else{
            alert('This product already exist')
        }
    }
    const clearCartProduct = (seletedCart) => {
        const rest = carts.filter( cart => cart._id !== seletedCart._id)
        setCarts(rest)
    }
    return (
        <div className='grid grid-cols-4'>
            <div className=' col-span-3 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 py-10 gap-10 m-auto'>
                {
                    tShirts.map(tshirt => 
                    <Products 
                    key={tshirt._id}
                    tshirt={tshirt}
                    addToCart={addToCart}
                    ></Products>)
                }
            </div>
            <div className='bg-slate-400 sticky top-0 h-screen'>
                <Cart 
                carts={carts}
                clearCartProduct={clearCartProduct}
                ></Cart>
            </div>
        </div>
    );
};

export default Home;