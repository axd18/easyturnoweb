import React from 'react';
import calendar from '../assets/img/calendar-colour.svg';

const QueEs = () => {
    return (
        <div className="container max-w-full mx-auto py-24 px-6">
            <h1
			className="text-center text-4xl text-gray-700 font-bold leading-snug"
			>
			¿Qué es?
		    </h1>
		    {/* <p className="text-center text-lg text-gray-700 mt-2 px-6">
			Elegí el plan que mejor se adapte a tu negocio.
		    </p> */}
            <div className="grid grid-cols-2 gap-3 md:max-w-6xl md:mx-auto ">
                <div className=" text-left font-medium text-3xl text-gray-700 mt-2 px-6 leading-10 self-center">
                    <p>Easy Turno es un formulario que le permite a tus clientes solicitar turnos que llegan a tu calendario.</p>
                </div>
                <div className=" object-contain w-72" >
                    <img className=""src={calendar}/>
                </div>
            </div>
        </div>
    );
}
 
export default QueEs;