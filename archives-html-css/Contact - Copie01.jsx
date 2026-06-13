import React, { useState } from 'react';

const Contact = () => {
  // On crée un état pour stocker les données tapées par l'utilisateur
  const [formData, setFormData] = useState({
    nom: '',
    email: '',
    sujet: '',
    message: ''
  });

  // On crée un état pour afficher un message de succès après l'envoi
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Fonction qui met à jour les données à chaque fois qu'on tape au clavier
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Fonction déclenchée quand on clique sur le bouton "Envoyer"
  const handleSubmit = (e) => {
    e.preventDefault(); // Empêche la page de se recharger
    
    // Simulation d'envoi pour la démonstration au jury
    console.log("Message général envoyé :", formData);
    
    // On affiche le message de remerciement
    setIsSubmitted(true);
    
    // On vide le formulaire
    setFormData({ nom: '', email: '', sujet: '', message: '' });
  };

  return (
    <div className="container contact-page" style={{ padding: '40px 20px', maxWidth: '800px', margin: '0 auto' }}>
      <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>Nous contacter</h2>
      <p style={{ textAlign: 'center', marginBottom: '40px' }}>
        Vous avez une question générale sur la plateforme Trouve Ton Artisan ? Écrivez-nous !
      </p>
      
      {isSubmitted ? (
        <div style={{ backgroundColor: '#d4edda', color: '#155724', padding: '20px', borderRadius: '5px', textAlign: 'center' }}>
          <p><strong>Merci !</strong> Votre message a bien été envoyé. Notre équipe vous répondra dans les plus brefs délais.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
          
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <label htmlFor="nom" style={{ marginBottom: '5px', fontWeight: 'bold' }}>Votre nom :</label>
            <input 
              type="text" 
              id="nom" 
              name="nom" 
              value={formData.nom} 
              onChange={handleChange} 
              required 
              style={{ padding: '10px', borderRadius: '4px', border: '1px solid #ccc' }}
            />
          </div>

          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <label htmlFor="email" style={{ marginBottom: '5px', fontWeight: 'bold' }}>Votre adresse email :</label>
            <input 
              type="email" 
              id="email" 
              name="email" 
              value={formData.email} 
              onChange={handleChange} 
              required 
              style={{ padding: '10px', borderRadius: '4px', border: '1px solid #ccc' }}
            />
          </div>

          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <label htmlFor="sujet" style={{ marginBottom: '5px', fontWeight: 'bold' }}>Sujet :</label>
            <input 
              type="text" 
              id="sujet" 
              name="sujet" 
              value={formData.sujet} 
              onChange={handleChange} 
              required 
              style={{ padding: '10px', borderRadius: '4px', border: '1px solid #ccc' }}
            />
          </div>

          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <label htmlFor="message" style={{ marginBottom: '5px', fontWeight: 'bold' }}>Message :</label>
            <textarea 
              id="message" 
              name="message" 
              rows="6" 
              value={formData.message} 
              onChange={handleChange} 
              required 
              style={{ padding: '10px', borderRadius: '4px', border: '1px solid #ccc', resize: 'vertical' }}
            ></textarea>
          </div>

          <button 
            type="submit" 
            style={{ 
              padding: '12px 20px', 
              backgroundColor: '#007bff', 
              color: 'white', 
              border: 'none', 
              borderRadius: '4px', 
              cursor: 'pointer', 
              fontWeight: 'bold',
              marginTop: '10px'
            }}>
            Envoyer le message
          </button>
        </form>
      )}
    </div>
  );
};

export default Contact;