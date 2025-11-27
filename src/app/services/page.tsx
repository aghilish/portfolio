import Link from 'next/link';
import {
  KubernetesIcon,
  DevOpsIcon,
  ObservabilityIcon,
  CloudIcon,
  FactoryIcon,
  MoneyIcon,
  CalendarIcon,
  FolderIcon
} from '@/components/Icons';
import { LinkedInLogo } from '@/components/CompanyLogos';

const services = [
  {
    icon: KubernetesIcon,
    title: 'Kubernetes Infrastructure Design',
    description: 'Design and implement production-grade Kubernetes clusters tailored to your organization\'s needs.',
    offerings: [
      'Cluster architecture and sizing',
      'Multi-cluster strategies',
      'Security hardening (PSP, OPA, Network Policies)',
      'High availability and disaster recovery',
      'Cost optimization and resource management',
    ],
  },
  {
    icon: DevOpsIcon,
    title: 'DevOps & CI/CD Strategy',
    description: 'Transform your software delivery with modern DevOps practices and automated pipelines.',
    offerings: [
      'CI/CD pipeline design (Tekton, GitHub Actions, GitLab)',
      'GitOps implementation with ArgoCD/Flux',
      'Release management strategies',
      'Testing automation integration',
      'Developer experience optimization',
    ],
  },
  {
    icon: ObservabilityIcon,
    title: 'Observability Implementation',
    description: 'Gain full visibility into your systems with comprehensive observability solutions.',
    offerings: [
      'OpenTelemetry instrumentation',
      'Elastic Stack deployment and optimization',
      'Custom metrics and KPI dashboards',
      'Distributed tracing setup',
      'Alerting and incident response automation',
    ],
  },
  {
    icon: CloudIcon,
    title: 'Cloud Architecture & Migration',
    description: 'Navigate your cloud journey with expert guidance on architecture and migration.',
    offerings: [
      'Cloud-native architecture design',
      'GCP/AWS migration planning',
      'Multi-cloud and hybrid strategies',
      'Well-Architected Framework reviews',
      'Landing zone implementation',
    ],
  },
  {
    icon: FactoryIcon,
    title: 'Google Cloud Manufacturing Data Engine',
    description: 'Leverage Google\'s manufacturing solutions for Industry 4.0 transformation.',
    offerings: [
      'MDE architecture and implementation',
      'Data pipeline design',
      'Integration with existing systems',
      'PoC development and validation',
      'Production deployment and optimization',
    ],
  },
  {
    icon: MoneyIcon,
    title: 'FinOps & Cost Optimization',
    description: 'Optimize your cloud spend while maintaining performance and reliability.',
    offerings: [
      'Cloud cost analysis and reporting',
      'Resource right-sizing',
      'Reserved capacity planning',
      'Spot/Preemptible instance strategies',
      'Chargeback and showback implementation',
    ],
  },
];

const engagementTypes = [
  {
    title: 'Advisory Retainer',
    description: 'Ongoing strategic guidance for your cloud-native initiatives. Regular check-ins, architecture reviews, and on-demand consultation.',
    duration: 'Monthly',
  },
  {
    title: 'Project-Based',
    description: 'Focused engagement for specific initiatives like migrations, new platform builds, or observability implementations.',
    duration: '2-6 months',
  },
  {
    title: 'Technical Assessment',
    description: 'Comprehensive review of your current infrastructure, identifying improvements and creating actionable roadmaps.',
    duration: '1-2 weeks',
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Page Header */}
      <header className="page-header">
        <h1 className="page-header__title">Services</h1>
        <p className="page-header__subtitle">
          Enterprise-grade cloud-native consulting for organizations ready to scale.
        </p>
      </header>

      {/* Services Grid */}
      <h2 className="section-title">Core Services</h2>
      <section className="cards-grid">
        {services.map((service) => {
          const IconComponent = service.icon;
          return (
            <div key={service.title} className="service-card">
              <IconComponent className="service-card__icon" style={{ color: 'var(--color-accent)' }} />
              <h3 className="service-card__title">{service.title}</h3>
              <p className="service-card__description">{service.description}</p>
              <ul className="service-card__list">
                {service.offerings.map((offering) => (
                  <li key={offering}>{offering}</li>
                ))}
              </ul>
            </div>
          );
        })}
      </section>

      {/* Engagement Types */}
      <h2 className="section-title">Engagement Models</h2>
      <section className="cards-grid">
        {engagementTypes.map((type) => (
          <div key={type.title} className="card" style={{ textAlign: 'left' }}>
            <span className="card__date" style={{ fontSize: '1.6rem' }}>{type.duration}</span>
            <h3 className="card__title" style={{ marginTop: '1rem', fontSize: '2rem' }}>{type.title}</h3>
            <p className="card__teaser" style={{ marginBottom: 0, fontSize: '1.5rem' }}>{type.description}</p>
          </div>
        ))}
      </section>

      {/* Why Work With Me */}
      <section className="content-section">
        <h2 className="content-section__title">Why Work With Me</h2>
        <div className="rich-text" style={{ maxWidth: '80ch' }}>
          <ul>
            <li>
              <strong>Enterprise Experience:</strong> Proven track record with Fortune 500 companies 
              including Volkswagen, Audi, and Commerzbank.
            </li>
            <li>
              <strong>Certified Expertise:</strong> CKA, CKS, and GCP Professional Cloud Architect 
              certifications demonstrate deep technical knowledge.
            </li>
            <li>
              <strong>End-to-End Capability:</strong> From architecture design to implementation to 
              team enablement — I can support the entire journey.
            </li>
            <li>
              <strong>Community Leadership:</strong> As a CNCF Community Group Organizer, I stay at 
              the forefront of cloud-native innovations.
            </li>
            <li>
              <strong>Education Focus:</strong> I don't just implement — I transfer knowledge to ensure 
              your team can maintain and evolve the solutions.
            </li>
          </ul>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section cta-section--services">
        <Link href="/contact" className="cta-button cta-button--services cta-button--primary">
          <CalendarIcon width="20" height="20" />
          Schedule a Call
        </Link>
        <Link href="/portfolio" className="cta-button cta-button--services">
          <FolderIcon width="20" height="20" />
          View Portfolio
        </Link>
        <a
          href="https://linkedin.com/in/aghilish"
          target="_blank"
          rel="noopener noreferrer"
          className="cta-button cta-button--services"
        >
          <LinkedInLogo width={20} height={20} />
          Connect on LinkedIn
        </a>
      </section>
    </>
  );
}
