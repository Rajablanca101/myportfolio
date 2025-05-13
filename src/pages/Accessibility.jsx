import React from 'react';

import img1 from '/images/Accessibility/Accessibility1.png';
import img2 from '/images/Accessibility/Accessibility2.png';
import img3 from '/images/Accessibility/Accessibility3.png';
import img4 from '/images/Accessibility/Elephant.png';

const Accessibility = () => (
  <div className="Main-wrapper">
    {/* ==================== SECTION 1 ==================== */}
    <section className="feature-section-bottom">
    <div className="feature-content-bottom">
        <h2 >IT'S TIME TO ADDRESS THE ELEPHANT IN THE ROOM</h2>
        <p className='gradient-text2'>
        It’s time to address the elephant in the room—what’s often overlooked when trying to understand your audience: accessibility. Adding it isn’t just a bonus, it’s the next level in truly inclusive design.        </p>
      </div>
      <div className="feature-image">
        <img src={img4} alt="PAC 2024 compliance check" />
      </div>
    </section>

    {/* ==================== SECTION 2 ==================== */}
    <section className="redbox">
      <h2 className="redbox-heading">
        <span>Accessible Document Specialist</span>
      </h2>
      <p className="redbox-paragraph">
      As an Accessible Document Specialist, I ensure compliance with ADA, Section 508, and WCAG 2.2 by transforming documents into accessible formats for all users, including those using assistive technologies. Whether it’s Word, PowerPoint, or PDF, your documents are in safe hands here.

      </p>
    </section>

    {/* ==================== SECTION 3 ==================== */}
    <section className="dual-image-section">
      <div className="image-container-left">
        <img src={img1} alt="Left side visual" />
      </div>
      <div className="image-container-right">
        <img src={img2} alt="Right side visual" />
      </div>
    </section>

    {/* ==================== SECTION 4 ==================== */}
    <section className="feature-section-bottom ">
      <div className="feature-image-bottom">
        <img src={img3} alt="PAC 2024 compliance check" />
      </div>
      <div className="feature-content-bottom">
        <h2>telling is good, Showing is better</h2>
        <p className='gradient-text2'>
        I ensure documents meet WCAG 2.2 standards using PAC 2024, an advanced accessibility checker that identifies even the smallest issues. I also provide an Accessibility Certificate to confirm full compliance.      </p>
      </div>
    </section>
  </div>
);

export default Accessibility;