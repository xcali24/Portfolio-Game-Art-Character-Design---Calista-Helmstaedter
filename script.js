document.querySelectorAll('.lightbox').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const overlay = document.createElement('div');
    overlay.className = 'lightbox-overlay';
    const img = document.createElement('img');
    img.src = link.href;
    overlay.appendChild(img);
    document.body.appendChild(overlay);

    overlay.addEventListener('click', () => {
      document.body.removeChild(overlay);
    });
  });
});

function toggleLore(button) {
  const container = button.closest('.caption');
  const dots = container.querySelector(".dots");
  const moreText = container.querySelector(".more-text");

  if (moreText.style.display === "inline") {
    moreText.style.display = "none";
    dots.style.display = "inline";
    button.textContent = "Mehr anzeigen";
  } else {
    moreText.style.display = "inline";
    dots.style.display = "none";
    button.textContent = "Weniger anzeigen";
  }
}
// --- Slider mit Lightbox ---
const slides = document.querySelectorAll(".slide");
let currentSlide = 0;

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.style.display = i === index ? "block" : "none";
  });
}

document.getElementById("next-btn").addEventListener("click", () => {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
});

document.getElementById("prev-btn").addEventListener("click", () => {
  currentSlide = (currentSlide - 1 + slides.length) % slides.length;
  showSlide(currentSlide);
});

showSlide(currentSlide);


// neu//
(function () {
  const slides = document.querySelectorAll(".slide");
  const prevBtn = document.getElementById("prev-btn");
  const nextBtn = document.getElementById("next-btn");
  const titleEl = document.getElementById("slide-title");
  const descEl = document.getElementById("slide-description");

  if (!slides.length || !prevBtn || !nextBtn || !titleEl || !descEl) return;

  const captions = [
    {
      title: "Phase 1 – Lineart des Skin-Konzepts",
      desc: "Diese Zeichnung zeigt die erste ausgearbeitete Lineart meines Charakterkonzepts „Whisper of the Hunt“. Als Grundlage für den gesamten Entwicklungsprozess definiert sie bereits zentrale Designelemente wie Pose, Silhouette und Kostümierung. Besonders wichtig war mir in dieser Phase, die charakteristische Fuchsmaske und die traditionellen Kleidungselemente klar herauszuarbeiten, da sie die narrative Grundlage des Charakters bilden."
      
    },
    {
      title: "Phase 2 – Erste Farbskizze & visuelle Orientierung",
      desc: "Die erste Kolorierung diente der Erkundung der Farbpalette und der visuellen Atmosphäre. Hier testete ich verschiedene Ansätze für Stoffwirkung und Symbolik, wobei das florale Muster und die harmonische Farbverteilung im Fokus standen. Diese Arbeitsphase war entscheidend, um frühzeitig Designentscheidungen zu validieren und die weitere Entwicklungsrichtung festzulegen."
    },
    {
      title: "Phase 3 – Anpassung von Proportionen & Base Color",
      desc: "In der finalen Überarbeitung optimierte ich sowohl die Proportionen als auch die narrative Stimmigkeit des Designs. Die ursprüngliche Waffe wurde durch eine Axt ersetzt, da diese besser zur Lore und zum Charakter der Huntress passt. Die klare Farbgebung schafft eine solide Basis für die anschließende Ausarbeitung von Licht, Schatten und Details."
    },
    {
      title: "Finale Ausarbeitung & Rendering",
      desc: "In der letzten Phase wurde das Design durch gezielte Schattierungen, Texturen und Detailverfeinerungen vollendet. Die Blutspuren und subtilen Schattierungen verleihen der Figur erzählerische Tiefe, während Licht- und Schattenführung ihre räumliche Wirkung unterstreichen. Die Kombination aus traditioneller Symbolik und düsteren Akzenten unterstreicht das unheimliche, mystische Erscheinungsbild und bringt das Konzept als fertigen Charakter-Entwurf zur Geltung."
    }
  ];

  let currentSlide = 0;

  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.classList.remove("active");
      if (i === index) slide.classList.add("active");
    });

    titleEl.textContent = captions[index].title;
    descEl.textContent = captions[index].desc;
  }

  prevBtn.addEventListener("click", () => {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(currentSlide);
  });

  nextBtn.addEventListener("click", () => {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
  });

  // Initialer Aufruf
  showSlide(currentSlide);
})();

//kürbis//


(function () {
  const slides = document.querySelectorAll(".slide-kuerbis");
  const prevBtn = document.getElementById("prev-btn-kuerbis");
  const nextBtn = document.getElementById("next-btn-kuerbis");
  const titleEl = document.getElementById("kuerbis-slide-title");
  const descEl = document.getElementById("kuerbis-slide-description");

  if (!slides.length || !prevBtn || !nextBtn || !titleEl || !descEl) return;

  const captions = [
    {
      title: "Kürbis-Schnitzkunst – Frontansicht mit Huntress-Motiv",
      desc: "Die Vorderseite des geschnitzten Kürbisses zeigt die stilisierte Maske der Huntress aus Dead by Daylight. Durch gezielte Variationen in der Schnitztiefe entstehen feine Hell-Dunkel-Kontraste, die dem Motiv eine plastische Wirkung verleihen. Die Augen, das Band der Maske und die charakteristischen Ohren wurden so positioniert, dass sie selbst im Kerzenschein klar lesbar bleiben und dem Kürbis eine ausdrucksstarke visuelle Präsenz verleihen."
    },
    {
      title: "Kürbis-Schnitzkunst – Rückansicht mit Huntress-Silhouette",
      desc: "Die Rückseite des Kürbisses zeigt die ikonische Silhouette der Huntress in charakteristischer Haltung mit zwei Äxten. Die Figur wurde in Positivtechnik geschnitzt- dabei bleibt das Motiv dunkel, während der Hintergrund durchleuchtet wird. Dieser starke Hell-Dunkel-Kontrast erzeugt ein dramatisches Schattenspiel und verleiht dem Gesamtbild eine unheimlich ruhige, aber bedrohliche Atmosphäre. Die ovale Form des Lichtfensters rahmt die Figur ein und verstärkt die Wirkung wie bei einem Bühnenauftritt im Kerzenschein. "
    },
    {
      title: "Kürbis-Schnitzkunst – Gesamtbild mit Lichtprojektion",
      desc: "Diese Aufnahme zeigt den geschnitzten Kürbis in Szene gesetzt mit Kerzenbeleuchtung im Inneren. Das Zusammenspiel der beiden Motive (vorn das detaillierte Gesicht, hinten die Silhouette) erzeugt durch die Wandprojektion eine immersive Wirkung. Die Huntress-Form wird in überlebensgroßer Schattenprojektion sichtbar, was der Szene eine theatralische, fast filmisch wirkende Tiefe verleiht. Das Bild hebt eindrucksvoll hervor, wie sich künstlerisches Handwerk, Perspektive und Lichtdramaturgie zu einem atmosphärischen Gesamtbild verbinden lassen. "
    }
  ];

  let currentSlide = 0;

  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.classList.remove("active");
      if (i === index) slide.classList.add("active");
    });

    titleEl.textContent = captions[index].title;
    descEl.textContent = captions[index].desc;
  }

  prevBtn.addEventListener("click", () => {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(currentSlide);
  });

  nextBtn.addEventListener("click", () => {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
  });

  showSlide(currentSlide);
})();
