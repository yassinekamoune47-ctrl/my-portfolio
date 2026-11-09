import { professionalFocusAreas, experienceTimeline } from "../data/experience";
import {
  Briefcase,
  Sparkles,
  Globe,
  Layout,
  Server,
  Database,
  Network,
  Calendar,
  MapPin,
  CheckCircle2,
  PlusCircle,
} from "lucide-react";

const ICON_MAP = {
  Globe: Globe,
  Layout: Layout,
  Server: Server,
  Database: Database,
  Network: Network,
};

export default function Experience() {
  return (
    <section id="experience" className="py-24 relative bg-[#07080d] overflow-hidden">
      <div className="absolute top-1/3 left-0 w-80 h-80 bg-purple-600/10 blur-[130px] rounded-full pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-80 h-80 bg-cyan-600/10 blur-[130px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-panel-subtle text-xs font-mono text-purple-300 border border-purple-500/20">
            <Sparkles className="w-3.5 h-3.5" />
            <span>PRACTICAL EXPERTISE & PATHWAY</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Professional{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400">
              Focus & Experience
            </span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base font-normal">
            Specialized engineering capabilities across modern web architecture, frontend interfaces, APIs, and databases.
          </p>
        </div>

        {/* 5 Professional Focus Cards */}
        <div className="mb-16">
          <h3 className="text-sm font-mono uppercase tracking-widest text-slate-400 mb-6 text-center sm:text-left">
            Core Professional Domains
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {professionalFocusAreas.map((focus) => {
              const IconComp = ICON_MAP[focus.icon] || Globe;
              return (
                <div
                  key={focus.title}
                  className="p-5 rounded-2xl glass-panel border border-white/10 hover:border-purple-500/40 transition-all duration-300 flex flex-col justify-between group hover:shadow-xl hover:shadow-purple-950/20"
                >
                  <div>
                    <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-cyan-400 group-hover:scale-110 transition-transform mb-3">
                      <IconComp className="w-5 h-5" />
                    </div>
                    <h4 className="text-sm font-bold text-white tracking-tight group-hover:text-cyan-300 transition-colors">
                      {focus.title}
                    </h4>
                    <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                      {focus.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Experience Timeline */}
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-mono uppercase tracking-widest text-slate-400">
              Career Pathway & Project Engagements
            </h3>
            <span className="text-xs font-mono text-cyan-400 flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-cyan-400" />
              <span>Available for Hire</span>
            </span>
          </div>

          <div className="relative border-l border-white/10 pl-6 sm:pl-8 ml-2 sm:ml-4 space-y-8">
            {experienceTimeline.map((item) => (
              <div key={item.id} className="relative group">
                {/* Timeline node */}
                <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-[#07080d] border-2 border-purple-500 group-hover:border-cyan-400 group-hover:scale-125 transition-all shadow-md shadow-purple-500/30" />

                <div className="p-6 sm:p-8 rounded-3xl glass-panel border border-white/10 hover:border-cyan-500/30 transition-all duration-300 space-y-4">
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <div>
                      <span className="px-2.5 py-0.5 rounded-full text-[11px] font-mono bg-blue-500/10 text-cyan-300 border border-blue-500/20">
                        {item.type}
                      </span>
                      <h4 className="text-xl sm:text-2xl font-bold text-white mt-1.5">
                        {item.role}
                      </h4>
                      <div className="flex flex-wrap items-center gap-3 text-xs text-slate-400 mt-1 font-mono">
                        <span className="text-slate-200 font-semibold">{item.company}</span>
                        <span>•</span>
                        <span className="flex items-center gap-1">
                          <MapPin className="w-3.5 h-3.5 text-cyan-400" />
                          {item.location}
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center gap-1.5 text-xs font-mono text-purple-300 px-3 py-1.5 rounded-xl bg-purple-500/10 border border-purple-500/20">
                      <Calendar className="w-3.5 h-3.5" />
                      <span>{item.period}</span>
                    </div>
                  </div>

                  <p className="text-slate-300 text-sm leading-relaxed">
                    {item.description}
                  </p>

                  {item.keyPoints && (
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-2 border-t border-white/5">
                      {item.keyPoints.map((point, idx) => (
                        <li
                          key={idx}
                          className="flex items-start gap-2 text-xs text-slate-300"
                        >
                          <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Configuration Hint Card */}
          <div className="p-4 rounded-2xl glass-panel-subtle border border-dashed border-white/15 flex items-center justify-between gap-4 text-xs font-mono text-slate-400">
            <div className="flex items-center gap-2">
              <PlusCircle className="w-4 h-4 text-purple-400 shrink-0" />
              <span>
                Easily configure future internships & corporate roles in{" "}
                <code className="text-cyan-300">src/data/experience.js</code>
              </span>
            </div>
            <span className="text-slate-400 hidden sm:inline">Modular Architecture</span>
          </div>
        </div>
      </div>
    </section>
  );
}

