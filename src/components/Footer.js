import React from 'react';
import { Link } from 'react-scroll';

const Footer = () => {
    return ( 

      <footer class="text-gray-600 body-font">
      <div class="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
        <Link class="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
          
          <span class="ml-3 text-xl">Easy Turno</span>
        </Link>
        <p class="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">© 2021 Easy Turno
          
        </p>
        <span class="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
        <p class="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
          <a href="http://lamdev.com.ar/#/" class="text-gray-600 ml-1" rel="noopener noreferrer" target="_blank">LAM/DEV</a>
        </p>
        </span>
      </div>
    </footer>
     );
}
 
export default Footer;