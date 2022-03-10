import React from 'react'
import emailjs from 'emailjs-com'

export default function Contact() {

    const handleSubmit = () => {
        function sendEmail(email) {
            email.preventDefault();

            emailjs.sendForm('text-utils-app', 'template_b25s40b', email.target, '9uOwv9h9GCWpJQr17').then(
                res => {
                    console.log(res)
                    alert("Message successfully sent")
                }
            ).catch(err => console.log(err))
        }
    }

    return (
    <>
    <div className="container" >
        <form>

            <div className="form-group my-2">
                <label htmlFor="exampleFormControlInput1"><b>Your Name</b></label>
                <input type="text" className="form-control" id="name" placeholder="Your full name" required />
            </div>

            <div className="form-group my-2 ">
                <label htmlFor="exampleFormControlInput1"><b>Your Email address</b></label>
                <input type="email" className="form-control" id="email" placeholder="name@example.com" required/>
            </div>

            <div className="form-group my-2">
                <label htmlFor="exampleFormControlTextarea1"><b>Your Message</b></label>
                <textarea className="form-control" id="message" rows="5" required/>
            </div>

            <button type="button" className="btn btn-outline-success my-2" onClick = {handleSubmit} >Submit</button>
        </form>
        
    </div>
    </>
    )
}