import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';

function ListeArtisans() {
    const [artisans, setArtisans] = useState([]);
    
    // 1. On récupère la catégorie cliquée depuis l'URL (ex: "Bâtiment")
    const { categorie } = useParams();

    useEffect(() => {
        fetch('http://localhost:5000/api/artisans')
            .then(reponse => reponse.json())
            .then(donnees => setArtisans(donnees))
            .catch(erreur => console.error("Erreur lors de la récupération :", erreur));
    }, []);

    // 2. LE FILTRE : Si on a cliqué sur une catégorie, on filtre le tableau.
    // Sinon (si on va juste sur /artisans), on garde tous les artisans.
    const artisansAffiches = categorie 
        ? artisans.filter(artisan => artisan.categorie === categorie) 
        : artisans;

    return (
        <main className="page-liste-artisans">
            <section className="artisans-a-la-une">
                {/* 3. On affiche un titre dynamique pour savoir où on est ! */}
                <h1 style={{ textAlign: 'center', marginTop: '40px', marginBottom: '30px' }}>
                    {categorie ? `Nos artisans : ${categorie}` : "Tous nos artisans"}
                </h1>
                
                <div className="grille-artisans">
                    {/* 4. On fait la boucle sur le tableau filtré, et non plus sur le tableau complet */}
                    {artisansAffiches.map((artisan) => (
                        <article key={artisan.id} className="carte-artisan">
                            <Link to={`/artisan/${artisan.id}`} className="lien-carte">
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