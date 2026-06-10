import React, { useState } from 'react';
import logo from '../assets/img/Logo.png';
import { Link } from 'react-router-dom';

function Header() {
    // Nos deux "interrupteurs" pour le menu et la recherche
    const [menuOuvert, setMenuOuvert] = useState(false);
    const [rechercheOuverte, setRechercheOuverte] = useState(false);

    const categories = [
        "Bâtiment",
        "Services",
        "Fabrication",
        "Alimentation"
    ];

    const basculerMenu = () => {
        setMenuOuvert(!menuOuvert);
        setRechercheOuverte(false); // Ferme la recherche si on ouvre le menu
    };
    
    const basculerRecherche = () => {
        setRechercheOuverte(!rechercheOuverte);
        setMenuOuvert(false); // Ferme le menu si on ouvre la recherche
    };

    const fermerTout = () => {
        setMenuOuvert(false);
        setRechercheOuverte(false);
    };

    return (
        <header className="en-tete-principal">
            <div className="logo-container">
                <Link to="/" onClick={fermerTout}>
                    <img src={logo} alt="Logo Trouve ton artisan" className="logo-img" />
                </Link>
            </div>
            
            {/* LA RECHERCHE DYNAMIQUE */}
            <div className="recherche-mobile-container">
                <button className="bouton-icone-recherche" onClick={basculerRecherche}>
                    🔍
                </button>
                
                {/* Cette div n'apparaît que si rechercheOuverte est vrai */}
                {rechercheOuverte && (
                    <div className="barre-recherche-deroulante">
                        <input 
                            type="search" 
                            placeholder="Rechercher un artisan..." 
                            autoFocus 
                        />
                    </div>
                )}
            </div>
            
            <button className="hamburger" onClick={basculerMenu}>
                <span className="ligne"></span>
                <span className="ligne"></span>
                <span className="ligne"></span>
            </button>
            
            <nav className={`navigation-droite ${menuOuvert ? 'ouvert' : ''}`}>
                <ul className="menu">
                    <li><Link to="/" onClick={fermerTout}>Accueil</Link></li>
                    {categories.map((categorie) => (
                        <li key={categorie}>
                            <Link to={`/artisans/${categorie}`} onClick={fermerTout}>{categorie}</Link>
                        </li>
                    ))}
                    <li><Link to="/contact" onClick={fermerTout}>Contact</Link></li> 
                </ul>
            </nav>
        </header>
    );
}

export default Header;