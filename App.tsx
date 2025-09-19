
import React, { useState } from 'react';
import Header from './components/Header';
import SymptomChecker from './components/SymptomChecker';
import ReportAnalyzer from './components/ReportAnalyzer';
import HealthcareLocator from './components/HealthcareLocator';
import About from './components/About';
import { Tab } from './types';
import { TABS } from './constants';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<Tab>(Tab.SYMPTOM_CHECKER);

  const renderContent = () => {
    switch (activeTab) {
      case Tab.SYMPTOM_CHECKER:
        return <SymptomChecker />;
      case Tab.REPORT_ANALYZER:
        return <ReportAnalyzer />;
      case Tab.FIND_HEALTHCARE:
        return <HealthcareLocator />;
      case Tab.ABOUT:
        return <About />;
      default:
        return <SymptomChecker />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-6">
        <div className="bg-white rounded-lg shadow-lg border border-gray-200 overflow-hidden">
          <nav className="border-b border-gray-200">
            <div className="px-4 -mb-px flex space-x-2 sm:space-x-4 overflow-x-auto">
              {TABS.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm transition-colors
                    ${
                      activeTab === tab
                        ? 'border-blue-500 text-blue-600'
                        : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                    }
                  `}
                >
                  {tab}
                </button>
              ))}
            </div>
          </nav>
          <div className="min-h-[60vh]">
            {renderContent()}
          </div>
        </div>
      </main>
      <footer className="text-center py-4 text-gray-500 text-sm">
        <p>&copy; {new Date().getFullYear()} AarogyaAI Prototype. For demonstration purposes only.</p>
      </footer>
    </div>
  );
};

export default App;
