// Flashcard data
const flashcards = [
  {
    question: "What is a crop disease?",
    answer: "A crop disease is any harmful condition or illness that affects agricultural crops, leading to reduced plant health, yield, quality, and even death. These diseases are caused by pathogens such as fungi, bacteria, viruses, nematodes, and other microorganisms. They differ from pests in that they usually result from infections, infestations, or environmental factors that disrupt normal plant growth.",
  },
  {
    question: "What are the main types of crop diseases based on causal agents?",
    answer: "1. Fungal Diseases\n2. Bacterial Diseases\n3. Viral Diseases\n4. Nematode Diseases\n5. Parasitic Plant Diseases\n6. Abiotic or Non-Infectious Diseases",
  },
  {
    question: "What are fungal diseases and their characteristics?",
    answer: "Fungal diseases are caused by fungi that spread through spores and thrive in moist, humid conditions. They are the most common pathogens affecting crops.",
  },
  {
    question: "Give examples of fungal diseases and their causal organisms.",
    answer: "1. Rice Blast (Magnaporthe oryzae)\n2. Wheat Rust (Puccinia spp.)\n3. Late Blight of Potato and Tomato (Phytophthora infestans)\n4. Maize Leaf Spot (Helminthosporium spp.)",
  },
  {
    question: "What are bacterial diseases and how do they infect plants?",
    answer: "Bacterial diseases are caused by bacteria that infect plants through wounds, natural openings, or stomata, leading to symptoms such as wilting, blight, or rot.",
  },
  {
    question: "List examples of bacterial diseases with their causal organisms.",
    answer: "1. Bacterial Leaf Blight of Rice (Xanthomonas oryzae pv. oryzae)\n2. Bacterial Wilt of Tomato (Ralstonia solanacearum)\n3. Black Rot of Cabbage (Xanthomonas campestris pv. campestris)",
  },
  {
    question: "What are viral diseases and how are they transmitted?",
    answer: "Viral diseases are caused by microscopic pathogens that multiply within host cells. They are often transmitted by insect vectors such as aphids, whiteflies, and leafhoppers.",
  },
  {
    question: "Name examples of viral diseases.",
    answer: "1. Maize Streak Virus (MSV)\n2. Cassava Mosaic Disease (CMD)\n3. Tomato Yellow Leaf Curl Virus (TYLCV)\n4. Rice Tungro Disease",
  },
  {
    question: "What are nematode diseases in crops?",
    answer: "Nematode diseases are caused by microscopic worms that attack plant roots, resulting in stunted growth, reduced yield, and root damage.",
  },
  {
    question: "Give examples of nematode diseases and their causal organisms.",
    answer: "1. Root-Knot Nematode (Meloidogyne spp.)\n2. Cereal Cyst Nematode (Heterodera spp.)\n3. Lesion Nematode (Pratylenchus spp.)",
  },
  {
    question: "What are parasitic plant diseases?",
    answer: "Parasitic plant diseases are caused by parasitic plants that depend on host plants for water and nutrients, weakening them and reducing yield.",
  },
  {
    question: "Give examples of parasitic plant diseases.",
    answer: "1. Striga (Witchweed) in maize, sorghum, and millet\n2. Cuscuta (Dodder) in legumes and vegetables",
  },
  {
    question: "What are abiotic or non-infectious diseases in crops?",
    answer: "Abiotic or non-infectious diseases are caused by environmental factors rather than pathogens.",
  },
  {
    question: "Give examples of abiotic or non-infectious crop diseases.",
    answer: "1. Nutrient Deficiencies: e.g., nitrogen or phosphorus deficiency causing yellowing or stunted growth\n2. Water Stress: drought or waterlogging leading to wilting or root rot\n3. Chemical Injury: herbicide toxicity or pesticide overuse causing leaf scorch",
  },

  {
    question: "What are the main classifications of crop diseases based on mode of transmission?",
    answer: "Crop diseases can be classified based on how they spread into five main groups: soil-borne, air-borne, water-borne, seed-borne, and vector-transmitted diseases.",
  },
  {
    question: "What are soil-borne diseases?",
    answer: "Soil-borne diseases are caused by pathogens that persist in the soil and infect plants through their roots.",
  },
  {
    question: "Give examples of soil-borne diseases.",
    answer: "1. Damping-Off (Pythium spp., Rhizoctonia solani)\n2. Clubroot of Crucifers (Plasmodiophora brassicae)",
  },
  {
    question: "What are air-borne diseases?",
    answer: "Air-borne diseases are caused by pathogens that spread through wind, rain, or air currents, infecting leaves and other plant parts.",
  },
  {
    question: "Give examples of air-borne diseases.",
    answer: "1. Rusts (Puccinia spp.)\n2. Powdery Mildew (Erysiphe spp.)",
  },
  {
    question: "What are water-borne diseases?",
    answer: "Water-borne diseases are caused by pathogens that spread through irrigation water, rainfall, or contaminated water sources.",
  },
  {
    question: "Give examples of water-borne diseases.",
    answer: "1. Bacterial Leaf Blight of Rice\n2. Phytophthora Rot (Phytophthora spp.)",
  },
  {
    question: "What are seed-borne diseases?",
    answer: "Seed-borne diseases are transmitted through infected seeds or planting materials, leading to infection in new crops.",
  },
  {
    question: "Give examples of seed-borne diseases.",
    answer: "1. Karnal Bunt of Wheat (Tilletia indica)\n2. Ascochyta Blight in Chickpeas",
  },
  {
    question: "What are vector-transmitted diseases?",
    answer: "Vector-transmitted diseases are spread by insect vectors such as aphids, whiteflies, and thrips.",
  },
  {
    question: "Give examples of vector-transmitted diseases and their vectors.",
    answer: "1. Maize Streak Virus (MSV) – spread by leafhoppers\n2. Tomato Yellow Leaf Curl Virus (TYLCV) – spread by whiteflies",
  },
  {
    question: "How are crop diseases classified based on the affected plant part?",
    answer: "Based on the plant part affected, diseases are classified as root, stem, leaf, fruit and flower, or seed and grain diseases.",
  },
  {
    question: "What are root diseases and their effects?",
    answer: "Root diseases affect the roots, reducing the plant's ability to absorb water and nutrients.",
  },
  {
    question: "Give examples of root diseases.",
    answer: "1. Root Rot (Fusarium spp., Rhizoctonia solani)\n2. Root-Knot Nematode (Meloidogyne spp.)",
  },
  {
    question: "What are stem diseases and how do they affect plants?",
    answer: "Stem diseases attack the stem, weakening plant structure and leading to wilting or breaking.",
  },
  {
    question: "Give examples of stem diseases.",
    answer: "1. Fusarium Wilt (Fusarium oxysporum)\n2. Stem Rust (Puccinia graminis)",
  },
  {
    question: "What are leaf diseases and their impact?",
    answer: "Leaf diseases affect photosynthesis, reducing the plant's energy production and growth rate.",
  },
  {
    question: "Give examples of leaf diseases.",
    answer: "1. Leaf Spot (Cercospora spp.)\n2. Powdery Mildew (Erysiphe spp.)",
  },
  {
    question: "What are fruit and flower diseases?",
    answer: "Fruit and flower diseases attack reproductive parts of plants, reducing yield and market quality.",
  },
  {
    question: "Give examples of fruit and flower diseases.",
    answer: "1. Anthracnose (Colletotrichum spp.)\n2. Blossom-End Rot in Tomatoes (caused by calcium deficiency)",
  },
  {
    question: "What are seed or grain diseases?",
    answer: "Seed or grain diseases affect seeds and grains, leading to poor germination and reduced storage quality.",
  },
  {
    question: "Give examples of seed or grain diseases.",
    answer: "1. Grain Smut (Ustilago spp.)\n2. Seed-Borne Blight (Alternaria spp.)",
  },
  {
    question: "How are crop diseases classified based on the nature of symptoms?",
    answer: "Based on visible symptoms, crop diseases are classified as wilts, blights, spots, rots, and mildews.",
  },
  {
    question: "What are wilt diseases?",
    answer: "Wilts are caused by vascular blockage in plants, leading to drooping, wilting, and eventual death.",
  },
  {
    question: "Give examples of wilt diseases.",
    answer: "1. Fusarium Wilt (Fusarium oxysporum)\n2. Bacterial Wilt (Ralstonia solanacearum)",
  },
  {
    question: "What are blight diseases?",
    answer: "Blight diseases cause rapid tissue death, resulting in browning and drying of leaves or stems.",
  },
  {
    question: "Give examples of blight diseases.",
    answer: "1. Late Blight of Potato (Phytophthora infestans)",
  },
  {
    question: "What are spot diseases?",
    answer: "Spot diseases produce localized lesions or discolored areas on leaves, stems, or fruits.",
  },
  {
    question: "Give examples of spot diseases.",
    answer: "1. Leaf Spot (Cercospora spp.)",
  },
  {
    question: "What are rot diseases?",
    answer: "Rot diseases involve the decay or decomposition of plant tissues, often under conditions of high moisture.",
  },
  {
    question: "Give examples of rot diseases.",
    answer: "1. Fruit Rot (Botrytis cinerea)",
  },
  {
    question: "What are mildew diseases?",
    answer: "Mildew diseases are caused by fungi that form visible growth on leaf surfaces, hindering photosynthesis.",
  },
  {
    question: "Give examples of mildew diseases.",
    answer: "1. Powdery Mildew (Erysiphe spp.)\n2. Downy Mildew (Plasmopara spp.)",
  },

  {
    question: "What is the focus of modern plant pathology?",
    answer: "Modern plant pathology integrates molecular biology, genomics, bioinformatics, and sustainable management strategies to understand and control plant diseases. It aims to enhance crop resilience and support global food security.",
  },
  {
    question: "What is molecular plant pathology?",
    answer: "Molecular plant pathology studies the molecular interactions between plants and pathogens to understand mechanisms of disease resistance, virulence, and host-pathogen communication.",
  },
  {
    question: "What is the Gene-for-Gene theory in molecular plant pathology?",
    answer: "The Gene-for-Gene theory, proposed by Harold Henry Flor, explains that for each resistance (R) gene in the plant, there is a corresponding avirulence (Avr) gene in the pathogen. This interaction determines whether the plant resists or succumbs to infection.",
  },
  {
    question: "What is effector biology in plant pathology?",
    answer: "Effector biology focuses on the study of effector proteins produced by pathogens to manipulate host cell processes, suppress plant immunity, and promote infection. Understanding these helps identify targets for disease control.",
  },
  {
    question: "How is RNA interference (RNAi) used in plant pathology?",
    answer: "RNA interference (RNAi) is used to silence specific genes in pathogens, reducing their ability to cause disease. This genetic approach provides a targeted and sustainable method of disease control.",
  },
  {
    question: "How has genomics and next-generation sequencing (NGS) influenced plant pathology?",
    answer: "Genomics and NGS technologies allow detailed analysis of plant and pathogen genomes, enabling identification of virulence factors, breeding of resistant crops, and understanding of plant microbiomes.",
  },
  {
    question: "What are the main applications of genomics in plant pathology?",
    answer: "1. Pathogen Genomics: Identifying virulence genes and tracking outbreaks.\n2. Host Genomics: Discovering resistance genes in plants.\n3. Microbiome Studies: Understanding how microbial communities influence plant health.",
  },
  {
    question: "What role does bioinformatics play in plant pathology?",
    answer: "Bioinformatics analyzes complex genomic data to identify pathogens, model disease dynamics, and integrate multi-omics data for a systems-level understanding of plant-pathogen interactions.",
  },
  {
    question: "What are key contributions of systems biology to plant pathology?",
    answer: "Systems biology enables pathogen identification using algorithms, predictive modeling for disease outbreaks, and integration of genomics, transcriptomics, proteomics, and metabolomics data for holistic insights.",
  },
  {
    question: "Why is disease diagnostics important in plant pathology?",
    answer: "Accurate and timely disease diagnostics ensure early detection, effective control, and prevention of pathogen spread, which are essential for sustainable agriculture.",
  },
  {
    question: "What are modern diagnostic tools used in plant pathology?",
    answer: "1. PCR-Based Methods (qPCR, RT-PCR) for rapid pathogen detection.\n2. CRISPR-Based Diagnostics for high specificity.\n3. Remote Sensing and Drones for real-time crop monitoring.",
  },
  {
    question: "What is Integrated Disease Management (IDM)?",
    answer: "IDM is a sustainable strategy combining biological, cultural, chemical, and genetic approaches to manage plant diseases efficiently while minimizing environmental impact.",
  },
  {
    question: "What are the main components of Integrated Disease Management (IDM)?",
    answer: "1. Biological Control using beneficial microbes.\n2. Cultural Practices such as crop rotation and sanitation.\n3. Chemical Management through targeted pesticide use.\n4. Host Resistance by developing resistant varieties.",
  },
  {
    question: "What is plant immunity engineering?",
    answer: "Plant immunity engineering uses biotechnology and genetic modification to strengthen plant resistance against pathogens through gene editing, transgenic techniques, and synthetic biology.",
  },
  {
    question: "What are the main approaches in plant immunity engineering?",
    answer: "1. Genome Editing using CRISPR-Cas9 to modify resistance genes.\n2. Transgenic Plants expressing antimicrobial or resistance traits.\n3. Synthetic Biology to design new defense pathways.",
  },
  {
    question: "How does climate change affect plant pathology?",
    answer: "Climate change influences pathogen biology, host susceptibility, and disease dynamics, often leading to new or more severe disease outbreaks.",
  },
  {
    question: "What modern approaches are used to address climate-related disease challenges?",
    answer: "1. Predictive Modeling using climate data to forecast outbreaks.\n2. Developing Resilient Varieties resistant to emerging diseases.\n3. Adaptive Management tailored to local conditions.",
  },
  {
    question: "What is the phytobiome and its role in plant health?",
    answer: "The phytobiome is the community of microorganisms associated with plants, including bacteria, fungi, and viruses, that influence plant growth, health, and disease resistance.",
  },
  {
    question: "How is phytobiome research applied in modern plant pathology?",
    answer: "1. Microbial Consortia used to suppress pathogens.\n2. Plant Probiotics that enhance immunity and growth.\n3. Phytobiome Engineering to design disease-resistant plant systems.",
  },
  {
    question: "What emerging technologies are shaping the future of plant pathology?",
    answer: "1. Artificial Intelligence for disease prediction and image-based diagnostics.\n2. High-Throughput Phenotyping for large-scale disease assessment.\n3. Nanotechnology for targeted pesticides and biosensors.",
  },
  {
    question: "What ethical and regulatory concerns exist in modern plant pathology?",
    answer: "Concerns include the environmental impact of GMOs, biosafety of nanotechnology, and ethical use of genetic engineering. Addressing these is essential for responsible innovation in plant disease management.",
  },

  {
    question: "What is plant disease diagnostics?",
    answer: "Plant disease diagnostics is the process of detecting and identifying diseases in plants to enable early intervention and effective management. It helps prevent disease spread, reduce crop losses, and support sustainable agriculture using both traditional and modern techniques.",
  },
  {
    question: "Why is plant disease diagnostics important?",
    answer: "It identifies the causal agent of a disease—pathogen or abiotic stress—ensuring early detection, accurate management, and compliance with phytosanitary standards. Diagnostics also supports epidemiological research and helps prevent trade restrictions caused by plant diseases.",
  },
  {
    question: "What are traditional methods of plant disease diagnostics?",
    answer: "Traditional methods include visual inspection, microscopy, and culture-based techniques. They rely on observing symptoms, examining pathogen structures, and growing pathogens in culture for identification.",
  },
  {
    question: "How is visual inspection used in plant disease diagnostics?",
    answer: "Visual inspection involves observing symptoms such as leaf spots, wilting, chlorosis, and necrosis. However, symptoms can be misleading since different pathogens or abiotic stresses may cause similar appearances.",
  },
  {
    question: "How is microscopy used in plant disease diagnostics?",
    answer: "Microscopy uses light microscopes to observe fungal structures and bacterial colonies, while electron microscopy allows visualization of viruses and cellular changes caused by pathogens.",
  },
  {
    question: "What are culture-based techniques in plant pathology?",
    answer: "Pathogens are isolated and grown on specific media to observe colony morphology and identify fungi and bacteria. It remains a standard approach in traditional diagnostics.",
  },
  {
    question: "What are modern diagnostic techniques in plant disease detection?",
    answer: "Modern diagnostics use molecular, serological, genomic, and imaging methods for rapid, precise, and specific pathogen identification, overcoming limitations of traditional methods.",
  },
  {
    question: "What molecular techniques are used in plant disease diagnostics?",
    answer: "1. PCR and qPCR amplify pathogen DNA for detection and quantification.\n2. LAMP enables rapid, field-based diagnosis.\n3. DNA Barcoding identifies pathogens using genetic markers.\n4. CRISPR-based diagnostics provide portable, highly specific detection.",
  },
  {
    question: "What are serological techniques in plant disease diagnostics?",
    answer: "Serological techniques detect pathogen proteins using antibodies. ELISA provides laboratory-level detection, while immunostrip tests offer quick, field-ready results.",
  },
  {
    question: "How is next-generation sequencing (NGS) used in plant diagnostics?",
    answer: "NGS provides genome-level insights into plants and pathogens, supporting metagenomic analysis to identify unknown or complex pathogens in mixed infections.",
  },
  {
    question: "What is spectroscopy-based diagnostics?",
    answer: "Spectroscopy detects biochemical or structural changes in plants. FTIR identifies chemical changes, Raman spectroscopy detects pathogen-induced variations, and remote sensing uses imaging to detect disease at large scales.",
  },
  {
    question: "How is remote sensing applied in plant disease diagnostics?",
    answer: "Multispectral and hyperspectral imaging, along with drones and satellite monitoring, detects disease-induced reflectance changes and tracks outbreaks over large agricultural areas.",
  },
  {
    question: "What emerging technologies are used in plant disease diagnostics?",
    answer: "Artificial Intelligence (AI), biosensors, and nanotechnology are transforming diagnostics by enabling automation, high sensitivity, and field-level disease monitoring.",
  },
  {
    question: "How is artificial intelligence used in plant disease diagnostics?",
    answer: "AI and machine learning analyze plant images to identify disease symptoms and predict outbreaks based on environmental and crop data.",
  },
  {
    question: "What are biosensors and how are they applied in diagnostics?",
    answer: "Biosensors combine biological recognition elements with transducers to detect pathogens. For example, electrochemical sensors can detect plant viruses with high precision.",
  },
  {
    question: "How does nanotechnology improve plant disease diagnostics?",
    answer: "Nanoparticle-based systems, such as gold nanoparticles, enhance detection sensitivity and enable visible, rapid identification of plant pathogens in the field.",
  },
  {
    question: "What are integrated diagnostic approaches in plant pathology?",
    answer: "Integrated diagnostics combine multiple methods to enhance accuracy and reliability, such as using PCR with ELISA or validating remote sensing data with molecular tests.",
  },
  {
    question: "What challenges exist in plant disease diagnostics?",
    answer: "Key challenges include pathogen diversity, high costs of diagnostic tools, difficulty adapting lab methods for field use, and managing co-infections involving multiple pathogens.",
  },
  {
    question: "What are the applications of plant disease diagnostics?",
    answer: "1. Agriculture: Early detection and management of crop diseases.\n2. Research: Studying pathogen biology and evolution.\n3. Trade and Quarantine: Ensuring disease-free exports.\n4. Disease Forecasting: Predicting outbreaks for preventive control.",
  },
  {
    question: "What are future directions in plant disease diagnostics?",
    answer: "Future progress includes developing affordable portable tools, integrating AI and big data for real-time monitoring, using phytobiome analysis for plant health, and enhancing global collaboration for sustainable disease management.",
  },

  {
    question: "What are comprehensive crop management practices for viral diseases?",
    answer: "Comprehensive crop management practices for viral diseases involve an integrated approach using resistant varieties, vector management, cultural practices, use of clean planting materials, proper soil and nutrient management, monitoring, and farmer education to prevent and control virus spread in crops.",
  },
  {
    question: "Why is managing viral diseases in crops challenging?",
    answer: "Viral diseases are difficult to manage because viruses cannot be killed with chemicals like fungi or bacteria. Therefore, control relies on preventive measures such as resistant varieties, vector control, and good cultural practices.",
  },
  {
    question: "How does the use of resistant varieties help control viral diseases?",
    answer: "Resistant or tolerant varieties reduce viral infection and disease severity without depending on chemicals. For example, MSV-resistant maize and CMD-resistant cassava varieties provide sustainable and long-term protection while being environmentally friendly.",
  },
  {
    question: "What is vector management in viral disease control?",
    answer: "Vector management involves controlling insects that transmit viruses such as aphids, whiteflies, and thrips. It includes chemical, biological, physical, and cultural methods to prevent the spread of viral pathogens.",
  },
  {
    question: "How is chemical control used in vector management?",
    answer: "Systemic insecticides like imidacloprid are applied during early crop growth stages to prevent vector infestation when plants are most vulnerable. Proper timing ensures effectiveness and minimizes resistance development.",
  },
  {
    question: "How does biological control help manage vectors?",
    answer: "Biological control uses natural predators such as ladybugs, parasitoid wasps, and lacewings to reduce populations of virus-transmitting insects, maintaining ecological balance and minimizing pesticide use.",
  },
  {
    question: "What role do physical barriers play in viral disease prevention?",
    answer: "Physical barriers such as insect-proof nets or floating row covers prevent insect vectors from reaching crops, thereby stopping virus transmission without chemical use.",
  },
  {
    question: "What is the purpose of trap crops in vector management?",
    answer: "Trap crops are planted around main crops to attract insect vectors away from valuable plants. For example, non-economic plants lure aphids or whiteflies, reducing the risk of viral infection in main crops.",
  },
  {
    question: "How do cultural practices reduce viral disease spread?",
    answer: "Cultural practices like crop rotation, intercropping, field sanitation, proper planting time, and mulching disrupt the disease cycle, reduce vector presence, and limit virus reservoirs in the field.",
  },
  {
    question: "What is the importance of crop rotation in viral disease control?",
    answer: "Crop rotation breaks the virus transmission cycle by alternating susceptible crops with non-host species, reducing viral inoculum in the soil or environment. For example, rotating maize with legumes limits MSV persistence.",
  },
  {
    question: "How does intercropping help control viral diseases?",
    answer: "Intercropping with non-host plants acts as a physical and ecological barrier, reducing vector movement and transmission. For instance, cassava intercropped with groundnut helps manage whitefly populations.",
  },
  {
    question: "Why is field sanitation important in managing viral diseases?",
    answer: "Removing infected plants, weeds, and crop residues eliminates sources of infection and prevents re-infection or virus survival between seasons.",
  },
  {
    question: "How does planting time influence viral disease occurrence?",
    answer: "Planting crops when vector populations are low, such as at the onset of the rainy season, reduces early infections and allows plants to establish before peak vector activity.",
  },
  {
    question: "What is the role of mulching in viral disease management?",
    answer: "Mulching suppresses weeds that can harbor viruses or vectors and creates microclimates that deter insect breeding, indirectly reducing viral spread.",
  },
  {
    question: "Why is seed and planting material management critical for viral disease control?",
    answer: "Using certified, virus-free seeds or cuttings prevents introduction of viruses into the field, ensuring healthy crop establishment and reducing the initial inoculum source.",
  },
  {
    question: "How does seed treatment help prevent viral diseases?",
    answer: "Treating seeds or planting materials with systemic insecticides or fungicides protects emerging seedlings from early vector attacks and secondary infections.",
  },
  {
    question: "What is the importance of regular inspection in planting materials?",
    answer: "Frequent inspection helps identify and discard infected plants early, preventing virus spread within the field or through reused planting materials.",
  },
  {
    question: "How does nutrient and soil management affect viral disease resistance?",
    answer: "Balanced fertilization, organic amendments, and proper irrigation enhance plant health, making crops more resilient to viral infections and reducing vector attraction.",
  },
  {
    question: "How are monitoring and early detection conducted for viral diseases?",
    answer: "Regular field scouting, use of diagnostic tools like ELISA and PCR, and setting action thresholds for vector populations allow early intervention before widespread damage occurs.",
  },
  {
    question: "What is Integrated Pest and Disease Management (IPDM)?",
    answer: "IPDM combines resistant varieties, vector control, cultural and biological practices to achieve sustainable control of pests and diseases while minimizing chemical pesticide use.",
  },
  {
    question: "What is the significance of quarantine and legislation in viral disease management?",
    answer: "Strict phytosanitary regulations and inspection of planting materials prevent introduction and spread of exotic viruses, ensuring national crop biosecurity.",
  },
  {
    question: "Why is farmer education essential for viral disease management?",
    answer: "Educating farmers helps them recognize viral symptoms, adopt preventive practices, and implement integrated control measures, ensuring community-wide disease management.",
  },
  {
    question: "What is the role of research and innovation in managing viral diseases?",
    answer: "Research develops virus-resistant varieties, discovers biocontrol agents, and designs affordable diagnostic tools, strengthening long-term and sustainable management strategies.",
  },

  {
    question: "What are examples of common viral diseases in crops and how are they managed?",
    answer: "Common viral diseases and their management include Maize Streak Virus in maize managed through resistant varieties, vector control, and field sanitation; Cassava Mosaic Disease in cassava managed by resistant varieties, clean planting materials, roguing, and vector control; Cowpea Aphid-Borne Mosaic Virus in cowpea managed through early planting, vector control, and resistant varieties; Rice Tungro Disease in rice managed using resistant varieties, controlling green leafhopper vectors, and maintaining field sanitation; and Yam Mosaic Virus in yam managed with virus-free seed tubers, roguing, and vector control.",
  },
  {
    question: "How is Maize Streak Virus (MSV) managed in maize?",
    answer: "Maize Streak Virus is controlled by planting resistant maize varieties, implementing strict vector management to control leafhoppers, and maintaining good field sanitation to remove infected plants and weeds that host the virus.",
  },
  {
    question: "What are the main management practices for Cassava Mosaic Disease?",
    answer: "Cassava Mosaic Disease is managed through the use of CMD-resistant varieties like TME 419, planting virus-free cassava cuttings, roguing infected plants to prevent spread, and controlling whitefly vectors responsible for transmission.",
  },
  {
    question: "How can Cowpea Aphid-Borne Mosaic Virus be controlled?",
    answer: "Control of Cowpea Aphid-Borne Mosaic Virus involves early planting to escape peak aphid populations, using resistant cowpea varieties, and managing aphid vectors with biological or chemical methods.",
  },
  {
    question: "What practices help manage Rice Tungro Disease?",
    answer: "Rice Tungro Disease is managed by planting resistant rice varieties, controlling green leafhopper vectors using targeted insecticide applications or biological control, and keeping fields clean through proper sanitation.",
  },
  {
    question: "How is Yam Mosaic Virus (YMV) managed?",
    answer: "Yam Mosaic Virus is managed by using certified virus-free yam tubers, removing and destroying infected plants (roguing), and controlling aphid vectors that transmit the virus.",
  },

  {
    question: "What are comprehensive crop management practices for bacterial diseases?",
    answer:
      "Comprehensive management of bacterial diseases involves using resistant varieties, maintaining field sanitation, applying cultural and biological control practices, and integrating chemical and non-chemical methods. Resistant varieties such as FARO 44 rice and wilt-resistant tomato varieties reduce dependence on chemicals. Field sanitation includes removing infected residues, controlling weeds, and disinfecting tools. Cultural practices like crop rotation, intercropping, optimal spacing, and drip irrigation limit disease spread. Certified, treated seeds reduce seed-borne infections. Beneficial microbes such as Bacillus subtilis and Pseudomonas fluorescens serve as biocontrols, while copper-based bactericides provide chemical control when necessary. Monitoring, soil solarization, and strict quarantine are essential preventive measures.",
  },
  {
    question: "How do resistant crop varieties help manage bacterial diseases?",
    answer: "Resistant crop varieties contain genes that prevent bacterial infection or limit its spread, providing long-term and environmentally safe disease control. For instance, tomato varieties resistant to Ralstonia solanacearum and rice varieties such as FARO 44 resistant to Xanthomonas oryzae pv. oryzae help reduce yield loss without heavy chemical use.",
  },
  {
    question: "What is the role of field sanitation in managing bacterial crop diseases?",
    answer: "Field sanitation eliminates sources of bacterial inoculum. Removing and burning infected residues, controlling alternate host weeds, and disinfecting tools with bleach prevent pathogen survival and spread. Clean fields and tools reduce disease recurrence between growing seasons.",
  },
  {
    question: "Which cultural practices reduce bacterial disease incidence in crops?",
    answer: "Cultural practices such as crop rotation with non-host plants, intercropping to prevent direct contact, optimal spacing for air circulation, and drip irrigation instead of overhead watering all help reduce bacterial disease incidence. Adjusting planting time to avoid peak disease periods also limits infection.",
  },
  {
    question: "How does seed and planting material management prevent bacterial infections?",
    answer: "Using certified pathogen-free seeds and treating them with hot water or bactericides reduces seed-borne bacteria. For example, cabbage seeds treated at 50–55°C for 20–30 minutes prevent Xanthomonas campestris infection, ensuring healthy crop establishment.",
  },
  {
    question: "What biological control methods are used against bacterial crop diseases?",
    answer: "Biological control involves using beneficial microbes that suppress bacterial pathogens. Bacillus subtilis and Pseudomonas fluorescens inhibit bacterial growth, while biopesticides like Serenade®, containing Bacillus subtilis, effectively manage bacterial blight and wilt in crops such as tomato and rice.",
  },
  {
    question: "Can bacterial diseases be controlled chemically?",
    answer: "Chemical control of bacterial diseases relies mainly on copper-based sprays like copper oxychloride or copper hydroxide, and in limited cases antibiotics like streptomycin. However, these must be used cautiously within integrated management systems to avoid resistance and environmental harm.",
  },
  {
    question: "Why is monitoring and early detection crucial for bacterial disease control?",
    answer: "Regular field scouting and laboratory diagnostics such as Gram staining, pathogen isolation, or PCR allow early detection of bacterial infections. Early action prevents disease spread and helps maintain yield before economic damage occurs.",
  },
  {
    question: "How does soil management contribute to bacterial disease control?",
    answer: "Soil solarization kills soil-borne bacteria like Ralstonia solanacearum, while organic amendments enhance soil microbial balance and suppress pathogens. Maintaining proper soil pH and moisture discourages bacterial growth, creating a healthier crop environment.",
  },
  {
    question: "What is Integrated Pest and Disease Management (IPDM) for bacterial diseases?",
    answer: "IPDM combines resistant varieties, sanitation, cultural, biological, and limited chemical methods for preventive and sustainable control. It reduces overreliance on bactericides and focuses on long-term resilience of the crop ecosystem.",
  },
  {
    question: "What quarantine and phytosanitary measures help prevent bacterial disease spread?",
    answer: "Quarantine restricts the movement of infected plants and soil, while phytosanitary inspections and certification ensure disease-free seeds and materials. Buffer zones and regular monitoring prevent bacterial pathogens from spreading between farms or regions.",
  },

  {
    question: "What are some common bacterial diseases of crops and their management practices?",
    answer: "1. Rice - Bacterial Leaf Blight (Xanthomonas oryzae pv. oryzae): Managed through resistant varieties, balanced fertilization, and good field sanitation.\n2. Tomato - Bacterial Wilt (Ralstonia solanacearum): Controlled by crop rotation, using resistant varieties, and soil solarization.\n3. Cassava - Bacterial Blight (Xanthomonas axonopodis pv. manihotis): Managed through resistant varieties, clean planting materials, and effective weed control.\n4. Banana - Banana Xanthomonas Wilt (Xanthomonas campestris pv. musacearum): Controlled by maintaining field hygiene, disinfecting tools, and removing infected plants.\n5. Cabbage - Black Rot (Xanthomonas campestris pv. campestris): Managed through seed treatment, crop rotation, and application of copper-based sprays.",
  },

  {
    question: "What are comprehensive crop management practices for fungal diseases?",
    answer:
      "Fungal diseases are caused by pathogens such as Fusarium, Alternaria, and Aspergillus, and managing them requires an integrated approach. The first step is using resistant varieties like FARO 44 rice for blast, rust-resistant wheat, and tomato varieties resistant to early blight, which minimizes fungicide use and offers sustainable protection. Field sanitation is essential since fungal spores survive in residues and soil, so removing infected debris, composting properly, controlling weeds, and disinfecting tools help reduce inoculum. Cultural practices such as crop rotation with non-hosts, intercropping maize with beans, proper spacing, adjusting planting time, and mulching all reduce fungal spread. Soil and fertility management through solarization, balanced fertilization, and organic amendments like compost improve soil health and suppress fungi. Biological control using Trichoderma spp. or Bacillus spp. helps inhibit fungal pathogens, while biopesticides and fungicides like Azoxystrobin, Mancozeb, and Tebuconazole should be applied preventively or at early disease stages. Seed treatments with Thiram or Captan prevent seed-borne infections. Proper irrigation practices—avoiding overwatering and watering early—reduce leaf wetness favorable to fungi. Regular field scouting, laboratory confirmation, and weather monitoring help detect early infections. Integrated Pest and Disease Management (IPDM) combines resistant varieties, cultural methods, biologicals, and chemicals to ensure sustainable control. Finally, quarantine and phytosanitary measures such as restricting movement of infected materials, inspecting nurseries, and maintaining buffer zones prevent disease spread.",
  },

  {
    question: "What are some common fungal diseases of crops and their management practices?",
    answer: "1. Maize - Maize Leaf Spot (Helminthosporium spp.): Managed through resistant varieties, crop rotation, and application of fungicide sprays.\n2. Rice - Rice Blast (Magnaporthe oryzae): Controlled by planting resistant varieties, maintaining balanced fertilization, and ensuring good field sanitation.\n3. Tomato - Early Blight (Alternaria solani): Managed through crop rotation, use of fungicides, and growing resistant varieties.\n4. Wheat - Rust Diseases (Puccinia spp.): Controlled using resistant varieties, timely fungicide applications, and maintaining proper plant spacing.\n5. Cassava - Anthracnose (Colletotrichum gloeosporioides): Managed by maintaining field hygiene, using resistant varieties, and practicing crop rotation.",
  },

  {
    question: "What are the comprehensive crop management practices for nematode diseases?",
    answer:
      "Nematode diseases, caused by parasitic worms such as Meloidogyne spp. and Radopholus similis, damage plant roots and reduce crop yields. Effective management involves an integrated approach. Resistant varieties are the first defense; for example, tomato varieties resistant to root-knot nematodes and banana varieties resistant to burrowing nematodes. Cultural practices such as crop rotation with non-host crops like maize or millet, intercropping with marigold (Tagetes spp.), fallowing, and maintaining field sanitation reduce nematode populations. Soil and water management includes solarization (covering soil with transparent plastic for 4–6 weeks), applying organic amendments like poultry manure, and improving drainage. Biological control uses beneficial organisms such as Paecilomyces lilacinus, Pochonia chlamydosporia, Bacillus subtilis, and Trichoderma spp., along with neem-based biopesticides. Chemical control is reserved for severe infestations using nematicides such as metam sodium, 1,3-dichloropropene, oxamyl, or fenamiphos, following strict safety guidelines. Trap crops like mustard and sesame attract nematodes but prevent their life cycle completion, while cover crops like sunn hemp and marigold naturally suppress them. Regular soil testing, symptom monitoring, and nematode traps aid early detection. Integrated Pest Management (IPM) combines cultural, biological, and chemical methods to minimize chemical use and maintain soil health. Quarantine measures, including restricting the movement of soil and using certified nematode-free planting materials, prevent disease spread.",
  },

  {
    question: "What are some common nematode diseases of crops and their management practices?",
    answer: "1. Tomato - Root-Knot Nematode (Meloidogyne spp.): Managed through resistant varieties, soil solarization, and the use of nematicides.\n2. Banana - Burrowing Nematode (Radopholus similis): Controlled by planting resistant varieties, practicing crop rotation, and maintaining field sanitation.\n3. Rice - Rice Root Nematode (Hirschmanniella spp.): Managed through improved drainage and use of resistant varieties.\n4. Potato - Potato Cyst Nematode (Globodera spp.): Controlled using crop rotation, soil fumigants, and resistant varieties.\n5. Soybean - Soybean Cyst Nematode (Heterodera glycines): Managed through resistant varieties, trap cropping, and judicious application of nematicides.",
  },
];

// updateCard();

// LocalStorage key
const STORAGE_KEY = "cropDiseaseFlashcards";

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
