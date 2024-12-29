import React from 'react';
import { Download, Github, User, Calendar, CheckCircle2 } from 'lucide-react';
import type { Starter } from '../types';

interface StarterCardProps {
  starter: Starter;
  onDownload: (starter: Starter) => void;
  onClick: () => void;
}

export function StarterCard({ starter, onDownload, onClick }: StarterCardProps) {
  return (
    <div className="bg-[#1A1A1B] border border-gray-800 rounded-lg overflow-hidden hover:border-purple-500 transition-colors p-6">
      <div className="flex items-start justify-between mb-4">
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-white">{starter.name}</h3>
        </div>
        <div className="flex items-center space-x-2 ml-4">
          <a
            href={starter.repoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-8 h-8 bg-purple-600 hover:bg-purple-700 rounded text-white text-sm transition-colors"
          >
            <Github className="w-4 h-4" />
          </a>
          <button
            onClick={() => onDownload(starter)}
            className="flex items-center space-x-1 px-3 py-1 bg-purple-600 hover:bg-purple-700 rounded text-white text-sm transition-colors"
          >
            <Download className="w-4 h-4" />
            <span>Import</span>
          </button>
        </div>
      </div>

      <div 
        className="w-full h-48 bg-cover bg-center cursor-pointer rounded-lg mb-4" 
        style={{ backgroundImage: `url(${starter.preview})` }}
        onClick={onClick}
      />
      <p className="text-sm text-gray-400 mb-4">{starter.description}</p>

      <div className="mt-4">
        <h4 className="text-sm font-medium text-gray-300 mb-2">Key Features:</h4>
        <ul className="space-y-1">
          {starter.features.slice(0, 3).map((feature) => (
            <li key={feature} className="flex items-center text-sm text-gray-400">
              <CheckCircle2 className="w-4 h-4 mr-2 text-purple-500 shrink-0" />
              <span className="line-clamp-1">{feature}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-4 flex flex-wrap gap-2">
        {starter.technologies.map((tech) => (
          <span
            key={tech}
            className="px-2.5 py-0.5 rounded-full text-xs font-medium bg-purple-900 text-purple-200"
          >
            {tech}
          </span>
        ))}
      </div>

      <div className="mt-4 flex items-center space-x-4 text-sm text-gray-400">
        <div className="flex items-center">
          <User className="w-4 h-4 mr-1" />
          <span>{starter.author}</span>
        </div>
        <div className="flex items-center">
          <Calendar className="w-4 h-4 mr-1" />
          <span>{new Date(starter.createdAt).toLocaleDateString()}</span>
        </div>
      </div>
    </div>
  );
}