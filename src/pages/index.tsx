
// File: src/pages/index.tsx
import HeroSection from "../components/HeroSection";
import XPSection from "../components/XPSection";
import QuestLog from "../components/QuestLog";
import Terminal from "../components/Terminal";

export default function Home() {
  return (
    <main className="bg-black text-green-400 font-mono">
      <HeroSection />
      <XPSection />
      <QuestLog />
      <Terminal />
    </main>
  );
}