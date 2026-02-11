
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const FAQ = () => {
  const faqs = [
    {
      question: 'How is this different from CliftonStrengths®?',
      answer: 'CliftonStrengths is an excellent tool — but it costs $30–200 per person, is invisible outside corporate settings, and runs on closed, proprietary algorithms. OpenStrengths is completely open-source, free for everyone, and built on modern psychometric techniques like 2-PL IRT and Bayesian estimation. Our methodology, scoring, and item bank are public. We believe self-knowledge shouldn\'t require a corporate budget.'
    },
    {
      question: 'What role does AI play?',
      answer: 'AI plays a bounded role: it helps generate and verify assessment items, but it cannot characterize who you are. Humans interpret — AI measures. This is a deliberate design choice. Current AI companion apps validate what users want to hear 50% more than a human would. OpenStrengths provides the scientific foundation that AI-driven self-understanding currently lacks.'
    },
    {
      question: 'How do you prevent faking?',
      answer: 'We use forced-choice item formats where respondents must choose between equally attractive options. This makes it much harder to game the system since there is no obvious "correct" answer. Additionally, our IRT-based scoring can detect inconsistent response patterns.'
    },
    {
      question: 'Will it always be free?',
      answer: 'Yes. Self-knowledge is a right, not a product. The core framework — assessment, scoring engine, and results — will always remain free and open-source. Your identity data belongs to you. We may develop premium services like enterprise integrations, but the fundamental tools will never be locked behind a paywall.'
    },
    {
      question: 'What research validates this approach?',
      answer: 'OpenStrengths builds on decades of research in strengths psychology, item response theory, and psychometric best practices. All our methodological choices are documented and peer-reviewed. We encourage replication studies and welcome scrutiny from the research community.'
    },
    {
      question: 'How can I contribute to the project?',
      answer: 'We\'re looking for psychometric partners, academic organizations to run validation studies, applied experts (coaches, educators, practitioners), and technical builders. You can also report bugs, help with translations, or spread the word. Reach out at team@openstrengths.org or check our GitHub.'
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
