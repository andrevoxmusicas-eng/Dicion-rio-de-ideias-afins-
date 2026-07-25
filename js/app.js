// Dicionário de Ideias Afins — lógica de busca e renderização

const STOPWORDS = new Set([
  "a","o","as","os","de","da","do","das","dos","um","uma","uns","umas",
  "e","é","que","com","para","por","em","no","na","nos","nas","se",
  "ao","aos","à","às","como","mais","muito","tao","tão","meu","minha",
  "seu","sua","ele","ela","eu","tu","voce","você","isso","isto","aquilo"
]);

function normalize(str) {
  return str
    .toString()
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function levenshtein(a, b) {
  const m = a.length, n = b.length;
  if (m === 0) return n;
  if (n === 0) return m;
  const dp = new Array(n + 1);
  for (let j = 0; j <= n; j++) dp[j] = j;
  for (let i = 1; i <= m; i++) {
    let prev = dp[0];
    dp[0] = i;
    for (let j = 1; j <= n; j++) {
      const tmp = dp[j];
      dp[j] = a[i - 1] === b[j - 1]
        ? prev
        : 1 + Math.min(prev, dp[j], dp[j - 1]);
      prev = tmp;
    }
  }
  return dp[n];
}

// Pré-processa cada conceito com termos, frases, ditados e expressões normalizados,
// para acelerar a busca. Ditados e expressões contam como "textos" de apoio, assim
// como as frases: enriquecem a busca sem cada um precisar de sua própria lógica.
const INDEX = CONCEPTS.map(c => {
  const textos = [...(c.frases || []), ...(c.ditados || []), ...(c.expressoes || [])];
  const textosNorm = textos.map(normalize);
  const textosWordSet = new Set(
    textosNorm.flatMap(f => f.split(" ")).filter(w => w.length >= 3 && !STOPWORDS.has(w))
  );
  return {
    ...c,
    termosNorm: c.termos.map(normalize),
    textosNorm,
    textosWordSet
  };
});
const CONCEPT_BY_ID = new Map(INDEX.map(c => [c.id, c]));

function conceptTitle(concept) {
  const t = concept.termos[0];
  return t.charAt(0).toUpperCase() + t.slice(1);
}

function scoreConcept(concept, rawQueryNorm, queryWords) {
  let score = 0;

  if (concept.termosNorm.includes(rawQueryNorm)) {
    score += 100;
  }

  if (rawQueryNorm.length >= 6) {
    for (const texto of concept.textosNorm) {
      if (texto.includes(rawQueryNorm) || rawQueryNorm.includes(texto)) {
        score += 60;
      }
    }
  }

  for (const word of queryWords) {
    if (word.length < 2) continue;

    for (const termo of concept.termosNorm) {
      if (termo === word) {
        score += 10;
      } else if (word.length >= 4 && (termo.startsWith(word) || word.startsWith(termo))) {
        score += 5;
      } else {
        const maxLen = Math.max(termo.length, word.length);
        const dist = levenshtein(termo, word);
        if (maxLen >= 4 && dist <= 1) score += 3;
        else if (maxLen >= 6 && dist <= 2) score += 2;
      }
    }

    if (word.length >= 3) {
      if (concept.textosWordSet.has(word)) {
        score += 4;
      } else {
        for (const txWord of concept.textosWordSet) {
          if (word.length >= 4 && (txWord.startsWith(word) || word.startsWith(txWord))) {
            score += 2;
            break;
          }
        }
      }
    }
  }

  return score;
}

function search(rawQuery) {
  const normQuery = normalize(rawQuery);
  if (!normQuery) return { matches: [], suggestions: [] };

  const queryWords = normQuery.split(" ").filter(w => w && !STOPWORDS.has(w));
  const wordsForScoring = queryWords.length ? queryWords : normQuery.split(" ");

  const scored = INDEX
    .map(concept => ({ concept, score: scoreConcept(concept, normQuery, wordsForScoring) }))
    .filter(s => s.score > 0)
    .sort((a, b) => b.score - a.score);

  if (scored.length === 0) {
    return { matches: [], suggestions: getSuggestions(normQuery) };
  }

  const topScore = scored[0].score;
  const matches = scored
    .filter(s => s.score >= Math.max(topScore * 0.4, 5))
    .slice(0, 5)
    .map(s => s.concept);

  return { matches, suggestions: [] };
}

function getSuggestions(normQuery) {
  const candidates = [];
  for (const concept of INDEX) {
    for (let i = 0; i < concept.termos.length; i++) {
      const termoNorm = concept.termosNorm[i];
      const dist = levenshtein(termoNorm, normQuery);
      candidates.push({ termo: concept.termos[i], conceptId: concept.id, dist });
    }
  }
  candidates.sort((a, b) => a.dist - b.dist);
  const seen = new Set();
  const out = [];
  for (const c of candidates) {
    if (seen.has(c.conceptId)) continue;
    seen.add(c.conceptId);
    out.push(c);
    if (out.length >= 5) break;
  }
  return out;
}

// ---------- UI ----------

const el = {
  input: document.getElementById("query"),
  form: document.getElementById("searchForm"),
  results: document.getElementById("results"),
  randomBtn: document.getElementById("randomBtn"),
  trail: document.getElementById("trail"),
  emptyState: document.getElementById("emptyState")
};

let visitedTrail = [];

function runSearch(query, { addToTrail = true } = {}) {
  const trimmed = query.trim();
  el.input.value = trimmed;
  if (!trimmed) {
    renderEmpty();
    return;
  }

  const { matches, suggestions } = search(trimmed);

  if (matches.length && addToTrail) {
    pushTrail(trimmed, matches[0].id);
  }

  render(trimmed, matches, suggestions);
}

function pushTrail(label, conceptId) {
  visitedTrail = visitedTrail.filter(t => t.conceptId !== conceptId);
  visitedTrail.push({ label, conceptId });
  if (visitedTrail.length > 8) visitedTrail.shift();
  renderTrail();
}

function renderTrail() {
  el.trail.innerHTML = "";
  if (!visitedTrail.length) {
    el.trail.classList.add("hidden");
    return;
  }
  el.trail.classList.remove("hidden");
  visitedTrail.forEach(item => {
    const btn = document.createElement("button");
    btn.className = "trail-chip";
    btn.textContent = item.label;
    btn.addEventListener("click", () => runSearch(item.label, { addToTrail: false }));
    el.trail.appendChild(btn);
  });
}

function chip(text, onClick, variant) {
  const btn = document.createElement("button");
  btn.type = "button";
  btn.className = "chip" + (variant ? ` chip--${variant}` : "");
  btn.textContent = text;
  if (onClick) btn.addEventListener("click", onClick);
  return btn;
}

function renderEmpty() {
  el.results.innerHTML = "";
  el.emptyState.classList.remove("hidden");
}

function render(query, matches, suggestions) {
  el.emptyState.classList.add("hidden");
  el.results.innerHTML = "";

  if (!matches.length) {
    const card = document.createElement("div");
    card.className = "card card--empty";

    const title = document.createElement("p");
    title.className = "no-match";
    title.textContent = `Nenhuma correspondência exata para "${query}".`;
    card.appendChild(title);

    if (suggestions.length) {
      const label = document.createElement("p");
      label.className = "suggestion-label";
      label.textContent = "Você quis dizer:";
      card.appendChild(label);

      const chipsWrap = document.createElement("div");
      chipsWrap.className = "chips";
      suggestions.forEach(s => {
        chipsWrap.appendChild(
          chip(s.termo, () => runSearch(s.termo), "suggestion")
        );
      });
      card.appendChild(chipsWrap);
    }

    el.results.appendChild(card);
    return;
  }

  matches.forEach((concept, idx) => {
    el.results.appendChild(renderConceptCard(concept, idx === 0));
  });
}

function renderConceptCard(concept, isPrimary) {
  const card = document.createElement("article");
  card.className = "card" + (isPrimary ? " card--primary" : "");

  const header = document.createElement("h2");
  header.className = "card-title";
  header.textContent = conceptTitle(concept);
  card.appendChild(header);

  // Sinônimos / termos
  const synLabel = document.createElement("h3");
  synLabel.className = "section-label";
  synLabel.textContent = "Palavras relacionadas";
  card.appendChild(synLabel);

  const synChips = document.createElement("div");
  synChips.className = "chips";
  concept.termos.forEach(t => {
    synChips.appendChild(chip(t, () => runSearch(t)));
  });
  card.appendChild(synChips);

  // Frases
  if (concept.frases && concept.frases.length) {
    const phrasesLabel = document.createElement("h3");
    phrasesLabel.className = "section-label";
    phrasesLabel.textContent = "Frases afins";
    card.appendChild(phrasesLabel);

    const list = document.createElement("ul");
    list.className = "phrase-list";
    concept.frases.forEach(f => {
      const li = document.createElement("li");
      li.textContent = f;
      list.appendChild(li);
    });
    card.appendChild(list);
  }

  // Ditados populares
  if (concept.ditados && concept.ditados.length) {
    const ditadosLabel = document.createElement("h3");
    ditadosLabel.className = "section-label";
    ditadosLabel.textContent = "Ditados populares";
    card.appendChild(ditadosLabel);

    const list = document.createElement("ul");
    list.className = "phrase-list phrase-list--ditados";
    concept.ditados.forEach(d => {
      const li = document.createElement("li");
      li.textContent = d;
      list.appendChild(li);
    });
    card.appendChild(list);
  }

  // Expressões populares
  if (concept.expressoes && concept.expressoes.length) {
    const expLabel = document.createElement("h3");
    expLabel.className = "section-label";
    expLabel.textContent = "Expressões populares";
    card.appendChild(expLabel);

    const expChips = document.createElement("div");
    expChips.className = "chips";
    concept.expressoes.forEach(exp => {
      expChips.appendChild(chip(exp, () => runSearch(exp), "expressao"));
    });
    card.appendChild(expChips);
  }

  // Ideias afins (relacionados)
  if (concept.relacionados && concept.relacionados.length) {
    const relLabel = document.createElement("h3");
    relLabel.className = "section-label";
    relLabel.textContent = "Ideias afins para explorar";
    card.appendChild(relLabel);

    const relChips = document.createElement("div");
    relChips.className = "chips";
    concept.relacionados.forEach(rid => {
      const relConcept = CONCEPT_BY_ID.get(rid);
      if (!relConcept) return;
      relChips.appendChild(
        chip(conceptTitle(relConcept), () => runSearch(relConcept.termos[0]), "related")
      );
    });
    card.appendChild(relChips);
  }

  return card;
}

el.form.addEventListener("submit", e => {
  e.preventDefault();
  runSearch(el.input.value);
});

el.randomBtn.addEventListener("click", () => {
  const random = CONCEPTS[Math.floor(Math.random() * CONCEPTS.length)];
  runSearch(random.termos[0]);
});

renderEmpty();
