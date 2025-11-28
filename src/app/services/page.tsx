'use client';

import Link from 'next/link';
import { useLanguage } from '@/contexts/LanguageContext';
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

const serviceIcons = [KubernetesIcon, DevOpsIcon, ObservabilityIcon, CloudIcon, FactoryIcon, MoneyIcon];

export default function ServicesPage() {
  const { t } = useLanguage();

  const servicesData = t('services.serviceItems');
  const services = Array.isArray(servicesData) ? servicesData : [];

  const engagementData = t('services.engagementItems');
  const engagementTypes = Array.isArray(engagementData) ? engagementData : [];

  return (
    <>
      {/* Page Header */}
      <header className="page-header">
        <h1 className="page-header__title">{t('services.title')}</h1>
        <p className="page-header__subtitle">
          {t('services.subtitle')}
        </p>
      </header>

      {/* Services Grid */}
      <h2 className="section-title">{t('services.coreServices')}</h2>
      <section className="cards-grid">
        {services.map((service: any, index: number) => {
          const IconComponent = serviceIcons[index];
          return (
            <div key={service.title} className="service-card">
              <IconComponent className="service-card__icon" style={{ color: 'var(--color-accent)' }} />
              <h3 className="service-card__title">{service.title}</h3>
              <p className="service-card__description">{service.description}</p>
              <ul className="service-card__list">
                {service.offerings.map((offering: string) => (
                  <li key={offering}>{offering}</li>
                ))}
              </ul>
            </div>
          );
        })}
      </section>

      {/* Engagement Types */}
      <h2 className="section-title">{t('services.engagementModels')}</h2>
      <section className="cards-grid">
        {engagementTypes.map((type: any) => (
          <div key={type.title} className="card" style={{ textAlign: 'left' }}>
            <span className="card__date" style={{ fontSize: '1.6rem' }}>{type.duration}</span>
            <h3 className="card__title" style={{ marginTop: '1rem', fontSize: '2rem' }}>{type.title}</h3>
            <p className="card__teaser" style={{ marginBottom: 0, fontSize: '1.5rem' }}>{type.description}</p>
          </div>
        ))}
      </section>

      {/* Why Work With Me */}
      <section className="content-section">
        <h2 className="content-section__title">{t('services.whyWorkWithMe')}</h2>
        <div className="rich-text" style={{ maxWidth: '80ch' }}>
          <ul>
            <li>
              <strong>{t('services.enterpriseExperience')}</strong> {t('services.enterpriseExperienceDesc')}
            </li>
            <li>
              <strong>{t('services.certifiedExpertise')}</strong> {t('services.certifiedExpertiseDesc')}
            </li>
            <li>
              <strong>{t('services.endToEndCapability')}</strong> {t('services.endToEndCapabilityDesc')}
            </li>
            <li>
              <strong>{t('services.communityLeadership')}</strong> {t('services.communityLeadershipDesc')}
            </li>
            <li>
              <strong>{t('services.educationFocus')}</strong> {t('services.educationFocusDesc')}
            </li>
          </ul>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section cta-section--services">
        <Link href="/contact" className="cta-button cta-button--services cta-button--primary">
          <CalendarIcon width="20" height="20" />
          {t('services.scheduleCall')}
        </Link>
        <Link href="/portfolio" className="cta-button cta-button--services">
          <FolderIcon width="20" height="20" />
          {t('services.viewPortfolio')}
        </Link>
        <a
          href="https://linkedin.com/in/aghilish"
          target="_blank"
          rel="noopener noreferrer"
          className="cta-button cta-button--services"
        >
          <LinkedInLogo width={20} height={20} />
          {t('services.connectLinkedIn')}
        </a>
      </section>
    </>
  );
}
