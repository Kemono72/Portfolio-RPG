// File: src/components/QuestLog.tsx
import { quests } from "../data/quests";

export default function QuestLog() {
  return (
    <section className="p-8">
      <h2 className="text-2xl mb-4">📜 Quest Log</h2>
      <div className="space-y-6">
        {quests.map((quest) => (
          <div
            key={quest.title}
            className="bg-gray-900 p-4 rounded border border-green-500"
            data-quest={quest.title.toLowerCase()} // 👈 this enables terminal scroll targeting
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
        ))}
      </div>
    </section>
  );
}
