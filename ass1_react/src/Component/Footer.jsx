export default function Footer() {
  return (
    <footer className="text-white text-center py-5" style={{ background: "#2c3e50" }}>
      <div className="container">
        <div className="row gy-4">

          <div className="col-md-4">
            <h4 className="fw-bold">LOCATION</h4>
            <p className="mt-2">2215 John Daniel Drive<br />Clark, MO 65243</p>
          </div>

          <div className="col-md-4">
            <h4 className="fw-bold">AROUND THE WEB</h4>
            <div className="d-flex justify-content-center gap-3 mt-3">
              <i className="fab fa-facebook fa-2x"></i>
              <i className="fab fa-twitter fa-2x"></i>
              <i className="fab fa-linkedin fa-2x"></i>
              <i className="fas fa-globe fa-2x"></i>
            </div>
          </div>

          <div className="col-md-4">
            <h4 className="fw-bold">ABOUT FREELANCER</h4>
            <p className="mt-2">
              Freelance is a free to use, licensed Bootstrap theme.
            </p>
          </div>

        </div>

        <p className="mt-4 pt-3 border-top">
          Copyright © Your Website 2024
        </p>
      </div>
    </footer>
  );
}
