import { useEffect, useMemo, useState } from "react";
import "./webysta.css";
import {
  CTA_TEXT,
  SECONDARY_CTA,
  heroHighlights,
  aboutHighlights,
  aboutBadges,
  problemPoints,
  problemResults,
  appFlowSteps,
  automationBenefits,
  advantages,
  setupOptions,
  offerPlans,
  caseStudy,
  processSteps,
  faqs,
  callMailTo,
  whatsappLink,
  phoneLink,
} from "./data";

const SectionIndicator = ({ number, label, icon }) => (
  <div className="section-indicator">
    <span className="section-indicator__number">{number}</span>
    {icon ? (
      <span className="section-indicator__icon" aria-hidden="true">
        {icon}
      </span>
    ) : null}
    <span className="section-indicator__label">{label}</span>
  </div>
);

const BenefitCard = ({ icon, title, description }) => (
  <article className="differentiator-card">
    <div className="differentiator-card__head">
      <span className="differentiator-card__icon" aria-hidden="true">
        {icon}
      </span>
      <h3>{title}</h3>
    </div>
    <p className="differentiator-card__lead">{description}</p>
  </article>
);

const PlanCard = ({ plan, installLabel }) => (
  <article
    className={[
      "plan-card",
      plan.popular ? "plan-card--popular" : "",
      plan.installIncluded ? "plan-card--included" : "",
    ]
      .filter(Boolean)
      .join(" ")}
  >
    <div className="plan-card__top">
      <span className="plan-card__icon">{plan.icon}</span>
      <div>
        <p className="plan-card__eyebrow">{plan.subtitle}</p>
        <h3>{plan.title}</h3>
      </div>
      {plan.installIncluded && (
        <span className="plan-card__badge plan-card__badge--success">
          {plan.installNote}
        </span>
      )}
      {plan.popular && (
        <span className="plan-card__badge">⭐ La plus choisie</span>
      )}
    </div>
    <div className="plan-card__price">
      <p className="plan-card__monthly">{plan.monthly}</p>
      <p className="plan-card__install">{installLabel}</p>
    </div>
    <ul>
      {plan.features.map((feature) => (
        <li key={feature}>{feature}</li>
      ))}
    </ul>
    <a href={callMailTo} className="btn btn--primary">
      {plan.cta}
    </a>
  </article>
);

const FAQItem = ({ question, answer }) => (
  <details open>
    <summary>{question}</summary>
    <p>{answer}</p>
  </details>
);

const Webysta = () => {
  const [selectedSetupId, setSelectedSetupId] = useState(setupOptions[0].id);

  useEffect(() => {
    document.title = "Webysta – Agence web & communication pour artisans";

    const existingMeta = document.querySelector('meta[name="description"]');
    const metaDescription = existingMeta || document.createElement("meta");
    metaDescription.name = "description";
    metaDescription.content =
      "Webysta conçoit des sites performants et connecte IArtisan pour valoriser vos réalisations automatiquement : plus de visibilité, plus de clients, sans effort.";
    if (!existingMeta) {
      document.head.appendChild(metaDescription);
    }

    return () => {
      if (!existingMeta && document.head.contains(metaDescription)) {
        document.head.removeChild(metaDescription);
      }
    };
  }, []);

  const selectedSetup = useMemo(
    () => setupOptions.find((option) => option.id === selectedSetupId),
    [selectedSetupId],
  );

  return (
    <main className="webysta">
      <div className="webysta-hero">
        <section className="webysta__hero webysta-hero__inner">
          <h1>Agence web & communication au service des artisans.</h1>
          <h2>
            Votre site web + IArtisan = 🚀 visibilité + 🚀 clients
          </h2>
          <h3>
            Vous prenez une photo de vos réalisations, IArtisan la valorise et la
            publie automatiquement sur votre site et vos réseaux.
          </h3>
          <div className="cta-row">
            <a href={callMailTo} className="btn btn--primary">
              {CTA_TEXT}
            </a>
            <a href={whatsappLink} className="btn btn--ghost">
              {SECONDARY_CTA}
            </a>
          </div>
          {heroHighlights.map((item) => (
            <p key={item.label} className="eyebrow">
              {item.label} — {item.text}
            </p>
          ))}
        </section>
      </div>

      <section className="webysta-about">
        <SectionIndicator number="01" label="Qui sommes-nous ?" />
        <div className="webysta-about__content">
          <div className="webysta-about__text">
            <h2>Webysta, l’agence web spécialisée pour les artisans</h2>
            <p className="section-subtitle">
              Basée à Bordeaux, Webysta accompagne les artisans et indépendants :
              peintres, menuisiers, coiffeurs, électriciens, décorateurs,
              paysagistes, coachs, etc.
            </p>
            <p>
              Notre mission : vous rendre visible là où vos clients vous cherchent —
              Google, votre site et vos réseaux sociaux.
            </p>
            <p>
              Pour ça, nous avons développé une solution exclusive :{" "}
              <strong>IArtisan</strong>, notre application IA qui fait vivre votre
              site et vos réseaux automatiquement.
            </p>
            <div className="badge-row">
              {aboutBadges.map((badge) => (
                <span key={badge.label} className="badge">
                  {badge.icon} {badge.label}
                </span>
              ))}
            </div>
          </div>
          <div className="webysta-about__card">
            <h3>Ce qui fait notre différence</h3>
            <ul className="webysta-about__list">
              {aboutHighlights.map((item) => (
                <li key={item.title}>
                  <span className="webysta-about__bullet">✦</span>
                  <div>
                    <p className="webysta-about__list-title">{item.title}</p>
                    <p>{item.text}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="webysta__problem">
        <SectionIndicator number="02" label="Le problème" />
        <h2>Vous travaillez dur sur le terrain… mais votre présence en ligne dort</h2>
        <div className="problem-card">
          <div className="problem-card__column">
            <div className="problem-card__heading">
              <h3>La plupart des artisans :</h3>
            </div>
            <ul className="problem-list">
              {problemPoints.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </div>
          <div className="problem-card__column problem-card__column--result">
            <div className="problem-card__heading">
              <h3>Résultat :</h3>
            </div>
            <ul className="problem-list">
              {problemResults.map((result) => (
                <li key={result}>{result}</li>
              ))}
            </ul>
          </div>
        </div>
        <div className="problem-cta">
          <p>
            👉 C’est pour résoudre ce problème que nous avons créé IArtisan.
          </p>
          <a href={callMailTo} className="btn btn--primary">
            Découvrir IArtisan
          </a>
        </div>
      </section>

      <section className="webysta__solution">
        <SectionIndicator number="03" label="Comment ça marche" icon="🤖" />
        <h2>IArtisan – l’application qui valorise vos réalisations automatiquement</h2>
        <p className="section-subtitle">
          IArtisan transforme vos photos de chantiers en contenu professionnel
          qui attire des clients. Sans rédaction, sans mise en page, sans effort.
        </p>

        <div className="solution-showcase">
          <div className="solution-showcase__left">
            <span className="solution-chip">Fonctionnement en 4 étapes</span>
            <ol className="solution-steps">
              {appFlowSteps.map((step) => (
                <li className="solution-step" key={step.id}>
                  <span className="solution-step__marker">{step.id}</span>
                  <div className="solution-step__body">
                    <h3>{step.title}</h3>
                    <p>{step.text}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
          <div className="solution-flow">
            <div className="solution-cta-card">
              <p>IArtisan livre automatiquement :</p>
              <ul className="solution-benefits solution-benefits--card">
                {automationBenefits.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="webysta__benefits">
        <SectionIndicator number="04" label="Les avantages" icon="🌟" />
        <h2>Webysta + IArtisan : bien plus qu’un site web</h2>
        <div className="differentiators">
          {advantages.map((advantage) => (
            <BenefitCard
              key={advantage.title}
              icon={advantage.icon}
              title={advantage.title}
              description={advantage.description}
            />
          ))}
        </div>
      </section>

      <section className="webysta__offers" id="tarifs">
        <SectionIndicator number="05" label="Tarifs" icon="💰" />
        <h2>Des offres adaptées à votre situation – avec ou sans site web</h2>

        <div className="pricing-step">
          <h3>🧩 Étape 1 — Choisissez votre situation</h3>
          <div className="setup-selector">
            {setupOptions.map((option) => {
              const isActive = option.id === selectedSetupId;
              return (
                <label
                  key={option.id}
                  className={[
                    "setup-option",
                    isActive ? "setup-option--active" : "",
                  ]
                    .filter(Boolean)
                    .join(" ")}
                >
                  <input
                    type="checkbox"
                    checked={isActive}
                    onChange={() => setSelectedSetupId(option.id)}
                  />
                  <span className="setup-option__checkbox" aria-hidden="true" />
                  <span className="setup-option__text">
                    <span className="setup-option__label">{option.label}</span>
                    <span className="setup-option__desc">
                      {option.priceLabel}
                    </span>
                  </span>
                </label>
              );
            })}
          </div>
        </div>

        <div className="pricing-step pricing-step--plans">
          <h3>🚀 Étape 2 — Choisissez votre formule</h3>
          <p className="pricing-step__hint">
            Vous regardez actuellement les tarifs &ldquo;{selectedSetup?.description}
            &rdquo;.
          </p>
          <div className="plan-grid">
            {offerPlans.map((plan) => {
              const installLabel = plan.installIncluded
                ? plan.installNote || "Installation incluse"
                : plan.installPrices[selectedSetupId];
              return (
                <PlanCard key={plan.id} plan={plan} installLabel={installLabel} />
              );
            })}
          </div>
        </div>

        <p className="pricing-note">
          Sans engagement. Résiliable à tout moment. Vous restez propriétaire de
          votre site, de votre nom de domaine et de vos contenus.
        </p>
      </section>

      <section className="webysta__case">
        <SectionIndicator number="06" label="Exemple client" icon="🧱" />
        <h2>{caseStudy.title}</h2>
        <p>{caseStudy.intro}</p>
        <div className="case-grid">
          <div>
            <h3>Nous avons :</h3>
            <ul>
              {caseStudy.steps.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div>
            <h3>Résultats après 2 mois :</h3>
            <ul>
              {caseStudy.results.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="webysta__process">
        <SectionIndicator number="07" label="Comment ça se passe ?" icon="⚙️" />
        <h2>On s’occupe de tout : votre rôle se limite à prendre des photos</h2>
        <ol>
          {processSteps.map((step, index) => (
            <li key={step.title}>
              <span>{index + 1}️⃣</span> <strong>{step.title}</strong> —{" "}
              {step.text}
            </li>
          ))}
        </ol>
      </section>

      <section className="webysta__faq">
        <SectionIndicator number="08" label="FAQ" icon="❓" />
        <h2>Vos questions fréquentes</h2>
        <div className="faq-list">
          {faqs.map((item) => (
            <FAQItem key={item.question} {...item} />
          ))}
        </div>
      </section>

      <section className="webysta__cta">
        <SectionIndicator number="09" label="Passer à l’action" icon="📍" />
        <h2>Vous voulez que vos réalisations travaillent pour vous ?</h2>
        <p>
          Vous faites déjà de l’excellent travail. Webysta et IArtisan
          transforment simplement vos photos en visibilité et en clients. Un
          échange de 15 minutes suffit pour voir si c’est adapté à votre activité.
        </p>
        <div className="cta-row">
          <a href={callMailTo} className="btn btn--primary">
            {CTA_TEXT}
          </a>
          <a href={whatsappLink} className="btn btn--whatsapp">
            {SECONDARY_CTA}
          </a>
        </div>
      </section>

      <footer className="webysta__footer">
        <p>Webysta – Agence web & communication pour artisans</p>
        <p>Création de site web, référencement local et IA pour artisans</p>
        <p>📍 Basée à Bordeaux – disponible partout en France</p>
        <p>
          ✉️ contact@webysta.fr | ☎️{" "}
          <a href={phoneLink} className="footer-link">
            06 XX XX XX XX
          </a>
        </p>
        <p>© 2025 Webysta – Tous droits réservés</p>
      </footer>
    </main>
  );
};

export default Webysta;