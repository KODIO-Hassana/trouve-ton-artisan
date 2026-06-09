// Importation de toutes les images
import imgBoucherie from '../assets/img/boucherie.jpeg';
import imgBoulangerie from '../assets/img/boulangerie.jpg';
import imgChocolaterie from '../assets/img/chocolaterie-labbe.jpg';
import imgTraiteur from '../assets/img/traiteur.jpeg';
import imgChauffagiste from '../assets/img/chauffagiste.jpg';
import imgElectricien from '../assets/img/electricien.jpeg';
import imgMenuisier from '../assets/img/menuisier.jpeg';
import imgPlombier from '../assets/img/plombier.jpeg';
import imgBijoutier from '../assets/img/bijoutier.jpeg';
import imgCouturier from '../assets/img/couturier.jpeg';
import imgFerronnier from '../assets/img/ferronnier.jpeg';
import imgCoiffeur1 from '../assets/img/coiffeur1.jpeg';
import imgCoiffeur2 from '../assets/img/coiffeur2.jpeg';
import imgCoiffeur3 from '../assets/img/coiffeur3.jpeg';
import imgFleuriste from '../assets/img/fleuriste.jpeg';
import imgToiletteur from '../assets/img/toiletteur.jpeg';
import imgWebdesign from '../assets/img/webdesign.jpeg';

export const donneesArtisans = [
    {
        id: 1,
        nom: "Boucherie Dumont",
        metier: "Boucher",
        ville: "Lyon",
        note: "★ 4.5/5",
        description: "Boucherie artisanale proposant des viandes locales de première qualité et un savoir-faire traditionnel pour des découpes parfaites.",
        email: "boucherie.dumond@gmail.com",
        site: "",
        top: false,
        image: imgBoucherie
    },
    {
        id: 2,
        nom: "Au pain chaud",
        metier: "Boulanger",
        ville: "Montélimar",
        note: "★ 4.8/5",
        description: "Boulangerie de quartier réputée pour ses pains au levain naturel cuits au feu de bois et ses viennoiseries pur beurre.",
        email: "aupainchaud@hotmail.com",
        site: "",
        top: true,
        image: imgBoulangerie
    },
    {
        id: 3,
        nom: "Chocolaterie Labbé",
        metier: "Chocolatier",
        ville: "Lyon",
        note: "★ 4.9/5",
        description: "Artisan chocolatier passionné depuis plus de 15 ans, je vous propose des créations uniques réalisées avec des fèves de cacao issues du commerce équitable.",
        email: "chocolaterie-labbe@gmail.com",
        site: "chocolaterie-labbe.fr",
        top: true,
        image: imgChocolaterie
    },
    {
        id: 4,
        nom: "Traiteur Truchon",
        metier: "Traiteur",
        ville: "Lyon",
        note: "★ 4.1/5",
        description: "Service traiteur sur mesure pour vos événements privés et professionnels, élaboré à partir de produits frais et de saison.",
        email: "contact@truchon-traiteur.fr",
        site: "truchon-traiteur.fr",
        top: false,
        image: imgTraiteur
    },
    {
        id: 5,
        nom: "Orville Salmons",
        metier: "Chauffagiste",
        ville: "Evian",
        note: "★ 5/5",
        description: "Installation, entretien et dépannage d'urgence de vos systèmes de chauffage et pompes à chaleur. Intervention rapide et certifiée.",
        email: "o-salmons@live.com",
        site: "",
        top: true,
        image: imgChauffagiste
    },
    {
        id: 6,
        nom: "Mont Blanc Eléctricité",
        metier: "Electricien",
        ville: "Chamonix",
        note: "★ 4.5/5",
        description: "Expert en remise aux normes électriques et installation de systèmes domotiques pour les particuliers et les professionnels de la vallée.",
        email: "contact@mont-blanc-electricite.com",
        site: "mont-blanc-electricite.com",
        top: false,
        image: imgElectricien
    },
    {
        id: 7,
        nom: "Boutot & fils",
        metier: "Menuisier",
        ville: "Bourg-en-bresse",
        note: "★ 4.7/5",
        description: "Menuiserie familiale spécialisée dans l'aménagement intérieur sur mesure, la pose de fenêtres et la création de meubles en bois local.",
        email: "boutot-menuiserie@gmail.com",
        site: "boutot-menuiserie.com",
        top: false,
        image: imgMenuisier
    },
    {
        id: 8,
        nom: "Vallis Bellemare",
        metier: "Plombier",
        ville: "Vienne",
        note: "★ 4.0/5",
        description: "Intervention rapide pour vos urgences plomberie 7j/7, recherche de fuites et conception complète de salles de bain.",
        email: "v.bellemare@gmail.com",
        site: "plomberie-bellemare.com",
        top: false,
        image: imgPlombier
    },
    {
        id: 9,
        nom: "Claude Quinn",
        metier: "Bijoutier",
        ville: "Aix-les-bains",
        note: "★ 4.2/5",
        description: "Création artisanale de bijoux sur mesure, réparation minutieuse et expertise en sertissage de pierres précieuses.",
        email: "claude.quinn@gmail.com",
        site: "",
        top: false,
        image: imgBijoutier
    },
    {
        id: 10,
        nom: "Amitee Lécuyer",
        metier: "Couturier",
        ville: "Annecy",
        note: "★ 4.5/5",
        description: "Atelier de couture proposant des retouches précises, la confection de vêtements sur mesure et la création de robes de mariée.",
        email: "a.amitee@hotmail.com",
        site: "lecuyer-couture.com",
        top: false,
        image: imgCouturier
    },
    {
        id: 11,
        nom: "Ernest Carignan",
        metier: "Ferronier",
        ville: "Le Puy-en-Velay",
        note: "★ 5.0/5",
        description: "Ferronnerie d'art et travail du métal sur mesure : conception de portails, garde-corps et restauration d'ouvrages anciens.",
        email: "e-carigan@hotmail.com",
        site: "",
        top: false,
        image: imgFerronnier
    },
    {
        id: 12,
        nom: "Royden Charbonneau",
        metier: "Coiffeur",
        ville: "Saint-Priest",
        note: "★ 3.8/5",
        description: "Salon de coiffure mixte proposant des coupes modernes, des soins profonds et une expertise coloriste pour sublimer votre visage.",
        email: "r.charbonneau@gmail.com",
        site: "",
        top: false,
        image: imgCoiffeur1
    },
    {
        id: 13,
        nom: "Leala Dennis",
        metier: "Coiffeur",
        ville: "Chambéry",
        note: "★ 3.8/5",
        description: "Salon éco-responsable spécialisé dans les colorations végétales et les soins naturels respectueux de vos cheveux et de l'environnement.",
        email: "l.dennos@hotmail.fr",
        site: "coiffure-leala-chambery.fr",
        top: false,
        image: imgCoiffeur2
    },
    {
        id: 14,
        nom: "C'est sup'hair",
        metier: "Coiffeur",
        ville: "Romans-sur-Isère",
        note: "★ 4.1/5",
        description: "Votre expert en transformations capillaires et coiffures événementielles, dans une ambiance chaleureuse et décontractée.",
        email: "sup-hair@gmail.com",
        site: "sup-hair.fr",
        top: false,
        image: imgCoiffeur3
    },
    {
        id: 15,
        nom: "Le monde des fleurs",
        metier: "Fleuriste",
        ville: "Annonay",
        note: "★ 4.6/5",
        description: "Artisan fleuriste proposant des compositions florales créatives, des bouquets de saison et la décoration complète de vos événements.",
        email: "contact@le-monde-des-fleurs-annonay.fr",
        site: "le-monde-des-fleurs-annonay.fr",
        top: false,
        image: imgFleuriste
    },
    {
        id: 16,
        nom: "Valérie Laderoute",
        metier: "Toiletteur",
        ville: "Valence",
        note: "★ 4.5/5",
        description: "Toilettage canin et félin tout en douceur, utilisant des produits naturels adaptés à la peau de vos compagnons à quatre pattes.",
        email: "v-laredoute@gmail.com",
        site: "",
        top: false,
        image: imgToiletteur
    },
    {
        id: 17,
        nom: "CM Graphisme",
        metier: "Webdesign",
        ville: "Valence",
        note: "★ 4.4/5",
        description: "Agence de création numérique spécialisée dans la conception d'identités visuelles percutantes et la réalisation de sites web sur mesure.",
        email: "contact@cm-graphisme.com",
        site: "cm-graphisme.com",
        top: false,
        image: imgWebdesign
    }
];