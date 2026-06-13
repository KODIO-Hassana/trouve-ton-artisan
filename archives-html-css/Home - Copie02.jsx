import React from 'react';
import {Link} from 'react-router-dom';
import { useState} from 'react';
import { donneesArtisans } from '../data/artisans';

function Home() {
    // 1. LA MÉMOIRE : On stocke le texte de recherche (vide par défaut)
    const [recherche, setRecherche] = useState('');

    // 2. LE FILTRE : On crée une nouvelle liste d'artisans en fonction de la recherche
    const artisansFiltres = donneesArtisans.filter((artisan) => {
        // On met tout en minuscules pour éviter les problèmes de majuscules (ex: "Chocolat" vs "chocolat")
        const texteRecherche = recherche.toLowerCase();
        return (
            artisan.metier.toLowerCase().includes(texteRecherche) ||
            artisan.nom.toLowerCase().includes(texteRecherche)
        );
    });

    return (
        <main>
            <section className="banniere-accueil">
                <div className="contenu-banniere">
                    <h1>Trouvez l'artisan idéal près de chez vous.</h1>
                    
                    {/* On ajoute onSubmit={(e) => e.preventDefault()} pour éviter que la page se recharge si on appuie sur Entrée */}
                    <form className="barre-recherche" onSubmit={(e) => e.preventDefault()}>
                        <input 
                            type="text" 
                            placeholder="Quel artisan ? (ex: Boulanger)"
                            // 3. LE BRANCHEMENT : L'input est lié à notre mémoire
                            value={recherche}
                            onChange={(e) => setRecherche(e.target.value)}
                        />
                        <button type="submit">Rechercher</button>
                    </form>
                </div>
            </section>

            <section className="artisans-a-la-une">
                <h2>Artisans à la une</h2>
                
                <div className="grille-artisans">
                    
                    {/* 4. L'AFFICHAGE : On utilise "artisansFiltres" au lieu de "donneesArtisans" */}
                    {artisansFiltres.length > 0 ? (
                        artisansFiltres.map((artisan) => (
                            <article key={artisan.id} className="carte-artisan">
                                <Link to={`/artisan/${artisan.id}`} className="lien-carte">
                                    <img src={artisan.image} alt={artisan.nom} />
                                    <div className="infos-artisan">
                                        <h3>{artisan.nom}</h3>
                                        <p className="metier">{artisan.metier}</p>
                                        <p className="ville">{artisan.ville}</p>
                                        <p className="note">{artisan.note}</p>
                                    </div>
                                </Link>
                            </article>
                        ))
                    ) : (
                        /* Petit bonus : un message si la recherche ne trouve rien ! */
                        <p className="aucun-resultat">Aucun artisan ne correspond à votre recherche.</p>
                    )}

                </div>
            </section>
        </main>
    );
}

export default Home;