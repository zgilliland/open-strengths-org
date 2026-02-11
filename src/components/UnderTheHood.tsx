
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const UnderTheHood = () => {
  return (
    <section id="science" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Under the Hood</h2>
          <p className="text-xl text-gray-600">Science + Math + Open Source</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - Features */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">Key Features</h3>
            
            <div className="space-y-4">
              {[
                {
                  title: 'Open Item Bank (CSV)',
                  description: 'Transparent question database accessible to researchers worldwide'
                },
                {
                  title: '2-PL Bayesian IRT Scoring',
                  description: 'Advanced psychometric modeling for precise ability estimation'
                },
                {
                  title: 'Forced-Choice Anti-Faking',
                  description: 'Built-in protection against response manipulation'
                },
                {
                  title: 'Bounded AI',
                  description: 'AI generates and verifies assessment items but cannot characterize identity — humans interpret, AI measures'
                },
                {
                  title: 'Adaptive Questioning',
                  description: 'Questions matched to context, culture, and reading level for every respondent'
                },
                {
                  title: 'Apache-2.0 License',
                  description: 'Permissive licensing for commercial and research use'
                }
              ].map((feature, index) => (
                <div key={index} className="flex items-start space-x-4 p-4 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors">
                  <div className="w-2 h-2 rounded-full bg-primary mt-3 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-gray-900">{feature.title}</h4>
                    <p className="text-gray-600 text-sm mt-1">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Technical Details */}
          <div>
            <Tabs defaultValue="curiosity" className="w-full">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="curiosity">Curiosity</TabsTrigger>
                <TabsTrigger value="scorer">Scorer</TabsTrigger>
                <TabsTrigger value="architecture">Architecture</TabsTrigger>
              </TabsList>
              
              <TabsContent value="curiosity" className="mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Adaptive Measurement</CardTitle>
                    <CardDescription>Same construct, different contexts</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <p className="text-sm text-gray-600 mb-4">
                        The same facet — like Curiosity — is measured with language matched to who's taking it:
                      </p>
                      <div className="space-y-3">
                        <div className="bg-gray-50 p-4 rounded-lg border">
                          <div className="text-xs font-semibold text-gray-500 uppercase mb-1">Standard</div>
                          <p className="text-sm text-gray-800">"I enjoy exploring topics I know nothing about."</p>
                        </div>
                        <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
                          <div className="text-xs font-semibold text-blue-600 uppercase mb-1">Student</div>
                          <p className="text-sm text-gray-800">"I like picking electives in subjects I haven't tried."</p>
                        </div>
                        <div className="bg-indigo-50 p-4 rounded-lg border border-indigo-100">
                          <div className="text-xs font-semibold text-indigo-600 uppercase mb-1">Professional</div>
                          <p className="text-sm text-gray-800">"I volunteer for projects outside my expertise."</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="scorer" className="mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Scoring Script</CardTitle>
                    <CardDescription>IRT-based ability estimation</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <pre className="bg-gray-900 text-blue-400 p-4 rounded text-sm overflow-x-auto">
{`def estimate_ability(responses, items):
    """2PL IRT Bayesian estimation"""
    theta = 0.0  # Prior mean
    for iteration in range(50):
        likelihood = calculate_likelihood(
            theta, responses, items
        )
        theta = update_posterior(theta, likelihood)
    return theta`}
                    </pre>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="architecture" className="mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle>System Architecture</CardTitle>
                    <CardDescription>Bounded AI — generates items, never characterizes identity</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="bg-gray-50 p-6 rounded-lg">
                      <div className="text-center text-gray-600">
                        <div className="space-y-4">
                          <div className="bg-white p-3 rounded border">📝 Item Bank (CSV)</div>
                          <div className="text-2xl">↓</div>
                          <div className="bg-white p-3 rounded border">🤖 AI Item Generation + Quality Gates</div>
                          <div className="text-2xl">↓</div>
                          <div className="bg-white p-3 rounded border">🧮 IRT Scorer (Adaptive to Context)</div>
                          <div className="text-2xl">↓</div>
                          <div className="bg-white p-3 rounded border">📊 Results API (JSON)</div>
                          <div className="text-2xl">↓</div>
                          <div className="bg-white p-3 rounded border">📱 Client Apps</div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UnderTheHood;
