// Pricing data for landing page
// Source: client/src/components/PricingPage.jsx (validated against actual pricing page)

export interface PricingTier {
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  cta: string;
  ctaLink: string;
  highlight: boolean;
  annualPrice?: string;
  annualTotal?: string;
  savings?: string;
  note?: string;
}

export const pricingTiers: PricingTier[] = [
  {
    name: "Free",
    price: "$0",
    period: "forever",
    description: "Perfect for trying out CodeScribe AI",
    features: [
      "10 docs/month",
      "3 docs/day",
      "Multi-language code & format support",
      "Quality scoring",
      "Public GitHub repos",
      "Sensitive data detection",
      "Community support"
    ],
    cta: "Start Free",
    ctaLink: "https://app.codescribeai.com/signup",
    highlight: false
  },
  {
    name: "Pro",
    price: "$49",
    period: "per month",
    description: "For professional developers",
    features: [
      "200 docs/month",
      "40 docs/day",
      "Multi-language code & format support",
      "Quality scoring",
      "Priority processing",
      "Multi-file & batch generation",
      "Generation history✨",
      "Public GitHub repos",
      "Private GitHub repos✨",
      "Sensitive data detection",
      "Email support"
    ],
    cta: "Start Free Trial",
    ctaLink: "https://app.codescribeai.com/signup?plan=pro",
    highlight: true,
    annualPrice: "$41/month",
    annualTotal: "$492/year",
    savings: "Save 17%"
  },
  {
    name: "Team",
    price: "$199",
    period: "per month",
    description: "For development teams up to 5",
    features: [
      "Up to 5 team members",
      "1,000 docs/month",
      "200 docs/day",
      "Multi-language code & format support",
      "Quality scoring",
      "Highest priority",
      "Multi-file & batch generation",
      "Generation history",
      "Public GitHub repos",
      "Private GitHub repos",
      "Sensitive data detection",
      "API access¹",
      "Priority support"
    ],
    cta: "Contact Sales",
    ctaLink: "mailto:sales@codescribeai.com",
    highlight: false,
    annualPrice: "$165/month",
    annualTotal: "$1,980/year",
    savings: "Save 17%"
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "pricing",
    description: "Advanced security & compliance",
    features: [
      "Unlimited documents",
      "Unlimited users",
      "Multi-language code & format support",
      "Quality scoring",
      "Multi-file & batch generation",
      "Generation history",
      "Public GitHub repos",
      "Private GitHub repos",
      "Sensitive data detection",
      "API access¹",
      "Data sanitization workflow✨",
      "Audit logging✨",
      "Compliance-ready safeguards²",
      "Priority enterprise support"
    ],
    cta: "Contact Sales",
    ctaLink: "mailto:sales@codescribeai.com",
    highlight: false
  }
];

export const pricingNotes = {
  allTiersInclude: "All 16 languages • 4 doc types • Real-time streaming • Quality scoring",
  comingSoon: "¹ These features are coming soon",
  compliance: "² Includes HIPAA-aware workflows for healthcare customers, BAA available upon request.",
  dataPrivacy: "All tiers include zero code retention. Code is processed in-memory only."
};
