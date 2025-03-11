import "./header.css";
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { SiMalt } from 'react-icons/si';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="header">
      <div className="header__title">
        <h3>Yacine Sinapayen</h3>
      </div>

      <div className="burger-menu" onClick={toggleMenu}>
        <div className={`burger-bar ${isMenuOpen ? 'open' : ''}`}></div>
        <div className={`burger-bar ${isMenuOpen ? 'open' : ''}`}></div>
        <div className={`burger-bar ${isMenuOpen ? 'open' : ''}`}></div>
      </div>

      <div className={`header__nav ${isMenuOpen ? 'open' : ''}`}>
        <nav className="header__nav-list">
          <a href="/">Expertise</a>
          <a href="/">Projets</a>
          <a href="/">Méthodologie</a>
          <a href="/">Services</a>
          {/* redirect to form contact */}
          <a href="/">Travaillons ensemble</a>
          {/* à mettre en place quand il y aura un calendly */}
          {/* <a href="/">Réserver un appel</a> */}
        </nav>
      </div>

      {/* FOLLOW SECTION*/}
      <div className={`header__follow ${isMenuOpen ? 'open' : ''}`}>
        <a href="https://www.linkedin.com/in/yacine-sinapayen/" target="_blank" aria-label="LinkedIn">
          <FaLinkedin size={24} />
        </a>
        <a href="https://github.com/Yacine-sinapayen" target="_blank" aria-label="GitHub">
          <FaGithub size={24} />
        </a>
        <a href="" target="_blank" aria-label="Malt">
          <SiMalt size={24} />
        </a>
      </div>
    </div>
  );
}
