/**
 * KHANRAKSHAK AI - FIELD INSPECTIONS & SAFETY VISION
 */

function initInspectionsModule() {
  renderKanbanBoard();
}

function handleInspectionSubmit(e) {
  e.preventDefault();
  window.showToast("Analyzing Field Observation with AI...");

  setTimeout(() => {
    window.showToast("Observation Validated: P1 Violation Recorded & CAPA Card Dispatched");
    e.target.reset();
  }, 1200);
}

function triggerMockPhoto() {
  window.showToast("Live Camera Snapshot Attached: Haulage_Track_Section2.jpg");
}

function triggerMockVoice() {
  window.showToast("Audio Recorded: 'Methane drainage valve lever found cracked at Seam 3'");
}

function renderKanbanBoard() {
  const columns = ["OPEN", "ASSIGNED", "IN_PROGRESS", "VERIFICATION", "RESOLVED", "ESCALATED"];
  columns.forEach(col => {
    const el = document.getElementById(`col-${col}`);
    if (el) el.innerHTML = "";
  });

  KHANRAKSHAK_DATA.kanbanCards.forEach(card => {
    const colEl = document.getElementById(`col-${card.status}`);
    if (!colEl) return;

    const cardDiv = document.createElement("div");
    cardDiv.className = "kanban-card";
    cardDiv.innerHTML = `
      <div class="k-meta">
        <span>${card.id}</span>
        <strong style="color:${card.priority.includes('P1') ? '#ef4444' : '#f59e0b'}">${card.priority}</strong>
      </div>
      <h6>${card.title}</h6>
      <p style="font-size:11px; color:#8492a6;">Target: ${card.mine}</p>
      <div class="k-footer">
        <span><i data-lucide="user"></i> ${card.assigned}</span>
        <span style="color:#ef4444">${card.due}</span>
      </div>
    `;
    colEl.appendChild(cardDiv);
  });

  if (window.lucide) lucide.createIcons();
}

