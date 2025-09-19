
import React, { useState } from 'react';
import { analyzeMedicalReport } from '../services/geminiService';
import Loader from './Loader';
import Disclaimer from './Disclaimer';

const ReportAnalyzer: React.FC = () => {
  const [reportText, setReportText] = useState('');
  const [summary, setSummary] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSummarize = async () => {
    if (!reportText.trim()) {
      setError('Please paste the text from your medical report.');
      return;
    }
    setError('');
    setIsLoading(true);
    setSummary('');
    try {
      const result = await analyzeMedicalReport(reportText);
      setSummary(result);
    } catch (err) {
      setError('An unexpected error occurred. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="p-4 md:p-6 space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-gray-800">AI Medical Report Analyzer</h2>
        <p className="text-gray-600 mt-1">Paste text from your medical report to get a simplified summary.</p>
      </div>
      
      <div className="space-y-4">
        <div>
          <label htmlFor="report" className="block text-sm font-medium text-gray-700">
            Medical Report Text
          </label>
          <textarea
            id="report"
            rows={10}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
            placeholder="Paste the content of your medical report here..."
            value={reportText}
            onChange={(e) => setReportText(e.target.value)}
          />
        </div>
        {error && <p className="text-sm text-red-600">{error}</p>}
        <button
          onClick={handleSummarize}
          disabled={isLoading}
          className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:bg-blue-300 disabled:cursor-not-allowed"
        >
          {isLoading ? 'Summarizing...' : 'Summarize Report'}
        </button>
      </div>

      <Disclaimer />
      
      {isLoading && <Loader />}

      {summary && (
        <div className="mt-6 bg-white p-6 rounded-lg shadow-md border border-gray-200">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">Simplified Summary</h3>
          <div className="prose prose-blue max-w-none" dangerouslySetInnerHTML={{ __html: summary.replace(/\n/g, '<br />') }} />
        </div>
      )}
    </div>
  );
};

export default ReportAnalyzer;
