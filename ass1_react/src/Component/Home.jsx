
import "./Home.css";
import avatar from "../assets/avataaars.svg";


export default function Home() {
  return (
    <section className="home-section d-flex flex-column justify-content-center align-items-center text-white">
      
      <img src={avatar} className="rounded-circle mb-4" width="180" />

      <h1 className="fw-bold display-5">START FRAMEWORK</h1>

      <div className="d-flex align-items-center my-3">
        <div className="line"></div>
        <i className="fa-solid fa-star mx-3 fs-3"></i>
        <div className="line"></div>
      </div>

      <p className="fs-5">Graphic Artist – Web Designer – Illustrator</p>

    </section>
  );
}
