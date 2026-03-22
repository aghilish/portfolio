'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import { DeloitteLogo, VolkswagenLogo, GoogleCloudLogo, CommerzbankLogo, CariadLogo, GitHubLogo } from '@/components/CompanyLogos';

// Logo mapping for case studies (logos can't be stored in JSON)
const logoMap: Record<string, any[]> = {
  'deloitte-vw': [DeloitteLogo, VolkswagenLogo],
  'gcp-mde': [DeloitteLogo, GoogleCloudLogo],
  'commerzbank': [CommerzbankLogo, GoogleCloudLogo],
  'cariad': [CariadLogo],
  'main-incubator': [CommerzbankLogo, GoogleCloudLogo],
};

export default function PortfolioPage() {
  const { t } = useLanguage();

  const caseStudiesData = t('portfolio.caseStudies');
  const caseStudies = Array.isArray(caseStudiesData) ? caseStudiesData : [];

  return (
    <>
      {/* Page Header */}
      <header className="page-header">
        <h1 className="page-header__title">{t('portfolio.title')}</h1>
        <p className="page-header__subtitle">
          {t('portfolio.subtitle')}
        </p>
      </header>

      {/* Case Studies */}
      {caseStudies.map((study: any) => (
        <article key={study.id} id={study.id} className="case-study">
          <div className="case-study__meta">
            <span className="case-study__company">{study.company}</span>
            <h2 className="case-study__title">{study.title}</h2>
            <div className="case-study__tags">
              {study.technologies.map((tech: string) => (
                <span key={tech} className="tag">{tech}</span>
              ))}
            </div>
            <div className="case-study__logos">
              {logoMap[study.id]?.map((Logo, index) => (
                <Logo
                  key={index}
                  className="case-study__logo"
                />
              ))}
            </div>
          </div>
          <div className="case-study__content">
            <h4>{t('portfolio.context')}</h4>
            <p>{study.context}</p>

            <h4>{t('portfolio.challenges')}</h4>
            <ul>
              {study.challenges.map((challenge: string) => (
                <li key={challenge}>{challenge}</li>
              ))}
            </ul>

            <h4>{t('portfolio.approach')}</h4>
            <p>{study.approach}</p>

            <h4>{t('portfolio.results')}</h4>
            <ul>
              {study.results.map((result: string) => (
                <li key={result}>{result}</li>
              ))}
            </ul>
          </div>
        </article>
      ))}

      {/* Open Source Projects Section */}
      <section className="content-section">
        <header className="content-section__header">
          <h2 className="content-section__title">{t('portfolio.openSourceTitle')}</h2>
          <p className="content-section__subtitle">{t('portfolio.openSourceSubtitle')}</p>
        </header>
        <div className="cards-grid cards-grid--4">
          {(t('portfolio.openSourceProjects') as any[])?.map((project: any) => (
            <a
              key={project.id}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="card card--open-source"
            >
              <div className="card__icon">
                <GitHubLogo width={32} height={32} />
              </div>
              <h3 className="card__title">{project.title}</h3>
              <p className="card__teaser">{project.description}</p>
              <div className="card__tags">
                {project.technologies.map((tech: string) => (
                  <span key={tech} className="tag">{tech}</span>
                ))}
              </div>
              <span className="card__link">
                {t('portfolio.viewOnGitHub')} →
              </span>
            </a>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="content-section" style={{ textAlign: 'center' }}>
        <h2 className="content-section__title" style={{ justifyContent: 'center' }}>
          {t('portfolio.readyToDiscuss')}
        </h2>
        <p style={{ marginBottom: '3rem', color: 'var(--color-muted)', maxWidth: '50ch', margin: '0 auto 3rem' }}>
          {t('portfolio.readyToDiscussDesc')}
        </p>
        <a href="/contact" className="btn btn--accent">
          {t('portfolio.startConversation')}
        </a>
      </section>
    </>
  );
}
