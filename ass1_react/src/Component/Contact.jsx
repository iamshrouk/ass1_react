import React from "react";
// import "./Contact.css";
import './Contact.css';

export default function Contact() {
  return (
    <section className="contact-section py-5">
      <div className="container">

     
        <h2 className="text-center text-uppercase fw-bold">Contact Section</h2>

        <div className="divider d-flex justify-content-center align-items-center mb-5">
          <div className="line me-3"></div>
          <div className="star">★</div>
          <div className="line ms-3"></div>
        </div>

     
        <div className="row justify-content-center">
          <div className="col-md-8">

            <input
              type="text"
              placeholder="userName"
              className="form-control mb-4 py-3"
            />

            <input
              type="number"
              placeholder="userAge"
              className="form-control mb-4 py-3"
            />

            <input
              type="email"
              placeholder="userEmail"
              className="form-control mb-4 py-3"
            />

            <input
              type="password"
              placeholder="userPassword"
              className="form-control mb-4 py-3"
            />

            <button className="btn btn-success mt-3 px-4 py-2">
              Send Message
            </button>

          </div>
        </div>
      </div>
    </section>
  );
}
