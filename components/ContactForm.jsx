"use client"
import React, { useRef } from "react"
import emailjs from "@emailjs/browser"

function ContactForm() {
  const form = useRef()

  const sendEmail = e => {
    e.preventDefault()

    emailjs
      .sendForm(process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID.toString(), process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID.toString(), form.current, {
        publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY.toString(),
        from_name: e.target.user_name.value,
        to_name: "Katie @ Ciridian",
        message: e.target.user_email.value + " has requested to be contacted.",
        reply_to: e.target.user_email.value
      })
      .then(
        () => {
          console.log("Success")
        },
        error => {
          console.log("FAILED...", error)
        }
      )
  }

  return (
    <>
      <form className="text-center" ref={form} onSubmit={sendEmail}>
        <div className="form-floating mb-3">
          <input type="text" id="name" name="user_name" className="form-control bg-dark border-0 text-white" placeholder="John Smith" required />
          <label htmlFor="name">First Name</label>
        </div>
        <div className="form-floating mb-3">
          <input type="email" id="email" name="user_email" className="form-control bg-dark border-0 text-white" placeholder="name@example.com" required />
          <label htmlFor="email">Email Address</label>
        </div>
        <button type="submit" className="btn btn-dark mb-3 px-5">
          Submit
        </button>
      </form>
    </>
  )
}

export default ContactForm
