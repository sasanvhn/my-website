import { useState } from 'react';
import portrait from './assets/SasanVahidinia.jpg';
import hotelScreenshot from './assets/projects/project-2.jpg';
import { projects, extraProjects, positions, education, skillGroups } from './content';

const EMAIL = 'mailto:vahidinia.sasan@gmail.com';
const GITHUB = 'https://github.com/sasanvhn';
const LINKEDIN = 'https://www.linkedin.com/in/sasan-vahidinia/';

function Arrow() {
  return <span className="arrow" aria-hidden="true">↗</span>;
}

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="site-header">
      <div className="container header-content">
        <a className="brand" href="#top" onClick={closeMenu} aria-label="Sasan Vahidinia, back to top">
          <span className="brand-mark"><img src="/logo-mark-dark.svg" alt="" width="44" height="44" /></span>
          <span className="brand-name">Sasan Vahidinia</span>
        </a>
        <button
          className="menu-button"
          type="button"
          aria-controls="main-navigation"
          aria-expanded={menuOpen}
          aria-label={menuOpen ? 'Close navigation' : 'Open navigation'}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span /><span />
        </button>
        <nav id="main-navigation" className={menuOpen ? 'navigation open' : 'navigation'} aria-label="Main navigation">
          <a href="#work" onClick={closeMenu}>Selected work</a>
          <a href="#experience" onClick={closeMenu}>Experience</a>
          <a href="#about" onClick={closeMenu}>About</a>
          <a className="navigation-contact" href="#contact" onClick={closeMenu}>Get in touch <Arrow /></a>
        </nav>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="hero container" aria-labelledby="hero-title">
      <div className="hero-text">
        <p className="eyebrow"><span className="eyebrow-rule" /> SOFTWARE / DATA / PRACTICAL IT</p>
        <h1 id="hero-title">I like to understand how things <em>work.</em> Then make them work better.</h1>
        <p className="hero-description">
          I’m Sasan, a Data Analytics master’s student in Germany. I’ve worked on Python experiments,
          backend APIs, web applications, and the technical problems that show up when people depend on a system every day.
        </p>
        <div className="hero-cta">
          <a className="button primary-button" href="#work">Explore my work <Arrow /></a>
          <a className="underlined-link" href={EMAIL}>Send me an email <Arrow /></a>
        </div>
        <p className="availability"><span className="availability-dot" /> Hannover, Germany · Open to working-student, internship and research roles</p>
      </div>
      <div className="hero-image-column">
        <div className="portrait-box">
          <img src={portrait} width="512" height="512" alt="Sasan Vahidinia sitting outdoors" fetchPriority="high" />
          <span className="portrait-overline">01 — HELLO</span>
        </div>
        <div className="portrait-label">
          <span>Currently studying</span>
          <strong>M.Sc. Data Analytics<br />University of Hildesheim</strong>
          <b aria-hidden="true">✳</b>
        </div>
      </div>
    </section>
  );
}

function SectionHeading({ id, number, label, title, subtitle }) {
  return (
    <div className="section-heading" id={id}>
      <p className="section-index">{number} <span>/ {label}</span></p>
      <div>
        <h2>{title}</h2>
        {subtitle && <p className="section-subtitle">{subtitle}</p>}
      </div>
    </div>
  );
}

function ProjectArtwork({ kind }) {
  if (kind === 'service') {
    return (
      <div className="artwork artwork-service" role="img" aria-label="Illustration of a restaurant ordering workflow; not a real interface screenshot">
        <div className="artwork-top"><span>PIAGAST / OPERATIONS</span><span>2026 — NOW</span></div>
        <div className="process-flow">
          <div><small>01</small><strong>Ordering</strong><span>Customer flow</span></div>
          <i aria-hidden="true">→</i>
          <div><small>02</small><strong>Staff tools</strong><span>Order handling</span></div>
          <i aria-hidden="true">→</i>
          <div><small>03</small><strong>Support</strong><span>Daily IT</span></div>
        </div>
        <p className="artwork-note">Conceptual workflow, not a screenshot of the restaurant system.</p>
      </div>
    );
  }
  if (kind === 'eeg') {
    return (
      <div className="artwork artwork-eeg" role="img" aria-label="Illustrative EEG signal with four MiniRocket classification variants; no experimental results shown">
        <div className="artwork-top"><span>EEG / EXPERIMENTS</span><span>FIVE CONTRIBUTORS</span></div>
        <div className="signal-grid">
          <svg viewBox="0 0 600 100" preserveAspectRatio="none" aria-hidden="true">
            <path d="M0 50 L30 50 L42 40 L56 63 L70 45 L86 50 L108 50 L122 18 L136 78 L148 50 L165 50 L180 38 L196 60 L209 50 L239 50 L251 8 L264 87 L277 50 L306 50 L318 34 L332 66 L345 50 L380 50 L390 16 L401 80 L417 50 L452 50 L469 34 L484 65 L497 50 L529 50 L540 23 L552 72 L566 50 L600 50" fill="none" stroke="currentColor" strokeWidth="2" vectorEffect="non-scaling-stroke" />
          </svg>
        </div>
        <div className="variant-list"><span>Classic</span><span>Enhanced</span><span>SPD</span><span>Hybrid</span></div>
        <p className="artwork-note">An illustration of the research workflow, not a measured EEG trace.</p>
      </div>
    );
  }
  return (
    <div className="artwork artwork-document" role="img" aria-label="Illustration of rule-based document formatting checks; not a screenshot of the software">
      <div className="artwork-top"><span>PYTHON / AUTOMATION</span><span>RULE-BASED</span></div>
      <div className="paper-preview">
        <div className="paper-page">
          <span className="paper-title" />
          <span className="paper-line long" /><span className="paper-line" />
          <span className="paper-line medium" /><span className="paper-line long" />
          <span className="paper-line short" /><span className="paper-line medium" />
        </div>
        <div className="paper-checks">
          <span>✓ Structure</span>
          <span>✓ Patterns</span>
          <span>✓ Formatting</span>
        </div>
      </div>
      <p className="artwork-note">Illustrative checks, not actual program output.</p>
    </div>
  );
}

function Work() {
  return (
    <section className="work-section container section-spacing" aria-labelledby="work-heading">
      <SectionHeading id="work" number="01" label="SELECTED WORK" title={<span id="work-heading">Some things I’ve <em>actually worked on.</em></span>} subtitle="A working restaurant website, a team research project and a practical Python utility. Different problems, different kinds of work." />
      <div className="project-stack">
        {projects.map((project, index) => (
          <article className="project-card" key={project.title}>
            <div className="project-content">
              <div className="project-topline"><span className="project-number">0{index + 1}</span><span>{project.category}</span><span className="project-date">{project.period}</span></div>
              <h3>{project.title}</h3>
              <p className="project-intro">{project.intro}</p>
              <ul className="project-details">{project.details.map(detail => <li key={detail}>{detail}</li>)}</ul>
              <div className="project-footer">
                <div className="tags">{project.tags.map(tag => <span key={tag}>{tag}</span>)}</div>
                {project.url && <a className="project-link" href={project.url} target="_blank" rel="noopener noreferrer">See the repository <Arrow /><span className="sr-only"> (opens in a new tab)</span></a>}
              </div>
            </div>
            <ProjectArtwork kind={project.visual} />
          </article>
        ))}
      </div>
      <div className="other-projects">
        <div><p className="micro-label">MORE ON GITHUB</p><h3>Smaller projects, still worth showing.</h3></div>
        <div className="other-project-list">
          {extraProjects.map(project => (
            <a className="other-project" href={project.url} key={project.title} target="_blank" rel="noopener noreferrer">
              <div>
                <h4>{project.title}</h4>
                <p>{project.description}</p>
                {project.screenshot && <img className="hotel-screenshot" src={hotelScreenshot} width="1280" height="718" alt="Actual screenshot of the Flutter hotel coursework application showing a room table" loading="lazy" />}
              </div>
              <Arrow /><span className="sr-only"> (opens in a new tab)</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

function Experience() {
  return (
    <section className="experience-section section-spacing" aria-labelledby="experience-heading">
      <div className="container">
        <SectionHeading id="experience" number="02" label="EXPERIENCE" title={<span id="experience-heading">Where I’ve <em>learned by doing.</em></span>} subtitle="Technical work looks different in a restaurant, a backend team, a classroom and an app project." />
        <div className="experience-list">
          {positions.map(position => (
            <article className="experience-row" key={position.title}>
              <time>{position.date}</time>
              <div><h3>{position.title}</h3><p className="experience-place">{position.organization}</p><p className="experience-copy">{position.description}</p></div>
              <div className="experience-skills">{position.tags.map(tag => <span key={tag}>{tag}</span>)}</div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section className="about-section container section-spacing" aria-labelledby="about-heading">
      <SectionHeading id="about" number="03" label="A BIT ABOUT ME" title={<span id="about-heading">Curious about the details. <em>Happy to work with people.</em></span>} />
      <div className="about-grid">
        <div className="about-copy">
          <p className="about-lead">I’m comfortable moving between a notebook, a codebase and a conversation with someone who needs a technical problem solved.</p>
          <p>My Computer Engineering degree gave me a base in software and databases. In my master’s studies I’m spending more time on data, experiments and evaluation. At PIAGAST I’ve also seen how much a small technical fix can matter in the middle of a working day.</p>
          <p>I’m looking for a role in Germany where I can contribute to real work, ask questions and keep getting better at what I do.</p>
          <a className="underlined-link" href={LINKEDIN} target="_blank" rel="noopener noreferrer">Find me on LinkedIn <Arrow /></a>
        </div>
        <div className="about-details">
          <div className="detail-block"><p className="micro-label">EDUCATION</p>
            {education.map(item => <div className="education-item" key={item.degree}><h3>{item.degree}</h3><p>{item.school}</p><span>{item.date}</span><small>{item.detail}</small></div>)}
          </div>
          <div className="detail-block"><p className="micro-label">LANGUAGES</p><div className="language-line"><span>Persian</span><span>Native</span></div><div className="language-line"><span>English</span><span>C1</span></div><div className="language-line"><span>German</span><span>B1</span></div></div>
        </div>
      </div>
      <div className="skills-grid">
        <div><p className="micro-label">MY TOOLKIT</p><h3>Things I’ve used in practice.</h3><p>From coursework, projects and internships. This isn’t a claim to know everything on the list inside out.</p></div>
        <div>{skillGroups.map(group => <div className="skill-row" key={group.label}><h4>{group.label}</h4><p>{group.skills}</p></div>)}</div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer id="contact" className="footer">
      <div className="container">
        <div className="footer-main">
          <div><p className="micro-label">04 / CONTACT</p><h2>Have something<br /><em>worth working on?</em></h2></div>
          <div className="footer-message"><p>I’m open to working-student jobs, internships, research-assistant positions and practical software, data or IT work in Germany.</p><a className="footer-contact-link" href={EMAIL}>Let’s talk <Arrow /></a><a className="email-address" href={EMAIL}>vahidinia.sasan@gmail.com</a></div>
        </div>
        <div className="footer-bottom"><span className="footer-identity"><img src="/logo-mark-dark.svg" alt="" width="30" height="30" /> © {new Date().getFullYear()} Sasan Vahidinia</span><span>Hannover, Germany</span><div><a href={GITHUB} target="_blank" rel="noopener noreferrer">GitHub <Arrow /></a><a href={LINKEDIN} target="_blank" rel="noopener noreferrer">LinkedIn <Arrow /></a><a href="#top">Back to top ↑</a></div></div>
      </div>
    </footer>
  );
}

export default function App() {
  return <div className="page-shell" id="top"><a className="skip-link" href="#main">Skip to content</a><Header /><main id="main"><Hero /><Work /><Experience /><About /></main><Footer /></div>;
}
