
import React from "react";
import './About.css';

export default function About() {
  return (
    <section className="about-section text-white d-flex justify-content-center align-items-center">
      <div className="container text-center">
        <h2 className="text-uppercase fw-bold mb-3">About Component</h2>
        <div className="divider d-flex justify-content-center align-items-center mb-4">
          <div className="line me-3"></div>
          <div className="star">★</div>
          <div className="line ms-3"></div>
        </div>

        <div className="row justify-content-center">
          <div className="col-md-4">
            <p>
              Freelancer is a free Bootstrap theme created by Route.
              The download includes the complete source files including HTML,
              CSS, and JavaScript as well as optional SASS stylesheets for easy customization.
            </p>
          </div>

          <div className="col-md-4">
            <p>
              Freelancer is a free Bootstrap theme created by Route.
              The download includes the complete source files including HTML,
              CSS, and JavaScript as well as optional SASS stylesheets for easy customization.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
