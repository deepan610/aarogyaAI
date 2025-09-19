
import React, { useState, useMemo } from 'react';
import { FACILITIES } from '../constants';
import { Facility } from '../types';

type Region = 'All' | 'Urban' | 'Town' | 'Rural';

const HealthcareLocator: React.FC = () => {
  const [activeRegion, setActiveRegion] = useState<Region>('All');

  const filteredFacilities = useMemo(() => {
    if (activeRegion === 'All') {
      return FACILITIES;
    }
    return FACILITIES.filter((facility) => facility.region === activeRegion);
  }, [activeRegion]);

  const getIcon = (type: Facility['type']) => {
    switch (type) {
      case 'Hospital':
        return 'H';
      case 'Clinic':
        return 'C';
      case 'Pharmacy':
        return 'P';
    }
  };

  const getIconBgColor = (type: Facility['type']) => {
    switch (type) {
        case 'Hospital':
            return 'bg-red-500';
        case 'Clinic':
            return 'bg-blue-500';
        case 'Pharmacy':
            return 'bg-green-500';
    }
  };

  const regions: Region[] = ['All', 'Urban', 'Town', 'Rural'];

  return (
    <div className="p-4 md:p-6 space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-gray-800">Find Healthcare</h2>
        <p className="text-gray-600 mt-1">Locate hospitals, clinics, and pharmacies near you.</p>
      </div>
      
      <div className="flex flex-wrap gap-2 border-b border-gray-200 pb-4">
        {regions.map((region) => (
          <button
            key={region}
            onClick={() => setActiveRegion(region)}
            className={`px-4 py-2 text-sm font-medium rounded-full transition-colors ${
              activeRegion === region
                ? 'bg-blue-600 text-white shadow'
                : 'bg-white text-gray-600 hover:bg-gray-100'
            }`}
          >
            {region} Areas
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredFacilities.map((facility, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow">
            <div className="p-5 flex items-start space-x-4">
              <div className={`flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-xl ${getIconBgColor(facility.type)}`}>
                {getIcon(facility.type)}
              </div>
              <div className="flex-1">
                <p className="text-lg font-semibold text-gray-900">{facility.name}</p>
                <p className="text-sm text-gray-500">{facility.type}</p>
                <p className="text-md text-gray-700 mt-2">{facility.address}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HealthcareLocator;
