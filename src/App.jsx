import profileImage from './assets/profile.png'
export default function PortfolioWebsite() {
  const projects = [
    {
      title: "Finance Tracker App",
      description:
        "A modern financial dashboard with expense tracking and AI-based spending predictions.",
      tech: ["React", "Tailwind", "Laravel"],
    },
    {
      title: "Attendance Management System",
      description:
        "Responsive school attendance system with dashboard analytics and student reports.",
      tech: ["PHP", "MySQL", "Bootstrap"],
    },
    {
      title: "Motorcycle Rental Website",
      description:
        "Digital rental management platform with booking and transaction features.",
      tech: ["Laravel", "Tailwind", "JavaScript"],
    },
  ];

  const skills = [
    "UI/UX Design",
    "Frontend Development",
    "Backend Development",
    "Data Analysis",
    "Machine Learning",
    "Team Collaboration",
  ];

  return (
    <div className="bg-[#0F172A] text-white min-h-screen font-sans overflow-x-hidden">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full backdrop-blur-md bg-[#0F172A]/80 border-b border-slate-700 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-cyan-400">MyPortfolio</h1>

          <ul className="hidden md:flex gap-8 text-sm font-medium">
            <li>
              <a href="#home" className="hover:text-cyan-400 transition">
                Home
              </a>
            </li>
            <li>
              <a href="#about" className="hover:text-cyan-400 transition">
                About
              </a>
            </li>
            <li>
              <a href="#projects" className="hover:text-cyan-400 transition">
                Projects
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-cyan-400 transition">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        className="min-h-screen flex items-center justify-center px-6 relative"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-blue-500/5 to-purple-500/10 blur-3xl" />

        <div className="relative z-10 w-full max-w-6xl grid grid-cols-1 md:grid-cols-3 items-center gap-10">
          {/* LEFT */}
          <div className="text-center md:text-left">
            <p className="text-cyan-400 text-lg tracking-widest uppercase">
              Hello I’m
            </p>

            <h1 className="text-4xl md:text-6xl font-extrabold mt-2">
              Lina Rahmati
            </h1>
          </div>

          {/* CENTER IMAGE */}
          <div className="relative flex justify-center items-center h-full">
            <div className="absolute inset-0 flex justify-center items-center pointer-events-none">
              <div className="w-11/12 md:w-4/5 h-5/6 bg-cyan-500/15 rounded-[3rem] blur-3xl" />
            </div>

            <div className="relative w-full max-w-[28rem] h-[70vh] md:h-[75vh] overflow-hidden rounded-[1.5rem]">
              <img
                src={profileImage}
                alt="Profile"
                className="w-full h-full object-cover"
              />

              <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#0F172A] via-[#0F172A]/70 to-transparent" />
              <div className="absolute -bottom-16 left-1/2 -translate-x-1/2 w-48 h-48 rounded-full bg-cyan-500/15 blur-3xl" />
            </div>
          </div>

          {/* RIGHT */}
          <div className="text-center md:text-right">
            <p className="text-slate-300 text-4xl md:text-4xl font-extrabold">
              Frontend Developer
            </p>

            <p className="text-slate-400 mt-2">
              UI/UX Enthusiast • Web Developer
            </p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section
        id="about"
        className="max-w-7xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-12 items-center"
      >
        <div>
          <h2 className="text-4xl font-bold mb-6 text-cyan-400">About Me</h2>

          <p className="text-slate-300 leading-relaxed mb-6">
            I am a creative developer with a strong interest in web development,
            UI/UX, and modern technologies. I enjoy building responsive
            applications that provide great user experiences.
          </p>

          <p className="text-slate-400 leading-relaxed">
            This portfolio is designed with a modern dark theme combined with
            cyan and purple accents to create a professional yet elegant look.
          </p>
        </div>

        <div className="bg-slate-800/50 border border-slate-700 rounded-3xl p-8 backdrop-blur-lg shadow-xl">
          <h3 className="text-2xl font-semibold mb-6">Skills</h3>

          <div className="flex flex-wrap gap-3">
            {skills.map((skill, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-cyan-400/10 border border-cyan-400/30 text-cyan-300 rounded-xl text-sm hover:scale-105 transition"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="bg-slate-900 py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-cyan-400 mb-4">
              Featured Projects
            </h2>

            <p className="text-slate-400 max-w-2xl mx-auto">
              Here are some sample projects that showcase modern responsive
              website design and interactive experiences.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="group bg-slate-800/60 border border-slate-700 rounded-3xl p-6 hover:border-cyan-400 hover:-translate-y-2 transition duration-300 shadow-lg"
              >
                <div className="h-48 rounded-2xl bg-gradient-to-br from-cyan-500/20 to-purple-500/20 mb-6 flex items-center justify-center text-slate-400 text-lg">
                  Project Preview
                </div>

                <h3 className="text-2xl font-semibold mb-3 group-hover:text-cyan-400 transition">
                  {project.title}
                </h3>

                <p className="text-slate-400 mb-6 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="text-xs px-3 py-1 rounded-full bg-slate-700 text-cyan-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="max-w-4xl mx-auto px-6 py-24">
        <div className="bg-slate-800/60 border border-slate-700 rounded-3xl p-10 text-center backdrop-blur-lg shadow-xl">
          <h2 className="text-4xl font-bold text-cyan-400 mb-6">
            Let’s Work Together
          </h2>

          <p className="text-slate-400 mb-8 max-w-2xl mx-auto">
            Feel free to contact me for collaboration, freelance projects, or
            just to say hello.
          </p>

          <div className="grid md:grid-cols-2 gap-6 text-left">
            <input
              type="text"
              placeholder="Your Name"
              className="bg-slate-900 border border-slate-700 rounded-2xl px-5 py-4 focus:outline-none focus:border-cyan-400"
            />

            <input
              type="email"
              placeholder="Your Email"
              className="bg-slate-900 border border-slate-700 rounded-2xl px-5 py-4 focus:outline-none focus:border-cyan-400"
            />
          </div>

          <textarea
            placeholder="Your Message"
            rows="5"
            className="w-full mt-6 bg-slate-900 border border-slate-700 rounded-2xl px-5 py-4 focus:outline-none focus:border-cyan-400"
          />

          <button className="mt-6 bg-cyan-400 hover:bg-cyan-300 text-slate-900 px-8 py-4 rounded-2xl font-semibold transition shadow-lg shadow-cyan-500/20">
            Send Message
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-800 py-6 text-center text-slate-500 text-sm">
        © 2026 Your Portfolio. All rights reserved.
      </footer>
    </div>
  );
}
