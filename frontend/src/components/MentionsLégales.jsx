// import React from 'react';

// const MentionsLegales = () => {
//   return (
//     <div className="container" style={{ padding: '40px 20px', maxWidth: '800px', margin: '0 auto' }}>
//       <h2>Mentions Légales et Politique de Confidentialité</h2>
//       <p><strong>Éditeur du site :</strong> Trouve Ton Artisan - Région Auvergne-Rhône-Alpes.</p>
//       <p><strong>Hébergement :</strong> Ce site est hébergé dans le cadre d'un projet d'étude.</p>
//       <p><strong>Données personnelles et Cookies :</strong> Les informations recueillies sur ce site sont uniquement utilisées dans le cadre de l'évaluation du projet. Aucun cookie de pistage n'est utilisé.</p>
//       <p><strong>Accessibilité :</strong> Nous nous engageons à rendre nos sites internet accessibles conformément à l'article 47 de la loi n°2005-102 du 11 février 2005.</p>
//     </div>
//   );
// };

// export default MentionsLegales;

import React from 'react';

const MentionsLegales = () => {
  return (
    <div style={{ 
      padding: '40px', 
      maxWidth: '800px', 
      margin: '40px auto', 
      backgroundColor: '#ffffff', 
      borderRadius: '8px', 
      boxShadow: '0 4px 15px rgba(0,0,0,0.05)', /* Ajoute une petite ombre élégante */
      textAlign: 'left', /* On force le texte à gauche pour la lisibilité */
      lineHeight: '1.8', /* On aère les lignes */
      color: '#333'
    }}>
      <h1 style={{ 
        textAlign: 'center', 
        color: '#2c3e50', 
        marginBottom: '40px',
        fontSize: '2rem'
      }}>
        Mentions Légales et Politique de Confidentialité
      </h1>

      <div className="contenu-legal">
        <h2 style={{ fontSize: '1.3rem', color: '#3498db', marginTop: '30px', borderBottom: '2px solid #f0f0f0', paddingBottom: '10px' }}>
          1. Éditeur du site
        </h2>
        <p><strong>Site web :</strong> Trouve Ton Artisan - Région Auvergne-Rhône-Alpes.</p>
        <p>Ce site a été conçu dans le cadre d'une démarche d'apprentissage en développement web.</p>

        <h2 style={{ fontSize: '1.3rem', color: '#3498db', marginTop: '30px', borderBottom: '2px solid #f0f0f0', paddingBottom: '10px' }}>
          2. Hébergement
        </h2>
        <p>Ce site est hébergé localement ou sur une plateforme de test dans le cadre du projet d'étude pour la formation CEF.</p>

        <h2 style={{ fontSize: '1.3rem', color: '#3498db', marginTop: '30px', borderBottom: '2px solid #f0f0f0', paddingBottom: '10px' }}>
          3. Données personnelles et Cookies
        </h2>
        <p>Les informations recueillies via les formulaires de ce site sont fictives et uniquement utilisées dans le cadre de l'évaluation du projet. Aucun cookie de pistage commercial ou publicitaire n'est déployé sur ce site.</p>

        <h2 style={{ fontSize: '1.3rem', color: '#3498db', marginTop: '30px', borderBottom: '2px solid #f0f0f0', paddingBottom: '10px' }}>
          4. Accessibilité
        </h2>
        <p>Nous nous engageons à rendre nos sites internet accessibles conformément à l'article 47 de la loi n°2005-102 du 11 février 2005 pour l'égalité des droits et des chances.</p>
      </div>
    </div>
  );
};

export default MentionsLegales;