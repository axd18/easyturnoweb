import React from 'react';

const Faq = () => {
    return (
        <section className="text-gray-600 body-font" id="section4">
            <div className="container px-5 py-24 mx-auto">
                <div className="flex flex-col text-center w-full mb-20">
                    <h1 className="sm:text-3xl text-3xl font-medium title-font mb-4 text-gray-900" data-aos="fade-up">Preguntas Frecuentes</h1>
                    <p class="lg:w-2/3 mx-auto leading-relaxed text-base text-gray-500" data-aos="fade-up">Las preguntas que nos hacen con más frecuencia sobre como funciona Easy Turno y como podemos ayudarte.</p>
                <div class="h-1 mx-auto bg-gradient-to-r from-purple-700 to-purple-500 w-24 mt-3 rounded mb-8" data-aos="fade-right"></div>
                </div>
                <div class="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
            <div class="w-full lg:w-1/2 px-4 py-2" data-aos="fade-right">
              <h1 className=" text-2xl text-gray-700 font-bold text-gray-700 pb-4">Preguntas del que pide el turno</h1>
              <details class="mb-4">
                <summary class="font-semibold  bg-purple-200 rounded-md py-2 px-4">
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
                <summary class="font-semibold bg-purple-200 rounded-md py-2 px-4">
                  ¿Qué sucede si no hay turno ese día?
                </summary>

                <span>
                En el caso de que el sistema devuelve el mensaje de no hay turno disponible, Tendrá que intentar con otro horario diferente al cual esta queriendo reservar, En el caso que tampoco le acepte el cambio de horario deberá intentar con otra fecha de día distinta.
                </span>
              </details>
              <details class="mb-4">
                <summary class="font-semibold bg-purple-200 rounded-md py-2 px-4">
                  ¿Dónde puedo ver los datos de mi reserva?
                </summary>

                <span>
                Los datos de su reserva serán enviados a la casilla de correo la cual registre en el Formulario. Recuerde revisar las casilla de correo de no deseado , ya que por seguridad su servidor puede enviar como spam.
                </span>
              </details>
              <details class="mb-4">
                <summary class="font-semibold bg-purple-200 rounded-md py-2 px-4">
                  ¿Qué sucede si no me llega ningún correo y ya me confirmo el turno?
                </summary>

                <span class="px-4 py-2">
                En ese caso pasada las 3hs de realizar el turno aun no recibe el correo, le pedimos que se comunique con el mail que aparece debajo de la web , enviando la información sus datos y qué día y hora hizo la reserva, para consultar si esta registrado su turno.
                </span>
              </details>
            </div>
            <div class="w-full lg:w-1/2 px-4 py-2" data-aos="fade-right">
            <h1 className=" text-2xl text-gray-700 font-bold text-gray-700 pb-4" >Preguntas del administrador de turnos</h1>
              <details class="mb-4">
                <summary class="font-semibold bg-purple-200 rounded-md py-2 px-4">
                  ¿Dónde esta registrados mis turnos??
                </summary>

                <span class="px-4 py-2">
                Los turnos al cual han reservado esta en la base de dato de calendario en  la cuenta la cual le es asignado en el momento de adquirir Easy Turno.
                </span>
              </details>
              <details class="mb-4">
                <summary class="font-semibold bg-purple-200 rounded-md py-2 px-4">
                ¿Cómo me puedo contactar con un usuario que haya registrado un turno?
                </summary>

                <span class="px-4 py-2">
                Ya dentro de su calendario, podrá cliquear en el turno , y observar todos los datos referente al mismo, mail, teléfono nombre Etc.
                Mediante cualquier de esas vías puede contactar con el usuario que haya registrado el turno.
                </span>
              </details>
              <details class="mb-4">
                <summary class="font-semibold bg-purple-200 rounded-md py-2 px-4">
                ¿Qué tareas puedo realizar con mi calendario de turnos?
                </summary>

                <span class="px-4 py-2">
                Usted puede reasignar , borrar, cambiar, observar todos los datos de quién hace su reserva,  colorear, reenviarse recordatorios y mas funcionalidades que le son asignadas a su calendario.
                </span>
              </details>
              <details class="mb-4">
                <summary class="font-semibold bg-purple-200 rounded-md py-2 px-4">
                ¿Si tengo varios Especialidades para reservar turno como puedo organizar los calendarios?
                </summary>

                <span class="px-4 py-2">
                Con EasyTurno podra, tener en el plan basico hasta dos especialidades, ejemplo: Dos Cajas, Dos Box, o peluqueria, y manicura, 
                con el Plan Premium podra acceder hasta 6 calendarios, o especialidades, diferentes. 
                </span>
              </details>
            </div>
          </div>
            </div>
        </section>
    );
}
 
export default Faq;