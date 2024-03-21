import React from 'react';
import './Country.css'
const Country = (props) => {
   
    //distracting 
    const {area,name,population,flags,region}=props.country
    console.log(props.country);
    return (
        <div className='country'>
           
            <h2> country name:{name.common}</h2>
            <h3>country population:{population}</h3>
            <img src={flags.png} alt="" />
            <p>area:{area}</p>
            <p>region:{region}</p>
            
        </div>
    );
};

export default Country;