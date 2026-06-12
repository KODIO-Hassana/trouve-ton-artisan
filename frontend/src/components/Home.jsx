import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Home() {
    const [artisansDuMois, setArtisansDuMois] = useState([]);

    useEffect(() => {
        // On récupère les données de ton backend
        fetch('http://localhost:5000/api/artisans')
            .then(reponse => reponse.json())
            .then(donnees => {
                // On filtre pour ne garder que les 3 artisans mis en avant
                const tops = donnees.filter(artisan => artisan.top === true);
                setArtisansDuMois(tops.length > 0 ? tops : donnees.slice(0, 3));
            })
            .catch(erreur => console.error("Erreur de récupération :", erreur));
    }, []);

    return (
        <main>
            {/* 1. SECTION BANNIÈRE */}
            <section className="banniere-accueil">
                <div className="contenu-banniere container">
                    <h1 className="fw-bold display-4">Trouvez l'artisan qu'il vous faut</h1>
                    <p className="lead mb-4">Dans toute la région Auvergne-Rhône-Alpes</p>
                    
                    {/* Barre de recherche intégrée avec Bootstrap */}
                    <form className="d-flex justify-content-center" role="search">
                        <input 
                            className="form-control form-control-lg me-2 shadow-sm border-0" 
                            type="search" 
                            placeholder="Métier, ville, nom..." 
                            aria-label="Recherche" 
                            style={{ maxWidth: '500px' }}
                        />
                        <button className="btn btn-primary btn-lg shadow-sm fw-bold" type="submit">
                            Rechercher
                        </button>
                    </form>
                </div>
            </section>

            {/* 2. SECTION ARTISANS DU MOIS (Conforme à la maquette) */}
            <section className="bg-light py-5">
                <div className="container">
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