const nodemailer = require('nodemailer');

exports.sendEmail = async (req, res) => {
    // On récupère les données envoyées par le formulaire React
    const { nom, email, message } = req.body;

    try {
        // 1. Configuration du "facteur" (le service d'envoi)
        // Ici on configure pour Gmail par défaut, très classique en développement
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.EMAIL_USER, // Ton adresse e-mail
                pass: process.env.EMAIL_PASS  // Ton mot de passe d'application
            }
        });

        // 2. Préparation du contenu de l'e-mail que tu vas recevoir
        const mailOptions = {
            from: email, 
            to: process.env.EMAIL_USER, // L'e-mail arrivera sur ta propre boîte
            subject: `Nouveau message de ${nom} - Trouve ton artisan`,
            text: `Tu as reçu un nouveau message depuis ton site.\n\nNom : ${nom}\nEmail : ${email}\n\nMessage :\n${message}`
        };

        // 3. Envoi effectif de l'e-mail
        await transporter.sendMail(mailOptions);

        // 4. Réponse envoyée au frontend (React) pour afficher un message de succès
        res.status(200).json({ message: "Votre message a été envoyé avec succès !" });
        
    } catch (error) {
        console.error("❌ Erreur lors de l'envoi de l'e-mail :", error);
        res.status(500).json({ message: "Erreur lors de l'envoi du message." });
    }
};