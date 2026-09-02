/**
 * KHANRAKSHAK AI - COMPLIANCE MODULE
 */

function initComplianceModule() {
  renderMasterCompliance(KHANRAKSHAK_DATA.complianceRegistry);
  setupComplianceFilters();
}

function renderMasterCompliance(data) {
  const tbody = document.querySelector("#master-compliance-table tbody");
  tbody.innerHTML = "";

  data.forEach(item => {
    const tr = document.createElement("tr");
    let statusClass = "low";
    if (item.status === "OVERDUE") statusClass = "critical";
    if (item.status === "AT RISK") statusClass = "high";
    if (item.status === "DUE SOON") statusClass = "medium";

    tr.innerHTML = `
      <td><strong>${item.title}</strong></td>
      <td>${item.category}</td>
      <td>${item.mine}</td>
      <td>${item.dueDate}</td>
      <td><span class="status-pill ${statusClass}">${item.status}</span></td>
      <td><strong>${item.risk}</strong></td>
      <td>${item.officer}</td>
      <td><button class="btn btn-outline btn-sm" onclick="dispatchComplianceEscalation('${item.title}')">Escalate</button></td>
    `;
    tbody.appendChild(tr);
  });
}

function setupComplianceFilters() {
  const catFilter = document.getElementById("comp-category-filter");
  const statusFilter = document.getElementById("comp-status-filter");

  function filter() {
    const c = catFilter.value;
    const s = statusFilter.value;

    const res = KHANRAKSHAK_DATA.complianceRegistry.filter(i => {
      const matchCat = (c === "ALL") || (i.category === c);
      const matchStat = (s === "ALL") || (i.status === s);
      return matchCat && matchStat;
    });

    renderMasterCompliance(res);
  }

  catFilter.addEventListener("change", filter);
  statusFilter.addEventListener("change", filter);
}

function dispatchComplianceEscalation(title) {
  window.showToast("Formal Notice Dispatched for: " + title);
}

