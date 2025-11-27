import Link from 'next/link';

const communityRole = {
  title: 'Cloud Native Frankfurt',
  role: 'Community Group Organizer',
  description: `As a CNCF Community Group Organizer, I help foster the cloud-native ecosystem
    in the Frankfurt Rhine-Main metropolitan area. We organize meetups, workshops, and networking
    events for cloud-native practitioners.`,
  activities: [
    'Organizing monthly meetups and technical talks',
    'Coordinating with CNCF for community initiatives',
    'Facilitating knowledge sharing among practitioners',
    'Connecting local talent with cloud-native opportunities',
  ],
  meetupUrl: 'https://www.meetup.com/cloud-native-frankfurt/',
};

const pastTalks = [
  {
    title: 'Crossplane Composition Functions, Step by Step',
    event: 'Cloud Native Frankfurt Meetup',
    date: 'July 2024',
    description: 'Deep dive into Crossplane Composition Functions, exploring how to build custom compositions for infrastructure provisioning.',
    tags: ['Crossplane', 'Kubernetes', 'IaC'],
    url: 'https://community.cncf.io/events/details/cncf-cloud-native-frankfurt-presents-cloud-native-frankfurt-meetup-jul-2024/',
  },
  {
    title: 'Power Up Your Kubernetes Clusters with AI',
    event: 'Grafana Friends Frankfurt',
    date: 'November 2024',
    description: 'AI + Kubernetes: Exploring K8SGPT for intelligent Kubernetes troubleshooting and Schednex AI-powered Scheduler.',
    tags: ['K8SGPT', 'Grafana', 'Kubernetes', 'Observability'],
    url: 'https://www.meetup.com/grafana-friends-frankfurt/events/304895481/',
  },
];

const speakingTopics = [
  {
    title: 'Kubernetes Platform Engineering',
    description: 'Building developer-friendly platforms on Kubernetes that balance autonomy with governance.',
    tags: ['Kubernetes', 'Platform Engineering', 'DevEx'],
  },
  {
    title: 'Observability in Cloud-Native Systems',
    description: 'Implementing comprehensive observability with OpenTelemetry, covering metrics, logs, and traces.',
    tags: ['OpenTelemetry', 'Observability', 'Elastic Stack'],
  },
  {
    title: 'DevOps Transformation',
    description: 'Practical strategies for adopting DevOps practices in enterprise environments.',
    tags: ['DevOps', 'CI/CD', 'Culture'],
  },
  {
    title: 'Cloud-Native Security',
    description: 'Security best practices for Kubernetes and cloud-native workloads.',
    tags: ['Security', 'CKS', 'Zero Trust'],
  },
  {
    title: 'FinOps for Cloud-Native',
    description: 'Optimizing cloud costs while maintaining performance and reliability.',
    tags: ['FinOps', 'Cost Optimization', 'GCP'],
  },
];

const workshops = [
  {
    title: 'Kubernetes Fundamentals',
    duration: 'Full Day',
    description: 'Hands-on introduction to Kubernetes for developers and operators. Covers core concepts, deployments, services, and basic troubleshooting.',
    format: 'Interactive workshop with live exercises',
  },
  {
    title: 'Advanced Kubernetes Operations',
    duration: '2 Days',
    description: 'Deep dive into production Kubernetes: security hardening, observability setup, GitOps workflows, and disaster recovery.',
    format: 'Workshop with real-world scenarios',
  },
  {
    title: 'OpenTelemetry Implementation',
    duration: 'Half Day',
    description: 'Practical guide to instrumenting applications with OpenTelemetry and setting up observability backends.',
    format: 'Hands-on lab session',
  },
  {
    title: 'CI/CD with Tekton',
    duration: 'Full Day',
    description: 'Building cloud-native CI/CD pipelines with Tekton. From basics to advanced patterns for enterprise use.',
    format: 'Workshop with pipeline building exercises',
  },
];

export default function SpeakingPage() {
  return (
    <>
      {/* Page Header */}
      <header className="page-header">
        <h1 className="page-header__title">Speaking & Community</h1>
        <p className="page-header__subtitle">
          Sharing knowledge and building the cloud-native community.
        </p>
      </header>

      {/* Community Role */}
      <section className="content-section">
        <h2 className="content-section__title">Community Leadership</h2>
        <div style={{ display: 'grid', gap: '2rem' }}>
          <div style={{ 
            padding: '3rem', 
            border: '1px solid var(--color-border)',
            background: 'linear-gradient(135deg, rgba(0,212,170,0.05) 0%, rgba(77,175,230,0.05) 100%)'
          }}>
            <span style={{ 
              fontSize: '1.2rem', 
              textTransform: 'uppercase', 
              letterSpacing: '0.1em',
              color: 'var(--color-accent)' 
            }}>
              {communityRole.role}
            </span>
            <h3 style={{ 
              fontFamily: 'var(--font-display)', 
              fontSize: '2.4rem',
              margin: '1rem 0'
            }}>
              {communityRole.title}
            </h3>
            <p style={{ 
              color: 'var(--color-muted)', 
              lineHeight: '1.7',
              marginBottom: '2rem',
              maxWidth: '70ch'
            }}>
              {communityRole.description}
            </p>
            <ul style={{ display: 'grid', gap: '0.8rem', marginBottom: '2rem' }}>
              {communityRole.activities.map((activity) => (
                <li key={activity} style={{
                  paddingLeft: '2.5rem',
                  position: 'relative',
                  color: 'var(--color-muted)'
                }}>
                  <span style={{
                    position: 'absolute',
                    left: 0,
                    color: 'var(--color-accent)'
                  }}>→</span>
                  {activity}
                </li>
              ))}
            </ul>
            <a
              href={communityRole.meetupUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn--accent"
            >
              Join Cloud Native Frankfurt
            </a>
          </div>
        </div>
      </section>

      {/* Past Talks */}
      <h2 className="section-title">Past Talks</h2>
      <section className="cards-grid">
        {pastTalks.map((talk) => (
          <article key={talk.title} className="card">
            <span className="card__date">{talk.event} · {talk.date}</span>
            <h3 className="card__title">{talk.title}</h3>
            <p className="card__teaser">{talk.description}</p>
            <div className="card__tags">
              {talk.tags.map((tag) => (
                <span key={tag} className="tag">{tag}</span>
              ))}
            </div>
            <a href={talk.url} target="_blank" rel="noopener noreferrer" className="btn card__btn">
              View Event
            </a>
          </article>
        ))}
      </section>

      {/* Speaking Topics */}
      <h2 className="section-title">Speaking Topics</h2>
      <section className="cards-grid">
        {speakingTopics.map((topic) => (
          <div key={topic.title} className="card" style={{ textAlign: 'left' }}>
            <h3 className="card__title" style={{ marginTop: 0 }}>{topic.title}</h3>
            <p className="card__teaser">{topic.description}</p>
            <div className="card__tags" style={{ justifyContent: 'flex-start' }}>
              {topic.tags.map((tag) => (
                <span key={tag} className="tag">{tag}</span>
              ))}
            </div>
          </div>
        ))}
      </section>

      {/* Workshops */}
      <h2 className="section-title">Workshops & Training</h2>
      <section className="cards-grid">
        {workshops.map((workshop) => (
          <div key={workshop.title} className="card" style={{ textAlign: 'left' }}>
            <span className="card__date">{workshop.duration}</span>
            <h3 className="card__title" style={{ marginTop: '1rem' }}>{workshop.title}</h3>
            <p className="card__teaser">{workshop.description}</p>
            <p style={{ fontSize: '1.2rem', color: 'var(--color-accent)', marginTop: 'auto' }}>
              {workshop.format}
            </p>
          </div>
        ))}
      </section>

      {/* Invite CTA */}
      <section className="content-section" style={{ textAlign: 'center' }}>
        <h2 className="content-section__title" style={{ justifyContent: 'center' }}>
          Invite Me to Speak
        </h2>
        <p style={{ marginBottom: '3rem', color: 'var(--color-muted)', maxWidth: '50ch', margin: '0 auto 3rem' }}>
          Interested in having me speak at your conference, meetup, or corporate event? 
          I'd love to share knowledge with your audience.
        </p>
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link href="/contact" className="btn btn--accent">
            Get in Touch
          </Link>
          <a 
            href="https://youtube.com/@aghilish" 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn btn--external"
          >
            Watch Previous Talks
          </a>
        </div>
      </section>
    </>
  );
}
