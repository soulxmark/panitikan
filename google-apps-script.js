/**
 * ══════════════════════════════════════════════════════════════
 *  EL FILIBUSTERISMO — GAME LEADERBOARD
 *  Google Apps Script  (paste into script.google.com)
 * ══════════════════════════════════════════════════════════════
 *
 *  SETUP STEPS:
 *  1. Go to https://script.google.com  →  "New Project"
 *  2. Paste this entire file, replacing the default code.
 *  3. Change SHEET_ID below to your Google Spreadsheet ID.
 *     (The ID is in the URL: docs.google.com/spreadsheets/d/SHEET_ID/edit)
 *  4. Click "Deploy" → "New deployment"
 *     - Type: Web app
 *     - Execute as: Me
 *     - Who has access: Anyone
 *  5. Copy the deployment URL.
 *  6. In the HTML file, replace the SHEET_URL placeholder with that URL.
 *
 *  COLUMNS (auto-created):
 *  Timestamp | Pangalan | Edad | Kasarian | Seksiyon | Paaralan | Rehiyon | Puntos | Streak | Kahirapan | Petsa
 */

// ── CONFIG ──────────────────────────────────────────────────
const SHEET_ID   = '1pemyeNapgMJ-C1FzOmQc8XmmmCi9rSHmK4e33jq2xRc';
const SHEET_NAME = 'Leaderboard'; // tab name (will be created if missing)
const MAX_ROWS   = 1000;          // max rows to keep (oldest get trimmed)
// ────────────────────────────────────────────────────────────

const HEADERS = [
  'Timestamp','Pangalan','Edad','Kasarian','Seksiyon',
  'Paaralan','Rehiyon','Puntos','Streak','Kahirapan','Petsa'
];

// ── ENTRY POINT ──────────────────────────────────────────────
function doGet(e) {
  // Guard: e or e.parameter may be undefined when run inside the editor
  const params = (e && e.parameter) ? e.parameter : {};
  const action = (params.action || '').toLowerCase();

  if (action === 'addscore') {
    return addScore(params);
  }
  if (action === 'getscores') {
    const limit = parseInt(params.limit) || 20;
    return getScores(limit);
  }
  // Default: health check
  return jsonResponse({ status: 'ok', message: 'El Filibusterismo Leaderboard API is running.' });
}

// ── TEST FUNCTION (run this inside the editor to verify) ──────
function testScript() {
  // Simulate addScore
  const addResult = doGet({ parameter: {
    action: 'addScore',
    name: 'Test Player', age: '16', gender: 'Lalaki',
    section: 'Gr10-Narra', school: 'Test School',
    region: 'NCR — Metro Manila', score: '120',
    streak: '3', diff: 'easy', date: new Date().toLocaleString()
  }});
  Logger.log('addScore result: ' + addResult.getContent());

  // Simulate getScores
  const getResult = doGet({ parameter: { action: 'getScores', limit: '5' } });
  Logger.log('getScores result: ' + getResult.getContent());
}

// ── ADD SCORE ────────────────────────────────────────────────
function addScore(p) {
  try {
    const sheet = getOrCreateSheet();
    const row = [
      new Date().toISOString(),
      sanitize(p.name,    40),
      parseInt(p.age)    || 0,
      sanitize(p.gender,  20),
      sanitize(p.section, 30),
      sanitize(p.school,  50),
      sanitize(p.region,  40),
      parseInt(p.score)  || 0,
      parseInt(p.streak) || 0,
      sanitize(p.diff,    10),
      sanitize(p.date,    30),
    ];
    sheet.appendRow(row);

    // Trim old rows if over MAX_ROWS
    const total = sheet.getLastRow();
    if (total > MAX_ROWS + 1) {
      sheet.deleteRows(2, total - MAX_ROWS - 1);
    }

    return jsonResponse({ status: 'ok' });
  } catch(err) {
    return jsonResponse({ status: 'error', message: err.message });
  }
}

// ── GET TOP SCORES ────────────────────────────────────────────
function getScores(limit) {
  try {
    const sheet = getOrCreateSheet();
    const lastRow = sheet.getLastRow();
    if (lastRow < 2) return jsonResponse([]);

    const data = sheet.getRange(2, 1, lastRow - 1, HEADERS.length).getValues();

    // Map to objects
    const rows = data
      .map(r => ({
        timestamp: r[0],
        name:      r[1],
        age:       r[2],
        gender:    r[3],
        section:   r[4],
        school:    r[5],
        region:    r[6],
        score:     Number(r[7]) || 0,
        streak:    Number(r[8]) || 0,
        diff:      r[9],
        date:      r[10],
      }))
      .filter(r => r.name && r.score > 0);

    // Sort by score descending, then by timestamp ascending (earliest first for ties)
    rows.sort((a, b) => {
      if (b.score !== a.score) return b.score - a.score;
      return new Date(a.timestamp) - new Date(b.timestamp);
    });

    // Deduplicate: keep only best score per player name
    const seen = new Set();
    const unique = rows.filter(r => {
      const key = r.name.toLowerCase().trim();
      if (seen.has(key)) return false;
      seen.add(key);
      return true;
    });

    return jsonResponse(unique.slice(0, limit));
  } catch(err) {
    return jsonResponse({ status: 'error', message: err.message });
  }
}

// ── HELPERS ───────────────────────────────────────────────────
function getOrCreateSheet() {
  const ss = SpreadsheetApp.openById(SHEET_ID);
  let sheet = ss.getSheetByName(SHEET_NAME);
  if (!sheet) {
    sheet = ss.insertSheet(SHEET_NAME);
    sheet.appendRow(HEADERS);
    // Style header
    const headerRange = sheet.getRange(1, 1, 1, HEADERS.length);
    headerRange.setBackground('#1a0d03').setFontColor('#c9a84c')
      .setFontWeight('bold').setFontFamily('Cinzel');
    sheet.setFrozenRows(1);
  }
  return sheet;
}

function sanitize(val, maxLen) {
  if (val === null || val === undefined) return '';
  return String(val).replace(/[<>"'&]/g, '').substring(0, maxLen);
}

function jsonResponse(data) {
  const output = ContentService.createTextOutput(JSON.stringify(data));
  output.setMimeType(ContentService.MimeType.JSON);
  return output;
}
