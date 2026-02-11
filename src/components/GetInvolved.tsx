
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Github, MessageCircle, Twitter, Mail } from 'lucide-react';

const GetInvolved = () => {
  const partnerTypes = [
    {
      avatar: '📐',
      title: 'Psychometric Partners',
      description: 'Help design and validate the assessment framework with measurement science expertise'
    },
    {
      avatar: '🎓',
      title: 'Academic Partners',
      description: 'Conduct validation studies and contribute to peer-reviewed research'
    },
    {
      avatar: '🌍',
      title: 'Applied Experts',
      description: 'Coaches, educators, and practitioners who bring real-world implementation insight'
    },
    {
      avatar: '💻',
      title: 'Technical Builders',
      description: 'Engineers and developers contributing to scoring algorithms, APIs, and tooling'
    }
  ];

  const socialLinks = [
    { icon: Github, label: 'GitHub', href: 'https://github.com/open-strengths/docs/' },
    { icon: MessageCircle, label: 'Discord', href: '#' },
    { icon: Twitter, label: 'Twitter', href: '#' },
    { icon: Mail, label: 'Email', href: 'mailto:team@openstrengths.org' }
  ];

  return (
    <section id="get-involved" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-4xl font-bold text-foreground mb-4">Get Involved</h2>
          <p className="text-xl text-muted-foreground mb-2">
            OpenStrengths is a nonprofit, open-source project.
          </p>
          <p className="text-lg text-muted-foreground mb-2">
            Our remaining budget to complete validation and launch is{' '}
            <span className="font-bold text-primary text-2xl">$2.2 million</span>.
          </p>
          <p className="text-sm text-muted-foreground mb-12">
            Reach out at{' '}
            <a href="mailto:team@openstrengths.org" className="text-primary hover:text-primary/80 underline">
              team@openstrengths.org
            </a>
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {partnerTypes.map((type, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer">
              <CardHeader className="text-center">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {type.avatar}
                </div>
                <CardTitle className="text-lg min-h-[3.5rem] flex items-center justify-center">{type.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <CardDescription>
                  {type.description}
                </CardDescription>
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
