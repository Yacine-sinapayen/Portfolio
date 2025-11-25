import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import "./iartisan.css";

const setupOptions = [
  {
    id: "connexion",
    label: "J'ai déjà un site",
    description: "On connecte IArtisan à votre site existant.",
    price: 0,
  },
  {
    id: "refonte",
    label: "Je souhaite rafraîchir mon site",
    description: "On le modernise et on le prépare pour IArtisan.",
    price: 1500,
  },
  {
    id: "creation",
    label: "Je souhaite créer un nouveau site",
    description: "On crée un site clé-en-main, prêt pour IArtisan.",
    price: 2000,
  },
];

const steps = [
  {
    number: "1️⃣",
    title: "Prenez une photo",
    description: "Avant, pendant ou après votre chantier.",
  },
  {
    number: "2️⃣",
    title: "L'IA analyse et améliore",
    description:
      "Elle détecte le type de prestation et rédige un texte optimisé pour le référencement Google.",
  },
  {
    number: "3️⃣",
    title: "Publié en un clic",
    description:
      "Sur votre site web et vos réseaux sociaux.",
  },
  {
    number: "4️⃣",
    title: "Votre visibilité augmente",
    description: "Votre site vit. <br />Vos réseaux bougent. <br />Et vos clients vous trouve.",
  },
];

const beforeAfter = {
  without: [
    "Site qui dort",
    "Aucune régularité",
    "Peu de visibilité",
    "Peu de demandes de devis",
  ],
  with: [
    "10 à 30 publications / mois",
    "Site actif et vivant",
    "Référencement local qui grimpe",
    "Demandes de devis régulières",
  ],
};

const proofAfter = [
  "🔥  +150 visiteurs par mois*",
  "✉️  12 demandes de devis par mois*",
  "🛠️  4 chantiers signés par mois*",
  "⏱️ 0 minute passée en communication",
];

const pricingPlans = [
  {
    name: "ESSENTIEL",
    price: "99€/mois",
    tagline: "Pour commencer simplement, sans prise de tête.",
    items: [
      "5 publications IA / mois",
      "Publication automatique sur votre site web + 1 réseau social",
      "Texte optimisé pour le référencement Google",
      "Support par email",
    ],
    highlight: false,
    subtitle: "Le kit minimal pour réveiller votre présence en ligne.",
  },
  {
    name: "PRO",
    price: "149€/mois",
    tagline: "Pour les artisans qui veulent vraiment être visibles.",
    badge: "⭐ Le plus vendu",
    highlight: true,
    items: [
      "Tout le plan Essentiel",
      "🔥 Publications illimitées",
      "🔥 2 articles de blog IA (SEO boost massif)",
      "🔥 Statistiques de performance mensuelles",
      "🔥 Auto-publication sur vos réseaux sociaux",
      "🔥 Support prioritaire par email",
    ],
    subtitle: "Votre communication en pilote automatique. Génération de clients en continu.",
  },
  {
    name: "EXPERT",
    price: "399€/mois",
    tagline: "Pour dominer votre marché local.",
    items: [
      "Tout le plan Pro",
      "✨ Optimisation référencement sur toutes vos pages web",
      "✨ Optimisation de votre page Google Business",
      "✨ Accompagnement mensuel",
      "✨ Maintenance incluse",
      "✨ Pages personnalisées",
      "✨ Stratégie éditoriale IA",
    ],
    highlight: false,
    subtitle: "Votre présence en ligne… surpuissante.",
  },
];

const processSteps = [
  {
    icon: "1️⃣",
    title: "Vous créez votre compte",
    description: "",
  },
  {
    icon: "2️⃣",
    title: "On configure votre site et vos réseaux sociaux en 48h",
    description: "",
  },
  {
    icon: "3️⃣",
    title: "Vous prenez votre première photo",
    description: "",
  },
  {
    icon: "4️⃣",
    title: "Vos publications commencent à apparaître automatiquement",
    description: "",
  },
];

const faqs = [
  {
    question: "En combien de temps je vois les résultats ?",
    answer: "En général, entre 45 et 60 jours selon votre activité et le nombre de publications.",
  },
  {
    question: "Et si je n'ai pas de réseaux sociaux ?",
    answer: "Cela n'est pas grave : votre site seul suffit à gagner en visibilité.",
  },
];

export default function IArtisan() {
  const [selected, setSelected] = useState("connexion");
  const [showPopup, setShowPopup] = useState(false);
  const [calendlyLoading, setCalendlyLoading] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);

  // Détecter le scroll pour afficher le header
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Charger le script Calendly
  useEffect(() => {
    if (showPopup) {
      setCalendlyLoading(true);
      const script = document.createElement("script");
      script.src = "https://assets.calendly.com/assets/external/widget.js";
      script.type = "text/javascript";
      script.async = true;

      script.onload = () => {
        // Attendre un peu pour que Calendly s'initialise
        setTimeout(() => {
          setCalendlyLoading(false);
        }, 500);
      };

      script.onerror = () => {
        setCalendlyLoading(false);
      };

      document.body.appendChild(script);

    return () => {
        setCalendlyLoading(true);
      };
      }
  }, [showPopup]);

  return (
    <div className="iartisan">
      <Header 
        isVisible={isScrolled} 
        onOpenPopup={() => setShowPopup(true)} 
      />
      <HeroTest2 onOpenPopup={() => setShowPopup(true)} />
      <ValueSectionPunchy onOpenPopup={() => setShowPopup(true)} />
      <BeforeAfterSection />
      <HowItWorks />
      <PricingSection
        selected={selected}
        onSelect={setSelected}
        onOpenPopup={() => setShowPopup(true)}
      />
      <ProcessSection onOpenPopup={() => setShowPopup(true)} />
      <FaqSection />
      <FinalCTA onOpenPopup={() => setShowPopup(true)} />
      {showPopup && (
        <div
          className="iartisan__popup-overlay"
          onClick={() => setShowPopup(false)}
        >
          <div
            className="iartisan__popup-content"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="iartisan__popup-close"
              onClick={() => setShowPopup(false)}
            >
              ×
            </button>
            {calendlyLoading && (
              <div className="iartisan__popup-loading">
                <div className="iartisan__loading-spinner"></div>
                <p className="iartisan__loading-text">
                  Chargement du calendrier...
                </p>
            </div>
            )}
            <div
              className="calendly-inline-widget"
              data-url="https://calendly.com/yacine-sinapayen/prospect-payant"
              style={{
                minWidth: "320px",
                height: "700px",
                display: calendlyLoading ? "none" : "block",
              }}
            ></div>
          </div>
        </div>
      )}
            </div>
  );
}

// Hero original avec visuel
// function Hero() {
//   return (
//     <header className="iartisan__hero">
//       <div className="iartisan__hero-content">
//         <div className="iartisan__hero-text">
//           <div className="iartisan__badge">
//             <span className="iartisan__badge-icon">🧰</span>
//             <span>L&apos;OUTIL IA PRÉFÉRÉ DES ARTISANS</span>
//           </div>
//           <h1 className="iartisan__hero-title">
//             IArtisan – Transformez vos photos en clients
//           </h1>
//           <p className="iartisan__hero-subtitle">
//             Prenez une photo → l&apos;IA l&apos;analyse et la valorise →
//             c&apos;est publié sur votre site et vos réseaux.
//           </p>
//           <p className="iartisan__hero-benefit">
//             Votre site vit, votre visibilité augmente, vos demandes de devis
//             aussi.
//           </p>
//           <div className="iartisan__hero-cta">
//             <CTAButton />
//           </div>
//         </div>
//         <div className="iartisan__hero-visual">
//           <img
//             src="/hero_image_iartisan_hub.png"
//             alt="IArtisan - Hub de publication connecté aux réseaux sociaux"
//             className="iartisan__hero-image"
//           />
//         </div>
//       </div>
//     </header>
//   );
// }

function HeroTest2({ onOpenPopup }) {
  return (
    <header className="iartisan__hero">
      <div className="iartisan__hero-content">
        <div className="iartisan__hero-text">
          <div className="iartisan__badge">
            <span className="iartisan__badge-icon">⭐</span>
            <span>Déjà utilisé par +150 artisans dans toute la France</span>
          </div>
          <h1 className="iartisan__hero-title">
            Votre savoir-faire mérite d&apos;être vu. 
          </h1>
          <h1 className="iartisan__hero-title">
            iArtisan gère votre communication en un clic.
          </h1>
          <p className="iartisan__hero-subtitle">
            Vous travaillez dur, IArtisan le démontre et vous génère{" "}
            <strong>automatiquement</strong> des clients.
          </p>
          <div className="iartisan__hero-cta">
            <CTAButton onOpenPopup={onOpenPopup} />
          </div>
        </div>
        </div>
    </header>
  );
}

const punchyBenefits = [
  {
    icon: "🚀",
    title: "Plus de clients",
    text: "Votre visibilité augmente → vous recevez plus de demandes de devis → vous signez plus de chantiers.",
  },
  {
    icon: "google",
    title: "Optimisation du référencement Google",
    text: "Chaque publication améliore votre référencement local.<br />Démarquez-vous de vos concurrents.",
  },
  {
    icon: "🤖",
    title: "100% automatique",
    text: "Une photo → l'IA rédige, optimise et publie. <br />Vous n'avez rien à faire.",
  },
  {
    icon: "🛠️",
    title: "Conçu pour les artisans",
    text: "Une solution simple, rapide et efficace pour valoriser votre savoir-faire.",
  },
];

function ValueSectionPunchy({ onOpenPopup }) {
  return (
    <section className="iartisan__value-punchy">
      <div className="iartisan__value-punchy-container">
        {punchyBenefits.map((benefit, index) => (
          <div key={index} className="iartisan__value-punchy-card">
            <div className="iartisan__value-punchy-icon">
              {benefit.icon === "google" ? (
                <div className="iartisan__google-logo">G</div>
              ) : (
                benefit.icon
              )}
            </div>
            <h2 className="iartisan__value-punchy-title">{benefit.title}</h2>
            <p 
              className="iartisan__value-punchy-text" 
              dangerouslySetInnerHTML={{ __html: benefit.text }}
            />
          </div>
        ))}
            </div>
      <div className="iartisan__value-punchy-cta">
        <CTAButton onOpenPopup={onOpenPopup} />
        </div>
      </section>
  );
}

function HowItWorks() {
  return (
    <section className="iartisan__how">
      <div className="iartisan__how-content">
        <motion.div
          className="iartisan__how-intro"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="iartisan__section-title">Comment ça marche ?</h2>
          <p className="iartisan__section-text iartisan__section-text--centered">
            Pas d&apos;écriture. Pas de mise en page. Juste une photo.
          </p>
        </motion.div>
        <div className="iartisan__steps-grid">
          {steps.map((step) => (
            <div key={step.number} className="iartisan__step-card">
              <div className="iartisan__step-number">{step.number}</div>
              <h3 className="iartisan__step-title">{step.title}</h3>
              <p 
                className="iartisan__step-text" 
                dangerouslySetInnerHTML={{ __html: step.description }}
              />
              </div>
          ))}
        </div>
        </div>
      </section>
  );
}

function BeforeAfterSection() {
  return (
    <section className="iartisan__before-after">
      <h2 className="iartisan__section-title iartisan__section-title--center">
        Faite toute la différence avec IArtisan{" "}
      </h2>
      <div className="iartisan__before-after-grid">
        <div className="iartisan__before-card">
          <div className="iartisan__before-header">
            <div className="iartisan__before-icon-wrapper">
              <span className="iartisan__before-icon">⛔</span>
            </div>
            <h3 className="iartisan__before-title">Sans IArtisan</h3>
          </div>
          <ul className="iartisan__before-list">
            {beforeAfter.without.map((item) => (
              <li key={item}>
                <span className="iartisan__before-bullet">✗</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="iartisan__after-card">
          <div className="iartisan__after-header">
            <div className="iartisan__after-icon-wrapper">
              <span className="iartisan__after-icon">✅</span>
            </div>
            <h3 className="iartisan__after-title">Avec IArtisan</h3>
          </div>
          <ul className="iartisan__after-list">
            {proofAfter.map((item) => {
              const iconMatch = item.match(/^([^\s]+)\s+(.+)$/);
              const icon = iconMatch ? iconMatch[1] : null;
              const text = iconMatch ? iconMatch[2] : item;
              return (
                <li key={item}>
                  {icon && (
                    <span className="iartisan__after-icon-inline">{icon}</span>
                  )}
                  <span>{text}</span>
                </li>
              );
            })}
          </ul>
          <p className="iartisan__before-after-text">* en moyenne</p>
        </div>
          </div>
    </section>
  );
}

function PricingSection({ selected, onSelect, onOpenPopup }) {
              return (
    <section className="iartisan__pricing" id="pricing">
      <div className="iartisan__pricing-content">
        <h2 className="iartisan__section-title">
          Des formules simples, adaptées à votre activité
        </h2>
        <p className="iartisan__section-subtitle">
          💸 1 seul chantier signé suffit à rentabiliser plusieurs mois
          d&apos;IArtisan.
        </p>

        <div className="iartisan__setup-selector">
          <p className="iartisan__setup-label">
            🧩 Étape 1 — Choisissez votre situation
          </p>
          <div className="iartisan__setup-options">
            {setupOptions.map((option) => (
              <button
                key={option.id}
                type="button"
                onClick={() => onSelect(option.id)}
                className={`iartisan__setup-option ${
                  selected === option.id ? "iartisan__setup-option--active" : ""
                }`}
              >
                <div className="iartisan__setup-header">
                  <span className="iartisan__setup-label-text">
                    {option.label}
                        </span>
                  <span className="iartisan__setup-price">
                    {option.price.toLocaleString("fr-FR")}€
                        </span>
                    </div>
                <p className="iartisan__setup-description">
                  {option.description}
                </p>
              </button>
            ))}
          </div>
        </div>

        <div className="iartisan__pricing-intro">
          <p className="iartisan__pricing-label">
            🚀 Étape 2 — Choisissez votre formule
          </p>
        </div>

        <div className="iartisan__plans-grid">
          {pricingPlans.map((plan) => (
            <PricingCard key={plan.name} {...plan} onOpenPopup={onOpenPopup} />
          ))}
        </div>

        <p className="iartisan__pricing-note">
          Sans engagement. Vous arrêtez quand vous voulez.
          </p>
        </div>
      </section>
  );
}

function PricingCard({
  name,
  price,
  tagline,
  items,
  highlight,
  badge,
  subtitle,
  onOpenPopup,
}) {
  return (
    <div
      className={`iartisan__plan-card ${
        highlight ? "iartisan__plan-card--highlight" : ""
      }`}
    >
      <div className="iartisan__plan-header">
        <h3 className="iartisan__plan-name">{name}</h3>
        {badge && <span className="iartisan__plan-badge">{badge}</span>}
      </div>
      <div className="iartisan__plan-price">{price}</div>
      <p className="iartisan__plan-tagline">{tagline}</p>
      {subtitle && <p className="iartisan__plan-subtitle">{subtitle}</p>}
      <ul className="iartisan__plan-items">
        {items.map((item) => (
          <li key={item} className="iartisan__plan-item">
            <span className="iartisan__plan-check">✔️</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
      <button
        className={`iartisan__plan-button ${
          highlight ? "iartisan__plan-button--primary" : ""
        }`}
        onClick={onOpenPopup}
      >
        Choisir ce plan
      </button>
    </div>
  );
}

function ProcessSection({ onOpenPopup }) {
  return (
      <section className="iartisan__process">
      <div className="iartisan__process-content">
        <h2 className="iartisan__section-title iartisan__section-title--center">
          Installation simple, résultats rapides
        </h2>
        <div className="iartisan__process-grid">
          {processSteps.map((step, index) => (
            <div key={index} className="iartisan__process-card">
              <div className="iartisan__process-icon">{step.icon}</div>
              <h3 className="iartisan__process-title">{step.title}</h3>
              <p className="iartisan__process-text">{step.description}</p>
            </div>
          ))}
        </div>
        <div className="iartisan__process-cta">
          <CTAButton onOpenPopup={onOpenPopup} />
        </div>
      </div>
      </section>
  );
}

function FaqSection() {
  return (
      <section className="iartisan__faq">
      <div className="iartisan__faq-content">
        <h2 className="iartisan__section-title iartisan__section-title--center">
          Questions fréquentes
        </h2>
        <div className="iartisan__faq-list">
          {faqs.map((item) => (
            <div key={item.question} className="iartisan__faq-item">
              <p className="iartisan__faq-question">Q : {item.question}</p>
              <p className="iartisan__faq-answer">{item.answer}</p>
            </div>
          ))}
        </div>
        </div>
      </section>
  );
}

function FinalCTA({ onOpenPopup }) {
  return (
    <section className="iartisan__final-cta">
      <div className="iartisan__final-cta-content">
        <h2 className="iartisan__final-cta-title">
          Concentrez-vous sur votre savoir-faire.
        </h2>
        <h2 className="iartisan__final-cta-title">Laissez IArtisan faire le reste. </h2>
        <div className="iartisan__final-cta-button">
          <CTAButton onOpenPopup={onOpenPopup} />
        </div>
        </div>
      </section>
  );
}

function Header({ isVisible, onOpenPopup }) {
  return (
    <header className={`iartisan__header ${isVisible ? "iartisan__header--visible" : ""}`}>
      <div className="iartisan__header-content">
        <div className="iartisan__header-branding">
          <div className="iartisan__header-branding-main">iArtisan</div>
          <div className="iartisan__header-branding-sub">by webysta agence</div>
        </div>
        <div className="iartisan__header-cta">
          <CTAButton onOpenPopup={onOpenPopup} />
        </div>
      </div>
    </header>
  );
}

function CTAButton({ onOpenPopup }) {
  return (
    <button className="iartisan__cta-button" onClick={onOpenPopup}>
      🚀 Réserver une démo gratuite de 10 min
    </button>
  );
}
