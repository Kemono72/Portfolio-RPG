// File: src/pages/index.tsx
import HeroSection from "../components/HeroSection";
import XPSection from "../components/XPSection";
import QuestLog from "../components/QuestLog";
import Terminal from "../components/Terminal";
import Chest from "../components/Chest"; // Import the Chest component

export default function Home() {
  return (
    <main className="bg-black text-green-400 font-mono">
      {/* Chest component appears first when the page loads */}
      <Chest />
      
      {/* Other sections */}
      <HeroSection />
      <XPSection />
      <QuestLog />
      <Terminal />
    </main>
  );
}
