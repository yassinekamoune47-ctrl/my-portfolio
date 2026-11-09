import { useState } from "react";
import { skillCategories } from "../data/skills";
import { GithubIcon } from "./SocialIcons";
import {
  Sparkles,
  Layout,
  Server,
  Database,
  Wrench,
  Code2,
  Palette,
  FileCode,
  Atom,
  Zap,
  Smartphone,
  Terminal,
  Boxes,
  Network,
  Flame,
  Activity,
  Layers,
  GitBranch,
  MonitorPlay,
  Package,
  DatabaseZap,
  Check,
} from "lucide-react";

// Lucide icon mapping
const ICON_MAP = {
  Layout: Layout,
  Server: Server,
  Database: Database,
  Wrench: Wrench,
  Code2: Code2,
  Palette: Palette,
  FileCode: FileCode,
  Atom: Atom,
  Zap: Zap,
  Sparkles: Sparkles,
  Smartphone: Smartphone,
  Terminal: Terminal,
  Boxes: Boxes,
  Network: Network,
  Flame: Flame,
  Activity: Activity,
  Layers: Layers,
  GitBranch: GitBranch,
  Github: GithubIcon,
  MonitorPlay: MonitorPlay,
  Package: Package,
  DatabaseZap: DatabaseZap,
};

export default function Skills() {
  const [activeTab, setActiveTab] = useState("all");

  const filteredCategories =
    activeTab === "all"
      ? skillCategories
      : skillCategories.filter((cat) => cat.id === activeTab);

  return (
    <section id="skills" className="py-24 relative bg-[#07080d] overflow-hidden">
      <div className="absolute inset-0 bg-dots-pattern opacity-25 pointer-events-none" />
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-purple-600/10 blur-[130px] rounded-full pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-blue-600/10 blur-[130px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-panel-subtle text-xs font-mono text-purple-300 border border-purple-500/20">
            <Sparkles className="w-3.5 h-3.5" />
            <span>MY TECHNICAL TOOLKIT</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Technical{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400">
              Skills
            </span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base font-normal">
            Solid foundations in modern frontend frameworks, backend systems, databases, and tooling.
          </p>

          {/* Interactive Category Filter Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-4">
            <button
              type="button"
              onClick={() => setActiveTab("all")}
              className={`px-4 py-2 rounded-xl text-xs font-mono transition-all duration-200 cursor-pointer ${
                activeTab === "all"
                  ? "bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg shadow-purple-600/25"
                  : "glass-panel text-slate-400 hover:text-white hover:bg-white/5"
              }`}
            >
              All Categories
            </button>
            {skillCategories.map((cat) => (
              <button
                key={cat.id}
                type="button"
                onClick={() => setActiveTab(cat.id)}
                className={`px-4 py-2 rounded-xl text-xs font-mono transition-all duration-200 cursor-pointer ${
                  activeTab === cat.id
                    ? "bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg shadow-purple-600/25"
                    : "glass-panel text-slate-400 hover:text-white hover:bg-white/5"
                }`}
              >
                {cat.title}
              </button>
            ))}
          </div>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredCategories.map((category) => {
            const HeaderIcon = ICON_MAP[category.icon] || Layout;

            return (
              <div
                key={category.id}
                className="p-7 sm:p-8 rounded-3xl glass-panel border border-white/10 hover:border-purple-500/30 transition-all duration-300 flex flex-col justify-between group hover:shadow-2xl hover:shadow-purple-950/20"
              >
                <div>
                  {/* Category Header */}
                  <div className="flex items-center gap-4 mb-3">
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-purple-600/20 to-blue-600/20 border border-purple-500/30 flex items-center justify-center text-cyan-300 group-hover:scale-110 transition-transform duration-300">
                      <HeaderIcon className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white tracking-tight uppercase font-mono">
                        {category.title}
                      </h3>
                      <p className="text-xs text-slate-400 mt-0.5">
                        {category.description}
                      </p>
                    </div>
                  </div>

                  {/* Skills Tag Pills */}
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mt-6">
                    {category.skills.map((skill) => {
                      const SkillIcon = ICON_MAP[skill.icon] || Code2;
                      return (
                        <div
                          key={skill.name}
                          className="flex items-center gap-2.5 p-3 rounded-xl bg-white/[0.03] hover:bg-white/[0.08] border border-white/5 hover:border-cyan-500/30 transition-all duration-200 group/skill"
                        >
                          <div className="text-slate-400 group-hover/skill:text-cyan-400 transition-colors">
                            <SkillIcon className="w-4 h-4" />
                          </div>
                          <span className="text-xs font-medium text-slate-200 group-hover/skill:text-white transition-colors truncate">
                            {skill.name}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Footer status pill */}
                <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-slate-400">
                  <span className="flex items-center gap-1.5 text-emerald-400">
                    <Check className="w-3.5 h-3.5" />
                    <span>Production tested</span>
                  </span>
                  <span>{category.skills.length} core technologies</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
