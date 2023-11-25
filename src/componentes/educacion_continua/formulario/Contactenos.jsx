import React, { useState } from 'react';
import emailjs from '@emailjs/browser';


const ContactForm = () => {
  const initialFormData = {
    name: '',
    email: '',
    message: '',
  };

  const [formData, setFormData] = useState(initialFormData);
  const [successMessage, setSuccessMessage] = useState('');
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [formErrors, setFormErrors] = useState({
    name: '',
    email: '',
    message: '',
  });

  const validateForm = () => {
    let valid = true;
    const errors = {};

    // Validar el campo de nombre
    if (formData.name.trim() === '') {
      errors.name = 'Campo obligatorio';
      valid = false;
    }

    // Validar el campo de correo electrónico
    if (formData.email.trim() === '') {
      errors.email = 'Campo obligatorio';
      valid = false;
    }

    // Validar el campo de mensaje
    if (formData.message.trim() === '') {
      errors.message = 'Campo obligatorio';
      valid = false;
    }

    setFormErrors(errors);
    return valid;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    // Limpiar el mensaje de error cuando se cambia el contenido del campo
    setFormErrors({
      ...formErrors,
      [name]: '',
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      // Mostrar un mensaje de error general si el formulario no es válido
      console.error('El formulario contiene errores. No se puede enviar.');
      return;
    }

    const serviceId = 'service_45gdeks';
    const templateId = 'template_ufply3m';
    const userId = '6Ui2eEy2t3uvWSYgM';

    try {
      const response = await emailjs.sendForm(serviceId, templateId, e.target, userId);
      console.log('¡Formulario enviado con éxito!', response);

      // Limpiar los campos después de un envío exitoso
      setFormData(initialFormData);
      // Mostrar el mensaje de éxito
      setSuccessMessage('¡Pronto nos comunicaremos contigo!');
      setShowSuccessMessage(true);

      // Ocultar el mensaje después de unos segundos
      setTimeout(() => {
        setShowSuccessMessage(false);
      }, 5000);
    } catch (error) {
      console.error('Error al enviar el formulario:', error);
    }
  };

  return (
    <div className='form_econtinua'>
      <div className='tittle_form'>
        <h3>Contáctenos</h3>
      </div>


      
    <form onSubmit={handleSubmit} className="item_form">
      <div className="items_form">
    
      <label className='label_econtinua'>
        <input 
        type="text" 
        name="name" 
        value={formData.name} 
        onChange={handleChange}
        className='input_econtinua' 
        placeholder=" "
        required />
        <span className='span_form_econtinua'><i className="bi bi-person-badge-fill icon_form"></i> Ingresa tu nombre</span>
        {formErrors.name && <p className="error-message">{formErrors.name}</p>}
      </label>
      </div>

      
      <div className="items_form">
      
      <label className='label_econtinua'> 
        <input 
        type="email" 
        name="email" 
        value={formData.email} 
        onChange={handleChange} 
        className='input_econtinua' 
        placeholder=" "
        required  />
        <span className='span_form_econtinua'> <i className="bi bi-envelope-at-fill icon_form"></i> Correo electrónico</span>
        {formErrors.email && <p className="error-message">{formErrors.email}</p>}
      </label>
      </div>

      <div className="items_form">
     
        {/* <textarea name="message" value={formData.message} onChange={handleChange} /> */}
        <textarea  
        name='message' 
        value={formData.message} 
        onChange={handleChange} 
        className='input_texta_econtinua' 
        placeholder="Mensaje" 
        rows="5" 
        cols="40"
        required>
        </textarea>
        {formErrors.message && <p className="error-message">{formErrors.message}</p>}
      </div>
      <button type="submit" className='pago-btn-form' >Enviar</button>
    </form>

    {showSuccessMessage && (
        <div className='success-message'>
          <p>{successMessage}</p>
        </div>
      )}

    </div>
  );
};

export default ContactForm;
