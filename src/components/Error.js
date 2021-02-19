import React from 'react';
import error from '../assets/img/error-404-colour.svg';
import { Link } from 'react-router-dom';

const Error = () => {
    return ( 
        <div class="gradient text-white min-h-screen flex items-center bg-gradient-to-r from-purple-900 via-purple-700 to-purple-500">
            <div class="container mx-auto p-4 flex flex-wrap items-center">
                <div class="w-full md:w-5/12 text-center p-4">
                    <img src={error} alt="Not Found" />
                </div>
                <div class="w-full md:w-7/12 text-center md:text-left p-4">
                <div class="text-6xl font-medium">Oops!</div>
                <div class="text-xl md:text-3xl font-medium mb-4">
                    No se encontró la página.
                </div>
                <div class="text-lg mb-8">
                    Puede ser que tipeaste erróneamente o la página se haya eliminado.
                </div>
                <Link 
                    to="/"
                    class="border border-white rounded p-4">
                    Ir al home
                </Link>
                </div>
            </div>
        </div>
     );
}
 
export default Error;