import {
  Camera,
  ClipboardList,
  MessageCircle,
  Clock,
  FileText,
  ShieldCheck,
  DollarSign,
  CheckCircle2,
  ArrowRight,
  Home,
  Wrench,
  CalendarCheck,
  BookOpen,
  Bell,
  Send,
  PhoneCall,
  Receipt,
  FolderOpen,
  Sparkles,
  ChevronRight,
} from 'lucide-react'
import Section from '../components/Section'
import Button from '../components/Button'
import SectionHeading from '../components/SectionHeading'

/* ─── tiny helpers ─── */

function StepBadge({ number }: { number: number }) {
  return (
    <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-brand-600 text-white font-serif font-bold text-lg shrink-0">
      {number}
    </span>
  )
}

function Card({
  children,
  className = '',
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <div
      className={`bg-white rounded-2xl shadow-sm border border-gray-100 p-6 sm:p-8 ${className}`}
    >
      {children}
    </div>
  )
}

/* ─── page ─── */

export default function HowItWorks() {
  return (
    <main>
      {/* ════════════════════════════════════════
          1 · HERO
      ════════════════════════════════════════ */}
      <Section bg="warm" className="!pt-24 sm:!pt-28 lg:!pt-32">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-semibold text-slate-850 leading-tight mb-6">
            One point of contact for everything your home needs.
          </h1>
          <p className="text-gray-500 text-lg sm:text-xl leading-relaxed max-w-2xl mx-auto mb-10">
            No apps to learn. No spreadsheets to manage. Just text us and
            we&rsquo;ll take it from there &mdash; maintenance, scheduling,
            quotes, and documentation, all handled for you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button to="/pricing" variant="primary" size="lg">
              See plans &amp; pricing
            </Button>
            <Button to="/contact" variant="outline" size="lg">
              Ask us anything
            </Button>
          </div>
        </div>
      </Section>

      {/* ════════════════════════════════════════
          2 · STEP 1 — Setup + Photo Onboarding
      ════════════════════════════════════════ */}
      <Section bg="white" id="step-1">
        <div className="flex items-center gap-4 mb-10">
          <StepBadge number={1} />
          <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-slate-850">
            Setup &amp; photo onboarding
          </h2>
        </div>

        <p className="text-gray-500 text-lg leading-relaxed max-w-3xl mb-12">
          We start by getting to know your home. Snap a few photos of the
          equipment listed below &mdash; organized by room &mdash; and send
          them our way. That&rsquo;s it. We do the rest.
        </p>

        {/* Room checklists */}
        <div className="grid sm:grid-cols-2 gap-6 mb-12">
          {/* Basement / Utility */}
          <Card>
            <div className="flex items-center gap-3 mb-5">
              <Home className="w-5 h-5 text-brand-600" />
              <h3 className="font-serif text-xl font-semibold text-slate-850">
                Basement / Utility Room
              </h3>
            </div>
            <ul className="space-y-3 text-gray-600">
              {[
                'Furnace / boiler',
                'Air conditioner (indoor & outdoor unit)',
                'Water heater',
                'Sump pump',
                'Water softener / filtration',
                'Electrical panel (label side)',
              ].map((item) => (
                <li key={item} className="flex items-start gap-2.5">
                  <Camera className="w-4 h-4 text-brand-500 mt-1 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </Card>

          {/* Kitchen */}
          <Card>
            <div className="flex items-center gap-3 mb-5">
              <Home className="w-5 h-5 text-brand-600" />
              <h3 className="font-serif text-xl font-semibold text-slate-850">
                Kitchen
              </h3>
            </div>
            <ul className="space-y-3 text-gray-600">
              {[
                'Refrigerator (model sticker)',
                'Dishwasher (inside-door label)',
                'Oven / range',
                'Microwave',
                'Garbage disposal',
                'Range hood / vent',
              ].map((item) => (
                <li key={item} className="flex items-start gap-2.5">
                  <Camera className="w-4 h-4 text-brand-500 mt-1 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </Card>

          {/* Laundry */}
          <Card>
            <div className="flex items-center gap-3 mb-5">
              <Home className="w-5 h-5 text-brand-600" />
              <h3 className="font-serif text-xl font-semibold text-slate-850">
                Laundry
              </h3>
            </div>
            <ul className="space-y-3 text-gray-600">
              {[
                'Washer',
                'Dryer',
                'Dryer vent / exhaust',
              ].map((item) => (
                <li key={item} className="flex items-start gap-2.5">
                  <Camera className="w-4 h-4 text-brand-500 mt-1 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </Card>

          {/* Optional */}
          <Card>
            <div className="flex items-center gap-3 mb-5">
              <Sparkles className="w-5 h-5 text-brand-600" />
              <h3 className="font-serif text-xl font-semibold text-slate-850">
                Optional (add anytime)
              </h3>
            </div>
            <ul className="space-y-3 text-gray-600">
              {[
                'Garage door opener',
                'Sprinkler / irrigation controller',
                'Pool / hot tub equipment',
                'Generator',
                'Smart thermostat',
                'Security system panel',
              ].map((item) => (
                <li key={item} className="flex items-start gap-2.5">
                  <Camera className="w-4 h-4 text-brand-500 mt-1 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </Card>
        </div>

        {/* What we do with the photos */}
        <Card className="bg-brand-50 !border-brand-100">
          <h3 className="font-serif text-xl sm:text-2xl font-semibold text-slate-850 mb-6">
            What HomeOps does with your photos
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Wrench,
                title: 'Identify make & model',
                desc: 'We pull serial numbers, model info, and age from every label.',
              },
              {
                icon: BookOpen,
                title: 'Attach manuals',
                desc: 'We locate and file the manufacturer manual for each item.',
              },
              {
                icon: ShieldCheck,
                title: 'Store warranty info',
                desc: 'Warranty status and expiration dates, tracked automatically.',
              },
              {
                icon: Bell,
                title: 'Build reminders',
                desc: 'Filter changes, inspections, and seasonal tasks — all scheduled.',
              },
            ].map(({ icon: Icon, title, desc }) => (
              <div key={title} className="flex flex-col gap-3">
                <Icon className="w-6 h-6 text-brand-600" />
                <h4 className="font-semibold text-slate-850">{title}</h4>
                <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </Card>

        <p className="text-gray-400 text-sm mt-6 text-center italic">
          Don&rsquo;t worry about getting everything at once. You can add
          equipment photos at any time &mdash; just text them to us and
          we&rsquo;ll update your home profile.
        </p>
      </Section>

      {/* ════════════════════════════════════════
          3 · STEP 2 — Your Home Plan
      ════════════════════════════════════════ */}
      <Section bg="warm" id="step-2">
        <div className="flex items-center gap-4 mb-10">
          <StepBadge number={2} />
          <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-slate-850">
            Your personalized home plan
          </h2>
        </div>

        <p className="text-gray-500 text-lg leading-relaxed max-w-3xl mb-12">
          Based on your equipment, home age, and local climate, we build a
          seasonal care plan that tells you exactly what to focus on and when.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              icon: ClipboardList,
              label: 'Address now',
              color: 'text-red-500',
              bg: 'bg-red-50',
              desc: 'Overdue tasks or urgent items that need attention right away.',
            },
            {
              icon: CalendarCheck,
              label: 'Schedule seasonally',
              color: 'text-amber-500',
              bg: 'bg-amber-50',
              desc: 'Recurring maintenance timed to the right season — HVAC tune-ups, gutter cleaning, and more.',
            },
            {
              icon: Clock,
              label: 'Monitor',
              color: 'text-blue-500',
              bg: 'bg-blue-50',
              desc: "Equipment we're watching based on age, warranty status, or past issues.",
            },
            {
              icon: Sparkles,
              label: 'Improve',
              color: 'text-brand-600',
              bg: 'bg-brand-50',
              desc: 'Optional upgrades and efficiency improvements when the timing is right.',
            },
          ].map(({ icon: Icon, label, color, bg, desc }) => (
            <Card key={label} className="flex flex-col">
              <div
                className={`w-12 h-12 rounded-xl ${bg} flex items-center justify-center mb-5`}
              >
                <Icon className={`w-6 h-6 ${color}`} />
              </div>
              <h3 className="font-serif text-lg font-semibold text-slate-850 mb-2">
                {label}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
            </Card>
          ))}
        </div>
      </Section>

      {/* ════════════════════════════════════════
          4 · STEP 3 — Ongoing Support
      ════════════════════════════════════════ */}
      <Section bg="white" id="step-3">
        <div className="flex items-center gap-4 mb-10">
          <StepBadge number={3} />
          <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-slate-850">
            Ongoing support — just text us
          </h2>
        </div>

        <p className="text-gray-500 text-lg leading-relaxed max-w-3xl mb-12">
          Once your home is set up, HomeOps is always a message away. Here are
          a few things people text us about every week.
        </p>

        {/* Example messages */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-14">
          {[
            '"Our kitchen faucet is leaking."',
            '"Can you get the furnace serviced before winter?"',
            '"We need a quote for a new fence."',
            '"The dishwasher is making a weird noise."',
            '"Schedule the dryer vent cleaning."',
            '"Do we still have warranty on the water heater?"',
          ].map((msg) => (
            <div
              key={msg}
              className="bg-brand-50 border border-brand-100 rounded-2xl px-5 py-4 flex items-start gap-3"
            >
              <MessageCircle className="w-5 h-5 text-brand-600 mt-0.5 shrink-0" />
              <p className="text-slate-850 text-sm font-medium leading-relaxed">
                {msg}
              </p>
            </div>
          ))}
        </div>

        {/* What HomeOps handles */}
        <h3 className="font-serif text-2xl font-semibold text-slate-850 mb-8 text-center">
          What happens after you text us
        </h3>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              icon: PhoneCall,
              title: 'Provider outreach',
              desc: 'We contact trusted local pros on your behalf — no searching or phone tag.',
            },
            {
              icon: CalendarCheck,
              title: 'Scheduling',
              desc: 'We coordinate appointments around your availability and confirm everything.',
            },
            {
              icon: Receipt,
              title: 'Quotes & pricing',
              desc: 'We gather quotes, compare options, and present them clearly for your approval.',
            },
            {
              icon: FolderOpen,
              title: 'Documentation',
              desc: 'Invoices, warranties, and service records are saved to your home file.',
            },
          ].map(({ icon: Icon, title, desc }) => (
            <Card key={title} className="text-center">
              <div className="w-12 h-12 rounded-xl bg-brand-50 flex items-center justify-center mx-auto mb-5">
                <Icon className="w-6 h-6 text-brand-600" />
              </div>
              <h4 className="font-semibold text-slate-850 mb-2">{title}</h4>
              <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
            </Card>
          ))}
        </div>
      </Section>

      {/* ════════════════════════════════════════
          5 · REAL-WORLD EXAMPLES
      ════════════════════════════════════════ */}
      <Section bg="warm" id="examples">
        <SectionHeading
          title="See it in action"
          subtitle="Real scenarios showing exactly how HomeOps works day-to-day."
          centered
        />

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Example 1 */}
          <Card className="flex flex-col">
            <span className="inline-block text-xs font-semibold tracking-wide uppercase text-brand-600 mb-4">
              Annual service scheduling
            </span>
            <div className="bg-gray-50 rounded-xl p-4 mb-5">
              <p className="text-sm font-medium text-slate-850 flex items-start gap-2">
                <Send className="w-4 h-4 text-brand-500 mt-0.5 shrink-0" />
                <span>
                  &ldquo;Can you schedule the annual furnace tune-up? Last
                  year&rsquo;s company was fine.&rdquo;
                </span>
              </p>
            </div>
            <div className="bg-brand-50 border border-brand-100 rounded-xl p-4 flex-1">
              <p className="text-sm text-gray-600 leading-relaxed">
                <span className="font-semibold text-brand-700">HomeOps:</span>{' '}
                Done. I reached out to Comfort Air (your provider from last
                October). They have availability next Tuesday 9&ndash;12 or
                Thursday 1&ndash;4. Which works better? I&rsquo;ll confirm and
                send you a calendar hold.
              </p>
            </div>
          </Card>

          {/* Example 2 */}
          <Card className="flex flex-col">
            <span className="inline-block text-xs font-semibold tracking-wide uppercase text-brand-600 mb-4">
              Quote coordination
            </span>
            <div className="bg-gray-50 rounded-xl p-4 mb-5">
              <p className="text-sm font-medium text-slate-850 flex items-start gap-2">
                <Send className="w-4 h-4 text-brand-500 mt-0.5 shrink-0" />
                <span>
                  &ldquo;We want to replace the deck boards. Can you get a
                  couple quotes?&rdquo;
                </span>
              </p>
            </div>
            <div className="bg-brand-50 border border-brand-100 rounded-xl p-4 flex-1">
              <p className="text-sm text-gray-600 leading-relaxed">
                <span className="font-semibold text-brand-700">HomeOps:</span>{' '}
                Absolutely. I&rsquo;ll reach out to two vetted deck contractors
                in your area. I&rsquo;ll share a side-by-side comparison once
                both quotes are in &mdash; usually within 5&ndash;7 business
                days. No commitment until you say go.
              </p>
            </div>
          </Card>

          {/* Example 3 */}
          <Card className="flex flex-col">
            <span className="inline-block text-xs font-semibold tracking-wide uppercase text-brand-600 mb-4">
              &ldquo;Do we have the manual?&rdquo;
            </span>
            <div className="bg-gray-50 rounded-xl p-4 mb-5">
              <p className="text-sm font-medium text-slate-850 flex items-start gap-2">
                <Send className="w-4 h-4 text-brand-500 mt-0.5 shrink-0" />
                <span>
                  &ldquo;The oven is flashing an error code — E2 F3. What does
                  that mean?&rdquo;
                </span>
              </p>
            </div>
            <div className="bg-brand-50 border border-brand-100 rounded-xl p-4 flex-1">
              <p className="text-sm text-gray-600 leading-relaxed">
                <span className="font-semibold text-brand-700">HomeOps:</span>{' '}
                That code means the oven temperature sensor is reading too high.
                I pulled it from your KitchenAid KOSE500ESS manual (page 34). A
                quick fix is to power-cycle it. If it returns, I&rsquo;ll
                schedule a technician — still under warranty until August.
              </p>
            </div>
          </Card>
        </div>
      </Section>

      {/* ════════════════════════════════════════
          6 · SERVICE STANDARDS
      ════════════════════════════════════════ */}
      <Section bg="white" id="standards">
        <SectionHeading
          title="Our service standards"
          subtitle="What you can expect from every interaction with HomeOps."
          centered
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              icon: Clock,
              title: 'Fast response',
              desc: 'Messages are acknowledged within 1 business hour. Most requests are actioned the same day.',
            },
            {
              icon: CheckCircle2,
              title: 'Proactive follow-ups',
              desc: "We follow up with providers so you don't have to. You'll always know the status.",
            },
            {
              icon: FileText,
              title: 'Everything documented',
              desc: 'Service records, invoices, and warranty details stored in your home file — accessible anytime.',
            },
            {
              icon: DollarSign,
              title: 'Transparent pricing',
              desc: 'No markups on service providers. You see the same price they quote. Our fee is your membership.',
            },
          ].map(({ icon: Icon, title, desc }) => (
            <Card key={title} className="text-center">
              <div className="w-14 h-14 rounded-2xl bg-brand-50 flex items-center justify-center mx-auto mb-5">
                <Icon className="w-7 h-7 text-brand-600" />
              </div>
              <h3 className="font-serif text-lg font-semibold text-slate-850 mb-2">
                {title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
            </Card>
          ))}
        </div>
      </Section>

      {/* ════════════════════════════════════════
          7 · FINAL CTA
      ════════════════════════════════════════ */}
      <Section bg="brand" id="cta">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-slate-850 leading-tight mb-5">
            Ready to stop managing your home alone?
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed mb-10">
            Pick the plan that fits your household and let HomeOps handle the
            rest. Setup takes about 15 minutes.
          </p>
          <Button to="/pricing" variant="primary" size="lg">
            View pricing
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </Section>
    </main>
  )
}
