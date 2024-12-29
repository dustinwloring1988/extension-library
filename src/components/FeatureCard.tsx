import React from 'react';
import { Bug, FileText, Download } from 'lucide-react';
import type { Feature } from '../types';

interface FeatureCardProps {
  feature: Feature;
  onClick: () => void;
  onDownload: () => void;
}

export function FeatureCard({ feature, onClick, onDownload }: FeatureCardProps) {
  return (
    <div className="bg-[#1A1A1B] border border-gray-800 rounded-lg p-6 hover:border-purple-500 transition-colors">
      <div 
        className="flex items-start space-x-3 cursor-pointer"
        onClick={onClick}
      >
        <div className="flex items-center space-x-3">
          {feature.type === 'debug' ? (
            <Bug className="w-6 h-6 text-purple-500 shrink-0" />
          ) : (
            <FileText className="w-6 h-6 text-purple-500 shrink-0" />
          )}
          <div>
            <h3 className="text-lg font-semibold text-white">{feature.name}</h3>
            <p className="text-sm text-gray-400">{feature.description}</p>
          </div>
        </div>
      </div>

      <div className="mt-4 flex justify-end">
        <button
          onClick={(e) => {
            e.stopPropagation();
            onDownload();
          }}
          className="flex items-center space-x-1 px-3 py-1 bg-purple-600 hover:bg-purple-700 rounded text-white text-sm transition-colors"
        >
          <Download className="w-4 h-4" />
          <span>Use</span>
        </button>
      </div>
    </div>
  );
} 