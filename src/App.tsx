import { useEffect, useState } from "react";
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
const certificates = [
  {
    title: "NXP Robochallenge",
    subtitle: "Track Follower Competition",
    details:
      "Am participat la proiectul Autonomous Car în cadrul NXP IPWorkshop. Echipa mea a câștigat locul I la competiția Track Follower de la Robochallenge 2025.",
    img: "https://placehold.co/900x500/dfe8d6/12261a?text=NXP+Robochallenge",
  },
  {
    title: "Cisco Networking Academy",
    subtitle: "CCNA 1–3",
    details:
      "Certificări Cisco Networking Academy pentru networking, routing, switching și fundamente CCNA.",
    img: "https://placehold.co/900x500/f3efe4/12261a?text=CCNA",
  },
  {
    title: "Hackademy Volunteer",
    subtitle: "Junior Instructor",
    details:
      "Voluntar Hackademy / LSAC, unde am asistat sesiuni introductive de programare.",
    img: "https://placehold.co/900x500/e7eadf/12261a?text=Hackademy",
  },
  {
    title: "AI Bootcamp",
    subtitle: "Event Organizer",
    details:
      "Participare în organizarea unui eveniment educațional axat pe inteligență artificială și aplicații practice.",
    img: "https://placehold.co/900x500/d8e2cf/12261a?text=AI+Bootcamp",
  },
  {
    title: "Web Development Workshop",
    subtitle: "Frontend Practice",
    details:
      "Participare la un workshop de dezvoltare web, cu focus pe HTML, CSS, JavaScript și interfețe responsive.",
    img: "https://placehold.co/900x500/edf1e8/12261a?text=Web+Workshop",
  },
];
const themes = {
  forest: {
    background: "#f6f3ea",
    text: "#12261a",
    primary: "#6f875f",
    secondary: "#dfe8d6",
    dark: "#12261a",
  },

  darkMode: {
    background: "#101418",
    text: "#f3f3f3",
    primary: "#7da27d",
    secondary: "#1b242c",
    dark: "#0c1115",
  },

  cream: {
    background: "#f7f1e8",
    text: "#3d3127",
    primary: "#b08968",
    secondary: "#ede0d4",
    dark: "#5e503f",
  },
};
type Commit = {
  sha: string;
  commit: {
    message: string;
    author: {
      name: string;
      date: string;
    };
  };
  html_url: string;
};
function App() {
  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };
  const [activeCert, setActiveCert] = useState(0);
  const [selectedCert, setSelectedCert] = useState<(typeof certificates)[0] | null>(null);
  const [theme, setTheme] = useState("forest");
  const [commits, setCommits] = useState<Commit[]>([]);
  const nextCert = () => {
  setActiveCert((current) => (current + 1) % certificates.length);
};

  const prevCert = () => {
  setActiveCert((current) =>
    current === 0 ? certificates.length - 1 : current - 1
  );
};

  useEffect(() => {
  const interval = setInterval(() => {
    setActiveCert((current) => (current + 1) % certificates.length);
  }, 3000);

  return () => clearInterval(interval);
}, []);
  useEffect(() => {
  const savedTheme = localStorage.getItem("portfolio-theme");

  if (savedTheme) {
    setTheme(savedTheme);
  }
}, []);

useEffect(() => {
  localStorage.setItem("portfolio-theme", theme);
}, [theme]);
  const currentTheme = themes[theme as keyof typeof themes];
 useEffect(() => {
  fetch("https://api.github.com/repos/teodora835/web102-my_page/commits")
    .then((response) => response.json())
    .then((data) => {
      if (Array.isArray(data)) {
        setCommits(data.slice(0, 5));
      } else {
        console.error("GitHub API error:", data);
      }
    })
    .catch((error) => {
      console.error("Fetch error:", error);
    });
}, []);
  return (
    <main className={`app theme-${theme}`}>

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
          <div className="theme-switcher">
          <button onClick={() => setTheme("forest")}>Forest</button>

          <button onClick={() => setTheme("darkMode")}>Dark</button>

          <button onClick={() => setTheme("cream")}>Cream</button>
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
    <section id="github" className="github-section">
  <div className="github-left">
    <p className="section-label">Activitate GitHub</p>

    <h2 className="section-title github-title">
      Istoric commit-uri
    </h2>

    <p className="github-text">
      Mai jos sunt afișate cele mai recente commit-uri din repository-ul acestui proiect,
      folosind GitHub API.
    </p>

    <a
      href="https://github.com/teodora835/web102-my_page"
      target="_blank"
      className="btn btn-outline"
    >
      Vezi repository-ul
    </a>
  </div>

  <div className="commits-list">
    {commits.map((item) => (
      <a
        key={item.sha}
        href={item.html_url}
        target="_blank"
        className="commit-card"
      >
        <h3>{item.commit.message}</h3>

        <p>
          {item.commit.author.name} ·{" "}
          {new Date(item.commit.author.date).toLocaleDateString("ro-RO")}
        </p>

        <span>{item.sha.substring(0, 7)}</span>
      </a>
    ))}
  </div>
</section>
   <section id="cv" className="certificates">
  <p className="section-label dark-label">CV & Participări</p>
  <h2 className="section-title dark-title">Diplome și participări</h2>

  <div className="single-carousel">
    <button className="carousel-arrow left-arrow" onClick={prevCert}>
      ‹
    </button>

    <article
      className="single-cert-card"
      onClick={() => setSelectedCert(certificates[activeCert])}
    >
      <img
        src={certificates[activeCert].img}
        alt={certificates[activeCert].title}
      />

      <div className="cert-content">
        <h3>{certificates[activeCert].title}</h3>
        <p>{certificates[activeCert].subtitle}</p>
      </div>
    </article>

    <button className="carousel-arrow right-arrow" onClick={nextCert}>
      ›
    </button>
  </div>

  <div className="carousel-dots">
    {certificates.map((_, index) => (
      <button
        key={index}
        className={index === activeCert ? "dot active-dot" : "dot"}
        onClick={() => setActiveCert(index)}
      />
    ))}
  </div>

  <div className="cv-download">
    <a href="/cv.pdf" download className="btn btn-primary">
      Descarcă CV complet
    </a>
  </div>
</section>
    </main>
  );
}

export default App;