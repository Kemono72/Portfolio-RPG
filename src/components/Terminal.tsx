import { useState } from "react";
import { Typewriter } from "react-simple-typewriter";

let lastPlayed = 0; // persists across renders to prevent audio spam

export default function Terminal() {
  const [input, setInput] = useState("");
  const [log, setLog] = useState<string[]>([]);
  const [typingLine, setTypingLine] = useState("");

  const playTypeSound = () => {
    const now = Date.now();
    if (now - lastPlayed < 75) return; // limit to 1 sound per 75ms
    lastPlayed = now;

    const audio = new Audio("/sounds/typewriter.mp3");
    audio.volume = 0.4;
    audio.play();
  };

  const handleCommand = (e: React.FormEvent) => {
    e.preventDefault();
    const command = input.trim().toLowerCase();

    setLog((prev) => [...prev, `> ${command}`]);
    setTypingLine(""); // Clear before new animation

    switch (command) {
      case "help":
        setTypingLine("Available commands: resume, explore zillow, about, clear");
        break;
      case "resume":
        setTypingLine("📄 Opening resume... (Just imagine it 😎)");
        break;
      case "explore":
      case "explore zillow":
        scrollToQuest("zillow");
        break;
      case "about":
        setTypingLine(
          "Aryan Raj Joshi: C++, Swift, JS. 15+ projects. FAANG-ready. Built for creativity and impact."
        );
        break;
      case "clear":
        setLog([]);
        return;
      default:
        setTypingLine(`Unknown command: ${command}`);
    }

    setInput("");
  };

  const scrollToQuest = (keyword: string) => {
    const card = document.querySelector(`[data-quest*="${keyword}"]`);
    if (card) {
      card.scrollIntoView({ behavior: "smooth", block: "center" });
      setTypingLine(`🚀 Jumping to "${keyword}" project...`);
    } else {
      setTypingLine(`❌ No project found with keyword "${keyword}"`);
    }
  };

  return (
    <section className="p-8 bg-gray-950 mt-12">
      <h2 className="text-xl mb-2">🖥 Terminal</h2>
      <div className="bg-black p-4 text-green-400 font-mono h-60 overflow-y-auto border border-green-600">
        {log.map((entry, idx) => (
          <div key={idx}>{entry}</div>
        ))}
        {typingLine && (
          <div>
            <Typewriter
              words={[typingLine]}
              typeSpeed={75}
              cursor
              cursorStyle="_"
              onType={playTypeSound}
              onLoopDone={() => {
                setLog((prev) => [...prev, typingLine]);
                setTypingLine(""); // ✅ this clears the typing line to stop looping
              }}
            />
          </div>
        )}
        <form onSubmit={handleCommand} className="flex mt-2">
          <span className="pr-2">&gt;</span>
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="bg-transparent outline-none flex-1"
            autoFocus
          />
        </form>
      </div>
    </section>
  );
}
