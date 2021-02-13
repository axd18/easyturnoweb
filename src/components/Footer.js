import React from 'react';
import { Link } from 'react-scroll';

const Footer = () => {
    return ( 

        <footer className="relative bg-gray-300 pt-8 pb-6">
        <div
          className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20"
          style={{ height: "80px", transform: "translateZ(0)" }}
        >
          <svg
            className="absolute bottom-0 overflow-hidden"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            version="1.1"
            viewBox="0 0 2560 100"
            x="0"
            y="0"
          >
            <polygon
              className="text-gray-300 fill-current"
              points="2560 0 2560 100 0 100"
            ></polygon>
          </svg>
        </div>
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap">
            <div className="w-full lg:w-6/12 px-4">
              <h4 className="text-3xl text-gray-700 font-semibold">
                Dejanos tu email
              </h4>
              <h5 className="text-lg mt-0 mb-2 text-gray-700">
                y te contactaremos dentro de las 24 hs.
              </h5>
              <div className="mt-6">
                
              <div>
                  <form class="m-4 flex mx-auto">
                    <input class="rounded-l-lg p-4 border-t mr-0 border-b border-l text-gray-800 border-gray-200 bg-white " placeholder="tuemail@mail.com"/>
                  <button class="px-8 rounded-r-lg bg-blue-500  text-white font-bold p-4 border-blue-600 border-t border-b border-r">Enviar</button>
                </form>
              </div>
              </div>
            </div>
            <div className="w-full lg:w-6/12 px-4">
              <div className="flex flex-wrap items-top mb-6">
                <div className="w-full lg:w-4/12 px-4 ml-auto">
                  <span className="block uppercase text-gray-600 text-sm font-semibold mb-2">
                    Secciones
                  </span>
                  <ul className="list-unstyled">
                    <li>
                      <Link className="text-gray-700 hover:text-gray-900 font-semibold block pb-2 text-sm cursor-pointer"
                        to="section1"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}>
                          ¿Qué Es?
                      </Link>
                    </li>
                    <li>
                      <Link className="text-gray-700 hover:text-gray-900 font-semibold block pb-2 text-sm cursor-pointer"
                         to="section2"
                         spy={true}
                         smooth={true}
                         offset={-70}
                         duration={500}>
                           ¿Cómo funciona?
                      </Link>
                    </li>
                    <li>
                      <Link className="text-gray-700 hover:text-gray-900 font-semibold block pb-2 text-sm cursor-pointer"
                         to="section3"
                         spy={true}
                         smooth={true}
                         offset={-70}
                         duration={500}>
                           Precio
                      </Link>
                    </li>
                    <li>
                      <Link className="text-gray-700 hover:text-gray-900 font-semibold block pb-2 text-sm cursor-pointer"
                         to="section4"
                         spy={true}
                         smooth={true}
                         offset={-70}
                         duration={500}>Preguntas frecuentes
                      </Link>
                    </li>
                    <li>
                      <Link className="text-gray-700 hover:text-gray-900 font-semibold block pb-2 text-sm cursor-pointer"
                         to="section5"
                         spy={true}
                         smooth={true}
                         offset={-70}
                         duration={500}>Contacto
                      </Link>
                    </li>

                  </ul>
                </div>
                {/* <div className="w-full lg:w-4/12 px-4">
                  <span className="block uppercase text-gray-600 text-sm font-semibold mb-2">
                    Other Resources
                  </span>
                  <ul className="list-unstyled">
                    <li>
                      <a className="text-gray-700 hover:text-gray-900 font-semibold block pb-2 text-sm"
                      href="https://github.com/creativetimofficial/argon-design-system/blob/master/LICENSE.md">MIT License
                    </a>
                    </li>
                    <li>
                      <a className="text-gray-700 hover:text-gray-900 font-semibold block pb-2 text-sm"
                         href="https://creative-tim.com/terms">Terms & Conditions
                      </a>
                    </li>
                    <li>
                      <a className="text-gray-700 hover:text-gray-900 font-semibold block pb-2 text-sm"
                         href="https://creative-tim.com/privacy">Privacy Policy
                      </a>
                    </li>
                    <li>
                      <a className="text-gray-700 hover:text-gray-900 font-semibold block pb-2 text-sm"
                         href="https://creative-tim.com/contact-us">Contact Us
                      </a>
                    </li>
                  </ul>

                </div> */}
              </div>
            </div>
          </div>
          <hr className="my-6 border-gray-400" />
          <div className="flex flex-wrap items-center md:justify-between justify-center">
            <div className="w-full md:w-4/12 px-4 mx-auto text-center">
              <div className="text-sm text-gray-600 font-semibold py-1">
                Copyright © {new Date().getFullYear()}{" "}
                <a
                  href="https://www.lamdev.com.ar"
                  className="text-gray-600 hover:text-gray-900"
                >
                  LAM/DEV
                </a>.
              </div>
            </div>
          </div>
        </div>
      </footer>
     );
}
 
export default Footer;