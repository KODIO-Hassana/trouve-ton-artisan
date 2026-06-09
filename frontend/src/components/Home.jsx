import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Home() {
    // 1. On crée un état pour stocker uniquement les artisans à la une
    const [topArtisans, setTopArtisans] = useState([]);

    // 2. On interroge l'API au chargement de la page
    useEffect(() => {
        fetch('http://localhost:5000/api/artisans')
            .then(reponse => reponse.json())
            .then(donnees => {
                // 3. On filtre les résultats : on ne garde que ceux où "top" est égal à 1 (true en SQL)
                const aLaUne = donnees.filter(artisan => artisan.top === 1 || artisan.top === true);
                setTopArtisans(aLaUne);
            })
            .catch(erreur => console.error("Erreur lors de la récupération :", erreur));
    }, []);

    return (
        <main>
             {/* Section Bannière  */}
            <section className="banniere-accueil">
                <div className="contenu-banniere">
                    <h1>Trouvez l'artisan idéal près de chez vous.</h1>
                    
                    {/* Barre de recherche */}
                    <form action="#" className="barre-recherche">
                        <input type="text" placeholder="Quel artisan ?.."/>
                        <button type="submit">Rechercher</button>
                    </form>
                </div>
            </section>

            {/* Section Artisans à la une */}
            <section className="artisans-a-la-une">
                <h2>Artisans à la une</h2>
                
                <div className="grille-artisans">
                    {/* 4. On affiche les cartes générées depuis la base de données */}
                    {topArtisans.length > 0 ? (
                        topArtisans.map((artisan) => (
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
                        ))
                    ) : (
                        <p className="aucun-resultat">Chargement des artisans à la une...</p>
                    )}
                </div>
            </section>
        </main>
    );
}

export default Home;