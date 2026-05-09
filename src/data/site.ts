export const siteMeta = {
  title: 'Community Phages',
  description:
    'An 8-week paid summer research program where Roxbury Community College students work with Harvard Medical School instructors to find and characterize environmental bacteriophages.',
  url: 'https://phages.hms.harvard.edu',
};

export const contact = {
  email: 'James_Spencer@hms.harvard.edu',
  subject: 'Community Phages website query',
};

export const navItems = [
  { label: 'People', href: '/people/' },
  { label: 'Resources', href: '/resources/' },
  { label: 'Discoveries', href: '/discoveries/' },
];

export const aboutNavItems = [
  { label: 'About the program', href: '/program/' },
  { label: 'For students', href: '/students/' },
  { label: 'For instructors', href: '/instructors/' },
];

export const supportingLinks = [
  { label: 'Partners', href: '/partners/' },
  { label: 'History', href: '/history/' },
];

export const programFacts = [
  { value: '8 weeks', label: 'summer research internship' },
  { value: '20 hrs/week', label: 'Monday-Thursday, 9am-2pm' },
  { value: 'RCC + HMS', label: 'community college students in a research lab' },
  { value: 'Corynephages', label: 'environmental phages infecting corynebacteria' },
];

export const audiencePaths = [
  {
    audience: 'Students',
    title: 'Paid research time in an HMS lab.',
    text: 'RCC students spend the summer doing microbiology experiments with real outcomes: sampling, plating, purification, DNA work, genome analysis, and a final poster.',
    href: '/students/',
    action: 'Student information',
  },
  {
    audience: 'Instructors',
    title: 'Mentored bench teaching.',
    text: 'Instructors teach the methods, help students troubleshoot unclear results, guide genome analysis, and help students decide what the evidence supports.',
    href: '/instructors/',
    action: 'Instructor information',
  },
];

export const studentHighlights = [
  {
    title: 'What students do in the lab',
    text: 'Collect environmental samples, plate them on corynebacterial hosts, look for plaques, purify phages, prepare lysates, extract DNA, analyze genomes, and present final posters.',
  },
  {
    title: 'A real research problem',
    text: 'Students do not follow a lab exercise with a guaranteed result. Some samples produce plaques, some do not, and the next experiment depends on what the plate shows.',
  },
  {
    title: 'Paid summer time',
    text: 'The 2026 program runs May 18-July 9, Monday through Thursday, 9:00 AM-2:00 PM. Student pay helps students commit to the full summer schedule.',
  },
];

export const instructorHighlights = [
  {
    title: 'Bench teaching',
    text: 'Instructors show students how to set up plates, handle bacterial cultures, read lawns and plaques, repeat experiments, and keep useful notebooks.',
  },
  {
    title: 'Research troubleshooting',
    text: 'Instructors help students decide what a plate, gel, titer, image, or genome result means and what experiment should come next.',
  },
  {
    title: 'Poster mentoring',
    text: 'Students need help choosing the right evidence, writing claims they can defend, and practicing a clear explanation of their isolate.',
  },
];

export const programWeeks = [
  {
    week: '1',
    title: 'Bootcamp and sampling',
    short: 'Safety, pipetting, sterile technique, host bacteria, lab notebooks, and the first environmental samples.',
    tags: ['farm samples', 'pipettes', 'C. glutamicum'],
    visual: 'pipette',
  },
  {
    week: '2',
    title: 'Plaque hunting',
    short: 'Filtered samples, direct plating, enrichments, bacterial lawns, and first evidence of phages.',
    tags: ['lawns', 'plaques', 'enrichments'],
    visual: 'plaques',
  },
  {
    week: '3',
    title: 'Purify and titer',
    short: 'Students pick plaques, purify isolates, calculate titers, and prepare lysates for DNA work and characterization.',
    tags: ['purification', 'titers', 'lysates'],
    visual: 'purify',
  },
  {
    week: '4',
    title: 'Image and extract DNA',
    short: 'Electron microscopy, DNA extraction, restriction digests, and scientific meeting exposure.',
    tags: ['EM grids', 'DNA digest', 'BBM'],
    visual: 'em-dna',
  },
  {
    week: '5',
    title: 'Ask what the phage can do',
    short: 'Host range, receptors, defense systems, and bacterial strain comparisons turn plaques into questions.',
    tags: ['mutants', 'defense', 'receptors'],
    visual: 'host-range',
  },
  {
    week: '6',
    title: 'Assemble genomes',
    short: 'Geneious, BLAST, genome assembly, annotation, and figures place each phage next to related isolates.',
    tags: ['sequencing', 'Geneious', 'BLAST'],
    visual: 'genome',
  },
  {
    week: '7',
    title: 'Posters and figures',
    short: 'Phage names, figures, trees, data interpretation, and poster practice before final presentations.',
    tags: ['posters', 'figures', 'phylogeny'],
    visual: 'figures',
  },
  {
    week: '8',
    title: 'Present and share',
    short: 'Practice talks, final posters, PhagesDB records where appropriate, reflection, and lab cleanup.',
    tags: ['poster session', 'PhagesDB', 'reflection'],
    visual: 'poster',
  },
];

export const discoveries = [
  {
    name: 'Flashwig',
    year: '2025',
    summary: 'A Community Phages isolate from the 2025 cohort with a public PhagesDB record.',
    href: 'https://phagesdb.org/phages/Flashwig/',
  },
  {
    name: 'Spartan',
    year: '2025',
    summary: 'A student-isolated phage listed through the Harvard PhagesDB institution page.',
    href: 'https://phagesdb.org/phages/Spartan/',
  },
  {
    name: 'Harvard phage collection',
    year: 'PhagesDB',
    summary: 'The Harvard institution page includes public records from Community Phages.',
    href: 'https://phagesdb.org/institutions/HARV/',
  },
];

export const resourceGroups = [
  {
    group: 'Lab Protocols',
    color: 'coral',
    items: [
      {
        title: '1. Project introduction',
        text: 'The host strains, the scientific question, and why corynephages are useful.',
        href: '/labprotocols/protocol_01-intro.html',
      },
      {
        title: '2. Pipetting exercises',
        text: 'Practice with volumes, technique, and accuracy before plaque and titer experiments begin.',
        href: '/labprotocols/protocol_02_pipettingexercises.html',
      },
      {
        title: '3. Basic techniques',
        text: 'Core microbiology practices for sterile work, bacteria, media, and safe bench habits.',
        href: '/labprotocols/protocol_03-basictechniques.html',
      },
      {
        title: '4. Acquiring and processing environmental samples',
        text: 'Collect, label, filter, and prepare environmental samples for screening.',
        href: '/labprotocols/protocol_04-sampling.html',
      },
      {
        title: '5. Direct plating of environmental samples',
        text: 'First-pass plaque hunting on host bacterial lawns.',
        href: '/labprotocols/protocol_05-directplating.html',
      },
      {
        title: '6. Phage enrichment',
        text: 'Use host bacteria to enrich samples before plaque screening.',
        href: '/labprotocols/protocol_06-enrichments.html',
      },
      {
        title: '7. Phage purification',
        text: 'Use repeated plaque purification to move toward a clean isolate.',
        href: '/labprotocols/protocol_07-purification.html',
      },
      {
        title: '8. Preparing high titer lysates',
        text: 'Prepare enough phage stock for DNA extraction and other assays.',
        href: '/labprotocols/protocol_08-lysates.html',
      },
      {
        title: '9. Extracting phage genomic DNA',
        text: 'Preparing DNA from high-titer lysates for digest and sequencing work.',
        href: '/labprotocols/protocol_09-extractingDNA.html',
      },
      {
        title: '10. Restriction digest',
        text: 'Checking phage DNA and comparing digest patterns.',
        href: '/labprotocols/protocol_10-restrictiondigest.html',
      },
      {
        title: '11. Phage killing experiment',
        text: 'Testing how phages affect bacterial growth across conditions.',
        href: '/labprotocols/protocol_11-phagekillassay.html',
      },
      {
        title: '12. Host range experiments',
        text: 'Comparing which bacterial strains are sensitive or resistant to each phage.',
        href: '/labprotocols/protocol_12-hostrange.html',
      },
    ],
  },
  {
    group: 'Bioinformatics',
    color: 'teal',
    items: [
      {
        title: '1. Introduction',
        text: 'Command line basics, BLAST, sequence files, and how phage genomes are read.',
        href: '/bioinformatics/protocol01_introduction.html',
      },
      {
        title: '2. Assembling whole phage genomes',
        text: 'Using sequencing data to assemble complete or near-complete phage genomes.',
        href: '/bioinformatics/protocol02_assembly.html',
      },
      {
        title: '3. Annotating genomes',
        text: 'Find genes, assign likely functions, and make genome maps students can explain.',
        href: '/bioinformatics/protocol03_annotation.html',
      },
    ],
  },
  {
    group: 'Student Resources',
    color: 'green',
    items: [
      {
        title: 'Day 1',
        text: 'First-day expectations, lab safety, clothing, and pipetting practice.',
        href: '/resources/day1',
      },
      {
        title: 'Useful videos',
        text: 'Short background videos and explainers for phage biology and lab techniques.',
        href: '/resources/02_videos.html',
      },
      {
        title: 'IT instructions',
        text: 'Public notes on the software used during bioinformatics sessions.',
        href: '/resources/03_ITinstructions.html',
      },
      {
        title: 'Everyday lab checklist',
        text: 'Daily reminders for lab readiness, notebook habits, and cleanup.',
        href: '/resources/04_everydaychecklist.html',
      },
      {
        title: 'Lab notebook instructions',
        text: 'How to record experiments, observations, calculations, and decisions.',
        href: '/resources/05_labnotebook.html',
      },
      {
        title: 'Lab glossary',
        text: 'A reference for program vocabulary, techniques, and phage biology terms.',
        href: '/resources/06_glossary.html',
      },
    ],
  },
  {
    group: 'Instructor Information',
    color: 'blue',
    items: [
      {
        title: 'Instructor info',
        text: 'Teaching notes for weekly experiments, genome work, and posters.',
        href: '/resources/07_instructorinfo.html',
      },
      {
        title: 'Program schedule',
        text: 'The 8-week outline and typical daily schedule.',
        href: '/program/',
      },
      {
        title: 'People and mentors',
        text: 'Current faculty sponsor, instructors, mentors, and alumni.',
        href: '/people/',
      },
      {
        title: 'Program history',
        text: 'Prior program years, rosters, and acknowledgments.',
        href: '/history/',
      },
    ],
  },
];

export const partners = [
  {
    name: 'Roxbury Community College',
    role: 'Student partnership, local coordination, and cohort selection.',
    href: 'https://www.rcc.mass.edu/',
  },
  {
    name: 'HMS Department of Microbiology',
    role: 'Teaching lab, instructors, equipment, and scientific home for the summer.',
    href: 'https://micro.hms.harvard.edu/',
  },
  {
    name: 'Bernhardt Lab and HMS mentors',
    role: 'Faculty sponsorship, lab operations, bench mentoring, and instructor network.',
  },
  {
    name: 'New England Biolabs',
    role: 'Program sponsor and funding support, with reagents, field trip opportunities, and sequencing-related resources.',
    href: 'https://www.neb.com/',
  },
  {
    name: 'HHMI',
    role: 'Support for paid student research time and cohort-based undergraduate research.',
    href: 'https://www.hhmi.org/',
  },
  {
    name: 'Field, microscopy, and community partners',
    role: 'Sampling sites, microscopy access, scientific resources, and poster-session opportunities.',
  },
];

export const partnerLogos = [
  {
    code: 'HMS',
    name: 'Harvard Medical School Department of Microbiology',
    role: 'Teaching lab, instructors, and scientific home for the summer.',
    href: 'https://micro.hms.harvard.edu/',
    logo: '/assets/logos/hms-microbiology-logo.svg',
    alt: 'Harvard Medical School Department of Microbiology logo',
  },
  {
    code: 'RCC',
    name: 'Roxbury Community College',
    role: 'Student partnership and cohort coordination.',
    href: 'https://www.rcc.mass.edu/',
    logo: '/assets/logos/rcc-logo.svg',
    alt: 'Roxbury Community College logo',
  },
  {
    code: 'HHMI',
    name: 'Howard Hughes Medical Institute',
    role: 'Support for paid summer research time.',
    href: 'https://www.hhmi.org/',
    logo: '/assets/logos/hhmi-logo.png',
    alt: 'Howard Hughes Medical Institute logo',
  },
  {
    code: 'NEB',
    name: 'New England Biolabs',
    role: 'Program sponsor and funding backer, with reagents and sequencing-related resources.',
    href: 'https://www.neb.com/',
    logo: '/assets/neb-logo.png',
    alt: 'New England Biolabs logo',
  },
];

export const studentInfo = {
  status: 'The 2026 program runs May 18-July 9. Student selection and dates are coordinated each year with Roxbury Community College.',
  eligibility:
    'The program is for Roxbury Community College students who can commit to the full 8-week schedule and want a first research lab experience.',
  schedule: 'For 2026, expected hours are Monday-Thursday, 9:00 AM-2:00 PM, May 18-July 9.',
  note:
    'Email with questions about timing, student participation, or teaching.',
};

export const historyYears = [
  {
    year: '2022',
    title: 'Pilot year',
    text: 'The program launched as a paid summer research experience for RCC students working in an HMS microbiology lab.',
  },
  {
    year: '2023',
    title: 'More instructors',
    text: 'The teaching team broadened across HMS labs, adding expertise in phage defense, microbial evolution, and microscopy.',
  },
  {
    year: '2024',
    title: 'Expanded manual',
    text: 'Protocols, year-specific resources, and student materials were expanded.',
  },
  {
    year: '2025',
    title: 'Public phage collection',
    text: 'Student discoveries were prepared for PhagesDB records, with final posters as the capstone.',
  },
  {
    year: '2026',
    title: 'Current program',
    text: 'The 2026 program runs May 18-July 9 as an 8-week research internship with field sampling, bioinformatics, partner visits, and a final poster session.',
  },
];
