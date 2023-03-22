import React from "react";

import personalImg from "../img/personal.jpg"
import professionalImg from "../img/professional.jpg"
import vacationImg from "../img/vacation.jpg"

function Carousel() {
  return (
    <div
      id="carouselExampleCaptions"
      className="carousel slide"
      style={{margin :" 0 0 40px 0"}}
    >
      <div className="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="0"
          className="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
      </div>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img
            // src="http://source.unsplash.com/1600x500/?personal ,family, eating , resututrant , visiting ,friends,family"
            src={personalImg}
            className="d-block w-100"
            alt=""
          />
          <div className="carousel-caption d-none d-md-block text-dark">
            <h5>PERSONAL TASKS</h5>
            <p>
              Personal work management is essential in daily life as it leads to
              increased productivity, better time management, reduced stress,
              and improved work-life balance.
            </p>
          </div>
        </div>
        <div className="carousel-item">
          <img
            src={professionalImg}
            className="d-block w-100"
            alt="..."
          />
          <div className="carousel-caption d-none d-md-block text-dark">
            <h5>PROFESSIONAL TASKS</h5>
            <p>
              Professional tasks are important because they contribute to the
              successful execution of job responsibilities and help individuals
              develop skills and expertise in their chosen field.
            </p>
          </div>
        </div>
        <div className="carousel-item">
          <img
            src={vacationImg}
            className="d-block w-100"
            alt="..."
          />
          <div className="carousel-caption d-none d-md-block text-dark">
            <h5>VACATION </h5>
            <p>
              Taking a vacation is important for both mental and physical
              well-being, as it provides an opportunity to rest, recharge, and
              engage in activities that bring joy and relaxation. It also helps
              reduce stress, improve productivity, and foster better
              relationships with family and friends.{" "}
            </p>
          </div>
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}

export default Carousel;
