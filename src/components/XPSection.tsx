// File: src/components/XPSection.tsx
import { skills } from "../data/levels";

export default function XPSection() {
  return (
    <section className="p-8">
      <h2 className="text-2xl mb-4">🧠 Skills & XP</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {skills.map((skill, index) => (
          <div key={skill.name} className="bg-gray-900 p-4 rounded">
            <h3 className="text-xl">{skill.name}</h3>
            <p>Level: {skill.level}</p>
            <div className="bg-gray-700 h-2 mt-2 rounded overflow-hidden">
              <div
                className="bg-green-500 h-2 rounded"
                style={{ width: `${skill.xp / 20}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
