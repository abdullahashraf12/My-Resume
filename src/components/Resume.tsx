import React from 'react';
import Header from './Header';
import Education from './Education';
import Experience from './Experience';
import Projects from './Projects';
import Skills from './Skills';

const Resume = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="px-8 py-6">
          <Header />
          <Education />
          <Experience />
          <Projects />
          <Skills />
        </div>
      </div>
    </div>
  );
};

export default Resume;