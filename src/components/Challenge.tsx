
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { DollarSign, Lock, Globe, Users } from 'lucide-react';

const Challenge = () => {
  const barriers = [
    {
      icon: DollarSign,
      title: 'Cost Barriers',
      description: 'Most tools cost $50-200+ per person, excluding students, nonprofits, and gig workers.',
      gradient: 'from-red-500 to-red-700'
    },
    {
      icon: Lock,
      title: 'Closed Systems',
      description: 'Proprietary algorithms prevent transparency, customization, and AI integration.',
      gradient: 'from-orange-500 to-orange-700'
    },
    {
      icon: Globe,
      title: 'Cultural Bias',
      description: 'One-size-fits-US assessments don\'t account for global perspectives.',
      gradient: 'from-blue-500 to-blue-700'
    },
    {
      icon: Users,
      title: 'Oversimplification',
      description: 'Rigid categories fail to capture nuanced, multi-dimensional strengths.',
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
    <section id="the-challenge" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Enhanced Hero Statement with Foundation */}
        <div className="text-center mb-20">
          <div className="bg-white rounded-2xl p-12 mb-12 border border-gray-200 shadow-lg">
            <div className="mb-8">
              <div className="text-5xl font-bold text-gray-900 mb-6">The Challenge</div>
              
              {/* Foundation Research */}
              <div className="text-xl text-gray-700 mb-6 leading-relaxed max-w-4xl mx-auto">
                Decades of positive-psychology research show that leveraging what people <span className="font-bold text-primary">do best</span>—rather than fixing deficits—correlates with higher engagement, creativity, and well-being
              </div>
              
              {/* Impact Statistics */}
              <div className="text-2xl text-gray-700 mb-6 leading-relaxed">
                Organizations that deploy strengths interventions report up to <span className="font-bold text-primary">19% higher performance</span> and <span className="font-bold text-primary">29% increased profit</span>
              </div>
              
              {/* Problem Statement */}
              <div className="text-lg text-gray-600 mb-8">
                But accessing these benefits shouldn't require corporate budgets or accepting black-box algorithms
              </div>
            </div>
            
            <div className="text-sm text-gray-500">
              Source: Gallup, 2022 • Meta-analytic correlation r ≈ .46
            </div>
          </div>
        </div>

        {/* Barriers */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Current Tools Create Unnecessary Barriers
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {barriers.map((barrier, index) => {
              const IconComponent = barrier.icon;
              return (
                <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-white border-0 shadow-md">
                  <CardHeader className="text-center pb-4">
                    <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r ${barrier.gradient} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <CardTitle className="text-lg font-semibold">{barrier.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <CardDescription className="text-center text-gray-600">
                      {barrier.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Solution Preview */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-primary/5 to-primary/10 rounded-2xl p-12 mb-8 border border-primary/20">
            <h3 className="text-3xl font-bold text-gray-900 mb-8">Our Solution: OpenStrengths</h3>
            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="group">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">🔍</div>
                <div className="font-semibold text-primary text-lg mb-2">Transparent</div>
                <div className="text-gray-700">Open algorithms, public research, peer-reviewed methodology</div>
              </div>
              <div className="group">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">🌍</div>
                <div className="font-semibold text-primary text-lg mb-2">Inclusive</div>
                <div className="text-gray-700">Global perspectives, cultural fairness, community-driven</div>
              </div>
              <div className="group">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">🆓</div>
                <div className="font-semibold text-primary text-lg mb-2">Accessible</div>
                <div className="text-gray-700">Free for individuals, affordable for organizations, API-ready</div>
              </div>
            </div>
          </div>
          
          <button 
            onClick={scrollToScience}
            className="inline-flex items-center text-primary hover:text-primary/80 font-semibold text-xl group bg-white px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
          >
            Explore our six-domain approach
            <span className="ml-2 text-2xl group-hover:ml-4 transition-all duration-300">🔬</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Challenge;
