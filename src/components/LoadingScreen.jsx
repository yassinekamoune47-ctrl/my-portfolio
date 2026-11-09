import { useEffect, useState } from "react";

export default function LoadingScreen({ onLoaded }) {
  const [progress, setProgress] = useState(0);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    // Check reduced motion
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) {
      if (onLoaded) onLoaded();
      return;
    }

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setFadeOut(true);
          setTimeout(() => {
            if (onLoaded) onLoaded();
          }, 400);
          return 100;
        }
        // Accelerate progress
        const diff = Math.floor(Math.random() * 25) + 15;
        return Math.min(prev + diff, 100);
      });
    }, 60);

    return () => clearInterval(interval);
  }, [onLoaded]);

  return (
    <div
      className={`fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#07080d] transition-opacity duration-500 ${
        fadeOut ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
      aria-hidden={fadeOut}
    >
      {/* Ambient background glow */}
      <div className="absolute w-72 h-72 rounded-full bg-gradient-to-tr from-purple-600/30 to-cyan-500/30 blur-3xl" />

      <div className="relative z-10 flex flex-col items-center space-y-6">
        {/* Monogram Box */}
        <div className="relative w-20 h-20 rounded-2xl bg-gradient-to-br from-purple-600 via-blue-600 to-cyan-400 p-[1.5px] shadow-2xl shadow-purple-600/30 animate-pulse">
          <div className="w-full h-full bg-[#07080d] rounded-[14px] flex items-center justify-center">
            <span className="text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-300 font-mono">
              YK.
            </span>
          </div>
        </div>

        {/* Loading text & progress bar */}
        <div className="w-48 space-y-2 text-center">
          <div className="flex justify-between text-[11px] font-mono text-slate-400">
            <span>INITIALIZING</span>
            <span className="text-cyan-400">{progress}%</span>
          </div>
          <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-400 rounded-full transition-all duration-150 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

