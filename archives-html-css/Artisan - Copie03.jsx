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

    if (chargement) return <main><h2 style={{ textAlign: 'center', padding: '50px' }}>Chargement...</h2></main>;
    if (!artisan) return <main><h2 style={{ textAlign: 'center', padding: '50px' }}>Artisan introuvable.</h2></main>;

    return (
        <main className="page-artisan-detail">
            <Helmet>
                <title>{`${artisan.nom} - Trouve Ton Artisan`}</title>
                <meta name="description" content={`Découvrez ${artisan.nom}, professionnel à ${artisan.ville}.`} />
            </Helmet>

            {/* 1. La grande bannière du haut */}
            {/* Si tu as une image générique de fond, tu peux la lier ici. Sinon on utilise l'image de l'artisan */}
            <div 
                className="banniere-artisan" 
                style={{ 
                    backgroundImage: `url(${artisan.image})`,
                    height: '300px', 
                    backgroundSize: 'cover', 
                    backgroundPosition: 'center' 
                }}
            ></div>

            <div className="conteneur-principal" style={{ maxWidth: '1200px', margin: '0 auto', padding: '20px' }}>
                
                {/* 2. L'en-tête avec Titre, Note et Bouton Contacter */}
                <header className="entete-detail" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '20px' }}>
                    <div className="titre-info">
                        <h1 style={{ fontSize: '2.5rem', marginBottom: '5px' }}>{artisan.nom}</h1>
                        <p style={{ fontSize: '1.2rem', color: '#555', marginBottom: '5px' }}>{artisan.metier} - {artisan.ville}</p>
                        <p className="note" style={{ fontSize: '1.2rem' }}>☆ {artisan.note}/5</p>
                    </div>
                    <button className="btn-contacter" style={{ backgroundColor: '#4a47a3', color: 'white', padding: '10px 20px', border: 'none', borderRadius: '5px', fontSize: '1.1rem', cursor: 'pointer' }}>
                        Contacter
                    </button>
                </header>

                <hr style={{ margin: '30px 0', border: 'none', borderTop: '1px solid #eee' }} />

                {/* 3. Section Notre Histoire et Infos Pratiques */}
                <section className="grille-infos" style={{ display: 'flex', gap: '40px', marginBottom: '50px' }}>
                    <article className="histoire" style={{ flex: '2' }}>
                        <h2>Notre histoire</h2>
                        <p style={{ lineHeight: '1.6' }}>{artisan.description}</p>
                    </article>

                    {/* Bloc gris statique pour correspondre à la maquette */}
                    <aside className="infos-pratiques" style={{ flex: '1', backgroundColor: '#e9e9e9', padding: '20px', borderRadius: '8px' }}>
                        <h3 style={{ marginTop: '0' }}>Informations pratiques</h3>
                        <ul style={{ listStyle: 'none', padding: '0', lineHeight: '2' }}>
                            <li>📍 12 Rue de la République, {artisan.ville}</li>
                            <li>📞 04 78 00 00 00</li>
                            <li>🕒 Ouvert du Lundi au Samedi : 9h - 19h</li>
                        </ul>
                    </aside>
                </section>

                {/* 4. Section Nos Spécialités (Galerie d'images statiques) */}
                <section className="specialites" style={{ marginBottom: '50px' }}>
                    <h2>Nos spécialités</h2>
                    <div className="grille-images" style={{ display: 'flex', gap: '20px', justifyContent: 'space-between' }}>
                        {/* Remplace ces liens par les vrais chemins de tes images dans ton dossier public */}
                        <img src="/img/specialite-1.jpg" alt="Spécialité 1" style={{ width: '23%', borderRadius: '10px', objectFit: 'cover' }} />
                        <img src="/img/specialite-2.jpg" alt="Spécialité 2" style={{ width: '23%', borderRadius: '10px', objectFit: 'cover' }} />
                        <img src="/img/specialite-3.jpg" alt="Spécialité 3" style={{ width: '23%', borderRadius: '10px', objectFit: 'cover' }} />
                        <img src="/img/specialite-4.jpg" alt="Spécialité 4" style={{ width: '23%', borderRadius: '10px', objectFit: 'cover' }} />
                    </div>
                </section>

                {/* 5. Section Avis Clients (Cartes statiques) */}
                <section className="avis-clients" style={{ marginBottom: '50px' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
                        <h2>Avis clients</h2>
                        <a href="#tout-voir" style={{ color: '#4a47a3', textDecoration: 'none', fontWeight: 'bold' }}>Voir tous les avis →</a>
                    </div>
                    
                    <div className="grille-avis" style={{ display: 'flex', gap: '20px' }}>
                        <div className="carte-avis" style={{ border: '1px solid #ddd', padding: '20px', borderRadius: '8px', flex: '1' }}>
                            <p style={{ color: '#f5a623', margin: '0 0 10px 0' }}>★★★★★</p>
                            <p>"Le meilleur praliné de la région ! Un vrai savoir-faire artisanal que l'on ressent à chaque bouchée."</p>
                            <p><strong>Sophie T.</strong></p>
                        </div>
                        <div className="carte-avis" style={{ border: '1px solid #ddd', padding: '20px', borderRadius: '8px', flex: '1' }}>
                            <p style={{ color: '#f5a623', margin: '0 0 10px 0' }}>★★★★★</p>
                            <p>"Une superbe découverte. Les créations originales aux épices sont incroyables et l'accueil en boutique est toujours chaleureux."</p>
                            <p><strong>Marc D.</strong></p>
                        </div>
                        <div className="carte-avis" style={{ border: '1px solid #ddd', padding: '20px', borderRadius: '8px', flex: '1' }}>
                            <p style={{ color: '#f5a623', margin: '0 0 10px 0' }}>★★★★★</p>
                            <p>"Le coffret dégustation est une véritable merveille ! Mention spéciale pour les ganaches qui ont fait l'unanimité à la maison."</p>
                            <p><strong>Antoine L.</strong></p>
                        </div>
                    </div>
                </section>

            </div>
        </main>
    );
}

export default Artisan;