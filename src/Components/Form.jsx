import React, { useState } from 'react';
import FormCSS from '../Components/Form.module.css'

function Form() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [errors, setErrors] = useState({});
  const [formData, setFormData] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  
    const errors = {};
    if (name.trim() === '' || name.length < 5) {
      errors.name = 'El campo no puede estar vacio o contener menos de 5 caracteres';
    }
  
    if (email.trim() === '') {
      errors.email = 'El campo no puede estar vacio, ingrese su e-mail por favor';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errors.email = 'Ingrese un e-mail valido';
    }
    setErrors(errors);
  
    if (Object.keys(errors).length === 0) {
      const data = { name, email };
      setFormData(data);
      setSuccessMessage(`Gracias ${name}, te contactaremos cuanto antes vía mail`);
      setName('');
      setEmail('');
    } else {
      setSuccessMessage(null);
    }
  };
  

  return (
    <form className={FormCSS.form} onSubmit={handleSubmit} > <h1>¿Desea solicitar nuestros servicios?</h1>
      <label  htmlFor="name">Name:</label>
      <input className={FormCSS.input}
        type="text"
        id="name"
        value={name}
        onChange={handleNameChange}
        // className={errors.name ? 'error' : ''}
      />
      {errors.name && <span className="error-message">{errors.name}</span>}

      <label   htmlFor="email">Email:</label>
      <input className={FormCSS.input}
        type="email"
        id="email"
        value={email}
        onChange={handleEmailChange}
        // className={errors.email ? 'error' : ''}
      />
      {errors.email && <span className="error-message">{errors.email}</span>}

      <button className={FormCSS.btn} type="submit">Submit</button>
      <div className="success-message">{successMessage}</div>

    </form>

  );
}

export default Form;
