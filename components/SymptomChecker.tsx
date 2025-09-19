
import React, { useState } from 'react';
import { getSymptomAnalysis } from '../services/geminiService';
import { LANGUAGES } from '../constants';
import Loader from './Loader';
import Disclaimer from './Disclaimer';

const SymptomChecker: React.FC = () => {
  const [symptoms, setSymptoms] = useState('');
  const [language, setLanguage] = useState('en');
  const [analysis, setAnalysis] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleAnalyze = async () => {
    if (!symptoms.trim()) {
      setError('Please describe your symptoms.');
      return;
    }
    setError('');
    setIsLoading(true);
    setAnalysis('');
    try {
      const result = await getSymptomAnalysis(symptoms, language);
      setAnalysis(result);
    } catch (err) {
      setError('An unexpected error occurred. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="p-4 md:p-6 space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-gray-800">AI Symptom Checker</h2>
        <p className="text-gray-600 mt-1">Describe your symptoms in your preferred language for a preliminary AI analysis.</p>
      </div>
      
      <div className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="md:col-span-3">
            <label htmlFor="symptoms" className="block text-sm font-medium text-gray-700">
              Your Symptoms
            </label>
            <textarea
              id="symptoms"
              rows={6}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
              placeholder="e.g., I have a headache, fever, and a runny nose..."
              value={symptoms}
              onChange={(e) => setSymptoms(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="language" className="block text-sm font-medium text-gray-700">
              Language
            </label>
            <select
              id="language"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
            >
              {LANGUAGES.map((lang) => (
                <option key={lang.code} value={lang.code}>
                  {lang.name}
                </option>
              ))}
            </select>
          </div>
        </div>
        {error && <p className="text-sm text-red-600">{error}</p>}
        <button
          onClick={handleAnalyze}
          disabled={isLoading}
          className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:bg-blue-300 disabled:cursor-not-allowed"
        >
          {isLoading ? 'Analyzing...' : 'Analyze Symptoms'}
        </button>
      </div>

      <Disclaimer />
      
      {isLoading && <Loader />}

      {analysis && (
        <div className="mt-6 bg-white p-6 rounded-lg shadow-md border border-gray-200">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">AI Analysis Result</h3>
          <div className="prose prose-blue max-w-none" dangerouslySetInnerHTML={{ __html: analysis.replace(/\n/g, '<br />') }} />
        </div>
      )}
    </div>
  );
};

export default SymptomChecker;
