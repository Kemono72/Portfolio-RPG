// File: src/components/XPSection.tsx

import Parallax from "./Parallax";
import { skills } from "../data/levels";
import { motion } from "framer-motion";

export default function XPSection() {
  return (
    <section id="xp" className="p-8">
      <h2 className="text-2xl mb-4">🧠 Skills & XP</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {skills.map((skill, index) => (
          <Parallax key={skill.name} offset={25}>
            <div className="bg-gray-900 p-4 rounded shadow-md hover:shadow-green-500/20 transition-all duration-300">
              <h3 className="text-xl">{skill.name}</h3>
              <p>Level: {skill.level}</p>
              <div className="bg-gray-700 h-2 mt-2 rounded overflow-hidden">
                <motion.div
                  className="bg-green-500 h-2 rounded"
                  animate={{ width: ["0%", "40%", "70%", `${skill.xp / 20}%`, "70%", "40%", "0%"] }}
                  transition={{
                    duration: 6 + index * 1.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
              </div>
            </div>
          </Parallax>
        ))}
      </div>
    </section>
  );
}
