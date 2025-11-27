'use client';

import { BriefcaseIcon, EducationIcon, AwardIcon, DownloadIcon, ExternalLinkIcon } from '@/components/Icons';

export default function CVPage() {
  return (
    <>
      {/* Page Header */}
      <header className="page-header">
        <h1 className="page-header__title">Curriculum Vitae</h1>
        <p className="page-header__subtitle">
          Download or view my professional CV showcasing 16+ years of experience in software engineering, specializing in cloud-native technologies and platform engineering.
        </p>
      </header>

      {/* CV Actions */}
      <section className="content-section" style={{ paddingTop: '2rem' }}>
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <a
            href="/cv.pdf"
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
            Download CV (PDF)
          </a>
          <a
            href="/cv.pdf"
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
            Open in New Tab
          </a>
        </div>
      </section>

      {/* PDF Preview */}
      <section className="content-section">
        <h2 className="content-section__title">Preview</h2>
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
            src="/cv.pdf"
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
          If the preview doesn't load, please <a href="/cv.pdf" download style={{ color: 'var(--color-accent)' }}>download the PDF</a> or <a href="/cv.pdf" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--color-accent)' }}>open it in a new tab</a>.
        </p>
      </section>

      {/* Quick Overview */}
      <section className="content-section" style={{ paddingLeft: 0, paddingRight: 0 }}>
        <h2 className="content-section__title" style={{ paddingLeft: '3rem', paddingRight: '3rem' }}>Quick Overview</h2>
        <div className="cards-grid" style={{ borderTop: '1px solid var(--color-border)' }}>
          <div className="card" style={{ textAlign: 'left', borderLeft: 'none' }}>
            <BriefcaseIcon style={{ marginBottom: '1.5rem', color: 'var(--color-accent)' }} />
            <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.8rem', marginBottom: '1rem' }}>16+ Years Experience</h3>
            <p style={{ color: 'var(--color-muted)', lineHeight: '1.6' }}>
              From research in telecommunications to leading DevOps teams at Fortune 500 companies.
            </p>
          </div>
          <div className="card" style={{ textAlign: 'left' }}>
            <EducationIcon style={{ marginBottom: '1.5rem', color: 'var(--color-accent)' }} />
            <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.8rem', marginBottom: '1rem' }}>Academic Background</h3>
            <p style={{ color: 'var(--color-muted)', lineHeight: '1.6' }}>
              MS from Sharif University. PhD research at TU Darmstadt in 5G networks.
            </p>
          </div>
          <div className="card" style={{ textAlign: 'left' }}>
            <AwardIcon style={{ marginBottom: '1.5rem', color: 'var(--color-accent)' }} />
            <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.8rem', marginBottom: '1rem' }}>Certifications</h3>
            <p style={{ color: 'var(--color-muted)', lineHeight: '1.6' }}>
              CKA, CKS, GCP Professional Cloud Architect, CNCF Community Organizer.
            </p>
          </div>
        </div>
      </section>

      {/* Key Highlights */}
      <section className="content-section">
        <h2 className="content-section__title">Key Highlights</h2>
        <div className="rich-text" style={{ maxWidth: '80ch' }}>
          <ul style={{ lineHeight: '2' }}>
            <li>
              <strong>Current Role:</strong> DevOps Squad Lead at Deloitte Consulting, leading 6+ consultants across two workstreams
            </li>
            <li>
              <strong>Cloud Expertise:</strong> Google Cloud Platform, AWS, Azure - with focus on Kubernetes and platform engineering
            </li>
            <li>
              <strong>Observability:</strong> End-to-end implementation of monitoring strategies using OpenTelemetry, Elastic Stack, and Prometheus
            </li>
            <li>
              <strong>Automation:</strong> CI/CD pipeline development using Tekton, GitHub Actions, ArgoCD
            </li>
            <li>
              <strong>Community:</strong> CNCF Community Group Organizer for Cloud Native Frankfurt
            </li>
            <li>
              <strong>Education:</strong> Content creator on YouTube and Killercoda, making cloud-native accessible
            </li>
          </ul>
        </div>
      </section>
    </>
  );
}
