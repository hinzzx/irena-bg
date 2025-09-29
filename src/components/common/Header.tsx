import React, { useState, useEffect } from 'react';
import type { NavigationItem } from '../../types';

interface HeaderProps {
  navigation: NavigationItem[];
}

const Header: React.FC<HeaderProps> = ({ navigation }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleNavClick = (href: string) => {
    setIsMenuOpen(false);
    
    if (href.startsWith('#')) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <>
      <header className={`header ${isScrolled ? 'scrolled' : ''}`} role="banner">
        <div className="container">
          {/* Top row with social icons, logo, and burger menu */}
          <div className="header__top">
            <div className="header__social">
              <a href="https://facebook.com" className="social-link" aria-label="Facebook">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
                </svg>
              </a>
              <a href="https://instagram.com" className="social-link" aria-label="Instagram">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                  <path d="m16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                </svg>
              </a>
              <a href="mailto:contact@irena.bg" className="social-link" aria-label="Email">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                  <polyline points="22,6 12,13 2,6"/>
                </svg>
              </a>
            </div>
            
            <div className="nav__brand">
              <a href="#hero" className="nav__logo" onClick={() => handleNavClick('#hero')}>
                Irena
              </a>
            </div>
            
            <button
              className={`nav__burger ${isMenuOpen ? 'active' : ''}`}
              aria-label="Отвори навигацията"
              aria-expanded={isMenuOpen}
              onClick={toggleMenu}
            >
              <span className="nav__burger-line"></span>
              <span className="nav__burger-line"></span>
              <span className="nav__burger-line"></span>
            </button>
          </div>
          
          {/* Bottom row with navigation */}
          <nav className="header__nav" aria-label="Основна навигация">
            <ul className="nav__menu" role="list">
              {navigation.map((item) => (
                <li key={item.id}>
                  <a
                    href={item.href}
                    className="nav__link"
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
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div className={`mobile-menu ${isMenuOpen ? 'active' : ''}`} aria-hidden={!isMenuOpen}>
        <div className="mobile-menu__content">
          {/* Close button (transformed burger) */}
          <button
            className={`mobile-menu__close nav__burger ${isMenuOpen ? 'active' : ''}`}
            aria-label="Затвори навигацията"
            aria-expanded={isMenuOpen}
            onClick={toggleMenu}
          >
            <span className="nav__burger-line"></span>
            <span className="nav__burger-line"></span>
            <span className="nav__burger-line"></span>
          </button>
          
          {/* Mobile menu logo */}
          <div className="mobile-menu__header">
            <a href="#hero" className="mobile-menu__logo" onClick={() => handleNavClick('#hero')}>
              Irena
            </a>
          </div>
          
          <nav className="mobile-menu__nav" aria-label="Мобилна навигация">
            <ul className="mobile-menu__links" role="list">
              {navigation.map((item, index) => (
                <li key={item.id}>
                  <a
                    href={item.href}
                    className="mobile-menu__link"
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(item.href);
                    }}
                    style={{ transitionDelay: `${(index + 1) * 0.1}s` }}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
            <div className="mobile-menu__flourish">
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                <path d="M16 4L18.18 12.52L26 14L18.18 15.48L16 24L13.82 15.48L6 14L13.82 12.52L16 4Z" fill="currentColor"/>
                <circle cx="16" cy="16" r="12" stroke="currentColor" strokeWidth="1" fill="none"/>
              </svg>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Header;