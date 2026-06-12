import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

function Artisan() {
    const { id } = useParams();
    const [artisan, setArtisan] = useState(null);
    const [chargement, setChargement] = useState(true);

    useEffect(() => {
        fetch(`http://localhost:5000/api/artisans/${id}`)
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

    // Utilisation des classes Bootstrap pour centrer (text-center) et espacer (py-5)
    if (chargement) return <main className="container text-center py-5"><h2>Chargement...</h2></main>;
    if (!artisan) return <main className="container text-center py-5"><h2>Artisan introuvable.</h2></main>;

    return (
        <main className="page-artisan-detail pb-5">
            <Helmet>
                <title>{`${artisan.nom} - Trouve Ton Artisan`}</title>
                <meta name="description" content={`Découvrez ${artisan.nom}, professionnel à ${artisan.ville}.`} />
            </Helmet>

            {/* La grande bannière du haut (style conservé car url dynamique) */}
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
                
                {/* L'en-tête : d-flex, flex-md-row (colonne sur mobile, ligne sur PC), align-items-md-center */}
                <header className="d-flex flex-column flex-md-row justify-content-between align-items-md-center mt-3 mb-4">
                    <div className="mb-3 mb-md-0">
                        {/* display-5 gère la taille du titre, fw-bold le met en gras */}
                        <h1 className="display-5 fw-bold text-dark mb-1">{artisan.nom}</h1>
                        <p className="fs-5 text-primary fw-bold mb-1">{artisan.metier} - <span className="text-muted fw-normal">{artisan.ville}</span></p>
                        <p className="text-warning fs-5 fw-bold mb-0">☆ {artisan.note}/5</p>
                    </div>
                    {/* btn-primary récupère notre bleu configuré dans Sass, shadow-sm ajoute une petite ombre */}
                    <button className="btn btn-primary btn-lg shadow-sm">
                        Contacter
                    </button>
                </header>

                <hr className="my-4 text-muted" />

                {/* Section Notre Histoire et Infos Pratiques */}
                <section className="row g-4 mb-5">
                    {/* col-lg-8 prend 8 colonnes sur 12 sur PC, et toute la largeur sur mobile */}
                    <article className="col-12 col-lg-8">
                        <h2 className="text-secondary mb-3">Notre histoire</h2>
                        <p className="lead" style={{ lineHeight: '1.8' }}>{artisan.description}</p>
                    </article>

                    {/* Bloc gris statique : bg-light remplace ton backgroundColor, rounded-3 arrondit les angles */}
                    <aside className="col-12 col-lg-4">
                        <div className="bg-light p-4 rounded-3 shadow-sm h-100">
                            <h3 className="h4 text-primary mb-4">Informations pratiques</h3>
                            <ul className="list-unstyled lh-lg fs-5 mb-0">
                                <li className="mb-2">📍 12 Rue de la République, {artisan.ville}</li>
                                <li className="mb-2">📞 04 78 00 00 00</li>
                                <li>🕒 Ouvert du Lundi au Samedi : 9h - 19h</li>
                            </ul>
                        </div>
                    </aside>
                </section>

                {/* Section Nos Spécialités */}
                <section className="mb-5">
                    <h2 className="text-secondary mb-4">Nos spécialités</h2>
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
                <section className="mb-5">
                    <div className="d-flex justify-content-between align-items-center mb-4">
                        <h2 className="text-secondary mb-0">Avis clients</h2>
                        <a href="#tout-voir" className="text-primary text-decoration-none fw-bold">Voir tous les avis →</a>
                    </div>
                    
                    {/* row g-4 crée une grille aérée */}
                    <div className="row g-4">
                        <div className="col-12 col-md-4">
                            <div className="card h-100 p-4 border-0 shadow-sm rounded-3">
                                <p className="text-warning mb-2 fs-5">★★★★★</p>
                                <p className="card-text">"Le meilleur praliné de la région ! Un vrai savoir-faire artisanal que l'on ressent à chaque bouchée."</p>
                                <p className="fw-bold mb-0 mt-auto">Sophie T.</p>
                            </div>
                        </div>
                        <div className="col-12 col-md-4">
                            <div className="card h-100 p-4 border-0 shadow-sm rounded-3">
                                <p className="text-warning mb-2 fs-5">★★★★★</p>
                                <p className="card-text">"Une superbe découverte. Les créations originales aux épices sont incroyables et l'accueil en boutique est toujours chaleureux."</p>
                                <p className="fw-bold mb-0 mt-auto">Marc D.</p>
                            </div>
                        </div>
                        <div className="col-12 col-md-4">
                            <div className="card h-100 p-4 border-0 shadow-sm rounded-3">
                                <p className="text-warning mb-2 fs-5">★★★★★</p>
                                <p className="card-text">"Le coffret dégustation est une véritable merveille ! Mention spéciale pour les ganaches qui ont fait l'unanimité à la maison."</p>
                                <p className="fw-bold mb-0 mt-auto">Antoine L.</p>
                            </div>
                        </div>
                    </div>
                </section>

            </div>
        </main>
    );
}

export default Artisan;