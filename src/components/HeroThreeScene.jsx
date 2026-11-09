import { useEffect, useRef, useState } from "react";
import * as THREE from "three";

export default function HeroThreeScene() {
  const mountRef = useRef(null);
  const [hasWebGL, setHasWebGL] = useState(true);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    // Check if user prefers reduced motion
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    // Check WebGL availability
    let renderer;
    try {
      renderer = new THREE.WebGLRenderer({
        antialias: true,
        alpha: true,
        powerPreference: "high-performance",
      });
    } catch {
      setHasWebGL(false);
      return;
    }

    const width = container.clientWidth || 500;
    const height = container.clientHeight || 500;

    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.2;
    container.appendChild(renderer.domElement);

    const scene = new THREE.Scene();

    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.z = 6;

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.7);
    scene.add(ambientLight);

    const pointLightPurple = new THREE.PointLight(0x8b5cf6, 25, 20);
    pointLightPurple.position.set(4, 3, 4);
    scene.add(pointLightPurple);

    const pointLightBlue = new THREE.PointLight(0x3b82f6, 25, 20);
    pointLightBlue.position.set(-4, -3, 3);
    scene.add(pointLightBlue);

    const pointLightCyan = new THREE.PointLight(0x06b6d4, 15, 15);
    pointLightCyan.position.set(0, 4, -2);
    scene.add(pointLightCyan);

    // Group for objects to enable synchronized tilting
    const sceneGroup = new THREE.Group();
    scene.add(sceneGroup);

    // Central Core: Complex Torus Knot
    const knotGeometry = new THREE.TorusKnotGeometry(1.2, 0.35, 128, 32, 2, 3);
    const knotMaterial = new THREE.MeshStandardMaterial({
      color: 0x1d1e33,
      metalness: 0.85,
      roughness: 0.2,
      emissive: 0x4f46e5,
      emissiveIntensity: 0.25,
      wireframe: false,
    });
    const knotMesh = new THREE.Mesh(knotGeometry, knotMaterial);
    sceneGroup.add(knotMesh);

    // Outer Cage: Wireframe Icosahedron
    const cageGeometry = new THREE.IcosahedronGeometry(2.3, 1);
    const cageMaterial = new THREE.MeshBasicMaterial({
      color: 0x38bdf8,
      wireframe: true,
      transparent: true,
      opacity: 0.22,
    });
    const cageMesh = new THREE.Mesh(cageGeometry, cageMaterial);
    sceneGroup.add(cageMesh);

    // Second Outer Ring: Floating Orbit Ring
    const ringGeometry = new THREE.TorusGeometry(2.9, 0.02, 16, 100);
    const ringMaterial = new THREE.MeshBasicMaterial({
      color: 0x818cf8,
      transparent: true,
      opacity: 0.4,
    });
    const ringMesh = new THREE.Mesh(ringGeometry, ringMaterial);
    ringMesh.rotation.x = Math.PI / 3;
    sceneGroup.add(ringMesh);

    // Floating Particles / Cyber Dust
    const particleCount = 180;
    const particleGeometry = new THREE.BufferGeometry();
    const particlePositions = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount * 3; i += 3) {
      particlePositions[i] = (Math.random() - 0.5) * 10;
      particlePositions[i + 1] = (Math.random() - 0.5) * 10;
      particlePositions[i + 2] = (Math.random() - 0.5) * 10;
    }
    particleGeometry.setAttribute(
      "position",
      new THREE.BufferAttribute(particlePositions, 3)
    );

    const particleMaterial = new THREE.PointsMaterial({
      color: 0x93c5fd,
      size: 0.04,
      transparent: true,
      opacity: 0.6,
      blending: THREE.AdditiveBlending,
    });
    const particleField = new THREE.Points(particleGeometry, particleMaterial);
    scene.add(particleField);

    // Mouse Tracking with smooth interpolation
    let targetX = 0;
    let targetY = 0;
    let currentX = 0;
    let currentY = 0;

    const handleMouseMove = (event) => {
      const rect = container.getBoundingClientRect();
      const x = event.clientX - rect.left - rect.width / 2;
      const y = event.clientY - rect.top - rect.height / 2;
      targetX = (x / rect.width) * 0.8;
      targetY = (y / rect.height) * 0.8;
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });

    // Handle Window Resize
    const handleResize = () => {
      if (!container) return;
      const newWidth = container.clientWidth;
      const newHeight = container.clientHeight;
      camera.aspect = newWidth / newHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(newWidth, newHeight);
    };

    window.addEventListener("resize", handleResize);

    // Animation Loop
    let animationFrameId;
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      const elapsedTime = clock.getElapsedTime();

      // Smooth mouse lerp
      currentX += (targetX - currentX) * 0.05;
      currentY += (targetY - currentY) * 0.05;

      if (!prefersReducedMotion) {
        // Rotations
        knotMesh.rotation.x = elapsedTime * 0.35;
        knotMesh.rotation.y = elapsedTime * 0.45;

        cageMesh.rotation.x = -elapsedTime * 0.15;
        cageMesh.rotation.y = -elapsedTime * 0.2;

        ringMesh.rotation.z = elapsedTime * 0.25;

        particleField.rotation.y = elapsedTime * 0.05;
      }

      // Tilt group with mouse
      sceneGroup.rotation.y = currentX * 0.9;
      sceneGroup.rotation.x = currentY * 0.9;

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);

      knotGeometry.dispose();
      knotMaterial.dispose();
      cageGeometry.dispose();
      cageMaterial.dispose();
      ringGeometry.dispose();
      ringMaterial.dispose();
      particleGeometry.dispose();
      particleMaterial.dispose();

      if (renderer.domElement && renderer.domElement.parentNode) {
        renderer.domElement.parentNode.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  return (
    <div className="relative w-full h-[380px] sm:h-[440px] md:h-[520px] lg:h-[580px] flex items-center justify-center">
      {/* Ambient background glow behind 3D object */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-72 h-72 sm:w-96 sm:h-96 rounded-full bg-gradient-to-tr from-purple-600/25 via-blue-600/20 to-cyan-500/25 blur-3xl opacity-70 animate-pulse duration-700" />
      </div>

      {hasWebGL ? (
        <div
          ref={mountRef}
          className="relative w-full h-full cursor-grab active:cursor-grabbing z-10"
          aria-label="Interactive 3D Geometric Scene"
        />
      ) : (
        /* WebGL Fallback */
        <div className="relative z-10 flex flex-col items-center justify-center p-8 rounded-3xl glass-panel border border-purple-500/20 text-center">
          <div className="w-32 h-32 rounded-2xl bg-gradient-to-br from-purple-600 via-blue-600 to-cyan-500 p-1 flex items-center justify-center shadow-2xl shadow-purple-500/20">
            <div className="w-full h-full bg-[#07080d] rounded-xl flex items-center justify-center">
              <span className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400">
                YK.
              </span>
            </div>
          </div>
          <p className="mt-4 text-xs font-mono text-slate-400 uppercase tracking-widest">
            3D Geometric Space
          </p>
        </div>
      )}

      {/* Futuristic technical badge overlay */}
      <div className="absolute bottom-2 right-4 sm:bottom-4 sm:right-6 z-20 pointer-events-none hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-full glass-panel-subtle text-[11px] font-mono text-slate-400 border border-white/5">
        <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
        <span>THREE.JS 3D CORE</span>
      </div>
    </div>
  );
}

