
import React from 'react';

const About: React.FC = () => {
  return (
    <div className="p-4 md:p-6 space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-gray-800">Our Vision</h2>
        <p className="text-gray-600 mt-1">Transforming healthcare in India with Artificial Intelligence.</p>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200 space-y-4 text-gray-700">
        <p>
          India faces significant challenges in healthcare delivery, including rural access gaps, overburdened urban hospitals, and inconsistent quality of care. <strong>AarogyaAI</strong> is a prototype designed to demonstrate how Artificial Intelligence can transform this landscape by enabling timely, scalable, and reliable healthcare services for everyone.
        </p>
        
        <h3 className="text-xl font-semibold text-gray-800 pt-4">Our Unique Approach</h3>
        <ul className="list-disc list-inside space-y-2">
          <li>
            <strong>Localized AI:</strong> Our core mission is to build AI that understands the nuances of Indian languages and healthcare contexts, making it accessible and relevant to our diverse population.
          </li>
          <li>
            <strong>Lightweight & Accessible:</strong> We focus on solutions that can be deployed on mobile devices and function in low-connectivity environments, ensuring we can reach the most remote areas.
          </li>
          <li>
            <strong>Scalable & Reliable:</strong> By leveraging powerful and reliable cloud infrastructure, our platform is designed to scale and provide consistent, high-quality AI assistance across the nation.
          </li>
        </ul>

        <p className="pt-4">
          This prototype showcases our initial steps towards a future where AI empowers individuals to take control of their health and supports healthcare professionals in delivering better care.
        </p>
      </div>
    </div>
  );
};

export default About;
