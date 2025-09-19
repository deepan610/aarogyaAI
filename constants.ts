
import { Tab, Facility } from './types';

export const TABS: Tab[] = [
  Tab.SYMPTOM_CHECKER,
  Tab.REPORT_ANALYZER,
  Tab.FIND_HEALTHCARE,
  Tab.ABOUT,
];

export const LANGUAGES = [
  { code: 'en', name: 'English' },
  { code: 'hi', name: 'हिन्दी (Hindi)' },
  { code: 'bn', name: 'বাংলা (Bengali)' },
  { code: 'te', name: 'తెలుగు (Telugu)' },
];

export const FACILITIES: Facility[] = [
  { name: 'City General Hospital', type: 'Hospital', address: '123 Main St, Metro City', region: 'Urban' },
  { name: 'Wellness Urban Clinic', type: 'Clinic', address: '456 Health Ave, Metro City', region: 'Urban' },
  { name: 'QuickCare Pharmacy', type: 'Pharmacy', address: '789 Cure Blvd, Metro City', region: 'Urban' },
  { name: 'Township Medical Center', type: 'Hospital', address: '10 Center Rd, Smallville', region: 'Town' },
  { name: 'Dr. Priya\'s Clinic', type: 'Clinic', address: '25 Market Ln, Smallville', region: 'Town' },
  { name: 'Community Health Pharmacy', type: 'Pharmacy', address: '5 Main Sq, Smallville', region: 'Town' },
  { name: 'Rural Health Post', type: 'Clinic', address: 'Village Square, Grampur', region: 'Rural' },
  { name: 'Gramin Sewa Hospital', type: 'Hospital', address: 'Block 5, Highway Junction, Grampur', region: 'Rural' },
  { name: 'Village Medical Store', type: 'Pharmacy', address: 'Next to Post Office, Grampur', region: 'Rural' },
];
