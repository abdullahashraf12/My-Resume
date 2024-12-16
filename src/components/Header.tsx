import React from 'react';
import { Github, Linkedin, Mail, Phone } from 'lucide-react';

const Header = () => {
  return (
    <div className="text-center border-b pb-6">
      <h1 className="text-3xl font-bold text-gray-900">Abdullah Ashraf</h1>
      <p className="text-xl text-gray-600 mt-1">Software Engineer</p>
      <div className="flex justify-center space-x-4 mt-4">
        <a href="tel:+01110439598" className="flex items-center text-gray-600 hover:text-gray-900">
          <Phone className="h-4 w-4 mr-2" />
          +01110439598
        </a>
        <a href="mailto:abdullah.ashraf.abdelraouf@Gmail.com" className="flex items-center text-gray-600 hover:text-gray-900">
          <Mail className="h-4 w-4 mr-2" />
          Email
        </a>
        <a href="https://linkedin.com/in/abdullah-ashraf" className="flex items-center text-gray-600 hover:text-gray-900">
          <Linkedin className="h-4 w-4 mr-2" />
          LinkedIn
        </a>
        <a href="https://github.com/abdullahashraf12" className="flex items-center text-gray-600 hover:text-gray-900">
          <Github className="h-4 w-4 mr-2" />
          GitHub
        </a>
      </div>
    </div>
  );
};

export default Header;