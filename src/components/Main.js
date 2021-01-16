import React from 'react';
import mobil from '../assets/img/mobil.png'

const Main = () => {
    return ( 
        <div className="bg-gray-800">
              <div className="px-4 py-20 md:py-4">
                <div className="md:max-w-6xl md:mx-auto">
                  <div className="md:flex md:flex-wrap">
                    <div className=" md:w-1/2 text-center md:text-left md:pt-16">
                      <h1
                        className="font-bold text-white text-2xl md:text-5xl leading-tight mb-4"
                      >
                        La manera más fácil de gestionar tus turnos.
                      </h1>

                      <p className="text-indigo-200 md:text-xl md:pr-48">
                        Con tu calendario gestionás los turnos que llegan desde un formulario online personalizado para tu negocio.
                      </p>

                      {/* <p
                        href="#"
                        className="mt-6 mb-12 md:mb-0 md:mt-10 inline-block py-3 px-8 text-white bg-gray-500 hover:bg-gray-600 rounded-lg shadow"
                        >Get Started</p
                      > */}
                    </div>
                      <div className=" md:w-1/2 absolute inset-y-0 right-0 mt-40">
                        <img src={mobil} alt="mobil"/>
                      </div>
                  </div>
                </div>
              </div>
            <svg
              className="fill-current text-white hidden md:block"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1440 320"
            >
              <path fill-opacity="1" d="M0,224L1440,32L1440,320L0,320Z"></path>
            </svg>
        </div>
     );
}
 
export default Main;
