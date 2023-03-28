import { useState, useEffect } from "react";
import axios from 'axios';
import api from '../api/axiosConfig';

export default function List(){
    const [country, setCountry] = useState([]);
    useEffect(()=>{

        async function fetchData() {
            try {
                const res = await api.get("/listTexts")
                setCountry(res);
              }
              
              catch(err){
                console.log(err);
              }
          }
          fetchData();
})

    return(
        <div>
            {country?.data?.map((dt, i) =>{
       return( <div key = {i}>
            {i+1}. Kayıt
            <br></br>
            <br></br>
            {dt.combinedText}
            <br></br>
            <br></br>
        </div>
        );
        
    })}
        </div>
    );
}