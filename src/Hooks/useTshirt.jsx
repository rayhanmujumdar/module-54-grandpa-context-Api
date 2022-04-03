import axios from "axios";
import { useEffect, useState } from "react"

const useTshirts = (defultValue) => {
    const [tShirts,setTShirts] = useState(defultValue);
    useEffect(() => {
        axios.get('t-shirts.json')
        .then(data => setTShirts(data.data))
    },[])
    return [tShirts,setTShirts];
}

export default useTshirts