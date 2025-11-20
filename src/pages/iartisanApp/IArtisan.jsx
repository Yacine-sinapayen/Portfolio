import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import "./iartisan.css";

const setupOptions = [
  {
    id: "connexion",
    label: "J'ai déjà un site",
    description: "On connecte IArtisan à votre site existant.",
    price: 190,
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
    description:
      "Fin de chantier, avant/après, dépannage… ce que vous voulez.",
  },
  {
    number: "2️⃣",
    title: "L'IA analyse et améliore",
    description:
      "Elle détecte le type de prestation et rédige un texte optimisé Google.",
  },
  {
    number: "3️⃣",
    title: "Clic = publié",
    description: "Sur votre site, Google Business, Facebook, Instagram et LinkedIn.",
  },
  {
    number: "4️⃣",
    title: "Votre visibilité augmente",
    description: "Votre site vit. Vos réseaux bougent. Vos clients arrivent.",
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

const proofBefore = [
  "Aucun site",
  "Quelques posts Instagram",
  "Presque aucun devis en ligne",
];

const proofAfter = [
  "🔥 +150 visiteurs",
  "✉️ 12 demandes de devis",
  "🛠️ 4 chantiers signés",
  "⏱️ 0 minute passée en communication",
];

const pricingPlans = [
  {
    name: "ESSENTIEL",
    price: "99€/mois",
    tagline: "Pour commencer simplement, sans prise de tête.",
    items: [
      "10 publications IA / mois",
      "Publication automatique sur site + 1 réseau social",
      "Texte optimisé Google",
      "SEO local de base",
      "Support email",
    ],
    highlight: false,
    subtitle: "Le kit minimal pour réveiller votre présence en ligne.",
  },
  {
    name: "PRO",
    price: "149€/mois",
    tagline: "Pour les artisans qui veulent vraiment être visibles.",
    badge: "⭐ Le plus choisi",
    highlight: true,
    items: [
      "Tout le plan Essentiel",
      "🔥 Publications illimitées",
      "🔥 Articles de blog IA (SEO boost massif)",
      "🔥 Statistiques de performance",
      "🔥 Auto-publication sur Facebook + Instagram + LinkedIn",
      "🔥 Support prioritaire",
    ],
    subtitle: "Votre communication en pilote automatique.",
  },
  {
    name: "EXPERT",
    price: "399€/mois",
    tagline: "Pour dominer votre marché local.",
    items: [
      "Tout le plan Pro",
      "✨ SEO avancé",
      "✨ Google Business optimisé",
      "✨ Accompagnement mensuel",
      "✨ Maintenance incluse",
      "✨ Pages personnalisées",
      "✨ Stratégie éditoriale IA",
      "✨ Refonte incluse si besoin",
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
    title: "On configure votre site en 24h",
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
    answer: "En général, entre 15 et 45 jours selon votre activité.",
  },
  {
    question: "Et si je n'ai pas de réseaux sociaux ?",
    answer: "Pas grave : votre site seul suffit à gagner en visibilité.",
  },
  {
    question: "Est-ce que je garde mes contenus si j'arrête ?",
    answer: "Oui. Vous restez propriétaire de tout.",
  },
];

export default function IArtisan() {
  const [selected, setSelected] = useState("connexion");
  const [showPopup, setShowPopup] = useState(false);
  const [calendlyLoading, setCalendlyLoading] = useState(true);
  const setup = setupOptions.find((opt) => opt.id === selected);

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
      <HeroTest2 onOpenPopup={() => setShowPopup(true)} />
      <ValueSectionPunchy onOpenPopup={() => setShowPopup(true)} />
      <ProblemSection />
      <HowItWorks />
      <BeforeAfterSection />
      <ProofSection />
      <PricingSection
        selected={selected}
        onSelect={setSelected}
        setup={setup}
        onOpenPopup={() => setShowPopup(true)}
      />
      <ProcessSection onOpenPopup={() => setShowPopup(true)} />
      <FaqSection />
      <FinalCTA onOpenPopup={() => setShowPopup(true)} />
      {showPopup && (
        <div className="iartisan__popup-overlay" onClick={() => setShowPopup(false)}>
          <div className="iartisan__popup-content" onClick={(e) => e.stopPropagation()}>
            <button 
              className="iartisan__popup-close" 
              onClick={() => setShowPopup(false)}
            >
              ×
            </button>
            {calendlyLoading && (
              <div className="iartisan__popup-loading">
                <div className="iartisan__loading-spinner"></div>
                <p className="iartisan__loading-text">Chargement du calendrier...</p>
              </div>
            )}
            <div 
              className="calendly-inline-widget" 
              data-url="https://calendly.com/yacine-sinapayen/prospect-payant" 
              style={{ minWidth: "320px", height: "700px", display: calendlyLoading ? "none" : "block" }}
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
            📸 Une photo → IArtisan la transforme → vos clients vous trouvent.
          </h1>
          <p className="iartisan__hero-subtitle">
            Chaque fois que vous prenez une photo de votre travail, IArtisan la
            valorise et la publie sur votre site et vos réseaux.
          </p>
          <p className="iartisan__hero-benefit">
            Votre visibilité grimpe. Vos demandes de devis aussi.{" "}
            <strong>Automatiquement.</strong>
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
    title: "Google en premier",
    text: "Chaque publication améliore votre référencement local. Vos futurs clients vous trouvent avant vos concurrents.",
  },
  {
    icon: "🤖",
    title: "100% automatique",
    text: "Une photo → l'IA rédige, optimise et publie. Vous n'avez rien à faire.",
  },
  {
    icon: "🛠️",
    title: "Conçu pour les artisans",
    text: "Peu importe votre métier : peintre, plombier, menuisier, électricien, paysagiste… ça marche pour tous.",
  },
];

function ValueSectionPunchy({ onOpenPopup }) {
  return (
    <section className="iartisan__value-punchy">
        <h2 className="iartisan__section-title iartisan__section-title--center">
          Une photo → l&apos;IA optimise → et la publie partout.
          <br />
          <strong>Automatiquement.</strong>
        </h2>
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
            <p className="iartisan__value-punchy-text">{benefit.text}</p>
          </div>
        ))}
      </div>
      <p className="iartisan__section-subtitle">
        Votre savoir-faire mérite d&apos;être vu
      </p>
      <div className="iartisan__value-punchy-cta">
        <CTAButton onOpenPopup={onOpenPopup} />
      </div>
    </section>
  );
}

function ProblemSection() {
  return (
    <section className="iartisan__problem">
      <h2 className="iartisan__section-title iartisan__section-title--center">
        Vos clients cherchent en ligne, votre site ne doit plus dormir.
      </h2>
      <div className="iartisan__problem-content">
        <div className="iartisan__problem-left">
          <div className="iartisan__problem-header">
            <span className="iartisan__problem-icon">⚠️</span>
            <h3 className="iartisan__problem-title">
              Aujourd&apos;hui, 90% des artisans :
            </h3>
          </div>
          <ul className="iartisan__problem-list">
            <li>
              <span className="iartisan__problem-item-icon">📱</span>
              <span className="iartisan__problem-item-text">
                publient seulement sur Instagram ou Facebook
              </span>
            </li>
            <li>
              <span className="iartisan__problem-item-icon">💤</span>
              <span className="iartisan__problem-item-text">
                ont un site jamais mis à jour
              </span>
            </li>
            <li>
              <span className="iartisan__problem-item-icon">👀</span>
              <span className="iartisan__problem-item-text">
                n&apos;apparaissent pas assez sur Google
              </span>
            </li>
            <li>
              <span className="iartisan__problem-item-icon">❌</span>
              <span className="iartisan__problem-item-text">
                perdent des clients au profit de la concurrence
              </span>
            </li>
          </ul>
            </div>
        <div className="iartisan__problem-result">
          <div className="iartisan__result-header">
            <span className="iartisan__result-icon">📉</span>
            <h3 className="iartisan__result-title">Résultat :</h3>
          </div>
          <ul className="iartisan__result-list">
            <li>
              <span className="iartisan__result-item-icon">💤</span>
              <span className="iartisan__result-item-text">
                Un site qui ne rapporte rien
              </span>
            </li>
            <li>
              <span className="iartisan__result-item-icon">👀</span>
              <span className="iartisan__result-item-text">
                Des réalisations que personne ne voit
              </span>
            </li>
            <li>
              <span className="iartisan__result-item-icon">🚫</span>
              <span className="iartisan__result-item-text">
                Des chantiers qui passent sous le nez
              </span>
            </li>
          </ul>
          <div className="iartisan__result-cta">
            👉 IArtisan règle ce problème automatiquement.
          </div>
        </div>
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
          <h2 className="iartisan__section-title">
            Comment ça marche ?
          </h2>
          <p className="iartisan__section-text iartisan__section-text--centered">
            Pas d&apos;écriture. Pas de mise en page. Juste une photo.
          </p>
        </motion.div>
        <div className="iartisan__steps-grid">
          {steps.map((step) => (
            <div key={step.number} className="iartisan__step-card">
              <div className="iartisan__step-number">{step.number}</div>
              <h3 className="iartisan__step-title">{step.title}</h3>
              <p className="iartisan__step-text">{step.description}</p>
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
        Avant / Après IArtisan : la différence est énorme
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
            {beforeAfter.with.map((item) => (
                <li key={item}>
                <span className="iartisan__after-bullet">✓</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

function ProofSection() {
  // Fonction pour extraire l'icône et le texte
  const parseProofItem = (item) => {
    const iconMatch = item.match(/^([^\s]+)\s+(.+)$/);
    if (iconMatch) {
      return { icon: iconMatch[1], text: iconMatch[2] };
    }
    return { icon: null, text: item };
  };

  return (
    <section className="iartisan__proof">
      <div className="iartisan__proof-content">
        <h2 className="iartisan__section-title iartisan__section-title--center">
          IArtisan apporte des résultats concrets
        </h2>
        <p className="iartisan__proof-intro iartisan__proof-intro--centered">
          Exemple réel :{" "}
          <span className="iartisan__proof-name">Julien</span>, artisan du bois
        </p>
        <div className="iartisan__proof-grid">
          <div className="iartisan__proof-before">
            <h3 className="iartisan__proof-title">👉 Avant :</h3>
            <ul className="iartisan__proof-list">
              {proofBefore.map((item) => (
                <li key={item} className="iartisan__proof-item">
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="iartisan__proof-after">
            <h3 className="iartisan__proof-title">
              👉 2 mois après IArtisan :
            </h3>
            <ul className="iartisan__proof-list">
              {proofAfter.map((item) => {
                const { icon, text } = parseProofItem(item);
                return (
                  <li key={item} className="iartisan__proof-item">
                    {icon && <span className="iartisan__proof-icon">{icon}</span>}
                    <span className="iartisan__proof-text">{text}</span>
                </li>
                );
              })}
            </ul>
          </div>
        </div>
        </div>
      </section>
  );
}

function PricingSection({ selected, onSelect, setup, onOpenPopup }) {
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
          <div className="iartisan__setup-selected">
            <span className="iartisan__setup-selected-label">
              Installation sélectionnée :
            </span>{" "}
            {setup.label} –{" "}
            <span className="iartisan__setup-selected-price">
              {setup.price.toLocaleString("fr-FR")}€
                        </span>
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
          Montrez votre savoir-faire. Laissez IArtisan faire le reste.
        </h2>
        <p className="iartisan__final-cta-text">
          Vous travaillez dur. IArtisan transforme ce travail en visibilité… et
          en clients. Automatiquement.
        </p>
        <div className="iartisan__final-cta-button">
          <CTAButton onOpenPopup={onOpenPopup} />
        </div>
        </div>
      </section>
  );
}

function CTAButton({ onOpenPopup }) {
  return (
    <button className="iartisan__cta-button" onClick={onOpenPopup}>
      🚀 Réserver une démo gratuite de 10 min
    </button>
  );
}
