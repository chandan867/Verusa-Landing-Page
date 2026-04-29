import React, { useState, useEffect } from 'react';
import { 
  Shield, 
  Zap, 
  Brain, 
  FileText, 
  Filter, 
  Gavel, 
  Network, 
  CheckCircle2, 
  Sun,
  Moon,
  Menu,
  X,
  Lock,
  Linkedin
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

// --- Components ---

const Navbar = ({ isDark, toggleTheme }: { isDark: boolean; toggleTheme: () => void }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-background/80 backdrop-blur-xl border-b border-on-surface/5 py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-8 flex justify-between items-center">
        <div className="flex items-center gap-8">
          <div className="flex items-center gap-2">
            <img src="/assets/logo.svg" alt="Verusa" className="w-6 h-6" style={{ filter: isDark ? 'none' : 'brightness(0)' }} />
            <span className="text-xl font-extrabold tracking-tighter font-headline">Verusa</span>
          </div>
        </div>
        
        <div className="flex items-center gap-4">
          <button 
            onClick={toggleTheme}
            className="p-2 rounded-lg hover:bg-surface-container transition-colors text-on-surface-variant hover:text-on-surface"
          >
            {isDark ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </div>
      </div>
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="relative px-8 pt-32 pb-32 max-w-[1440px] mx-auto flex flex-col items-center text-center overflow-hidden">
      <div className="absolute inset-0 -z-10 hero-gradient"></div>
      <div className="absolute inset-0 -z-20 grid-pattern opacity-40 [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,black_40%,transparent_100%)]"></div>

      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="text-5xl md:text-[80px] font-extrabold font-headline tracking-tight max-w-5xl leading-[0.95] mb-8"
      >
        From Raw Risk Score to a <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Defensible Case.</span>
      </motion.div>
      
      <motion.p 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="text-on-surface-variant text-lg md:text-xl max-w-2xl mb-12 font-medium"
      >
        Verusa turns blockchain analytics, risk scores and customer context into defensible AML case narratives – helping teams explain what the signal means, which typology it may indicate and what action should follow.
      </motion.p>

      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="flex flex-col sm:flex-row gap-4 mb-24"
      >
        <a href="https://calendly.com/ck76" target="_blank" rel="noopener noreferrer" className="bg-secondary text-on-secondary px-10 py-4 rounded-xl font-bold text-lg transition-all hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(0,229,200,0.3)] inline-flex items-center justify-center">Book a Case Workflow Demo</a>
        <a href="#case-walkthrough" className="bg-surface-container border border-on-surface/10 px-10 py-4 rounded-xl font-bold text-lg hover:bg-surface-container-high transition-all inline-flex items-center justify-center">Watch Case Walkthrough</a>
      </motion.div>

      {/* High Impact Visual */}
      <motion.div 
        id="case-walkthrough"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.4, duration: 0.8 }}
        className="w-full max-w-6xl aspect-[21/9] rounded-2xl relative group"
      >
        <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 via-secondary/20 to-primary/20 rounded-2xl blur-2xl opacity-50"></div>
        
        <div className="relative h-full w-full rounded-2xl border border-on-surface/10 overflow-hidden glass-panel">
          <video 
            src="/assets/clideo_editor_bf2ce36900644a9aa2e5c52a024df0cd.mp4" 
            autoPlay 
            muted 
            loop 
            playsInline
            controls
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-background to-transparent z-10 pointer-events-none"></div>
          
          {/* UI Overlay elements */}
          <div className="absolute top-10 right-10 p-4 rounded-xl glass-panel border border-secondary/20 space-y-3 w-64 text-left hidden md:block z-20">
            <div className="flex justify-between items-center">
              <span className="text-[10px] font-mono text-secondary">RISK VECTOR: BRIDGE_HOP</span>
              <span className="text-[10px] font-mono text-on-surface-variant">0.08s</span>
            </div>
            <div className="h-1 w-full bg-on-surface/5 rounded-full overflow-hidden">
              <div className="h-full bg-secondary w-[85%]"></div>
            </div>
            <p className="text-[11px] text-on-surface-variant font-mono">Analyzing 47 sub-traces across 3 protocols...</p>
          </div>

          <div className="absolute bottom-10 left-10 p-6 glass-panel border border-primary/20 max-w-md text-left hidden md:block z-20">
            <div className="flex items-center gap-3 mb-3">
              <div className="p-2 bg-primary/10 rounded-lg">
                <Brain className="text-primary" size={20} />
              </div>
              <div>
                <p className="text-xs font-bold text-primary uppercase tracking-widest">Verusa Agent Reasoning</p>
                <p className="text-[10px] text-on-surface-variant font-mono">Active Investigation: VR-9928-S</p>
              </div>
            </div>
            <p className="text-sm text-on-surface leading-relaxed italic border-l-2 border-primary/30 pl-4">"Detected obfuscation patterns across 3 bridges. Correlating Mixer activity with sanctioned entity 'Lazarus Group'. Evidence-linked narrative generation at 94% confidence."</p>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

const ProblemSection = () => {
  return (
    <section className="py-32 px-8 max-w-7xl mx-auto">
      <div className="grid md:grid-cols-2 gap-20 items-center mb-24">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-xs font-bold text-secondary tracking-widest uppercase mb-4 block">The Intelligence Gap</span>
          <h2 className="text-4xl md:text-5xl font-headline font-extrabold mb-6 leading-tight">Analytics give you the signal. <br/><span className="text-primary">Verusa gives you the rationale.</span></h2>
          <p className="text-on-surface-variant text-lg leading-relaxed">Blockchain analytics platforms trace exposure, label entities and generate risk scores. Verusa sits above that layer, connecting those signals to customer context, ML/TF typologies and defensible case outcomes for review.</p>
        </motion.div>
        
        <div className="grid grid-cols-1 gap-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-6 rounded-2xl bg-surface border border-on-surface/5 flex gap-4"
          >
            <Filter className="text-secondary" size={32} />
            <div>
              <h4 className="font-bold text-lg mb-1">From Alerts to Answers</h4>
              <p className="text-sm text-on-surface-variant">Instead of stopping at "Score: 82", Verusa shows the evidence behind the score, the typology indicators present, the customer context considered and the recommended next step.</p>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="p-6 rounded-2xl bg-surface border border-on-surface/5 flex gap-4"
          >
            <FileText className="text-secondary" size={32} />
            <div>
              <h4 className="font-bold text-lg mb-1">Case Narratives in Seconds</h4>
              <p className="text-sm text-on-surface-variant mb-2">Verusa Agent assembles blockchain analytics, KYC/CDD data, behavioural signals, customer explanations and case history into a structured investigation narrative – reducing manual preparation time while final judgement stays with your team.</p>
              <p className="text-xs text-on-surface-variant opacity-80 italic">Internal testing shows up to 60% reduction in manual case preparation time where relevant data sources are connected.</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Banner = () => {
  return (
    <section className="w-full bg-secondary/5 border-y border-secondary/10 py-12 mb-32">
      <div className="max-w-7xl mx-auto px-8 flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
        <h3 className="text-2xl md:text-3xl font-headline font-bold text-on-surface leading-tight">
          Crypto risk changes quickly. <br className="hidden md:block"/>Your investigation workflow needs to keep pace.
        </h3>
        <div className="flex items-center gap-4">
          <div className="flex -space-x-3">
            <div className="w-10 h-10 rounded-full border-2 border-background bg-surface-container flex items-center justify-center overflow-hidden">
              <Zap className="text-secondary" size={18} />
            </div>
            <div className="w-10 h-10 rounded-full border-2 border-background bg-surface-container flex items-center justify-center overflow-hidden">
              <Shield className="text-primary" size={18} />
            </div>
            <div className="w-10 h-10 rounded-full border-2 border-background bg-surface-container flex items-center justify-center overflow-hidden">
              <Network className="text-on-surface-variant" size={18} />
            </div>
          </div>
          <span className="text-sm font-mono text-secondary font-bold uppercase tracking-widest">Active Monitoring</span>
        </div>
      </div>
    </section>
  );
};

const FrameworkSection = () => {
  return (
    <section className="bg-surface py-32 relative overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-10"></div>
      <div className="max-w-7xl mx-auto px-8 relative z-10">
        <div className="text-center mb-20">
          <span className="text-xs font-bold text-secondary tracking-widest uppercase mb-4 block">Process Architecture</span>
          <h2 className="text-4xl font-headline font-bold mb-6">How Verusa Turns Signals into Case Logic</h2>
          <p className="text-on-surface-variant max-w-2xl mx-auto">See how Verusa ingests blockchain and customer data, maps the evidence against defined ML/TF typology indicators and prepares a source-linked recommendation for review.</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {[
            { step: '01', icon: Network, title: 'Ingest', color: 'secondary', desc: 'Verusa connects to your analytics stack and internal data sources, ingesting alerts, wallet intelligence, KYC/CDD records, sanctions outputs, customer communications, account events and case history across 26 typology scenarios.' },
            { step: '02', icon: Brain, title: 'Contextualise', color: 'primary', desc: 'The contextualisation layer maps blockchain signals, customer profile data, sanctions exposure, behavioural patterns and customer explanations against defined ML/TF typology conditions. Outputs are source-linked and flagged for validation.' },
            { step: '03', icon: Gavel, title: 'Recommend', color: 'secondary', desc: 'Verusa recommends the next action – proceed, hold, escalate, request information or investigate further – with the evidence and rationale behind it. Where required, it can prepare a SAR/STR assessment and drafting pack for MLRO review.' }
          ].map((item, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className={`p-8 rounded-2xl bg-background border border-on-surface/5 relative group hover:border-${item.color}/30 transition-all`}
            >
              <div className={`text-5xl font-black text-on-surface/5 absolute top-4 right-6 group-hover:text-${item.color}/10 transition-colors`}>{item.step}</div>
              <div className={`w-12 h-12 rounded-xl bg-${item.color === 'secondary' ? 'secondary/10' : 'primary/10'} flex items-center justify-center mb-6`}>
                <item.icon className={item.color === 'secondary' ? 'text-secondary' : 'text-primary'} size={24} />
              </div>
              <h3 className="text-xl font-bold mb-4">{item.title}</h3>
              <p className="text-sm text-on-surface-variant leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Live Reasoning Console */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-panel border border-on-surface/10 rounded-2xl overflow-hidden shadow-2xl max-w-5xl mx-auto"
        >
          <div className="bg-surface-container-high px-6 py-4 border-b border-on-surface/5 flex items-center justify-between">
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500/30"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500/30"></div>
              <div className="w-3 h-3 rounded-full bg-secondary/30"></div>
            </div>
            <span className="text-[10px] font-mono tracking-widest text-on-surface-variant">AGENT_LOG: CASE_4471 — VERUSA_V2_CORE</span>
          </div>
          <div className="p-10 font-mono text-sm space-y-6 leading-relaxed">
            <div className="flex gap-4">
              <span className="text-secondary shrink-0">[00:01s]</span>
              <div className="space-y-1">
                <p className="text-secondary font-bold uppercase text-[10px] tracking-wider">Ingest</p>
                <p className="text-on-surface">Customer <span className="text-primary font-bold">Alice Chen</span> attempted withdrawal of <span className="text-on-surface font-bold">25,000 USDC</span>. Target: <span className="text-on-surface-variant">0x8589...FDA16</span></p>
              </div>
            </div>
            <div className="flex gap-4">
              <span className="text-secondary shrink-0">[00:03s]</span>
              <div className="space-y-1">
                <p className="text-primary font-bold uppercase text-[10px] tracking-wider">Contextualise</p>
                <p className="text-on-surface">Heuristic Analysis: Identified <span className="text-error font-bold">1-hop from Tornado Cash</span>. Destination tagged as <span className="bg-error/20 text-error px-1.5 py-0.5 rounded text-[10px]">SANCTIONED_ADJACENT</span>.</p>
                <p className="text-on-surface-variant text-xs italic">↳ Source Evidence: Tornado Cash Pool 2 match (Sanctioned 2022-08-08)</p>
              </div>
            </div>
            <div className="bg-secondary/10 p-5 rounded-xl border border-secondary/20 flex gap-5 mt-8 items-start">
              <CheckCircle2 className="text-secondary shrink-0" size={24} />
              <div className="space-y-2">
                <p className="font-bold text-secondary text-base">RECOMMENDATION: HOLD</p>
                <p className="text-on-surface-variant text-sm">Escalate to MLRO immediately. One-click SAR draft generated with full on-chain evidence trail and KYC correlation.</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const ComparisonTable = () => {
  return (
    <section className="py-32 px-8 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-3xl font-headline font-bold mb-4">Blockchain Analytics vs Verusa Investigation Layer</h2>
        <p className="text-on-surface-variant">The difference between a risk signal and a documented case rationale.</p>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse border border-on-surface/5 bg-surface-container rounded-2xl overflow-hidden">
          <thead>
            <tr className="bg-surface-container-high">
              <th className="p-6 font-headline font-bold text-on-surface-variant text-sm uppercase tracking-wider">Feature</th>
              <th className="p-6 font-headline font-bold text-on-surface-variant text-sm uppercase tracking-wider border-l border-on-surface/5">Blockchain analytics</th>
              <th className="p-6 font-headline font-bold text-secondary text-sm uppercase tracking-wider border-l border-on-surface/5">Verusa investigation layer</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-on-surface/5">
            {[
              { f: 'Output', l: 'Risk score, exposure path and entity labels', v: 'Source-linked case rationale', highlight: true },
              { f: 'Analyst workflow', l: 'Manual context gathering and write-up', v: 'AI-assisted evidence assembly and narrative drafting', highlight: false },
              { f: 'Decision support', l: 'Analyst interprets what the score means', v: 'Typology indicators, recommended action and rationale prepared for review', highlight: true },
              { f: 'Governance', l: 'Decision logic sits outside the tool', v: 'Evidence trail, analyst review and final decision captured in the case record', highlight: false }
            ].map((row, idx) => (
              <tr key={idx}>
                <td className="p-6 font-bold text-on-surface">{row.f}</td>
                <td className="p-6 text-on-surface-variant text-sm border-l border-on-surface/5">{row.l}</td>
                <td className={`p-6 text-on-surface text-sm border-l border-on-surface/5 font-semibold ${row.highlight ? 'text-secondary' : ''}`}>{row.v}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

const ProductPillars = () => {
  return (
    <section className="py-32 px-8 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <span className="text-xs font-bold text-secondary tracking-widest uppercase mb-4 block">Engineered for Defensible Investigations</span>
        <h2 className="text-4xl font-headline font-extrabold mb-6 max-w-4xl mx-auto leading-tight">Built for institutions that need AI speed without losing evidence, control or auditability.</h2>
      </div>
      <div className="grid md:grid-cols-3 gap-8">
        {[
          { icon: Network, title: 'Works with Blockchain Analytics Providers', color: 'secondary', desc: 'Verusa uses parsed blockchain data, risk scores and entity labels from established analytics providers as inputs. It then adds typology-based contextualisation, customer context and investigation rationale on top.' },
          { icon: Shield, title: '26 Crypto ML/TF Typologies', color: 'primary', desc: 'Verusa evaluates evidence against defined typology conditions, including sanctions exposure, mixer use, bridge-hopping, layering patterns, ransomware-linked flows and cross-chain obfuscation. The output shows which indicators are present, missing or require review.' },
          { icon: Lock, title: 'Controlled Deployment and Data Governance', color: 'secondary', desc: 'Deploy in a client-controlled VPC on AWS, Azure or GCP. Verusa supports role-based access, audit logs, source-linked case records and configurable retention. Customer transaction data can remain within your controlled environment, subject to the agreed deployment model.' }
        ].map((item, idx) => (
          <motion.div 
            key={idx}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            className="p-10 rounded-[2rem] border border-on-surface/5 bg-surface-container hover:border-secondary/30 transition-all flex flex-col group"
          >
            <div className={`w-16 h-16 rounded-2xl bg-${item.color === 'secondary' ? 'secondary/10' : 'primary/10'} flex items-center justify-center mb-8 border border-${item.color === 'secondary' ? 'secondary/20' : 'primary/20'} group-hover:scale-110 transition-transform`}>
              <item.icon className={item.color === 'secondary' ? 'text-secondary' : 'text-primary'} size={32} />
            </div>
            <h4 className="text-2xl font-bold mb-4 font-headline">{item.title}</h4>
            <p className="text-on-surface-variant leading-relaxed">{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

const TeamSection = () => {
  return (
    <section className="py-32 px-8 max-w-7xl mx-auto">
      <div className="relative">
        <div className="absolute -inset-10 bg-gradient-to-tr from-primary/5 via-secondary/5 to-transparent rounded-[4rem] blur-3xl"></div>
        <div className="relative bg-surface-container border border-on-surface/5 p-12 md:p-20 rounded-[3rem] overflow-hidden">
          <div className="absolute top-0 right-0 w-full h-full opacity-10 [mask-image:radial-gradient(circle_at_70%_30%,black,transparent_70%)] pointer-events-none">
            <div className="grid-pattern w-full h-full"></div>
          </div>
          
          <div className="relative z-10 grid lg:grid-cols-[1.2fr_2fr] gap-16 items-start">
            <div>
              <span className="text-xs font-bold text-secondary tracking-widest uppercase mb-6 block">The Architects</span>
              <h2 className="text-4xl md:text-5xl font-headline font-extrabold mb-8 leading-[1.1] text-on-surface">Built by people who <br className="hidden md:block"/><span className="text-secondary">understand the investigation gap.</span></h2>
              <p className="text-on-surface-variant text-lg leading-relaxed mb-8">Verusa was built from a simple observation: compliance teams already have risk data, but still spend too much time turning that data into decisions they can evidence and defend.</p>
              
              <blockquote className="border-l-2 border-secondary/30 pl-4 py-1 italic text-on-surface-variant text-sm mb-10">
                "Our job is to close the gap between raw blockchain signals and evidence-backed compliance decisions."
              </blockquote>
              
              <div className="flex flex-col sm:flex-row items-center gap-6 sm:gap-12 pt-8 border-t border-on-surface/10">
                <div>
                  <p className="text-3xl font-bold font-headline text-on-surface">Up to 60%</p>
                  <p className="text-[10px] text-on-surface-variant uppercase tracking-widest mt-1">Effort Reduction</p>
                </div>
                <div className="h-10 w-px bg-on-surface/10"></div>
                <div>
                  <p className="text-3xl font-bold font-headline text-on-surface">Evidence First.</p>
                  <p className="text-[10px] text-on-surface-variant uppercase tracking-widest mt-1">AI Second.</p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { name: 'Stefano', role: 'Chief Commercial Officer', color: 'primary', cred: 'Commercial and growth leader with deep experience in financial services and crypto markets, scaling operations, partnerships, and revenue across global regions.', linkedin: 'https://www.linkedin.com/in/stefano-c-97b491a/' },
                { name: 'Oliver', role: 'Chief Compliance & Product Officer', color: 'secondary', cred: 'Financial crime and AML specialist helping fintechs and crypto firms design audit-ready, risk-based compliance frameworks aligned with global regulatory standards.', linkedin: 'https://www.linkedin.com/in/oliver-r-b95747216/' },
                { name: 'Kapil Jain', role: 'Chief Architect', color: 'secondary', cred: 'Director-level AI and technology leader with 20+ years building regulated financial systems—driving AI-powered compliance, risk, and transaction infrastructure across banking, payments, and digital assets.', linkedin: 'https://www.linkedin.com/in/kapil-jain-9829aa4/' },
                { name: 'Chandan', role: 'CTO', color: 'primary', cred: 'AI and fintech builder focused on automating compliance and risk for stablecoins—bridging AI, blockchain, and regulation to enable scalable, trust-driven financial systems.', linkedin: 'https://www.linkedin.com/in/chandankumar7654/' },
                { name: 'James Chacko', role: 'Advisor', color: 'primary', cred: 'Tech entrepreneur driving decentralized innovation across AI, blockchain, and open protocols—focused on building scalable, trust-first digital financial infrastructure.', linkedin: 'https://www.linkedin.com/in/james-chacko-9233a71/' },
                { name: 'Shankar Bhaskaran', role: 'Advisor', color: 'secondary', cred: 'GRC and quality management expert transforming regulatory complexity into strategic advantage through integrated, performance-driven compliance systems.', linkedin: 'https://www.linkedin.com/in/shankar-bhaskaran-6772271/' }
              ].map((member, idx) => (
                <div key={idx} className={`relative glass-panel rounded-2xl p-4 border border-on-surface/10 hover:border-${member.color === 'secondary' ? 'secondary' : 'primary'}/30 transition-colors flex items-start sm:items-center justify-between gap-4 min-w-0 group/card`}>
                  <div className="flex items-start sm:items-center gap-4 min-w-0">
                    <div className={`w-12 h-12 shrink-0 rounded-xl bg-gradient-to-br from-${member.color}/20 to-transparent flex items-center justify-center border border-${member.color}/20 overflow-hidden`}>
                      <span className={`text-lg font-black text-${member.color} font-headline`}>{member.name[0]}</span>
                    </div>
                    <div>
                      <h3 className="text-base font-bold font-headline text-on-surface">{member.name}</h3>
                      <p className="text-on-surface-variant font-mono text-[9px] tracking-wider uppercase font-bold">{member.role}</p>
                      <p className="text-[10px] text-on-surface-variant mt-1 leading-snug">{member.cred}</p>
                    </div>
                  </div>
                  <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className={`p-2 shrink-0 rounded-lg bg-${member.color}/5 text-${member.color} hover:bg-${member.color}/10 transition-colors opacity-60 group-hover/card:opacity-100`}>
                    <Linkedin size={18} />
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const CTASection = () => {
  return (
    <section className="px-8 max-w-7xl mx-auto pb-32">
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="bg-gradient-to-br from-surface to-background border border-on-surface/10 rounded-[2.5rem] p-12 md:p-24 text-center relative overflow-hidden group"
      >
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-primary/5 blur-[100px] rounded-full"></div>
        <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-secondary/5 blur-[100px] rounded-full"></div>
        
        <span className="text-xs font-bold text-secondary tracking-[0.3em] uppercase mb-8 block relative z-10">DESIGN PARTNER PROGRAMME · Q2 2026</span>
        <h2 className="text-4xl md:text-6xl font-headline font-extrabold mb-8 relative z-10 tracking-tight leading-tight">Show the rationale behind <br/>every blockchain risk score.</h2>
        <p className="text-xl text-on-surface-variant max-w-2xl mx-auto mb-12 relative z-10">Your regulator will not accept "the score was 82" as a rationale. Verusa helps your team evidence what the score means, which typology indicators were considered, and why the final decision was made.</p>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center relative z-10">
          <button className="bg-secondary text-on-secondary px-12 py-5 rounded-xl font-bold text-xl hover:scale-105 transition-all shadow-xl shadow-secondary/10">Apply for Q2 Cohort</button>
          <button className="bg-surface-container border border-on-surface/10 text-on-surface px-12 py-5 rounded-xl font-bold text-xl hover:bg-surface-container-high transition-all">Talk to a Specialist</button>
        </div>
      </motion.div>
    </section>
  );
};

const Footer = ({ isDark }: { isDark: boolean }) => {
  return (
    <footer className="w-full py-16 px-8 max-w-7xl mx-auto border-t border-on-surface/5">
      <div className="flex flex-col md:flex-row justify-between items-start gap-12">
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-2">
            <img src="/assets/logo.svg" alt="Verusa" className="w-5 h-5" style={{ filter: isDark ? 'none' : 'brightness(0)' }} />
            <span className="text-lg font-extrabold tracking-tighter font-headline">Verusa</span>
          </div>
          <span className="text-on-surface-variant font-body text-sm antialiased">The AI intelligence layer for digital asset compliance.<br/>© 2026 Verusa. All rights reserved.</span>
        </div>
      </div>
    </footer>
  );
};

// --- Main App ---

export default function App() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('color-theme');
    
    // Default to light mode unless explicitly saved as dark
    if (savedTheme === 'dark') {
      setIsDark(true);
      document.documentElement.classList.add('dark');
    } else {
      setIsDark(false);
      document.documentElement.classList.remove('dark');
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = !isDark;
    setIsDark(newTheme);
    if (newTheme) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('color-theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('color-theme', 'light');
    }
  };

  return (
    <div className="min-h-screen bg-background text-on-surface font-body selection:bg-primary/30 transition-colors duration-300">
      <Navbar isDark={isDark} toggleTheme={toggleTheme} />
      <main>
        <Hero />
        <ProblemSection />
        <Banner />
        <FrameworkSection />
        <ComparisonTable />
        <ProductPillars />
        <TeamSection />
        <CTASection />
      </main>
      <Footer isDark={isDark} />
    </div>
  );
}
