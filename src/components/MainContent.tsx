import React from 'react';
import { TabNavigation } from './TabNavigation';
import { TabContent } from './TabContent';
import type { TabType } from '../types';

interface MainContentProps {
  activeTab: TabType;
  onTabChange: (tab: TabType) => void;
}

export function MainContent({ activeTab, onTabChange }: MainContentProps) {
  const tabs: TabType[] = ['starters', 'prompts', 'providers', 'models'];

  return (
    <main className="max-w-7xl mx-auto px-8 py-12">
      <div className="mb-8">
        <TabNavigation 
          activeTab={activeTab}
          onTabChange={(tab) => onTabChange(tab as TabType)}
          tabs={tabs}
        />
      </div>
      <TabContent activeTab={activeTab} />
    </main>
  );
}