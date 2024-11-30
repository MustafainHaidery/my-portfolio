"use client";
import React from 'react'
import Form from 'next/form'

const Contact = () => {
  const printData = (data: FormData) => {
    console.log(data);
  }
  return (
    <div id={"contact"} style={{ background: "#1a1a1a"}}>
      <h1>Contact Me!</h1>
      <Form action={printData}>
        <div className='input_area'>
          <div className="input">
            <label htmlFor="firstname">First Name</label>
            <input type="text" name='firstname' />
          </div>
          <div className="input">
            <label htmlFor="lastname">Last Name</label>
            <input type="text" name='lastname' />
          </div>
        </div>
        <div className='input_area'>
          <div className="input">
            <label htmlFor="email">Email</label>
            <input type="email" name='email' />
          </div>
          <div className="input">
            <label htmlFor="phone">Phone</label>
            <input type="text" name='phone' />
          </div>

        </div>
        <div className='msg_area'>
          <label htmlFor="message">Message</label>
          <textarea name="message" id="message"></textarea>
        </div>
        <div className='flex justify-center items-center'>
          <button className=' primary_btn_extra'>Send Message</button>
        </div>
      </Form>
    </div>
  )
}

export default Contact
