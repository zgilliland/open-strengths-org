
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Lock, DollarSign, Globe, Users, Bot } from 'lucide-react';

const TheProblem = () => {
  const painPoints = [
    {
      icon: Lock,
      title: 'Opaque Algorithms',
      description: 'Most assessments are costly black boxes',
      example: 'CliftonStrengths® reports a Top-5 list but publishes neither factor loadings nor reliability coefficients.',
      gradient: 'from-red-500 to-red-700'
    },
    {
      icon: DollarSign,
      title: 'Licensing & Trademark Limits',
      description: 'Commercial use triggers expensive fees',
      example: 'VIA items are public for research, yet commercial use triggers per-seat fees.',
      gradient: 'from-orange-500 to-orange-700'
    },
    {
      icon: Globe,
      title: 'Cultural Bias',
      description: 'One-size-fits-US doesn\'t fit the world',
      example: 'A 2021 DIF study found DISC\'s "Dominance" items favored Western individualism (ΔR² = .04).',
      gradient: 'from-yellow-500 to-yellow-700'
    },
    {
      icon: Users,
      title: 'Type Oversimplification',
      description: 'Rigid categories fail to capture nuance',
      example: 'MBTI dichotomies produce poor test-retest reliability (only ~50% retain type after 5 weeks).',
      gradient: 'from-blue-500 to-blue-700'
    },
    {
      icon: Bot,
      title: 'AI Integration Barriers',
      description: 'Closed systems block modern innovation',
      example: 'Closed APIs prevent LLMs from retrieving facet-level vectors for coaching or matchmaking.',
      gradient: 'from-purple-500 to-purple-700'
    }
  ];

  const frameworks = [
    {
      name: 'CliftonStrengths®',
      coreIdea: '34 themes in 4 buckets',
      strengths: 'Large normative dataset; engaging language',
      limitations: 'Proprietary; theme names trademarked; limited published validity evidence'
    },
    {
      name: 'VIA Character',
      coreIdea: '24 character traits',
      strengths: 'Public items (IP partially restricted)',
      limitations: 'High inter-item overlap; scoring algorithm opaque'
    },
    {
      name: 'MBTI®',
      coreIdea: '16 types from 4 dichotomies',
      strengths: 'Easy narrative appeal',
      limitations: 'Poor test-retest reliability; dichotomies unsupported by modern trait theory'
    },
    {
      name: 'DISC',
      coreIdea: 'Dominance, Influence, Steadiness, Conscientiousness',
      strengths: 'Simple quadrant model',
      limitations: 'Low predictive validity; vendor-specific scoring; scarce peer-reviewed evidence'
    },
    {
      name: 'Big Five (IPIP-NEO)',
      coreIdea: 'O, C, E, A, N (30 facets)',
      strengths: 'Open items; robust validity',
      limitations: '30 facets can overwhelm lay users; no explicit focus on "strengths" framing'
    }
  ];

  const scrollToScience = () => {
    const element = document.querySelector('#science');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="the-problem" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">The Problem with Current Assessments</h2>
          <p className="text-xl text-gray-600 mb-8">
            Research-backed evidence of why the status quo isn't working
          </p>

          {/* Statistics Callout */}
          <div className="bg-gradient-to-r from-primary/10 to-primary/5 rounded-lg p-8 mb-12 border border-primary/20">
            <div className="grid md:grid-cols-2 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold text-primary mb-2">19%</div>
                <div className="text-gray-700">Higher performance with strengths interventions</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-2">29%</div>
                <div className="text-gray-700">Increased profit reported by organizations</div>
              </div>
            </div>
            <div className="text-sm text-gray-600 mt-4">
              Source: Gallup, 2022 • Meta-analytic correlation r ≈ .46
            </div>
          </div>
        </div>

        {/* Pain Points Grid */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Five Critical Pain Points</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {painPoints.map((point, index) => {
              const IconComponent = point.icon;
              return (
                <Card key={index} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <CardHeader className="text-center">
                    <div className={`w-12 h-12 mx-auto mb-4 rounded-full bg-gradient-to-r ${point.gradient} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <CardTitle className="text-lg">{point.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-center text-gray-600 mb-4">
                      {point.description}
                    </CardDescription>
                    <div className="text-xs text-gray-500 italic">
                      "{point.example}"
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Framework Comparison Table */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Current Frameworks: The Evidence</h3>
          <div className="overflow-x-auto bg-white rounded-lg border border-gray-200 shadow-sm">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="font-semibold">Framework</TableHead>
                  <TableHead className="font-semibold">Core Idea</TableHead>
                  <TableHead className="font-semibold">Strengths</TableHead>
                  <TableHead className="font-semibold">Research-Identified Limitations</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {frameworks.map((framework, index) => (
                  <TableRow key={index} className="hover:bg-gray-50">
                    <TableCell className="font-medium">{framework.name}</TableCell>
                    <TableCell>{framework.coreIdea}</TableCell>
                    <TableCell>{framework.strengths}</TableCell>
                    <TableCell className="text-red-600">{framework.limitations}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
          <div className="text-center mt-6">
            <p className="text-gray-600 italic">
              Existing tools are either closed or too broad/narrow. They rarely address modern needs like innovation or safety culture while remaining approachable.
            </p>
          </div>
        </div>

        {/* Transition to Solution */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-lg p-8 mb-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">OpenStrengths Solves These Problems</h3>
            <div className="grid md:grid-cols-3 gap-6 text-sm">
              <div>
                <div className="font-medium text-primary mb-2">🔍 Transparency</div>
                <div className="text-gray-600">Every item, scoring weight, and calibration dataset is public</div>
              </div>
              <div>
                <div className="font-medium text-primary mb-2">🌍 Global Inclusion</div>
                <div className="text-gray-600">Community DIF audits and translation working groups ensure cultural fairness</div>
              </div>
              <div>
                <div className="font-medium text-primary mb-2">🤖 AI-Ready</div>
                <div className="text-gray-600">Open APIs and extensible formats built for modern integration</div>
              </div>
            </div>
          </div>
          <button 
            onClick={scrollToScience}
            className="text-primary hover:text-primary/80 font-medium text-lg group"
          >
            Explore the science behind our approach →
            <span className="ml-1 group-hover:ml-2 transition-all duration-200">🔬</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default TheProblem;
