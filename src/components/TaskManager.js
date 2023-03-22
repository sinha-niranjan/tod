import React from 'react'

function TaskManager() {
  return (
    <div>
      <div class="jumbotron jumbotron-fluid">
        <div class="container">
            <div class="row">
                <div class="col-12 col-sm-8 col-md-6 col-lg-4 offset-sm-2 offset-md-3 offset-lg-4">
                    <h1 class="mb-3 text-center">Create a new Task</h1>
                    <p class="lead">
                        It's free and so effective for your daily life use.
                    </p>
                    <form class="mb-3">
                        <div class="form-group">
                            <div class="form-group">
                                <label for="taskName">Task name:</label>
                                <input type="text" class="form-control" placeholder="Task name" id="taskName"
                                    required />
                            </div>
                        </div>
                        <div class="row">
                            <div class="form-group col-12 col-sm-6">
                                <label for="firstName">First name:</label>
                                <input type="text" class="form-control" placeholder="First name" id="firstName"
                                    required />
                            </div>
                            <div class="form-group col-12 col-sm-6">
                                <label for="lastName">Last name:</label>
                                <input type="text" class="form-control" placeholder="Last name" id="lastName"
                                    required />
                            </div>
                        </div>
                        <div class="form-group">
                            <label for="email">Email:</label>
                            <input type="email" class="form-control" placeholder="example@example.com" id="email"
                                required />
                        </div>
                        <div class="mb-3">
                            <label for="exampleFormControlTextarea1" class="form-label">Description of task : </label>
                            <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                        </div>
                        {/* <!-- <div class="form-group">
                            <label for="password">Password:</label>
                            <input type="password" class="form-control" id="password" required />
                        </div> --> */}

                        <label>Priority : </label>
                        <div class="from-group">
                            <label for="Priority" class="sr-only">Priority</label>
                            <select class="form-control" id="Priority">
                                <option value="">Priority</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                                <option value="6">6</option>
                                <option value="7">7</option>
                                <option value="8">8</option>
                                <option value="9">9</option>
                                <option value="10">10</option>
                                <option value="11">11</option>
                                <option value="12">12</option>
                                <option value="13">13</option>
                                <option value="14">14</option>
                                <option value="15">15</option>
                                <option value="16">16</option>
                                <option value="17">17</option>
                                <option value="18">18</option>
                                <option value="19">19</option>
                                <option value="20">20</option>

                            </select>
                        </div>

                        <label>Due date:</label>
                        <div class="row no-gutters">
                            <div class="form-group col-4">
                                <label for="birthdayDay" class="sr-only">Due day</label>
                                <select class="form-control" id="birthdayDay">
                                    <option value="">Day</option>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                    <option value="6">6</option>
                                    <option value="7">7</option>
                                    <option value="8">8</option>
                                    <option value="9">9</option>
                                    <option value="10">10</option>
                                    <option value="11">11</option>
                                    <option value="12">12</option>
                                    <option value="13">13</option>
                                    <option value="14">14</option>
                                    <option value="15">15</option>
                                    <option value="16">16</option>
                                    <option value="17">17</option>
                                    <option value="18">18</option>
                                    <option value="19">19</option>
                                    <option value="20">20</option>
                                    <option value="21">21</option>
                                    <option value="22">22</option>
                                    <option value="23">23</option>
                                    <option value="24">24</option>
                                    <option value="25">25</option>
                                    <option value="26">26</option>
                                    <option value="27">27</option>
                                    <option value="28">28</option>
                                    <option value="29">29</option>
                                    <option value="30">30</option>
                                    <option value="31">31</option>
                                </select>
                            </div>
                            <div class="form-group col-4">
                                <label for="birthdayMonth" class="sr-only">Due month</label>
                                <select class="form-control" id="birthdayMonth">
                                    <option value="">Month</option>
                                    <option value="january">January</option>
                                    <option value="february">February</option>
                                    <option value="march">March</option>
                                    <option value="april">April</option>
                                    <option value="may">May</option>
                                    <option value="june">June</option>
                                    <option value="july">July</option>
                                    <option value="august">August</option>
                                    <option value="september">September</option>
                                    <option value="october">October</option>
                                    <option value="november">November</option>
                                    <option value="december">December</option>
                                </select>
                            </div>
                            <div class="form-group col-4">
                                <label for="birthdayYear" class="sr-only">Due year</label>
                                <select class="form-control" id="birthdayYear">

                                    <option value="2020">2020</option>
                                    <option value="2021">2021</option>
                                    <option value="2022">2022</option>
                                    <option value="2023">2023</option>
                                    <option value="2024">2024</option>
                                    <option value="2025">2025</option>
                                    <option value="2026">2026</option>
                                    <option value="2027">2027</option>
                                    <option value="2028">2028</option>
                                    <option value="2029">2029</option>
                                    <option value="2030">2030</option>
                                    <option value="2031">2031</option>
                                    <option value="2032">2032</option>
                                    <option value="2033">2033</option>
                                    <option value="2034">2034</option>
                                    <option value="2035">2035</option>
                                    <option value="2036">2036</option>
                                    <option value="2037">2037</option>
                                    <option value="2038">2038</option>
                                    <option value="2039">2039</option>
                                    <option value="2040">2040</option>
                                    <option value="2041">2041</option>
                                    <option value="2042">2042</option>
                                    <option value="2043">2043</option>
                                    <option value="2044">2044</option>
                                    <option value="2045">2045</option>
                                    <option value="2046">2046</option>
                                    <option value="2047">2047</option>
                                    <option value="2048">2048</option>
                                    <option value="2049">2049</option>
                                    <option value="2050">2050</option>

                                </select>
                            </div>
                        </div>
                        <div class="form-check form-check-inline">
                            <label class="form-check-label">
                                <input type="radio" name="exampleRadios" id="exampleRadios1" class="form-check-input"
                                    value="optionOne" checked />
                                Man
                            </label>
                        </div>
                        <div class="form-check form-check-inline">
                            <label class="form-check-label">
                                <input type="radio" name="exampleRadios" id="exampleRadios2" class="form-check-input"
                                    value="optionTwo" />
                                Woman
                            </label>
                        </div>
                        <button type="submit" class="btn btn-primary btn-block mb-3 my-2">
                            Submit
                        </button>


                    </form>
                </div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default TaskManager
