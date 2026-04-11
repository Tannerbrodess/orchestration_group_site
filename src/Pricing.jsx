import React from 'react';

export default function Pricing() {
  return (
    <div className="max-w-6xl mx-auto py-20 px-4" id="pricing">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-slate-900 mb-4">Transparent Investment, Custom Solutions</h2>
        <p className="text-xl text-slate-600 max-w-2xl mx-auto">
          We don't do cookie-cutter pricing because you don't have cookie-cutter problems. Here is how we structure our partnerships.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {/* Step 1 */}
        <div className="bg-white border border-slate-200 rounded-xl p-8 shadow-sm flex flex-col">
          <div className="text-blue-600 font-semibold tracking-wide uppercase text-sm mb-2">Step 1</div>
          <h3 className="text-2xl font-bold text-slate-900 mb-4">The Automation Audit</h3>
          <div className="text-4xl font-extrabold text-slate-900 mb-6">$500</div>
          <p className="text-slate-600 mb-8 flex-grow">
            A comprehensive deep dive into your current bottlenecks and a blueprint for ROI.
          </p>
          <ul className="space-y-4 mb-8">
            <li className="flex items-start text-slate-700">✓ Workflow and bottleneck analysis</li>
            <li className="flex items-start text-slate-700">✓ Custom ROI and architecture blueprint</li>
            <li className="flex items-start font-semibold text-emerald-600">✓ 100% credited toward your build</li>
          </ul>
        </div>

        {/* Step 2 */}
        <div className="bg-blue-600 border border-blue-600 rounded-xl p-8 shadow-lg flex flex-col relative transform md:-translate-y-4">
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-blue-100 text-blue-800 text-xs font-bold px-4 py-1 rounded-full uppercase tracking-wide">
            Core Engagement
          </div>
          <div className="text-blue-200 font-semibold tracking-wide uppercase text-sm mb-2">Step 2</div>
          <h3 className="text-2xl font-bold text-white mb-4">The Build</h3>
          <div className="text-3xl font-extrabold text-white mb-6">Starts at $1,500</div>
          <p className="text-blue-100 mb-8 flex-grow">
            We construct the data pipelines and AI agents designed in your audit. Your $500 audit investment is automatically applied here.
          </p>
           <ul className="space-y-4 mb-8 text-blue-50">
            <li className="flex items-start">✓ Custom Make.com scenario pipelines</li>
            <li className="flex items-start">✓ AI Agent and LLM integration</li>
            <li className="flex items-start">✓ Invisible CRM and software syncing</li>
          </ul>
          <a href="#contact" className="text-center w-full py-3 px-4 bg-white text-blue-600 font-bold rounded-lg hover:bg-blue-50 transition-colors block">
            Book a Free Call
          </a>
        </div>

        {/* Step 3 */}
        <div className="bg-white border border-slate-200 rounded-xl p-8 shadow-sm flex flex-col">
          <div className="text-blue-600 font-semibold tracking-wide uppercase text-sm mb-2">Step 3</div>
          <h3 className="text-2xl font-bold text-slate-900 mb-4">Ongoing Orchestration</h3>
          <div className="text-3xl font-extrabold text-slate-900 mb-6">Custom Retainer</div>
          <p className="text-slate-600 mb-8 flex-grow">
            Dedicated maintenance, prompt tuning, and API management to ensure your infrastructure never breaks.
          </p>
           <ul className="space-y-4 mb-8">
            <li className="flex items-start text-slate-700">✓ 24/7 Pipeline error monitoring</li>
            <li className="flex items-start text-slate-700">✓ Continuous AI prompt optimization</li>
            <li className="flex items-start text-slate-700">✓ Routine endpoint and API updates</li>
          </ul>
        </div>
      </div>
    </div>
  );
}