import React from 'react';
import {Link} from 'react-router-dom';
import { useState} from 'react';
import { donneesArtisans } from '../data/artisans';
// // Importation des images
// import imgBoulangerie from '../assets/img/boulangerie.jpg';
// import imgChocolaterie from '../assets/img/chocolaterie-labbe.jpg';
// import imgChauffagiste from '../assets/img/chauffagiste.jpg';


// function Home() {
//     return (
//         <main>
//              {/* Section Bannière  */}
//             <section className="banniere-accueil">
//                 <div className="contenu-banniere">
//                     <h1>Trouvez l'artisan idéal près de chez vous.</h1>
                    
//                     {/* Barre de recherche */}
//                     <form action="#" className="barre-recherche">
//                         <input type="text" placeholder="Quel artisan ?.."/>
//                         <button type="submit">Rechercher</button>
//                     </form>
//                 </div>
//             </section>

//             {/* Section Artisans à la une */}
//             <section className="artisans-a-la-une">
//                 <h2>Artisans à la une</h2>
                
//                 <div className="grille-artisans">
                    
//                    {/* Carte 1 : Boulanger */}
//                     <article className="carte-artisan">
//                         <img src={imgBoulangerie} alt="Au pain chaud - Boulanger"/>
//                         <div className="infos-artisan">
//                             <h3>Au pain chaud</h3>
//                             <p className="metier">Boulanger</p>
//                             <p className="ville">Lyon</p>
//                             <p className="note">★ 4.8/5</p>
//                         </div>
//                     </article>

//                     {/* Carte 2 : Chocolatier (Cliquable) */}
//                     <article className="carte-artisan">
//                         {/* On englobe tout le contenu de la carte dans un lien */}
//                         <Link to="/artisan" className="lien-carte">
//                             <img src={imgChocolaterie} alt="Chocolaterie Labbé"/>
//                             <div className="infos-artisan">
//                                 <h3>Chocolaterie Labbé</h3>
//                                 <p className="metier">Chocolatier</p>
//                                 <p className="ville">Lyon</p>
//                                 <p className="note">★ 4.9/5</p>
//                             </div>
//                         </Link>
//                     </article>

//                      {/* Carte 3 : Chauffagiste */}
//                     <article className="carte-artisan">
//                         <img src={imgChauffagiste} alt="Grégoire Salvi - Chauffagiste"/>
//                         <div className="infos-artisan">
//                             <h3>Grégoire Salvi</h3>
//                             <p className="metier">Chauffagiste</p>
//                             <p className="ville">Lyon</p>
//                             <p className="note">★ 5/5</p>
//                         </div>
//                     </article>

//                 </div>
//             </section>
//         </main>
//     );
// }

// export default Home;

// // 1. NOTRE FAUSSE BASE DE DONNÉES (Tableau d'objets)
// const donneesArtisans = [
//     {
//         id: 1,
//         nom: "Au pain chaud",
//         metier: "Boulanger",
//         ville: "Lyon",
//         note: "★ 4.8/5",
//         image: imgBoulangerie
//     },
//     {
//         id: 2,
//         nom: "Chocolaterie Labbé",
//         metier: "Chocolatier",
//         ville: "Lyon",
//         note: "★ 4.9/5",
//         image: imgChocolaterie
//     },
//     {
//         id: 3,
//         nom: "Grégoire Salvi",
//         metier: "Chauffagiste",
//         ville: "Lyon",
//         note: "★ 5/5",
//         image: imgChauffagiste
//     }
// ];

// function Home() {
//     return (
//         <main>
//             <section className="banniere-accueil">
//                 <div className="contenu-banniere">
//                     <h1>Trouvez l'artisan idéal près de chez vous.</h1>
//                     <form action="#" className="barre-recherche">
//                         <input type="text" placeholder="Quel artisan ?.."/>
//                         <button type="submit">Rechercher</button>
//                     </form>
//                 </div>
//             </section>

//             <section className="artisans-a-la-une">
//                 <h2>Artisans à la une</h2>
                
//                 <div className="grille-artisans">
                    
//                     {/* 2. LA MAGIE DE REACT : La boucle .map() */}
//                     {donneesArtisans.map((artisan) => (
//                         <article key={artisan.id} className="carte-artisan">
//                             <Link to="/artisan" className="lien-carte">
//                                 <img src={artisan.image} alt={artisan.nom} />
//                                 <div className="infos-artisan">
//                                     <h3>{artisan.nom}</h3>
//                                     <p className="metier">{artisan.metier}</p>
//                                     <p className="ville">{artisan.ville}</p>
//                                     <p className="note">{artisan.note}</p>
//                                 </div>
//                             </Link>
//                         </article>
//                     ))}

//                 </div>
//             </section>
//         </main>
//     );
// }

// export default Home;

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