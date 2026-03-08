/**
 * ══════════════════════════════════════════════════════════════
 *  EL FILIBUSTERISMO — GAME LEADERBOARD
 *  Google Apps Script  (paste into script.google.com)
 * ══════════════════════════════════════════════════════════════
 *  SETUP:
 *  1. Paste this file into script.google.com
 *  2. Deploy → New deployment → Web app
 *     Execute as: Me  |  Who has access: Anyone
 *  3. Copy the /exec URL into SHEET_URL in sheets.js
 *
 *  TEST inside editor: run testScript() — NOT doGet()
 */

const SHEET_ID   = '1pemyeNapgMJ-C1FzOmQc8XmmmCi9rSHmK4e33jq2xRc';
const SHEET_NAME = 'Leaderboard';
const MAX_ROWS   = 1000;
const HEADERS    = ['Timestamp','Pangalan','Edad','Kasarian','Seksiyon',
                    'Paaralan','Rehiyon','Puntos','Streak','Kahirapan','Petsa'];

// ── ENTRY POINT ──────────────────────────────────────────────
function doGet(e) {
  const p      = (e && e.parameter) ? e.parameter : {};
  const action = (p.action || '').toLowerCase().trim();
  const cb     = p.callback || '';   // JSONP callback support

  let result;
  try {
    if      (action === 'addscore')  result = addScore(p);
    else if (action === 'getscores') result = getScores(Math.min(parseInt(p.limit)||20, 100));
    else                             result = { status:'ok', message:'Leaderboard API ✓' };
  } catch(err) {
    result = { status:'error', message: err.message };
  }

  const json = JSON.stringify(result);

  // JSONP mode — wrap in callback (avoids CORS entirely)
  if (cb) {
    return ContentService
      .createTextOutput(cb + '(' + json + ')')
      .setMimeType(ContentService.MimeType.JAVASCRIPT);
  }

  // Standard JSON
  return ContentService
    .createTextOutput(json)
    .setMimeType(ContentService.MimeType.JSON);
}

// ── ADD SCORE ────────────────────────────────────────────────
function addScore(p) {
  const sheet = getOrCreateSheet();
  sheet.appendRow([
    new Date().toISOString(),
    clean(p.name,    40),
    parseInt(p.age)  || 0,
    clean(p.gender,  20),
    clean(p.section, 30),
    clean(p.school,  50),
    clean(p.region,  40),
    parseInt(p.score)  || 0,
    parseInt(p.streak) || 0,
    clean(p.diff,    10),
    clean(p.date,    30),
  ]);
  const total = sheet.getLastRow();
  if (total > MAX_ROWS + 1) sheet.deleteRows(2, total - MAX_ROWS - 1);
  return { status:'ok', written:true };
}

// ── GET SCORES ────────────────────────────────────────────────
function getScores(limit) {
  const sheet   = getOrCreateSheet();
  const lastRow = sheet.getLastRow();
  if (lastRow < 2) return [];

  const data = sheet.getRange(2, 1, lastRow - 1, HEADERS.length).getValues();
  const rows = data
    .map(r => ({
      timestamp:r[0], name:r[1], age:r[2], gender:r[3],
      section:r[4], school:r[5], region:r[6],
      score:Number(r[7])||0, streak:Number(r[8])||0,
      diff:r[9], date:r[10]
    }))
    .filter(r => r.name && r.score > 0);

  rows.sort((a,b) => b.score !== a.score
    ? b.score - a.score
    : new Date(a.timestamp) - new Date(b.timestamp));

  const seen = new Set();
  return rows
    .filter(r => { const k = String(r.name).toLowerCase().trim(); return seen.has(k) ? false : (seen.add(k),true); })
    .slice(0, limit);
}

// ── HELPERS ───────────────────────────────────────────────────
function getOrCreateSheet() {
  const ss = SpreadsheetApp.openById(SHEET_ID);
  let sheet = ss.getSheetByName(SHEET_NAME);
  if (!sheet) {
    sheet = ss.insertSheet(SHEET_NAME);
    sheet.appendRow(HEADERS);
    sheet.getRange(1,1,1,HEADERS.length)
      .setBackground('#1a0d03').setFontColor('#c9a84c').setFontWeight('bold');
    sheet.setFrozenRows(1);
  }
  return sheet;
}

function clean(val, maxLen) {
  return String(val||'').replace(/[<>"']/g,'').substring(0,maxLen).trim();
}

// ── TEST (run this in editor, not doGet) ──────────────────────
function testScript() {
  const w = doGet({ parameter:{
    action:'addScore', name:'Test Player', age:'16', gender:'Lalaki',
    section:'Gr10-Rizal', school:'Test HS', region:'NCR — Metro Manila',
    score:'150', streak:'4', diff:'easy', date: new Date().toLocaleString()
  }});
  Logger.log('WRITE → ' + w.getContent());

  const r = doGet({ parameter:{ action:'getScores', limit:'5' } });
  Logger.log('READ  → ' + r.getContent());
}
