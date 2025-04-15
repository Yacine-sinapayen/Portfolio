import "./header.css";
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { SiMalt } from 'react-icons/si';
import { useState } from 'react';
import Logo from "../../../public/logo-transparent.png";
export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="header">
      <div className="header__title">
        <img src={Logo} alt="Logo" />
        <h3>Yacine Sinapayen</h3>
      </div>

      <div className="burger-menu" onClick={toggleMenu}>
        <div className={`burger-bar ${isMenuOpen ? 'open' : ''}`}></div>
        <div className={`burger-bar ${isMenuOpen ? 'open' : ''}`}></div>
        <div className={`burger-bar ${isMenuOpen ? 'open' : ''}`}></div>
      </div>

      {/* <div className={`header__nav ${isMenuOpen ? 'open' : ''}`}> */}
        {/* Menu de navigation principal */}
        {/* <nav className="header__nav-list"> */}
          {/* Liens de navigation vers les différentes sections du site */}
          {/* <a href="/">Expertise</a>
          <a href="/">Projets</a>
          <a href="/">Méthodologie</a>
          <a href="/">Services</a> */}
          
          {/* Section commentée - Fonctionnalités à implémenter */}
          {/* Lien vers le formulaire de contact */}
          {/* <a href="/">Travaillons ensemble</a> */}
          
          {/* Lien pour la prise de rendez-vous - En attente de l'intégration Calendly */}
          {/* <a href="/">Réserver un appel</a> */}
        {/* </nav>
      </div> */}

      {/* FOLLOW SECTION*/}
      {/* <div className={`header__follow ${isMenuOpen ? 'open' : ''}`}>
        <a href="https://www.linkedin.com/in/yacine-sinapayen/" target="_blank" aria-label="LinkedIn">
          <FaLinkedin size={24} />
        </a>
        <a href="https://github.com/Yacine-sinapayen" target="_blank" aria-label="GitHub">
          <FaGithub size={24} />
        </a>
        <a href="" target="_blank" aria-label="Malt">
          <SiMalt size={24} />
        </a>
      </div> */}
    </div>
  );
}
