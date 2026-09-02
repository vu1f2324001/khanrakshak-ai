/**
 * KHANRAKSHAK AI - GIS LEAFLET MAP MODULE
 */

let leafletMap = null;
let mapMarkers = [];

function initMapModule() {
  setTimeout(() => {
    if (!leafletMap) {
      leafletMap = L.map("gis-map-container").setView([22.5, 82.0], 5);

      L.tileLayer("https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png", {
        attribution: "&copy; OpenStreetMap contributors &copy; CARTO",
        subdomains: "abcd",
        maxZoom: 18
      }).addTo(leafletMap);
    }

    renderMineMarkers(KHANRAKSHAK_DATA.mines);
  }, 200);
}

function renderMineMarkers(mines) {
  mapMarkers.forEach(m => leafletMap.removeLayer(m));
  mapMarkers = [];

  mines.forEach(mine => {
    let color = "#10b981";
    if (mine.status === "HIGH") color = "#f97316";
    if (mine.status === "CRITICAL") color = "#ef4444";
    if (mine.status === "MEDIUM") color = "#f59e0b";

    const circle = L.circleMarker([mine.lat, mine.lng], {
      radius: 9,
      fillColor: color,
      color: "#ffffff",
      weight: 1.5,
      opacity: 1,
      fillOpacity: 0.85
    }).addTo(leafletMap);

    const popupHtml = `
      <div style="font-family:sans-serif; color:#0c0f12; padding:4px;">
        <h4 style="margin:0 0 4px 0;">${mine.name}</h4>
        <p style="font-size:11px; margin:0 0 4px 0;">${mine.location}</p>
        <div style="font-size:12px; margin-bottom:8px;">
          <strong>Risk Score:</strong> <span style="color:${color}; font-weight:700;">${mine.riskScore}/100</span><br>
          <strong>Compliance:</strong> ${mine.compliance}%<br>
          <strong>Open Issues:</strong> ${mine.openIssues}
        </div>
        <button style="background:#1e293b; color:#fff; border:none; padding:4px 8px; border-radius:4px; font-size:10px; cursor:pointer;" 
          onclick="window.navigateToView('view-mines'); window.switchActiveMine('${mine.id}');">
          Inspect Mine
        </button>
      </div>
    `;

    circle.bindPopup(popupHtml);
    mapMarkers.push(circle);
  });
}

function filterMapMarkers() {
  const reg = document.getElementById("gis-region-filter").value;
  const rsk = document.getElementById("gis-risk-filter").value;

  const filtered = KHANRAKSHAK_DATA.mines.filter(m => {
    const matchReg = (reg === "ALL") || (m.region === reg);
    let matchRsk = true;
    if (rsk === "HIGH") matchRsk = (m.status === "HIGH" || m.status === "CRITICAL");
    if (rsk === "LOW") matchRsk = (m.status === "LOW");
    return matchReg && matchRsk;
  });

  renderMineMarkers(filtered);
}

