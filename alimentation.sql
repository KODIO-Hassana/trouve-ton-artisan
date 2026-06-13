SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";

/*!40101 SET NAMES utf8mb4 */;

-- Déchargement des données de la table `categorie`
INSERT INTO `categorie` (`id_categorie`, `nom_categorie`) VALUES
(1, 'Alimentation'),
(2, 'Bâtiment'),
(3, 'Services'),
(4, 'Fabrication');

-- Déchargement des données de la table `specialite`
INSERT INTO `specialite` (`id_specialite`, `nom_specialite`, `id_categorie`) VALUES
(1, 'Boucher', 1),
(2, 'Boulanger', 1),
(3, 'Chocolatier', 1),
(4, 'Traiteur', 1),
(5, 'Chauffagiste', 2),
(6, 'Electricien', 2),
(7, 'Menuisier', 2),
(8, 'Plombier', 2),
(9, 'Coiffeur', 3),
(10, 'Fleuriste', 3),
(11, 'Toiletteur', 3),
(12, 'Webdesign', 3),
(13, 'Bijoutier', 4),
(14, 'Couturier', 4),
(15, 'Ferronier', 4);

-- Déchargement des données de la table `artisan`
INSERT INTO `artisan` (`id_artisan`, `nom_artisan`, `note_artisan`, `ville_artisan`, `description_artisan`, `email_artisan`, `site_web_artisan`, `is_top_artisan`, `id_specialite`, `image`) VALUES
(1, 'Boucherie Dumont', 4.5, 'Lyon', 'Boucherie artisanale située au cœur de Lyon, proposant des viandes locales de grande qualité. Notre équipe vous conseille avec passion pour tous vos repas de fête ou du quotidien.', 'boucherie.dumond@gmail.com', NULL, 0, 1, '/img/boucherie.jpeg'),
(2, 'Au pain chaud', 4.8, 'Montélimar', 'Boulangerie traditionnelle incontournable à Montélimar. Nous préparons chaque jour des pains au levain naturel et des viennoiseries faites maison pour ravir vos papilles dès le petit matin.', 'aupainchaud@hotmail.com', NULL, 1, 2, '/img/boulangerie.jpg'),
(3, 'Chocolaterie Labbé', 4.9, 'Lyon', 'Artisan chocolatier créateur basé à Lyon. Venez découvrir nos pralinés fondants, nos ganaches intenses et nos tablettes grands crus élaborées sur place avec un savoir-faire unique.', 'chocolaterie-labbe@gmail.com', 'https://chocolaterie-labbe.fr', 1, 3, '/img/chocolaterie-labbe.jpg'),
(4, 'Traiteur Truchon', 4.1, 'Lyon', 'L\'excellence gastronomique pour tous vos événements lyonnais. Traiteur sur mesure, nous cuisinons des produits frais et de saison pour sublimer vos mariages, réceptions et séminaires.', 'contact@truchon-traiteur.fr', 'https://truchon-traiteur.fr', 0, 4, '/img/traiteur.jpeg'),
(5, 'Orville Salmons', 5, 'Evian', 'Expert chauffagiste intervenant sur tout le secteur d\'Evian. Nous assurons l\'installation, l\'entretien rigoureux et le dépannage rapide de vos chaudières et pompes à chaleur.', 'o-salmons@live.com', NULL, 1, 5, '/img/chauffagiste.jpg'),
(6, 'Mont Blanc Eléctricité', 4.5, 'Chamonix', 'Votre électricien de confiance à Chamonix. Spécialistes des installations en haute montagne, nous garantissons la mise aux normes et la sécurité absolue de vos réseaux électriques.', 'contact@mont-blanc-electricite.com', 'https://mont-blanc-electricite.com', 0, 6, '/img/electricien.jpeg'),
(7, 'Boutot & fils', 4.7, 'Bourg-en-bresse', 'Menuiserie familiale implantée à Bourg-en-Bresse depuis deux générations. Nous concevons vos meubles sur mesure en atelier et assurons une pose impeccable de vos aménagements bois.', 'boutot-menuiserie@gmail.com', 'https://boutot-menuiserie.com', 0, 7, '/img/menuisier.jpeg'),
(8, 'Vallis Bellemare', 4, 'Vienne', 'Artisan plombier réactif et disponible sur la région de Vienne. Qu\'il s\'agisse d\'une urgence fuite ou d\'une rénovation complète de salle de bain, nous vous garantissons un travail soigné.', 'v.bellemare@gmail.com', 'https://plomberie-bellemare.com', 0, 8, '/img/plombier.jpeg'),
(9, 'Claude Quinn', 4.2, 'Aix-les-bains', 'Artisan bijoutier créateur indépendant à Aix-les-Bains. Je dessine, façonne des bijoux uniques en or et en argent, et restaure avec minutie vos précieuses pièces de famille.', 'claude.quinn@gmail.com', NULL, 0, 13, '/img/bijoutier.jpeg'),
(10, 'Amitee Lécuyer', 4.5, 'Annecy', 'Couturière modéliste expérimentée installée à Annecy. Des retouches précises à la confection sur mesure de robes de mariée, j\'apporte un soin exceptionnel à chaque tombé de tissu.', 'a.amitee@hotmail.com', 'https://lecuyer-couture.com', 0, 14, '/img/couturier.jpeg'),
(11, 'Ernest Carignan', 5, 'Le Puy-en-Velay', 'Maître ferronnier d\'art au Puy-en-Velay. Création de portails, garde-corps et mobiliers en fer forgé, alliant les techniques traditionnelles de la forge au design contemporain.', 'e-carigan@hotmail.com', NULL, 0, 15, '/img/ferronnier.jpeg'),
(12, 'Royden Charbonneau', 3.8, 'Saint-Priest', 'Salon de coiffure convivial et moderne à Saint-Priest. Notre équipe de visagistes vous accueille pour sublimer vos cheveux avec des coupes tendances et des soins profonds adaptés.', 'r.charbonneau@gmail.com', NULL, 0, 9, '/img/coiffeur1.jpeg'),
(13, 'Leala Dennis', 3.8, 'Chambéry', 'Coiffeuse coloriste passionnée au centre de Chambéry. Je suis spécialisée dans les balayages naturels et les colorations douces pour un résultat lumineux qui respecte votre cuir chevelu.', 'l.dennos@hotmail.fr', 'https://coiffure-leala-chambery.fr', 0, 9, '/img/coiffeur2.jpeg'),
(14, 'C\'est sup\'hair', 4.1, 'Romans-sur-Isère', 'Salon de coiffure mixte et espace barbier situé à Romans-sur-Isère. Profitez d\'un véritable moment de détente et de conseils personnalisés entre les mains expertes de nos stylistes.', 'sup-hair@gmail.com', 'https://sup-hair.fr', 0, 9, '/img/coiffeur3.jpeg'),
(15, 'Le monde des fleurs', 4.6, 'Annonay', 'Artisan fleuriste passionné et créatif à Annonay. Compositions florales originales, bouquets de saison et décoration sur mesure pour illuminer tous vos événements spéciaux.', 'contact@le-monde-des-fleurs-annonay.fr', 'https://le-monde-des-fleurs-annonay.fr', 0, 10, '/img/fleuriste.jpeg'),
(16, 'Valérie Laderoute', 4.5, 'Valence', 'Salon de toilettage canin et félin professionnel à Valence. Je chouchoute vos compagnons à quatre pattes avec des produits doux, des coupes aux ciseaux et une grande dose de tendresse. ', 'v-laredoute@gmail.com', NULL, 0, 11, '/img/toiletteur.jpeg'),
(17, 'CM Graphisme', 4.4, 'Valence', 'Studio de webdesign et de création graphique basé à Valence. J\'accompagne les professionnels dans la création de identity visuelle et la conception de sites web esthétiques et performants.', 'contact@cm-graphisme.com', 'https://cm-graphisme.com', 0, 12, '/img/webdesign.jpeg');

COMMIT;