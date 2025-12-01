import React, { useState, useEffect, useRef } from 'react';
import './iartisan.css';

const API_URL = 'http://localhost:4000';
const ARTISAN_ID = '692c6852b35b7206cb9a3b27';

function PublicationCard({ pub }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [needsExpansion, setNeedsExpansion] = useState(false);
  const descriptionRef = useRef(null);

  const hasTitle = pub.title && pub.title.trim();
  const hasLocation = pub.location && pub.location.trim();
  const hasDescription = pub.seoText && pub.seoText.trim();
  const hasTags = pub.tags && pub.tags.length > 0;
  const hasImage = pub.imageUrl && pub.imageUrl.trim();

  // Vérifier si la description est assez longue pour nécessiter un accordéon
  // Environ 200 caractères correspond à environ 4 lignes
  const descriptionLength = hasDescription ? pub.seoText.trim().length : 0;
  const shouldShowExpand = descriptionLength > 200;

  useEffect(() => {
    if (descriptionRef.current && hasDescription && !isExpanded) {
      // Vérifier si le texte dépasse réellement 4 lignes
      const lineHeight = parseFloat(getComputedStyle(descriptionRef.current).lineHeight);
      const maxHeight = lineHeight * 4;
      const actualHeight = descriptionRef.current.scrollHeight;
      if (actualHeight > maxHeight + 5) { // +5 pour tolérance
        setNeedsExpansion(true);
      } else {
        setNeedsExpansion(false);
      }
    } else if (isExpanded) {
      setNeedsExpansion(true);
    }
  }, [hasDescription, isExpanded]);

  return (
    <div 
      className={`iartisan__publication-card ${!hasImage ? 'iartisan__publication-card--no-image' : ''}`}
    >
      {hasImage && (
        <img 
          src={pub.imageUrl} 
          alt={pub.title || 'Publication'} 
          loading="lazy"
          className="iartisan__publication-image"
        />
      )}
      {(hasTitle || hasLocation || hasDescription || hasTags) && (
        <div className="iartisan__publication-card-content">
          {hasTitle && <h3 className="iartisan__publication-title">{pub.title}</h3>}
          {hasLocation && (
            <p className="iartisan__publication-location">📍 {pub.location}</p>
          )}
              {hasDescription && (
                <div className="iartisan__publication-description-wrapper">
                  <p 
                    ref={descriptionRef}
                    className={`iartisan__publication-description ${isExpanded ? 'iartisan__publication-description--expanded' : ''}`}
                  >
                    {pub.seoText}
                  </p>
                  {(needsExpansion || shouldShowExpand) && (
                    <button
                      className="iartisan__publication-expand-btn"
                      onClick={() => setIsExpanded(!isExpanded)}
                      aria-expanded={isExpanded}
                    >
                      {isExpanded ? 'Voir moins' : 'Voir plus'}
                    </button>
                  )}
                </div>
              )}
          {hasTags && (
            <div className="iartisan__publication-tags">
              {pub.tags.map(tag => (
                <span key={tag} className="iartisan__publication-tag">#{tag}</span>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}

function Portfolio() {
  const [publications, setPublications] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [hasFetched, setHasFetched] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // Quand la section devient visible et qu'on n'a pas encore fait l'appel
          if (entry.isIntersecting && !hasFetched) {
            fetchPublications();
            setHasFetched(true);
          }
          // Si la section est visible et qu'on a déjà fait un appel, on vérifie les nouvelles publications
          else if (entry.isIntersecting && hasFetched) {
            checkForNewPublications();
          }
        });
      },
      {
        threshold: 0.1, // Déclenche quand 10% de la section est visible
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [hasFetched]);

  async function fetchPublications() {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(
        `${API_URL}/api/public/publications?artisanId=${ARTISAN_ID}&limit=20`
      );

      if (!response.ok) {
        throw new Error('Erreur lors du chargement');
      }

      const data = await response.json();
      setPublications(data.publications || []);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  async function checkForNewPublications() {
    try {
      const response = await fetch(
        `${API_URL}/api/public/publications?artisanId=${ARTISAN_ID}&limit=20`
      );

      if (!response.ok) {
        return; // On ignore les erreurs lors de la vérification
      }

      const data = await response.json();
      const newPublications = data.publications || [];
      
      // Utiliser la forme fonctionnelle de setState pour accéder à la valeur actuelle
      setPublications(prev => {
        // Récupérer les IDs des publications actuelles
        const currentIds = new Set(prev.map(pub => pub.id));
        
        // Filtrer pour ne garder que les nouvelles publications
        const publicationsToAdd = newPublications.filter(pub => !currentIds.has(pub.id));
        
        // Si on a de nouvelles publications, on les ajoute
        if (publicationsToAdd.length > 0) {
          return [...prev, ...publicationsToAdd];
        }
        
        // Sinon, on retourne l'état actuel sans modification
        return prev;
      });
    } catch (err) {
      // On ignore les erreurs lors de la vérification silencieuse
      console.error('Erreur lors de la vérification des nouvelles publications:', err);
    }
  }

  return (
    <section className="iartisan__portfolio" ref={sectionRef}>
      <div className="iartisan__portfolio-content">
        <h2 className="iartisan__section-title iartisan__section-title--center">
          Ils utilisent déjà IArtisan
        </h2>
        {loading && publications.length === 0 && (
          <div className="iartisan__portfolio-loading">Chargement...</div>
        )}
        {error && publications.length === 0 && (
          <div className="iartisan__portfolio-error">Erreur: {error}</div>
        )}
        {publications.length > 0 && (
          <div className="iartisan__portfolio-grid">
            {publications.map(pub => (
              <PublicationCard key={pub.id} pub={pub} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

export default Portfolio;

