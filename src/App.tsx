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
              Studentă pasionată de tehnologie și design. Îmi place să construiesc
              aplicații utile, curate și intuitive.
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
              src="https://placehold.co/360x470"
              alt="Teodora Cretoiu"
              className="portrait"
            />
          </div>
        </div>
      </section>

      <section id="projects" className="projects">
        <p className="section-label">Proiectele mele</p>
        <h2 className="section-title">Lucrări personale</h2>
      </section>
    </main>
  );
}

export default App;