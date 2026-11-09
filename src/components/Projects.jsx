import { useState } from "react";
import { projects } from "../data/projects";
import ProjectVisualPlaceholder from "./ProjectVisualPlaceholder";
import ProjectLightbox from "./ProjectLightbox";
import { GithubIcon } from "./SocialIcons";
import {
  ExternalLink,
  Sparkles,
  Layers,
  CheckCircle2,
  Lock,
  Radio,
  Maximize2,
} from "lucide-react";

export default function Projects() {
  const [filter, setFilter] = useState("all");
  const [activeLightboxProject, setActiveLightboxProject] = useState(null);

  const categories = ["all", "E-commerce", "Reservation & Management"];

  const filteredProjects = projects.filter((project) => {
    if (filter === "all") return true;
    if (filter === "E-commerce") {
      return (
        project.category.toLowerCase().includes("commerce") ||
        project.badge.toLowerCase().includes("commerce")
      );
    }
    if (filter === "Reservation & Management") {
      return (
        project.category.toLowerCase().includes("reservation") ||
        project.category.toLowerCase().includes("management")
      );
    }
    return true;
  });

  return (
    <section id="projects" className="py-24 relative bg-[#090a12] overflow-hidden">
      {/* Ambient background glows */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-blue-600/10 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute bottom-10 left-0 w-[500px] h-[500px] bg-purple-600/10 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-panel-subtle text-xs font-mono text-cyan-300 border border-cyan-500/20">
            <Sparkles className="w-3.5 h-3.5" />
            <span>PORTFOLIO SHOWCASE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Featured{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400">
              Projects
            </span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base font-normal">
            Real-world full-stack web applications developed with React, Laravel, PHP, MySQL, and Firebase.
          </p>

          {/* Filter pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-4">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setFilter(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-mono capitalize transition-all duration-200 cursor-pointer ${
                  filter === cat
                    ? "bg-gradient-to-r from-blue-600 to-cyan-600 text-white shadow-lg shadow-cyan-600/20"
                    : "glass-panel text-slate-400 hover:text-white hover:bg-white/5"
                }`}
              >
                {cat === "all" ? "All Featured Projects" : cat}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Gallery */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
          {filteredProjects.map((project) => {
            const hasLiveDemo = Boolean(project.liveUrl && project.liveUrl.trim() !== "");
            const hasGitHub = Boolean(project.githubUrl && project.githubUrl.trim() !== "");
            const targetUrl = project.liveUrl || project.githubUrl;

            return (
              <div
                key={project.id}
                className="group flex flex-col justify-between rounded-3xl glass-panel border border-white/10 hover:border-purple-500/40 transition-all duration-300 p-6 sm:p-8 hover:shadow-2xl hover:shadow-purple-950/30"
              >
                <div className="space-y-6">
                  {/* Top Bar: Badge & Live Status Indicator */}
                  <div className="flex items-center justify-between gap-2">
                    <span className="px-3 py-1 rounded-full text-xs font-mono font-semibold bg-purple-500/10 text-purple-300 border border-purple-500/20">
                      {project.badge}
                    </span>

                    {/* Distinct Live Demo Indicator */}
                    {hasLiveDemo ? (
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-mono text-emerald-300 bg-emerald-500/10 border border-emerald-500/20">
                        <Radio className="w-3 h-3 text-emerald-400 animate-pulse" />
                        <span>Live Demo Online</span>
                      </span>
                    ) : (
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-mono text-slate-400 bg-white/5 border border-white/10">
                        <Layers className="w-3 h-3 text-cyan-400" />
                        <span>Architecture Ready</span>
                      </span>
                    )}
                  </div>

                  {/* Visual Preview (Screenshot with Lightbox trigger & subtle hover zoom) */}
                  <div
                    onClick={() => setActiveLightboxProject(project)}
                    className="relative w-full h-56 sm:h-64 md:h-72 rounded-2xl overflow-hidden border border-white/10 shadow-lg shadow-black/40 bg-black/40 cursor-pointer group/preview focus:outline-none"
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ") {
                        e.preventDefault();
                        setActiveLightboxProject(project);
                      }
                    }}
                    aria-label={`Click to enlarge preview for ${project.title}`}
                  >
                    {project.image ? (
                      <>
                        <img
                          src={project.image}
                          alt={`${project.title} screenshot`}
                          className="w-full h-full object-cover object-top transition-transform duration-500 ease-out group-hover:scale-105"
                          loading="lazy"
                        />
                        {/* Hover Overlay with project name, tech pills and enlarge badge */}
                        <div className="absolute inset-0 bg-gradient-to-t from-[#07080d]/90 via-[#07080d]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-4 sm:p-5 pointer-events-none">
                          <div className="flex items-center justify-between">
                            <span className="px-2.5 py-1 rounded-full text-[10px] font-mono font-semibold bg-white/10 text-cyan-300 backdrop-blur-md border border-white/10">
                              {project.badge}
                            </span>
                            <span className="p-1.5 px-2.5 rounded-xl bg-white/10 text-white backdrop-blur-md border border-white/10 flex items-center gap-1 text-[11px] font-mono shadow-lg">
                              <Maximize2 className="w-3.5 h-3.5 text-cyan-300" />
                              <span>Click to Enlarge</span>
                            </span>
                          </div>
                          <div className="space-y-1.5">
                            <h4 className="text-base sm:text-lg font-bold text-white drop-shadow-md">
                              {project.title}
                            </h4>
                            <div className="flex flex-wrap gap-1">
                              {project.technologies.slice(0, 4).map((tech) => (
                                <span
                                  key={tech}
                                  className="px-2 py-0.5 rounded-md text-[10px] font-mono bg-black/60 text-slate-200 border border-white/10"
                                >
                                  {tech}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>
                      </>
                    ) : (
                      <ProjectVisualPlaceholder project={project} />
                    )}
                  </div>

                  {/* Project Info */}
                  <div className="space-y-3">
                    <div className="flex items-baseline justify-between">
                      <a
                        href={targetUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xl sm:text-2xl font-bold text-white group-hover:text-cyan-300 transition-colors tracking-tight focus:outline-none"
                      >
                        {project.title}
                      </a>
                      <span className="text-xs font-mono text-slate-400 hidden sm:inline">
                        {project.category}
                      </span>
                    </div>
                    <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
                      {project.description}
                    </p>
                  </div>

                  {/* Highlights */}
                  {project.highlights && (
                    <div className="space-y-2 pt-2 border-t border-white/5">
                      <span className="text-[11px] font-mono uppercase tracking-widest text-slate-400">
                        Key Features & Architecture:
                      </span>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {project.highlights.map((highlight, idx) => (
                          <li
                            key={idx}
                            className="flex items-start gap-2 text-xs text-slate-300"
                          >
                            <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                            <span>{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Technologies Badges */}
                  <div className="space-y-2 pt-2">
                    <div className="flex flex-wrap gap-1.5">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-1 rounded-md text-[11px] font-mono bg-white/5 hover:bg-white/10 text-slate-300 border border-white/10 transition-colors"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Footer Action Buttons */}
                <div className="mt-8 pt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-3">
                  <div className="flex flex-wrap items-center gap-3">
                    {/* Live Demo button: ONLY shown if liveUrl configured */}
                    {hasLiveDemo && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold text-white bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 transition-all duration-200 shadow-md shadow-blue-500/20"
                      >
                        <span>Test Live Project</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    )}

                    {/* GitHub button: ONLY shown if githubUrl configured */}
                    {hasGitHub && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold text-slate-200 glass-panel hover:bg-white/10 hover:text-white border border-white/10 transition-all duration-200"
                      >
                        <GithubIcon className="w-3.5 h-3.5" />
                        <span>View GitHub</span>
                      </a>
                    )}

                    {/* Quick Lightbox Preview Trigger */}
                    {project.image && (
                      <button
                        type="button"
                        onClick={() => setActiveLightboxProject(project)}
                        className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-mono text-slate-400 hover:text-cyan-300 glass-panel-subtle hover:bg-white/10 transition-colors cursor-pointer"
                        title="Open image preview"
                        aria-label="Open image preview"
                      >
                        <Maximize2 className="w-3.5 h-3.5" />
                        <span className="hidden sm:inline">Preview</span>
                      </button>
                    )}

                    {/* Honest placeholder note when links are not configured yet */}
                    {!hasLiveDemo && !hasGitHub && (
                      <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
                        <Lock className="w-3.5 h-3.5 text-slate-400" />
                        <span>Codebase available on request / In active refinement</span>
                      </div>
                    )}
                  </div>

                  <span className="text-[11px] font-mono text-purple-400/80">
                    Full Stack Project
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Lightbox Modal */}
      {activeLightboxProject && (
        <ProjectLightbox
          project={activeLightboxProject}
          onClose={() => setActiveLightboxProject(null)}
        />
      )}
    </section>
  );
}
