const BACKEND_URL = 'https://ai-analyticfootball.onrender.com';

const teamsData = [
    { id: 'arsenal', name: 'Arsenal', logo: 'assets/logos/arsenal.png', manager: 'Микель Артета', stadium: 'Эмирейтс Стэдиум' },
    { id: 'aston_villa', name: 'Aston Villa', logo: 'assets/logos/astonvilla.png', manager: 'Унаи Эмери', stadium: 'Вилла Парк' },
    { id: 'bournemouth', name: 'Bournemouth', logo: 'assets/logos/bournemouth.png', manager: 'Андони Ираола', stadium: 'Виталити Стэдиум' },
    { id: 'brentford', name: 'Brentford', logo: 'assets/logos/brentford.png', manager: 'Томас Франк', stadium: 'Джитек Комьюнити Стэдиум' },
    { id: 'brighton', name: 'Brighton', logo: 'assets/logos/brighton.png', manager: 'Роберто Де Дзерби', stadium: 'Амекс Стэдиум' },
    { id: 'chelsea', name: 'Chelsea', logo: 'assets/logos/chelsea.png', manager: 'Энцо Мареска', stadium: 'Стэмфорд Бридж' },
    { id: 'crystal_palace', name: 'Crystal Palace', logo: 'assets/logos/palace.png', manager: 'Оливер Гласнер', stadium: 'Селхёрст Парк' },
    { id: 'everton', name: 'Everton', logo: 'assets/logos/everton.png', manager: 'Шон Дайч', stadium: 'Гудисон Парк' },
    { id: 'liverpool', name: 'Liverpool', logo: 'assets/logos/liverpool.png', manager: 'Арне Слот', stadium: 'Энфилд' },
    { id: 'mancity', name: 'Man City', logo: 'assets/logos/mancity.png', manager: 'Хосеп Гвардиола', stadium: 'Этихад Стэдиум' },
    { id: 'manutd', name: 'Man Utd', logo: 'assets/logos/manutd.png', manager: 'Эрик тен Хаг', stadium: 'Олд Траффорд' },
    { id: 'newcastle', name: 'Newcastle', logo: 'assets/logos/newcastle.png', manager: 'Эдди Хау', stadium: 'Сент-Джеймс Парк' },
    { id: 'tottenham', name: 'Tottenham', logo: 'assets/logos/spurs.png', manager: 'Анже Постекоглу', stadium: 'Тоттенхэм Хотспур Стэдиум' },
    { id: 'westham', name: 'West Ham', logo: 'assets/logos/westham.png', manager: 'Хулен Лопетеги', stadium: 'Лондон Стэдиум' },
    { id: 'forest', name: 'Nottm Forest', logo: 'assets/logos/forest.png', manager: 'Нуну Эшпириту Санту', stadium: 'Сити Граунд' },
    { id: 'fulham', name: 'Fulham', logo: 'assets/logos/fulham.png', manager: 'Марку Силва', stadium: 'Крэйвен Коттедж' },
    { id: 'leeds', name: 'Leeds United', logo: 'assets/logos/leeds.png', manager: 'Даниэль Фарке', stadium: 'Элланд Роуд' },
    { id: 'sunderland', name: 'Sunderland', logo: 'assets/logos/sunderland.png', manager: 'Режис Ле Бри', stadium: 'Стэдиум оф Лайт' },
    { id: 'wolves', name: 'Wolves', logo: 'assets/logos/wolves.png', manager: 'Гэри О\'Нил', stadium: 'Молинью' },
    { id: 'burnley', name: 'Burnley', logo: 'assets/logos/burnley.png', manager: 'Скотт Паркер', stadium: 'Тёрф Мур' }
];

// ===== Team themes for Overview header card (gradient + svg watermark) =====
const TEAM_THEMES = {
  arsenal:        { a: '#EF0107', b: '#063672' },
  aston_villa:    { a: '#95BFE5', b: '#670E36' },
  bournemouth:    { a: '#DA291C', b: '#111111' },
  brentford:      { a: '#E30613', b: '#111111' },
  brighton:       { a: '#0057B8', b: '#FFCD00' },
  chelsea:        { a: '#034694', b: '#001C58' },
  crystal_palace: { a: '#1B458F', b: '#C4122E' },
  everton:        { a: '#003399', b: '#111827' },
  liverpool:      { a: '#C8102E', b: '#00B2A9' },
  mancity:        { a: '#6CABDD', b: '#1C2C5B' },
  manutd:         { a: '#DA291C', b: '#111111' },
  newcastle:      { a: '#111111', b: '#9CA3AF' },
  tottenham:      { a: '#132257', b: '#0B1026' },
  westham:        { a: '#7A263A', b: '#1BB1E7' },
  forest:         { a: '#DD0000', b: '#111111' },
  fulham:         { a: '#111111', b: '#9CA3AF' },
  leeds:          { a: '#1D428A', b: '#FFCD00' },
  sunderland:     { a: '#EB172B', b: '#111111' },
  wolves:         { a: '#FDB913', b: '#111111' },
  burnley:        { a: '#6C1D45', b: '#99D6EA' }
};

function headerThemeStyle(team){
  const t = TEAM_THEMES[team.id] || { a: '#444', b: '#111' };
  const crestUrl = team.logo; 
  const crestPart = crestUrl ? `--team-crest:url('${crestUrl}');` : `--team-crest:none;`;

  return `--team-a:${t.a}; --team-b:${t.b}; ${crestPart}`;
}

const matchesDb = [
    { opponentId: 'mancity',    kickoff: '2026-01-04T22:00:00', odds: 2.10, home: true  },
    { opponentId: 'chelsea',    kickoff: '2026-01-05T18:30:00', odds: 1.95, home: false },
    { opponentId: 'liverpool',  kickoff: '2026-01-12T20:00:00', odds: 2.50, home: true  },
    { opponentId: 'tottenham',  kickoff: '2026-01-19T16:00:00', odds: 1.80, home: false },
    { opponentId: 'aston_villa',kickoff: '2026-01-25T15:00:00', odds: 2.05, home: true  },
    { opponentId: 'newcastle',  kickoff: '2026-02-02T17:00:00', odds: 2.15, home: false },
    { opponentId: 'manutd',     kickoff: '2026-02-09T20:00:00', odds: 1.90, home: true  },
    { opponentId: 'arsenal',    kickoff: '2026-02-16T16:00:00', odds: 2.40, home: false }
];

const RU_MONTHS = ['янв','фев','мар','апр','май','июн','июл','авг','сен','окт','ноя','дек'];

function pad2(n) {
    return String(n).padStart(2, '0');
}

function parseKickoff(isoLike) {
    const d = new Date(isoLike);
    return Number.isNaN(d.getTime()) ? null : d;
}

function formatKickoffParts(kickoff) {
    const d = parseKickoff(kickoff);
    if (!d) return { date: '', time: '' };

    return {
        date: `${pad2(d.getDate())} ${RU_MONTHS[d.getMonth()]} ${d.getFullYear()}`,
        time: `${pad2(d.getHours())}:${pad2(d.getMinutes())}`
    };
}

function getNextMatch() {
    const now = new Date();

    const sorted = matchesDb
        .map(m => ({ m, d: parseKickoff(m.kickoff) }))
        .filter(x => x.d)
        .sort((a, b) => a.d - b.d);

    const next = sorted.find(x => x.d > now) || sorted[0];
    return next ? next.m : matchesDb[0];
}

const squadsDb = {
    'arsenal': [
        { name: 'David Raya', num: 22, pos: 'GK', rating: 84 },
        { name: 'W. Saliba', num: 2, pos: 'DEF', rating: 89 },
        { name: 'Gabriel', num: 6, pos: 'DEF', rating: 87 },
        { name: 'Ben White', num: 4, pos: 'DEF', rating: 85 },
        { name: 'Declan Rice', num: 41, pos: 'MID', rating: 88 },
        { name: 'M. Odegaard', num: 8, pos: 'MID', rating: 90 },
        { name: 'Bukayo Saka', num: 7, pos: 'FWD', rating: 91 },
        { name: 'K. Havertz', num: 29, pos: 'FWD', rating: 83 },
        { name: 'Martinelli', num: 11, pos: 'FWD', rating: 84 },
        { name: 'T. Partey', num: 5, pos: 'MID', rating: 82 },
        { name: 'Zinchenko', num: 17, pos: 'DEF', rating: 81 }
    ],
    'mancity': [
        { name: 'Ederson', num: 31, pos: 'GK', rating: 88 },
        { name: 'Ruben Dias', num: 3, pos: 'DEF', rating: 89 },
        { name: 'K. De Bruyne', num: 17, pos: 'MID', rating: 91 },
        { name: 'Rodri', num: 16, pos: 'MID', rating: 92 },
        { name: 'E. Haaland', num: 9, pos: 'FWD', rating: 93 },
        { name: 'Phil Foden', num: 47, pos: 'FWD', rating: 88 },
        { name: 'B. Silva', num: 20, pos: 'MID', rating: 87 },
        { name: 'K. Walker', num: 2, pos: 'DEF', rating: 84 }
    ],
    'liverpool': [
        { name: 'Alisson', num: 1, pos: 'GK', rating: 89 },
        { name: 'V. van Dijk', num: 4, pos: 'DEF', rating: 90 },
        { name: 'Trent A-A', num: 66, pos: 'DEF', rating: 87 },
        { name: 'M. Salah', num: 11, pos: 'FWD', rating: 90 },
        { name: 'D. Szoboszlai', num: 8, pos: 'MID', rating: 84 },
        { name: 'A. Mac Allister', num: 10, pos: 'MID', rating: 85 },
        { name: 'L. Diaz', num: 7, pos: 'FWD', rating: 85 },
        { name: 'C. Gakpo', num: 18, pos: 'FWD', rating: 83 }
    ],
    'chelsea': [
        { name: 'R. Sanchez', num: 1, pos: 'GK', rating: 82 },
        { name: 'W. Fofana', num: 29, pos: 'DEF', rating: 83 },
        { name: 'C. Palmer', num: 20, pos: 'MID', rating: 87 },
        { name: 'E. Fernandez', num: 8, pos: 'MID', rating: 84 },
        { name: 'N. Jackson', num: 15, pos: 'FWD', rating: 80 },
        { name: 'P. Neto', num: 19, pos: 'FWD', rating: 82 },
        { name: 'M. Caicedo', num: 25, pos: 'MID', rating: 83 },
        { name: 'L. Colwill', num: 6, pos: 'DEF', rating: 81 }
    ]
};

const teamLeadersMock = [
    { name: 'Trossard, Leandro', pos: 'MID', val: 5, max: 26 },
    { name: 'Gyokeres, Viktor', pos: 'FWD', val: 5, max: 26 },
    { name: 'Saka, Bukayo', pos: 'FWD', val: 4, max: 26 },
    { name: 'Merino, Mikel', pos: 'MID', val: 3, max: 26 },
    { name: 'Rice, Declan', pos: 'MID', val: 2, max: 26 }
];

const statsDb = {
    'goals': [
        { name: 'E. Haaland', team: 'mancity', val: 18 },
        { name: 'M. Salah', team: 'liverpool', val: 14 },
        { name: 'C. Palmer', team: 'chelsea', val: 12 },
        { name: 'O. Watkins', team: 'aston_villa', val: 11 },
        { name: 'Isak', team: 'newcastle', val: 10 },
        { name: 'Son H-M', team: 'tottenham', val: 9 },
        { name: 'B. Saka', team: 'arsenal', val: 8 },
        { name: 'Solanke', team: 'tottenham', val: 8 }
    ],
    'assists': [
        { name: 'B. Saka', team: 'arsenal', val: 10 },
        { name: 'P. Neto', team: 'chelsea', val: 9 },
        { name: 'M. Salah', team: 'liverpool', val: 8 },
        { name: 'C. Palmer', team: 'chelsea', val: 7 },
        { name: 'De Bruyne', team: 'mancity', val: 7 },
        { name: 'Maddison', team: 'tottenham', val: 6 },
        { name: 'Odegaard', team: 'arsenal', val: 6 }
    ],
    'cards': [
        { name: 'N. Jackson', team: 'chelsea', val: 8 },
        { name: 'Guimaraes', team: 'newcastle', val: 7 },
        { name: 'Rodri', team: 'mancity', val: 6 },
        { name: 'C. Romero', team: 'tottenham', val: 6 },
        { name: 'Lerma', team: 'crystal_palace', val: 5 },
        { name: 'Kai Havertz', team: 'arsenal', val: 5 }
    ]
};

// Глобальные переменные
let userTeam = null;
let currentSquadData = [];
let currentStatsType = 'goals';

// =========================================
// 2. ГЛОБАЛЬНАЯ НАВИГАЦИЯ
// =========================================

window.openPage = function(pageName) {
    // Скрываем все страницы
    ['matches', 'table', 'players', 'stats'].forEach(p => {
        const el = document.getElementById('screen-' + p);
        if(el) el.classList.add('hidden');
    });

    if (pageName === 'overview') {
        // Показываем обзор
        document.getElementById('screen-dashboard').classList.remove('hidden');
        
        // Обновляем активную вкладку
        document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
        const overviewBtn = document.querySelector(`button[onclick="openPage('overview')"]`);
        if(overviewBtn) overviewBtn.classList.add('active');
    } else {
        // Скрываем дашборд, показываем нужную страницу
        document.getElementById('screen-dashboard').classList.add('hidden');
        const target = document.getElementById('screen-' + pageName);
        if (target) target.classList.remove('hidden');
        
        // Обновляем активную вкладку
        document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
        const targetBtn = document.querySelector(`button[onclick="openPage('${pageName}')"]`);
        if(targetBtn) targetBtn.classList.add('active');
    }
    
    // Скроллим наверх
    window.scrollTo(0, 0);

    // Рендерим контент для специфичных страниц
    if(pageName === 'players') renderSquadList();
    if(pageName === 'stats') renderStats(currentStatsType);
};

window.backToDashboard = function() {
    openPage('overview');
};

window.backToTeamSelect = function() {
    // Скрываем дашборд
    document.getElementById('screen-dashboard').classList.add('hidden');
    
    // Показываем выбор команды
    document.getElementById('screen-team-select').classList.remove('hidden');
    
    // Сбрасываем выбранную команду
    userTeam = null;
    currentSquadData = [];
};

window.toggleMatchDetails = function(id) {
    const el = document.getElementById(id);
    if (el) el.classList.toggle('open');
};

// =========================================
// 3. ИНИЦИАЛИЗАЦИЯ И ОБРАБОТЧИКИ СОБЫТИЙ
// =========================================

document.addEventListener('DOMContentLoaded', () => {
    // Проверяем согласие пользователя
    const consent = localStorage.getItem('epl_app_consent');
    const disclaimerScreen = document.getElementById('screen-disclaimer');
    const leagueScreen = document.getElementById('screen-league');

    if (consent === 'true') {
        // Пользователь уже дал согласие
        if(disclaimerScreen) {
            disclaimerScreen.classList.remove('active');
            disclaimerScreen.classList.add('hidden');
        }
        if(leagueScreen) {
            leagueScreen.classList.remove('hidden');
            leagueScreen.classList.add('active');
        }
    }

    // Обработчик чекбокса согласия
    const checkbox = document.getElementById('consent-checkbox');
    const signBtn = document.getElementById('btn-digital-sign');
    
    if (checkbox && signBtn) {
        const updateBtnState = () => {
            if(checkbox.checked) {
                signBtn.classList.remove('disabled');
                signBtn.disabled = false;
            } else {
                signBtn.classList.add('disabled');
                signBtn.disabled = true;
            }
        };
        
        checkbox.addEventListener('change', updateBtnState);
        updateBtnState();
        
        // Обработчик кнопки входа
        signBtn.addEventListener('click', () => {
            if (!checkbox.checked) return;
            
            // Сохраняем согласие
            localStorage.setItem('epl_app_consent', 'true');
            
            // Переходим к выбору лиги
            disclaimerScreen.classList.remove('active');
            disclaimerScreen.classList.add('hidden');
            leagueScreen.classList.remove('hidden');
            leagueScreen.classList.add('active');
        });
    }
    document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeEngLeagues();
});

    // Обработчик выбора лиги
 // Выбор лиги: раскрывающийся список английских лиг
const btnToggleEng = document.getElementById('btn-toggle-eng-leagues');
const engList = document.getElementById('eng-leagues-list');

const closeEngLeagues = () => {
    if (engList) engList.classList.add('collapsed');
    if (btnToggleEng) btnToggleEng.setAttribute('aria-expanded', 'false');
    document.body.classList.remove('eng-leagues-open');
};

const openEngLeagues = () => {
    if (engList) engList.classList.remove('collapsed');
    if (btnToggleEng) btnToggleEng.setAttribute('aria-expanded', 'true');
    document.body.classList.add('eng-leagues-open');
};

const toggleEngLeagues = () => {
    if (!engList) return;
    const isCollapsed = engList.classList.contains('collapsed');
    if (isCollapsed) openEngLeagues();
    else closeEngLeagues();
};

if (btnToggleEng) {
    btnToggleEng.addEventListener('click', toggleEngLeagues);
    btnToggleEng.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            toggleEngLeagues();
        }
    });
}
// ===== Selected league (persist) =====
const STORAGE_KEY_LEAGUE = 'selectedLeagueId';

const leagueMeta = {
    epl: {
        label: 'Премьер-лига',
        line: 'Сезон 2025/26'
    }
    // позже добавим champ/one/two
};

const selectedLeagueLine = document.getElementById('eng-selected-league-line');

const setSelectedLeague = (leagueId) => {
    localStorage.setItem(STORAGE_KEY_LEAGUE, leagueId);

    // обновляем строку в главной кнопке
    if (selectedLeagueLine) {
        const meta = leagueMeta[leagueId];
        selectedLeagueLine.textContent = meta ? meta.line : 'Нажмите, чтобы выбрать лигу';
    }

    // подсветка выбранной опции в списке (пока только EPL, но масштабируется)
    document.querySelectorAll('#eng-leagues-list .league-option').forEach(el => {
        const id = el.getAttribute('data-league-id');
        if (!id) return;
        el.classList.toggle('selected', id === leagueId);
    });
};

const restoreSelectedLeague = () => {
    const saved = localStorage.getItem(STORAGE_KEY_LEAGUE) || 'epl';
    setSelectedLeague(saved);
};

restoreSelectedLeague();

// Активная лига: Premier League (ведёт дальше)
const btnSelectEpl = document.getElementById('btn-select-epl');
if (btnSelectEpl) {
    const goToEpl = () => {
        setSelectedLeague('epl');
        closeEngLeagues();
        document.getElementById('screen-league').classList.remove('active');
        document.getElementById('screen-league').classList.add('hidden');
        document.getElementById('screen-team-select').classList.remove('hidden');
        renderTeams();
    };

    btnSelectEpl.addEventListener('click', goToEpl);
    btnSelectEpl.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            goToEpl();
        }
    });
}

// Закрывать список при клике вне блока
document.addEventListener('click', (e) => {
    if (!e.target.closest('.league-dropdown-container')) {
        closeEngLeagues();
    }
});

    // Обработчик возврата к выбору лиги
    const btnBackToLeague = document.getElementById('back-to-league');
    if (btnBackToLeague) {
        btnBackToLeague.addEventListener('click', () => {
            document.getElementById('screen-team-select').classList.add('hidden');
            document.getElementById('screen-league').classList.remove('hidden');
            document.getElementById('screen-league').classList.add('active');
        });
    }

    // Обработчик закрытия модального окна AI
    const closeModalBtn = document.getElementById('close-modal');
    const aiModal = document.getElementById('ai-modal');
    
    if (closeModalBtn) {
        closeModalBtn.addEventListener('click', () => {
            if(aiModal) aiModal.classList.add('hidden');
        });
    }
    
    if (aiModal) {
        aiModal.addEventListener('click', (e) => {
            if (e.target === aiModal) {
                aiModal.classList.add('hidden');
            }
        });
    }

    // Закрытие выпадающего списка статистики при клике вне его
    document.addEventListener('click', (e) => {
        if (!e.target.closest('.stats-dropdown-container')) {
            const list = document.getElementById('stats-options-list');
            if(list) list.classList.add('hidden');
        }
    });
});

// =========================================
// 4. ФУНКЦИИ РЕНДЕРИНГА
// =========================================

// Рендеринг сетки команд
function renderTeams() {
    const grid = document.getElementById('teams-grid');
    if (!grid) return;
    
    grid.innerHTML = '';
    
    teamsData.forEach(team => {
        const card = document.createElement('div');
        card.className = 'team-card';
        card.innerHTML = `
            <img src="${team.logo}" class="team-logo-small" onerror="this.src='assets/pl_logo.png'" alt="${team.name}">
            <div class="team-name-small">${team.name}</div>
        `;
        card.onclick = () => selectTeam(team);
        grid.appendChild(card);
    });
}

// Выбор команды
function selectTeam(team) {
    userTeam = team;
    
    // Переходим к дашборду
    document.getElementById('screen-team-select').classList.add('hidden');
    document.getElementById('screen-dashboard').classList.remove('hidden');
    
    // Обновляем заголовок
    document.getElementById('my-club-name').innerText = team.name;
    const logoEl = document.getElementById('my-club-logo');
    logoEl.src = team.logo;
    logoEl.onerror = () => { logoEl.src = 'assets/pl_logo.png'; };
    
    // Рендерим все экраны
    renderNewOverview(team);
    renderFullMatchesList();
    renderFullTable(team);
    renderSquadList();
}

// =========================================
// ОБЗОР + БЛИЖАЙШИЙ МАТЧ
// =========================================

function renderNewOverview(team) {
    const container = document.getElementById('screen-overview');
    if (!container) return;

    // Генерация случайных данных для демонстрации
    const goalsScored = Math.floor(Math.random() * 20) + 30; 
    const goalsAllowed = Math.floor(Math.random() * 15) + 10; 
    const conversion = Math.floor(Math.random() * 10) + 15; 
    const managerName = team.manager || 'Главный тренер';
    const stadiumName = team.stadium || 'Домашний стадион';

    // Находим ближайший матч
    const nextMatch = getNextMatch();
    const opponent = teamsData.find(t => t.id === nextMatch.opponentId) || teamsData[0];
    const matchTime = formatKickoffParts(nextMatch.kickoff).time || '';
    
    container.innerHTML = `
        <!-- БЛОК: БЛИЖАЙШИЙ МАТЧ -->
        <div class="hero-match-block" style="margin-bottom: 20px;">
            <div class="widget-header" style="justify-content:center; color:#888;">Следующий матч</div>
            <div class="hero-content">
                <div class="hero-team">
                    <img src="${team.logo}" class="hero-logo" onerror="this.src='assets/pl_logo.png'" alt="${team.name}">
                    <span>${team.name}</span>
                </div>
                <div class="hero-time">${matchTime}</div>
                <div class="hero-team">
                    <img src="${opponent.logo}" class="hero-logo" onerror="this.src='assets/pl_logo.png'" alt="${opponent.name}">
                    <span>${opponent.name}</span>
                </div>
            </div>
            <button class="btn-preview" onclick="openPage('matches')">Календарь</button>
        </div>

<!-- ЗАГОЛОВОК КОМАНДЫ -->
<div class="overview-header-card" style="${headerThemeStyle(team)}">
    <div class="oh-top">
        <img src="${team.logo}" class="oh-logo" onerror="this.src='assets/pl_logo.png'" alt="${team.name}">
        <div class="oh-info">
            <h1 class="oh-title">${team.name}</h1>
            <div class="oh-subtitle">
                <span style="color:var(--gold-color);">${managerName}</span>
                <br>ГЛАВНЫЙ ТРЕНЕР
            </div>
        </div>
    </div>
    <div class="oh-stadium">
        <i class="fa-solid fa-location-dot"></i> ${stadiumName}
    </div>
</div>

        <!-- СЕКЦИЯ СТАТИСТИКИ -->
        <div class="overview-stats-grid">
            <div class="os-card">
                <div class="os-row">
                    <div class="os-form-circle">
                        <div class="os-circle-text">100%</div>
                        <div class="os-circle-label">ФОРМА</div>
                    </div>
                    <div class="os-bars-container">
                        <div class="os-bar-group">
                            <div class="os-bar-label">Забито <span>${(goalsScored/19).toFixed(1)}</span></div>
                            <div class="progress-track"><div class="progress-fill fill-gold" style="width: ${Math.min(goalsScored*1.5, 100)}%"></div></div>
                        </div>
                        <div class="os-bar-group">
                            <div class="os-bar-label">Пропущено <span>${(goalsAllowed/19).toFixed(1)}</span></div>
                            <div class="progress-track"><div class="progress-fill fill-grey" style="width: ${Math.min(goalsAllowed*1.5, 100)}%"></div></div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="os-card" style="display:flex; justify-content:space-between; align-items:center;">
                <div class="os-conversion">
                    <i class="fa-solid fa-futbol" style="color:var(--gold-color); font-size:24px;"></i>
                    <div class="osc-val">${conversion}%</div>
                    <div class="osc-lbl">Реализация</div>
                </div>
                <div class="os-squad-avgs">
                    <div class="osa-row"><span>Возраст</span> <b>24 года</b></div>
                    <div class="osa-row"><span>Рост</span> <b>182 см</b></div>
                    <div class="osa-row"><span>Вес</span> <b>75 кг</b></div>
                </div>
            </div>
        </div>

    <!-- ПАНЕЛЬ ЛИДЕРОВ С ВКЛАДКАМИ -->
<div class="overview-leaders-panel">
 <div class="ol-tabs">
  <div class="ol-tab active" onclick="switchOverviewTab('goals')">Голы</div>
  <div class="ol-tab" onclick="switchOverviewTab('assists')">Передачи</div>
  <div class="ol-tab" onclick="switchOverviewTab('cards')">Карточки</div>
  <div class="ol-tab" onclick="switchOverviewTab('injuries')">Травмы</div>
</div>
  <div id="ol-list-container"></div>
</div>
    `;

    // Рендерим список голов по умолчанию
    renderOverviewList('goals');
}

// Переключение вкладок в панели лидеров
window.switchOverviewTab = function(type) {
    // снимаем подсветку со всех вкладок
    document.querySelectorAll('.ol-tab').forEach(t => t.classList.remove('active'));

    // выбираем индекс вкладки по ключу
    const tabIndexByType = { goals: 0, assists: 1, cards: 2, injuries: 3 };
    const idx = tabIndexByType[type];

    // подсвечиваем нужную вкладку
    const tabs = document.querySelectorAll('.ol-tab');
    if (typeof idx === 'number' && tabs[idx]) {
        tabs[idx].classList.add('active');
    }

    // рендерим список по ключу
    renderOverviewList(type);
};

function renderOverviewList(type) {
    const container = document.getElementById('ol-list-container');
    if (!container) return;

    container.innerHTML = '';

    // 1) Травмы — отдельный формат
    if (type === 'injuries') {
        const data = [
            { name: 'Timber, Jurrien', pos: 'DEF', status: 'Травма' },
            { name: 'Tomiyasu, T.', pos: 'DEF', status: 'Под вопросом' },
            { name: 'Tierney, Kieran', pos: 'DEF', status: 'Травма' }
        ];

        data.forEach((p, i) => {
            container.innerHTML += `
                <div class="ol-row">
                    <div class="ol-rank">${i + 1}</div>

                    <div class="ol-info">
                        <span class="ol-name">${p.name}</span>
                        <span class="ol-pos">${userTeam ? userTeam.name.toUpperCase() : 'КОМАНДА'} | ${p.pos}</span>
                    </div>

                    <div class="ol-val ol-status">${p.status}</div>
                </div>
            `;
        });

        return;
    }

    // 2) Goals/Assists/Cards (единая ветка)
    let baseData = JSON.parse(JSON.stringify(teamLeadersMock));

    if (type === 'assists') baseData.forEach(x => x.val = Math.max(1, x.val - 2));
    if (type === 'cards') baseData.forEach(x => x.val = Math.floor(Math.random() * 5) + 1);
    // если type === 'goals' — оставляем как есть

    baseData.sort((a, b) => b.val - a.val);

    baseData.forEach((p, i) => {
        const max = p.max || 20;
        const percent = (p.val / max) * 100;

        container.innerHTML += `
            <div class="ol-row">
                <div class="ol-rank">${i + 1}</div>

                <div class="ol-info">
                    <div class="ol-top">
                        <div class="ol-left">
                            <span class="ol-name">${p.name}</span>
                            <span class="ol-pos">${p.pos}</span>
                        </div>
                        <div class="ol-val">${p.val}</div>
                    </div>

                    <div class="progress-track">
                        <div class="progress-fill fill-gold" style="width: ${Math.min(percent, 100)}%"></div>
                    </div>
                </div>
            </div>
        `;
    });
}

// =========================================
// ПОЛНЫЙ СПИСОК МАТЧЕЙ
// =========================================

function renderFullMatchesList() {
    const container = document.getElementById('full-matches-list');
    if (!container || !userTeam) return;
    
    container.innerHTML = '';
    
    matchesDb.forEach((match, index) => {
        let opponent = teamsData.find(t => t.id === match.opponentId) || teamsData[0];
        let homeTeam = match.home ? userTeam : opponent;
        let awayTeam = match.home ? opponent : userTeam;
        const kp = formatKickoffParts(match.kickoff);
        let timeDisplay = kp.time;
        let dateDisplay = kp.date;
        const detailsId = `details-${index}`;
        
        let stadium = match.home ? (userTeam.stadium || 'Домашний стадион') : (opponent.stadium || 'Выездной стадион');
        let referee = ['Майкл Оливер', 'Энтони Тейлор', 'Пол Тирни'][index % 3];
        let weather = ['+12°C, Облачно', '+8°C, Дождь', '+15°C, Ясно'][index % 3];

        container.innerHTML += `
        <div class="match-card-pro">
            <div class="mcp-body">
                <div class="mcp-team">
                    <img src="${homeTeam.logo}" class="mcp-logo" onerror="this.src='assets/pl_logo.png'" alt="${homeTeam.name}">
                    <span class="mcp-name">${homeTeam.name}</span>
                </div>
                <div class="mcp-center">
                    <div class="mcp-time">${timeDisplay}</div>
                    <div style="font-size:10px; color:#666; margin-bottom: 5px;">${dateDisplay}</div>
                    <div class="mcp-odds-box">
                        <div class="mcp-odd-row">КЭФ <span class="mcp-odd-val">${match.odds}</span></div>
                    </div>
                </div>
                <div class="mcp-team">
                    <img src="${awayTeam.logo}" class="mcp-logo" onerror="this.src='assets/pl_logo.png'" alt="${awayTeam.name}">
                    <span class="mcp-name">${awayTeam.name}</span>
                </div>
            </div>
            <div class="mcp-btn-container">
                <button class="mcp-btn" onclick="openAiModal('${opponent.id}', '${opponent.name}')">Прогноз AI</button>
            </div>
            <div class="mcp-footer" onclick="toggleMatchDetails('${detailsId}')">Информация о матче <i class="fa-solid fa-plus" style="font-size:10px;"></i></div>
            <div id="${detailsId}" class="match-details-dropdown">
                <div class="md-row"><span>Стадион</span><span class="md-val">${stadium}</span></div>
                <div class="md-row"><span>Судья</span><span class="md-val">${referee}</span></div>
                <div class="md-row"><span>Погода</span><span class="md-val">${weather}</span></div>
            </div>
        </div>`;
    });
}

async function renderFullTable(myTeam) {
    const tbody = document.getElementById('full-league-table');
    if (!tbody) return;

    try {
        const response = await fetch(`${BACKEND_URL}/api/standings`);
        const data = await response.json();
        const standings = data.standings[0].table; 
        tbody.innerHTML = ''; 
        standings.forEach((row) => {
            const isMe = (userTeam && row.team.name === userTeam.name) ? 'table-row-highlight' : '';
            tbody.innerHTML += `
                <tr class="${isMe}">
                    <td class="sticky-col">${row.position}</td>
                    <td class="sticky-col-2">
                        <div class="club-cell">
                            <img src="${row.team.crest}" class="club-icon-tiny" alt="${row.team.name}">
                            <span>${row.team.shortName || row.team.name}</span>
                        </div>
                    </td>
                    <td>${row.playedGames}</td>
                    <td>${row.won}</td>
                    <td>${row.draw}</td>
                    <td>${row.lost}</td>
                    <td>${row.goalsFor}</td>
                    <td>${row.goalsAgainst}</td>
                    <td>${row.goalDifference}</td>
                    <td style="font-weight:900; color:#fff;">${row.points}</td>
                    <td><div class="form-badges-container">${row.form || '-'}</div></td>
                </tr>
            `;
        });
    } catch (error) {
        console.error("Ошибка загрузки таблицы:", error);
        tbody.innerHTML = '<tr><td colspan="11">Ошибка загрузки данных</td></tr>';
    }
}
    
    // Сортировка по очкам
    tableData.sort((a, b) => b.pts - a.pts);

    // Рендеринг таблицы
    tableData.forEach((row, index) => {
        const isMe = row.team.id === myTeam.id ? 'table-row-highlight' : '';
        
        // Генерация иконок формы
        let formHtml = `<div class="form-badges-container">`;
        row.form.forEach(f => {
            if(f === 'W') {
                formHtml += `<div class="f-badge f-win"><i class="fa-solid fa-check"></i></div>`;
            } else if(f === 'L') {
                formHtml += `<div class="f-badge f-loss"><i class="fa-solid fa-xmark"></i></div>`;
            } else {
                formHtml += `<div class="f-badge f-draw"><i class="fa-solid fa-minus"></i></div>`;
            }
        });
        formHtml += `</div>`;

        tbody.innerHTML += `
            <tr class="${isMe}">
                <td class="sticky-col">${index + 1}</td>
                <td class="sticky-col-2">
                    <div class="club-cell">
                        <img src="${row.team.logo}" class="club-icon-tiny" onerror="this.src='assets/pl_logo.png'" alt="${row.team.name}">
                        <span>${row.team.name}</span>
                    </div>
                </td>
                <td>${row.mp}</td>
                <td>${row.w}</td>
                <td>${row.d}</td>
                <td>${row.l}</td>
                <td>${row.gf}</td>
                <td>${row.ga}</td>
                <td>${row.gd >= 0 ? '+' : ''}${row.gd}</td>
                <td style="font-weight:900; color:#fff;">${row.pts}</td>
                <td>${formHtml}</td>
            </tr>
        `;
    });

// =========================================
// СОСТАВ КОМАНДЫ
// =========================================

function renderSquadList() {
    const container = document.getElementById('squad-list');
    if (!container || !userTeam) return;
    
    // Получаем состав команды
    if (squadsDb[userTeam.id]) {
        currentSquadData = squadsDb[userTeam.id];
    } else {
        currentSquadData = generateRandomSquad(userTeam.name);
    }
    
    renderPlayersToDom(currentSquadData);
}

function renderPlayersToDom(players) {
    const container = document.getElementById('squad-list');
    if(!container) return;
    
    container.innerHTML = '';
    
    players.forEach(p => {
        // Перевод позиций на русский
        let ruPos = 'ПЗ';
        if(p.pos === 'GK') ruPos = 'ВРТ';
        else if(p.pos === 'DEF') ruPos = 'ЗАЩ';
        else if(p.pos === 'MID') ruPos = 'ПЗ';
        else if(p.pos === 'FWD') ruPos = 'НАП';
        
        container.innerHTML += `
            <div class="player-card">
                <div class="player-number-bg">${p.num}</div>
                <div class="player-avatar-box">
                    <div class="player-avatar"><i class="fa-solid fa-user"></i></div>
                    <div class="player-kit-number">${p.num}</div>
                </div>
                <div class="player-info">
                    <div class="player-name">${p.name}</div>
                    <div class="player-pos-lbl">${ruPos}</div>
                    <div class="player-stats">
                        <div class="stat-box">РЕЙТИНГ <b>${p.rating}</b></div>
                    </div>
                </div>
            </div>
        `;
    });
}

// Фильтрация состава по позиции
window.filterSquad = function(role, btn) {
    // Убираем активный класс со всех кнопок
    document.querySelectorAll('.filter-pill').forEach(b => b.classList.remove('active'));
    
    // Добавляем активный класс на нажатую кнопку
    btn.classList.add('active');
    
    if (role === 'all') {
        renderPlayersToDom(currentSquadData);
    } else {
        const filtered = currentSquadData.filter(p => p.pos === role);
        renderPlayersToDom(filtered);
    }
};

// Генерация случайного состава для команд без данных
function generateRandomSquad(teamName) {
    const roles = ['GK', 'GK', 'DEF', 'DEF', 'DEF', 'DEF', 'MID', 'MID', 'MID', 'MID', 'FWD', 'FWD', 'FWD'];
    return roles.map((r, i) => ({
        name: `Игрок ${i + 1}`,
        num: i + 1,
        pos: r,
        rating: 70 + Math.floor(Math.random() * 15)
    }));
}

// =========================================
// СТАТИСТИКА ЛИГИ
// =========================================

// Переключение выпадающего списка
window.toggleStatsDropdown = function() {
    const list = document.getElementById('stats-options-list');
    if(list) list.classList.toggle('hidden');
};

// Смена типа статистики
window.changeStatsType = function(type) {
    currentStatsType = type;
    renderStats(type);
    
    const label = document.getElementById('stats-current-select');
    let text = 'ГОЛЫ';
    
    if(type === 'assists') text = 'ПЕРЕДАЧИ';
    if(type === 'cards') text = 'ЖЕЛТЫЕ КАРТОЧКИ';
    
    if(label) {
        label.innerHTML = `${text} <i class="fa-solid fa-chevron-down"></i>`;
    }
    
    // Закрываем выпадающий список
    const optionsList = document.getElementById('stats-options-list');
    if(optionsList) optionsList.classList.add('hidden');
};

// Рендеринг статистики
function renderStats(type) {
    const container = document.getElementById('stats-list-container');
    if(!container) return;
    
    const data = statsDb[type];
    if(!data) return;
    
    container.innerHTML = '';
    
    data.forEach((item, index) => {
        const teamObj = teamsData.find(t => t.id === item.team);
        const logo = teamObj ? teamObj.logo : 'assets/pl_logo.png';
        const teamName = teamObj ? teamObj.name : 'Неизвестно';
        const isTop = index === 0 ? 'top-row' : '';
        
        container.innerHTML += `
            <div class="stats-row ${isTop}">
                <div class="s-rank">${index + 1}</div>
                <div class="s-info">
                    <div class="s-avatar"><i class="fa-solid fa-user"></i></div>
                    <div class="s-texts">
                        <div class="s-name">${item.name}</div>
                        <div class="s-team">
                            <img src="${logo}" style="width:14px; height:14px; object-fit:contain;" onerror="this.src='assets/pl_logo.png'" alt="${teamName}">
                            ${teamName}
                        </div>
                    </div>
                </div>
                <div class="s-val">${item.val}</div>
            </div>
        `;
    });
}

// =========================================
// МОДАЛЬНОЕ ОКНО AI ПРОГНОЗА
// =========================================

window.openAiModal = async function(opponentId, opponentName) {
    const modal = document.getElementById('ai-modal');
    const aiContent = document.getElementById('ai-result');
    if (modal) modal.classList.remove('hidden');

    // Показываем анимацию загрузки
    if (aiContent) {
        aiContent.innerHTML = `
            <div style="text-align:center; padding: 30px 10px;">
                <div class="ai-scanner"></div>
                <p style="margin-top:15px; color: #888; font-size: 14px;">Анализ данных...</p>
            </div>
        `;

    aiContent.innerHTML = `<div class="ai-scanner"></div><p>Анализируем стратегии...</p>`;

    try {
        // Мы передаем ID матча на бэкенд. 
        // Примечание: на этапе теста можно использовать любой ID, например 444444
        const response = await fetch(`${BACKEND_URL}/api/predict/444444`);
        const analysis = await response.json();

        // Выводим результат от API-Football
        aiContent.innerHTML = `
            <div style="text-align: center;">
                <h4 style="text-transform: uppercase;">Прогноз на матч</h4>
                <div style="font-size: 32px; font-weight: 900; color: #a855f7;">
                    ${analysis.predictions ? analysis.predictions.winner.name : 'Анализ готов'}
                </div>
                <div style="background: #1a1a1a; padding: 15px; border-radius: 8px; margin-top: 15px; font-size: 12px; text-align: left;">
                    <b>Совет AI:</b> ${analysis.predictions ? analysis.predictions.advice : 'Данные подгружаются...'}
                </div>
            </div>
        `;
    } catch (e) {
        aiContent.innerHTML = "Ошибка связи с AI-сервером.";
    }
};
    
    // Имитация задержки анализа
    setTimeout(() => {
        const winProbability = Math.floor(Math.random() * 40) + 30;
        
        if (aiContent) {
            aiContent.innerHTML = `
                <div style="text-align: center; animation: slideUp 0.5s;">
                    <h4 style="color: #888; margin-bottom: 10px; font-size: 12px; text-transform: uppercase;">
                        Прогноз против ${opponentName}
                    </h4>
                    <div style="font-size: 48px; font-weight: 900; margin: 10px 0; background: linear-gradient(to right, #fff, #a855f7); -webkit-background-clip: text; -webkit-text-fill-color: transparent;">
                        ${winProbability}%
                    </div>
                    <p style="color: var(--success-color); margin-bottom: 20px; font-size: 14px;">
                        Вероятность победы
                    </p>
                    <div style="background: #1a1a1a; padding: 15px; border-radius: 8px; margin-top: 20px; text-align: left;">
                        <div style="font-size: 11px; color: #666; margin-bottom: 8px; text-transform: uppercase;">Факторы:</div>
                        <div style="font-size: 12px; color: #ccc; line-height: 1.6;">
                            • Форма команды: Отличная<br>
                            • Домашнее преимущество: ${matchesDb[0].home ? 'Да' : 'Нет'}<br>
                            • Статистика встреч: В вашу пользу<br>
                            • Состав: Оптимальный
                        </div>
                    </div>
                </div>
            `;
        }
    }, 1500);
};