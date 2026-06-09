import React, { useState } from 'react';

const Contact = () => {
  // État pour stocker les données tapées par l'utilisateur
  const [formData, setFormData] = useState({
    nom: '',
    email: '',
    sujet: '',
    message: ''
  });

  // État pour afficher un message de succès après l'envoi
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Fonction qui met à jour les données
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Fonction déclenchée quand on clique sur "Envoyer"
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Message général envoyé :", formData);
    setIsSubmitted(true);
    setFormData({ nom: '', email: '', sujet: '', message: '' });
  };

  return (
    <div style={{ 
      padding: '40px', 
      maxWidth: '800px', 
      margin: '40px auto', 
      backgroundColor: '#ffffff', 
      borderRadius: '8px', 
      boxShadow: '0 4px 15px rgba(0,0,0,0.05)', /* La même ombre élégante */
      textAlign: 'left', 
      color: '#333'
    }}>
      <h1 style={{ 
        textAlign: 'center', 
        color: '#2c3e50', 
        marginBottom: '40px',
        fontSize: '2rem'
      }}>
        Contactez-nous
      </h1>

      {isSubmitted ? (
        <div style={{ 
          padding: '20px', 
          backgroundColor: '#d4edda', 
          color: '#155724', 
          borderRadius: '6px', 
          textAlign: 'center',
          border: '1px solid #c3e6cb'
        }}>
          <h3 style={{ marginBottom: '10px' }}>Merci pour votre message !</h3>
          <p>Votre demande a bien été envoyée. Nous vous répondrons dans les plus brefs délais.</p>
          <button 
            onClick={() => setIsSubmitted(false)}
            style={{ 
              marginTop: '20px', 
              padding: '10px 20px', 
              backgroundColor: '#28a745', 
              color: 'white', 
              border: 'none', 
              borderRadius: '4px', 
              cursor: 'pointer',
              fontWeight: 'bold'
            }}
          >
            Envoyer un autre message
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <label htmlFor="nom" style={{ marginBottom: '8px', fontWeight: 'bold', color: '#3498db' }}>Nom :</label>
            <input 
              type="text" 
              id="nom" 
              name="nom" 
              value={formData.nom} 
              onChange={handleChange} 
              required 
              style={{ padding: '12px', borderRadius: '6px', border: '1px solid #ddd', fontSize: '1rem', backgroundColor: '#fdfdfd' }}
            />
          </div>

          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <label htmlFor="email" style={{ marginBottom: '8px', fontWeight: 'bold', color: '#3498db' }}>Email :</label>
            <input 
              type="email" 
              id="email" 
              name="email" 
              value={formData.email} 
              onChange={handleChange} 
              required 
              style={{ padding: '12px', borderRadius: '6px', border: '1px solid #ddd', fontSize: '1rem', backgroundColor: '#fdfdfd' }}
            />
          </div>

          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <label htmlFor="sujet" style={{ marginBottom: '8px', fontWeight: 'bold', color: '#3498db' }}>Sujet :</label>
            <input 
              type="text" 
              id="sujet" 
              name="sujet" 
              value={formData.sujet} 
              onChange={handleChange} 
              required 
              style={{ padding: '12px', borderRadius: '6px', border: '1px solid #ddd', fontSize: '1rem', backgroundColor: '#fdfdfd' }}
            />
          </div>

          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <label htmlFor="message" style={{ marginBottom: '8px', fontWeight: 'bold', color: '#3498db' }}>Message :</label>
            <textarea 
              id="message" 
              name="message" 
              rows="6" 
              value={formData.message} 
              onChange={handleChange} 
              required 
              style={{ padding: '12px', borderRadius: '6px', border: '1px solid #ddd', resize: 'vertical', fontSize: '1rem', backgroundColor: '#fdfdfd' }}
            ></textarea>
          </div>

          <button 
            type="submit" 
            style={{ 
              padding: '15px 20px', 
              backgroundColor: '#3498db', 
              color: 'white', 
              border: 'none', 
              borderRadius: '6px', 
              cursor: 'pointer', 
              fontWeight: 'bold',
              fontSize: '1.1rem',
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