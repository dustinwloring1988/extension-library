import React, { useState } from 'react';
import { Header } from './components/Header';
import { MainContent } from './components/MainContent';
import type { TabType } from './types';

function App() {
  const [activeTab, setActiveTab] = useState<TabType>('starters');

  return (
    <div className="min-h-screen bg-[#0A0A0B]">
      <Header />
      <MainContent activeTab={activeTab} onTabChange={setActiveTab} />
    </div>
  );
}

export default App;