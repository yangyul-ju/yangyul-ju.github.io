const DEFAULT_DATA = {
  profile: {
    name: "Yangyul Ju",
    position: "Ph.D, Polymer Science & Engineering",
    email: "yyul5430@jnu.ac.kr",
    phone: "+82-10-5430-9605",
    linkedin: "https://www.linkedin.com/",
    scholar: "https://scholar.google.co.kr/citations?user=7J1F2KwAAAAJ&hl=ko",
    orcid: "https://orcid.org/0009-0009-9068-5173",
    bioIntro: [
      "I am a results-driven Polymer Engineering researcher specializing in <strong>complex fluid rheology</strong> and <strong>advanced multiphysics modeling</strong>. My research establishes critical structure-property-performance relationships across a diverse spectrum of advanced materials systems.",
      "By bridging experimental complex fluid mechanics with multi-scale computational frameworks, I deliver targeted structural and interfacial engineering solutions across battery materials, dispersion systems, and soft matter."
    ],
    researchKeywords: [
      "Complex Fluid Rheology",
      "Energy Materials",
      "Multiphysics Modeling"
    ],
    bioHighlights: [
      "<strong>Silicon Anode Slurries for Lithium-Ion Batteries:</strong> Optimizing multi-component battery pastes to accommodate lithiation-induced volume expansion and ensure long-term cyclability.",
      "<strong>SWCNT Dispersions:</strong> Tailoring dispersion kinetics and formulation to construct highly interconnected, resilient electrical and mechanical percolation networks.",
      "<strong>Surface-Modified Separators for Lithium-Ion Batteries:</strong> Engineering functional coatings (e.g., GO-POSS) to accelerate Li+ transport kinetics, enhance thermal safety, and suppress lithium dendrite growth.",
      "<strong>Hydrogels & Suspensions:</strong> Elucidating micro/nano-scale particle interactions, structural gelation recovery, and non-linear viscoelastic properties for diversified advanced polymer composites."
    ],
    expertise: [
      {
        title: "1. COMSOL Multiphysics",
        bold: true,
        bullets: [
          "Electro-chemo-mechanical coupling (diffusion-induced stress in silicon anodes)",
          "Acoustic-structure interaction (sound transmission in membranes)",
          "Thermal management (heat transfer in heterogeneous composites)"
        ]
      },
      {
        title: "2. MATLAB Programming",
        bold: true,
        bullets: [
          "Electrical percolation modeling to validate experimental findings on interparticle interactions and network dynamics"
        ]
      },
      {
        title: "3. Rheology & Material Characterizations",
        bold: true,
        bullets: [
          "<strong>Advanced Rheology (LAOS/SPP)</strong>: Quantified non-linear viscoelasticity, shear deformation, and structural recovery mechanisms of silicon anode slurries, SWCNT dispersions, and composite hydrogels.",
          "<strong>Electrochemical Diagnostics</strong>: Deconvoluted dynamic bulk, SEI, and charge-transfer resistance parameters across multi-component battery systems utilizing operational EIS, CV, and GITT setups.",
          "<strong>Interfacial & Surface Science</strong>: Tuned binder chemistry and hybrid polymer composite coatings to suppress lithiation-induced volume expansion and mitigate lithium dendrite growth."
        ]
      }
    ],
    collaborations: [
      {
        title: "Visiting Research Intern Fellow",
        institution: "Micro/Bio/Nanofluidics Unit (PI: Amy Shen)",
        dateRange: "Jan 2025 - Mar 2025",
        achievements: [
          "Investigated bio-inspired DNA bridging networks via systematic binder modification for high-capacity silicon anodes, elucidating the correlation between polymer-particle interactions and macro-scale rheological network properties.",
          "Resulting Manuscript: Under review in <strong>Advanced Materials (2026)</strong>"
        ]
      },
      {
        title: "Visiting Research Intern Fellow",
        institution: "Micro/Bio/Nanofluidics Unit (PI: Amy Shen)",
        dateRange: "Sep 2023 - Jan 2024",
        achievements: [
          "Evaluated the synergistic effects of different binder chemistries (CMC, PVP) and micro-silicon particle sizes on the stability and multi-component network dynamics of SWCNT-dispersed anode slurries.",
          "Integrated experimental findings with COMSOL Multiphysics to simulate, model, and validate the structural, interfacial, and rheological characteristics of the complex energy pastes.",
          "Resulting Publication: Accepted in <strong>Carbon Energy (2026)</strong>"
        ]
      }
    ]
  },
  publications: [
    {
      year: "2026",
      title: "Bio-Inspired DNA Bridging Networks for Mechanically Stable and High-Rate Silicon Anodes",
      authors: "Y, Ju., H, Yoon., H, Yoon., AQ, Shen*., & D, Lee.*",
      category: "first-author",
      journal: "(Under review) Advanced Materials",
      image: "assets/images/papers/placeholder.svg",
      paperLink: ""
    },
    {
      year: "2026",
      title: "Engineering Mechanically Adaptive Nanonetworks for Long-Life and High-Capacity Silicon Anode Batteries",
      authors: "Y, Ju., Y, Song., Y, Han., MS, Abdelgawad., Y, Kim., AQ, Shen*., & D, Lee.*",
      category: "first-author",
      journal: "(In press/Accepted) Carbon Energy",
      image: "assets/images/papers/paper-2026-02.jpg",
      paperLink: ""
    },
    {
      year: "2026",
      title: "Highly Porous and Viscoelastic Polyacrylonitrile Carbon Nanofiber Membrane with Interconnected Network of Resorcinol-Formaldehyde Carbon Aerogels",
      authors: "B, Youn., J, Jeong., Y, Han., Y, Ju., KY, Cho*., & D, Lee.*",
      category: "co-author",
      journal: "Fibers and Polymers 1875-0052",
      image: "assets/images/papers/paper-2026-1-fibers and polymers.jpg",
      paperLink: "https://link.springer.com/article/10.1007/s12221-026-01352-5"
    },
    {
      year: "2025",
      title: "Silicon anode with CB/SWCNT conductive network that minimizes surface defects for high areal capacity",
      authors: "G, Kim., M, Kim., Y, Ju., & D, Lee.*",
      category: "co-author",
      journal: "Carbon 247, 120947",
      image: "assets/images/papers/paper-2025-2-carbon.jpg",
      paperLink: "https://www.sciencedirect.com/science/article/abs/pii/S0008622325009637P"
    },
    {
      year: "2025",
      title: "Poly (m-phenylene isophthalamide)-graphene oxide composite separators: A pathway to safer and high-performance lithium-ion batteries",
      authors: "H, Kim., E, Jeon., Y, Ju., J, Chun., & D, Lee.*",
      category: "co-author",
      journal: "Polymer Testing 151, 108930",
      image: "assets/images/papers/paper-2025-3-polymer testing.jpg",
      paperLink: "https://www.sciencedirect.com/science/article/pii/S0142941825002442"
    },
    {
      year: "2025",
      title: "Towards dendrite-free lithium-ion batteries: A comprehensive review of functional separator technologies",
      authors: "Y, Ju., B, Kim., B, Youn., Y, Song., H, Jang., & D, Lee.*",
      category: "first-author",
      journal: "Journal of Energy Storage 127, 116957",
      image: "assets/images/papers/paper-2025-4-journal of energy storage.jpg",
      paperLink: "https://www.sciencedirect.com/science/article/abs/pii/S2352152X25016706"
    },
    {
      year: "2025",
      title: "Engineering Polyethylene Separators With Graphene Oxide-Polyhedral Oligomeric Silsesquioxane Nanocomposites for Enhanced Thermal Resilience and Electrochemical Performance",
      authors: "Y, Ju., G, Park., Y, Song., J, Chun*., & D, Lee.*",
      category: "first-author",
      journal: "International Journal of Energy Research 15, 8876732",
      image: "assets/images/papers/paper-2025-5-international journal of energy research.jpg",
      paperLink: "https://onlinelibrary.wiley.com/doi/full/10.1155/er/8876732"
    },
    {
      year: "2024",
      title: "Electrospun polyvinylidene fluoride membranes: Waterproofing and acoustic performance for air and acoustic vents in electronics",
      authors: "Y, Youn., Y, Ju., D, Lee.*., JS, Youm., YM, So., SH, Lee., C, Kim., YA, Kim.*",
      category: "co-author",
      journal: "ACS Nano 18, 24532-24540",
      image: "assets/images/papers/paper-2024-6-acs nano.jpg",
      paperLink: "https://pubs.acs.org/doi/abs/10.1021/acsnano.4c08750"
    },
    {
      year: "2023",
      title: "Designing highly packed silicon anode slurries for high capacity and prolonged lifespan of lithium-ion batteries",
      authors: "Y, Song., BY, Song., B, Kim., Y, Ju., IS, Jang., J, Chun*., & D, Lee.*",
      category: "co-author",
      journal: "Chemical Engineering Journal 474, 145606",
      image: "assets/images/papers/paper-2023-7-chemical engineering.jpg",
      paperLink: "https://www.sciencedirect.com/science/article/abs/pii/S1385894723043371"
    },
    {
      year: "2023",
      title: "Polycrystalline nanograin formation in uniform-sized silicon carbide fibers derived from aluminum-containing polycarbosilane",
      authors: "Y, Song., YJ, Joo., Y, Ju., B, Youn., DG, Shin., KY, Cho*., & D, Lee.*",
      category: "co-author",
      journal: "Fibers and Polymers",
      image: "assets/images/papers/paper-2023-8-fibers and polymers.jpg",
      paperLink: "https://link.springer.com/article/10.1007/s12221-023-00307-4"
    },
    {
      year: "2021",
      title: "Revealing the enhanced structural recovery and gelation mechanisms of cation-induced cellulose nanofibrils composite hydrogels",
      authors: "Y, Ju., J, Ha., Y, Song., & D, Lee.*",
      category: "first-author",
      journal: "Carbohydrate Polymers 272, 118515",
      image: "assets/images/papers/paper-2021-9-carbohydrate polymers.jpg",
      paperLink: "https://www.sciencedirect.com/science/article/abs/pii/S0144861721009024"
    },
    {
      year: "2021",
      title: "Prediction of enhanced interfacial bonding strength for basalt fiber/epoxy composites by micromechanical and thermomechanical analyses",
      authors: "SY, Mun., J, Ha., S, Lee., Y, Ju., HM, Lim*., & D, Lee.*",
      category: "co-author",
      journal: "Composites Part A: Applied Science and Manufacturing 142, 106208",
      image: "assets/images/papers/paper-2021-10-composite part a.jpg",
      paperLink: "https://www.sciencedirect.com/science/article/abs/pii/S1359835X20304450"
    },
    {
      year: "2020",
      title: "Optimizing the printability and dispersibility of functionalized zirconium oxide/acrylate composites with various nano-to micro-particle ratios",
      authors: "Y, Ju., J, Ha., Y, Song., JS, Yun*., & D, Lee.*",
      category: "first-author",
      journal: "Ceramics International 46 (17), 26903-26910",
      image: "assets/images/papers/paper-2020-11-ceramics international.jpg",
      paperLink: "https://www.sciencedirect.com/science/article/abs/pii/S0272884220321817"
    },
    {
      year: "2020",
      title: "Revealing the flame retardancy mechanism of highly transparent cellulose nanopapers fabricated by vacuum filtration assisted layer-by-layer deposition",
      authors: "S, Lee., D, Seong., Y, Ju., HW, Kwak., WS, Kim*., & D, Lee.*",
      category: "co-author",
      journal: "Carbohydrate Polymers 246, 116628",
      image: "assets/images/papers/paper-2020-12-carbohydrate polymers.jpg",
      paperLink: "https://www.sciencedirect.com/science/article/abs/pii/S014486172030802X"
    }
  ]
};

const state = {
  publications: [],
  activePublicationTab: "all"
};

const PUBLICATION_TABS = [
  { key: "all", label: "All" },
  { key: "first-author", label: "First Author" },
  { key: "co-author", label: "Co-Author" }
];

document.addEventListener("DOMContentLoaded", () => {
  updateNavState();
  initializeThemeToggle();

  const page = document.body.dataset.page;
  if (page === "about") {
    initializeAboutPage();
  } else if (page === "publications") {
    initializePublicationsPage();
  }
});

function updateNavState() {
  const currentPath = window.location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll(".site-nav a").forEach((link) => {
    const target = link.getAttribute("href");
    if (target === currentPath || (currentPath === "" && target === "index.html")) {
      link.setAttribute("aria-current", "page");
    } else {
      link.removeAttribute("aria-current");
    }
  });
}

async function loadJson(path, fallback) {
  try {
    const response = await fetch(path, { cache: "no-store" });
    if (!response.ok) throw new Error(`Failed to load ${path}`);
    return await response.json();
  } catch {
    return fallback;
  }
}

async function initializeAboutPage() {
  const profile = await loadJson("data/yyprofile.json", DEFAULT_DATA.profile);
  renderProfile(profile);
}

function normalizeStringList(values) {
  if (!Array.isArray(values)) return [];
  return values.map((value) => String(value ?? "").trim()).filter(Boolean);
}

function normalizeParagraphList(values) {
  if (Array.isArray(values)) {
    return values.map((value) => String(value ?? "").trim()).filter(Boolean);
  }
  const value = String(values ?? "").trim();
  return value ? [value] : [];
}

function normalizeProfile(profile) {
  const source = profile ?? {};
  const bioIntro = normalizeParagraphList(source.bioIntro ?? source.bio ?? DEFAULT_DATA.profile.bioIntro);
  const researchKeywords = normalizeStringList(source.researchKeywords).length
    ? normalizeStringList(source.researchKeywords)
    : normalizeStringList(DEFAULT_DATA.profile.researchKeywords);

  return {
    name: String(source.name ?? DEFAULT_DATA.profile.name),
    position: String(source.position ?? DEFAULT_DATA.profile.position),
    email: String(source.email ?? DEFAULT_DATA.profile.email),
    phone: String(source.phone ?? DEFAULT_DATA.profile.phone),
    linkedin: String(source.linkedin ?? DEFAULT_DATA.profile.linkedin),
    scholar: String(source.scholar ?? DEFAULT_DATA.profile.scholar),
    orcid: String(source.orcid ?? DEFAULT_DATA.profile.orcid),
    bioIntro,
    researchKeywords,
    bioHighlights: normalizeStringList(source.bioHighlights).length
      ? normalizeStringList(source.bioHighlights)
      : normalizeStringList(DEFAULT_DATA.profile.bioHighlights),
    expertise: normalizeExpertise(source),
    collaborations: normalizeCollaborations(source)
  };
}

function normalizeExpertise(profile) {
  const source = profile ?? {};
  const direct = Array.isArray(source.expertise) ? source.expertise : [];
  if (direct.length) {
    return direct
      .map((item) => ({
        title: String(item?.title ?? item?.subsectionTitle ?? item?.label ?? "").trim(),
        bold: item?.bold !== false,
        bullets: normalizeStringList(item?.bullets ?? item?.items ?? item?.points)
      }))
      .filter((item) => item.title || item.bullets.length);
  }

  const merged = [...normalizeStringList(source.researchKeywords), ...normalizeStringList(source.researchInterests)];
  if (merged.length) {
    return [{ title: "Core Areas", bold: true, bullets: merged }];
  }

  return normalizeExpertise(DEFAULT_DATA.profile);
}

function normalizeCollaborations(profile) {
  const source = profile ?? {};
  const direct = Array.isArray(source.collaborations) ? source.collaborations : [];
  return direct
    .map((item) => ({
      title: String(item?.title ?? item?.role ?? item?.position ?? "").trim(),
      dateRange: String(item?.dateRange ?? item?.dates ?? item?.period ?? "").trim(),
      institution: String(item?.institution ?? "").trim(),
      pi: String(item?.pi ?? item?.principalInvestigator ?? "").trim(),
      achievements: normalizeStringList(item?.achievements ?? item?.bullets ?? item?.highlights)
    }))
    .filter((item) => item.title || item.dateRange || item.institution || item.pi || item.achievements.length);
}

function renderProfile(profile) {
  const data = normalizeProfile(profile);
  const profileName = document.getElementById("profileName");
  const profilePosition = document.getElementById("profilePosition");
  const bioIntro = document.getElementById("bioIntro");
  const bioHighlights = document.getElementById("bioHighlights");
  const researchKeywords = document.getElementById("researchKeywords");
  const expertiseGroups = document.getElementById("expertiseGroups");
  const collaborationList = document.getElementById("collaborationList");
  const contactLinks = document.getElementById("contactLinks");

  if (profileName) profileName.textContent = data.name;

  if (profilePosition) {
    const position = data.position;
    const token = "Ph.D";
    const index = position.indexOf(token);
    const scholarLink = data.scholar ? createScholarButton(data.scholar) : null;

    profilePosition.innerHTML = "";
    if (index === -1) {
      profilePosition.textContent = position;
    } else {
      const textWrap = document.createElement("span");
      textWrap.className = "profile-position-text";

      if (index > 0) textWrap.appendChild(document.createTextNode(position.slice(0, index)));
      const strong = document.createElement("strong");
      strong.textContent = token;
      textWrap.appendChild(strong);
      const remainder = position.slice(index + token.length);
      if (remainder) textWrap.appendChild(document.createTextNode(remainder));
      profilePosition.appendChild(textWrap);
    }

    if (scholarLink) profilePosition.appendChild(scholarLink);
  }

  if (bioIntro) {
    bioIntro.innerHTML = "";
    data.bioIntro.forEach((paragraph) => {
      const p = document.createElement("p");
      p.className = "bio-paragraph";
      p.innerHTML = paragraph;
      bioIntro.appendChild(p);
    });
  }

  if (researchKeywords) {
    researchKeywords.innerHTML = "";
    const label = document.createElement("strong");
    label.textContent = "Keywords:";
    researchKeywords.appendChild(label);
    if (data.researchKeywords.length) {
      researchKeywords.appendChild(document.createTextNode(` ${data.researchKeywords.join(", ")}`));
    }
  }

  renderBulletList(bioHighlights, data.bioHighlights, "bio-highlights");
  renderExpertiseSection(expertiseGroups, data.expertise);
  renderCollaborations(collaborationList, data.collaborations);

  if (contactLinks) {
    contactLinks.innerHTML = "";
    contactLinks.append(
      createContactLink(`mailto:${data.email}`, data.email, "\u2709", "email"),
      createContactLink(`tel:${normalizePhoneForTel(data.phone)}`, data.phone, "\u260E", "phone")
    );
  }

  document.title = `${data.name} | About`;
  const brand = document.querySelector(".brand");
  if (brand) brand.textContent = data.name;
}

function renderBulletList(container, items, className) {
  if (!container) return;
  const list = normalizeStringList(items);
  container.innerHTML = "";
  if (!list.length) {
    container.hidden = true;
    return;
  }
  container.hidden = false;
  if (className) container.className = className;
  list.forEach((item) => {
    const li = document.createElement("li");
    li.innerHTML = item;
    container.appendChild(li);
  });
}

function renderExpertiseSection(container, sections) {
  if (!container) return;
  const list = Array.isArray(sections) ? sections : [];
  container.innerHTML = "";
  if (!list.length) {
    const empty = document.createElement("p");
    empty.className = "section-empty-note";
    empty.textContent = "Add research interest subsections in data/yyprofile.json.";
    container.appendChild(empty);
    return;
  }

  list.forEach((section) => {
    const group = document.createElement("article");
    group.className = "expertise-item fade-in";
    const title = document.createElement("h3");
    title.className = "subsection-title";
    if (section.bold !== false) {
      const strong = document.createElement("strong");
      strong.textContent = section.title || "Topic";
      title.appendChild(strong);
    } else {
      title.textContent = section.title || "Topic";
    }

    const bullets = document.createElement("ul");
    bullets.className = "subsection-list";
    (section.bullets || []).forEach((bullet) => {
      const li = document.createElement("li");
      li.innerHTML = bullet;
      bullets.appendChild(li);
    });

    group.append(title, bullets);
    container.appendChild(group);
  });
}

function renderCollaborations(container, collaborations) {
  if (!container) return;
  const items = Array.isArray(collaborations) ? collaborations : [];
  container.innerHTML = "";
  if (!items.length) {
    const empty = document.createElement("p");
    empty.className = "section-empty-note";
    empty.textContent = "Add international collaboration entries in data/yyprofile.json.";
    container.appendChild(empty);
    return;
  }

  items.forEach((item, index) => {
    const entry = document.createElement("article");
    entry.className = "collaboration-item fade-in";
    entry.style.animationDelay = `${index * 70}ms`;

    const header = document.createElement("div");
    header.className = "collaboration-header";
    const title = document.createElement("h3");
    title.className = "collaboration-title";
    title.textContent = item.title || "Collaboration";
    const dateRange = document.createElement("span");
    dateRange.className = "collaboration-date";
    dateRange.textContent = item.dateRange || "";
    header.append(title, dateRange);

    const meta = document.createElement("p");
    meta.className = "collaboration-meta";
    const metaParts = [];
    if (item.institution) metaParts.push(item.institution);
    if (item.pi) metaParts.push(item.pi);
    meta.textContent = metaParts.join(" | ");

    const achievements = document.createElement("ul");
    achievements.className = "collaboration-achievements";
    (item.achievements || []).forEach((achievement) => {
      const li = document.createElement("li");
      li.innerHTML = achievement;
      achievements.appendChild(li);
    });

    entry.append(header, meta, achievements);
    container.appendChild(entry);
  });
}

function createContactLink(href, value, iconText, kind) {
  const link = document.createElement("a");
  link.href = href;
  link.target = href.startsWith("mailto:") || href.startsWith("tel:") ? "_self" : "_blank";
  link.rel = "noreferrer";
  link.className = `contact-link contact-link-${kind}`;

  const icon = document.createElement("span");
  icon.className = "contact-icon";
  icon.setAttribute("aria-hidden", "true");
  icon.textContent = iconText;

  const text = document.createElement("span");
  text.className = "contact-text";
  text.textContent = value;

  link.append(icon, text);
  return link;
}

function createScholarButton(href) {
  const link = document.createElement("a");
  link.className = "scholar-button";
  link.href = href;
  link.target = "_blank";
  link.rel = "noreferrer";

  const icon = document.createElement("span");
  icon.className = "scholar-icon";
  icon.setAttribute("aria-hidden", "true");
  icon.textContent = "🎓";

  const text = document.createElement("span");
  text.textContent = "Google Scholar";

  link.append(icon, text);
  return link;
}

function normalizePhoneForTel(phone) {
  return String(phone ?? "").replace(/[^\d+]/g, "");
}

function initializeThemeToggle() {
  const toggle = document.getElementById("themeToggle");
  if (!toggle) return;

  const storageKey = "yy-theme";
  const applyTheme = (theme) => {
    const isNight = theme === "night";
    document.body.dataset.theme = isNight ? "night" : "day";
    toggle.textContent = isNight ? "☀" : "☾";
    toggle.setAttribute("aria-label", isNight ? "Switch to day mode" : "Switch to night mode");
  };

  applyTheme(localStorage.getItem(storageKey) === "night" ? "night" : "day");
  toggle.addEventListener("click", () => {
    const nextTheme = document.body.dataset.theme === "night" ? "day" : "night";
    localStorage.setItem(storageKey, nextTheme);
    applyTheme(nextTheme);
  });
}

async function initializePublicationsPage() {
  const publications = await loadJson("data/yypublications.json", DEFAULT_DATA.publications);
  state.publications = normalizePublications(publications);
  state.activePublicationTab = "all";
  renderPublicationTabs();
  renderPublicationList();
  updatePublicationTabState();
}

function normalizePublicationCategory(value, authors) {
  const category = String(value ?? "").trim().toLowerCase();
  if (category === "first-author" || category === "co-author") return category;
  const authorString = String(authors ?? "");
  return authorString.startsWith("Y, Ju.") ? "first-author" : "co-author";
}

function normalizePublications(publications) {
  const items = Array.isArray(publications) && publications.length ? publications : DEFAULT_DATA.publications;
  return items
    .map((publication) => ({
      year: String(publication?.year ?? "").trim() || "Unknown",
      title: String(publication?.title ?? "").trim(),
      authors: String(publication?.authors ?? "").trim(),
      category: normalizePublicationCategory(publication?.category, publication?.authors),
      journal: String(publication?.journal ?? "").trim(),
      image: String(publication?.image ?? "").trim(),
      paperLink: String(publication?.paperLink ?? "").trim()
    }))
    .filter((publication) => publication.title || publication.authors || publication.journal);
}

function getFilteredPublications() {
  if (state.activePublicationTab === "first-author") {
    return state.publications.filter((publication) => publication.category === "first-author");
  }

  if (state.activePublicationTab === "co-author") {
    return state.publications.filter((publication) => publication.category === "co-author");
  }

  return state.publications;
}

function getPublicationTabCounts() {
  return state.publications.reduce(
    (counts, publication) => {
      counts.all += 1;
      if (publication.category === "first-author") {
        counts["first-author"] += 1;
      } else if (publication.category === "co-author") {
        counts["co-author"] += 1;
      }
      return counts;
    },
    { all: 0, "first-author": 0, "co-author": 0 }
  );
}

function renderPublicationTabs() {
  const container = document.getElementById("publicationTabs");
  if (!container) return;

  const counts = getPublicationTabCounts();
  container.innerHTML = "";
  container.setAttribute("role", "tablist");

  PUBLICATION_TABS.forEach((tab) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "publication-tab";
    button.dataset.tab = tab.key;
    button.setAttribute("role", "tab");
    button.setAttribute("aria-selected", String(state.activePublicationTab === tab.key));
    button.setAttribute("aria-controls", "publicationGroups");
    button.textContent = `${tab.label} (${counts[tab.key]})`;

    button.addEventListener("click", () => {
      if (state.activePublicationTab === tab.key) return;
      state.activePublicationTab = tab.key;
      renderPublicationList();
      updatePublicationTabState();
    });

    container.appendChild(button);
  });
}

function updatePublicationTabState() {
  document.querySelectorAll(".publication-tab").forEach((button) => {
    const isActive = button.dataset.tab === state.activePublicationTab;
    button.classList.toggle("is-active", isActive);
    button.setAttribute("aria-selected", String(isActive));
  });
}

function renderPublications(publications) {
  const container = document.getElementById("publicationGroups");
  if (!container) return;

  container.innerHTML = "";
  if (!publications.length) {
    const empty = document.createElement("p");
    empty.className = "publication-empty fade-in";
    empty.textContent = "No publications are available in this category yet.";
    container.appendChild(empty);
    const brand = document.querySelector(".brand");
    if (brand) brand.textContent = DEFAULT_DATA.profile.name;
    document.title = `${DEFAULT_DATA.profile.name} | Publications`;
    return;
  }

  const grouped = publications.reduce((accumulator, item) => {
    const year = item.year || "Unknown";
    if (!accumulator[year]) accumulator[year] = [];
    accumulator[year].push(item);
    return accumulator;
  }, {});

  const sortedYears = Object.keys(grouped).sort((a, b) => Number(b) - Number(a));
  sortedYears.forEach((year) => {
    const group = document.createElement("section");
    group.className = "year-group fade-in";

    const heading = document.createElement("div");
    heading.className = "year-heading";
    const yearTitle = document.createElement("h2");
    yearTitle.textContent = year;
    heading.appendChild(yearTitle);

    const list = document.createElement("div");
    list.className = "publication-list";
    grouped[year].forEach((publication, index) => {
      list.appendChild(createPublicationCard(publication, index));
    });

    group.append(heading, list);
    container.appendChild(group);
  });

  const brand = document.querySelector(".brand");
  if (brand) brand.textContent = DEFAULT_DATA.profile.name;
  document.title = `${DEFAULT_DATA.profile.name} | Publications`;
}

function renderPublicationList() {
  renderPublications(getFilteredPublications());
}

function createPublicationCard(publication, index) {
  const card = document.createElement("article");
  card.className = "publication-card fade-in";
  card.style.animationDelay = `${index * 90}ms`;

  const figure = document.createElement("figure");
  figure.className = "paper-figure";
  const image = document.createElement("img");
  image.src = publication.image || "assets/images/papers/placeholder.svg";
  image.alt = `${publication.title} graphical abstract`;
  image.loading = "lazy";
  image.onerror = () => {
    if (!image.src.endsWith("placeholder.svg")) {
      image.src = "assets/images/papers/placeholder.svg";
    }
  };
  figure.appendChild(image);

  const content = document.createElement("div");
  content.className = "paper-content";

  const title = document.createElement("h3");
  title.className = "paper-title";
  title.textContent = publication.title || "Untitled publication";

  const authors = document.createElement("p");
  authors.className = "paper-authors";
  setHighlightedText(authors, publication.authors || "Author names", "Y, Ju.", "name-highlight");

  const journal = document.createElement("p");
  journal.className = "paper-journal";
  journal.textContent = publication.journal || "Journal name";

  const metaRow = document.createElement("div");
  metaRow.className = "paper-meta-row";
  const actions = document.createElement("div");
  actions.className = "paper-actions";

  const paperLink = publication.paperLink || "#";
  if (paperLink && paperLink !== "#") {
    actions.appendChild(createButtonLink(paperLink, "Paper"));
  }

  metaRow.appendChild(journal);
  if (actions.children.length) metaRow.appendChild(actions);
  content.append(title, authors, metaRow);
  card.append(figure, content);
  return card;
}

function setHighlightedText(element, text, targetText, className) {
  if (!element) return;
  const targetName = String(targetText ?? "");
  const value = String(text ?? "");
  const index = value.indexOf(targetName);

  if (index === -1) {
    element.textContent = value;
    return;
  }

  element.textContent = "";
  if (index > 0) element.appendChild(document.createTextNode(value.slice(0, index)));

  const highlight = document.createElement("span");
  highlight.className = className || "name-highlight";
  highlight.textContent = targetName;
  element.appendChild(highlight);

  const remainder = value.slice(index + targetName.length);
  if (remainder) element.appendChild(document.createTextNode(remainder));
}

function createButtonLink(href, label) {
  const link = document.createElement("a");
  link.className = `button ${label === "Paper" ? "button-primary" : "button-secondary"}`;
  link.href = href;
  link.target = "_blank";
  link.rel = "noreferrer";
  link.textContent = label;
  return link;
}
(() => {
  const emphasizeYangyulJu = () => {
    document.querySelectorAll(".paper-authors").forEach((el) => {
      if (el.dataset.juEmphasized === "1") {
        return;
      }
      const raw = el.textContent || "";
      if (!raw.includes("Y, Ju.")) {
        return;
      }
      el.innerHTML = raw.replace(/Y,\s*Ju\./g, "<strong><u>Y, Ju.</u></strong>");
      el.dataset.juEmphasized = "1";
    });
  };

  const run = () => {
    emphasizeYangyulJu();
    const observer = new MutationObserver(() => emphasizeYangyulJu());
    observer.observe(document.documentElement, { childList: true, subtree: true });
    window.setTimeout(() => observer.disconnect(), 5000);
  };

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", run, { once: true });
  } else {
    run();
  }
})();
