// ========== CONFIGURATION ==========
const CONFIG = {
    themes: {
        africa: { name: 'Level Up Africa', icon: '🌍', category: 9, desc: 'Innovation & Tech africaine' },
        naija: { name: 'Naija/Benin Trivia', icon: '🏛️', category: 22, desc: 'Culture Afrique de l'Ouest' },
        dev: { name: 'Dev Trivia', icon: '💻', category: 18, desc: 'Code & Tech' }
    },
    amounts: [5, 10, 15, 20],
    times: [10, 15, 20, 30],
    defaultLang: 'fr',
    defaultSound: true,
    defaultTheme: 'dark'
};

// ========== TRANSLATIONS ==========
const TRANSLATIONS = {
    fr: {
        homeTitle: '🚀 Level Up Africa',
        tagline: 'Teste tes connaissances et deviens un',
        subtitle: 'Quiz interactif sur l'innovation, la tech et la culture africaine',
        chooseMode: 'Choisis ton mode',
        officialThemes: 'Thèmes Officiels',
        officialDesc: '3 thèmes prédéfinis : Africa, Naija/Benin, Dev',
        recommended: 'Recommandé',
        customMode: 'Mode Personnalisé',
        customDesc: 'Choisis ton propre sujet et configure tout',
        newBadge: 'Nouveau',
        configureQuiz: 'Configure ton quiz',
        chooseTheme: 'Choisis ton thème',
        customSubject: 'Sujet personnalisé',
        subjectPlaceholder: 'Ex: histoire du Bénin, startups africaines...',
        numQuestions: 'Nombre de questions',
        timePerQuestion: 'Temps par question',
        seconds: 'secondes',
        startQuiz: '🚀 Lancer le Quiz',
        back: '← Retour',
        loading: 'Chargement des questions...',
        question: 'Question',
        score: 'Score',
        next: 'Suivant →',
        quizFinished: 'Quiz terminé !',
        replay: '🔄 Rejouer',
        home: '🏠 Accueil',
        correct: '✅ Correctes',
        wrong: '❌ Incorrectes',
        totalTime: '⏱️ Temps total',
        tip: '💡 Astuce : Plus tu réponds vite, plus tu accumules de points !',
        howToPlay: '📖 Comment jouer',
        step1: 'Choisis ton mode : Thèmes Officiels ou Personnalisé',
        step2: 'Configure ton quiz : nombre de questions, temps, langue',
        step3: 'Réponds aux questions avant la fin du chrono !',
        step4: 'Découvre ton score et deviens un "Future Elon Musk"',
        contact: '📞 Contact',
        supervisor: 'Encadrant',
        project: 'Projet',
        credits: 'ℹ️ Crédits',
        poweredBy: 'Questions locales — 100% offline',
        messages: {
            perfect: ['🏆 Future Elon Musk !', '🌟 Légendaire !', '🔥 Exceptionnel !'],
            good: ['🌟 Très bien joué !', '👏 Excellent !', '💪 Super !'],
            average: ['💪 Pas mal !', '👍 Bien joué !', '📈 Continue !'],
            bad: ['📚 Encore un effort !', '💡 Tu peux mieux faire !', '🎯 Réessaie !']
        }
    },
    en: {
        homeTitle: '🚀 Level Up Africa',
        tagline: 'Test your knowledge and become a',
        subtitle: 'Interactive quiz on African innovation, tech & culture',
        chooseMode: 'Choose your mode',
        officialThemes: 'Official Themes',
        officialDesc: '3 predefined themes: Africa, Naija/Benin, Dev',
        recommended: 'Recommended',
        customMode: 'Custom Mode',
        customDesc: 'Choose your own topic and configure everything',
        newBadge: 'New',
        configureQuiz: 'Configure your quiz',
        chooseTheme: 'Choose your theme',
        customSubject: 'Custom subject',
        subjectPlaceholder: 'Ex: history of Benin, African startups...',
        numQuestions: 'Number of questions',
        timePerQuestion: 'Time per question',
        seconds: 'seconds',
        startQuiz: '🚀 Start Quiz',
        back: '← Back',
        loading: 'Loading questions...',
        question: 'Question',
        score: 'Score',
        next: 'Next →',
        quizFinished: 'Quiz finished!',
        replay: '🔄 Replay',
        home: '🏠 Home',
        correct: '✅ Correct',
        wrong: '❌ Wrong',
        totalTime: '⏱️ Total time',
        tip: '💡 Tip: The faster you answer, the more points you get!',
        howToPlay: '📖 How to play',
        step1: 'Choose your mode: Official Themes or Custom',
        step2: 'Configure your quiz: number of questions, time, language',
        step3: 'Answer the questions before time runs out!',
        step4: 'Discover your score and become a "Future Elon Musk"',
        contact: '📞 Contact',
        supervisor: 'Supervisor',
        project: 'Project',
        credits: 'ℹ️ Credits',
        poweredBy: 'Local questions — 100% offline',
        messages: {
            perfect: ['🏆 Future Elon Musk!', '🌟 Legendary!', '🔥 Exceptional!'],
            good: ['🌟 Very well played!', '👏 Excellent!', '💪 Great!'],
            average: ['💪 Not bad!', '👍 Well played!', '📈 Keep going!'],
            bad: ['📚 Keep trying!', '💡 You can do better!', '🎯 Try again!']
        }
    },
    es: {
        homeTitle: '🚀 Level Up Africa',
        tagline: 'Pon a prueba tus conocimientos y conviértete en un',
        subtitle: 'Quiz interactivo sobre innovación, tecnología y cultura africana',
        chooseMode: 'Elige tu modo',
        officialThemes: 'Temas Oficiales',
        officialDesc: '3 temas predefinidos: Africa, Naija/Benin, Dev',
        recommended: 'Recomendado',
        customMode: 'Modo Personalizado',
        customDesc: 'Elige tu propio tema y configura todo',
        newBadge: 'Nuevo',
        configureQuiz: 'Configura tu quiz',
        chooseTheme: 'Elige tu tema',
        customSubject: 'Tema personalizado',
        subjectPlaceholder: 'Ej: historia de Benín, startups africanas...',
        numQuestions: 'Número de preguntas',
        timePerQuestion: 'Tiempo por pregunta',
        seconds: 'segundos',
        startQuiz: '🚀 Iniciar Quiz',
        back: '← Volver',
        loading: 'Cargando preguntas...',
        question: 'Pregunta',
        score: 'Puntuación',
        next: 'Siguiente →',
        quizFinished: '¡Quiz terminado!',
        replay: '🔄 Reintentar',
        home: '🏠 Inicio',
        correct: '✅ Correctas',
        wrong: '❌ Incorrectas',
        totalTime: '⏱️ Tiempo total',
        tip: '💡 Consejo: ¡Cuanto más rápido respondas, más puntos obtienes!',
        howToPlay: '📖 Cómo jugar',
        step1: 'Elige tu modo: Temas Oficiales o Personalizado',
        step2: 'Configura tu quiz: número de preguntas, tiempo, idioma',
        step3: '¡Responde las preguntas antes de que se acabe el tiempo!',
        step4: 'Descubre tu puntuación y conviértete en un "Future Elon Musk"',
        contact: '📞 Contacto',
        supervisor: 'Supervisor',
        project: 'Proyecto',
        credits: 'ℹ️ Créditos',
        poweredBy: 'Preguntas locales — 100% offline',
        messages: {
            perfect: ['🏆 ¡Future Elon Musk!', '🌟 ¡Legendario!', '🔥 ¡Excepcional!'],
            good: ['🌟 ¡Muy bien jugado!', '👏 ¡Excelente!', '💪 ¡Genial!'],
            average: ['💪 ¡No está mal!', '👍 ¡Bien jugado!', '📈 ¡Sigue así!'],
            bad: ['📚 ¡Sigue intentando!', '💡 ¡Puedes hacerlo mejor!', '🎯 ¡Inténtalo de nuevo!']
        }
    },
    de: {
        homeTitle: '🚀 Level Up Africa',
        tagline: 'Teste dein Wissen und werde ein',
        subtitle: 'Interaktives Quiz über afrikanische Innovation, Tech & Kultur',
        chooseMode: 'Wähle deinen Modus',
        officialThemes: 'Offizielle Themen',
        officialDesc: '3 vordefinierte Themen: Africa, Naija/Benin, Dev',
        recommended: 'Empfohlen',
        customMode: 'Benutzerdefinierter Modus',
        customDesc: 'Wähle dein eigenes Thema und konfiguriere alles',
        newBadge: 'Neu',
        configureQuiz: 'Konfiguriere dein Quiz',
        chooseTheme: 'Wähle dein Thema',
        customSubject: 'Benutzerdefiniertes Thema',
        subjectPlaceholder: 'Z.B.: Geschichte von Benin, afrikanische Startups...',
        numQuestions: 'Anzahl der Fragen',
        timePerQuestion: 'Zeit pro Frage',
        seconds: 'Sekunden',
        startQuiz: '🚀 Quiz starten',
        back: '← Zurück',
        loading: 'Fragen werden geladen...',
        question: 'Frage',
        score: 'Punkte',
        next: 'Weiter →',
        quizFinished: 'Quiz beendet!',
        replay: '🔄 Wiederholen',
        home: '🏠 Startseite',
        correct: '✅ Richtig',
        wrong: '❌ Falsch',
        totalTime: '⏱️ Gesamtzeit',
        tip: '💡 Tipp: Je schneller du antwortest, desto mehr Punkte bekommst du!',
        howToPlay: '📖 Spielanleitung',
        step1: 'Wähle deinen Modus: Offizielle Themen oder Benutzerdefiniert',
        step2: 'Konfiguriere dein Quiz: Anzahl der Fragen, Zeit, Sprache',
        step3: 'Beantworte die Fragen, bevor die Zeit abläuft!',
        step4: 'Entdecke deine Punktzahl und werde ein "Future Elon Musk"',
        contact: '📞 Kontakt',
        supervisor: 'Betreuer',
        project: 'Projekt',
        credits: 'ℹ️ Credits',
        poweredBy: 'Lokale Fragen — 100% offline',
        messages: {
            perfect: ['🏆 Future Elon Musk!', '🌟 Legendär!', '🔥 Außergewöhnlich!'],
            good: ['🌟 Sehr gut gespielt!', '👏 Ausgezeichnet!', '💪 Toll!'],
            average: ['💪 Nicht schlecht!', '👍 Gut gespielt!', '📈 Weiter so!'],
            bad: ['📚 Weiter versuchen!', '💡 Du kannst es besser!', '🎯 Versuch es nochmal!']
        }
    }
};

// ========== STATE ==========
let currentLang = localStorage.getItem('quizLang') || CONFIG.defaultLang;
let soundEnabled = localStorage.getItem('quizSound') !== 'false';
let themeMode = localStorage.getItem('quizTheme') || CONFIG.defaultTheme;

// ========== DRAWER ==========
function openDrawer() {
    document.getElementById('drawer').classList.add('active');
    document.getElementById('drawerOverlay').classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeDrawer() {
    document.getElementById('drawer').classList.remove('active');
    document.getElementById('drawerOverlay').classList.remove('active');
    document.body.style.overflow = '';
}

// ========== SETTINGS ==========
function setLang(lang) {
    currentLang = lang;
    localStorage.setItem('quizLang', lang);
    document.querySelectorAll('#langOptions .drawer-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.lang === lang);
    });
    translatePage();
}

function setSound(enabled) {
    soundEnabled = enabled;
    localStorage.setItem('quizSound', enabled);
    document.getElementById('soundOn').classList.toggle('active', enabled);
    document.getElementById('soundOff').classList.toggle('active', !enabled);
}

function setTheme(mode) {
    themeMode = mode;
    localStorage.setItem('quizTheme', mode);
    document.documentElement.setAttribute('data-theme', mode);
    document.getElementById('themeDark').classList.toggle('active', mode === 'dark');
    document.getElementById('themeLight').classList.toggle('active', mode === 'light');
}

// ========== TRANSLATION ==========
function getText(key) {
    const t = TRANSLATIONS[currentLang] || TRANSLATIONS.fr;
    return key.split('.').reduce((obj, k) => obj?.[k], t) || key;
}

function translatePage() {
    const t = TRANSLATIONS[currentLang] || TRANSLATIONS.fr;

    // Home page elements
    const title = document.querySelector('.main-title');
    if (title) title.textContent = t.homeTitle;

    const tagline = document.querySelector('.tagline');
    if (tagline) {
        tagline.innerHTML = `${t.tagline} <span class="highlight">"Future Elon Musk"</span> !`;
    }

    const subtitle = document.querySelector('.subtitle');
    if (subtitle) subtitle.textContent = t.subtitle;

    const sectionTitle = document.querySelector('.section-title');
    if (sectionTitle) sectionTitle.textContent = t.chooseMode;

    // Mode cards
    const modeCards = document.querySelectorAll('.mode-card');
    if (modeCards.length >= 2) {
        modeCards[0].querySelector('h3').textContent = t.officialThemes;
        modeCards[0].querySelector('p').textContent = t.officialDesc;
        modeCards[0].querySelector('.mode-badge').textContent = t.recommended;

        modeCards[1].querySelector('h3').textContent = t.customMode;
        modeCards[1].querySelector('p').textContent = t.customDesc;
        modeCards[1].querySelector('.mode-badge').textContent = t.newBadge;
    }

    // Help section in drawer
    const helpTitle = document.querySelector('.drawer-section:nth-of-type(4) h3');
    if (helpTitle) helpTitle.textContent = t.howToPlay;

    const helpOl = document.querySelector('.help-text ol');
    if (helpOl) {
        helpOl.innerHTML = `
            <li>${t.step1}</li>
            <li>${t.step2}</li>
            <li>${t.step3}</li>
            <li>${t.step4}</li>
        `;
    }

    const helpTip = document.querySelector('.help-tip');
    if (helpTip) helpTip.textContent = t.tip;

    // Contact
    const contactTitle = document.querySelector('.drawer-section:nth-of-type(5) h3');
    if (contactTitle) contactTitle.textContent = t.contact;

    const contactInfo = document.querySelector('.contact-info');
    if (contactInfo) {
        contactInfo.innerHTML = `
            <strong>${t.supervisor} :</strong> Duvalier (Drakenarl)<br>
            <strong>${t.project} :</strong> Level Up Africa — Vacances L1
        `;
    }

    // Credits
    const creditsTitle = document.querySelector('.drawer-section:nth-of-type(6) h3');
    if (creditsTitle) creditsTitle.textContent = t.credits;

    const creditsInfo = document.querySelector('.credits-info');
    if (creditsInfo) {
        creditsInfo.innerHTML = `
            © 2026 Level Up Africa<br>
            ${t.project}<br>
            ${t.poweredBy}
        `;
    }
}

// ========== MODE SELECTION ==========
function selectMode(mode) {
    localStorage.setItem('quizMode', mode);
    showConfigScreen(mode);
}

function showConfigScreen(mode) {
    const t = TRANSLATIONS[currentLang] || TRANSLATIONS.fr;
    const isClassic = mode === 'classic';

    const container = document.querySelector('.home-container');
    container.innerHTML = `
        <div class="config-screen">
            <h2 class="section-title">${t.configureQuiz}</h2>

            ${isClassic ? `
            <div class="config-card">
                <h3>📚 ${t.chooseTheme}</h3>
                <div class="config-options" id="themeOptions">
                    ${Object.entries(CONFIG.themes).map(([key, theme]) => `
                        <button class="config-btn" data-theme="${key}" onclick="selectTheme('${key}')">
                            ${theme.icon} ${theme.name}
                        </button>
                    `).join('')}
                </div>
            </div>
            ` : `
            <div class="config-card">
                <h3>✨ ${t.customSubject}</h3>
                <input type="text" class="config-input" id="customSubject" 
                    placeholder="${t.subjectPlaceholder}">
            </div>
            `}

            <div class="config-card">
                <h3>🔢 ${t.numQuestions}</h3>
                <div class="config-options" id="amountOptions">
                    ${CONFIG.amounts.map(n => `
                        <button class="config-btn" data-amount="${n}" onclick="selectAmount(${n})">${n}</button>
                    `).join('')}
                </div>
            </div>

            <div class="config-card">
                <h3>⏱️ ${t.timePerQuestion}</h3>
                <div class="config-options" id="timeOptions">
                    ${CONFIG.times.map(n => `
                        <button class="config-btn" data-time="${n}" onclick="selectTime(${n})">${n}s</button>
                    `).join('')}
                </div>
            </div>

            <div class="config-actions">
                <button class="btn-secondary" onclick="goBackHome()">${t.back}</button>
                <button class="btn-primary" onclick="startQuiz()">${t.startQuiz}</button>
            </div>
        </div>
    `;

    // Defaults
    selectAmount(10);
    selectTime(20);
    if (isClassic) selectTheme('africa');
}

let selectedTheme = null;
let selectedAmount = 10;
let selectedTime = 20;

function selectTheme(theme) {
    selectedTheme = theme;
    document.querySelectorAll('#themeOptions .config-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.theme === theme);
    });
}

function selectAmount(n) {
    selectedAmount = n;
    document.querySelectorAll('#amountOptions .config-btn').forEach(btn => {
        btn.classList.toggle('active', parseInt(btn.dataset.amount) === n);
    });
}

function selectTime(n) {
    selectedTime = n;
    document.querySelectorAll('#timeOptions .config-btn').forEach(btn => {
        btn.classList.toggle('active', parseInt(btn.dataset.time) === n);
    });
}

function startQuiz() {
    const mode = localStorage.getItem('quizMode');

    if (mode === 'custom') {
        const subject = document.getElementById('customSubject').value.trim();
        if (!subject) {
            alert('Veuillez entrer un sujet !');
            return;
        }
        localStorage.setItem('customSubject', subject);
    } else {
        if (!selectedTheme) {
            alert('Veuillez choisir un thème !');
            return;
        }
        localStorage.setItem('selectedTheme', selectedTheme);
    }

    localStorage.setItem('quizAmount', selectedAmount);
    localStorage.setItem('quizTime', selectedTime);
    localStorage.setItem('quizLang', currentLang);

    window.location.href = 'quiz.html';
}

function goBackHome() {
    location.reload();
}

function goHome() {
    window.location.href = 'index.html';
}

// ========== INIT ==========
document.addEventListener('DOMContentLoaded', () => {
    // Apply saved theme
    setTheme(themeMode);

    // Apply saved sound
    setSound(soundEnabled);

    // Apply saved lang
    setLang(currentLang);

    // Translate page
    translatePage();

    // Close drawer on Escape
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') closeDrawer();
    });
});
