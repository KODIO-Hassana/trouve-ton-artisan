import React, { useState } from 'react';
import logo from '../assets/img/Logo.png';
import { Link } from 'react-router-dom';

function Header() {
    // On garde uniquement l'état du menu mobile, c'est plus simple et robuste !
    const [menuOuvert, setMenuOuvert] = useState(false);

    const categories = [
        "Bâtiment",
        "Services",
        "Fabrication",
        "Alimentation"
    ];

    const basculerMenu = () => {
        setMenuOuvert(!menuOuvert);
    };

    const fermerTout = () => {
        setMenuOuvert(false);
    };

    return (
        // navbar-expand-lg permet de passer en menu burger sur petit écran
        // bg-light (fond clair) et shadow-sm (petite ombre) pour l'esthétique
        <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-sm py-2">
            <div className="container">
                
                {/* Le Logo (navbar-brand) */}
                <Link className="navbar-brand" to="/" onClick={fermerTout}>
                    <img src={logo} alt="Logo Trouve ton artisan" height="60" />
                </Link>

                {/* Le bouton Hamburger (navbar-toggler) */}
                <button 
                    className="navbar-toggler border-0" 
                    type="button" 
                    onClick={basculerMenu}
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                {/* Le menu déroulant contrôlé par ton état React */}
                <div className={`collapse navbar-collapse ${menuOuvert ? 'show' : ''}`}>
                    
                    {/* Liste des liens (navbar-nav) centré avec mx-auto */}
                    <ul className="navbar-nav mx-auto mb-2 mb-lg-0 gap-2 fw-bold text-center mt-3 mt-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link text-primary" to="/" onClick={fermerTout}>Accueil</Link>
                        </li>
                        {categories.map((categorie) => (
                            <li className="nav-item" key={categorie}>
                                <Link className="nav-link text-primary" to={`/artisans/${categorie}`} onClick={fermerTout}>
                                    {categorie}
                                </Link>
                            </li>
                        ))}
                        <li className="nav-item">
                            <Link className="nav-link text-primary" to="/contact" onClick={fermerTout}>Contact</Link>
                        </li>
                    </ul>

                    {/* La barre de recherche intégrée proprement dans la navigation */}
                    <form className="d-flex justify-content-center mt-3 mt-lg-0" role="search">
                        <input 
                            className="form-control me-2 border-primary" 
                            type="search" 
                            placeholder="Rechercher..." 
                            aria-label="Recherche" 
                        />
                        <button className="btn btn-outline-primary" type="submit">
                            🔍
                        </button>
                    </form>
                </div>
            </div>
        </nav>
    );
}

export default Header;