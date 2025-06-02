
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
            <Tabs defaultValue="taxonomy" className="w-full">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="taxonomy">Taxonomy</TabsTrigger>
                <TabsTrigger value="scorer">Scorer</TabsTrigger>
                <TabsTrigger value="architecture">Architecture</TabsTrigger>
              </TabsList>
              
              <TabsContent value="taxonomy" className="mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle>YAML Taxonomy</CardTitle>
                    <CardDescription>Structured strength definitions</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <pre className="bg-gray-900 text-green-400 p-4 rounded text-sm overflow-x-auto">
{`domains:
  insight:
    name: "Strategic Insight"
    facets:
      - analytical_thinking
      - systems_perspective
      - pattern_recognition
    items: 240
  
  drive:
    name: "Achievement Drive"
    facets:
      - goal_orientation
      - persistence
      - initiative
    items: 180`}
                    </pre>
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
                    <CardDescription>Modular and extensible design</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="bg-gray-50 p-6 rounded-lg">
                      <div className="text-center text-gray-600">
                        <div className="space-y-4">
                          <div className="bg-white p-3 rounded border">📝 Item Bank (CSV)</div>
                          <div className="text-2xl">↓</div>
                          <div className="bg-white p-3 rounded border">🧮 IRT Scorer (Python)</div>
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
