import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';

const Contact = () => {
  const [formData, setFormData] = useState({
    nom: '',
    email: '',
    sujet: '',
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      // 1. On utilise fetch pour envoyer directement à l'API EmailJS
      const response = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          service_id: 'service_zdt3zgq',   // <-- À REMPLACER
          template_id: 'template_trrlo77', // <-- À REMPLACER
          user_id: 'oCYI_5k6Hjo3Ye2WG',       // <-- À REMPLACER
          template_params: {
            nom: formData.nom,
            email: formData.email,
            sujet: formData.sujet,
            message: formData.message
          }
        }),
      });

      // 2. Vérification de la réponse d'EmailJS
      if (response.ok) {
        console.log("✅ Message envoyé avec succès via EmailJS !");
        setIsSubmitted(true); 
        setFormData({ nom: '', email: '', sujet: '', message: '' }); 
      } else {
        // 3. S'il y a une erreur avec les clés, EmailJS nous dit laquelle !
        const errorText = await response.text();
        alert("🚨 Erreur EmailJS : " + errorText);
      }
      
    } catch (error) {
      console.error("❌ Erreur de connexion réseau :", error);
      alert("Impossible de joindre le serveur pour envoyer le message.");
    }
  };

  return (
    <main className='container py-5'>
      <Helmet>
        <title>Contact - Trouve Ton Artisan</title>
        <meta name="description" content="Contactez-nous pour toute question ou demande de renseignement." />
      </Helmet>

      <div className='row justify-content-center'>
        <div className='col-12 col-md-8 col-lg-6'>
          
          <div className='card shadow-sm p-4 p-md-5 border-0 rounded-3 bg-white'>
            <h1 className='text-center text-primary mb-4 fs-2 fw-bold'>
              Contactez-nous
            </h1>

            {isSubmitted ? (
              <div className="text-center py-4">
                <div className="alert alert-success shadow-sm border-0" role="alert">
                  <h4 className="alert-heading fw-bold mb-3">Message envoyé !</h4>
                  <p className="mb-0 text-dark">
                    Merci de nous avoir contactés. Nous vous répondrons dans les plus brefs délais sous 48h.
                  </p>
                </div>
                <button 
                  className="btn btn-outline-primary mt-3 fw-bold" 
                  onClick={() => setIsSubmitted(false)}
                >
                  Envoyer un autre message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className='mb-3'>
                  <label htmlFor="nom" className='form-label fw-bold text-dark'>Nom :</label>
                  <input 
                    type="text" 
                    id="nom" 
                    name="nom" 
                    className='form-control form-control-lg bg-light border-0 shadow-none'
                    placeholder="Votre nom complet"
                    value={formData.nom} 
                    onChange={handleChange} 
                    required 
                  />
                </div>

                <div className='mb-3'>
                  <label htmlFor="email" className='form-label fw-bold text-dark'>Adresse e-mail :</label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    className='form-control form-control-lg bg-light border-0 shadow-none'
                    placeholder="exemple@email.com"
                    value={formData.email} 
                    onChange={handleChange} 
                    required 
                  />
                </div>

                <div className='mb-3'>
                  <label htmlFor="sujet" className='form-label fw-bold text-dark'>Sujet :</label>
                  <input 
                    type="text" 
                    id="sujet" 
                    name="sujet" 
                    className='form-control form-control-lg bg-light border-0 shadow-none'
                    placeholder="Objet de votre message"
                    value={formData.sujet} 
                    onChange={handleChange} 
                    required 
                  />
                </div>

                <div className='mb-4'>
                  <label htmlFor="message" className='form-label fw-bold text-dark'>Message :</label>
                  <textarea 
                    id="message" 
                    name="message" 
                    rows="5" 
                    className='form-control form-control-lg bg-light border-0 shadow-none'
                    placeholder="Rédigez votre message ici..."
                    value={formData.message} 
                    onChange={handleChange} 
                    required 
                  ></textarea>
                </div>

                <button type="submit" className='btn btn-primary btn-lg w-100 fs-5 fw-bold mt-2 shadow-sm'>
                  Envoyer le message
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Contact;
        