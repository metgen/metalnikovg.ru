export interface Project {
  type: 'main' | 'self';
  title: string;
  description?: string;
  imgSrc: string;
  url?: string;
  repo?: string;
  builtWith: string[];
}
