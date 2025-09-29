import React from 'react';
import type { NavigationItem } from '../../types';

interface FooterProps {
  navigation: NavigationItem[];
}

const Footer: React.FC<FooterProps> = ({ navigation }) => {
  const handleNavClick = (href: string) => {
    if (href.startsWith('#')) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <footer className="footer" role="contentinfo">
      <div className="container">
        <div className="footer__content">
          <div className="flourish" aria-hidden="true">
            <svg width="32" height="2" viewBox="0 0 32 2" fill="none">
              <line x1="0" y1="1" x2="32" y2="1" stroke="currentColor" strokeWidth="1"/>
            </svg>
          </div>
          <nav className="footer__nav" aria-label="Футър навигация">
            <ul className="footer__links" role="list">
              {navigation.map((item) => (
                <li key={item.id}>
                  <a
                    href={item.href}
                    className="footer__link"
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(item.href);
                    }}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <div className="footer__social">
            <a href="#" className="footer__social-link" aria-label="Последвай ни в Instagram">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" stroke="currentColor" strokeWidth="2"/>
                <path d="m16 11.37-4-4.37-4 4.37" stroke="currentColor" strokeWidth="2"/>
              </svg>
            </a>
            <a href="#" className="footer__social-link" aria-label="Последвай ни в Pinterest">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
                <path d="M8 14s1.5 2 4 2 4-2 4-2" stroke="currentColor" strokeWidth="2"/>
              </svg>
            </a>
          </div>
          <p className="footer__copyright">© 2024 <span className="brand-name">Irena</span>. Всички права запазени.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;