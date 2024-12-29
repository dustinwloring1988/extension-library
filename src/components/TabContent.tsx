import React, { useState } from 'react';
import { PromptCard } from './PromptCard';
import { ProviderCard } from './ProviderCard';
import { ModelCard } from './ModelCard';
import { StarterCard } from './StarterCard';
import { Modal } from './Modal';
import { mockPrompts, mockProviders, mockModels, mockStarters } from '../data/mockData';
import type { TabType, Prompt, Provider, Model, Starter } from '../types';

interface TabContentProps {
  activeTab: TabType;
}

export function TabContent({ activeTab }: TabContentProps) {
  const [selectedItem, setSelectedItem] = useState<Prompt | Provider | Model | Starter | null>(null);

  const handleDownload = async (item: Prompt | Provider | Model | Starter) => {
    if ('repoUrl' in item) {
      // For starters, redirect to the git URL
      window.location.href = `/git?url=${encodeURIComponent(item.repoUrl)}`;
    } else {
      console.log('Downloading:', item);
    }
  };

  const handleItemClick = (item: Prompt | Provider | Model | Starter) => {
    setSelectedItem(item);
  };

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {activeTab === 'starters' && mockStarters.map((starter) => (
          <StarterCard
            key={starter.id}
            starter={starter}
            onDownload={handleDownload}
            onClick={() => handleItemClick(starter)}
          />
        ))}
        
        {activeTab === 'prompts' && mockPrompts.map((prompt) => (
          <PromptCard
            key={prompt.id}
            prompt={prompt}
            onDownload={handleDownload}
          />
        ))}
        
        {activeTab === 'providers' && mockProviders.map((provider) => (
          <ProviderCard
            key={provider.id}
            provider={provider}
            onDownload={handleDownload}
          />
        ))}
        
        {activeTab === 'models' && mockModels.map((model) => (
          <ModelCard
            key={model.id}
            model={model}
            onDownload={handleDownload}
          />
        ))}
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
    </>
  );
}