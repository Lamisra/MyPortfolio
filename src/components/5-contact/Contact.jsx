import React from 'react';
import './contact.css';
import { useForm, ValidationError } from '@formspree/react';

const Contact = () => {
  const [state, handleSubmit] = useForm("xeqyvpgq");


  return (
    <div className='contact' id='contact'>
      <div className='contactContainer'>

        <div className='leftSide'>
          <h2 className='xl'>Contact</h2>
          <p className='p'>
            I would love to hear about your project
            and how i could help. Please fill in the
            form, and i'll get back tou you as soon as possible.
          </p>
        </div>

        <div className='rightSide'>
          <form onSubmit={handleSubmit} >

            <input
              autoComplete='off'
              type='text'
              placeholder='NAME'
              name="user_name"
              required
            />

            <input
              autoComplete='off'
              type='email'
              placeholder='EMAIL'
              name="user_email"
              required
            />

            <ValidationError
              prefix="Email"
              field="user_email"
              errors={state.errors}
            />

            <textarea
              name="message"
              placeholder='MESSAGE'
              cols="30"
              rows="4"
              required
            />

            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />

            <button type='submit' disabled={state.submitting}>SEND MESSAGE</button>

            {state.succeeded && (
              <p>Your message has been sent successfully &#128076;</p>
            )}


          </form>
        </div>
      </div>


    </div>

  )
}

export default Contact;