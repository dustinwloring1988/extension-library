import React from 'react';
import { Download, User, Calendar } from 'lucide-react';
import type { Provider } from '../types';

interface ProviderCardProps {
  provider: Provider;
  onDownload: (provider: Provider) => void;
}

export function ProviderCard({ provider, onDownload }: ProviderCardProps) {
  return (
    <div className="bg-[#1A1A1B] border border-gray-800 rounded-lg p-6 hover:border-purple-500 transition-colors">
      <div className="flex items-start justify-between">
        <div className="flex items-center space-x-3">
          <div>
            <h3 className="text-lg font-semibold text-white">{provider.name}</h3>
            <p className="text-sm text-gray-400">{provider.description}</p>
          </div>
        </div>
        <button
          onClick={() => onDownload(provider)}
          className="flex items-center space-x-1 px-3 py-1 bg-purple-600 hover:bg-purple-700 rounded text-white text-sm transition-colors"
        >
          <Download className="w-4 h-4" />
          <span>Use</span>
        </button>
      </div>
      <div className="mt-4 flex items-center space-x-4 text-sm text-gray-400">
        <div className="flex items-center">
          <User className="w-4 h-4 mr-1" />
          <span>{provider.author}</span>
        </div>
        <div className="flex items-center">
          <Calendar className="w-4 h-4 mr-1" />
          <span>{new Date(provider.createdAt).toLocaleDateString()}</span>
        </div>
      </div>
    </div>
  );
}