/**
 * KHANRAKSHAK AI - AI DOCUMENT INTELLIGENCE
 */

function initDocumentsModule() {
  setupDragDrop();
}

function setupDragDrop() {
  const zone = document.getElementById("doc-drop-zone");
  if (!zone) return;

  zone.addEventListener("dragover", (e) => {
    e.preventDefault();
    zone.style.borderColor = "#3b82f6";
  });

  zone.addEventListener("dragleave", () => {
    zone.style.borderColor = "#2e3a4b";
  });

  zone.addEventListener("drop", (e) => {
    e.preventDefault();
    simulateDocUpload();
  });
}

function simulateDocUpload(event) {
  const pipeline = document.getElementById("doc-processing-pipeline");
  const resultPanel = document.getElementById("doc-result-panel");
  pipeline.style.display = "block";
  resultPanel.style.display = "none";

  const steps = [
    { id: "ps-1", label: "File Ingested: Dhanbad_BCCL_Audit_2026.pdf" },
    { id: "ps-2", label: "Tesseract OCR Parsing Raw Scanned Text..." },
    { id: "ps-3", label: "Named Entity & Telemetry Extraction..." },
    { id: "ps-4", label: "LLM Cross-referencing DGMS Reg 88 & 124..." },
    { id: "ps-5", label: "Mapping Safety & Environment Matrix..." },
    { id: "ps-6", label: "Risk Magnitude Computations Completed..." },
    { id: "ps-7", label: "Corrective Action Directives Synthesized!" }
  ];

  let current = 0;
  function processStep() {
    if (current < steps.length) {
      const stepObj = steps[current];
      const el = document.getElementById(stepObj.id);
      if (el) {
        el.classList.add("active");
        if (current > 0) document.getElementById(steps[current - 1].id).classList.add("done");
      }
      document.getElementById("pipeline-status-text").innerText = stepObj.label;
      current++;
      setTimeout(processStep, 450);
    } else {
      document.getElementById("ps-7").classList.add("done");
      document.getElementById("pipeline-status-text").innerText = "Analysis Finalized.";
      setTimeout(() => {
        resultPanel.style.display = "block";
        window.showToast("Document Processed: 4 Violations Identified");
      }, 500);
    }
  }
  processStep();
}

function exportAnalysisJSON() {
  const data = {
    document: "Dhanbad_BCCL_Audit_2026.pdf",
    parsedAt: new Date().toISOString(),
    violations: [
      { code: "DGMS-R88", type: "Emergency Incline Evacuation Obstruction", severity: "CRITICAL" },
      { code: "DGMS-R124", type: "Methane Telemetry Missing Calibration Seal", severity: "CRITICAL" },
      { code: "DGMS-ENV14", type: "Dust Suppression Log Overdue", severity: "MEDIUM" }
    ]
  };
  const blob = new Blob([JSON.stringify(data, null, 2)], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "DGMS_Document_Audit_Analysis.json";
  a.click();
}

