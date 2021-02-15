
import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-scroll';

const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  color: white;
  cursor: pointer;
  li {
    padding: 18px 10px; 
  }
  
  @media (max-width: 768px) {
    flex-flow: column nowrap;
    background-color: #0D2538;
    position: fixed;
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
    top: 0;
    right: 0;
    height: 55vh;
    width: 300px;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;
    li {
      color: #fff;
    }
  }
`;

const RightNav = ({ open }) => {
  return (
    <Ul open={open}>
      <li>
        <Link
          // className="px-3 py-2 flex items-center text-lg leading-snug text-white hover:opacity-75 cursor-pointer"
          activeClass="active"
          to="section1"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          >¿Qué es?
        </Link>
      </li>
      <li>
        <Link
          activeClass="active"
          to="section2"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          // className="px-3 py-2 flex items-center text-lg text-white hover:opacity-75 cursor-pointer"
          >¿Cómo funciona?
        </Link>
      </li>
      <li >
        <Link
          activeClass="active"
          to="section3"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          // className="px-3 py-2 flex items-center text-lg text-white hover:opacity-75 cursor-pointer"
          >Precio
        </Link>
      </li>
      <li >
        <Link
          activeClass="active"
          to="section4"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          // className="px-3 py-2 flex items-center text-lg text-white hover:opacity-75 cursor-pointer"
          >FAQ
        </Link>
      </li>
      <li >
        <Link
          activeClass="active"
          to="section5"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          // className="px-3 py-2 flex items-center text-lg text-white hover:opacity-75 cursor-pointer"
          >Contacto
        </Link>
      </li>
    </Ul>
  )
}

export default RightNav