// File: src/pages/index.tsx
import Chest from "../components/Chest"; // Import the Chest component
import HeroSection from "../components/HeroSection";
import XPSection from "../components/XPSection";
import QuestLog from "../components/QuestLog";
import Terminal from "../components/Terminal";

export default function Home() {
  return (
    <main className="bg-black text-green-400 font-mono relative">
      {/* Chest component appears first when the page loads */}
      <Chest />

      {/* Other sections */}
      <div style={{ marginTop: "400px" }}> {/* Adjust the margin to avoid overlap */}
        <HeroSection />
        <XPSection />
        <QuestLog />
        <Terminal />
      </div>
    </main>
  );
}
