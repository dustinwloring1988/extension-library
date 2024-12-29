import React, { useState } from 'react';
import { Puzzle, Settings } from 'lucide-react';
import { SettingsModal } from './SettingsModal';

export function Header() {
  const [showSettings, setShowSettings] = useState(false);
  const [baseUrl, setBaseUrl] = useState('http://localhost:5173');

  const handleSaveSettings = (newBaseUrl: string) => {
    setBaseUrl(newBaseUrl);
    // You might want to persist this in localStorage
    localStorage.setItem('starter_base_url', newBaseUrl);
  };

  return (
    <>
      <header className="bg-gradient-to-r from-purple-900 to-indigo-900 text-white py-6 px-8">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <Puzzle className="w-8 h-8" />
            <h1 className="text-2xl font-bold">Extension Library</h1>
          </div>
          <button
            onClick={() => setShowSettings(true)}
            className="p-2 hover:bg-white/10 rounded-lg transition-colors"
            aria-label="Settings"
          >
            <Settings className="w-6 h-6" />
          </button>
        </div>
      </header>

      <SettingsModal
        isOpen={showSettings}
        onClose={() => setShowSettings(false)}
        baseUrl={baseUrl}
        onSave={handleSaveSettings}
      />
    </>
  );
}