import React, { useContext } from 'react';
import { RingContext } from '../Grandpa/Grandpa';

const Spacial = () => {
    const [ornament,house] = useContext(RingContext)
    console.log(ornament)
    return (
        <div>
            <h1>My Spacial</h1>
            <p><small>Gift: {ornament}</small></p>
            <p>House: {house}</p>
        </div>
    );
};

export default Spacial;<h1>My Spacial</h1>