import { useEffect, useState } from "react";
import "./Portfolio.css";

export default function Portfolio() {
  const [items, setItems] = useState([]);

useEffect(() => {
fetch("/ass1_react/portfolioData.json")
  .then((res) => res.json())
  .then((data) => setItems(data))
  .catch((err) => console.log(err));
},[]);


  return (
    <div className="container py-5">
      <div className="row g-4">
        {items.map((item) => (
          <div className="col-md-4" key={item.id}>
            <div className="portfolio-item position-relative">
              <img
                src={item.img}
                className="w-100 rounded"
                alt="portfolio"
              />

              <div className="overlay d-flex justify-content-center align-items-center">
                <i className="plus">+</i>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
