import React from 'react';
import logo from '../assets/img/logo-easy-turno.svg';

const Header = () => {
    return ( 
 
<div>
    <div className="bg-gradient-to-r from-purple-900 via-purple-700 to-purple-500">
    <div
        className="md:max-w-6xl md:mx-auto md:flex md:items-center md:justify-between"
      >
          <div className="object-contain w-20 pt-4">
            <img src={logo} alt="logo"/>
          </div>
          <div
            className="inline-block cursor-pointer md:hidden">
            <div className="bg-gray-400 w-8 mb-2"></div>
            <div className="bg-gray-400 w-8 mb-2"></div>
            <div className="bg-gray-400 w-8"></div>
          </div>
          <div>
          <div className="hidden md:block text-white">
            <p
              href="#"
              className="inline-block py-1 md:py-4 mr-6 font-bold"
              >¿Qué es?</p
            >
            <p
              href="#"
              className="inline-block py-1 md:py-4 hover:text-gray-100 mr-6"
              >¿Cómo funciona?</p>
            <p
              href="#"
              className="inline-block py-1 md:py-4 hover:text-gray-100 mr-6"
              >Precio</p>
              <p
              href="#"
              className="inline-block py-1 md:py-4 hover:text-gray-100"
              >FAQ</p>
          </div>
        </div>
      </div>
    </div>
    
</div>
     );
}
 
export default Header;