import React from 'react';
import styled from 'styled-components';
import { CountryInfo } from '../interfaces/Task';


export default function Country({ name, population, capital, flag, flagAlt , region}:  CountryInfo) {
  return (
    <CountryStyle>
      <div className='country-box'>
        <img className='picture-country' src = {flag} alt = {flagAlt}/>
     <div className='details-country'>
     <h2>{name}</h2>
     <h3>Population:  <span>{population}</span></h3>
     <h3>Region: <span>{region}</span></h3>
     <h3>Capital: <span>{capital}</span></h3>
     </div>
  
      </div>
      
    </CountryStyle>
  )
}

const CountryStyle = styled.div`
.details-country{
  padding: 0.5rem 0.8rem 0.8rem 0.8rem;
}
h3 span{
  font-weight: normal;
  font-size: 1rem;
  color: grey;
}
h3{
  margin-top: 0.5rem; 
  font-size: 1rem;
}
.country-box{
  width: 80%;
  margin: 0 auto; 
  background-color: white;
  box-shadow: 2px 2px 28px 7px rgba(0,0,0,0.16);
-webkit-box-shadow: 2px 2px 28px 7px rgba(0,0,0,0.16);
-moz-box-shadow: 2px 2px    28px 7px rgba(0,0,0,0.16);
}
.picture-country{
  width: 100%;
  max-width: 100%;
  min-width: 100%;
  min-height: 250px;
  max-height: 250px;
}
cursor: pointer; 
margin-bottom: 1.5rem;
@media screen and (min-width: 900px){
  
}
.country-box{

}
`
