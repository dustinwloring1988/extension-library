import React from 'react';
import { Download, Tag } from 'lucide-react';
import type { Prompt } from '../types';

interface PromptCardProps {
  prompt: Prompt;
  onDownload: (prompt: Prompt) => void;
}

export function PromptCard({ prompt, onDownload }: PromptCardProps) {
  return (
    <div className="bg-[#1A1A1B] rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
      <div className="flex justify-between items-start">
        <h3 className="text-lg font-semibold text-white">{prompt.name}</h3>
        <button
          onClick={() => onDownload(prompt)}
          className="flex items-center space-x-1 text-purple-400 hover:text-purple-300"
        >
          <Download className="w-4 h-4" />
          <span>{prompt.downloads}</span>
        </button>
      </div>
      <p className="mt-2 text-gray-400">{prompt.description}</p>
      <div className="mt-4 flex flex-wrap gap-2">
        {prompt.tags.map((tag) => (
          <span
            key={tag}
            className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-purple-900 text-purple-200"
          >
            <Tag className="w-3 h-3 mr-1" />
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}