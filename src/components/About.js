import React from 'react'
import BackgroundImage from "../img/background1.jpg";


function About() {
  return (
    <div
      style={{
        backgroundImage: `url(${BackgroundImage})`,
      }}
    >
      <div style={{ padding: "5% 10% 10% 10%" }}>
        <div
          style={{
            background: "transparent",
            backdropFilter: "blur(30px)",
            border:"2px solid rgba(255,255,255,0.5)",
            boxShadow: "10px 10px #dceae8",
            display: "flex",
            flexDirection: "column",
            padding:"2%",
          }}
        >
          <h1 className="mb-3  text-center">About us</h1>
          <p className="text-start fs-5 text-dark  ">
            Welcome to our todo website! We are a team of dedicated individuals
            who have created this platform to help people stay organized and
            manage their tasks efficiently. Our goal is to provide a simple and
            user-friendly interface that allows users to prioritize their daily
            tasks and get things done.
          </p>
          <br />
          <p className="text-start text-dark fs-5">
            We understand how overwhelming it can be to juggle multiple tasks
            and responsibilities, especially in today's fast-paced world. That's
            why we have created this website to help you keep track of your
            daily to-dos, appointments, deadlines, and more. Whether you're a
            student, a professional, a stay-at-home parent, or just someone who
            wants to stay organized, our website is perfect for you.
          </p>

          <p className="text-start text-dark fs-5">
            Our website offers a wide range of features that make it easy to
            manage your tasks. You can create multiple to-do lists, set
            reminders, and prioritize your tasks based on their importance. You
            can also categorize your tasks based on their type, such as work,
            personal, or errands. This makes it easier to focus on specific
            tasks and stay organized.
          </p>

          <p className="text-start text-dark fs-5">
            One of the unique features of our website is the ability to share
            your to-do lists with others. This is especially useful for teams or
            families who need to collaborate on tasks. You can invite others to
            join your list, assign tasks to specific people, and track progress
            in real-time. This makes it easy to stay on top of your tasks and
            ensure that everyone is working towards the same goal.
          </p>
          
          
        </div>
      </div>
    </div>
  );
}

export default About
