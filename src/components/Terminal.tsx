// File: src/components/Terminal.tsx
import { useState } from "react";

export default function Terminal() {
  const [input, setInput] = useState("");
  const [log, setLog] = useState<string[]>([]);

  const handleCommand = (e: React.FormEvent) => {
    e.preventDefault();
    setLog((prev) => [...prev, `> ${input}`]);
    if (input === "help") setLog((prev) => [...prev, "Available: resume, projects, about"]);
    if (input === "resume") setLog((prev) => [...prev, "Opening resume.pdf..."]);
    setInput("");
  };

  return (
    <section className="p-8 bg-gray-950 mt-12">
      <h2 className="text-xl mb-2">🖥 Terminal</h2>
      <div className="bg-black p-4 text-green-400 font-mono h-60 overflow-y-auto border border-green-600">
        {log.map((entry, idx) => (
          <div key={idx}>{entry}</div>
        ))}
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
