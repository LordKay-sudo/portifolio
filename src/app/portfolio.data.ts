/**
 * Portfolio copy derived from CV (generic no-references resume / PDF).
 * Personal name, references, phone, email, and location are omitted for the public site.
 */

export const GITHUB_REPO_URL = 'https://github.com/LordKay-sudo/portifolio';

export const HERO_HEADLINE = 'Full-stack engineer';

export const HERO_SUBTITLE =
  'Angular · Spring · secure APIs · cloud & integrations';

export const SUMMARY =
  'Full-stack developer with 5+ years building and supporting enterprise web platforms using Spring Boot, Spring Data JPA, Hibernate, Angular, and relational databases. Delivers ERP modules, financial and operations workflows, and secure API-driven integrations across multiple domains—with solid backend architecture, frontend delivery, cloud-enabled deployments, and long-term production support.';

export interface SkillChip {
  readonly title: string;
  /** Official docs or home; omit for plain chips. */
  readonly link: string | null;
}

export const SKILL_CHIPS: readonly SkillChip[] = [
  { title: 'Java', link: 'https://dev.java' },
  { title: 'Spring Boot', link: 'https://spring.io/projects/spring-boot' },
  { title: 'Spring Security', link: 'https://spring.io/projects/spring-security' },
  { title: 'Spring Data / JPA', link: 'https://spring.io/projects/spring-data-jpa' },
  { title: 'REST APIs', link: null },
  { title: 'Angular', link: 'https://angular.dev' },
  { title: 'TypeScript', link: 'https://www.typescriptlang.org' },
  { title: 'HTML / CSS', link: null },
  { title: 'Angular Material', link: 'https://material.angular.dev' },
  { title: 'MySQL', link: 'https://www.mysql.com' },
  { title: 'PostgreSQL', link: 'https://www.postgresql.org' },
  { title: 'MongoDB', link: 'https://www.mongodb.com' },
  { title: 'Flyway', link: 'https://flywaydb.org' },
  { title: 'Amazon Bedrock', link: 'https://aws.amazon.com/bedrock/' },
  { title: 'Knowledge Bases & RAG', link: 'https://aws.amazon.com/bedrock/knowledge-bases/' },
  { title: 'Spring AI', link: 'https://spring.io/projects/spring-ai' },
  { title: 'AWS', link: 'https://aws.amazon.com' },
  { title: 'GCP', link: 'https://cloud.google.com' },
  { title: 'Maven', link: 'https://maven.apache.org' },
  { title: 'Git', link: 'https://git-scm.com' },
  { title: 'Jenkins', link: 'https://www.jenkins.io' },
  { title: 'Linux / Windows ops', link: null },
  { title: 'Python', link: 'https://www.python.org' },
];

/** Selected projects — aligned with generic resume (PDF) “Selected Projects”. */
export interface SelectedProject {
  readonly title: string;
  readonly description: string;
  /** Short labels for the card ribbon (visual only). */
  readonly tags: readonly string[];
  /** Larger “feature” tiles on wide screens when true. */
  readonly featured?: boolean;
}

export const SELECTED_PROJECTS: readonly SelectedProject[] = [
  {
    title: 'Order-to-cash & procure-to-pay',
    description:
      'ERP flows for sales and purchase orders—approvals, status traceability, and operational controls in live environments.',
    tags: ['ERP', 'Workflows'],
    featured: true,
  },
  {
    title: 'Document-integrated transactions',
    description:
      'Order and invoice upload paths tied to approval stages, compliance records, and audit-ready history.',
    tags: ['Documents', 'Compliance'],
  },
  {
    title: 'Approval & notification automation',
    description:
      'Role-based approval pipelines with event-driven email notifications, escalation visibility, and controlled action paths.',
    tags: ['Automation', 'RBAC'],
  },
  {
    title: 'Cloud-connected integrations',
    description:
      'Enterprise workflows wired to GCP-connected components for secure data exchange, automation, and reporting continuity.',
    tags: ['GCP', 'Integrations'],
  },
  {
    title: 'Logistics & fleet operations',
    description:
      'Process modules for dispatch, tracking visibility, and multi-step transport operations in production.',
    tags: ['Logistics', 'Operations'],
  },
  {
    title: 'RFID & NFC-enabled workflows',
    description:
      'RFID and NFC capture integrated into logistics and event-style operations for faster tracking and cleaner data.',
    tags: ['RFID', 'NFC'],
  },
  {
    title: 'Hardware-assisted inventory',
    description:
      'Stock workflows linked to readers, scanners, and weight-linked stations for reliable movement verification.',
    tags: ['Hardware', 'Inventory'],
  },
  {
    title: 'Multi-tenant operational platforms',
    description:
      'Configurable, tenant-aware modules with role-based access and process separation across organizations.',
    tags: ['Multi-tenant', 'SaaS'],
    featured: true,
  },
  {
    title: 'Card processing & monitoring',
    description:
      'Production support, troubleshooting, and iterative improvements for card transaction processing and monitoring.',
    tags: ['Payments', 'Support'],
  },
];

export interface ExperienceItem {
  readonly title: string;
  readonly period: string;
  readonly context: string;
  readonly bullets: readonly string[];
}

export const EXPERIENCE: readonly ExperienceItem[] = [
  {
    title: 'Full-stack software developer',
    period: 'Oct 2020 – present',
    context: 'Enterprise product & services team',
    bullets: [
      'Design, develop, implement, and support full-stack applications with Spring Boot and Angular in production.',
      'Build and maintain secure REST APIs, business services, and data access with Spring Security, JPA, and Hibernate.',
      'Deliver ERP and workflow solutions for accounting, asset and property management, logistics, and stock control.',
      'Implement database schema evolution and release safety using Flyway-driven migrations.',
      'Integrate AI and OCR capabilities into enterprise document workflows and business process automation.',
      'Support cloud-connected solutions on AWS and GCP; performance tuning, defect resolution, and feature work in live systems.',
    ],
  },
  {
    title: 'Marketing & IT intern',
    period: 'Jan 2014 – Jan 2015',
    context: 'Higher-education institution',
    bullets: [
      'Website and social content operations.',
      'System analysis, design, and implementation support for internal IT projects.',
      'IT support across Linux and Windows; software and hardware setup.',
    ],
  },
];

export const EDUCATION: readonly { line: string; detail: string }[] = [
  {
    line: "Bachelor's (Honours), Business Management & Information Technology",
    detail: '2012 – 2015',
  },
  {
    line: 'Advanced Level — Mathematics & Physics',
    detail: '2005 – 2010',
  },
];
