/**
 * KHANRAKSHAK AI - DASHBOARD LOGIC
 */

let riskChartInstance = null;

function initDashboardModule() {
  renderKPIs();
  renderRiskDonutChart();
  renderDashboardMinesTable(KHANRAKSHAK_DATA.mines);
  renderLiveAlertsStream(KHANRAKSHAK_DATA.alerts);
  setupTableFilters();
}

function renderKPIs() {
  document.getElementById("kpi-total-mines").innerText = KHANRAKSHAK_DATA.stats.totalMines;
  document.getElementById("kpi-compliance-rate").innerText = KHANRAKSHAK_DATA.stats.complianceRate + "%";
  document.getElementById("kpi-high-risk").innerText = KHANRAKSHAK_DATA.stats.highRiskMinesCount;
  document.getElementById("kpi-open-actions").innerText = KHANRAKSHAK_DATA.stats.openActionsCount;
  document.getElementById("kpi-overdue-items").innerText = KHANRAKSHAK_DATA.stats.overdueItemsCount;
  document.getElementById("kpi-critical-alerts").innerText = KHANRAKSHAK_DATA.stats.criticalAlertsCount;
}

function renderRiskDonutChart() {
  const ctx = document.getElementById("riskOverviewChart").getContext("2d");
  if (riskChartInstance) riskChartInstance.destroy();

  riskChartInstance = new Chart(ctx, {
    type: "doughnut",
    data: {
      labels: ["Critical", "High", "Medium", "Low"],
      datasets: [{
        data: [3, 7, 12, 20],
        backgroundColor: ["#ef4444", "#f97316", "#f59e0b", "#10b981"],
        borderWidth: 0,
        hoverOffset: 4
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      cutout: "75%",
      plugins: {
        legend: { display: false },
        tooltip: {
          backgroundColor: "#161d26",
          titleColor: "#e2e8f0",
          bodyColor: "#8492a6",
          borderColor: "#2e3a4b",
          borderWidth: 1
        }
      }
    }
  });
}

function renderDashboardMinesTable(mines) {
  const tbody = document.querySelector("#dashboard-mines-table tbody");
  tbody.innerHTML = "";

  mines.forEach(mine => {
    const tr = document.createElement("tr");
    tr.style.cursor = "pointer";
    tr.onclick = () => {
      window.navigateToView("view-mines");
      window.switchActiveMine(mine.id);
    };

    let riskBadgeClass = "low";
    if (mine.status === "HIGH") riskBadgeClass = "high";
    if (mine.status === "CRITICAL") riskBadgeClass = "critical";
    if (mine.status === "MEDIUM") riskBadgeClass = "medium";

    tr.innerHTML = `
      <td><strong>${mine.name}</strong><br><span style="color:#64748b; font-size:10px">${mine.id}</span></td>
      <td>${mine.location}</td>
      <td>${mine.compliance}%</td>
      <td>${mine.safety}%</td>
      <td>${mine.environment}%</td>
      <td>${mine.openIssues}</td>
      <td><strong style="color:${mine.riskScore > 75 ? '#ef4444' : '#10b981'}">${mine.riskScore}/100</strong></td>
      <td><span class="status-pill ${riskBadgeClass}">${mine.status}</span></td>
      <td><button class="btn btn-outline btn-sm">Inspect</button></td>
    `;
    tbody.appendChild(tr);
  });
}

function renderLiveAlertsStream(alerts) {
  const container = document.getElementById("live-alerts-stream");
  container.innerHTML = "";

  alerts.forEach(alert => {
    const div = document.createElement("div");
    div.className = `alert-row-item ${alert.severity.toLowerCase()}`;
    div.innerHTML = `
      <div class="alert-meta">
        <strong style="color:${alert.severity === 'CRITICAL' ? '#ef4444' : '#f97316'}">${alert.severity}</strong>
        <span>${alert.timestamp}</span>
      </div>
      <h6>${alert.mine}: ${alert.title}</h6>
      <p>${alert.explanation}</p>
      <button class="btn btn-outline btn-sm mt-10" onclick="handleAlertResolve('${alert.id}')">Execute CAPA</button>
    `;
    container.appendChild(div);
  });
}

function setupTableFilters() {
  const textFilter = document.getElementById("dashboard-mine-filter");
  const riskFilter = document.getElementById("dashboard-risk-filter");

  function apply() {
    const q = textFilter.value.toLowerCase();
    const r = riskFilter.value;

    const filtered = KHANRAKSHAK_DATA.mines.filter(m => {
      const matchesText = m.name.toLowerCase().includes(q) || m.location.toLowerCase().includes(q);
      const matchesRisk = (r === "ALL") || (m.status === r);
      return matchesText && matchesRisk;
    });

    renderDashboardMinesTable(filtered);
  }

  textFilter.addEventListener("input", apply);
  riskFilter.addEventListener("change", apply);
}

function handleAlertResolve(alertId) {
  window.showToast("Corrective Action auto-dispatched for " + alertId);
}

