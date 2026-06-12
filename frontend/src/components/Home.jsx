import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Home() {
    const [artisansDuMois, setArtisansDuMois] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/api/artisans')
            .then(reponse => reponse.json())
            .then(donnees => {
                const tops = donnees.filter(artisan => artisan.top === true);
                setArtisansDuMois(tops.length > 0 ? tops : donnees.slice(0, 3));
            })
            .catch(erreur => console.error("Erreur de récupération :", erreur));
    }, []);

    return (
        <main>
            {/* 1. SECTION BANNIÈRE */}
            {/* Ajout de px-3 pour garantir des marges sur mobile */}
            <section className="banniere-accueil px-3">
                <div className="contenu-banniere container w-100">
                    
                    {/* Remplacement de display-4 par fs-1 (plus flexible sur mobile) */}
                    <h1 className="fw-bold text-white mb-4 fs-1">
                        Trouvez l'artisan qu'il vous faut
                    </h1>
                    
                    {/* Suppression de la phrase de sous-titre */}
                    
                    {/* Barre de recherche centrée, sans bouton à droite */}
                    <form className="mx-auto" style={{ maxWidth: '600px' }} role="search">
                        {/* form-control-lg agrandit le champ, rounded-pill arrondit joliment les bords (optionnel selon le Figma) */}
                        <input 
                            className="form-control form-control-lg shadow-sm border-0 py-3 px-4" 
                            type="search" 
                            placeholder="Rechercher un artisan, une spécialité..." 
                            aria-label="Recherche" 
                        />
                    </form>
                </div>
            </section>

            {/* 2. SECTION ARTISANS DU MOIS */}
            <section className="bg-light py-5">
                <div className="container px-4">
                    <h2 className="text-center text-secondary mb-5 fw-bold">Artisans du mois</h2>
                    
                    {/* La grille Bootstrap : row g-4 recrée l'alignement propre */}
                    <div className="row g-4 justify-content-center">
                        {artisansDuMois.map(artisan => (
                            <article key={artisan.id} className="col-12 col-md-6 col-lg-4">
                                <Link to={`/artisan/${artisan.id}`} className="text-decoration-none">
                                    <div className="card h-100 shadow-sm border-0">
                                        <img 
                                            src={artisan.image} 
                                            alt={artisan.nom} 
                                            className="card-img-top"
                                            style={{ height: '220px', objectFit: 'cover' }}
                                        />
                                        <div className="card-body text-center p-4">
                                            <h3 className="h5 fw-bold text-dark mb-2">{artisan.nom}</h3>
                                            <p className="text-primary fw-bold mb-1">{artisan.metier}</p>
                                            <p className="text-muted small mb-3">{artisan.ville}</p>
                                            <p className="text-warning fw-bold mb-0 fs-5">★ {artisan.note}/5</p>
                                        </div>
                                    </div>
                                </Link>
                            </article>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
}

export default Home;