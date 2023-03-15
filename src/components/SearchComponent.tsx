import React, { ChangeEvent, useEffect, useState, useContext } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { fetchServer } from '../services/fetchServer';
import { CountryContext } from '../context/countryContext';
import { CountryProperties } from '../interfaces/Task';

interface SearchComponentProps {
    onUpdateCountries: (newCountries: CountryProperties[]) => void;
  }

export default function SearchComponent({onUpdateCountries}: SearchComponentProps) {

    const [inputTerm, setInputTerm] = useState<string>("");
    const countries = useContext(CountryContext);

    const countriesAPI = useContext(CountryContext);
    const handleInputChange = async(e: ChangeEvent<HTMLInputElement>) =>{
        if(!e.target.value.trim()){
            const countryInfo:CountryProperties[] = await fetchServer(
                `/all` ,
                'get',
            );
            const countryInfoFiltered:CountryProperties[] = countryInfo.map(countrie=>{
                return {
                    name: countrie.name,
                    population: countrie.population,
                    flags: countrie.flags,
                    capital: countrie.capital,
                    region: countrie.region
                }
            });
            onUpdateCountries(countryInfoFiltered);
            console.log("VACIO"); 
        }
        setInputTerm(e.target.value);
    }
    const bringData = async()=>{
        const countryInfo:CountryProperties[] = await fetchServer(
            `name/${inputTerm}` ,
            'get',
        );
        const countryInfoFiltered:CountryProperties[] = countryInfo.map(countrie=>{
            return {
                name: countrie.name,
                population: countrie.population,
                flags: countrie.flags,
                capital: countrie.capital,
                region: countrie.region
            }
        });
        onUpdateCountries(countryInfoFiltered);
      
    }
    
    useEffect(()=>{
     async function loadData(){
        const allCountryInfo:CountryProperties[] = await fetchServer(
            `all` ,
            'get',
        );  
        const allCountryInfoFiltered:CountryProperties[] = allCountryInfo.map(country=>{
            return{
                name: country.name,
                population: country.population,
                flags: country.flags,
                capital: country.capital,
                region: country.region
           
            }
        })

        return allCountryInfo;
     }
       
    loadData();
    },[]);

  return (
    <SearchStyle>
        <div className='box-search'>
        <button className='search-icon-button'>   <FontAwesomeIcon icon={faMagnifyingGlass}  className = "moon-icon"
        onClick={bringData}
        /></button>
        <input type="text" className='searchElement' onChange={handleInputChange}/>
        </div>
    
    </SearchStyle>
  )
}

const SearchStyle = styled.div`
 padding-top: 2rem;
    padding-bottom: 2rem;
.box-search{
display: flex;
    justify-content: space-around;
    width: 80%; 
    margin: 0 auto;
    box-shadow: 2px 2px 28px 7px rgba(0,0,0,0.16);
-webkit-box-shadow: 2px 2px 28px 7px rgba(0,0,0,0.16);
-moz-box-shadow: 2px 2px    28px 7px rgba(0,0,0,0.16);
}
.search-icon-button{
 width: 50px;
 border: none;
 background-color: white;
 z-index: 2;
 border-top-left-radius: 0.4rem;
 border-bottom-left-radius: 0.4rem;
}
    
    .searchElement{
        width: calc(100% - 50px); 
        padding: 0.8rem;
        border-top-right-radius: 0.4rem;
        border-bottom-right-radius: 0.4rem;
        border: none; 
   
    }
    .searchElement:focus{
        outline: none;
  border: none;
    }

`