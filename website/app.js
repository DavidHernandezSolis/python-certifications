/* ⚙️ PCEP Training Portal - Application Logic */

// Application State
const STATE = {
  activeTab: "dashboard",
  
  // Learning path descriptions
  paths: {
    rapido: "<strong>Modo Rápido (20h):</strong> Diseñado para programadores experimentados. Enfócate en las Cheat Sheets rápidas, los laboratorios prácticos y realiza simulaciones del examen real repetidamente hasta superar el 85%.",
    completo: "<strong>Modo Completo (60h):</strong> La ruta recomendada. Estudia los módulos teóricos secuencialmente de 1 a 13, realiza las autoevaluaciones, practica con flashcards y finaliza completando todos los simuladores.",
    experto: "<strong>Modo Experto (120h):</strong> Para principiantes absolutos en computación. Estudia en profundidad cada concepto, escribe los scripts del banco de código manualmente y repasa la jerarquía de excepciones y operadores de bits."
  },

  // Flashcards state
  flashcardTopic: "variables",
  flashcardIndex: 0,
  flashcards: [],

  // Simulator state
  simMode: "5", // Default: Mode 5 - Timed Mock Exam
  examQuestions: [],
  currentQuestionIndex: 0,
  userAnswers: {}, // Maps question index to option letter
  timerInterval: null,
  timeRemaining: 900, // 15 minutes (900 seconds)
  timeElapsed: 0
};

// Markdown to HTML compiler (Regex-based)
function parseMarkdown(md) {
  if (!md) return "";
  let html = md;

  // Escapar HTML básico para prevenir inyecciones
  html = html
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");

  // Code blocks ( ```lang ... ``` )
  html = html.replace(/```(python|text|javascript|bash)?([\s\S]*?)```/g, (match, lang, code) => {
    return `<pre><code class="language-${lang || 'text'}">${code.trim()}</code></pre>`;
  });

  // Headers (###, ##, #)
  html = html.replace(/^### (.*?)$/gm, "<h3>$1</h3>");
  html = html.replace(/^## (.*?)$/gm, "<h2>$1</h2>");
  html = html.replace(/^# (.*?)$/gm, "<h1>$1</h1>");

  // Horizontal Rules (---)
  html = html.replace(/^---$/gm, "<hr>");

  // Bold (**text**)
  html = html.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>");

  // Inline Code (`code`)
  html = html.replace(/`(.*?)`/g, "<code>$1</code>");

  // Blockquotes (>)
  html = html.replace(/^> (.*?)$/gm, "<blockquote>$1</blockquote>");

  // Unordered Lists (* item)
  html = html.replace(/^\*\s+(.*?)$/gm, "<li>$1</li>");
  html = html.replace(/^-\s+(.*?)$/gm, "<li>$1</li>");
  // Wrap li blocks in ul (simple parser optimization)
  html = html.replace(/(<li>.*<\/li>)/s, "<ul>$1</ul>");

  // Clean double linebreaks to paragraphs
  html = html.replace(/\n\n/g, "<p></p>");
  html = html.replace(/\n/g, "<br>");

  return html;
}

// Navigation Tab Router
function initRouter() {
  document.querySelectorAll(".nav-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      // Toggle nav highlight
      document.querySelectorAll(".nav-btn").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");

      // Toggle views
      const targetTab = btn.getAttribute("data-tab");
      document.querySelectorAll(".tab-pane").forEach(pane => pane.classList.remove("active"));
      document.getElementById(targetTab).classList.add("active");

      STATE.activeTab = targetTab;
      
      // Trigger tab-specific loaders
      if (targetTab === "modules") {
        loadModulesView();
      } else if (targetTab === "cheatsheets") {
        loadCheatsheetsView();
      } else if (targetTab === "flashcards") {
        loadFlashcardsView();
      }
    });
  });
}

// 1. DASHBOARD VIEW CONTROLLER
function initDashboard() {
  document.querySelectorAll(".path-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      document.querySelectorAll(".path-btn").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      
      const pathKey = btn.getAttribute("data-path");
      document.getElementById("path-desc-content").innerHTML = STATE.paths[pathKey];
    });
  });
}

// 2. MODULES VIEW CONTROLLER
function loadModulesView() {
  const menu = document.getElementById("module-menu");
  menu.innerHTML = "";

  // 13 modules syllabus mapper
  const modulesMeta = [
    { key: "module_01", label: "Módulo 1: Introducción" },
    { key: "module_02", label: "Módulo 2: Variables" },
    { key: "module_03", label: "Módulo 3: Tipos" },
    { key: "module_04", label: "Módulo 4: Operadores" },
    { key: "module_05", label: "Módulo 5: Expresiones" },
    { key: "module_06", label: "Módulo 6: Entrada y Salida" },
    { key: "module_07", label: "Módulo 7: Control Flujo" },
    { key: "module_08", label: "Módulo 8: Bucles" },
    { key: "module_09", label: "Módulo 9: Colecciones" },
    { key: "module_10", label: "Módulo 10: Funciones" },
    { key: "module_11", label: "Módulo 11: Módulos" },
    { key: "module_12", label: "Módulo 12: Excepciones" },
    { key: "module_13", label: "Módulo 13: Preparación Final" }
  ];

  modulesMeta.forEach((m, idx) => {
    const li = document.createElement("li");
    li.className = "menu-item" + (idx === 0 ? " active" : "");
    li.textContent = m.label;
    li.addEventListener("click", () => {
      document.querySelectorAll("#module-menu .menu-item").forEach(item => item.classList.remove("active"));
      li.classList.add("active");
      renderModuleContent(m.key);
    });
    menu.appendChild(li);
  });

  // Render first module by default
  renderModuleContent("module_01");
}

function renderModuleContent(key) {
  const rawMarkdown = PCEP_MODULES.modules[key] || "# Módulo no encontrado\nEl contenido de este módulo aún no ha sido cargado.";
  document.getElementById("module-reader-content").innerHTML = parseMarkdown(rawMarkdown);
}

// 3. CHEATSHEETS VIEW CONTROLLER
function loadCheatsheetsView() {
  document.querySelectorAll("#cheatsheet-menu .menu-item").forEach(item => {
    // Re-attach click listeners
    item.onclick = () => {
      document.querySelectorAll("#cheatsheet-menu .menu-item").forEach(i => i.classList.remove("active"));
      item.classList.add("active");
      const key = item.getAttribute("data-cheatsheet");
      renderCheatsheetContent(key);
    };
  });

  // Load first cheatsheet
  renderCheatsheetContent("variables");
}

function renderCheatsheetContent(key) {
  const rawMarkdown = PCEP_MODULES.cheatsheets[key] || "# Cheat sheet no encontrada";
  document.getElementById("cheatsheet-reader-content").innerHTML = parseMarkdown(rawMarkdown);
}

// 4. FLASHCARDS VIEW CONTROLLER
function parseFlashcardsFromMarkdown(md) {
  if (!md) return [];
  const cards = [];
  const rawBlocks = md.split("---");
  
  rawBlocks.forEach(block => {
    const frontMatch = block.match(/\*\*Front:\*\*(.*?)(?=\*\*Back:|$)/s);
    const backMatch = block.match(/\*\*Back:\*\*(.*?)$/s);
    
    if (frontMatch && backMatch) {
      cards.push({
        front: frontMatch[1].trim(),
        back: backMatch[1].trim()
      });
    }
  });
  return cards;
}

function loadFlashcardsView() {
  // Topic selector listeners
  document.querySelectorAll(".fc-topic-btn").forEach(btn => {
    btn.onclick = () => {
      document.querySelectorAll(".fc-topic-btn").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      STATE.flashcardTopic = btn.getAttribute("data-fc-topic");
      STATE.flashcardIndex = 0;
      loadActiveTopicCards();
    };
  });

  // Control listeners
  document.getElementById("fc-prev-btn").onclick = () => navigateFlashcard(-1);
  document.getElementById("fc-next-btn").onclick = () => navigateFlashcard(1);
  
  const card = document.getElementById("active-flashcard");
  document.getElementById("fc-flip-btn").onclick = () => card.classList.toggle("flipped");
  card.onclick = () => card.classList.toggle("flipped");

  // Load initial topic cards
  loadActiveTopicCards();
}

function loadActiveTopicCards() {
  const md = PCEP_MODULES.flashcards[STATE.flashcardTopic];
  STATE.flashcards = parseFlashcardsFromMarkdown(md);
  renderActiveFlashcard();
}

function renderActiveFlashcard() {
  const card = document.getElementById("active-flashcard");
  card.classList.remove("flipped"); // Always reset to front face

  if (!STATE.flashcards || STATE.flashcards.length === 0) {
    document.getElementById("fc-front-text").textContent = "No hay tarjetas.";
    document.getElementById("fc-back-text").textContent = "No hay tarjetas.";
    return;
  }

  const fc = STATE.flashcards[STATE.flashcardIndex];
  document.getElementById("fc-front-text").innerHTML = parseMarkdown(fc.front);
  document.getElementById("fc-back-text").innerHTML = parseMarkdown(fc.back);
}

function navigateFlashcard(step) {
  if (STATE.flashcards.length === 0) return;
  STATE.flashcardIndex = (STATE.flashcardIndex + step + STATE.flashcards.length) % STATE.flashcards.length;
  renderActiveFlashcard();
}

// 5. SIMULATOR VIEW CONTROLLER
function initSimulator() {
  // Mode selector listeners
  document.querySelectorAll(".sim-mode-btn").forEach(btn => {
    btn.onclick = () => {
      document.querySelectorAll(".sim-mode-btn").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      STATE.simMode = btn.getAttribute("data-sim-mode");
    };
  });

  // Trigger exam start
  document.getElementById("start-exam-trigger").onclick = startExam;
  document.getElementById("exam-next-btn").onclick = nextQuestion;
  document.getElementById("exam-prev-btn").onclick = prevQuestion;
  document.getElementById("results-restart-btn").onclick = resetExamView;
}

function startExam() {
  // Reset exam state variables
  STATE.currentQuestionIndex = 0;
  STATE.userAnswers = {};
  STATE.timeRemaining = 900; // 15 mins
  STATE.timeElapsed = 0;
  clearInterval(STATE.timerInterval);

  // Load questions matching the selected difficulty mode
  if (STATE.simMode === "5") {
    // Mode 5: Random 10 PCEP Mock questions
    STATE.examQuestions = PCEP_QUESTIONS.sort(() => 0.5 - Math.random()).slice(0, 10);
  } else {
    // Filter questions by difficulty mapping: Mode 1 (easy), Mode 2 (medium), Mode 3 (hard)
    const diffMap = { "1": [2], "2": [3], "3": [4] };
    const allowedDiffs = diffMap[STATE.simMode] || [2, 3, 4];
    STATE.examQuestions = PCEP_QUESTIONS.filter(q => allowedDiffs.includes(q.difficulty));
  }

  if (STATE.examQuestions.length === 0) {
    alert("Error: No hay preguntas cargadas que coincidan con este nivel.");
    return;
  }

  // UI Transitions
  document.getElementById("sim-start-screen").classList.add("hidden");
  document.getElementById("sim-results-screen").classList.add("hidden");
  document.getElementById("sim-active-screen").classList.remove("hidden");

  // Render first question
  renderActiveQuestion();

  // Start Timer Loop
  STATE.timerInterval = setInterval(() => {
    STATE.timeRemaining--;
    STATE.timeElapsed++;
    
    // Format minutes and seconds
    const m = Math.floor(STATE.timeRemaining / 60);
    const s = STATE.timeRemaining % 60;
    document.getElementById("exam-timer-indicator").textContent = `Tiempo: ${m}:${s < 10 ? '0' : ''}${s}`;

    if (STATE.timeRemaining <= 0) {
      clearInterval(STATE.timerInterval);
      finishExam();
    }
  }, 1000);
}

function renderActiveQuestion() {
  const q = STATE.examQuestions[STATE.currentQuestionIndex];
  
  // Progress text
  document.getElementById("exam-progress-indicator").textContent = `Pregunta ${STATE.currentQuestionIndex + 1} de ${STATE.examQuestions.length}`;
  document.getElementById("exam-question-topic").textContent = `Módulo: ${q.module.toUpperCase()} | ${q.topic}`;
  document.getElementById("exam-question-content").textContent = q.question;

  // Render options list
  const container = document.getElementById("exam-options-container");
  container.innerHTML = "";

  q.options.forEach(opt => {
    const letter = opt.substring(0, 1); // Get "A", "B", "C", "D"
    const btn = document.createElement("button");
    btn.className = "exam-opt-btn" + (STATE.userAnswers[STATE.currentQuestionIndex] === letter ? " selected" : "");
    btn.textContent = opt;
    btn.onclick = () => {
      // Toggle select option
      document.querySelectorAll("#exam-options-container .exam-opt-btn").forEach(b => b.classList.remove("selected"));
      btn.classList.add("selected");
      STATE.userAnswers[STATE.currentQuestionIndex] = letter;
    };
    container.appendChild(btn);
  });

  // Toggle prev/next action button visibility
  if (STATE.currentQuestionIndex === 0) {
    document.getElementById("exam-prev-btn").classList.add("hidden");
  } else {
    document.getElementById("exam-prev-btn").classList.remove("hidden");
  }

  // Adjust next button text on final question
  if (STATE.currentQuestionIndex === STATE.examQuestions.length - 1) {
    document.getElementById("exam-next-btn").textContent = "Finalizar Examen 🏁";
  } else {
    document.getElementById("exam-next-btn").textContent = "Siguiente Pregunta ➡";
  }
}

function nextQuestion() {
  // Require option selected before proceeding
  if (!STATE.userAnswers[STATE.currentQuestionIndex]) {
    alert("Por favor selecciona una respuesta antes de continuar.");
    return;
  }

  if (STATE.currentQuestionIndex === STATE.examQuestions.length - 1) {
    clearInterval(STATE.timerInterval);
    finishExam();
  } else {
    STATE.currentQuestionIndex++;
    renderActiveQuestion();
  }
}

function prevQuestion() {
  if (STATE.currentQuestionIndex > 0) {
    STATE.currentQuestionIndex--;
    renderActiveQuestion();
  }
}

function finishExam() {
  // Compute final score
  let correctCount = 0;
  STATE.examQuestions.forEach((q, idx) => {
    if (STATE.userAnswers[idx] === q.correct) {
      correctCount++;
    }
  });

  const pct = (correctCount / STATE.examQuestions.length) * 100;
  const passed = pct >= 70.0;

  // Render Scores
  document.getElementById("results-score-value").textContent = `${correctCount}/${STATE.examQuestions.length}`;
  document.getElementById("results-percent-value").textContent = `${pct.toFixed(1)}%`;
  document.getElementById("results-time-value").textContent = STATE.timeElapsed;
  
  const statusText = document.getElementById("results-status-text");
  if (passed) {
    statusText.textContent = "APROBADO (PASSED) 🎉";
    statusText.style.color = "var(--color-green)";
  } else {
    statusText.textContent = "REPROBADO (FAILED) ❌";
    statusText.style.color = "var(--color-red)";
  }

  // --- ANALYTICS CHART GENERATION ---
  const chartBox = document.getElementById("analytics-chart-box");
  chartBox.innerHTML = "";

  const moduleStats = {};
  STATE.examQuestions.forEach((q, idx) => {
    const mod = q.module;
    if (!moduleStats[mod]) {
      moduleStats[mod] = { total: 0, correct: 0 };
    }
    moduleStats[mod].total++;
    if (STATE.userAnswers[idx] === q.correct) {
      moduleStats[mod].correct++;
    }
  });

  const needsImprovement = [];

  for (const [mod, stats] of Object.entries(moduleStats)) {
    const modPct = (stats.correct / stats.total) * 100;
    if (modPct < 70.0) {
      needsImprovement.append ? needsImprovement.push(mod) : needsImprovement.push(mod);
    }

    // Append bar node
    const barItem = document.createElement("div");
    barItem.className = "analytics-bar-item";
    barItem.innerHTML = `
      <div class="analytics-bar-header">
        <span class="analytics-bar-label">${mod.toUpperCase()}</span>
        <span class="analytics-bar-value">${modPct.toFixed(1)}% (${stats.correct}/${stats.total})</span>
      </div>
      <div class="analytics-bar-bg">
        <div class="analytics-bar-fill ${modPct >= 70.0 ? 'good' : 'bad'}" style="width: ${modPct}%;"></div>
      </div>
    `;
    chartBox.appendChild(barItem);
  }

  // Render Recommendations Box
  const recBox = document.getElementById("results-recommendation-box");
  const recList = document.getElementById("results-recommendations-list");
  recList.innerHTML = "";

  if (needsImprovement.length > 0) {
    recBox.classList.remove("hidden");
    needsImprovement.forEach(mod => {
      const li = document.createElement("li");
      li.textContent = `➔ Mapear y repasar Módulo: ${mod.toUpperCase()}`;
      recList.appendChild(li);
    });
  } else {
    recBox.classList.add("hidden");
  }

  // Switch screens
  document.getElementById("sim-active-screen").classList.add("hidden");
  document.getElementById("sim-results-screen").classList.remove("hidden");
}

function resetExamView() {
  document.getElementById("sim-results-screen").classList.add("hidden");
  document.getElementById("sim-start-screen").classList.remove("hidden");
}

// PWA Service Worker Registration
function registerServiceWorker() {
  if ("serviceWorker" in navigator) {
    window.addEventListener("load", () => {
      navigator.serviceWorker.register("sw.js").then(reg => {
        console.log("Service Worker registrado con éxito: ", reg.scope);
      }).catch(err => {
        console.warn("Fallo en el registro del Service Worker: ", err);
      });
    });
  }
}

// Initializer
window.addEventListener("DOMContentLoaded", () => {
  initRouter();
  initDashboard();
  initSimulator();
  registerServiceWorker();
});
