
import { ServicePackage } from './types';

export interface Testimonial {
  quote: string;
  author: string;
  role: string;
}

export const TESTIMONIALS: Testimonial[] = [
  {
    quote: "Working with Tegemea is one of the best decisions I've made for my business. The level of care, precision, and ownership they take is truly exceptional.",
    author: "James Watters",
    role: "Founder, Watters & Co"
  },
  {
    quote: "The peace of mind knowing that our operations are being handled by a professional who 'just gets it' is invaluable. It has allowed me to focus entirely on growth.",
    author: "Sarah Jenkins",
    role: "Principal Consultant"
  },
  {
    quote: "Tegemea doesn't just provide task support; they provide strategic infrastructure. They have become an indispensable part of our firm's daily success.",
    author: "Dr. Marcus Thorne",
    role: "Managing Director"
  },
  {
    quote: "A complete step-change from traditional virtual assistants. The professional standards and cultural alignment are exactly what we were looking for in the UK.",
    author: "Elena Rossi",
    role: "Legal Partner"
  }
];

export const PACKAGES: ServicePackage[] = [
  {
    id: 'core',
    name: 'Core Retainer',
    hoursPerMonth: '20 – 40 hours',
    rate: '£35 per hour',
    validity: 'Flexible over 8 weeks',
    minTerm: '6 months',
    description: 'A flexible retainer designed for small-to-medium businesses that need regular, dependable support without overcommitting hours.',
    bestFor: [
      'Managing inboxes, diaries, and documentation',
      'Light project support and operational assistance',
      'Moving away from ad-hoc help toward consistent delivery'
    ],
    whyWorks: 'Provides calm, reliable support that adapts to your workload without the pressure of rigid weekly allocations.'
  },
  {
    id: 'growth',
    name: 'Growth Retainer',
    hoursPerMonth: '60 – 80 hours',
    rate: '£33 per hour',
    validity: 'Monthly allocation',
    minTerm: '6 months',
    description: 'Designed for established businesses that require consistent, hands-on support and a higher level of ownership across operations.',
    bestFor: [
      'Delegating core admin and recurring operational tasks',
      'Supporting workflows and internal organisation',
      'Leaders who want dependable execution without constant direction'
    ],
    whyWorks: 'Creates operational stability, reduces decision fatigue, and ensures work is handled to a consistently high standard.'
  },
  {
    id: 'partnership',
    name: 'Partnership Retainer',
    hoursPerMonth: '100+ hours',
    rate: '£30 per hour',
    validity: 'Monthly allocation',
    minTerm: '6 months',
    description: 'Built for long-term, high-volume partnerships where Tegemea becomes a deeply embedded support function within your business.',
    bestFor: [
      'Businesses with significant operational volume',
      'Managing complex workloads across multiple workstreams',
      'Long-term engagements where trust and consistency are essential'
    ],
    whyWorks: 'Delivers scale without chaos — providing depth, reliability, and continuity as your business grows.'
  },
  {
    id: 'bespoke',
    name: 'Bespoke Team Support',
    hoursPerMonth: '150+ hours',
    rate: 'Bespoke Pricing',
    validity: 'Custom Engagement',
    minTerm: 'Custom',
    description: 'Designed for firms requiring a comprehensive, multi-disciplinary support function. We architect and manage a dedicated team of virtual assistants to handle complex operations.',
    bestFor: [
      'Businesses requiring multi-person redundancy and specialized skill sets',
      'Scaling firms with complex multi-territory operations',
      'Establishing a fully outsourced administrative or operational department'
    ],
    whyWorks: 'Provides institutional resilience and scalable capacity without the overhead of internal team management.'
  }
];

export const TRUST_POINTS = [
  {
    title: "UK-Based Excellence",
    description: "Every assistant is London-vetted, ensuring cultural alignment and professional standards."
  },
  {
    title: "Strategic Discretion",
    description: "Operating with the highest level of confidentiality and professional indemnity."
  },
  {
    title: "Long-Term Partners",
    description: "We don't do 'gigs'. We build operational infrastructure for years of growth."
  }
];
