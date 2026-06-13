import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function ListeArtisans() {
    // 1. On crée un état vide pour accueillir les données de la base de données
    const [artisans, setArtisans] = useState([]);

    // 2. On interroge notre serveur Node.js au chargement de la page
    useEffect(() => {
        fetch('http://localhost:5000/api/artisans')
            .then(reponse => reponse.json())
            .then(donnees => setArtisans(donnees))
            .catch(erreur => console.error("Erreur lors de la récupération :", erreur));
    }, []);

    return (
        <main className="page-liste-artisans">
            <section className="artisans-a-la-une">
                <h1 style={{ textAlign: 'center', marginTop: '40px', marginBottom: '30px' }}>
                    Nos artisans
                </h1>
                
                <div className="grille-artisans">
                    {/* 3. On affiche la liste à partir de la base de données */}
                    {artisans.map((artisan) => (
                        <article key={artisan.id} className="carte-artisan">
                            <Link to={`/artisan/${artisan.id}`} className="lien-carte">
                                {/* Note : l'image est temporairement désactivée car elle n'est pas encore dans la BDD */}
                                {/* <img src={artisan.image} alt={artisan.nom} /> */}
                                <div className="infos-artisan">
                                    <h3>{artisan.nom}</h3>
                                    <p className="metier">{artisan.metier}</p>
                                    <p className="ville">{artisan.ville}</p>
                                    <p className="note">★ {artisan.note}/5</p>
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