export const siteMeta = {
  title: 'Community Phages',
  description:
    'An 8-week summer research internship and teaching program where Roxbury Community College students partner with Harvard Medical School researchers to isolate and characterize environmental bacteriophages.',
  url: 'https://phages.hms.harvard.edu',
};

export const contact = {
  email: 'James_Spencer@hms.harvard.edu',
  subject: 'Community Phages website query',
};

export const navItems = [
  { label: 'Program', href: '/program/' },
  { label: 'Students', href: '/students/' },
  { label: 'Instructors', href: '/instructors/' },
  { label: 'People', href: '/people/' },
  { label: 'Resources', href: '/resources/' },
  { label: 'Discoveries', href: '/discoveries/' },
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
    title: 'A paid 8-week summer research internship for RCC students.',
    text: 'Students come to Harvard Medical School Monday through Thursday, learn the bench skills needed for phage work, and build a poster from their own samples and data.',
    href: '/students/',
    action: 'Student information',
  },
  {
    audience: 'Instructors',
    title: 'A working teaching site for HMS mentors and staff.',
    text: 'Instructors use shared protocols, schedule notes, glossary entries, and bioinformatics chapters so students hear consistent instructions across the summer.',
    href: '/instructors/',
    action: 'Instructor information',
  },
];

export const studentHighlights = [
  {
    title: 'What students do in the lab',
    text: 'Collect environmental samples, plate them on host bacteria, look for plaques, purify phages, prepare lysates, extract DNA, analyze genomes, and present final posters.',
  },
  {
    title: 'What students learn along the way',
    text: 'Sterile technique, pipetting, bacterial lawns, phage purification, titers, microscopy, restriction digests, Geneious, BLAST, notebook habits, and scientific communication.',
  },
  {
    title: 'What the schedule is like',
    text: 'The program typically runs Monday through Thursday, 9am-2pm, for eight weeks from May to July, with exact dates set each year.',
  },
];

export const instructorHighlights = [
  {
    title: 'How instructors plug in',
    text: 'Graduate students, postdocs, staff, alumni, and faculty help teach bench work, troubleshoot experiments, guide bioinformatics sessions, and support poster preparation.',
  },
  {
    title: 'What this site provides',
    text: 'A public protocol manual, bioinformatics chapters, Day 1 notes, lab notebook guidance, glossary, schedule context, and instructor-facing references.',
  },
  {
    title: 'What students need from mentors',
    text: 'Clear instructions, patient troubleshooting, help connecting experiments to phage biology, and support turning raw observations into poster figures and claims.',
  },
];

export const journeyWeeks = [
  {
    week: '1',
    title: 'Bootcamp and sampling',
    short: 'Safety, pipetting, sterile technique, host bacteria, lab notebooks, and the first environmental samples.',
    tags: ['farm samples', 'pipettes', 'C. glutamicum'],
  },
  {
    week: '2',
    title: 'Plaque hunting',
    short: 'Filtered samples, direct plating, enrichments, bacterial lawns, and first evidence of phages.',
    tags: ['lawns', 'plaques', 'enrichments'],
  },
  {
    week: '3',
    title: 'Purify and titer',
    short: 'Students pick plaques, purify isolates, calculate titers, and prepare lysates for downstream work.',
    tags: ['purification', 'titers', 'lysates'],
  },
  {
    week: '4',
    title: 'Image and extract DNA',
    short: 'Electron microscopy, DNA extraction, restriction digests, and scientific meeting exposure.',
    tags: ['EM grids', 'DNA digest', 'BBM'],
  },
  {
    week: '5',
    title: 'Ask what the phage can do',
    short: 'Host range, receptors, defense systems, and bacterial strain comparisons turn plaques into questions.',
    tags: ['mutants', 'defense', 'receptors'],
  },
  {
    week: '6',
    title: 'Assemble genomes',
    short: 'Geneious, BLAST, genome assembly, annotation, and figures connect each phage to its relatives.',
    tags: ['sequencing', 'Geneious', 'BLAST'],
  },
  {
    week: '7',
    title: 'Build the story',
    short: 'Phage names, figures, trees, posters, and data interpretation come together before final presentations.',
    tags: ['posters', 'figures', 'phylogeny'],
  },
  {
    week: '8',
    title: 'Present and share',
    short: 'Practice talks, final posters, public phage records where appropriate, reflection, and lab cleanup.',
    tags: ['poster session', 'PhagesDB', 'reflection'],
  },
];

export const discoveries = [
  {
    name: 'Flashwig',
    year: '2025',
    summary: 'A student-isolated phage from the 2025 cohort with a public PhagesDB record.',
    href: 'https://phagesdb.org/phages/Flashwig/',
  },
  {
    name: 'Spartan',
    year: '2025',
    summary: 'One of the Community Phages discoveries posted through the Harvard institution page.',
    href: 'https://phagesdb.org/phages/Spartan/',
  },
  {
    name: 'Harvard phage collection',
    year: 'Public record',
    summary: 'Community Phages discoveries are represented on the public Harvard PhagesDB institution page.',
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
        text: 'The research question, phage discovery workflow, and how the summer fits together.',
        href: 'https://phages.hms.harvard.edu/labprotocols/protocol_01-intro.html',
      },
      {
        title: '2. Pipetting exercises',
        text: 'Practice with volumes, technique, and accuracy before quantitative phage work begins.',
        href: 'https://phages.hms.harvard.edu/labprotocols/protocol_02_pipettingexercises.html',
      },
      {
        title: '3. Basic techniques',
        text: 'Core microbiology practices for sterile work, bacteria, media, and safe bench habits.',
        href: 'https://phages.hms.harvard.edu/labprotocols/protocol_03-basictechniques.html',
      },
      {
        title: '4. Acquiring and processing environmental samples',
        text: 'How samples are collected, labeled, filtered, and prepared for screening.',
        href: 'https://phages.hms.harvard.edu/labprotocols/protocol_04-sampling.html',
      },
      {
        title: '5. Direct plating of environmental samples',
        text: 'First-pass plaque hunting on host bacterial lawns.',
        href: 'https://phages.hms.harvard.edu/labprotocols/protocol_05-directplating.html',
      },
      {
        title: '6. Phage enrichment',
        text: 'Increasing the chance of finding phages from environmental samples.',
        href: 'https://phages.hms.harvard.edu/labprotocols/protocol_06-enrichments.html',
      },
      {
        title: '7. Phage purification',
        text: 'Turning a plaque into a clean isolate through repeated purification.',
        href: 'https://phages.hms.harvard.edu/labprotocols/protocol_07-purification.html',
      },
      {
        title: '8. Preparing high titer lysates',
        text: 'Building enough phage stock for DNA extraction and characterization.',
        href: 'https://phages.hms.harvard.edu/labprotocols/protocol_08-lysates.html',
      },
      {
        title: '9. Extracting phage genomic DNA',
        text: 'Preparing DNA from high-titer lysates for digest and sequencing work.',
        href: 'https://phages.hms.harvard.edu/labprotocols/protocol_09-extractingDNA.html',
      },
      {
        title: '10. Restriction digest',
        text: 'Checking phage DNA and comparing digest patterns.',
        href: 'https://phages.hms.harvard.edu/labprotocols/protocol_10-restrictiondigest.html',
      },
      {
        title: '11. Phage killing experiment',
        text: 'Testing how phages affect bacterial growth across conditions.',
        href: 'https://phages.hms.harvard.edu/labprotocols/protocol_11-phagekillassay.html',
      },
      {
        title: '12. Host range experiments',
        text: 'Comparing which bacterial strains are sensitive or resistant to each phage.',
        href: 'https://phages.hms.harvard.edu/labprotocols/protocol_12-hostrange.html',
      },
    ],
  },
  {
    group: 'Bioinformatics',
    color: 'teal',
    items: [
      {
        title: '1. Introduction',
        text: 'Command line basics, sequence context, BLAST, and how phage genomes are read.',
        href: 'https://phages.hms.harvard.edu/bioinformatics/protocol01_introduction.html',
      },
      {
        title: '2. Assembling whole phage genomes',
        text: 'Using sequencing data to assemble complete or near-complete phage genomes.',
        href: 'https://phages.hms.harvard.edu/bioinformatics/protocol02_assembly.html',
      },
      {
        title: '3. Annotating genomes',
        text: 'Finding genes, assigning likely functions, and building interpretable genome maps.',
        href: 'https://phages.hms.harvard.edu/bioinformatics/protocol03_annotation.html',
      },
    ],
  },
  {
    group: 'Student Resources',
    color: 'green',
    items: [
      {
        title: 'Day 1',
        text: 'Where to arrive, what to bring, dress code, and first lab activities.',
        href: 'https://phages.hms.harvard.edu/resources/day1',
      },
      {
        title: 'Useful videos',
        text: 'Short background videos and explainers for phage biology and lab techniques.',
        href: 'https://phages.hms.harvard.edu/resources/02_videos.html',
      },
      {
        title: 'IT instructions',
        text: 'Computer, browser, network, and software setup notes for the program.',
        href: 'https://phages.hms.harvard.edu/resources/03_ITinstructions.html',
      },
      {
        title: 'Everyday lab checklist',
        text: 'A daily reference for lab readiness, notebook habits, and cleanup.',
        href: 'https://phages.hms.harvard.edu/resources/04_everydaychecklist.html',
      },
      {
        title: 'Lab notebook instructions',
        text: 'How to record experiments, observations, calculations, and decisions.',
        href: 'https://phages.hms.harvard.edu/resources/05_labnotebook.html',
      },
      {
        title: 'Lab glossary',
        text: 'A reference for program vocabulary, techniques, and phage biology terms.',
        href: 'https://phages.hms.harvard.edu/resources/06_glossary.html',
      },
    ],
  },
  {
    group: 'Instructor and Public Materials',
    color: 'blue',
    items: [
      {
        title: 'Instructor info',
        text: 'Public notes on instructor rotation and handoff practices, with program operations maintained separately.',
        href: 'https://phages.hms.harvard.edu/resources/07_instructorinfo.html',
      },
      {
        title: 'Program schedule',
        text: 'The 8-week schedule, daily blocks, and core public dates.',
        href: '/program/',
      },
      {
        title: 'People and mentors',
        text: 'Current team, faculty sponsors, instructors, and mentors without private contact details.',
        href: '/people/',
      },
      {
        title: 'Program history',
        text: 'Prior years, program evolution, equity mission, and acknowledgments.',
        href: '/history/',
      },
    ],
  },
];

export const partners = [
  {
    name: 'Roxbury Community College',
    role: 'Student recruitment, academic partnership, and community connection.',
  },
  {
    name: 'Harvard Medical School',
    role: 'Research home, mentoring community, lab environment, and scientific equipment.',
  },
  {
    name: 'Bernhardt Lab and HMS mentors',
    role: 'Faculty sponsorship, lab leadership, instructor network, and program continuity.',
  },
  {
    name: 'New England Biolabs',
    role: 'Program support, reagents, field trip opportunities, and sequencing-related resources.',
  },
  {
    name: 'HHMI',
    role: 'Program support for accessible, discovery-based science education.',
  },
  {
    name: 'Field, microscopy, and community partners',
    role: 'Sampling sites, microscopy access, career panels, and public science connections.',
  },
];

export const studentInfo = {
  status: 'Student selection and dates are coordinated each year with Roxbury Community College and program leads. The usual summer window is May-July.',
  eligibility:
    'The program is built for Roxbury Community College students who can commit to the full 8-week schedule and are excited to learn in a research lab.',
  schedule: 'Typical hours are Monday-Thursday, 9am-2pm, for 8 weeks.',
  note:
    'For current-year timing, student participation, or teaching questions, use the contact link and include Community Phages in the subject line.',
};

export const historyYears = [
  {
    year: '2022',
    title: 'Pilot year',
    text: 'The program began as a discovery-based summer research experience inspired by SEA-PHAGES and adapted for RCC students working at HMS.',
  },
  {
    year: '2023',
    title: 'Expanded instructor network',
    text: 'The teaching team broadened across HMS labs, adding more phage defense, microbial evolution, and microscopy expertise.',
  },
  {
    year: '2024',
    title: 'Deeper program structure',
    text: 'Public protocols, year-specific resources, instructor rotation, and student-facing materials became more formalized.',
  },
  {
    year: '2025',
    title: 'Public phage collection',
    text: 'Student discoveries were prepared for public PhagesDB records, and poster/session practices became a stronger capstone.',
  },
  {
    year: '2026',
    title: 'Current planning cycle',
    text: 'The program continues as an 8-week May-July research internship with field sampling, bioinformatics, partner visits, and a final poster session.',
  },
];
