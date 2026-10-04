import { Lang, NavLink, PortfolioContent } from './portfolio.types';

export const OWNER = {
  name: 'Shravya Achanala',
  location: 'Berlin, Germany',
  universityEmail: 'achanala@tu-berlin.de',
  personalEmail: 'sachanala24@gmail.com',
  linkedin: 'https://www.linkedin.com/in/shravya-achanala-861039217/'
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
    tagline: 'Urban and Regional Planner, shaping cities that work for the people already living in them.',
    cta1: 'Get in touch',
    cta2: 'See experience'
  },
  about: {
    band: 'About',
    caption: 'Berlin, 2026',
    photoFallback: 'Portrait coming soon',
    paras: [
      'I am an Urban and Regional Planner, currently pursuing my M.Sc. in Environmental Planning at TU Berlin. My interests lie in spatial analysis, neighbourhood development and public participation, with a study focus spanning land-use planning, GIS analysis, participatory urban development and climate adaptation.',
      'Alongside my studies, I work as a student assistant at the Institute of Urban and Regional Planning at TU Berlin. Before moving to Germany, I worked as a GIS analyst digitizing planning and zoning regulations across the US and Australia.',
      "I moved to Germany in April 2025 and have been practicing my German ever since, working in restaurants, trying language tandems, and volunteering (you can read more about that further down this page). I'm highly motivated and a quick learner."
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
        note: 'Studied one semester here before transferring to TU Berlin.',
        grade: 'GPA 1.7'
      },
      {
        dates: 'Dec 2020–Jun 2024',
        degree: 'Bachelor of Planning (Urban and Regional Planning)',
        school: 'School of Planning and Architecture, Vijayawada, India',
        note: 'Silver medalist, 2nd rank. Thesis: “A Participative Approach toward Inner City Regeneration: A Case Study of Anantapur Municipal Corporation”.',
        grade: '9.08 / 10',
        gradeNote: '≈ 1.4 (German system)'
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
        kind: 'Presentation',
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
        dates: 'Since Sept 2026',
        role: 'Volunteer Event Support: Senior Social Afternoon',
        org: 'Die Freiwilligen im Unionhilfswerk, Charlottenburg-Wilmersdorf, Berlin',
        note: 'I support a monthly social afternoon for older adults with coffee, cake and dancing. My tasks include helping with the event setup, serving refreshments, welcoming participants and spending time in friendly conversation with them.'
      },
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
        items: ['MS Office', 'Google Sheets / Docs', 'TestFit', 'Ebsilon', 'DEEP (Desalination Economic Evaluation Program)']
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
    line: 'Open to working at planning offices, research and collaboration in Berlin and beyond.',
    items: [
      { k: 'University email', v: OWNER.universityEmail, href: `mailto:${OWNER.universityEmail}` },
      { k: 'Personal email', v: OWNER.personalEmail, href: `mailto:${OWNER.personalEmail}` },
      { k: 'LinkedIn', v: 'linkedin.com/in/shravya-achanala-861039217', href: OWNER.linkedin }
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
    tagline: 'Stadt- und Regionalplanerin, die Städte mitgestaltet, die für die Menschen funktionieren, die schon dort leben.',
    cta1: 'Kontakt aufnehmen',
    cta2: 'Erfahrung ansehen'
  },
  about: {
    band: 'Über mich',
    caption: 'Berlin, 2026',
    photoFallback: 'Porträt folgt in Kürze',
    paras: [
      'Ich bin Stadt- und Regionalplanerin und studiere derzeit meinen M.Sc. in Umweltplanung an der TU Berlin. Meine Interessen liegen in der räumlichen Analyse, der Nachbarschaftsentwicklung und der Bürgerbeteiligung, mit einem Studienschwerpunkt auf Flächennutzungsplanung, GIS-Analyse, partizipativer Stadtentwicklung und Klimaanpassung.',
      'Neben dem Studium arbeite ich als studentische Mitarbeiterin am Institut für Stadt- und Regionalplanung der TU Berlin. Vor meinem Umzug nach Deutschland war ich als GIS-Analystin tätig und digitalisierte Planungs- und Baunutzungsvorschriften in den USA und Australien.',
      'Ich bin im April 2025 nach Deutschland gezogen und übe seitdem mein Deutsch, unter anderem durch Arbeit in der Gastronomie, Sprachtandems und ehrenamtliches Engagement (mehr dazu weiter unten auf dieser Seite). Ich bin hochmotiviert und lerne schnell.'
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
        note: 'Ein Semester hier studiert, bevor ich an die TU Berlin gewechselt bin.',
        grade: 'Note 1,7'
      },
      {
        dates: 'Dez. 2020–Juni 2024',
        degree: 'Bachelor of Planning (Stadt- und Regionalplanung)',
        school: 'School of Planning and Architecture, Vijayawada, Indien',
        note: 'Silbermedaille, 2. Platz des Jahrgangs. Abschlussarbeit: „A Participative Approach toward Inner City Regeneration: A Case Study of Anantapur Municipal Corporation“.',
        grade: '9,08 / 10',
        gradeNote: '≈ 1,4 (deutsches System)'
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
        kind: 'Präsentation',
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
        dates: 'Seit Sept. 2026',
        role: 'Ehrenamtliche Unterstützung bei Seniorennachmittagen',
        org: 'Die Freiwilligen im Unionhilfswerk, Charlottenburg-Wilmersdorf, Berlin',
        note: 'Ich unterstütze einmal im Monat einen geselligen Seniorennachmittag mit Kaffee, Kuchen und Tanz. Zu meinen Aufgaben gehören die Vor- und Nachbereitung der Räumlichkeiten, das Servieren von Getränken und Kuchen, die Begrüßung der Teilnehmenden sowie persönliche Gespräche mit älteren Menschen.'
      },
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
        items: ['MS Office', 'Google Sheets / Docs', 'TestFit', 'Ebsilon', 'DEEP (Desalination Economic Evaluation Program)']
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
    line: 'Offen für eine Tätigkeit in Planungsbüros, Forschung und Zusammenarbeit, in Berlin und darüber hinaus.',
    items: [
      { k: 'Universitäts-E-Mail', v: OWNER.universityEmail, href: `mailto:${OWNER.universityEmail}` },
      { k: 'Persönliche E-Mail', v: OWNER.personalEmail, href: `mailto:${OWNER.personalEmail}` },
      { k: 'LinkedIn', v: 'linkedin.com/in/shravya-achanala-861039217', href: OWNER.linkedin }
    ]
  }
};

export const CONTENT: Record<Lang, PortfolioContent> = { en: EN, de: DE };
