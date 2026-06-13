import React, { useState } from 'react';

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

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Message général envoyé :", formData);
    setIsSubmitted(true);
    setFormData({ nom: '', email: '', sujet: '', message: '' });
  };

  return (
    // Utilisation de container pour centrer et my-5 pour les marges en haut/bas
    <div className='container my-5'>
      <div className='row justify-content-center'>
        <div className='col-12 col-md-8 col-lg-6'>
          
          {/* card et shadow-sm créent un joli bloc blanc avec une ombre légère */}
          <div className='card shadow-sm p-4 border-0 rounded-3'>
            
            {/* text-primary applique le bleu de la région, mb-4 gère la marge basse */}
            <h1 className='text-center text-primary mb-4 fs-2 fw-bold'>
              Contactez-nous
            </h1>

            {isSubmitted ? (
              // alert alert-success gère le bloc de succès vert
              <div className='alert alert-success text-center' role='alert'>
                <h4 className='alert-heading mb-3'>Merci pour votre message !</h4>
                <p>Votre demande a bien été envoyée. Nous vous répondrons dans les plus brefs délais.</p>
                <hr />
                <button 
                  onClick={() => setIsSubmitted(false)}
                  className='btn btn-success fw-bold mt-2'
                >
                  Envoyer un autre message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                
                {/* mb-3 gère l'espacement entre chaque champ */}
                <div className='mb-3'>
                  <label htmlFor="nom" className='form-label fw-bold text-primary'>Nom :</label>
                  {/* form-control stylise automatiquement l'input (bordure, focus, padding) */}
                  <input 
                    type="text" 
                    id="nom" 
                    name="nom" 
                    className='form-control bg-light'
                    value={formData.nom} 
                    onChange={handleChange} 
                    required 
                  />
                </div>

                <div className='mb-3'>
                  <label htmlFor="email" className='form-label fw-bold text-primary'>Email :</label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    className='form-control bg-light'
                    value={formData.email} 
                    onChange={handleChange} 
                    required 
                  />
                </div>

                <div className='mb-3'>
                  <label htmlFor="sujet" className='form-label fw-bold text-primary'>Sujet :</label>
                  <input 
                    type="text" 
                    id="sujet" 
                    name="sujet" 
                    className='form-control bg-light'
                    value={formData.sujet} 
                    onChange={handleChange} 
                    required 
                  />
                </div>

                <div className='mb-3'>
                  <label htmlFor="message" className='form-label fw-bold text-primary'>Message :</label>
                  <textarea 
                    id="message" 
                    name="message" 
                    rows="6" 
                    className='form-control bg-light'
                    value={formData.message} 
                    onChange={handleChange} 
                    required 
                  ></textarea>
                </div>

                {/* w-100 prend toute la largeur, btn-primary applique la couleur officielle */}
                <button type="submit" className='btn btn-primary w-100 fs-5 fw-bold mt-3'>
                  Envoyer le message
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;