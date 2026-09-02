/**
 * KHANRAKSHAK AI - CONTRACTOR INTELLIGENCE
 */

function initContractorsModule() {
  renderContractorsTable();
}

function renderContractorsTable() {
  const tbody = document.querySelector("#contractors-master-table tbody");
  tbody.innerHTML = "";

  KHANRAKSHAK_DATA.contractors.forEach(c => {
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td><strong>${c.name}</strong></td>
      <td>${c.mine}</td>
      <td>${c.workersReported}</td>
      <td><span style="color:${c.attendanceRate < 80 ? '#ef4444' : '#10b981'}">${c.attendanceRate}%</span></td>
      <td>${c.safetyViolations}</td>
      <td><strong style="color:#ef4444">${c.repeatViolations}</strong></td>
      <td><strong>${c.riskScore}/100</strong></td>
      <td><span class="status-pill ${c.status === 'HIGH' ? 'critical' : 'low'}">${c.status}</span></td>
      <td><button class="btn btn-outline btn-sm" onclick="triggerContractorAudit('${c.name}')">Investigate</button></td>
    `;
    tbody.appendChild(tr);
  });
}

function triggerContractorAudit(name) {
  window.showToast(`DGMS Special Audit Notice dispatched to ${name}`);
}

function freezeMusterRoll(name) {
  window.showToast(`Invoices & Muster-Roll Payments Frozen for ${name}`);
}

