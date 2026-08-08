// import { useState, useMemo, useCallback } from "react";
import Experience from "./components/Experience.tsx";
import Hero from "./components/Hero";
import Particle from "./components/Particle.tsx"
import Projects from "./components/Projects.tsx";
import Stack from "./components/Stack.tsx"

function App() {
  return (
    <>
      <Particle />

      <main className="relative z-10">
        <Hero />
        <Stack />
        <Experience />
        <Projects />
      </main>
    </>
  );
}

export default App