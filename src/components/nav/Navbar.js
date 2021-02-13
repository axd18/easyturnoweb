import React from 'react';
import styled from 'styled-components';
import Burger from './Burger';
import logo from '../../assets/img/logo-easy-turno.svg';

const Nav = styled.nav`
  width: 100%;
  height: 70px;
  /* background-color: #9CA3AF; */
  /* border-bottom: 2px solid #f1f1f1; */
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
 
`

const Navbar = () => {
    return ( 
        <Nav className="bg-gradient-to-r from-purple-900 via-purple-700 to-purple-500">
            <div className="pt-2 w-16 ">
                <img src={logo} alt="logo"/>
            </div>
            <Burger />
        </Nav>
     );
}
 
export default Navbar;