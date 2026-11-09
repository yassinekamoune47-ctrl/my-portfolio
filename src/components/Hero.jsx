import { personalInfo } from "../data/personalInfo";
import HeroThreeScene from "./HeroThreeScene";
import { GithubIcon, LinkedinIcon } from "./SocialIcons";
import { ArrowDown, Mail, Sparkles, Code2, Database } from "lucide-react";

export default function Hero() {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden bg-[#07080d]"
    >
      {/* Background ambient futuristic lighting */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-purple-700/20 via-blue-600/15 to-cyan-500/10 blur-[130px] rounded-full pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-blue-600/10 blur-[100px] rounded-full pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-80 h-80 bg-purple-600/10 blur-[100px] rounded-full pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Text & CTA */}
          <div className="lg:col-span-7 flex flex-col items-start text-left space-y-6">
            {/* Availability Badge */}
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full glass-panel border border-emerald-500/30 text-xs font-mono text-emerald-300 shadow-lg shadow-emerald-500/10">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
              </span>
              <span>{personalInfo.status}</span>
            </div>

            {/* Main Heading */}
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-extrabold tracking-tight text-white leading-[1.1]">
                Hi, I'm{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-300">
                  {personalInfo.fullName}
                </span>
              </h1>
              <p className="text-xl sm:text-2xl md:text-3xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-slate-200 to-slate-400 font-mono tracking-tight flex items-center gap-3">
                <Code2 className="w-6 h-6 text-cyan-400 inline" />
                {personalInfo.title}
              </p>
            </div>

            {/* Description */}
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl font-normal">
              {personalInfo.heroDescription}
            </p>

            {/* Technology pill tags */}
            <div className="flex flex-wrap gap-2 pt-1 pb-2">
              {["React", "Laravel", "PHP", "MySQL", "Firebase", "JavaScript", "Tailwind CSS"].map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 rounded-lg text-xs font-mono font-medium text-slate-300 glass-panel-subtle border border-white/5 hover:border-cyan-500/40 hover:text-cyan-300 transition-colors"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* CTA Group */}
            <div className="flex flex-wrap items-center gap-4 pt-2 w-full sm:w-auto">
              <button
                type="button"
                onClick={() => scrollTo("projects")}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl font-semibold text-sm text-white bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-500 hover:from-purple-500 hover:via-blue-500 hover:to-cyan-400 transition-all duration-300 shadow-lg shadow-purple-600/25 hover:shadow-cyan-500/30 hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
              >
                <span>View My Projects</span>
                <ArrowDown className="w-4 h-4 animate-bounce" />
              </button>

              <button
                type="button"
                onClick={() => scrollTo("contact")}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm text-slate-200 glass-panel hover:bg-white/10 hover:text-white border border-white/10 hover:border-white/25 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
              >
                <Mail className="w-4 h-4 text-cyan-400" />
                <span>Contact Me</span>
              </button>
            </div>

            {/* Social Links & Location */}
            <div className="flex items-center gap-5 pt-3 border-t border-white/10 w-full">
              <span className="text-xs font-mono text-slate-400 uppercase tracking-wider">
                Connect:
              </span>
              <div className="flex items-center gap-3">
                <a
                  href={personalInfo.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl glass-panel text-slate-300 hover:text-white hover:border-purple-500/50 hover:bg-purple-600/10 transition-all duration-200"
                  aria-label="GitHub Profile"
                >
                  <GithubIcon className="w-5 h-5" />
                </a>
                <a
                  href={personalInfo.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl glass-panel text-slate-300 hover:text-white hover:border-blue-500/50 hover:bg-blue-600/10 transition-all duration-200"
                  aria-label="LinkedIn Profile"
                >
                  <LinkedinIcon className="w-5 h-5" />
                </a>
              </div>
              <div className="hidden sm:flex items-center gap-2 text-xs font-mono text-slate-400 ml-auto">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                <span>{personalInfo.location}</span>
              </div>
            </div>
          </div>

          {/* Right Column: 3D Interactive Geometric Scene */}
          <div className="lg:col-span-5 flex items-center justify-center relative">
            <HeroThreeScene />
          </div>
        </div>
      </div>
    </section>
  );
}
