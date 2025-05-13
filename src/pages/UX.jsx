// UX.jsx
import React from 'react';
import slides from '../../data/Oceania-Prototype.json';
import slides2 from '../../data/Oceania-Process.json';
import slides3 from '../../data/Framework.json';
import MySlider from '../components/MySlider1';
import { useEffect, useState } from "react";

const UX = () => {
  // Filter slides by category "uxp"
  const filteredSlides = slides.filter(item => item.category === 'Oceania-Prototype-Data');
  const filteredSlides2 = slides2.filter(item => item.category === 'Oceania-Process-Data');
  const filteredSlides3 = slides3.filter(item => item.category === 'Framework');
  const text = "Accessible Document Specialist";
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setDisplayedText((prev) => prev + text[index]);
      index++;
      if (index === text.length) clearInterval(interval);
    }, 80);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="Main-wrapper">
      {/* ============ Introduction ============ */}
      <section className="redbox">
        <h2 className="redbox-heading">
          <span>USER EXPERIENCE AND USABILITY</span>
        </h2>
        <p className="redbox-paragraph">
          UX design is vital for creating user-friendly, intuitive experiences that meet user needs, ensuring satisfaction and success. I meticulously follow all necessary steps to achieve the goal of making a beautiful, usable product
        </p>
      </section>

      {/* ============ slider 1 ============ */}
      <section className="slider-section">
        <div className="project-intro">
          <h2>A Journey Toward Understanding the User</h2>
          <p className="gradient-text2">
            The UX process starts with creating personas and brainstorming ideas, followed by developing user stories and wireframing to ensure a seamless and engaging user experience. This approach helps me craft designs that are both user-centered and functional.
          </p>
        </div>
        <MySlider slides={filteredSlides2} customWidth="wide"/>
      </section>

         {/* ============ slider 2 ============ */}
         <section className="slider-section">
        <div className="project-intro">
          <h2>Prototyping</h2>
          <p className="gradient-text2">
          Prototyping is the result of my user research journey, bringing everything I’ve learned about the persona’s behavior into one place to visualize the experience and show how my app will function on the web, giving me a chance to make a few small adjustments.

          </p>
        </div>
        <MySlider slides={filteredSlides} customWidth="wide" />
      </section>
   

      {/* ============ slider 3 ============ */}
      <section className="slider-section">
        <div className="project-intro">
          <h2>UX Framework 101</h2>
          <p className="gradient-text2">
            This is my UX Framework 101, built on years of visual design experience. It outlines all the key steps and elements needed to deliver a well-crafted, user-focused product.
          </p>
        </div>
        <MySlider slides={filteredSlides3} customWidth="wide" />
      </section>
    </div>
  );
};

export default UX;