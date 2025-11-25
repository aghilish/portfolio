import Image from 'next/image';

export const DeloitteLogo = ({ className = "" }: { className?: string }) => (
  <Image
    src="/logos/deloitte.png"
    alt="Deloitte"
    width={240}
    height={80}
    className={className}
    quality={100}
    priority
  />
);

export const VolkswagenLogo = ({ className = "" }: { className?: string }) => (
  <Image
    src="/logos/volkswagen.png"
    alt="Volkswagen"
    width={240}
    height={80}
    className={className}
    quality={100}
    priority
  />
);

export const AudiLogo = ({ className = "" }: { className?: string }) => (
  <Image
    src="/logos/audi.png"
    alt="Audi"
    width={240}
    height={80}
    className={className}
    quality={100}
    priority
  />
);

export const CommerzbankLogo = ({ className = "" }: { className?: string }) => (
  <Image
    src="/logos/commerzbank.png"
    alt="Commerzbank"
    width={260}
    height={80}
    className={className}
    quality={100}
    priority
  />
);

export const CariadLogo = ({ className = "" }: { className?: string }) => (
  <Image
    src="/logos/cariad.png"
    alt="CARIAD"
    width={240}
    height={80}
    className={className}
    quality={100}
    priority
  />
);

export const GoogleCloudLogo = ({ className = "" }: { className?: string }) => (
  <Image
    src="/logos/google-cloud.png"
    alt="Google Cloud"
    width={240}
    height={80}
    className={className}
    quality={100}
    priority
  />
);

export const LinkedInLogo = ({ className = "" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);

export const YouTubeLogo = ({ className = "" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
  </svg>
);

export const ContactIcon = ({ className = "" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
  </svg>
);
