import { useState } from 'react';
import {
  Thermometer,
  Droplets,
  TreePine,
  ClipboardList,
  BookOpen,
  CheckCircle2,
  ArrowRight,
  Shield,
  Wrench,
  Home,
  AlertTriangle,
  Calendar,
  FileText,
  Snowflake,
} from 'lucide-react';
import Section from '../components/Section';
import SectionHeading from '../components/SectionHeading';
import Button from '../components/Button';

const categories = [
  {
    icon: Thermometer,
    title: 'Home Systems',
    color: 'bg-emerald-50 text-emerald-600',
    items: [
      'HVAC maintenance & coordination',
      'Water heater monitoring',
      'Filter replacement scheduling',
      'Thermostat optimization',
      'Second-opinion sourcing',
    ],
  },
  {
    icon: Droplets,
    title: 'Water + Risk',
    color: 'bg-blue-50 text-blue-600',
    items: [
      'Drainage assessment',
      'Sump pump readiness',
      'Basement water prevention',
      'Moisture monitoring',
      'Winter readiness checks',
    ],
  },
  {
    icon: TreePine,
    title: 'Exterior + Seasonal',
    color: 'bg-amber-50 text-amber-600',
    items: [
      'Gutter cleaning coordination',
      'Roof inspection scheduling',
      'Tree & branch management',
      'Storm prep checklists',
    ],
  },
  {
    icon: ClipboardList,
    title: 'Projects',
    color: 'bg-violet-50 text-violet-600',
    items: [
      'Quote gathering & comparison',
      'Scheduling coordination',
      'Documentation & follow-up',
      'Vendor notes & history',
    ],
  },
  {
    icon: BookOpen,
    title: 'Home Binder',
    color: 'bg-brand-50 text-brand-600',
    badge: 'Always Included',
    items: [
      'Full home inventory',
      'Model & serial numbers',
      'Manuals & spec sheets',
      'Warranty tracking',
      'Service timeline & history',
    ],
  },
];

const commonRequests = [
  { icon: Wrench, text: '"My HVAC is making a weird noise — can you get someone out?"' },
  { icon: Droplets, text: '"We found water in the basement after the rain."' },
  { icon: Calendar, text: '"It\'s been a year — is the furnace due for service?"' },
  { icon: FileText, text: '"We need three quotes for a new roof."' },
  { icon: AlertTriangle, text: '"Our sump pump hasn\'t been tested — can you check it?"' },
  { icon: Home, text: '"We just moved in and have no idea what systems we have."' },
  { icon: Snowflake, text: '"What should we do before winter hits?"' },
  { icon: Shield, text: '"We want someone to just stay on top of all this for us."' },
];

export default function WhatWeHandle() {
  const [expandedCategory, setExpandedCategory] = useState<number | null>(null);

  return (
    <>
      {/* Hero */}
      <Section bg="white">
        <div className="max-w-3xl mx-auto text-center py-16 md:py-24">
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Coverage that matches
            <span className="text-brand-600"> real homeownership.</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            We don't pick and choose what counts. If it's part of running your home,
            it's part of what we handle — from routine maintenance to unexpected
            problems to the paperwork nobody wants to deal with.
          </p>
        </div>
      </Section>

      {/* Categories */}
      <Section bg="warm">
        <SectionHeading
          title="What's included"
          subtitle="Five areas of coverage. One monthly price. No exclusions list."
          centered
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {categories.map((cat, i) => {
            const Icon = cat.icon;
            const isExpanded = expandedCategory === i;
            return (
              <button
                key={cat.title}
                onClick={() => setExpandedCategory(isExpanded ? null : i)}
                className={`text-left bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-all duration-200 ${
                  cat.title === 'Home Binder' ? 'md:col-span-2 lg:col-span-1 ring-2 ring-brand-200' : ''
                }`}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${cat.color}`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  {cat.badge && (
                    <span className="text-xs font-semibold bg-brand-100 text-brand-700 px-3 py-1 rounded-full">
                      {cat.badge}
                    </span>
                  )}
                </div>
                <h3 className="font-serif text-xl font-semibold text-gray-900 mb-3">
                  {cat.title}
                </h3>
                <ul className="space-y-2">
                  {cat.items.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-gray-600 text-sm">
                      <CheckCircle2 className="w-4 h-4 text-brand-500 mt-0.5 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </button>
            );
          })}
        </div>
      </Section>

      {/* Common Requests */}
      <Section bg="white">
        <SectionHeading
          title="Common requests we hear"
          subtitle="These are the kinds of things our members reach out about. All of them are covered."
          centered
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-12 max-w-4xl mx-auto">
          {commonRequests.map((req) => {
            const Icon = req.icon;
            return (
              <div
                key={req.text}
                className="flex items-start gap-4 bg-gray-50 rounded-xl p-5 border border-gray-100"
              >
                <div className="w-10 h-10 rounded-lg bg-brand-50 flex items-center justify-center shrink-0">
                  <Icon className="w-5 h-5 text-brand-600" />
                </div>
                <p className="text-gray-700 text-sm leading-relaxed italic">
                  {req.text}
                </p>
              </div>
            );
          })}
        </div>
      </Section>

      {/* Fit Check */}
      <Section bg="warm">
        <div className="max-w-3xl mx-auto text-center">
          <SectionHeading
            title="Is this a fit?"
            subtitle="HomeOps works best for homeowners who want things handled — not just fixed."
            centered
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12 text-left">
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
              <h3 className="font-serif text-lg font-semibold text-brand-700 mb-4">
                Great fit if you…
              </h3>
              <ul className="space-y-3">
                {[
                  'Want one place managing all home tasks',
                  'Value prevention over emergency scrambles',
                  'Prefer clear documentation of everything',
                  'Don\'t have time to chase contractors',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-gray-700 text-sm">
                    <CheckCircle2 className="w-4 h-4 text-brand-500 mt-0.5 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
              <h3 className="font-serif text-lg font-semibold text-gray-500 mb-4">
                Might not be the best fit if you…
              </h3>
              <ul className="space-y-3">
                {[
                  'Enjoy managing home projects yourself',
                  'Only need a one-time repair',
                  'Are looking for a home warranty',
                  'Want someone to do the physical work',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-gray-500 text-sm">
                    <ArrowRight className="w-4 h-4 text-gray-400 mt-0.5 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </Section>

      {/* CTA */}
      <Section bg="brand">
        <div className="text-center py-8 md:py-12">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to hand off the home stuff?
          </h2>
          <p className="text-brand-100 text-lg mb-8 max-w-xl mx-auto">
            Onboarding takes about an hour. No contracts. Cancel anytime.
          </p>
          <Button to="/get-started" variant="secondary" size="lg">
            Get Started
          </Button>
        </div>
      </Section>
    </>
  );
}
