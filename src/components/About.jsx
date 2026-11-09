import { personalInfo } from "../data/personalInfo";
import {
  MapPin,
  GraduationCap,
  Layers,
  Sparkles,
  Terminal,
  CheckCircle2,
  Code,
  Cpu,
} from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-24 relative bg-[#090a12] overflow-hidden">
      {/* Decorative gradient lines */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-purple-500/20 to-transparent" />
      <div className="absolute -top-32 right-0 w-96 h-96 bg-cyan-600/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-panel-subtle text-xs font-mono text-cyan-300 border border-cyan-500/20">
            <Sparkles className="w-3.5 h-3.5" />
            <span>DISCOVER MY BACKGROUND</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            About{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400">
              Me
            </span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base font-normal">
            Bridging modern user interfaces with robust server architectures
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          {/* Left card: Biography & Mission */}
          <div className="lg:col-span-7 flex flex-col justify-between p-8 sm:p-10 rounded-3xl glass-panel border border-white/10 hover:border-purple-500/30 transition-all duration-300 space-y-6">
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-xs font-mono text-purple-400 uppercase tracking-widest">
                <Terminal className="w-4 h-4" />
                <span>Professional Profile</span>
              </div>
              <h3 className="text-2xl font-bold text-white tracking-tight">
                Crafting digital experiences with precision and modern code
              </h3>
              <p className="text-slate-300 leading-relaxed text-base sm:text-lg">
                {personalInfo.aboutDescription}
              </p>
            </div>

            {/* Core Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-white/10">
              <div className="flex items-start gap-3">
                <div className="p-2 rounded-xl bg-purple-500/10 text-purple-400 border border-purple-500/20 mt-1">
                  <Code className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-white">Modern Frontend</h4>
                  <p className="text-xs text-slate-400 mt-0.5">
                    Component-driven design with React, Tailwind, and high responsiveness.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-2 rounded-xl bg-blue-500/10 text-blue-400 border border-blue-500/20 mt-1">
                  <Cpu className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-white">Solid Backend</h4>
                  <p className="text-xs text-slate-400 mt-0.5">
                    Structured MVC with Laravel, RESTful endpoints, and relational databases.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right card: Fast Facts & Profile Details */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            {/* Fact 1: Location */}
            <div className="p-6 rounded-2xl glass-panel border border-white/10 hover:border-cyan-500/30 transition-all duration-200">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs font-mono uppercase tracking-wider text-slate-400">
                    Location
                  </span>
                  <h4 className="text-lg font-bold text-white">{personalInfo.location}</h4>
                  <p className="text-xs text-slate-400 mt-0.5">Open for remote & local roles</p>
                </div>
              </div>
            </div>

            {/* Fact 2: Education */}
            <div className="p-6 rounded-2xl glass-panel border border-white/10 hover:border-purple-500/30 transition-all duration-200">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400 shrink-0">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs font-mono uppercase tracking-wider text-slate-400">
                    Education
                  </span>
                  <h4 className="text-base font-bold text-white leading-snug">
                    Specialized Technician Diploma
                  </h4>
                  <p className="text-xs text-slate-300 mt-0.5">Digital Development</p>
                </div>
              </div>
            </div>

            {/* Fact 3: Specialization */}
            <div className="p-6 rounded-2xl glass-panel border border-white/10 hover:border-blue-500/30 transition-all duration-200">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 shrink-0">
                  <Layers className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs font-mono uppercase tracking-wider text-slate-400">
                    Specialization
                  </span>
                  <h4 className="text-base font-bold text-white">Web Full Stack Development</h4>
                  <p className="text-xs text-cyan-300 font-mono mt-0.5">Frontend & Backend Engineering</p>
                </div>
              </div>
            </div>

            {/* Fact 4: Quick highlight pill checklist */}
            <div className="p-6 rounded-2xl bg-gradient-to-br from-purple-950/40 via-blue-950/20 to-transparent border border-white/10">
              <div className="flex items-center gap-2 mb-3">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span className="text-xs font-mono uppercase tracking-wider text-slate-300">
                  Professional Focus
                </span>
              </div>
              <div className="flex flex-wrap gap-2">
                {personalInfo.professionalFocus.map((focus) => (
                  <span
                    key={focus}
                    className="text-xs px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-slate-200 font-mono"
                  >
                    {focus}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

