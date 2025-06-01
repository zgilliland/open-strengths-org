
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Lock, Globe, Bot } from 'lucide-react';

const WhyOpen = () => {
  const problems = [
    {
      icon: Lock,
      title: 'Opaque & Expensive',
      description: 'Most talent assessments are costly black boxes.',
      gradient: 'from-gray-500 to-gray-700'
    },
    {
      icon: Globe,
      title: 'Global Bias',
      description: 'One-size-fits-US doesn\'t fit the world.',
      gradient: 'from-blue-500 to-blue-700'
    },
    {
      icon: Bot,
      title: 'AI Needs Openness',
      description: 'LLMs can\'t learn from closed data.',
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
    <section id="why-open" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Open?</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {problems.map((problem, index) => {
            const IconComponent = problem.icon;
            return (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardHeader className="text-center">
                  <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r ${problem.gradient} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-xl">{problem.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center text-gray-600 text-lg">
                    {problem.description}
                  </CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="text-center">
          <button 
            onClick={scrollToScience}
            className="text-primary hover:text-primary/80 font-medium text-lg group"
          >
            Read the 2-min story →
            <span className="ml-1 group-hover:ml-2 transition-all duration-200">📚</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default WhyOpen;
