import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const NotFound = () => {
  return (
    <main className="container text-center py-5">
      <Helmet>
        <title>Page Introuvable - Trouve Ton Artisan</title>
      </Helmet>

      <img 
        src="/img/404-image.jpg"
        alt="Illustration Erreur 404" 
        className="img-fluid mb-4 rounded" 
        style={{ maxWidth: '400px' }} 
      />
      
      <h1 className="display-4 fw-bold text-primary mb-3">Page non trouvée</h1>
      <p className="lead text-muted mb-4">
        La page que vous avez demandée n'existe pas ou a été déplacée.
      </p>
      
      <Link to="/" className="btn btn-primary btn-lg shadow-sm">
        Retourner à l'accueil
      </Link>
    </main>
  );
};

export default NotFound;