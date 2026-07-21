import Particles, { ParticlesProvider } from "@tsparticles/react";
import { particlesInit, useParticlesConfig } from "./particle";

function Particle() {
  const { particlesLoaded, options } = useParticlesConfig();

  return (
    <>
      <div className="fixed inset-0 -z-10">
        <ParticlesProvider init={particlesInit}>
          <Particles
            id="tsparticles"
            particlesLoaded={particlesLoaded}
            options={options}
          />
        </ParticlesProvider>
      </div>
    </>
  );
}

export default Particle