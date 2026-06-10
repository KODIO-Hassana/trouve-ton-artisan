    import React from 'react';
    import { Link } from 'react-router-dom';
    
    
    function Footer() {
        return (
            <footer>
                <div className="liens-footer">
                    <Link to="/mentions-legales">Mentions légales</Link>
                    <Link to="/mentions-legales">Données personnelles</Link>
                    <Link to="/mentions-legales">Accessibilité</Link>
                    <Link to="/mentions-legales">Cookies</Link>
                    <Link to="/contact">Contact</Link>
                </div>

                {/* Les icônes de réseaux sociaux */}
            <div className="reseaux-sociaux">
                <a href="https://facebook.com" target="_blank" rel="noreferrer">
                    <i className="fab fa-facebook"></i>
                </a>
                <a href="https://instagram.com" target="_blank" rel="noreferrer">
                    <i className="fab fa-instagram"></i>
                </a>
                <a href="https://twitter.com" target="_blank" rel="noreferrer">
                    <i className="fab fa-twitter"></i>
                </a>
            </div>

            {/* Barre de navigation mobile */}
            <nav className="nav-mobile-bottom">
                <Link to="/"><i className="fas fa-home"></i></Link>
                <Link to="/favoris"><i className="fas fa-bookmark"></i></Link>
                <Link to="/communaute"><i className="fas fa-users"></i></Link>
                <Link to="/profil"><i className="fas fa-user"></i></Link>
            </nav>
        
        <p className="copyright">© 2026 Trouve ton artisan. Tous droits réservés.</p>
    </footer>
        );
    }
    
    export default Footer;
