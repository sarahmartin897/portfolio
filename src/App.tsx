// App.jsx

import { FaGithub, FaLinkedin } from 'react-icons/fa'; // For social icons

function App() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      {/* Header */}
      <header className="container mx-auto px-4 py-6">
        <nav className="flex justify-between items-center">
          <h1 className="text-2xl font-bold tracking-tight">Sarah</h1>
          <div className="flex space-x-4">
            <a
              href="#about"
              className="text-gray-600 hover:text-gray-900 transition"
            >
              About
            </a>
            <a
              href="#experience"
              className="text-gray-600 hover:text-gray-900 transition"
            >
              Experience
            </a>
            <a
              href="#contact"
              className="text-gray-600 hover:text-gray-900 transition"
            >
              Contact
            </a>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 flex flex-col items-center text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          Front-End Developer
        </h2>
        <p className="text-lg md:text-xl text-gray-600 max-w-2xl mb-6">
          I craft clean, responsive, and accessible web interfaces with a passion
          for design, performance, and user experience.
        </p>
        <div className="flex space-x-4">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-gray-900"
            aria-label="GitHub Profile"
          >
            <FaGithub size={24} />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-gray-900"
            aria-label="LinkedIn Profile"
          >
            <FaLinkedin size={24} />
          </a>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="container mx-auto px-4 py-16">
        <h3 className="text-2xl font-semibold mb-6 text-center">About Me</h3>
        <p className="text-gray-600 max-w-3xl mx-auto text-center">
          I'm a Front-End Developer with a knack for turning complex problems into
          simple, intuitive solutions. Skilled in React, JavaScript, and modern
          CSS, I focus on building user-friendly interfaces that are both
          performant and accessible. Always learning, always building.
        </p>
      </section>

      {/* Skills Section */}
      <section id="skills" className="container mx-auto px-4 py-16 bg-gray-100">
        <h3 className="text-2xl font-semibold mb-6 text-center">Skills</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
          {[
            'React',
            'JavaScript (ES6+)',
            'CSS3',
            'HTML5',
            'Tailwind',
            'Git',
            'Figma',
            'REST APIs',
          ].map((skill) => (
            <div
              key={skill}
              className="bg-white p-3 rounded-lg text-center shadow-sm"
            >
              {skill}
            </div>
          ))}
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="container mx-auto px-4 py-16">
        <h3 className="text-2xl font-semibold mb-6 text-center">Experience</h3>
        <div className="max-w-3xl mx-auto">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h4 className="text-xl font-medium">Front-End Developer</h4>
            <p className="text-gray-600 mb-2">Virtu Studios | 2022 - 2025</p>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>
                Collaborated with cross-functional teams to build responsive,
                accessible web interfaces using HTML, CSS, and JavaScript.
              </li>
              <li>
                Translated Figma designs into clean, maintainable code for
                client-facing features.
              </li>
              <li>
                Leveraged React, Git, and REST APIs to deliver performant and
                scalable web applications.
              </li>
              <li>
                Optimized web performance and ensured accessibility compliance.
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="container mx-auto px-4 py-16 text-center">
        <h3 className="text-2xl font-semibold mb-6">Let's Connect</h3>
        <p className="text-gray-600 max-w-xl mx-auto mb-6">
          I'm always excited to collaborate on new projects or discuss front-end
          development. Reach out to start a conversation!
        </p>
        <a
          href="mailto:your.email@example.com"
          className="inline-block bg-gray-900 text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition"
        >
          Get in Touch
        </a>
      </section>

      {/* Footer */}
      <footer className="container mx-auto px-4 py-6 text-center text-gray-600">
        <p>&copy; {new Date().getFullYear()} Sarah. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;