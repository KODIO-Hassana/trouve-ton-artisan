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
                console.log("✅ Données reçues de l'API :", donnees);
                setArtisans(donnees)
            })
            .catch(erreur => console.error("Erreur lors de la récupération :", erreur));
    }, []);

    // const artisansAffiches = categorie 
    //     ? artisans.filter(artisan => artisan.categorie === categorie) 
    //     : artisans;

    // On force l'affichage de tout le monde
    const artisansAffiches = artisans; 

    console.log("🛠️ Artisans qui vont être affichés :", artisansAffiches);

    return (
        // container centre le contenu et py-5 ajoute de l'espace en haut et en bas
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
                
                {/* row g-4 crée la grille Bootstrap avec un espacement régulier entre les cartes */}
                <div className="row g-4">
                    {artisansAffiches.map((artisan) => (
                        // col-12 (mobile), col-md-6 (tablette), col-lg-4 (PC)
                        <article key={artisan.id} className="col-12 col-md-6 col-lg-4">
                            {/* text-decoration-none enlève le soulignement du lien */}
                            <Link to={`/artisan/${artisan.id}`} className="text-decoration-none">
                                {/* card h-100 force les cartes à avoir la même hauteur */}
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
            </section>
        </main>
    );
}

export default ListeArtisans;