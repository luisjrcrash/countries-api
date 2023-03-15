import React, {useEffect, useContext, useState,ChangeEvent} from 'react'
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { fetchServer } from '../services/fetchServer';
import { CountryContext } from '../context/countryContext';
import { CountryProperties } from '../interfaces/Task';
import Country from './Country';

export default function ListCountries() {

    const [inputTerm, setInputTerm] = useState<string>("");
    const countries = useContext(CountryContext);
    const [countriesData, setCountriesData] = useState<CountryProperties[]>();
    
    useEffect(()=>{
        console.log('HELLO FROM seachComponent::: ');
        console.log('API DATA: ');
        console.log(countries);
        const filterInfo:CountryProperties[] = countries.map((countrie)=>{
            return {
                name: countrie.name,
                population: countrie.population,
                flags: countrie.flags,
                capital: countrie.capital,
                region: countrie.region
            }
        });
        console.log("Filtro final: ");
        console.log(filterInfo); 
      
        setCountriesData(filterInfo); 
    },[countries]);


  return (
  <ListStyle>
    <div className='country-container'>
    {countries &&
    countries.map(country=>{
        return <div>
            <Country 
             name={country.name.common}
             population={country.population}
             flag={country.flags.png}
             capital={country.capital}
             flagAlt = {country.flags.alt}
             region = {country.region}
            />
        </div>
    })
  }
    </div>
  </ListStyle>
  )
}

const ListStyle = styled.div`

    @media screen and (min-width: 900px){
        .country-container{
            display: grid;
            grid-template-columns: 1fr 1fr 1fr;
        }
    }
`