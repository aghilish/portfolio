'use client';

import Link from 'next/link';
import { useLanguage } from '@/contexts/LanguageContext';

export default function SpeakingPage() {
  const { t } = useLanguage();

  const communityRoleData = t('speaking.communityRole');
  const communityRole = (typeof communityRoleData === 'object' && communityRoleData !== null) ? communityRoleData : { role: '', title: '', description: '', activities: [] };

  const pastTalksData = t('speaking.pastTalkItems');
  const pastTalks = Array.isArray(pastTalksData) ? pastTalksData : [];

  const speakingTopicsData = t('speaking.topicItems');
  const speakingTopics = Array.isArray(speakingTopicsData) ? speakingTopicsData : [];

  const workshopsData = t('speaking.workshopItems');
  const workshops = Array.isArray(workshopsData) ? workshopsData : [];

  const meetupUrl = 'https://www.meetup.com/cloud-native-frankfurt/';

  return (
    <>
      {/* Page Header */}
      <header className="page-header">
        <h1 className="page-header__title">{t('speaking.title')}</h1>
        <p className="page-header__subtitle">
          {t('speaking.subtitle')}
        </p>
      </header>

      {/* Community Role */}
      <section className="content-section">
        <h2 className="content-section__title">{t('speaking.communityLeadership')}</h2>
        <div style={{ display: 'grid', gap: '2rem' }}>
          <div style={{ 
            padding: '3rem', 
            border: '1px solid var(--color-border)',
            background: 'linear-gradient(135deg, rgba(0,212,170,0.05) 0%, rgba(77,175,230,0.05) 100%)'
          }}>
            <span style={{ 
              fontSize: '1.2rem', 
              textTransform: 'uppercase', 
              letterSpacing: '0.1em',
              color: 'var(--color-accent)' 
            }}>
              {communityRole.role}
            </span>
            <h3 style={{ 
              fontFamily: 'var(--font-display)', 
              fontSize: '2.4rem',
              margin: '1rem 0'
            }}>
              {communityRole.title}
            </h3>
            <p style={{ 
              color: 'var(--color-muted)', 
              lineHeight: '1.7',
              marginBottom: '2rem',
              maxWidth: '70ch'
            }}>
              {communityRole.description}
            </p>
            <ul style={{ display: 'grid', gap: '0.8rem', marginBottom: '2rem' }}>
              {Array.isArray(communityRole.activities) && communityRole.activities.map((activity: string) => (
                <li key={activity} style={{
                  paddingLeft: '2.5rem',
                  position: 'relative',
                  color: 'var(--color-muted)'
                }}>
                  <span style={{
                    position: 'absolute',
                    left: 0,
                    color: 'var(--color-accent)'
                  }}>→</span>
                  {activity}
                </li>
              ))}
            </ul>
            <a
              href={meetupUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn--accent"
            >
              {t('speaking.joinCommunity')}
            </a>
          </div>
        </div>
      </section>

      {/* Past Talks */}
      <h2 className="section-title">{t('speaking.pastTalks')}</h2>
      <section className="cards-grid">
        {pastTalks.map((talk: any) => (
          <article key={talk.title} className="card">
            <span className="card__date">{talk.event} · {talk.date}</span>
            <h3 className="card__title">{talk.title}</h3>
            <p className="card__teaser">{talk.description}</p>
            <div className="card__tags">
              {talk.tags.map((tag: string) => (
                <span key={tag} className="tag">{tag}</span>
              ))}
            </div>
            <a href={talk.url} target="_blank" rel="noopener noreferrer" className="btn card__btn">
              {t('speaking.viewEvent')}
            </a>
          </article>
        ))}
      </section>

      {/* Speaking Topics */}
      <h2 className="section-title">{t('speaking.speakingTopics')}</h2>
      <section className="cards-grid">
        {speakingTopics.map((topic: any) => (
          <div key={topic.title} className="card" style={{ textAlign: 'left' }}>
            <h3 className="card__title" style={{ marginTop: 0 }}>{topic.title}</h3>
            <p className="card__teaser">{topic.description}</p>
            <div className="card__tags" style={{ justifyContent: 'flex-start' }}>
              {topic.tags.map((tag: string) => (
                <span key={tag} className="tag">{tag}</span>
              ))}
            </div>
          </div>
        ))}
      </section>

      {/* Workshops */}
      <h2 className="section-title">{t('speaking.workshopsTraining')}</h2>
      <section className="cards-grid">
        {workshops.map((workshop: any) => (
          <div key={workshop.title} className="card" style={{ textAlign: 'left' }}>
            <span className="card__date">{workshop.duration}</span>
            <h3 className="card__title" style={{ marginTop: '1rem' }}>{workshop.title}</h3>
            <p className="card__teaser">{workshop.description}</p>
            <p style={{ fontSize: '1.2rem', color: 'var(--color-accent)', marginTop: 'auto' }}>
              {workshop.format}
            </p>
          </div>
        ))}
      </section>

      {/* Invite CTA */}
      <section className="content-section" style={{ textAlign: 'center' }}>
        <h2 className="content-section__title" style={{ justifyContent: 'center' }}>
          {t('speaking.inviteToSpeak')}
        </h2>
        <p style={{ marginBottom: '3rem', color: 'var(--color-muted)', maxWidth: '50ch', margin: '0 auto 3rem' }}>
          {t('speaking.inviteToSpeakDesc')}
        </p>
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link href="/contact" className="btn btn--accent">
            {t('speaking.getInTouch')}
          </Link>
          <a
            href="https://youtube.com/@aghilish"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn--external"
          >
            {t('speaking.watchPreviousTalks')}
          </a>
        </div>
      </section>
    </>
  );
}
