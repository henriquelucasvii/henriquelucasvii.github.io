import { useMemo, useCallback } from "react"
import { loadSlim } from "@tsparticles/slim"
import type { Engine } from "@tsparticles/engine"


export const particlesInit = async (engine: Engine) => {
    await loadSlim(engine)
};

export function useParticlesConfig() {
    const particlesLoaded = useCallback(async (container?: any) => {
        console.log("Particles container loaded", container)
    }, []);

    const options = useMemo(
      () => ({
        fpsLimit: 120,
        particles: {
          links: {
            color: "#FFFFFF",
            distance: 120,
            enable: true,
            opacity: 0.3,
            width: 1,
          },
          number: { value: 120 },
          color: { value: "#FFFFFF" },
          shape: { type: "circle" },
          opacity: { value: 0.7 },
          size: { value: { min: 2, max: 5 } },
          move: {
            enable: true,
            speed: 1,
            outModes: { default: "bounce" as const },
          },
        },
        interactivity: {
          events: { 
              onHover: { enable: true, mode: "grab" }, 
              onClick: { enable: true, mode: "push" } 

          },
          modes: {
            push: {
              distance: 200,
              duration: 15,
            },
            grab: {
              distance: 100,
            },
          },
        },
        background: { color: "#000000" },
        detectRetina: true,
      }),
      [],
    );

    return { particlesLoaded, options };
}