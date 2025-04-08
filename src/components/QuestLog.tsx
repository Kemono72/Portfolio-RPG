// File: src/components/QuestLog.tsx

import Parallax from "./Parallax";
import { quests } from "../data/quests";

export default function QuestLog() {
  return (
    <section id="quests" className="p-8">
      <h2 className="text-2xl mb-4">📜 Quest Log</h2>
      <div className="space-y-6">
        {quests.map((quest) => (
          <Parallax key={quest.title} offset={30}>
            <div
              className="bg-gray-900 p-4 rounded border border-green-500 shadow-md hover:shadow-green-500/20 transition-all duration-300"
              data-quest={quest.title.toLowerCase()}
            >
              <h3 className="text-xl font-semibold">{quest.title}</h3>
              <p>{quest.description}</p>
              <p className="text-sm mt-2">XP: {quest.xp}</p>
              <a
                href={quest.link}
                target="_blank"
                rel="noopener noreferrer"
                className="underline text-green-300 hover:text-green-200"
              >
                View Project →
              </a>
            </div>
          </Parallax>
        ))}
      </div>
    </section>
  );
}
