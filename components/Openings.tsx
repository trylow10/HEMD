// components/Openings.tsx
import React from 'react';

const positions = [
  {
    type: 'PhD Position',
    title: 'Space-Time Metamaterials (2 positions)',
    description: [
      'Research focus on novel space-time metamaterial designs',
      'Strong background in electromagnetics required',
      'Programming skills (Python, MATLAB) preferred',
    ],
    funding: 'Full funding for 4 years',
    contactEmail: 'research@kuleuven.be',
  },
  {
    type: 'PhD Position',
    title: 'Quantum Metamaterials (1 position)',
    description: [
      'Focus on quantum effects in metamaterials',
      'Background in quantum mechanics and electromagnetics',
      'Computational skills required',
    ],
    funding: 'Full funding for 4 years',
    contactEmail: 'research@kuleuven.be',
  },
  {
    type: 'Postdoctoral Position',
    title: 'Senior Researcher in Electromagnetic Theory',
    description: [
      '2-year position with possibility of extension',
      'Leading research in theoretical electromagnetics',
      'Publication track record required',
      'Competitive salary package',
    ],
    contactEmail: 'research@kuleuven.be',
  },
];

const Openings = () => {
  return (
    <section className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">Open Positions</h1>
      <p className="text-lg text-gray-700 dark:text-gray-300 mb-8">
        We are currently seeking talented individuals to join our research team in the following positions:
      </p>

      {/* Iterate over the positions */}
      {positions.map((position, index) => (
        <div key={index} className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">{position.type}</h2>
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">{position.title}</h3>
          <ul className="list-disc list-inside mb-4">
            {position.description.map((desc, idx) => (
              <li key={idx} className="text-gray-700 dark:text-gray-300">{desc}</li>
            ))}
          </ul>
          {position.funding && (
            <p className="text-gray-700 dark:text-gray-300">
              <strong>Funding:</strong> {position.funding}
            </p>
          )}
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            Send applications to: <a href={`mailto:${position.contactEmail}`} className="text-primary hover:underline">{position.contactEmail}</a>
          </p>
        </div>
      ))}

      <div className="mt-8">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Application Process</h3>
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          To apply, please send:
        </p>
        <ul className="list-disc list-inside mb-4">
          <li className="text-gray-700 dark:text-gray-300">Detailed CV</li>
          <li className="text-gray-700 dark:text-gray-300">Research statement</li>
          <li className="text-gray-700 dark:text-gray-300">Two reference letters</li>
          <li className="text-gray-700 dark:text-gray-300">List of publications</li>
        </ul>
      </div>

      <div className="mt-8">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Working at KU Leuven</h3>
        <ul className="list-disc list-inside mb-4">
          <li className="text-gray-700 dark:text-gray-300">World-class research facilities</li>
          <li className="text-gray-700 dark:text-gray-300">International environment</li>
          <li className="text-gray-700 dark:text-gray-300">Competitive benefits package</li>
          <li className="text-gray-700 dark:text-gray-300">Beautiful historic city</li>
        </ul>
      </div>
    </section>
  );
};

export default Openings;