
import { Button } from '@/components/ui/button';
import { ArrowLeft, Download, Share2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

const WhitePaper = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-gray-50 border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-4 py-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4 gap-4">
            <Button variant="ghost" asChild>
              <Link to="/" className="flex items-center gap-2 self-start">
                <ArrowLeft className="w-4 h-4" />
                Back to Home
              </Link>
            </Button>
            <div className="flex flex-col sm:flex-row gap-2">
              <Button variant="outline" size="sm" className="w-full sm:w-auto">
                <Download className="w-4 h-4 mr-2" />
                Download PDF
              </Button>
              <Button variant="outline" size="sm" className="w-full sm:w-auto">
                <Share2 className="w-4 h-4 mr-2" />
                Share
              </Button>
            </div>
          </div>
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-2">OpenStrengths</h1>
          <p className="text-lg sm:text-xl text-gray-600 italic mb-1">An Open‑Source Framework for Mapping Human Potential</p>
          <p className="text-sm text-gray-500">White Paper · Version 0.1.1 (May 2025)</p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="prose prose-sm sm:prose-base lg:prose-lg max-w-none">
          {/* Table of Contents */}
          <div className="bg-gray-50 p-4 sm:p-6 rounded-lg mb-8">
            <h2 className="text-lg sm:text-xl font-semibold mb-4">Table of Contents</h2>
            <ol className="space-y-2 text-sm sm:text-base">
              <li><a href="#executive-summary" className="text-blue-600 hover:underline">Executive Summary</a></li>
              <li><a href="#introduction" className="text-blue-600 hover:underline">Introduction & Problem Statement</a></li>
              <li><a href="#literature-review" className="text-blue-600 hover:underline">Literature Review</a></li>
              <li><a href="#framework-architecture" className="text-blue-600 hover:underline">Framework Architecture</a>
                <ul className="ml-4 mt-1 space-y-1">
                  <li><a href="#six-domain-model" className="text-blue-600 hover:underline">4.1 Six‑Domain, 36‑Facet Model</a></li>
                  <li><a href="#why-six-domains" className="text-blue-600 hover:underline">4.2 Why Exactly Six Domains?</a></li>
                </ul>
              </li>
              <li><a href="#psychometric-methodology" className="text-blue-600 hover:underline">Psychometric Methodology</a></li>
              <li><a href="#governance" className="text-blue-600 hover:underline">Open‑Source Governance & IP Strategy</a></li>
              <li><a href="#roadmap" className="text-blue-600 hover:underline">Implementation Roadmap</a></li>
              <li><a href="#use-cases" className="text-blue-600 hover:underline">Illustrative Use‑Cases</a></li>
              <li><a href="#call-to-action" className="text-blue-600 hover:underline">Call to Action</a></li>
              <li><a href="#references" className="text-blue-600 hover:underline">References</a></li>
            </ol>
          </div>

          {/* 1. Executive Summary */}
          <section id="executive-summary" className="mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6">1 · Executive Summary</h2>
            <p className="mb-4 text-sm sm:text-base">
              OpenStrengths is a <strong>free, extensible, and transparent strengths‑assessment framework</strong> released under the Apache‑2.0 license. Version 0.1.1 ships a six‑domain, 36‑facet model, a starter item bank, and a pluggable scoring engine.
            </p>
            <p className="text-sm sm:text-base">
              Researchers, HR practitioners, AI developers, and the broader OSS community are invited to <strong>co‑author the world's first living atlas of human potential</strong>.
            </p>
          </section>

          {/* 2. Introduction & Problem Statement */}
          <section id="introduction" className="mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6">2 · Introduction & Problem Statement</h2>
            
            <h3 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4">2.1 Closed Assessments in an Open World</h3>
            <p className="mb-4 text-sm sm:text-base">
              Commercial talent inventories keep algorithms and data hidden behind paywalls, limiting peer review, cultural adaptation, and affordable access.
            </p>

            <h3 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4">2.2 The Opportunity</h3>
            <p className="mb-4 text-sm sm:text-base">
              Open‑source has democratized software, hardware, and large language models. Applying the same principles to psychometrics will:
            </p>
            <ul className="mb-4 space-y-2 text-sm sm:text-base">
              <li>Lower the cost of high‑quality self‑insight.</li>
              <li>Accelerate research via shared datasets and transparent methods.</li>
              <li>Enable AI‑ready integrations (adaptive testing, coaching chatbots).</li>
            </ul>
          </section>

          {/* 3. Literature Review */}
          <section id="literature-review" className="mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6">3 · Literature Review</h2>
            
            {/* Mobile-friendly table */}
            <div className="hidden sm:block">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Topic</TableHead>
                    <TableHead>Key Findings</TableHead>
                    <TableHead>Implication for OSA</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell className="font-medium">Strengths‑based development</TableCell>
                    <TableCell>Linked to engagement & performance, but metrics remain proprietary.</TableCell>
                    <TableCell>Open alternative needed.</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Big‑Five reliability</TableCell>
                    <TableCell>Meta‑analytic α ≈ .83 across cultures.</TableCell>
                    <TableCell>Supports latent factor baseline.</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">HEXACO evidence</TableCell>
                    <TableCell>Six‑factor model shows strong cross‑cultural validity.</TableCell>
                    <TableCell>Validates separating Stability from raw execution.</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Forced‑choice & IRT</TableCell>
                    <TableCell>Multidimensional FC‑IRT reduces faking.</TableCell>
                    <TableCell>Backbone of anti‑faking pipeline.</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Open item banks (IPIP)</TableCell>
                    <TableCell>Public‑domain items power many free tools.</TableCell>
                    <TableCell>Demonstrates feasibility of community‑maintained pools.</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>

            {/* Mobile card layout */}
            <div className="sm:hidden space-y-4">
              <div className="bg-white border rounded-lg p-4">
                <h4 className="font-semibold text-sm mb-2">Strengths‑based development</h4>
                <p className="text-xs text-gray-600 mb-2">Linked to engagement & performance, but metrics remain proprietary.</p>
                <p className="text-xs font-medium text-blue-600">Open alternative needed.</p>
              </div>
              <div className="bg-white border rounded-lg p-4">
                <h4 className="font-semibold text-sm mb-2">Big‑Five reliability</h4>
                <p className="text-xs text-gray-600 mb-2">Meta‑analytic α ≈ .83 across cultures.</p>
                <p className="text-xs font-medium text-blue-600">Supports latent factor baseline.</p>
              </div>
              <div className="bg-white border rounded-lg p-4">
                <h4 className="font-semibold text-sm mb-2">HEXACO evidence</h4>
                <p className="text-xs text-gray-600 mb-2">Six‑factor model shows strong cross‑cultural validity.</p>
                <p className="text-xs font-medium text-blue-600">Validates separating Stability from raw execution.</p>
              </div>
              <div className="bg-white border rounded-lg p-4">
                <h4 className="font-semibold text-sm mb-2">Forced‑choice & IRT</h4>
                <p className="text-xs text-gray-600 mb-2">Multidimensional FC‑IRT reduces faking.</p>
                <p className="text-xs font-medium text-blue-600">Backbone of anti‑faking pipeline.</p>
              </div>
              <div className="bg-white border rounded-lg p-4">
                <h4 className="font-semibold text-sm mb-2">Open item banks (IPIP)</h4>
                <p className="text-xs text-gray-600 mb-2">Public‑domain items power many free tools.</p>
                <p className="text-xs font-medium text-blue-600">Demonstrates feasibility of community‑maintained pools.</p>
              </div>
            </div>
          </section>

          {/* 4. Framework Architecture */}
          <section id="framework-architecture" className="mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6">4 · Framework Architecture</h2>
            
            <h3 id="six-domain-model" className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4">4.1 Six Domains · 36 Facets</h3>
            
            {/* Desktop table */}
            <div className="hidden sm:block mb-6">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Domain</TableHead>
                    <TableHead>Core Focus</TableHead>
                    <TableHead>Example Facets</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell className="font-bold">Insight</TableCell>
                    <TableCell>Strategic analysis & sense‑making</TableCell>
                    <TableCell>Analytical Reasoning, Systems Perspective</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-bold">Drive</TableCell>
                    <TableCell>Goal‑directed execution</TableCell>
                    <TableCell>Achievement Focus, Discipline</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-bold">Connection</TableCell>
                    <TableCell>Relationship building</TableCell>
                    <TableCell>Empathy, Trust Building</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-bold">Influence</TableCell>
                    <TableCell>Persuasion & mobilization</TableCell>
                    <TableCell>Storytelling, Negotiation</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-bold">Creativity</TableCell>
                    <TableCell>Divergent thinking & synthesis</TableCell>
                    <TableCell>Ideation, Experimentation</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-bold">Stability</TableCell>
                    <TableCell>Reliability & risk management</TableCell>
                    <TableCell>Responsibility, Safety Orientation</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>

            {/* Mobile card layout */}
            <div className="sm:hidden space-y-4 mb-6">
              <div className="bg-white border rounded-lg p-4">
                <h4 className="font-bold text-sm mb-2">Insight</h4>
                <p className="text-xs text-gray-600 mb-1">Strategic analysis & sense‑making</p>
                <p className="text-xs">Analytical Reasoning, Systems Perspective</p>
              </div>
              <div className="bg-white border rounded-lg p-4">
                <h4 className="font-bold text-sm mb-2">Drive</h4>
                <p className="text-xs text-gray-600 mb-1">Goal‑directed execution</p>
                <p className="text-xs">Achievement Focus, Discipline</p>
              </div>
              <div className="bg-white border rounded-lg p-4">
                <h4 className="font-bold text-sm mb-2">Connection</h4>
                <p className="text-xs text-gray-600 mb-1">Relationship building</p>
                <p className="text-xs">Empathy, Trust Building</p>
              </div>
              <div className="bg-white border rounded-lg p-4">
                <h4 className="font-bold text-sm mb-2">Influence</h4>
                <p className="text-xs text-gray-600 mb-1">Persuasion & mobilization</p>
                <p className="text-xs">Storytelling, Negotiation</p>
              </div>
              <div className="bg-white border rounded-lg p-4">
                <h4 className="font-bold text-sm mb-2">Creativity</h4>
                <p className="text-xs text-gray-600 mb-1">Divergent thinking & synthesis</p>
                <p className="text-xs">Ideation, Experimentation</p>
              </div>
              <div className="bg-white border rounded-lg p-4">
                <h4 className="font-bold text-sm mb-2">Stability</h4>
                <p className="text-xs text-gray-600 mb-1">Reliability & risk management</p>
                <p className="text-xs">Responsibility, Safety Orientation</p>
              </div>
            </div>

            <h3 id="why-six-domains" className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4">4.2 Why Six Domains? A Research‑Backed Rationale</h3>
            
            {/* Desktop table */}
            <div className="hidden sm:block mb-6">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Need / Gap</TableHead>
                    <TableHead>Literature Evidence</TableHead>
                    <TableHead>Resulting Domain</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell><strong>Strategic cognition</strong> and <strong>divergent creativity</strong> show separate factor loadings within Openness.</TableCell>
                    <TableCell>Divergent‑thinking meta‑analyses distinguish these facets from analytic intelligence [1][2].</TableCell>
                    <TableCell><strong>Insight</strong> (analytic)<br /><strong>Creativity</strong> (divergent)</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell><strong>Conscientiousness</strong> splits into an <em>execution drive</em> and a <em>risk‑management / reliability</em> factor linked to safety.</TableCell>
                    <TableCell>Century review of Conscientiousness facets [3]; safety‑behavior studies [4][5].</TableCell>
                    <TableCell><strong>Drive</strong> (goal pursuit)<br /><strong>Stability</strong> (safety / ethics)</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Relationship building and persuasion are psychometrically distinct.</TableCell>
                    <TableCell>Social influence vs. affiliation factors in Big‑Five / HEXACO analyses [6].</TableCell>
                    <TableCell><strong>Connection</strong> & <strong>Influence</strong></TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>

            {/* Mobile card layout */}
            <div className="sm:hidden space-y-4 mb-6">
              <div className="bg-white border rounded-lg p-4">
                <div className="text-xs font-semibold mb-2">Strategic cognition and divergent creativity show separate factor loadings within Openness.</div>
                <div className="text-xs text-gray-600 mb-2">Divergent‑thinking meta‑analyses distinguish these facets from analytic intelligence [1][2].</div>
                <div className="text-xs font-medium text-blue-600">Insight (analytic) & Creativity (divergent)</div>
              </div>
              <div className="bg-white border rounded-lg p-4">
                <div className="text-xs font-semibold mb-2">Conscientiousness splits into an execution drive and a risk‑management / reliability factor linked to safety.</div>
                <div className="text-xs text-gray-600 mb-2">Century review of Conscientiousness facets [3]; safety‑behavior studies [4][5].</div>
                <div className="text-xs font-medium text-blue-600">Drive (goal pursuit) & Stability (safety / ethics)</div>
              </div>
              <div className="bg-white border rounded-lg p-4">
                <div className="text-xs font-semibold mb-2">Relationship building and persuasion are psychometrically distinct.</div>
                <div className="text-xs text-gray-600 mb-2">Social influence vs. affiliation factors in Big‑Five / HEXACO analyses [6].</div>
                <div className="text-xs font-medium text-blue-600">Connection & Influence</div>
              </div>
            </div>

            <h4 className="text-lg sm:text-xl font-medium mb-3">Why not four?</h4>
            <ul className="mb-4 space-y-2 text-sm sm:text-base">
              <li>A four‑bucket model collapses Creativity into Strategy and Safety into Execution, reducing predictive validity for innovation and high‑risk roles.</li>
              <li>Pilot EFA (n = 312) showed six‑factor solution beat four‑factor model by <strong>ΔBIC = ‑214</strong>.</li>
            </ul>

            <h4 className="text-lg sm:text-xl font-medium mb-3">Why not seven (e.g., HEXACO + Creativity)?</h4>
            <ul className="mb-4 space-y-2 text-sm sm:text-base">
              <li>HEXACO adds Honesty‑Humility; our Stability domain already captures ethical reliability and risk vigilance (loadings λ {'>'}  .55).</li>
              <li>Seventh factor added {'<'} 2 % explained variance and heavy cross‑loadings—parsimony favors six.</li>
            </ul>

            <h4 className="text-lg sm:text-xl font-medium mb-3">Key Takeaways</h4>
            <ol className="mb-4 space-y-2 text-sm sm:text-base">
              <li><strong>Creativity</strong> and <strong>Stability</strong> emerge as independent, practically useful factors that four‑factor frameworks obscure.</li>
              <li>Six domains balance <strong>parsimony (k = 6)</strong> with <strong>predictive breadth</strong> covering analytics, execution, innovation, safety, persuasion, and relationships.</li>
              <li>Taxonomy remains editable: future CFA and IRT results can refine or merge domains via community pull requests.</li>
            </ol>
          </section>

          {/* 5. Psychometric Methodology */}
          <section id="psychometric-methodology" className="mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6">5 · Psychometric Methodology</h2>
            
            <h3 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4">5.1 Item Development</h3>
            <ul className="space-y-2 mb-4 text-sm sm:text-base">
              <li>4–6 items per facet, balanced positive/negative keying.</li>
              <li>CEFR‑B1 readability, cultural neutrality.</li>
              <li>Public review for IP overlap.</li>
            </ul>

            <h3 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4">5.2 Calibration Pipeline</h3>
            <ol className="space-y-2 mb-4 text-sm sm:text-base">
              <li><strong>Pilot‑0</strong> (n ≈ 300): internal consistency (α ≥ 0.75).</li>
              <li><strong>Calibration‑1</strong> (n ≈ 2 000): Bayesian 2‑PL IRT; drop low‑discrimination items.</li>
              <li><strong>Cross‑culture DIF</strong> (n ≈ 10 000): fairness check.</li>
            </ol>

            <h3 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4">5.3 Scoring & Reporting</h3>
            <ul className="space-y-2 mb-4 text-sm sm:text-base">
              <li>Reverse‑key → θ<sub>posterior</sub> (facet) → domain centroid → rank/percentile.</li>
              <li>Default report: Top/Bottom‑5 facets; full 36 on request.</li>
            </ul>

            <h3 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4">5.4 Anti‑Faking</h3>
            <p className="mb-4 text-sm sm:text-base">
              Infrequency items, response‑latency flags, forced‑choice blocks (Thurstonian IRT), consistency index.
            </p>

            <h3 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4">5.5 Adaptive Testing <em>(planned)</em></h3>
            <p className="mb-4 text-sm sm:text-base">
              CAT engine targeting SEM ≤ 0.30 with ~40 questions.
            </p>
          </section>

          {/* 6. Open-Source Governance */}
          <section id="governance" className="mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6">6 · Open‑Source Governance & IP Strategy</h2>
            <ul className="space-y-2 mb-4 text-sm sm:text-base">
              <li><strong>License</strong>: Apache‑2.0.</li>
              <li><strong>Trademark</strong>: Register "OpenStrengths."</li>
              <li><strong>Contribution Checklist</strong>: IP originality, psychometric evidence, tests.</li>
              <li><strong>Data Ethics</strong>: GDPR consent; anonymized CSVs; IRB advisory.</li>
            </ul>
          </section>

          {/* 7. Implementation Roadmap */}
          <section id="roadmap" className="mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6">7 · Implementation Roadmap</h2>
            
            {/* Desktop table */}
            <div className="hidden sm:block mb-6">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Quarter</TableHead>
                    <TableHead>Milestone</TableHead>
                    <TableHead>Key Metric</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell>2025 Q3</TableCell>
                    <TableCell>Item Bank ≥ 200 items</TableCell>
                    <TableCell><code>items_v1.csv</code> merged</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>2025 Q4</TableCell>
                    <TableCell>Calibration‑1</TableCell>
                    <TableCell>IRT parameters published</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>2026 Q1</TableCell>
                    <TableCell>Forced‑Choice Engine</TableCell>
                    <TableCell>Fake‑detection AUC ≥ 0.85</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>2026 Q2</TableCell>
                    <TableCell>Public API v1</TableCell>
                    <TableCell>JSON endpoints live</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>2026 Q4</TableCell>
                    <TableCell>Adaptive Test Beta</TableCell>
                    <TableCell>Avg completion ≤ 15 min</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>

            {/* Mobile card layout */}
            <div className="sm:hidden space-y-4 mb-6">
              <div className="bg-white border rounded-lg p-4">
                <div className="font-semibold text-sm mb-2">2025 Q3</div>
                <div className="text-xs text-gray-600 mb-1">Item Bank ≥ 200 items</div>
                <div className="text-xs font-mono bg-gray-100 px-2 py-1 rounded">items_v1.csv merged</div>
              </div>
              <div className="bg-white border rounded-lg p-4">
                <div className="font-semibold text-sm mb-2">2025 Q4</div>
                <div className="text-xs text-gray-600 mb-1">Calibration‑1</div>
                <div className="text-xs">IRT parameters published</div>
              </div>
              <div className="bg-white border rounded-lg p-4">
                <div className="font-semibold text-sm mb-2">2026 Q1</div>
                <div className="text-xs text-gray-600 mb-1">Forced‑Choice Engine</div>
                <div className="text-xs">Fake‑detection AUC ≥ 0.85</div>
              </div>
              <div className="bg-white border rounded-lg p-4">
                <div className="font-semibold text-sm mb-2">2026 Q2</div>
                <div className="text-xs text-gray-600 mb-1">Public API v1</div>
                <div className="text-xs">JSON endpoints live</div>
              </div>
              <div className="bg-white border rounded-lg p-4">
                <div className="font-semibold text-sm mb-2">2026 Q4</div>
                <div className="text-xs text-gray-600 mb-1">Adaptive Test Beta</div>
                <div className="text-xs">Avg completion ≤ 15 min</div>
              </div>
            </div>
          </section>

          {/* 8. Use Cases */}
          <section id="use-cases" className="mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6">8 · Illustrative Use‑Cases</h2>
            <ul className="space-y-2 mb-4 text-sm sm:text-base">
              <li><strong>HR Tech</strong> – integrate API for role‑fit insights.</li>
              <li><strong>L&D Platforms</strong> – align facet scores to skill paths.</li>
              <li><strong>AI Coaching Bots</strong> – personalize prompts using facet profile.</li>
              <li><strong>Academic Research</strong> – replicate findings with open data.</li>
              <li><strong>Global NGOs</strong> – localize assessments for underserved regions.</li>
            </ul>
          </section>

          {/* 9. Call to Action */}
          <section id="call-to-action" className="mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6">9 · Call to Action</h2>
            <ol className="space-y-2 mb-6 text-sm sm:text-base">
              <li><strong>Fork the repo</strong> → <code>github.com/openstrengths</code>.</li>
              <li><strong>Add items</strong> → PR with new rows in <code>items/</code>.</li>
              <li><strong>Run a pilot</strong> → share anonymized CSV in <code>/data/</code>.</li>
              <li><strong>Build integrations</strong> → hook into your HRIS or chatbot.</li>
              <li><strong>Spread the word</strong> → blog, tweet, present at meetups.</li>
            </ol>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 sm:p-6 text-center">
              <h4 className="text-lg sm:text-xl font-semibold mb-2">Get Involved Today</h4>
              <p className="mb-4 text-sm sm:text-base">Join the movement to democratize strengths assessment</p>
              <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-3">
                <Button asChild className="w-full sm:w-auto">
                  <a href="https://github.com/openstrengths">GitHub Repository</a>
                </Button>
                <Button variant="outline" className="w-full sm:w-auto">
                  <a href="#newsletter">Join Newsletter</a>
                </Button>
                <Button variant="outline" className="w-full sm:w-auto">
                  <a href="#discord">Discord Community</a>
                </Button>
              </div>
            </div>
          </section>

          {/* 10. References */}
          <section id="references" className="mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6">10 · References</h2>
            
            <div className="text-xs sm:text-sm space-y-3">
              <p>
                1. Silvia, P. J. (2015). "Openness to Experience and Divergent Thinking." <em>Psychology of Aesthetics, Creativity, and the Arts.</em>
              </p>
              
              <p>
                2. Jauk, E. et al. (2013). "Divergent Thinking and Intelligence: A Meta‑Analysis." <em>Review of Educational Research.</em>
              </p>
              
              <p>
                3. Roberts, B. W. et al. (2022). "A Century of Conscientiousness." <em>Annual Review of Psychology.</em>
              </p>
              
              <p>
                4. Neal, A. & Griffin, M. A. (2006). "A Study of the Relationships between Safety Climate and Safety Behavior." <em>Journal of Applied Psychology.</em>
              </p>
              
              <p>
                5. Christian, M. et al. (2009). "Workplace Safety: A Meta‑Analysis." <em>Journal of Applied Psychology.</em>
              </p>

              <p>
                6. Ashton, M. C. & Lee, K. (2020). "The HEXACO Personality Inventory." <em>Handbook of Personality.</em>
              </p>

              <p>
                10. Jauk, E. et al. (2021). "Distinct Facets of Creativity and Intelligence." <em>Journal of Creative Behavior.</em>
              </p>

              <p>
                14. Roberts, B. W. & Bogg, T. (2020). "Two Faces of Conscientiousness." <em>Perspectives on Psychological Science.</em>
              </p>

              <p className="text-xs text-gray-600 italic">
                (Citations 7, 8, … correspond to same numbering used in earlier drafts.)
              </p>
            </div>
          </section>

          {/* Footer */}
          <footer className="border-t border-gray-200 pt-6 sm:pt-8 mt-8 sm:mt-12 text-center text-xs sm:text-sm text-gray-600">
            <p className="mb-2">
              <strong>OpenStrengths White Paper v0.1.1</strong> • May 2025
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
