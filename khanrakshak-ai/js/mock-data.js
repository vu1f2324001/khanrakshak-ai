/**
 * KHANRAKSHAK AI - REALISTIC MOCK DATASET
 * Monitored Mines: 42 Indian PSU/Commercial Coal Mines
 */

const KHANRAKSHAK_DATA = {
  stats: {
    totalMines: 42,
    complianceRate: 87.4,
    highRiskMinesCount: 7,
    openActionsCount: 23,
    overdueItemsCount: 9,
    criticalAlertsCount: 3
  },

  mines: [
    {
      id: "MINE-JH-0021",
      name: "Mine B (Jharia Seam 4)",
      company: "Bharat Coking Coal Limited (BCCL)",
      location: "Dhanbad, Jharkhand",
      region: "Jharkhand",
      lat: 23.7957,
      lng: 86.4304,
      compliance: 71,
      safety: 64,
      environment: 88,
      labour: 91,
      contractorRisk: 78,
      operationalRisk: 69,
      openIssues: 12,
      riskScore: 82,
      status: "HIGH",
      whyHighRisk: [
        "3 unresolved critical safety observations on haulage inclines",
        "Statutory Environmental Dust log overdue by 6 days",
        "4 recurring PPE violations detected by vision feed",
        "Severe contractor worker muster-roll anomaly detected (53 worker discrepancy)",
        "Safety inspection latency exceeded 30-day mandate"
      ]
    },
    {
      id: "MINE-OD-0014",
      name: "Mine F (Talcher Deep OCP)",
      company: "Mahanadi Coalfields Limited (MCL)",
      location: "Angul, Odisha",
      region: "Odisha",
      lat: 20.9509,
      lng: 85.2165,
      compliance: 68,
      safety: 72,
      environment: 79,
      labour: 85,
      contractorRisk: 74,
      operationalRisk: 70,
      openIssues: 8,
      riskScore: 76,
      status: "HIGH",
      whyHighRisk: [
        "Heavy earthmoving machinery proximity radar faults",
        "Delayed water runoff sump maintenance report",
        "Contractor operator certification expired"
      ]
    },
    {
      id: "MINE-MH-0008",
      name: "Mine A (Nagpur Umrer)",
      company: "Western Coalfields Limited (WCL)",
      location: "Nagpur, Maharashtra",
      region: "Maharashtra",
      lat: 20.8546,
      lng: 79.3262,
      compliance: 94,
      safety: 91,
      environment: 95,
      labour: 96,
      contractorRisk: 22,
      operationalRisk: 18,
      openIssues: 2,
      riskScore: 18,
      status: "LOW",
      whyHighRisk: ["Operating within full DGMS standard tolerances"]
    },
    {
      id: "MINE-CG-0033",
      name: "Mine K (Gevra Mega Pit)",
      company: "South Eastern Coalfields (SECL)",
      location: "Korba, Chhattisgarh",
      region: "Chhattisgarh",
      lat: 22.3595,
      lng: 82.7501,
      compliance: 83,
      safety: 79,
      environment: 80,
      labour: 89,
      contractorRisk: 61,
      operationalRisk: 58,
      openIssues: 5,
      riskScore: 61,
      status: "MEDIUM",
      whyHighRisk: ["Dust particulate levels near upper threshold in summer months"]
    },
    {
      id: "MINE-WB-0005",
      name: "Mine D (Raniganj Underbed)",
      company: "Eastern Coalfields Limited (ECL)",
      location: "Asansol, West Bengal",
      region: "West Bengal",
      lat: 23.6889,
      lng: 86.9661,
      compliance: 62,
      safety: 58,
      environment: 70,
      labour: 74,
      contractorRisk: 82,
      operationalRisk: 79,
      openIssues: 14,
      riskScore: 86,
      status: "CRITICAL",
      whyHighRisk: [
        "Methane drainage pressure telemetry offline",
        "Sub-surface seepage pumps overdue overhaul",
        "Multiple worker grievance complaints logged"
      ]
    },
    {
      id: "MINE-MP-0012",
      name: "Mine M (Singrauli Open)",
      company: "Northern Coalfields Limited (NCL)",
      location: "Singrauli, Madhya Pradesh",
      region: "Madhya Pradesh",
      lat: 24.1997,
      lng: 82.6644,
      compliance: 89,
      safety: 85,
      environment: 92,
      labour: 94,
      contractorRisk: 34,
      operationalRisk: 30,
      openIssues: 3,
      riskScore: 32,
      status: "LOW",
      whyHighRisk: ["Bench stability inspection upcoming within 10 days"]
    },
    {
      id: "MINE-TL-0019",
      name: "Mine G (Godavari Incline 7)",
      company: "Singareni Collieries (SCCL)",
      location: "Kothagudem, Telangana",
      region: "Telangana",
      lat: 17.5560,
      lng: 80.6175,
      compliance: 77,
      safety: 69,
      environment: 81,
      labour: 88,
      contractorRisk: 69,
      operationalRisk: 64,
      openIssues: 7,
      riskScore: 71,
      status: "HIGH",
      whyHighRisk: ["Ventilation duct velocity dropped below DGMS circular limits"]
    }
  ],

  alerts: [
    {
      id: "ALT-901",
      severity: "CRITICAL",
      mine: "Mine B (Dhanbad)",
      title: "Risk score surged from 74 → 82",
      explanation: "Compound risk triggered by recurring PPE non-compliance & delayed gas sensor verification.",
      timestamp: "2 min ago"
    },
    {
      id: "ALT-902",
      severity: "HIGH",
      mine: "Mine F (Odisha)",
      title: "Statutory Environmental Report Overdue",
      explanation: "Air & Water quality run-off report past 6-day grace period under DGMS Reg 45.",
      timestamp: "18 min ago"
    },
    {
      id: "ALT-903",
      severity: "HIGH",
      mine: "Mine B (Dhanbad)",
      title: "Contractor Attendance Discrepancy (53 Workers)",
      explanation: "Muster roll claims 180 underground workers; biometric turnover scanner count shows 127.",
      timestamp: "1 hour ago"
    },
    {
      id: "ALT-904",
      severity: "MEDIUM",
      mine: "Mine K (Korba)",
      title: "Statutory Inspection Due Tomorrow",
      explanation: "DGMS Pit No. 4 safety review deadline expires in 24 hours.",
      timestamp: "3 hours ago"
    }
  ],

  contractors: [
    {
      name: "Shivani Infra & Earthmovers",
      mine: "Mine B (Dhanbad)",
      workersReported: 180,
      actualBiometric: 127,
      attendanceRate: 70.5,
      safetyViolations: 17,
      repeatViolations: 6,
      riskScore: 82,
      status: "HIGH"
    },
    {
      name: "Kalinga Mining Consortium",
      mine: "Mine F (Odisha)",
      workersReported: 310,
      actualBiometric: 298,
      attendanceRate: 96.1,
      safetyViolations: 4,
      repeatViolations: 1,
      riskScore: 35,
      status: "LOW"
    },
    {
      name: "Singrauli Haulage Logistics",
      mine: "Mine M (Singrauli)",
      workersReported: 140,
      actualBiometric: 138,
      attendanceRate: 98.5,
      safetyViolations: 2,
      repeatViolations: 0,
      riskScore: 19,
      status: "LOW"
    },
    {
      name: "Deccan Underground Drillers",
      mine: "Mine G (Telangana)",
      workersReported: 220,
      actualBiometric: 195,
      attendanceRate: 88.6,
      safetyViolations: 11,
      repeatViolations: 4,
      riskScore: 74,
      status: "HIGH"
    }
  ],

  complianceRegistry: [
    {
      title: "DGMS Methane Gas Drainage Calibration",
      category: "Safety",
      mine: "Mine B (Dhanbad)",
      dueDate: "2026-03-08",
      status: "OVERDUE",
      risk: "CRITICAL",
      officer: "A. K. Sengupta"
    },
    {
      title: "Quarterly Ambient Dust Particulate Filing",
      category: "Environment",
      mine: "Mine B (Dhanbad)",
      dueDate: "2026-03-04",
      status: "OVERDUE",
      risk: "HIGH",
      officer: "S. Roy"
    },
    {
      title: "Contractor Shift Biometric Sync Audit",
      category: "Labour",
      mine: "Mine B (Dhanbad)",
      dueDate: "2026-03-12",
      status: "AT RISK",
      risk: "HIGH",
      officer: "R. P. Mishra"
    },
    {
      title: "Emergency Incline Haulage Brake Overhaul",
      category: "Operations",
      mine: "Mine F (Odisha)",
      dueDate: "2026-03-15",
      status: "DUE SOON",
      risk: "MEDIUM",
      officer: "G. C. Pradhan"
    },
    {
      title: "DGMS Form IV Worker Health Screening",
      category: "Statutory",
      mine: "Mine A (Nagpur)",
      dueDate: "2026-03-29",
      status: "COMPLIANT",
      risk: "LOW",
      officer: "P. Deshmukh"
    }
  ],

  kanbanCards: [
    {
      id: "CAPA-401",
      title: "Conveyor Belt Section 4 Emergency Stop Non-Responsive",
      mine: "Mine B",
      priority: "P1 - CRITICAL",
      assigned: "R. Kumar (RSO)",
      due: "12 Hours",
      status: "ESCALATED"
    },
    {
      id: "CAPA-402",
      title: "Muster Roll Phantom Worker Verification",
      mine: "Mine B",
      priority: "P1 - CRITICAL",
      assigned: "V. Sharma (Vigilance)",
      due: "24 Hours",
      status: "ASSIGNED"
    },
    {
      id: "CAPA-403",
      title: "Incline 2 Computer Vision PPE Violation Fix",
      mine: "Mine B",
      priority: "P2 - HIGH",
      assigned: "K. Murmu (Safety)",
      due: "36 Hours",
      status: "IN_PROGRESS"
    },
    {
      id: "CAPA-404",
      title: "Quarterly Water Discharge Chemistry Test",
      mine: "Mine F",
      priority: "P3 - MEDIUM",
      assigned: "MCL Env Lead",
      due: "3 Days",
      status: "OPEN"
    },
    {
      id: "CAPA-405",
      title: "Substation Signage Replacement",
      mine: "Mine A",
      priority: "P4 - LOW",
      assigned: "Site Electrician",
      due: "Completed",
      status: "RESOLVED"
    }
  ]
};

