import React from 'react';
import { Download, ExternalLink } from 'lucide-react';
import type { Provider } from '../types';

interface ProviderCardProps {
  provider: Provider;
  onDownload: (provider: Provider) => void;
}

export function ProviderCard({ provider, onDownload }: ProviderCardProps) {
  return (
    <div className="bg-[#1A1A1B] rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
      <div className="flex justify-between items-start">
        <h3 className="text-lg font-semibold text-white">{provider.name}</h3>
        <button
          onClick={() => onDownload(provider)}
          className="flex items-center space-x-1 text-purple-400 hover:text-purple-300"
        >
          <Download className="w-4 h-4" />
          <span>{provider.downloads}</span>
        </button>
      </div>
      <p className="mt-2 text-gray-400">{provider.description}</p>
      <a
        href={provider.website}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-4 inline-flex items-center text-sm text-purple-400 hover:text-purple-300"
      >
        Visit Website
        <ExternalLink className="w-4 h-4 ml-1" />
      </a>
      <div className="mt-4">
        <h4 className="text-sm font-medium text-gray-300">Base Models:</h4>
        <div className="mt-2 flex flex-wrap gap-2">
          {provider.baseModels.map((model) => (
            <span
              key={model}
              className="px-2.5 py-0.5 rounded-full text-xs font-medium bg-purple-900 text-purple-200"
            >
              {model}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}