import Particles, { ParticlesProvider } from "@tsparticles/react"
import { particlesInit, useParticlesConfig } from "../particle"

function Particle() {
    const { particlesLoaded, options } = useParticlesConfig()

    return (
        <>
            <ParticlesProvider init={particlesInit}>
                <Particles id="tsparticles" particlesLoaded={particlesLoaded} options={options} />
            </ParticlesProvider>
        </>
    )
}


export { Particle }