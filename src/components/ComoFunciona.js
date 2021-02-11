import React from 'react';
import como from '../assets/img/video.png';

const ComoFunciona = () => {
    return (
        <div className="container pb-20 md:pb-0 md:pt-10 max-w-full mx-auto ">
            
            <h1
			className="text-center text-4xl text-gray-700 font-bold leading-snug" data-aos="fade-right" id="section2"
			>
			¿Cómo funciona?
		    </h1>
            <div
                class="h-1 mx-auto bg-gradient-to-r from-purple-700 to-purple-500 w-24 mb-8 mt-3 rounded" data-aos="fade-right"
            ></div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 max-w-6xl mx-auto" data-aos="fade-right">
                <div className=" object-contain w-72">
                    <img src={como} alt="man mobile"/>
                </div>
                <div className=" text-left font-medium text-3xl text-gray-700 mt-2 px-6 leading-10 self-center" data-aos="fade-right">
                    <p>Mediante una url que contiene el formulario del turno y éste llega a tu calendario en el celular, tablet o computadora. Así de simple.</p>
                <div
                    class="h-1 mx-left bg-gradient-to-r from-purple-700 to-purple-500 w-20 mt-3 rounded" data-aos="fade-right"
                ></div>
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
 
export default ComoFunciona;