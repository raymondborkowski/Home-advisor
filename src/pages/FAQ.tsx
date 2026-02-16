import { useState } from 'react';
import { ChevronDown, MessageCircleQuestion } from 'lucide-react';
import Section from '../components/Section';
import SectionHeading from '../components/SectionHeading';
import Button from '../components/Button';

const faqs = [
  {
    question: 'What is HomeOps?',
    answer:
      'HomeOps is a home management service for homeowners who want someone to stay on top of maintenance, vendors, documentation, and prevention — so they don\'t have to. Think of it as a dedicated operations layer for your home. We coordinate everything, track everything, and keep you informed without the busywork.',
  },
  {
    question: 'Do you do repairs?',
    answer:
      'No — we don\'t do the physical work ourselves. We coordinate with qualified, vetted contractors on your behalf. We handle sourcing, quote comparison, scheduling, follow-up, and documentation. You get the right people doing the right work, without managing it yourself.',
  },
  {
    question: 'Can I use my existing contractors?',
    answer:
      'Absolutely. If you have contractors you trust, we\'re happy to work with them. We\'ll coordinate scheduling, track their work in your Home Binder, and make sure everything is documented. If you need new vendors for something, we\'ll source and vet those too.',
  },
  {
    question: 'Do you take referral fees or markups?',
    answer:
      'No. We never take referral fees, commissions, or markups from contractors. Our only revenue comes from your membership fee. This keeps our recommendations honest — we\'ll always suggest what\'s best for your home, not what pays us the most.',
  },
  {
    question: 'How fast do you respond?',
    answer:
      'For urgent issues (active water, no heat in winter, safety concerns), we respond within 1 hour during business hours. For standard requests, we respond within 4 business hours. Everything is tracked and followed up on — nothing gets lost.',
  },
  {
    question: 'How many quotes do you get?',
    answer:
      'For any significant project, we aim for 2–3 comparable quotes. We normalize the scope across vendors so you\'re comparing apples to apples, and we flag any gaps or concerns. For routine maintenance with a trusted vendor, one quote may be sufficient.',
  },
  {
    question: 'How does the Home Binder work?',
    answer:
      'Your Home Binder is a living document that contains everything about your home: equipment inventory, model and serial numbers, manuals, warranty information, vendor history, and a complete service timeline. It\'s built during onboarding and updated every time work is done. You always have access to it.',
  },
  {
    question: 'What if I don\'t know model numbers?',
    answer:
      'That\'s completely normal — most homeowners don\'t. During onboarding, we\'ll walk you through a simple photo checklist. You take photos of your equipment labels, and we handle cataloging everything. If something is hard to identify, we\'ll figure it out.',
  },
  {
    question: 'Do I pay you or the contractor?',
    answer:
      'You pay contractors directly for their work. Our $89/month membership fee covers the coordination, documentation, prevention planning, and Home Binder — everything we do to manage your home. The two are always kept separate and transparent.',
  },
  {
    question: 'Is this like a home warranty?',
    answer:
      'No. Home warranties cover repair costs for specific breakdowns (with deductibles, limits, and exclusions). HomeOps is a management service — we coordinate maintenance, gather quotes, track documentation, and prevent problems before they happen. We\'re the layer that makes everything run smoothly, not an insurance product.',
  },
  {
    question: 'Can I cancel?',
    answer:
      'Yes, anytime. There are no long-term contracts or cancellation fees. If you cancel, you keep your Home Binder and all documentation we\'ve created. We believe the service should earn your membership every month.',
  },
];

function AccordionItem({
  question,
  answer,
  isOpen,
  onToggle,
}: {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="border-b border-gray-200 last:border-b-0">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between py-5 px-1 text-left group"
      >
        <span className="font-serif text-lg font-medium text-gray-900 group-hover:text-brand-600 transition-colors pr-4">
          {question}
        </span>
        <ChevronDown
          className={`w-5 h-5 text-gray-400 shrink-0 transition-transform duration-200 ${
            isOpen ? 'rotate-180 text-brand-600' : ''
          }`}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-96 opacity-100 pb-5' : 'max-h-0 opacity-0'
        }`}
      >
        <p className="text-gray-600 leading-relaxed px-1">{answer}</p>
      </div>
    </div>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <>
      {/* Hero */}
      <Section bg="white">
        <div className="max-w-3xl mx-auto text-center py-16 md:py-24">
          <div className="w-16 h-16 rounded-2xl bg-brand-50 flex items-center justify-center mx-auto mb-6">
            <MessageCircleQuestion className="w-8 h-8 text-brand-600" />
          </div>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Frequently asked questions
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Straightforward answers to the things homeowners ask most often.
          </p>
        </div>
      </Section>

      {/* FAQ Accordion */}
      <Section bg="warm">
        <div className="max-w-3xl mx-auto">
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 px-6 md:px-8">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={faq.question}
                question={faq.question}
                answer={faq.answer}
                isOpen={openIndex === i}
                onToggle={() => setOpenIndex(openIndex === i ? null : i)}
              />
            ))}
          </div>
        </div>
      </Section>

      {/* Still have questions */}
      <Section bg="white">
        <div className="max-w-2xl mx-auto text-center py-8">
          <h2 className="font-serif text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Still have questions?
          </h2>
          <p className="text-gray-600 mb-8">
            We're happy to walk through anything. No pressure, no pitch — just
            honest answers about whether HomeOps makes sense for your home.
          </p>
          <Button to="/get-started" variant="outline" size="lg">
            Reach out to us
          </Button>
        </div>
      </Section>

      {/* CTA */}
      <Section bg="brand">
        <div className="text-center py-8 md:py-12">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to get started?
          </h2>
          <p className="text-brand-100 text-lg mb-8 max-w-xl mx-auto">
            15 minutes to set up. No contracts. Cancel anytime.
          </p>
          <Button to="/get-started" variant="secondary" size="lg">
            Get Started
          </Button>
        </div>
      </Section>
    </>
  );
}
