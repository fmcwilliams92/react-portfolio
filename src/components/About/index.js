import React from 'react'
import coverImage from "../../assets/cover/cover-image.jpg";

function About() {

  return (
    <section className="my-5" >
      <h1 id="about">Who am I?</h1>
      <img src={coverImage} className="my-2" style={{ width: "100%" }} alt="cover" />
      <div className="my-2">
        <p>
          Hello, my name is Fred McWilliams, im a 29 year old up and coming web developer currently working
          as a systems specialist. For the past 5 months I have been studying the UT in the Full Stack Web
          Development boot camp, learning many things, with so much more to learn. My goal is to follow my dreams
          of becoming a web developer, learning new things every day and expanding on what ive already learned, and perfecting
          what I havnt. Please take the time to review my profile and reach out if you have any questions!
      </p>
      </div>
    </section>
  )
}

export default About
