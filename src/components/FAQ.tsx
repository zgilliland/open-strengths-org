
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const FAQ = () => {
  const faqs = [
    {
      question: 'How is this different from CliftonStrengths®?',
      answer: 'OpenStrengths is completely open-source and transparent, unlike proprietary assessments. Our methodology, scoring algorithms, and item bank are publicly available for scrutiny and improvement. We also use modern psychometric techniques like 2-PL IRT and Bayesian estimation.'
    },
    {
      question: 'Can I use it commercially?',
      answer: 'Yes! OpenStrengths is released under the Apache-2.0 license, which allows both commercial and non-commercial use. You can integrate it into your products, modify it, and even sell services based on it, as long as you comply with the license terms.'
    },
    {
      question: 'How do you prevent faking?',
      answer: 'We use forced-choice item formats where respondents must choose between equally attractive options. This makes it much harder to game the system since there is no obvious "correct" answer. Additionally, our IRT-based scoring can detect inconsistent response patterns.'
    },
    {
      question: 'Will it always be free?',
      answer: 'The core framework will always remain free and open-source. However, we may develop premium services like advanced analytics, custom reporting, or enterprise integrations. The fundamental assessment and scoring engine will never be locked behind a paywall.'
    },
    {
      question: 'What research validates this approach?',
      answer: 'OpenStrengths builds on decades of research in strengths psychology, item response theory, and psychometric best practices. All our methodological choices are documented and peer-reviewed. We encourage replication studies and welcome scrutiny from the research community.'
    },
    {
      question: 'How can I contribute to the project?',
      answer: 'There are many ways to contribute: report bugs, submit code improvements, help with translations, run validation studies, or simply spread the word. Check our GitHub repository for current issues labeled "good first issue" if you\'re just getting started.'
    }
  ];

  return (
    <section id="faq" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
          <p className="text-xl text-gray-600">
            Everything you need to know about OpenStrengths
          </p>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="border rounded-lg px-6">
              <AccordionTrigger className="text-left font-semibold hover:no-underline">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 pt-2 pb-4">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQ;
