import { ShoppingBag, Compass, Dumbbell, Store, ExternalLink, Code2 } from "lucide-react";

export default function ProjectVisualPlaceholder({ project }) {
  // Select icon and theme based on project id
  const getVisualDetails = () => {
    switch (project.id) {
      case "advvm-sportswear":
        return {
          icon: ShoppingBag,
          label: "SPORTSWEAR COMMERCE",
          accentGradient: "from-blue-600/30 via-indigo-600/20 to-purple-600/10",
          iconColor: "text-blue-400",
          patternColor: "rgba(59, 130, 246, 0.15)",
        };
      case "techpal-golf-teetime":
        return {
          icon: Compass,
          label: "GOLF RESERVATION WORKFLOW",
          accentGradient: "from-emerald-600/30 via-teal-600/20 to-cyan-600/10",
          iconColor: "text-emerald-400",
          patternColor: "rgba(16, 185, 129, 0.15)",
        };
      case "gymflow":
        return {
          icon: Dumbbell,
          label: "GYM & MEMBER MANAGEMENT",
          accentGradient: "from-purple-600/30 via-pink-600/20 to-indigo-600/10",
          iconColor: "text-purple-400",
          patternColor: "rgba(168, 85, 247, 0.15)",
        };
      case "ecommerce-react-laravel":
        return {
          icon: Store,
          label: "REACT + LARAVEL FULL STACK",
          accentGradient: "from-cyan-600/30 via-blue-600/20 to-purple-600/10",
          iconColor: "text-cyan-400",
          patternColor: "rgba(6, 182, 212, 0.15)",
        };
      default:
        return {
          icon: Code2,
          label: "FULL STACK ARCHITECTURE",
          accentGradient: "from-purple-600/30 via-blue-600/20 to-cyan-600/10",
          iconColor: "text-purple-400",
          patternColor: "rgba(139, 92, 246, 0.15)",
        };
    }
  };

  const { icon: MainIcon, label, accentGradient, iconColor } = getVisualDetails();

  return (
    <div
      className={`relative w-full h-56 sm:h-64 rounded-2xl overflow-hidden bg-gradient-to-br ${accentGradient} border border-white/10 flex flex-col items-center justify-center p-6 text-center group-hover:border-purple-500/40 transition-all duration-300`}
    >
      {/* Background isometric grid */}
      <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none" />

      {/* Ambient center light */}
      <div className="absolute w-40 h-40 rounded-full bg-white/5 blur-2xl pointer-events-none" />

      {/* Decorative center icon shield */}
      <div className="relative z-10 w-20 h-20 rounded-2xl glass-panel border border-white/20 flex items-center justify-center shadow-xl mb-4 group-hover:scale-110 group-hover:border-white/40 transition-transform duration-300">
        <MainIcon className={`w-10 h-10 ${iconColor}`} />
      </div>

      {/* Technical label */}
      <div className="relative z-10">
        <span className="text-[11px] font-mono tracking-widest uppercase text-slate-300 font-semibold px-3 py-1 rounded-full glass-panel-subtle border border-white/10">
          {label}
        </span>
      </div>

      {/* Watermark UI mock indicator */}
      <div className="absolute bottom-3 left-4 flex items-center gap-1.5 opacity-60">
        <div className="w-2 h-2 rounded-full bg-red-400/80" />
        <div className="w-2 h-2 rounded-full bg-yellow-400/80" />
        <div className="w-2 h-2 rounded-full bg-emerald-400/80" />
      </div>

      <div className="absolute bottom-3 right-4 font-mono text-[10px] text-slate-400">
        UI • ARCHITECTURE
      </div>
    </div>
  );
}

