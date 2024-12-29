import React from 'react';
import { Download, Cpu } from 'lucide-react';
import type { Model } from '../types';

interface ModelCardProps {
  model: Model;
  onDownload: (model: Model) => void;
}

export function ModelCard({ model, onDownload }: ModelCardProps) {
  return (
    <div className="bg-[#1A1A1B] rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
      <div className="flex justify-between items-start">
        <div className="flex items-center space-x-2">
          <Cpu className="w-5 h-5 text-purple-400" />
          <h3 className="text-lg font-semibold text-white">{model.name}</h3>
        </div>
        <button
          onClick={() => onDownload(model)}
          className="flex items-center space-x-1 text-purple-400 hover:text-purple-300"
        >
          <Download className="w-4 h-4" />
          <span>{model.downloads}</span>
        </button>
      </div>
      <p className="mt-2 text-gray-400">{model.description}</p>
      <div className="mt-4 grid grid-cols-2 gap-4 text-sm">
        <div>
          <span className="text-gray-500">Provider:</span>
          <p className="font-medium text-gray-300">{model.provider}</p>
        </div>
        <div>
          <span className="text-gray-500">Parameters:</span>
          <p className="font-medium text-gray-300">{model.parameters}</p>
        </div>
        <div>
          <span className="text-gray-500">Context Window:</span>
          <p className="font-medium text-gray-300">{model.contextWindow.toLocaleString()} tokens</p>
        </div>
      </div>
    </div>
  );
}