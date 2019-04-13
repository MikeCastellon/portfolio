import React, { Component } from 'react';
import { Link } from 'react-router-dom';
export default class About extends Component {
  render() {
    return (
      <React.Fragment>
      {/* About Section
        ================================================== */}
      <section id="about">
        <div className="row">
          <div className="three columns">
            <img className="profile-pic" src="images/profilepic.png" alt="" />
          </div>
          <div className="nine columns main-col">
            <h2>About Me</h2>
            <p>My name is Michael and I am a 29 year old Miami, FL native and as long as I can remember I have been in love with technology. From the time my family got our first computer when I was 8 years old, to making angelfire pages for my friends and I in middle school, and learning  HTML, and CSS in high school I have always been fascinated with how technology worked. All my life I have dreamed about becoming a web developer and now after finishing a very intense 10 week computer programming bootcamp, and spending countless hours self teaching these programming languages I can finally call my self a Web developer. Even though some of my past experience as a Military Police Officer in the US Army for 8 years, and most  recently a Comcast technician do not realate to web development directly they have taught me many valuable skills like: interpersonal communication skills, flexibility, disclipline, teamwork, being accountable, integrity, planning, problem solving skills, and working under stressful conditions. I feel like all those skills combined with my newfound knowledge of JavaScript, Ruby on Rails, SQL, and React I will be able to build the project that you envision.
            </p>
            <div className="row">
              <div className="columns contact-details">
                <h2>Contact Details</h2>
                <p className="address">
                  <span>Michael Castellon</span><br />
                  <span>Mike.Castellon@icloud.com</span>
                </p>
              </div>
              <div className="columns download">
                <p>
                  <a href="/mike-castellon.pdf" download className="button"><i className="fa fa-download" />Download Resume</a>

                </p>
              </div>
            </div> {/* end row */}
          </div> {/* end .main-col */}
        </div>
      </section> {/* About Section End*/}

      </React.Fragment>
);
}
}
