import React from 'react';
import { Lock } from 'lucide-react';

interface TabNavigationProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
  tabs: string[];
}

export function TabNavigation({ activeTab, onTabChange, tabs }: TabNavigationProps) {
  const isDisabled = (tab: string) => ['models'].includes(tab);

  return (
    <div className="border-b border-gray-800">
      <nav className="-mb-px flex space-x-8">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => !isDisabled(tab) && onTabChange(tab)}
            className={`
              relative py-4 px-1 border-b-2 font-medium text-sm transition-colors
              ${activeTab === tab
                ? 'border-purple-500 text-white'
                : isDisabled(tab)
                  ? 'border-transparent text-gray-600 cursor-not-allowed'
                  : 'border-transparent text-gray-400 hover:text-gray-300 hover:border-gray-700'}
            `}
            disabled={isDisabled(tab)}
          >
            <div className="flex items-center space-x-2">
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
              {isDisabled(tab) && (
                <>
                  <Lock className="w-3 h-3" />
                  <span className="absolute top-0 -right-1 text-[10px] bg-purple-600 text-white px-1 rounded">Soon</span>
                </>
              )}
            </div>
          </button>
        ))}
      </nav>
    </div>
  );
}