import manualPagesJson from './manualPages.json';

export interface ManualPageData {
  section: 'labprotocols' | 'bioinformatics' | 'resources';
  group: 'Lab Protocols' | 'Bioinformatics' | 'Student Resources' | 'Instructor Information';
  order: number;
  title: string;
  summary: string;
  path: string;
  slug: string;
  bodyHtml: string;
}

export const manualPages = manualPagesJson as ManualPageData[];

export const manualSectionLabels: Record<ManualPageData['section'], string> = {
  labprotocols: 'Lab Protocols',
  bioinformatics: 'Bioinformatics',
  resources: 'Resources',
};

export const manualPagesBySection = (section: ManualPageData['section']) =>
  manualPages
    .filter((page) => page.section === section)
    .sort((a, b) => a.order - b.order || a.title.localeCompare(b.title));

export const manualPageByPath = (path: string) =>
  manualPages.find((page) => page.path === path);
