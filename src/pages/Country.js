import { useState, useEffect } from "react";
import axios from 'axios';
function Country(){
    const [country, setCountry] = useState([]);
    useEffect(()=>{
    const getCountry = async() =>{
        const data = await axios.get('https://restcountries.com/v3.1/all');
        setCountry(data);
    }
    getCountry();
})

return(
<div>
    {country?.data?.map((dt, i) =>{
       return( <div key = {i}>
            {dt.name.common}
        </div>
        );
        
    })}
</div>
);
}

export default Country;