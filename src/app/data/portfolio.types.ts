export type Lang = 'en' | 'de';
export type Theme = 'light' | 'dark';

export interface NavLink {
  id: string;
  href: string;
}

export interface Fact {
  k: string;
  v: string;
}

export interface AboutContent {
  band: string;
  caption: string;
  photoFallback: string;
  paras: string[];
  facts: Fact[];
  cv: string;
  cvUnavailable: string;
  touch: string;
}

export interface ExperienceItem {
  role: string;
  org: string;
  dates: string;
  bullets: string[];
  start: number;
  end: number;
}

export interface ExperienceContent {
  band: string;
  items: ExperienceItem[];
}

export interface EducationItem {
  dates: string;
  degree: string;
  school: string;
  note: string;
  grade: string;
}

export interface EducationContent {
  band: string;
  items: EducationItem[];
}

export interface PublicationItem {
  n: string;
  kind: string;
  venue: string;
  title: string;
  detail: string;
  doi: string;
  href: string;
}

export interface PublicationsContent {
  band: string;
  items: PublicationItem[];
}

export interface ProjectItem {
  slot: string;
  status: string;
  title: string;
  desc: string;
  tags: string[];
}

export interface ProjectsContent {
  band: string;
  note: string;
  imgFallback: string;
  items: ProjectItem[];
}

export interface LeadershipItem {
  dates: string;
  role: string;
  org: string;
  note: string;
}

export interface LeadershipContent {
  band: string;
  items: LeadershipItem[];
}

export interface SkillGroup {
  title: string;
  items: string[];
}

export interface LanguageSkill {
  name: string;
  level: string;
  pct: string;
}

export interface SkillsContent {
  band: string;
  groups: SkillGroup[];
  langTitle: string;
  langs: LanguageSkill[];
}

export interface ContactItem {
  k: string;
  v: string;
  href: string;
}

export interface ContactContent {
  band: string;
  line: string;
  items: ContactItem[];
}

export interface HeroContent {
  eyebrow: string;
  title: string;
  tagline: string;
  cta1: string;
  cta2: string;
}

export interface PortfolioContent {
  navRole: string;
  themeLabel: string;
  menuLabel: string;
  footer: string;
  hero: HeroContent;
  about: AboutContent;
  exp: ExperienceContent;
  edu: EducationContent;
  pubs: PublicationsContent;
  projects: ProjectsContent;
  lead: LeadershipContent;
  skills: SkillsContent;
  contact: ContactContent;
}
