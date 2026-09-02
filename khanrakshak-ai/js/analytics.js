/**
 * KHANRAKSHAK AI - PREDICTIVE ANALYTICS
 */

let predictionChartInstance = null;

function initAnalyticsModule() {
  renderPredictionChart();
}

function renderPredictionChart() {
  const ctx = document.getElementById("predictionChart").getContext("2d");
  if (predictionChartInstance) predictionChartInstance.destroy();

  predictionChartInstance = new Chart(ctx, {
    type: "line",
    data: {
      labels: ["Today", "+1 Day", "+2 Days", "+3 Days", "+4 Days", "+5 Days", "+6 Days", "+7 Days"],
      datasets: [
        {
          label: "Risk Score Forecast (Mine B)",
          data: [82, 84, 85, 87, 88, 89, 90, 91],
          borderColor: "#ef4444",
          backgroundColor: "rgba(239, 68, 68, 0.1)",
          fill: true,
          tension: 0.3,
          pointBackgroundColor: "#ef4444",
          pointRadius: 4
        },
        {
          label: "DGMS Safety Ceiling (Intervention Threshold)",
          data: [75, 75, 75, 75, 75, 75, 75, 75],
          borderColor: "#f59e0b",
          borderDash: [5, 5],
          pointRadius: 0,
          fill: false
        }
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        y: {
          min: 50,
          max: 100,
          grid: { color: "#1c2430" },
          ticks: { color: "#8492a6" }
        },
        x: {
          grid: { color: "#1c2430" },
          ticks: { color: "#8492a6" }
        }
      },
      plugins: {
        legend: {
          labels: { color: "#e2e8f0", font: { size: 11 } }
        }
      }
    }
  });
}

