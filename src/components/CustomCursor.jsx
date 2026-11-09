import { useEffect, useState } from "react";

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [trailingPos, setTrailingPos] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(true);

  useEffect(() => {
    // Only enable on desktop with fine pointer and no reduced-motion preference
    const isFinePointer = window.matchMedia("(pointer: fine)").matches;
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (!isFinePointer || prefersReducedMotion) {
      setIsTouchDevice(true);
      return;
    }

    setIsTouchDevice(false);

    let mouseX = -100;
    let mouseY = -100;
    let trailX = -100;
    let trailY = -100;
    let animationFrameId;

    const onMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      setPosition({ x: mouseX, y: mouseY });
      if (!isVisible) setIsVisible(true);
    };

    const onMouseEnter = () => setIsVisible(true);
    const onMouseLeave = () => setIsVisible(false);

    // Trailing lerp animation loop
    const renderLoop = () => {
      trailX += (mouseX - trailX) * 0.2;
      trailY += (mouseY - trailY) * 0.2;
      setTrailingPos({ x: trailX, y: trailY });
      animationFrameId = requestAnimationFrame(renderLoop);
    };

    renderLoop();

    // Check clickable hover
    const handleMouseOver = (e) => {
      const target = e.target;
      if (
        target &&
        (target.tagName === "BUTTON" ||
          target.tagName === "A" ||
          target.closest("button") ||
          target.closest("a") ||
          target.getAttribute("role") === "button" ||
          target.tagName === "INPUT" ||
          target.tagName === "TEXTAREA")
      ) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    window.addEventListener("mousemove", onMouseMove, { passive: true });
    window.addEventListener("mouseenter", onMouseEnter);
    window.addEventListener("mouseleave", onMouseLeave);
    document.addEventListener("mouseover", handleMouseOver, { passive: true });

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseenter", onMouseEnter);
      window.removeEventListener("mouseleave", onMouseLeave);
      document.removeEventListener("mouseover", handleMouseOver);
      cancelAnimationFrame(animationFrameId);
    };
  }, [isVisible]);

  if (isTouchDevice || !isVisible) return null;

  return (
    <>
      {/* Center dot */}
      <div
        className="fixed top-0 left-0 pointer-events-none z-50 rounded-full transition-transform duration-75 ease-out"
        style={{
          transform: `translate3d(${position.x}px, ${position.y}px, 0) translate(-50%, -50%)`,
          width: isHovered ? "6px" : "8px",
          height: isHovered ? "6px" : "8px",
          backgroundColor: isHovered ? "#38bdf8" : "#8b5cf6",
          boxShadow: "0 0 10px rgba(139, 92, 246, 0.8)",
        }}
      />
      {/* Outer trailing aura */}
      <div
        className="fixed top-0 left-0 pointer-events-none z-50 rounded-full border border-purple-500/40 transition-all duration-300 ease-out"
        style={{
          transform: `translate3d(${trailingPos.x}px, ${trailingPos.y}px, 0) translate(-50%, -50%)`,
          width: isHovered ? "48px" : "32px",
          height: isHovered ? "48px" : "32px",
          borderColor: isHovered ? "rgba(56, 189, 248, 0.6)" : "rgba(139, 92, 246, 0.4)",
          backgroundColor: isHovered
            ? "rgba(56, 189, 248, 0.1)"
            : "rgba(139, 92, 246, 0.05)",
          backdropFilter: isHovered ? "blur(1px)" : "none",
        }}
      />
    </>
  );
}

