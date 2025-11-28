'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useLanguage } from '@/contexts/LanguageContext';
import LanguageSwitcher from './LanguageSwitcher';
import styles from './Header.module.css';

const navItems = [
  { href: '/about', key: 'header.about' },
  { href: '/services', key: 'header.services' },
  { href: '/portfolio', key: 'header.portfolio' },
  { href: '/cv', key: 'header.cv' },
  { href: '/speaking', key: 'header.speaking' },
  { href: '/content', key: 'header.content' },
  { href: '/contact', key: 'header.contact' },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const { t } = useLanguage();

  return (
    <header className={`${styles.header} ${isOpen ? styles.isOpen : ''}`}>
      <div className={styles.home}>
        <Link href="/">{t('header.home')}</Link>
      </div>
      <button
        className={styles.toggle}
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Open or close the navigation"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
      <nav className={styles.nav}>
        <ul className={styles.list}>
          {navItems.map((item) => (
            <li
              key={item.href}
              className={`${styles.item} ${pathname === item.href ? styles.isActive : ''}`}
            >
              <Link
                href={item.href}
                className={styles.link}
                onClick={() => setIsOpen(false)}
              >
                {t(item.key)}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
