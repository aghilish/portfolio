const caseStudies = [
  {
    id: 'deloitte-vw',
    company: 'Deloitte × Volkswagen',
    title: 'DevOps Enabling Team for Future Shopfloor Services',
    context: `Volkswagen's Agile Release Train (ART) for Future Shopfloor Services needed a robust DevOps 
      foundation to support their manufacturing digitalization initiative. The platform serves multiple 
      teams building applications for plant-based Kubernetes clusters.`,
    challenges: [
      'Lack of standardized infrastructure provisioning across teams',
      'No unified observability strategy covering all monitoring signals',
      'Complex release management for plant-based cluster deployments',
      'Need for self-service capabilities without sacrificing compliance',
    ],
    approach: `Led the DevOps Enabling Team as Squad Lead, responsible for two workstreams with 12+ 
      consultants. Implemented a comprehensive strategy covering infrastructure automation, CI/CD 
      pipelines, and end-to-end observability.`,
    results: [
      'Developed self-service CDK library compliant with VW AWS Vanguard framework',
      'Implemented ART-wide observability strategy (metrics, logs, traces, business KPIs)',
      'Zero-code instrumentation via shared NuGet packages across ART FSS',
      'Integrated Elastic Stack with OTLP exporters via extended Helm charts',
      'Designed release concepts for controlled plant-based deployments',
    ],
    technologies: ['Kubernetes', 'EKS', 'AWS CDK', 'Tekton', 'OpenTelemetry', 'Elastic Stack', 'Helm'],
  },
  {
    id: 'gcp-mde',
    company: 'Deloitte × Google Cloud Alliance',
    title: 'Manufacturing Data Engine Proof of Concept',
    context: `As part of Deloitte's partnership with Google Cloud, we needed to demonstrate the 
      capabilities of the Manufacturing Data Engine (MDE) to prospective clients in the manufacturing 
      sector, showcasing how it can transform factory data management.`,
    challenges: [
      'Complex integration requirements with existing manufacturing systems',
      'Need to demonstrate value while optimizing cloud costs',
      'Tight timeline for PoC development',
      'Required seamless coordination with Google MDE development teams',
    ],
    approach: `Directed the entire PoC development, applying FinOps principles from day one and 
      ensuring alignment with GCP Well-Architected Framework. Built advanced pipelines for dynamic 
      resource management.`,
    results: [
      'Successfully demonstrated MDE capabilities to multiple Deloitte clients',
      'Implemented cost-optimized architecture using FinOps best practices',
      'Built Kubernetes node scheduling pipelines for on-demand provisioning',
      'Established direct collaboration channel with Google MDE team',
      'Created reusable patterns for future MDE implementations',
    ],
    technologies: ['Google Cloud', 'Manufacturing Data Engine', 'GKE', 'BigQuery', 'Terraform', 'FinOps'],
  },
  {
    id: 'commerzbank',
    company: 'Commerzbank AG',
    title: 'Multi-Regional Google Anthos Migration',
    context: `Commerzbank's Knowledge Graph platform required enhanced scalability and reliability 
      to support growing microservices workloads. The existing single-region setup was becoming a 
      bottleneck for business continuity requirements.`,
    challenges: [
      'Complex microservices dependencies across multiple teams',
      'Strict banking compliance and security requirements',
      'Zero-downtime migration requirement',
      'Need to maintain team productivity during transition',
    ],
    approach: `Led the engineering backlog as Senior Platform Engineer, coordinating with multiple 
      teams while designing and executing the migration. Conducted workshops to ensure knowledge 
      transfer across the organization.`,
    results: [
      'Successfully migrated to multi-regional Google Anthos setup',
      'Enhanced scalability supporting 3x workload growth',
      'Improved reliability with cross-region failover capabilities',
      'Designed and delivered Kubernetes platform workshops',
      'Created hands-on learning resources on KillerCoda',
    ],
    technologies: ['Google Anthos', 'GKE', 'Kubernetes', 'Istio', 'Cloud SQL', 'Terraform'],
  },
  {
    id: 'cariad',
    company: 'CARIAD (Volkswagen Group)',
    title: 'CI/CD Migration to GitHub Enterprise',
    context: `CARIAD's Infotainment software build pipeline was running on the internal DevStack 
      platform. The team needed to migrate to GitHub Enterprise to improve collaboration and 
      leverage advanced CI/CD capabilities.`,
    challenges: [
      'Complex build dependencies for Infotainment software',
      'Need to maintain build reproducibility during migration',
      'Integration with existing tooling and workflows',
      'Tight project timeline (2 months)',
    ],
    approach: `Worked as freelance consultant to analyze existing pipelines, design the target 
      architecture, and execute the migration with minimal disruption to development teams.`,
    results: [
      'Completed migration within 2-month timeline',
      'Improved pipeline maintainability and documentation',
      'Enhanced collaboration through GitHub Enterprise features',
      'Reduced build times through optimized workflows',
    ],
    technologies: ['GitHub Enterprise', 'GitHub Actions', 'Docker', 'CI/CD'],
  },
  {
    id: 'main-incubator',
    company: 'Main Incubator GmbH',
    title: 'Cloud-Native Application Development on GCP',
    context: `As part of Commerzbank's innovation arm, Main Incubator builds cutting-edge 
      fintech applications. The team needed full-stack engineering capabilities with strong 
      DevOps practices for rapid iteration.`,
    challenges: [
      'Fast-paced startup environment requiring quick iterations',
      'Need for both backend development and infrastructure expertise',
      'Building for scale while keeping costs manageable',
      'Compliance requirements from parent banking organization',
    ],
    approach: `Served dual role as Backend Engineer and DevOps specialist, implementing 
      cloud-native architecture while maintaining development velocity. Focused on automation 
      and developer experience.`,
    results: [
      'Built and deployed multiple cloud-native applications',
      'Implemented scalable serverless architecture on GCP',
      'Established DevOps practices for small team efficiency',
      'Created reusable infrastructure patterns with Terraform',
    ],
    technologies: ['Google Cloud', 'Firebase', 'Node.js', 'TypeScript', 'React', 'Cloud Functions'],
  },
];

export default function PortfolioPage() {
  return (
    <>
      {/* Page Header */}
      <header className="page-header">
        <h1 className="page-header__title">Portfolio</h1>
        <p className="page-header__subtitle">
          Real-world case studies from enterprise cloud-native transformations.
        </p>
      </header>

      {/* Case Studies */}
      {caseStudies.map((study) => (
        <article key={study.id} id={study.id} className="case-study">
          <div className="case-study__meta">
            <span className="case-study__company">{study.company}</span>
            <h2 className="case-study__title">{study.title}</h2>
            <div className="case-study__tags">
              {study.technologies.map((tech) => (
                <span key={tech} className="tag">{tech}</span>
              ))}
            </div>
          </div>
          <div className="case-study__content">
            <h4>Context</h4>
            <p>{study.context}</p>
            
            <h4>Challenges</h4>
            <ul>
              {study.challenges.map((challenge) => (
                <li key={challenge}>{challenge}</li>
              ))}
            </ul>
            
            <h4>Approach</h4>
            <p>{study.approach}</p>
            
            <h4>Results</h4>
            <ul>
              {study.results.map((result) => (
                <li key={result}>{result}</li>
              ))}
            </ul>
          </div>
        </article>
      ))}

      {/* CTA */}
      <section className="content-section" style={{ textAlign: 'center' }}>
        <h2 className="content-section__title" style={{ justifyContent: 'center' }}>
          Ready to discuss your project?
        </h2>
        <p style={{ marginBottom: '3rem', color: 'var(--color-muted)', maxWidth: '50ch', margin: '0 auto 3rem' }}>
          Let's explore how I can help your organization achieve similar results.
        </p>
        <a href="/contact" className="btn btn--accent">
          Start a Conversation
        </a>
      </section>
    </>
  );
}
