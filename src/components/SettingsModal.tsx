import React, { useState } from 'react';
import { X, Settings } from 'lucide-react';

interface SettingsModalProps {
  isOpen: boolean;
  onClose: () => void;
  baseUrl: string;
  onSave: (baseUrl: string) => void;
}

export function SettingsModal({ isOpen, onClose, baseUrl, onSave }: SettingsModalProps) {
  const [inputValue, setInputValue] = useState(baseUrl);

  if (!isOpen) return null;

  const handleSave = () => {
    onSave(inputValue);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="bg-[#1A1A1B] rounded-lg shadow-xl max-w-md w-full mx-4 relative">
        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-gray-400 hover:text-white transition-colors"
        >
          <X className="w-5 h-5" />
        </button>
        <div className="p-6">
          <div className="flex items-center space-x-3 mb-6">
            <Settings className="w-6 h-6 text-purple-500" />
            <h2 className="text-xl font-bold text-white">Settings</h2>
          </div>
          
          <div className="space-y-4">
            <div>
              <label htmlFor="baseUrl" className="block text-sm font-medium text-gray-300 mb-2">
                Base URL for Starter Templates
              </label>
              <input
                id="baseUrl"
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="http://localhost:5173"
                className="w-full px-4 py-2 bg-[#1A1A1B] border border-gray-800 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 transition-colors"
              />
              <p className="mt-2 text-sm text-gray-400">
                This URL will be used as the base URL when importing starter templates
              </p>
            </div>
          </div>

          <div className="mt-6 flex justify-end space-x-3">
            <button
              onClick={onClose}
              className="px-4 py-2 text-gray-300 hover:text-white transition-colors"
            >
              Cancel
            </button>
            <button
              onClick={handleSave}
              className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg transition-colors"
            >
              Save Changes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
} 