
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { DollarSign, Lock, Globe, Users, Brain, TrendingUp, Zap, Search } from 'lucide-react';

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
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-gray-900 mb-4">The Challenge</h2>
        </div>

        {/* Foundation Research Section */}
        <div className="mb-16">
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-12 border border-blue-100">
            <div className="max-w-4xl mx-auto text-center">
              <div className="flex justify-center mb-6">
                <div className="bg-blue-500 rounded-full p-4">
                  <Brain className="w-8 h-8 text-white" />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">The Foundation</h3>
              <p className="text-xl text-gray-700 leading-relaxed">
                Decades of positive-psychology research show that leveraging what people{' '}
                <span className="font-bold text-blue-600">do best</span>—rather than fixing deficits—correlates with higher engagement, creativity, and well-being
              </p>
              <div className="text-sm text-gray-500 mt-4">
                Meta-analytic correlation r ≈ .46
              </div>
            </div>
          </div>
        </div>

        {/* Impact Statistics */}
        <div className="mb-16">
          <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-12 border border-green-100">
            <div className="text-center mb-8">
              <div className="flex justify-center mb-6">
                <div className="bg-green-500 rounded-full p-4">
                  <TrendingUp className="w-8 h-8 text-white" />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-8">The Impact</h3>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="text-6xl font-bold text-green-600 mb-2">19%</div>
                <div className="text-xl font-semibold text-gray-800 mb-2">Higher Performance</div>
                <div className="text-gray-600">Organizations using strengths interventions</div>
              </div>
              <div className="text-center">
                <div className="text-6xl font-bold text-green-600 mb-2">29%</div>
                <div className="text-xl font-semibold text-gray-800 mb-2">Increased Profit</div>
                <div className="text-gray-600">Documented business outcomes</div>
              </div>
            </div>
            
            <div className="text-center mt-6">
              <div className="text-sm text-gray-500">Source: Gallup, 2022</div>
            </div>
          </div>
        </div>

        {/* Problem Statement */}
        <div className="mb-16">
          <div className="bg-gradient-to-r from-orange-50 to-red-50 rounded-2xl p-12 border border-orange-100">
            <div className="max-w-4xl mx-auto text-center">
              <div className="flex justify-center mb-6">
                <div className="bg-orange-500 rounded-full p-4">
                  <Zap className="w-8 h-8 text-white" />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">The Problem</h3>
              <p className="text-xl text-gray-700 leading-relaxed">
                But accessing these benefits shouldn't require corporate budgets or accepting black-box algorithms
              </p>
            </div>
          </div>
        </div>

        {/* Barriers - Redesigned to match top sections */}
        <div className="mb-16">
          <div className="bg-gradient-to-r from-gray-50 to-slate-50 rounded-2xl p-12 border border-gray-100">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-8">Current Tools Create Unnecessary Barriers</h3>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {barriers.map((barrier, index) => {
                const IconComponent = barrier.icon;
                return (
                  <div key={index} className="bg-white rounded-xl p-8 border border-gray-200 hover:shadow-lg transition-all duration-300">
                    <div className="text-center">
                      <div className="flex justify-center mb-4">
                        <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${barrier.gradient} flex items-center justify-center`}>
                          <IconComponent className="w-6 h-6 text-white" />
                        </div>
                      </div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-3">{barrier.title}</h4>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {barrier.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Solution Preview - Redesigned to match top sections */}
        <div className="mb-16">
          <div className="bg-gradient-to-r from-primary/5 to-primary/10 rounded-2xl p-12 border border-primary/20">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-8">Our Solution: OpenStrengths</h3>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="bg-white rounded-xl p-8 border border-primary/20 hover:shadow-lg transition-all duration-300">
                <div className="text-center">
                  <div className="flex justify-center mb-4">
                    <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center">
                      <Search className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <h4 className="text-lg font-semibold text-primary mb-3">Transparent</h4>
                  <p className="text-gray-700 text-sm leading-relaxed">Open algorithms, public research, peer-reviewed methodology</p>
                </div>
              </div>
              
              <div className="bg-white rounded-xl p-8 border border-primary/20 hover:shadow-lg transition-all duration-300">
                <div className="text-center">
                  <div className="flex justify-center mb-4">
                    <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center">
                      <Globe className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <h4 className="text-lg font-semibold text-primary mb-3">Inclusive</h4>
                  <p className="text-gray-700 text-sm leading-relaxed">Global perspectives, cultural fairness, community-driven</p>
                </div>
              </div>
              
              <div className="bg-white rounded-xl p-8 border border-primary/20 hover:shadow-lg transition-all duration-300">
                <div className="text-center">
                  <div className="flex justify-center mb-4">
                    <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center">
                      <DollarSign className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <h4 className="text-lg font-semibold text-primary mb-3">Accessible</h4>
                  <p className="text-gray-700 text-sm leading-relaxed">Free for individuals, affordable for organizations, API-ready</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Call to Action */}
        <div className="text-center">
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
