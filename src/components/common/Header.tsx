import React, { useState, useEffect, useRef, useCallback } from 'react';
import type { NavigationItem } from '../../types';

interface HeaderProps {
  navigation: NavigationItem[];
}

const Header: React.FC<HeaderProps> = ({ navigation }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const burgerButtonRef = useRef<HTMLButtonElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const firstFocusableRef = useRef<HTMLAnchorElement>(null);

  // Handle scroll detection with throttling for performance
  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setIsScrolled(window.scrollY > 50);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // REMOVED: All scroll lock mechanisms to test performance
  // The scroll lock was causing layout thrashing on 120Hz displays

  // Close menu function - must be defined before useEffect that uses it
  const closeMenu = useCallback(() => {
    setIsMenuOpen(false);
    // Return focus to burger button after menu transitions out
    // Use double RAF to ensure this happens after all renders complete
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        burgerButtonRef.current?.focus();
      });
    });
  }, []);

  // Focus trap and keyboard navigation
  useEffect(() => {
    if (!isMenuOpen) return;

    // Focus first link when menu opens - use RAF for better timing
    requestAnimationFrame(() => {
      firstFocusableRef.current?.focus();
    });

    const handleKeyDown = (e: KeyboardEvent) => {
      // Close on Escape
      if (e.key === 'Escape') {
        closeMenu();
        return;
      }

      // Handle Tab for focus trap
      if (e.key === 'Tab') {
        const focusableElements = overlayRef.current?.querySelectorAll(
          'a[href], button:not([disabled])'
        );
        if (!focusableElements || focusableElements.length === 0) return;

        const firstElement = focusableElements[0] as HTMLElement;
        const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

        if (e.shiftKey) {
          // Shift + Tab
          if (document.activeElement === firstElement) {
            e.preventDefault();
            lastElement.focus();
          }
        } else {
          // Tab
          if (document.activeElement === lastElement) {
            e.preventDefault();
            firstElement.focus();
          }
        }
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isMenuOpen, closeMenu]);

  // Toggle menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Handle navigation clicks
  const handleNavClick = (href: string) => {
    // Close menu
    setIsMenuOpen(false);
    
    if (href.startsWith('#')) {
      // Wait for menu to close and scroll position to restore
      // Use multiple RAFs to ensure proper timing on high refresh rate displays
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            const element = document.querySelector(href);
            if (element) {
              const elementPosition = element.getBoundingClientRect().top + window.scrollY;
              const headerOffset = window.innerWidth <= 767 ? 90 : 80;
              const offsetPosition = elementPosition - headerOffset;
              
              window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
              });
            }
          });
        });
      });
    }
  };

  // Handle outside click
  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      closeMenu();
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
              ref={burgerButtonRef}
              className={`c-burger ${isMenuOpen ? 'is-open' : ''}`}
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMenuOpen}
              aria-controls="mobile-menu"
              onClick={toggleMenu}
              data-animation="morph-lines"
            >
              <span className="c-burger__line"></span>
              <span className="c-burger__line"></span>
              <span className="c-burger__line"></span>
              <span className="visually-hidden">
                {isMenuOpen ? "Close menu" : "Open menu"}
              </span>
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
      <div 
        ref={overlayRef}
        id="mobile-menu"
        className={`c-overlay ${isMenuOpen ? 'is-open' : ''}`}
        aria-hidden={!isMenuOpen}
        onClick={handleOverlayClick}
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation"
      >
        <div className="c-overlay__backdrop"></div>
        <div className="c-overlay__content">
          
          <nav className="c-overlay__nav" aria-label="Mobile navigation">
            <ul className="c-overlay__links" role="list">
              {navigation.map((item, index) => (
                <li key={item.id} className="c-overlay__item">
                  <a
                    ref={index === 0 ? firstFocusableRef : null}
                    href={item.href}
                    className="c-overlay__link"
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(item.href);
                    }}
                    tabIndex={isMenuOpen ? 0 : -1}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
            
            <div className="c-overlay__flourish" aria-hidden="true">
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                <path d="M16 4L18.18 12.52L26 14L18.18 15.48L16 24L13.82 15.48L6 14L13.82 12.52L16 4Z" fill="currentColor"/>
                <circle cx="16" cy="16" r="12" stroke="currentColor" strokeWidth="1" fill="none"/>
              </svg>
            </div>
            
            {/* Social media icons */}
            <div className="c-overlay__social">
              <a 
                href="https://facebook.com" 
                className="social-link" 
                aria-label="Facebook"
                tabIndex={isMenuOpen ? 0 : -1}
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
                </svg>
              </a>
              <a 
                href="https://instagram.com" 
                className="social-link" 
                aria-label="Instagram"
                tabIndex={isMenuOpen ? 0 : -1}
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                  <path d="m16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                </svg>
              </a>
              <a 
                href="mailto:contact@irena.bg" 
                className="social-link" 
                aria-label="Email"
                tabIndex={isMenuOpen ? 0 : -1}
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                  <polyline points="22,6 12,13 2,6"/>
                </svg>
              </a>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Header;