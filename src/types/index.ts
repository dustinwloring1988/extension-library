export interface Prompt {
  id: string;
  name: string;
  description: string;
  longDescription: string;
  systemPrompt: string;
  enhancePrompt?: string;
  continuePrompt?: string;
  tags: string[];
  downloads: number;
  author: string;
  createdAt: string;
}

export interface Model {
  id: string;
  name: string;
  provider: string;
  description: string;
  longDescription: string;
  parameters: string;
  contextWindow: number;
  downloads: number;
}

export interface Provider {
  id: string;
  name: string;
  description: string;
  longDescription: string;
  website: string;
  baseModels: string[];
  downloads: number;
  configTemplate: Record<string, any>;
  author: string;
  createdAt: string;
}

export interface Starter {
  id: string;
  name: string;
  description: string;
  longDescription: string;
  features: string[];
  technologies: string[];
  downloads: number;
  author: string;
  preview: string;
  createdAt: string;
  repoUrl: string;
}

export interface Feature {
  id: string;
  name: string;
  description: string;
  longDescription: string;
  type: 'debug' | 'log' | 'template' | 'context';
  downloads: number;
}

export type TabType = 'starters' | 'prompts' | 'providers' | 'features';