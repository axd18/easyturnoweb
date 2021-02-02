import React, { useState } from 'react';
import emailjs from 'emailjs-com';


const Form = () => {
    
    const [datos, enviarDatos] = useState({
        nombre:'',
        email:'',
        message:''
    })

    const {nombre, email, message} = datos
    
    const [error, ] = useState(false);

    // función que coloca los elementos en el state
    const handleChange = e => {
        // actualizar el state
        enviarDatos({
           ...datos,
           [e.target.name] : e.target.value
        });
    }

    // Cuando el usuario le da submit al form
    const handleSubmit = e => {
        e.preventDefault();

        // Validar
        // if(nombre.trim() === '' || email.trim() === '' || message.trim() === '') {
        //     guardarError(true);
        //     return;
        // }
        // guardarError(false);
        // Pasarlo al componente principal
        emailjs.sendForm('gmail', 'template_test', e.target, 'user_DjxbpiGhrI5bsn5NN7Lm7')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
    }
    
    return ( 
        <div className="bg-gray-200 py-20 px-5 pt-8">
            <h1
                className="text-center text-4xl text-gray-700 font-bold leading-snug" id="section5"
                >
                Contacto
            </h1>
            <div
                className="h-1 mx-auto bg-gradient-to-r from-purple-700 to-purple-500 w-24 mt-3 rounded"
            ></div>
            {error ? <div className="max-w-2xl m-auto text-sm text-left text-red-600 bg-red-200 border border-red-400 h-12 items-center p-4 rounded-sm mt-6" role="alert">Todos los campos son obligatorios</div> : null}
            <div className="max-w-2xl bg-white py-10 px-5 m-auto w-full mt-10 rounded-lg">
                <form 
                    onSubmit={ handleSubmit }
                    className="grid grid-cols-2 gap-4 max-w-xl m-auto">
                    <div className="col-span-2 lg:col-span-1">
                        <input type="text" class="border-solid border-gray-400 border-2 p-3 md:text-xl w-full rounded-lg" placeholder="Nombre" name="nombre" value={nombre} onChange={handleChange}/>
                    </div>

                    <div class="col-span-2 lg:col-span-1 rounded-lg">
                        <input type="text" class="border-solid border-gray-400 border-2 p-3 md:text-xl w-full rounded-lg" placeholder="Email" name="email" value={email} onChange={handleChange}/>
                    </div>

                    <div className="col-span-2">
                        <textarea cols="30" rows="8" class="border-solid border-gray-400 border-2 p-3 md:text-xl w-full rounded-lg" placeholder="Mensaje" name="message" value={message} onChange={handleChange}></textarea>
                    </div>

                    <div className="col-span-2 text-right" type="submit" value="send message">
                    <button className="py-3 px-6 bg-blue-500 text-white font-bold w-full sm:w-32 rounded-md">
                        Enviar
                    </button>
                    </div>
                </form>
            </div>
        </div>
     );
}
 
export default Form;