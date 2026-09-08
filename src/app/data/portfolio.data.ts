import { Lang, NavLink, PortfolioContent } from './portfolio.types';

export const OWNER = {
  name: 'Shravya Achanala',
  location: 'Berlin, Germany',
  universityEmail: 'achanala@tu-berlin.de',
  personalEmail: 'sachanala24@gmail.com',
  linkedin: 'https://www.linkedin.com/in/shravyaachanala-861039217/'
};

export const NAV_LINKS: NavLink[] = [
  { id: 'about', href: '#about' },
  { id: 'experience', href: '#experience' },
  { id: 'education', href: '#education' },
  { id: 'publications', href: '#publications' },
  { id: 'projects', href: '#projects' },
  { id: 'leadership', href: '#leadership' },
  { id: 'skills', href: '#skills' },
  { id: 'contact', href: '#contact' }
];

export const NAV_LABELS: Record<Lang, string[]> = {
  en: ['About', 'Experience', 'Education', 'Publications', 'Projects', 'Leadership', 'Skills', 'Contact'],
  de: ['Über mich', 'Erfahrung', 'Ausbildung', 'Publikationen', 'Projekte', 'Engagement', 'Kenntnisse', 'Kontakt']
};

export const TIMELINE_YEARS = [2022, 2023, 2024, 2025, 2026];
const SPAN_START = 2022;
const SPAN_END = 2027;

/** Converts a [start, end] year range into left/width percentages for the experience timeline bar. */
export function timelineBar(start: number, end: number): { left: string; width: string } {
  const left = ((start - SPAN_START) / (SPAN_END - SPAN_START)) * 100;
  const width = ((end - start) / (SPAN_END - SPAN_START)) * 100;
  return { left: `${left.toFixed(2)}%`, width: `${Math.max(width, 1.2).toFixed(2)}%` };
}

const EN: PortfolioContent = {
  navRole: 'Urban & Regional Planner · Berlin',
  themeLabel: 'Switch theme',
  menuLabel: 'Menu',
  footer: 'M.Sc. Environmental Planning · TU Berlin',
  hero: {
    eyebrow: '52.5170° N · 13.3889° E · Berlin',
    title: 'M.Sc. Environmental Planning, Technische Universität Berlin',
    tagline:
      'Urban and regional planner working across GIS analysis, participatory urban development and climate adaptation, with one question underneath all of it: what makes a city healthy and livable for the people already living in it?',
    cta1: 'Get in touch',
    cta2: 'See experience'
  },
  about: {
    band: 'About',
    caption: 'Berlin, 2026',
    photoFallback: 'Portrait coming soon',
    paras: [
      'I am an urban and regional planner working at the intersection of spatial analysis and public participation. My training spans land-use planning, GIS analysis, participatory urban development and climate adaptation.',
      'Currently I am a student assistant at the Institute of Urban and Regional Planning at TU Berlin, where I am completing an M.Sc. in Environmental Planning. Before Berlin I digitized planning and zoning regulation for jurisdictions across the United States and Australia, and built parcel-level GIS layers for land use and planning requirements.',
      "My Bachelor's thesis took a participative approach to inner-city regeneration in Anantapur, India. I continue this work as a conference paper on community participation in regeneration processes."
    ],
    facts: [
      { k: 'Based in', v: 'Berlin, Germany' },
      { k: 'Focus', v: 'Urban & regional planning, GIS, climate adaptation' },
      { k: 'Languages', v: 'English C1 · German B2 · Telugu native' }
    ],
    cv: 'Download CV',
    cvUnavailable: 'CV coming soon',
    touch: 'Get in touch'
  },
  exp: {
    band: 'Experience',
    items: [
      {
        role: 'Student Assistant',
        org: 'Institute of Urban and Regional Planning, TU Berlin',
        dates: 'Mar 2025–present',
        bullets: ['Research and teaching support at the Institute of Urban and Regional Planning.'],
        start: 2025.17,
        end: 2026.75
      },
      {
        role: 'Urban Planner & GIS Analyst',
        org: 'Canibuild, Sydney (remote, full-time)',
        dates: 'May 2024–Mar 2025',
        bullets: [
          'Digitized planning and zoning regulations from jurisdictions across the United States and Australia.',
          'Built parcel-level GIS layers for land use and planning requirements.'
        ],
        start: 2024.33,
        end: 2025.25
      },
      {
        role: 'GIS Intern',
        org: 'Skygroup, Bangalore',
        dates: 'May–Jul 2023',
        bullets: [
          'Validated land-use and building data through field surveys.',
          'Updated road network data and estimated traffic volumes.'
        ],
        start: 2023.33,
        end: 2023.58
      },
      {
        role: 'Urban Planning Intern',
        org: 'DTCP Mangalagiri, Andhra Pradesh',
        dates: 'Jun–Jul 2022',
        bullets: [
          'Contributed to a RURBAN project report and its spatial analyses.',
          'Prepared planning recommendations for the state government.',
          'Reviewed accessibility compliance of public buildings.'
        ],
        start: 2022.42,
        end: 2022.58
      }
    ]
  },
  edu: {
    band: 'Education',
    items: [
      {
        dates: 'Oct 2025–present',
        degree: 'M.Sc. Environmental Planning',
        school: 'Technische Universität Berlin',
        note: 'Current focus: participatory urban development and climate adaptation.',
        grade: 'GPA 1.5'
      },
      {
        dates: 'Apr–Sep 2025',
        degree: 'M.Sc. Environmental Planning and Territorial Development',
        school: 'Leibniz Universität Hannover',
        note: 'One semester completed before transferring to TU Berlin.',
        grade: 'GPA 1.7'
      },
      {
        dates: 'Dec 2020–Jun 2024',
        degree: 'Bachelor of Planning (Urban and Regional Planning)',
        school: 'School of Planning and Architecture, Vijayawada, India',
        note: 'Silver medalist, 2nd rank. Thesis: “A Participative Approach toward Inner City Regeneration: A Case Study of Anantapur Municipal Corporation”.',
        grade: '9.08 / 10'
      }
    ]
  },
  pubs: {
    band: 'Publications & Conference',
    items: [
      {
        n: '01',
        kind: 'Published',
        venue: 'ICE Proceedings: Engineering Sustainability',
        title: 'GIS-based drought assessment for water-sensitive urban planning in Anantapur district',
        detail: 'Peer-reviewed journal article assessing drought exposure as an input to water-sensitive planning at district scale.',
        doi: 'doi.org/10.1680/jenes.24.00103',
        href: 'https://doi.org/10.1680/jenes.24.00103'
      },
      {
        n: '02',
        kind: 'Contribution',
        venue: 'LUH institutional repository',
        title: 'Obstacles for livable cities in Greece and Germany',
        detail: 'Contribution to the LEGO® Serious Play Summer Academy, Leibniz Universität Hannover.',
        doi: 'doi.org/10.15488/19865',
        href: 'https://doi.org/10.15488/19865'
      },
      {
        n: '03',
        kind: 'Accepted',
        venue: 'IEREK Publication · Jan 2026',
        title: 'Community Participation in Inner City Regeneration: A Case Study of Anantapur',
        detail: 'Accepted for the 6th International Conference on Urban Regeneration and Sustainability (URS).',
        doi: '',
        href: ''
      },
      {
        n: '04',
        kind: 'Conference talk',
        venue: 'Sapienza University of Rome · 25–27 Nov 2025',
        title: 'Community Participation in Inner City Regeneration',
        detail: 'Presented at the 6th URS Conference on urban regeneration and sustainability.',
        doi: '',
        href: ''
      }
    ]
  },
  projects: {
    band: 'Projects',
    note: 'Selected academic and competition work from the Bachelor of Planning, spanning participatory regeneration, climate-resilient coastal planning, regional transportation and citywide slum upgrading.',
    imgFallback: 'Image coming soon',
    items: [
      {
        slot: 'proj1',
        status: 'Undergraduate thesis',
        title: 'A Participatory Approach Towards Inner City Regeneration',
        desc: 'Bridging the gap between urban decay and renewal by empowering landowners in redevelopment processes, a neighbourhood-scale case study of Anantapur’s historic core (18 ha).',
        tags: ['Participatory planning', 'Land management', 'Field survey']
      },
      {
        slot: 'proj2',
        status: 'Competition entry',
        title: 'Coastal Shield',
        desc: 'Enhancing food security during floods by reinvigorating nature-based solutions (Pokkali-prawn rotational farming and mangrove plantation) along Kochi’s coastal region (23,030 ha).',
        tags: ['Climate adaptation', 'Coastal resilience', 'Nature-based solutions']
      },
      {
        slot: 'proj3',
        status: 'Studio project',
        title: 'Seamless Commute',
        desc: 'A regional development plan for swifter, more effective transportation along national and state highways in Tiruchirappalli district (4,40,383 ha).',
        tags: ['Regional planning', 'Transportation', 'Traffic analysis']
      },
      {
        slot: 'proj4',
        status: 'Studio project',
        title: 'Urban Uplift',
        desc: 'Targeted slum-based strategies and redevelopment interventions to improve housing and infrastructure across Vijayawada (6,188 ha): Master Plan 2041.',
        tags: ['Informal settlements', 'Housing', 'Master planning']
      }
    ]
  },
  lead: {
    band: 'Leadership & Volunteering',
    items: [
      {
        dates: 'Since Aug 2026',
        role: 'Weekly visiting companion',
        org: 'Evangelisches Johannastift, Berlin (LeNa project)',
        note: 'Weekly visits to an 89-year-old resident as part of the LeNa neighbourhood companionship project.'
      },
      {
        dates: 'Apr 2022–May 2023',
        role: 'National Web & Social Media Lead',
        org: 'NOSPlan (Organization of Students of Planning)',
        note: 'Co-organized and moderated the annual NOSPlan Convention at Lovely Professional University, Phagwara.'
      },
      { dates: 'Apr 2021–Apr 2022', role: 'Social Media Manager', org: 'NOSPlan', note: '' },
      { dates: 'Jan–Mar 2022', role: 'Social Media Manager', org: 'Niswarth (The Selfless NGO)', note: '' },
      { dates: 'Nov 2020–Mar 2021', role: 'Graphic Designer & Social Media Coordinator', org: 'NOSPlan', note: '' }
    ]
  },
  skills: {
    band: 'Skills',
    groups: [
      { title: 'GIS / Geospatial', items: ['ArcGIS Pro', 'QGIS', 'Google Earth Engine'] },
      {
        title: 'Data & planning analysis',
        items: ['MS Office', 'Google Sheets / Docs', 'TestFit', 'Ebsilon', 'DEEP (Desalination Economic Evaluation Program)', 'Basic R']
      },
      { title: 'Presentation & visualization', items: ['MS PowerPoint', 'Canva', 'Miro Board'] }
    ],
    langTitle: 'Languages',
    langs: [
      { name: 'English', level: 'C1', pct: '88%' },
      { name: 'German', level: 'B2', pct: '68%' },
      { name: 'Telugu', level: 'Native', pct: '100%' }
    ]
  },
  contact: {
    band: 'Contact',
    line: 'Open to planning practice, research and collaboration in Berlin and beyond.',
    items: [
      { k: 'University email', v: OWNER.universityEmail, href: `mailto:${OWNER.universityEmail}` },
      { k: 'Personal email', v: OWNER.personalEmail, href: `mailto:${OWNER.personalEmail}` },
      { k: 'LinkedIn', v: 'linkedin.com/in/shravyaachanala-861039217', href: OWNER.linkedin }
    ]
  }
};

const DE: PortfolioContent = {
  navRole: 'Stadt- & Regionalplanerin · Berlin',
  themeLabel: 'Darstellung wechseln',
  menuLabel: 'Menü',
  footer: 'M.Sc. Umweltplanung · TU Berlin',
  hero: {
    eyebrow: '52.5170° N · 13.3889° O · Berlin',
    title: 'M.Sc. Umweltplanung, Technische Universität Berlin',
    tagline:
      'Stadt- und Regionalplanerin mit Schwerpunkten in GIS-Analyse, partizipativer Stadtentwicklung und Klimaanpassung, mit einer Frage im Hintergrund: Was macht eine Stadt für die Menschen, die schon dort leben, gesund und lebenswert?',
    cta1: 'Kontakt aufnehmen',
    cta2: 'Erfahrung ansehen'
  },
  about: {
    band: 'Über mich',
    caption: 'Berlin, 2026',
    photoFallback: 'Porträt folgt in Kürze',
    paras: [
      'Ich bin Stadt- und Regionalplanerin und arbeite an der Schnittstelle von räumlicher Analyse und Bürgerbeteiligung. Meine Ausbildung umfasst Flächennutzungsplanung, GIS-Analyse, partizipative Stadtentwicklung und Klimaanpassung.',
      'Derzeit bin ich studentische Mitarbeiterin am Institut für Stadt- und Regionalplanung der TU Berlin und absolviere dort meinen M.Sc. Umweltplanung. Vor Berlin habe ich Planungs- und Baunutzungsvorschriften für Kommunen in den USA und Australien digitalisiert und GIS-Layer auf Flurstücksebene für Flächennutzung und Planungsanforderungen aufgebaut.',
      'Meine Bachelorarbeit verfolgte einen partizipativen Ansatz zur Innenstadterneuerung in Anantapur, Indien. Diese Arbeit führe ich als Konferenzbeitrag zur Bürgerbeteiligung in Erneuerungsprozessen weiter.'
    ],
    facts: [
      { k: 'Standort', v: 'Berlin, Deutschland' },
      { k: 'Schwerpunkte', v: 'Stadt- und Regionalplanung, GIS, Klimaanpassung' },
      { k: 'Sprachen', v: 'Englisch C1 · Deutsch B2 · Telugu Muttersprache' }
    ],
    cv: 'Lebenslauf herunterladen',
    cvUnavailable: 'Lebenslauf folgt in Kürze',
    touch: 'Kontakt aufnehmen'
  },
  exp: {
    band: 'Berufserfahrung',
    items: [
      {
        role: 'Studentische Mitarbeiterin',
        org: 'Institut für Stadt- und Regionalplanung, TU Berlin',
        dates: 'März 2025–heute',
        bullets: ['Unterstützung in Forschung und Lehre am Institut für Stadt- und Regionalplanung.'],
        start: 2025.17,
        end: 2026.75
      },
      {
        role: 'Stadtplanerin & GIS-Analystin',
        org: 'Canibuild, Sydney (remote, Vollzeit)',
        dates: 'Mai 2024–März 2025',
        bullets: [
          'Digitalisierung von Planungs- und Baunutzungsvorschriften für Kommunen in den USA und Australien.',
          'Aufbau von GIS-Layern auf Flurstücksebene für Flächennutzung und Planungsanforderungen.'
        ],
        start: 2024.33,
        end: 2025.25
      },
      {
        role: 'GIS-Praktikantin',
        org: 'Skygroup, Bangalore',
        dates: 'Mai–Juli 2023',
        bullets: [
          'Validierung von Flächennutzungs- und Gebäudedaten durch Felderhebungen.',
          'Aktualisierung des Straßennetzes und Abschätzung von Verkehrsmengen.'
        ],
        start: 2023.33,
        end: 2023.58
      },
      {
        role: 'Praktikantin Stadtplanung',
        org: 'DTCP Mangalagiri, Andhra Pradesh',
        dates: 'Juni–Juli 2022',
        bullets: [
          'Mitarbeit an einem RURBAN-Projektbericht und den zugehörigen räumlichen Analysen.',
          'Erarbeitung von Planungsempfehlungen für die Landesregierung.',
          'Prüfung öffentlicher Gebäude auf Barrierefreiheit.'
        ],
        start: 2022.42,
        end: 2022.58
      }
    ]
  },
  edu: {
    band: 'Ausbildung',
    items: [
      {
        dates: 'Okt. 2025–heute',
        degree: 'M.Sc. Umweltplanung',
        school: 'Technische Universität Berlin',
        note: 'Aktuelle Schwerpunkte: partizipative Stadtentwicklung und Klimaanpassung.',
        grade: 'Note 1,5'
      },
      {
        dates: 'Apr.–Sep. 2025',
        degree: 'M.Sc. Umweltplanung und Raumentwicklung',
        school: 'Leibniz Universität Hannover',
        note: 'Ein Semester absolviert, anschließend Wechsel an die TU Berlin.',
        grade: 'Note 1,7'
      },
      {
        dates: 'Dez. 2020–Juni 2024',
        degree: 'Bachelor of Planning (Stadt- und Regionalplanung)',
        school: 'School of Planning and Architecture, Vijayawada, Indien',
        note: 'Silbermedaille, 2. Platz des Jahrgangs. Abschlussarbeit: „A Participative Approach toward Inner City Regeneration: A Case Study of Anantapur Municipal Corporation“.',
        grade: '9,08 / 10'
      }
    ]
  },
  pubs: {
    band: 'Publikationen & Konferenz',
    items: [
      {
        n: '01',
        kind: 'Veröffentlicht',
        venue: 'ICE Proceedings: Engineering Sustainability',
        title: 'GIS-basierte Dürreanalyse für eine wassersensible Stadtplanung im Distrikt Anantapur',
        detail: 'Peer-Review-Fachartikel zur Bewertung der Dürreexposition als Grundlage wassersensibler Planung auf Distriktebene.',
        doi: 'doi.org/10.1680/jenes.24.00103',
        href: 'https://doi.org/10.1680/jenes.24.00103'
      },
      {
        n: '02',
        kind: 'Beitrag',
        venue: 'Repositorium der LUH',
        title: 'Hindernisse für lebenswerte Städte in Griechenland und Deutschland',
        detail: 'Beitrag zur LEGO® Serious Play Summer Academy, Leibniz Universität Hannover.',
        doi: 'doi.org/10.15488/19865',
        href: 'https://doi.org/10.15488/19865'
      },
      {
        n: '03',
        kind: 'Angenommen',
        venue: 'IEREK Publication · Jan. 2026',
        title: 'Bürgerbeteiligung in der Innenstadterneuerung: Fallstudie Anantapur',
        detail: 'Angenommen für die 6. Internationale Konferenz für Urban Regeneration and Sustainability (URS).',
        doi: '',
        href: ''
      },
      {
        n: '04',
        kind: 'Konferenzvortrag',
        venue: 'Sapienza Universität Rom · 25.–27. Nov. 2025',
        title: 'Bürgerbeteiligung in der Innenstadterneuerung',
        detail: 'Vortrag auf der 6. URS-Konferenz zu Stadterneuerung und Nachhaltigkeit.',
        doi: '',
        href: ''
      }
    ]
  },
  projects: {
    band: 'Projekte',
    note: 'Ausgewählte akademische und Wettbewerbsarbeiten aus dem Bachelor of Planning, von partizipativer Erneuerung über klimaresiliente Küstenplanung bis zu regionaler Verkehrsplanung und stadtweiten Slum-Aufwertungsstrategien.',
    imgFallback: 'Bild folgt in Kürze',
    items: [
      {
        slot: 'proj1',
        status: 'Bachelorarbeit',
        title: 'Ein partizipativer Ansatz zur Innenstadterneuerung',
        desc: 'Überbrückung der Kluft zwischen städtischem Verfall und Erneuerung durch die Einbindung von Grundstückseigentümern in Redevelopment-Prozesse, eine Fallstudie im historischen Kern von Anantapur (18 ha) auf Stadtteilebene.',
        tags: ['Partizipative Planung', 'Bodenmanagement', 'Felderhebung']
      },
      {
        slot: 'proj2',
        status: 'Wettbewerbsbeitrag',
        title: 'Coastal Shield',
        desc: 'Verbesserung der Ernährungssicherheit bei Überschwemmungen durch die Reaktivierung naturbasierter Lösungen (Pokkali-Garnelen-Wechselwirtschaft und Mangrovenaufforstung) entlang der Küstenregion von Kochi (23.030 ha).',
        tags: ['Klimaanpassung', 'Küstenresilienz', 'Naturbasierte Lösungen']
      },
      {
        slot: 'proj3',
        status: 'Studienprojekt',
        title: 'Seamless Commute',
        desc: 'Ein regionaler Entwicklungsplan für einen schnelleren, effizienteren Verkehr entlang der National- und Bundesstraßen im Distrikt Tiruchirappalli (4,40,383 ha).',
        tags: ['Regionalplanung', 'Verkehr', 'Verkehrsanalyse']
      },
      {
        slot: 'proj4',
        status: 'Studienprojekt',
        title: 'Urban Uplift',
        desc: 'Gezielte Strategien für Slumgebiete und Redevelopment-Maßnahmen zur Verbesserung von Wohnraum und Infrastruktur in Vijayawada (6.188 ha): Masterplan 2041.',
        tags: ['Informelle Siedlungen', 'Wohnen', 'Masterplanung']
      }
    ]
  },
  lead: {
    band: 'Engagement & Ehrenamt',
    items: [
      {
        dates: 'Seit Aug. 2026',
        role: 'Wöchentliche Besuchsbegleitung',
        org: 'Evangelisches Johannastift, Berlin (Projekt LeNa)',
        note: 'Wöchentliche Besuche bei einer 89-jährigen Bewohnerin im Rahmen des Nachbarschaftsprojekts LeNa.'
      },
      {
        dates: 'Apr. 2022–Mai 2023',
        role: 'National Web & Social Media Lead',
        org: 'NOSPlan (Organization of Students of Planning)',
        note: 'Mitorganisation und Moderation der jährlichen NOSPlan-Convention an der Lovely Professional University, Phagwara.'
      },
      { dates: 'Apr. 2021–Apr. 2022', role: 'Social Media Managerin', org: 'NOSPlan', note: '' },
      { dates: 'Jan.–März 2022', role: 'Social Media Managerin', org: 'Niswarth (The Selfless NGO)', note: '' },
      { dates: 'Nov. 2020–März 2021', role: 'Grafikdesignerin & Social-Media-Koordinatorin', org: 'NOSPlan', note: '' }
    ]
  },
  skills: {
    band: 'Kenntnisse',
    groups: [
      { title: 'GIS / Geodaten', items: ['ArcGIS Pro', 'QGIS', 'Google Earth Engine'] },
      {
        title: 'Daten- & Planungsanalyse',
        items: ['MS Office', 'Google Sheets / Docs', 'TestFit', 'Ebsilon', 'DEEP (Desalination Economic Evaluation Program)', 'Grundkenntnisse R']
      },
      { title: 'Präsentation & Visualisierung', items: ['MS PowerPoint', 'Canva', 'Miro Board'] }
    ],
    langTitle: 'Sprachen',
    langs: [
      { name: 'Englisch', level: 'C1', pct: '88%' },
      { name: 'Deutsch', level: 'B2', pct: '68%' },
      { name: 'Telugu', level: 'Muttersprache', pct: '100%' }
    ]
  },
  contact: {
    band: 'Kontakt',
    line: 'Offen für Planungspraxis, Forschung und Zusammenarbeit, in Berlin und darüber hinaus.',
    items: [
      { k: 'Universitäts-E-Mail', v: OWNER.universityEmail, href: `mailto:${OWNER.universityEmail}` },
      { k: 'Persönliche E-Mail', v: OWNER.personalEmail, href: `mailto:${OWNER.personalEmail}` },
      { k: 'LinkedIn', v: 'linkedin.com/in/shravyaachanala-861039217', href: OWNER.linkedin }
    ]
  }
};

export const CONTENT: Record<Lang, PortfolioContent> = { en: EN, de: DE };
