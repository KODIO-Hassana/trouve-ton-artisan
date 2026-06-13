import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
    return (
        // Les fragments React (<> </>) permettent de renvoyer deux blocs distincts (le footer normal + la barre mobile)
        <>
            {/* 1. LE FOOTER CLASSIQUE (Bureau et Mobile) */}
            {/* mb-5 mb-md-0 ajoute une marge en bas sur mobile pour que le texte ne soit pas caché par la barre fixe */}
            <footer className="mt-auto py-4 mb-5 mb-md-0" style={{ backgroundColor: '#e2e2e2' }}>
                <div className="container text-center">
                    <p className="text-dark mb-0 fw-medium">
                        © 2026 Trouve ton artisan
                        {/* Sur PC on affiche un point, sur mobile on passe à la ligne */}
                        <span className="d-none d-md-inline"> · </span>
                        <br className="d-md-none" />
                        <Link to="/mentions-legales" className="text-dark text-decoration-none">Mentions légales</Link>
                        <span> · </span>
                        <Link to="/contact" className="text-dark text-decoration-none">Contact</Link>
                    </p>
                </div>
            </footer>

            {/* 2. LA BARRE DE NAVIGATION MOBILE FIXE (Uniquement sur smartphone) */}
            {/* fixed-bottom la cloue en bas, d-md-none la cache sur PC */}
            <nav className="d-md-none fixed-bottom bg-light border-top d-flex justify-content-around align-items-center py-3 z-3">
                <Link to="/" className="text-dark fs-4">
                    <i className="fas fa-home"></i>
                </Link>
                <Link to="/favoris" className="text-dark fs-4">
                    <i className="fas fa-bookmark"></i>
                </Link>
                <Link to="/artisans" className="text-dark fs-4">
                    <i className="fas fa-user-friends"></i>
                </Link>
                <Link to="/profil" className="text-dark fs-4">
                    <i className="fas fa-user"></i>
                </Link>
            </nav>
        </>
    );
}

export default Footer;