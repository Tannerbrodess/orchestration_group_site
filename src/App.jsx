import React, { useState } from 'react';
import { 
  ArrowRight, 
  PhoneMissed, 
  Workflow, 
  Clock, 
  CheckCircle2, 
  Mail, 
  Menu, 
  X,
  MessageSquare,
  PlaySquare,
  Zap,
  Terminal,
  MapPin,
  CalendarCheck,
  FileText,
  DollarSign,
  Star,
  Bot,
  Send,
  Cpu
} from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState('home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navigateTo = (tab) => {
    setActiveTab(tab);
    setIsMobileMenuOpen(false);
    window.scrollTo(0, 0);
  };

  const NavLinks = () => (
    <>
      <button onClick={() => navigateTo('home')} className={`text-sm font-medium hover:text-blue-600 transition-colors ${activeTab === 'home' ? 'text-blue-600' : 'text-slate-600'}`}>Home</button>
      <button onClick={() => navigateTo('packages')} className={`text-sm font-medium hover:text-blue-600 transition-colors ${activeTab === 'packages' ? 'text-blue-600' : 'text-slate-600'}`}>Our Systems</button>
      <button onClick={() => navigateTo('simulator')} className={`text-sm font-medium hover:text-blue-600 transition-colors flex items-center ${activeTab === 'simulator' ? 'text-blue-600' : 'text-slate-600'}`}>
        <PlaySquare className="w-4 h-4 mr-1" /> Simulator
      </button>
      <button onClick={() => navigateTo('about')} className={`text-sm font-medium hover:text-blue-600 transition-colors ${activeTab === 'about' ? 'text-blue-600' : 'text-slate-600'}`}>My Story</button>
      <button onClick={() => navigateTo('contact')} className="bg-blue-600 text-white px-5 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors shadow-sm">
        Book Free Call
      </button>
    </>
  );

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 selection:bg-blue-100 flex flex-col">
      {/* Navigation */}
      <nav className="bg-white border-b border-slate-200 sticky top-0 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20 items-center">
            <div className="flex-shrink-0 flex items-center cursor-pointer" onClick={() => navigateTo('home')}>
              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center mr-3 shadow-sm">
                <Workflow className="w-6 h-6 text-white" />
              </div>
              <div>
                <span className="font-bold text-xl tracking-tight text-slate-900 block leading-none">The Orchestration</span>
                <span className="font-bold text-xl tracking-tight text-blue-600 block leading-none">Group</span>
              </div>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              <NavLinks />
            </div>

            <div className="md:hidden flex items-center">
              <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-slate-600 hover:text-slate-900 focus:outline-none">
                {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-slate-100 px-4 pt-2 pb-4 space-y-4 shadow-lg absolute w-full">
            <div className="flex flex-col space-y-4 pt-4 pb-2 items-center">
              <NavLinks />
            </div>
          </div>
        )}
      </nav>

      {/* Main Content Area */}
      <main className="flex-grow w-full">
        {activeTab === 'home' && <HomeView navigateTo={navigateTo} />}
        {activeTab === 'packages' && <PackagesView navigateTo={navigateTo} />}
        {activeTab === 'simulator' && <SimulatorView />}
        {activeTab === 'about' && <AboutView navigateTo={navigateTo} />}
        {activeTab === 'contact' && <ContactView />}
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 py-12 mt-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center mb-4">
              <Workflow className="w-6 h-6 text-blue-500 mr-2" />
              <span className="font-bold text-xl text-white">The Orchestration Group</span>
            </div>
            <p className="text-sm pr-4">
              You didn't start a business to do paperwork at 10 PM. We build simple automated systems that answer your missed calls, follow up with leads, and chase down invoices for you.
            </p>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-4">Popular Systems</h3>
            <ul className="space-y-2 text-sm">
              <li><button onClick={() => navigateTo('packages')} className="hover:text-blue-400 transition-colors">Estimate Follow-Ups</button></li>
              <li><button onClick={() => navigateTo('packages')} className="hover:text-blue-400 transition-colors">Google Review Machine</button></li>
              <li><button onClick={() => navigateTo('simulator')} className="hover:text-blue-400 transition-colors">Test the Simulator</button></li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-sm">
              <li><button onClick={() => navigateTo('about')} className="hover:text-blue-400 transition-colors">My Story</button></li>
              <li><button onClick={() => navigateTo('contact')} className="hover:text-blue-400 transition-colors">Contact Me</button></li>
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 pt-8 border-t border-slate-800 text-sm flex flex-col md:flex-row justify-between items-center">
          <p>&copy; {new Date().getFullYear()} The Orchestration Group.</p>
          <p className="mt-2 md:mt-0 flex items-center">
            <MapPin className="w-4 h-4 mr-1 text-blue-500" /> Based in Northlake, TX
          </p>
        </div>
      </footer>
    </div>
  );
}

// --- VIEWS ---

function HomeView({ navigateTo }) {
  return (
    <div className="animate-in fade-in duration-500">
      <section className="relative bg-white overflow-hidden border-b border-slate-200">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-32 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center space-x-2 bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm font-semibold mb-6 border border-blue-100 shadow-sm">
              <span className="flex h-2 w-2 rounded-full bg-blue-600 animate-pulse"></span>
              <span>Built for Local Service Businesses & Shops</span>
            </div>
            <h1 className="text-5xl sm:text-6xl font-extrabold text-slate-900 leading-tight mb-6 tracking-tight">
              You didn't start a business to <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">do paperwork all night.</span>
            </h1>
            <p className="text-xl text-slate-600 mb-10 leading-relaxed max-w-2xl">
              When you're busy running the day-to-day, things slip through the cracks. Missed calls cost you jobs. Unsent invoices cost you cash. We build simple, invisible systems that handle your follow-ups, scheduling, and billing automatically.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <button onClick={() => navigateTo('contact')} className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-medium hover:bg-blue-700 transition-all shadow-lg hover:shadow-xl flex items-center justify-center">
                Book a Free Call
                <ArrowRight className="ml-2 w-5 h-5" />
              </button>
              <button onClick={() => navigateTo('packages')} className="bg-white text-slate-700 border border-slate-300 px-8 py-4 rounded-lg text-lg font-medium hover:bg-slate-50 transition-all flex items-center justify-center shadow-sm">
                <Workflow className="mr-2 w-5 h-5 text-blue-600" />
                See Our Systems
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">The Cost of Being Too Busy</h2>
            <p className="text-lg text-slate-600">You are great at your trade, but acting as a full-time receptionist, accountant, and marketing manager is burning you out.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center mb-6">
                <PhoneMissed className="w-6 h-6 text-red-600" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-slate-900">1. The Missed Call</h3>
              <p className="text-slate-600">You're on a job site or with a customer and can't answer the phone. The caller doesn't leave a voicemail; they just call the next business on Google. You lost the job.</p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 rounded-bl-full -z-10"></div>
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-6 z-10 relative">
                <Clock className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-slate-900">2. The 10 PM Paperwork</h3>
              <p className="text-slate-600">You finish working at 5 PM, but your "second job" begins at 8 PM. You spend hours manually typing out quotes, writing emails, and updating customer lists.</p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow border-t-4 border-t-emerald-600">
              <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center mb-6">
                <DollarSign className="w-6 h-6 text-emerald-600" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-slate-900">3. Chasing Payments</h3>
              <p className="text-slate-600">The work is done, but the client hasn't paid. You feel awkward sending that "Hey, just checking in on this invoice" email, so you put it off and cash flow suffers.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function PackagesView({ navigateTo }) {
  return (
    <div className="animate-in fade-in duration-500 bg-white min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-blue-600 font-bold tracking-wider uppercase text-sm mb-2 block">The Solution Menu</span>
          <h2 className="text-4xl font-extrabold text-slate-900 mb-6">Simple Systems That Run Themselves</h2>
          <p className="text-lg text-slate-600">Pick the headache you want to solve first. We build the automation once, and it works for you 24/7/365.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {/* System 1 */}
          <div className="bg-slate-50 border border-slate-200 rounded-2xl p-8 hover:shadow-lg transition-all relative">
            <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
              <PhoneMissed className="w-6 h-6 text-blue-600" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">The Rescheduler</h3>
            <p className="text-slate-600 text-sm mb-6 flex-grow">A customer cancels or no-shows. The system automatically tags them and texts them 2 hours later to rebook, saving the lost revenue.</p>
            <button onClick={() => navigateTo('contact')} className="text-blue-600 font-semibold text-sm flex items-center hover:text-blue-800">
              Get this system <ArrowRight className="w-4 h-4 ml-1" />
            </button>
          </div>

          {/* System 2 */}
          <div className="bg-slate-50 border border-slate-200 rounded-2xl p-8 hover:shadow-lg transition-all relative">
            <div className="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center mb-6">
              <FileText className="w-6 h-6 text-indigo-600" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">Estimate Follow-Up</h3>
            <p className="text-slate-600 text-sm mb-6 flex-grow">You send a quote, but the client goes quiet. This system automatically follows up at 3 and 7 days so you don't have to nag them manually.</p>
            <button onClick={() => navigateTo('contact')} className="text-blue-600 font-semibold text-sm flex items-center hover:text-blue-800">
              Get this system <ArrowRight className="w-4 h-4 ml-1" />
            </button>
          </div>

          {/* System 3 */}
          <div className="bg-slate-50 border border-slate-200 rounded-2xl p-8 hover:shadow-lg transition-all relative">
            <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center mb-6">
              <Star className="w-6 h-6 text-amber-600" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">Google Review Machine</h3>
            <p className="text-slate-600 text-sm mb-6 flex-grow">When a job is marked "Done", the system texts the client 24 hours later asking for a Google Review. Build your local SEO on complete autopilot.</p>
            <button onClick={() => navigateTo('contact')} className="text-blue-600 font-semibold text-sm flex items-center hover:text-blue-800">
              Get this system <ArrowRight className="w-4 h-4 ml-1" />
            </button>
          </div>

          {/* System 4 */}
          <div className="bg-slate-50 border border-slate-200 rounded-2xl p-8 hover:shadow-lg transition-all relative">
            <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center mb-6">
              <Bot className="w-6 h-6 text-emerald-600" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">AI Support Receptionist</h3>
            <p className="text-slate-600 text-sm mb-6 flex-grow">Stop answering "What are your hours?" texts. Our AI agent answers simple FAQ texts instantly, and forwards complex questions directly to you.</p>
            <button onClick={() => navigateTo('contact')} className="text-blue-600 font-semibold text-sm flex items-center hover:text-blue-800">
              Get this system <ArrowRight className="w-4 h-4 ml-1" />
            </button>
          </div>

          {/* System 5 */}
          <div className="bg-slate-50 border border-slate-200 rounded-2xl p-8 hover:shadow-lg transition-all relative">
            <div className="w-12 h-12 bg-rose-100 rounded-xl flex items-center justify-center mb-6">
              <Send className="w-6 h-6 text-rose-600" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">New Lead Nurture</h3>
            <p className="text-slate-600 text-sm mb-6 flex-grow">A new lead books for next week. The system instantly texts a confirmation, and sends a reminder the day before. Look like the most professional shop in town.</p>
            <button onClick={() => navigateTo('contact')} className="text-blue-600 font-semibold text-sm flex items-center hover:text-blue-800">
              Get this system <ArrowRight className="w-4 h-4 ml-1" />
            </button>
          </div>

          {/* System 6 */}
          <div className="bg-slate-50 border border-slate-200 rounded-2xl p-8 hover:shadow-lg transition-all relative">
            <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mb-6">
              <DollarSign className="w-6 h-6 text-green-600" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">The "Get Paid" Chaser</h3>
            <p className="text-slate-600 text-sm mb-6 flex-grow">Instantly auto-generates invoices when a job finishes. If the client hasn't paid in 5 days, it sends a polite, automated text reminder for you.</p>
            <button onClick={() => navigateTo('contact')} className="text-blue-600 font-semibold text-sm flex items-center hover:text-blue-800">
              Get this system <ArrowRight className="w-4 h-4 ml-1" />
            </button>
          </div>

        </div>

        <div className="mt-16 text-center">
          <p className="text-slate-600 mb-6">Need all of them? We can build a custom all-in-one system for your business.</p>
          <button onClick={() => navigateTo('contact')} className="bg-slate-900 text-white px-8 py-3 rounded-lg font-medium hover:bg-slate-800 transition-colors">
            Book a Free Strategy Call
          </button>
        </div>

      </div>
    </div>
  );
}

function SimulatorView() {
  const [trigger, setTrigger] = useState('');
  const [analysis, setAnalysis] = useState('');
  const [action, setAction] = useState('');
  
  const [isRunning, setIsRunning] = useState(false);
  const [logs, setLogs] = useState([]);
  const [isComplete, setIsComplete] = useState(false);

  const triggers = [
    { id: 't1', label: 'You miss a call from a new customer', icon: <PhoneMissed className="w-4 h-4 mr-2 text-red-500" /> },
    { id: 't2', label: 'A quote sits un-answered for 3 days', icon: <FileText className="w-4 h-4 mr-2 text-blue-500" /> },
    { id: 't3', label: 'You mark a job as "Done" on your phone', icon: <CheckCircle2 className="w-4 h-4 mr-2 text-emerald-500" /> }
  ];

  const analyses = [
    { id: 'a1', label: 'System detects it is a first-time caller', icon: <Workflow className="w-4 h-4 mr-2 text-slate-600" /> },
    { id: 'a2', label: 'System checks if the client opened the email', icon: <Workflow className="w-4 h-4 mr-2 text-slate-600" /> },
    { id: 'a3', label: 'System pulls client info and waits 24 hours', icon: <Clock className="w-4 h-4 mr-2 text-slate-600" /> }
  ];

  const actions = [
    { id: 'c1', label: 'Instantly texts: "Sorry I missed you! How can I help?"', icon: <MessageSquare className="w-4 h-4 mr-2 text-blue-500" /> },
    { id: 'c2', label: 'Emails them: "Hey, checking in on this quote!"', icon: <Send className="w-4 h-4 mr-2 text-indigo-500" /> },
    { id: 'c3', label: 'Texts: "Thanks! Please leave us a Google review here."', icon: <Star className="w-4 h-4 mr-2 text-amber-500" /> }
  ];

  const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

  const runSimulation = async () => {
    if (!trigger || !analysis || !action || isRunning) return;
    
    setIsRunning(true);
    setLogs([]);
    setIsComplete(false);

    const steps = [
      `[SYSTEM] Watching your business 24/7 in the background...`,
      `[EVENT] Happened: ${triggers.find(t=>t.id===trigger).label}`,
      `[THINKING] Figuring out what to do next...`,
      `[LOGIC] Doing the work: ${analyses.find(a=>a.id===analysis).label}...`,
      `[PREPARING] Gathering the right information.`,
      `[READY] Everything looks good.`,
      `[ACTION] Taking care of it for you...`,
      `[SUCCESS] Fired: ${actions.find(c=>c.id===action).label}`,
      `[DONE] Task completed while you were busy working.`
    ];

    for (let i = 0; i < steps.length; i++) {
      setLogs(prev => [...prev, steps[i]]);
      await delay(800);
    }

    setIsRunning(false);
    setIsComplete(true);
  };

  const resetSimulator = () => {
    if (isRunning) return;
    setTrigger('');
    setAnalysis('');
    setAction('');
    setLogs([]);
    setIsComplete(false);
  };

  return (
    <div className="animate-in fade-in duration-500 bg-white py-16 min-h-screen">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-12">
          <span className="text-blue-600 font-bold tracking-wider uppercase text-sm mb-2 block">See It In Action</span>
          <h2 className="text-4xl font-extrabold text-slate-900 mb-4">The Automation Sandbox</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Pick a common problem you face every day, choose how you want the system to handle it, and watch the robot do the work for you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Builder Panel */}
          <div className="bg-slate-50 p-8 rounded-3xl border border-slate-200 shadow-sm">
            <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center">
              <Workflow className="w-5 h-5 mr-2 text-blue-600" /> Build a System
            </h3>
            
            <div className="space-y-8">
              {/* Step 1 */}
              <div>
                <label className="text-sm font-bold text-slate-700 mb-3 block uppercase tracking-wide">1. What happens?</label>
                <div className="space-y-2">
                  {triggers.map(t => (
                    <div 
                      key={t.id} 
                      onClick={() => !isRunning && setTrigger(t.id)}
                      className={`p-4 rounded-lg border-2 cursor-pointer transition-all flex items-center bg-white ${trigger === t.id ? 'border-blue-600 shadow-md ring-1 ring-blue-600' : 'border-slate-200 hover:border-blue-300'} ${isRunning ? 'opacity-50 cursor-not-allowed' : ''}`}
                    >
                      {t.icon} <span className="text-sm font-medium text-slate-800">{t.label}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Step 2 */}
              <div className="relative">
                <div className="absolute -top-6 left-6 w-0.5 h-6 bg-blue-200"></div>
                <label className="text-sm font-bold text-slate-700 mb-3 block uppercase tracking-wide">2. What should the system check?</label>
                <div className="space-y-2">
                  {analyses.map(a => (
                    <div 
                      key={a.id} 
                      onClick={() => !isRunning && setAnalysis(a.id)}
                      className={`p-4 rounded-lg border-2 cursor-pointer transition-all flex items-center bg-white ${analysis === a.id ? 'border-blue-600 shadow-md ring-1 ring-blue-600' : 'border-slate-200 hover:border-blue-300'} ${isRunning ? 'opacity-50 cursor-not-allowed' : ''}`}
                    >
                      {a.icon} <span className="text-sm font-medium text-slate-800">{a.label}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Step 3 */}
              <div className="relative">
                 <div className="absolute -top-6 left-6 w-0.5 h-6 bg-blue-200"></div>
                <label className="text-sm font-bold text-slate-700 mb-3 block uppercase tracking-wide">3. How do we fix it automatically?</label>
                <div className="space-y-2">
                  {actions.map(c => (
                    <div 
                      key={c.id} 
                      onClick={() => !isRunning && setAction(c.id)}
                      className={`p-4 rounded-lg border-2 cursor-pointer transition-all flex items-center bg-white ${action === c.id ? 'border-indigo-600 shadow-md ring-1 ring-indigo-600' : 'border-slate-200 hover:border-indigo-300'} ${isRunning ? 'opacity-50 cursor-not-allowed' : ''}`}
                    >
                      {c.icon} <span className="text-sm font-medium text-slate-800">{c.label}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4">
                <button 
                  onClick={runSimulation}
                  disabled={!trigger || !analysis || !action || isRunning}
                  className={`w-full py-4 rounded-xl font-bold text-lg flex items-center justify-center transition-all ${(!trigger || !analysis || !action || isRunning) ? 'bg-slate-200 text-slate-400 cursor-not-allowed' : 'bg-blue-600 text-white hover:bg-blue-700 shadow-lg hover:shadow-xl'}`}
                >
                  {isRunning ? <span className="animate-pulse">Working in background...</span> : <><PlaySquare className="w-5 h-5 mr-2" /> Start the Robot</>}
                </button>
              </div>
            </div>
          </div>

          {/* Console Panel */}
          <div className="bg-[#0f172a] rounded-3xl p-6 shadow-2xl border border-slate-700 flex flex-col h-full min-h-[500px]">
            <div className="flex items-center justify-between mb-4 border-b border-slate-700 pb-4">
              <div className="flex items-center space-x-2">
                <Terminal className="w-5 h-5 text-slate-400" />
                <span className="text-slate-300 font-mono text-sm tracking-widest">BEHIND_THE_SCENES</span>
              </div>
              <div className="flex space-x-2">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
            </div>
            
            <div className="flex-grow font-mono text-sm space-y-3 overflow-y-auto">
              {!isRunning && logs.length === 0 && !isComplete && (
                <div className="text-slate-500 italic mt-4">Waiting for you to build a system...</div>
              )}
              
              {logs.map((log, i) => (
                <div key={i} className={`animate-in slide-in-from-bottom-2 fade-in duration-300 ${log.includes('[SUCCESS]') || log.includes('[DONE]') ? 'text-emerald-400 font-bold' : log.includes('[EVENT]') ? 'text-red-400' : log.includes('[LOGIC]') || log.includes('[ACTION]') ? 'text-blue-400' : 'text-slate-300'}`}>
                  {'> '} {log}
                </div>
              ))}

              {isRunning && (
                <div className="text-slate-500 animate-pulse mt-2">{'>'} _</div>
              )}
            </div>

            {isComplete && (
              <div className="mt-6 p-4 bg-emerald-500/10 border border-emerald-500/30 rounded-lg animate-in fade-in zoom-in duration-500">
                <h4 className="text-emerald-400 font-bold flex items-center mb-1">
                  <CheckCircle2 className="w-5 h-5 mr-2" /> Handled Automatically
                </h4>
                <p className="text-slate-300 text-sm">This would normally take 15 minutes of your day. <br/><span className="text-white font-bold">Time Saved: You didn't lift a finger.</span></p>
                <button onClick={resetSimulator} className="mt-4 text-xs font-bold text-slate-400 hover:text-white uppercase tracking-wider underline">Run Another Test</button>
              </div>
            )}
          </div>

        </div>
      </div>
    </div>
  );
}

function AboutView({ navigateTo }) {
  return (
    <div className="animate-in fade-in duration-500 bg-white py-20 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-blue-600 font-bold tracking-wider uppercase text-sm mb-2 block">Hi, I'm Tanner</span>
          <h2 className="text-4xl font-extrabold text-slate-900 mb-4">Why I Want to Help Local Businesses</h2>
          <p className="text-xl text-slate-600">Bringing big-company shortcuts to Main Street.</p>
        </div>
        
        <div className="prose prose-lg prose-blue mx-auto text-slate-700 space-y-8 leading-relaxed">
          <p className="text-2xl font-light text-slate-900 border-l-4 border-blue-600 pl-6 mb-12">
            "I saw local business owners working 60 hours a week in the field, and then another 20 hours a week just doing paperwork. That's not why you started your company."
          </p>
          
          <p>
            My background didn't start with small businesses. I spent years working in the intense world of <strong>Sports Analytics</strong> and building massive data systems for large corporations. 
          </p>

          <p>
            In those big corporate environments, nobody does data entry. If a customer fills out a form, or an invoice needs to be sent, massive computer systems automatically update the records, send out the emails, and generate the bills. They have robots doing the boring work. 
          </p>
          
          <h3 className="text-2xl font-bold text-slate-900 mt-12 mb-4">The Breaking Point</h3>
          
          <p>
            When I started talking to local plumbers, roofers, landscapers, and shop owners, I was shocked. 
          </p>
          <p>
            You guys are working harder than any corporate executive, but you are doing everything by hand. You miss phone calls when you're busy, you type out quotes on Word documents at 10 PM, and you hate having to chase down customers to get them to pay you. 
          </p>
          <p className="font-semibold text-slate-900 bg-slate-50 p-6 rounded-lg my-8 border border-slate-100">
            You don't need a million-dollar corporate software package. You just need a little bit of help answering texts and sending out bills.
          </p>
          
          <h3 className="text-2xl font-bold text-slate-900 mt-12 mb-4">That's why I started The Orchestration Group.</h3>
          <p>
            My goal is to set up simple, invisible systems for your business. I hook up a system that instantly texts back anyone who calls you when you can't answer. I give you a button on your phone that instantly sends a professional invoice. 
          </p>
          <p>
            I take the boring, repetitive admin work off your plate so you can get back to actually running your business—and maybe get your weekend back. 
          </p>
          <div className="mt-16 pt-8 border-t border-slate-200 text-center">
            <h4 className="text-xl font-bold text-slate-900 mb-4">Let's see how much time we can save you.</h4>
            <button onClick={() => navigateTo('contact')} className="bg-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors">
              Book a Free Quick Chat
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function ContactView() {
  const [formStatus, setFormStatus] = useState('idle'); // 'idle', 'submitting', 'success', 'error'

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormStatus('submitting');
    
    const myForm = e.target;
    const formData = new FormData(myForm);
    
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(formData).toString(),
    })
      .then(() => setFormStatus('success'))
      .catch((error) => setFormStatus('error'));
  };

  return (
    <div className="animate-in fade-in duration-500 bg-slate-50 py-20 min-h-screen">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-slate-100">
          <div className="bg-slate-900 px-8 py-12 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Book a Free Workflow Mapping Call</h2>
            <p className="text-slate-300 max-w-lg mx-auto text-sm">
              No high-pressure sales pitches. We'll just chat for 20 minutes about what part of your business takes up the most time, and I'll tell you if there's a simple way to automate it.
            </p>
          </div>
          <div className="p-8 md:p-12">
            {formStatus === 'success' ? (
              <div className="text-center py-12 animate-in fade-in zoom-in duration-300">
                <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-2">Request Received!</h3>
                <p className="text-slate-600 mb-6">Thanks for reaching out. I'll review your info and email you shortly with some available times to chat.</p>
                <button onClick={() => setFormStatus('idle')} className="text-blue-600 font-semibold hover:text-blue-800">
                  Send another request
                </button>
              </div>
            ) : (
              <form className="space-y-6" name="contact" method="POST" data-netlify="true" onSubmit={handleSubmit}>
                <input type="hidden" name="form-name" value="contact" />
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">First Name</label>
                    <input type="text" name="firstName" required className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-shadow" placeholder="John" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Last Name</label>
                    <input type="text" name="lastName" required className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-shadow" placeholder="Smith" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Email Address</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Mail className="h-5 w-5 text-slate-400" />
                    </div>
                    <input type="email" name="email" required className="w-full pl-10 px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-shadow" placeholder="john@mybusiness.com" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Business Name</label>
                  <input type="text" name="businessName" required className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-shadow" placeholder="Smith Plumbing" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">What's your biggest headache right now?</label>
                  <textarea name="headache" required rows="4" className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-shadow resize-none" placeholder="e.g., I keep missing calls when I'm on the roof, or I spend my whole Sunday writing out invoices..."></textarea>
                </div>
                
                {formStatus === 'error' && (
                  <p className="text-red-500 text-sm text-center">Oops! Something went wrong. Please try again.</p>
                )}

                <button type="submit" disabled={formStatus === 'submitting'} className="w-full bg-blue-600 text-white font-bold py-4 rounded-lg hover:bg-blue-700 transition-colors shadow-md hover:shadow-lg flex justify-center items-center disabled:opacity-70">
                  {formStatus === 'submitting' ? 'Sending...' : 'See What Times Are Available'}
                  {formStatus !== 'submitting' && <ArrowRight className="ml-2 w-5 h-5" />}
                </button>
                <p className="text-xs text-center text-slate-500 mt-4">I live right here in Northlake. You will be talking directly to me.</p>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
