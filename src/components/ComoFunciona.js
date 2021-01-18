import React from 'react';
import como from '../assets/img/como.svg';

const QueEs = () => {
    return (
        <div className="container max-w-full mx-auto py-24 px-6">
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
        </div>
    );
}
 
export default QueEs;