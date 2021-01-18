import React from 'react';

const Form = () => {
    return ( 
        
<div class="max-w-2xl bg-gray-200 py-10 px-5 m-auto w-full mt-10 rounded-lg">

<h1
			className="text-center text-4xl text-gray-700 font-bold leading-snug mb-6"
			>
			Contacto
		    </h1>

  <div class="grid grid-cols-2 gap-4 max-w-xl m-auto ">

    <div class="col-span-2 lg:col-span-1">
      <input type="text" class="border-solid border-gray-400 border-2 p-3 md:text-xl w-full rounded-lg" placeholder="Nombre"/>
    </div>

    <div class="col-span-2 lg:col-span-1 rounded-lg">
      <input type="text" class="border-solid border-gray-400 border-2 p-3 md:text-xl w-full rounded-lg" placeholder="Email"/>
    </div>

    <div class="col-span-2">
      <textarea cols="30" rows="8" class="border-solid border-gray-400 border-2 p-3 md:text-xl w-full rounded-lg" placeholder="Mensaje"></textarea>
    </div>

    <div class="col-span-2 text-right">
      <button class="py-3 px-6 bg-blue-500 text-white font-bold w-full sm:w-32 rounded-md">
        Enviar
      </button>
    </div>

  </div>
</div>
     );
}
 
export default Form;