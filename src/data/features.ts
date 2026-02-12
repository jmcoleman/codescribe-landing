// Features data for landing page
// Source: Validated against main app codebase

export interface Feature {
  title: string;
  description: string;
  features: string[];
}

export const features: Feature[] = [
  {
    title: "Quality Intelligence",
    description: "AI-generated docs with 0-100 quality scoring across 5 criteria. Get actionable feedback to ensure professional documentation every time.",
    features: [
      "5-criteria quality scoring (Overview, Installation, Usage, API, Structure)",
      "Letter grades (A-F) with improvement suggestions",
      "Doc-type specific scoring (README, API, OpenAPI, JSDocs, Architecture)",
      "Real-time streaming with progress feedback"
    ]
  },
  {
    title: "Multi-File Project Analysis",
    description: "Analyze entire projects, not just individual files. Batch processing, workspace management, and architecture visualization.",
    features: [
      "Multi-file workspace with session persistence",
      "Batch generation across multiple files",
      "Cross-file dependency understanding",
      "Mermaid architecture diagram generation"
    ]
  },
  {
    title: "GitHub Integration",
    description: "Native GitHub workflow with public and private repository support. Branch switching, tree browsing, and direct import.",
    features: [
      "Public and private repository access",
      "Branch switching with file preview",
      "Progressive file tree loading",
      "OAuth-based secure authentication"
    ]
  },
  {
    title: "Enterprise-Ready Security",
    description: "Zero code retention, sensitive data detection, and audit logging. Built for teams that need governance and control.",
    features: [
      "Zero code retention (in-memory processing only)",
      "Sensitive data detection: PHI, PII, credentials, API keys, and more",
      "AES-256-GCM encryption for sensitive data",
      "Comprehensive audit logging (Enterprise tier)"
    ]
  }
];
