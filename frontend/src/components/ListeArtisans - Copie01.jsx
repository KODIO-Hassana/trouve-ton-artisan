import React from 'react';
import { Link } from 'react-router-dom';
import { donneesArtisans } from '../data/artisans';

function ListeArtisans() {
    return (
        <main className="page-liste-artisans">
            <section className="artisans-a-la-une">
                <h1 style={{ textAlign: 'center', marginTop: '40px', marginBottom: '30px' }}>
                    Nos artisans
                </h1>
                
                <div className="grille-artisans">
                    {donneesArtisans.map((artisan) => (
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
                    ))}
                </div>
            </section>
        </main>
    );
}

export default ListeArtisans;