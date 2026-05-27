const projects = [
  {
    title: "Ticket Management System",
    desc: "Sistem modular de issue tracking construit în Java folosind design patterns și procesare JSON.",
    stack: "Java • OOP • Design Patterns",
    img: "https://placehold.co/700x420/6f875f/ffffff?text=Ticket+System",
  },
  {
    title: "DraWar AI Game",
    desc: "Joc multiplayer de desen cu recunoaștere AI folosind Flask, PyTorch și Socket.IO.",
    stack: "JavaScript • Flask • PyTorch",
    img: "https://placehold.co/700x420/12261a/ffffff?text=DraWar+AI",
  },
  {
    title: "E-commerce Platform",
    desc: "Aplicație full-stack Flask cu filtrare produse, coș de cumpărături și order management.",
    stack: "Python • Flask • Bootstrap",
    img: "https://placehold.co/700x420/dfe8d6/12261a?text=E-commerce",
  },
];
function App() {
  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <main>
      <section className="hero">
        <nav className="nav">
          <div className="logo">
            <h2>Teodora Cretoiu</h2>
            <p>Web102 Portfolio</p>
          </div>

          <div className="nav-links">
            <a href="#projects">Proiecte</a>
            <a href="#github">GitHub</a>
            <a href="#cv">CV</a>
          </div>

          <a href="/cv.pdf" download className="btn btn-primary">
            Descarcă CV
          </a>
        </nav>

        <div className="hero-grid">
          <div>
            <p className="eyebrow">Bună, sunt</p>

            <h1>
              Teodora <br /> Cretoiu
            </h1>

            <p className="hero-text">
              Studentă la Automatică și Calculatoare, pasionată de software engineering,
              UI design și aplicații interactive. Construiesc proiecte full-stack,
              simulări și aplicații AI cu focus pe experiența utilizatorului.
            </p>

            <div className="hero-actions">
              <button onClick={scrollToProjects} className="btn btn-primary">
                Vezi proiectele ↓
              </button>

              <a href="/cv.pdf" download className="btn btn-outline">
                Descarcă CV ⬇
              </a>
            </div>

            <div className="socials">
              <span>GitHub</span>
              <span>LinkedIn</span>
              <span>Email</span>
            </div>
          </div>

          <div className="portrait-wrap">
            <div className="arch"></div>
            <div className="circle"></div>

            <img
              src="/images/eu-profi.jpg"
              alt="Teodora Cretoiu"
              className="portrait"
            />
          </div>
        </div>
      </section>

      <section id="projects" className="projects">
  <p className="section-label">Proiectele mele</p>
  <h2 className="section-title">Lucrări personale</h2>

  <div className="project-grid">
    {projects.map((project) => (
      <article className="project-card" key={project.title}>
        <img src={project.img} alt={project.title} />

        <div className="project-content">
          <h3>{project.title}</h3>

          <p>{project.desc}</p>

          <span className="project-stack">
            {project.stack}
          </span>

          <button>Vezi detalii →</button>
        </div>
      </article>
    ))}
  </div>
</section>
    </main>
  );
}

export default App;