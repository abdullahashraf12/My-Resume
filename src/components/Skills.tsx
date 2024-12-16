import React from 'react';

const Skills = () => {
  const skills = {
    languages: "Java, Python, JavaScript, HTML, CSS, Bootstrap, Dart, C#",
    frameworks: "Django, Oracle Apex, Flutter, React JS, .NET, Blazor, Entity Framework",
    developerTools: "Git, VS Code, Visual Studio, PyCharm, IntelliJ, Eclipse, Android Studio",
    libraries: "pandas, NumPy, Matplotlib, TensorFlow, PyTorch, Keras, Bloc",
    databases: "Oracle DBMS, MySQL, SQL Server, SQLite3",
    testingTools: "Selenium",
    containerization: "Docker"
  };

  return (
    <section className="mt-6">
      <h2 className="text-xl font-bold text-gray-900 border-b pb-2">TECHNICAL SKILLS</h2>
      <div className="grid grid-cols-2 gap-4 mt-4">
        <div>
          <h3 className="font-semibold">Languages:</h3>
          <p className="text-gray-600">{skills.languages}</p>
        </div>
        <div>
          <h3 className="font-semibold">Frameworks:</h3>
          <p className="text-gray-600">{skills.frameworks}</p>
        </div>
        <div>
          <h3 className="font-semibold">Developer Tools:</h3>
          <p className="text-gray-600">{skills.developerTools}</p>
        </div>
        <div>
          <h3 className="font-semibold">Libraries:</h3>
          <p className="text-gray-600">{skills.libraries}</p>
        </div>
        <div>
          <h3 className="font-semibold">Databases:</h3>
          <p className="text-gray-600">{skills.databases}</p>
        </div>
        <div>
          <h3 className="font-semibold">Test Driven Lib:</h3>
          <p className="text-gray-600">{skills.testingTools}</p>
        </div>
        <div className="col-span-2">
          <h3 className="font-semibold">Containerization Technology:</h3>
          <p className="text-gray-600">{skills.containerization}</p>
        </div>
      </div>
    </section>
  );
};

export default Skills;