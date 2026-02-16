import { Check, X, Shield, CalendarClock, BarChart3, FolderOpen } from 'lucide-react'
import Section from '../components/Section'
import Button from '../components/Button'
import SectionHeading from '../components/SectionHeading'

const included = [
  'Unlimited scheduling',
  'Appointment confirmations + follow-ups',
  'Quote coordination + comparison summaries',
  'Proactive home plan + seasonal reminders',
  'Vendor directory with notes',
  'Home Binder (manuals, model/serial, invoices, service dates, warranty docs)',
  'Light triage support',
]

const notIncluded = [
  'Physical repairs',
  'Paying contractors on your behalf',
  'Full renovation project management',
  '24/7 emergency dispatch',
]

const valuePoints = [
  {
    icon: Shield,
    title: 'Fewer surprises',
    description: 'Seasonal reminders and proactive planning keep small issues from becoming costly emergencies.',
  },
  {
    icon: CalendarClock,
    title: 'Faster scheduling',
    description: 'We handle the back-and-forth so appointments land on your calendar without the phone tag.',
  },
  {
    icon: BarChart3,
    title: 'Clearer decisions',
    description: 'Side-by-side quote summaries help you choose the right vendor with confidence.',
  },
  {
    icon: FolderOpen,
    title: 'Complete home record',
    description: 'Every manual, warranty, and service date in one place—ready when you need it.',
  },
]

export default function Pricing() {
  return (
    <main>
      {/* ── HERO ── */}
      <Section bg="warm">
        <SectionHeading
          title="Simple membership pricing."
          subtitle="One plan that covers coordination, planning, and records—so you can stop managing your home and start enjoying it."
        />
      </Section>

      {/* ── PLAN CARD ── */}
      <Section bg="white">
        <div className="max-w-2xl mx-auto">
          <div className="relative rounded-2xl border-2 border-brand-500 bg-white shadow-xl shadow-brand-100/60 overflow-hidden">
            {/* Accent bar */}
            <div className="h-1.5 bg-gradient-to-r from-brand-400 via-brand-600 to-brand-400" />

            <div className="p-8 sm:p-10">
              {/* Plan header */}
              <div className="text-center mb-10">
                <span className="inline-block px-3 py-1 rounded-full bg-brand-50 text-brand-700 text-xs font-semibold tracking-wide uppercase mb-4">
                  Membership
                </span>
                <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-slate-850 mb-2">
                  HomeOps Managed
                </h2>
                <div className="flex items-baseline justify-center gap-1 mb-2">
                  <span className="text-5xl sm:text-6xl font-bold text-slate-850 tracking-tight">$89</span>
                  <span className="text-gray-400 text-lg font-medium">/month</span>
                </div>
                <p className="text-gray-400 text-sm">Cancel anytime. No contracts, no hidden fees.</p>
              </div>

              {/* Divider */}
              <hr className="border-gray-100 mb-8" />

              {/* Included */}
              <div className="mb-8">
                <h3 className="font-serif text-lg font-semibold text-slate-850 mb-4">What's included</h3>
                <ul className="space-y-3">
                  {included.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="mt-0.5 flex-shrink-0 flex items-center justify-center w-5 h-5 rounded-full bg-brand-100 text-brand-600">
                        <Check className="w-3.5 h-3.5" strokeWidth={3} />
                      </span>
                      <span className="text-gray-700 leading-snug">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Not included */}
              <div className="mb-10">
                <h3 className="font-serif text-lg font-semibold text-slate-850 mb-4">Not included</h3>
                <ul className="space-y-3">
                  {notIncluded.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="mt-0.5 flex-shrink-0 flex items-center justify-center w-5 h-5 rounded-full bg-gray-100 text-gray-400">
                        <X className="w-3.5 h-3.5" strokeWidth={3} />
                      </span>
                      <span className="text-gray-400 leading-snug">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA */}
              <div className="text-center">
                <Button to="/get-started" variant="primary" size="lg" className="w-full sm:w-auto">
                  Get Started
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* ── VALUE FRAMING ── */}
      <Section bg="warm">
        <SectionHeading
          title="Most members join for organization—and stay for peace of mind."
        />

        <div className="grid sm:grid-cols-2 gap-8 max-w-3xl mx-auto mb-12">
          {valuePoints.map(({ icon: Icon, title, description }) => (
            <div key={title} className="flex gap-4">
              <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-brand-100 text-brand-600 flex items-center justify-center">
                <Icon className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-serif text-lg font-semibold text-slate-850 mb-1">{title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button to="/how-it-works" variant="outline" size="lg">
            See How It Works
          </Button>
        </div>
      </Section>
    </main>
  )
}
