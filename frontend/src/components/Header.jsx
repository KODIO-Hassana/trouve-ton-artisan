import React, { useState } from 'react';
import logo from '../assets/img/Logo.png';
import { Link, useLocation } from 'react-router-dom';

function Header() {
    const [menuOuvert, setMenuOuvert] = useState(false);
    const [rechercheOuverte, setRechercheOuverte] = useState(false);
    
    const location = useLocation();
    const isHomePage = location.pathname === '/';

    const categories = [
        "Bâtiment",
        "Services",
        "Fabrication",
        "Alimentation"
    ];

    const basculerMenu = () => {
        setMenuOuvert(!menuOuvert);
        setRechercheOuverte(false);
    };

    const basculerRecherche = () => {
        setRechercheOuverte(!rechercheOuverte);
        setMenuOuvert(false);
    };

    const fermerTout = () => {
        setMenuOuvert(false);
        setRechercheOuverte(false);
    };

    return (
        <header className="bg-white shadow-sm sticky-top position-relative">
            {/* py-2 au lieu de py-3 pour gagner un peu de place en hauteur sur mobile */}
            <nav className="navbar navbar-expand-lg navbar-light py-2 py-md-3">
                
                {/* L'AJOUT CLÉ EST ICI : d-flex, justify-content-between et flex-nowrap forcent l'alignement strict sur une ligne */}
                <div className="container d-flex justify-content-between align-items-center flex-wrap flex-lg-nowrap">
                    
                    {/* LE LOGO */}
                    <Link className="navbar-brand m-0 p-0" to="/" onClick={fermerTout}>
                        {/* L'ajout de img-fluid permet à l'image de rétrécir si l'écran est vraiment très petit */}
                        <img 
                            src={logo} 
                            alt="Logo Trouve ton artisan" 
                            className="img-fluid" 
                            style={{ maxHeight: '50px', objectFit: 'contain' }} 
                        />
                    </Link>

                    {/* BLOC MOBILE UNIQUEMENT */}
                    <div className="d-flex align-items-center d-lg-none">
                        {!isHomePage && (
                            <button 
                                className="btn btn-link text-primary fs-4 me-3 p-0 text-decoration-none shadow-none" 
                                onClick={basculerRecherche}
                            >
                                <i className="fas fa-search"></i>
                            </button>
                        )}
                        <button 
                            className="navbar-toggler border-0 shadow-none p-0" 
                            type="button" 
                            onClick={basculerMenu}
                        >
                            <span className="navbar-toggler-icon"></span>
                        </button>
                    </div>

                    {/* LE MENU PRINCIPAL */}
                    <div className={`collapse navbar-collapse ${menuOuvert ? 'show' : ''} w-100`}>
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0 fw-bold gap-2 gap-lg-4 text-center mt-3 mt-lg-0">
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
                    </div>
                </div>
            </nav>

            {/* BARRE DE RECHERCHE DÉROULANTE MOBILE */}
            {rechercheOuverte && !isHomePage && (
                <div 
                    className="bg-light border-top py-3 px-3 d-lg-none shadow-sm position-absolute w-100" 
                    style={{ zIndex: 1050, top: '100%' }}
                >
                    <form className="d-flex" role="search">
                        <input 
                            className="form-control me-2 border-primary" 
                            type="search" 
                            placeholder="Rechercher un artisan..." 
                            autoFocus 
                        />
                        <button className="btn btn-primary fw-bold" type="submit">
                            Go
                        </button>
                    </form>
                </div>
            )}
        </header>
    );
}

export default Header;