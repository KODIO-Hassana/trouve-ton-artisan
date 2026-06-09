// import React from 'react';
// // On importe l'image de la chocolaterie pour illustrer la page
// import imgChocolaterie from '../assets/img/chocolaterie-labbe.jpg';

// function Artisan() {
//     return (
//         <main className="page-artisan">
//             {/* Section Haut : Photo et infos principales */}
//             <section className="en-tete-artisan">
//                 <img src={imgChocolaterie} alt="Chocolaterie Labbé" className="photo-profil-artisan" />
//                 <div className="titre-artisan">
//                     <h1>Chocolaterie Labbé</h1>
//                     <p className="metier">Chocolatier</p>
//                     <p className="ville">Lyon</p>
//                     <p className="note">★ 4.9/5</p>
//                 </div>
//             </section>

//             <hr />

//             {/* Section Bas : Description et Contact */}
//             <section className="details-artisan">
//                 <article className="a-propos">
//                     <h2>À propos</h2>
//                     <p>
//                         Artisan chocolatier passionné depuis plus de 15 ans, je vous propose des créations 
//                         uniques réalisées avec des fèves de cacao issues du commerce équitable. 
//                         Venez découvrir nos spécialités pralinées et nos ganaches fondantes !
//                     </p>
//                 </article>

//                 <aside className="contact-artisan">
//                     <h2>Contact</h2>
//                     <ul>
//                         <li><strong>Email :</strong> contact@chocolaterie-labbe.fr</li>
//                         <li><strong>Site web :</strong> <a href="https://chocolaterie-labbe.fr" target="_blank" rel="noreferrer">chocolaterie-labbe.fr</a></li>
//                     </ul>
//                     <button className="btn-contact">Envoyer un message</button>
//                 </aside>
//             </section>
//         </main>
//     );
// }

// export default Artisan;

import React from 'react';
import { useParams } from 'react-router-dom';
import { donneesArtisans } from '../data/artisans';

function Artisan() {
    // 1. On récupère l'ID directement depuis l'URL (ex: /artisan/2 -> id = "2")
    const { id } = useParams();

    // 2. On cherche le bon artisan dans notre tableau de données
    // (On utilise parseInt pour transformer le texte "2" de l'URL en vrai chiffre 2)
    const artisan = donneesArtisans.find((art) => art.id === parseInt(id));

    // 3. Sécurité : Si quelqu'un tape un faux ID dans l'URL (ex: /artisan/99)
    if (!artisan) {
        return (
            <main className="page-artisan">
                <h2>Oups, cet artisan est introuvable.</h2>
            </main>
        );
    }

    // 4. On affiche les vraies données de l'artisan trouvé
    return (
        <main className="page-artisan">
            <section className="en-tete-artisan">
                <img src={artisan.image} alt={artisan.nom} className="photo-profil-artisan" />
                <div className="titre-artisan">
                    <h1>{artisan.nom}</h1>
                    <p className="metier">{artisan.metier}</p>
                    <p className="ville">{artisan.ville}</p>
                    <p className="note">{artisan.note}</p>
                </div>
            </section>

            <hr />

            <section className="details-artisan">
                <article className="a-propos">
                    <h2>À propos</h2>
                    <p>{artisan.description}</p>
                </article>

                <aside className="contact-artisan">
                    <h2>Contact</h2>
                    <ul>
                        <li><strong>Email :</strong> {artisan.email}</li>
                        <li><strong>Site web :</strong> <a href={`https://${artisan.site}`} target="_blank" rel="noreferrer">{artisan.site}</a></li>
                    </ul>
                    <button className="btn-contact">Envoyer un message</button>
                </aside>
            </section>
        </main>
    );
}

export default Artisan;