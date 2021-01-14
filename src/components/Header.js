import React from 'react';
import logo from '../assets/img/logo-easy-turno.svg';

const Header = () => {
    return ( 
 
<div>
    <div className="bg-gray-600 px-4 py-4">
    <div
        className="md:max-w-6xl md:mx-auto md:flex md:items-center md:justify-between"
      >
          <div className="flex justify-between items-center">
            <img src={logo}/>
          </div>
          <div
            className="inline-block cursor-pointer md:hidden">
            <div className="bg-gray-400 w-8 mb-2"></div>
            <div className="bg-gray-400 w-8 mb-2"></div>
            <div className="bg-gray-400 w-8"></div>
          </div>
          <div>
          <div className="hidden md:block">
            <p
              href="#"
              className="inline-block py-1 md:py-4 text-gray-100 mr-6 font-bold"
              >¿Qué es?</p
            >
            <p
              href="#"
              className="inline-block py-1 md:py-4 text-gray-500 hover:text-gray-100 mr-6"
              >¿Cómo funciona?</p
            >
            <p
              href="#"
              className="inline-block py-1 md:py-4 text-gray-500 hover:text-gray-100"
              >Precio</p
            >
          </div>
        </div>
      </div>
    </div>
    
</div>
     );
}
 
export default Header;