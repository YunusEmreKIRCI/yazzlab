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
                //setResponse(response.data);
              }
              
              catch(err){
                console.log(err);
              }
          }
          fetchData();

    // const getCountry = async() =>{
    //     const data = await axios.get('https://restcountries.com/v3.1/all');
    //     setCountry(data);
    // }
    // getCountry();
})

    return(
        <div>
            {country?.data?.map((dt, i) =>{
       return( <div key = {i}>
            {i+1}. Kayıt
            <br></br>
            {dt.text1}
            <br></br>
            {dt.text2}
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
/*
inputs:{a,b,c} 
output: abc
*/