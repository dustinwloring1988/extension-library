import React from 'react';

interface TabNavigationProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
  tabs: string[];
}

export function TabNavigation({ activeTab, onTabChange, tabs }: TabNavigationProps) {
  return (
    <div className="border-b border-gray-800">
      <nav className="-mb-px flex space-x-8">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => onTabChange(tab)}
            className={`
              py-4 px-1 border-b-2 font-medium text-sm transition-colors
              ${activeTab === tab
                ? 'border-purple-500 text-white'
                : 'border-transparent text-gray-400 hover:text-gray-300 hover:border-gray-700'}
            `}
          >
            {tab.charAt(0).toUpperCase() + tab.slice(1)}
          </button>
        ))}
      </nav>
    </div>
  );
}