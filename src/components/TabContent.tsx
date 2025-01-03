import React, { useState, useMemo } from 'react';
import { PromptCard } from './PromptCard';
import { ProviderCard } from './ProviderCard';
import { ModelCard } from './ModelCard';
import { StarterCard } from './StarterCard';
import { FeatureCard } from './FeatureCard';
import { Modal } from './Modal';
import { CustomDialog } from './CustomDialog';
import { ProviderConfigDialog } from './ProviderConfigDialog';
import { SearchAndFilter } from './SearchAndFilter';
import { mockPrompts, mockProviders, mockModels, mockStarters, mockFeatures } from '../data/mockData';
import type { TabType, Prompt, Provider, Model, Starter, Feature } from '../types';
import { CustomFeatureDialog } from './CustomFeatureDialog';

interface TabContentProps {
  activeTab: TabType;
}

export function TabContent({ activeTab }: TabContentProps) {
  const [selectedItem, setSelectedItem] = useState<Prompt | Provider | Model | Starter | Feature | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [showCustomDialog, setShowCustomDialog] = useState(false);
  const [showProviderConfigDialog, setShowProviderConfigDialog] = useState(false);
  const [showFeatureDialog, setShowFeatureDialog] = useState(false);
  const [selectedFeature, setSelectedFeature] = useState('');

  const handleDownload = async (item: Prompt | Provider | Model | Starter | Feature) => {
    if ('repoUrl' in item) {
      const baseUrl = localStorage.getItem('starter_base_url') || 'http://localhost:5173';
      window.location.href = `${baseUrl}/git?url=${encodeURIComponent(item.repoUrl)}`;
    } else if ('systemPrompt' in item && (item.name === 'Optimized' || item.name === 'Default')) {
      setShowCustomDialog(true);
    } else if ('baseModels' in item) {
      setShowProviderConfigDialog(true);
    } else if ('type' in item) {
      setShowCustomDialog(true);
    } else {
      console.log('Downloading:', item);
    }
  };

  const handleItemClick = (item: Prompt | Provider | Model | Starter | Feature) => {
    setSelectedItem(item);
  };

  const handleFeatureClick = (feature: Feature) => {
    setSelectedFeature(feature.name);
    setShowFeatureDialog(true);
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

  const filteredProviders = useMemo(() => {
    return mockProviders.filter(provider => {
      const matchesSearch = 
        provider.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        provider.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        provider.baseModels.some(model => model.toLowerCase().includes(searchQuery.toLowerCase()));
      
      if (selectedFilter === 'all') return matchesSearch;
      
      return matchesSearch && (
        (selectedFilter === 'openai' && provider.name.toLowerCase().includes('openai')) ||
        (selectedFilter === 'anthropic' && provider.name.toLowerCase().includes('anthropic')) ||
        (selectedFilter === 'custom' && !provider.name.toLowerCase().includes('openai') && !provider.name.toLowerCase().includes('anthropic'))
      );
    });
  }, [searchQuery, selectedFilter]);

  const filteredFeatures = useMemo(() => {
    return mockFeatures.filter(feature => {
      const matchesSearch = 
        feature.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        feature.description.toLowerCase().includes(searchQuery.toLowerCase());
      
      if (selectedFilter === 'all') return matchesSearch;
      
      return matchesSearch && feature.type === selectedFilter;
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
        
        {activeTab === 'providers' && filteredProviders.map((provider) => (
          <ProviderCard
            key={provider.id}
            provider={provider}
            onDownload={handleDownload}
          />
        ))}

        {activeTab === 'features' && (
          <>
            {filteredFeatures.map((feature) => (
              <FeatureCard
                key={feature.id}
                feature={feature}
                onDownload={() => handleFeatureClick(feature)}
                onClick={() => handleFeatureClick(feature)}
              />
            ))}
            <CustomFeatureDialog
              isOpen={showFeatureDialog}
              onClose={() => setShowFeatureDialog(false)}
              featureName={selectedFeature}
            />
          </>
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
          </div>
        )}
      </Modal>

      <CustomDialog
        isOpen={showCustomDialog}
        onClose={() => setShowCustomDialog(false)}
      />

      <ProviderConfigDialog
        isOpen={showProviderConfigDialog}
        onClose={() => setShowProviderConfigDialog(false)}
      />
    </>
  );
}