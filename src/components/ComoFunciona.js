import React from 'react';
import como from '../assets/img/video.png';

const ComoFunciona = () => {
    return (
        <section className="text-gray-600 body-font" id="section2">
            <div className="container px-5 py-24 mx-auto">
                <div className="flex flex-col text-center w-full mb-20">
                    <h1 className="sm:text-3xl text-3xl font-medium title-font mb-4 text-gray-900">¿Cómo funciona?</h1>
                <div class="h-1 mx-auto bg-gradient-to-r from-purple-700 to-purple-500 w-24 mt-3 rounded mb-8" data-aos="fade-right"></div>
                </div>
            <div class="container mx-auto flex px-5 md:flex-row flex-col items-center">
                <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0"  data-aos="fade-up">
                    <img class="object-cover object-center rounded" alt="hero" src={como}/>
                </div>
                <div class="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
                    {/* <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Before they sold out </h1>*/}
                    <p class="mb-8 leading-thight text-2xl">Mediante una url que contiene el formulario del turno y éste llega a tu calendario en el celular, tablet o computadora. Así de simple.</p>
                </div>
            </div>
            </div>
        </section>
    );
}
 
export default ComoFunciona;