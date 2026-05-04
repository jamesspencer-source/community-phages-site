export interface ProgramYearRoster {
  year: string;
  slug: string;
  title: string;
  summary: string;
  people: string[];
}

export const programYearRosters: ProgramYearRoster[] = [
  {
    year: '2022',
    slug: '2022-program',
    title: '2022 Program',
    summary: 'Pilot year roster from the first Community Phages summer program.',
    people: [
      'Tom Bernhardt',
      'Michael Baym',
      'James Spencer',
      'Amelia McKitterick',
      'Siân Owen',
      'Natalia Quinones-Olvera',
      'Kate Hummels',
      'Thomas McCabe Bartlett',
    ],
  },
  {
    year: '2023',
    slug: '2023-program',
    title: '2023 Program',
    summary: 'Faculty, staff, and instructors listed for the 2023 Community Phages program.',
    people: [
      'Tom Bernhardt',
      'Michael Baym',
      'Philip Kranzusch',
      'James Spencer',
      'Sam Hobbs',
      'Alex Johnson',
      'Baylee Russell',
      "Brendan O'Hara",
      'Kemardo Henry',
    ],
  },
  {
    year: '2024',
    slug: '2024-program',
    title: '2024 Program',
    summary: 'Faculty, program staff, instructors, and mentors listed for the 2024 Community Phages program.',
    people: [
      'Tom Bernhardt',
      'Michael Baym',
      'Philip Kranzusch',
      'Angelika Gründling',
      'James Spencer',
      'Ellie Rand',
      'Amelia McKitterick',
      "Brendan O'Hara",
      'Sam Hobbs',
      'Alex Johnson',
      'Doug Wassarman',
      'Jane Liu',
      'Kristen LeGault',
    ],
  },
];
