import React from "react";
import PersonalCardImg from "../img/personalCard.jpg"
import ProfessionalCardImg from "../img/professionalCard.jpg"
import ShoppingCardImg from "../img/shoppingCard.jpg"
import VacationCardImg from "../img/vacationCard.jpg"
function Cards() {
  return (
    <div>
      <div class="row featurette mx-4">
        <div class="col-md-7">
          <a href="/">
            <h2 class="featurette-heading fw-normal lh-1">
              {" "}
              TAST MANAGER FOR PERSONAL WORK
            </h2>
          </a>
          <p class="text-muted">
            Personal work management is important in daily life as it helps
            individuals effectively plan, prioritize, and execute tasks and
            responsibilities. Good work management leads to increased
            productivity, better time management, reduced stress, and improved
            work-life balance. By managing tasks effectively, individuals can
            avoid feeling overwhelmed and reduce the likelihood of
            stress-related health problems. Personal work management also helps
            individuals to set realistic goals, create action plans, and track
            progress, increasing the likelihood of achieving personal and
            professional aspirations. In short, personal work management is a
            vital aspect of daily life that benefits both individuals and their
            overall well-being.
          </p>
          <a href="c.html">
            <button type="button" class="btn btn-outline-success btn-lg">
              ADD WORKS RELATED TO YOUR SHOPPINGS --&gt;&gt;{" "}
            </button>
          </a>
        </div>
        <div class="col-md-5">
          <a href="todo.html">
            <img src={PersonalCardImg} alt="logo" class="img-fluid" />
          </a>
        </div>

        {/* <!-- 2nd card start hai --> */}

        <hr class="featurette-divider py-4 my-4" />
        <div class="col-md-7 order-md-2">
          <a href="coa.html">
            <h2 class="featurette-heading fw-normal lh-1">
              TASK MANAGER FOR PROFESSIONAL WORK
            </h2>
          </a>
          <p class="lead">
            Professional work management is crucial in daily life as it helps
            individuals prioritize tasks, manage time efficiently, improve
            communication and collaboration, and make informed decisions. Good
            work management leads to increased productivity, which benefits both
            individuals and organizations. It also helps to maintain a positive
            work environment and achieve organizational goals. Effective work
            management is essential for success in any professional setting.
          </p>
          <a href="coa.html">
            <button type="button" class="btn btn-outline-success btn-lg">
              RELATED TO YOUR PROFESSIONAL WORK --&gt;&gt;{" "}
            </button>
          </a>
        </div>
        <div class="col-md-5 order-md-1">
          <a href="todo.html">
            <img src={ProfessionalCardImg} alt="logo" class="img-fluid" />
          </a>
        </div>
      </div>
      {/* <!-- 2nd item start hai --> */}
      <hr class="featurette-divider py-4 my-4" />

      {/* <!-- 3rd card start hai --> */}
      <div class="row featurette mx-4">
        <div class="col-md-7">
          <a href="web.html">
            <h2 class="featurette-heading fw-normal lh-1">
              TAST MANAGER FOR SHOPPINGS
            </h2>
          </a>
          <p class="text-muted">
            Shopping is an essential part of daily life as it helps us acquire
            the basic necessities we need to survive, such as food, clothing,
            and shelter. It also enhances our quality of life by allowing us to
            purchase items that make our lives more comfortable and enjoyable.
            Additionally, shopping supports the economy by creating jobs and
            generating revenue for businesses and governments. It also promotes
            social interaction, enabling us to interact with others and make new
            connections. Finally, shopping can provide a sense of satisfaction
            and accomplishment, boosting our self-esteem. Overall, shopping
            plays a crucial role in our daily lives and contributes to our
            physical, social, and emotional well-being.
          </p>
          <a href="web.html">
            <button type="button" class="btn btn-outline-success btn-lg">
              ADD WORKS RELATED TO SHOPPINGS --&gt;&gt;
            </button>
          </a>
        </div>
        <div class="col-md-5">
          <a href="todo.html">
            <img src={ShoppingCardImg} alt="logo" class="img-fluid" />
          </a>
        </div>

        {/* <!-- 4th card start hai --> */}

        <hr class="featurette-divider py-4 my-4" />
        <div class="col-md-7 order-md-2">
          <a href="de&m.html">
            <h2 class="featurette-heading fw-normal lh-1">
              TASK MANAGER FOR VACATION
            </h2>
          </a>
          <p class="lead">
            Taking vacations is essential for our physical, mental, and
            emotional well-being. Vacations provide an opportunity to rest and
            recharge, reducing stress and improving overall health. They also
            promote creativity and help us to reconnect with our families and
            friends. Furthermore, vacations allow us to experience new cultures,
            try new activities, and expand our horizons. They help us to gain
            new perspectives and insights, and increase our appreciation for
            life. Finally, vacations are crucial for achieving a work-life
            balance and avoiding burnout. By taking time away from work and
            daily responsibilities, we can return to our daily lives with
            renewed energy, motivation, and focus. Overall, vacations play an
            important role in maintaining a healthy and fulfilling life.
          </p>
          <a href="de&m.html">
            <button type="button" class="btn btn-outline-success btn-lg">
              ADD WORKS RELATED TO YOUR VACATIONS --&gt;&gt;{" "}
            </button>
          </a>
        </div>
        <div class="col-md-5 order-md-1">
          <a href="todo.html"><img src={VacationCardImg}
                        alt="logo" class="img-fluid" /></a>
        </div>
      </div>
    </div>
  );
}

export default Cards;
