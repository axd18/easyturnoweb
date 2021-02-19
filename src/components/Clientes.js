import React from 'react';
import peludos from '../assets/img/logo.svg';
import bm from '../assets/img/logo-lubricentro.svg';

const Clientes = () => {
    return (
        <div className="container max-w-full mx-auto py-20 px-6" data-aos="fade-right">
            <h1
			className="text-center text-4xl text-gray-700 font-bold leading-snug"
			>
			Clientes
		    </h1>
            <div
                class="h-1 mx-auto bg-gradient-to-r from-purple-700 to-purple-500 w-24 mt-3 rounded mb-8" 
            ></div>
		    {/* <p className="text-center text-lg text-gray-700 mt-2 px-6">
			Elegí el plan que mejor se adapte a tu negocio.
		    </p> */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 max-w-sm mx-auto">
                <div className=" object-contain w-40 md:w-auto">
                    <img className=""src={peludos} alt="peludos"/>
                </div>
                <div className=" object-contain w-40 md:w-auto">
                    <img className=""src={bm} alt="peludos"/>
                </div>
                
            </div>
        </div>
    );
}
 
export default Clientes;