import React from 'react';
import { Puzzle } from 'lucide-react';

export function Header() {
  return (
    <header className="bg-gradient-to-r from-purple-900 to-indigo-900 text-white py-6 px-8">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <Puzzle className="w-8 h-8" />
          <h1 className="text-2xl font-bold">Extension Library</h1>
        </div>
        <nav>
          <ul className="flex space-x-6">
            <li><a href="#starters" className="hover:text-purple-200">Starters</a></li>
            <li><a href="#prompts" className="hover:text-purple-200">Prompts</a></li>
            <li><a href="#providers" className="hover:text-purple-200">Providers</a></li>
            <li><a href="#models" className="hover:text-purple-200">Models</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}