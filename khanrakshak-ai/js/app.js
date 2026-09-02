/**
 * KHANRAKSHAK AI - MASTER APPLICATION CONTROLLER
 */

document.addEventListener("DOMContentLoaded", () => {
  // Initialize Lucide Icons
  if (window.lucide) lucide.createIcons();

  // Route & Navigation Setup
  setupNavigation();
  setupSimulationModal();
  setupNotifications();

  // Initialize Modules
  initDashboardModule();
  initMinesModule();
  initComplianceModule();
  initInspectionsModule();
  initContractorsModule();
  initDocumentsModule();
  initAnalyticsModule();
  initCopilotModule();
  initReportsModule();
});

// Authentication
function handleLogin(e) {
  e.preventDefault();
  const overlay = document.getElementById("login-overlay");
  overlay.classList.add("hidden");
  window.showToast("Authorized: Officer Rajesh Kumar logged into Gov Command Grid");
}
window.handleLogin = handleLogin;

// Navigation Routing
function setupNavigation() {
  const navItems = document.querySelectorAll(".nav-item");
  navItems.forEach(item => {
    item.addEventListener("click", () => {
      const targetView = item.getAttribute("data-target");
      navigateToView(targetView);
    });
  });

  document.getElementById("topbar-copilot-btn").addEventListener("click", () => {
    navigateToView("view-copilot");
  });

  // Mobile drawer toggle
  const sidebar = document.getElementById("sidebar");
  const toggle = document.getElementById("sidebar-toggle");
  if (toggle) {
    toggle.addEventListener("click", () => {
      sidebar.classList.toggle("mobile-open");
    });
  }
}

function navigateToView(viewId) {
  // Update sidebar active states
  document.querySelectorAll(".nav-item").forEach(n => {
    if (n.getAttribute("data-target") === viewId) n.classList.add("active");
    else n.classList.remove("active");
  });

  // Update Viewports
  document.querySelectorAll(".page-view").forEach(v => v.classList.remove("active"));
  const activeView = document.getElementById(viewId);
  if (activeView) activeView.classList.add("active");

  // Update Breadcrumb
  const pageTitle = document.getElementById("page-title");
  if (viewId === "view-dashboard") pageTitle.innerText = "Mine Governance Command Center";
  if (viewId === "view-mines") pageTitle.innerText = "Mine Intelligence & Risk Explanation";
  if (viewId === "view-compliance") pageTitle.innerText = "Master Compliance & Regulatory Registry";
  if (viewId === "view-inspections") pageTitle.innerText = "Field Inspections & Safety Vision";
  if (viewId === "view-actions") pageTitle.innerText = "Corrective & Preventive Action Kanban";
  if (viewId === "view-contractors") pageTitle.innerText = "Contractor Risk & Anomaly Intelligence";
  if (viewId === "view-documents") pageTitle.innerText = "AI Document Compliance Pipeline";
  if (viewId === "view-analytics") pageTitle.innerText = "Predictive Monte Carlo Risk Forecasting";
  if (viewId === "view-gis") {
    pageTitle.innerText = "Geospatial Command Map";
    initMapModule();
  }
  if (viewId === "view-copilot") pageTitle.innerText = "DGMS Governance Copilot";
  if (viewId === "view-reports") pageTitle.innerText = "Statutory Reporting & Certified Audits";

  // Re-render Icons
  if (window.lucide) lucide.createIcons();

  // Close mobile drawer if opened
  const sidebar = document.getElementById("sidebar");
  if (sidebar) sidebar.classList.remove("mobile-open");
}
window.navigateToView = navigateToView;

// Toast Utility
function showToast(msg) {
  const container = document.getElementById("toast-container");
  const toast = document.createElement("div");
  toast.className = "toast";
  toast.innerHTML = `<span style="color:#3b82f6;">●</span> ${msg}`;
  container.appendChild(toast);
  setTimeout(() => {
    toast.remove();
  }, 3500);
}
window.showToast = showToast;

// Notifications Center
function setupNotifications() {
  const btn = document.getElementById("notif-toggle");
  const dd = document.getElementById("notif-dropdown");
  const list = document.getElementById("notif-list");

  btn.addEventListener("click", () => {
    dd.style.display = dd.style.display === "block" ? "none" : "block";
  });

  list.innerHTML = "";
  KHANRAKSHAK_DATA.alerts.forEach(a => {
    const item = document.createElement("div");
    item.style.padding = "8px 12px";
    item.style.borderBottom = "1px solid #202732";
    item.style.fontSize = "11px";
    item.innerHTML = `
      <strong style="color:${a.severity === 'CRITICAL' ? '#ef4444' : '#f97316'}">${a.mine}</strong>
      <div>${a.title}</div>
      <span style="color:#64748b;">${a.timestamp}</span>
    `;
    list.appendChild(item);
  });
}

// AI Hackathon Workflow Simulation Sequence
function setupSimulationModal() {
  const btn = document.getElementById("run-simulation-btn");
  btn.addEventListener("click", () => {
    document.getElementById("sim-modal-backdrop").style.display = "flex";
  });
}

function closeSimulationModal() {
  document.getElementById("sim-modal-backdrop").style.display = "none";
}
window.closeSimulationModal = closeSimulationModal;

function executeSimulationWorkflow() {
  const steps = [1, 2, 3, 4, 5, 6, 7];
  let idx = 0;

  function runNext() {
    if (idx < steps.length) {
      const stepNum = steps[idx];
      const stepEl = document.getElementById(`w-step-${stepNum}`);
      if (stepEl) {
        stepEl.classList.add("running");
        if (idx > 0) {
          const prevEl = document.getElementById(`w-step-${steps[idx - 1]}`);
          prevEl.classList.remove("running");
          prevEl.classList.add("completed");
        }
      }
      idx++;
      setTimeout(runNext, 650);
    } else {
      document.getElementById(`w-step-7`).classList.add("completed");
      window.showToast("Autonomous Governance Simulation Cycle Complete.");
      setTimeout(() => {
        closeSimulationModal();
        window.navigateToView("view-mines");
        window.switchActiveMine("MINE-JH-0021");
      }, 700);
    }
  }
  runNext();
}
window.executeSimulationWorkflow = executeSimulationWorkflow;

