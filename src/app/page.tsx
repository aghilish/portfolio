'use client';

import Link from 'next/link';
import { useLanguage } from '@/contexts/LanguageContext';
import {
  DeloitteLogo,
  VolkswagenLogo,
  AudiLogo,
  CommerzbankLogo,
  CariadLogo,
  GoogleCloudLogo,
  LinkedInLogo,
  YouTubeLogo,
  ContactIcon,
  CalendlyIcon
} from '@/components/CompanyLogos';

const trustedCompanies = [
  { name: 'Deloitte', logo: DeloitteLogo, url: 'https://www2.deloitte.com' },
  { name: 'Volkswagen', logo: VolkswagenLogo, url: 'https://www.volkswagen.com' },
  { name: 'Audi', logo: AudiLogo, url: 'https://www.audi.com' },
  { name: 'Commerzbank', logo: CommerzbankLogo, url: 'https://www.commerzbank.com' },
  { name: 'CARIAD', logo: CariadLogo, url: 'https://cariad.technology' },
  { name: 'Google Cloud', logo: GoogleCloudLogo, url: 'https://cloud.google.com' },
];

const certifications = [
  { name: 'Certified Kubernetes Administrator', url: 'https://www.credly.com/badges/d371b221-adb9-4fea-b0fc-47d15d5daa39' },
  { name: 'Certified Kubernetes Security Specialist', url: 'https://www.credly.com/badges/b94af0df-1b06-4f43-91a0-123b884441cb' },
  { name: 'GCP Professional Cloud Architect', url: null },
  { name: 'CNCF Organizer', url: 'https://www.credly.com/badges/9e8f0200-9ade-4389-a70c-c6fa2e02deaa' },
];

// Logo mapping for featured work (logos can't be stored in JSON)
const featuredWorkLogos: Record<number, any[]> = {
  0: [VolkswagenLogo],      // Deloitte × Volkswagen
  1: [GoogleCloudLogo],     // Deloitte × Google Cloud
  2: [CommerzbankLogo],     // Commerzbank
};

export default function Home() {
  const { t } = useLanguage();

  const featuredWorkData = t('home.featuredWorkItems');
  const featuredWork = Array.isArray(featuredWorkData) ? featuredWorkData : [];

  return (
    <>
      {/* Hero Section */}
      <section className="intro intro--large">
        <p>
          {t('home.hero')} <em>{t('home.heroSubtitle')}</em>
        </p>
      </section>

      {/* CTA Buttons */}
      <section className="cta-section">
        <Link
          href="/contact"
          className="cta-button"
          aria-label="Book a Consultation"
        >
          <ContactIcon className="cta-icon" />
        </Link>
        <a
          href="https://calendly.com/aghilish/30min"
          target="_blank"
          rel="noopener noreferrer"
          className="cta-button"
          aria-label="Schedule a Call"
        >
          <CalendlyIcon className="cta-icon" />
        </a>
        <a
          href="https://linkedin.com/in/aghilish"
          target="_blank"
          rel="noopener noreferrer"
          className="cta-button"
          aria-label="LinkedIn Profile"
        >
          <LinkedInLogo className="cta-icon" />
        </a>
        <a
          href="https://youtube.com/@aghilish"
          target="_blank"
          rel="noopener noreferrer"
          className="cta-button"
          aria-label="YouTube Channel"
        >
          <YouTubeLogo className="cta-icon" />
        </a>
      </section>

      {/* Bio Section */}
      <section className="intro intro--content">
        <p>
          {t('home.bio')}
        </p>
      </section>

      {/* Trusted By */}
      <section className="trusted-by">
        <h2 className="trusted-by__title">{t('home.trustedBy')}</h2>
        <div className="trusted-by__logos-container">
          <div className="trusted-by__logos">
            {/* Render logos twice for seamless infinite scroll */}
            {[...trustedCompanies, ...trustedCompanies].map((company, index) => {
              const LogoComponent = company.logo;
              return (
                <a
                  key={`${company.name}-${index}`}
                  href={company.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="trusted-by__logo"
                  title={`Visit ${company.name}`}
                  aria-label={`Visit ${company.name} website`}
                >
                  <LogoComponent className="company-logo" />
                </a>
              );
            })}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="certifications">
        {certifications.map((cert) => (
          cert.url ? (
            <a
              key={cert.name}
              href={cert.url}
              target="_blank"
              rel="noopener noreferrer"
              className="tag tag--accent"
              style={{ cursor: 'pointer', textDecoration: 'none' }}
            >
              {cert.name}
            </a>
          ) : (
            <span key={cert.name} className="tag tag--accent">
              {cert.name}
            </span>
          )
        ))}
      </section>

      {/* Featured Work */}
      <h2 className="section-title">{t('home.featuredWork')}</h2>
      <section className="cards-grid">
        {featuredWork.map((work: any, index: number) => (
          <article key={work.title} className="card">
            <span className="card__date">{work.company}</span>
            <div className="card__thumbnail" style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '1rem',
              padding: '2rem',
              height: '200px',
              background: 'linear-gradient(135deg, rgba(0,212,170,0.1) 0%, rgba(77,175,230,0.1) 100%)'
            }}>
              {featuredWorkLogos[index]?.map((Logo, logoIndex) => (
                <div
                  key={logoIndex}
                  style={{
                    width: featuredWorkLogos[index].length > 1 ? '45%' : '60%',
                    height: 'auto',
                    maxHeight: '80px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                >
                  <Logo className="company-logo" />
                </div>
              ))}
            </div>
            <h3 className="card__title">{work.title}</h3>
            <p className="card__teaser">{work.description}</p>
            <div className="card__tags">
              {work.tags.map((tag: string) => (
                <span key={tag} className="tag">{tag}</span>
              ))}
            </div>
            <Link href={work.href} className="btn card__btn">
              {t('home.viewCaseStudy')}
            </Link>
          </article>
        ))}
      </section>

      {/* Leader Section */}
      <nav className="leader">
        <div className="leader__images">
          <div className="leader__visual" style={{
            position: 'relative',
            paddingBottom: '56.25%',
            height: 0,
            overflow: 'hidden',
            borderRadius: '8px'
          }}>
            <iframe
              src="https://www.youtube.com/embed/ZvcwY5Y4ouk"
              title="Build Your OWN MCP Server for Kubernetes"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%'
              }}
            />
          </div>
        </div>
        <ul className="leader__list">
          <li>
            <Link href="/services" className="leader__link">
              {t('home.exploreServices')}
            </Link>
          </li>
          <li>
            <Link href="/content" className="leader__link">
              {t('home.watchTutorials')}
            </Link>
          </li>
          <li>
            <Link href="/speaking" className="leader__link">
              {t('home.communitySpeaking')}
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}
