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
      </div>
    </header>
  );
}