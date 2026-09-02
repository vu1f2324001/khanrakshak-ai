/**
 * KHANRAKSHAK AI - MINE COMMAND CENTER
 */

let activeMineId = "MINE-JH-0021";

function initMinesModule() {
  populateMineSelector();
  loadMineDetails(activeMineId);
  setupSubTabs();
}

function populateMineSelector() {
  const select = document.getElementById("active-mine-select");
  select.innerHTML = "";
  KHANRAKSHAK_DATA.mines.forEach(m => {
    const opt = document.createElement("option");
    opt.value = m.id;
    opt.innerText = `${m.name} (${m.region}) - Score ${m.riskScore}/100`;
    select.appendChild(opt);
  });
  select.value = activeMineId;
}

function switchActiveMine(mineId) {
  activeMineId = mineId;
  document.getElementById("active-mine-select").value = mineId;
  loadMineDetails(mineId);
}
window.switchActiveMine = switchActiveMine;

function loadMineDetails(mineId) {
  const mine = KHANRAKSHAK_DATA.mines.find(m => m.id === mineId) || KHANRAKSHAK_DATA.mines[0];

  // Header Banner
  const banner = document.getElementById("mine-detail-banner");
  banner.innerHTML = `
    <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:12px;">
      <div>
        <div style="display:flex; align-items:center; gap:8px;">
          <span class="status-pill ${mine.status === 'HIGH' ? 'high' : 'low'}">${mine.status} RISK</span>
          <span style="font-size:11px; color:#64748b">${mine.id}</span>
        </div>
        <h2 style="margin:4px 0;">${mine.name}</h2>
        <p style="font-size:12px; color:#8492a6;"><i data-lucide="map-pin"></i> ${mine.location} • Subsidiary: ${mine.company}</p>
      </div>
      <div style="display:flex; gap:20px; align-items:center;">
        <div style="text-align:right;">
          <span style="font-size:11px; color:#8492a6;">DGMS COMPLIANCE INDEX</span>
          <div style="font-size:24px; font-weight:700;">${mine.compliance}%</div>
        </div>
        <div style="text-align:right;">
          <span style="font-size:11px; color:#8492a6;">SAFETY AUDIT</span>
          <div style="font-size:24px; font-weight:700; color:#ef4444">${mine.safety}%</div>
        </div>
      </div>
    </div>
  `;

  // Quick stats
  document.getElementById("mine-quick-status").innerHTML = `
    <span class="tag-ai"><i data-lucide="sparkles"></i> AI Assessment: Urgent Inspection Recommended</span>
  `;

  // Explainable AI factors
  document.getElementById("xai-title").innerText = `Why is ${mine.name} High Risk?`;
  const factorsList = document.getElementById("xai-factors-list");
  factorsList.innerHTML = "";
  mine.whyHighRisk.forEach(f => {
    const div = document.createElement("div");
    div.className = "digest-card border-red mt-10";
    div.innerHTML = `<i data-lucide="alert-circle" style="color:#ef4444; width:18px;"></i><span>${f}</span>`;
    factorsList.appendChild(div);
  });

  // Risk Score Engine Values
  document.getElementById("engine-score-number").innerText = mine.riskScore;

  // Render Sub-tables
  renderMineComplianceTable(mine);
  renderMineContractorsTable(mine);
  renderMineActionsTable(mine);

  if (window.lucide) lucide.createIcons();
}

function renderMineComplianceTable(mine) {
  const tbody = document.querySelector("#mine-compliance-table tbody");
  tbody.innerHTML = "";
  const regs = KHANRAKSHAK_DATA.complianceRegistry.filter(c => c.mine.includes("Mine B") || mine.status === "HIGH");
  regs.forEach(r => {
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td><strong>${r.title}</strong></td>
      <td>${r.category}</td>
      <td>${r.dueDate}</td>
      <td><span class="status-pill high">${r.risk}</span></td>
      <td><span class="status-pill critical">${r.status}</span></td>
      <td><button class="btn btn-outline btn-sm">Audit Now</button></td>
    `;
    tbody.appendChild(tr);
  });
}

function renderMineContractorsTable(mine) {
  const tbody = document.querySelector("#mine-contractor-table tbody");
  tbody.innerHTML = "";
  KHANRAKSHAK_DATA.contractors.forEach(c => {
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td><strong>${c.name}</strong></td>
      <td>${c.workersReported} Workers</td>
      <td>${c.attendanceRate}%</td>
      <td><span style="color:#ef4444">${c.safetyViolations}</span></td>
      <td><span class="status-pill ${c.riskScore > 70 ? 'critical' : 'low'}">${c.status}</span></td>
      <td><button class="btn btn-outline btn-sm" onclick="triggerContractorAudit('${c.name}')">Verify Muster</button></td>
    `;
    tbody.appendChild(tr);
  });
}

function renderMineActionsTable(mine) {
  const tbody = document.querySelector("#mine-actions-table tbody");
  tbody.innerHTML = "";
  KHANRAKSHAK_DATA.kanbanCards.forEach(k => {
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td><strong>${k.id}</strong></td>
      <td>${k.title}</td>
      <td>${k.assigned}</td>
      <td>${k.due}</td>
      <td><span class="status-pill high">${k.priority}</span></td>
      <td><span class="status-pill critical">${k.status}</span></td>
    `;
    tbody.appendChild(tr);
  });
}

function setupSubTabs() {
  const buttons = document.querySelectorAll(".sub-tab");
  buttons.forEach(btn => {
    btn.addEventListener("click", () => {
      buttons.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      const target = btn.getAttribute("data-subtab");
      document.querySelectorAll(".subtab-content").forEach(c => c.classList.remove("active"));
      document.getElementById(target).classList.add("active");
    });
  });
}

function scheduleInspectionModal() {
  window.showToast("Emergency DGMS Inspection Scheduled for 09:00 AM Tomorrow");
}
function assignOfficerModal() {
  window.showToast("Officer A. K. Sengupta assigned as Chief Investigating Officer");
}
function createActionQuick() {
  window.showToast("CAPA Ticket Generated and Linked to DGMS Regulatory Portal");
}

