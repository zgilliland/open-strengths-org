
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const UnderTheHood = () => {
  return (
    <section id="science" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-4">Under the Hood</h2>
          <p className="text-xl text-muted-foreground">How it works — and why you can trust it</p>
        </div>

        <Tabs defaultValue="trust" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="trust">Why You Can Trust It</TabsTrigger>
            <TabsTrigger value="adaptive">How Questions Adapt</TabsTrigger>
            <TabsTrigger value="data">Your Data</TabsTrigger>
          </TabsList>

          <TabsContent value="trust">
            <Card>
              <CardHeader>
                <CardTitle>Rigorous by Design</CardTitle>
                <CardDescription>Every decision is backed by evidence</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 rounded-full bg-primary flex-shrink-0" />
                    <span>Research compared 4-, 5-, 6-, and 7-factor models — the 6-factor structure was selected for the clearest construct boundaries and best real-world prediction</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 rounded-full bg-primary flex-shrink-0" />
                    <span>Every facet loads uniquely in factor analysis — no redundancy, each grounded in peer-reviewed research</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 rounded-full bg-primary flex-shrink-0" />
                    <span>Anti-faking measures planned: forced-choice items and response-time checks</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 rounded-full bg-primary flex-shrink-0" />
                    <span>All scoring algorithms, factor loadings, and IRT parameters will be public and reproducible</span>
                  </li>
                </ul>
                <p className="text-sm font-medium text-foreground pt-2 border-t border-border">
                  Built on peer-reviewed methods — and you can verify every step.
                </p>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="adaptive">
            <Card>
              <CardHeader>
                <CardTitle>Adaptive Measurement</CardTitle>
                <CardDescription>Same construct, your context</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-muted-foreground text-sm">
                  AI generates assessment items matched to your reading level and context. Every item passes semantic verification to ensure it measures the same thing — regardless of how it's worded.
                </p>

                <div>
                  <p className="text-xs font-semibold text-muted-foreground uppercase mb-3">
                    Example: Curiosity — three contexts, one measurement
                  </p>
                  <div className="space-y-3">
                    <div className="bg-muted/50 p-4 rounded-lg border border-border">
                      <div className="text-xs font-semibold text-muted-foreground uppercase mb-1">Standard</div>
                      <p className="text-sm text-foreground">"I enjoy exploring topics I know nothing about."</p>
                    </div>
                    <div className="bg-muted/50 p-4 rounded-lg border border-border">
                      <div className="text-xs font-semibold text-primary uppercase mb-1">Student</div>
                      <p className="text-sm text-foreground">"I like picking electives in subjects I haven't tried."</p>
                    </div>
                    <div className="bg-muted/50 p-4 rounded-lg border border-border">
                      <div className="text-xs font-semibold text-primary uppercase mb-1">Professional</div>
                      <p className="text-sm text-foreground">"I volunteer for projects outside my expertise."</p>
                    </div>
                  </div>
                </div>

                <p className="text-sm font-medium text-foreground pt-2 border-t border-border">
                  AI generates and verifies questions. It never tells you who you are.
                </p>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="data">
            <Card>
              <CardHeader>
                <CardTitle>Open and Portable</CardTitle>
                <CardDescription>Your results belong to you</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 rounded-full bg-primary flex-shrink-0" />
                    <span>Open API — integrate your profile with career tools, learning platforms, and coaching apps</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 rounded-full bg-primary flex-shrink-0" />
                    <span>OAuth 2.0 — you decide who sees what, and revoke access anytime</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 rounded-full bg-primary flex-shrink-0" />
                    <span>Standardized JSON formats — no vendor lock-in, no data silos</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 rounded-full bg-primary flex-shrink-0" />
                    <span>Apache-2.0 license — the code, algorithms, and item bank are all public</span>
                  </li>
                </ul>
                <p className="text-sm font-medium text-foreground pt-2 border-t border-border">
                  Your strengths profile belongs to you, not a platform.
                </p>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default UnderTheHood;
