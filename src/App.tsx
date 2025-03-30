import React, { useState, useEffect } from 'react';
import { RefreshCw } from 'lucide-react';
import { capgeminiHistory } from './data/history';

function App() {
  const [historyEntry, setHistoryEntry] = useState<typeof capgeminiHistory[0] | null>(null);

  const getRandomHistory = () => {
    const randomIndex = Math.floor(Math.random() * capgeminiHistory.length);
    setHistoryEntry(capgeminiHistory[randomIndex]);
  };

  useEffect(() => {
    getRandomHistory();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white flex items-center justify-center p-4">
      <div className="max-w-2xl w-full bg-white rounded-xl shadow-lg p-8">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-bold text-blue-900">Capgemini History</h1>
          <button
            onClick={getRandomHistory}
            className="p-2 rounded-full hover:bg-blue-50 transition-colors"
            aria-label="Refresh history"
          >
            <RefreshCw className="w-6 h-6 text-blue-600" />
          </button>
        </div>
        
        {historyEntry && (
          <div className="space-y-4">
            <div className="inline-block bg-blue-100 rounded-full px-4 py-1">
              <span className="text-blue-800 font-semibold">{historyEntry.year}</span>
            </div>
            <p className="text-gray-700 text-lg leading-relaxed">
              {historyEntry.event}
            </p>
          </div>
        )}
        
        <p className="mt-8 text-sm text-gray-500 text-center">
          Click the refresh button or reload the page to see another historical moment
        </p>
      </div>
    </div>
  );
}

export default App;