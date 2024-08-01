import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import '../index.css'

type FormData = {
  name: string;
  email: string;
  message: string;
};

const ContactForm: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    console.log(data);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="success-container">
        <i className="fa fa-check-circle success-icon"></i>
        <h2>Thank You!</h2>
        <p>Your message has been successfully sent. We will get back to you soon.</p>
        <a href="#" className="back-link" onClick={() => setSubmitted(false)}>Go Back</a>
      </div>
    );
  }

  return (
    <div className="form-container">
      <h2>Contact Us</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="name">
          <i className="fa fa-user"></i> Name
        </label>
        <input id="name" type="text" {...register('name', { required: 'Name is required',  pattern: {
              value: /^[A-Za-z\s]+$/,
              message: 'Name can only contain letters and spaces'
            } })} />
        {errors.name && <p style={{ color: 'red', fontSize: '0.9em', marginTop: '-15px', marginBottom: '15px' }}>{errors.name.message}</p>}

        <label htmlFor="email">
          <i className="fa fa-envelope"></i> Email
        </label>
        <input
          id="email"
          type="email"
          {...register('email', {
            required: 'Email is required',
            pattern: {
              value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
              message: 'Invalid email address',
            },
          })}
        />
        {errors.email && <p style={{ color: 'red', fontSize: '0.9em', marginTop: '-15px', marginBottom: '15px' }}>{errors.email.message}</p>}

        <label htmlFor="message">
          <i className="fa fa-comment"></i> Message
        </label>
        <textarea id="message" {...register('message', { required: 'Message is required' })} />
        {errors.message && <p style={{ color: 'red', fontSize: '0.9em', marginTop: '-15px', marginBottom: '15px' }}>{errors.message.message}</p>}

        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default ContactForm;
