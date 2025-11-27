import type { Metadata } from 'next';
import { JetBrains_Mono, Inter } from 'next/font/google';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import GoogleAnalytics from '@/components/GoogleAnalytics';
import '@/styles/globals.css';

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
  title: 'Shahrooz Aghili | Cloud Native Consultant & Solutions Architect',
  description: 'Senior Solutions Architect & DevOps Lead specializing in Kubernetes, Google Cloud, Platform Engineering, and Cloud-Native Automation. 16+ years of experience.',
  keywords: ['Cloud Native', 'Kubernetes', 'DevOps', 'Solutions Architect', 'GCP', 'Platform Engineering', 'Frankfurt'],
  authors: [{ name: 'Shahrooz Aghili' }],
  openGraph: {
    title: 'Shahrooz Aghili | Cloud Native Consultant',
    description: 'Senior Solutions Architect & DevOps Lead specializing in Kubernetes, Google Cloud, and Platform Engineering.',
    url: 'https://aghilish.github.io',
    siteName: 'Shahrooz Aghili',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Shahrooz Aghili | Cloud Native Consultant',
    description: 'Senior Solutions Architect & DevOps Lead specializing in Kubernetes, Google Cloud, and Platform Engineering.',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const gaId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

  return (
    <html lang="en" className={`${jetbrainsMono.variable} ${inter.variable}`}>
      <body>
        {gaId && <GoogleAnalytics measurementId={gaId} />}
        <div className="global-wrapper">
          <Header />
          <main>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
