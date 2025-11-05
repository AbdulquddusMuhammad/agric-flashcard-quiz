// Flashcard data
const flashcards = [
  {
    question: "What is Floriculture?",
    answer: "Floriculture is a branch of horticulture that focuses on the cultivation, management, and marketing of flowering plants, ornamental plants, and cut flowers. It involves producing plants for decorative purposes in gardens, interiors, landscapes, and floral arrangements. It plays a key role in the ornamental horticulture industry, contributing to aesthetics, environmental improvement, and economic growth.",
  },
  {
    question: "What are the key aspects of Floriculture?",
    answer: "The key aspects include cultivation of flowering plants, production of ornamental plants, cut flower production, potted plant production, landscaping, propagation and breeding, and post-harvest management. These elements ensure the effective production, improvement, and maintenance of decorative plants and flowers.",
  },
  {
    question: "What does the cultivation of flowering plants in Floriculture involve?",
    answer: "It includes growing annuals, perennials, bulbs, and flowering shrubs that are primarily cultivated for their blooms and aesthetic appeal.",
  },
  {
    question: "What types of plants are produced under ornamental plant production?",
    answer: "Ornamental plant production involves foliage plants, succulents, cacti, and other decorative species that are used in landscaping and interior decoration.",
  },
  {
    question: "What is cut flower production in Floriculture?",
    answer: "Cut flower production focuses on growing flowers such as roses, lilies, carnations, and orchids, which are harvested for use in floral arrangements, bouquets, and decoration.",
  },
  {
    question: "What is meant by potted plant production?",
    answer: "Potted plant production involves growing plants in containers for indoor or outdoor decoration, providing flexibility in plant placement and design.",
  },
  {
    question: "How does landscaping relate to Floriculture?",
    answer: "Landscaping uses flowering and ornamental plants to enhance the beauty and design of gardens, parks, and urban areas, improving both aesthetics and environmental quality.",
  },
  {
    question: "What is the role of propagation and breeding in Floriculture?",
    answer: "Propagation and breeding involve developing new plant varieties through hybridization and multiplying plants through seeds, cuttings, grafting, or tissue culture to maintain quality and diversity.",
  },
  {
    question: "What does post-harvest management in Floriculture focus on?",
    answer: "Post-harvest management focuses on techniques to preserve the freshness and extend the vase life of flowers, ensuring they remain attractive for longer periods after harvest.",
  },
  {
    question: "What are the main applications of Floriculture?",
    answer: "Floriculture is applied for aesthetic and recreational purposes, environmental benefits, economic significance, and therapeutic uses. It beautifies surroundings, supports environmental health, drives trade, and contributes to human well-being.",
  },
  {
    question: "How does Floriculture contribute to aesthetics and recreation?",
    answer: "Floriculture enhances the beauty of homes, offices, and public spaces by providing decorative plants and flowers that create pleasant and relaxing environments.",
  },
  {
    question: "What environmental benefits does Floriculture provide?",
    answer: "Floriculture improves air quality, reduces noise pollution, and provides habitats for pollinators like bees and butterflies, promoting ecological balance.",
  },
  {
    question: "What is the economic significance of Floriculture?",
    answer: "Floriculture contributes to local and global trade through the sale of cut flowers, potted plants, seeds, and ornamental species, creating employment and revenue in the agricultural and retail sectors.",
  },
  {
    question: "How is Floriculture used for therapeutic purposes?",
    answer: "Floriculture supports horticultural therapy, where interaction with flowers and plants helps improve mental health, reduce stress, and enhance emotional well-being.",
  },

  {
    question: "What is the Floriculture Industry?",
    answer: "The floriculture industry is a dynamic and rapidly growing sector within agriculture and horticulture, focused on the production, distribution, and sale of flowering and ornamental plants. It plays a key role in global trade, contributing to economic development, employment, and environmental sustainability.",
  },
  {
    question: "What are the key components of the Floriculture Industry?",
    answer: "The main components include production, post-harvest management, distribution and marketing, research and development, landscaping and garden design, and export and global trade. Each area contributes to the efficient operation and growth of the industry.",
  },
  {
    question: "What types of products are produced in the Floriculture Industry?",
    answer: "Production includes cut flowers like roses, carnations, lilies, orchids, and gerberas; potted plants like peace lilies and succulents; foliage plants such as palms and philodendrons; flowering bulbs like tulips and daffodils; and seeds or saplings for gardens and landscaping.",
  },
  {
    question: "What is involved in post-harvest management in floriculture?",
    answer: "Post-harvest management involves proper handling, storage, and packaging to maintain freshness and quality. It includes using preservatives and temperature-controlled logistics to extend the shelf life of flowers and plants.",
  },
  {
    question: "How is distribution and marketing handled in the floriculture industry?",
    answer: "Wholesale markets supply flowers to florists, supermarkets, and retailers. Retail outlets such as florists, garden centers, and online platforms cater to consumers. E-commerce and digital marketing have modernized the industry through direct-to-consumer sales.",
  },
  {
    question: "What role does research and development play in floriculture?",
    answer: "R&D focuses on breeding new flower varieties with better aesthetics, pest resistance, and longer shelf life. It also includes innovations in greenhouse technology, tissue culture, and automation to enhance production efficiency.",
  },
  {
    question: "How does landscaping and garden design contribute to floriculture?",
    answer: "Landscaping uses ornamental plants and flowers to beautify parks, private gardens, and commercial properties, improving both urban and rural environments.",
  },
  {
    question: "Which countries dominate the global trade in floriculture?",
    answer: "The Netherlands, Colombia, Kenya, and Ecuador lead in cut flower exports, while India, China, and Southeast Asia are emerging producers due to favorable climates and lower costs.",
  },
  {
    question: "What is the economic significance of the floriculture industry?",
    answer: "Floriculture generates employment in farming, processing, logistics, and retail. It provides revenue from domestic and international sales, earns foreign exchange through exports, and creates value-added products such as dried flowers and essential oils.",
  },
  {
    question: "What challenges does the floriculture industry face?",
    answer: "Challenges include perishability of flowers, dependence on climate, high input costs for infrastructure and labor, and environmental concerns like water use, pesticide application, and energy consumption.",
  },
  {
    question: "What are the future trends and opportunities in the floriculture industry?",
    answer: "Trends include adopting sustainable practices, using advanced technologies like automation and vertical farming, expanding online retail, diversifying into exotic and dried flowers, and promoting urban landscaping with green spaces.",
  },
  {
    question: "What is Protected Cultivation in Floriculture?",
    answer: "Protected cultivation refers to growing flowering and ornamental plants under controlled environmental conditions using structures like greenhouses, polyhouses, and net houses. It protects crops from adverse weather, pests, and diseases, ensuring year-round production and high-quality yields.",
  },
  {
    question: "What are the key features of protected cultivation in floriculture?",
    answer: "It includes a controlled environment with regulated temperature, humidity, light, and CO₂, supported by automation systems. Various structures like greenhouses, polyhouses, net houses, and low tunnels are used for growing crops such as cut flowers, potted plants, and bulbs.",
  },
  {
    question: "What are the advantages of protected cultivation?",
    answer: "Advantages include year-round production, enhanced flower quality, higher yields, efficient use of water and fertilizers, reduced pest and disease exposure, and better export potential due to consistent quality.",
  },
  {
    question: "What technologies are used in protected cultivation?",
    answer: "Technologies include drip irrigation and fertigation systems, automated climate control, lighting and shading systems, soilless cultivation methods like hydroponics, and integrated pest management for sustainable production.",
  },
  {
    question: "What are the economic and environmental benefits of protected cultivation?",
    answer: "It provides higher returns on investment, reduces pesticide use, promotes efficient land and water use, and supports sustainable farming practices that minimize waste and chemical residues.",
  },
  {
    question: "What challenges are associated with protected cultivation?",
    answer: "Major challenges include high initial investment costs, the need for technical expertise, energy dependence for climate control, occasional pest outbreaks in enclosed systems, and maintaining stable market access for premium-quality flowers.",
  },
  {
    question: "What are the key recommendations for successful protected cultivation?",
    answer: "Recommendations include selecting suitable structures based on local conditions, choosing high-value crops, managing resources efficiently, providing technical training, using government support programs, and conducting market analysis for better sales opportunities.",
  },
  {
    question: "How does protected cultivation benefit the global floriculture industry?",
    answer: "Protected cultivation enhances productivity, ensures consistent flower quality, and supports sustainable production. It enables countries to meet growing global demand for high-quality flowers throughout the year.",
  },

  {
    question: "What is Field Cultivation of Floriculture?",
    answer: "Field cultivation of floriculture refers to the open-field production of ornamental and flowering plants without controlled environments like greenhouses or polyhouses. It is a traditional and cost-effective method used for growing seasonal flowers, landscaping plants, and foliage crops in regions with suitable climatic conditions.",
  },
  {
    question: "What are the key aspects of field cultivation in floriculture?",
    answer: "The main aspects include crop selection, land preparation, cultural practices, pest and disease management, and harvesting with post-harvest handling. These steps ensure proper plant growth, flower quality, and productivity.",
  },
  {
    question: "What types of crops are selected for field cultivation?",
    answer: "Field cultivation includes seasonal flowers like marigolds, zinnias, petunias, cosmos, and asters; perennials such as gladiolus, lilies, and dahlias; and foliage or ornamental plants like palms, ferns, and shrubs.",
  },
  {
    question: "How is land prepared for field cultivation in floriculture?",
    answer: "Land preparation involves leveling and creating proper drainage to prevent waterlogging, enriching the soil with organic matter and fertilizers, and implementing crop rotation to maintain soil fertility and reduce disease risk.",
  },
  {
    question: "What cultural practices are followed in field cultivation?",
    answer: "Cultural practices include direct sowing or transplanting seedlings, regular weeding and mulching to conserve moisture, irrigation using surface or drip methods, and balanced fertilizer application for optimal growth and flower quality.",
  },
  {
    question: "How are pests and diseases managed in field floriculture?",
    answer: "Management includes regular monitoring for pests such as aphids, mites, and thrips, and using biological control methods or eco-friendly pesticides to minimize plant damage and maintain environmental balance.",
  },
  {
    question: "What are the harvesting and post-harvest handling practices in field cultivation?",
    answer: "Flowers are harvested at the proper maturity stage to retain freshness. Post-harvest handling includes grading, cleaning, and packaging flowers carefully for safe transportation to markets.",
  },
  {
    question: "What are the advantages of field cultivation in floriculture?",
    answer: "Field cultivation is cost-effective due to low investment, suitable for large-scale production, utilizes natural growing conditions, and generates rural employment opportunities through labor-intensive practices.",
  },
  {
    question: "What are the limitations of field cultivation?",
    answer: "Limitations include dependency on weather conditions like frost and drought, inconsistent flower quality, higher pest and disease risks, and seasonal production constraints that limit year-round output.",
  },
  {
    question: "What strategies can enhance field cultivation of floriculture?",
    answer: "Enhancement strategies include using improved high-yield and disease-resistant varieties, adopting integrated pest management, applying efficient irrigation methods, diversifying crops, improving post-harvest handling, and leveraging government support and subsidies.",
  },
  {
    question: "What are common floricultural crops grown under field cultivation?",
    answer: "Common field-grown crops include cut flowers such as marigold, chrysanthemum, gladiolus, aster, and sunflower; loose flowers like jasmine, rose, and tuberose; ornamental plants like bougainvillea and hibiscus; bulbous plants such as gladiolus, lily, and daffodil; and foliage plants like ferns, palms, and dracaena.",
  },
  {
    question: "How does field cultivation differ from protected cultivation in floriculture?",
    answer: "Field cultivation depends on natural conditions and is more cost-effective, while protected cultivation uses controlled environments for consistent, high-quality, year-round production but requires higher investment and technical management.",
  },

  {
    question: "What are cut flowers and why are they important?",
    answer: "Cut flowers are flowers or flower buds harvested with their stems for use in floral arrangements, bouquets, decorations, and ornamental displays. They are one of the most valuable segments of the floriculture industry, contributing significantly to global trade and providing income for growers, exporters, and florists worldwide.",
  },
  {
    question: "What are the main characteristics of cut flowers?",
    answer: "Cut flowers are known for their aesthetic appeal with vibrant colors and pleasant fragrances, long vase life that ensures freshness after harvesting, versatility for use in events and decorations, and high market value due to consistent demand in celebrations and gifting.",
  },
  {
    question: "What are some common types of cut flowers?",
    answer: "Popular cut flowers include roses, chrysanthemums, carnations, lilies, tulips, orchids, gerbera daisies, gladiolus, anthuriums, and gypsophila (baby’s breath). Each species offers distinct forms, colors, and uses in floral arrangements and events.",
  },
  {
    question: "How are cut flowers cultivated?",
    answer: "Cut flower cultivation involves selecting high-quality varieties with long stems and vibrant colors, preparing well-drained fertile soil, propagating through seeds, bulbs, or cuttings, and maintaining proper spacing. Regular irrigation, balanced fertilizers, and integrated pest management are essential for healthy, high-quality blooms.",
  },
  {
    question: "What are the best practices for irrigation and nutrient management in cut flower cultivation?",
    answer: "Flowers require consistent watering to maintain turgidity and freshness. Fertilizers rich in nitrogen, phosphorus, and potassium are applied in balanced proportions to enhance stem strength, color intensity, and bloom size.",
  },
  {
    question: "How are pests and diseases controlled in cut flower cultivation?",
    answer: "Integrated pest management (IPM) is used to control pests like aphids, thrips, and mites. Fungal and bacterial diseases are managed with preventive fungicide treatments, crop rotation, and maintaining good field sanitation.",
  },
  {
    question: "When and how are cut flowers harvested?",
    answer: "Cut flowers are harvested at the optimal stage of maturity to ensure maximum vase life. Harvesting is typically done in the early morning or late evening when temperatures are cooler to preserve moisture and freshness.",
  },
  {
    question: "What are the post-harvest handling steps for cut flowers?",
    answer: "Post-harvest handling includes grading flowers by size and quality, conditioning them in preservative water to restore hydration, packaging in protective ventilated cartons, storing them under refrigeration (2°C to 5°C), and transporting quickly to retain freshness for market delivery.",
  },
  {
    question: "Which countries are major producers and exporters of cut flowers?",
    answer: "The Netherlands dominates global cut flower auctions and exports, while Kenya, Colombia, and Ecuador lead in large-scale production due to favorable climates and low labor costs. India and China are growing as emerging producers in the global market.",
  },
  {
    question: "Which countries are the major importers of cut flowers?",
    answer: "The United States, Germany, the United Kingdom, and Japan are the primary importers, driving international demand for fresh cut flowers throughout the year.",
  },
  {
    question: "What are the peak market occasions for cut flowers?",
    answer: "Major markets include Valentine's Day, Mother’s Day, and weddings, which generate high seasonal demand for roses, carnations, lilies, and other decorative blooms.",
  },
  {
    question: "What challenges affect cut flower production and trade?",
    answer: "Challenges include post-harvest losses due to perishability, pest and disease outbreaks from intensive cultivation, environmental issues from water and pesticide use, market competition with fluctuating prices, and supply chain delays affecting flower freshness and quality.",
  },

  {
    question: "What are the key opportunities and recommendations for the floriculture industry?",
    answer: "Opportunities include integrating modern technologies such as advanced irrigation, fertigation, and climate control to improve crop quality; adding value through floral arrangements and processed products like dried flowers; promoting sustainability through organic cultivation and water conservation; expanding markets via e-commerce and exports; and investing in research and development to breed flowers with longer vase life and pest resistance.",
  },
  {
    question: "What are foliage plants in floriculture?",
    answer: "Foliage plants are ornamental plants cultivated mainly for their attractive leaves rather than flowers. They are valued for their shapes, patterns, textures, and colors, and are widely used for interior decoration, landscaping, and as complementary greenery in floral arrangements.",
  },
  {
    question: "What are the main characteristics of foliage plants?",
    answer: "Foliage plants are known for their visually appealing leaves, durability, versatility in both indoor and outdoor environments, and low maintenance needs. They maintain aesthetic appeal over long periods and adapt well to various growing conditions.",
  },
  {
    question: "What are the main types of foliage plants?",
    answer: "The main types include indoor foliage plants like philodendron, monstera, snake plant, and peace lily; outdoor foliage plants such as caladium, coleus, and hosta; foliage for floral arrangements like ferns, aspidistra, and palm leaves; and variegated foliage plants such as croton, pothos, and dracaena.",
  },
  {
    question: "What is the importance of foliage plants in floriculture?",
    answer: "Foliage plants enhance aesthetic appeal, have strong economic value in the interior and landscape design markets, purify indoor air, complement floral arrangements by adding greenery, and promote relaxation by creating calming environments in homes and offices.",
  },
  {
    question: "How are foliage plants propagated and cultivated?",
    answer: "Foliage plants are propagated through cuttings, division, layering, or tissue culture. They grow best in well-draining, nutrient-rich media, with moderate watering and balanced fertilization. Shade-loving varieties require filtered light, while others tolerate low-light conditions. Integrated pest management helps control common pests and diseases.",
  },
  {
    question: "What are common pests and diseases affecting foliage plants?",
    answer: "Common issues include spider mites, mealybugs, and fungal infections. These are managed using biological control agents, regular monitoring, and maintaining proper hygiene in cultivation areas.",
  },
  {
    question: "What challenges affect foliage plant production?",
    answer: "Challenges include pest and disease management, sensitivity to extreme weather, transportation difficulties due to fragile leaves, and market competition from local and international producers.",
  },
  {
    question: "What are key recommendations for improving the foliage industry?",
    answer: "Recommendations include adopting sustainable practices such as organic fertilizers and eco-friendly pest control, using innovative marketing with branding and plant care kits, expanding into urban and suburban markets, and investing in research to develop resilient varieties with unique leaf colors and patterns.",
  },

  {
    question: "What is foliage production in floriculture?",
    answer: "Foliage production in floriculture refers to the cultivation of ornamental plants grown primarily for their decorative leaves instead of flowers. These plants are prized for their unique shapes, colors, and textures, and are widely used in landscaping, interior decoration, and floral design.",
  },
  {
    question: "What are the key features of foliage production?",
    answer: "Foliage production focuses on leaf quality and visual appeal rather than blooms. It has strong market demand due to urbanization and the popularity of indoor greenery. The industry includes a diverse range of plants suited for indoor, landscape, and floral applications.",
  },
  {
    question: "What are the major foliage plants used in production?",
    answer: "Indoor foliage plants include peace lily, monstera, philodendron, pothos, and snake plant. Landscape and garden foliage plants include caladium, coleus, hosta, and croton. Foliage used in floral arrangements includes ferns, palm leaves, and aspidistra.",
  },
  {
    question: "What are the main cultivation practices in foliage production?",
    answer: "Cultivation involves propagation through seeds, cuttings, division, or tissue culture; use of well-drained, nutrient-rich or soilless media; controlled light and humidity; regular irrigation without waterlogging; balanced NPK fertilization; and integrated pest management to control insects and fungal diseases. Post-harvest, plants are cleaned, sorted, and packed to prevent damage.",
  },
  {
    question: "What are the main foliage production systems?",
    answer: "Open-field cultivation is used for hardy plants and ground covers, offering low-cost but limited environmental control. Protected cultivation uses greenhouses or shade nets to regulate light, temperature, and humidity. Emerging systems like hydroponics and vertical farming allow efficient space use and high-quality foliage production.",
  },
  {
    question: "What is the economic importance of foliage production?",
    answer: "Foliage plants have growing market demand due to trends in urban landscaping and interior décor. The sector supports exports from countries such as the Netherlands, Thailand, and Costa Rica, creates employment across the value chain, and provides environmental benefits by improving air quality and sequestering carbon.",
  },
  {
    question: "What challenges are faced in foliage production?",
    answer: "Challenges include pest and disease infestations that affect leaf quality, sensitivity to temperature and humidity extremes, post-harvest losses during transport and handling, and market fluctuations tied to consumer demand and economic conditions.",
  },
  {
    question: "What recommendations can improve foliage production?",
    answer: "Improvements include adopting sustainable practices using organic fertilizers and biocontrols, investing in protected cultivation to manage climate conditions, innovating new varieties with variegated or resilient traits, enhancing marketing through e-commerce and lifestyle branding, and training growers in modern techniques for production and post-harvest care.",
  },

  {
    question: "What are the main characteristics of potted flowering plants?",
    answer: "Potted flowering plants are cultivated primarily for their ornamental flowers and often have attractive foliage. They are grown in containers, allowing flexible placement indoors or outdoors. The diversity includes annuals, perennials, and tropical species suited to different climates, making them ideal for interior décor, patios, and gardens.",
  },
  {
    question: "What are some popular types of potted flowering plants?",
    answer: "Indoor potted flowering plants include African violet, peace lily, and anthurium. Outdoor potted plants include geraniums, petunias, and impatiens. Seasonal favorites like poinsettia and chrysanthemums are popular during holidays, while tropical varieties such as orchids, hibiscus, and bougainvillea add exotic appeal.",
  },
  {
    question: "How are potted flowering plants cultivated?",
    answer: "Cultivation involves choosing containers with proper drainage, using well-draining potting mixes rich in organic matter, and propagating through seeds, cuttings, grafting, or division. Lighting requirements vary by species—indoor plants need bright indirect light, while outdoor types prefer full sun or partial shade. Consistent watering without over-saturation, balanced fertilization, and regular pruning or deadheading maintain growth and flowering. Pest control uses natural agents like neem oil or insecticidal soap.",
  },
  {
    question: "What are the advantages of growing potted flowering plants?",
    answer: "Potted flowering plants enhance aesthetic appeal, improve air quality, and offer psychological benefits. They are portable, space-efficient, and suitable for small areas such as balconies and apartments. Seasonal flexibility allows growers to rotate plants throughout the year to maintain color and freshness.",
  },
  {
    question: "What challenges occur in potted flowering plant cultivation?",
    answer: "Challenges include improper water management that leads to stress or root rot, nutrient deficiencies due to limited soil volume, pest attacks from aphids and mealybugs, and sensitivity to temperature fluctuations. Some species also have short blooming periods, reducing long-term ornamental value.",
  },

  {
    question: "What are the recommendations for improving potted flowering plant cultivation?",
    answer: "Improvement in potted flowering plant cultivation involves using high-quality potting mixes that ensure proper aeration, drainage, and nutrients. Sustainable practices such as using organic fertilizers and biodegradable pots reduce environmental impact. Selecting species suited to local climates improves survival rates, while proper lighting, including grow lights for indoor plants, supports healthy growth. Enhancing visual presentation through decorative pots and plant groupings increases aesthetic appeal and marketability.",
  },
  {
    question: "What is the economic importance of potted flowering plants?",
    answer: "Potted flowering plants have high demand in homes, offices, hotels, and events for decorative purposes. They also possess export potential, particularly for exotic and tropical species in developed countries. Their production and marketing create employment opportunities in horticulture and retail sectors. Value addition through specialty pots, self-watering systems, and gift packaging enhances profitability and product diversity.",
  },
  {
    question: "What are the key characteristics of potted foliage plants?",
    answer: "Potted foliage plants are valued for their decorative leaves, which display varied colors, patterns, and textures. They have a long lifespan and require minimal maintenance, making them ideal for indoor or shaded environments. Available in a wide range of sizes, from small tabletop plants to large statement varieties, they remain visually appealing year-round and are suitable for diverse spaces.",
  },
  {
    question: "What are some popular types of potted foliage plants?",
    answer: "Popular indoor foliage plants include Monstera deliciosa, Dracaena, Pothos, and Philodendron. Tropical and exotic varieties include Calathea, Alocasia, and Anthurium. Succulents and cacti such as Aloe vera, Snake Plant, and Echeveria are popular for low-maintenance care. Large statement plants include Fiddle Leaf Fig, Areca Palm, and Parlor Palm, commonly used in interior landscaping.",
  },
  {
    question: "How are potted foliage plants cultivated?",
    answer: "Cultivation requires containers with proper drainage and decorative appeal. A growing medium rich in organic matter with peat moss, perlite, or coconut coir ensures good moisture balance. Most foliage plants thrive in indirect or partial light and prefer humid environments with temperatures between 18–24°C. Irrigation should maintain consistent moisture without waterlogging. Balanced liquid fertilizers are applied during growth, and pruning removes damaged leaves. Pest control uses neem oil or insecticidal soaps against mites, aphids, and scale insects.",
  },

  {
    question: "What are the advantages of potted foliage plants?",
    answer: "Potted foliage plants enhance the beauty of indoor and outdoor spaces by adding greenery and liveliness. They purify air by filtering pollutants, with species like Snake Plant and Peace Lily known for their air-cleaning properties. These plants are low-maintenance, adaptable to various environments such as homes, offices, and hotels, and help reduce stress by promoting mental well-being.",
  },
  {
    question: "What challenges are faced in the cultivation of potted foliage plants?",
    answer: "Cultivation challenges include improper watering that leads to root rot or drought stress, and inadequate lighting that causes weak growth or fading leaf color. Indoor pests such as mites and gnats can infest plants, while sudden temperature changes may harm them. Limited soil in pots can also cause nutrient deficiencies, requiring precise fertilization management.",
  },
  {
    question: "What is the economic importance of potted foliage plants?",
    answer: "Potted foliage plants are in high demand globally due to their popularity in urban homes, offices, and hotels. They generate employment in sectors like cultivation, retail, and pot manufacturing. Tropical varieties have strong export potential, and the market is further boosted by value-added products such as designer pots, self-watering systems, and decorative arrangements.",
  },
  {
    question: "What are the recommendations for improving potted foliage plant cultivation?",
    answer: "Recommendations include adopting advanced propagation methods such as tissue culture for uniform, disease-free plants and promoting sustainability through organic fertilizers and biodegradable containers. Breeding programs should focus on developing stress-resistant varieties tolerant to drought and low light. Marketing strategies should highlight foliage plants as eco-friendly decor, and consumer education should focus on proper care practices to improve plant survival.",
  },
  {
    question: "What is fertilization in floriculture and why is it important?",
    answer: "Fertilization in floriculture is the process of supplying plants with essential nutrients needed for healthy growth and optimal flowering. It enhances the quality, color, and size of blooms, strengthens plant health by improving resistance to diseases, and increases yield. Proper fertilization also boosts the aesthetic appeal of plants, which is crucial for commercial markets involving cut flowers, potted plants, and foliage.",
  },

  {
    question: "What are the essential nutrients required for flowering plants?",
    answer: "Flowering plants require macronutrients and micronutrients for healthy growth. Macronutrients include nitrogen, phosphorus, potassium, calcium, magnesium, and sulfur. Nitrogen supports leaf and stem growth but excess can reduce flowering. Phosphorus enhances root and flower development, while potassium improves flower quality and disease resistance. Calcium strengthens plant structure, magnesium is vital for chlorophyll formation, and sulfur aids in protein synthesis. Micronutrients such as iron, boron, manganese, copper, zinc, and molybdenum are needed in smaller amounts to support processes like chlorophyll formation, enzyme activation, and reproductive development.",
  },
  {
    question: "What are macronutrients and their roles in flowering plants?",
    answer: "Macronutrients are nutrients required in large quantities. Nitrogen promotes vegetative growth and photosynthesis. Phosphorus supports root and flower formation. Potassium improves flower color, size, and disease resistance. Calcium strengthens cell walls and improves nutrient transport. Magnesium is a core component of chlorophyll, and sulfur supports amino acid and protein synthesis. Deficiencies in any of these nutrients can lead to weak flowering, poor growth, or discoloration.",
  },
  {
    question: "What are micronutrients and their importance in floriculture?",
    answer: "Micronutrients are required in trace amounts but are essential for plant metabolism. Iron aids in chlorophyll formation, boron supports flowering and reproduction, manganese activates enzymes, copper contributes to respiration and enzyme function, zinc helps in protein and hormone synthesis, and molybdenum is vital for nitrogen fixation. Even minor deficiencies can significantly affect plant vigor and flower quality.",
  },
  {
    question: "What are organic fertilizers used in floriculture and what are their advantages and disadvantages?",
    answer: "Organic fertilizers such as compost, manure, bone meal, fish emulsion, and seaweed extracts supply nutrients naturally. They are eco-friendly, enhance soil structure, and promote microbial activity. Their slow-release nature ensures steady nutrient availability over time. However, they provide less control over nutrient composition and often require more effort and volume to apply compared to synthetic fertilizers.",
  },
];

// updateCard();

// LocalStorage key
const STORAGE_KEY = "floricultureFlashcards";

// Load saved data from localStorage
function loadFromStorage() {
  const saved = localStorage.getItem(STORAGE_KEY);
  if (saved) {
    try {
      return JSON.parse(saved);
    } catch (e) {
      console.error("Error loading from localStorage:", e);
      return null;
    }
  }
  return null;
}

// Save data to localStorage
function saveToStorage(data) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  } catch (e) {
    console.error("Error saving to localStorage:", e);
  }
}

// Initialize state from localStorage or defaults
const savedData = loadFromStorage();
let currentCard = savedData?.currentCard || 0;
let isFlipped = false;
let showTips = savedData?.showTips || false;
let viewedCards = savedData?.viewedCards || new Array(flashcards.length).fill(false);

// DOM Elements
const flashcard = document.getElementById("flashcard");
const questionText = document.getElementById("questionText");
const answerText = document.getElementById("answerText");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const resetBtn = document.getElementById("resetBtn");
const clearProgressBtn = document.getElementById("clearProgressBtn");
const cardCounter = document.getElementById("cardCounter");
const progressPercent = document.getElementById("progressPercent");
const progressBar = document.getElementById("progressBar");
const toggleTips = document.getElementById("toggleTips");
const tipsList = document.getElementById("tipsList");
// const cardIndicators = document.getElementById("cardIndicators");

// Functions
function saveState() {
  saveToStorage({
    currentCard: currentCard,
    showTips: showTips,
    viewedCards: viewedCards,
  });
}

// function renderCardIndicators() {
//   //   cardIndicators.innerHTML = "";
//   flashcards.forEach((card, index) => {
//     const indicator = document.createElement("div");
//     indicator.className = `w-3 h-3 rounded-full transition-all cursor-pointer ${index === currentCard ? "bg-green-600 ring-2 ring-green-400 ring-offset-2" : viewedCards[index] ? "bg-green-400" : "bg-gray-300"}`;
//     indicator.title = `Card ${index + 1}${viewedCards[index] ? " (viewed)" : ""}`;
//     indicator.addEventListener("click", () => {
//       isFlipped = false;
//       flashcard.style.transform = "rotateY(0deg)";
//       currentCard = index;
//       updateCard();
//     });
//     // cardIndicators.appendChild(indicator);
//   });
// }

function updateCard() {
  questionText.textContent = flashcards[currentCard].question;
  answerText.textContent = flashcards[currentCard].answer;

  // Mark card as viewed
  viewedCards[currentCard] = true;

  // Update progress
  const progress = ((currentCard + 1) / flashcards.length) * 100;
  cardCounter.textContent = `Card ${currentCard + 1} of ${flashcards.length}`;
  progressPercent.textContent = `${Math.round(progress)}% Complete`;
  progressBar.style.width = `${progress}%`;

  // Update button states
  prevBtn.disabled = currentCard === 0;
  nextBtn.disabled = currentCard === flashcards.length - 1;

  // Update card indicators
  //   renderCardIndicators();

  // Save state
  saveState();
}

function flipCard() {
  isFlipped = !isFlipped;
  if (isFlipped) {
    flashcard.style.transform = "rotateY(180deg)";
  } else {
    flashcard.style.transform = "rotateY(0deg)";
  }
}

function handleNext() {
  isFlipped = false;
  flashcard.style.transform = "rotateY(0deg)";
  currentCard = (currentCard + 1) % flashcards.length;
  updateCard();
}

function handlePrevious() {
  isFlipped = false;
  flashcard.style.transform = "rotateY(0deg)";
  currentCard = (currentCard - 1 + flashcards.length) % flashcards.length;
  updateCard();
}

function handleReset() {
  currentCard = 0;
  isFlipped = false;
  flashcard.style.transform = "rotateY(0deg)";
  updateCard();
}

function handleClearProgress() {
  if (confirm("Are you sure you want to clear all your progress? This cannot be undone.")) {
    localStorage.removeItem(STORAGE_KEY);
    currentCard = 0;
    isFlipped = false;
    showTips = false;
    viewedCards = new Array(flashcards.length).fill(false);
    flashcard.style.transform = "rotateY(0deg)";
    tipsList.style.display = "none";
    updateCard();
  }
}

function toggleStudyTips() {
  showTips = !showTips;
  tipsList.style.display = showTips ? "block" : "none";
  saveState();
}

// Event Listeners
flashcard.addEventListener("click", flipCard);
prevBtn.addEventListener("click", handlePrevious);
nextBtn.addEventListener("click", handleNext);
// resetBtn.addEventListener("click", handleReset);
clearProgressBtn.addEventListener("click", handleClearProgress);
toggleTips.addEventListener("click", toggleStudyTips);

// Initialize - restore saved state
tipsList.style.display = showTips ? "block" : "none";
updateCard();
