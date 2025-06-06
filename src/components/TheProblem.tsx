
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { DollarSign, Lock, Globe, Users } from 'lucide-react';

const TheProblem = () => {
  const painPoints = [
    {
      icon: DollarSign,
      title: 'Cost Barriers',
      description: 'Most tools cost $50-200+ per person, excluding students, nonprofits, and gig workers from accessing their strengths.',
      gradient: 'from-red-500 to-red-700'
    },
    {
      icon: Lock,
      title: 'Closed Systems',
      description: 'Proprietary algorithms and restricted APIs prevent transparency, customization, and modern AI integration.',
      gradient: 'from-orange-500 to-orange-700'
    },
    {
      icon: Globe,
      title: 'Cultural Bias',
      description: 'One-size-fits-US assessments don\'t account for global perspectives and diverse cultural contexts.',
      gradient: 'from-blue-500 to-blue-700'
    },
    {
      icon: Users,
      title: 'Oversimplification',
      description: 'Rigid type categories fail to capture the nuanced, multi-dimensional nature of human strengths.',
      gradient: 'from-purple-500 to-purple-700'
    }
  ];

  const scrollToScience = () => {
    const element = document.querySelector('#science');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="the-problem" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">The Problem with Current Assessments</h2>
          <p className="text-xl text-gray-600 mb-8">
            Despite proven benefits, existing tools create unnecessary barriers
          </p>

          {/* Simple Statistics */}
          <div className="bg-white rounded-lg p-6 mb-8 border border-gray-200 inline-block">
            <div className="text-lg text-gray-700">
              Research shows strengths-based approaches correlate with <span className="font-semibold text-primary">19% higher performance</span> and <span className="font-semibold text-primary">29% increased profit</span>
            </div>
            <div className="text-sm text-gray-500 mt-2">
              Source: Gallup, 2022 • Meta-analytic correlation r ≈ .46
            </div>
          </div>
        </div>

        {/* Pain Points Grid */}
        <div className="mb-16">
          <div className="grid md:grid-cols-2 gap-8">
            {painPoints.map((point, index) => {
              const IconComponent = point.icon;
              return (
                <Card key={index} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-white">
                  <CardHeader className="text-center">
                    <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r ${point.gradient} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <CardTitle className="text-xl">{point.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-center text-gray-600 text-lg">
                      {point.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Solution Preview */}
        <div className="text-center">
          <div className="bg-white rounded-lg p-8 mb-8 border border-gray-200">
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">OpenStrengths Changes Everything</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <div className="font-medium text-primary mb-2">🔍 Transparent</div>
                <div className="text-gray-600">Open algorithms, public research, peer-reviewed methodology</div>
              </div>
              <div>
                <div className="font-medium text-primary mb-2">🌍 Inclusive</div>
                <div className="text-gray-600">Global perspectives, cultural fairness, community-driven</div>
              </div>
              <div>
                <div className="font-medium text-primary mb-2">🆓 Accessible</div>
                <div className="text-gray-600">Free for individuals, affordable for organizations, API-ready</div>
              </div>
            </div>
          </div>
          
          <div className="space-y-4">
            <button 
              onClick={scrollToScience}
              className="text-primary hover:text-primary/80 font-medium text-lg group block mx-auto"
            >
              Explore our six-domain approach →
              <span className="ml-1 group-hover:ml-2 transition-all duration-200">🔬</span>
            </button>
            
            <div className="text-sm text-gray-500">
              <a href="/white-paper" className="hover:text-primary transition-colors">
                Read our detailed research and methodology in the whitepaper
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TheProblem;
