'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import { PlatformIcon, ObservabilityIcon, EducationIcon } from '@/components/Icons';

export default function AboutPage() {
  const { t } = useLanguage();

  const experienceData = t('about.experienceItems');
  const experienceItems = Array.isArray(experienceData) ? experienceData : [];

  const educationData = t('about.educationItems');
  const educationItems = Array.isArray(educationData) ? educationData : [];

  return (
    <>
      {/* Page Header */}
      <header className="page-header">
        <h1 className="page-header__title">{t('about.title')}</h1>
        <p className="page-header__subtitle">
          {t('about.subtitle')}
        </p>
      </header>

      {/* Bio Section */}
      <section className="content-section">
        <h2 className="content-section__title">{t('about.storyTitle')}</h2>
        <div className="rich-text" style={{ maxWidth: '80ch' }}>
          <p dangerouslySetInnerHTML={{ __html: t('about.paragraph1') }} />
          <p dangerouslySetInnerHTML={{ __html: t('about.paragraph2') }} />
          <p dangerouslySetInnerHTML={{ __html: t('about.paragraph3') }} />
        </div>
      </section>

      {/* What I Do */}
      <section className="content-section" style={{ paddingLeft: 0, paddingRight: 0 }}>
        <h2 className="content-section__title" style={{ paddingLeft: '3rem', paddingRight: '3rem' }}>{t('about.whatIDo')}</h2>
        <div className="cards-grid" style={{ borderTop: '1px solid var(--color-border)' }}>
          <div className="card" style={{ textAlign: 'left', borderLeft: 'none' }}>
            <PlatformIcon style={{ marginBottom: '1.5rem', color: 'var(--color-accent)' }} />
            <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.8rem', marginBottom: '1rem' }}>{t('about.platformEngineering')}</h3>
            <p style={{ color: 'var(--color-muted)', lineHeight: '1.6' }}>
              {t('about.platformEngineeringDesc')}
            </p>
          </div>
          <div className="card" style={{ textAlign: 'left' }}>
            <ObservabilityIcon style={{ marginBottom: '1.5rem', color: 'var(--color-accent)' }} />
            <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.8rem', marginBottom: '1rem' }}>{t('about.observabilityStrategy')}</h3>
            <p style={{ color: 'var(--color-muted)', lineHeight: '1.6' }}>
              {t('about.observabilityStrategyDesc')}
            </p>
          </div>
          <div className="card" style={{ textAlign: 'left' }}>
            <EducationIcon style={{ marginBottom: '1.5rem', color: 'var(--color-accent)' }} />
            <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.8rem', marginBottom: '1rem' }}>{t('about.educationContent')}</h3>
            <p style={{ color: 'var(--color-muted)', lineHeight: '1.6' }}>
              {t('about.educationContentDesc')}
            </p>
          </div>
        </div>
      </section>

      {/* Experience Timeline */}
      <section className="content-section">
        <h2 className="content-section__title">{t('about.experience')}</h2>
        <div className="timeline">
          {experienceItems.map((item: any, index: number) => (
            <div key={index} className="timeline__item">
              <span className="timeline__date">{item.date}</span>
              <h3 className="timeline__title">{item.title}</h3>
              <p className="timeline__company">{item.company}</p>
              <p className="timeline__description">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Skills & Certifications */}
      <section className="content-section">
        <h2 className="content-section__title">{t('about.skillsCertifications')}</h2>
        <div style={{ display: 'grid', gap: '3rem' }}>
          <div>
            <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.6rem', marginBottom: '1.5rem', color: 'var(--color-accent)' }}>
              {t('about.certificationsTitle')}
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
              {t('about.coreTechnologies')}
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
              {t('about.languagesTitle')}
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
        <h2 className="content-section__title">{t('about.educationTitle')}</h2>
        <div className="timeline">
          {educationItems.map((item: any, index: number) => (
            <div key={index} className="timeline__item">
              <span className="timeline__date">{item.date}</span>
              <h3 className="timeline__title">{item.title}</h3>
              <p className="timeline__company">{item.company}</p>
              {item.description && <p className="timeline__description">{item.description}</p>}
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
