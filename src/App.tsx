// import { useState, useMemo, useCallback } from "react";
import Hero from "./components/Hero";
import Particle from "./components/Particle.tsx"
import Stack from "./components/Stack.tsx"

function App() {
  return (
    <>
      <Particle />

      <main className="relative z-10">
        <Hero />
        <Stack />
      </main>
    </>
  );
}

export default App