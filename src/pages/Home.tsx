import Section from '../components/Section'
import Button from '../components/Button'
import SectionHeading from '../components/SectionHeading'
import {
  CalendarCheck,
  ShieldCheck,
  FolderOpen,
  AlertTriangle,
  HelpCircle,
  RotateCcw,
  UserCheck,
  ClipboardList,
  HandCoins,
  Clock,
  Camera,
  HeartHandshake,
  Wrench,
  Droplets,
  TreePine,
  Hammer,
  CheckCircle2,
  ChevronDown,
  ChevronUp,
  Sparkles,
  Star,
} from 'lucide-react'
import { useState } from 'react'

/* ────────────────────────────────────────────
   FAQ accordion item
   ──────────────────────────────────────────── */
function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false)
  return (
    <button
      type="button"
      onClick={() => setOpen(!open)}
      className="w-full text-left bg-white rounded-2xl shadow-sm border border-gray-100 px-6 py-5 sm:px-8 sm:py-6 transition-all duration-200 hover:shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-400 cursor-pointer"
    >
      <div className="flex items-start justify-between gap-4">
        <span className="font-semibold text-slate-850 text-base sm:text-lg leading-snug pr-2">
          {q}
        </span>
        {open ? (
          <ChevronUp className="w-5 h-5 text-brand-600 shrink-0 mt-0.5" />
        ) : (
          <ChevronDown className="w-5 h-5 text-gray-400 shrink-0 mt-0.5" />
        )}
      </div>
      {open && (
        <p className="mt-3 text-gray-500 leading-relaxed text-sm sm:text-base">
          {a}
        </p>
      )}
    </button>
  )
}

/* ────────────────────────────────────────────
   Home page
   ──────────────────────────────────────────── */
export default function Home() {
  return (
    <main>
      {/* ═══════════════════════════════════════
          1. HERO
         ═══════════════════════════════════════ */}
      <Section bg="warm" className="!pt-20 sm:!pt-28 lg:!pt-32 !pb-16 sm:!pb-20">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-semibold text-slate-850 leading-[1.12] tracking-tight mb-6">
            Home maintenance, handled.
          </h1>
          <p className="text-gray-500 text-lg sm:text-xl leading-relaxed max-w-2xl mx-auto mb-10">
            HomeOps is a personal home manager that coordinates maintenance,
            organizes your home records, and gives you one point of contact for
            everything your house needs.
          </p>

          {/* Bullet grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 max-w-xl mx-auto text-left mb-10">
            {[
              { icon: CalendarCheck, text: 'Scheduling & coordination' },
              { icon: HandCoins, text: 'Vetted quotes & referrals' },
              { icon: ClipboardList, text: 'Proactive maintenance plan' },
              { icon: FolderOpen, text: 'Digital Home Binder' },
            ].map(({ icon: Icon, text }) => (
              <div key={text} className="flex items-center gap-3">
                <span className="flex items-center justify-center w-10 h-10 rounded-xl bg-brand-100 text-brand-600 shrink-0">
                  <Icon className="w-5 h-5" />
                </span>
                <span className="text-slate-850 font-medium text-sm sm:text-base">
                  {text}
                </span>
              </div>
            ))}
          </div>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
            <Button to="/get-started" variant="primary" size="lg">
              Get Started
            </Button>
            <Button to="/how-it-works" variant="secondary" size="lg">
              See How It Works
            </Button>
          </div>

          {/* Trust line */}
          <p className="text-gray-400 text-sm flex items-center justify-center gap-1.5">
            <ShieldCheck className="w-4 h-4" />
            Trusted by homeowners across the metro — referral-only membership.
          </p>
        </div>
      </Section>

      {/* ═══════════════════════════════════════
          2. CREDIBILITY STRIP
         ═══════════════════════════════════════ */}
      <div className="bg-brand-600 text-white py-5 sm:py-6">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm sm:text-base font-medium leading-relaxed flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-2">
            <Star className="w-4 h-4 text-brand-200 shrink-0 hidden sm:block" />
            <span>
              Designed for busy homeowners who want to stay ahead of their home.
            </span>
            <span className="text-brand-200">
              Referrals-first · Limited membership.
            </span>
          </p>
        </div>
      </div>

      {/* ═══════════════════════════════════════
          3. PROBLEM
         ═══════════════════════════════════════ */}
      <Section bg="white" id="problem">
        <SectionHeading
          title="The challenge isn't your home. It's managing everything around it."
          subtitle="Most homeowners don't have a maintenance problem — they have a coordination problem."
        />

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 mb-12">
          {[
            {
              icon: AlertTriangle,
              title: 'Too many loose ends',
              desc: 'Filters, gutters, HVAC tune-ups, warranties — the list never stops, and nothing reminds you until something breaks.',
            },
            {
              icon: HelpCircle,
              title: 'Hard to get clarity',
              desc: 'Who do you call? Is that quote fair? Should you fix or replace? You shouldn\u2019t need to become a contractor to own a home.',
            },
            {
              icon: RotateCcw,
              title: 'Reactive by default',
              desc: 'Without a plan, every home issue feels urgent. You end up paying more and stressing more than you need to.',
            },
          ].map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="bg-warm-50 rounded-2xl p-6 sm:p-8 text-center"
            >
              <span className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-white text-brand-600 shadow-sm mb-5">
                <Icon className="w-6 h-6" />
              </span>
              <h3 className="font-serif text-lg sm:text-xl font-semibold text-slate-850 mb-3">
                {title}
              </h3>
              <p className="text-gray-500 text-sm sm:text-base leading-relaxed">
                {desc}
              </p>
            </div>
          ))}
        </div>

        <p className="text-center text-gray-500 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
          You don't need another app or checklist.{' '}
          <span className="text-slate-850 font-medium">
            You need someone in your corner.
          </span>
        </p>
      </Section>

      {/* ═══════════════════════════════════════
          4. BENEFITS
         ═══════════════════════════════════════ */}
      <Section bg="warm" id="benefits">
        <SectionHeading
          title="What you get with HomeOps"
          subtitle="A dedicated home manager who handles the details so you don't have to."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12">
          {[
            {
              icon: UserCheck,
              title: 'One point of contact',
              desc: 'Text, call, or email — your home manager handles the rest. No more juggling contractors yourself.',
            },
            {
              icon: ClipboardList,
              title: 'Proactive home plan',
              desc: 'A seasonal maintenance calendar customized to your home, so nothing slips through the cracks.',
            },
            {
              icon: HandCoins,
              title: 'Quote coordination',
              desc: 'We gather bids from vetted pros, compare them, and walk you through the options — no pressure.',
            },
            {
              icon: Clock,
              title: 'Scheduling & follow-up',
              desc: 'We book the work, confirm timing, and follow up so the job gets done right the first time.',
            },
            {
              icon: Camera,
              title: 'Home Binder from photos',
              desc: 'Snap a photo of a label, receipt, or manual and we\u2019ll file it in your digital Home Binder automatically.',
            },
            {
              icon: HeartHandshake,
              title: 'An advocate on your side',
              desc: 'We don\u2019t take referral fees. Our only incentive is keeping you happy and your home healthy.',
            },
          ].map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="bg-white rounded-2xl shadow-sm p-6 sm:p-8 transition-shadow duration-200 hover:shadow-md"
            >
              <span className="inline-flex items-center justify-center w-11 h-11 rounded-xl bg-brand-100 text-brand-600 mb-5">
                <Icon className="w-5 h-5" />
              </span>
              <h3 className="font-serif text-lg font-semibold text-slate-850 mb-2">
                {title}
              </h3>
              <p className="text-gray-500 text-sm sm:text-base leading-relaxed">
                {desc}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button to="/get-started" variant="primary" size="lg">
            Get Started with HomeOps
          </Button>
        </div>
      </Section>

      {/* ═══════════════════════════════════════
          5. HOME BINDER FEATURE
         ═══════════════════════════════════════ */}
      <Section bg="white" id="home-binder">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text side */}
          <div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-slate-850 leading-tight mb-6">
              Your Home Binder — organized automatically.
            </h2>
            <p className="text-gray-500 text-base sm:text-lg leading-relaxed mb-8">
              Every home has a story — equipment ages, warranties expire,
              maintenance gets done (or doesn't). Your Home Binder captures it
              all in one place, updated as we go.
            </p>

            <ul className="space-y-4 mb-10">
              {[
                'Equipment inventory with ages & model numbers',
                'Warranty & service agreement tracking',
                'Maintenance history & upcoming schedule',
                'Receipts, manuals & inspection reports',
                'Contractor contact list & notes',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-brand-500 shrink-0 mt-0.5" />
                  <span className="text-slate-850 text-sm sm:text-base">
                    {item}
                  </span>
                </li>
              ))}
            </ul>

            <p className="text-gray-400 text-sm leading-relaxed mb-8 bg-warm-50 rounded-xl p-4 sm:p-5">
              <Sparkles className="w-4 h-4 inline -mt-0.5 mr-1.5 text-brand-500" />
              <strong className="text-slate-850">How it works:</strong> Snap a
              photo of any label, receipt, or document. We extract the details,
              file it in the right place, and keep it up to date after every
              service visit.
            </p>

            <Button to="/get-started" variant="primary" size="md">
              Build Your Home Binder
            </Button>
          </div>

          {/* Visual side */}
          <div className="bg-warm-50 rounded-2xl p-8 sm:p-10 lg:p-12">
            <div className="space-y-4">
              {[
                { label: 'HVAC System', detail: 'Carrier 24ACC636 · Installed 2019 · Warranty until 2029', color: 'bg-brand-100 text-brand-700' },
                { label: 'Water Heater', detail: 'Rheem PROG50 · Installed 2021 · 6-year warranty', color: 'bg-blue-100 text-blue-700' },
                { label: 'Roof', detail: 'GAF Timberline · Installed 2018 · Last inspected Oct 2025', color: 'bg-amber-100 text-amber-700' },
                { label: 'Electrical Panel', detail: '200A Square D · Last inspection Mar 2025', color: 'bg-purple-100 text-purple-700' },
              ].map(({ label, detail, color }) => (
                <div
                  key={label}
                  className="bg-white rounded-xl p-4 sm:p-5 shadow-sm flex items-start gap-4"
                >
                  <span
                    className={`text-xs font-bold px-2.5 py-1 rounded-lg shrink-0 ${color}`}
                  >
                    {label}
                  </span>
                  <span className="text-gray-500 text-sm leading-snug">
                    {detail}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* ═══════════════════════════════════════
          6. HOW IT WORKS
         ═══════════════════════════════════════ */}
      <Section bg="brand" id="how-it-works">
        <SectionHeading
          title="How it works"
          subtitle="Up and running in days, not weeks. No contracts, cancel anytime."
        />

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 mb-12">
          {[
            {
              step: '01',
              title: 'Quick setup call',
              desc: 'We learn about your home, your priorities, and any nagging issues. Takes about 15 minutes.',
            },
            {
              step: '02',
              title: 'We create your plan',
              desc: 'Within a week you\u2019ll have a customized maintenance calendar and your Home Binder started.',
            },
            {
              step: '03',
              title: 'Use us as your interface',
              desc: 'Need something done? Just reach out. We coordinate, schedule, and follow up — you approve.',
            },
          ].map(({ step, title, desc }) => (
            <div
              key={step}
              className="bg-white rounded-2xl shadow-sm p-6 sm:p-8 text-center"
            >
              <span className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-brand-100 text-brand-700 font-serif text-xl font-bold mb-5">
                {step}
              </span>
              <h3 className="font-serif text-lg sm:text-xl font-semibold text-slate-850 mb-3">
                {title}
              </h3>
              <p className="text-gray-500 text-sm sm:text-base leading-relaxed">
                {desc}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button to="/get-started" variant="primary" size="lg">
            Book Your Setup Call
          </Button>
        </div>
      </Section>

      {/* ═══════════════════════════════════════
          7. COVERAGE PREVIEW
         ═══════════════════════════════════════ */}
      <Section bg="white" id="coverage">
        <SectionHeading
          title="We handle the recurring tasks"
          subtitle="From seasonal tune-ups to long-term planning, here's a sample of what we coordinate."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-12">
          {[
            {
              icon: Wrench,
              title: 'Home systems',
              items: ['HVAC tune-ups', 'Filter replacements', 'Appliance maintenance', 'Plumbing checks'],
            },
            {
              icon: Droplets,
              title: 'Water & risk',
              items: ['Water heater flush', 'Sump pump testing', 'Backflow inspection', 'Leak monitoring'],
            },
            {
              icon: TreePine,
              title: 'Exterior & seasonal',
              items: ['Gutter cleaning', 'Lawn & irrigation', 'Window washing', 'Snow removal'],
            },
            {
              icon: Hammer,
              title: 'Projects & repairs',
              items: ['Quote coordination', 'Contractor vetting', 'Permit guidance', 'Warranty tracking'],
            },
          ].map(({ icon: Icon, title, items }) => (
            <div
              key={title}
              className="bg-warm-50 rounded-2xl p-6 sm:p-8"
            >
              <span className="inline-flex items-center justify-center w-11 h-11 rounded-xl bg-brand-100 text-brand-600 mb-5">
                <Icon className="w-5 h-5" />
              </span>
              <h3 className="font-serif text-lg font-semibold text-slate-850 mb-4">
                {title}
              </h3>
              <ul className="space-y-2.5">
                {items.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-2 text-gray-500 text-sm"
                  >
                    <CheckCircle2 className="w-4 h-4 text-brand-400 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button to="/services" variant="outline" size="md">
            See Full Coverage List
          </Button>
        </div>
      </Section>

      {/* ═══════════════════════════════════════
          8. PRICING TEASER
         ═══════════════════════════════════════ */}
      <Section bg="warm" id="pricing">
        <div className="max-w-lg mx-auto">
          <div className="bg-white rounded-2xl shadow-md p-8 sm:p-10 text-center">
            <p className="text-brand-600 font-semibold text-sm uppercase tracking-wider mb-3">
              Membership
            </p>
            <h2 className="font-serif text-4xl sm:text-5xl font-bold text-slate-850 mb-1">
              $89
              <span className="text-xl font-normal text-gray-400">/mo</span>
            </h2>
            <p className="text-gray-400 text-sm mb-8">
              No contracts · Cancel anytime
            </p>

            <ul className="text-left space-y-4 mb-10">
              {[
                'Dedicated home manager',
                'Custom maintenance plan & calendar',
                'Scheduling, quotes & follow-up',
                'Digital Home Binder',
                'Vetted contractor referrals',
                'Priority response via text, email, or call',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-brand-500 shrink-0 mt-0.5" />
                  <span className="text-slate-850 text-sm sm:text-base">
                    {item}
                  </span>
                </li>
              ))}
            </ul>

            <Button to="/get-started" variant="primary" size="lg" className="w-full">
              Get Started
            </Button>

            <p className="text-gray-400 text-xs mt-5 leading-relaxed">
              Contractor costs are separate and paid directly to providers. We
              never mark up services or take referral fees.
            </p>
          </div>
        </div>
      </Section>

      {/* ═══════════════════════════════════════
          9. MINI FAQ
         ═══════════════════════════════════════ */}
      <Section bg="white" id="faq">
        <SectionHeading
          title="Common questions"
          subtitle="Quick answers to the things homeowners ask most."
        />

        <div className="max-w-2xl mx-auto space-y-4 mb-12">
          <FaqItem
            q="Does HomeOps replace my existing contractors?"
            a="Not at all. If you already have pros you love, we'll work with them. We schedule, coordinate, and follow up — think of us as the layer between you and your vendors, not a replacement."
          />
          <FaqItem
            q="Can I keep using my existing vendors?"
            a="Absolutely. We're vendor-agnostic. Bring your trusted plumber, electrician, or landscaper and we'll handle the coordination. If you need new referrals, we have a vetted network ready."
          />
          <FaqItem
            q="Do you take referral fees from contractors?"
            a="Never. We're paid by you and only by you. That means our recommendations are always in your best interest — no kickbacks, no hidden incentives."
          />
        </div>

        <div className="text-center">
          <Button to="/faq" variant="outline" size="md">
            See All FAQs
          </Button>
        </div>
      </Section>

      {/* ═══════════════════════════════════════
          10. FINAL CTA
         ═══════════════════════════════════════ */}
      <Section bg="dark">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold leading-tight mb-5">
            A calmer way to own a home.
          </h2>
          <p className="text-gray-400 text-base sm:text-lg leading-relaxed mb-10 max-w-xl mx-auto">
            Stop chasing contractors, forgetting filters, and wondering what
            your home needs next. Let HomeOps handle the details.
          </p>
          <Button to="/get-started" variant="primary" size="lg">
            Get Started
          </Button>
        </div>
      </Section>
    </main>
  )
}
