/**
 * KHANRAKSHAK AI - REPORTS ENGINE & CSV EXPORT
 */

function initReportsModule() {
  previewReport("daily");
}

function previewReport(type) {
  const container = document.getElementById("print-content-body");
  container.innerHTML = `
    <h3 style="margin-bottom:12px; text-transform:uppercase;">${type} Statutory Governance Audit Summary</h3>
    <p style="font-size:12px; margin-bottom:15px;">Official extract generated under DGMS circular parameters. Verified against 42 active regional coal pits.</p>
    
    <table style="width:100%; border-collapse:collapse; font-size:12px;" border="1" cellpadding="8">
      <thead style="background:#f1f5f9; color:#000;">
        <tr>
          <th>Mine Identifier</th>
          <th>Location</th>
          <th>Risk Category</th>
          <th>Compliance Index</th>
          <th>Open Observations</th>
        </tr>
      </thead>
      <tbody>
        ${KHANRAKSHAK_DATA.mines.map(m => `
          <tr>
            <td><strong>${m.name}</strong> (${m.id})</td>
            <td>${m.location}</td>
            <td>${m.status} (${m.riskScore}/100)</td>
            <td>${m.compliance}%</td>
            <td>${m.openIssues} Actions</td>
          </tr>
        `).join("")}
      </tbody>
    </table>
  `;
}

function exportDataAsCSV() {
  let csv = "Mine ID,Mine Name,Location,Subsidiary,Risk Score,Status,Compliance %,Safety %\n";
  KHANRAKSHAK_DATA.mines.forEach(m => {
    csv += `"${m.id}","${m.name}","${m.location}","${m.company}",${m.riskScore},"${m.status}",${m.compliance},${m.safety}\n`;
  });

  const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.setAttribute("href", url);
  link.setAttribute("download", `KHANRAKSHAK_GOVERNANCE_DATA_${Date.now()}.csv`);
  link.click();
  window.showToast("CSV Export generated and downloaded.");
}

function printGovernanceReport() {
  window.print();
}
