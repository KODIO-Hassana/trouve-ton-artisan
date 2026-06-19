import React, { useState, useEffect } from 'react';
import logo from '../assets/img/Logo.png';
import { Link, useLocation, useNavigate } from 'react-router-dom'; // Ajout de useNavigate

function Header() {
    const [menuOuvert, setMenuOuvert] = useState(false);
    const [rechercheOuverte, setRechercheOuverte] = useState(false);
    
    // NOUVEAU : On crée une variable pour stocker le texte tapé dans la barre
    const [termeRecherche, setTermeRecherche] = useState(''); 
    
    const location = useLocation();
    const navigate = useNavigate(); // NOUVEAU : L'outil pour rediriger
    const isHomePage = location.pathname === '/';

    // const categories = [
    //     "Bâtiment",
    //     "Services",
    //     "Fabrication",
    //     "Alimentation"
    // ];

    // On prépare une variable vide pour stocker les catégories
    const [categories, setCategories] = useState([]);

    // On va chercher les catégories dans la base de données au chargement du Header
    useEffect(() => {
        fetch('https://trouve-ton-artisan-najt.onrender.com/api/categories')
            .then(reponse => reponse.json())
            .then(donnees => {
                setCategories(donnees);
            })
            .catch(erreur => console.error("Erreur de récupération des catégories :", erreur));
    }, []);

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

    // NOUVEAU : La fonction qui se déclenche quand on appuie sur "Go" ou "Entrée"
    const soumettreRecherche = (e) => {
        e.preventDefault();
        if (termeRecherche.trim() !== '') {
            // 1. On redirige vers la liste avec le mot-clé
            navigate(`/artisans?recherche=${termeRecherche}`);
            // 2. On ferme la petite barre de recherche mobile
            setRechercheOuverte(false);
            // 3. On vide le champ pour la prochaine fois
            setTermeRecherche(''); 
        }
    };

    return (
        <header className="bg-white shadow-sm sticky-top position-relative">
            <nav className="navbar navbar-expand-lg navbar-light py-2 py-md-3">
                <div className="container d-flex justify-content-between align-items-center flex-wrap flex-lg-nowrap">
                    
                    {/* LE LOGO */}
                    <Link className="navbar-brand m-0 p-0" to="/" onClick={fermerTout}>
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
                            {/* {categories.map((categorie) => (
                                <li className="nav-item" key={categorie}>
                                    <Link className="nav-link text-primary" to={`/artisans/${categorie}`} onClick={fermerTout}>
                                        {categorie}
                                    </Link>
                                </li>
                            ))} */}

                            {categories.map((cat) => (
                                <li key={cat.id}>
                                    <Link 
                                        className="dropdown-item" 
                                        to={`/artisans/${cat.nom}`} 
                                        onClick={fermerTout}
                                    >
                                        {cat.nom}
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
                    {/* NOUVEAU : On connecte le formulaire à notre fonction soumettreRecherche */}
                    <form className="d-flex" role="search" onSubmit={soumettreRecherche}>
                        <input 
                            className="form-control me-2 border-primary" 
                            type="search" 
                            placeholder="Rechercher un artisan..." 
                            value={termeRecherche}
                            onChange={(e) => setTermeRecherche(e.target.value)}
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