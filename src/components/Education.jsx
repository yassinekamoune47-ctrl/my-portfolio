import { educationData } from "../data/education";
import {
  GraduationCap,
  Sparkles,
  Calendar,
  MapPin,
  CheckCircle2,
  Award,
  BookOpen,
} from "lucide-react";

export default function Education() {
  return (
    <section id="education" className="py-24 relative bg-[#090a12] overflow-hidden">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-600/10 blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-panel-subtle text-xs font-mono text-cyan-300 border border-cyan-500/20">
            <Sparkles className="w-3.5 h-3.5" />
            <span>ACADEMIC BACKGROUND</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Education &{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400">
              Credentials
            </span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base font-normal">
            Formal technical qualification in full-stack digital development and modern software engineering.
          </p>
        </div>

        {/* Education Card */}
        <div className="max-w-4xl mx-auto">
          {educationData.map((edu) => (
            <div
              key={edu.id}
              className="p-8 sm:p-10 rounded-3xl glass-panel border border-white/10 hover:border-purple-500/40 transition-all duration-300 relative overflow-hidden group shadow-2xl shadow-purple-950/20"
            >
              {/* Decorative corner accent */}
              <div className="absolute -top-12 -right-12 w-40 h-40 bg-gradient-to-br from-purple-500/20 via-blue-500/20 to-transparent rounded-full blur-xl pointer-events-none" />

              <div className="relative z-10 space-y-6">
                {/* Header Row: Diploma Title & Status Badge */}
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <div className="flex items-start gap-4">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-purple-600 to-blue-600 p-0.5 shadow-lg shadow-purple-600/30 shrink-0">
                      <div className="w-full h-full bg-[#07080d] rounded-[14px] flex items-center justify-center text-cyan-300">
                        <GraduationCap className="w-7 h-7" />
                      </div>
                    </div>
                    <div>
                      <span className="inline-flex items-center gap-1.5 text-xs font-mono text-cyan-300 uppercase tracking-wider">
                        <Award className="w-3.5 h-3.5" />
                        <span>Specialization: {edu.specialization}</span>
                      </span>
                      <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mt-1">
                        {edu.degree}
                      </h3>
                      <p className="text-base font-medium text-slate-300 mt-1">
                        {edu.institution}
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-col sm:items-end gap-2">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-medium text-emerald-300 bg-emerald-500/10 border border-emerald-500/20">
                      <span className="w-2 h-2 rounded-full bg-emerald-400" />
                      <span>{edu.status}</span>
                    </span>
                    <div className="flex items-center gap-1.5 text-xs font-mono text-slate-400">
                      <Calendar className="w-3.5 h-3.5 text-cyan-400" />
                      <span>{edu.period}</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-xs font-mono text-slate-400">
                      <MapPin className="w-3.5 h-3.5 text-purple-400" />
                      <span>{edu.location}</span>
                    </div>
                  </div>
                </div>

                {/* Description */}
                <p className="text-slate-300 text-sm sm:text-base leading-relaxed pt-2 border-t border-white/5">
                  {edu.description}
                </p>

                {/* Core Competencies Matrix */}
                <div className="space-y-3 pt-2">
                  <div className="flex items-center gap-2 text-xs font-mono text-slate-400 uppercase tracking-widest">
                    <BookOpen className="w-4 h-4 text-cyan-400" />
                    <span>Key Practical Competencies</span>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {edu.coreCompetencies.map((comp, idx) => (
                      <div
                        key={idx}
                        className="flex items-center gap-2.5 p-3 rounded-xl bg-white/[0.03] border border-white/5 text-xs text-slate-200"
                      >
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                        <span>{comp}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

