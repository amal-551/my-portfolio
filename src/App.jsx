import { useEffect, useRef, useState } from 'react'

function App() {
  const [isProjectMenuOpen, setProjectMenuOpen] = useState(false)
  const projectPickerRef = useRef(null)

  useEffect(() => {
    function handlePointerDown(event) {
      if (!projectPickerRef.current?.contains(event.target)) setProjectMenuOpen(false)
    }

    function handleKeyDown(event) {
      if (event.key === 'Escape') setProjectMenuOpen(false)
    }

    document.addEventListener('pointerdown', handlePointerDown)
    document.addEventListener('keydown', handleKeyDown)
    return () => {
      document.removeEventListener('pointerdown', handlePointerDown)
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [])

  return (
    <main className="shell">
      <nav className="nav" aria-label="Main navigation">
        <a className="wordmark" href="#home">Amal Mohanan<span>.</span></a>
        <div className="section-links" aria-label="Page sections">
          <a href="#about">Introduction</a>
          <a href="#about-me">Professional summary</a>
          <a href="#expertise">Expertise</a>
          <a href="#experience">Experience</a>
          <a href="#all-engage">Professional work</a>
          <a href="#education">Education</a>
        </div>
        <a className="nav-link" href="mailto:amalmohanan555@gmail.com">Get in touch <span aria-hidden="true">↗</span></a>
      </nav>

      <section className="hero" id="home">
        <div className="hero-copy">
          <p className="eyebrow"><span className="status-dot" /> AMAL MOHANAN · PORTFOLIO</p>
          <h1>Python Backend<br />Developer <em>&amp;</em><br />Full Stack Developer</h1>
          <p className="role-line">Scalable systems · Production-ready SaaS · AI-powered solutions</p>
          <div className="skill-chips" aria-label="Professional skills">
            <span className="skill-chip featured">Python</span>
            <span className="skill-chip featured">Django</span>
            <span className="skill-chip">Django REST Framework</span>
            <span className="skill-chip">FastAPI</span>
            <span className="skill-chip">REST APIs</span>
            <span className="skill-chip">Microservices</span>
            <span className="skill-chip">PostgreSQL</span>
            <span className="skill-chip">Redis</span>
            <span className="skill-chip">Celery</span>
            <span className="skill-chip">React</span>
            <span className="skill-chip">Docker</span>
            <span className="skill-chip">AWS</span>
            <span className="skill-chip accent-chip">AI / LLM · RAG</span>
          </div>
          <div className="social-links" aria-label="Professional profiles">
            <a href="https://www.linkedin.com/in/amal-m-m-13b682168" target="_blank" rel="noreferrer">LinkedIn <span aria-hidden="true">↗</span></a>
            <a href="https://github.com/amal-551" target="_blank" rel="noreferrer">GitHub <span aria-hidden="true">↗</span></a>
          </div>
          <a className="side-pointer" href="#about" aria-label="Go to introduction">
            <span className="pointer-line" aria-hidden="true" />
            <span className="pointer-label">01 / INTRODUCTION</span>
            <span className="pointer-arrow" aria-hidden="true">↗</span>
          </a>
        </div>

        <aside className="hero-project-picker" ref={projectPickerRef} aria-label="Featured professional work">
          <p className="project-picker-label">FEATURED PROFESSIONAL WORK</p>
          <h2>Explore my<br /><span>work.</span></h2>
          <p className="project-picker-description">Choose a project to explore its purpose and product experience.</p>
          <button className="project-dropdown-trigger" type="button" aria-expanded={isProjectMenuOpen} aria-controls="project-dropdown-menu" onClick={() => setProjectMenuOpen((open) => !open)}>
            <span><strong>Choose a project</strong><small>All Engage · Exit Lens · eADC</small></span>
            <span className="dropdown-chevron" aria-hidden="true">⌄</span>
          </button>
          <div className={`project-dropdown-menu${isProjectMenuOpen ? ' is-open' : ''}`} id="project-dropdown-menu" aria-hidden={!isProjectMenuOpen} inert={!isProjectMenuOpen}>
            <div className="project-dropdown-inner">
              <a className="hero-project-option all-engage-option" href="#all-engage" onClick={() => setProjectMenuOpen(false)}>
                <span className="option-copy"><small>EMPLOYEE ENGAGEMENT</small><strong>All Engage</strong></span>
                <span className="option-arrow" aria-hidden="true">→</span>
              </a>
              <a className="hero-project-option exit-lens-option" href="#exit-lens" onClick={() => setProjectMenuOpen(false)}>
                <span className="option-copy"><small>ALL ENGAGE MODULE · EXIT ASSESSMENT</small><strong>Exit Lens</strong></span>
                <span className="option-arrow" aria-hidden="true">→</span>
              </a>
              <a className="hero-project-option eadc-option" href="#eadc" onClick={() => setProjectMenuOpen(false)}>
                <span className="option-copy"><small>VIRTUAL ASSESSMENT CENTER</small><strong>eADC</strong></span>
                <span className="option-arrow" aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </aside>
      </section>

      <section className="about" id="about">
        <p className="eyebrow">01 / INTRODUCTION</p>
        <h2>Hi, I’m<br /><span>Amal Mohanan.</span></h2>
        <div className="experience-note">
          <span className="experience-number">3+</span>
          <span className="experience-caption">YEARS BUILDING<br />PRODUCTION SOFTWARE</span>
        </div>
        <div className="about-copy">
          <p>I’m a Python Backend Developer and Full Stack Developer with <strong>3+ years of professional experience</strong> building production web applications and SaaS platforms.</p>
          <p>I specialize in scalable backend services, REST APIs, database-driven applications, and asynchronous processing systems using Python, Django, Django REST Framework, and FastAPI.</p>
          <p>I also work with React, PostgreSQL, Redis, Celery, Docker, and AWS, with hands-on experience in application deployment, cloud infrastructure, and CI/CD maintenance.</p>
          <p>I’m passionate about building reliable software systems and integrating AI technologies such as LLMs and RAG into real-world applications.</p>
        </div>
      </section>

      <section className="about-me" id="about-me" aria-labelledby="about-me-title">
        <div className="about-me-aside">
          <p className="eyebrow">02 / PROFESSIONAL SUMMARY</p>
          <h2 id="about-me-title">Engineering<br />with <span>purpose.</span></h2>
          <p className="about-me-summary">Building dependable products with a backend-first, full-stack perspective.</p>
          <div className="about-me-stat"><strong>3+</strong><span>YEARS OF<br />PROFESSIONAL EXPERIENCE</span></div>
        </div>

        <div className="about-me-story">
          <article className="story-block">
            <span className="story-index">01</span>
            <div>
              <h3>Backend systems, built to last</h3>
              <p>I’m <strong>Amal Mohanan</strong>, a Python Backend Developer and Full Stack Developer with 3+ years of professional experience building, developing, and maintaining production web applications and SaaS platforms.</p>
              <p>My core expertise includes Python, Django, Django REST Framework, and FastAPI, with hands-on experience designing RESTful APIs, developing scalable backend services, implementing authentication and authorization, integrating third-party services, and optimizing database performance.</p>
            </div>
          </article>
          <article className="story-block">
            <span className="story-index">02</span>
            <div>
              <h3>Product experience that matters</h3>
              <p>I have practical experience with PostgreSQL, MySQL, Redis, and Celery to build reliable, data-driven applications and asynchronous processing systems. I also work with React and JavaScript on full-stack application development.</p>
            </div>
          </article>
          <article className="story-block">
            <span className="story-index">03</span>
            <div>
              <h3>From interface to infrastructure</h3>
              <p>I handle application deployment and infrastructure management using Docker and AWS, including AWS services, Linux server management, Nginx, Gunicorn, SSL/TLS configuration, and CI/CD pipeline maintenance.</p>
            </div>
          </article>
          <article className="story-block">
            <span className="story-index">04</span>
            <div>
              <h3>Intelligence with a purpose</h3>
              <p>I’m involved in integrating AI and LLM capabilities into business applications, with practical exposure to DeepSeek, OpenRouter, and Retrieval-Augmented Generation (RAG).</p>
            </div>
          </article>
          <article className="story-block">
            <span className="story-index">05</span>
            <div>
              <h3>How I approach the work</h3>
              <p>I’m passionate about building scalable, secure, and maintainable software solutions, solving real-world engineering challenges, and continuously expanding my skills in backend engineering and AI-powered application development.</p>
            </div>
          </article>
        </div>
      </section>

      <section className="expertise" id="expertise" aria-labelledby="expertise-title">
        <div className="expertise-heading">
          <p className="eyebrow">03 / TECHNICAL EXPERTISE</p>
          <h2 id="expertise-title">A toolkit for<br /><span>the real world.</span></h2>
          <p>Technologies and systems I use to build, ship, and support production applications.</p>
        </div>
        <div className="expertise-grid">
          <article className="expertise-card expertise-featured"><span className="expertise-index">01</span><h3>Backend Development</h3><div className="expertise-tags"><span>Python</span><span>Django</span><span>Django REST Framework</span><span>FastAPI</span><span>REST APIs</span><span>Microservices</span><span>WebSockets</span><span>Middleware</span><span>Django Signals</span></div></article>
          <article className="expertise-card"><span className="expertise-index">02</span><h3>Database &amp; Background Processing</h3><div className="expertise-tags"><span>PostgreSQL</span><span>MySQL</span><span>Redis</span><span>Celery</span><span>Query Optimization</span><span>Database Indexing</span><span>Caching</span><span>Scheduled Tasks</span></div></article>
          <article className="expertise-card"><span className="expertise-index">03</span><h3>Cloud &amp; DevOps</h3><div className="expertise-tags"><span>AWS EC2</span><span>RDS</span><span>S3</span><span>SES</span><span>IAM</span><span>VPC</span><span>Docker</span><span>Kubernetes</span><span>Linux</span><span>Nginx</span><span>Gunicorn</span><span>CI/CD</span><span>SSL/TLS</span></div></article>
          <article className="expertise-card expertise-infra"><span className="expertise-index">04</span><h3>Infrastructure &amp; Video Conferencing</h3><ul><li>Self-hosted Jitsi Meet deployment</li><li>Docker-based container management</li><li>Server, domain, and SSL/TLS configuration</li><li>Production maintenance</li><li>Assessment workflow integration</li></ul></article>
          <article className="expertise-card"><span className="expertise-index">05</span><h3>AI &amp; LLM Integration</h3><div className="expertise-tags"><span>LLM API Integration</span><span>DeepSeek</span><span>OpenRouter</span><span>RAG</span><span>Prompt Engineering</span></div></article>
          <article className="expertise-card"><span className="expertise-index">06</span><h3>Frontend Development</h3><div className="expertise-tags"><span>React</span><span>JavaScript</span><span>HTML</span><span>CSS</span></div></article>
          <article className="expertise-card"><span className="expertise-index">07</span><h3>Authentication &amp; Third-Party Integrations</h3><div className="expertise-tags"><span>JWT</span><span>Authorization</span><span>2FA</span><span>QR Verification</span><span>Stripe</span></div></article>
        </div>
      </section>

      <section className="experience" id="experience" aria-labelledby="experience-title">
        <div className="experience-heading">
          <p className="eyebrow">04 / PROFESSIONAL EXPERIENCE</p>
          <h2 id="experience-title">Building software<br />that works <span>in production.</span></h2>
          <p>Backend engineering, product development, and deployment across SaaS platforms and cloud infrastructure.</p>
        </div>

        <div className="experience-list">
          <article className="role-card">
            <header className="role-header">
              <div><p className="role-company">Talent Abundance</p><p className="role-title">Backend Engineering · Full Stack Development</p></div>
              <p className="role-dates">SEPTEMBER 2024 <span>—</span> OCTOBER 2026</p>
            </header>
            <p className="role-summary">Contributed to the development and maintenance of three production SaaS assessment products, focusing on backend engineering, API development, AI integrations, cloud infrastructure, and production deployments.</p>
            <h3 className="contributions-title">Key responsibilities &amp; contributions</h3>
            <ul className="contribution-list">
              <li>Designed and developed backend services and REST APIs using Python, Django, Django REST Framework, and FastAPI for assessment, recruitment, participant management, reporting, and administrative workflows.</li>
              <li>Integrated AI/LLM services, including DeepSeek and OpenRouter-based models, into assessment observation and report-generation workflows.</li>
              <li>Developed reusable service layers, middleware, Django Signals, JWT-based authentication, authorization, and third-party integrations.</li>
              <li>Implemented asynchronous processing and real-time application features using FastAPI, Django, and WebSockets.</li>
              <li>Used Celery and Redis for background processing, email notifications, report generation, scheduled tasks, and caching.</li>
              <li>Improved application performance through PostgreSQL query optimization, database indexing, and Redis caching.</li>
              <li>Configured and maintained AWS infrastructure, including EC2, RDS, S3, SES, Route 53, IAM, VPC, subnets, and security groups.</li>
              <li>Managed Linux/Ubuntu production deployments using Docker, Nginx, Gunicorn, SSL/TLS, environment configuration, logging, and CI/CD workflows.</li>
              <li>Contributed to Kubernetes-based deployment and orchestration.</li>
              <li>Independently deployed and maintained self-hosted Jitsi Meet infrastructure using Docker, including server configuration, domain and SSL setup, and production maintenance for video-based assessment workflows.</li>
              <li>Collaborated with React frontend developers to deliver and troubleshoot end-to-end application features.</li>
            </ul>
            <div className="role-stack"><span className="stack-label">TECHNOLOGY STACK</span><div className="expertise-tags"><span>Python</span><span>Django</span><span>Django REST Framework</span><span>FastAPI</span><span>PostgreSQL</span><span>Redis</span><span>Celery</span><span>React</span><span>WebSockets</span><span>AWS</span><span>Docker</span><span>Kubernetes</span><span>Jitsi Meet</span><span>Linux</span><span>Nginx</span><span>Gunicorn</span><span>OpenRouter</span><span>DeepSeek</span></div></div>
          </article>

          <article className="role-card">
            <header className="role-header">
              <div><p className="role-company">Febno Technologies</p><p className="role-title">Python Backend Developer</p></div>
              <p className="role-dates">FEBRUARY 2023 <span>—</span> JUNE 2024</p>
            </header>
            <p className="role-summary">Worked on backend development for a product built around microservice-oriented functionality, developing REST APIs, authentication workflows, payment integrations, database operations, and cloud deployments.</p>
            <h3 className="contributions-title">Key responsibilities &amp; contributions</h3>
            <ul className="contribution-list">
              <li>Developed RESTful APIs using Python, Django, and Django REST Framework for a microservice-oriented product.</li>
              <li>Implemented user registration, authentication, JWT-based authorization, two-factor authentication (2FA), and QR-code verification workflows.</li>
              <li>Integrated Stripe payment processing and developed backend functionality supported by PostgreSQL.</li>
              <li>Designed and refined PostgreSQL queries to support reliable data access and backend performance.</li>
              <li>Deployed Dockerized applications on AWS using EC2, RDS, and S3.</li>
              <li>Configured production environments using Nginx, Gunicorn, SSL/TLS, Linux, and CI/CD pipelines.</li>
              <li>Applied application security practices, including CSRF/CORS configuration, IAM policies, secure secret handling, and application hardening.</li>
            </ul>
            <div className="role-stack"><span className="stack-label">TECHNOLOGY STACK</span><div className="expertise-tags"><span>Python</span><span>Django</span><span>Django REST Framework</span><span>PostgreSQL</span><span>Stripe</span><span>JWT</span><span>2FA</span><span>QR Verification</span><span>Docker</span><span>AWS EC2</span><span>RDS</span><span>S3</span><span>Nginx</span><span>Gunicorn</span><span>Linux</span><span>CI/CD</span></div></div>
          </article>
        </div>
      </section>

      <section className="all-engage" id="all-engage" aria-labelledby="all-engage-title">
        <header className="all-engage-header">
          <p className="eyebrow">05 / FEATURED PROFESSIONAL PROJECT · TALENT ABUNDANCE</p>
          <h2 id="all-engage-title">All Engage<span>.</span></h2>
          <p className="all-engage-tagline">Understand your people. Strengthen your culture.</p>
          <p className="all-engage-subtitle">Employee Engagement &amp; Predictive Analytics Platform</p>
        </header>

        <div className="all-engage-overview">
          <div>
            <p className="eyebrow">THE PLATFORM</p>
            <p>All Engage helps organizations understand workforce engagement, measure employee loyalty, identify potential attrition risks, and improve retention. It turns employee feedback into clear analytics and predictive insights that support informed workforce decisions.</p>
          </div>
          <aside className="platform-map" aria-label="All Engage platform modules">
            <p className="map-kicker">ONE PLATFORM · TWO PERSPECTIVES</p>
            <div className="platform-flow">
              <div className="flow-node"><span>01 / CURRENT WORKFORCE</span><strong>Participant<br />Survey</strong><small>Engagement &amp; loyalty</small></div>
              <span className="flow-connector" aria-hidden="true">↔</span>
              <div className="flow-node exit-node"><span>02 / DEPARTING EMPLOYEES</span><strong>Exit Lens</strong><small>Anonymous exit insights</small></div>
            </div>
            <p className="map-note">Listen across the employee journey.</p>
          </aside>
        </div>

        <div className="all-engage-purpose">
          <article><span>THE CHALLENGE</span><h3>Feedback is only useful when it leads to understanding.</h3><p>Traditional surveys and exit interviews can make it difficult to see engagement patterns across an organization or understand the factors behind employee departures.</p></article>
          <article><span>THE RESPONSE</span><h3>Two complementary ways to listen.</h3><p>All Engage combines ongoing workforce surveys with a separate anonymous exit assessment, then organizes responses into dashboards, reports, and patterns leaders can explore.</p></article>
        </div>

        <div className="all-engage-modules-heading">
          <p className="eyebrow">ONE PLATFORM · TWO MODULES</p>
          <h3>Different moments.<br /><span>Deeper understanding.</span></h3>
        </div>

        <div className="engage-modules">
          <article className="engage-module">
            <figure className="module-image participant-image">
              <img src="/images/allengage%20participant%20survey.jpg" alt="Participant Survey dashboard with engagement indicators, sentiment charts, and workforce trends" loading="lazy" />
            </figure>
            <div className="module-content">
              <p className="module-kicker">01 / LISTEN TO YOUR CURRENT WORKFORCE</p>
              <h3>Participant Survey</h3>
              <p>Measures engagement, loyalty, and employee sentiment among the people currently working in the organization. Explore trends across departments, locations, roles, and grades.</p>
              <ul className="module-features">
                <li>Multilingual surveys for employees to respond in their preferred language</li>
                <li>Predictive intelligence to highlight groups that may be at risk due to low engagement</li>
                <li>Real-time dashboards, visualizations, and ad-hoc reporting</li>
                <li>Multivariate analysis across organizational dimensions</li>
                <li>Responsive experience across mobile, tablet, and desktop</li>
              </ul>
            </div>
          </article>

          <article className="engage-module exit-module" id="exit-lens">
            <figure className="module-image exit-image">
              <img src="/images/exit%20lens.jpg" alt="Exit Lens dashboard summarizing interview completion, reasons for leaving, and employee feedback" loading="lazy" />
            </figure>
            <div className="module-content">
              <p className="module-kicker">02 / LEARN FROM DEPARTING EMPLOYEES</p>
              <h3>Exit Lens</h3>
              <p>An anonymous online exit assessment that gives departing employees a confidential way to share their experience. By keeping the assessment external and not capturing personal identity details, Exit Lens is designed to encourage candid feedback.</p>
              <ul className="module-features">
                <li>Multilingual feedback in the employee’s preferred language</li>
                <li>Identity-conscious assessment designed to encourage honest responses</li>
                <li>Analysis of factors influencing departures and employee turnover</li>
                <li>Pattern recognition and root cause insights into recurring concerns</li>
                <li>Responsive experience across mobile, tablet, and laptop</li>
              </ul>
            </div>
            <figure className="module-gallery">
              <img src="/images/exit-lens1.jpg" alt="Additional Exit Lens analytics views with cross-analysis, confidence and concern factors, and response breakdowns" loading="lazy" />
              <figcaption>Exit Lens · Cross-analysis and feedback patterns</figcaption>
            </figure>
          </article>
        </div>

        <div className="all-engage-value">
          <div><p className="eyebrow">WHY IT MATTERS</p><h3>Turn employee feedback into <span>better decisions.</span></h3></div>
          <ul>
            <li>Understand workforce engagement and sentiment</li>
            <li>Spot potential attrition risks and patterns</li>
            <li>Explore differences across teams and employee groups</li>
            <li>Uncover factors influencing employee departures</li>
            <li>Support stronger engagement and retention strategies</li>
          </ul>
        </div>
      </section>

      <section className="eadc" id="eadc" aria-labelledby="eadc-title">
        <header className="eadc-header">
          <div>
            <p className="eyebrow">06 / FEATURED PROFESSIONAL PROJECT · TALENT ABUNDANCE</p>
            <h2 id="eadc-title">eADC<span>.</span></h2>
            <p className="eadc-subtitle">AI-Powered Assessment &amp; Development Center Platform</p>
          </div>
          <div className="eadc-tool-count"><strong>14+</strong><span>ASSESSMENT<br />TOOLS</span></div>
        </header>

        <div className="eadc-content">
          <div className="eadc-overview">
            <p className="eyebrow">THE PLATFORM</p>
            <p>eADC brings the experience of a traditional Assessment &amp; Development Center into a virtual, SaaS-based environment. It enables organizations to assess employees, candidates, and exiting members through structured exercises and behavioral observations, with programs that can run remotely across locations and time zones.</p>
            <p>Unlike online tools focused mainly on aptitude or psychometric tests, eADC simulates a broader assessment center experience—using realistic activities to evaluate behavioral competencies and role-specific technical skills.</p>
          </div>

          <div className="eadc-gallery" aria-label="eADC product screens">
            <figure>
              <img src="/images/eadc.png" alt="eADC virtual assessment interface showing assessment activity, participant interactions, assessor controls, and reports" loading="lazy" />
              <figcaption>Virtual assessment experience</figcaption>
            </figure>
            <figure>
              <img src="/images/eadc-metrics.png" alt="eADC competency analytics dashboard with performance trends, competency breakdown, and assessment reporting" loading="lazy" />
              <figcaption>Competency insights and reporting</figcaption>
            </figure>
          </div>

          <div className="eadc-problem-solution">
            <article>
              <span>THE BUSINESS PROBLEM</span>
              <h3>Traditional assessment centers take significant coordination.</h3>
              <p>Physical centers involve travel, venues, scheduling, and manual coordination. Basic online tests also offer limited scope for observing how people respond to realistic, interactive assessment exercises.</p>
            </article>
            <article>
              <span>THE eADC APPROACH</span>
              <h3>Bring structured assessment activities online.</h3>
              <p>eADC provides a virtual setting for exercises, participant interaction, live demonstrations, assessor observations, and scoring—while supporting programs for different roles, organizational levels, locations, and participant volumes.</p>
            </article>
          </div>

          <div className="eadc-process" aria-label="Assessment process capabilities">
            <div><span>01</span><strong>Structured<br />exercises</strong></div>
            <span className="eadc-process-arrow" aria-hidden="true">→</span>
            <div><span>02</span><strong>Observation<br />&amp; scoring</strong></div>
            <span className="eadc-process-arrow" aria-hidden="true">→</span>
            <div><span>03</span><strong>Reports<br />&amp; rankings</strong></div>
          </div>

          <div className="eadc-tools">
            <div className="eadc-section-heading">
              <p className="eyebrow">ASSESSMENT TOOLKIT</p>
              <h3>Realistic exercises.<br /><span>Broader evaluation.</span></h3>
              <p>More than 14 assessment tools support structured activities. Examples include:</p>
            </div>
            <ul className="eadc-tool-list">
              <li>In-Basket Exercises</li>
              <li>Case Analysis</li>
              <li>Role Plays</li>
              <li>Leaderless Group Discussions</li>
              <li>Consensus-Building Exercises</li>
              <li>Group Simulation</li>
            </ul>
          </div>

          <div className="eadc-capabilities">
            <div className="eadc-section-heading">
              <p className="eyebrow">CORE CAPABILITIES</p>
              <h3>Designed for complex<br /><span>assessment programs.</span></h3>
            </div>
            <div className="eadc-capability-grid">
              <article><span>01</span><h4>Remote and scalable</h4><p>Run programs across geographies and time zones, from small cohorts to large participant volumes.</p></article>
              <article><span>02</span><h4>Role-aware assessments</h4><p>Customize activities for different job roles, industries, and organizational levels—from entry-level to leadership.</p></article>
              <article><span>03</span><h4>Live assessment experience</h4><p>Bring demonstrations, participant interaction, assessor observations, and scoring into an integrated interface.</p></article>
              <article><span>04</span><h4>Actionable reporting</h4><p>Use individual reports, consolidated scores, and participant rankings to support assessment decisions.</p></article>
              <article><span>05</span><h4>Assessment integrity</h4><p>Malpractice detection and prevention techniques help protect the authenticity and reliability of outcomes.</p></article>
              <article><span>06</span><h4>Behavioral and technical skills</h4><p>Evaluate competencies through structured, realistic exercises rather than relying only on conventional online tests.</p></article>
            </div>
          </div>

          <div className="eadc-value">
            <p className="eyebrow">BUSINESS VALUE</p>
            <h3>Better assessment decisions, with less operational overhead.</h3>
            <p>eADC aims to reduce travel, physical-center logistics, and manual coordination while supporting objective decisions for talent assessment, succession planning, and employee development.</p>
          </div>
        </div>
      </section>

      <section className="education" id="education" aria-labelledby="education-title">
        <div className="education-heading">
          <p className="eyebrow">07 / EDUCATION</p>
          <h2 id="education-title">A strong base<br />for <span>what’s next.</span></h2>
        </div>
        <div className="education-list">
          <article className="education-card">
            <span className="education-years">2018 — 2021</span>
            <div><h3>Bachelor of Science</h3><p className="education-subtitle">Information Technology</p><p className="education-institution">Bharathiar University</p></div>
            <div className="education-result"><strong>7.04</strong><span>CGPA</span></div>
          </article>
          <article className="education-card">
            <span className="education-years">2016 — 2018</span>
            <div><h3>Higher Secondary</h3><p className="education-subtitle">Board of Public Examination</p></div>
            <div className="education-result"><strong>70.08%</strong><span>PERCENTAGE</span></div>
          </article>
        </div>
      </section>

      <footer>
        <span>MADE WITH REACT</span>
        <div className="footer-socials">
          <a href="https://www.linkedin.com/in/amal-m-m-13b682168" target="_blank" rel="noreferrer">LinkedIn ↗</a>
          <a href="https://github.com/amal-551" target="_blank" rel="noreferrer">GitHub ↗</a>
        </div>
        <a className="footer-email" href="mailto:amalmohanan555@gmail.com">amalmohanan555@gmail.com <span aria-hidden="true">↗</span></a>
        <span>© {new Date().getFullYear()} AMAL MOHANAN</span>
      </footer>
    </main>
  )
}

export default App
