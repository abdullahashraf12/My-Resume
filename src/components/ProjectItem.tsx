import React from 'react';

interface ProjectItemProps {
  title: string;
  technologies: string;
  bulletPoints: string[];
}

const ProjectItem = ({ title, technologies, bulletPoints }: ProjectItemProps) => {
  return (
    <div className="mb-6">
      <h3 className="font-semibold">{title}</h3>
      <p className="text-gray-600">{technologies}</p>
      <ul className="list-disc ml-5 mt-2 text-gray-600">
        {bulletPoints.map((point, index) => (
          <li key={index}>{point}</li>
        ))}
      </ul>
    </div>
  );
};

export default ProjectItem;