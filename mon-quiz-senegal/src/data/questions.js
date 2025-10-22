// src/data/questions.js

export const quizzes = {
  
  // ==========================================================
  // CATÉGORIE : GÉOGRAPHIE
  // ==========================================================
  geographie: {
    title: "Géographie Sénégalaise",
    series: [
      
      // --- SÉRIE 1 ---
      [
        {
          question: "Quelle est la capitale du Sénégal ?",
          options: [
            { text: "Saint-Louis", correct: false },
            { text: "Dakar", correct: true },
            { text: "Ziguinchor", correct: false },
            { text: "Touba", correct: false }
          ],
          explanation: "Dakar est devenue la capitale en 1957, remplaçant Saint-Louis, en grande partie grâce à son port en eau profonde et sa position stratégique."
        },
        {
          question: "Comment s'appelle le lac célèbre pour sa couleur rose ?",
          options: [
            { text: "Le Lac Rose (Retba)", correct: true },
            { text: "Le Lac de Guiers", correct: false },
            { text: "Le Lac Tanma", correct: false },
            { text: "Le Lac Mbeubeusse", correct: false }
          ],
          explanation: "Sa couleur rose est due à une micro-algue, 'Dunaliella salina', qui produit un pigment rouge pour résister à la forte concentration en sel du lac."
        },
        {
          question: "Quelle est la principale région naturelle du sud du Sénégal, séparée par la Gambie ?",
          options: [
            { text: "Le Fouta-Toro", correct: false },
            { text: "Le Ferlo", correct: false },
            { text: "La Casamance", correct: true },
            { text: "Le Sine-Saloum", correct: false }
          ],
          explanation: "La Casamance est une région luxuriante et fertile, située au sud de la Gambie, avec un climat plus humide que le reste du pays."
        },
        {
          question: "Quel fleuve forme la frontière nord du Sénégal avec la Mauritanie ?",
          options: [
            { text: "Le Fleuve Gambie", correct: false },
            { text: "Le Fleuve Sénégal", correct: true },
            { text: "Le Fleuve Casamance", correct: false },
            { text: "Le Fleuve Saloum", correct: false }
          ],
          explanation: "Le fleuve Sénégal, long de 1 790 km, prend sa source en Guinée et marque la frontière avec la Mauritanie avant de se jeter dans l'Atlantique à Saint-Louis."
        },
        {
          question: "Quel est le point le plus occidental de l'Afrique continentale, situé à Dakar ?",
          options: [
            { text: "La Pointe des Almadies", correct: true },
            { text: "Le Cap Manuel", correct: false },
            { text: "Le Cap Skirring", correct: false },
            { text: "La Pointe de Sangomar", correct: false }
          ],
          explanation: "La Pointe des Almadies, sur la presqu'île du Cap-Vert à Dakar, est le point le plus à l'ouest de tout le continent africain."
        }
      ],

      // --- SÉRIE 2 ---
      [
        {
          question: "Quelle ville a été la première capitale de l'Afrique-Occidentale française (AOF) ?",
          options: [
            { text: "Dakar", correct: false },
            { text: "Gorée", correct: false },
            { text: "Rufisque", correct: false },
            { text: "Saint-Louis", correct: true }
          ],
          explanation: "Saint-Louis a été la capitale de l'AOF de 1895 à 1902, avant que la capitale ne soit transférée à Dakar."
        },
        {
          question: "Quel parc national, classé au patrimoine mondial de l'UNESCO, est le plus grand du Sénégal ?",
          options: [
            { text: "Le Parc National du Djoudj", correct: false },
            { text: "Le Parc National du Niokolo-Koba", correct: true },
            { text: "Le Parc National de la Langue de Barbarie", correct: false },
            { text: "Le Parc National du Delta du Saloum", correct: false }
          ],
          explanation: "Le Niokolo-Koba, situé au sud-est, couvre plus de 900 000 hectares et abrite une faune riche, dont des lions, léopards et éléphants."
        },
        {
          question: "Dans quelle région se trouve la 'Petite Côte', une importante zone touristique ?",
          options: [
            { text: "Région de Dakar", correct: false },
            { text: "Région de Ziguinchor", correct: false },
            { text: "Région de Thiès", correct: true },
            { text: "Région de Saint-Louis", correct: false }
          ],
          explanation: "La Petite Côte s'étend au sud de Dakar, dans la région de Thiès. Elle abrite des villes balnéaires comme Saly, Mbour et Somone."
        },
        {
          question: "Quelle île, face à Joal, est entièrement constituée de coquillages ?",
          options: [
            { text: "Île de Fadiouth", correct: true },
            { text: "Île de Gorée", correct: false },
            { text: "Île de Ngor", correct: false },
            { text: "Île de Karabane", correct: false }
          ],
          explanation: "Fadiouth est une île artificielle construite au fil des siècles par l'accumulation de coquillages (coques). Son cimetière mixte (chrétien et musulman) est aussi fait de coquillages."
        },
        {
          question: "Quelle grande ville est le centre du Mouridisme et une importante cité religieuse ?",
          options: [
            { text: "Tivaouane", correct: false },
            { text: "Kaolack", correct: false },
            { text: "Touba", correct: true },
            { text: "Médina Baye", correct: false }
          ],
          explanation: "Touba, fondée par Cheikh Amadou Bamba, est la ville sainte du Mouridisme. Sa grande mosquée est l'une des plus grandes d'Afrique."
        }
      ],

      // --- SÉRIE 3 ---
      [
        {
          question: "Quel parc ornithologique est un sanctuaire majeur pour les oiseaux migrateurs ?",
          options: [
            { text: "Le Parc National du Djoudj", correct: true },
            { text: "Le Niokolo-Koba", correct: false },
            { text: "La Réserve de Bandia", correct: false },
            { text: "Le Parc de Hann", correct: false }
          ],
          explanation: "Le Parc National des Oiseaux du Djoudj, 3ème parc ornithologique au monde, est une étape cruciale pour des millions d'oiseaux migrateurs venant d'Europe."
        },
        {
          question: "Comment s'appelle le climat de la majeure partie du nord du Sénégal ?",
          options: [
            { text: "Climat équatorial", correct: false },
            { text: "Climat sahélien (semi-aride)", correct: true },
            { text: "Climat tropical de mousson", correct: false },
            { text: "Climat méditerranéen", correct: false }
          ],
          explanation: "Le nord du Sénégal a un climat sahélien, caractérisé par une longue saison sèche et une courte saison des pluies, marquant la transition avec le désert du Sahara."
        },
        {
          question: "Quelle ville est le principal port arachidier du Sénégal ?",
          options: [
            { text: "Kaolack", correct: true },
            { text: "Ziguinchor", correct: false },
            { text: "Dakar", correct: false },
            { text: "Tambacounda", correct: false }
          ],
          explanation: "Grâce à sa position sur le fleuve Saloum, Kaolack est historiquement le cœur du bassin arachidier et son principal port d'exportation d'arachides."
        },
        {
          question: "Quel est le nom du nouvel aéroport international qui a remplacé L.S. Senghor (Yoff) ?",
          options: [
            { text: "Aéroport International Blaise Diagne (AIBD)", correct: true },
            { text: "Aéroport de Diass", correct: false },
            { text: "Aéroport International de Dakar", correct: false },
            { text: "Aéroport de la Petite Côte", correct: false }
          ],
          explanation: "L'Aéroport International Blaise Diagne (AIBD), situé à Diass, a ouvert en 2017 pour remplacer l'ancien aéroport Léopold Sédar Senghor devenu trop petit."
        },
        {
          question: "Quelle est la plus grande région administrative du Sénégal par sa superficie ?",
          options: [
            { text: "Région de Dakar", correct: false },
            { text: "Région de Tambacounda", correct: true },
            { text: "Région de Saint-Louis", correct: false },
            { text: "Région de Kédougou", correct: false }
          ],
          explanation: "La région de Tambacounda, au sud-est, est la plus vaste du pays. Elle est si grande qu'en 2008, la région de Kédougou en a été détachée."
        }
      ]
      // Ajoutez une virgule ici et une nouvelle série [ ... ]
    ]
  },

  // ==========================================================
  // CATÉGORIE : CULTURE
  // ==========================================================
  culture: {
    title: "Culture & Gastronomie",
    series: [
      
      // --- SÉRIE 1 ---
      [
        {
          question: "Quel plat est considéré comme le plat national du Sénégal ?",
          options: [
            { text: "Le Yassa", correct: false },
            { text: "Le Mafé", correct: false },
            { text: "Le Thiéboudienne", correct: true },
            { text: "Le Dibité", correct: false }
          ],
          explanation: "Le Thiéboudienne (ou 'Ceebu Jën') est un plat à base de riz, de poisson et de légumes, classé au patrimoine culturel immatériel de l'UNESCO."
        },
        {
          question: "Quel instrument est au cœur de la musique Mbalax, popularisée par Youssou N'Dour ?",
          options: [
            { text: "La Kora", correct: false },
            { text: "Le Sabar (percussion)", correct: true },
            { text: "Le Balafon", correct: false },
            { text: "Le Djembé", correct: false }
          ],
          explanation: "Le Mbalax est un genre musical sénégalais qui utilise largement les percussions 'Sabar' (un ensemble de plusieurs tambours) pour créer ses rythmes."
        },
        {
          question: "Comment appelle-t-on l'hospitalité légendaire au Sénégal ?",
          options: [
            { text: "La Teranga", correct: true },
            { text: "Le Jom", correct: false },
            { text: "L'Ubuntu", correct: false },
            { text: "L'Akwaba", correct: false }
          ],
          explanation: "La 'Teranga' est un concept Wolof qui englobe l'hospitalité, le respect et la générosité envers l'invité. C'est un pilier de la culture sénégalaise."
        },
        {
          question: "Quelle boisson populaire est faite à base de fleurs d'hibiscus séchées ?",
          options: [
            { text: "Le Bouye", correct: false },
            { text: "Le Ditakh", correct: false },
            { text: "Le Bissap", correct: true },
            { text: "Le Gnamakoudji", correct: false }
          ],
          explanation: "Le Bissap est un jus rouge vif très populaire, préparé par infusion de calices de fleurs d'hibiscus (Hibiscus sabdariffa), sucré et parfois mentholé."
        },
        {
          question: "Quel est le nom de la lutte traditionnelle sénégalaise ?",
          options: [
            { text: "Le Laamb", correct: true },
            { text: "Le Evala", correct: false },
            { text: "Le Donga", correct: false },
            { text: "Le Nguni", correct: false }
          ],
          explanation: "Le 'Laamb' est la lutte traditionnelle sénégalaise. Elle combine la lutte pure (Laamb) et la frappe (Mbapatte), ce qui en fait un sport très complet."
        }
      ],

      // --- SÉRIE 2 ---
      [
        {
          question: "Quel plat est une sauce onctueuse à base de pâte d'arachide ?",
          options: [
            { text: "Le Yassa", correct: false },
            { text: "Le Mafé", correct: true },
            { text: "La Soupe Kandia", correct: false },
            { text: "Le Thiou", correct: false }
          ],
          explanation: "Le Mafé est un ragoût très populaire à base de pâte d'arachide, de viande (souvent bœuf ou poulet) et de légumes, servi avec du riz."
        },
        {
          question: "Quel plat est à base d'oignons caramélisés et de moutarde, souvent servi avec du poulet ?",
          options: [
            { text: "Le Poulet Yassa", correct: true },
            { text: "Le Poulet Mafé", correct: false },
            { text: "Le Dibité", correct: false },
            { text: "Le Kaldou", correct: false }
          ],
          explanation: "Le Yassa est une marinade originaire de Casamance, faite d'oignons, de jus de citron, de moutarde et d'épices, parfaite pour le poulet ou le poisson."
        },
        {
          question: "Le 'Bouye' est une boisson lactée préparée à partir du fruit de quel arbre emblématique ?",
          options: [
            { text: "Le Manguier", correct: false },
            { text: "Le Palmier", correct: false },
            { text: "Le Baobab", correct: true },
            { text: "Le Fromager", correct: false }
          ],
          explanation: "Le Bouye est préparé à partir du 'pain de singe', le fruit sec du Baobab. Sa pulpe est délayée dans l'eau ou le lait pour faire un jus."
        },
        {
          question: "Comment s'appelle le thé à la menthe servi en trois étapes (amère, équilibrée, sucrée) ?",
          options: [
            { text: "Le Café Touba", correct: false },
            { text: "L'Ataya", correct: true },
            { text: "Le Kinkeliba", correct: false },
            { text: "Le Bissap", correct: false }
          ],
          explanation: "L'Ataya est un rituel social. Les trois verres (le 'trois nor') symbolisent l'amitié : le premier est amer comme la mort, le second doux comme la vie, et le troisième suave comme l'amour."
        },
        {
          question: "Quel instrument à cordes, semblable à une harpe, est typique des griots mandingues ?",
          options: [
            { text: "Le Xalam", correct: false },
            { text: "Le Balafon", correct: false },
            { text: "Le Hoddu", correct: false },
            { text: "La Kora", correct: true }
          ],
          explanation: "La Kora, souvent à 21 cordes, est l'instrument noble des griots (conteurs et musiciens) de l'ethnie Mandingue, très présente en Casamance et au sud."
        }
      ],

      // --- SÉRIE 3 ---
      [
        {
          question: "Comment s'appelle le cinéaste souvent considéré comme le 'père du cinéma africain' ?",
          options: [
            { text: "Ousmane Sembène", correct: true },
            { text: "Djibril Diop Mambéty", correct: false },
            { text: "Safi Faye", correct: false },
            { text: "Mati Diop", correct: false }
          ],
          explanation: "Ousmane Sembène a réalisé 'La Noire de...' (1966), considéré comme le premier long-métrage d'un réalisateur d'Afrique subsaharienne."
        },
        {
          question: "En 2021, quel auteur sénégalais a remporté le prestigieux Prix Goncourt ?",
          options: [
            { text: "Mohamed Mbougar Sarr", correct: true },
            { text: "David Diop", correct: false },
            { text: "Fatou Diome", correct: false },
            { text: "Ken Bugul", correct: false }
          ],
          explanation: "Mohamed Mbougar Sarr a remporté le Prix Goncourt pour son roman 'La plus secrète mémoire des hommes'."
        },
        {
          question: "Quel roman de Mariama Bâ est une œuvre majeure de la littérature africaine féministe ?",
          options: [
            { text: "Une si longue lettre", correct: true },
            { text: "Le Baobab fou", correct: false },
            { text: "Vol de nuit", correct: false },
            { text: "L'Enfant noir", correct: false }
          ],
          explanation: "'Une si longue lettre' (1979) est un roman épistolaire qui aborde les thèmes de la polygamie, des castes et de la condition de la femme."
        },
        {
          question: "La 'Biennale de Dakar', ou Dak'Art, est le plus grand événement africain dédié à...",
          options: [
            { text: "La musique traditionnelle", correct: false },
            { text: "Le cinéma", correct: false },
            { text: "L'art contemporain", correct: true },
            { text: "La gastronomie", correct: false }
          ],
          explanation: "Dak'Art est la principale biennale d'art contemporain du continent africain, attirant des artistes et des curateurs du monde entier."
        },
        {
          question: "Quel joueur de football sénégalais a été classé 2ème au Ballon d'Or 2022 ?",
          options: [
            { text: "El-Hadji Diouf", correct: false },
            { text: "Sadio Mané", correct: true },
            { text: "Kalidou Koulibaly", correct: false },
            { text: "Édouard Mendy", correct: false }
          ],
          explanation: "Suite à sa victoire à la CAN et à une saison exceptionnelle avec Liverpool, Sadio Mané a été classé deuxième au Ballon d'Or 2022, le plus haut classement pour un Africain depuis George Weah."
        }
      ]
      // Ajoutez une virgule ici et une nouvelle série [ ... ]
    ]
  },

  // ==========================================================
  // CATÉGORIE : HISTOIRE
  // ==========================================================
  histoire: {
    title: "Histoire & Personnalités",
    series: [
      
      // --- SÉRIE 1 ---
      [
        {
          question: "En quelle année le Sénégal a-t-il obtenu son indépendance de la France ?",
          options: [
            { text: "1958", correct: false },
            { text: "1962", correct: false },
            { text: "1960", correct: true },
            { text: "1955", correct: false }
          ],
          explanation: "Le Sénégal a accédé à l'indépendance le 4 avril 1960 (au sein de la Fédération du Mali), puis a proclamé sa propre indépendance le 20 août 1960."
        },
        {
          question: "Comment s'appelle l'île symbole de la traite négrière, située au large de Dakar ?",
          options: [
            { text: "Île de Gorée", correct: true },
            { text: "Île de Ngor", correct: false },
            { text: "Île de la Madeleine", correct: false },
            { text: "Île de Fadiouth", correct: false }
          ],
          explanation: "L'île de Gorée, classée au patrimoine mondial de l'UNESCO, a été l'un des plus grands centres de la traite négrière sur la côte africaine."
        },
        {
          question: "Qui fut le premier président de la République du Sénégal ?",
          options: [
            { text: "Abdou Diouf", correct: false },
            { text: "Léopold Sédar Senghor", correct: true },
            { text: "Mamadou Dia", correct: false },
            { text: "Blaise Diagne", correct: false }
          ],
          explanation: "Léopold Sédar Senghor, poète et homme d'État, a été le premier président du Sénégal, de 1960 à 1980."
        },
        {
          question: "Qui fut le premier député africain élu à l'Assemblée nationale française en 1914 ?",
          options: [
            { text: "Lamine Guèye", correct: false },
            { text: "Blaise Diagne", correct: true },
            { text: "Léopold S. Senghor", correct: false },
            { text: "Galadou Diouf", correct: false }
          ],
          explanation: "Blaise Diagne, originaire de Gorée, fut le premier Africain élu député à l'Assemblée nationale française, représentant les 'Quatre Communes'."
        },
        {
          question: "Avec quel pays le Sénégal a-t-il brièvement formé la 'Fédération du Mali' en 1959-1960 ?",
          options: [
            { text: "La Guinée", correct: false },
            { text: "Le Soudan français (actuel Mali)", correct: true },
            { text: "La Mauritanie", correct: false },
            { text: "La Gambie", correct: false }
          ],
          explanation: "La Fédération du Mali regroupait le Sénégal et le Soudan français. Elle a obtenu son indépendance de la France en juin 1960, mais a éclaté deux mois plus tard."
        }
      ],

      // --- SÉRIE 2 ---
      [
        {
          question: "L'université principale de Dakar porte le nom de quel grand historien et anthropologue ?",
          options: [
            { text: "Cheikh Anta Diop", correct: true },
            { text: "Birago Diop", correct: false },
            { text: "Alioune Diop", correct: false },
            { text: "Abdoulaye Ly", correct: false }
          ],
          explanation: "L'Université Cheikh Anta Diop (UCAD) rend hommage à l'historien et physicien qui a défendu la thèse de l'origine africaine (nègre) de la civilisation égyptienne antique."
        },
        {
          question: "Quel héros de la résistance (Damel du Cayor) est mort à la bataille de Dékhelé en 1886 ?",
          options: [
            { text: "El Hadj Omar Tall", correct: false },
            { text: "Alboury Ndiaye", correct: false },
            { text: "Lat Dior Diop", correct: true },
            { text: "Samory Touré", correct: false }
          ],
          explanation: "Lat Dior Diop, Damel (roi) du Cayor, s'est opposé à la construction du chemin de fer Dakar-Saint-Louis. Il est mort au combat contre les Français à Dékhelé."
        },
        {
          question: "Quel leader religieux a fondé la confrérie des Mourides et la ville de Touba ?",
          options: [
            { text: "El Hadj Malick Sy", correct: false },
            { text: "Cheikh Amadou Bamba", correct: true },
            { text: "Baye Niass", correct: false },
            { text: "Limamou Laye", correct: false }
          ],
          explanation: "Cheikh Amadou Bamba Mbacké, figure de la résistance pacifique, a fondé le Mouridisme. Il a été exilé par l'administration coloniale au Gabon et en Mauritanie."
        },
        {
          question: "En quelle année a eu lieu la première alternance politique pacifique, avec l'élection d'Abdoulaye Wade ?",
          options: [
            { text: "1993", correct: false },
            { text: "2000", correct: true },
            { text: "2007", correct: false },
            { text: "1988", correct: false }
          ],
          explanation: "En mars 2000, Abdoulaye Wade (PDS) a battu le président sortant Abdou Diouf (PS), marquant la première alternance démocratique au Sénégal."
        },
        {
          question: "Comment appelait-on les femmes métisses entrepreneurs de Saint-Louis et Gorée à l'époque coloniale ?",
          options: [
            { text: "Les Griottes", correct: false },
            { text: "Les Dames", correct: false },
            { text: "Les Signares", correct: true },
            { text: "Les Comtesses", correct: false }
          ],
          explanation: "Les Signares (du portugais 'senhora') étaient des femmes métisses influentes aux 18e et 19e siècles, actives dans le commerce (notamment de la gomme et des esclaves) et la vie sociale."
        }
      ],

      // --- SÉRIE 3 ---
      [
        {
          question: "Quel gouverneur français est associé à la construction du chemin de fer Dakar-Saint-Louis ?",
          options: [
            { text: "Louis Faidherbe", correct: true },
            { text: "Joseph Gallieni", correct: false },
            { text: "Pierre de Brazza", correct: false },
            { text: "Charles de Gaulle", correct: false }
          ],
          explanation: "Louis Faidherbe, gouverneur du Sénégal à deux reprises, a été l'artisan de l'expansion coloniale française et a initié de grands travaux, dont le chemin de fer."
        },
        {
          question: "Comment s'appelaient les 4 communes dont les habitants avaient la citoyenneté française dès 1916 ?",
          options: [
            { text: "Dakar, Thiès, Kaolack, Tamba", correct: false },
            { text: "Dakar, Gorée, Saint-Louis, Rufisque", correct: true },
            { text: "Dakar, Ziguinchor, Saint-Louis, Gorée", correct: false },
            { text: "Dakar, Saly, Rufisque, Saint-Louis", correct: false }
          ],
          explanation: "Les habitants des 'Quatre Communes' (Dakar, Gorée, Saint-Louis, Rufisque) ont obtenu la citoyenneté française grâce à la loi Blaise Diagne de 1916."
        },
        {
          question: "Quelle crise politique majeure a opposé le Président Senghor à Mamadou Dia en 1962 ?",
          options: [
            { text: "Une tentative de coup d'État", correct: true },
            { text: "Un désaccord sur la date de l'indépendance", correct: false },
            { text: "Une famine nationale", correct: false },
            { text: "La gestion de la guerre en Casamance", correct: false }
          ],
          explanation: "En 1962, une crise institutionnelle a opposé le Président Senghor et le Président du Conseil Mamadou Dia. Dia fut accusé de tentative de coup d'État et emprisonné."
        },
        {
          question: "Comment appelait-on les soldats africains recrutés par l'armée coloniale française ?",
          options: [
            { text: "Les Tirailleurs sénégalais", correct: true },
            { text: "Les Spahis", correct: false },
            { text: "Les Goumiers", correct: false },
            { text: "Les Zouaves", correct: false }
          ],
          explanation: "Le corps des 'Tirailleurs sénégalais' a été créé par Faidherbe en 1857. Le terme 'sénégalais' désignait en fait tous les soldats d'Afrique de l'Ouest et Centrale."
        },
        {
          question: "Qui a été le 5ème président du Sénégal, élu en 2024 ?",
          options: [
            { text: "Ousmane Sonko", correct: false },
            { text: "Amadou Ba", correct: false },
            { text: "Bassirou Diomaye Faye", correct: true },
            { text: "Macky Sall", correct: false }
          ],
          explanation: "Bassirou Diomaye Faye a été élu le 24 mars 2024, marquant la troisième alternance politique pacifique du pays."
        }
      ]
      // Ajoutez une virgule ici et une nouvelle série [ ... ]
    ]
  }
};