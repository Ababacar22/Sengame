// src/data/questions.js

export const quizzes = {
  
  // Clé de la catégorie: 'geographie'
  geographie: {
    title: "Géographie Sénégalaise",
    questions: [
      // Questions existantes
      {
        question: "Quelle est la capitale du Sénégal ?",
        options: [
          { text: "Saint-Louis", correct: false },
          { text: "Dakar", correct: true },
          { text: "Ziguinchor", correct: false },
          { text: "Touba", correct: false }
        ]
      },
      {
        question: "Comment s'appelle le lac célèbre pour sa couleur rose ?",
        options: [
          { text: "Le Lac Rose (Retba)", correct: true },
          { text: "Le Lac de Guiers", correct: false },
          { text: "Le Lac Tanma", correct: false },
          { text: "Le Lac Mbeubeusse", correct: false }
        ]
      },
      {
        question: "Quelle est la principale région naturelle du sud du Sénégal, séparée par la Gambie ?",
        options: [
          { text: "Le Fouta-Toro", correct: false },
          { text: "Le Ferlo", correct: false },
          { text: "La Casamance", correct: true },
          { text: "Le Sine-Saloum", correct: false }
        ]
      },
      // Nouvelles questions
      {
        question: "Quel fleuve forme la frontière nord du Sénégal avec la Mauritanie ?",
        options: [
          { text: "Le Fleuve Gambie", correct: false },
          { text: "Le Fleuve Sénégal", correct: true },
          { text: "Le Fleuve Casamance", correct: false },
          { text: "Le Fleuve Saloum", correct: false }
        ]
      },
      {
        question: "Quel est le point le plus occidental de l'Afrique continentale, situé à Dakar ?",
        options: [
          { text: "La Pointe des Almadies", correct: true },
          { text: "Le Cap Manuel", correct: false },
          { text: "Le Cap Skirring", correct: false },
          { text: "La Pointe de Sangomar", correct: false }
        ]
      },
      {
        question: "Quelle ville a été la première capitale de l'Afrique-Occidentale française (AOF) ?",
        options: [
          { text: "Dakar", correct: false },
          { text: "Gorée", correct: false },
          { text: "Rufisque", correct: false },
          { text: "Saint-Louis", correct: true }
        ]
      },
      {
        question: "Quel parc national, classé au patrimoine mondial de l'UNESCO, est le plus grand du Sénégal ?",
        options: [
          { text: "Le Parc National du Djoudj", correct: false },
          { text: "Le Parc National du Niokolo-Koba", correct: true },
          { text: "Le Parc National de la Langue de Barbarie", correct: false },
          { text: "Le Parc National du Delta du Saloum", correct: false }
        ]
      },
      {
        question: "Dans quelle région se trouve la Petite Côte, une importante zone touristique ?",
        options: [
          { text: "Région de Dakar", correct: false },
          { text: "Région de Ziguinchor", correct: false },
          { text: "Région de Thiès", correct: true },
          { text: "Région de Saint-Louis", correct: false }
        ]
      },
      {
        question: "Quelle île, face à Joal, est entièrement constituée de coquillages ?",
        options: [
          { text: "Île de Fadiouth", correct: true },
          { text: "Île de Gorée", correct: false },
          { text: "Île de Ngor", correct: false },
          { text: "Île de Karabane", correct: false }
        ]
      },
      {
        question: "Quelle grande ville est le centre du Mouridisme et une importante cité religieuse ?",
        options: [
          { text: "Tivaouane", correct: false },
          { text: "Kaolack", correct: false },
          { text: "Touba", correct: true },
          { text: "Médina Baye", correct: false }
        ]
      },
      {
        question: "Le Delta du Saloum, classé par l'UNESCO, est un écosystème de...",
        options: [
          { text: "Montagnes volcaniques", correct: false },
          { text: "Désert de dunes", correct: false },
          { text: "Forêt tropicale dense", correct: false },
          { text: "Mangroves et bolongs", correct: true }
        ]
      },
      {
        question: "Quel parc ornithologique est un sanctuaire majeur pour les oiseaux migrateurs ?",
        options: [
          { text: "Le Parc National du Djoudj", correct: true },
          { text: "Le Niokolo-Koba", correct: false },
          { text: "La Réserve de Bandia", correct: false },
          { text: "Le Parc de Hann", correct: false }
        ]
      },
      {
        question: "Quel pays n'a PAS de frontière terrestre avec le Sénégal ?",
        options: [
          { text: "La Gambie", correct: false },
          { text: "La Guinée", correct: false },
          { text: "Le Mali", correct: false },
          { text: "Le Nigeria", correct: true }
        ]
      },
      {
        question: "Comment s'appelle le climat de la majeure partie du nord du Sénégal ?",
        options: [
          { text: "Climat équatorial", correct: false },
          { text: "Climat sahélien (semi-aride)", correct: true },
          { text: "Climat tropical de mousson", correct: false },
          { text: "Climat méditerranéen", correct: false }
        ]
      },
      {
        question: "Quelle ville est le principal port arachidier du Sénégal ?",
        options: [
          { text: "Kaolack", correct: true },
          { text: "Ziguinchor", correct: false },
          { text: "Dakar", correct: false },
          { text: "Tambacounda", correct: false }
        ]
      },
      {
        question: "La 'Langue de Barbarie' est un banc de sable protégeant l'embouchure du fleuve Sénégal près de quelle ville ?",
        options: [
          { text: "Richard-Toll", correct: false },
          { text: "Podor", correct: false },
          { text: "Saint-Louis", correct: true },
          { text: "Matam", correct: false }
        ]
      },
      {
        question: "Quelle île, ancienne escale de l'Aéropostale, se trouve en Casamance ?",
        options: [
          { text: "Île de Karabane", correct: true },
          { text: "Île de Gorée", correct: false },
          { text: "Île de Fadiouth", correct: false },
          { text: "Île de Yoff", correct: false }
        ]
      },
      {
        question: "Quelle est la plus grande région administrative du Sénégal par sa superficie ?",
        options: [
          { text: "Région de Dakar", correct: false },
          { text: "Région de Tambacounda", correct: true },
          { text: "Région de Saint-Louis", correct: false },
          { text: "Région de Kédougou", correct: false }
        ]
      },
      {
        question: "Quel monument emblématique se trouve sur l'une des deux collines des Mamelles à Dakar ?",
        options: [
          { text: "La Porte du Troisième Millénaire", correct: false },
          { text: "Le Monument de la Renaissance Africaine", correct: true },
          { text: "La Mosquée de la Divinité", correct: false },
          { text: "L'Obélisque de la Place de la Nation", correct: false }
        ]
      },
      {
        question: "La Réserve de Faune du Ferlo est principalement dédiée à la protection de...",
        options: [
          { text: "L'Oryx algazelle", correct: true },
          { text: "Les éléphants", correct: false },
          { text: "Les chimpanzés", correct: false },
          { text: "Les lamantins", correct: false }
        ]
      },
      {
        question: "Quelle ville, près de la frontière malienne, est un carrefour commercial majeur ?",
        options: [
          { text: "Kolda", correct: false },
          { text: "Louga", correct: false },
          { text: "Kidira", correct: true },
          { text: "Kaffrine", correct: false }
        ]
      },
      {
        question: "Le 'pays Bassari', classé au patrimoine de l'UNESCO, se situe dans quelle région ?",
        options: [
          { text: "Région de Kédougou", correct: true },
          { text: "Région de Ziguinchor", correct: false },
          { text: "Région de Tambacounda", correct: false },
          { text: "Région de Kaolack", correct: false }
        ]
      },
      {
        question: "Quelle ville abrite la principale université du nord du Sénégal ?",
        options: [
          { text: "Saint-Louis (Université Gaston Berger)", correct: true },
          { text: "Richard-Toll", correct: false },
          { text: "Louga", correct: false },
          { text: "Matam", correct: false }
        ]
      },
      {
        question: "Quelle zone est réputée pour ses nombreux 'bolongs' (chenaux d'eau salée) ?",
        options: [
          { text: "Le Ferlo", correct: false },
          { text: "Le Delta du Saloum", correct: true },
          { text: "La Vallée du Fleuve Sénégal", correct: false },
          { text: "La presqu'île du Cap-Vert", correct: false }
        ]
      },
      {
        question: "Quel est le nom de la principale compagnie sucrière située à Richard-Toll ?",
        options: [
          { text: "Compagnie Sucrière Sénégalaise (CSS)", correct: true },
          { text: "Suneor", correct: false },
          { text: "Socacim", correct: false },
          { text: "Les Grands Moulins de Dakar", correct: false }
        ]
      },
      {
        question: "La 'Réserve de Bandia' est une réserve animalière privée proche de...",
        options: [
          { text: "Saly / Mbour", correct: true },
          { text: "Cap Skirring", correct: false },
          { text: "Saint-Louis", correct: false },
          { text: "Tambacounda", correct: false }
        ]
      },
      {
        question: "Quel est le nom du désert qui s'étend au nord de Saint-Louis ?",
        options: [
          { text: "Le Désert de Lompoul", correct: true },
          { text: "Le Sahara", correct: false },
          { text: "Le Ferlo", correct: false },
          { text: "Le Kalahari", correct: false }
        ]
      },
      {
        question: "Quelle est la seule région du Sénégal qui porte le nom de son chef-lieu et qui est aussi un département ?",
        options: [
          { text: "Dakar", correct: true },
          { text: "Thiès", correct: false },
          { text: "Kaolack", correct: false },
          { text: "Saint-Louis", correct: false }
        ]
      },
      {
        question: "Le gisement de gaz 'Grand Tortue/Ahmeyim' est partagé entre le Sénégal et quel autre pays ?",
        options: [
          { text: "La Gambie", correct: false },
          { text: "La Mauritanie", correct: true },
          { text: "La Guinée-Bissau", correct: false },
          { text: "Le Mali", correct: false }
        ]
      },
      {
        question: "Quel est le nom du nouvel aéroport international qui a remplacé L.S. Senghor (Yoff) ?",
        options: [
          { text: "Aéroport International Blaise Diagne (AIBD)", correct: true },
          { text: "Aéroport de Diass", correct: false },
          { text: "Aéroport International de Dakar", correct: false },
          { text: "Aéroport de la Petite Côte", correct: false }
        ]
      },
      {
        question: "Quelle est la principale culture d'exportation du Sénégal, historiquement ?",
        options: [
          { text: "Le Coton", correct: false },
          { text: "Le Riz", correct: false },
          { text: "L'Arachide", correct: true },
          { text: "Le Maïs", correct: false }
        ]
      },
      {
        question: "La 'Haute-Casamance' correspond administrativement à quelle région ?",
        options: [
          { text: "Région de Ziguinchor", correct: false },
          { text: "Région de Sédhiou", correct: false },
          { text: "Région de Kolda", correct: true },
          { text: "Région de Kédougou", correct: false }
        ]
      },
      {
        question: "Quel fleuve est enclavé à l'intérieur du Sénégal ?",
        options: [
          { text: "Le Fleuve Sénégal", correct: false },
          { text: "Le Fleuve Gambie", correct: true },
          { text: "Le Fleuve Niger", correct: false },
          { text: "Le Fleuve Saloum", correct: false }
        ]
      },
      {
        question: "Dans quelle région se trouve le 'Bassin Arachidier', cœur agricole du pays ?",
        options: [
          { text: "Région de Kaolack", correct: true },
          { text: "Région de Dakar", correct: false },
          { text: "Région de Matam", correct: false },
          { text: "Région de Ziguinchor", correct: false }
        ]
      },
      {
        question: "Quelle ville est connue pour sa grande mosquée et est le chef-lieu de la région de Louga ?",
        options: [
          { text: "Kébémer", correct: false },
          { text: "Dahra Djoloff", correct: false },
          { text: "Linguère", correct: false },
          { text: "Louga", correct: true }
        ]
      },
      {
        question: "Le 'Fouta-Toro' est une région historique et naturelle située le long de quel fleuve ?",
        options: [
          { text: "Le Fleuve Sénégal", correct: true },
          { text: "Le Fleuve Gambie", correct: false },
          { text: "Le Fleuve Saloum", correct: false },
          { text: "Le Fleuve Casamance", correct: false }
        ]
      },
      {
        question: "Quelle ville côtière, au nord de Dakar, est un important centre de pêche artisanale ?",
        options: [
          { text: "Rufisque", correct: false },
          { text: "Kayar", correct: true },
          { text: "Joal", correct: false },
          { text: "Popenguine", correct: false }
        ]
      },
      {
        question: "Combien de régions administratives compte le Sénégal (depuis 2008) ?",
        options: [
          { text: "10", correct: false },
          { text: "12", correct: false },
          { text: "14", correct: true },
          { text: "16", correct: false }
        ]
      },
      {
        question: "Quelle est la particularité géologique de la presqu'île du Cap-Vert ?",
        options: [
          { text: "C'est un ancien delta", correct: false },
          { text: "C'est un ensemble d'origine volcanique", correct: true },
          { text: "C'est une formation calcaire", correct: false },
          { text: "C'est une dune de sable fossilisée", correct: false }
        ]
      },
      {
        question: "Où se situe la 'Zone des Niayes', importante pour le maraîchage ?",
        options: [
          { text: "En Casamance", correct: false },
          { text: "Le long de la côte de Dakar à Saint-Louis", correct: true },
          { text: "Dans la vallée du fleuve Sénégal", correct: false },
          { text: "Autour de Tambacounda", correct: false }
        ]
      },
      {
        question: "Quelle est la principale ressource minière exploitée à Taïba, dans la région de Thiès ?",
        options: [
          { text: "L'Or", correct: false },
          { text: "Le Fer", correct: false },
          { text: "Le Phosphate", correct: true },
          { text: "Le Zircon", correct: false }
        ]
      },
      {
        question: "Quel affluent majeur du fleuve Sénégal forme une partie de la frontière avec le Mali ?",
        options: [
          { text: "La Falémé", correct: true },
          { text: "Le Saloum", correct: false },
          { text: "La Casamance", correct: false },
          { text: "Le Koulountou", correct: false }
        ]
      },
      {
        question: "La 'Somone' est une station balnéaire connue pour sa...",
        options: [
          { text: "Forêt de baobabs", correct: false },
          { text: "Lagune et réserve ornithologique", correct: true },
          { text: "Grande mosquée", correct: false },
          { text: "Falaise de surf", correct: false }
        ]
      },
      {
        question: "Quelle ville du Sénégal Oriental est réputée pour ses mines d'or ?",
        options: [
          { text: "Kédougou", correct: true },
          { text: "Tambacounda", correct: false },
          { text: "Bakel", correct: false },
          { text: "Matam", correct: false }
        ]
      },
      {
        question: "Comment s'appelle le vent sec et poussiéreux venu du Sahara qui souffle en saison sèche ?",
        options: [
          { text: "La Mousson", correct: false },
          { text: "L'Alizé", correct: false },
          { text: "L'Harmattan", correct: true },
          { text: "Le Sirocco", correct: false }
        ]
      },
      {
        question: "Quel est le seul pays qui partage une frontière avec la Gambie (outre le Sénégal) ?",
        options: [
          { text: "La Guinée", correct: false },
          { text: "Le Mali", correct: false },
          { text: "La Guinée-Bissau", correct: false },
          { text: "Aucun (elle est enclavée)", correct: true }
        ]
      },
      {
        question: "La 'Petite Côte' s'étend de la presqu'île du Cap-Vert jusqu'à...",
        options: [
          { text: "La frontière gambienne", correct: false },
          { text: "Le Delta du Saloum", correct: true },
          { text: "Saint-Louis", correct: false },
          { text: "Cap Skirring", correct: false }
        ]
      },
      {
        question: "Quel ancien comptoir colonial se trouve sur l'île de Gorée ?",
        options: [
          { text: "Le Castel", correct: true },
          { text: "Le Palais Présidentiel", correct: false },
          { text: "La Grande Mosquée", correct: false },
          { text: "Le Fort de Podor", correct: false }
        ]
      },
      {
        question: "Quelle est la principale ville de la région du Sine-Saloum ?",
        options: [
          { text: "Fatick", correct: false },
          { text: "Kaolack", correct: true },
          { text: "Foundiougne", correct: false },
          { text: "Passy", correct: false }
        ]
      },
      {
        question: "Le 'Ferlo' est une vaste zone...",
        options: [
          { text: "Sylvo-pastorale semi-désertique", correct: true },
          { text: "De mangroves denses", correct: false },
          { text: "De haute montagne", correct: false },
          { text: "Urbaine et industrielle", correct: false }
        ]
      },
      {
        question: "Quelle est la principale activité économique de la ville de Richard-Toll ?",
        options: [
          { text: "La pêche", correct: false },
          { text: "La culture de la canne à sucre", correct: true },
          { text: "L'extraction de l'or", correct: false },
          { text: "Le tourisme de luxe", correct: false }
        ]
      },
      {
        question: "La Casamance est connue pour ses rizières inondées, appelées...",
        options: [
          { text: "Bolongs", correct: false },
          { text: "Tannes", correct: false },
          { text: "Rizières en terrasses", correct: false },
          { text: "Rizières de mangrove", correct: true }
        ]
      },
      {
        question: "Quelle ville est la capitale de la région de la Casamance (région de Ziguinchor) ?",
        options: [
          { text: "Kolda", correct: false },
          { text: "Cap Skirring", correct: false },
          { text: "Ziguinchor", correct: true },
          { text: "Sédhiou", correct: false }
        ]
      },
      {
        question: "Quel est le nom du plus grand lac artificiel du Sénégal, qui alimente Dakar en eau ?",
        options: [
          { text: "Le Lac de Guiers", correct: true },
          { text: "Le Lac Rose", correct: false },
          { text: "Le Barrage de Diama", correct: false },
          { text: "Le Barrage de Manantali", correct: false }
        ]
      },
      {
        question: "Quelle région administrative a été créée en 2008 par démembrement de la région de Kolda ?",
        options: [
          { text: "Région de Tambacounda", correct: false },
          { text: "Région de Sédhiou", correct: true },
          { text: "Région de Kédougou", correct: false },
          { text: "Région de Matam", correct: false }
        ]
      },
      {
        question: "La 'Grande Côte' s'étend de Dakar jusqu'à...",
        options: [
          { text: "La frontière gambienne", correct: false },
          { text: "La Casamance", correct: false },
          { text: "La frontière mauritanienne (Saint-Louis)", correct: true },
          { text: "Le Delta du Saloum", correct: false }
        ]
      },
      {
        question: "Quel archipel de trois îles volcaniques, au large de Dakar, est une réserve naturelle ?",
        options: [
          { text: "Les îles de la Madeleine", correct: true },
          { text: "L'île de Gorée", correct: false },
          { text: "L'île de Ngor", correct: false },
          { text: "Les îles du Saloum", correct: false }
        ]
      },
      {
        question: "Quel est le nom du parc national situé sur la 'Petite Côte' ?",
        options: [
          { text: "Parc National de la Langue de Barbarie", correct: false },
          { text: "Parc National de Popenguine", correct: true },
          { text: "Parc National du Djoudj", correct: false },
          { text: "Parc National de Basse-Casamance", correct: false }
        ]
      },
      {
        question: "La 'Falémé', principal affluent du fleuve Sénégal, est riche en...",
        options: [
          { text: "Or et Fer", correct: true },
          { text: "Phosphate", correct: false },
          { text: "Pétrole", correct: false },
          { text: "Sel", correct: false }
        ]
      },
      {
        question: "Quel est le point culminant du Sénégal (environ 648m), près de la frontière guinéenne ?",
        options: [
          { text: "Le Mont Loura", correct: false },
          { text: "Le Mont Assirik", correct: false },
          { text: "Une colline sans nom près de Népen Diakha", correct: true },
          { text: "Les Mamelles", correct: false }
        ]
      },
      {
        question: "Le 'Cap Skirring', en Casamance, est réputé pour...",
        options: [
          { text: "Son port industriel", correct: false },
          { text: "Ses plages et son tourisme balnéaire", correct: true },
          { text: "Ses mines de zircon", correct: false },
          { text: "Son site de lancement de fusées", correct: false }
        ]
      },
      {
        question: "Quelle ville du Fouta est un important lieu de pèlerinage pour les Tidianes ?",
        options: [
          { text: "Podor", correct: false },
          { text: "Matam", correct: true },
          { text: "Tivaouane", correct: false },
          { text: "Kanel", correct: false }
        ]
      },
      {
        question: "Le 'Tanne' est un terme géographie désignant...",
        options: [
          { text: "Une forêt dense", correct: false },
          { text: "Une zone de mangrove", correct: false },
          { text: "Une étendue de terre salée, nue, inondable", correct: true },
          { text: "Une colline de calcaire", correct: false }
        ]
      },
      {
        question: "Quelle ville historique, près de la frontière gambienne, était la capitale du royaume du Saloum ?",
        options: [
          { text: "Kahone", correct: true },
          { text: "Kaolack", correct: false },
          { text: "Foundiougne", correct: false },
          { text: "Nioro du Rip", correct: false }
        ]
      },
      {
        question: "Le 'Lac Tanma' est un lac salé situé dans la région de...",
        options: [
          { text: "Dakar", correct: false },
          { text: "Thiès", correct: true },
          { text: "Saint-Louis", correct: false },
          { text: "Kolda", correct: false }
        ]
      },
      {
        question: "Quelle est la principale menace écologique pour la 'Langue de Barbarie' ?",
        options: [
          { text: "La désertification", correct: false },
          { text: "L'érosion côtière et la montée des eaux", correct: true },
          { text: "Les feux de brousse", correct: false },
          { text: "La pollution industrielle", correct: false }
        ]
      },
      {
        question: "Quelle région est considérée comme le 'grenier à riz' du Sénégal ?",
        options: [
          { text: "La Vallée du Fleuve Sénégal (Walo)", correct: true },
          { text: "La Casamance", correct: false },
          { text: "Le Sine-Saloum", correct: false },
          { text: "Le Ferlo", correct: false }
        ]
      },
      {
        question: "Quelle ville, ancienne escale sur la route de l'or, se trouve à l'extrême est du pays ?",
        options: [
          { text: "Kidira", correct: false },
          { text: "Bakel", correct: true },
          { text: "Kédougou", correct: false },
          { text: "Goudiry", correct: false }
        ]
      },
      {
        question: "Les 'Mamelles' de Dakar sont...",
        options: [
          { text: "Des marchés aux poissons", correct: false },
          { text: "Deux collines volcaniques", correct: true },
          { text: "Des îles jumelles", correct: false },
          { text: "Des forts coloniaux", correct: false }
        ]
      },
      {
        question: "Quel fleuve prend sa source dans le Fouta-Djalon et se jette dans l'Atlantique en Casamance ?",
        options: [
          { text: "Le Fleuve Casamance", correct: true },
          { text: "Le Fleuve Gambie", correct: false },
          { text: "Le Fleuve Sénégal", correct: false },
          { text: "Le Fleuve Saloum", correct: false }
        ]
      },
      {
        question: "Où se trouve le 'Parc National de la Basse-Casamance', actuellement fermé ?",
        options: [
          { text: "Près de Ziguinchor", correct: false },
          { text: "Près de Cap Skirring et Oussouye", correct: true },
          { text: "Près de Kolda", correct: false },
          { text: "Près de Sédhiou", correct: false }
        ]
      },
      {
        question: "Quelle ville est célèbre pour son 'Pélerinage Marial' annuel ?",
        options: [
          { text: "Popenguine", correct: true },
          { text: "Fadiouth", correct: false },
          { text: "Gorée", correct: false },
          { text: "Dakar", correct: false }
        ]
      }

    ]
  },

  // Clé de la catégorie: 'culture'
  culture: {
    title: "Culture & Gastronomie",
    questions: [
      // Questions existantes
      {
        question: "Quel plat est considéré comme le plat national du Sénégal ?",
        options: [
          { text: "Le Yassa", correct: false },
          { text: "Le Mafé", correct: false },
          { text: "Le Thiéboudienne", correct: true },
          { text: "Le Dibité", correct: false }
        ]
      },
      {
        question: "Quel instrument est au cœur de la musique Mbalax, popularisée par Youssou N'Dour ?",
        options: [
          { text: "La Kora", correct: false },
          { text: "Le Sabar (percussion)", correct: true },
          { text: "Le Balafon", correct: false },
          { text: "Le Djembé", correct: false }
        ]
      },
      // Nouvelles questions
      {
        question: "Quel plat est une sauce onctueuse à base de pâte d'arachide ?",
        options: [
          { text: "Le Yassa", correct: false },
          { text: "Le Mafé", correct: true },
          { text: "La Soupe Kandia", correct: false },
          { text: "Le Thiou", correct: false }
        ]
      },
      {
        question: "Quel plat est à base d'oignons caramélisés et de moutarde, souvent servi avec du poulet ?",
        options: [
          { text: "Le Poulet Yassa", correct: true },
          { text: "Le Poulet Mafé", correct: false },
          { text: "Le Dibité", correct: false },
          { text: "Le Kaldou", correct: false }
        ]
      },
      {
        question: "Comment appelle-t-on l'hospitalité légendaire au Sénégal ?",
        options: [
          { text: "La Teranga", correct: true },
          { text: "Le Jom", correct: false },
          { text: "L'Ubuntu", correct: false },
          { text: "L'Akwaba", correct: false }
        ]
      },
      {
        question: "Quelle boisson populaire est faite à base de fleurs d'hibiscus séchées ?",
        options: [
          { text: "Le Bouye", correct: false },
          { text: "Le Ditakh", correct: false },
          { text: "Le Bissap", correct: true },
          { text: "Le Gnamakoudji", correct: false }
        ]
      },
      {
        question: "Quel est le nom de la lutte traditionnelle sénégalaise ?",
        options: [
          { text: "Le Laamb", correct: true },
          { text: "Le Evala", correct: false },
          { text: "Le Donga", correct: false },
          { text: "Le Nguni", correct: false }
        ]
      },
      {
        question: "Quel instrument à cordes, semblable à une harpe, est typique des griots mandingues ?",
        options: [
          { text: "Le Xalam", correct: false },
          { text: "Le Balafon", correct: false },
          { text: "Le Hoddu", correct: false },
          { text: "La Kora", correct: true }
        ]
      },
      {
        question: "Comment s'appelle le cinéaste souvent considéré comme le 'père du cinéma africain' ?",
        options: [
          { text: "Ousmane Sembène", correct: true },
          { text: "Djibril Diop Mambéty", correct: false },
          { text: "Safi Faye", correct: false },
          { text: "Mati Diop", correct: false }
        ]
      },
      {
        question: "Quelle langue locale est la plus parlée (lingua franca) au Sénégal ?",
        options: [
          { text: "Le Pulaar", correct: false },
          { text: "Le Wolof", correct: true },
          { text: "Le Sérère", correct: false },
          { text: "Le Diola", correct: false }
        ]
      },
      {
        question: "Quel sculpteur sénégalais de renommée mondiale est connu pour ses œuvres monumentales ?",
        options: [
          { text: "Papa Ibra Tall", correct: false },
          { text: "Iba N'Diaye", correct: false },
          { text: "Ousmane Sow", correct: true },
          { text: "Souleymane Keita", correct: false }
        ]
      },
      {
        question: "Le 'Bouye' est une boisson lactée préparée à partir du fruit de quel arbre emblématique ?",
        options: [
          { text: "Le Manguier", correct: false },
          { text: "Le Palmier", correct: false },
          { text: "Le Baobab", correct: true },
          { text: "Le Fromager", correct: false }
        ]
      },
      {
        question: "Comment s'appelle le thé à la menthe servi en trois étapes (amère, équilibrée, sucrée) ?",
        options: [
          { text: "Le Café Touba", correct: false },
          { text: "L'Ataya", correct: true },
          { text: "Le Kinkeliba", correct: false },
          { text: "Le Bissap", correct: false }
        ]
      },
      {
        question: "Quel est le nom du café épicé (poivre de Selim) associé à la confrérie Mouride ?",
        options: [
          { text: "Café Touba", correct: true },
          { text: "Café Nioro", correct: false },
          { text: "Café Crème", correct: false },
          { text: "Café Mandingue", correct: false }
        ]
      },
      {
        question: "Quel festival international de jazz se tient chaque année à Saint-Louis ?",
        options: [
          { text: "Dakar Jazz Festival", correct: false },
          { text: "Saint-Louis Jazz Festival", correct: true },
          { text: "Africa Jazz", correct: false },
          { text: "Teranga Jazz", correct: false }
        ]
      },
      {
        question: "La 'Biennale de Dakar', ou Dak'Art, est le plus grand événement africain dédié à...",
        options: [
          { text: "La musique traditionnelle", correct: false },
          { text: "Le cinéma", correct: false },
          { text: "L'art contemporain", correct: true },
          { text: "La gastronomie", correct: false }
        ]
      },
      {
        question: "Quel roman de Mariama Bâ est une œuvre majeure de la littérature africaine féministe ?",
        options: [
          { text: "Une si longue lettre", correct: true },
          { text: "Le Baobab fou", correct: false },
          { text: "Vol de nuit", correct: false },
          { text: "L'Enfant noir", correct: false }
        ]
      },
      {
        question: "Comment s'appelle le grand vêtement ample et brodé porté par les hommes et les femmes ?",
        options: [
          { text: "Le Kente", correct: false },
          { text: "Le Boubou", correct: true },
          { text: "Le Pagne", correct: false },
          { text: "La Djellaba", correct: false }
        ]
      },
      {
        question: "Qui est le réalisateur du film culte 'Touki Bouki' (1973) ?",
        options: [
          { text: "Ousmane Sembène", correct: false },
          { text: "Djibril Diop Mambéty", correct: true },
          { text: "Safi Faye", correct: false },
          { text: "Moussa Sène Absa", correct: false }
        ]
      },
      {
        question: "Quel est le nom de l'infusion à base de feuilles de Kinkeliba, souvent bue au petit-déjeuner ?",
        options: [
          { text: "Le Kinkeliba", correct: true },
          { text: "Le Bissap", correct: false },
          { text: "L'Ataya", correct: false },
          { text: "Le Bouye", correct: false }
        ]
      },
      {
        question: "Quel groupe musical des années 70, mélangeant rythmes afro-cubains et Mbalax, est redevenu célèbre mondialement ?",
        options: [
          { text: "Orchestra Baobab", correct: true },
          { text: "Touré Kunda", correct: false },
          { text: "Xalam", correct: false },
          { text: "Super Diamono", correct: false }
        ]
      },
      {
        question: "Quelle est la principale langue parlée en Casamance (hors Wolof et Français) ?",
        options: [
          { text: "Le Diola (Joola)", correct: true },
          { text: "Le Sérère", correct: false },
          { text: "Le Pulaar", correct: false },
          { text: "Le Soninké", correct: false }
        ]
      },
      {
        question: "Comment s'appelle le 'griot' ou 'conteur' en Afrique de l'Ouest ?",
        options: [
          { text: "Un Marabout", correct: false },
          { text: "Un Griot", correct: true },
          { text: "Un Laman", correct: false },
          { text: "Un Damel", correct: false }
        ]
      },
      {
        question: "L'équipe nationale de football du Sénégal est surnommée...",
        options: [
          { text: "Les Éléphants", correct: false },
          { text: "Les Lions de la Teranga", correct: true },
          { text: "Les Aigles de Carthage", correct: false },
          { text: "Les Super Eagles", correct: false }
        ]
      },
      {
        question: "En quelle année le Sénégal a-t-il remporté sa première Coupe d'Afrique des Nations (CAN) ?",
        options: [
          { text: "2002", correct: false },
          { text: "2019", correct: false },
          { text: "2022 (jouée en 2022)", correct: true },
          { text: "1998", correct: false }
        ]
      },
      {
        question: "Quel plat est une variante du Thiéboudienne mais de couleur blanche (sans tomate concentrée) ?",
        options: [
          { text: "Thiébou Yapp", correct: false },
          { text: "Thiébou Kétiakh", correct: false },
          { text: "Thiébou Dieune Penda", correct: false },
          { text: "Thiébou Dieune Weekh", correct: true }
        ]
      },
      {
        question: "Le 'Domoda' est un ragoût dont l'ingrédient principal est...",
        options: [
          { text: "La tomate et la farine", correct: true },
          { text: "Le gombo", correct: false },
          { text: "L'arachide", correct: false },
          { text: "Les feuilles de manioc", correct: false }
        ]
      },
      {
        question: "Quel joueur de football sénégalais a été classé 2ème au Ballon d'Or 2022 ?",
        options: [
          { text: "El-Hadji Diouf", correct: false },
          { text: "Sadio Mané", correct: true },
          { text: "Kalidou Koulibaly", correct: false },
          { text: "Édouard Mendy", correct: false }
        ]
      },
      {
        question: "Quelle est la particularité des 'masques' dans la culture Diola en Casamance ?",
        options: [
          { text: "Ils sont portés uniquement par les femmes", correct: false },
          { text: "Ils sont invisibles et ne sont qu'évoqués", correct: false },
          { text: "Ils représentent des esprits de la forêt (ex: Kumpo)", correct: true },
          { text: "Ils sont faits uniquement en or", correct: false }
        ]
      },
      {
        question: "Le 'Fanal' est une fête de fin d'année spectaculaire avec des lampions, typique de quelle ville ?",
        options: [
          { text: "Saint-Louis", correct: true },
          { text: "Dakar", correct: false },
          { text: "Ziguinchor", correct: false },
          { text: "Kaolack", correct: false }
        ]
      },
      {
        question: "Quel romancier sénégalais a écrit 'L'Aventure ambiguë' ?",
        options: [
          { text: "Cheikh Hamidou Kane", correct: true },
          { text: "Ousmane Sembène", correct: false },
          { text: "Boubacar Boris Diop", correct: false },
          { text: "Mohamed Mbougar Sarr", correct: false }
        ]
      },
      {
        question: "En 2021, quel auteur sénégalais a remporté le prestigieux Prix Goncourt ?",
        options: [
          { text: "Mohamed Mbougar Sarr", correct: true },
          { text: "David Diop", correct: false },
          { text: "Fatou Diome", correct: false },
          { text: "Ken Bugul", correct: false }
        ]
      },
      {
        question: "Comment s'appelle le plat à base de mil, souvent servi avec du lait caillé (sow) ?",
        options: [
          { text: "Le Thiéré (Couscous)", correct: true },
          { text: "Le Fondé", correct: false },
          { text: "Le Rouy", correct: false },
          { text: "Le Lakh", correct: false }
        ]
      },
      {
        question: "Le 'Simb', ou 'Jeu du Faux Lion', est une performance culturelle de quel groupe ethnique ?",
        options: [
          { text: "Les Lébous", correct: true },
          { text: "Les Peuls", correct: false },
          { text: "Les Diolas", correct: false },
          { text: "Les Bassaris", correct: false }
        ]
      },
      {
        question: "Quel groupe musical, fondé par les frères Touré, a popularisé la musique sénégalaise en France dans les années 80 ?",
        options: [
          { text: "Xalam", correct: false },
          { text: "Touré Kunda", correct: true },
          { text: "Orchestra Baobab", correct: false },
          { text: "Super Diamono", correct: false }
        ]
      },
      {
        question: "Quel type de tissu, souvent coloré et à motifs, est très populaire en Afrique de l'Ouest ?",
        options: [
          { text: "Le Wax", correct: true },
          { text: "Le Cachemire", correct: false },
          { text: "Le Tweed", correct: false },
          { text: "Le Denim", correct: false }
        ]
      },
      {
        question: "Quel artiste est le chanteur principal du groupe Super Diamono de la Gueule Tapée ?",
        options: [
          { text: "Ismaël Lô", correct: false },
          { text: "Omar Pène", correct: true },
          { text: "Baaba Maal", correct: false },
          { text: "Thione Seck", correct: false }
        ]
      },
      {
        question: "Quel est l'ingrédient principal du 'Ngalax', un dessert souvent préparé pour Pâques ?",
        options: [
          { text: "Le mil et la pâte d'arachide", correct: true },
          { text: "Le riz et le lait de coco", correct: false },
          { text: "Le maïs et le gombo", correct: false },
          { text: "Le manioc et le sucre", correct: false }
        ]
      },
      {
        question: "Le 'FESMAN' (Festival Mondial des Arts Nègres), initié par Senghor, a eu lieu pour la première fois en...",
        options: [
          { text: "1960", correct: false },
          { text: "1966", correct: true },
          { text: "1974", correct: false },
          { text: "1980", correct: false }
        ]
      },
      {
        question: "Quelle romancière a écrit 'Le Ventre de l'Atlantique' ?",
        options: [
          { text: "Aminata Sow Fall", correct: false },
          { text: "Mariama Bâ", correct: false },
          { text: "Fatou Diome", correct: true },
          { text: "Ken Bugul", correct: false }
        ]
      },
      {
        question: "Le 'Kumpo', le 'Niasse' et le 'Samay' sont des masques sacrés de quelle région ?",
        options: [
          { text: "Le Fouta-Toro", correct: false },
          { text: "Le pays Bassari", correct: false },
          { text: "La Casamance (culture Diola)", correct: true },
          { text: "Le Sine-Saloum", correct: false }
        ]
      },
      {
        question: "Quel instrument, semblable à un luth à 4 ou 5 cordes, est joué par les griots Wolofs et Peuls ?",
        options: [
          { text: "Le Xalam", correct: true },
          { text: "La Kora", correct: false },
          { text: "Le Balafon", correct: false },
          { text: "Le Tama (Tam-tam d'aisselle)", correct: false }
        ]
      },
      {
        question: "Quel est le surnom de l'artiste-musicien Baaba Maal, originaire de Podor ?",
        options: [
          { text: "Le Roi du Mbalax", correct: false },
          { text: "La Voix du Fouta", correct: true },
          { text: "Le Griot d'Or", correct: false },
          { text: "Le Prince du Saloum", correct: false }
        ]
      },
      {
        question: "Comment s'appelle le plat de poisson braisé, souvent servi avec une sauce 'verte' épicée ?",
        options: [
          { text: "Le Dibité", correct: false },
          { text: "Le Poisson Yassa", correct: false },
          { text: "Le Thiof à la braise", correct: true },
          { text: "Le Kaldou", correct: false }
        ]
      },
      {
        question: "Quelle est la principale confrérie soufie au Sénégal en termes de nombre d'adeptes ?",
        options: [
          { text: "La Tidjaniya", correct: true },
          { text: "Le Mouridisme", correct: false },
          { text: "La Qadiriyya", correct: false },
          { text: "La Layène", correct: false }
        ]
      },
      {
        question: "Qui a marqué le but en or qui a qualifié le Sénégal pour les quarts de finale de la Coupe du Monde 2002 ?",
        options: [
          { text: "El Hadji Diouf", correct: false },
          { text: "Henri Camara", correct: true },
          { text: "Papa Bouba Diop", correct: false },
          { text: "Salif Diao", correct: false }
        ]
      },
      {
        question: "Quel écrivain sénégalais a publié 'Les Contes d'Amadou Koumba' ?",
        options: [
          { text: "Léopold Sédar Senghor", correct: false },
          { text: "Ousmane Sembène", correct: false },
          { text: "Birago Diop", correct: true },
          { text: "Cheikh Anta Diop", correct: false }
        ]
      },
      {
        question: "La 'Calebasse' est un récipient fabriqué à partir de...",
        options: [
          { text: "Terre cuite", correct: false },
          { text: "L'écorce du Baobab", correct: false },
          { text: "Une courge séchée", correct: true },
          { text: "Bois de rônier", correct: false }
        ]
      },
      {
        question: "Quel est le nom du plat à base de gombo (okra) très populaire ?",
        options: [
          { text: "La Soupe Kandia", correct: true },
          { text: "Le Mafé", correct: false },
          { text: "Le Ndambé", correct: false },
          { text: "Le Caldou", correct: false }
        ]
      },
      {
        question: "Qui est la première femme cinéaste d'Afrique subsaharienne, réalisatrice de 'Kaddu Beykat' (Lettre paysanne) ?",
        options: [
          { text: "Mati Diop", correct: false },
          { text: "Mariama Bâ", correct: false },
          { text: "Safi Faye", correct: true },
          { text: "Aminata Sow Fall", correct: false }
        ]
      },
      {
        question: "Le 'Ndawrabine' est un vêtement traditionnel porté par...",
        options: [
          { text: "Les lutteurs", correct: false },
          { text: "Les jeunes femmes Signares", correct: true },
          { text: "Les griots", correct: false },
          { text: "Les chefs religieux", correct: false }
        ]
      },
      {
        question: "Quelle romancière a écrit sous le pseudonyme de 'Ken Bugul', qui signifie 'personne n'en veut' en Wolof ?",
        options: [
          { text: "Mariama Bâ", correct: false },
          { text: "Aminata Sow Fall", correct: false },
          { text: "Mariètou Mbaye Biléoma", correct: true },
          { text: "Fatou Diome", correct: false }
        ]
      },
      {
        question: "Quel est le nom du 'tam-tam d'aisselle' dont la hauteur de son peut être changée par pression ?",
        options: [
          { text: "Le Sabar", correct: false },
          { text: "Le Tama", correct: true },
          { text: "Le Djembé", correct: false },
          { text: "Le Balafon", correct: false }
        ]
      },
      {
        question: "Quel film d'Ousmane Sembène, critiquant la bureaucratie post-coloniale, est basé sur un mandat postal ?",
        options: [
          { text: "La Noire de...", correct: false },
          { text: "Ceddo", correct: false },
          { text: "Mandabi (Le Mandat)", correct: true },
          { text: "Moolaadé", correct: false }
        ]
      },
      {
        question: "Quel plat est un ragoût de haricots niébé, souvent mangé au petit-déjeuner avec du pain ?",
        options: [
          { text: "Le Ndambé", correct: true },
          { text: "Le Thiou", correct: false },
          { text: "Le Fondé", correct: false },
          { text: "Le Yassa", correct: false }
        ]
      },
      {
        question: "Comment s'appelle l'art de la peinture sous verre, très populaire au Sénégal ?",
        options: [
          { text: "Le Fixé sous verre", correct: true },
          { text: "Le Bogolan", correct: false },
          { text: "Le Batik", correct: false },
          { text: "La Fresque", correct: false }
        ]
      },
      {
        question: "Quel romancier a écrit 'La Grève des bàttu', qui critique la mendicité instrumentalisée ?",
        options: [
          { text: "Mariama Bâ", correct: false },
          { text: "Aminata Sow Fall", correct: true },
          { text: "Ousmane Sembène", correct: false },
          { text: "Ken Bugul", correct: false }
        ]
      },
      {
        question: "Le 'Caldou' (ou 'Kaldou') est un plat de poisson typique de quelle région ?",
        options: [
          { text: "De Saint-Louis", correct: false },
          { text: "Du Fouta", correct: false },
          { text: "De la Casamance", correct: true },
          { text: "De Dakar", correct: false }
        ]
      },
      {
        question: "Quel chanteur, ancien membre du Super Diamono, a mené une carrière solo réussie avec des tubes comme 'Jamm' ?",
        options: [
          { text: "Omar Pène", correct: false },
          { text: "Ismaël Lô", correct: true },
          { text: "Baaba Maal", correct: false },
          { text: "Youssou N'Dour", correct: false }
        ]
      },
      {
        question: "Quelle est la particularité du Lakh, une bouillie de mil ?",
        options: [
          { text: "Elle est servie salée avec de la viande", correct: false },
          { text: "Elle est servie sucrée avec du lait caillé (Sow)", correct: true },
          { text: "Elle est cuite à la vapeur", correct: false },
          { text: "Elle est faite à base de maïs", correct: false }
        ]
      },
      {
        question: "Qui est l'architecte du Monument de la Renaissance Africaine ?",
        options: [
          { text: "Pierre Goudiaby Atepa", correct: true },
          { text: "Ousmane Sow", correct: false },
          { text: "Safi Faye", correct: false },
          { text: "Un architecte nord-coréen", correct: false }
        ]
      },
      {

        question: "Quel film de Mati Diop, Grande Prix à Cannes, se déroule dans la banlieue de Dakar ?",
        options: [
          { text: "Atlantique", correct: true },
          { text: "Mille Soleils", correct: false },
          { text: "Félicité", correct: false },
          { text: "Touki Bouki", correct: false }
        ]
      },
      {
        question: "Le 'Didadi' est un rythme de danse et de musique originaire de quelle région d'Afrique de l'Ouest ?",
        options: [
          { text: "Du Mali (région de Ségou)", correct: true },
          { text: "De la Casamance", correct: false },
          { text: "Du Nigeria", correct: false },
          { text: "Du Fouta-Toro", correct: false }
        ]
      },
      {
        question: "Comment s'appelle le plat de riz et de viande (ou poisson) sans tomate, 'riz blanc' ?",
        options: [
          { text: "Thiébou Dieune Weekh", correct: true },
          { text: "Thiébou Yapp", correct: false },
          { text: "Yassa", correct: false },
          { text: "Mafé", correct: false }
        ]
      },
      {
        question: "Quel est le nom du plat à base de niébés (haricots) et de patates douces ?",
        options: [
          { text: "Le Ndambé", correct: true },
          { text: "Le Bassi-Salté", correct: false },
          { text: "Le Thiou", correct: false },
          { text: "Le Fondé", correct: false }
        ]
      },
      {
        question: "Quel festival de cinéma est organisé à Dakar, en hommage au 'père du cinéma africain' ?",
        options: [
          { text: "Le FESPACO (se tient à Ouaga)", correct: false },
          { text: "Les Journées Cinématographiques de Carthage (JCC)", correct: false },
          { text: "Le Festival Sembène", correct: true },
          { text: "Dak'Art", correct: false }
        ]
      },
      {
        question: "Le 'Tassou' est une forme de...",
        options: [
          { text: "Poésie chantée/parlée rapide", correct: true },
          { text: "Lutte traditionnelle", correct: false },
          { text: "Tissage de pagnes", correct: false },
          { text: "Plat à base de mil", correct: false }
        ]
      },
      {
        question: "Quel musicien est le fondateur du groupe 'Dandé Lénol' (La Voix du Peuple) ?",
        options: [
          { text: "Youssou N'Dour", correct: false },
          { text: "Omar Pène", correct: false },
          { text: "Baaba Maal", correct: true },
          { text: "Ismaël Lô", correct: false }
        ]
      },
      {
        question: "Quel est le nom du ragoût de viande ou poisson mijoté avec des légumes ?",
        options: [
          { text: "Le Thiou", correct: true },
          { text: "Le Yassa", correct: false },
          { text: "Le Mafé", correct: false },
          { text: "Le Caldou", correct: false }
        ]
      },
      {
        question: "Quel animal est au centre des 'Contes d'Amadou Koumba' de Birago Diop ?",
        options: [
          { text: "Le lion (Gayo)", correct: false },
          { text: "L'hyène (Bouki)", correct: false },
          { text: "Le lièvre (Leuk)", correct: true },
          { text: "Le singe", correct: false }
        ]
      },
      {
        question: "Le 'Gàmou' (ou Maouloud) est une grande fête religieuse commémorant...",
        options: [
          { text: "La naissance du Prophète Mohamed (PSL)", correct: true },
          { text: "Le départ en exil de Cheikh A. Bamba", correct: false },
          { text: "La fin du Ramadan", correct: false },
          { text: "Le pèlerinage à La Mecque", correct: false }
        ]
      },
      {
        question: "Quel est le nom du couscous de mil, plat de fête souvent servi lors du 'Tamkharit' (Nouvel An Musulman) ?",
        options: [
          { text: "Le Thiéré (Bassi-Salté)", correct: true },
          { text: "Le Lakh", correct: false },
          { text: "Le Fondé", correct: false },
          { text: "Le Ngalax", correct: false }
        ]
      },
      {
        question: "Quel chanteur de Mbalax, connu pour sa voix puissante, était le leader du groupe 'Lemzo Diamono' ?",
        options: [
          { text: "Alioune Mbaye Nder", correct: true },
          { text: "Thione Seck", correct: false },
          { text: "Fallou Dieng", correct: false },
          { text: "Pape Diouf", correct: false }
        ]
      },
      {
        question: "Le 'Grand Magal' de Touba commémore...",
        options: [
          { text: "La naissance de Cheikh Amadou Bamba", correct: false },
          { text: "Le départ en exil de Cheikh Amadou Bamba", correct: true },
          { text: "Son retour d'exil", correct: false },
          { text: "La fondation de Touba", correct: false }
        ]
      },
      {
        question: "Quelle romancière a écrit 'La Grève des bàttu', qui critique la mendicité instrumentalisée ?",
        options: [
          { text: "Mariama Bâ", correct: false },
          { text: "Aminata Sow Fall", correct: true },
          { text: "Ousmane Sembène", correct: false },
          { text: "Ken Bugul", correct: false }
        ]
      }

    ]
  },
  
  // Clé de la catégorie: 'histoire'
  histoire: {
    title: "Histoire & Personnalités",
    questions: [
      // Questions existantes
      {
        question: "En quelle année le Sénégal a-t-il obtenu son indépendance de la France ?",
        options: [
          { text: "1958", correct: false },
          { text: "1962", correct: false },
          { text: "1960", correct: true },
          { text: "1955", correct: false }
        ]
      },
      {
        question: "Comment s'appelle l'île symbole de la traite négrière, située au large de Dakar ?",
        options: [
          { text: "Île de Gorée", correct: true },
          { text: "Île de Ngor", correct: false },
          { text: "Île de la Madeleine", correct: false },
          { text: "Île de Fadiouth", correct: false }
        ]
      },
      {
        question: "Qui fut le premier président de la République du Sénégal ?",
        options: [
          { text: "Abdou Diouf", correct: false },
          { text: "Léopold Sédar Senghor", correct: true },
          { text: "Mamadou Dia", correct: false },
          { text: "Blaise Diagne", correct: false }
        ]
      },
      // Nouvelles questions
      {
        question: "Qui fut le premier député africain élu à l'Assemblée nationale française en 1914 ?",
        options: [
          { text: "Lamine Guèye", correct: false },
          { text: "Blaise Diagne", correct: true },
          { text: "Léopold S. Senghor", correct: false },
          { text: "Galadou Diouf", correct: false }
        ]
      },
      {
        question: "L'université principale de Dakar porte le nom de quel grand historien et anthropologue ?",
        options: [
          { text: "Cheikh Anta Diop", correct: true },
          { text: "Birago Diop", correct: false },
          { text: "Alioune Diop", correct: false },
          { text: "Abdoulaye Ly", correct: false }
        ]
      },
      {
        question: "Quel héros de la résistance (Damel du Cayor) est mort à la bataille de Dékhelé en 1886 ?",
        options: [
          { text: "El Hadj Omar Tall", correct: false },
          { text: "Alboury Ndiaye", correct: false },
          { text: "Lat Dior Diop", correct: true },
          { text: "Samory Touré", correct: false }
        ]
      },
      {
        question: "Avec quel pays le Sénégal a-t-il brièvement formé la 'Fédération du Mali' en 1959-1960 ?",
        options: [
          { text: "La Guinée", correct: false },
          { text: "Le Soudan français (actuel Mali)", correct: true },
          { text: "La Mauritanie", correct: false },
          { text: "La Gambie", correct: false }
        ]
      },
      {
        question: "Qui fut le deuxième président du Sénégal, succédant à Senghor en 1981 ?",
        options: [
          { text: "Abdoulaye Wade", correct: false },
          { text: "Macky Sall", correct: false },
          { text: "Mamadou Dia", correct: false },
          { text: "Abdou Diouf", correct: true }
        ]
      },
      {
        question: "Quelle héroïne de la résistance en Casamance est célèbre pour sa lutte contre l'administration coloniale ?",
        options: [
          { text: "Aline Sitoé Diatta", correct: true },
          { text: "Ndatté Yalla Mbodj", correct: false },
          { text: "Yacine Boubou", correct: false },
          { text: "Ndaté Yalla Mbodj", correct: false }
        ]
      },
      {
        question: "Quel leader religieux a fondé la confrérie des Mourides et la ville de Touba ?",
        options: [
          { text: "El Hadj Malick Sy", correct: false },
          { text: "Cheikh Amadou Bamba", correct: true },
          { text: "Baye Niass", correct: false },
          { text: "Limamou Laye", correct: false }
        ]
      },
      {
        question: "Comment appelait-on les femmes métisses entrepreneurs de Saint-Louis et Gorée à l'époque coloniale ?",
        options: [
          { text: "Les Griottes", correct: false },
          { text: "Les Dames", correct: false },
          { text: "Les Signares", correct: true },
          { text: "Les Comtesses", correct: false }
        ]
      },
      {
        question: "En quelle année a eu lieu la première alternance politique pacifique, avec l'élection d'Abdoulaye Wade ?",
        options: [
          { text: "1993", correct: false },
          { text: "2000", correct: true },
          { text: "2007", correct: false },
          { text: "1988", correct: false }
        ]
      },
      {
        question: "Quel poète, co-fondateur de la Négritude, était aussi le premier président du Sénégal ?",
        options: [
          { text: "Birago Diop", correct: false },
          { text: "Aimé Césaire", correct: false },
          { text: "David Diop", correct: false },
          { text: "Léopold Sédar Senghor", correct: true }
        ]
      },
      {
        question: "Quel royaume pré-colonial, dont la capitale était à Lambaye, dominait le centre du Sénégal ?",
        options: [
          { text: "Le Royaume du Baol", correct: true },
          { text: "Le Royaume du Saloum", correct: false },
          { text: "Le Royaume du Walo", correct: false },
          { text: "L'Empire du Jolof", correct: false }
        ]
      },
      {
        question: "Comment s'appelaient les 4 communes dont les habitants avaient la citoyenneté française dès 1916 ?",
        options: [
          { text: "Dakar, Thiès, Kaolack, Tamba", correct: false },
          { text: "Dakar, Gorée, Saint-Louis, Rufisque", correct: true },
          { text: "Dakar, Ziguinchor, Saint-Louis, Gorée", correct: false },
          { text: "Dakar, Saly, Rufisque, Saint-Louis", correct: false }
        ]
      },
      {
        question: "Quelle crise politique majeure a opposé le Président Senghor à Mamadou Dia en 1962 ?",
        options: [
          { text: "Une tentative de coup d'État", correct: true },
          { text: "Un désaccord sur la date de l'indépendance", correct: false },
          { text: "Une famine nationale", correct: false },
          { text: "La gestion de la guerre en Casamance", correct: false }
        ]
      },
      {
        question: "Quel grand empire a dominé la région du Sénégal oriental avant l'arrivée des Européens ?",
        options: [
          { text: "L'Empire du Ghana", correct: false },
          { text: "L'Empire du Mali", correct: true },
          { text: "L'Empire Songhaï", correct: false },
          { text: "L'Empire du Jolof", correct: false }
        ]
      },
      {
        question: "Qui a dirigé la confrérie des Tidianes depuis Tivaouane pendant une grande partie du 20e siècle ?",
        options: [
          { text: "Cheikh Amadou Bamba", correct: false },
          { text: "El Hadj Malick Sy", correct: true },
          { text: "Baye Niass", correct: false },
          { text: "Limamou Laye", correct: false }
        ]
      },
      {
        question: "Comment appelait-on les soldats africains recrutés par l'armée coloniale française ?",
        options: [
          { text: "Les Tirailleurs sénégalais", correct: true },
          { text: "Les Spahis", correct: false },
          { text: "Les Goumiers", correct: false },
          { text: "Les Zouaves", correct: false }
        ]
      },
      {
        question: "Quel explorateur portugais est considéré comme le premier Européen à atteindre l'embouchure du fleuve Sénégal en 1444 ?",
        options: [
          { text: "Vasco de Gama", correct: false },
          { text: "Bartolomeu Dias", correct: false },
          { text: "Dinis Dias", correct: true },
          { text: "Fernand de Magellan", correct: false }
        ]
      },
      {
        question: "Le 'Massacre de Thiaroye' en 1944 concernait...",
        options: [
          { text: "Une révolte contre les impôts", correct: false },
          { text: "Des tirailleurs démobilisés réclamant leur solde", correct: true },
          { text: "Une manifestation pour l'indépendance", correct: false },
          { text: "Un conflit interethnique", correct: false }
        ]
      },
      {
        question: "Quel dirigeant a fondé la confrérie 'Layène' à la fin du 19e siècle ?",
        options: [
          { text: "Limamou Laye", correct: true },
          { text: "Cheikh Amadou Bamba", correct: false },
          { text: "El Hadj Omar Tall", correct: false },
          { text: "Baye Niass", correct: false }
        ]
      },
      {
        question: "Quel était le titre du souverain de l'Empire du Jolof ?",
        options: [
          { text: "Le Damel", correct: false },
          { text: "Le Teigne", correct: false },
          { text: "Le Bourba Jolof", correct: true },
          { text: "Le Brak", correct: false }
        ]
      },
      {
        question: "Quel parti politique L.S. Senghor a-t-il dirigé pour mener le Sénégal à l'indépendance ?",
        options: [
          { text: "Le PDS (Parti Démocratique Sénégalais)", correct: false },
          { text: "L'UPS (Union Progressiste Sénégalaise)", correct: true },
          { text: "Le PAI (Parti Africain de l'Indépendance)", correct: false },
          { text: "Le RND (Rassemblement National Démocratique)", correct: false }
        ]
      },
      {
        question: "Quel grand résistant et chef religieux a fondé un empire théocratique en Afrique de l'Ouest ?",
        options: [
          { text: "El Hadj Omar Tall", correct: true },
          { text: "Samory Touré", correct: false },
          { text: "Lat Dior Diop", correct: false },
          { text: "Alboury Ndiaye", correct: false }
        ]
      },
      {
        question: "Quel était le nom de l'entité politique qui regroupait les colonies françaises d'Afrique de l'Ouest, dont la capitale était Dakar ?",
        options: [
          { text: "L'Afrique Équatoriale Française (AEF)", correct: false },
          { text: "L'Afrique Occidentale Française (AOF)", correct: true },
          { text: "La Fédération du Mali", correct: false },
          { text: "La Communauté Française", correct: false }
        ]
      },
      {
        question: "Qui est la première femme à avoir été Première ministre du Sénégal (2001-2002) ?",
        options: [
          { text: "Amina Touré", correct: false },
          { text: "Mame Madior Boye", correct: true },
          { text: "Aissata Tall Sall", correct: false },
          { text: "Nafy Ngom Keita", correct: false }
        ]
      },
      {
        question: "Sous quel président le Sénégal a-t-il connu sa deuxième alternance politique en 2012 ?",
        options: [
          { text: "Abdou Diouf", correct: false },
          { text: "Abdoulaye Wade", correct: true },
          { text: "Macky Sall", correct: false },
          { text: "Léopold Sédar Senghor", correct: false }
        ]
      },
      {
        question: "Quel gouverneur français est associé à la construction du chemin de fer Dakar-Saint-Louis ?",
        options: [
          { text: "Louis Faidherbe", correct: true },
          { text: "Joseph Gallieni", correct: false },
          { text: "Pierre de Brazza", correct: false },
          { text: "Charles de Gaulle", correct: false }
        ]
      },
      {
        question: "Quel était le titre du souverain du royaume du Sine ?",
        options: [
          { text: "Bour Sine", correct: true },
          { text: "Bourba Jolof", correct: false },
          { text: "Damel", correct: false },
          { text: "Brak", correct: false }
        ]
      },
      {
        question: "Quel était le titre du souverain du royaume du Walo ?",
        options: [
          { text: "Brak", correct: true },
          { text: "Teigne", correct: false },
          { text: "Bour", correct: false },
          { text: "Almamy", correct: false }
        ]
      },
      {
        question: "Quel était le titre du souverain du royaume du Cayor ?",
        options: [
          { text: "Damel", correct: true },
          { text: "Laman", correct: false },
          { text: "Bour Sine", correct: false },
          { text: "Farba", correct: false }
        ]
      },
      {
        question: "Quel leader religieux Peul a fondé l'imamat du Fouta-Toro à la fin du 18ème siècle ?",
        options: [
          { text: "Souleymane Baal", correct: true },
          { text: "El Hadj Omar Tall", correct: false },
          { text: "Cheikh Amadou Bamba", correct: false },
          { text: "Maba Diakhou Bâ", correct: false }
        ]
      },
      {
        question: "En 1982, le Sénégal a formé une confédération avec quel pays, dissoute en 1989 ?",
        options: [
          { text: "La Guinée", correct: false },
          { text: "Le Mali", correct: false },
          { text: "La Gambie (Sénégambie)", correct: true },
          { text: "La Mauritanie", correct: false }
        ]
      },
      {
        question: "Quel érudit et résistant a dirigé la confrérie Tidjane depuis Kaolack au 20e siècle ?",
        options: [
          { text: "El Hadj Malick Sy", correct: false },
          { text: "Ibrahima Niass (Baye Niass)", correct: true },
          { text: "Cheikh Amadou Bamba", correct: false },
          { text: "Limamou Laye", correct: false }
        ]
      },
      {
        question: "Qui fut le principal opposant historique à Léopold Sédar Senghor ?",
        options: [
          { text: "Mamadou Dia", correct: true },
          { text: "Lamine Guèye", correct: false },
          { text: "Blaise Diagne", correct: false },
          { text: "Abdoulaye Wade", correct: false }
        ]
      },
      {
        question: "Quelle loi française de 1956 a accordé l'autonomie interne aux colonies africaines, ouvrant la voie à l'indépendance ?",
        options: [
          { text: "La Loi-cadre Defferre", correct: true },
          { text: "La Loi Lamine Guèye", correct: false },
          { text: "Les Accords d'Évian", correct: false },
          { text: "La Constitution de la IVe République", correct: false }
        ]
      },
      {
        question: "Qui a été le 4ème président du Sénégal, élu en 2012 ?",
        options: [
          { text: "Abdoulaye Wade", correct: false },
          { text: "Macky Sall", correct: true },
          { text: "Idrissa Seck", correct: false },
          { text: "Ousmane Sonko", correct: false }
        ]
      },
      {
        question: "Quel dirigeant du Cayor a fait dérailler le train de Saint-Louis en 1883 en signe de résistance ?",
        options: [
          { text: "Alboury Ndiaye", correct: false },
          { text: "Lat Dior Diop", correct: true },
          { text: "Maba Diakhou Bâ", correct: false },
          { text: "Samba Laobé Fall", correct: false }
        ]
      },
      {
        question: "Quel a été le premier établissement commercial français permanent au Sénégal, fondé en 1659 ?",
        options: [
          { text: "Dakar", correct: false },
          { text: "Gorée", correct: false },
          { text: "Saint-Louis", correct: true },
          { text: "Rufisque", correct: false }
        ]
      },
      {
        question: "Quel était le nom de l'empire qui a précédé les royaumes du Jolof, Walo, Cayor, etc. ?",
        options: [
          { text: "L'Empire du Ghana", correct: false },
          { text: "L'Empire du Mali", correct: false },
          { text: "L'Empire du Grand Jolof", correct: true },
          { text: "L'Empire Songhaï", correct: false }
        ]
      },
      {
        question: "Quel leader politique a été maire de Dakar avant de devenir le premier président de l'Assemblée nationale ?",
        options: [
          { text: "Blaise Diagne", correct: false },
          { text: "Lamine Guèye", correct: true },
          { text: "Léopold Sédar Senghor", correct: false },
          { text: "Mamadou Dia", correct: false }
        ]
      },
      {
        question: "Le 'Kajoor' (Cayor) et le 'Bawol' (Baol) étaient des royaumes historiquement dominés par quelle ethnie ?",
        options: [
          { text: "Les Peuls", correct: false },
          { text: "Les Sérères", correct: false },
          { text: "Les Wolofs", correct: true },
          { text: "Les Mandingues", correct: false }
        ]
      },
      {
        question: "Quel royaume, fondé par Ndiadiane Ndiaye, est à l'origine de l'empire du Jolof ?",
        options: [
          { text: "Le Royaume du Walo", correct: true },
          { text: "Le Royaume du Sine", correct: false },
          { text: "Le Royaume du Gadiaga", correct: false },
          { text: "Le Royaume du Fouta-Toro", correct: false }
        ]
      },
      {
        question: "Quel mouvement de Senghor prônait la revalorisation de la culture et des valeurs africaines ?",
        options: [
          { text: "Le Panafricanisme", correct: false },
          { text: "La Négritude", correct: true },
          { text: "Le Socialisme Africain", correct: false },
          { text: "L'Authenticité", correct: false }
        ]
      },
      {
        question: "Quel événement majeur en 2002 a propulsé le Sénégal sur la scène internationale ?",
        options: [
          { text: "Le naufrage du Joola", correct: false },
          { text: "La victoire contre la France à la Coupe du Monde", correct: true },
          { text: "L'élection d'Abdoulaye Wade", correct: false },
          { text: "La découverte de pétrole", correct: false }
        ]
      },
      {
        question: "Qui fut la dernière reine (Lingeer) du royaume du Walo, connue pour sa résistance ?",
        options: [
          { text: "Aline Sitoé Diatta", correct: false },
          { text: "Ndatté Yalla Mbodj", correct: true },
          { text: "Yacine Boubou", correct: false },
          { text: "Lingeer Fatim Beye", correct: false }
        ]
      },
      {
        question: "Quel marabout du Rip (Saloum) a mené une guerre sainte contre les royaumes traditionnels au 19e siècle ?",
        options: [
          { text: "Maba Diakhou Bâ", correct: true },
          { text: "El Hadj Omar Tall", correct: false },
          { text: "Lat Dior Diop", correct: false },
          { text: "Cheikh Amadou Bamba", correct: false }
        ]
      },
      {
        question: "Le 'Code de l'indigénat' était un système de...",
        options: [
          { text: "Commerce équitable", correct: false },
          { text: "Justice et répression coloniale", correct: true },
          { text: "Éducation religieuse", correct: false },
          { text: "Propriété foncière", correct: false }
        ]
      },
      {
        question: "Qui a été le 5ème président du Sénégal, élu en 2024 ?",
        options: [
          { text: "Ousmane Sonko", correct: false },
          { text: "Amadou Ba", correct: false },
          { text: "Bassirou Diomaye Faye", correct: true },
          { text: "Macky Sall", correct: false }
        ]
      },
      {
        question: "Quel a été le premier film d'Ousmane Sembène, considéré comme le premier long-métrage africain ?",
        options: [
          { text: "Mandabi", correct: false },
          { text: "La Noire de...", correct: true },
          { text: "Ceddo", correct: false },
          { text: "Xala", correct: false }
        ]
      },
      {
        question: "En quelle année le Sénégal a-t-il aboli la peine de mort ?",
        options: [
          { text: "1981", correct: false },
          { text: "2004", correct: true },
          { text: "1960", correct: false },
          { text: "Jamais", correct: false }
        ]
      },
      {
        question: "Le 'Pont Faidherbe', reliant l'île de Saint-Louis au continent, a été construit par...",
        options: [
          { text: "Gustave Eiffel", correct: false },
          { text: "La société Nouguier, Kessler & Cie", correct: true },
          { text: "L'armée française", correct: false },
          { text: "L'UNESCO", correct: false }
        ]
      },
      {
        question: "Quel était le titre du souverain du royaume du Baol ?",
        options: [
          { text: "Teigne", correct: true },
          { text: "Damel", correct: false },
          { text: "Bour Sine", correct: false },
          { text: "Brak", correct: false }
        ]
      },
      {
        question: "Quel royaume pré-colonial était situé dans le delta du Saloum et avait pour capitale Kahone ?",
        options: [
          { text: "Le Royaume du Sine", correct: false },
          { text: "Le Royaume du Saloum", correct: true },
          { text: "Le Royaume du Baol", correct: false },
          { text: "Le Royaume du Cayor", correct: false }
        ]
      },
      {
        question: "Quelle ethnie est historiquement associée aux royaumes du Sine et du Saloum ?",
        options: [
          { text: "Les Wolofs", correct: false },
          { text: "Les Peuls", correct: false },
          { text: "Les Sérères", correct: true },
          { text: "Les Diolas", correct: false }
        ]
      },
      {
        question: "Quel a été le premier président de la République du Sénégal ?",
        options: [
          { text: "Léopold Sédar Senghor", correct: true },
          { text: "Mamadou Dia", correct: false },
          { text: "Lamine Guèye", correct: false },
          { text: "Blaise Diagne", correct: false }
        ]
      },
      {
        question: "Quel leader religieux a été exilé au Gabon par l'administration coloniale française ?",
        options: [
          { text: "Cheikh Amadou Bamba", correct: true },
          { text: "El Hadj Malick Sy", correct: false },
          { text: "Baye Niass", correct: false },
          { text: "Cheikh Anta Diop", correct: false }
        ]
      },
      {
        question: "Quelle bataille de 1864 a vu la victoire de Maba Diakhou Bâ sur les forces coloniales ?",
        options: [
          { text: "La bataille de Dékhelé", correct: false },
          { text: "La bataille de Pathé Badiane", correct: true },
          { text: "La bataille de Fandane-Thiouthioune", correct: false },
          { text: "La bataille de Guillé", correct: false }
        ]
      },
      {
        question: "Quel fut le principal parti d'opposition légal sous le règne d'Abdou Diouf (avant 2000) ?",
        options: [
          { text: "Le Parti Démocratique Sénégalais (PDS)", correct: true },
          { text: "Le Parti Africain de l'Indépendance (PAI)", correct: false },
          { text: "And-Jëf", correct: false },
          { text: "Le Mouvement des Forces Démocratiques de Casamance (MFDC)", correct: false }
        ]
      },
      {
        question: "Qui était le chef du 'Bloc Démocratique Sénégalais' (BDS) avant qu'il ne devienne l'UPS ?",
        options: [
          { text: "Lamine Guèye", correct: false },
          { text: "Léopold Sédar Senghor", correct: true },
          { text: "Valdiodio Ndiaye", correct: false },
          { text: "Mamadou Dia", correct: false }
        ]
      },
      {
        question: "Quel traité de 1889 a placé le royaume du Cayor sous protectorat français ?",
        options: [
          { text: "Le Traité de Ngallè", correct: false },
          { text: "Le Traité de Guillé", correct: true },
          { text: "La Conférence de Berlin", correct: false },
          { text: "Le Traité de Tattaguine", correct: false }
        ]
      },
      {
        question: "Qui a été le premier Premier ministre du Sénégal en 1960 ?",
        options: [
          { text: "Léopold Sédar Senghor", correct: false },
          { text: "Lamine Guèye", correct: false },
          { text: "Mamadou Dia", correct: true },
          { text: "Habib Thiam", correct: false }
        ]
      },
      {
        question: "Quelle figure historique, 'Almamy' du Fouta-Toro, a résisté à la fois à El Hadj Omar Tall et aux Français ?",
        options: [
          { text: "Abdoulaye Ly", correct: false },
          { text: "Cheikh Amadou Bamba", correct: false },
          { text: "Maba Diakhou Bâ", correct: false },
          { text: "Abdul Bokar Kan", correct: true }
        ]
      },
      {
        question: "Quel historien sénégalais a défendu la thèse de l'origine nègre de la civilisation égyptienne ?",
        options: [
          { text: "Cheikh Anta Diop", correct: true },
          { text: "Boubacar Barry", correct: false },
          { text: "Pathé Diagne", correct: false },
          { text: "Abdoulaye Ly", correct: false }
        ]
      },
      {
        question: "Quel événement tragique a eu lieu en mer en 2002, marquant l'histoire récente du Sénégal ?",
        options: [
          { text: "L'effondrement du Pont de la Géole", correct: false },
          { text: "Le naufrage du Joola", correct: true },
          { text: "L'incendie du marché Kermel", correct: false },
          { text: "Le crash d'un avion militaire", correct: false }
        ]
      },
      {
        question: "Quel a été le premier parti politique légalement créé au Sénégal en 1912 ?",
        options: [
          { text: "La SFIO", correct: false },
          { text: "Le Parti Républicain-Socialiste", correct: true },
          { text: "Le Bloc Démocratique Sénégalais", correct: false },
          { text: "Le Parti Socialiste Sénégalais", correct: false }
        ]
      },
      {
        question: "Quel dirigeant du Walo a lutté contre la domination des Maures et des Français ?",
        options: [
          { text: "Lat Dior Diop", correct: false },
          { text: "Alboury Ndiaye", correct: false },
          { text: "Ndiadiane Ndiaye", correct: false },
          { text: "Sidya Ndaté Yalla Diop", correct: true }
        ]
      },
      {
        question: "Le 'Mouvement des Forces Démocratiques de Casamance' (MFDC) est un mouvement...",
        options: [
          { text: "Écologiste", correct: false },
          { text: "Indépendantiste", correct: true },
          { text: "Religieux", correct: false },
          { text: "Syndical", correct: false }
        ]
      },
      {
        question: "Qui est le fondateur de la confrérie Tidjane au Sénégal, basé à Tivaouane ?",
        options: [
          { text: "El Hadj Omar Tall", correct: false },
          { text: "El Hadj Malick Sy", correct: true },
          { text: "Baye Niass", correct: false },
          { text: "Cheikh Amadou Bamba", correct: false }
        ]
      },
      {
        question: "Quel a été le premier président de l'Assemblée nationale du Sénégal indépendant ?",
        options: [
          { text: "Lamine Guèye", correct: true },
          { text: "Léopold Sédar Senghor", correct: false },
          { text: "Mamadou Dia", correct: false },
          { text: "Habib Thiam", correct: false }
        ]
      },
      {
        question: "Quel était le principal produit commercial échangé à Gorée et Saint-Louis durant la traite atlantique ?",
        options: [
          { text: "L'or", correct: false },
          { text: "L'ivoire", correct: false },
          { text: "La gomme arabique", correct: false },
          { text: "Les captifs (esclaves)", correct: true }
        ]
      },
      {
        question: "Le 'Rassemblement Démocratique Africain' (RDA) était...",
        options: [
          { text: "Un parti politique inter-territorial", correct: true },
          { text: "Une confrérie religieuse", correct: false },
          { text: "Une milice coloniale", correct: false },
          { text: "Une banque de développement", correct: false }
        ]
      }
      
    ]
  },
  Showbizz: {
    title: "Cas & Culture Tiktok Senegal",
    questions: [
      // Questions existantes
      {
        question: "Wally Seck numu moudjek police ?",
        options: [
          { text: "Garde a vue", correct: false },
          { text: "Mandat Depot", correct: false },
          { text: "Dessei nama leer", correct: true },
          { text: "Delit de fuite", correct: false }
        ]
      },
    ]
}
  
  
};