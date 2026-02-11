
const Roadmap = () => {
  const milestones = [
    {
      status: 'completed',
      title: 'Item Bank v0',
      timeframe: 'Now',
      description: 'Initial question database and taxonomy'
    },
    {
      status: 'upcoming',
      title: 'Pilot',
      timeframe: 'Q1 \'26',
      description: 'First data collection and exploratory factor analysis'
    },
    {
      status: 'upcoming',
      title: 'Calibration-1',
      timeframe: 'Q2 \'26',
      description: 'Large-scale item parameter estimation'
    },
    {
      status: 'upcoming',
      title: 'Adaptive Test Beta',
      timeframe: 'Q4 \'26',
      description: 'Intelligent item selection algorithm'
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Roadmap</h2>
          <p className="text-xl text-gray-600">
            Building the future of open strengths assessment
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gray-300 hidden lg:block"></div>

          <div className="space-y-12 lg:space-y-16">
            {milestones.map((milestone, index) => (
              <div key={index} className={`flex flex-col lg:flex-row items-center ${
                index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
              }`}>
                {/* Content */}
                <div className={`w-full lg:w-5/12 ${
                  index % 2 === 0 ? 'lg:text-right lg:pr-8' : 'lg:text-left lg:pl-8'
                }`}>
                  <div className="bg-white p-6 rounded-lg shadow-md border">
                    <div className="flex items-center justify-between mb-3">
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                        milestone.status === 'completed' 
                          ? 'bg-green-100 text-green-800' 
                          : 'bg-blue-100 text-blue-800'
                      }`}>
                        {milestone.status === 'completed' ? '✓ Complete' : '🔜 Upcoming'}
                      </span>
                      <span className="text-sm font-medium text-gray-500">
                        {milestone.timeframe}
                      </span>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {milestone.title}
                    </h3>
                    <p className="text-gray-600">
                      {milestone.description}
                    </p>
                  </div>
                </div>

                {/* Timeline dot */}
                <div className="hidden lg:flex w-2/12 justify-center">
                  <div className={`w-4 h-4 rounded-full border-4 ${
                    milestone.status === 'completed' 
                      ? 'bg-green-500 border-green-500' 
                      : 'bg-white border-blue-500'
                  }`}></div>
                </div>

                {/* Spacer for alternating layout */}
                <div className="w-full lg:w-5/12"></div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Roadmap;
