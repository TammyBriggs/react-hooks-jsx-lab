import React from "react";
import { image } from "../data/data";

function About() {
  return (
    <div id="about">
      <h2>About Me</h2>
      <p>I am a Nigerian born Software developer residing in Nairobi, Kenya.</p>
      <img src= {image} alt="I made this"/>
    </div>
  ) 
}

export default About;
