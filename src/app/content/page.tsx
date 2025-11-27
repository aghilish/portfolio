import youtubeData from '@/data/youtube-content.json';
import killercodaData from '@/data/killercoda-content.json';
import { KubernetesIcon, DevOpsIcon, ObservabilityIcon, LabIcon } from '@/components/Icons';
import { YouTubeLogo } from '@/components/CompanyLogos';

const topics = [
  { name: 'Kubernetes', count: 15 },
  { name: 'DevOps', count: 8 },
  { name: 'GCP', count: 6 },
  { name: 'Observability', count: 5 },
  { name: 'CI/CD', count: 7 },
  { name: 'Security', count: 4 },
];

export default function ContentPage() {
  const { videos, playlists, channel } = youtubeData;
  const { labs: killercodaLabs, profileUrl: killercodaProfileUrl } = killercodaData;
  const hasYouTubeContent = videos.length > 0 || playlists.length > 0;

  return (
    <>
      {/* Page Header */}
      <header className="page-header">
        <h1 className="page-header__title">Content Hub</h1>
        <p className="page-header__subtitle">
          Free tutorials, interactive labs, and deep-dives into cloud-native technologies.
        </p>
      </header>

      {/* Topic Tags */}
      <section className="content-section" style={{ textAlign: 'center', paddingTop: '3rem', paddingBottom: '3rem' }}>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', justifyContent: 'center' }}>
          {topics.map((topic) => (
            <span key={topic.name} className="tag">
              {topic.name} <span style={{ opacity: 0.6 }}>({topic.count})</span>
            </span>
          ))}
        </div>
      </section>

      {/* YouTube Playlists Section */}
      {playlists.length > 0 && (
        <>
          <h2 className="section-title">
            <YouTubeLogo className="section-title-icon" /> YouTube Playlists
          </h2>
          <section className="content-grid">
            {playlists.map((playlist) => (
              <div key={playlist.id} className="content-item" style={{ display: 'flex', flexDirection: 'column', padding: 0, overflow: 'hidden' }}>
                <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden' }}>
                  <iframe
                    src={`https://www.youtube.com/embed/videoseries?list=${playlist.id}`}
                    title={playlist.title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    style={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      width: '100%',
                      height: '100%',
                    }}
                  />
                </div>
                <div style={{ padding: '1.5rem' }}>
                  <span className="content-item__type">
                    {playlist.itemCount} {playlist.itemCount === 1 ? 'video' : 'videos'}
                  </span>
                  <h3 className="content-item__title">{playlist.title}</h3>
                  {playlist.description && (
                    <p className="content-item__description">
                      {playlist.description.length > 100
                        ? `${playlist.description.substring(0, 100)}...`
                        : playlist.description}
                    </p>
                  )}
                  <a
                    href={playlist.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="content-item__link"
                  >
                    Watch Playlist →
                  </a>
                </div>
              </div>
            ))}
          </section>
        </>
      )}

      {/* YouTube Videos Section */}
      {videos.length > 0 && (
        <>
          <h2 className="section-title">
            <span style={{ marginRight: '0.5rem' }}>🎬</span> Latest Videos
          </h2>
          <section className="content-grid">
            {videos.slice(0, 12).map((video) => (
              <div key={video.id} className="content-item" style={{ display: 'flex', flexDirection: 'column', padding: 0, overflow: 'hidden' }}>
                <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden' }}>
                  <iframe
                    src={`https://www.youtube.com/embed/${video.id}`}
                    title={video.title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    style={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      width: '100%',
                      height: '100%',
                    }}
                  />
                </div>
                <div style={{ padding: '1.5rem' }}>
                  <span className="content-item__type">Video</span>
                  <h3 className="content-item__title" style={{ fontSize: '1.1rem', marginBottom: '0.5rem' }}>
                    {video.title.length > 60 ? `${video.title.substring(0, 60)}...` : video.title}
                  </h3>
                  {video.description && (
                    <p className="content-item__description" style={{ fontSize: '0.9rem' }}>
                      {video.description.length > 100
                        ? `${video.description.substring(0, 100)}...`
                        : video.description || 'Watch this video on YouTube'}
                    </p>
                  )}
                  <a
                    href={video.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="content-item__link"
                  >
                    Watch on YouTube →
                  </a>
                </div>
              </div>
            ))}
          </section>
        </>
      )}

      {/* Fallback if no content */}
      {!hasYouTubeContent && (
        <section className="content-grid">
          <div className="content-item" style={{ textAlign: 'center', gridColumn: '1 / -1' }}>
            <p style={{ color: 'var(--color-muted)' }}>
              YouTube content will appear here once fetched. Run <code>npm run fetch-youtube</code> to update.
            </p>
          </div>
        </section>
      )}

      {/* YouTube CTA */}
      <section style={{
        padding: '4rem 3rem',
        textAlign: 'center',
        borderTop: '1px solid var(--color-border)',
        background: 'linear-gradient(135deg, rgba(255,0,0,0.05) 0%, rgba(255,0,0,0.02) 100%)'
      }}>
        <p style={{
          fontFamily: 'var(--font-display)',
          fontSize: '2rem',
          marginBottom: '2rem'
        }}>
          Subscribe for weekly cloud-native content
        </p>
        <a
          href={`${channel.url}?sub_confirmation=1`}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn--accent"
        >
          Subscribe to {channel.title}
        </a>
      </section>

      {/* KillerCoda Labs */}
      <h2 className="section-title">
        <LabIcon className="section-title-icon" /> Interactive Labs (KillerCoda)
      </h2>
      <section className="content-grid">
        {killercodaLabs.map((lab) => (
          <a
            key={lab.id}
            href={lab.link}
            target="_blank"
            rel="noopener noreferrer"
            className="content-item"
          >
            <span className="content-item__type">{lab.difficulty}</span>
            <h3 className="content-item__title">{lab.title}</h3>
            <p className="content-item__description">{lab.description}</p>
            {lab.tags && lab.tags.length > 0 && (
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginTop: '0.5rem' }}>
                {lab.tags.slice(0, 3).map((tag) => (
                  <span
                    key={tag}
                    style={{
                      fontSize: '0.75rem',
                      padding: '0.25rem 0.5rem',
                      background: 'var(--color-bg-secondary)',
                      borderRadius: '4px',
                      color: 'var(--color-muted)',
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}
            <span className="content-item__link">
              Start Lab →
            </span>
          </a>
        ))}
      </section>

      {/* KillerCoda CTA */}
      <section style={{
        padding: '4rem 3rem',
        textAlign: 'center',
        borderTop: '1px solid var(--color-border)',
        background: 'linear-gradient(135deg, rgba(0,212,170,0.05) 0%, rgba(77,175,230,0.05) 100%)'
      }}>
        <p style={{
          fontFamily: 'var(--font-display)',
          fontSize: '2rem',
          marginBottom: '2rem'
        }}>
          Learn by doing with hands-on exercises
        </p>
        <a
          href={killercodaProfileUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="btn"
        >
          Explore All Labs
        </a>
      </section>

      {/* Topics I Cover */}
      <section className="content-section" style={{ paddingLeft: 0, paddingRight: 0 }}>
        <h2 className="content-section__title" style={{ paddingLeft: '3rem', paddingRight: '3rem' }}>Topics I Cover</h2>
        <div className="cards-grid" style={{ borderTop: '1px solid var(--color-border)' }}>
          <div className="card" style={{ textAlign: 'left', borderLeft: 'none' }}>
            <KubernetesIcon style={{ marginBottom: '1.5rem', color: 'var(--color-accent)' }} />
            <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.8rem', marginBottom: '1rem' }}>Kubernetes</h3>
            <p style={{ color: 'var(--color-muted)', lineHeight: '1.6' }}>
              From fundamentals to advanced operations. Deployments, networking, security,
              troubleshooting, and production best practices.
            </p>
          </div>
          <div className="card" style={{ textAlign: 'left' }}>
            <DevOpsIcon style={{ marginBottom: '1.5rem', color: 'var(--color-accent)' }} />
            <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.8rem', marginBottom: '1rem' }}>DevOps & CI/CD</h3>
            <p style={{ color: 'var(--color-muted)', lineHeight: '1.6' }}>
              GitOps, Tekton, GitHub Actions, ArgoCD. Building reliable pipelines
              for cloud-native applications.
            </p>
          </div>
          <div className="card" style={{ textAlign: 'left' }}>
            <ObservabilityIcon style={{ marginBottom: '1.5rem', color: 'var(--color-accent)' }} />
            <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.8rem', marginBottom: '1rem' }}>Observability</h3>
            <p style={{ color: 'var(--color-muted)', lineHeight: '1.6' }}>
              OpenTelemetry, Prometheus, Grafana, Elastic Stack. Complete observability
              for distributed systems.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
