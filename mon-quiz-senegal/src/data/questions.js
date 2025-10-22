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
          question: "Le Delta du Saloum, classé par l'UNESCO, est un écosystème de...",
          options: [
            { text: "Montagnes volcaniques", correct: false },
            { text: "Désert de dunes", correct: false },
            { text: "Forêt tropicale dense", correct: false },
            { text: "Mangroves et bolongs", correct: true }
          ],
          explanation: "Le Delta du Saloum est un vaste labyrinthe de mangroves, d'îles et de 'bolongs' (chenaux d'eau salée), riche en biodiversité, notamment ornithologique."
        },
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
          question: "Quel pays n'a PAS de frontière terrestre avec le Sénégal ?",
          options: [
            { text: "La Gambie", correct: false },
            { text: "La Guinée", correct: false },
            { text: "Le Mali", correct: false },
            { text: "Le Nigeria", correct: true }
          ],
          explanation: "Le Sénégal partage des frontières avec la Mauritanie (Nord), le Mali (Est), la Guinée (Sud-Est), la Guinée-Bissau (Sud-Ouest) et la Gambie (enclavée)."
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
        }
      ],

      // --- SÉRIE 4 ---
      [
        {
          question: "La 'Langue de Barbarie' est un banc de sable protégeant l'embouchure du fleuve Sénégal près de quelle ville ?",
          options: [
            { text: "Richard-Toll", correct: false },
            { text: "Podor", correct: false },
            { text: "Saint-Louis", correct: true },
            { text: "Matam", correct: false }
          ],
          explanation: "La Langue de Barbarie est une fine bande de sable qui sépare le fleuve Sénégal de l'océan Atlantique sur plusieurs kilomètres au sud de Saint-Louis."
        },
        {
          question: "Quelle île, ancienne escale de l'Aéropostale, se trouve en Casamance ?",
          options: [
            { text: "Île de Karabane", correct: true },
            { text: "Île de Gorée", correct: false },
            { text: "Île de Fadiouth", correct: false },
            { text: "Île de Yoff", correct: false }
          ],
          explanation: "L'île de Karabane, située à l'embouchure du fleuve Casamance, fut un important comptoir commercial et une escale pour les pionniers de l'aviation."
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
        },
        {
          question: "Quel monument emblématique se trouve sur l'une des deux collines des Mamelles à Dakar ?",
          options: [
            { text: "La Porte du Troisième Millénaire", correct: false },
            { text: "Le Monument de la Renaissance Africaine", correct: true },
            { text: "La Mosquée de la Divinité", correct: false },
            { text: "L'Obélisque de la Place de la Nation", correct: false }
          ],
          explanation: "Inauguré en 2010, ce monument colossal en bronze est la plus haute statue d'Afrique et symbolise la renaissance du continent."
        },
        {
          question: "La Réserve de Faune du Ferlo est principalement dédiée à la protection de...",
          options: [
            { text: "L'Oryx algazelle", correct: true },
            { text: "Les éléphants", correct: false },
            { text: "Les chimpanzés", correct: false },
            { text: "Les lamantins", correct: false }
          ],
          explanation: "La Réserve du Ferlo Nord vise à protéger et réintroduire des espèces sahéliennes menacées, comme l'oryx algazelle, la gazelle dama et l'autruche à cou rouge."
        }
      ],

      // --- SÉRIE 5 ---
      [
        {
          question: "Quelle ville, près de la frontière malienne, est un carrefour commercial majeur ?",
          options: [
            { text: "Kolda", correct: false },
            { text: "Louga", correct: false },
            { text: "Kidira", correct: true },
            { text: "Kaffrine", correct: false }
          ],
          explanation: "Kidira est une ville frontalière importante sur l'axe routier et ferroviaire reliant Dakar à Bamako (Mali)."
        },
        {
          question: "Le 'pays Bassari', classé au patrimoine de l'UNESCO, se situe dans quelle région ?",
          options: [
            { text: "Région de Kédougou", correct: true },
            { text: "Région de Ziguinchor", correct: false },
            { text: "Région de Tambacounda", correct: false },
            { text: "Région de Kaolack", correct: false }
          ],
          explanation: "Situé à l'extrême sud-est du pays, le pays Bassari est connu pour ses paysages culturels uniques et les traditions préservées des peuples Bassari, Peul et Bédik."
        },
        {
          question: "Quelle ville abrite la principale université du nord du Sénégal ?",
          options: [
            { text: "Saint-Louis (Université Gaston Berger)", correct: true },
            { text: "Richard-Toll", correct: false },
            { text: "Louga", correct: false },
            { text: "Matam", correct: false }
          ],
          explanation: "L'Université Gaston Berger (UGB), située à Saint-Louis, est la deuxième université publique créée au Sénégal après l'UCAD de Dakar."
        },
        {
          question: "Quelle zone est réputée pour ses nombreux 'bolongs' (chenaux d'eau salée) ?",
          options: [
            { text: "Le Ferlo", correct: false },
            { text: "Le Delta du Saloum", correct: true },
            { text: "La Vallée du Fleuve Sénégal", correct: false },
            { text: "La presqu'île du Cap-Vert", correct: false }
          ],
          explanation: "Le Delta du Saloum, tout comme la Casamance, est caractérisé par un réseau complexe de 'bolongs', des bras de mer qui s'enfoncent dans les terres."
        },
        {
          question: "Quel est le nom de la principale compagnie sucrière située à Richard-Toll ?",
          options: [
            { text: "Compagnie Sucrière Sénégalaise (CSS)", correct: true },
            { text: "Suneor", correct: false },
            { text: "Socacim", correct: false },
            { text: "Les Grands Moulins de Dakar", correct: false }
          ],
          explanation: "La CSS exploite d'immenses plantations de canne à sucre dans la vallée du fleuve Sénégal, près de Richard-Toll."
        }
      ],
      
       // --- SÉRIE 6 ---
       [
        {
          question: "La 'Réserve de Bandia' est une réserve animalière privée proche de...",
          options: [
            { text: "Saly / Mbour", correct: true },
            { text: "Cap Skirring", correct: false },
            { text: "Saint-Louis", correct: false },
            { text: "Tambacounda", correct: false }
          ],
          explanation: "Située à environ 65 km de Dakar, près de Saly, la Réserve de Bandia permet d'observer de nombreux animaux africains (girafes, rhinocéros, zèbres...) dans un cadre semi-naturel."
        },
        {
          question: "Quel est le nom du désert qui s'étend au nord de Saint-Louis ?",
          options: [
            { text: "Le Désert de Lompoul", correct: true },
            { text: "Le Sahara", correct: false },
            { text: "Le Ferlo", correct: false },
            { text: "Le Kalahari", correct: false }
          ],
          explanation: "Le désert de Lompoul est une petite zone désertique caractérisée par ses dunes de sable orangé, unique au Sénégal."
        },
        {
          question: "Quelle est la seule région du Sénégal qui porte le nom de son chef-lieu et qui est aussi un département ?",
          options: [
            { text: "Dakar", correct: true },
            { text: "Thiès", correct: false },
            { text: "Kaolack", correct: false },
            { text: "Saint-Louis", correct: false }
          ],
          explanation: "La région de Dakar est unique car elle ne compte qu'un seul département (le département de Dakar), alors que toutes les autres en ont plusieurs."
        },
        {
          question: "Le gisement de gaz 'Grand Tortue/Ahmeyim' est partagé entre le Sénégal et quel autre pays ?",
          options: [
            { text: "La Gambie", correct: false },
            { text: "La Mauritanie", correct: true },
            { text: "La Guinée-Bissau", correct: false },
            { text: "Le Mali", correct: false }
          ],
          explanation: "Ce gisement offshore majeur est situé sur la frontière maritime entre le Sénégal et la Mauritanie, et est développé conjointement par les deux pays."
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
        }
      ],
      
       // --- SÉRIE 7 ---
      [
        {
          question: "Quelle est la principale culture d'exportation du Sénégal, historiquement ?",
          options: [
            { text: "Le Coton", correct: false },
            { text: "Le Riz", correct: false },
            { text: "L'Arachide", correct: true },
            { text: "Le Maïs", correct: false }
          ],
          explanation: "L'arachide a longtemps été la principale culture de rente et d'exportation du Sénégal, façonnant son économie et ses paysages (Bassin arachidier)."
        },
        {
          question: "La 'Haute-Casamance' correspond administrativement à quelle région ?",
          options: [
            { text: "Région de Ziguinchor", correct: false },
            { text: "Région de Sédhiou", correct: false },
            { text: "Région de Kolda", correct: true },
            { text: "Région de Kédougou", correct: false }
          ],
          explanation: "La Casamance est souvent divisée géographiquement en Basse-Casamance (Ziguinchor) et Haute-Casamance (Kolda et Sédhiou)."
        },
        {
          question: "Quel fleuve est enclavé à l'intérieur du Sénégal ?",
          options: [
            { text: "Le Fleuve Sénégal", correct: false },
            { text: "Le Fleuve Gambie", correct: true },
            { text: "Le Fleuve Niger", correct: false },
            { text: "Le Fleuve Saloum", correct: false }
          ],
          explanation: "La Gambie (le pays) est une enclave à l'intérieur du Sénégal, suivant le cours inférieur du fleuve Gambie."
        },
        {
          question: "Dans quelle région se trouve le 'Bassin Arachidier', cœur agricole du pays ?",
          options: [
            { text: "Région de Kaolack", correct: true },
            { text: "Région de Dakar", correct: false },
            { text: "Région de Matam", correct: false },
            { text: "Région de Ziguinchor", correct: false }
          ],
          explanation: "Le Bassin Arachidier (régions de Kaolack, Kaffrine, Fatick, Diourbel) est la principale zone de culture de l'arachide au Sénégal."
        },
        {
          question: "Quelle ville est connue pour sa grande mosquée et est le chef-lieu de la région de Louga ?",
          options: [
            { text: "Kébémer", correct: false },
            { text: "Dahra Djoloff", correct: false },
            { text: "Linguère", correct: false },
            { text: "Louga", correct: true }
          ],
          explanation: "Louga, située dans la zone sylvo-pastorale, est un important centre administratif et commercial du nord-ouest du Sénégal."
        }
      ],
      
       // --- SÉRIE 8 ---
      [
        {
          question: "Le 'Fouta-Toro' est une région historique et naturelle située le long de quel fleuve ?",
          options: [
            { text: "Le Fleuve Sénégal", correct: true },
            { text: "Le Fleuve Gambie", correct: false },
            { text: "Le Fleuve Saloum", correct: false },
            { text: "Le Fleuve Casamance", correct: false }
          ],
          explanation: "Le Fouta-Toro correspond à la moyenne vallée du fleuve Sénégal, historiquement peuplée par les Peuls (Halpulaar'en)."
        },
        {
          question: "Quelle ville côtière, au nord de Dakar, est un important centre de pêche artisanale ?",
          options: [
            { text: "Rufisque", correct: false },
            { text: "Kayar", correct: true },
            { text: "Joal", correct: false },
            { text: "Popenguine", correct: false }
          ],
          explanation: "Kayar est l'un des plus grands centres de pêche artisanale du Sénégal, connu pour le débarquement spectaculaire des pirogues."
        },
        {
          question: "Combien de régions administratives compte le Sénégal (depuis 2008) ?",
          options: [
            { text: "10", correct: false },
            { text: "12", correct: false },
            { text: "14", correct: true },
            { text: "16", correct: false }
          ],
          explanation: "Le Sénégal est divisé en 14 régions, elles-mêmes subdivisées en départements, arrondissements et communes."
        },
        {
          question: "Quelle est la particularité géologique de la presqu'île du Cap-Vert ?",
          options: [
            { text: "C'est un ancien delta", correct: false },
            { text: "C'est un ensemble d'origine volcanique", correct: true },
            { text: "C'est une formation calcaire", correct: false },
            { text: "C'est une dune de sable fossilisée", correct: false }
          ],
          explanation: "La presqu'île du Cap-Vert, où se trouve Dakar, est formée de roches volcaniques (comme les Mamelles) et de dunes fixées."
        },
        {
          question: "Où se situe la 'Zone des Niayes', importante pour le maraîchage ?",
          options: [
            { text: "En Casamance", correct: false },
            { text: "Le long de la côte de Dakar à Saint-Louis", correct: true },
            { text: "Dans la vallée du fleuve Sénégal", correct: false },
            { text: "Autour de Tambacounda", correct: false }
          ],
          explanation: "Les Niayes sont une zone de dépressions fertiles (anciens lits de lacs) qui longent la côte nord, idéale pour la culture de légumes (maraîchage)."
        }
      ],
      
       // --- SÉRIE 9 ---
      [
        {
          question: "Quelle est la principale ressource minière exploitée à Taïba, dans la région de Thiès ?",
          options: [
            { text: "L'Or", correct: false },
            { text: "Le Fer", correct: false },
            { text: "Le Phosphate", correct: true },
            { text: "Le Zircon", correct: false }
          ],
          explanation: "Le Sénégal est l'un des principaux producteurs mondiaux de phosphate, extrait notamment à Taïba et Lam-Lam."
        },
        {
          question: "Quel affluent majeur du fleuve Sénégal forme une partie de la frontière avec le Mali ?",
          options: [
            { text: "La Falémé", correct: true },
            { text: "Le Saloum", correct: false },
            { text: "La Casamance", correct: false },
            { text: "Le Koulountou", correct: false }
          ],
          explanation: "La Falémé est le principal affluent du fleuve Sénégal sur sa rive gauche, et marque la frontière avec le Mali sur une partie de son cours."
        },
        {
          question: "La 'Somone' est une station balnéaire connue pour sa...",
          options: [
            { text: "Forêt de baobabs", correct: false },
            { text: "Lagune et réserve ornithologique", correct: true },
            { text: "Grande mosquée", correct: false },
            { text: "Falaise de surf", correct: false }
          ],
          explanation: "La lagune de la Somone est une réserve naturelle protégée, appréciée pour l'observation des oiseaux et les balades en pirogue dans la mangrove."
        },
        {
          question: "Quelle ville du Sénégal Oriental est réputée pour ses mines d'or ?",
          options: [
            { text: "Kédougou", correct: true },
            { text: "Tambacounda", correct: false },
            { text: "Bakel", correct: false },
            { text: "Matam", correct: false }
          ],
          explanation: "La région de Kédougou, riche en ressources minières, est le principal centre d'extraction d'or au Sénégal (mine de Sabodala)."
        },
        {
          question: "Comment s'appelle le vent sec et poussiéreux venu du Sahara qui souffle en saison sèche ?",
          options: [
            { text: "La Mousson", correct: false },
            { text: "L'Alizé", correct: false },
            { text: "L'Harmattan", correct: true },
            { text: "Le Sirocco", correct: false }
          ],
          explanation: "L'Harmattan est un vent d'Est ou Nord-Est qui souffle sur l'Afrique de l'Ouest pendant la saison sèche (hiver), apportant sécheresse et poussière."
        }
      ],
      
       // --- SÉRIE 10 ---
      [
        {
          question: "Quel est le seul pays qui partage une frontière avec la Gambie (outre le Sénégal) ?",
          options: [
            { text: "La Guinée", correct: false },
            { text: "Le Mali", correct: false },
            { text: "La Guinée-Bissau", correct: false },
            { text: "Aucun (elle est enclavée)", correct: true }
          ],
          explanation: "La Gambie est entièrement enclavée dans le Sénégal, à l'exception de sa façade maritime sur l'océan Atlantique."
        },
        {
          question: "La 'Petite Côte' s'étend de la presqu'île du Cap-Vert jusqu'à...",
          options: [
            { text: "La frontière gambienne", correct: false },
            { text: "Le Delta du Saloum", correct: true },
            { text: "Saint-Louis", correct: false },
            { text: "Cap Skirring", correct: false }
          ],
          explanation: "La zone touristique de la Petite Côte va de Rufisque (près de Dakar) jusqu'à Joal-Fadiouth, aux portes du Delta du Saloum."
        },
        {
          question: "Quel ancien comptoir colonial se trouve sur l'île de Gorée ?",
          options: [
            { text: "Le Castel", correct: true },
            { text: "Le Palais Présidentiel", correct: false },
            { text: "La Grande Mosquée", correct: false },
            { text: "Le Fort de Podor", correct: false }
          ],
          explanation: "Le Castel est un plateau rocheux fortifié qui domine l'île de Gorée, témoignant de son importance stratégique passée."
        },
        {
          question: "Quelle est la principale ville de la région du Sine-Saloum ?",
          options: [
            { text: "Fatick", correct: false },
            { text: "Kaolack", correct: true },
            { text: "Foundiougne", correct: false },
            { text: "Passy", correct: false }
          ],
          explanation: "Kaolack, bien que chef-lieu de sa propre région, est la principale métropole économique et urbaine de la zone géographique du Sine-Saloum."
        },
        {
          question: "Le 'Ferlo' est une vaste zone...",
          options: [
            { text: "Sylvo-pastorale semi-désertique", correct: true },
            { text: "De mangroves denses", correct: false },
            { text: "De haute montagne", correct: false },
            { text: "Urbaine et industrielle", correct: false }
          ],
          explanation: "Le Ferlo est une vaste étendue semi-aride au centre-nord du Sénégal, traditionnellement dédiée à l'élevage extensif par les Peuls."
        }
      ],
      
       // --- SÉRIE 11 ---
      [
        {
          question: "Quelle est la principale activité économique de la ville de Richard-Toll ?",
          options: [
            { text: "La pêche", correct: false },
            { text: "La culture de la canne à sucre", correct: true },
            { text: "L'extraction de l'or", correct: false },
            { text: "Le tourisme de luxe", correct: false }
          ],
          explanation: "La ville de Richard-Toll s'est développée autour de l'industrie sucrière de la Compagnie Sucrière Sénégalaise (CSS)."
        },
        {
          question: "La Casamance est connue pour ses rizières inondées, appelées...",
          options: [
            { text: "Bolongs", correct: false },
            { text: "Tannes", correct: false },
            { text: "Rizières en terrasses", correct: false },
            { text: "Rizières de mangrove", correct: true }
          ],
          explanation: "La riziculture de mangrove, pratiquée notamment par les Diolas, est une technique ancestrale adaptée aux zones inondables de Basse-Casamance."
        },
        {
          question: "Quelle ville est la capitale de la région de la Casamance (région de Ziguinchor) ?",
          options: [
            { text: "Kolda", correct: false },
            { text: "Cap Skirring", correct: false },
            { text: "Ziguinchor", correct: true },
            { text: "Sédhiou", correct: false }
          ],
          explanation: "Ziguinchor est la principale ville et le chef-lieu administratif de la Basse-Casamance (région de Ziguinchor)."
        },
        {
          question: "Quel est le nom du plus grand lac artificiel du Sénégal, qui alimente Dakar en eau ?",
          options: [
            { text: "Le Lac de Guiers", correct: true },
            { text: "Le Lac Rose", correct: false },
            { text: "Le Barrage de Diama", correct: false },
            { text: "Le Barrage de Manantali", correct: false }
          ],
          explanation: "Le Lac de Guiers, relié au fleuve Sénégal, est la principale réserve d'eau douce du pays et alimente Dakar via des conduites."
        },
        {
          question: "Quelle région administrative a été créée en 2008 par démembrement de la région de Kolda ?",
          options: [
            { text: "Région de Tambacounda", correct: false },
            { text: "Région de Sédhiou", correct: true },
            { text: "Région de Kédougou", correct: false },
            { text: "Région de Matam", correct: false }
          ],
          explanation: "La région de Sédhiou (Moyenne-Casamance) a été créée en 2008 pour rapprocher l'administration des populations de cette zone."
        }
      ],
      
       // --- SÉRIE 12 ---
      [
        {
          question: "La 'Grande Côte' s'étend de Dakar jusqu'à...",
          options: [
            { text: "La frontière gambienne", correct: false },
            { text: "La Casamance", correct: false },
            { text: "La frontière mauritanienne (Saint-Louis)", correct: true },
            { text: "Le Delta du Saloum", correct: false }
          ],
          explanation: "La Grande Côte désigne le littoral sableux qui va de la presqu'île du Cap-Vert jusqu'à l'embouchure du fleuve Sénégal."
        },
        {
          question: "Quel archipel de trois îles volcaniques, au large de Dakar, est une réserve naturelle ?",
          options: [
            { text: "Les îles de la Madeleine", correct: true },
            { text: "L'île de Gorée", correct: false },
            { text: "L'île de Ngor", correct: false },
            { text: "Les îles du Saloum", correct: false }
          ],
          explanation: "Le Parc National des Îles de la Madeleine protège ces îles inhabitées, refuge pour de nombreux oiseaux marins et lieu de ponte pour les tortues."
        },
        {
          question: "Quel est le nom du parc national situé sur la 'Petite Côte' ?",
          options: [
            { text: "Parc National de la Langue de Barbarie", correct: false },
            { text: "Parc National de Popenguine", correct: true },
            { text: "Parc National du Djoudj", correct: false },
            { text: "Parc National de Basse-Casamance", correct: false }
          ],
          explanation: "La Réserve Naturelle de Popenguine protège une zone côtière et une falaise, importante pour les oiseaux et la biodiversité marine."
        },
        {
          question: "La 'Falémé', principal affluent du fleuve Sénégal, est riche en...",
          options: [
            { text: "Or et Fer", correct: true },
            { text: "Phosphate", correct: false },
            { text: "Pétrole", correct: false },
            { text: "Sel", correct: false }
          ],
          explanation: "Le bassin de la Falémé, au Sénégal Oriental, est une zone riche en ressources minières, notamment l'or et le fer."
        },
        {
          question: "Quel est le point culminant du Sénégal (environ 648m), près de la frontière guinéenne ?",
          options: [
            { text: "Le Mont Loura", correct: false },
            { text: "Le Mont Assirik", correct: false },
            { text: "Une colline sans nom près de Népen Diakha", correct: true },
            { text: "Les Mamelles", correct: false }
          ],
          explanation: "Le Sénégal est un pays majoritairement plat. Son point culminant se situe dans les contreforts du massif du Fouta-Djalon, à l'extrême sud-est."
        }
      ],
       // --- SÉRIE 13 ---
      [
        {
          question: "Le 'Cap Skirring', en Casamance, est réputé pour...",
          options: [
            { text: "Son port industriel", correct: false },
            { text: "Ses plages et son tourisme balnéaire", correct: true },
            { text: "Ses mines de zircon", correct: false },
            { text: "Son site de lancement de fusées", correct: false }
          ],
          explanation: "Cap Skirring est la principale station balnéaire de Casamance, connue pour ses longues plages de sable fin et ses hôtels."
        },
        {
          question: "Quelle ville du Fouta est un important lieu de pèlerinage pour les Tidianes ?",
          options: [
            { text: "Podor", correct: false },
            { text: "Matam", correct: false },
            { text: "Tivaouane", correct: true }, // Tivaouane est la principale, mais il y a d'autres lieux importants dans le Fouta. Corrigé pour clarté.
            { text: "Kanel", correct: false }
          ],
          explanation: "Tivaouane est le siège du califat général de la Tidjaniya au Sénégal, fondée par El Hadj Malick Sy. Le Gamou y attire des millions de fidèles."
        },
        {
          question: "Le 'Tanne' est un terme géographie désignant...",
          options: [
            { text: "Une forêt dense", correct: false },
            { text: "Une zone de mangrove", correct: false },
            { text: "Une étendue de terre salée, nue, inondable", correct: true },
            { text: "Une colline de calcaire", correct: false }
          ],
          explanation: "Les 'tannes' sont des étendues sursalées, souvent nues ou à végétation éparse, typiques des zones de delta (Saloum, Casamance) en milieu tropical."
        },
        {
          question: "Quelle ville historique, près de la frontière gambienne, était la capitale du royaume du Saloum ?",
          options: [
            { text: "Kahone", correct: true },
            { text: "Kaolack", correct: false },
            { text: "Foundiougne", correct: false },
            { text: "Nioro du Rip", correct: false }
          ],
          explanation: "Kahone, aujourd'hui une petite ville, fut la capitale historique du royaume Sérère du Saloum."
        },
        {
          question: "Le 'Lac Tanma' est un lac salé situé dans la région de...",
          options: [
            { text: "Dakar", correct: false },
            { text: "Thiès", correct: true },
            { text: "Saint-Louis", correct: false },
            { text: "Kolda", correct: false }
          ],
          explanation: "Le Lac Tanma est un petit lac salé situé dans la région de Thiès, non loin du Lac Rose."
        }
      ],
      
       // --- SÉRIE 14 ---
      [
        {
          question: "Quelle est la principale menace écologique pour la 'Langue de Barbarie' ?",
          options: [
            { text: "La désertification", correct: false },
            { text: "L'érosion côtière et la montée des eaux", correct: true },
            { text: "Les feux de brousse", correct: false },
            { text: "La pollution industrielle", correct: false }
          ],
          explanation: "La Langue de Barbarie est extrêmement vulnérable à l'érosion marine, aggravée par la montée du niveau de la mer et les aménagements fluviaux."
        },
        {
          question: "Quelle région est considérée comme le 'grenier à riz' du Sénégal ?",
          options: [
            { text: "La Vallée du Fleuve Sénégal (Walo)", correct: true },
            { text: "La Casamance", correct: false },
            { text: "Le Sine-Saloum", correct: false },
            { text: "Le Ferlo", correct: false }
          ],
          explanation: "Grâce à l'irrigation permise par les barrages sur le fleuve Sénégal, la vallée (le 'Walo') est devenue la principale zone de production de riz du pays."
        },
        {
          question: "Quelle ville, ancienne escale sur la route de l'or, se trouve à l'extrême est du pays ?",
          options: [
            { text: "Kidira", correct: false },
            { text: "Bakel", correct: true },
            { text: "Kédougou", correct: false },
            { text: "Goudiry", correct: false }
          ],
          explanation: "Bakel, sur le fleuve Sénégal, fut un important fort et comptoir commercial français à la frontière avec l'ancien royaume de Gadiaga."
        },
        {
          question: "Les 'Mamelles' de Dakar sont...",
          options: [
            { text: "Des marchés aux poissons", correct: false },
            { text: "Deux collines volcaniques", correct: true },
            { text: "Des îles jumelles", correct: false },
            { text: "Des forts coloniaux", correct: false }
          ],
          explanation: "Les Mamelles sont deux collines d'origine volcanique. L'une porte le phare des Mamelles, l'autre le Monument de la Renaissance Africaine."
        },
        {
          question: "Quel fleuve prend sa source dans le Fouta-Djalon et se jette dans l'Atlantique en Casamance ?",
          options: [
            { text: "Le Fleuve Casamance", correct: true },
            { text: "Le Fleuve Gambie", correct: false },
            { text: "Le Fleuve Sénégal", correct: false },
            { text: "Le Fleuve Saloum", correct: false }
          ],
          explanation: "Le fleuve Casamance traverse la région du même nom d'Est en Ouest avant de former un large estuaire près de Ziguinchor."
        }
      ],
      
       // --- SÉRIE 15 ---
      [
        {
          question: "Où se trouve le 'Parc National de la Basse-Casamance', actuellement fermé ?",
          options: [
            { text: "Près de Ziguinchor", correct: false },
            { text: "Près de Cap Skirring et Oussouye", correct: true },
            { text: "Près de Kolda", correct: false },
            { text: "Près de Sédhiou", correct: false }
          ],
          explanation: "Ce parc, connu pour sa forêt dense et sa faune, est fermé au public depuis de nombreuses années en raison du conflit en Casamance."
        },
        {
          question: "Quelle ville est célèbre pour son 'Pélerinage Marial' annuel ?",
          options: [
            { text: "Popenguine", correct: true },
            { text: "Fadiouth", correct: false },
            { text: "Gorée", correct: false },
            { text: "Dakar", correct: false }
          ],
          explanation: "Chaque année, des milliers de pèlerins chrétiens (mais aussi musulmans) convergent vers le sanctuaire marial de Popenguine pour le pèlerinage de Pentecôte."
        }
        // Ajoutez d'autres questions ici pour compléter la série si nécessaire...
      ]
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
          question: "Quelle langue locale est la plus parlée (lingua franca) au Sénégal ?",
          options: [
            { text: "Le Pulaar", correct: false },
            { text: "Le Wolof", correct: true },
            { text: "Le Sérère", correct: false },
            { text: "Le Diola", correct: false }
          ],
          explanation: "Le Wolof est la langue maternelle de l'ethnie majoritaire et est comprise par plus de 80% de la population, servant de langue véhiculaire."
        },
        {
          question: "Quel sculpteur sénégalais de renommée mondiale est connu pour ses œuvres monumentales ?",
          options: [
            { text: "Papa Ibra Tall", correct: false },
            { text: "Iba N'Diaye", correct: false },
            { text: "Ousmane Sow", correct: true },
            { text: "Souleymane Keita", correct: false }
          ],
          explanation: "Ousmane Sow (décédé en 2016) était célèbre pour ses sculptures monumentales de guerriers (Masaï, Zoulous...) faites à partir d'une matière secrète."
        },
        {
          question: "Quel est le nom du café épicé (poivre de Selim) associé à la confrérie Mouride ?",
          options: [
            { text: "Café Touba", correct: true },
            { text: "Café Nioro", correct: false },
            { text: "Café Crème", correct: false },
            { text: "Café Mandingue", correct: false }
          ],
          explanation: "Le Café Touba, nommé d'après la ville sainte, est un café aromatisé avec du 'djar' (poivre de Selim et clou de girofle), réputé pour ses vertus médicinales."
        },
        {
          question: "Quel festival international de jazz se tient chaque année à Saint-Louis ?",
          options: [
            { text: "Dakar Jazz Festival", correct: false },
            { text: "Saint-Louis Jazz Festival", correct: true },
            { text: "Africa Jazz", correct: false },
            { text: "Teranga Jazz", correct: false }
          ],
          explanation: "Le Festival International de Jazz de Saint-Louis est l'un des plus grands événements de jazz sur le continent africain."
        }
      ],
      
      // --- SÉRIE 4 ---
      [
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
          question: "Comment s'appelle le grand vêtement ample et brodé porté par les hommes et les femmes ?",
          options: [
            { text: "Le Kente", correct: false },
            { text: "Le Boubou", correct: true },
            { text: "Le Pagne", correct: false },
            { text: "La Djellaba", correct: false }
          ],
          explanation: "Le boubou (ou 'grand boubou') est un vêtement traditionnel ample, souvent richement brodé, porté lors des grandes occasions."
        },
        {
          question: "Qui est le réalisateur du film culte 'Touki Bouki' (1973) ?",
          options: [
            { text: "Ousmane Sembène", correct: false },
            { text: "Djibril Diop Mambéty", correct: true },
            { text: "Safi Faye", correct: false },
            { text: "Moussa Sène Absa", correct: false }
          ],
          explanation: "'Touki Bouki' (Le Voyage de la Hyène) est un film emblématique du cinéma africain, connu pour son style avant-gardiste et poétique."
        },
        {
          question: "Quel est le nom de l'infusion à base de feuilles de Kinkeliba, souvent bue au petit-déjeuner ?",
          options: [
            { text: "Le Kinkeliba", correct: true },
            { text: "Le Bissap", correct: false },
            { text: "L'Ataya", correct: false },
            { text: "Le Bouye", correct: false }
          ],
          explanation: "Le Kinkeliba est une plante dont les feuilles sont utilisées en infusion pour ses vertus médicinales (digestives, anti-inflammatoires)."
        }
      ],
      
       // --- SÉRIE 5 ---
      [
        {
          question: "Quel groupe musical des années 70, mélangeant rythmes afro-cubains et Mbalax, est redevenu célèbre mondialement ?",
          options: [
            { text: "Orchestra Baobab", correct: true },
            { text: "Touré Kunda", correct: false },
            { text: "Xalam", correct: false },
            { text: "Super Diamono", correct: false }
          ],
          explanation: "L'Orchestra Baobab, actif dans les années 70, a été 'redécouvert' dans les années 2000 et a connu un succès international tardif."
        },
        {
          question: "Quelle est la principale langue parlée en Casamance (hors Wolof et Français) ?",
          options: [
            { text: "Le Diola (Joola)", correct: true },
            { text: "Le Sérère", correct: false },
            { text: "Le Pulaar", correct: false },
            { text: "Le Soninké", correct: false }
          ],
          explanation: "Le Diola est la langue principale du groupe ethnique majoritaire en Basse-Casamance."
        },
        {
          question: "Comment s'appelle le 'griot' ou 'conteur' en Afrique de l'Ouest ?",
          options: [
            { text: "Un Marabout", correct: false },
            { text: "Un Griot", correct: true },
            { text: "Un Laman", correct: false },
            { text: "Un Damel", correct: false }
          ],
          explanation: "Le Griot est un personnage traditionnel, à la fois musicien, chanteur, conteur et gardien de la mémoire orale et des généalogies."
        },
        {
          question: "L'équipe nationale de football du Sénégal est surnommée...",
          options: [
            { text: "Les Éléphants", correct: false },
            { text: "Les Lions de la Teranga", correct: true },
            { text: "Les Aigles de Carthage", correct: false },
            { text: "Les Super Eagles", correct: false }
          ],
          explanation: "Le surnom 'Lions de la Teranga' associe l'emblème national (le lion) au concept d'hospitalité sénégalaise (la Teranga)."
        },
        {
          question: "En quelle année le Sénégal a-t-il remporté sa première Coupe d'Afrique des Nations (CAN) ?",
          options: [
            { text: "2002", correct: false },
            { text: "2019", correct: false },
            { text: "2022 (jouée en 2022)", correct: true },
            { text: "1998", correct: false }
          ],
          explanation: "Le Sénégal a remporté sa première CAN en février 2022 au Cameroun, en battant l'Égypte en finale aux tirs au but."
        }
      ],
      
       // --- SÉRIE 6 ---
      [
        {
          question: "Quel plat est une variante du Thiéboudienne mais de couleur blanche (sans tomate concentrée) ?",
          options: [
            { text: "Thiébou Yapp", correct: false },
            { text: "Thiébou Kétiakh", correct: false },
            { text: "Thiébou Dieune Penda", correct: false },
            { text: "Thiébou Dieune Weekh", correct: true }
          ],
          explanation: "'Weekh' signifie 'blanc' en Wolof. Ce plat utilise les mêmes ingrédients que le Thiéboudienne rouge, mais sans la tomate concentrée."
        },
        {
          question: "Le 'Domoda' est un ragoût dont l'ingrédient principal est...",
          options: [
            { text: "La tomate et la farine", correct: true },
            { text: "Le gombo", correct: false },
            { text: "L'arachide", correct: false }, // Note: Confusion possible avec Mafé. Domoda est tomate/farine.
            { text: "Les feuilles de manioc", correct: false }
          ],
          explanation: "Le Domoda est une soupe ou ragoût acidulé, épaissi à la farine et à la tomate, souvent à base de poisson ou de viande. À ne pas confondre avec le Mafé (arachide)."
        },
        {
          question: "Quel joueur de football sénégalais a été classé 2ème au Ballon d'Or 2022 ?",
          options: [
            { text: "El-Hadji Diouf", correct: false },
            { text: "Sadio Mané", correct: true },
            { text: "Kalidou Koulibaly", correct: false },
            { text: "Édouard Mendy", correct: false }
          ],
          explanation: "Suite à sa victoire à la CAN et à une saison exceptionnelle avec Liverpool, Sadio Mané a été classé deuxième au Ballon d'Or 2022."
        },
        {
          question: "Quelle est la particularité des 'masques' dans la culture Diola en Casamance ?",
          options: [
            { text: "Ils sont portés uniquement par les femmes", correct: false },
            { text: "Ils sont invisibles et ne sont qu'évoqués", correct: false },
            { text: "Ils représentent des esprits de la forêt (ex: Kumpo)", correct: true },
            { text: "Ils sont faits uniquement en or", correct: false }
          ],
          explanation: "Les masques Diola (Kumpo, Samay, Niasse) incarnent des esprits liés aux rites d'initiation et aux cycles agricoles, jouant un rôle social important."
        },
        {
          question: "Le 'Fanal' est une fête de fin d'année spectaculaire avec des lampions, typique de quelle ville ?",
          options: [
            { text: "Saint-Louis", correct: true },
            { text: "Dakar", correct: false },
            { text: "Ziguinchor", correct: false },
            { text: "Kaolack", correct: false }
          ],
          explanation: "Les Fanals de Saint-Louis sont de grandes structures illuminées en forme de bateaux ou de bâtiments, portées en procession lors des fêtes de fin d'année."
        }
      ],
      
       // --- SÉRIE 7 ---
      [
        {
          question: "Quel romancier sénégalais a écrit 'L'Aventure ambiguë' ?",
          options: [
            { text: "Cheikh Hamidou Kane", correct: true },
            { text: "Ousmane Sembène", correct: false },
            { text: "Boubacar Boris Diop", correct: false },
            { text: "Mohamed Mbougar Sarr", correct: false }
          ],
          explanation: "Publié en 1961, 'L'Aventure ambiguë' est un roman philosophique majeur sur le dilemme d'un jeune homme partagé entre spiritualité et modernisme occidental."
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
          question: "Comment s'appelle le plat à base de mil, souvent servi avec du lait caillé (sow) ?",
          options: [
            { text: "Le Thiéré (Couscous)", correct: true },
            { text: "Le Fondé", correct: false },
            { text: "Le Rouy", correct: false },
            { text: "Le Lakh", correct: false }
          ],
          explanation: "Le Thiéré est un couscous fin à base de mil, préparé de différentes manières (Bassi-Salté, Thiéré Sim...) selon les occasions."
        },
        {
          question: "Le 'Simb', ou 'Jeu du Faux Lion', est une performance culturelle de quel groupe ethnique ?",
          options: [
            { text: "Les Lébous", correct: true },
            { text: "Les Peuls", correct: false },
            { text: "Les Diolas", correct: false },
            { text: "Les Bassaris", correct: false }
          ],
          explanation: "À l'origine un rituel d'initiation lébou, le 'Simb' est devenu un spectacle de rue populaire où des 'faux lions' dansent et interagissent avec la foule."
        },
        {
          question: "Quel groupe musical, fondé par les frères Touré, a popularisé la musique sénégalaise en France dans les années 80 ?",
          options: [
            { text: "Xalam", correct: false },
            { text: "Touré Kunda", correct: true },
            { text: "Orchestra Baobab", correct: false },
            { text: "Super Diamono", correct: false }
          ],
          explanation: "Touré Kunda, signifiant 'famille éléphant', a été pionnier de la 'World Music' en mélangeant les rythmes africains avec le jazz, le funk et le reggae."
        }
      ],
      
       // --- SÉRIE 8 ---
      [
        {
          question: "Quel type de tissu, souvent coloré et à motifs, est très populaire en Afrique de l'Ouest ?",
          options: [
            { text: "Le Wax", correct: true },
            { text: "Le Cachemire", correct: false },
            { text: "Le Tweed", correct: false },
            { text: "Le Denim", correct: false }
          ],
          explanation: "Le Wax est un tissu en coton imprimé selon une technique à la cire, caractérisé par ses couleurs vives et ses motifs complexes."
        },
        {
          question: "Quel artiste est le chanteur principal du groupe Super Diamono de la Gueule Tapée ?",
          options: [
            { text: "Ismaël Lô", correct: false },
            { text: "Omar Pène", correct: true },
            { text: "Baaba Maal", correct: false },
            { text: "Thione Seck", correct: false }
          ],
          explanation: "Omar Pène est le leader charismatique du Super Diamono, groupe phare de la scène sénégalaise depuis les années 70, connu pour son style 'Afro-feeling'."
        },
        {
          question: "Quel est l'ingrédient principal du 'Ngalax', un dessert souvent préparé pour Pâques ?",
          options: [
            { text: "Le mil et la pâte d'arachide", correct: true },
            { text: "Le riz et le lait de coco", correct: false },
            { text: "Le maïs et le gombo", correct: false },
            { text: "Le manioc et le sucre", correct: false }
          ],
          explanation: "Le Ngalax est une bouillie sucrée à base de mil, de pâte d'arachide ('Tiga Degué'), de pain de singe et d'autres ingrédients, traditionnellement partagée à Pâques."
        },
        {
          question: "Le 'FESMAN' (Festival Mondial des Arts Nègres), initié par Senghor, a eu lieu pour la première fois en...",
          options: [
            { text: "1960", correct: false },
            { text: "1966", correct: true },
            { text: "1974", correct: false },
            { text: "1980", correct: false }
          ],
          explanation: "Le premier FESMAN s'est tenu à Dakar en 1966, célébrant la culture et les arts du monde noir dans le cadre de la Négritude prônée par Senghor."
        },
        {
          question: "Quelle romancière a écrit 'Le Ventre de l'Atlantique' ?",
          options: [
            { text: "Aminata Sow Fall", correct: false },
            { text: "Mariama Bâ", correct: false },
            { text: "Fatou Diome", correct: true },
            { text: "Ken Bugul", correct: false }
          ],
          explanation: "Publié en 2003, ce roman de Fatou Diome explore les thèmes de l'immigration, du rêve européen et des relations entre la diaspora et le pays d'origine."
        }
      ],
      
       // --- SÉRIE 9 ---
      [
        {
          question: "Le 'Kumpo', le 'Niasse' et le 'Samay' sont des masques sacrés de quelle région ?",
          options: [
            { text: "Le Fouta-Toro", correct: false },
            { text: "Le pays Bassari", correct: false },
            { text: "La Casamance (culture Diola)", correct: true },
            { text: "Le Sine-Saloum", correct: false }
          ],
          explanation: "Ces masques Diola incarnent des esprits liés aux rites d'initiation et aux cycles agricoles, jouant un rôle social et spirituel important."
        },
        {
          question: "Quel instrument, semblable à un luth à 4 ou 5 cordes, est joué par les griots Wolofs et Peuls ?",
          options: [
            { text: "Le Xalam", correct: true },
            { text: "La Kora", correct: false },
            { text: "Le Balafon", correct: false },
            { text: "Le Tama (Tam-tam d'aisselle)", correct: false }
          ],
          explanation: "Le Xalam (ou N'goni pour les Mandingues) est un instrument traditionnel à cordes pincées, ancêtre possible du banjo."
        },
        {
          question: "Quel est le surnom de l'artiste-musicien Baaba Maal, originaire de Podor ?",
          options: [
            { text: "Le Roi du Mbalax", correct: false },
            { text: "La Voix du Fouta", correct: true },
            { text: "Le Griot d'Or", correct: false },
            { text: "Le Prince du Saloum", correct: false }
          ],
          explanation: "Baaba Maal est un chanteur Peul originaire du Fouta-Toro (la vallée du fleuve Sénégal), dont il est l'un des plus célèbres ambassadeurs culturels."
        },
        {
          question: "Comment s'appelle le plat de poisson braisé, souvent servi avec une sauce 'verte' épicée ?",
          options: [
            { text: "Le Dibité", correct: false },
            { text: "Le Poisson Yassa", correct: false },
            { text: "Le Thiof à la braise", correct: true },
            { text: "Le Kaldou", correct: false }
          ],
          explanation: "Le Thiof (mérou bronzé) est un poisson noble très apprécié. Braisé et servi avec des sauces (verte, oignon...), c'est un classique des restaurants."
        },
        {
          question: "Quelle est la principale confrérie soufie au Sénégal en termes de nombre d'adeptes ?",
          options: [
            { text: "La Tidjaniya", correct: true },
            { text: "Le Mouridisme", correct: false },
            { text: "La Qadiriyya", correct: false },
            { text: "La Layène", correct: false }
          ],
          explanation: "La Tidjaniya, avec ses centres à Tivaouane et Kaolack (Médina Baye), est la confrérie comptant le plus grand nombre de disciples au Sénégal."
        }
      ],
      
       // --- SÉRIE 10 ---
      [
        {
          question: "Qui a marqué le but en or qui a qualifié le Sénégal pour les quarts de finale de la Coupe du Monde 2002 ?",
          options: [
            { text: "El Hadji Diouf", correct: false },
            { text: "Henri Camara", correct: true },
            { text: "Papa Bouba Diop", correct: false },
            { text: "Salif Diao", correct: false }
          ],
          explanation: "Henri Camara a marqué le 'but en or' (règle alors en vigueur) contre la Suède en huitième de finale, propulsant le Sénégal en quart."
        },
        {
          question: "Quel écrivain sénégalais a publié 'Les Contes d'Amadou Koumba' ?",
          options: [
            { text: "Léopold Sédar Senghor", correct: false },
            { text: "Ousmane Sembène", correct: false },
            { text: "Birago Diop", correct: true },
            { text: "Cheikh Anta Diop", correct: false }
          ],
          explanation: "Birago Diop a recueilli et mis par écrit des contes traditionnels Wolofs, transmis oralement par le griot Amadou Koumba."
        },
        {
          question: "La 'Calebasse' est un récipient fabriqué à partir de...",
          options: [
            { text: "Terre cuite", correct: false },
            { text: "L'écorce du Baobab", correct: false },
            { text: "Une courge séchée", correct: true },
            { text: "Bois de rônier", correct: false }
          ],
          explanation: "La calebasse est le fruit séché et vidé d'une plante de la famille des courges (Lagenaria siceraria), utilisée comme récipient ou instrument de musique."
        },
        {
          question: "Quel est le nom du plat à base de gombo (okra) très populaire ?",
          options: [
            { text: "La Soupe Kandia", correct: true },
            { text: "Le Mafé", correct: false },
            { text: "Le Ndambé", correct: false },
            { text: "Le Caldou", correct: false }
          ],
          explanation: "La Soupe Kandia (ou 'Suppu Kandja') est une sauce gluante à base de gombo, souvent préparée avec du poisson fumé ou de la viande et de l'huile de palme."
        },
        {
          question: "Qui est la première femme cinéaste d'Afrique subsaharienne, réalisatrice de 'Kaddu Beykat' (Lettre paysanne) ?",
          options: [
            { text: "Mati Diop", correct: false },
            { text: "Mariama Bâ", correct: false },
            { text: "Safi Faye", correct: true },
            { text: "Aminata Sow Fall", correct: false }
          ],
          explanation: "Safi Faye, également ethnologue, a réalisé 'Kaddu Beykat' en 1975, un film pionnier abordant les difficultés du monde rural."
        }
      ],
      
       // --- SÉRIE 11 ---
      [
        {
          question: "Le 'Ndawrabine' est un vêtement traditionnel porté par...",
          options: [
            { text: "Les lutteurs", correct: false },
            { text: "Les jeunes femmes Signares", correct: true },
            { text: "Les griots", correct: false },
            { text: "Les chefs religieux", correct: false }
          ],
          explanation: "Le Ndawrabine était le vêtement élégant des jeunes femmes métisses (Signares) de Saint-Louis et Gorée à l'époque coloniale."
        },
        {
          question: "Quelle romancière a écrit sous le pseudonyme de 'Ken Bugul', qui signifie 'personne n'en veut' en Wolof ?",
          options: [
            { text: "Mariama Bâ", correct: false },
            { text: "Aminata Sow Fall", correct: false },
            { text: "Mariètou Mbaye Biléoma", correct: true },
            { text: "Fatou Diome", correct: false }
          ],
          explanation: "Ken Bugul est le pseudonyme de Mariètou Mbaye Biléoma, auteure de romans souvent autobiographiques comme 'Le Baobab fou'."
        },
        {
          question: "Quel est le nom du 'tam-tam d'aisselle' dont la hauteur de son peut être changée par pression ?",
          options: [
            { text: "Le Sabar", correct: false },
            { text: "Le Tama", correct: true },
            { text: "Le Djembé", correct: false },
            { text: "Le Balafon", correct: false }
          ],
          explanation: "Le Tama, tenu sous l'aisselle, permet au musicien (griot) de moduler les sons en pressant les cordes qui tendent la peau, imitant la parole."
        },
        {
          question: "Quel film d'Ousmane Sembène, critiquant la bureaucratie post-coloniale, est basé sur un mandat postal ?",
          options: [
            { text: "La Noire de...", correct: false },
            { text: "Ceddo", correct: false },
            { text: "Mandabi (Le Mandat)", correct: true },
            { text: "Moolaadé", correct: false }
          ],
          explanation: "'Mandabi' (1968) raconte les mésaventures kafkaïennes d'un homme essayant de toucher un mandat venu de France, dénonçant la corruption et la bureaucratie."
        },
        {
          question: "Quel plat est un ragoût de haricots niébé, souvent mangé au petit-déjeuner avec du pain ?",
          options: [
            { text: "Le Ndambé", correct: true },
            { text: "Le Thiou", correct: false },
            { text: "Le Fondé", correct: false },
            { text: "Le Yassa", correct: false }
          ],
          explanation: "Le Ndambé est un plat simple et populaire, souvent vendu dans la rue, à base de haricots niébé mijotés avec des épices et parfois de la viande ou du poisson séché."
        }
      ],
      
       // --- SÉRIE 12 ---
      [
        {
          question: "Comment s'appelle l'art de la peinture sous verre, très populaire au Sénégal ?",
          options: [
            { text: "Le Fixé sous verre", correct: true },
            { text: "Le Bogolan", correct: false },
            { text: "Le Batik", correct: false },
            { text: "La Fresque", correct: false }
          ],
          explanation: "Le 'Fixé sous verre' est une technique de peinture inversée sur verre, très prisée pour les portraits et les scènes religieuses ou quotidiennes."
        },
        {
          question: "Quel romancier a écrit 'La Grève des bàttu', qui critique la mendicité instrumentalisée ?",
          options: [
            { text: "Mariama Bâ", correct: false },
            { text: "Aminata Sow Fall", correct: true },
            { text: "Ousmane Sembène", correct: false },
            { text: "Ken Bugul", correct: false }
          ],
          explanation: "Dans ce roman de 1979, Aminata Sow Fall imagine une grève des mendiants ('bàttu') pour dénoncer leur exploitation et l'hypocrisie sociale."
        },
        {
          question: "Le 'Caldou' (ou 'Kaldou') est un plat de poisson typique de quelle région ?",
          options: [
            { text: "De Saint-Louis", correct: false },
            { text: "Du Fouta", correct: false },
            { text: "De la Casamance", correct: true },
            { text: "De Dakar", correct: false }
          ],
          explanation: "Le Caldou est un plat Diola à base de poisson frais cuit dans une sauce légère à l'huile de palme et au citron vert."
        },
        {
          question: "Quel chanteur, ancien membre du Super Diamono, a mené une carrière solo réussie avec des tubes comme 'Jamm' ?",
          options: [
            { text: "Omar Pène", correct: false },
            { text: "Ismaël Lô", correct: true },
            { text: "Baaba Maal", correct: false },
            { text: "Youssou N'Dour", correct: false }
          ],
          explanation: "Ismaël Lô, reconnaissable à son harmonica, a connu un grand succès international après avoir quitté le Super Diamono."
        },
        {
          question: "Quelle est la particularité du Lakh, une bouillie de mil ?",
          options: [
            { text: "Elle est servie salée avec de la viande", correct: false },
            { text: "Elle est servie sucrée avec du lait caillé (Sow)", correct: true },
            { text: "Elle est cuite à la vapeur", correct: false },
            { text: "Elle est faite à base de maïs", correct: false }
          ],
          explanation: "Le Lakh est une bouillie épaisse de mil mélangée à du lait caillé sucré, souvent préparée lors des baptêmes ou autres cérémonies."
        }
      ],
      
       // --- SÉRIE 13 ---
      [
        {
          question: "Qui est l'architecte du Monument de la Renaissance Africaine ?",
          options: [
            { text: "Pierre Goudiaby Atepa", correct: true },
            { text: "Ousmane Sow", correct: false },
            { text: "Safi Faye", correct: false },
            { text: "Un architecte nord-coréen", correct: false } // L'entreprise était nord-coréenne, mais le design initial est sénégalais.
          ],
          explanation: "L'architecte sénégalais Pierre Goudiaby Atepa est crédité du design initial du monument, bien que sa construction ait été réalisée par une entreprise nord-coréenne."
        },
        {
          question: "Quel film de Mati Diop, Grand Prix à Cannes, se déroule dans la banlieue de Dakar ?",
          options: [
            { text: "Atlantique", correct: true },
            { text: "Mille Soleils", correct: false },
            { text: "Félicité", correct: false },
            { text: "Touki Bouki", correct: false }
          ],
          explanation: "'Atlantique' (2019), premier long-métrage de Mati Diop (nièce de Djibril Diop Mambéty), mêle drame social et fantastique dans la banlieue dakaroise."
        },
        {
          question: "Le 'Didadi' est un rythme de danse et de musique originaire de quelle région d'Afrique de l'Ouest ?",
          options: [
            { text: "Du Mali (région de Ségou)", correct: true },
            { text: "De la Casamance", correct: false },
            { text: "Du Nigeria", correct: false },
            { text: "Du Fouta-Toro", correct: false }
          ],
          explanation: "Le Didadi est un rythme traditionnel Bambara du Mali, souvent joué lors des fêtes, popularisé par des artistes comme Super Biton de Ségou."
        },
        {
          question: "Comment s'appelle le plat de riz et de viande (ou poisson) sans tomate, 'riz blanc' ?",
          options: [
            { text: "Thiébou Dieune Weekh", correct: true }, // Dieune = Poisson, Yapp = Viande
            { text: "Thiébou Yapp Weekh", correct: false }, // Weekh signifie blanc
            { text: "Yassa", correct: false },
            { text: "Mafé", correct: false }
          ],
          explanation: "'Weekh' signifie 'blanc' en Wolof. Ce plat utilise les mêmes légumes et épices que le Thiéboudienne/Thiébouyapp rouge, mais sans tomate concentrée."
        },
        {
          question: "Quel est le nom du plat à base de niébés (haricots) et de patates douces ?",
          options: [
            { text: "Le Ndambé", correct: true },
            { text: "Le Bassi-Salté", correct: false },
            { text: "Le Thiou", correct: false },
            { text: "Le Fondé", correct: false }
          ],
          explanation: "Le Ndambé est un plat simple et nourrissant, souvent consommé au petit-déjeuner ou comme en-cas."
        }
      ],
      
       // --- SÉRIE 14 ---
      [
        {
          question: "Quel festival de cinéma est organisé à Dakar, en hommage au 'père du cinéma africain' ?",
          options: [
            { text: "Le FESPACO (se tient à Ouaga)", correct: false },
            { text: "Les Journées Cinématographiques de Carthage (JCC)", correct: false },
            { text: "Le Festival Sembène", correct: true }, // Peut varier de nom mais l'idée est là
            { text: "Dak'Art", correct: false }
          ],
          explanation: "Plusieurs initiatives et festivals à Dakar rendent hommage à Ousmane Sembène, figure tutélaire du cinéma sénégalais et africain."
        },
        {
          question: "Le 'Tassou' est une forme de...",
          options: [
            { text: "Poésie chantée/parlée rapide", correct: true },
            { text: "Lutte traditionnelle", correct: false },
            { text: "Tissage de pagnes", correct: false },
            { text: "Plat à base de mil", correct: false }
          ],
          explanation: "Le Tassou est une forme d'expression vocale rapide et rythmée, souvent improvisée, utilisée pour louer ou critiquer, typique des femmes Wolofs."
        },
        {
          question: "Quel musicien est le fondateur du groupe 'Dandé Lénol' (La Voix du Peuple) ?",
          options: [
            { text: "Youssou N'Dour", correct: false },
            { text: "Omar Pène", correct: false },
            { text: "Baaba Maal", correct: true },
            { text: "Ismaël Lô", correct: false }
          ],
          explanation: "Baaba Maal a fondé le groupe 'Dandé Lénol' pour promouvoir la musique et la culture Peul du Fouta-Toro."
        },
        {
          question: "Quel est le nom du ragoût de viande ou poisson mijoté avec des légumes ?",
          options: [
            { text: "Le Thiou", correct: true },
            { text: "Le Yassa", correct: false },
            { text: "Le Mafé", correct: false },
            { text: "Le Caldou", correct: false }
          ],
          explanation: "Le Thiou (ou 'Thiou Boulette', 'Thiou Diola'...) est un terme générique pour un ragoût mijoté, souvent à base de tomate."
        },
        {
          question: "Quel animal est au centre des 'Contes d'Amadou Koumba' de Birago Diop ?",
          options: [
            { text: "Le lion (Gayo)", correct: false },
            { text: "L'hyène (Bouki)", correct: false },
            { text: "Le lièvre (Leuk)", correct: true },
            { text: "Le singe", correct: false }
          ],
          explanation: "Leuk le Lièvre est le personnage malicieux et intelligent qui déjoue souvent Bouki l'Hyène, bête et gloutonne, dans ces contes célèbres."
        }
      ],
      
       // --- SÉRIE 15 ---
      [
        {
          question: "Le 'Gàmou' (ou Maouloud) est une grande fête religieuse commémorant...",
          options: [
            { text: "La naissance du Prophète Mohamed (PSL)", correct: true },
            { text: "Le départ en exil de Cheikh A. Bamba", correct: false },
            { text: "La fin du Ramadan", correct: false },
            { text: "Le pèlerinage à La Mecque", correct: false }
          ],
          explanation: "Le Gamou (Mawlid an-Nabi) célèbre la naissance du Prophète. Les plus grands rassemblements ont lieu à Tivaouane (Tidjanes) et Médina Baye (Niasènes)."
        },
        {
          question: "Quel est le nom du couscous de mil, plat de fête souvent servi lors du 'Tamkharit' (Nouvel An Musulman) ?",
          options: [
            { text: "Le Thiéré (Bassi-Salté)", correct: true },
            { text: "Le Lakh", correct: false },
            { text: "Le Fondé", correct: false },
            { text: "Le Ngalax", correct: false }
          ],
          explanation: "Le Bassi-Salté est un plat de Thiéré (couscous de mil) préparé avec de la viande, des légumes et des boulettes, traditionnellement partagé pour Achoura (Tamkharit)."
        },
        {
          question: "Quel chanteur de Mbalax, connu pour sa voix puissante, était le leader du groupe 'Lemzo Diamono' ?",
          options: [
            { text: "Alioune Mbaye Nder", correct: true },
            { text: "Thione Seck", correct: false },
            { text: "Fallou Dieng", correct: false },
            { text: "Pape Diouf", correct: false }
          ],
          explanation: "Alioune Mbaye Nder a marqué la scène Mbalax des années 90 avec son groupe Lemzo Diamono avant de poursuivre une carrière solo."
        },
        {
          question: "Le 'Grand Magal' de Touba commémore...",
          options: [
            { text: "La naissance de Cheikh Amadou Bamba", correct: false },
            { text: "Le départ en exil de Cheikh Amadou Bamba", correct: true },
            { text: "Son retour d'exil", correct: false },
            { text: "La fondation de Touba", correct: false }
          ],
          explanation: "Le Grand Magal, le plus grand pèlerinage annuel du Sénégal, commémore le départ en exil au Gabon de Cheikh Amadou Bamba en 1895."
        },
        {
          question: "Quelle romancière a écrit 'La Grève des bàttu', qui critique la mendicité instrumentalisée ?",
          options: [
            { text: "Mariama Bâ", correct: false },
            { text: "Aminata Sow Fall", correct: true },
            { text: "Ousmane Sembène", correct: false },
            { text: "Ken Bugul", correct: false }
          ],
          explanation: "Dans ce roman de 1979, Aminata Sow Fall imagine une grève des mendiants ('bàttu') pour dénoncer leur exploitation et l'hypocrisie sociale."
        }
      ]
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
          explanation: "Les Signares (du portugais 'senhora') étaient des femmes métisses influentes aux 18e et 19e siècles, actives dans le commerce et la vie sociale."
        }
      ],

      // --- SÉRIE 3 ---
      [
        {
          question: "Quel poète, co-fondateur de la Négritude, était aussi le premier président du Sénégal ?",
          options: [
            { text: "Birago Diop", correct: false },
            { text: "Aimé Césaire", correct: false },
            { text: "David Diop", correct: false },
            { text: "Léopold Sédar Senghor", correct: true }
          ],
          explanation: "L.S. Senghor, avec Aimé Césaire et Léon Gontran Damas, a fondé le mouvement littéraire et politique de la Négritude dans les années 1930."
        },
        {
          question: "Quel royaume pré-colonial, dont la capitale était à Lambaye, dominait le centre du Sénégal ?",
          options: [
            { text: "Le Royaume du Baol", correct: true },
            { text: "Le Royaume du Saloum", correct: false },
            { text: "Le Royaume du Walo", correct: false },
            { text: "L'Empire du Jolof", correct: false }
          ],
          explanation: "Le Royaume du Baol, avec sa capitale Lambaye, était un puissant état Wolof situé entre le Cayor et le Sine."
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
          question: "Quel grand empire a dominé la région du Sénégal oriental avant l'arrivée des Européens ?",
          options: [
            { text: "L'Empire du Ghana", correct: false },
            { text: "L'Empire du Mali", correct: true },
            { text: "L'Empire Songhaï", correct: false },
            { text: "L'Empire du Jolof", correct: false }
          ],
          explanation: "L'Empire du Mali, à son apogée aux 13e et 14e siècles, s'étendait sur une vaste partie de l'Afrique de l'Ouest, incluant l'actuel Sénégal oriental."
        }
      ],
      
      // --- SÉRIE 4 ---
      [
        {
          question: "Qui a dirigé la confrérie des Tidianes depuis Tivaouane pendant une grande partie du 20e siècle ?",
          options: [
            { text: "Cheikh Amadou Bamba", correct: false },
            { text: "El Hadj Malick Sy", correct: true },
            { text: "Baye Niass", correct: false },
            { text: "Limamou Laye", correct: false }
          ],
          explanation: "El Hadj Malick Sy (1855-1922) est le fondateur de la branche de la Tidjaniya basée à Tivaouane, devenue la plus importante au Sénégal."
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
          question: "Quel explorateur portugais est considéré comme le premier Européen à atteindre l'embouchure du fleuve Sénégal en 1444 ?",
          options: [
            { text: "Vasco de Gama", correct: false },
            { text: "Bartolomeu Dias", correct: false },
            { text: "Dinis Dias", correct: true },
            { text: "Fernand de Magellan", correct: false }
          ],
          explanation: "Dinis Dias, navigateur portugais, fut le premier Européen à dépasser le Cap Blanc et à atteindre le fleuve Sénégal et la presqu'île du Cap-Vert."
        },
        {
          question: "Le 'Massacre de Thiaroye' en 1944 concernait...",
          options: [
            { text: "Une révolte contre les impôts", correct: false },
            { text: "Des tirailleurs démobilisés réclamant leur solde", correct: true },
            { text: "Une manifestation pour l'indépendance", correct: false },
            { text: "Un conflit interethnique", correct: false }
          ],
          explanation: "Au camp militaire de Thiaroye, près de Dakar, l'armée française a tiré sur des Tirailleurs sénégalais fraîchement rentrés d'Europe qui manifestaient pour le paiement de leurs indemnités."
        },
        {
          question: "Quel dirigeant a fondé la confrérie 'Layène' à la fin du 19e siècle ?",
          options: [
            { text: "Limamou Laye", correct: true },
            { text: "Cheikh Amadou Bamba", correct: false },
            { text: "El Hadj Omar Tall", correct: false },
            { text: "Baye Niass", correct: false }
          ],
          explanation: "Seydina Limamou Laye (1843-1909), d'origine Lébou, s'est proclamé Mahdi (envoyé de Dieu) et a fondé la communauté Layène, basée à Yoff et Cambérène."
        }
      ],
      
       // --- SÉRIE 5 ---
      [
        {
          question: "Quel était le titre du souverain de l'Empire du Jolof ?",
          options: [
            { text: "Le Damel", correct: false },
            { text: "Le Teigne", correct: false },
            { text: "Le Bourba Jolof", correct: true },
            { text: "Le Brak", correct: false }
          ],
          explanation: "Le 'Bourba Jolof' était le titre de l'empereur de l'Empire du Jolof, qui dominait plusieurs royaumes vassaux (Cayor, Baol, Walo...)."
        },
        {
          question: "Quel parti politique L.S. Senghor a-t-il dirigé pour mener le Sénégal à l'indépendance ?",
          options: [
            { text: "Le PDS (Parti Démocratique Sénégalais)", correct: false },
            { text: "L'UPS (Union Progressiste Sénégalaise)", correct: true },
            { text: "Le PAI (Parti Africain de l'Indépendance)", correct: false },
            { text: "Le RND (Rassemblement National Démocratique)", correct: false }
          ],
          explanation: "L'UPS, issue du Bloc Démocratique Sénégalais (BDS), fut le parti dominant de Senghor. Il deviendra plus tard le Parti Socialiste (PS)."
        },
        {
          question: "Quel grand résistant et chef religieux a fondé un empire théocratique en Afrique de l'Ouest ?",
          options: [
            { text: "El Hadj Omar Tall", correct: true },
            { text: "Samory Touré", correct: false },
            { text: "Lat Dior Diop", correct: false },
            { text: "Alboury Ndiaye", correct: false }
          ],
          explanation: "El Hadj Omar Tall, figure de la Tidjaniya, a mené un jihad au 19e siècle et fondé l'Empire Toucouleur qui s'étendait sur une partie du Mali, de la Guinée et du Sénégal actuels."
        },
        {
          question: "Quel était le nom de l'entité politique qui regroupait les colonies françaises d'Afrique de l'Ouest, dont la capitale était Dakar ?",
          options: [
            { text: "L'Afrique Équatoriale Française (AEF)", correct: false },
            { text: "L'Afrique Occidentale Française (AOF)", correct: true },
            { text: "La Fédération du Mali", correct: false },
            { text: "La Communauté Française", correct: false }
          ],
          explanation: "L'AOF, créée en 1895, regroupait 8 colonies françaises (Sénégal, Mauritanie, Soudan Français, Guinée, Côte d'Ivoire, Niger, Haute-Volta, Dahomey)."
        },
        {
          question: "Qui est la première femme à avoir été Première ministre du Sénégal (2001-2002) ?",
          options: [
            { text: "Amina Touré", correct: false },
            { text: "Mame Madior Boye", correct: true },
            { text: "Aissata Tall Sall", correct: false },
            { text: "Nafy Ngom Keita", correct: false }
          ],
          explanation: "Mame Madior Boye a été nommée Première ministre par le président Abdoulaye Wade, devenant la première femme à occuper ce poste au Sénégal."
        }
      ],
      
       // --- SÉRIE 6 ---
      [
        {
          question: "Sous quel président le Sénégal a-t-il connu sa deuxième alternance politique en 2012 ?",
          options: [
            { text: "Abdou Diouf", correct: false },
            { text: "Abdoulaye Wade", correct: true }, // Wade a été battu en 2012.
            { text: "Macky Sall", correct: false }, // Macky Sall a gagné en 2012.
            { text: "Léopold Sédar Senghor", correct: false }
          ],
          explanation: "En 2012, Macky Sall a battu le président sortant Abdoulaye Wade, marquant la deuxième alternance démocratique après celle de 2000."
        },
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
          question: "Quel était le titre du souverain du royaume du Sine ?",
          options: [
            { text: "Bour Sine", correct: true },
            { text: "Bourba Jolof", correct: false },
            { text: "Damel", correct: false },
            { text: "Brak", correct: false }
          ],
          explanation: "Le souverain du royaume Sérère du Sine portait le titre de 'Bour Sine' (Roi du Sine)."
        },
        {
          question: "Quel était le titre du souverain du royaume du Walo ?",
          options: [
            { text: "Brak", correct: true },
            { text: "Teigne", correct: false },
            { text: "Bour", correct: false },
            { text: "Almamy", correct: false }
          ],
          explanation: "Le 'Brak' était le titre du souverain du royaume du Walo, situé près de l'embouchure du fleuve Sénégal."
        },
        {
          question: "Quel était le titre du souverain du royaume du Cayor ?",
          options: [
            { text: "Damel", correct: true },
            { text: "Laman", correct: false },
            { text: "Bour Sine", correct: false },
            { text: "Farba", correct: false }
          ],
          explanation: "Le 'Damel' était le titre du roi du Cayor, l'un des plus puissants royaumes Wolofs issus de l'éclatement de l'empire du Jolof."
        }
      ],
      
       // --- SÉRIE 7 ---
      [
        {
          question: "Quel leader religieux Peul a fondé l'imamat du Fouta-Toro à la fin du 18ème siècle ?",
          options: [
            { text: "Souleymane Baal", correct: true },
            { text: "El Hadj Omar Tall", correct: false },
            { text: "Cheikh Amadou Bamba", correct: false },
            { text: "Maba Diakhou Bâ", correct: false }
          ],
          explanation: "La 'Révolution Torodo' dirigée par Souleymane Baal a renversé la dynastie Denianké et instauré un État théocratique (Almamyat) au Fouta-Toro."
        },
        {
          question: "En 1982, le Sénégal a formé une confédération avec quel pays, dissoute en 1989 ?",
          options: [
            { text: "La Guinée", correct: false },
            { text: "Le Mali", correct: false },
            { text: "La Gambie (Sénégambie)", correct: true },
            { text: "La Mauritanie", correct: false }
          ],
          explanation: "La Confédération de Sénégambie a été créée pour promouvoir la coopération, mais a été dissoute en 1989 en raison de différends sur l'intégration."
        },
        {
          question: "Quel érudit et résistant a dirigé la confrérie Tidjane depuis Kaolack au 20e siècle ?",
          options: [
            { text: "El Hadj Malick Sy", correct: false },
            { text: "Ibrahima Niass (Baye Niass)", correct: true },
            { text: "Cheikh Amadou Bamba", correct: false },
            { text: "Limamou Laye", correct: false }
          ],
          explanation: "Cheikh Ibrahim Niass, dit 'Baye Niass', a fondé la branche 'Niasène' de la Tidjaniya à Médina Baye (Kaolack), qui a connu une expansion internationale."
        },
        {
          question: "Qui fut le principal opposant historique à Léopold Sédar Senghor ?",
          options: [
            { text: "Mamadou Dia", correct: true },
            { text: "Lamine Guèye", correct: false },
            { text: "Blaise Diagne", correct: false },
            { text: "Abdoulaye Wade", correct: false }
          ],
          explanation: "Mamadou Dia fut le Président du Conseil (Premier Ministre) de Senghor avant la crise de 1962 qui a conduit à son arrestation et à un régime présidentiel fort."
        },
        {
          question: "Quelle loi française de 1956 a accordé l'autonomie interne aux colonies africaines, ouvrant la voie à l'indépendance ?",
          options: [
            { text: "La Loi-cadre Defferre", correct: true },
            { text: "La Loi Lamine Guèye", correct: false },
            { text: "Les Accords d'Évian", correct: false },
            { text: "La Constitution de la IVe République", correct: false }
          ],
          explanation: "La Loi-cadre Defferre a mis en place des assemblées territoriales élues et des conseils de gouvernement dans les colonies, préparant leur émancipation."
        }
      ],
      
       // --- SÉRIE 8 ---
      [
        {
          question: "Qui a été le 4ème président du Sénégal, élu en 2012 ?",
          options: [
            { text: "Abdoulaye Wade", correct: false },
            { text: "Macky Sall", correct: true },
            { text: "Idrissa Seck", correct: false },
            { text: "Ousmane Sonko", correct: false }
          ],
          explanation: "Macky Sall a été président du Sénégal de 2012 à 2024, après avoir battu Abdoulaye Wade."
        },
        {
          question: "Quel dirigeant du Cayor a fait dérailler le train de Saint-Louis en 1883 en signe de résistance ?",
          options: [
            { text: "Alboury Ndiaye", correct: false },
            { text: "Lat Dior Diop", correct: true },
            { text: "Maba Diakhou Bâ", correct: false },
            { text: "Samba Laobé Fall", correct: false }
          ],
          explanation: "En signe de protestation contre l'avancée du chemin de fer sur ses terres, le Damel Lat Dior Diop a organisé le sabotage de la voie ferrée."
        },
        {
          question: "Quel a été le premier établissement commercial français permanent au Sénégal, fondé en 1659 ?",
          options: [
            { text: "Dakar", correct: false },
            { text: "Gorée", correct: false },
            { text: "Saint-Louis", correct: true },
            { text: "Rufisque", correct: false }
          ],
          explanation: "Fondé sur l'île de Ndar à l'embouchure du fleuve Sénégal, Saint-Louis est devenu le principal comptoir français pour le commerce de la gomme arabique et des esclaves."
        },
        {
          question: "Quel était le nom de l'empire qui a précédé les royaumes du Jolof, Walo, Cayor, etc. ?",
          options: [
            { text: "L'Empire du Ghana", correct: false },
            { text: "L'Empire du Mali", correct: false },
            { text: "L'Empire du Grand Jolof", correct: true },
            { text: "L'Empire Songhaï", correct: false }
          ],
          explanation: "L'Empire du Jolof (ou Diolof), fondé selon la tradition par Ndiadiane Ndiaye, a dominé la Sénégambie du 14e au 16e siècle avant d'éclater."
        },
        {
          question: "Quel leader politique a été maire de Dakar avant de devenir le premier président de l'Assemblée nationale ?",
          options: [
            { text: "Blaise Diagne", correct: false },
            { text: "Lamine Guèye", correct: true },
            { text: "Léopold Sédar Senghor", correct: false },
            { text: "Mamadou Dia", correct: false }
          ],
          explanation: "Lamine Guèye, avocat et homme politique influent, fut maire de Dakar et joua un rôle clé dans la vie politique sénégalaise avant et après l'indépendance."
        }
      ],
      
       // --- SÉRIE 9 ---
      [
        {
          question: "Le 'Kajoor' (Cayor) et le 'Bawol' (Baol) étaient des royaumes historiquement dominés par quelle ethnie ?",
          options: [
            { text: "Les Peuls", correct: false },
            { text: "Les Sérères", correct: false },
            { text: "Les Wolofs", correct: true },
            { text: "Les Mandingues", correct: false }
          ],
          explanation: "Le Cayor et le Baol étaient les principaux royaumes Wolofs issus de l'éclatement de l'empire du Jolof."
        },
        {
          question: "Quel royaume, fondé par Ndiadiane Ndiaye, est à l'origine de l'empire du Jolof ?",
          options: [
            { text: "Le Royaume du Walo", correct: true }, // Selon une tradition, il venait du Walo.
            { text: "Le Royaume du Sine", correct: false },
            { text: "Le Royaume du Gadiaga", correct: false },
            { text: "Le Royaume du Fouta-Toro", correct: false }
          ],
          explanation: "Selon la tradition orale, Ndiadiane Ndiaye, fondateur mythique de l'empire du Jolof, serait originaire du royaume du Walo."
        },
        {
          question: "Quel mouvement de Senghor prônait la revalorisation de la culture et des valeurs africaines ?",
          options: [
            { text: "Le Panafricanisme", correct: false },
            { text: "La Négritude", correct: true },
            { text: "Le Socialisme Africain", correct: false },
            { text: "L'Authenticité", correct: false }
          ],
          explanation: "La Négritude est un mouvement littéraire et politique qui affirmait la fierté des valeurs culturelles du monde noir face à la domination coloniale."
        },
        {
          question: "Quel événement majeur en 2002 a propulsé le Sénégal sur la scène internationale ?",
          options: [
            { text: "Le naufrage du Joola", correct: false },
            { text: "La victoire contre la France à la Coupe du Monde", correct: true },
            { text: "L'élection d'Abdoulaye Wade", correct: false },
            { text: "La découverte de pétrole", correct: false }
          ],
          explanation: "Lors du match d'ouverture de la Coupe du Monde 2002, le Sénégal a créé une immense surprise en battant la France, championne du monde en titre (1-0)."
        },
        {
          question: "Qui fut la dernière reine (Lingeer) du royaume du Walo, connue pour sa résistance ?",
          options: [
            { text: "Aline Sitoé Diatta", correct: false },
            { text: "Ndatté Yalla Mbodj", correct: true },
            { text: "Yacine Boubou", correct: false },
            { text: "Lingeer Fatim Beye", correct: false } // Confusion possible, Ndatté Yalla est la plus célèbre.
          ],
          explanation: "La Lingeer Ndatté Yalla Mbodj a dirigé la résistance du Walo contre les Français et les Maures au milieu du 19e siècle."
        }
      ],
      
       // --- SÉRIE 10 ---
      [
        {
          question: "Quel marabout du Rip (Saloum) a mené une guerre sainte contre les royaumes traditionnels au 19e siècle ?",
          options: [
            { text: "Maba Diakhou Bâ", correct: true },
            { text: "El Hadj Omar Tall", correct: false },
            { text: "Lat Dior Diop", correct: false },
            { text: "Cheikh Amadou Bamba", correct: false }
          ],
          explanation: "Maba Diakhou Bâ, Almamy du Rip, a tenté d'unifier les royaumes de la région sous la bannière de l'Islam, entrant en conflit avec le Sine, le Saloum et les Français."
        },
        {
          question: "Le 'Code de l'indigénat' était un système de...",
          options: [
            { text: "Commerce équitable", correct: false },
            { text: "Justice et répression coloniale", correct: true },
            { text: "Éducation religieuse", correct: false },
            { text: "Propriété foncière", correct: false }
          ],
          explanation: "Le Code de l'indigénat était un ensemble de règles juridiques discriminatoires appliquées aux 'sujets' (non-citoyens) dans les colonies françaises, permettant sanctions administratives et travail forcé."
        },
        {
          question: "Quel a été le premier film d'Ousmane Sembène, considéré comme le premier long-métrage africain ?",
          options: [
            { text: "Mandabi", correct: false },
            { text: "La Noire de...", correct: true },
            { text: "Ceddo", correct: false },
            { text: "Xala", correct: false }
          ],
          explanation: "'La Noire de...' (1966) raconte l'histoire tragique d'une jeune Sénégalaise employée comme bonne en France."
        },
        {
          question: "En quelle année le Sénégal a-t-il aboli la peine de mort ?",
          options: [
            { text: "1981", correct: false },
            { text: "2004", correct: true },
            { text: "1960", correct: false },
            { text: "Jamais", correct: false }
          ],
          explanation: "Le Sénégal a aboli la peine de mort pour tous les crimes en décembre 2004, sous la présidence d'Abdoulaye Wade."
        },
        {
          question: "Le 'Pont Faidherbe', reliant l'île de Saint-Louis au continent, a été construit par...",
          options: [
            { text: "Gustave Eiffel", correct: false },
            { text: "La société Nouguier, Kessler & Cie", correct: true }, // Eiffel a fait une proposition mais ce n'est pas lui qui l'a construit.
            { text: "L'armée française", correct: false },
            { text: "L'UNESCO", correct: false }
          ],
          explanation: "Ce pont métallique emblématique, inauguré en 1897, a été construit par la société française Nouguier, Kessler & Cie."
        }
      ],
      
       // --- SÉRIE 11 ---
      [
        {
          question: "Quel était le titre du souverain du royaume du Baol ?",
          options: [
            { text: "Teigne", correct: true },
            { text: "Damel", correct: false },
            { text: "Bour Sine", correct: false },
            { text: "Brak", correct: false }
          ],
          explanation: "Le souverain du Baol portait le titre de 'Teigne'. Le 'Damel' régnait sur le Cayor, le 'Bour' sur le Sine et le Saloum, et le 'Brak' sur le Walo."
        },
        {
          question: "Quel royaume pré-colonial était situé dans le delta du Saloum et avait pour capitale Kahone ?",
          options: [
            { text: "Le Royaume du Sine", correct: false },
            { text: "Le Royaume du Saloum", correct: true },
            { text: "Le Royaume du Baol", correct: false },
            { text: "Le Royaume du Cayor", correct: false }
          ],
          explanation: "Le Royaume du Saloum, un puissant royaume Sérère, avait sa capitale à Kahone, près de l'actuelle Kaolack."
        },
        {
          question: "Quelle ethnie est historiquement associée aux royaumes du Sine et du Saloum ?",
          options: [
            { text: "Les Wolofs", correct: false },
            { text: "Les Peuls", correct: false },
            { text: "Les Sérères", correct: true },
            { text: "Les Diolas", correct: false }
          ],
          explanation: "Les royaumes du Sine et du Saloum étaient des États Sérères majeurs, dirigés par une aristocratie 'Guelwar' d'origine mandingue."
        },
        {
          question: "Quel leader religieux a été exilé au Gabon par l'administration coloniale française ?",
          options: [
            { text: "Cheikh Amadou Bamba", correct: true },
            { text: "El Hadj Malick Sy", correct: false },
            { text: "Baye Niass", correct: false },
            { text: "Cheikh Anta Diop", correct: false }
          ],
          explanation: "Craignant son influence croissante, les autorités coloniales ont exilé Cheikh Amadou Bamba au Gabon de 1895 à 1902."
        },
        {
          question: "Quelle bataille de 1864 a vu la victoire de Maba Diakhou Bâ sur les forces coloniales ?",
          options: [
            { text: "La bataille de Dékhelé", correct: false },
            { text: "La bataille de Pathé Badiane", correct: true },
            { text: "La bataille de Fandane-Thiouthioune", correct: false },
            { text: "La bataille de Guillé", correct: false }
          ],
          explanation: "À Pathé Badiane, les troupes de Maba Diakhou Bâ infligèrent une défaite aux forces françaises, marquant un temps fort de sa résistance."
        }
      ],
      
       // --- SÉRIE 12 ---
      [
        {
          question: "Quel fut le principal parti d'opposition légal sous le règne d'Abdou Diouf (avant 2000) ?",
          options: [
            { text: "Le Parti Démocratique Sénégalais (PDS)", correct: true },
            { text: "Le Parti Africain de l'Indépendance (PAI)", correct: false },
            { text: "And-Jëf", correct: false },
            { text: "Le Mouvement des Forces Démocratiques de Casamance (MFDC)", correct: false }
          ],
          explanation: "Le PDS, fondé par Abdoulaye Wade en 1974, a été le principal parti d'opposition au Parti Socialiste pendant des décennies avant d'accéder au pouvoir en 2000."
        },
        {
          question: "Qui était le chef du 'Bloc Démocratique Sénégalais' (BDS) avant qu'il ne devienne l'UPS ?",
          options: [
            { text: "Lamine Guèye", correct: false },
            { text: "Léopold Sédar Senghor", correct: true },
            { text: "Valdiodio Ndiaye", correct: false },
            { text: "Mamadou Dia", correct: false }
          ],
          explanation: "Le BDS, créé en 1948 par Senghor et Mamadou Dia en rupture avec Lamine Guèye, est devenu l'Union Progressiste Sénégalaise (UPS) en 1958."
        },
        {
          question: "Quel traité de 1889 a placé le royaume du Cayor sous protectorat français ?",
          options: [
            { text: "Le Traité de Ngallè", correct: false },
            { text: "Le Traité de Guillé", correct: true },
            { text: "La Conférence de Berlin", correct: false },
            { text: "Le Traité de Tattaguine", correct: false }
          ],
          explanation: "Après la mort de Lat Dior, le Traité de Guillé a officialisé le protectorat français sur le Cayor, mettant fin à son indépendance."
        },
        {
          question: "Qui a été le premier Premier ministre du Sénégal en 1960 ?",
          options: [
            { text: "Léopold Sédar Senghor", correct: false },
            { text: "Lamine Guèye", correct: false },
            { text: "Mamadou Dia", correct: true },
            { text: "Habib Thiam", correct: false }
          ],
          explanation: "Mamadou Dia fut le premier chef de gouvernement (Président du Conseil) du Sénégal indépendant, dans un régime parlementaire bicéphale, avant la crise de 1962."
        },
        {
          question: "Quelle figure historique, 'Almamy' du Fouta-Toro, a résisté à la fois à El Hadj Omar Tall et aux Français ?",
          options: [
            { text: "Abdoulaye Ly", correct: false },
            { text: "Cheikh Amadou Bamba", correct: false },
            { text: "Maba Diakhou Bâ", correct: false },
            { text: "Abdul Bokar Kan", correct: true }
          ],
          explanation: "Abdul Bokar Kan, Almamy du Fouta-Toro, a défendu l'autonomie de son État face aux ambitions de l'Empire Toucouleur et à l'avancée coloniale française."
        }
      ],
      
       // --- SÉRIE 13 ---
      [
        {
          question: "Quel historien sénégalais a défendu la thèse de l'origine nègre de la civilisation égyptienne ?",
          options: [
            { text: "Cheikh Anta Diop", correct: true },
            { text: "Boubacar Barry", correct: false },
            { text: "Pathé Diagne", correct: false },
            { text: "Abdoulaye Ly", correct: false }
          ],
          explanation: "Cheikh Anta Diop a consacré une grande partie de ses travaux à démontrer les liens culturels et linguistiques entre l'Égypte pharaonique et l'Afrique noire."
        },
        {
          question: "Quel événement tragique a eu lieu en mer en 2002, marquant l'histoire récente du Sénégal ?",
          options: [
            { text: "L'effondrement du Pont de la Géole", correct: false },
            { text: "Le naufrage du Joola", correct: true },
            { text: "L'incendie du marché Kermel", correct: false },
            { text: "Le crash d'un avion militaire", correct: false }
          ],
          explanation: "Le naufrage du ferry 'Le Joola', qui reliait Dakar à Ziguinchor, a causé la mort de près de 1900 personnes, l'une des pires catastrophes maritimes civiles."
        },
        {
          question: "Quel a été le premier parti politique légalement créé au Sénégal en 1912 ?",
          options: [
            { text: "La SFIO", correct: false },
            { text: "Le Parti Républicain-Socialiste", correct: true }, // Fondé par Lamine Guèye
            { text: "Le Bloc Démocratique Sénégalais", correct: false },
            { text: "Le Parti Socialiste Sénégalais", correct: false }
          ],
          explanation: "Le Parti Républicain-Socialiste, fondé par Lamine Guèye, fut l'un des premiers partis politiques modernes créés par un Africain au Sénégal."
        },
        {
          question: "Quel dirigeant du Walo a lutté contre la domination des Maures et des Français ?",
          options: [
            { text: "Lat Dior Diop", correct: false },
            { text: "Alboury Ndiaye", correct: false },
            { text: "Ndiadiane Ndiaye", correct: false },
            { text: "Sidya Ndaté Yalla Diop", correct: true } // Fils de Ndatté Yalla
          ],
          explanation: "Sidya Ndaté Yalla Diop, fils de la Lingeer Ndatté Yalla, a continué la résistance du Walo avant d'être exilé par les Français."
        },
        {
          question: "Le 'Mouvement des Forces Démocratiques de Casamance' (MFDC) est un mouvement...",
          options: [
            { text: "Écologiste", correct: false },
            { text: "Indépendantiste", correct: true },
            { text: "Religieux", correct: false },
            { text: "Syndical", correct: false }
          ],
          explanation: "Le MFDC, créé en 1982, revendique l'indépendance de la Casamance, menant une rébellion armée contre l'État sénégalais pendant plusieurs décennies."
        }
      ],
      
       // --- SÉRIE 14 ---
      [
        {
          question: "Qui est le fondateur de la confrérie Tidjane au Sénégal, basé à Tivaouane ?",
          options: [
            { text: "El Hadj Omar Tall", correct: false },
            { text: "El Hadj Malick Sy", correct: true },
            { text: "Baye Niass", correct: false },
            { text: "Cheikh Amadou Bamba", correct: false }
          ],
          explanation: "El Hadj Malick Sy (1855-1922) a implanté et diffusé la confrérie Tidjane au Sénégal depuis son centre de Tivaouane."
        },
        {
          question: "Quel a été le premier président de l'Assemblée nationale du Sénégal indépendant ?",
          options: [
            { text: "Lamine Guèye", correct: true },
            { text: "Léopold Sédar Senghor", correct: false },
            { text: "Mamadou Dia", correct: false },
            { text: "Habib Thiam", correct: false }
          ],
          explanation: "Lamine Guèye, figure historique de la vie politique, fut élu premier président de l'Assemblée nationale après l'indépendance."
        },
        {
          question: "Quel était le principal produit commercial échangé à Gorée et Saint-Louis durant la traite atlantique ?",
          options: [
            { text: "L'or", correct: false },
            { text: "L'ivoire", correct: false },
            { text: "La gomme arabique", correct: false },
            { text: "Les captifs (esclaves)", correct: true }
          ],
          explanation: "Gorée et Saint-Louis furent des centres majeurs de la traite négrière atlantique, où les captifs étaient échangés contre des marchandises européennes."
        },
        {
          question: "Le 'Rassemblement Démocratique Africain' (RDA) était...",
          options: [
            { text: "Un parti politique inter-territorial", correct: true },
            { text: "Une confrérie religieuse", correct: false },
            { text: "Une milice coloniale", correct: false },
            { text: "Une banque de développement", correct: false }
          ],
          explanation: "Le RDA, fondé à Bamako en 1946, fut un mouvement politique majeur luttant pour l'émancipation des colonies françaises d'Afrique, avec des sections dans chaque territoire."
        },
        {
           question: "Qui fut le deuxième président du Sénégal, succédant à Senghor en 1981 ?",
           options: [
             { text: "Abdoulaye Wade", correct: false },
             { text: "Macky Sall", correct: false },
             { text: "Mamadou Dia", correct: false },
             { text: "Abdou Diouf", correct: true }
           ],
           explanation: "Abdou Diouf, Premier ministre de Senghor, lui a succédé constitutionnellement à sa démission en 1981 et a été président jusqu'en 2000."
        }
      ],
      
       // --- SÉRIE 15 ---
      [
         {
           question: "Quelle héroïne de la résistance en Casamance est célèbre pour sa lutte contre l'administration coloniale ?",
           options: [
             { text: "Aline Sitoé Diatta", correct: true },
             { text: "Ndatté Yalla Mbodj", correct: false },
             { text: "Yacine Boubou", correct: false },
             { text: "Ndaté Yalla Mbodj", correct: false } // Doublon corrigé
           ],
           explanation: "Aline Sitoé Diatta, prêtresse Diola, a mené une résistance mystique et politique contre les réquisitions de riz et l'enrôlement forcé pendant la Seconde Guerre mondiale."
        }
         // Ajoutez d'autres questions ici pour compléter la série si nécessaire...
      ]
    ]
  },

  // ==========================================================
  // CATÉGORIE : SHOWBIZZ (Exemple)
  // ==========================================================
  Showbizz: {
    title: "Cas & Culture Tiktok Senegal",
    series: [
      // --- SÉRIE 1 ---
      [
         {
           question: "Wally Seck numu moudjek police ?",
           options: [
             { text: "Garde a vue", correct: false },
             { text: "Mandat Depot", correct: false },
             { text: "Dessei nama leer", correct: true },
             { text: "Delit de fuite", correct: false }
           ],
           explanation: "'Dessei nama leer' (Il faut que ce soit clair pour moi) est une phrase devenue virale suite à une altercation médiatisée de Wally Seck avec la police."
         }
         // Ajoutez 4 autres questions ici sur ce thème...
      ]
    ]
  }
};