import React from 'react'
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const Menustyle = styled.div`
  display: flex;
  max-width: 50%;
  justify-content: space-between;
  background-color: lightgray;
`;


export const Menu = () => {
 
    return (
      <Menustyle>
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/about'>About</NavLink>
        <NavLink to='/contact'>Contact</NavLink>
      </Menustyle>
    
  );
}

export default Menu;

