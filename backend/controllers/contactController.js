const nodemailer = require('nodemailer');

exports.sendEmail = async (req, res) => {
    // On récupère les données envoyées par le formulaire React
    const { nom, email, message } = req.body;

    try {
        // 1. Configuration avec le port 587 (STARTTLS)
        const transporter = nodemailer.createTransport({
            host: 'smtp.gmail.com',
            port: 587, // On utilise la porte alternative de Gmail
            secure: false, // TRÈS IMPORTANT : Doit être sur 'false' pour le port 587
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS
            },
            tls: {
                rejectUnauthorized: false
            }
        });

        // 2. Préparation du contenu de l'e-mail que tu vas recevoir
        const mailOptions = {
            from: `"${nom}" <${email}>`, 
            to: process.env.EMAIL_USER, 
            subject: `Nouveau message de ${nom} - Trouve ton artisan`,
            text: `Tu as reçu un nouveau message depuis ton site.\n\nNom : ${nom}\nEmail : ${email}\n\nMessage :\n${message}`
        };

        // 3. Envoi effectif de l'e-mail
        await transporter.sendMail(mailOptions);

        // 4. Réponse envoyée au frontend (React) pour afficher un message de succès
        res.status(200).json({ message: "Votre message a été envoyé avec succès !" });
        
    } catch (error) {
        console.error("❌ Erreur lors de l'envoi de l'e-mail :", error);
        res.status(500).json({ message: "Erreur serveur lors de l'envoi" });
    }
};