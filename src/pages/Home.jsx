import React from 'react';
import logos from '/data/logos.json'; // Make sure this path is accurate
import imgTypography from '/public/images/HOME/Typography.png';

const categories = [
  { name: 'Print', className: 'print' },
  { name: 'Branding', className: 'branding' },
  { name: 'Visual Data', className: 'visual-data' },
  { name: 'UX/UI DESIGN', className: 'ux-ui' },
  { name: 'Accessibility', className: 'accessibility' },
  { name: 'Web Design', className: 'web-design' },
  { name: 'Animation', className: 'animation' },
];

const Home = ({ onSelectItem, items }) => {
  const logoItems = logos.filter(item => item.category === 'logo');

  return (
    <div className="Main-wrapper">

      {/* ============ Hero Section ============ */}
      <section className="hero-banner">
        <div className="hero-content"></div>
      </section>

      {/* ============ Category Picker ============ */}
      <section className="category-nav">
        {categories.map(cat => (
          <div
            key={cat.name}
            className={`category-item category-${cat.className.toLowerCase()}`}
          >
            {cat.name}
          </div>
        ))}
      </section>

      {/* ============ Typography Intro ============ */}
      <section className="typography">
        <h2>World of Creativity!</h2>
        <p className="gradient-text2">
          Welcome to my digital domain! I'm Mourad Saleh, a visual designer with a Bachelor's degree from Harvard Extension School. With a background in graphic design and a flair for adapting to diverse business needs, I bring a wealth of experience to the digital world.
        </p>
      </section>

      <section className="banner-section">
        <img
          src={imgTypography}
          alt="Typography skills"
          className="full-width-image"
        />
 
     
   
      </section>

      {/* ============ Skills Section ============ */}
      <section className="redbox">
        <h2 className="redbox-heading">
          <span>Diverse Skills, One Vision</span>
        </h2>
        <p className="redbox-paragraph">
        I’m a creative visual designer with a versatile toolkit, dedicated to delivering an appealing and impactful look for your business. Whether wearing the hat of a web designer, print designer, video producer, or accessibility remediation specialist, I bring a unique blend of creativity and precision to every project to ensure your message is not only seen—but truly experienced.

        </p>
      </section>

      <section className="skills" aria-label="Design skills visual"></section>

      {/* ============ Video Section ============ */}
      <section className="video-highlight">
        <div className="title-container">
          <h2 className="">Educational Videos</h2>
        </div>
        <div className="content-container">
          <p className="gradient-tex2">
          In today’s learning, educational videos, notably explainers, distill complex concepts into engaging visuals and narration, making learning accessible and enjoyable while enhancing comprehension and retention. As a professional, my role is to ensure that your ideas reach the audience in an educational format.
          </p>
        </div>
      </section>

      <section>
        <div className="video-container">
          <iframe
            src="https://www.youtube.com/embed/kzL-nXvusYI"
            title="YouTube video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </section>
    </div>
  );
};

export default Home;