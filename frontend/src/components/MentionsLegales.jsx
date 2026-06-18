import React from 'react';
import { Helmet } from 'react-helmet-async';

const MentionsLegales = () => {
  return (
    <main className="container py-5">
      <Helmet>
        <title>Mentions Légales - Trouve Ton Artisan</title>
        <meta name="description" content="Consultez les mentions légales et la politique de confidentialité de Trouve Ton Artisan en Auvergne-Rhône-Alpes." />
      </Helmet>

      {/* Le conteneur principal avec fond blanc, ombre et coins arrondis */}
      <div className="bg-white p-4 p-md-5 rounded-3 shadow-sm mx-auto" style={{ maxWidth: '800px' }}>
        <h1 className="text-center text-dark mb-5 display-6 fw-bold">
          Mentions Légales et Politique de Confidentialité
        </h1>

        <div className="contenu-legal text-start" style={{ lineHeight: '1.8' }}>
          
          <section className="mb-4">
            <h2 className="h5 text-primary border-bottom pb-2 mb-3">1. Éditeur du site</h2>
            <p><strong>Site web :</strong> Trouve Ton Artisan - Région Auvergne-Rhône-Alpes.</p>
            <p>Ce site a été conçu dans le cadre d'une démarche d'apprentissage en développement web.</p>
          </section>

          <section className="mb-4">
            <h2 className="h5 text-primary border-bottom pb-2 mb-3">2. Hébergement</h2>
            <p>Ce site est hébergé localement ou sur une plateforme de test dans le cadre du projet d'étude pour la formation CEF.</p>
          </section>

          <section className="mb-4">
            <h2 className="h5 text-primary border-bottom pb-2 mb-3">3. Données personnelles et Cookies</h2>
            <p>Les informations recueillies via les formulaires de ce site sont fictives et uniquement utilisées dans le cadre de l'évaluation du projet. Aucun cookie de pistage commercial ou publicitaire n'est déployé sur ce site.</p>
          </section>

          <section className="mb-0">
            <h2 className="h5 text-primary border-bottom pb-2 mb-3">4. Accessibilité</h2>
            <p>Nous nous engageons à rendre nos sites internet accessibles conformément à l'article 47 de la loi n°2005-102 du 11 février 2005 pour l'égalité des droits et des chances.</p>
          </section>

        </div>
      </div>
    </main>
  );
};

export default MentionsLegales;