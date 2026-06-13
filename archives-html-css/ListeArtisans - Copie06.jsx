import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

function ListeArtisans() {
    const [artisans, setArtisans] = useState([]);
    const { categorie } = useParams();

    useEffect(() => {
        fetch('http://localhost:5000/api/artisans')
            .then(reponse => reponse.json())
            .then(donnees => {
                setArtisans(donnees);
            })
            .catch(erreur => console.error("Erreur lors de la récupération :", erreur));
    }, []);

    // 1. RÉACTIVATION DU FILTRE
    // On vérifie le nom de la propriété dans ton backend (souvent 'category' ou 'categorie')
    // Si categorie existe dans l'URL, on filtre, sinon on garde tout le monde
    const artisansAffiches = categorie 
        ? artisans.filter(artisan => artisan.category === categorie || artisan.categorie === categorie) 
        : artisans;

    // 2. INTÉGRATION DE LA FONCTION DES ÉTOILES
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

    return (
        <main className="container py-5">
            <Helmet>
                <title>
                    {categorie 
                        ? `Artisans en ${categorie} - Trouve Ton Artisan` 
                        : `Tous nos artisans - Trouve Ton Artisan`}
                </title>
                <meta 
                    name="description" 
                    content={`Découvrez notre liste d'artisans qualifiés en ${categorie || 'tous domaines'} dans la région Auvergne-Rhône-Alpes.`} 
                />
            </Helmet>

            <section>
                <h1 className="text-center mb-5 text-primary fw-bold">
                    {categorie ? `Nos artisans : ${categorie}` : "Tous nos artisans"}
                </h1>
                
                <div className="row g-4">
                    {/* S'il n'y a aucun artisan dans la catégorie, on affiche un petit message sympa */}
                    {artisansAffiches.length === 0 ? (
                        <div className="col-12 text-center py-5">
                            <p className="fs-4 text-muted">Aucun artisan trouvé pour cette catégorie.</p>
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
                                            
                                            {/* Remplacement des étoiles statiques par notre belle fonction */}
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