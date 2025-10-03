import React from 'react';
import About from '../components/About/About';
import Experience from '../components/Experience/Experience';
import Education from '../components/Education/Education';

const AboutPage: React.FC = () => {
  return (
    <div className="page">
      <About />
      <Experience />
      <Education />
    </div>
  );
};

export default AboutPage;