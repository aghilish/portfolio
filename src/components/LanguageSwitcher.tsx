'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import styles from './LanguageSwitcher.module.css';

export default function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();

  return (
    <div className={styles.switcher}>
      <button
        className={`${styles.button} ${language === 'en' ? styles.active : ''}`}
        onClick={() => setLanguage('en')}
        aria-label="Switch to English"
      >
        EN
      </button>
      <button
        className={`${styles.button} ${language === 'de' ? styles.active : ''}`}
        onClick={() => setLanguage('de')}
        aria-label="Auf Deutsch umschalten"
      >
        DE
      </button>
    </div>
  );
}
