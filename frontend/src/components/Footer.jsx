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
        
        <p class="copyright">© 2026 Trouve ton artisan. Tous droits réservés.</p>
    </footer>
        );
    }
    
    export default Footer;
