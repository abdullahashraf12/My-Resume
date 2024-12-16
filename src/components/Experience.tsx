import React from 'react';

const Experience = () => {
  return (
    <section className="mt-6">
      <h2 className="text-xl font-bold text-gray-900 border-b pb-2">EXPERIENCE</h2>
      <div className="space-y-6 mt-4">
        <div>
          <h3 className="font-semibold">Web Developer (.Net & Django)</h3>
          <p className="text-gray-600">Nile University (part time freelance)</p>
          <p className="text-gray-500">Sep 2022 – Sep 2024</p>
          <ul className="list-disc ml-5 mt-2 text-gray-600">
            <li>Implemented and maintained website functionalities</li>
            <li>Handled API integration and management</li>
            <li>Applied OOP concepts and solved problems using design pattern principles</li>
            <li>Integrated data storage solutions and various third-party APIs</li>
          </ul>
        </div>
        
        <div>
          <h3 className="font-semibold">Web Developer (.Net & Django)</h3>
          <p className="text-gray-600">Al-Ahram Canadian University</p>
          <p className="text-gray-500">Sep 2019 – Sep 2022</p>
          <ul className="list-disc ml-5 mt-2 text-gray-600">
            <li>Design, develop, and maintain web applications and user interfaces</li>
            <li>Collaborate with designers and other developers</li>
            <li>Write clean, well-documented, and efficient code</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Experience;