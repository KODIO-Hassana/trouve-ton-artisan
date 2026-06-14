import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

function Artisan() {
    const { id } = useParams();
    const [artisan, setArtisan] = useState(null);
    const [chargement, setChargement] = useState(true);

    useEffect(() => {
        // fetch(`http://localhost:5000/api/artisans/${id}`)
        fetch('[https://trouve-ton-artisan-najt.onrender.com/api/artisans](https://trouve-ton-artisan-najt.onrender.com/api/artisans)')
            .then(reponse => {
                if (!reponse.ok) throw new Error("Artisan introuvable");
                return reponse.json();
            })
            .then(donnees => {
                setArtisan(donnees);
                setChargement(false);
            })
            .catch(erreur => {
                console.error("Erreur :", erreur);
                setArtisan(null);
                setChargement(false);
            });
    }, [id]);

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

    if (chargement) return <main className="container text-center py-5"><h2>Chargement...</h2></main>;
    if (!artisan) return <main className="container text-center py-5"><h2>Artisan introuvable.</h2></main>;

    return (
        <main className="page-artisan-detail pb-5">
            <Helmet>
                <title>{`${artisan.nom} - Trouve Ton Artisan`}</title>
                <meta name="description" content={`Découvrez ${artisan.nom}, professionnel à ${artisan.ville}.`} />
            </Helmet>

            {/* Bannière */}
            <div 
                className="w-100" 
                style={{ 
                    backgroundImage: `url(${artisan.image})`,
                    height: '300px', 
                    backgroundSize: 'cover', 
                    backgroundPosition: 'center' 
                }}
            ></div>

            <div className="container mt-4">
                
                {/* En-tête */}
                <header className="d-flex flex-column flex-md-row justify-content-between align-items-md-center mt-3 mb-4">
                    <div className="mb-3 mb-md-0">
                        <h1 className="display-5 fw-bold text-dark mb-1">{artisan.nom}</h1>
                        <p className="fs-5 text-primary fw-bold mb-1">{artisan.metier} - <span className="text-muted fw-normal">{artisan.ville}</span></p>
                        <p className="text-warning fs-5 fw-bold mb-0">
                            {afficherEtoiles(artisan.note)} <span className="text-dark ms-2 fs-6">{artisan.note}/5</span>
                        </p>
                    </div>
                    <Link to="/contact" className="btn btn-primary btn-lg shadow-sm fw-bold">
                        Contacter
                    </Link>
                </header>

                <hr className="my-4 text-muted" />

                {/* Section Notre Histoire et Infos Pratiques */}
                <section className="row g-4 mb-5">
                    <article className="col-12 col-lg-8">
                        {/* Renommé en "Notre histoire" pour coller au Figma */}
                        <h2 className="text-dark fw-bold mb-3">Notre histoire</h2>
                        <p className="lead text-dark" style={{ lineHeight: '1.8' }}>{artisan.description}</p>
                    </article>

                    <aside className="col-12 col-lg-4">
                        <div className="bg-light p-4 rounded-3 shadow-sm h-100 border">
                            <h3 className="h5 text-dark fw-bold mb-4">Informations pratiques</h3>
                            <ul className="list-unstyled lh-lg fs-6 mb-0">
                                <li className="mb-3">
                                    <i className="fas fa-map-marker-alt text-secondary me-2"></i> 
                                    <strong>Lieu :</strong> {artisan.ville}
                                </li>
                                {artisan.email && (
                                    <li className="mb-3">
                                        <i className="fas fa-envelope text-secondary me-2"></i> 
                                        <a href={`mailto:${artisan.email}`} className="text-decoration-none text-dark">{artisan.email}</a>
                                    </li>
                                )}
                                {artisan.website && (
                                    <li className="mb-3">
                                        <i className="fas fa-globe text-secondary me-2"></i> 
                                        <a href={artisan.website} target="_blank" rel="noreferrer" className="text-decoration-none text-primary">{artisan.website}</a>
                                    </li>
                                )}
                            </ul>
                        </div>
                    </aside>
                </section>

                {/* NOUVELLE SECTION RÉINTÉGRÉE : Nos spécialités */}
                <section className="mb-5">
                    <h2 className="text-dark fw-bold mb-4">Nos spécialités</h2>
                    <div className="row g-3">
                        {/* col-6 = 2 images par ligne sur mobile, col-md-3 = 4 images sur PC */}
                        <div className="col-6 col-md-3">
                            <img src="/img/specialite-1.jpg" alt="Spécialité 1" className="img-fluid rounded shadow-sm w-100" style={{ objectFit: 'cover', height: '200px' }} />
                        </div>
                        <div className="col-6 col-md-3">
                            <img src="/img/specialite-2.jpg" alt="Spécialité 2" className="img-fluid rounded shadow-sm w-100" style={{ objectFit: 'cover', height: '200px' }} />
                        </div>
                        <div className="col-6 col-md-3">
                            <img src="/img/specialite-3.jpg" alt="Spécialité 3" className="img-fluid rounded shadow-sm w-100" style={{ objectFit: 'cover', height: '200px' }} />
                        </div>
                        <div className="col-6 col-md-3">
                            <img src="/img/specialite-4.jpg" alt="Spécialité 4" className="img-fluid rounded shadow-sm w-100" style={{ objectFit: 'cover', height: '200px' }} />
                        </div>
                    </div>
                </section>

                {/* Section Avis Clients */}
                <section className="mb-5 bg-light p-4 rounded-3 border">
                    <div className="d-flex justify-content-between align-items-center mb-4">
                        <h2 className="text-dark fw-bold mb-0 h3">Avis clients</h2>
                        <a href="#tout-voir" className="text-primary text-decoration-none fw-bold">Voir tous les avis →</a>
                    </div>
                    
                    <div className="row g-4">
                        <div className="col-12 col-md-4">
                            <div className="card h-100 p-4 border-0 shadow-sm rounded-3">
                                <p className="text-warning mb-2 fs-5">
                                    <i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i>
                                </p>
                                <p className="card-text text-dark fst-italic">"Prestation impeccable et artisan très à l'écoute. Le résultat correspond parfaitement à mes attentes."</p>
                                <p className="fw-bold mb-0 mt-auto text-dark">- Sophie T.</p>
                            </div>
                        </div>
                        <div className="col-12 col-md-4">
                            <div className="card h-100 p-4 border-0 shadow-sm rounded-3">
                                <p className="text-warning mb-2 fs-5">
                                    <i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i>
                                </p>
                                <p className="card-text text-dark fst-italic">"Professionnel, ponctuel et minutieux. Je recommande les yeux fermés pour tout type de projet."</p>
                                <p className="fw-bold mb-0 mt-auto text-dark">- Marc D.</p>
                            </div>
                        </div>
                        <div className="col-12 col-md-4">
                            <div className="card h-100 p-4 border-0 shadow-sm rounded-3">
                                <p className="text-warning mb-2 fs-5">
                                    <i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="far fa-star"></i>
                                </p>
                                <p className="card-text text-dark fst-italic">"Un vrai savoir-faire et des conseils très pertinents. Le rapport qualité/prix est excellent."</p>
                                <p className="fw-bold mb-0 mt-auto text-dark">- Antoine L.</p>
                            </div>
                        </div>
                    </div>
                </section>

            </div>
        </main>
    );
}

export default Artisan;