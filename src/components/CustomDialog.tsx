import React from 'react';
import { X, Settings, ChevronDown } from 'lucide-react';

interface CustomDialogProps {
  isOpen: boolean;
  onClose: () => void;
}

export function CustomDialog({ isOpen, onClose }: CustomDialogProps) {
  if (!isOpen) return null;

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
          <h2 className="text-xl font-bold text-white mb-4">How to Change System Prompt</h2>
          <div className="space-y-4 text-gray-300">
            <div className="flex items-start space-x-3">
              <div className="mt-1">
                <Settings className="w-5 h-5 text-purple-400" />
              </div>
              <div>
                <p className="font-medium">1. Open Settings</p>
                <p className="text-sm text-gray-400">Click the settings icon in your editor</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="mt-1">
                <svg className="w-5 h-5 text-purple-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                </svg>
              </div>
              <div>
                <p className="font-medium">2. Navigate to Features</p>
                <p className="text-sm text-gray-400">Find and select the Features section</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="mt-1">
                <ChevronDown className="w-5 h-5 text-purple-400" />
              </div>
              <div>
                <p className="font-medium">3. Change System Prompt</p>
                <p className="text-sm text-gray-400">Locate the "System Prompt" dropdown at the bottom and select your desired prompt</p>
              </div>
            </div>
          </div>
          <button
            onClick={onClose}
            className="mt-6 w-full bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg transition-colors"
          >
            Got it
          </button>
        </div>
      </div>
    </div>
  );
} 