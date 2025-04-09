// File: src/components/QuestLog.tsx

import { motion } from "framer-motion";
import Parallax from "./Parallax";
import { quests } from "../data/quests";

export default function QuestLog() {
  return (
    <section id="quests" className="p-8">
      <h2 className="text-2xl mb-4">📜 Quest Log</h2>
      <br></br>
      <div className="space-y-6">
        {quests.map((quest) => (
          <Parallax key={quest.title} offset={30}>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
              className="bg-gray-900 p-4 rounded border border-green-500 shadow-md hover:shadow-green-500/20 transition-all duration-300 glitch"  // Add "glitch" class
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
            </motion.div>
          </Parallax>
        ))}
      </div>
    </section>
  );
}
