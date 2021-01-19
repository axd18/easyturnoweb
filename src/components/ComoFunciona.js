import React from 'react';
import como from '../assets/img/como.svg';

const QueEs = () => {
    return (
        <div className="mt-20">
            <h1
			className="text-center text-4xl text-gray-700 font-bold leading-snug"
			>
			¿Cómo funciona?
		    </h1>
            <div className="grid grid-cols-2 gap-3 md:max-w-6xl md:mx-auto ">
                <div className=" object-contain w-72" >
                    <img src={como}/>
                </div>
                <div className=" text-left font-medium text-3xl text-gray-700 mt-2 px-6 leading-10 self-center">
                    <p>Mediante una url que contiene el formulario del turno y éste llega a tu calendario en el celular, tablet o computadora. Así de simple.</p>
                </div>
            </div>
            <svg
              className="fill-current text-purple-700 hidden md:block"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1440 320"
            >
              <path fill-opacity="1" d="M0,224L1440,32L1440,320L0,320Z"></path>
            </svg>
        </div>
    );
}
 
export default QueEs;