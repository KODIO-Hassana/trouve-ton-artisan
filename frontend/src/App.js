import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Importation des composants
import Header from './components/Header';
import Home from './components/Home';
import Artisan from './components/Artisan';
import ListeArtisans from './components/ListeArtisans';
import Footer from './components/Footer';


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        
        {/* C'est ici que la magie opère : la zone dynamique */}
        <Routes>
          {/* La route pour l'accueil */}
          <Route path="/" element={<Home />} />
          
          {/* La route pour la page artisan */}
          <Route path="/artisan/:id" element={<Artisan />} />
          <Route path="/artisans" element={<ListeArtisans />} />

          {/* La NOUVELLE route dynamique pour filtrer par catégorie */}
          <Route path="/artisans/:categorie" element={<ListeArtisans />} />

        </Routes>
        
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;