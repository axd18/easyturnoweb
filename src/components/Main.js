import React from 'react';
import { Link } from 'react-scroll';
import mobil from '../assets/img/mobil-X.svg';

const Main = () => {
    return ( 
      <section class="text-gray-600 body-font bg-hero-respon md:bg-hero-main bg-no-repeat  mx-auto">
        <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center text-white">
          
          <div class="pt-10 lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 class="title-font sm:text-5xl text-5xl mb-4 font-bold text-white leading-tight">La manera más fácil de gestionar tus turnos.
            </h1>
            <p class="sm:text-2xl text-2xl mb-8 leading-thight">Con tu calendario gestionás los turnos que llegan desde un formulario online personalizado para tu negocio.</p>
            <div
              class="flex justify-center">
                
              <Link
                activeClass="active"
                to="section5"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}>
                <button class="inline-flex  bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded text-lg">Contacto</button>
              </Link>
            </div>
          </div>
          <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6" data-aos="zoom-in">
            <img class="object-cover object-center rounded" alt="hero" src={mobil}/>
          </div>
        </div>
      </section>
     );
}
 
export default Main;
