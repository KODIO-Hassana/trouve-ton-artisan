import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    // Utilisation des classes Bootstrap (container, text-center, my-5)
    <div className="container text-center my-5 min-vh-100">
      <img 
        src="/img/404-image.jpg"
        alt="Illustration Erreur 404" 
        className="img-fluid mb-4" 
        style={{ maxWidth: '400px' }} 
      />
      
      {/* text-primary va automatiquement utiliser le bleu #0074c7 grâce à notre Sass ! */}
      <h1 className="display-4 fw-bold text-primary">Page non trouvée</h1>
      <p className="lead text-muted mb-4">
        La page que vous avez demandée n'existe pas ou a été déplacée.
      </p>
      
      {/* btn-primary utilise aussi notre bleu officiel */}
      <Link to="/" className="btn btn-primary btn-lg">
        Retourner à l'accueil
      </Link>
    </div>
  );
};

export default NotFound;