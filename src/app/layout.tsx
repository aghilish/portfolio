import type { Metadata } from 'next';
import { JetBrains_Mono, Inter } from 'next/font/google';
import { LanguageProvider } from '@/contexts/LanguageContext';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import LanguageSwitcher from '@/components/LanguageSwitcher';
import GoogleAnalytics from '@/components/GoogleAnalytics';
import '@/styles/globals.css';

const siteUrl = 'https://aghilish.github.io';
const siteTitle = 'Shahrooz Aghili | Cloud Native Consultant & Solutions Architect';
const siteDescription = 'Freelance Cloud Native Consultant & DevOps Lead specializing in Kubernetes, AWS EKS, GCP, OpenTelemetry, Golang, and Platform Engineering. 16+ years of experience. Available for freelance projects in Frankfurt/Remote.';

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-mono',
});

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-display',
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: siteTitle,
  description: siteDescription,
  keywords: ['Cloud Native', 'Kubernetes', 'DevOps', 'Solutions Architect', 'GCP', 'AWS', 'EKS', 'Platform Engineering', 'Frankfurt', 'Freelance', 'Freiberuflich', 'OpenTelemetry', 'Observability', 'Golang', 'Terraform', 'Helm', 'ArgoCD', 'CI/CD', 'Cloud Architect', 'Kubernetes Operator', 'MCP'],
  authors: [{ name: 'Shahrooz Aghili' }],
  alternates: {
    canonical: siteUrl,
    languages: {
      'en-US': `${siteUrl}/?lang=en`,
      'de-DE': `${siteUrl}/?lang=de`,
      'x-default': siteUrl,
    },
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: 'Shahrooz Aghili | Freelance Cloud Native Consultant & Kubernetes Architect',
    description: 'Freelance Cloud Native Consultant & DevOps Lead. Kubernetes, AWS EKS, GCP, OpenTelemetry, Platform Engineering. Available in Frankfurt/Remote.',
    url: siteUrl,
    siteName: 'Shahrooz Aghili',
    locale: 'en_US',
    alternateLocale: ['de_DE'],
    type: 'website',
    images: [
      {
        url: '/logos/google-cloud.png',
        width: 1200,
        height: 630,
        alt: 'Shahrooz Aghili - Cloud Native Consultant',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Shahrooz Aghili | Freelance Cloud Native Consultant',
    description: 'Freelance Kubernetes & Cloud Architect. AWS EKS, GCP, OpenTelemetry, DevOps. Frankfurt/Remote.',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const gaId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;
  const orgJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Shahrooz Aghili',
    url: siteUrl,
    jobTitle: 'Freelance Cloud Native Consultant & Kubernetes Architect',
    description: siteDescription,
    sameAs: [
      'https://www.linkedin.com/in/aghilish',
      'https://github.com/aghilish',
      'https://www.youtube.com/@aghilish',
    ],
  };

  return (
    <html lang="en" className={`${jetbrainsMono.variable} ${inter.variable}`}>
      <body>
        <LanguageProvider>
          {gaId && <GoogleAnalytics measurementId={gaId} />}
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
          />
          <LanguageSwitcher />
          <div className="global-wrapper">
            <Header />
            <main>{children}</main>
            <Footer />
          </div>
        </LanguageProvider>
      </body>
    </html>
  );
}
