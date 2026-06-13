import React from 'react';
import { Link } from 'react-router-dom';

// import errorIllustration from '../assets/images/404-image.png'; 

const NotFound = () => {
  return (
    <div className="container text-center my-5" style={{ minHeight: '60vh' }}>
      {/* L'image obligatoire selon le brief */}
      <img 
        src="/img/404-image.jpg"
        alt="Illustration Erreur 404" 
        className="img-fluid mb-4" 
        style={{ maxWidth: '400px' }} 
      />
      
      {/* Les textes explicatifs exigés */}
      <h1 className="display-4 fw-bold" style={{ color: '#00497c' }}>Page non trouvée</h1>
      <p className="lead text-muted mb-4">
        La page que vous avez demandée n'existe pas ou a été déplacée.
      </p>
      
      {/* Un bouton de retour pour une bonne expérience utilisateur */}
      <Link to="/" className="btn btn-primary" style={{ backgroundColor: '#0074c7', border: 'none' }}>
        Retourner à l'accueil
      </Link>
    </div>
  );
};

export default NotFound;