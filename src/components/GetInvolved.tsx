
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Github, MessageCircle, Twitter, Mail } from 'lucide-react';

const GetInvolved = () => {
  const contributorTypes = [
    {
      avatar: '🔬',
      title: 'Researchers',
      cta: 'Run a pilot',
      description: 'Validate the framework with your research cohort'
    },
    {
      avatar: '💻',
      title: 'Developers',
      cta: 'Fork the code',
      description: 'Contribute to scoring algorithms and tooling'
    },
    {
      avatar: '🎓',
      title: 'Educators',
      cta: 'Use lesson kit',
      description: 'Teach strengths science with open materials'
    },
    {
      avatar: '🌍',
      title: 'Translators',
      cta: 'Start a localization',
      description: 'Help make this accessible globally'
    }
  ];

  const socialLinks = [
    { icon: Github, label: 'GitHub', href: 'https://github.com/openstrengths' },
    { icon: MessageCircle, label: 'Discord', href: '#' },
    { icon: Twitter, label: 'Twitter', href: '#' },
    { icon: Mail, label: 'Newsletter', href: '#' }
  ];

  return (
    <section id="get-involved" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Get Involved</h2>
          <p className="text-xl text-gray-600">
            Join a global community building the future of human potential
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {contributorTypes.map((type, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer">
              <CardHeader className="text-center">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {type.avatar}
                </div>
                <CardTitle className="text-lg">{type.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <CardDescription className="mb-4">
                  {type.description}
                </CardDescription>
                <Button variant="outline" size="sm" className="w-full group-hover:bg-primary group-hover:text-white transition-colors">
                  {type.cta}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <h3 className="text-xl font-semibold text-gray-900 mb-6">Connect with the Community</h3>
          <div className="flex justify-center space-x-4">
            {socialLinks.map((link, index) => {
              const IconComponent = link.icon;
              return (
                <Button
                  key={index}
                  variant="outline"
                  size="icon"
                  className="w-12 h-12 hover:bg-primary hover:text-white transition-colors"
                  asChild
                >
                  <a href={link.href} target="_blank" rel="noopener noreferrer" aria-label={link.label}>
                    <IconComponent className="w-5 h-5" />
                  </a>
                </Button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetInvolved;
