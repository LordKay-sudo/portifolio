/**
 * Portfolio copy derived from CV (SaaS / full-stack focus).
 * Personal name, references, phone, email, and location are omitted for the public site.
 */

export const GITHUB_REPO_URL = 'https://github.com/LordKay-sudo/portifolio';

export const HERO_HEADLINE = 'Senior full-stack engineer';

export const HERO_SUBTITLE =
  'Angular · Spring · secure APIs · cloud & GenAI integrations';

export const SUMMARY =
  'Software engineer with 5+ years building and supporting production web platforms using Spring Boot, Spring Data JPA, Hibernate, Angular, and relational databases. Delivers secure API-driven services, ERP and operations workflows, and cloud-connected integrations on AWS and GCP. Uses AI-assisted development across implementation, testing, debugging, and documentation. Experience with retrieval-augmented knowledge flows: document ingestion with OCR, vector storage, knowledge bases on Amazon Bedrock, and RAG with Claude for grounded answers over organizational content.';

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
      'Design, build, and support full-stack applications with Spring Boot and Angular in production.',
      'Secure REST APIs, business services, and persistence with Spring Security, JPA, and Hibernate.',
      'ERP and workflow solutions: accounting, asset and property management, logistics, and stock control.',
      'Schema evolution and release safety with Flyway-driven migrations.',
      'Knowledge platform work: OCR pipelines, text extraction, vector storage, Bedrock knowledge bases, and RAG with Claude over ingested documents.',
      'Cloud integrations on AWS and GCP; performance tuning, defect resolution, and continuous delivery with AI-assisted tooling where appropriate.',
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
