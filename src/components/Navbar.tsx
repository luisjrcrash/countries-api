import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { faMoon } from '@fortawesome/free-solid-svg-icons';

export default function Navbar() {
  return (
    <NavStyled>
        <div className='box-nav'>
        <div>
        <h4>Where in the world?</h4>
     </div>
     <div className ="box-moon">
     <FontAwesomeIcon icon={faMoon}  className = "moon-icon"/>
        <h4>Dark Mode</h4>
     </div>
        </div>
  
    </NavStyled>
  )
}

const NavStyled = styled.div`
  background-color: white;
  padding: 0.4rem 0 0.4rem 0; 
  padding-top: 1.8rem;
  padding-bottom: 1.8rem;
  .box-nav{

     display: flex;
     justify-content: space-between;
     margin: 0 2rem;
  }

 
 

  .box-moon{
 
    display: flex; 
    align-items: center;
    justify-content: center;
  }
  .moon-icon{
    margin-right: 0.8rem; 
  }
  box-shadow: 1px 8px 5px -3px rgba(0,0,0,0.37);
-webkit-box-shadow: 1px 8px 5px -3px rgba(0,0,0,0.37);
-moz-box-shadow: 1px 8px 5px -3px rgba(0,0,0,0.37);
`;