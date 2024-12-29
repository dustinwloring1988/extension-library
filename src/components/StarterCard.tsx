import React from 'react';
import { Download, CheckCircle2, Github, User, Calendar } from 'lucide-react';
import type { Starter } from '../types';

interface StarterCardProps {
  starter: Starter;
  onDownload: (starter: Starter) => void;
  onClick: () => void;
}

export function StarterCard({ starter, onDownload, onClick }: StarterCardProps) {
  return (
    <div 
      className="bg-[#1A1A1B] rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow cursor-pointer"
      onClick={onClick}
    >
      <img 
        src={starter.preview} 
        alt={`${starter.name} preview`}
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <div className="flex justify-between items-start">
          <h3 className="text-lg font-semibold text-white">{starter.name}</h3>
          <div className="flex items-center space-x-3">
            <a
              href={starter.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="text-purple-400 hover:text-purple-300"
            >
              <Github className="w-5 h-5" />
            </a>
            <button
              onClick={(e) => {
                e.stopPropagation();
                onDownload(starter);
              }}
              className="flex items-center space-x-1 text-purple-400 hover:text-purple-300"
            >
              <Download className="w-4 h-4" />
              <span>{starter.downloads}</span>
            </button>
          </div>
        </div>
        <p className="mt-2 text-gray-400">{starter.description}</p>
        
        <div className="mt-4">
          <h4 className="text-sm font-medium text-gray-300 mb-2">Key Features:</h4>
          <ul className="space-y-1">
            {starter.features.slice(0, 3).map((feature) => (
              <li key={feature} className="flex items-center text-sm text-gray-400">
                <CheckCircle2 className="w-4 h-4 mr-2 text-purple-500" />
                {feature}
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
    </div>
  );
}