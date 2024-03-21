import React, { useEffect, useState } from 'react';
import Country from './Country/Country';
import './Countries.css'

const Countries = () => {
    const[countri,setCountri]=useState([])
    useEffect(()=>{
        fetch("https://restcountries.com/v3.1/all")
        .then(res=>res.json())
        .then(data=>setCountri(data))
    },[])
    return (
        <div className=''>
            <h1>wellcome to all countries in the world:{countri.length}</h1>
          
            <div className='countries-container'>
            {
              countri.map(country=><Country
              //it is multipul dynamic way
              country={country}
              key={country.cca3}
              //this is simple way in the dynami 
                //  name={country.name.common}
            //   population={country.population}
            //   area={country.area}
              ></Country>)  
            }
            </div>

        </div>
    );
};

export default Countries;