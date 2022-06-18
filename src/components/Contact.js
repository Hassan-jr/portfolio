import React, { useState } from 'react'
import "./Contact.css"
import emailjs from  'emailjs-com'
import Socials from './Socials'



function Contact() {
  const Result = () => {
    return (
      <p>Email Sent successfully. I will Contact You Soon.</p>
    )
  }
   const [success , setSuccess] = useState(false)
   function Handleclick (){
     setSuccess(false);
   }

  function Sendemail (e){
    e.preventDefault()
    emailjs.sendForm("service_apy8uk3","template_3pshzls" ,e.target,"Qs840L1BwZGTjBL76")
    .then(res=> {
      console.log(res);
    }).catch (err=> console.log (err))
    e.target.reset()
    setSuccess(true)
    }
  return (
    <div className='contact' id='contacts' >
     
        <h2>Contact Me</h2>
       
        <form className='form-continer' onSubmit={Sendemail} >

            <div className='form-inputs'>
               <input type="text" name='name' placeholder='Enter Your Name'/>
           </div>

        <div  className='form-inputs'>
          <input type="email" name='user_email' placeholder='Enter Your Email' />
        </div>

        <div  className='form-inputs'>
           <textarea name="message"  placeholder='Message'/>
        </div>

        <div className='success'>
          {success ? < Result/> : null}
        </div>

        <div>
         <button onClick={Handleclick} className='btn'>SEND</button>
        </div>

        <div>
        <Socials />
        </div>
       
        </form>


    </div>
  )
}

export default Contact;