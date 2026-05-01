export type PersonGroup =
  | 'Faculty Sponsors'
  | 'Program Leadership'
  | 'Lead Instructors'
  | 'Mentors and Instructors'
  | 'Program Alumni';

export interface Person {
  name: string;
  role: string;
  group: PersonGroup;
  affiliation: string;
  bio: string;
  image?: string;
  initials: string;
  current: boolean;
}

export const people: Person[] = [
  {
    name: 'Tom Bernhardt',
    role: 'Faculty sponsor',
    group: 'Faculty Sponsors',
    affiliation: 'Department of Microbiology',
    bio: 'Studies bacterial cell biology, cell surface biogenesis, and corynephages as tools for understanding how corynebacteria grow.',
    image: '/assets/people/tom-bernhardt.jpg',
    initials: 'TB',
    current: true,
  },
  {
    name: 'Philip Kranzusch',
    role: 'Faculty sponsor',
    group: 'Faculty Sponsors',
    affiliation: 'Department of Microbiology',
    bio: 'Studies how cells sense viral infection and how bacteria and phages illuminate broader principles of immunity.',
    image: '/assets/people/philip-kranzusch.jpg',
    initials: 'PK',
    current: true,
  },
  {
    name: 'Michael Baym',
    role: 'Faculty sponsor',
    group: 'Faculty Sponsors',
    affiliation: 'Biomedical Informatics and Microbiology',
    bio: 'Works on bacterial evolution, antibiotic resistance, horizontal gene transfer, and the roles phages play in bacterial change.',
    image: '/assets/people/michael-baym.jpg',
    initials: 'MB',
    current: true,
  },
  {
    name: 'James Spencer',
    role: 'Program operations and lab manager',
    group: 'Program Leadership',
    affiliation: 'Bernhardt Lab',
    bio: 'Coordinates the lab environment, materials, safety, and behind-the-scenes infrastructure that make the summer research experience work.',
    image: '/assets/people/james-spencer.jpg',
    initials: 'JS',
    current: true,
  },
  {
    name: 'Ellie Rand',
    role: 'Lead instructor',
    group: 'Program Leadership',
    affiliation: 'Baym Lab alumna',
    bio: 'Developed methods for isolating environmental phages and leads the program’s field-to-genome discovery arc.',
    image: '/assets/people/ellie-rand.jpg',
    initials: 'ER',
    current: true,
  },
  {
    name: 'Kepler Mears',
    role: 'Bioinformatics instructor',
    group: 'Lead Instructors',
    affiliation: 'Baym Lab',
    bio: 'Helps students move from sequencing data to assembled genomes, BLAST comparisons, annotation, and poster figures.',
    image: '/assets/people/kepler-mears.jpg',
    initials: 'KM',
    current: true,
  },
  {
    name: 'Arushi Lahiri',
    role: 'Instructor',
    group: 'Mentors and Instructors',
    affiliation: 'BBS Program',
    bio: 'Studies how phages innovate strategies to escape host defenses and how phage biology connects to immune signaling.',
    image: '/assets/people/arushi-lahiri.jpg',
    initials: 'AL',
    current: true,
  },
  {
    name: 'Anastacia Parks',
    role: 'Instructor and mentor',
    group: 'Mentors and Instructors',
    affiliation: 'Bernhardt Lab',
    bio: 'Brings a community-college-to-research perspective and helps students navigate early scientific training.',
    image: '/assets/people/anastacia-parks.jpg',
    initials: 'AP',
    current: true,
  },
  {
    name: "Brendan O'Hara",
    role: 'Instructor',
    group: 'Mentors and Instructors',
    affiliation: 'Dove Lab',
    bio: 'Supports bench work, troubleshooting, and student mentoring across the wet-lab discovery process.',
    image: '/assets/people/brendan-ohara.jpg',
    initials: 'BO',
    current: true,
  },
  {
    name: 'Doug Wassarman',
    role: 'Instructor',
    group: 'Mentors and Instructors',
    affiliation: 'Kranzusch Lab',
    bio: 'Studies bacterial antiviral defenses and the molecular strategies phages use to evade them.',
    image: '/assets/people/doug-wassarman.jpg',
    initials: 'DW',
    current: true,
  },
  {
    name: 'Kristopher Kennedy',
    role: 'Instructor and mentor',
    group: 'Mentors and Instructors',
    affiliation: 'Hochschild Lab',
    bio: 'Connects community-college research access with a microbiology career path and hands-on student mentorship.',
    image: '/assets/people/kristopher-kennedy.jpg',
    initials: 'KK',
    current: true,
  },
  {
    name: 'Liana Merk',
    role: 'Bioinformatics instructor',
    group: 'Mentors and Instructors',
    affiliation: 'Eddy Lab',
    bio: 'Works at the intersection of mobile genetic elements, structured RNAs, and phage genomes.',
    image: '/assets/people/liana-merk.jpg',
    initials: 'LM',
    current: true,
  },
  {
    name: 'Molly Sargen',
    role: 'Instructor',
    group: 'Mentors and Instructors',
    affiliation: 'Phage defense and bacterial systems',
    bio: 'Studies bacterial survival systems, prophages, and anti-phage defenses that shape host-phage interactions.',
    image: '/assets/people/molly-sargen.jpg',
    initials: 'MS',
    current: true,
  },
  {
    name: 'Samantha Fernandez',
    role: 'Instructor',
    group: 'Mentors and Instructors',
    affiliation: 'HMS mentor community',
    bio: 'Supports students through wet-lab practice, scientific discussion, and poster preparation.',
    initials: 'SF',
    current: true,
  },
  {
    name: 'Shailab Shrestha',
    role: 'Instructor',
    group: 'Mentors and Instructors',
    affiliation: 'HMS mentor community',
    bio: 'Helps students connect lab observations with the broader biology of bacteria and phages.',
    initials: 'SS',
    current: true,
  },
  {
    name: 'Zoe Feder',
    role: 'Instructor',
    group: 'Mentors and Instructors',
    affiliation: 'HMS mentor community',
    bio: 'Mentors students through experimental work, data interpretation, and scientific communication.',
    initials: 'ZF',
    current: true,
  },
  {
    name: 'Ophelia Lee',
    role: 'Instructor',
    group: 'Mentors and Instructors',
    affiliation: 'HMS mentor community',
    bio: 'Supports the program’s hands-on lab teaching and student poster development.',
    initials: 'OL',
    current: true,
  },
  {
    name: 'Amelia McKitterick',
    role: 'Past instructor',
    group: 'Program Alumni',
    affiliation: 'Bernhardt Lab alumna',
    bio: 'Helped shape the program’s early phage-host biology teaching and student mentorship.',
    image: '/assets/people/amelia-mckitterick.jpg',
    initials: 'AM',
    current: false,
  },
];

export const peopleGroups: PersonGroup[] = [
  'Faculty Sponsors',
  'Program Leadership',
  'Lead Instructors',
  'Mentors and Instructors',
  'Program Alumni',
];
