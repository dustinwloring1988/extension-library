import React from 'react';
import { X, Settings, ToggleLeft, ChevronRight } from 'lucide-react';

interface CustomFeatureDialogProps {
  isOpen: boolean;
  onClose: () => void;
  featureName: string;
}

export function CustomFeatureDialog({ isOpen, onClose, featureName }: CustomFeatureDialogProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-[#1A1A1B] rounded-lg p-6 max-w-md w-full mx-4 relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white"
        >
          <X className="w-5 h-5" />
        </button>

        <h2 className="text-xl font-semibold text-white mb-4">Enable {featureName}</h2>
        
        <div className="space-y-4">
          <div className="flex items-center text-gray-300">
            <div className="flex items-center justify-center w-8 h-8 rounded-full bg-purple-600 text-white mr-3">
              1
            </div>
            <div className="flex items-center">
              <Settings className="w-5 h-5 mr-2" />
              <span>Go to Settings</span>
            </div>
          </div>

          <div className="flex items-start">
            <div className="flex items-center justify-center w-8 h-8 rounded-full bg-purple-600 text-white mr-3">
              2
            </div>
            <div className="flex items-center">
              <ChevronRight className="w-5 h-5 mr-2" />
              <span className="text-gray-300">Navigate to Features</span>
            </div>
          </div>

          <div className="flex items-start">
            <div className="flex items-center justify-center w-8 h-8 rounded-full bg-purple-600 text-white mr-3">
              3
            </div>
            <div className="flex items-center">
              <ToggleLeft className="w-5 h-5 mr-2" />
              <span className="text-gray-300">Toggle {featureName} to enable</span>
            </div>
          </div>
        </div>

        <button
          onClick={onClose}
          className="mt-6 w-full bg-purple-600 hover:bg-purple-700 text-white rounded py-2 px-4 transition-colors"
        >
          Got it
        </button>
      </div>
    </div>
  );
} 