
import { useState } from 'react';

const SixDomains = () => {
  const [selectedDomain, setSelectedDomain] = useState<string>('Insight');
  const [hoveredDomain, setHoveredDomain] = useState<string | null>(null);

  const domains = [
    {
      name: 'Insight',
      emoji: '🧠',
      color: 'insight',
      description: 'How you process, analyze, and understand',
      facets: [
        { name: 'Analytical Reasoning', description: 'Breaking down complex problems into clear, logical parts' },
        { name: 'Systems Perspective', description: 'Seeing how pieces connect across the bigger picture' },
        { name: 'Foresight', description: 'Anticipating what\'s coming and planning ahead' },
        { name: 'Curiosity', description: 'Driven to explore, question, and learn more' },
        { name: 'Reflective Learning', description: 'Turning experience into lasting insight' },
        { name: 'Sense-Making', description: 'Finding meaning in ambiguous or noisy information' },
      ]
    },
    {
      name: 'Drive',
      emoji: '⚡️',
      color: 'drive',
      description: 'How you pursue, persist, and achieve',
      facets: [
        { name: 'Achievement Focus', description: 'Setting ambitious goals and hitting them' },
        { name: 'Discipline', description: 'Staying consistent even when motivation fades' },
        { name: 'Adaptable Execution', description: 'Adjusting your approach without losing momentum' },
        { name: 'Resilience', description: 'Bouncing back from setbacks stronger than before' },
        { name: 'Initiative', description: 'Acting before being asked or told' },
        { name: 'Efficiency', description: 'Getting maximum results with minimum waste' },
      ]
    },
    {
      name: 'Connection',
      emoji: '🤝',
      color: 'connection',
      description: 'How you relate, empathize, and bond',
      facets: [
        { name: 'Empathy', description: 'Feeling and understanding what others experience' },
        { name: 'Social Awareness', description: 'Reading the room and picking up on social cues' },
        { name: 'Collaboration', description: 'Working with others toward a shared outcome' },
        { name: 'Trust Building', description: 'Creating safety and reliability in relationships' },
        { name: 'Inclusiveness', description: 'Making space for every voice to be heard' },
        { name: 'Mentorship', description: 'Guiding others\' growth with care and intention' },
      ]
    },
    {
      name: 'Influence',
      emoji: '📣',
      color: 'influence',
      description: 'How you lead, persuade, and mobilize',
      facets: [
        { name: 'Persuasion', description: 'Winning people over with compelling arguments' },
        { name: 'Storytelling', description: 'Making ideas stick through vivid narrative' },
        { name: 'Confidence', description: 'Projecting belief in yourself and your vision' },
        { name: 'Energizing', description: 'Lifting the room\'s energy and enthusiasm' },
        { name: 'Negotiation', description: 'Finding agreements that work for everyone' },
        { name: 'Vision Casting', description: 'Painting a future others want to build toward' },
      ]
    },
    {
      name: 'Creativity',
      emoji: '🎨',
      color: 'creativity',
      description: 'How you imagine, invent, and adapt',
      facets: [
        { name: 'Ideation', description: 'Generating a flow of original ideas' },
        { name: 'Innovation', description: 'Turning novel ideas into real-world solutions' },
        { name: 'Aesthetic Sensitivity', description: 'Noticing beauty, design, and sensory detail' },
        { name: 'Improvisation', description: 'Thinking on your feet when plans change' },
        { name: 'Experimentation', description: 'Testing hypotheses and learning by doing' },
        { name: 'Synthesizing', description: 'Combining distant ideas into something new' },
      ]
    },
    {
      name: 'Stability',
      emoji: '🛡️',
      color: 'stability',
      description: 'How you regulate, endure, and stay grounded',
      facets: [
        { name: 'Responsibility', description: 'Owning your commitments and following through' },
        { name: 'Ethics', description: 'Holding yourself to a consistent moral standard' },
        { name: 'Reliability', description: 'Delivering what you promise, on time' },
        { name: 'Patience', description: 'Staying calm and steady under pressure' },
        { name: 'Organizing', description: 'Bringing order and structure to chaos' },
        { name: 'Safety Orientation', description: 'Watching for risks and preventing harm' },
      ]
    }
  ];

  const selectedData = domains.find(d => d.name === selectedDomain);

  const getCardClasses = (color: string, isSelected: boolean) => {
    const colorMap: Record<string, { selected: string; idle: string }> = {
      insight: { selected: 'bg-insight text-white shadow-lg shadow-insight/30 ring-2 ring-insight', idle: 'bg-insight-lighter text-insight border-insight-light' },
      drive: { selected: 'bg-drive text-white shadow-lg shadow-drive/30 ring-2 ring-drive', idle: 'bg-drive-lighter text-drive border-drive-light' },
      connection: { selected: 'bg-connection text-white shadow-lg shadow-connection/30 ring-2 ring-connection', idle: 'bg-connection-lighter text-connection border-connection-light' },
      influence: { selected: 'bg-influence text-white shadow-lg shadow-influence/30 ring-2 ring-influence', idle: 'bg-influence-lighter text-influence border-influence-light' },
      creativity: { selected: 'bg-creativity text-white shadow-lg shadow-creativity/30 ring-2 ring-creativity', idle: 'bg-creativity-lighter text-creativity border-creativity-light' },
      stability: { selected: 'bg-stability text-white shadow-lg shadow-stability/30 ring-2 ring-stability', idle: 'bg-stability-lighter text-stability border-stability-light' },
    };
    const entry = colorMap[color];
    return entry ? (isSelected ? entry.selected : entry.idle) : '';
  };

  const getAccentBarClass = (color: string) => {
    const map: Record<string, string> = {
      insight: 'bg-insight', drive: 'bg-drive', connection: 'bg-connection',
      influence: 'bg-influence', creativity: 'bg-creativity', stability: 'bg-stability',
    };
    return map[color] || '';
  };

  const getFacetClasses = (color: string) => {
    const map: Record<string, string> = {
      insight: 'bg-insight-lighter text-insight border-insight-light',
      drive: 'bg-drive-lighter text-drive border-drive-light',
      connection: 'bg-connection-lighter text-connection border-connection-light',
      influence: 'bg-influence-lighter text-influence border-influence-light',
      creativity: 'bg-creativity-lighter text-creativity border-creativity-light',
      stability: 'bg-stability-lighter text-stability border-stability-light',
    };
    return map[color] || '';
  };

  return (
    <section id="science" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Six Strength Domains</h2>
          <p className="text-xl text-gray-600">
            36 facets across six domains — click to explore each dimension
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {domains.map((domain) => {
            const isSelected = selectedDomain === domain.name;
            return (
              <div
                key={domain.name}
                className={`
                  relative p-8 rounded-xl border-2 cursor-pointer transition-all duration-300
                  transform hover:scale-105
                  ${getCardClasses(domain.color, isSelected)}
                  ${!isSelected && selectedDomain ? 'opacity-70 hover:opacity-100' : ''}
                `}
                onClick={() => setSelectedDomain(domain.name)}
                onMouseEnter={() => setHoveredDomain(domain.name)}
                onMouseLeave={() => setHoveredDomain(null)}
              >
                <div className="text-center">
                  <div className="text-4xl mb-3">{domain.emoji}</div>
                  <h3 className="text-xl font-semibold mb-2">{domain.name}</h3>
                  <p className={`text-sm transition-opacity duration-300 ${
                    isSelected || hoveredDomain === domain.name ? 'opacity-100' : 'opacity-70'
                  }`}>
                    {domain.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Expandable facet panel */}
        {selectedData && (
          <div
            key={selectedData.name}
            className="max-w-4xl mx-auto mt-8 rounded-xl bg-white border border-gray-200 shadow-lg overflow-hidden animate-fade-in"
          >
            <div className={`h-1.5 ${getAccentBarClass(selectedData.color)}`} />
            <div className="p-8">
              <h3 className="text-lg font-semibold text-gray-900 mb-1">
                {selectedData.emoji} {selectedData.name} Facets
              </h3>
              <p className="text-sm text-gray-500 mb-6">{selectedData.description}</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {selectedData.facets.map((facet) => (
                  <div
                    key={facet.name}
                    className={`rounded-lg border p-4 transition-all duration-200 hover:scale-[1.02] ${getFacetClasses(selectedData.color)}`}
                  >
                    <p className="font-semibold text-sm mb-1">{facet.name}</p>
                    <p className="text-xs opacity-80">{facet.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default SixDomains;
