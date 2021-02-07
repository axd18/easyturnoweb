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
        <div className="bg-gray-200 py-20 px-5 pt-8">
            <h1
                className="text-center text-4xl text-gray-700 font-bold leading-snug" id="section5"
                >
                Contacto
            </h1>
            <div
                className="h-1 mx-auto bg-gradient-to-r from-purple-700 to-purple-500 w-24 mt-3 rounded"
            ></div>
            <div className="max-w-2xl bg-white py-10 px-5 m-auto w-full mt-10 rounded-lg">
                <form 
                    onSubmit={ this.handleSubmit }
                    className="grid grid-cols-2 gap-4 max-w-xl m-auto">
                    <div className="col-span-2 lg:col-span-1">
                    <label htmlFor="Nombre"></label>
                        <input
                        className="border-solid border-gray-400 border-2 p-3 md:text-xl w-full rounded-lg"
                        type="text"
                        placeholder="Nombre"
                        name="name"
                        value={name}
                        noValidate
                        onChange={this.handleChange}
                        />
                    </div>

                    <div class="col-span-2 lg:col-span-1 rounded-lg">
                    <label htmlFor="email"></label>
                        <input
                        className="border-solid border-gray-400 border-2 p-3 md:text-xl w-full rounded-lg "
                        placeholder="Email"
                        type="email"
                        name="email"
                        value={email}
                        noValidate
                        onChange={this.handleChange}
                        />
                    </div>

                    <div className="col-span-2">
                        <textarea
                        cols="30"
                        rows="8"
                        className="border-solid border-gray-400 border-2 p-3 md:text-xl w-full rounded-lg"
                        placeholder="message"
                        type="message"
                        name="message"
                        value={message}
                        noValidate
                        onChange={this.handleChange}>
                        </textarea>
                    </div>

                    <div className="col-span-2 text-right">
                    <button 
                    className="py-3 px-6 bg-blue-500 text-white font-bold w-full sm:w-32 rounded-md"
                    type="submit"> 
                        Enviar
                    </button>
                    </div>
                </form>
            </div>
        </div>
     );
}
}
export default Form;