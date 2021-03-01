import React from 'react';
import * as emailjs from 'emailjs-com';
import Swal from 'sweetalert2';


class Form extends React.PureComponent {
    
    constructor(props) {
        super(props);
        this.state = {
          name: '',
          email: '',
          message: ''
        };
    
        this.handleSubmit = this.handleSubmit.bind(this);
        this.resetForm = this.resetForm.bind(this);
        this.handleChange = this.handleChange.bind(this);
      }
    
      handleSubmit(event) {
        event.preventDefault();
    
        const { name, email,  message } = this.state;
    
        if(name==='' || email==='' || message ===''  ) { 
    
            const errore = (true);
    
            const Toast = Swal.mixin({
                toast: true,
                position: 'top-end',
                showConfirmButton: false,
                timer: 3000,
                timerProgressBar: true,
                didOpen: (toast) => {
                  toast.addEventListener('mouseenter', Swal.stopTimer)
                  toast.addEventListener('mouseleave', Swal.resumeTimer)
                }
              })
              
            Toast.fire({
       
                icon: 'error',
                title: 'complete todos los campos' 
              })
    
        } else {
    
        const templateParams = {
          from_name: name,
          from_email: email,
          to_name: '/*YOUR NAME OR COMPANY*/',
          message_html: message,
        };
    
        
    
        emailjs.sendForm('service_igde7xi', 'template_test', event.target,'user_DjxbpiGhrI5bsn5NN7Lm7')
        this.resetForm();
      ;
    
      const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener('mouseenter', Swal.stopTimer)
          toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
      })
      
    
      Toast.fire({
       
        icon: 'success',
        title: 'Gracias!! En breve responderemos' 
      })
        
        }
      }
      resetForm() {
        this.setState({
          name: '',
          email: '',
          message: ''
        });
      }
    
    
    
      handleChange(event) {
        this.setState({ [event.target.name]: event.target.value });
      }
    
    
      render() {
        const { name, email,message } = this.state;
    
    
    
    
    return ( 
        <section class="text-gray-600 body-font overflow-hidden bg-gray-200 md:bg-nos-eligieron bg-no-repeat bg-white" id="section5">
            <div class="container px-5 py-24 mx-auto">
                <div class="flex flex-col text-center w-full mb-12">
                <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Contacto</h1>
                <p class="lg:w-2/3 mx-auto leading-relaxed text-base">Envíanos un mensaje que te responderemos dentro de las 24 hs.</p>
                <div class="h-1 mx-auto bg-gradient-to-r from-purple-700 to-purple-500 w-24 mt-3 rounded mb-8" data-aos="fade-right"></div>
                </div>
                <div class="lg:w-1/2 md:w-2/3 mx-auto bg-white rounded-lg border shadow-md p-4 md:p-8">
                    <form
                        class="flex flex-wrap -m-2"
                        onSubmit={ this.handleSubmit }>
                        <div class="p-2 w-1/2">
                            <div class="relative">
                                <label for="name" class="leading-7 text-sm text-gray-600">Nombre</label>
                                <input
                                    type="text"
                                    name="name"
                                    value={name}
                                    noValidate
                                    onChange={this.handleChange}
                                    class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-400 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
                            </div>
                        </div>
                        <div class="p-2 w-1/2">
                            <div class="relative">
                                <label for="email" class="leading-7 text-sm text-gray-600">Email</label>
                                <input
                                    class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-400 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                                    type="email"
                                    name="email"
                                    value={email}
                                    noValidate
                                    onChange={this.handleChange}/>
                            </div>
                        </div>
                        <div class="p-2 w-full">
                            <div class="relative">
                                <label for="message" class="leading-7 text-sm text-gray-600">Mensaje</label>
                                <textarea
                                    class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-400 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                                    type="message"
                                    name="message"
                                    value={message}
                                    noValidate
                                    onChange={this.handleChange}
                                    ></textarea>
                            </div>
                        </div>
                        <div class="p-2 w-full">
                        <button
                        class="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg"
                        
                        >Enviar</button>
                        </div>
            
                    </form>
                </div>
            </div>
        </section>
     );
}
}

export default Form;