import React from 'react';


const Faq = () => {
    return ( 
    
<div>
      <section class="text-gray-700">
        <div class="container px-5 py-24 mx-auto">
          <div class="text-center mb-20">
            <h1 class="text-center text-4xl text-gray-700 font-bold leading-snug">
              Preguntas Frecuentes
            </h1>
            <p class="text-center text-lg text-gray-700 mt-2 px-6">
              Las preguntas que nos hacen con más frecuencia sobre como funciona Easy Turno y como podemos ayudarte.
            </p>
          </div>
          <div class="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
            <div class="w-full lg:w-1/2 px-4 py-2">
              <details class="mb-4">
                <summary class="font-semibold  bg-gray-200 rounded-md py-2 px-4">
                  ¿Cómo puedo reservar un turno?
                </summary>

                <span>
                El procedimiento para la reserva de Turno, es el siguiente
                Debe completar todos los campos solicitados por el Formulario , 
                De forma Correcta, incluyendo los datos de Su dirección de Correo , nombre y Fecha del Turno junto al Horario del cual .
                En ese instante podrá pulsar el botón Confirmar Turno el cual para la reserva si dicho horario y día están disponibles.
                </span>
              </details>
              <details class="mb-4">
                <summary class="font-semibold bg-gray-200 rounded-md py-2 px-4">
                  ¿Qué sucede si no hay turno ese día?
                </summary>

                <span>
                En el caso de que el sistema devuelve el mensaje de no hay turno disponible, Tendrá que intentar con otro horario diferente al cual esta queriendo reservar, En el caso que tampoco le acepte el cambio de horario deberá intentar con otra fecha de día distinta.
                </span>
              </details>
              <details class="mb-4">
                <summary class="font-semibold  bg-gray-200 rounded-md py-2 px-4">
                  ¿Dónde puedo ver los datos de mi reserva?
                </summary>

                <span>
                Los datos de su reserva serán enviados a la casilla de correo la cual registre en el Formulario. Recuerde revisar las casilla de correo de no deseado , ya que por seguridad su servidor puede enviar como spam.
                </span>
              </details>
            </div>
            <div class="w-full lg:w-1/2 px-4 py-2">
              <details class="mb-4">
                <summary class="font-semibold  bg-gray-200 rounded-md py-2 px-4">
                  ¿Qué sucede si no me llega ningún correo y ya me confirmo el turno?
                </summary>

                <span class="px-4 py-2">
                En ese caso pasada las 3hs de realizar el turno aun no recibe el correo, le pedimos que se comunique con el mail que aparece debajo de la web , enviando la información sus datos y qué día y hora hizo la reserva, para consultar si esta registrado su turno.
                </span>
              </details>
              <details class="mb-4">
                <summary class="font-semibold  bg-gray-200 rounded-md py-2 px-4">
                  How many sites I can create at once?
                </summary>

                <span class="px-4 py-2">
                  Laboris qui labore cillum culpa in sunt quis sint veniam.
                  Dolore ex aute deserunt esse ipsum elit aliqua. Aute quis
                  minim velit nostrud pariatur culpa magna in aute.
                </span>
              </details>
              <details class="mb-4">
                <summary class="font-semibold  bg-gray-200 rounded-md py-2 px-4">
                  How can I communicate with you?
                </summary>

                <span class="px-4 py-2">
                  Laboris qui labore cillum culpa in sunt quis sint veniam.
                  Dolore ex aute deserunt esse ipsum elit aliqua. Aute quis
                  minim velit nostrud pariatur culpa magna in aute.
                </span>
              </details>
            </div>
          </div>
        </div>
      </section>
    </div>
     );
}
 
export default Faq;