import React from 'react';
import peludos from '../assets/img/logo.svg';
import bm from '../assets/img/logo-lubricentro.svg';

const Clientes = () => {
    return (
        <section className="text-gray-600 body-font">
            <div className="container px-5 py-24 mx-auto">
                <div className="flex flex-col text-center w-full mb-20">
                <h1 className="sm:text-3xl text-3xl font-medium title-font mb-4 text-gray-900">Nos eligieron</h1>
                <div class="h-1 mx-auto bg-gradient-to-r from-purple-700 to-purple-500 w-24 mt-3 rounded mb-8" data-aos="fade-right"></div>
                </div>
                <div className="flex flex-wrap -m-4 text-center justify-center">
                    <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
                        <div className="px-4 py-6"  data-aos="fade-up">
                            <img src={peludos} className=""/>
                        </div>
                    </div>
                    <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
                        <div className="px-4 py-6">
                            <img src={bm} className="" data-aos="fade-up" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
 
export default Clientes;