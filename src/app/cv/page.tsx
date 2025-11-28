'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import { BriefcaseIcon, EducationIcon, AwardIcon, DownloadIcon, ExternalLinkIcon } from '@/components/Icons';

export default function CVPage() {
  const { language, t } = useLanguage();
  const cvFile = language === 'de' ? '/cv-de.pdf' : '/cv.pdf';

  return (
    <>
      {/* Page Header */}
      <header className="page-header">
        <h1 className="page-header__title">{t('cv.title')}</h1>
        <p className="page-header__subtitle">
          {t('cv.subtitle')}
        </p>
      </header>

      {/* CV Actions */}
      <section className="content-section" style={{ paddingTop: '2rem' }}>
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <a
            href={cvFile}
            download="Shahrooz_Aghili_CV.pdf"
            className="button button--primary"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              textDecoration: 'none',
              padding: '1rem 2rem',
              backgroundColor: 'var(--color-accent)',
              color: 'white',
              borderRadius: '0.5rem',
              fontWeight: '500',
              transition: 'all 0.2s ease',
              border: 'none',
              cursor: 'pointer'
            }}
          >
            <DownloadIcon width="20" height="20" />
            {t('cv.downloadButton')}
          </a>
          <a
            href={cvFile}
            target="_blank"
            rel="noopener noreferrer"
            className="button button--secondary"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              textDecoration: 'none',
              padding: '1rem 2rem',
              backgroundColor: 'transparent',
              color: 'var(--color-accent)',
              borderRadius: '0.5rem',
              fontWeight: '500',
              transition: 'all 0.2s ease',
              border: '2px solid var(--color-accent)',
              cursor: 'pointer'
            }}
          >
            <ExternalLinkIcon width="20" height="20" />
            {t('cv.openNewTab')}
          </a>
        </div>
      </section>

      {/* PDF Preview */}
      <section className="content-section">
        <h2 className="content-section__title">{t('cv.preview')}</h2>
        <div
          style={{
            width: '100%',
            height: 'calc(100vh - 200px)',
            minHeight: '600px',
            border: '1px solid var(--color-border)',
            borderRadius: '0.5rem',
            overflow: 'hidden',
            backgroundColor: 'var(--color-bg-secondary)'
          }}
        >
          <iframe
            src={cvFile}
            style={{
              width: '100%',
              height: '100%',
              border: 'none',
            }}
            title="CV Preview"
          />
        </div>
        <p
          style={{
            marginTop: '1rem',
            textAlign: 'center',
            fontSize: '0.9rem',
            color: 'var(--color-text-muted)'
          }}
        >
          {t('cv.previewFallback')} <a href={cvFile} download style={{ color: 'var(--color-accent)' }}>{t('cv.downloadPdf')}</a> {t('cv.or')} <a href={cvFile} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--color-accent)' }}>{t('cv.openTab')}</a>.
        </p>
      </section>

      {/* Quick Overview */}
      <section className="content-section" style={{ paddingLeft: 0, paddingRight: 0 }}>
        <h2 className="content-section__title" style={{ paddingLeft: '3rem', paddingRight: '3rem' }}>{t('cv.quickOverview')}</h2>
        <div className="cards-grid" style={{ borderTop: '1px solid var(--color-border)' }}>
          <div className="card" style={{ textAlign: 'left', borderLeft: 'none' }}>
            <BriefcaseIcon style={{ marginBottom: '1.5rem', color: 'var(--color-accent)' }} />
            <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.8rem', marginBottom: '1rem' }}>{t('cv.experienceYears')}</h3>
            <p style={{ color: 'var(--color-muted)', lineHeight: '1.6' }}>
              {t('cv.experienceDesc')}
            </p>
          </div>
          <div className="card" style={{ textAlign: 'left' }}>
            <EducationIcon style={{ marginBottom: '1.5rem', color: 'var(--color-accent)' }} />
            <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.8rem', marginBottom: '1rem' }}>{t('cv.academicBackground')}</h3>
            <p style={{ color: 'var(--color-muted)', lineHeight: '1.6' }}>
              {t('cv.academicDesc')}
            </p>
          </div>
          <div className="card" style={{ textAlign: 'left' }}>
            <AwardIcon style={{ marginBottom: '1.5rem', color: 'var(--color-accent)' }} />
            <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.8rem', marginBottom: '1rem' }}>{t('cv.certifications')}</h3>
            <p style={{ color: 'var(--color-muted)', lineHeight: '1.6' }}>
              {t('cv.certificationsDesc')}
            </p>
          </div>
        </div>
      </section>

      {/* Key Highlights */}
      <section className="content-section">
        <h2 className="content-section__title">{t('cv.keyHighlights')}</h2>
        <div className="rich-text" style={{ maxWidth: '80ch' }}>
          <ul style={{ lineHeight: '2' }}>
            <li>
              <strong>{t('cv.currentRole')}</strong> {t('cv.currentRoleDesc')}
            </li>
            <li>
              <strong>{t('cv.cloudExpertise')}</strong> {t('cv.cloudExpertiseDesc')}
            </li>
            <li>
              <strong>{t('cv.observability')}</strong> {t('cv.observabilityDesc')}
            </li>
            <li>
              <strong>{t('cv.automation')}</strong> {t('cv.automationDesc')}
            </li>
            <li>
              <strong>{t('cv.community')}</strong> {t('cv.communityDesc')}
            </li>
            <li>
              <strong>{t('cv.education')}</strong> {t('cv.educationDesc')}
            </li>
          </ul>
        </div>
      </section>
    </>
  );
}
