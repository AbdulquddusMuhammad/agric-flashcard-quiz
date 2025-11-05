// Flashcard data
const flashcards = [
  {
    question: "What are leafy vegetables?",
    answer: "Leafy vegetables, also called greens or potherbs, are plants whose leaves, and sometimes their tender petioles and shoots, are eaten raw or processed as vegetables. They have edible leaves rather than roots or fruits.",
  },
  {
    question: "From which types of plants do leafy vegetables generally come?",
    answer: "Leafy vegetables generally come from three sources: (i) Herbaceous plants such as amaranth and lettuce, (ii) Fodder crops such as alfalfa, and (iii) Grasses such as Colocasia obtusifolia.",
  },
  {
    question: "Why are fodder crops and grasses used as leafy vegetables less suitable for direct consumption?",
    answer: "Fodder crops and grasses used as leafy vegetables are more fibrous and prolific, making nutrient extraction difficult. This limitation can be overcome through processing methods like grinding or drying.",
  },
  {
    question: "List some selected examples of leafy vegetables and their scientific names.",
    answer: "Amaranth (Amaranthus spp), Cabbage (Brassica oleracea), Garden cress (Lepidium sativum), Lettuce (Lactuca sativum), Sorrel (Hibiscus sabdariffa), Wild sesame (Sesamum radiatum), Water leaf (Talinum triangulare), Bitter leaf (Vernonia spp), African cucumber (Momordica tridens), African sorrel (Momordica charantia), Jute mallow (Corchorus olitorius), Basella (Basella alba).",
  },
  {
    question: "What class work is related to leafy vegetables?",
    answer: "The class work involves identifying 10 leafy vegetables and highlighting their cultural practices.",
  },
  {
    question: "What is the nutritional importance of leafy vegetables?",
    answer: "Leafy vegetables are rich in dietary fibre, minerals such as iron, calcium, magnesium, and potassium, and vitamins A, B, C, and K. They also contain antioxidants and have high water content. Their fibre aids digestion and bowel movement, while their low calories and proteins help maintain a balanced diet.",
  },
  {
    question: "How do leafy vegetables contribute to health beyond nutrition?",
    answer: "Some leafy vegetables have medicinal effects that help improve, prevent, or control certain diseases due to their rich nutrient and antioxidant content.",
  },

  {
    question: "What are production practices for leafy vegetables?",
    answer: "Production of leafy vegetables is relatively easy, but because of their delicate nature and sensitivity to environmental conditions, efficient cultural practices are necessary for profitable yield. Proper management of soil, water, and temperature ensures healthy growth and quality produce.",
  },
  {
    question: "How can leafy vegetables be propagated?",
    answer: "Leafy vegetables can be propagated by direct sowing or transplanting. The choice of method depends on the crop type or variety, weather conditions, and the cropping system used.",
  },
  {
    question: "Why is soil preparation important for leafy vegetable production?",
    answer: "Good soil preparation improves aeration, drainage, and nutrient availability. It ensures the soil structure is suitable for root penetration and efficient water management, which supports vigorous growth of leafy vegetables.",
  },
  {
    question: "What are the desirable soil characteristics for vegetable crop production?",
    answer: "The ideal soil for vegetable production should be deeply cultivated, well-drained to prevent waterlogging, moderately fertile, capable of holding water, and loosely structured. Hard, stony, or gravely soils should be avoided, especially for root and tuber crops.",
  },
  {
    question: "Which type of soil areas are best suited for vegetable production?",
    answer: "Fadama areas (lowlands) and river valley soils, also known as alluvial soils, possess desirable properties such as good drainage, fertility, and water retention, making them ideal for vegetable cultivation.",
  },

  {
    question: "What is the origin of Amaranth (Amaranthus spp)?",
    answer: "Amaranth originates mainly from South America and India, though some species also trace their origin to Africa, East Asia, and Central and South America.",
  },
  {
    question: "To which family and genus does Amaranth belong, and how many species are known?",
    answer: "Amaranth belongs to the family Amaranthaceae and the genus Amaranthus, which contains about 60 species. The most prominent cultivated species include A. cruentus, A. hypochondriacus, A. caudatus, and A. blidum.",
  },
  {
    question: "What are the botanical characteristics of Amaranth?",
    answer: "Amaranth is an annual broadleaf herb that grows up to 1 meter or more in height. It has large, widely branched inflorescences and broad, long leaves with pointed tips. Leaf color varies from green to yellowish-green depending on the variety.",
  },
  {
    question: "How is Amaranth cultivated?",
    answer: "Amaranth can be cultivated by direct sowing or by transplanting seedlings. It thrives in free-draining sandy loam soil with a pH of 5.5–7.5. The crop can grow in areas with altitudes up to 800 meters and performs well under both rainfed and irrigated conditions during the dry season.",
  },
  {
    question: "How is a nursery for Amaranth established?",
    answer: "A nursery bed for Amaranth should be well prepared into a fine tilth. Seeds are mixed with clean, dry sand and broadcast or drilled 10 cm apart to prevent overcrowding and promote uniform germination. The bed is mulched with grasses and watered lightly. After germination, mulch is removed to harden seedlings before transplanting, which occurs at about three weeks old.",
  },
  {
    question: "What are the recommended transplanting practices for Amaranth?",
    answer: "Transplanting should be done during cool periods of the day or under cloudy conditions to reduce evapotranspiration and transplant shock. Spacing should be 10–15 cm apart for single harvests or 20 cm apart for multiple harvests when using the drilling method.",
  },
  {
    question: "How should weeding be managed in Amaranth cultivation?",
    answer: "Weeding should be done regularly at the early growth stages, either manually with a small hoe or by hand-pulling, especially at the onset of flowering. Pre-emergence herbicides may also be applied during land preparation to control weeds effectively.",
  },

  {
    question: "What is the recommended fertilizer application for Amaranth during land preparation?",
    answer: "During land preparation, 5 tons per hectare of organic manure should be applied, especially on poorly fertile soils. This improves soil structure, nutrient availability, and moisture retention.",
  },
  {
    question: "What are the fertilizer requirements for vegetable Amaranth?",
    answer: "For vegetable Amaranth, apply 60 kg nitrogen (N), 30 kg phosphorus (P), and 30 kg potassium (K) per hectare. This nutrient ratio promotes healthy leaf and stem growth for better vegetative yield.",
  },
  {
    question: "What are the fertilizer requirements for grain Amaranth, and why is nitrogen rate important?",
    answer: "For grain Amaranth, apply 80 kg nitrogen (N), 30 kg phosphorus (P), and 30 kg potassium (K) per hectare. Excessive nitrogen delays flowering and promotes excessive vegetative growth, reducing grain yield, so the amount must be carefully managed.",
  },
  {
    question: "When should Amaranth be harvested for vegetable and grain production?",
    answer: "For vegetative production, harvest 4–6 weeks after sowing. For grain production, harvest 8–10 weeks after sowing when the grains mature.",
  },
  {
    question: "How is vegetable Amaranth harvested for single and multiple harvests?",
    answer: "For a single harvest, the crop can be cut above ground level or uprooted completely. For multiple harvests, the first harvest should target the main shoot, allowing side branches to develop. Cutting at about 20 cm above ground promotes strong new shoots, while higher cuts above 30 cm lead to weaker stands that may flower early.",
  },
  {
    question: "How does the propagation method affect the harvesting period of Amaranth?",
    answer: "Transplanted seedlings take longer to reach harvest maturity than direct-sown plants. Transplanted crops are usually managed for multiple harvests, while direct-sown stands are typically grown for a single harvest.",
  },
  {
    question: "What is the average leaf yield of Amaranth?",
    answer: "The average leaf yield of Amaranth ranges between 10 and 20 tons per hectare under good management conditions.",
  },
  {
    question: "What are the main uses of Amaranth?",
    answer: "The leaves, tender stems, and branches are used in soups or as forage for livestock. The seeds are used to make soups, pancakes, snack bars, porridges, confectioneries, and biscuits. Due to their high lysine content, Amaranth seeds improve the protein quality of starchy foods like wheat, rice, or maize, making them beneficial for infants, children, and pregnant or lactating women.",
  },

  {
    question: "What is Lettuce (Lactuca sativa) and where did it originate?",
    answer: "Lettuce is an annual leafy herbaceous plant belonging to the family Compositae. It originated from Egypt and is the most popular salad crop globally due to its high consumption rate and economic importance. It has a delicate, crispy texture with a slightly bitter, milky juice when fresh.",
  },
  {
    question: "What are the botanical characteristics of Lettuce?",
    answer: "Lettuce plants grow between 15–30 cm tall with a long, narrow taproot and smaller secondary roots. The leaves vary in shape and texture and are usually green, though some varieties may show red or yellow hues. Domestication has produced varieties with delayed bolting, larger leaves or heads, better taste, and reduced latex content.",
  },
  {
    question: "What are the main types of Lettuce and their characteristics?",
    answer: "There are two main types of lettuce: loose-leaf and heading types. The loose-leaf type matures quickly, needs less thinning, and thrives in warmer conditions. The heading type is divided into two: (i) Butterhead, which has smooth, fragile, and flavorful leaves but is more perishable, and (ii) Crisphead, which forms tightly packed, crisp light-green heads. Heading types are commonly transplanted.",
  },
  {
    question: "What are the environmental requirements for Lettuce cultivation?",
    answer: "Lettuce grows best at day temperatures of 18–25°C and night temperatures of 10–15°C. Higher temperatures cause bolting, foliage deterioration, and bitter taste. It performs best in free-draining soils rich in organic matter with a pH between 6.0 and 6.8.",
  },
  {
    question: "How is Lettuce cultivated?",
    answer: "Lettuce can be direct-sown or transplanted depending on seed availability, variety, and season. Under cool conditions, seedlings are raised for three weeks in a fine-tilled, well-managed nursery bed about 1–1.5 m wide. Seeds are drilled 10 cm apart, mulched lightly, and watered. Mulch is removed after germination, and seedlings are transplanted after four weeks when leaves reach 5 cm long. Transplant spacing is 20 × 20 cm or 30 × 50 cm, while direct sowing uses 20–25 cm drill spacing with 10 cm thinning.",
  },
  {
    question: "What are the irrigation requirements for Lettuce?",
    answer: "Lettuce requires frequent irrigation to maintain moist soil. The soil should be checked to 7 cm depth; if it is still wet, irrigation can be delayed. Mulching with compost or grasses helps retain moisture. In warm conditions (around 30°C), lettuce can be grown by direct sowing using the same spacing as transplanted lettuce.",
  },
  {
    question: "What are the nutrient requirements for Lettuce production?",
    answer: "Apply 120 kg of nitrogen per hectare in two equal doses at 2 and 6 weeks after transplanting. At planting, apply 120 kg of phosphorus (P₂O₅) and 120 kg of potassium (K₂O) per hectare to support healthy growth and yield.",
  },
  {
    question: "When is Lettuce ready for harvest, and what is the expected yield?",
    answer: "Lettuce is ready for harvest 70–80 days after seeding or 60–70 days after transplanting. Firm heads should be cut, leaving three wrapper leaves to protect the head and maintain quality. The average yield ranges between 10 and 20 tons per hectare.",
  },
  {
    question: "What is the nutritional importance of Lettuce?",
    answer: "Lettuce is rich in minerals such as potassium, calcium, and magnesium, and it provides essential vitamins A, E, and K, making it valuable for human nutrition and health maintenance.",
  },

  {
    question: "What is the origin of Cabbage (Brassica oleracea)?",
    answer: "Cabbage originated from Europe and consists of several species that produce either small or large heads, depending on the variety.",
  },
  {
    question: "What are the environmental requirements for Cabbage cultivation?",
    answer: "Cabbage grows well at temperatures between 24–30°C but performs best at an optimum temperature of 18°C. It requires free-draining sandy loam to clay loam soils rich in organic matter, with a pH between 5.5 and 6.5. The soil should be fertile and well-tilled with well-rotted compost or farmyard manure incorporated two weeks before sowing or transplanting.",
  },
  {
    question: "How is Cabbage cultivated?",
    answer: "Cabbage can be grown either by direct seeding or by transplanting. Seedlings are raised in nursery beds or seed boxes and transplanted into the field at 4–5 weeks old. Spacing for larger varieties is 45 cm × 60–70 cm, while smaller varieties require 30 cm × 60 cm spacing.",
  },
  {
    question: "How is weeding managed in Cabbage production?",
    answer: "Weeding should be done carefully to prevent damage to the shallow root system. Apply Pendimethalin or Butachlor at 4 L/ha before transplanting, followed by two manual hoe weedings at 2 and 4 weeks after transplanting.",
  },
  {
    question: "What is the purpose of mulching in Cabbage cultivation?",
    answer: "Mulching helps retain soil moisture and maintain a cooler soil temperature, especially during dry season cropping. Organic mulch materials like grass or compost can be used.",
  },
  {
    question: "What are the irrigation requirements for Cabbage?",
    answer: "Cabbage requires consistent moisture throughout its growth due to its shallow root system. Supplemental irrigation is necessary under rainfed conditions to ensure continuous plant development and prevent stress.",
  },
  {
    question: "What are the fertilizer requirements for Cabbage?",
    answer: "Apply 5–10 tons of organic manure per hectare during land preparation. Additionally, apply 100 kg nitrogen (N), 150 kg phosphorus (P₂O₅), and 100 kg potassium (K₂O) per hectare at planting. Top-dress with 40 g NPK/m² when plants reach about 10 cm in height or when heads begin forming.",
  },
  {
    question: "What are the common pests and their control methods in Cabbage?",
    answer: "Common pests include aphids, whiteflies, caterpillars, flea beetles, moths, and nematodes. Control measures include using insecticides like abamectin or lambda-cyhalothrin, neem extract, crop rotation, resistant varieties, and nematicides. These help reduce leaf damage, sap loss, and plant stunting.",
  },
  {
    question: "What are the common diseases of Cabbage and their control methods?",
    answer: "Cabbage is affected by bacterial black rot, bacterial soft rot, and fungal diseases like Alternaria leaf spot and downy mildew. Control includes using fungicides such as Mancozeb, seed dressing with benomyl (2 kg active ingredient per kg of seed), raised beds for drainage, crop rotation, and proper field sanitation to prevent bacterial spread.",
  },
  {
    question: "When is Cabbage ready for harvest and what is its yield potential?",
    answer: "Smaller-headed varieties are ready two months after transplanting, while larger ones mature in about three months. Heads should be harvested when firm and well-formed. Cabbage is perishable, so harvest only when needed for sale or consumption. Average yield ranges from 40 to 60 tons per hectare.",
  },
  {
    question: "What is the nutritional importance of Cabbage?",
    answer: "Cabbage is rich in vitamins C and K, dietary fiber, folate, potassium, calcium, iron, and antioxidants, while being low in calories, making it valuable for a healthy diet.",
  },

  {
    question: "Why is crop protection important in leafy vegetable production?",
    answer: "Leafy vegetables are highly susceptible to pests and diseases that cause serious economic losses or total crop failure. Common pests include grasshoppers, aphids, caterpillars, cutworms, and nematodes, while diseases such as damping-off, downy mildew, leaf blight, and leaf spot are prevalent. Effective crop protection ensures healthy growth, reduces production costs, and prevents yield losses.",
  },
  {
    question: "What is the recommended approach to managing pests and diseases in leafy vegetables?",
    answer: "Pests and diseases should be managed primarily through preventive measures rather than curative actions, as prevention is more cost-effective and sustainable. Regular monitoring and early intervention minimize damage and protect the crop throughout its growth cycle.",
  },
  {
    question: "What are the main crop protection practices for leafy vegetables?",
    answer: "Crop protection practices include: (a) using resistant varieties, (b) early planting before pest and disease prevalence, (c) crop rotation between susceptible and non-susceptible hosts to reduce pest and disease buildup, (d) deep cultivation to bury crop residues that harbor pests, (e) removal or burying of diseased plants to prevent spread, and (f) proper and routine spraying with suitable chemicals against vectors or pathogens for control or prevention.",
  },
  {
    question: "Why is weeding important in leafy vegetable cultivation?",
    answer: "Weeding is essential because weeds compete with crops for nutrients, water, and space, and also act as hosts for insect pests and diseases. Effective weed management improves crop growth, yield, and quality by reducing competition and pest habitats.",
  },
  {
    question: "What are the recommended weeding practices for leafy vegetables?",
    answer: "Weeding practices include: (a) good land preparation before planting, (b) early planting or planting at the appropriate time for quick crop establishment, (c) using narrow spacing to promote canopy coverage that suppresses weeds, (d) hoe weeding and regular hand-picking, and (e) applying appropriate herbicides where necessary.",
  },
];

// updateCard();

// LocalStorage key
const STORAGE_KEY = "leafyVegFlashcards";

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
