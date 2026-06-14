import React, { useState, useEffect } from 'react';
import { Link, useParams, useLocation } from 'react-router-dom'; // Ajout de useLocation
import { Helmet } from 'react-helmet-async';

function ListeArtisans() {
    const [artisans, setArtisans] = useState([]);
    const { categorie } = useParams();
    
    // 1. ON RÉCUPÈRE CE QUI A ÉTÉ TAPÉ DANS L'URL
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const termeRecherche = queryParams.get('recherche'); // Récupère le mot après ?recherche=

    useEffect(() => {
        // fetch('http://localhost:5000/api/artisans')
        fetch('[https://trouve-ton-artisan-najt.onrender.com/api/artisans](https://trouve-ton-artisan-najt.onrender.com/api/artisans)')
            .then(reponse => reponse.json())
            .then(donnees => {
                setArtisans(donnees);
            })
            .catch(erreur => console.error("Erreur lors de la récupération :", erreur));
    }, []);

    // 2. LE NOUVEAU SYSTÈME DE FILTRAGE INTELLIGENT
    const artisansAffiches = artisans.filter(artisan => {
        // Filtre par catégorie (quand on clique dans le menu du header)
        const matchCategorie = categorie 
            ? (artisan.category === categorie || artisan.categorie === categorie) 
            : true;

        // Filtre par recherche (quand on utilise la barre de recherche)
        const matchRecherche = termeRecherche 
            ? (artisan.nom.toLowerCase().includes(termeRecherche.toLowerCase()) || 
               artisan.metier.toLowerCase().includes(termeRecherche.toLowerCase()) ||
               artisan.ville.toLowerCase().includes(termeRecherche.toLowerCase()))
            : true;

        // On affiche l'artisan seulement s'il valide les filtres actifs
        return matchCategorie && matchRecherche;
    });

    // Fonction des étoiles dynamiques
    const afficherEtoiles = (note) => {
        const noteNum = parseFloat(note); 
        const etoilesPleines = Math.floor(noteNum); 
        const aDemiEtoile = noteNum % 1 !== 0; 
        const etoilesVides = 5 - etoilesPleines - (aDemiEtoile ? 1 : 0); 

        return (
            <>
                {[...Array(etoilesPleines)].map((_, i) => (
                    <i key={`pleine-${i}`} className="fas fa-star"></i>
                ))}
                {aDemiEtoile && <i className="fas fa-star-half-alt"></i>}
                {[...Array(etoilesVides)].map((_, i) => (
                    <i key={`vide-${i}`} className="far fa-star"></i>
                ))}
            </>
        );
    };

    // 3. ON ADAPTE LE TITRE DE LA PAGE SELON LA SITUATION
    let titrePage = "Tous nos artisans";
    if (termeRecherche) {
        titrePage = `Résultats de recherche pour "${termeRecherche}"`;
    } else if (categorie) {
        titrePage = `Nos artisans : ${categorie}`;
    }

    return (
        <main className="container py-5">
            <Helmet>
                <title>{titrePage} - Trouve Ton Artisan</title>
                <meta name="description" content="Découvrez notre liste d'artisans qualifiés." />
            </Helmet>

            <section>
                <h1 className="text-center mb-5 text-primary fw-bold">
                    {titrePage}
                </h1>
                
                <div className="row g-4">
                    {/* Gestion du cas où aucun artisan n'est trouvé */}
                    {artisansAffiches.length === 0 ? (
                        <div className="col-12 text-center py-5">
                            <p className="fs-4 text-muted">Aucun artisan ne correspond à votre recherche.</p>
                            <Link to="/artisans" className="btn btn-outline-primary mt-3">Voir tous les artisans</Link>
                        </div>
                    ) : (
                        artisansAffiches.map((artisan) => (
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
                                            
                                            <p className="text-warning fw-bold mb-0 fs-5">
                                                {afficherEtoiles(artisan.note)} <span className="text-dark ms-2 fs-6">{artisan.note}/5</span>
                                            </p>
                                        </div>
                                    </div>
                                </Link>
                            </article>
                        ))
                    )}
                </div>
            </section>
        </main>
    );
}

export default ListeArtisans;