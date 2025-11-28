'use client';

import Link from 'next/link';
import { useLanguage } from '@/contexts/LanguageContext';
import { LightningIcon, PhoneIcon, DocumentIcon, MailIcon } from '@/components/Icons';
import { LinkedInLogo } from '@/components/CompanyLogos';

export default function ContactPage() {
  const { t } = useLanguage();

  return (
    <>
      {/* Page Header */}
      <header className="page-header">
        <h1 className="page-header__title">{t('contact.title')}</h1>
        <p className="page-header__subtitle">
          {t('contact.subtitle')}
        </p>
      </header>

      <div style={{ display: 'grid' }}>
        {/* Contact Options */}
        <section className="content-section">
          <h2 className="content-section__title">{t('contact.contactOptions')}</h2>

          <div className="contact-info">
            <div className="contact-info__item">
              <p className="contact-info__label">{t('contact.email')}</p>
              <p className="contact-info__value">
                <a href="mailto:shahrooz33ce@gmail.com">shahrooz33ce@gmail.com</a>
              </p>
            </div>
            <div className="contact-info__item">
              <p className="contact-info__label">{t('contact.scheduleCall')}</p>
              <p className="contact-info__value">
                <a href="https://calendly.com/aghilish/30min" target="_blank" rel="noopener noreferrer">
                  {t('contact.bookCall')}
                </a>
              </p>
            </div>
            <div className="contact-info__item">
              <p className="contact-info__label">{t('contact.linkedin')}</p>
              <p className="contact-info__value">
                <a href="https://linkedin.com/in/aghilish" target="_blank" rel="noopener noreferrer">
                  linkedin.com/in/aghilish
                </a>
              </p>
            </div>
            <div className="contact-info__item">
              <p className="contact-info__label">{t('contact.location')}</p>
              <p className="contact-info__value">{t('contact.locationValue')}</p>
            </div>
            <div className="contact-info__item">
              <p className="contact-info__label">{t('contact.languages')}</p>
              <p className="contact-info__value">{t('contact.languagesValue')}</p>
            </div>
          </div>
        </section>

        {/* Contact Form */}
        <section className="content-section">
          <h2 className="content-section__title">{t('contact.sendMessage')}</h2>
          <form
            className="contact-form"
            action="https://formspree.io/f/meowpwwz"
            method="POST"
          >
            <div className="form-group">
              <label htmlFor="name">{t('contact.name')}</label>
              <input
                type="text"
                id="name"
                name="name"
                required
                placeholder={t('contact.namePlaceholder')}
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">{t('contact.email')}</label>
              <input
                type="email"
                id="email"
                name="email"
                required
                placeholder={t('contact.emailPlaceholder')}
              />
            </div>
            <div className="form-group">
              <label htmlFor="company">{t('contact.company')}</label>
              <input
                type="text"
                id="company"
                name="company"
                placeholder={t('contact.companyPlaceholder')}
              />
            </div>
            <div className="form-group">
              <label htmlFor="subject">{t('contact.subject')}</label>
              <input
                type="text"
                id="subject"
                name="subject"
                required
                placeholder={t('contact.subjectPlaceholder')}
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">{t('contact.message')}</label>
              <textarea
                id="message"
                name="message"
                required
                placeholder={t('contact.messagePlaceholder')}
              ></textarea>
            </div>
            <button type="submit" className="btn btn--accent">
              {t('contact.sendMessageButton')}
            </button>
          </form>
        </section>
      </div>

      {/* What to Expect */}
      <section className="content-section" style={{ paddingLeft: 0, paddingRight: 0 }}>
        <h2 className="content-section__title" style={{ paddingLeft: '3rem', paddingRight: '3rem' }}>{t('contact.whatToExpect')}</h2>
        <div className="cards-grid" style={{ borderTop: '1px solid var(--color-border)' }}>
          <div className="card" style={{ textAlign: 'left', borderLeft: 'none' }}>
            <LightningIcon style={{ marginBottom: '1.5rem', color: 'var(--color-accent)' }} />
            <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.8rem', marginBottom: '1rem' }}>{t('contact.quickResponse')}</h3>
            <p style={{ color: 'var(--color-muted)', lineHeight: '1.6' }}>
              {t('contact.quickResponseDesc')}
            </p>
          </div>
          <div className="card" style={{ textAlign: 'left' }}>
            <PhoneIcon style={{ marginBottom: '1.5rem', color: 'var(--color-accent)' }} />
            <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.8rem', marginBottom: '1rem' }}>{t('contact.discoveryCall')}</h3>
            <p style={{ color: 'var(--color-muted)', lineHeight: '1.6' }}>
              {t('contact.discoveryCallDesc')}
            </p>
          </div>
          <div className="card" style={{ textAlign: 'left' }}>
            <DocumentIcon style={{ marginBottom: '1.5rem', color: 'var(--color-accent)' }} />
            <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.8rem', marginBottom: '1rem' }}>{t('contact.proposal')}</h3>
            <p style={{ color: 'var(--color-muted)', lineHeight: '1.6' }}>
              {t('contact.proposalDesc')}
            </p>
          </div>
        </div>
      </section>

      {/* Availability */}
      <section style={{
        padding: '4rem 3rem',
        textAlign: 'center',
        borderTop: '1px solid var(--color-border)',
        background: 'linear-gradient(135deg, rgba(0,212,170,0.05) 0%, rgba(77,175,230,0.05) 100%)'
      }}>
        <h2 style={{
          fontFamily: 'var(--font-display)',
          fontSize: '2.4rem',
          marginBottom: '1.5rem'
        }}>
          {t('contact.currentlyAvailable')}
        </h2>
        <p style={{
          color: 'var(--color-muted)',
          marginBottom: '2rem',
          maxWidth: '50ch',
          margin: '0 auto 2rem'
        }}>
          {t('contact.currentlyAvailableDesc')}
        </p>
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <a
            href="mailto:shahrooz33ce@gmail.com"
            className="btn btn--accent"
            style={{ display: 'inline-flex', alignItems: 'center', gap: '0.8rem' }}
          >
            <MailIcon width="20" height="20" />
            {t('contact.emailMe')}
          </a>
          <a
            href="https://linkedin.com/in/aghilish"
            target="_blank"
            rel="noopener noreferrer"
            className="btn"
            style={{ display: 'inline-flex', alignItems: 'center', gap: '0.8rem' }}
          >
            <LinkedInLogo width={20} height={20} />
            {t('contact.connectLinkedIn')}
          </a>
        </div>
      </section>
    </>
  );
}
