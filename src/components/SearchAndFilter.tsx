import React from 'react';
import { Search } from 'lucide-react';
import type { TabType } from '../types';

interface SearchAndFilterProps {
  activeTab: TabType;
  searchQuery: string;
  onSearchChange: (value: string) => void;
  selectedFilter: string;
  onFilterChange: (value: string) => void;
}

export function SearchAndFilter({ 
  activeTab, 
  searchQuery, 
  onSearchChange,
  selectedFilter,
  onFilterChange
}: SearchAndFilterProps) {
  const getFilterOptions = (tab: TabType) => {
    switch (tab) {
      case 'starters':
        return [
          { value: 'all', label: 'All Templates' },
          { value: 'react', label: 'React' },
          { value: 'vue', label: 'Vue.js' },
          { value: 'node', label: 'Node.js' },
          { value: 'fullstack', label: 'Full Stack' }
        ];
      case 'prompts':
        return [
          { value: 'all', label: 'All Prompts' },
          { value: 'development', label: 'Development' },
          { value: 'workflow', label: 'Workflow' },
          { value: 'best-practices', label: 'Best Practices' }
        ];
      case 'providers':
        return [
          { value: 'all', label: 'All Providers' },
          { value: 'openai', label: 'OpenAI Compatible' },
          { value: 'anthropic', label: 'Anthropic Compatible' },
          { value: 'custom', label: 'Custom Providers' }
        ];
      case 'features':
        return [
          { value: 'all', label: 'All Features' },
          { value: 'debug', label: 'Debug Tools' },
          { value: 'log', label: 'Logging Tools' }
        ];
      default:
        return [{ value: 'all', label: 'All' }];
    }
  };

  if (activeTab === 'models') {
    return null;
  }

  return (
    <div className="mb-8 flex flex-col sm:flex-row gap-4">
      <div className="relative flex-1">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
        <input
          type="text"
          placeholder={`Search ${activeTab}...`}
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          className="w-full pl-10 pr-4 py-2 bg-[#1A1A1B] border border-gray-800 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 transition-colors"
        />
      </div>
      <select
        value={selectedFilter}
        onChange={(e) => onFilterChange(e.target.value)}
        className="px-4 py-2 bg-[#1A1A1B] border border-gray-800 rounded-lg text-white focus:outline-none focus:border-purple-500 transition-colors"
      >
        {getFilterOptions(activeTab).map(option => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
} 