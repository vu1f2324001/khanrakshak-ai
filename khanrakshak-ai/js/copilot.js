/**
 * KHANRAKSHAK AI - GOVERNANCE COPILOT
 */

function initCopilotModule() {}

function handleCopilotEnter(e) {
  if (e.key === "Enter") submitCopilotMessage();
}

function sendQuickPrompt(text) {
  document.getElementById("copilot-input").value = text;
  submitCopilotMessage();
}

function submitCopilotMessage() {
  const input = document.getElementById("copilot-input");
  const query = input.value.trim();
  if (!query) return;

  appendMessage("user", query);
  input.value = "";

  const typing = document.getElementById("copilot-copilot-typing") || document.getElementById("copilot-typing");
  if (typing) typing.style.display = "flex";

  const stream = document.getElementById("copilot-chat-stream");
  stream.scrollTop = stream.scrollHeight;

  setTimeout(() => {
    if (typing) typing.style.display = "none";
    const answer = generateCopilotResponse(query);
    appendMessage("ai", answer);
    stream.scrollTop = stream.scrollHeight;
  }, 900);
}

function appendMessage(role, html) {
  const stream = document.getElementById("copilot-chat-stream");
  const bubble = document.createElement("div");
  bubble.className = `chat-bubble ${role}`;

  const icon = role === "ai" ? "bot" : "user";
  bubble.innerHTML = `
    <div class="avatar"><i data-lucide="${icon}"></i></div>
    <div class="bubble-content">${html}</div>
  `;
  stream.appendChild(bubble);
  if (window.lucide) lucide.createIcons();
}

function generateCopilotResponse(q) {
  const lower = q.toLowerCase();

  if (lower.includes("mine b") || lower.includes("why is mine b high risk")) {
    return `
      <p><strong>Mine B (Dhanbad, BCCL)</strong> currently possesses an aggregated risk index of <strong>82/100 (CRITICAL)</strong>.</p>
      <p style="margin-top:6px;"><strong>Primary AI Root Cause Contributors:</strong></p>
      <ul style="padding-left:18px; margin-top:4px;">
        <li>3 unresolved safety observations (emergency incline stoppage failure).</li>
        <li>Statutory environmental dust submission overdue by 6 days.</li>
        <li>4 recurring optical PPE infractions (lack of reflective vests).</li>
        <li>Critical attendance discrepancy: <strong>53 phantom workers</strong> detected in muster records.</li>
      </ul>
      <div style="margin-top:10px;">
        <button class="btn btn-danger btn-sm" onclick="window.navigateToView('view-inspections')">Schedule Inspection</button>
        <button class="btn btn-outline btn-sm" onclick="triggerContractorAudit('Shivani Infra')">Audit Contractor</button>
      </div>
    `;
  }

  if (lower.includes("high risk") || lower.includes("which mines")) {
    return `
      <p>Currently, <strong>7 mines</strong> exceed the high-risk tolerance threshold (>70/100):</p>
      <ol style="padding-left:18px; margin-top:6px;">
        <li><strong>Mine D (Raniganj):</strong> 86/100 (CRITICAL - Gas Drainage Offline)</li>
        <li><strong>Mine B (Dhanbad):</strong> 82/100 (CRITICAL - Contractor & Incline Faults)</li>
        <li><strong>Mine F (Talcher):</strong> 76/100 (HIGH - Earthmoving Proximity)</li>
        <li><strong>Mine G (Godavari):</strong> 71/100 (HIGH - Ventilation Velocity Under Limit)</li>
      </ol>
      <p style="margin-top:8px;">Would you like me to generate an escalation docket for the Regional Safety Director?</p>
    `;
  }

  if (lower.includes("contractor") || lower.includes("violations")) {
    return `
      <p>Contractor with greatest infraction weight: <strong>Shivani Infra & Earthmovers (Mine B)</strong></p>
      <ul style="padding-left:18px; margin-top:4px;">
        <li>Total Violations: <strong>17</strong></li>
        <li>Repeat Offenses: <strong>6</strong></li>
        <li>Muster Discrepancy: <strong>53 Unaccounted Workers</strong></li>
      </ul>
      <p style="margin-top:6px;">Recommendation: Freeze shift muster disbursements immediately.</p>
    `;
  }

  if (lower.includes("report") || lower.includes("governance report")) {
    return `
      <p>Today's National Mining Governance Synthesis is ready.</p>
      <p>42 Mines Monitored • 7 High Risk • 23 Open CAPA Actions • 9 Overdue Statutory Inquiries.</p>
      <button class="btn btn-primary btn-sm mt-10" onclick="window.navigateToView('view-reports')">Open Statutory Reports Portal</button>
    `;
  }

  return `
    <p>I have queried the DGMS Indian Mines repository for <em>"${q}"</em>.</p>
    <p style="margin-top:6px;">All operational telemetries, gas monitors, and shift biometric rosters are synchronized. No statutory overrides detected beyond the flagged Dhanbad and Raniganj pits.</p>
  `;
}

function clearCopilotChat() {
  const stream = document.getElementById("copilot-chat-stream");
  stream.innerHTML = `
    <div class="chat-bubble ai">
      <div class="avatar"><i data-lucide="bot"></i></div>
      <div class="bubble-content">
        <p>Session refreshed. Ready for statutory inquiries and predictive analysis.</p>
      </div>
    </div>
  `;
  if (window.lucide) lucide.createIcons();
}

