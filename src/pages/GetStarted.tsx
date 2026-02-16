import { useState } from 'react';
import {
  CheckCircle2,
  ArrowRight,
  ArrowLeft,
  Shield,
  Clock,
  FileText,
  Camera,
  CalendarCheck,
  Home,
  Sparkles,
  Check,
} from 'lucide-react';
import Section from '../components/Section';

const steps = [
  { label: 'Plan', icon: Shield },
  { label: 'Details', icon: FileText },
  { label: 'Photos', icon: Camera },
  { label: 'Kickoff', icon: CalendarCheck },
];

const goalOptions = [
  'Get ahead on maintenance',
  'Stop scrambling for contractors',
  'Organize home records',
  'Prepare for seasonal changes',
  'Get better quotes on projects',
  'Reduce surprise expenses',
  'Build a Home Binder',
  'Peace of mind',
];

const photoChecklist = [
  {
    room: 'Mechanical Room / Utility Area',
    items: [
      'Furnace / boiler label',
      'Air conditioner outdoor unit label',
      'Water heater label',
      'Electrical panel (door closed & open)',
      'Water shut-off valve',
      'Gas meter',
    ],
  },
  {
    room: 'Basement',
    items: [
      'Sump pump (if applicable)',
      'Sump pit area',
      'Foundation walls (any cracks or staining)',
      'Dehumidifier label (if applicable)',
    ],
  },
  {
    room: 'Kitchen',
    items: [
      'Dishwasher model label',
      'Refrigerator model label',
      'Oven / range model label',
      'Garbage disposal (if applicable)',
    ],
  },
  {
    room: 'Laundry',
    items: [
      'Washer model label',
      'Dryer model label',
      'Dryer vent connection',
    ],
  },
  {
    room: 'Exterior',
    items: [
      'Roof overview (from ground level)',
      'Gutters and downspouts',
      'Hose bibs',
      'Driveway / walkway condition',
    ],
  },
  {
    room: 'Bathrooms',
    items: [
      'Under-sink plumbing (any visible issues)',
      'Exhaust fan',
      'Caulking around tub/shower',
    ],
  },
];

export default function GetStarted() {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    preferredContact: 'email',
    address: '',
    homeType: '',
    homeAge: '',
    hasBasement: '',
    hasSumpPump: '',
    goals: [] as string[],
    hasPreferredVendors: '',
  });
  const [photoChecks, setPhotoChecks] = useState<Record<string, boolean>>({});

  const updateField = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const toggleGoal = (goal: string) => {
    setFormData((prev) => ({
      ...prev,
      goals: prev.goals.includes(goal)
        ? prev.goals.filter((g) => g !== goal)
        : [...prev.goals, goal],
    }));
  };

  const togglePhoto = (key: string) => {
    setPhotoChecks((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const nextStep = () => setCurrentStep((s) => Math.min(s + 1, 4));
  const prevStep = () => setCurrentStep((s) => Math.max(s - 1, 1));

  const inputClasses =
    'w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent transition-all text-sm';
  const selectClasses =
    'w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent transition-all text-sm appearance-none';
  const labelClasses = 'block text-sm font-medium text-gray-700 mb-1.5';

  return (
    <>
      {/* Hero */}
      <Section bg="white">
        <div className="max-w-3xl mx-auto text-center pt-16 pb-8 md:pt-24 md:pb-12">
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Get set up in
            <span className="text-brand-600"> about an hour.</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Four simple steps to hand off the home management. No contracts, no
            commitments — cancel anytime.
          </p>
        </div>
      </Section>

      {/* Progress Indicator */}
      <Section bg="warm">
        <div className="max-w-2xl mx-auto mb-10">
          <div className="flex items-center justify-between">
            {steps.map((step, i) => {
              const StepIcon = step.icon;
              const stepNum = i + 1;
              const isActive = currentStep === stepNum;
              const isCompleted = currentStep > stepNum;
              return (
                <div key={step.label} className="flex-1 flex flex-col items-center relative">
                  {i > 0 && (
                    <div
                      className={`absolute top-5 right-1/2 w-full h-0.5 -translate-y-1/2 ${
                        isCompleted || isActive ? 'bg-brand-500' : 'bg-gray-200'
                      }`}
                      style={{ left: '-50%', width: '100%', zIndex: 0 }}
                    />
                  )}
                  <div
                    className={`relative z-10 w-10 h-10 rounded-full flex items-center justify-center transition-all ${
                      isCompleted
                        ? 'bg-brand-500 text-white'
                        : isActive
                        ? 'bg-brand-600 text-white ring-4 ring-brand-100'
                        : 'bg-gray-200 text-gray-500'
                    }`}
                  >
                    {isCompleted ? (
                      <Check className="w-5 h-5" />
                    ) : (
                      <StepIcon className="w-4 h-4" />
                    )}
                  </div>
                  <span
                    className={`mt-2 text-xs font-medium ${
                      isActive ? 'text-brand-600' : isCompleted ? 'text-brand-500' : 'text-gray-400'
                    }`}
                  >
                    {step.label}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Step Content */}
        <div className="max-w-2xl mx-auto">
          {/* Step 1: Plan Selection */}
          {currentStep === 1 && (
            <div className="space-y-6">
              <div className="text-center mb-8">
                <h2 className="font-serif text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                  Choose your plan
                </h2>
                <p className="text-gray-600">One plan. Everything included. No tiers to compare.</p>
              </div>

              <div className="bg-white rounded-2xl shadow-sm border-2 border-brand-500 p-8 relative overflow-hidden">
                <div className="absolute top-0 right-0 bg-brand-500 text-white text-xs font-semibold px-4 py-1.5 rounded-bl-xl">
                  All-Inclusive
                </div>
                <div className="flex items-baseline gap-1 mb-1">
                  <span className="text-4xl md:text-5xl font-bold text-gray-900">$89</span>
                  <span className="text-gray-500 text-lg">/month</span>
                </div>
                <p className="text-gray-500 text-sm mb-6">No contracts. Cancel anytime.</p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                  {[
                    'Dedicated home advisor',
                    'Vendor coordination',
                    'Quote comparison',
                    'Home Binder (included)',
                    'Seasonal prevention',
                    'Maintenance scheduling',
                    'Warranty tracking',
                    'Priority response',
                  ].map((feature) => (
                    <div key={feature} className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-brand-500 shrink-0" />
                      <span className="text-sm text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>

                <button
                  onClick={nextStep}
                  className="w-full bg-brand-600 hover:bg-brand-700 text-white font-semibold py-3.5 px-6 rounded-xl transition-colors flex items-center justify-center gap-2"
                >
                  Continue
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

              <div className="flex items-center justify-center gap-6 text-sm text-gray-500">
                <div className="flex items-center gap-1.5">
                  <Shield className="w-4 h-4" />
                  <span>No contracts</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Clock className="w-4 h-4" />
                  <span>15 min setup</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Sparkles className="w-4 h-4" />
                  <span>Cancel anytime</span>
                </div>
              </div>
            </div>
          )}

          {/* Step 2: Intake Form */}
          {currentStep === 2 && (
            <div className="space-y-6">
              <div className="text-center mb-8">
                <h2 className="font-serif text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                  Tell us about your home
                </h2>
                <p className="text-gray-600">
                  This helps us understand your home and priorities from day one.
                </p>
              </div>

              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 md:p-8 space-y-5">
                <h3 className="font-serif text-lg font-semibold text-gray-900">Contact Information</h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className={labelClasses}>Full Name</label>
                    <input
                      type="text"
                      className={inputClasses}
                      placeholder="Jane Smith"
                      value={formData.name}
                      onChange={(e) => updateField('name', e.target.value)}
                    />
                  </div>
                  <div>
                    <label className={labelClasses}>Email</label>
                    <input
                      type="email"
                      className={inputClasses}
                      placeholder="jane@example.com"
                      value={formData.email}
                      onChange={(e) => updateField('email', e.target.value)}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className={labelClasses}>Phone</label>
                    <input
                      type="tel"
                      className={inputClasses}
                      placeholder="(555) 123-4567"
                      value={formData.phone}
                      onChange={(e) => updateField('phone', e.target.value)}
                    />
                  </div>
                  <div>
                    <label className={labelClasses}>Preferred Contact Method</label>
                    <select
                      className={selectClasses}
                      value={formData.preferredContact}
                      onChange={(e) => updateField('preferredContact', e.target.value)}
                    >
                      <option value="email">Email</option>
                      <option value="phone">Phone</option>
                      <option value="text">Text</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className={labelClasses}>Home Address</label>
                  <input
                    type="text"
                    className={inputClasses}
                    placeholder="123 Main St, Anytown, ST 12345"
                    value={formData.address}
                    onChange={(e) => updateField('address', e.target.value)}
                  />
                </div>
              </div>

              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 md:p-8 space-y-5">
                <h3 className="font-serif text-lg font-semibold text-gray-900">Home Details</h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className={labelClasses}>Home Type</label>
                    <select
                      className={selectClasses}
                      value={formData.homeType}
                      onChange={(e) => updateField('homeType', e.target.value)}
                    >
                      <option value="">Select...</option>
                      <option value="single-family">Single Family</option>
                      <option value="townhouse">Townhouse</option>
                      <option value="condo">Condo</option>
                      <option value="duplex">Duplex</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div>
                    <label className={labelClasses}>Approximate Home Age</label>
                    <select
                      className={selectClasses}
                      value={formData.homeAge}
                      onChange={(e) => updateField('homeAge', e.target.value)}
                    >
                      <option value="">Select...</option>
                      <option value="0-5">0–5 years</option>
                      <option value="5-15">5–15 years</option>
                      <option value="15-30">15–30 years</option>
                      <option value="30-50">30–50 years</option>
                      <option value="50+">50+ years</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className={labelClasses}>Basement?</label>
                    <select
                      className={selectClasses}
                      value={formData.hasBasement}
                      onChange={(e) => updateField('hasBasement', e.target.value)}
                    >
                      <option value="">Select...</option>
                      <option value="yes">Yes</option>
                      <option value="no">No</option>
                    </select>
                  </div>
                  <div>
                    <label className={labelClasses}>Sump Pump?</label>
                    <select
                      className={selectClasses}
                      value={formData.hasSumpPump}
                      onChange={(e) => updateField('hasSumpPump', e.target.value)}
                    >
                      <option value="">Select...</option>
                      <option value="yes">Yes</option>
                      <option value="no">No</option>
                      <option value="not-sure">Not sure</option>
                    </select>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 md:p-8 space-y-5">
                <h3 className="font-serif text-lg font-semibold text-gray-900">Goals & Preferences</h3>

                <div>
                  <label className={labelClasses}>What are your main goals? (select all that apply)</label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-2">
                    {goalOptions.map((goal) => (
                      <label
                        key={goal}
                        className={`flex items-center gap-3 p-3 rounded-xl border cursor-pointer transition-all text-sm ${
                          formData.goals.includes(goal)
                            ? 'border-brand-500 bg-brand-50 text-brand-700'
                            : 'border-gray-200 bg-white text-gray-700 hover:border-gray-300'
                        }`}
                      >
                        <input
                          type="checkbox"
                          className="sr-only"
                          checked={formData.goals.includes(goal)}
                          onChange={() => toggleGoal(goal)}
                        />
                        <div
                          className={`w-5 h-5 rounded-md border-2 flex items-center justify-center shrink-0 ${
                            formData.goals.includes(goal)
                              ? 'border-brand-500 bg-brand-500'
                              : 'border-gray-300'
                          }`}
                        >
                          {formData.goals.includes(goal) && <Check className="w-3 h-3 text-white" />}
                        </div>
                        {goal}
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <label className={labelClasses}>Do you have preferred vendors you'd like us to work with?</label>
                  <select
                    className={selectClasses}
                    value={formData.hasPreferredVendors}
                    onChange={(e) => updateField('hasPreferredVendors', e.target.value)}
                  >
                    <option value="">Select...</option>
                    <option value="yes">Yes — I'll share their info</option>
                    <option value="no">No — please recommend vendors</option>
                    <option value="some">Some — I have a few</option>
                  </select>
                </div>
              </div>

              <div className="flex items-center justify-between pt-2">
                <button
                  onClick={prevStep}
                  className="flex items-center gap-2 text-gray-500 hover:text-gray-700 font-medium text-sm transition-colors"
                >
                  <ArrowLeft className="w-4 h-4" />
                  Back
                </button>
                <button
                  onClick={nextStep}
                  className="bg-brand-600 hover:bg-brand-700 text-white font-semibold py-3 px-8 rounded-xl transition-colors flex items-center gap-2"
                >
                  Continue
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

          {/* Step 3: Photo Onboarding */}
          {currentStep === 3 && (
            <div className="space-y-6">
              <div className="text-center mb-8">
                <h2 className="font-serif text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                  Photo onboarding checklist
                </h2>
                <p className="text-gray-600">
                  Take photos of these items so we can build your Home Binder. Don't
                  worry if you can't find everything — we'll help.
                </p>
              </div>

              <div className="bg-brand-50 rounded-xl border border-brand-200 p-4 flex items-start gap-3">
                <Camera className="w-5 h-5 text-brand-600 mt-0.5 shrink-0" />
                <p className="text-sm text-brand-800">
                  <span className="font-semibold">Tip:</span> Focus on equipment labels — they
                  usually have the model number, serial number, and manufacturing date. A clear,
                  well-lit photo is all we need.
                </p>
              </div>

              {photoChecklist.map((section) => (
                <div
                  key={section.room}
                  className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden"
                >
                  <div className="bg-gray-50 px-6 py-4 border-b border-gray-100">
                    <h3 className="font-serif text-base font-semibold text-gray-900 flex items-center gap-2">
                      <Home className="w-4 h-4 text-brand-600" />
                      {section.room}
                    </h3>
                  </div>
                  <div className="p-4 space-y-1">
                    {section.items.map((item) => {
                      const key = `${section.room}-${item}`;
                      return (
                        <label
                          key={key}
                          className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 cursor-pointer transition-colors"
                        >
                          <div
                            className={`w-5 h-5 rounded-md border-2 flex items-center justify-center shrink-0 transition-colors ${
                              photoChecks[key]
                                ? 'border-brand-500 bg-brand-500'
                                : 'border-gray-300'
                            }`}
                            onClick={() => togglePhoto(key)}
                          >
                            {photoChecks[key] && <Check className="w-3 h-3 text-white" />}
                          </div>
                          <span
                            className={`text-sm transition-colors ${
                              photoChecks[key] ? 'text-gray-400 line-through' : 'text-gray-700'
                            }`}
                          >
                            {item}
                          </span>
                        </label>
                      );
                    })}
                  </div>
                </div>
              ))}

              <div className="flex items-center justify-between pt-2">
                <button
                  onClick={prevStep}
                  className="flex items-center gap-2 text-gray-500 hover:text-gray-700 font-medium text-sm transition-colors"
                >
                  <ArrowLeft className="w-4 h-4" />
                  Back
                </button>
                <button
                  onClick={nextStep}
                  className="bg-brand-600 hover:bg-brand-700 text-white font-semibold py-3 px-8 rounded-xl transition-colors flex items-center gap-2"
                >
                  Continue
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

          {/* Step 4: Schedule Kickoff */}
          {currentStep === 4 && (
            <div className="space-y-6">
              <div className="text-center mb-8">
                <div className="w-20 h-20 rounded-full bg-brand-100 flex items-center justify-center mx-auto mb-6">
                  <CheckCircle2 className="w-10 h-10 text-brand-600" />
                </div>
                <h2 className="font-serif text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                  You're all set.
                </h2>
                <p className="text-gray-600 max-w-md mx-auto">
                  We have everything we need to get started. Here's what happens next.
                </p>
              </div>

              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 md:p-8">
                <h3 className="font-serif text-lg font-semibold text-gray-900 mb-6">
                  Next steps
                </h3>
                <div className="space-y-6">
                  {[
                    {
                      step: '1',
                      title: 'Confirmation email',
                      desc: 'You\'ll receive a welcome email within the next few minutes with your account details and Home Binder access link.',
                    },
                    {
                      step: '2',
                      title: 'Kickoff call (15 min)',
                      desc: 'We\'ll schedule a brief call to review your home details, discuss priorities, and answer any questions. This usually happens within 24–48 hours.',
                    },
                    {
                      step: '3',
                      title: 'Home Binder setup',
                      desc: 'Using your photos and intake info, we\'ll build the first version of your Home Binder — including equipment inventory, model numbers, and warranty details.',
                    },
                    {
                      step: '4',
                      title: 'Prevention calendar',
                      desc: 'Based on your home\'s age, systems, and local climate, we\'ll create a maintenance calendar so nothing falls through the cracks.',
                    },
                  ].map((item) => (
                    <div key={item.step} className="flex gap-4">
                      <div className="w-8 h-8 rounded-full bg-brand-100 text-brand-600 flex items-center justify-center font-bold text-sm shrink-0">
                        {item.step}
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">{item.title}</h4>
                        <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-brand-50 rounded-2xl border border-brand-200 p-6 md:p-8 text-center">
                <Sparkles className="w-8 h-8 text-brand-600 mx-auto mb-3" />
                <h3 className="font-serif text-xl font-semibold text-gray-900 mb-2">
                  Welcome to HomeOps.
                </h3>
                <p className="text-gray-600 text-sm max-w-md mx-auto">
                  You just took the hardest step — handing it off. From here, we've got it.
                  Your home is in good hands.
                </p>
              </div>

              <div className="flex items-center justify-between pt-2">
                <button
                  onClick={prevStep}
                  className="flex items-center gap-2 text-gray-500 hover:text-gray-700 font-medium text-sm transition-colors"
                >
                  <ArrowLeft className="w-4 h-4" />
                  Back
                </button>
              </div>
            </div>
          )}
        </div>
      </Section>
    </>
  );
}
