import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Importation des composants
import Header from './components/Header';
import Home from './components/Home';
import Artisan from './components/Artisan';
import ListeArtisans from './components/ListeArtisans';
import Contact from './components/Contact';
import MentionsLegales from './components/MentionsLégales';
import Footer from './components/Footer';


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        
        <div className='main-content'>
              {/* C'est ici que la magie opère : la zone dynamique */}
            <Routes>
              {/* La route pour l'accueil */}
              <Route path="/" element={<Home />} />
              
              {/* La route pour la page artisan */}
              <Route path="/artisan/:id" element={<Artisan />} />
              <Route path="/artisans" element={<ListeArtisans />} />

              {/* La NOUVELLE route dynamique pour filtrer par catégorie */}
              <Route path="/artisans/:categorie" element={<ListeArtisans />} />

              <Route path="/contact" element={<Contact />} />
              <Route path="/mentions-legales" element={<MentionsLegales />} />

            </Routes>
        </div>
        
        
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;