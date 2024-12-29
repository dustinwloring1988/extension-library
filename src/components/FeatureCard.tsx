import React from 'react';
import { Bug, FileText } from 'lucide-react';
import type { Feature } from '../types';

interface FeatureCardProps {
  feature: Feature;
  onClick: () => void;
}

export function FeatureCard({ feature, onClick }: FeatureCardProps) {
  return (
    <div
      className="bg-[#1A1A1B] border border-gray-800 rounded-lg p-6 hover:border-purple-500 transition-colors cursor-pointer"
      onClick={onClick}
    >
      <div className="flex items-start justify-between">
        <div className="flex items-center space-x-3">
          {feature.type === 'debug' ? (
            <Bug className="w-8 h-8 text-purple-500" />
          ) : (
            <FileText className="w-8 h-8 text-purple-500" />
          )}
          <div>
            <h3 className="text-lg font-semibold text-white">{feature.name}</h3>
            <p className="text-sm text-gray-400">{feature.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
} 