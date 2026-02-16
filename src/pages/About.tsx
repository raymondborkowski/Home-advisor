import {
  DollarSign,
  Clock,
  FileCheck,
  ShieldCheck,
  ArrowRight,
  Heart,
  Target,
  Users,
} from 'lucide-react';
import Section from '../components/Section';
import SectionHeading from '../components/SectionHeading';
import Button from '../components/Button';

const values = [
  {
    icon: DollarSign,
    title: 'Transparent pricing',
    description:
      'One monthly fee. No referral commissions, no markups on contractor work, no surprise charges. You always know what you\'re paying and why.',
  },
  {
    icon: Clock,
    title: 'Respect for your time',
    description:
      'Your time is the most valuable thing you have. We exist so you can spend it on what matters — not on hold with HVAC companies or comparing quotes at 10pm.',
  },
  {
    icon: FileCheck,
    title: 'Clear documentation',
    description:
      'Every service call, every quote, every warranty, every model number — documented and accessible. Your Home Binder is always up to date and always yours.',
  },
  {
    icon: ShieldCheck,
    title: 'Practical prevention',
    description:
      'We don\'t wait for things to break. Seasonal readiness checks, maintenance calendars, and proactive monitoring catch the small stuff before it becomes the expensive stuff.',
  },
];

export default function About() {
  return (
    <>
      {/* Hero */}
      <Section bg="white">
        <div className="max-w-3xl mx-auto text-center py-16 md:py-24">
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Built for homeowners who value
            <span className="text-brand-600"> predictability.</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Homeownership shouldn't feel like a second job. We started HomeOps
            because we believed there had to be a better way to manage it.
          </p>
        </div>
      </Section>

      {/* The Problem */}
      <Section bg="warm">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-sm font-semibold text-brand-600 uppercase tracking-wide mb-3 block">
                The problem
              </span>
              <h2 className="font-serif text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                Home maintenance is a coordination problem.
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                It's not that homeowners don't care about their homes. It's that
                managing a home requires a set of skills and time that most people
                simply don't have — and shouldn't need.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                You need to know which systems need service, when they were last
                touched, which contractors to call, how to compare quotes, what
                warranties cover, and what's coming up seasonally. That's not a
                weekend project. That's an ongoing operational role.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Most homeowners cobble it together with spreadsheets, sticky notes,
                and memory. Things fall through the cracks. Small problems become
                expensive ones. And the mental load never goes away.
              </p>
            </div>
            <div className="space-y-4">
              {[
                { icon: Target, text: 'Finding a trustworthy contractor takes hours' },
                { icon: Users, text: 'Coordinating schedules between vendors is exhausting' },
                { icon: FileCheck, text: 'Nobody tracks warranties or service history' },
                { icon: Heart, text: 'Prevention gets skipped because life is busy' },
              ].map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.text}
                    className="flex items-start gap-4 bg-white rounded-xl p-5 shadow-sm border border-gray-100"
                  >
                    <div className="w-10 h-10 rounded-lg bg-brand-50 flex items-center justify-center shrink-0">
                      <Icon className="w-5 h-5 text-brand-600" />
                    </div>
                    <p className="text-gray-700 text-sm leading-relaxed">{item.text}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </Section>

      {/* The Solution */}
      <Section bg="white">
        <div className="max-w-3xl mx-auto">
          <span className="text-sm font-semibold text-brand-600 uppercase tracking-wide mb-3 block text-center">
            Our approach
          </span>
          <h2 className="font-serif text-2xl md:text-3xl font-bold text-gray-900 mb-6 text-center">
            One person. One system. Everything handled.
          </h2>
          <div className="prose prose-lg max-w-none text-gray-600 leading-relaxed space-y-4">
            <p>
              HomeOps gives you a dedicated home manager who knows your home, your
              systems, your vendors, and your preferences. We don't just respond to
              problems — we anticipate them. We don't just schedule work — we
              document it, follow up on it, and make sure it's done right.
            </p>
            <p>
              Everything lives in your Home Binder — a living record that grows more
              valuable over time. Every service call, every quote, every warranty
              detail, every vendor interaction. It's your home's operational history,
              always accessible, always current.
            </p>
            <p>
              The result is simple: you spend less time managing your home, less
              money on preventable problems, and less energy worrying about what
              you're forgetting.
            </p>
          </div>
        </div>
      </Section>

      {/* Values */}
      <Section bg="warm">
        <SectionHeading
          title="What we believe"
          subtitle="These aren't aspirational statements. They're the rules we operate by every day."
          centered
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12 max-w-4xl mx-auto">
          {values.map((value) => {
            const Icon = value.icon;
            return (
              <div
                key={value.title}
                className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100"
              >
                <div className="w-12 h-12 rounded-xl bg-brand-50 flex items-center justify-center mb-5">
                  <Icon className="w-6 h-6 text-brand-600" />
                </div>
                <h3 className="font-serif text-xl font-semibold text-gray-900 mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-sm">
                  {value.description}
                </p>
              </div>
            );
          })}
        </div>
      </Section>

      {/* CTA */}
      <Section bg="brand">
        <div className="text-center py-8 md:py-12">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-white mb-4">
            Your home deserves better than guesswork.
          </h2>
          <p className="text-brand-100 text-lg mb-8 max-w-xl mx-auto">
            Get set up in 15 minutes. See the difference in your first month.
          </p>
          <Button to="/get-started" variant="secondary" size="lg">
            Get Started
          </Button>
        </div>
      </Section>
    </>
  );
}
