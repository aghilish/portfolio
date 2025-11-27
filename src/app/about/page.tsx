import { PlatformIcon, ObservabilityIcon, EducationIcon } from '@/components/Icons';

export default function AboutPage() {
  return (
    <>
      {/* Page Header */}
      <header className="page-header">
        <h1 className="page-header__title">About Me</h1>
        <p className="page-header__subtitle">
          From research labs to enterprise cloud — a journey of continuous learning and technical leadership.
        </p>
      </header>

      {/* Bio Section */}
      <section className="content-section">
        <h2 className="content-section__title">The Story</h2>
        <div className="rich-text" style={{ maxWidth: '80ch' }}>
          <p>
            I'm <strong>Shahrooz Aghili</strong>, a Senior Solutions Architect and DevOps Technical Lead
            based in Frankfurt, Germany. With over 16 years in software engineering, I've evolved from
            academic research in telecommunications to becoming a trusted advisor for Fortune 500 companies
            on their cloud-native transformations.
          </p>
          <p>
            My journey began at <strong>Sharif University of Technology</strong>, where I researched
            Software Defined Networks. After pursuing a PhD at <strong>TU Darmstadt</strong> (focusing on
            5G mm-wave technologies), I pivoted to the industry, bringing research rigor to practical
            engineering challenges.
          </p>
          <p>
            Today, I lead DevOps workstreams at <strong>Deloitte Consulting</strong>, architecting platforms
            for automotive giants like Volkswagen and Audi. I'm passionate about making complex cloud-native
            technologies accessible — through my consulting work, community organizing, and educational content.
          </p>
        </div>
      </section>

      {/* What I Do */}
      <section className="content-section" style={{ paddingLeft: 0, paddingRight: 0 }}>
        <h2 className="content-section__title" style={{ paddingLeft: '3rem', paddingRight: '3rem' }}>What I Do</h2>
        <div className="cards-grid">
          <div className="card" style={{ textAlign: 'left', borderLeft: 'none' }}>
            <PlatformIcon style={{ marginBottom: '1.5rem', color: 'var(--color-accent)' }} />
            <h3 className="card__title" style={{ marginTop: 0 }}>Platform Engineering</h3>
            <p className="card__teaser" style={{ marginBottom: 0 }}>
              Designing and implementing Kubernetes-based platforms that enable teams to ship faster
              with confidence. Focus on developer experience and operational excellence.
            </p>
          </div>
          <div className="card" style={{ textAlign: 'left' }}>
            <ObservabilityIcon style={{ marginBottom: '1.5rem', color: 'var(--color-accent)' }} />
            <h3 className="card__title" style={{ marginTop: 0 }}>Observability Strategy</h3>
            <p className="card__teaser" style={{ marginBottom: 0 }}>
              End-to-end observability implementations covering metrics, logs, traces, and business KPIs.
              Expert in OpenTelemetry and Elastic Stack integrations.
            </p>
          </div>
          <div className="card" style={{ textAlign: 'left' }}>
            <EducationIcon style={{ marginBottom: '1.5rem', color: 'var(--color-accent)' }} />
            <h3 className="card__title" style={{ marginTop: 0 }}>Education & Content</h3>
            <p className="card__teaser" style={{ marginBottom: 0 }}>
              Creating hands-on learning experiences through YouTube tutorials and KillerCoda
              interactive labs. Making cloud-native accessible to everyone.
            </p>
          </div>
        </div>
      </section>

      {/* Experience Timeline */}
      <section className="content-section">
        <h2 className="content-section__title">Experience</h2>
        <div className="timeline">
          <div className="timeline__item">
            <span className="timeline__date">2025 — Present</span>
            <h3 className="timeline__title">DevOps Squad Lead</h3>
            <p className="timeline__company">Deloitte Consulting</p>
            <p className="timeline__description">
              Leading two workstreams with 12+ consultants. Technical lead for VW's Agile Release Train. 
              Developing self-service CDK library and driving ART-wide observability strategy.
            </p>
          </div>
          <div className="timeline__item">
            <span className="timeline__date">2024</span>
            <h3 className="timeline__title">DevOps Tech Lead</h3>
            <p className="timeline__company">Deloitte Consulting</p>
            <p className="timeline__description">
              Led infrastructure automation and CI/CD pipeline development. Mentored team of engineers 
              and collaborated with VW/Audi product owners on rollout strategies.
            </p>
          </div>
          <div className="timeline__item">
            <span className="timeline__date">2023 — 2024</span>
            <h3 className="timeline__title">Senior Solutions Architect</h3>
            <p className="timeline__company">Deloitte Consulting</p>
            <p className="timeline__description">
              Directed Google Cloud Manufacturing Data Engine PoC. Applied FinOps principles and 
              GCP Well-Architected Framework. Delivered technical presentations to prospective clients.
            </p>
          </div>
          <div className="timeline__item">
            <span className="timeline__date">2021 — 2023</span>
            <h3 className="timeline__title">Senior Platform Engineer</h3>
            <p className="timeline__company">Commerzbank AG</p>
            <p className="timeline__description">
              Led engineering backlog for Kubernetes platform. Spearheaded multi-regional Google Anthos 
              migration. Designed workshops and mentored junior cloud-native engineers.
            </p>
          </div>
          <div className="timeline__item">
            <span className="timeline__date">2019 — 2021</span>
            <h3 className="timeline__title">Backend Engineer / DevOps</h3>
            <p className="timeline__company">Main Incubator GmbH</p>
            <p className="timeline__description">
              Member of agile incubator team building cloud-native apps on GCP. Dual role in backend 
              development and DevOps using Firebase, Node.js, and React.js.
            </p>
          </div>
          <div className="timeline__item">
            <span className="timeline__date">2016 — 2018</span>
            <h3 className="timeline__title">Researcher (PhD)</h3>
            <p className="timeline__company">TU Darmstadt</p>
            <p className="timeline__description">
              Research on 5G mm-wave network technologies. Used Python, C++, and MATLAB for network 
              simulation and implementation.
            </p>
          </div>
        </div>
      </section>

      {/* Skills & Certifications */}
      <section className="content-section">
        <h2 className="content-section__title">Skills & Certifications</h2>
        <div style={{ display: 'grid', gap: '3rem' }}>
          <div>
            <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.6rem', marginBottom: '1.5rem', color: 'var(--color-accent)' }}>
              Certifications
            </h3>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
              <span className="tag tag--accent">CKA: Certified Kubernetes Administrator</span>
              <span className="tag tag--accent">CKS: Certified Kubernetes Security Specialist</span>
              <span className="tag tag--accent">GCP Professional Cloud Architect</span>
              <span className="tag tag--accent">CNCF Community Group Organizer 2024</span>
            </div>
          </div>
          <div>
            <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.6rem', marginBottom: '1.5rem', color: 'var(--color-accent)' }}>
              Core Technologies
            </h3>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
              <span className="tag">Kubernetes</span>
              <span className="tag">Google Cloud Platform</span>
              <span className="tag">AWS</span>
              <span className="tag">Tekton</span>
              <span className="tag">OpenTelemetry</span>
              <span className="tag">Elastic Stack</span>
              <span className="tag">Terraform</span>
              <span className="tag">Helm</span>
              <span className="tag">ArgoCD</span>
              <span className="tag">GitHub Actions</span>
              <span className="tag">CDK</span>
              <span className="tag">Anthos</span>
            </div>
          </div>
          <div>
            <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.6rem', marginBottom: '1.5rem', color: 'var(--color-accent)' }}>
              Languages
            </h3>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
              <span className="tag">🇬🇧 English (Professional)</span>
              <span className="tag">🇩🇪 German (Professional)</span>
              <span className="tag">🇮🇷 Persian (Native)</span>
            </div>
          </div>
        </div>
      </section>

      {/* Education */}
      <section className="content-section">
        <h2 className="content-section__title">Education</h2>
        <div className="timeline">
          <div className="timeline__item">
            <span className="timeline__date">2016 — 2018</span>
            <h3 className="timeline__title">PhD in Computer Science (Incomplete)</h3>
            <p className="timeline__company">Technische Universität Darmstadt</p>
            <p className="timeline__description">
              Research focus on 5G mm-wave network technologies.
            </p>
          </div>
          <div className="timeline__item">
            <span className="timeline__date">2013 — 2015</span>
            <h3 className="timeline__title">Master of Science, Information Technology</h3>
            <p className="timeline__company">Sharif University of Technology</p>
            <p className="timeline__description">
              Thesis: "Distributed Publisher-Subscriber Pattern for Content-Based Routing in SDN"
            </p>
          </div>
          <div className="timeline__item">
            <span className="timeline__date">2007 — 2011</span>
            <h3 className="timeline__title">Bachelor of Science, Computer Engineering</h3>
            <p className="timeline__company">Isfahan University of Technology</p>
          </div>
        </div>
      </section>
    </>
  );
}
