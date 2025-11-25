'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from './Header.module.css';

const navItems = [
  { href: '/about', label: 'About' },
  { href: '/services', label: 'Services' },
  { href: '/portfolio', label: 'Portfolio' },
  { href: '/speaking', label: 'Speaking' },
  { href: '/content', label: 'Content' },
  { href: '/contact', label: 'Contact' },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className={`${styles.header} ${isOpen ? styles.isOpen : ''}`}>
      <div className={styles.home}>
        <Link href="/">Shahrooz Aghili</Link>
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
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
