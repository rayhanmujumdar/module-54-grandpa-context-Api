import React from 'react';

const Cart = ({carts,clearCartProduct}) => {
    //Condition randering system
    //1:element variable
    //2.tarnary operator
    //3.&& operator (shortHand);
    //4.|| jodi mittha hoy toale jabe.
    const orange = 'bg-orange-400 m-3 p-3 text-white rounded-md';
    let command;
    if(carts.length === 0){
        command = <div className={orange}>
            <p>pokinnir pola kicu kin.na kinle website e dukcot keno</p>
        </div>
    }
    else if(carts.length === 1){
        command = <div className={orange}>
            <p>Aro kin madarchod</p>
        </div>
    }
    else{
        command = <div className={orange}>
            <p>tore onnek onnek donnobad amar bebsha canga korli</p>
        </div>
    }

    return (
        <div>
            <h1 className='text-2xl my-4'>Total added cart: {carts.length}</h1>
            {
                carts.map(cart => <p>{cart.name}
                    <button onClick={() => clearCartProduct(cart)} className='border-2 px-1 m-1'>X</button>
                </p>)
            }
            {
                // randering condition added
            }
            {
                carts.length === 0 || <p className={orange}>Yah your are buying</p>
            }
            {
            carts.length === 3 && <div className={orange}>
                <h3>Trigonal</h3>
                <p>Tin jon ke ki gift diba</p>    
            </div>
            }
            {command}
            {carts.length !== 4? <p className={orange}>keep adding</p>: <button className='border-2 px-2 py-1 bg-slate-500 text-white'>Clear All</button>}
        </div>
    );
};

export default Cart;