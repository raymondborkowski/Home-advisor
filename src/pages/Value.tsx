import {
  Clock,
  FileSearch,
  ShieldAlert,
  BookCheck,
  ArrowRight,
  CheckCircle2,
} from 'lucide-react';
import Section from '../components/Section';
import Button from '../components/Button';

const calculators = [
  {
    icon: Clock,
    accent: 'brand',
    title: 'Home Admin Burden',
    subtitle: 'How much time are you spending on home coordination?',
    description:
      'Most homeowners spend 8–15 hours per month on maintenance coordination, vendor research, scheduling, and follow-ups — without even realizing it.',
    stats: [
      { label: 'Researching vendors', value: '3–4 hrs/mo' },
      { label: 'Scheduling & follow-up', value: '2–3 hrs/mo' },
      { label: 'Tracking warranties & records', value: '1–2 hrs/mo' },
      { label: 'Seasonal planning', value: '1–2 hrs/mo' },
      { label: 'Emergency scrambles', value: '2–4 hrs/mo' },
    ],
    total: '9–15 hours/month',
    totalLabel: 'Estimated coordination time',
    insight:
      'HomeOps takes this off your plate entirely. You get that time back — every single month.',
  },
  {
    icon: FileSearch,
    accent: 'blue',
    title: 'Quote Clarity',
    subtitle: 'Are you comparing apples to apples?',
    description:
      'Most homeowners get one quote and hope for the best. Without a framework for comparison, scope gaps and hidden costs slip through.',
    stats: [
      { label: 'Homeowners who get only 1 quote', value: '62%' },
      { label: 'Quotes with scope gaps', value: '3 in 4' },
      { label: 'Average cost surprise on projects', value: '15–30%' },
      { label: 'Jobs needing follow-up work', value: '1 in 3' },
    ],
    total: '$500–$2,000+',
    totalLabel: 'Potential savings per project',
    insight:
      'We get multiple quotes, normalize scope, and flag gaps before you sign — so you know exactly what you\'re paying for.',
  },
  {
    icon: ShieldAlert,
    accent: 'amber',
    title: 'Surprise Risk Meter',
    subtitle: 'How exposed is your home to preventable problems?',
    description:
      'The most expensive home problems are rarely surprises — they\'re the result of small things that went unchecked too long.',
    stats: [
      { label: 'Average emergency HVAC repair', value: '$1,200' },
      { label: 'Basement water damage (avg)', value: '$3,500' },
      { label: 'Deferred gutter maintenance cost', value: '$800+' },
      { label: 'Sump pump failure cleanup', value: '$5,000+' },
      { label: 'Roof leak from missed inspection', value: '$2,500+' },
    ],
    total: 'Up to $12,000+',
    totalLabel: 'Preventable annual risk exposure',
    insight:
      'HomeOps builds a prevention calendar for your home. We catch the small stuff before it becomes the expensive stuff.',
  },
  {
    icon: BookCheck,
    accent: 'violet',
    title: 'Home Binder Readiness',
    subtitle: 'Could you answer these questions about your home right now?',
    description:
      'Your Home Binder is the single source of truth for everything in your home. Most homeowners can\'t answer basic questions about their own systems.',
    stats: [
      { label: 'When was the HVAC last serviced?', value: '—' },
      { label: 'What\'s the water heater model/age?', value: '—' },
      { label: 'Are your warranties still valid?', value: '—' },
      { label: 'Which contractors have done work?', value: '—' },
      { label: 'What\'s your sump pump status?', value: '—' },
    ],
    total: '0 → 100%',
    totalLabel: 'Binder completeness after onboarding',
    insight:
      'Every HomeOps membership includes a living Home Binder — built during onboarding and updated with every service.',
  },
];

const accentMap: Record<string, { bg: string; text: string; border: string; badge: string; bar: string }> = {
  brand: {
    bg: 'bg-brand-50',
    text: 'text-brand-600',
    border: 'border-brand-200',
    badge: 'bg-brand-100 text-brand-700',
    bar: 'bg-brand-500',
  },
  blue: {
    bg: 'bg-blue-50',
    text: 'text-blue-600',
    border: 'border-blue-200',
    badge: 'bg-blue-100 text-blue-700',
    bar: 'bg-blue-500',
  },
  amber: {
    bg: 'bg-amber-50',
    text: 'text-amber-600',
    border: 'border-amber-200',
    badge: 'bg-amber-100 text-amber-700',
    bar: 'bg-amber-500',
  },
  violet: {
    bg: 'bg-violet-50',
    text: 'text-violet-600',
    border: 'border-violet-200',
    badge: 'bg-violet-100 text-violet-700',
    bar: 'bg-violet-500',
  },
};

export default function Value() {
  return (
    <>
      {/* Hero */}
      <Section bg="white">
        <div className="max-w-3xl mx-auto text-center py-16 md:py-24">
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            A clearer view of what
            <span className="text-brand-600"> HomeOps removes.</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            The value isn't abstract. It's the hours you get back, the surprises you
            avoid, the quotes you actually understand, and the records you can finally
            find.
          </p>
        </div>
      </Section>

      {/* Calculator Sections */}
      {calculators.map((calc, index) => {
        const Icon = calc.icon;
        const colors = accentMap[calc.accent];
        const isEven = index % 2 === 0;

        return (
          <Section bg={isEven ? 'warm' : 'white'} key={calc.title}>
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center gap-3 mb-2">
                <div
                  className={`w-10 h-10 rounded-xl flex items-center justify-center ${colors.bg} ${colors.text}`}
                >
                  <Icon className="w-5 h-5" />
                </div>
                <span className={`text-xs font-semibold px-3 py-1 rounded-full ${colors.badge}`}>
                  Calculator {String.fromCharCode(65 + index)}
                </span>
              </div>

              <h2 className="font-serif text-2xl md:text-3xl font-bold text-gray-900 mb-2 mt-4">
                {calc.title}
              </h2>
              <p className="text-lg text-gray-600 mb-3">{calc.subtitle}</p>
              <p className="text-gray-500 mb-8 max-w-2xl">{calc.description}</p>

              <div className={`bg-white rounded-2xl border ${colors.border} shadow-sm overflow-hidden`}>
                <div className="divide-y divide-gray-100">
                  {calc.stats.map((stat) => (
                    <div
                      key={stat.label}
                      className="flex items-center justify-between px-6 py-4"
                    >
                      <span className="text-gray-700 text-sm md:text-base">{stat.label}</span>
                      <span className={`font-semibold text-sm md:text-base ${colors.text}`}>
                        {stat.value}
                      </span>
                    </div>
                  ))}
                </div>
                <div className={`${colors.bg} px-6 py-5 flex items-center justify-between`}>
                  <span className="text-gray-700 font-medium">{calc.totalLabel}</span>
                  <span className={`text-xl md:text-2xl font-bold ${colors.text}`}>
                    {calc.total}
                  </span>
                </div>
              </div>

              <div className="mt-6 flex items-start gap-3 bg-white rounded-xl border border-gray-100 p-5">
                <CheckCircle2 className={`w-5 h-5 mt-0.5 shrink-0 ${colors.text}`} />
                <p className="text-gray-700 leading-relaxed">{calc.insight}</p>
              </div>

              <div className="mt-6">
                <Button to="/get-started" variant="outline" size="md">
                  See how this applies to your home
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </div>
          </Section>
        );
      })}

      {/* CTA */}
      <Section bg="brand">
        <div className="text-center py-8 md:py-12">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-white mb-4">
            The math is simple.
          </h2>
          <p className="text-brand-100 text-lg mb-8 max-w-xl mx-auto">
            $89/month to remove the guesswork, the scramble, and the surprises.
            Start today and see the difference in your first month.
          </p>
          <Button to="/get-started" variant="secondary" size="lg">
            Get Started
          </Button>
        </div>
      </Section>
    </>
  );
}
