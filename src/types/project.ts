export interface iProject {
  title: string;
  description: string;
  type: projectType;
  url?: string;
  gh?: string;
  tags?: string[];
  team?: string[];
}

export type projectType =
  | 'App'
  | 'Library'