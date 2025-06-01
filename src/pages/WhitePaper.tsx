
import { Button } from '@/components/ui/button';
import { ArrowLeft, Download, Share2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const WhitePaper = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-gray-50 border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-4 py-6">
          <div className="flex items-center justify-between mb-4">
            <Button variant="ghost" asChild>
              <Link to="/" className="flex items-center gap-2">
                <ArrowLeft className="w-4 h-4" />
                Back to Home
              </Link>
            </Button>
            <div className="flex gap-2">
              <Button variant="outline" size="sm">
                <Download className="w-4 h-4 mr-2" />
                Download PDF
              </Button>
              <Button variant="outline" size="sm">
                <Share2 className="w-4 h-4 mr-2" />
                Share
              </Button>
            </div>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-2">OpenStrengths</h1>
          <p className="text-xl text-gray-600 italic mb-1">An Open‑Source Framework for Mapping Human Potential</p>
          <p className="text-sm text-gray-500">White Paper · Version 0.1 (May 2025)</p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="prose prose-lg max-w-none">
          {/* Table of Contents */}
          <div className="bg-gray-50 p-6 rounded-lg mb-8">
            <h2 className="text-xl font-semibold mb-4">Table of Contents</h2>
            <ol className="space-y-1">
              <li><a href="#executive-summary" className="text-blue-600 hover:underline">Executive Summary</a></li>
              <li><a href="#introduction" className="text-blue-600 hover:underline">Introduction & Problem Statement</a></li>
              <li><a href="#literature-review" className="text-blue-600 hover:underline">Literature Review</a></li>
              <li><a href="#framework-architecture" className="text-blue-600 hover:underline">Framework Architecture</a></li>
              <li><a href="#psychometric-methodology" className="text-blue-600 hover:underline">Psychometric Methodology</a></li>
              <li><a href="#governance" className="text-blue-600 hover:underline">Open‑Source Governance & IP Strategy</a></li>
              <li><a href="#roadmap" className="text-blue-600 hover:underline">Implementation Roadmap</a></li>
              <li><a href="#use-cases" className="text-blue-600 hover:underline">Illustrative Use‑Cases</a></li>
              <li><a href="#call-to-action" className="text-blue-600 hover:underline">Call to Action</a></li>
              <li><a href="#references" className="text-blue-600 hover:underline">References</a></li>
            </ol>
          </div>

          {/* 1. Executive Summary */}
          <section id="executive-summary" className="mb-12">
            <h2 className="text-3xl font-bold mb-6">1. Executive Summary</h2>
            <p className="mb-4">
              OpenStrengths is a <strong>free, extensible, and transparent strengths‑assessment framework</strong> designed to democratize access to evidence-based talent measurement. Unlike proprietary assessment tools that operate as "black boxes," OpenStrengths provides complete transparency in its methodology, scoring algorithms, and item banks.
            </p>
            <p className="mb-4">
              The framework addresses three critical limitations in the current talent assessment landscape: opacity and cost barriers, cultural bias in assessment design, and incompatibility with AI-driven talent systems. By leveraging open-source principles, peer review, and modern psychometric techniques, OpenStrengths aims to become the global standard for strengths-based development.
            </p>
            <p>
              This white paper outlines the theoretical foundation, technical architecture, and implementation strategy for OpenStrengths, positioning it as a viable alternative to existing proprietary solutions while maintaining rigorous scientific standards.
            </p>
          </section>

          {/* 2. Introduction & Problem Statement */}
          <section id="introduction" className="mb-12">
            <h2 className="text-3xl font-bold mb-6">2. Introduction & Problem Statement</h2>
            
            <h3 className="text-2xl font-semibold mb-4">The Promise and Problem of Strengths Assessment</h3>
            <p className="mb-4">
              Strengths-based development has emerged as a powerful approach to human potential, with research consistently showing that individuals who use their strengths daily are more engaged, productive, and satisfied in their work. However, the current landscape of strengths assessments presents significant barriers to widespread adoption and scientific advancement.
            </p>

            <h3 className="text-2xl font-semibold mb-4">Key Problems</h3>
            
            <h4 className="text-xl font-medium mb-3">1. Opacity and Cost Barriers</h4>
            <p className="mb-4">
              Most commercial strengths assessments operate as proprietary "black boxes," with undisclosed methodologies, scoring algorithms, and validation studies. Organizations must pay substantial licensing fees for access, creating barriers for educational institutions, nonprofits, and developing economies. This opacity also prevents independent validation and limits scientific progress in the field.
            </p>

            <h4 className="text-xl font-medium mb-3">2. Cultural and Linguistic Bias</h4>
            <p className="mb-4">
              Existing assessments are predominantly developed and normed on Western, English-speaking populations. This creates systematic bias when applied globally, potentially misrepresenting strengths patterns in different cultural contexts. The lack of transparent development processes makes it difficult to identify and correct these biases.
            </p>

            <h4 className="text-xl font-medium mb-3">3. AI Integration Challenges</h4>
            <p className="mb-4">
              As artificial intelligence becomes central to talent management, the closed nature of proprietary assessments creates integration barriers. AI systems require transparent, structured data to function effectively, but existing assessments provide limited API access and no insight into their underlying models.
            </p>

            <h3 className="text-2xl font-semibold mb-4">The Open Source Solution</h3>
            <p>
              OpenStrengths addresses these challenges by applying open-source principles to psychometric assessment. By making all components—from item banks to scoring algorithms—freely available and transparent, we enable global collaboration, continuous improvement, and universal access to high-quality strengths assessment.
            </p>
          </section>

          {/* 3. Literature Review */}
          <section id="literature-review" className="mb-12">
            <h2 className="text-3xl font-bold mb-6">3. Literature Review</h2>
            
            <h3 className="text-2xl font-semibold mb-4">Theoretical Foundations</h3>
            <p className="mb-4">
              The conceptual foundation for OpenStrengths draws from several established theories in positive psychology and talent development:
            </p>
            
            <h4 className="text-xl font-medium mb-3">Clifton StrengthsFinder Legacy</h4>
            <p className="mb-4">
              Donald Clifton's pioneering work on strengths identification established the empirical foundation for strengths-based development. His research demonstrated that individuals have naturally recurring patterns of thought, feeling, and behavior that can be productively applied. While we respect this foundational work, OpenStrengths seeks to build upon it with modern methodologies and open collaboration.
            </p>

            <h4 className="text-xl font-medium mb-3">VIA Character Strengths</h4>
            <p className="mb-4">
              Peterson and Seligman's VIA (Values in Action) framework provides a complementary perspective on character strengths and virtues. Their emphasis on cross-cultural validation and scientific rigor informs our approach to ensuring OpenStrengths works across diverse populations.
            </p>

            <h4 className="text-xl font-medium mb-3">Modern Psychometric Theory</h4>
            <p className="mb-4">
              Item Response Theory (IRT) and Computer Adaptive Testing (CAT) represent significant advances in measurement precision and efficiency. OpenStrengths leverages these modern techniques to provide more accurate assessments with fewer items, reducing respondent burden while maintaining reliability.
            </p>

            <h3 className="text-2xl font-semibold mb-4">Open Source Precedents</h3>
            <p className="mb-4">
              The success of open-source projects in other domains provides a roadmap for OpenStrengths:
            </p>
            
            <ul className="mb-4 space-y-2">
              <li><strong>Software Development:</strong> Linux, Apache, and countless other projects demonstrate that open collaboration can produce superior outcomes to proprietary alternatives.</li>
              <li><strong>Scientific Research:</strong> Open access publishing and collaborative research platforms have accelerated discovery across disciplines.</li>
              <li><strong>Educational Resources:</strong> Projects like Khan Academy and Coursera have democratized access to high-quality learning materials.</li>
            </ul>
          </section>

          {/* 4. Framework Architecture */}
          <section id="framework-architecture" className="mb-12">
            <h2 className="text-3xl font-bold mb-6">4. Framework Architecture</h2>
            
            <h3 className="text-2xl font-semibold mb-4">The Six-Domain Model</h3>
            <p className="mb-4">
              OpenStrengths organizes human strengths into six core domains, each representing a fundamental category of talent:
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="border border-gray-200 rounded-lg p-4">
                <h4 className="text-lg font-semibold text-blue-600 mb-2">🧠 Insight</h4>
                <p className="text-sm">Strategic analysis, pattern recognition, and sense-making capabilities.</p>
              </div>
              <div className="border border-gray-200 rounded-lg p-4">
                <h4 className="text-lg font-semibold text-red-600 mb-2">⚡ Drive</h4>
                <p className="text-sm">Goal-directed execution, persistence, and achievement orientation.</p>
              </div>
              <div className="border border-gray-200 rounded-lg p-4">
                <h4 className="text-lg font-semibold text-green-600 mb-2">🤝 Connection</h4>
                <p className="text-sm">Relationship building, empathy, and interpersonal effectiveness.</p>
              </div>
              <div className="border border-gray-200 rounded-lg p-4">
                <h4 className="text-lg font-semibold text-purple-600 mb-2">📣 Influence</h4>
                <p className="text-sm">Persuasion, mobilization, and leadership capabilities.</p>
              </div>
              <div className="border border-gray-200 rounded-lg p-4">
                <h4 className="text-lg font-semibold text-orange-600 mb-2">🎨 Creativity</h4>
                <p className="text-sm">Divergent thinking, innovation, and synthesis abilities.</p>
              </div>
              <div className="border border-gray-200 rounded-lg p-4">
                <h4 className="text-lg font-semibold text-gray-600 mb-2">🛡️ Stability</h4>
                <p className="text-sm">Reliability, risk management, and consistent execution.</p>
              </div>
            </div>

            <h3 className="text-2xl font-semibold mb-4">Hierarchical Structure</h3>
            <p className="mb-4">
              Each domain contains multiple themes (similar to CliftonStrengths themes), and each theme comprises specific facets. This hierarchical structure allows for both broad domain-level insights and granular behavioral predictions.
            </p>

            <h3 className="text-2xl font-semibold mb-4">Technical Components</h3>
            <ul className="space-y-2 mb-4">
              <li><strong>Item Bank:</strong> Comprehensive collection of assessment items in multiple languages</li>
              <li><strong>Scoring Engine:</strong> IRT-based algorithms for precise measurement</li>
              <li><strong>Adaptive Testing Platform:</strong> Reduces assessment time while maintaining accuracy</li>
              <li><strong>Reporting System:</strong> Generates detailed, actionable strength profiles</li>
              <li><strong>API Framework:</strong> Enables integration with existing HR and learning systems</li>
            </ul>
          </section>

          {/* 5. Psychometric Methodology */}
          <section id="psychometric-methodology" className="mb-12">
            <h2 className="text-3xl font-bold mb-6">5. Psychometric Methodology</h2>
            
            <h3 className="text-2xl font-semibold mb-4">Item Response Theory (IRT)</h3>
            <p className="mb-4">
              OpenStrengths employs a two-parameter logistic (2-PL) IRT model for scoring. This approach provides several advantages over classical test theory:
            </p>
            <ul className="space-y-2 mb-4">
              <li>More precise measurement across all ability levels</li>
              <li>Adaptive testing capabilities</li>
              <li>Item-level analysis for continuous improvement</li>
              <li>Cross-cultural invariance testing</li>
            </ul>

            <h3 className="text-2xl font-semibold mb-4">Forced-Choice Format</h3>
            <p className="mb-4">
              To minimize social desirability bias and faking, OpenStrengths uses forced-choice items where respondents must choose between equally desirable options. This format has been shown to improve validity in high-stakes assessment contexts.
            </p>

            <h3 className="text-2xl font-semibold mb-4">Bayesian Scoring</h3>
            <p className="mb-4">
              The scoring algorithm incorporates Bayesian methods to provide:
            </p>
            <ul className="space-y-2 mb-4">
              <li>Confidence intervals around strength estimates</li>
              <li>Ability to incorporate prior information</li>
              <li>Robust handling of missing data</li>
              <li>Continuous learning from new response data</li>
            </ul>

            <h3 className="text-2xl font-semibold mb-4">Validation Strategy</h3>
            <p className="mb-4">
              OpenStrengths follows a comprehensive validation approach:
            </p>
            <ul className="space-y-2 mb-4">
              <li><strong>Content Validity:</strong> Expert review and cognitive interviewing</li>
              <li><strong>Construct Validity:</strong> Factor analysis and convergent/discriminant validity studies</li>
              <li><strong>Criterion Validity:</strong> Prediction of performance outcomes</li>
              <li><strong>Cross-Cultural Validity:</strong> Measurement invariance across cultures</li>
            </ul>
          </section>

          {/* 6. Open-Source Governance */}
          <section id="governance" className="mb-12">
            <h2 className="text-3xl font-bold mb-6">6. Open‑Source Governance & IP Strategy</h2>
            
            <h3 className="text-2xl font-semibold mb-4">Licensing Framework</h3>
            <p className="mb-4">
              OpenStrengths uses a dual licensing approach:
            </p>
            <ul className="space-y-2 mb-4">
              <li><strong>Apache 2.0 License:</strong> For core framework components, allowing commercial use with attribution</li>
              <li><strong>Creative Commons:</strong> For content, documentation, and educational materials</li>
            </ul>

            <h3 className="text-2xl font-semibold mb-4">Governance Structure</h3>
            <p className="mb-4">
              The project employs a merit-based governance model similar to Apache Software Foundation projects:
            </p>
            <ul className="space-y-2 mb-4">
              <li><strong>Steering Committee:</strong> Strategic direction and major decisions</li>
              <li><strong>Technical Advisory Board:</strong> Psychometric and technical oversight</li>
              <li><strong>Working Groups:</strong> Domain-specific development teams</li>
              <li><strong>Community Council:</strong> User representation and feedback</li>
            </ul>

            <h3 className="text-2xl font-semibold mb-4">Quality Assurance</h3>
            <p className="mb-4">
              All contributions undergo rigorous peer review:
            </p>
            <ul className="space-y-2 mb-4">
              <li>Statistical analysis of new items and models</li>
              <li>Cross-validation studies</li>
              <li>Bias and fairness testing</li>
              <li>Documentation and reproducibility requirements</li>
            </ul>
          </section>

          {/* 7. Implementation Roadmap */}
          <section id="roadmap" className="mb-12">
            <h2 className="text-3xl font-bold mb-6">7. Implementation Roadmap</h2>
            
            <div className="space-y-6">
              <div className="border-l-4 border-green-500 pl-4">
                <h4 className="text-lg font-semibold text-green-700">Phase 1: Foundation (Q2-Q4 2025)</h4>
                <ul className="mt-2 space-y-1 text-sm">
                  <li>✓ Complete initial item bank development</li>
                  <li>✓ Implement basic scoring algorithms</li>
                  <li>✓ Launch community platform and governance</li>
                  <li>• Conduct pilot validation studies</li>
                </ul>
              </div>

              <div className="border-l-4 border-blue-500 pl-4">
                <h4 className="text-lg font-semibold text-blue-700">Phase 2: Validation (Q1-Q3 2026)</h4>
                <ul className="mt-2 space-y-1 text-sm">
                  <li>• Large-scale calibration study (n{'>'}10,000)</li>
                  <li>• Cross-cultural validation</li>
                  <li>• Criterion validity studies</li>
                  <li>• API development and testing</li>
                </ul>
              </div>

              <div className="border-l-4 border-purple-500 pl-4">
                <h4 className="text-lg font-semibold text-purple-700">Phase 3: Platform (Q4 2026-Q2 2027)</h4>
                <ul className="mt-2 space-y-1 text-sm">
                  <li>• Adaptive testing implementation</li>
                  <li>• Advanced reporting and analytics</li>
                  <li>• Mobile applications</li>
                  <li>• Integration partnerships</li>
                </ul>
              </div>

              <div className="border-l-4 border-orange-500 pl-4">
                <h4 className="text-lg font-semibold text-orange-700">Phase 4: Ecosystem (Q3 2027+)</h4>
                <ul className="mt-2 space-y-1 text-sm">
                  <li>• AI-powered coaching recommendations</li>
                  <li>• Team dynamics and compatibility tools</li>
                  <li>• Learning pathway integration</li>
                  <li>• Global localization expansion</li>
                </ul>
              </div>
            </div>
          </section>

          {/* 8. Use Cases */}
          <section id="use-cases" className="mb-12">
            <h2 className="text-3xl font-bold mb-6">8. Illustrative Use‑Cases</h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="border border-gray-200 rounded-lg p-6">
                <h4 className="text-lg font-semibold mb-3">Educational Institutions</h4>
                <p className="text-sm mb-3">Universities can integrate OpenStrengths into career counseling and student development programs without licensing costs.</p>
                <p className="text-xs text-gray-600"><strong>Impact:</strong> Democratized access to strength-based career guidance</p>
              </div>

              <div className="border border-gray-200 rounded-lg p-6">
                <h4 className="text-lg font-semibold mb-3">Global Organizations</h4>
                <p className="text-sm mb-3">Multinational companies can use culturally validated assessments across diverse employee populations.</p>
                <p className="text-xs text-gray-600"><strong>Impact:</strong> Reduced bias in talent management decisions</p>
              </div>

              <div className="border border-gray-200 rounded-lg p-6">
                <h4 className="text-lg font-semibold mb-3">Research Institutions</h4>
                <p className="text-sm mb-3">Researchers can access transparent methodologies and datasets for strengths-related studies.</p>
                <p className="text-xs text-gray-600"><strong>Impact:</strong> Accelerated scientific progress in positive psychology</p>
              </div>

              <div className="border border-gray-200 rounded-lg p-6">
                <h4 className="text-lg font-semibold mb-3">AI/ML Applications</h4>
                <p className="text-sm mb-3">Technology companies can integrate structured strength data into intelligent talent platforms.</p>
                <p className="text-xs text-gray-600"><strong>Impact:</strong> Next-generation personalized development systems</p>
              </div>
            </div>
          </section>

          {/* 9. Call to Action */}
          <section id="call-to-action" className="mb-12">
            <h2 className="text-3xl font-bold mb-6">9. Call to Action</h2>
            
            <p className="mb-6 text-lg">
              OpenStrengths represents more than a new assessment tool—it's a movement toward democratizing human potential measurement and development. We invite collaboration from:
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <h4 className="text-lg font-semibold mb-3">🔬 Researchers & Academics</h4>
                <ul className="space-y-1 text-sm">
                  <li>Contribute to validation studies</li>
                  <li>Develop new assessment items</li>
                  <li>Conduct cross-cultural research</li>
                  <li>Publish open-access findings</li>
                </ul>
              </div>

              <div>
                <h4 className="text-lg font-semibold mb-3">💻 Developers & Technologists</h4>
                <ul className="space-y-1 text-sm">
                  <li>Build assessment platforms</li>
                  <li>Improve scoring algorithms</li>
                  <li>Create integration tools</li>
                  <li>Develop mobile applications</li>
                </ul>
              </div>

              <div>
                <h4 className="text-lg font-semibold mb-3">🏢 Organizations & Practitioners</h4>
                <ul className="space-y-1 text-sm">
                  <li>Pilot OpenStrengths in your context</li>
                  <li>Provide feedback and use cases</li>
                  <li>Contribute data for validation</li>
                  <li>Share implementation insights</li>
                </ul>
              </div>

              <div>
                <h4 className="text-lg font-semibold mb-3">🌍 Global Community</h4>
                <ul className="space-y-1 text-sm">
                  <li>Translate materials into local languages</li>
                  <li>Adapt items for cultural contexts</li>
                  <li>Advocate for open assessment</li>
                  <li>Build local user communities</li>
                </ul>
              </div>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 text-center">
              <h4 className="text-xl font-semibold mb-2">Get Involved Today</h4>
              <p className="mb-4">Join the movement to democratize strengths assessment</p>
              <div className="flex flex-wrap justify-center gap-3">
                <Button asChild>
                  <a href="https://github.com/openstrengths">GitHub Repository</a>
                </Button>
                <Button variant="outline">
                  <a href="#newsletter">Join Newsletter</a>
                </Button>
                <Button variant="outline">
                  <a href="#discord">Discord Community</a>
                </Button>
              </div>
            </div>
          </section>

          {/* 10. References */}
          <section id="references" className="mb-12">
            <h2 className="text-3xl font-bold mb-6">10. References</h2>
            
            <div className="text-sm space-y-3">
              <p>
                Clifton, D. O., & Harter, J. K. (2003). <em>Investing in strengths.</em> In K. S. Cameron, J. E. Dutton, & R. E. Quinn (Eds.), Positive organizational scholarship (pp. 111-121). Berrett-Koehler Publishers.
              </p>
              
              <p>
                Peterson, C., & Seligman, M. E. P. (2004). <em>Character strengths and virtues: A handbook and classification.</em> Oxford University Press.
              </p>
              
              <p>
                Embretson, S. E., & Reise, S. P. (2000). <em>Item response theory for psychologists.</em> Lawrence Erlbaum Associates.
              </p>
              
              <p>
                Brown, A., & Maydeu-Olivares, A. (2013). How IRT can solve problems of ipsative data in forced-choice questionnaires. <em>Psychological Methods, 18</em>(1), 36-52.
              </p>
              
              <p>
                Vandenberg, R. J., & Lance, C. E. (2000). A review and synthesis of the measurement invariance literature: Suggestions, practices, and recommendations for organizational research. <em>Organizational Research Methods, 3</em>(4), 4-70.
              </p>

              <p>
                Raymond, E. S. (1999). <em>The cathedral and the bazaar: Musings on linux and open source by an accidental revolutionary.</em> O'Reilly Media.
              </p>
            </div>
          </section>

          {/* Footer */}
          <footer className="border-t border-gray-200 pt-8 mt-12 text-center text-sm text-gray-600">
            <p className="mb-2">
              <strong>OpenStrengths White Paper v0.1</strong> • May 2025
            </p>
            <p className="mb-2">
              Licensed under Creative Commons Attribution 4.0 International License
            </p>
            <p>
              For the latest version and updates, visit: 
              <a href="https://github.com/openstrengths" className="text-blue-600 hover:underline ml-1">
                github.com/openstrengths
              </a>
            </p>
          </footer>
        </div>
      </div>
    </div>
  );
};

export default WhitePaper;
