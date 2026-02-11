
import { Search, Globe, DollarSign } from 'lucide-react';

const Challenge = () => {
  const scrollToScience = () => {
    const element = document.querySelector('#science');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="the-challenge" className="py-20 bg-gradient-to-b from-background to-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-foreground mb-4">The Challenge</h2>
        </div>

        {/* Beat 1: The Need */}
        <div className="mb-10">
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-12 border border-blue-100">
            <div className="max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold text-foreground mb-6 text-center">The Need</h3>
              <p className="text-xl text-muted-foreground leading-relaxed mb-6">
                Everyone searches for self-understanding. Personality quizzes go viral. Astrology has 83 billion views on TikTok. The desire is fundamental.
              </p>
              <p className="text-xl text-muted-foreground leading-relaxed mb-6">
                Some tools deliver — Myers-Briggs gave us "introvert" and "extrovert." CliftonStrengths goes deeper still. But most people never access them: <span className="font-semibold text-blue-700">$30–200 per person</span>, invisible outside corporate settings.
              </p>
              <blockquote className="border-l-4 border-blue-400 pl-6 py-2 mt-8">
                <p className="text-xl italic text-blue-800 font-medium">
                  "Everyone deserves to know what's strong in them."
                </p>
              </blockquote>
            </div>
          </div>
        </div>

        {/* Beat 2: The AI Problem */}
        <div className="mb-10">
          <div className="bg-gradient-to-r from-orange-50 to-red-50 rounded-2xl p-12 border border-orange-100">
            <div className="max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold text-foreground mb-6 text-center">The AI Problem</h3>
              <p className="text-xl text-muted-foreground leading-relaxed mb-6">
                AI met people where they were. <span className="font-semibold text-orange-700">220 million</span> companion app downloads. A third of teens discuss serious life issues with AI. It responds to your situation, it's there at 2am, it won't charge by the hour.
              </p>
              <p className="text-xl text-muted-foreground leading-relaxed mb-6">
                But there's nothing underneath — no framework, no evidence. Systems validate what you want to hear <span className="font-semibold text-orange-700">50% more</span> than a human would. Early research shows sustained AI identity conversations lower confidence in decision-making.
              </p>
              <blockquote className="border-l-4 border-orange-400 pl-6 py-2 mt-8">
                <p className="text-lg italic text-orange-800 font-medium">
                  "The question isn't whether AI will shape how people understand themselves. It already does. The question is whether there will be anything real underneath."
                </p>
              </blockquote>
            </div>
          </div>
        </div>

        {/* Beat 3: Our Answer */}
        <div className="mb-16">
          <div className="bg-gradient-to-r from-primary/5 to-primary/10 rounded-2xl p-12 border border-primary/20">
            <div className="max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold text-foreground mb-4 text-center">Our Answer</h3>
              <p className="text-xl text-muted-foreground leading-relaxed mb-10 text-center">
                OpenStrengths is building that foundation — an open-source strengths framework grounded in measurement science, free for everyone, forever.
              </p>

              <div className="grid md:grid-cols-3 gap-8">
                <div className="bg-background rounded-xl p-8 border border-primary/20 hover:shadow-lg transition-all duration-300">
                  <div className="text-center">
                    <div className="flex justify-center mb-4">
                      <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center">
                        <Search className="w-6 h-6 text-primary-foreground" />
                      </div>
                    </div>
                    <h4 className="text-lg font-semibold text-primary mb-3">Transparent</h4>
                    <p className="text-muted-foreground text-sm leading-relaxed">Open algorithms, public research. If it's true, show your work.</p>
                  </div>
                </div>

                <div className="bg-background rounded-xl p-8 border border-primary/20 hover:shadow-lg transition-all duration-300">
                  <div className="text-center">
                    <div className="flex justify-center mb-4">
                      <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center">
                        <Globe className="w-6 h-6 text-primary-foreground" />
                      </div>
                    </div>
                    <h4 className="text-lg font-semibold text-primary mb-3">Built for Humans</h4>
                    <p className="text-muted-foreground text-sm leading-relaxed">Measurement should fit the person — adaptive to context, culture, and reading level.</p>
                  </div>
                </div>

                <div className="bg-background rounded-xl p-8 border border-primary/20 hover:shadow-lg transition-all duration-300">
                  <div className="text-center">
                    <div className="flex justify-center mb-4">
                      <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center">
                        <DollarSign className="w-6 h-6 text-primary-foreground" />
                      </div>
                    </div>
                    <h4 className="text-lg font-semibold text-primary mb-3">Free Forever</h4>
                    <p className="text-muted-foreground text-sm leading-relaxed">Self-knowledge is a right, not a product. Your identity data belongs to you.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <button
            onClick={scrollToScience}
            className="inline-flex items-center text-primary hover:text-primary/80 font-semibold text-xl group bg-background px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
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
