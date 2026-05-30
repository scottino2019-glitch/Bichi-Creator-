export interface BichoExample {
  id: string;
  name: string;
  emoji: string;
  description: string;
  difficulty: 'Facile' | 'Intermedio' | 'Avanzato';
  tags: string[];
  html: string;
}

export interface SavedBicho {
  id: string;
  name: string;
  html: string;
  updatedAt: string;
}

export interface EditorSettings {
  theme: 'dark' | 'light';
  previewBg: 'grid' | 'dots' | 'white' | 'slate' | 'cyber';
  previewScale: number;
}
