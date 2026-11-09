import { useEffect } from "react";
import { X, ExternalLink } from "lucide-react";
import { GithubIcon } from "./SocialIcons";

export default function ProjectLightbox({ project, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    // Lock body scroll
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose]);

  if (!project) return null;

  const hasLiveDemo = Boolean(project.liveUrl && project.liveUrl.trim() !== "");
  const hasGitHub = Boolean(project.githubUrl && project.githubUrl.trim() !== "");

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-8 bg-black/85 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={`Preview of ${project.title}`}
    >
      <div
        className="relative max-w-5xl w-full max-h-[92vh] flex flex-col rounded-3xl glass-panel border border-white/15 shadow-2xl overflow-hidden bg-[#0a0b12]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-[#07080d]/80">
          <div className="flex items-center gap-3">
            <span className="px-3 py-1 rounded-full text-xs font-mono font-semibold bg-purple-500/10 text-purple-300 border border-purple-500/20">
              {project.badge}
            </span>
            <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight">
              {project.title}
            </h3>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="p-2 rounded-xl text-slate-400 hover:text-white glass-panel-subtle hover:bg-white/10 transition-colors cursor-pointer"
            aria-label="Close preview"
          >
            <X className="w-5 h-5 text-slate-300 hover:text-white" />
          </button>
        </div>

        {/* Screenshot Container */}
        <div className="relative flex-1 overflow-auto p-4 sm:p-6 flex items-center justify-center bg-black/40">
          <img
            src={project.image}
            alt={`${project.title} screenshot preview`}
            className="w-full max-h-[68vh] object-contain rounded-xl border border-white/10 shadow-2xl"
          />
        </div>

        {/* Bottom Bar: Technologies & Actions */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 px-6 py-4 border-t border-white/10 bg-[#07080d]/80">
          <div className="flex flex-wrap gap-1.5 justify-center sm:justify-start">
            {project.technologies.slice(0, 5).map((tech) => (
              <span
                key={tech}
                className="px-2.5 py-1 rounded-md text-[11px] font-mono bg-white/5 text-slate-300 border border-white/10"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto justify-end">
            {hasLiveDemo && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold text-white bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 transition-all duration-200 shadow-md shadow-blue-500/20"
              >
                <span>Test Live Project</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            )}

            {hasGitHub && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold text-slate-200 glass-panel hover:bg-white/10 hover:text-white border border-white/10 transition-all duration-200"
              >
                <GithubIcon className="w-3.5 h-3.5" />
                <span>View GitHub</span>
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

