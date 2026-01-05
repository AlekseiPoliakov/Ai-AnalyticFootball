const express = require('express');
const axios = require('axios');
const cors = require('cors');
const { Telegraf } = require('telegraf');
const cron = require('node-cron');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

const bot = new Telegraf(process.env.BOT_TOKEN);

// Хранилище в памяти (вместо БД на первое время)
let db = {
    standings: null,
    matches: null,
    lastTableUpdate: 0
};

// --- ФУНКЦИИ ЗАГРУЗКИ ---

// 1. Таблица и Расписание (Football-Data.org) - Лимит 10 зап/мин
async function updateGeneralData() {
    try {
        const headers = { 'X-Auth-Token': process.env.FOOTBALL_DATA_API_KEY };
        
        const standings = await axios.get('https://api.football-data.org/v4/competitions/PL/standings', { headers });
        const matches = await axios.get('https://api.football-data.org/v4/competitions/PL/matches?limit=50', { headers });

        db.standings = standings.data;
        db.matches = matches.data;
        db.lastTableUpdate = Date.now();
        console.log("Данные лиги обновлены успешно");
    } catch (err) {
        console.error("Ошибка Football-Data:", err.message);
    }
}

// 2. Аналитика матча (API-Football через RapidAPI) - Лимит 100 зап/день
// Вызываем ТОЛЬКО когда пользователь нажал кнопку "Прогноз"
async function getMatchAnalysis(matchId) {
    try {
        const options = {
            method: 'GET',
            url: 'https://api-football-v1.p.rapidapi.com/v3/predictions',
            params: { fixture: matchId },
            headers: {
                'X-RapidAPI-Key': process.env.RAPID_API_KEY,
                'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com'
            }
        };
        const response = await axios.request(options);
        return response.data.response[0]; // Здесь реальная аналитика AI
    } catch (err) {
        return { error: "Аналитика временно недоступна" };
    }
}

// --- ПЛАНИРОВЩИК (CRON) ---
// Обновляем таблицу раз в 2 часа (бесплатно и экономно)
cron.schedule('0 */2 * * *', () => {
    updateGeneralData();
});

// --- API ЭНДПОИНТЫ ДЛЯ ФРОНТЕНДА ---

app.get('/api/standings', async (req, res) => {
    if (!db.standings) await updateGeneralData();
    res.json(db.standings);
});

app.get('/api/matches', async (req, res) => {
    if (!db.matches) await updateGeneralData();
    res.json(db.matches);
});

app.get('/api/predict/:id', async (req, res) => {
    const analysis = await getMatchAnalysis(req.params.id);
    res.json(analysis);
});

// --- ТЕЛЕГРАМ БОТ ---

bot.start((ctx) => {
    ctx.reply('Привет! Следи за АПЛ с помощью AI Companion', {
        reply_markup: {
            inline_keyboard: [[
                { text: "Открыть приложение", web_app: { url: "ТВОЙ_URL_ФРОНТЕНДА" } }
            ]]
        }
    });
});

// Запуск
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Сервер запущен на порту ${PORT}`);
    updateGeneralData(); // Первый запуск при старте
});
bot.launch();