import React, { createContext, useState } from "react";
import Father from "../Father/Father";
import Uncle from "../Uncle/Uncle";
import Aunty from "../Aunty/Aunty";
import "./Grandpa.css";

export const RingContext = createContext("ring");

const Grandpa = () => {
  const [house, setHouse] = useState(1);
  let ornament = 'Daimond'
  const buyHouse = () => {
    setHouse(house + 1);
  };
  return (
    <RingContext.Provider value={[ornament,house]}>
      <div className="border-2 border-orange-400 m-3 p-4">
        <h1>Grandpa</h1>
        <p>House: {house}</p>
        <button
          className="border-2 border-black p-2 m-2 bg-orange-600 text-white rounded"
          onClick={buyHouse}
        >
          Buy a House
        </button>
        <div className="flex grandpa">
          <Father house={house}></Father>
          <Uncle house={house}></Uncle>
          <Aunty house={house}></Aunty>
        </div>
      </div>
    </RingContext.Provider>
  );
};

export default Grandpa;