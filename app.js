/* ====== תכנית אימון (ערוך כאן לפי התכנית שלך) ====== */
const PROGRAM = [const PROGRAM = [
  {
    id: "day_a",
    name: "יום א - גב + כתף אחורית",
    description: "חימום, תרגילי גב וכתף אחורית, ליבה, קארדיו ומתיחות.",
    exercises: [
      {
        name: "Lat Pulldown",
        tags: ["גב"],
        video: "https://www.youtube.com/results?search_query=lat+pulldown+proper+form",
        notes: "",
        sets: [{ targetReps: "10", targetWeight: "" }, { targetReps: "10", targetWeight: "" }, { targetReps: "10", targetWeight: "" }, { targetReps: "10", targetWeight: "" }]
      },
      {
        name: "Seated Cable Row (V-grip)",
        tags: ["גב"],
        video: "https://www.youtube.com/results?search_query=seated+cable+row+v+grip+proper+form",
        notes: "",
        sets: [{ targetReps: "10", targetWeight: "" }, { targetReps: "10", targetWeight: "" }, { targetReps: "10", targetWeight: "" }, { targetReps: "10", targetWeight: "" }]
      },
      {
        name: "Face Pull",
        tags: ["כתף אחורית"],
        video: "https://www.youtube.com/results?search_query=face+pull+proper+form",
        notes: "",
        sets: [{ targetReps: "15", targetWeight: "" }, { targetReps: "15", targetWeight: "" }, { targetReps: "15", targetWeight: "" }]
      },
      {
        name: "Reverse Fly",
        tags: ["כתף אחורית"],
        video: "https://www.youtube.com/results?search_query=reverse+fly+proper+form",
        notes: "",
        sets: [{ targetReps: "12", targetWeight: "" }, { targetReps: "12", targetWeight: "" }, { targetReps: "12", targetWeight: "" }]
      },
      {
        name: "Pull-Over",
        tags: ["גב"],
        video: "https://www.youtube.com/results?search_query=dumbbell+pullover+proper+form",
        notes: "",
        sets: [{ targetReps: "12", targetWeight: "" }, { targetReps: "12", targetWeight: "" }, { targetReps: "12", targetWeight: "" }]
      },
      {
        name: "Shrugs",
        tags: ["טרפזים"],
        video: "https://www.youtube.com/results?search_query=dumbbell+shrugs+proper+form",
        notes: "",
        sets: [{ targetReps: "12", targetWeight: "" }, { targetReps: "12", targetWeight: "" }, { targetReps: "12", targetWeight: "" }]
      },
      {
        name: "Plank",
        tags: ["ליבה"],
        video: "https://www.youtube.com/results?search_query=plank+proper+form",
        notes: "",
        sets: [{ targetReps: "45 שנ׳", targetWeight: "" }, { targetReps: "45 שנ׳", targetWeight: "" }, { targetReps: "45 שנ׳", targetWeight: "" }]
      },
      {
        name: "Side Plank",
        tags: ["ליבה"],
        video: "https://www.youtube.com/results?search_query=side+plank+proper+form",
        notes: "",
        sets: [{ targetReps: "30 שנ׳", targetWeight: "" }, { targetReps: "30 שנ׳", targetWeight: "" }, { targetReps: "30 שנ׳", targetWeight: "" }]
      },
      {
        name: "קארדיו - הליכה מהירה",
        tags: ["קארדיו"],
        video: "https://www.youtube.com/results?search_query=brisk+walking+cardio",
        notes: "",
        sets: [{ targetReps: "20-30 דק׳", targetWeight: "" }]
      },
      {
        name: "מתיחות - Hamstring, Lat",
        tags: ["מתיחות"],
        video: "https://www.youtube.com/results?search_query=hamstring+stretch+lat+stretch",
        notes: "",
        sets: [{ targetReps: "5-8 דק׳", targetWeight: "" }]
      }
    ]
  },

  {
    id: "day_b",
    name: "יום ב - חזה + כתפיים + טרייספס",
    description: "דחיפה: חזה, כתפיים, יד אחורית + ליבה, קארדיו ומתיחות.",
    exercises: [
      {
        name: "Incline Barbell Press",
        tags: ["חזה"],
        video: "https://www.youtube.com/results?search_query=incline+barbell+press+proper+form",
        notes: "",
        sets: [{ targetReps: "10", targetWeight: "" }, { targetReps: "10", targetWeight: "" }, { targetReps: "10", targetWeight: "" }, { targetReps: "10", targetWeight: "" }]
      },
      {
        name: "Dumbbell Fly",
        tags: ["חזה"],
        video: "https://www.youtube.com/results?search_query=dumbbell+fly+proper+form",
        notes: "",
        sets: [{ targetReps: "12", targetWeight: "" }, { targetReps: "12", targetWeight: "" }, { targetReps: "12", targetWeight: "" }]
      },
      {
        name: "Chest Press Machine / Flat Dumbbell Press",
        tags: ["חזה"],
        video: "https://www.youtube.com/results?search_query=machine+chest+press+proper+form",
        notes: "",
        sets: [{ targetReps: "12", targetWeight: "" }, { targetReps: "12", targetWeight: "" }, { targetReps: "12", targetWeight: "" }]
      },
      {
        name: "Lateral Raises",
        tags: ["כתפיים"],
        video: "https://www.youtube.com/results?search_query=lateral+raise+proper+form",
        notes: "",
        sets: [{ targetReps: "12", targetWeight: "" }, { targetReps: "12", targetWeight: "" }, { targetReps: "12", targetWeight: "" }]
      },
      {
        name: "Front Raises",
        tags: ["כתפיים"],
        video: "https://www.youtube.com/results?search_query=front+raise+proper+form",
        notes: "",
        sets: [{ targetReps: "10", targetWeight: "" }, { targetReps: "10", targetWeight: "" }, { targetReps: "10", targetWeight: "" }]
      },
      {
        name: "Shoulder Press",
        tags: ["כתפיים"],
        video: "https://www.youtube.com/results?search_query=shoulder+press+proper+form",
        notes: "",
        sets: [{ targetReps: "10", targetWeight: "" }, { targetReps: "10", targetWeight: "" }, { targetReps: "10", targetWeight: "" }]
      },
      {
        name: "Rope Pushdown",
        tags: ["טרייספס"],
        video: "https://www.youtube.com/results?search_query=tricep+rope+pushdown+proper+form",
        notes: "",
        sets: [{ targetReps: "12", targetWeight: "" }, { targetReps: "12", targetWeight: "" }, { targetReps: "12", targetWeight: "" }]
      },
      {
        name: "Overhead Cable Extension",
        tags: ["טרייספס"],
        video: "https://www.youtube.com/results?search_query=overhead+cable+tricep+extension+proper+form",
        notes: "",
        sets: [{ targetReps: "12", targetWeight: "" }, { targetReps: "12", targetWeight: "" }]
      },
      {
        name: "Cable Crunch",
        tags: ["בטן"],
        video: "https://www.youtube.com/results?search_query=cable+crunch+proper+form",
        notes: "",
        sets: [{ targetReps: "15", targetWeight: "" }, { targetReps: "15", targetWeight: "" }, { targetReps: "15", targetWeight: "" }]
      },
      {
        name: "קארדיו",
        tags: ["קארדיו"],
        video: "https://www.youtube.com/results?search_query=cardio+machine+workout+20+minutes",
        notes: "20-25 דקות לפי הדופק.",
        sets: [{ targetReps: "20-25 דק׳", targetWeight: "" }]
      },
      {
        name: "מתיחות - Chest, Shoulder, Lat",
        tags: ["מתיחות"],
        video: "https://www.youtube.com/results?search_query=chest+stretch+shoulder+stretch+lat+stretch",
        notes: "",
        sets: [{ targetReps: "5-8 דק׳", targetWeight: "" }]
      }
    ]
  },

  {
    id: "rest",
    name: "יום מנוחה",
    description: "התאוששות. ניתן לבצע הליכה קלה ומתיחות לפי צורך.",
    exercises: [
      {
        name: "הליכה קלה (אופציונלי)",
        tags: ["התאוששות"],
        video: "https://www.youtube.com/results?search_query=easy+walk+recovery",
        notes: "",
        sets: [{ targetReps: "15-30 דק׳", targetWeight: "" }]
      },
      {
        name: "מתיחות קלות (אופציונלי)",
        tags: ["מתיחות"],
        video: "https://www.youtube.com/results?search_query=full+body+stretch+routine+recovery",
        notes: "",
        sets: [{ targetReps: "5-10 דק׳", targetWeight: "" }]
      }
    ]
  },

  {
    id: "day_c",
    name: "יום שישי - רגליים + חזה + בטן",
    description: "אינטרוולים, מתיחות, רגליים, חזה, ליבה.",
    exercises: [
      {
        name: "אינטרוולים - 8 סבבים",
        tags: ["חימום", "קארדיו"],
        video: "https://www.youtube.com/results?search_query=interval+training+90+seconds+30+seconds",
        notes: "לפי התמונה: 8 סבבים של 90 שנ׳ בינוני + 30 שנ׳ מהיר.",
        sets: [{ targetReps: "8 סבבים", targetWeight: "" }]
      },
      {
        name: "מתיחות - Biceps, Lat, Hamstring",
        tags: ["מתיחות"],
        video: "https://www.youtube.com/results?search_query=biceps+stretch+lat+stretch+hamstring+stretch",
        notes: "",
        sets: [{ targetReps: "5-8 דק׳", targetWeight: "" }]
      },
      {
        name: "Goblet Squat",
        tags: ["רגליים"],
        video: "https://www.youtube.com/results?search_query=goblet+squat+proper+form",
        notes: "",
        sets: [{ targetReps: "12", targetWeight: "" }, { targetReps: "12", targetWeight: "" }, { targetReps: "12", targetWeight: "" }, { targetReps: "12", targetWeight: "" }]
      },
      {
        name: "Bulgarian Split Squat",
        tags: ["רגליים"],
        video: "https://www.youtube.com/results?search_query=bulgarian+split+squat+proper+form",
        notes: "",
        sets: [{ targetReps: "10", targetWeight: "" }, { targetReps: "10", targetWeight: "" }, { targetReps: "10", targetWeight: "" }]
      },
      {
        name: "Incline Dumbbell Press",
        tags: ["חזה"],
        video: "https://www.youtube.com/results?search_query=incline+dumbbell+press+proper+form",
        notes: "",
        sets: [{ targetReps: "12", targetWeight: "" }, { targetReps: "12", targetWeight: "" }, { targetReps: "12", targetWeight: "" }]
      },
      {
        name: "Cable Crossover",
        tags: ["חזה"],
        video: "https://www.youtube.com/results?search_query=cable+crossover+proper+form",
        notes: "",
        sets: [{ targetReps: "15", targetWeight: "" }, { targetReps: "15", targetWeight: "" }, { targetReps: "15", targetWeight: "" }]
      },
      {
        name: "Leg Extension",
        tags: ["רגליים"],
        video: "https://www.youtube.com/results?search_query=leg+extension+proper+form",
        notes: "",
        sets: [{ targetReps: "15", targetWeight: "" }, { targetReps: "15", targetWeight: "" }, { targetReps: "15", targetWeight: "" }]
      },
      {
        name: "Leg Curl",
        tags: ["רגליים"],
        video: "https://www.youtube.com/results?search_query=leg+curl+proper+form",
        notes: "",
        sets: [{ targetReps: "15", targetWeight: "" }, { targetReps: "15", targetWeight: "" }, { targetReps: "15", targetWeight: "" }]
      },
      {
        name: "Side Plank",
        tags: ["ליבה"],
        video: "https://www.youtube.com/results?search_query=side+plank+proper+form",
        notes: "",
        sets: [{ targetReps: "10", targetWeight: "" }, { targetReps: "10", targetWeight: "" }, { targetReps: "10", targetWeight: "" }]
      },
      {
        name: "Russian Twist",
        tags: ["בטן"],
        video: "https://www.youtube.com/results?search_query=russian+twist+proper+form",
        notes: "",
        sets: [{ targetReps: "15", targetWeight: "" }, { targetReps: "15", targetWeight: "" }, { targetReps: "15", targetWeight: "" }]
      }
    ]
  }
];
  {
    id: "day1",
    name: "יום 1 - פלג עליון",
    description: "חימום, תרגילי כוח, סיום מתיחות.",
    exercises: [
      {
        name: "חימום כללי",
        tags: ["חימום"],
        video: "https://www.youtube.com/results?search_query=warm+up+before+workout",
        notes: "5-8 דקות. דופק עולה בהדרגה.",
        sets: [{ targetReps: "5-8 דק׳", targetWeight: "" }]
      },
      {
        name: "לחיצת חזה במכונה",
        tags: ["חזה"],
        video: "https://www.youtube.com/results?search_query=machine+chest+press+proper+form",
        notes: "כתפיים למטה ואחורה, תנועה נשלטת.",
        sets: [
          { targetReps: "10-12", targetWeight: "" },
          { targetReps: "8-10", targetWeight: "" },
          { targetReps: "8-10", targetWeight: "" }
        ]
      },
      {
        name: "מתיחות סוף אימון",
        tags: ["מתיחות"],
        video: "https://www.youtube.com/results?search_query=post+workout+stretching+routine",
        notes: "6-10 דקות, נשימה איטית.",
        sets: [{ targetReps: "6-10 דק׳", targetWeight: "" }]
      }
    ]
  },
  {
    id: "day2",
    name: "יום 2 - פלג תחתון",
    description: "דגש על רגליים, סיום מתיחות.",
    exercises: [
      {
        name: "הליכון שיפוע (חימום)",
        tags: ["חימום", "קארדיו"],
        video: "https://www.youtube.com/results?search_query=treadmill+incline+warm+up",
        notes: "5-8 דקות חימום. התאמה לפי דופק.",
        sets: [{ targetReps: "5-8 דק׳", targetWeight: "" }]
      },
      {
        name: "Leg Curl (המסטרינג)",
        tags: ["רגל אחורית"],
        video: "https://www.youtube.com/results?search_query=leg+curl+proper+form",
        notes: "תנועה איטית, ללא זריקה.",
        sets: [
          { targetReps: "12-15", targetWeight: "" },
          { targetReps: "10-12", targetWeight: "" },
          { targetReps: "10-12", targetWeight: "" }
        ]
      }
    ]
  }
];

/* ====== לוגיקת יומן ====== */
const STORAGE_KEY = "workout_pwa_v1";

function todayISO() {
  const d = new Date();
  const tzOff = d.getTimezoneOffset() * 60000;
  return new Date(d.getTime() - tzOff).toISOString().slice(0,10);
}

function loadState() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY)) || { logs: {} };
  } catch {
    return { logs: {} };
  }
}

function saveState(state) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

function $(id) { return document.getElementById(id); }

const state = loadState();

const dateInput = $("dateInput");
const daySelect = $("daySelect");
const dayDesc = $("dayDesc");
const workoutArea = $("workoutArea");
const historyArea = $("historyArea");
const searchInput = $("searchInput");

dateInput.value = todayISO();

function populateDays() {
  daySelect.innerHTML = "";
  for (const day of PROGRAM) {
    const opt = document.createElement("option");
    opt.value = day.id;
    opt.textContent = day.name;
    daySelect.appendChild(opt);
  }
}

function getCurrentDay() {
  return PROGRAM.find(d => d.id === daySelect.value) || PROGRAM[0];
}

function getLogKey(date, dayId) {
  return `${date}::${dayId}`;
}

function ensureLog(date, dayId) {
  const key = getLogKey(date, dayId);
  if (!state.logs[key]) {
    state.logs[key] = { date, dayId, createdAt: new Date().toISOString(), exercises: {}, generalNotes: "" };
  }
  return state.logs[key];
}

function renderWorkout() {
  const date = dateInput.value;
  const day = getCurrentDay();
  dayDesc.textContent = day.description || "";

  const log = ensureLog(date, day.id);

  const query = (searchInput.value || "").trim().toLowerCase();

  workoutArea.innerHTML = "";
  const h = document.createElement("h2");
  h.style.margin = "0 0 8px";
  h.textContent = `האימון של ${date} (${day.name})`;
  workoutArea.appendChild(h);

  const general = document.createElement("div");
  general.className = "card";
  general.style.background = "#fafafa";
  general.innerHTML = `
    <label>הערות כלליות לאימון</label>
    <textarea id="generalNotes" placeholder="לדוגמה: כאב בכתף, עייפות, דופק גבוה, שינה..."></textarea>
  `;
  workoutArea.appendChild(general);
  $("generalNotes").value = log.generalNotes || "";
  $("generalNotes").addEventListener("input", (e) => {
    log.generalNotes = e.target.value;
    saveState(state);
    renderHistory();
  });

  for (let i = 0; i < day.exercises.length; i++) {
    const ex = day.exercises[i];
    if (query && !ex.name.toLowerCase().includes(query)) continue;

    const exId = `ex_${i}`;
    if (!log.exercises[exId]) {
      log.exercises[exId] = ex.sets.map(s => ({ weight: "", reps: "", targetReps: s.targetReps || "", targetWeight: s.targetWeight || "" }));
    }

    const wrap = document.createElement("div");
    wrap.className = "exercise";

    const tags = (ex.tags || []).map(t => `<span class="chip">${t}</span>`).join("");
    wrap.innerHTML = `
      <h3>${ex.name} ${tags}</h3>
      <div class="muted" style="margin-bottom:8px;">${ex.notes || ""}</div>
      <div style="margin-bottom:10px;">
        <a href="${ex.video}" target="_blank" rel="noreferrer">פתח סרטון</a>
      </div>
      <div id="${exId}_sets"></div>
    `;

    workoutArea.appendChild(wrap);

    const setsDiv = document.getElementById(`${exId}_sets`);
    const exSets = log.exercises[exId];

    exSets.forEach((s, idx) => {
      const row = document.createElement("div");
      row.className = "row";
      row.style.marginBottom = "8px";
      row.innerHTML = `
        <div>
          <label>סט ${idx+1} - משקל</label>
          <input inputmode="decimal" placeholder="${s.targetWeight ? "יעד: " + s.targetWeight : "למשל 40"}" value="${s.weight || ""}" />
        </div>
        <div>
          <label>סט ${idx+1} - חזרות</label>
          <input inputmode="numeric" placeholder="${s.targetReps ? "יעד: " + s.targetReps : "למשל 10"}" value="${s.reps || ""}" />
        </div>
      `;
      const inputs = row.querySelectorAll("input");
      inputs[0].addEventListener("input", (e) => {
        exSets[idx].weight = e.target.value;
        saveState(state);
        renderHistory();
      });
      inputs[1].addEventListener("input", (e) => {
        exSets[idx].reps = e.target.value;
        saveState(state);
        renderHistory();
      });

      setsDiv.appendChild(row);
    });
  }

  saveState(state);
}

function renderHistory() {
  const logsArr = Object.values(state.logs || {});
  logsArr.sort((a,b) => (b.date || "").localeCompare(a.date || ""));
  historyArea.innerHTML = "";

  if (logsArr.length === 0) {
    historyArea.innerHTML = `<p class="muted">אין עדיין אימונים שמורים.</p>`;
    return;
  }

  const list = document.createElement("div");
  logsArr.slice(0, 30).forEach(log => {
    const day = PROGRAM.find(d => d.id === log.dayId);
    const title = day ? day.name : log.dayId;

    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
      <div style="display:flex;justify-content:space-between;gap:10px;flex-wrap:wrap;">
        <div>
          <strong>${log.date}</strong>
          <div class="muted">${title}</div>
        </div>
        <div style="display:flex;gap:8px;">
          <button class="secondary" data-open="${log.date}::${log.dayId}" style="min-width:140px;">פתח</button>
          <button class="danger" data-del="${log.date}::${log.dayId}" style="min-width:140px;">מחק</button>
        </div>
      </div>
      <div class="muted" style="margin-top:8px;">${(log.generalNotes || "").slice(0,140)}</div>
    `;
    list.appendChild(card);
  });

  historyArea.appendChild(list);

  historyArea.querySelectorAll("button[data-open]").forEach(btn => {
    btn.addEventListener("click", () => {
      const key = btn.getAttribute("data-open");
      const [date, dayId] = key.split("::");
      dateInput.value = date;
      daySelect.value = dayId;
      renderWorkout();
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  });

  historyArea.querySelectorAll("button[data-del]").forEach(btn => {
    btn.addEventListener("click", () => {
      const key = btn.getAttribute("data-del");
      if (confirm("למחוק את האימון הזה?")) {
        delete state.logs[key];
        saveState(state);
        renderHistory();
      }
    });
  });
}

$("saveBtn").addEventListener("click", () => {
  // השמירה מתבצעת כבר בזמן הקלדה, הכפתור נותן חיזוק בלבד.
  alert("האימון נשמר.");
});

$("addHomeHintBtn").addEventListener("click", () => {
  alert("באייפון: פתח את האתר ב-Safari > כפתור שיתוף (ריבוע עם חץ) > Add to Home Screen.");
});

$("exportBtn").addEventListener("click", () => {
  const data = JSON.stringify(state, null, 2);
  const blob = new Blob([data], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "workout-data.json";
  a.click();
  URL.revokeObjectURL(url);
});

$("importBtn").addEventListener("click", async () => {
  const inp = document.createElement("input");
  inp.type = "file";
  inp.accept = "application/json";
  inp.onchange = async () => {
    const file = inp.files?.[0];
    if (!file) return;
    const txt = await file.text();
    try {
      const parsed = JSON.parse(txt);
      if (!parsed || typeof parsed !== "object") throw new Error("bad");
      state.logs = parsed.logs || {};
      saveState(state);
      renderWorkout();
      renderHistory();
      alert("הנתונים יובאו בהצלחה.");
    } catch {
      alert("קובץ לא תקין.");
    }
  };
  inp.click();
});

$("clearBtn").addEventListener("click", () => {
  if (confirm("למחוק את כל הנתונים? פעולה זו בלתי הפיכה.")) {
    localStorage.removeItem(STORAGE_KEY);
    location.reload();
  }
});

dateInput.addEventListener("change", renderWorkout);
daySelect.addEventListener("change", renderWorkout);
searchInput.addEventListener("input", renderWorkout);

populateDays();
renderWorkout();
renderHistory();

/* שירות עובד רק אם יש hosting עם https */
if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("sw.js").catch(() => {});
}
