import React, { useState, useMemo } from 'react';
import { PromptCard } from './PromptCard';
import { ProviderCard } from './ProviderCard';
import { ModelCard } from './ModelCard';
import { StarterCard } from './StarterCard';
import { Modal } from './Modal';
import { CustomDialog } from './CustomDialog';
import { SearchAndFilter } from './SearchAndFilter';
import { mockPrompts, mockProviders, mockModels, mockStarters } from '../data/mockData';
import type { TabType, Prompt, Provider, Model, Starter } from '../types';

interface TabContentProps {
  activeTab: TabType;
}

export function TabContent({ activeTab }: TabContentProps) {
  const [selectedItem, setSelectedItem] = useState<Prompt | Provider | Model | Starter | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [showCustomDialog, setShowCustomDialog] = useState(false);

  const handleDownload = async (item: Prompt | Provider | Model | Starter) => {
    if ('repoUrl' in item) {
      window.location.href = `http://localhost:5173/git?url=${encodeURIComponent(item.repoUrl)}`;
    } else if ('systemPrompt' in item && (item.name === 'Optimized' || item.name === 'Default')) {
      setShowCustomDialog(true);
    } else {
      console.log('Downloading:', item);
    }
  };

  const handleItemClick = (item: Prompt | Provider | Model | Starter) => {
    setSelectedItem(item);
  };

  const filteredStarters = useMemo(() => {
    return mockStarters.filter(starter => {
      const matchesSearch = 
        starter.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        starter.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        starter.technologies.some(tech => tech.toLowerCase().includes(searchQuery.toLowerCase()));
      
      if (selectedFilter === 'all') return matchesSearch;
      
      return matchesSearch && (
        (selectedFilter === 'react' && starter.technologies.includes('React')) ||
        (selectedFilter === 'vue' && starter.technologies.includes('Vue.js')) ||
        (selectedFilter === 'node' && starter.technologies.includes('Node.js')) ||
        (selectedFilter === 'fullstack' && starter.technologies.length >= 3)
      );
    });
  }, [searchQuery, selectedFilter]);

  const filteredPrompts = useMemo(() => {
    return mockPrompts.filter(prompt => {
      const matchesSearch = 
        prompt.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        prompt.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        prompt.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
      
      if (selectedFilter === 'all') return matchesSearch;
      
      return matchesSearch && prompt.tags.includes(selectedFilter);
    });
  }, [searchQuery, selectedFilter]);

  return (
    <>
      <SearchAndFilter
        activeTab={activeTab}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        selectedFilter={selectedFilter}
        onFilterChange={setSelectedFilter}
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {activeTab === 'starters' && filteredStarters.map((starter) => (
          <StarterCard
            key={starter.id}
            starter={starter}
            onDownload={handleDownload}
            onClick={() => handleItemClick(starter)}
          />
        ))}
        
        {activeTab === 'prompts' && filteredPrompts.map((prompt) => (
          <PromptCard
            key={prompt.id}
            prompt={prompt}
            onDownload={handleDownload}
          />
        ))}
        
        {activeTab === 'providers' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {mockProviders.map((provider) => (
              <ProviderCard
                key={provider.id}
                provider={provider}
                onDownload={handleDownload}
              />
            ))}
          </div>
        )}
        
        {activeTab === 'models' && (
          <div className="col-span-3 text-center py-12">
            <h3 className="text-xl font-semibold text-gray-400 mb-2 relative inline-flex items-center">
              Models
              <span className="ml-2 text-[10px] bg-purple-600 text-white px-1 rounded">Soon</span>
            </h3>
            <p className="text-gray-500">We're preparing to launch access to premium AI models. Stay tuned!</p>
          </div>
        )}
      </div>

      <Modal
        isOpen={!!selectedItem}
        onClose={() => setSelectedItem(null)}
      >
        {selectedItem && (
          <div className="text-white">
            <h2 className="text-2xl font-bold mb-4">{selectedItem.name}</h2>
            <div className="prose prose-invert max-w-none">
              <p className="whitespace-pre-line">{selectedItem.longDescription}</p>
            </div>
            <div className="mt-6 flex justify-end">
              <button
                onClick={() => handleDownload(selectedItem)}
                className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg transition-colors"
              >
                Download
              </button>
            </div>
          </div>
        )}
      </Modal>

      <CustomDialog
        isOpen={showCustomDialog}
        onClose={() => setShowCustomDialog(false)}
      />
    </>
  );
}