import Link from 'next/link';
import { LightningIcon, PhoneIcon, DocumentIcon, MailIcon } from '@/components/Icons';
import { LinkedInLogo } from '@/components/CompanyLogos';

export default function ContactPage() {
  return (
    <>
      {/* Page Header */}
      <header className="page-header">
        <h1 className="page-header__title">Get in Touch</h1>
        <p className="page-header__subtitle">
          Let's discuss how I can help with your cloud-native journey.
        </p>
      </header>

      <div style={{ display: 'grid' }}>
        {/* Contact Options */}
        <section className="content-section">
          <h2 className="content-section__title">Contact Options</h2>
          
          <div className="contact-info">
            <div className="contact-info__item">
              <p className="contact-info__label">Email</p>
              <p className="contact-info__value">
                <a href="mailto:shahrooz33ce@gmail.com">shahrooz33ce@gmail.com</a>
              </p>
            </div>
            <div className="contact-info__item">
              <p className="contact-info__label">Schedule a Call</p>
              <p className="contact-info__value">
                <a href="https://calendly.com/aghilish/30min" target="_blank" rel="noopener noreferrer">
                  Book a 30-minute call
                </a>
              </p>
            </div>
            <div className="contact-info__item">
              <p className="contact-info__label">LinkedIn</p>
              <p className="contact-info__value">
                <a href="https://linkedin.com/in/aghilish" target="_blank" rel="noopener noreferrer">
                  linkedin.com/in/aghilish
                </a>
              </p>
            </div>
            <div className="contact-info__item">
              <p className="contact-info__label">Location</p>
              <p className="contact-info__value">Frankfurt, Germany</p>
            </div>
            <div className="contact-info__item">
              <p className="contact-info__label">Languages</p>
              <p className="contact-info__value">English, German, Persian</p>
            </div>
          </div>
        </section>

        {/* Contact Form */}
        <section className="content-section">
          <h2 className="content-section__title">Send a Message</h2>
          <form
            className="contact-form"
            action="https://formspree.io/f/meowpwwz"
            method="POST"
          >
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input 
                type="text" 
                id="name" 
                name="name" 
                required 
                placeholder="Your name"
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input 
                type="email" 
                id="email" 
                name="email" 
                required 
                placeholder="your@email.com"
              />
            </div>
            <div className="form-group">
              <label htmlFor="company">Company (Optional)</label>
              <input 
                type="text" 
                id="company" 
                name="company" 
                placeholder="Your company"
              />
            </div>
            <div className="form-group">
              <label htmlFor="subject">Subject</label>
              <input 
                type="text" 
                id="subject" 
                name="subject" 
                required 
                placeholder="What's this about?"
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea 
                id="message" 
                name="message" 
                required 
                placeholder="Tell me about your project or question..."
              ></textarea>
            </div>
            <button type="submit" className="btn btn--accent">
              Send Message
            </button>
          </form>
        </section>
      </div>

      {/* What to Expect */}
      <section className="content-section" style={{ paddingLeft: 0, paddingRight: 0 }}>
        <h2 className="content-section__title" style={{ paddingLeft: '3rem', paddingRight: '3rem' }}>What to Expect</h2>
        <div className="cards-grid" style={{ borderTop: '1px solid var(--color-border)' }}>
          <div className="card" style={{ textAlign: 'left', borderLeft: 'none' }}>
            <LightningIcon style={{ marginBottom: '1.5rem', color: 'var(--color-accent)' }} />
            <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.8rem', marginBottom: '1rem' }}>Quick Response</h3>
            <p style={{ color: 'var(--color-muted)', lineHeight: '1.6' }}>
              I typically respond within 24-48 hours on business days. For urgent matters,
              reach out via LinkedIn.
            </p>
          </div>
          <div className="card" style={{ textAlign: 'left' }}>
            <PhoneIcon style={{ marginBottom: '1.5rem', color: 'var(--color-accent)' }} />
            <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.8rem', marginBottom: '1rem' }}>Discovery Call</h3>
            <p style={{ color: 'var(--color-muted)', lineHeight: '1.6' }}>
              For consulting inquiries, we'll schedule a free 30-minute call to discuss your
              needs and how I can help.
            </p>
          </div>
          <div className="card" style={{ textAlign: 'left' }}>
            <DocumentIcon style={{ marginBottom: '1.5rem', color: 'var(--color-accent)' }} />
            <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.8rem', marginBottom: '1rem' }}>Proposal</h3>
            <p style={{ color: 'var(--color-muted)', lineHeight: '1.6' }}>
              Based on our discussion, I'll provide a detailed proposal with scope,
              timeline, and investment options.
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
          Currently Available for Projects
        </h2>
        <p style={{ 
          color: 'var(--color-muted)', 
          marginBottom: '2rem',
          maxWidth: '50ch',
          margin: '0 auto 2rem'
        }}>
          I'm taking on select consulting engagements for Q1 2025. 
          Let's build something great together.
        </p>
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <a
            href="mailto:shahrooz33ce@gmail.com"
            className="btn btn--accent"
            style={{ display: 'inline-flex', alignItems: 'center', gap: '0.8rem' }}
          >
            <MailIcon width="20" height="20" />
            Email Me
          </a>
          <a
            href="https://linkedin.com/in/aghilish"
            target="_blank"
            rel="noopener noreferrer"
            className="btn"
            style={{ display: 'inline-flex', alignItems: 'center', gap: '0.8rem' }}
          >
            <LinkedInLogo width={20} height={20} />
            Connect on LinkedIn
          </a>
        </div>
      </section>
    </>
  );
}
