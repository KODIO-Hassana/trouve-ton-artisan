import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function Artisan() {
    // 1. On récupère l'ID dans l'URL (ex: /artisan/2 -> id = "2")
    const { id } = useParams();
    
    // 2. On crée des états pour stocker les données et gérer le chargement
    const [artisan, setArtisan] = useState(null);
    const [chargement, setChargement] = useState(true);

    // 3. On interroge notre serveur avec l'ID spécifique
    useEffect(() => {
        fetch(`http://localhost:5000/api/artisans/${id}`)
            .then(reponse => {
                if (!reponse.ok) {
                    throw new Error("Artisan introuvable");
                }
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

    // 4. Affichage pendant que le serveur cherche les données
    if (chargement) {
        return <main className="page-artisan"><h2 style={{ textAlign: 'center', marginTop: '50px' }}>Chargement en cours...</h2></main>;
    }

    // 5. Affichage si l'artisan n'existe pas dans la base de données
    if (!artisan) {
        return (
            <main className="page-artisan">
                <h2 style={{ textAlign: 'center', marginTop: '50px' }}>Oups, cet artisan est introuvable.</h2>
            </main>
        );
    }

    // 6. Affichage final avec les vraies données
    return (
        <main className="page-artisan">
            <section className="en-tete-artisan">
                {/* <img src={artisan.image} alt={artisan.nom} className="photo-profil-artisan" /> */}
                <div className="titre-artisan">
                    <h1>{artisan.nom}</h1>
                    <p className="metier">{artisan.metier}</p>
                    <p className="ville">{artisan.ville}</p>
                    <p className="note">★ {artisan.note}/5</p>
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
                    {/* <ul>
                        <li><strong>Email :</strong> {artisan.email}</li>
                        <li><strong>Site web :</strong> <a href={artisan.site.startsWith('http') ? artisan.site : `https://${artisan.site}`} target="_blank" rel="noreferrer">{artisan.site}</a></li>
                    </ul> */}

                    <ul>
                        <li><strong>Email :</strong> {artisan.email}</li>
                        <li>
                            <strong>Site web :</strong>{' '}
                            {/* On vérifie d'abord si l'artisan a un site (s'il n'est pas null) */}
                            {artisan.site ? (
                                <a href={artisan.site.startsWith('http') ? artisan.site : `https://${artisan.site}`} target="_blank" rel="noreferrer">
                                    {artisan.site}
                                </a>
                            ) : (
                                <span style={{ fontStyle: 'italic', color: 'gray' }}>Non renseigné</span>
                            )}
                        </li>
                    </ul>
                    
                    <button className="btn-contact">Envoyer un message</button>
                </aside>
            </section>
        </main>
    );
}

export default Artisan;