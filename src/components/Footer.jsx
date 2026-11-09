import { personalInfo } from "../data/personalInfo";
import { GithubIcon, LinkedinIcon } from "./SocialIcons";
import { ArrowUp, Mail, Heart, Sparkles } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-[#050609] border-t border-white/10 pt-16 pb-12 overflow-hidden">
      {/* Decorative ambient gradient */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-px bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-12 border-b border-white/5">
          {/* Logo & Tagline */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-2">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-purple-600 via-blue-600 to-cyan-400 p-[1px]">
                <div className="w-full h-full bg-[#050609] rounded-[7px] flex items-center justify-center">
                  <span className="font-extrabold text-xs text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-300">
                    YK
                  </span>
                </div>
              </div>
              <span className="font-bold text-lg text-white tracking-tight">
                {personalInfo.fullName}
              </span>
            </div>
            <p className="text-xs font-mono text-slate-400">
              {personalInfo.title} • {personalInfo.location}
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-3">
            <a
              href={personalInfo.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-xl glass-panel text-slate-400 hover:text-white hover:border-purple-500/50 hover:bg-purple-600/10 transition-colors"
              aria-label="GitHub Profile"
            >
              <GithubIcon className="w-5 h-5" />
            </a>
            <a
              href={personalInfo.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-xl glass-panel text-slate-400 hover:text-white hover:border-blue-500/50 hover:bg-blue-600/10 transition-colors"
              aria-label="LinkedIn Profile"
            >
              <LinkedinIcon className="w-5 h-5" />
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              className="p-3 rounded-xl glass-panel text-slate-400 hover:text-white hover:border-cyan-500/50 hover:bg-cyan-600/10 transition-colors"
              aria-label="Send Email"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>

          {/* Back to top button */}
          <button
            type="button"
            onClick={scrollToTop}
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full glass-panel border border-white/10 hover:border-cyan-400/50 text-xs font-mono text-slate-300 hover:text-white hover:bg-white/5 transition-all duration-200 group cursor-pointer"
            aria-label="Scroll to top of page"
          >
            <span>Back to top</span>
            <ArrowUp className="w-4 h-4 text-cyan-400 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>

        {/* Bottom copyright row */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-400">
          <p>
            © {currentYear} {personalInfo.fullName}. All rights reserved.
          </p>
          <p className="flex items-center gap-1.5">
            <span>Built with React, Vite & Three.js</span>
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
            <span>Casablanca, Morocco</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
