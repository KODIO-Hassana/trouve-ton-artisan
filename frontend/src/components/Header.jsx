import React, { useState, useEffect } from 'react';
import logo from '../assets/img/Logo.png'; 
import { Link, useLocation, useNavigate } from 'react-router-dom';

function Header() {
    const [menuOuvert, setMenuOuvert] = useState(false);
    const [rechercheOuverte, setRechercheOuverte] = useState(false);
    
    // NOUVEAU : On crée un état pour contrôler l'ouverture du menu Catégories
    const [dropdownOuvert, setDropdownOuvert] = useState(false); 
    
    const [termeRecherche, setTermeRecherche] = useState('');
    const [categories, setCategories] = useState([]); 

    const location = useLocation();
    const navigate = useNavigate();
    const isHomePage = location.pathname === '/';

    useEffect(() => {
        fetch('https://trouve-ton-artisan-najt.onrender.com/api/categories')
            .then(reponse => reponse.json())
            .then(donnees => {
                if (Array.isArray(donnees)) {
                    setCategories(donnees);
                }
            })
            .catch(erreur => console.error("Erreur de récupération des catégories :", erreur));
    }, []);

    const basculerMenu = () => {
        setMenuOuvert(!menuOuvert);
        setRechercheOuverte(false);
        setDropdownOuvert(false);
    };

    const basculerRecherche = () => {
        setRechercheOuverte(!rechercheOuverte);
        setMenuOuvert(false);
        setDropdownOuvert(false);
    };

    const fermerTout = () => {
        setMenuOuvert(false);
        setRechercheOuverte(false);
        setDropdownOuvert(false); // On ferme aussi le dropdown quand on clique sur un lien
    };

    const soumettreRecherche = (e) => {
        e.preventDefault();
        if (termeRecherche.trim() !== '') {
            navigate(`/artisans?recherche=${termeRecherche}`);
            fermerTout();
            setTermeRecherche('');
        }
    };

    return (
        <header className="sticky-top bg-white shadow-sm">
            <nav className="navbar navbar-expand-lg navbar-light py-3">
                <div className="container">
                    <Link className="navbar-brand" to="/" onClick={fermerTout}>
                        <img src={logo} alt="Logo Trouve Ton Artisan" height="40" />
                    </Link>

                    <div className="d-flex align-items-center d-lg-none">
                        {!isHomePage && (
                            <button className="btn btn-outline-primary me-2 border-0" onClick={basculerRecherche} type="button">
                                <i className="fas fa-search"></i>
                            </button>
                        )}
                        <button className="navbar-toggler border-0 shadow-none" type="button" onClick={basculerMenu}>
                            <span className="navbar-toggler-icon"></span>
                        </button>
                    </div>

                    <div className={`collapse navbar-collapse ${menuOuvert ? 'show' : ''}`} id="navbarNav">
                        
                        {!isHomePage && (
                            <form className="d-none d-lg-flex ms-4 me-auto w-50" role="search" onSubmit={soumettreRecherche}>
                                <input 
                                    className="form-control me-2 border-primary bg-light" 
                                    type="search" 
                                    placeholder="Rechercher un artisan..." 
                                    value={termeRecherche}
                                    onChange={(e) => setTermeRecherche(e.target.value)}
                                />
                                <button className="btn btn-primary" type="submit">
                                    <i className="fas fa-search"></i>
                                </button>
                            </form>
                        )}

                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0 align-items-center">
                            
                            <li className="nav-item">
                                <Link className="nav-link text-primary fw-bold" to="/" onClick={fermerTout}>Accueil</Link>
                            </li>

                            {/* Menu Déroulant Catégories GÉRÉ PAR REACT */}
                            <li className="nav-item dropdown position-relative">
                                <span 
                                    className="nav-link text-primary fw-bold" 
                                    role="button" 
                                    onClick={() => setDropdownOuvert(!dropdownOuvert)}
                                    style={{ cursor: 'pointer' }}
                                >
                                    Catégories <i className={`fas fa-chevron-${dropdownOuvert ? 'up' : 'down'} ms-1 small`}></i>
                                </span>
                                
                                {/* On ajoute la classe "show" de Bootstrap si dropdownOuvert est true */}
                                <ul className={`dropdown-menu shadow-sm border-0 mt-2 ${dropdownOuvert ? 'show' : ''}`} style={{ position: 'absolute', right: 0 }}>
                                    {categories.length > 0 ? (
                                        categories.map((cat) => (
                                            <li key={cat.id}>
                                                <Link 
                                                    className="dropdown-item py-2" 
                                                    to={`/artisans/${cat.nom}`} 
                                                    onClick={fermerTout}
                                                >
                                                    {cat.nom}
                                                </Link>
                                            </li>
                                        ))
                                    ) : (
                                        <li><span className="dropdown-item py-2 text-muted fst-italic">Chargement...</span></li>
                                    )}
                                </ul>
                            </li>

                            <li className="nav-item">
                                <Link className="nav-link text-primary fw-bold" to="/contact" onClick={fermerTout}>Contact</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

            {rechercheOuverte && !isHomePage && (
                <div className="bg-light border-top py-3 px-3 d-lg-none shadow-sm position-absolute w-100" style={{ zIndex: 1050, top: '100%' }}>
                    <form className="d-flex" role="search" onSubmit={soumettreRecherche}>
                        <input 
                            className="form-control me-2 border-primary" 
                            type="search" 
                            placeholder="Rechercher un artisan..." 
                            value={termeRecherche}
                            onChange={(e) => setTermeRecherche(e.target.value)}
                            autoFocus 
                        />
                        <button className="btn btn-primary fw-bold" type="submit">Go</button>
                    </form>
                </div>
            )}
        </header>
    );
}

export default Header;