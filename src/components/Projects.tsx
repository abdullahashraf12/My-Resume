import React from 'react';
import ProjectItem from './ProjectItem';

const Projects = () => {
  const projects = [
    {
      title: "Frito Restaurant (Django)",
      technologies: "Python, Django, JavaScript, SQLite3",
      bulletPoints: [
        "Developed a full-stack web application using Django (MVC Architecture)",
        "Implemented security hashing algorithm for password encryption (PBKDF2 with SHA256)",
        "Integrated RESTful API endpoints for seamless data communication",
        "Built responsive UI with modern design patterns",
        "Implemented user authentication and authorization"
      ]
    },
    {
      title: "Frito Restaurant (.NET)",
      technologies: "C#, ASP.NET MVC, Entity Framework, SQL Server",
      bulletPoints: [
        "Created a robust restaurant management system using .NET MVC architecture",
        "Implemented secure user authentication and role-based authorization",
        "Developed RESTful APIs for menu management and order processing",
        "Utilized Entity Framework for efficient database operations",
        "Implemented responsive design using Bootstrap and modern CSS"
      ]
    },
    {
      title: "Offline Map Server",
      technologies: "NodeJs, Graphhopper, Front-End Technology",
      bulletPoints: [
        "No Internet Connection Needed",
        "Can Display World Map With Latest Updates (Street Names, Bridges, Shops, Buildings)",
        "Multi Layer Earth Support"
      ]
    },
    {
      title: "Star Rating System",
      technologies: "Javascript, jQuery",
      bulletPoints: [
        "Custom implementation without third-party frameworks",
        "Pure JavaScript and jQuery solution"
      ]
    },
    {
      title: "Course Management Software (CMS)",
      technologies: "C#, .NET Framework, WPF, Entity Framework, SQL Server",
      bulletPoints: [
        "Developed using C# and .NET Framework with WPF for rich desktop UI",
        "Implemented MVVM architecture pattern for clean separation of concerns",
        "Built custom video player using Windows Media Foundation",
        "Integrated Entity Framework for efficient course data management",
        "Implemented offline-first architecture with local SQL Server database",
        "Created responsive and intuitive UI using XAML and Material Design",
        "Developed robust file system management for course content",
        "Implemented user progress tracking and bookmarking system",
        "Built-in content caching system for offline access",
        "Integrated custom controls for enhanced video playback experience"
      ]
    }
  ];

  return (
    <section className="mt-6">
      <h2 className="text-xl font-bold text-gray-900 border-b pb-2">PROJECTS</h2>
      <div className="space-y-6 mt-4">
        {projects.map((project, index) => (
          <ProjectItem
            key={index}
            title={project.title}
            technologies={project.technologies}
            bulletPoints={project.bulletPoints}
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;