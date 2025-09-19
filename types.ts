
export enum Tab {
  SYMPTOM_CHECKER = 'Symptom Checker',
  REPORT_ANALYZER = 'Report Analyzer',
  FIND_HEALTHCARE = 'Find Healthcare',
  ABOUT = 'About',
}

export interface Facility {
  name: string;
  type: 'Hospital' | 'Clinic' | 'Pharmacy';
  address: string;
  region: 'Urban' | 'Town' | 'Rural';
}
