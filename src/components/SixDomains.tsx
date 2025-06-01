
import { useState } from 'react';

const SixDomains = () => {
  const [hoveredDomain, setHoveredDomain] = useState<string | null>(null);

  const domains = [
    {
      name: 'Insight',
      emoji: '🧠',
      color: 'insight',
      description: 'Strategic analysis & sense-making'
    },
    {
      name: 'Drive',
      emoji: '⚡️',
      color: 'drive',
      description: 'Goal-directed execution'
    },
    {
      name: 'Connection',
      emoji: '🤝',
      color: 'connection',
      description: 'Relationship building'
    },
    {
      name: 'Influence',
      emoji: '📣',
      color: 'influence',
      description: 'Persuasion & mobilization'
    },
    {
      name: 'Creativity',
      emoji: '🎨',
      color: 'creativity',
      description: 'Divergent thinking & synthesis'
    },
    {
      name: 'Stability',
      emoji: '🛡️',
      color: 'stability',
      description: 'Reliability & risk management'
    }
  ];

  const getColorClasses = (color: string, isHovered: boolean) => {
    const colorMap = {
      insight: isHovered ? 'bg-insight text-white' : 'bg-insight-lighter text-insight border-insight-light',
      drive: isHovered ? 'bg-drive text-white' : 'bg-drive-lighter text-drive border-drive-light',
      connection: isHovered ? 'bg-connection text-white' : 'bg-connection-lighter text-connection border-connection-light',
      influence: isHovered ? 'bg-influence text-white' : 'bg-influence-lighter text-influence border-influence-light',
      creativity: isHovered ? 'bg-creativity text-white' : 'bg-creativity-lighter text-creativity border-creativity-light',
      stability: isHovered ? 'bg-stability text-white' : 'bg-stability-lighter text-stability border-stability-light'
    };
    return colorMap[color as keyof typeof colorMap] || '';
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Six Strength Domains</h2>
          <p className="text-xl text-gray-600">
            Hover to explore each dimension of human potential
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {domains.map((domain) => {
            const isHovered = hoveredDomain === domain.name;
            return (
              <div
                key={domain.name}
                className={`
                  relative p-8 rounded-xl border-2 cursor-pointer transition-all duration-300 
                  transform hover:scale-105 hover:shadow-xl
                  ${getColorClasses(domain.color, isHovered)}
                `}
                onMouseEnter={() => setHoveredDomain(domain.name)}
                onMouseLeave={() => setHoveredDomain(null)}
              >
                <div className="text-center">
                  <div className="text-4xl mb-3">{domain.emoji}</div>
                  <h3 className="text-xl font-semibold mb-2">{domain.name}</h3>
                  <p className={`text-sm transition-opacity duration-300 ${
                    isHovered ? 'opacity-100' : 'opacity-70'
                  }`}>
                    {domain.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SixDomains;
