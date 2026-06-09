import React from 'react';
// // On importe l'image depuis le dossier assets que tu as placé dans src
import logo from '../assets/img/Logo.png';
import {Link} from 'react-router-dom';

function Header() {
    const categories = [
        "Bâtiment",
        "Services",
        "Fabrication",
        "Alimentation"
    ];

    return (
        <header className="en-tete-principal">
            <div className="logo-container">
                <Link to="/">
                    <img src={logo} alt="Logo Trouve ton artisan" className="logo-img" />
                </Link>
            </div>
            
            <nav className="navigation-droite">
                <ul className="menu">
                    {/* Le lien Accueil est bien présent */}
                    <li><Link to="/">Accueil</Link></li>
                    
                    {/* Les 4 catégories générées dynamiquement */}
                    {categories.map((categorie, index) => (
                        <li key={index}>
                            {/* <Link to="/artisans">{categorie}</Link> */}
                            {/* On injecte le nom de la catégorie directement dans l'URL */}
                            <Link to={`/artisans/${categorie}`}>{categorie}</Link>
                        </li>
                    ))}
                   <li><Link to="/contact">Contact</Link></li> 
                </ul>
            </nav>
        </header>
    );
}

export default Header;